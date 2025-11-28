/**
 * Bookmark Service
 *
 * Handles personal question bookmarking for later review.
 * Each user has their own bookmarks stored in Firestore.
 */

import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  Timestamp,
} from 'firebase/firestore';
import { db } from '@/firebase/config';

const BOOKMARKS_COLLECTION = 'userBookmarks';

export interface UserBookmarks {
  userId: string;
  questionIds: string[];
  updatedAt: Timestamp;
}

/**
 * Toggle bookmark for a question
 * If already bookmarked, removes it. If not, adds it.
 * Returns the new bookmark state.
 */
export async function toggleBookmark(
  userId: string,
  questionId: string
): Promise<{ success: boolean; isBookmarked: boolean; error?: string }> {
  if (!db) {
    return { success: false, isBookmarked: false, error: 'Database not initialized' };
  }

  try {
    const bookmarkRef = doc(db, BOOKMARKS_COLLECTION, userId);
    const bookmarkSnap = await getDoc(bookmarkRef);

    if (bookmarkSnap.exists()) {
      const data = bookmarkSnap.data() as UserBookmarks;
      const isCurrentlyBookmarked = data.questionIds.includes(questionId);

      if (isCurrentlyBookmarked) {
        // Remove bookmark
        await updateDoc(bookmarkRef, {
          questionIds: arrayRemove(questionId),
          updatedAt: Timestamp.now(),
        });
        return { success: true, isBookmarked: false };
      } else {
        // Add bookmark
        await updateDoc(bookmarkRef, {
          questionIds: arrayUnion(questionId),
          updatedAt: Timestamp.now(),
        });
        return { success: true, isBookmarked: true };
      }
    } else {
      // Create new bookmarks document with this question
      const newBookmarks: UserBookmarks = {
        userId,
        questionIds: [questionId],
        updatedAt: Timestamp.now(),
      };
      await setDoc(bookmarkRef, newBookmarks);
      return { success: true, isBookmarked: true };
    }
  } catch (error) {
    console.error('[BookmarkService] Error toggling bookmark:', error);
    return { success: false, isBookmarked: false, error: 'Failed to toggle bookmark' };
  }
}

/**
 * Check if a question is bookmarked by the user
 */
export async function isBookmarked(userId: string, questionId: string): Promise<boolean> {
  if (!db) return false;

  try {
    const bookmarkRef = doc(db, BOOKMARKS_COLLECTION, userId);
    const bookmarkSnap = await getDoc(bookmarkRef);

    if (!bookmarkSnap.exists()) return false;

    const data = bookmarkSnap.data() as UserBookmarks;
    return data.questionIds.includes(questionId);
  } catch (error) {
    console.error('[BookmarkService] Error checking bookmark:', error);
    return false;
  }
}

/**
 * Get all bookmarked question IDs for a user
 */
export async function getBookmarkedQuestionIds(userId: string): Promise<string[]> {
  if (!db) return [];

  try {
    const bookmarkRef = doc(db, BOOKMARKS_COLLECTION, userId);
    const bookmarkSnap = await getDoc(bookmarkRef);

    if (!bookmarkSnap.exists()) return [];

    const data = bookmarkSnap.data() as UserBookmarks;
    return data.questionIds || [];
  } catch (error) {
    console.error('[BookmarkService] Error getting bookmarks:', error);
    return [];
  }
}

/**
 * Get bookmark count for a user
 */
export async function getBookmarkCount(userId: string): Promise<number> {
  const questionIds = await getBookmarkedQuestionIds(userId);
  return questionIds.length;
}

/**
 * Check multiple questions for bookmark status (batch check)
 * Returns a Set of bookmarked question IDs
 */
export async function getBookmarkStatusBatch(
  userId: string,
  questionIds: string[]
): Promise<Set<string>> {
  if (!db || questionIds.length === 0) return new Set();

  try {
    const bookmarkRef = doc(db, BOOKMARKS_COLLECTION, userId);
    const bookmarkSnap = await getDoc(bookmarkRef);

    if (!bookmarkSnap.exists()) return new Set();

    const data = bookmarkSnap.data() as UserBookmarks;
    const bookmarkedSet = new Set(data.questionIds);

    // Return intersection
    return new Set(questionIds.filter(id => bookmarkedSet.has(id)));
  } catch (error) {
    console.error('[BookmarkService] Error getting batch bookmark status:', error);
    return new Set();
  }
}

/**
 * Remove a bookmark (explicit remove, not toggle)
 */
export async function removeBookmark(
  userId: string,
  questionId: string
): Promise<{ success: boolean; error?: string }> {
  if (!db) {
    return { success: false, error: 'Database not initialized' };
  }

  try {
    const bookmarkRef = doc(db, BOOKMARKS_COLLECTION, userId);

    await updateDoc(bookmarkRef, {
      questionIds: arrayRemove(questionId),
      updatedAt: Timestamp.now(),
    });

    return { success: true };
  } catch (error) {
    console.error('[BookmarkService] Error removing bookmark:', error);
    return { success: false, error: 'Failed to remove bookmark' };
  }
}

/**
 * Clear all bookmarks for a user
 */
export async function clearAllBookmarks(
  userId: string
): Promise<{ success: boolean; error?: string }> {
  if (!db) {
    return { success: false, error: 'Database not initialized' };
  }

  try {
    const bookmarkRef = doc(db, BOOKMARKS_COLLECTION, userId);

    await setDoc(bookmarkRef, {
      userId,
      questionIds: [],
      updatedAt: Timestamp.now(),
    });

    return { success: true };
  } catch (error) {
    console.error('[BookmarkService] Error clearing bookmarks:', error);
    return { success: false, error: 'Failed to clear bookmarks' };
  }
}
