/**
 * Type definitions for the MedLearn Flashcard System
 *
 * This file defines all core types for the flashcard feature including:
 * - Flashcards with FSRS spaced repetition
 * - Decks with configurable settings
 * - Study sessions and review logs
 * - Card content with markdown and images
 */

import { Timestamp } from 'firebase/firestore'
import type { Card as FSRSCard, Rating, State } from 'ts-fsrs'

// Re-export ts-fsrs types for convenience
export { Rating, State } from 'ts-fsrs'

/**
 * Image attached to a flashcard
 */
export interface CardImage {
  /** Unique identifier for the image */
  id: string
  /** Storage URL or data URL for the image */
  url: string
  /** Optional alt text for accessibility */
  alt?: string
}

/**
 * Content structure for card front or back
 * Supports markdown text and optional images
 */
export interface CardContent {
  /** Markdown-formatted text content */
  text: string
  /** Optional array of images */
  images?: CardImage[]
}

/**
 * Core flashcard with FSRS spaced repetition state
 */
export interface FlashCard {
  /** Unique identifier for the card */
  id: string
  /** ID of the deck this card belongs to */
  deckId: string
  /** ID of the user who owns this card */
  userId: string

  /** Front side content (question/prompt) */
  front: CardContent
  /** Back side content (answer) */
  back: CardContent

  /** Tags for categorization and filtering */
  tags: string[]

  /** FSRS spaced repetition state */
  fsrs: FSRSCard

  /** Card creation timestamp */
  createdAt: Timestamp
  /** Last update timestamp */
  updatedAt: Timestamp

  /** Optional user note/comment */
  note?: string
  /** Optional source topic ID (for pre-loaded cards from subjects) */
  sourceTopicId?: string
  /** Whether card is suspended (excluded from study) */
  suspended?: boolean
  /** Whether card is buried until next day */
  buried?: boolean
}

/**
 * Configurable deck settings for FSRS algorithm
 */
export interface DeckSettings {
  /** Maximum new cards to introduce per day */
  newCardsPerDay: number
  /** Maximum review cards per day */
  reviewsPerDay: number
  /** Learning steps in minutes (e.g., [1, 10] = 1min then 10min) */
  learningSteps: number[]
  /** Graduating interval in days (when card graduates from learning) */
  graduatingInterval: number
  /** Easy interval in days (when card is marked "Easy" on first review) */
  easyInterval: number
  /** Maximum interval in days (ceiling for card scheduling) */
  maximumInterval: number
  /** Target retention rate (0.0-1.0), default 0.9 = 90% */
  requestRetention: number
}

/**
 * Default deck settings matching FSRS best practices
 */
export const DEFAULT_DECK_SETTINGS: DeckSettings = {
  newCardsPerDay: 20,
  reviewsPerDay: 200,
  learningSteps: [1, 10], // 1 minute, then 10 minutes
  graduatingInterval: 1, // 1 day
  easyInterval: 4, // 4 days
  maximumInterval: 36500, // 100 years (effectively unlimited)
  requestRetention: 0.9, // 90% retention rate
}

/**
 * Flashcard deck containing cards and study statistics
 */
export interface Deck {
  /** Unique identifier for the deck */
  id: string
  /** ID of the user who owns this deck */
  userId: string

  /** Display name of the deck */
  name: string
  /** Optional description */
  description?: string
  /** Hex color code for UI theming */
  color: string
  /** Lucide icon name for deck visualization */
  icon: string

  /** Total number of cards in deck */
  cardCount: number
  /** Number of new (unseen) cards */
  newCount: number
  /** Number of cards in learning phase */
  learningCount: number
  /** Number of cards due for review */
  reviewCount: number
  /** Number of cards ready to study now (accounts for due dates and suspended status) */
  dueCount?: number

  /** Deck-specific settings */
  settings: DeckSettings

  /** Deck creation timestamp */
  createdAt: Timestamp
  /** Last update timestamp */
  updatedAt: Timestamp
  /** Last time deck was studied */
  lastStudiedAt?: Timestamp

  /** Whether this is a pre-loaded deck from subjects */
  isPreloaded?: boolean
  /** Source subject (e.g., "physiology", "histology") */
  sourceSubject?: string
  /** Source topic ID within subject */
  sourceTopic?: string
}

/**
 * Study session tracking user activity and performance
 */
export interface StudySession {
  /** Unique identifier for the session */
  id: string
  /** ID of the user */
  userId: string
  /** ID of the deck studied */
  deckId: string

  /** Session start timestamp */
  startedAt: Timestamp
  /** Session end timestamp (undefined if ongoing) */
  endedAt?: Timestamp

  /** Total cards studied in session */
  cardsStudied: number
  /** New cards introduced */
  newCards: number
  /** Review cards studied */
  reviewCards: number
  /** Learning cards studied */
  learningCards: number

  /** Number of "Again" ratings */
  againCount: number
  /** Number of "Hard" ratings */
  hardCount: number
  /** Number of "Good" ratings */
  goodCount: number
  /** Number of "Easy" ratings */
  easyCount: number

  /** Total time spent in milliseconds */
  totalTimeMs: number
  /** Average time per card in milliseconds */
  averageTimePerCard: number
}

/**
 * Individual card review log entry for analytics
 */
export interface ReviewLogEntry {
  /** Unique identifier for the review log */
  id: string
  /** ID of the card reviewed */
  cardId: string
  /** ID of the user */
  userId: string
  /** ID of the deck */
  deckId: string

  /** User rating (Again, Hard, Good, Easy) */
  rating: Rating
  /** Card state before review */
  state: State

  /** Next due date */
  due: Date
  /** FSRS stability parameter */
  stability: number
  /** FSRS difficulty parameter */
  difficulty: number

  /** Days since last review */
  elapsedDays: number
  /** Days between previous reviews */
  lastElapsedDays: number
  /** Days until next scheduled review */
  scheduledDays: number

  /** Review timestamp */
  review: Date
  /** Time taken to review in milliseconds */
  timeMs: number
}

/**
 * Filters for querying cards
 */
export interface CardFilters {
  /** Filter by card state (New, Learning, Review, Relearning) */
  state?: State[]
  /** Filter by tags (matches any tag) */
  tags?: string[]
  /** Filter cards due before this date */
  dueBefore?: Date
  /** Search query for card content */
  searchQuery?: string
}
