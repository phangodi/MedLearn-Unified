/**
 * Firestore Service for MedLearn Flashcard System
 *
 * Handles all database operations for flashcards, decks, reviews, and study sessions.
 * Uses Firebase Firestore with proper error handling and TypeScript typing.
 */

import { db } from '@/firebase/config'
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
  serverTimestamp,
  writeBatch,
  Timestamp,
  QueryConstraint,
} from 'firebase/firestore'
import type { DocumentData } from 'firebase/firestore'
import type {
  Deck,
  FlashCard,
  ReviewLogEntry,
  StudySession,
} from '../types/flashcard'
import {
  DEFAULT_DECK_SETTINGS,
  State,
} from '../types/flashcard'
import type { Card as FSRSCard } from 'ts-fsrs'
import { isPreloadedDeck, getPreloadedCards } from '../data/preloaded'
import { createEmptyCard } from 'ts-fsrs'

/**
 * Error thrown when Firestore is not initialized
 */
class FirestoreNotInitializedError extends Error {
  constructor() {
    super('Firestore is not initialized. Please check Firebase configuration.')
    this.name = 'FirestoreNotInitializedError'
  }
}

/**
 * Ensures Firestore is initialized before operations
 */
function ensureDb(): NonNullable<typeof db> {
  if (!db) {
    throw new FirestoreNotInitializedError()
  }
  return db
}

/**
 * Converts Firestore document to typed object with Timestamp conversion
 */
function docToData<T>(docData: DocumentData, id: string): T {
  return {
    id,
    ...docData,
  } as T
}

/**
 * Helper to recursively remove undefined values from an object before sending to Firestore
 * Firestore doesn't accept undefined values - they must be omitted entirely
 * This function handles nested objects (like fsrs) that may contain undefined values
 */
function removeUndefinedFields<T extends Record<string, any>>(obj: T): Partial<T> {
  const result: Record<string, any> = {}

  for (const [key, value] of Object.entries(obj)) {
    if (value === undefined) {
      // Skip undefined values
      continue
    } else if (value !== null && typeof value === 'object' && !Array.isArray(value) && !(value instanceof Date) && typeof value.toDate !== 'function') {
      // Recursively clean nested objects (but not arrays, Dates, or Firestore Timestamps)
      const cleaned = removeUndefinedFields(value)
      if (Object.keys(cleaned).length > 0) {
        result[key] = cleaned
      }
    } else {
      result[key] = value
    }
  }

  return result as Partial<T>
}

// =============================================================================
// DECK OPERATIONS
// =============================================================================

/**
 * Creates a new flashcard deck with timeout protection
 * @param userId - ID of the user creating the deck
 * @param deck - Partial deck data (id, timestamps auto-generated)
 * @returns The ID of the created deck
 */
export async function createDeck(
  userId: string,
  deck: Partial<Deck>
): Promise<string> {
  const firestore = ensureDb()

  try {
    // Generate new deck ID
    const deckRef = doc(collection(firestore, 'flashcards/decks/items'))
    const deckId = deckRef.id

    // Create deck document with defaults (only include defined fields)
    const deckData = removeUndefinedFields({
      userId,
      name: deck.name || 'Untitled Deck',
      description: deck.description,
      color: deck.color || '#0066CC',
      icon: deck.icon || 'BookOpen',
      cardCount: 0,
      newCount: 0,
      learningCount: 0,
      reviewCount: 0,
      settings: deck.settings || DEFAULT_DECK_SETTINGS,
      createdAt: serverTimestamp() as Timestamp,
      updatedAt: serverTimestamp() as Timestamp,
      isPreloaded: deck.isPreloaded,
      sourceSubject: deck.sourceSubject,
      sourceTopic: deck.sourceTopic,
    })

    // Add timeout protection (10 seconds)
    const timeoutPromise = new Promise<never>((_, reject) => {
      setTimeout(() => reject(new Error('Request timed out after 10 seconds')), 10000)
    })

    await Promise.race([
      setDoc(deckRef, deckData),
      timeoutPromise
    ])

    console.log('Deck created successfully:', deckId)
    return deckId
  } catch (error) {
    console.error('Error creating deck:', error)

    // Provide specific error messages for common issues
    if (error instanceof Error) {
      if (error.message.includes('permission') || error.message.includes('PERMISSION_DENIED')) {
        throw new Error('Permission denied. Please check Firestore security rules.')
      }
      if (error.message.includes('timeout')) {
        throw new Error('Request timed out. Please check your internet connection.')
      }
      throw new Error(`Failed to create deck: ${error.message}`)
    }

    throw new Error('Failed to create deck: Unknown error')
  }
}

/**
 * Updates an existing deck
 * @param deckId - ID of the deck to update
 * @param data - Partial deck data to update
 */
export async function updateDeck(
  deckId: string,
  data: Partial<Deck>
): Promise<void> {
  const firestore = ensureDb()

  try {
    const deckRef = doc(firestore, 'flashcards/decks/items', deckId)

    // Remove id from update data and add updated timestamp
    const { id, createdAt, ...updateData } = data as any
    const updates = removeUndefinedFields({
      ...updateData,
      updatedAt: serverTimestamp(),
    })

    await updateDoc(deckRef, updates)
  } catch (error) {
    console.error('Error updating deck:', error)
    throw new Error(`Failed to update deck: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}

/**
 * Deletes a deck and ALL its cards using a batch operation
 * @param deckId - ID of the deck to delete
 */
export async function deleteDeck(deckId: string): Promise<void> {
  const firestore = ensureDb()

  try {
    const batch = writeBatch(firestore)

    // Delete the deck document
    const deckRef = doc(firestore, 'flashcards/decks/items', deckId)
    batch.delete(deckRef)

    // Get all cards in the deck
    const cardsQuery = query(
      collection(firestore, 'flashcards/cards/items'),
      where('deckId', '==', deckId)
    )
    const cardsSnapshot = await getDocs(cardsQuery)

    // Delete each card
    cardsSnapshot.forEach((cardDoc) => {
      batch.delete(cardDoc.ref)
    })

    // Commit the batch
    await batch.commit()
  } catch (error) {
    console.error('Error deleting deck:', error)
    throw new Error(`Failed to delete deck: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}

/**
 * Gets a single deck by ID
 * @param deckId - ID of the deck to retrieve
 * @returns The deck or null if not found
 */
export async function getDeck(deckId: string): Promise<Deck | null> {
  // Check if this is a preloaded deck
  if (isPreloadedDeck(deckId)) {
    const { getPreloadedDeck } = await import('../data/preloaded')
    return getPreloadedDeck(deckId)
  }

  // Load from Firestore for user decks
  const firestore = ensureDb()

  try {
    const deckRef = doc(firestore, 'flashcards/decks/items', deckId)
    const deckSnap = await getDoc(deckRef)

    if (!deckSnap.exists()) {
      return null
    }

    return docToData<Deck>(deckSnap.data(), deckSnap.id)
  } catch (error) {
    console.error('Error getting deck:', error)
    throw new Error(`Failed to get deck: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}

/**
 * Gets all decks belonging to a user
 * @param userId - ID of the user
 * @returns Array of user's decks, ordered by last studied then created date
 */
export async function getUserDecks(userId: string): Promise<Deck[]> {
  const firestore = ensureDb()

  try {
    const decksQuery = query(
      collection(firestore, 'flashcards/decks/items'),
      where('userId', '==', userId),
      orderBy('createdAt', 'desc')
    )
    const decksSnapshot = await getDocs(decksQuery)

    return decksSnapshot.docs.map((doc) => docToData<Deck>(doc.data(), doc.id))
  } catch (error) {
    console.error('Error getting user decks:', error)
    throw new Error(`Failed to get user decks: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}

/**
 * Gets all pre-loaded decks (system-provided decks)
 * @returns Array of pre-loaded decks
 */
export async function getPreloadedDecks(): Promise<Deck[]> {
  const firestore = ensureDb()

  try {
    const decksQuery = query(
      collection(firestore, 'flashcards/decks/items'),
      where('isPreloaded', '==', true),
      orderBy('createdAt', 'desc')
    )
    const decksSnapshot = await getDocs(decksQuery)

    return decksSnapshot.docs.map((doc) => docToData<Deck>(doc.data(), doc.id))
  } catch (error) {
    console.error('Error getting preloaded decks:', error)
    throw new Error(`Failed to get preloaded decks: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}

// =============================================================================
// CARD OPERATIONS
// =============================================================================

/**
 * Creates a new flashcard
 * @param card - Partial card data (id, timestamps auto-generated)
 * @returns The ID of the created card
 */
export async function createCard(card: Partial<FlashCard>): Promise<string> {
  const firestore = ensureDb()

  if (!card.deckId || !card.userId) {
    throw new Error('deckId and userId are required to create a card')
  }

  try {
    // Generate new card ID
    const cardRef = doc(collection(firestore, 'flashcards/cards/items'))
    const cardId = cardRef.id

    // Create default FSRS card state if not provided
    const defaultFSRS: FSRSCard = (card.fsrs as FSRSCard) || {
      due: new Date(),
      stability: 0,
      difficulty: 0,
      elapsed_days: 0,
      scheduled_days: 0,
      reps: 0,
      lapses: 0,
      state: State.New,
      last_review: new Date(),
    } as FSRSCard

    // Create card document (only include defined fields)
    const cardData = removeUndefinedFields({
      deckId: card.deckId,
      userId: card.userId,
      front: card.front || { text: '', images: [] },
      back: card.back || { text: '', images: [] },
      tags: card.tags || [],
      fsrs: defaultFSRS,
      createdAt: serverTimestamp() as Timestamp,
      updatedAt: serverTimestamp() as Timestamp,
      note: card.note,
      sourceTopicId: card.sourceTopicId,
      suspended: card.suspended || false,
      buried: card.buried || false,
    })

    await setDoc(cardRef, cardData)

    // Update deck card count
    await updateDeckStats(card.deckId)

    return cardId
  } catch (error) {
    console.error('Error creating card:', error)
    throw new Error(`Failed to create card: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}

/**
 * Updates an existing flashcard
 * @param cardId - ID of the card to update
 * @param data - Partial card data to update
 */
export async function updateCard(
  cardId: string,
  data: Partial<FlashCard>
): Promise<void> {
  const firestore = ensureDb()

  try {
    const cardRef = doc(firestore, 'flashcards/cards/items', cardId)

    // Remove id from update data and add updated timestamp
    const { id, createdAt, ...updateData } = data as any
    const updates = removeUndefinedFields({
      ...updateData,
      updatedAt: serverTimestamp(),
    })

    await updateDoc(cardRef, updates)
  } catch (error) {
    console.error('Error updating card:', error)
    throw new Error(`Failed to update card: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}

/**
 * Deletes a flashcard
 * @param cardId - ID of the card to delete
 */
export async function deleteCard(cardId: string): Promise<void> {
  const firestore = ensureDb()

  try {
    // Get card to find its deck for stats update
    const cardRef = doc(firestore, 'flashcards/cards/items', cardId)
    const cardSnap = await getDoc(cardRef)

    if (!cardSnap.exists()) {
      throw new Error('Card not found')
    }

    const deckId = cardSnap.data().deckId

    // Delete the card
    await deleteDoc(cardRef)

    // Update deck stats
    await updateDeckStats(deckId)
  } catch (error) {
    console.error('Error deleting card:', error)
    throw new Error(`Failed to delete card: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}

/**
 * Gets a single card by ID
 * @param cardId - ID of the card to retrieve
 * @returns The card or null if not found
 */
export async function getCard(cardId: string): Promise<FlashCard | null> {
  const firestore = ensureDb()

  try {
    const cardRef = doc(firestore, 'flashcards/cards/items', cardId)
    const cardSnap = await getDoc(cardRef)

    if (!cardSnap.exists()) {
      return null
    }

    return docToData<FlashCard>(cardSnap.data(), cardSnap.id)
  } catch (error) {
    console.error('Error getting card:', error)
    throw new Error(`Failed to get card: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}

/**
 * Gets all cards in a deck
 * @param deckId - ID of the deck
 * @returns Array of cards in the deck
 */
export async function getDeckCards(deckId: string): Promise<FlashCard[]> {
  // Check if this is a preloaded deck
  if (isPreloadedDeck(deckId)) {
    // Load cards from preloaded JSON data
    const preloadedCardData = getPreloadedCards(deckId)
    const now = Timestamp.now()

    // Convert preloaded cards to FlashCard format
    return preloadedCardData.map((cardData) => {
      const emptyFSRS = createEmptyCard()

      return {
        id: cardData.id,
        deckId,
        userId: '', // Empty for preloaded cards
        front: cardData.front,
        back: cardData.back,
        tags: cardData.tags,
        fsrs: emptyFSRS,
        createdAt: now,
        updatedAt: now,
      } as FlashCard
    })
  }

  // Load cards from Firestore for user decks
  const firestore = ensureDb()

  try {
    const cardsQuery = query(
      collection(firestore, 'flashcards/cards/items'),
      where('deckId', '==', deckId),
      orderBy('createdAt', 'asc')
    )
    const cardsSnapshot = await getDocs(cardsQuery)

    return cardsSnapshot.docs.map((doc) => docToData<FlashCard>(doc.data(), doc.id))
  } catch (error) {
    console.error('Error getting deck cards:', error)
    throw new Error(`Failed to get deck cards: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}

/**
 * Gets cards that are due for review
 * @param deckId - ID of the deck
 * @param userId - ID of the user
 * @returns Array of cards due for review
 */
export async function getDueCards(
  deckId: string,
  userId: string
): Promise<FlashCard[]> {
  const firestore = ensureDb()

  try {
    const now = new Date()

    const cardsQuery = query(
      collection(firestore, 'flashcards/cards/items'),
      where('deckId', '==', deckId),
      where('userId', '==', userId),
      where('suspended', '==', false)
    )
    const cardsSnapshot = await getDocs(cardsQuery)

    // Filter cards that are available for study:
    // 1. New cards (never studied, always available)
    // 2. Learning/Relearning cards (in active learning phase)
    // 3. Review cards where due date has passed
    const dueCards = cardsSnapshot.docs
      .map((doc) => docToData<FlashCard>(doc.data(), doc.id))
      .filter((card) => {
        // New cards are always available for study
        if (card.fsrs.state === 0) { // State.New = 0
          return true
        }

        // Learning and Relearning cards are in active study phase
        // Include them even if their due date is slightly in the future
        if (card.fsrs.state === 1 || card.fsrs.state === 3) { // State.Learning = 1, State.Relearning = 3
          return true
        }

        // Review cards: only include if due date has passed
        const dueDate = card.fsrs.due instanceof Date
          ? card.fsrs.due
          : typeof (card.fsrs.due as any)?.toDate === 'function'
            ? (card.fsrs.due as any).toDate()
            : new Date(card.fsrs.due as any)
        return dueDate <= now
      })

    return dueCards
  } catch (error) {
    console.error('Error getting due cards:', error)
    throw new Error(`Failed to get due cards: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}

/**
 * Updates the FSRS state of a card after review
 * @param cardId - ID of the card
 * @param fsrsState - New FSRS state
 */
export async function updateCardFSRS(
  cardId: string,
  fsrsState: FSRSCard
): Promise<void> {
  const firestore = ensureDb()

  try {
    const cardRef = doc(firestore, 'flashcards/cards/items', cardId)

    await updateDoc(cardRef, {
      fsrs: fsrsState,
      updatedAt: serverTimestamp(),
    })
  } catch (error) {
    console.error('Error updating card FSRS:', error)
    throw new Error(`Failed to update card FSRS: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}

// =============================================================================
// REVIEW OPERATIONS
// =============================================================================

/**
 * Records a card review in the review log
 * @param review - Partial review data (id, timestamps auto-generated)
 * @returns The ID of the created review log entry
 */
export async function recordReview(
  review: Partial<ReviewLogEntry>
): Promise<string> {
  const firestore = ensureDb()

  if (!review.cardId || !review.userId || !review.deckId) {
    throw new Error('cardId, userId, and deckId are required to record a review')
  }

  try {
    // Generate new review ID
    const reviewRef = doc(collection(firestore, 'flashcards/reviews/items'))
    const reviewId = reviewRef.id

    // Create review log entry
    const newReview: Omit<ReviewLogEntry, 'id'> = {
      cardId: review.cardId,
      userId: review.userId,
      deckId: review.deckId,
      rating: review.rating!,
      state: review.state!,
      due: review.due || new Date(),
      stability: review.stability || 0,
      difficulty: review.difficulty || 0,
      elapsedDays: review.elapsedDays || 0,
      lastElapsedDays: review.lastElapsedDays || 0,
      scheduledDays: review.scheduledDays || 0,
      review: review.review || new Date(),
      timeMs: review.timeMs || 0,
    }

    await setDoc(reviewRef, newReview)
    return reviewId
  } catch (error) {
    console.error('Error recording review:', error)
    throw new Error(`Failed to record review: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}

/**
 * Gets all reviews for a specific card
 * @param cardId - ID of the card
 * @returns Array of review log entries, ordered by review date (newest first)
 */
export async function getCardReviews(cardId: string): Promise<ReviewLogEntry[]> {
  const firestore = ensureDb()

  try {
    const reviewsQuery = query(
      collection(firestore, 'flashcards/reviews/items'),
      where('cardId', '==', cardId),
      orderBy('review', 'desc')
    )
    const reviewsSnapshot = await getDocs(reviewsQuery)

    return reviewsSnapshot.docs.map((doc) => docToData<ReviewLogEntry>(doc.data(), doc.id))
  } catch (error) {
    console.error('Error getting card reviews:', error)
    throw new Error(`Failed to get card reviews: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}

/**
 * Gets all reviews for a user within an optional date range
 * @param userId - ID of the user
 * @param startDate - Optional start date for filtering
 * @param endDate - Optional end date for filtering
 * @returns Array of review log entries
 */
export async function getUserReviews(
  userId: string,
  startDate?: Date,
  endDate?: Date
): Promise<ReviewLogEntry[]> {
  const firestore = ensureDb()

  try {
    const constraints: QueryConstraint[] = [
      where('userId', '==', userId),
      orderBy('review', 'desc'),
    ]

    // Note: Firestore doesn't support range queries on dates without composite indexes
    // We'll fetch all reviews and filter in memory for simplicity
    const reviewsQuery = query(
      collection(firestore, 'flashcards/reviews/items'),
      ...constraints
    )
    const reviewsSnapshot = await getDocs(reviewsQuery)

    let reviews = reviewsSnapshot.docs.map((doc) => docToData<ReviewLogEntry>(doc.data(), doc.id))

    // Filter by date range if provided
    if (startDate || endDate) {
      reviews = reviews.filter((review) => {
        const reviewDate = review.review instanceof Date
          ? review.review
          : new Date(review.review)

        if (startDate && reviewDate < startDate) return false
        if (endDate && reviewDate > endDate) return false
        return true
      })
    }

    return reviews
  } catch (error) {
    console.error('Error getting user reviews:', error)
    throw new Error(`Failed to get user reviews: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}

// =============================================================================
// SESSION OPERATIONS
// =============================================================================

/**
 * Starts a new study session
 * @param userId - ID of the user
 * @param deckId - ID of the deck being studied
 * @returns The ID of the created session
 */
export async function startSession(
  userId: string,
  deckId: string
): Promise<string> {
  const firestore = ensureDb()

  try {
    // Generate new session ID
    const sessionRef = doc(collection(firestore, 'flashcards/sessions/items'))
    const sessionId = sessionRef.id

    // Create session document
    const newSession: Omit<StudySession, 'id'> = {
      userId,
      deckId,
      startedAt: serverTimestamp() as Timestamp,
      cardsStudied: 0,
      newCards: 0,
      reviewCards: 0,
      learningCards: 0,
      againCount: 0,
      hardCount: 0,
      goodCount: 0,
      easyCount: 0,
      totalTimeMs: 0,
      averageTimePerCard: 0,
    }

    await setDoc(sessionRef, newSession)
    return sessionId
  } catch (error) {
    console.error('Error starting session:', error)
    throw new Error(`Failed to start session: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}

/**
 * Ends a study session and updates its statistics
 * @param sessionId - ID of the session to end
 * @param stats - Partial session statistics to update
 */
export async function endSession(
  sessionId: string,
  stats: Partial<StudySession>
): Promise<void> {
  const firestore = ensureDb()

  try {
    const sessionRef = doc(firestore, 'flashcards/sessions/items', sessionId)

    // Calculate average time per card if not provided
    let averageTimePerCard = stats.averageTimePerCard
    if (!averageTimePerCard && stats.totalTimeMs && stats.cardsStudied) {
      averageTimePerCard = Math.round(stats.totalTimeMs / stats.cardsStudied)
    }

    const updates = removeUndefinedFields({
      ...stats,
      endedAt: serverTimestamp(),
      averageTimePerCard: averageTimePerCard || 0,
    })

    await updateDoc(sessionRef, updates)
  } catch (error) {
    console.error('Error ending session:', error)
    throw new Error(`Failed to end session: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}

/**
 * Gets recent study sessions for a user
 * @param userId - ID of the user
 * @param limit - Maximum number of sessions to retrieve (default: 10)
 * @returns Array of recent study sessions
 */
export async function getUserSessions(
  userId: string,
  limit: number = 10
): Promise<StudySession[]> {
  const firestore = ensureDb()

  try {
    const sessionsQuery = query(
      collection(firestore, 'flashcards/sessions/items'),
      where('userId', '==', userId),
      orderBy('startedAt', 'desc')
    )
    const sessionsSnapshot = await getDocs(sessionsQuery)

    const sessions = sessionsSnapshot.docs.map((doc) =>
      docToData<StudySession>(doc.data(), doc.id)
    )

    // Apply limit in memory since Firestore limit() requires proper ordering
    return sessions.slice(0, limit)
  } catch (error) {
    console.error('Error getting user sessions:', error)
    throw new Error(`Failed to get user sessions: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}

// =============================================================================
// STATISTICS
// =============================================================================

/**
 * Recalculates and updates deck statistics
 * Counts cards by state: new, learning, review
 * Also computes dueCount (cards ready to study now)
 * @param deckId - ID of the deck to update stats for
 */
export async function updateDeckStats(deckId: string): Promise<void> {
  const firestore = ensureDb()

  try {
    // Get all cards in the deck
    const cards = await getDeckCards(deckId)
    const now = new Date()

    // Calculate counts (excluding suspended/buried cards)
    const cardCount = cards.length
    let newCount = 0
    let learningCount = 0
    let reviewCount = 0
    let dueCount = 0

    cards.forEach((card) => {
      // Skip suspended and buried cards for active counts
      if (card.suspended || card.buried) {
        return
      }

      switch (card.fsrs.state) {
        case State.New:
          newCount++
          dueCount++ // New cards are always available
          break
        case State.Learning:
        case State.Relearning:
          learningCount++
          dueCount++ // Learning cards are in active study
          break
        case State.Review:
          reviewCount++
          // Review cards: only count as due if due date has passed
          const dueDate = card.fsrs.due instanceof Date
            ? card.fsrs.due
            : typeof (card.fsrs.due as any)?.toDate === 'function'
              ? (card.fsrs.due as any).toDate()
              : new Date(card.fsrs.due as any)
          if (dueDate <= now) {
            dueCount++
          }
          break
      }
    })

    // Update deck document
    const deckRef = doc(firestore, 'flashcards/decks/items', deckId)
    await updateDoc(deckRef, {
      cardCount,
      newCount,
      learningCount,
      reviewCount,
      dueCount,
      updatedAt: serverTimestamp(),
    })
  } catch (error) {
    console.error('Error updating deck stats:', error)
    throw new Error(`Failed to update deck stats: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}

// =============================================================================
// DECK COPYING
// =============================================================================

/**
 * Copies a deck (including all its cards) to a user's personal collection
 * Used to create editable copies of preloaded decks
 * @param sourceDeckId - ID of the deck to copy (can be preloaded or user deck)
 * @param userId - ID of the user who will own the copy
 * @returns The ID of the newly created deck
 */
export async function copyDeckToUser(
  sourceDeckId: string,
  userId: string
): Promise<string> {
  const firestore = ensureDb()

  try {
    // Get source deck (handles both preloaded and user decks)
    const sourceDeck = await getDeck(sourceDeckId)
    if (!sourceDeck) {
      throw new Error('Source deck not found')
    }

    // Get all cards from source deck
    const sourceCards = await getDeckCards(sourceDeckId)

    // Create new deck with "My - " prefix and user ownership
    const newDeckName = sourceDeck.isPreloaded
      ? `My - ${sourceDeck.name}`
      : `Copy of ${sourceDeck.name}`

    const newDeckData = removeUndefinedFields({
      userId,
      name: newDeckName,
      description: sourceDeck.description,
      color: sourceDeck.color,
      icon: sourceDeck.icon,
      cardCount: 0, // Will be updated as we add cards
      newCount: 0,
      learningCount: 0,
      reviewCount: 0,
      settings: sourceDeck.settings,
      createdAt: serverTimestamp() as Timestamp,
      updatedAt: serverTimestamp() as Timestamp,
      isPreloaded: false, // User copies are not preloaded
      sourceSubject: sourceDeck.sourceSubject,
      sourceTopic: sourceDeck.sourceTopic,
    })

    // Create the new deck
    const newDeckRef = doc(collection(firestore, 'flashcards/decks/items'))
    const newDeckId = newDeckRef.id
    await setDoc(newDeckRef, newDeckData)

    // Copy all cards using a batch operation for efficiency
    const batch = writeBatch(firestore)
    let batchCount = 0
    const MAX_BATCH_SIZE = 500 // Firestore limit

    for (const sourceCard of sourceCards) {
      // Create new card with reset FSRS state
      const newCardRef = doc(collection(firestore, 'flashcards/cards/items'))
      const resetFSRS = createEmptyCard() // Fresh FSRS state

      const newCardData = removeUndefinedFields({
        deckId: newDeckId,
        userId,
        front: sourceCard.front,
        back: sourceCard.back,
        tags: sourceCard.tags,
        fsrs: resetFSRS, // Reset FSRS state - user hasn't studied these yet
        createdAt: serverTimestamp() as Timestamp,
        updatedAt: serverTimestamp() as Timestamp,
        note: sourceCard.note,
        sourceTopicId: sourceCard.sourceTopicId,
        suspended: false, // Reset suspension status
        buried: false, // Reset buried status
      })

      batch.set(newCardRef, newCardData)
      batchCount++

      // Commit batch if we hit the limit
      if (batchCount >= MAX_BATCH_SIZE) {
        await batch.commit()
        batchCount = 0
      }
    }

    // Commit remaining cards
    if (batchCount > 0) {
      await batch.commit()
    }

    // Update deck statistics
    await updateDeckStats(newDeckId)

    console.log(`Successfully copied deck ${sourceDeckId} to ${newDeckId}`)
    return newDeckId
  } catch (error) {
    console.error('Error copying deck:', error)
    throw new Error(`Failed to copy deck: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}
