import { storage } from '@/firebase/config';
import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage';
import type { CardImage } from '../types/flashcard';

/**
 * Validates an image file before upload
 * @param file - The file to validate
 * @returns Validation result with error message if invalid
 */
export function validateImage(file: File): { valid: boolean; error?: string } {
  // Check file type
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
  if (!allowedTypes.includes(file.type)) {
    return {
      valid: false,
      error: 'Invalid file type. Allowed: JPEG, PNG, GIF, WebP'
    };
  }

  // Check file size (max 10MB - will be compressed before upload)
  const maxSize = 10 * 1024 * 1024; // 10MB in bytes
  if (file.size > maxSize) {
    return {
      valid: false,
      error: 'File too large. Maximum size: 10MB'
    };
  }

  return { valid: true };
}

/**
 * Gets the dimensions of an image file
 * @param file - The image file
 * @returns Promise resolving to width and height
 */
export function getImageDimensions(file: File): Promise<{ width: number; height: number }> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);

    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve({
        width: img.width,
        height: img.height
      });
    };

    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('Failed to load image'));
    };

    img.src = url;
  });
}

/**
 * Compresses an image file before upload
 * @param file - The image file to compress
 * @param maxWidth - Maximum width (default: 1200px)
 * @param quality - JPEG quality 0-1 (default: 0.8)
 * @returns Promise resolving to compressed File
 */
export async function compressImage(
  file: File,
  maxWidth: number = 1200,
  quality: number = 0.8
): Promise<File> {
  // Skip compression for GIFs to preserve animation
  if (file.type === 'image/gif') {
    return file;
  }

  return new Promise((resolve, reject) => {
    const img = new Image();
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      reject(new Error('Failed to get canvas context'));
      return;
    }

    const url = URL.createObjectURL(file);

    img.onload = () => {
      URL.revokeObjectURL(url);

      // Calculate new dimensions
      let { width, height } = img;
      if (width > maxWidth) {
        height = (height * maxWidth) / width;
        width = maxWidth;
      }

      // Set canvas dimensions
      canvas.width = width;
      canvas.height = height;

      // Draw image on canvas
      ctx.drawImage(img, 0, 0, width, height);

      // Convert to blob
      canvas.toBlob(
        (blob) => {
          if (!blob) {
            reject(new Error('Failed to compress image'));
            return;
          }

          // Create new File from blob
          const compressedFile = new File(
            [blob],
            file.name.replace(/\.[^/.]+$/, '.jpg'), // Change extension to .jpg
            {
              type: 'image/jpeg',
              lastModified: Date.now()
            }
          );

          resolve(compressedFile);
        },
        'image/jpeg',
        quality
      );
    };

    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('Failed to load image for compression'));
    };

    img.src = url;
  });
}

/**
 * Uploads a card image to Firebase Storage
 * @param file - The image file to upload
 * @param cardId - The ID of the card this image belongs to
 * @param onProgress - Optional callback for upload progress (0-100)
 * @returns Promise resolving to CardImage object
 */
export async function uploadCardImage(
  file: File,
  cardId: string,
  onProgress?: (progress: number) => void
): Promise<CardImage> {
  // Check Firebase Storage initialization first
  if (!storage) {
    console.error('Firebase Storage is not initialized. Check your environment variables.');
    throw new Error('Image upload unavailable. Please check Firebase configuration.');
  }

  // Validate image
  const validation = validateImage(file);
  if (!validation.valid) {
    throw new Error(validation.error);
  }

  // Compress image before upload (resizes to max 1200px width)
  let compressedFile: File;
  try {
    compressedFile = await compressImage(file);
  } catch (compressionError) {
    console.error('Image compression failed:', compressionError);
    throw new Error('Failed to process image. Please try a different image.');
  }

  // Generate unique ID for the image
  const uniqueId = `${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
  const filename = compressedFile.name.replace(/\s+/g, '_'); // Replace spaces with underscores
  const storagePath = `flashcards/images/${cardId}/${uniqueId}_${filename}`;

  // Create storage reference
  const storageRef = ref(storage, storagePath);

  // Upload with progress tracking
  return new Promise((resolve, reject) => {
    const uploadTask = uploadBytesResumable(storageRef, compressedFile);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Calculate progress percentage
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        if (onProgress) {
          onProgress(Math.round(progress));
        }
      },
      (error) => {
        // Handle upload errors
        console.error('Upload error:', error);
        reject(new Error(`Failed to upload image: ${error.message}`));
      },
      async () => {
        // Upload completed successfully
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

          // Return CardImage object
          resolve({
            id: uniqueId,
            url: downloadURL,
            alt: file.name // Use original filename as alt text
          });
        } catch (error) {
          reject(new Error('Failed to get download URL'));
        }
      }
    );
  });
}

/**
 * Deletes a card image from Firebase Storage
 * @param imageUrl - The full URL of the image to delete
 */
export async function deleteCardImage(imageUrl: string): Promise<void> {
  if (!storage) {
    console.error('Firebase Storage is not initialized');
    throw new Error('Cannot delete image: Storage not configured');
  }

  try {
    // Extract storage path from URL
    // Firebase Storage URLs format: https://firebasestorage.googleapis.com/v0/b/{bucket}/o/{path}?alt=media&token={token}
    const urlPattern = /\/o\/(.+?)\?/;
    const match = imageUrl.match(urlPattern);

    if (!match || !match[1]) {
      throw new Error('Invalid image URL format');
    }

    // Decode the path (Firebase encodes special characters)
    const storagePath = decodeURIComponent(match[1]);

    // Create reference and delete
    const imageRef = ref(storage, storagePath);
    await deleteObject(imageRef);
  } catch (error) {
    console.error('Delete image error:', error);
    throw new Error('Failed to delete image from storage');
  }
}
