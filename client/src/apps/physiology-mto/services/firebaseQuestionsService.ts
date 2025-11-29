/**
 * Firebase Questions Service
 *
 * Provides access to MTO questions stored in Firestore.
 * Replaces static JSON file loading with dynamic Firebase queries.
 *
 * Features:
 * - Caching to minimize Firestore reads (and costs)
 * - Converts Firebase MTOQuestion format to legacy Question format for compatibility
 * - Fallback support for offline/error scenarios
 */

import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  doc,
} from 'firebase/firestore';
import { db } from '@/firebase/config';
import type { Question } from '../../physiology/data/questions/types';
import type { MTOQuestion, QuestionExplanation, SystemStats } from '../types/firebase';

// ============================================================================
// CONSTANTS
// ============================================================================

const COLLECTION_NAME = 'mtoQuestions';
const EXPLANATIONS_COLLECTION = 'questionExplanations';
const STATS_COLLECTION = 'systemStats';
const STATS_DOC_ID = 'current';

// Cache TTL in milliseconds (5 minutes)
const CACHE_TTL = 5 * 60 * 1000;

// ============================================================================
// CACHE
// ============================================================================

interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

const cache = {
  allQuestions: null as CacheEntry<Question[]> | null,
  byTopic: new Map<number, CacheEntry<Question[]>>(),
  byMcq: new Map<string, CacheEntry<Question[]>>(),
  stats: null as CacheEntry<SystemStats> | null,
  explanations: new Map<string, CacheEntry<QuestionExplanation>>(),
  // Maps legacyId (original JSON ID) → Firestore document ID
  legacyIdMap: new Map<string, string>(),
};

function isCacheValid<T>(entry: CacheEntry<T> | null | undefined): entry is CacheEntry<T> {
  if (!entry) return false;
  return Date.now() - entry.timestamp < CACHE_TTL;
}

function setCache<T>(data: T): CacheEntry<T> {
  return { data, timestamp: Date.now() };
}

/**
 * Clear all caches (useful after updates)
 */
export function clearCache(): void {
  cache.allQuestions = null;
  cache.byTopic.clear();
  cache.byMcq.clear();
  cache.stats = null;
  cache.explanations.clear();
  cache.legacyIdMap.clear();
  console.log('[FirebaseQuestionsService] Cache cleared');
}

// ============================================================================
// TYPE CONVERSION
// ============================================================================

/**
 * Convert Firestore MTOQuestion to legacy Question format
 * This ensures backward compatibility with existing UI components
 *
 * IMPORTANT: Uses legacyId (not Firestore doc ID) as the question id
 * because explanations are keyed by legacyId
 */
function convertToLegacyQuestion(
  firestoreDoc: { id: string; data: MTOQuestion }
): Question {
  const data = firestoreDoc.data;

  return {
    // Use legacyId if available (for explanation lookup), fallback to Firestore ID
    id: data.legacyId || firestoreDoc.id,
    testId: data.testId || 'firebase',
    questionNumber: 0, // Not used in Firebase format
    text: data.text,
    correctAnswerCount: data.correctAnswerCount,
    options: data.options,
    correctAnswers: data.correctAnswers,
    topics: data.topics,
    mcqs: data.mcqs,
    contentHash: data.contentHash,
    metadata: {
      matchedBy: data.matchedBy,
      matchConfidence: data.matchConfidence,
      matchReason: data.matchReason,
    },
  };
}

// ============================================================================
// FIRESTORE QUERIES
// ============================================================================

/**
 * Get all active questions from Firestore
 */
export async function getAllQuestions(): Promise<Question[]> {
  // Check cache first
  if (isCacheValid(cache.allQuestions)) {
    console.log('[FirebaseQuestionsService] Returning cached questions');
    return cache.allQuestions.data;
  }

  if (!db) {
    console.error('[FirebaseQuestionsService] Firestore not initialized');
    return [];
  }

  try {
    console.log('[FirebaseQuestionsService] Fetching all questions from Firestore...');

    const questionsRef = collection(db, COLLECTION_NAME);
    const q = query(questionsRef, where('status', '==', 'active'));
    const snapshot = await getDocs(q);

    const questions: Question[] = [];
    snapshot.forEach((docSnap) => {
      const data = docSnap.data() as MTOQuestion;
      const question = convertToLegacyQuestion({
        id: docSnap.id,
        data,
      });
      questions.push(question);
      // Store mapping: legacyId → firestoreId (for admin operations)
      // Also store firestoreId → legacyId (for reference)
      if (data.legacyId) {
        cache.legacyIdMap.set(data.legacyId, docSnap.id);
      }
    });

    console.log(`[FirebaseQuestionsService] Loaded ${questions.length} questions, ${cache.legacyIdMap.size} legacy mappings`);

    // Update cache
    cache.allQuestions = setCache(questions);

    return questions;
  } catch (error) {
    console.error('[FirebaseQuestionsService] Error fetching questions:', error);
    return [];
  }
}

/**
 * Get questions by topic number
 */
export async function getQuestionsByTopic(topicNumber: number): Promise<Question[]> {
  // Check cache first
  const cached = cache.byTopic.get(topicNumber);
  if (isCacheValid(cached)) {
    return cached.data;
  }

  if (!db) {
    console.error('[FirebaseQuestionsService] Firestore not initialized');
    return [];
  }

  try {
    const questionsRef = collection(db, COLLECTION_NAME);
    const q = query(
      questionsRef,
      where('status', '==', 'active'),
      where('topics', 'array-contains', topicNumber)
    );
    const snapshot = await getDocs(q);

    const questions: Question[] = [];
    snapshot.forEach((docSnap) => {
      questions.push(
        convertToLegacyQuestion({
          id: docSnap.id,
          data: docSnap.data() as MTOQuestion,
        })
      );
    });

    // Update cache
    cache.byTopic.set(topicNumber, setCache(questions));

    return questions;
  } catch (error) {
    console.error(`[FirebaseQuestionsService] Error fetching questions for topic ${topicNumber}:`, error);
    return [];
  }
}

/**
 * Get questions by multiple topics
 */
export async function getQuestionsByTopics(topicNumbers: number[]): Promise<Question[]> {
  if (topicNumbers.length === 0) return [];

  // For multiple topics, we need to fetch all and filter client-side
  // because Firestore doesn't support OR queries on array-contains
  const allQuestions = await getAllQuestions();

  return allQuestions.filter(q =>
    q.topics.some(t => topicNumbers.includes(t))
  );
}

/**
 * Get questions by MCQ exam
 */
export async function getQuestionsByMcq(mcqId: string): Promise<Question[]> {
  // Check cache first
  const cached = cache.byMcq.get(mcqId);
  if (isCacheValid(cached)) {
    return cached.data;
  }

  if (!db) {
    console.error('[FirebaseQuestionsService] Firestore not initialized');
    return [];
  }

  try {
    const questionsRef = collection(db, COLLECTION_NAME);
    const q = query(
      questionsRef,
      where('status', '==', 'active'),
      where('mcqs', 'array-contains', mcqId)
    );
    const snapshot = await getDocs(q);

    const questions: Question[] = [];
    snapshot.forEach((docSnap) => {
      questions.push(
        convertToLegacyQuestion({
          id: docSnap.id,
          data: docSnap.data() as MTOQuestion,
        })
      );
    });

    // Update cache
    cache.byMcq.set(mcqId, setCache(questions));

    return questions;
  } catch (error) {
    console.error(`[FirebaseQuestionsService] Error fetching questions for MCQ ${mcqId}:`, error);
    return [];
  }
}

/**
 * Get a single question by Firestore document ID
 */
export async function getQuestionById(questionId: string): Promise<Question | null> {
  if (!db) {
    console.error('[FirebaseQuestionsService] Firestore not initialized');
    return null;
  }

  try {
    const docRef = doc(db, COLLECTION_NAME, questionId);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      return null;
    }

    return convertToLegacyQuestion({
      id: docSnap.id,
      data: docSnap.data() as MTOQuestion,
    });
  } catch (error) {
    console.error(`[FirebaseQuestionsService] Error fetching question ${questionId}:`, error);
    return null;
  }
}

// ============================================================================
// SYSTEM STATS
// ============================================================================

/**
 * Get system statistics from Firestore
 */
export async function getSystemStats(): Promise<SystemStats | null> {
  // Check cache first
  if (isCacheValid(cache.stats)) {
    return cache.stats.data;
  }

  if (!db) {
    console.error('[FirebaseQuestionsService] Firestore not initialized');
    return null;
  }

  try {
    const docRef = doc(db, STATS_COLLECTION, STATS_DOC_ID);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      console.warn('[FirebaseQuestionsService] System stats document not found');
      return null;
    }

    const stats = docSnap.data() as SystemStats;
    cache.stats = setCache(stats);

    return stats;
  } catch (error) {
    console.error('[FirebaseQuestionsService] Error fetching system stats:', error);
    return null;
  }
}

/**
 * Get question count for a topic (from cached stats or query)
 */
export async function getTopicQuestionCount(topicNumber: number): Promise<number> {
  const stats = await getSystemStats();
  if (stats?.questionsByTopic) {
    return stats.questionsByTopic[topicNumber] || 0;
  }

  // Fallback: query questions
  const questions = await getQuestionsByTopic(topicNumber);
  return questions.length;
}

/**
 * Get question count for an MCQ (from cached stats or query)
 */
export async function getMcqQuestionCount(mcqId: string): Promise<number> {
  const stats = await getSystemStats();
  if (stats?.questionsByMcq) {
    return stats.questionsByMcq[mcqId] || 0;
  }

  // Fallback: query questions
  const questions = await getQuestionsByMcq(mcqId);
  return questions.length;
}

// ============================================================================
// EXPLANATIONS
// ============================================================================

/**
 * Get explanation for a question
 */
export async function getExplanation(questionId: string): Promise<QuestionExplanation | null> {
  // Check cache first
  const cached = cache.explanations.get(questionId);
  if (isCacheValid(cached)) {
    return cached.data;
  }

  if (!db) {
    console.error('[FirebaseQuestionsService] Firestore not initialized');
    return null;
  }

  try {
    // Explanations are stored with questionId as document ID
    const docRef = doc(db, EXPLANATIONS_COLLECTION, questionId);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      return null;
    }

    const explanation = docSnap.data() as QuestionExplanation;
    cache.explanations.set(questionId, setCache(explanation));

    return explanation;
  } catch (error) {
    console.error(`[FirebaseQuestionsService] Error fetching explanation for ${questionId}:`, error);
    return null;
  }
}

/**
 * Check if a question has an explanation
 */
export async function hasExplanation(questionId: string): Promise<boolean> {
  const explanation = await getExplanation(questionId);
  return explanation !== null;
}

/**
 * Get Firestore document ID from legacy question ID
 * Requires getAllQuestions() to have been called first to populate the mapping
 */
export function getFirestoreIdByLegacyId(legacyId: string): string | null {
  return cache.legacyIdMap.get(legacyId) || null;
}

/**
 * Get explanation by legacy question ID (original JSON file ID)
 * This is the main function for fetching explanations when using local JSON questions.
 *
 * Note: Explanations are stored with the legacy question ID as the document ID,
 * so we can fetch them directly without needing to map to Firestore question IDs.
 */
export async function getExplanationByLegacyId(legacyId: string): Promise<QuestionExplanation | null> {
  // Explanations are stored with legacyId as their document ID
  // So we can fetch directly using the question's ID
  return getExplanation(legacyId);
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Deduplicate questions by content hash
 */
export function deduplicateQuestions(questions: Question[]): Question[] {
  const seen = new Map<string, Question>();

  for (const question of questions) {
    const hash = question.contentHash || question.id;
    if (!seen.has(hash)) {
      seen.set(hash, question);
    }
  }

  return Array.from(seen.values());
}

/**
 * Shuffle array (Fisher-Yates)
 */
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Check if answer is correct
 */
export function checkAnswer(question: Question, selectedAnswers: string[]): boolean {
  if (selectedAnswers.length !== question.correctAnswers.length) {
    return false;
  }

  const sortedSelected = [...selectedAnswers].sort();
  const sortedCorrect = [...question.correctAnswers].sort();

  return sortedSelected.every((ans, idx) => ans === sortedCorrect[idx]);
}
