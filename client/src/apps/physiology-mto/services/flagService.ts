/**
 * Flag Service
 *
 * Handles question flagging functionality.
 * Users can flag questions for issues like wrong topic, incorrect answer, etc.
 */

import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  Timestamp,
  arrayUnion,
  increment,
} from 'firebase/firestore';
import { db } from '@/firebase/config';
import type { QuestionFlag } from '../types/firebase';

const FLAGS_COLLECTION = 'questionFlags';

export type FlagReason = 'wrongTopic' | 'incorrectAnswer' | 'unclearQuestion' | 'other';

/**
 * Flag a question
 * Creates a new flag document or updates existing one
 */
export async function flagQuestion(
  questionId: string,
  userId: string,
  reason: FlagReason
): Promise<{ success: boolean; error?: string; alreadyFlagged?: boolean }> {
  if (!db) {
    return { success: false, error: 'Database not initialized' };
  }

  try {
    const flagRef = doc(db, FLAGS_COLLECTION, questionId);
    const flagSnap = await getDoc(flagRef);

    if (flagSnap.exists()) {
      const flagData = flagSnap.data() as QuestionFlag;

      // Check if user already flagged this question
      if (flagData.flaggedBy.includes(userId)) {
        return { success: false, error: 'You have already flagged this question', alreadyFlagged: true };
      }

      // Update existing flag
      await updateDoc(flagRef, {
        flagCount: increment(1),
        flaggedBy: arrayUnion(userId),
        [`flagReasons.${reason}`]: increment(1),
      });
    } else {
      // Create new flag
      const newFlag: QuestionFlag = {
        questionId,
        flagCount: 1,
        flaggedBy: [userId],
        flagReasons: {
          wrongTopic: reason === 'wrongTopic' ? 1 : 0,
          incorrectAnswer: reason === 'incorrectAnswer' ? 1 : 0,
          unclearQuestion: reason === 'unclearQuestion' ? 1 : 0,
          other: reason === 'other' ? 1 : 0,
        },
        resolved: false,
      };

      await setDoc(flagRef, newFlag);
    }

    return { success: true };
  } catch (error) {
    console.error('[FlagService] Error flagging question:', error);
    return { success: false, error: 'Failed to flag question' };
  }
}

/**
 * Check if a user has flagged a question
 */
export async function hasUserFlagged(questionId: string, userId: string): Promise<boolean> {
  if (!db) return false;

  try {
    const flagRef = doc(db, FLAGS_COLLECTION, questionId);
    const flagSnap = await getDoc(flagRef);

    if (!flagSnap.exists()) return false;

    const flagData = flagSnap.data() as QuestionFlag;
    return flagData.flaggedBy.includes(userId);
  } catch (error) {
    console.error('[FlagService] Error checking flag status:', error);
    return false;
  }
}

/**
 * Get flag info for a question
 */
export async function getFlagInfo(questionId: string): Promise<QuestionFlag | null> {
  if (!db) return null;

  try {
    const flagRef = doc(db, FLAGS_COLLECTION, questionId);
    const flagSnap = await getDoc(flagRef);

    if (!flagSnap.exists()) return null;

    return flagSnap.data() as QuestionFlag;
  } catch (error) {
    console.error('[FlagService] Error fetching flag info:', error);
    return null;
  }
}

/**
 * Get all flagged questions (for admin panel)
 */
export async function getAllFlags(): Promise<(QuestionFlag & { id: string })[]> {
  if (!db) return [];

  try {
    const flagsRef = collection(db, FLAGS_COLLECTION);
    const q = query(flagsRef, where('resolved', '==', false));
    const snapshot = await getDocs(q);

    const flags: (QuestionFlag & { id: string })[] = [];
    snapshot.forEach((docSnap) => {
      flags.push({
        id: docSnap.id,
        ...(docSnap.data() as QuestionFlag),
      });
    });

    // Sort by flag count descending
    flags.sort((a, b) => b.flagCount - a.flagCount);

    return flags;
  } catch (error) {
    console.error('[FlagService] Error fetching all flags:', error);
    return [];
  }
}

/**
 * Get all flags including resolved (for admin panel)
 */
export async function getAllFlagsIncludingResolved(): Promise<(QuestionFlag & { id: string })[]> {
  if (!db) return [];

  try {
    const flagsRef = collection(db, FLAGS_COLLECTION);
    const snapshot = await getDocs(flagsRef);

    const flags: (QuestionFlag & { id: string })[] = [];
    snapshot.forEach((docSnap) => {
      flags.push({
        id: docSnap.id,
        ...(docSnap.data() as QuestionFlag),
      });
    });

    // Sort by flag count descending
    flags.sort((a, b) => b.flagCount - a.flagCount);

    return flags;
  } catch (error) {
    console.error('[FlagService] Error fetching all flags:', error);
    return [];
  }
}

/**
 * Resolve a flag (admin only)
 */
export async function resolveFlag(
  questionId: string,
  userId: string
): Promise<{ success: boolean; error?: string }> {
  if (!db) {
    return { success: false, error: 'Database not initialized' };
  }

  try {
    const flagRef = doc(db, FLAGS_COLLECTION, questionId);

    await updateDoc(flagRef, {
      resolved: true,
      resolvedAt: Timestamp.now(),
      resolvedBy: userId,
    });

    return { success: true };
  } catch (error) {
    console.error('[FlagService] Error resolving flag:', error);
    return { success: false, error: 'Failed to resolve flag' };
  }
}

/**
 * Unresolve a flag (admin only)
 */
export async function unresolveFlag(
  questionId: string
): Promise<{ success: boolean; error?: string }> {
  if (!db) {
    return { success: false, error: 'Database not initialized' };
  }

  try {
    const flagRef = doc(db, FLAGS_COLLECTION, questionId);

    await updateDoc(flagRef, {
      resolved: false,
      resolvedAt: null,
      resolvedBy: null,
    });

    return { success: true };
  } catch (error) {
    console.error('[FlagService] Error unresolving flag:', error);
    return { success: false, error: 'Failed to unresolve flag' };
  }
}

/**
 * Delete a flag (admin only)
 */
export async function deleteFlag(
  questionId: string
): Promise<{ success: boolean; error?: string }> {
  if (!db) {
    return { success: false, error: 'Database not initialized' };
  }

  try {
    const flagRef = doc(db, FLAGS_COLLECTION, questionId);
    await deleteDoc(flagRef);
    return { success: true };
  } catch (error) {
    console.error('[FlagService] Error deleting flag:', error);
    return { success: false, error: 'Failed to delete flag' };
  }
}

/**
 * Get flag statistics
 */
export async function getFlagStats(): Promise<{
  total: number;
  unresolved: number;
  resolved: number;
  byReason: Record<FlagReason, number>;
}> {
  const allFlags = await getAllFlagsIncludingResolved();

  const stats = {
    total: allFlags.length,
    unresolved: 0,
    resolved: 0,
    byReason: {
      wrongTopic: 0,
      incorrectAnswer: 0,
      unclearQuestion: 0,
      other: 0,
    } as Record<FlagReason, number>,
  };

  for (const flag of allFlags) {
    if (flag.resolved) {
      stats.resolved++;
    } else {
      stats.unresolved++;
    }

    stats.byReason.wrongTopic += flag.flagReasons.wrongTopic || 0;
    stats.byReason.incorrectAnswer += flag.flagReasons.incorrectAnswer || 0;
    stats.byReason.unclearQuestion += flag.flagReasons.unclearQuestion || 0;
    stats.byReason.other += flag.flagReasons.other || 0;
  }

  return stats;
}
