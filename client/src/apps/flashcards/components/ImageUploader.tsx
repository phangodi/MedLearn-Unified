import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { Upload, Loader2, Image as ImageIcon } from 'lucide-react'
import { uploadCardImage, validateImage } from '../services/storageService'

type ImageSize = 'small' | 'medium' | 'large' | 'full'

const IMAGE_SIZES: { value: ImageSize; label: string; width: number | null }[] = [
  { value: 'small', label: 'Small', width: 200 },
  { value: 'medium', label: 'Medium', width: 400 },
  { value: 'large', label: 'Large', width: 600 },
  { value: 'full', label: 'Full Width', width: null },
]

interface ImageUploaderProps {
  cardId: string // Temporary card ID for organizing uploaded images
  onUploadComplete: (url: string, markdown: string) => void
  onError?: (error: string) => void
}

export function ImageUploader({ cardId, onUploadComplete, onError }: ImageUploaderProps) {
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [preview, setPreview] = useState<string | null>(null)
  const [selectedSize, setSelectedSize] = useState<ImageSize>('medium')

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) return

    const file = acceptedFiles[0]

    // Validate image
    const validation = validateImage(file)
    if (!validation.valid) {
      onError?.(validation.error || 'Invalid image file')
      return
    }

    try {
      setUploading(true)
      setProgress(0)

      // Create preview
      const previewUrl = URL.createObjectURL(file)
      setPreview(previewUrl)

      // Upload to Firebase Storage (includes compression)
      const cardImage = await uploadCardImage(file, cardId, (uploadProgress) => {
        setProgress(uploadProgress)
      })

      // Generate markdown or HTML based on size selection
      const imageName = file.name.replace(/\.[^/.]+$/, '') // Remove extension
      const sizeConfig = IMAGE_SIZES.find(s => s.value === selectedSize)

      let markdown: string
      if (sizeConfig?.width) {
        // Use HTML img tag with width for sized images
        markdown = `<img src="${cardImage.url}" alt="${imageName}" width="${sizeConfig.width}" />`
      } else {
        // Full width - use standard markdown
        markdown = `![${imageName}](${cardImage.url})`
      }

      setProgress(100)
      onUploadComplete(cardImage.url, markdown)

      // Cleanup
      setTimeout(() => {
        setPreview(null)
        setProgress(0)
        setUploading(false)
      }, 1000)
    } catch (error) {
      console.error('Image upload error:', error)
      onError?.(error instanceof Error ? error.message : 'Failed to upload image')
      setPreview(null)
      setProgress(0)
      setUploading(false)
    }
  }, [cardId, onUploadComplete, onError, selectedSize])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png'],
      'image/gif': ['.gif'],
      'image/webp': ['.webp']
    },
    maxFiles: 1,
    maxSize: 10 * 1024 * 1024, // 10MB
    disabled: uploading
  })

  const cancelUpload = () => {
    setPreview(null)
    setProgress(0)
    setUploading(false)
  }

  return (
    <div className="space-y-3">
      {/* Size selector */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-xs text-muted-foreground font-medium">Image size:</span>
        <div className="flex gap-1">
          {IMAGE_SIZES.map((size) => (
            <button
              key={size.value}
              onClick={() => setSelectedSize(size.value)}
              className={`
                px-2.5 py-1 text-xs rounded-md transition-all duration-200
                ${selectedSize === size.value
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }
              `}
              type="button"
            >
              {size.label}
              {size.width && <span className="opacity-60 ml-1">({size.width}px)</span>}
            </button>
          ))}
        </div>
      </div>

      {/* Dropzone */}
      <div
        {...getRootProps()}
        className={`
          relative border-2 border-dashed rounded-lg p-6 text-center cursor-pointer
          transition-all duration-200
          ${isDragActive
            ? 'border-primary bg-primary/5 scale-[1.02]'
            : uploading
            ? 'border-border bg-muted/50 cursor-not-allowed'
            : 'border-border hover:border-primary/50 hover:bg-muted/30'
          }
        `}
      >
        <input {...getInputProps()} />

        {uploading ? (
          <div className="space-y-3">
            {preview && (
              <div className="relative w-32 h-32 mx-auto rounded-lg overflow-hidden">
                <img
                  src={preview}
                  alt="Upload preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Loader2 className="w-8 h-8 text-white animate-spin" />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Uploading... {Math.round(progress)}%</span>
              </div>

              {/* Progress bar */}
              <div className="w-full max-w-xs mx-auto h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-300 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation()
                  cancelUpload()
                }}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="w-16 h-16 mx-auto rounded-full bg-muted flex items-center justify-center">
              {isDragActive ? (
                <Upload className="w-8 h-8 text-primary" />
              ) : (
                <ImageIcon className="w-8 h-8 text-muted-foreground" />
              )}
            </div>

            <div className="space-y-1">
              {isDragActive ? (
                <p className="text-sm font-medium text-primary">
                  Drop image here
                </p>
              ) : (
                <>
                  <p className="text-sm font-medium text-foreground">
                    Drag & drop an image, or click to select
                  </p>
                  <p className="text-xs text-muted-foreground">
                    JPEG, PNG, GIF, WebP (max 10MB) - auto-resized for web
                  </p>
                </>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Tips */}
      <div className="text-xs text-muted-foreground space-y-1">
        <p className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
          <span className="text-foreground/80 font-medium">Select size above to control how large the image appears</span>
        </p>
        <p className="flex items-center gap-1.5">
          <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
          Images are automatically compressed for optimal performance
        </p>
      </div>
    </div>
  )
}
