/**
 * Explanations Service
 *
 * Manages question explanations in Firestore.
 * Provides read access for students and write access for admins.
 *
 * Features:
 * - Fetch explanations by question ID
 * - Batch fetch for multiple questions
 * - Check which questions have/need explanations
 * - Admin functions for creating/updating explanations
 */

import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  doc,
  Timestamp,
  writeBatch,
} from 'firebase/firestore';
import { db } from '@/firebase/config';
import type { QuestionExplanation } from '../types/firebase';

// ============================================================================
// CONSTANTS
// ============================================================================

const COLLECTION_NAME = 'questionExplanations';

// Cache TTL in milliseconds (5 minutes)
const CACHE_TTL = 5 * 60 * 1000;

// ============================================================================
// CACHE
// ============================================================================

interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

const explanationCache = new Map<string, CacheEntry<QuestionExplanation | null>>();

function isCacheValid<T>(entry: CacheEntry<T> | null | undefined): entry is CacheEntry<T> {
  if (!entry) return false;
  return Date.now() - entry.timestamp < CACHE_TTL;
}

function setCache<T>(data: T): CacheEntry<T> {
  return { data, timestamp: Date.now() };
}

/**
 * Clear explanation cache
 */
export function clearExplanationCache(): void {
  explanationCache.clear();
  console.log('[ExplanationsService] Cache cleared');
}

// ============================================================================
// READ OPERATIONS
// ============================================================================

/**
 * Get explanation for a single question
 *
 * @param questionId - Firestore document ID of the question
 * @returns Explanation or null if not found
 */
export async function getExplanation(questionId: string): Promise<QuestionExplanation | null> {
  // Check cache first
  const cached = explanationCache.get(questionId);
  if (isCacheValid(cached)) {
    return cached.data;
  }

  if (!db) {
    console.error('[ExplanationsService] Firestore not initialized');
    return null;
  }

  try {
    const docRef = doc(db, COLLECTION_NAME, questionId);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      // Cache the null result to avoid repeated queries
      explanationCache.set(questionId, setCache(null));
      return null;
    }

    const explanation = { ...docSnap.data(), questionId } as QuestionExplanation;
    explanationCache.set(questionId, setCache(explanation));

    return explanation;
  } catch (error) {
    console.error(`[ExplanationsService] Error fetching explanation for ${questionId}:`, error);
    return null;
  }
}

/**
 * Get explanations for multiple questions
 * More efficient than calling getExplanation multiple times
 *
 * @param questionIds - Array of question document IDs
 * @returns Map of questionId to explanation (null if not found)
 */
export async function getExplanationsForQuestions(
  questionIds: string[]
): Promise<Map<string, QuestionExplanation | null>> {
  const results = new Map<string, QuestionExplanation | null>();

  if (!db) {
    console.error('[ExplanationsService] Firestore not initialized');
    questionIds.forEach(id => results.set(id, null));
    return results;
  }

  // Check cache for each ID
  const uncachedIds: string[] = [];
  for (const id of questionIds) {
    const cached = explanationCache.get(id);
    if (isCacheValid(cached)) {
      results.set(id, cached.data);
    } else {
      uncachedIds.push(id);
    }
  }

  // If all were cached, return early
  if (uncachedIds.length === 0) {
    return results;
  }

  // Fetch uncached explanations
  // Note: Firestore doesn't have a direct "get multiple docs by ID" for subcollections
  // So we fetch each one individually (could be optimized with batched reads in future)
  try {
    await Promise.all(
      uncachedIds.map(async (id) => {
        const docRef = doc(db, COLLECTION_NAME, id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const explanation = { ...docSnap.data(), questionId: id } as QuestionExplanation;
          explanationCache.set(id, setCache(explanation));
          results.set(id, explanation);
        } else {
          explanationCache.set(id, setCache(null));
          results.set(id, null);
        }
      })
    );
  } catch (error) {
    console.error('[ExplanationsService] Error batch fetching explanations:', error);
    // Set null for any failed fetches
    uncachedIds.forEach(id => {
      if (!results.has(id)) {
        results.set(id, null);
      }
    });
  }

  return results;
}

/**
 * Check if a question has an explanation
 */
export async function hasExplanation(questionId: string): Promise<boolean> {
  const explanation = await getExplanation(questionId);
  return explanation !== null;
}

/**
 * Get all questions that need review
 */
export async function getQuestionsNeedingReview(): Promise<QuestionExplanation[]> {
  if (!db) {
    console.error('[ExplanationsService] Firestore not initialized');
    return [];
  }

  try {
    const explanationsRef = collection(db, COLLECTION_NAME);
    const q = query(explanationsRef, where('needsReview', '==', true));
    const snapshot = await getDocs(q);

    const explanations: QuestionExplanation[] = [];
    snapshot.forEach((docSnap) => {
      explanations.push({
        ...docSnap.data(),
        questionId: docSnap.id,
      } as QuestionExplanation);
    });

    return explanations;
  } catch (error) {
    console.error('[ExplanationsService] Error fetching questions needing review:', error);
    return [];
  }
}

// ============================================================================
// WRITE OPERATIONS (Admin only - requires super-admin role)
// ============================================================================

/**
 * Create or update an explanation for a question
 *
 * @param questionId - Firestore document ID of the question
 * @param explanation - Explanation data (without questionId and generatedAt)
 * @param userId - ID of the user creating/updating the explanation
 */
export async function saveExplanation(
  questionId: string,
  explanation: Omit<QuestionExplanation, 'questionId' | 'generatedAt'>,
  _userId: string
): Promise<boolean> {
  if (!db) {
    console.error('[ExplanationsService] Firestore not initialized');
    return false;
  }

  try {
    const docRef = doc(db, COLLECTION_NAME, questionId);

    const fullExplanation: QuestionExplanation = {
      ...explanation,
      questionId,
      generatedAt: Timestamp.now(),
    };

    await setDoc(docRef, fullExplanation);

    // Update cache
    explanationCache.set(questionId, setCache(fullExplanation));

    console.log(`[ExplanationsService] Saved explanation for ${questionId}`);
    return true;
  } catch (error) {
    console.error(`[ExplanationsService] Error saving explanation for ${questionId}:`, error);
    return false;
  }
}

/**
 * Mark an explanation as reviewed
 */
export async function markAsReviewed(questionId: string, _userId: string): Promise<boolean> {
  if (!db) {
    console.error('[ExplanationsService] Firestore not initialized');
    return false;
  }

  try {
    const docRef = doc(db, COLLECTION_NAME, questionId);
    await updateDoc(docRef, {
      needsReview: false,
      reviewReason: null,
    });

    // Invalidate cache
    explanationCache.delete(questionId);

    return true;
  } catch (error) {
    console.error(`[ExplanationsService] Error marking ${questionId} as reviewed:`, error);
    return false;
  }
}

/**
 * Flag an explanation for review
 */
export async function flagForReview(
  questionId: string,
  reason: string,
  _userId: string
): Promise<boolean> {
  if (!db) {
    console.error('[ExplanationsService] Firestore not initialized');
    return false;
  }

  try {
    const docRef = doc(db, COLLECTION_NAME, questionId);
    await updateDoc(docRef, {
      needsReview: true,
      reviewReason: reason,
    });

    // Invalidate cache
    explanationCache.delete(questionId);

    return true;
  } catch (error) {
    console.error(`[ExplanationsService] Error flagging ${questionId} for review:`, error);
    return false;
  }
}

/**
 * Delete an explanation
 */
export async function deleteExplanation(questionId: string): Promise<boolean> {
  if (!db) {
    console.error('[ExplanationsService] Firestore not initialized');
    return false;
  }

  try {
    const docRef = doc(db, COLLECTION_NAME, questionId);
    await deleteDoc(docRef);

    // Remove from cache
    explanationCache.delete(questionId);

    return true;
  } catch (error) {
    console.error(`[ExplanationsService] Error deleting explanation for ${questionId}:`, error);
    return false;
  }
}

/**
 * Batch save multiple explanations
 */
export async function batchSaveExplanations(
  explanations: Array<{
    questionId: string;
    explanation: Omit<QuestionExplanation, 'questionId' | 'generatedAt'>;
  }>,
  _userId: string
): Promise<{ success: number; failed: number }> {
  if (!db) {
    console.error('[ExplanationsService] Firestore not initialized');
    return { success: 0, failed: explanations.length };
  }

  const batch = writeBatch(db);
  const now = Timestamp.now();

  try {
    for (const item of explanations) {
      const docRef = doc(db, COLLECTION_NAME, item.questionId);
      const fullExplanation: QuestionExplanation = {
        ...item.explanation,
        questionId: item.questionId,
        generatedAt: now,
      };
      batch.set(docRef, fullExplanation);
    }

    await batch.commit();

    // Clear cache for all affected questions
    explanations.forEach(item => explanationCache.delete(item.questionId));

    console.log(`[ExplanationsService] Batch saved ${explanations.length} explanations`);
    return { success: explanations.length, failed: 0 };
  } catch (error) {
    console.error('[ExplanationsService] Error batch saving explanations:', error);
    return { success: 0, failed: explanations.length };
  }
}

// ============================================================================
// STATISTICS
// ============================================================================

/**
 * Get count of questions with explanations
 */
export async function getExplanationCount(): Promise<number> {
  if (!db) {
    return 0;
  }

  try {
    const explanationsRef = collection(db, COLLECTION_NAME);
    const snapshot = await getDocs(explanationsRef);
    return snapshot.size;
  } catch (error) {
    console.error('[ExplanationsService] Error counting explanations:', error);
    return 0;
  }
}

/**
 * Get count of explanations needing review
 */
export async function getReviewNeededCount(): Promise<number> {
  if (!db) {
    return 0;
  }

  try {
    const explanationsRef = collection(db, COLLECTION_NAME);
    const q = query(explanationsRef, where('needsReview', '==', true));
    const snapshot = await getDocs(q);
    return snapshot.size;
  } catch (error) {
    console.error('[ExplanationsService] Error counting review needed:', error);
    return 0;
  }
}
