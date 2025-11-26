/**
 * FSRS Service - Wrapper for ts-fsrs library
 *
 * This service provides a clean interface to the FSRS (Free Spaced Repetition Scheduler)
 * algorithm for the MedLearn flashcard system. It handles:
 * - Card scheduling with custom deck settings
 * - Creating new cards with initial state
 * - Rating cards and updating their state
 * - Filtering and sorting cards by due date
 * - Formatting intervals for display
 *
 * FSRS Algorithm Overview:
 * - Uses machine learning to predict optimal review intervals
 * - Adapts to individual card difficulty and user retention
 * - Four rating buttons: Again, Hard, Good, Easy
 * - Four card states: New, Learning, Review, Relearning
 */

import {
  FSRS,
  createEmptyCard as createFSRSEmptyCard,
  Rating,
  State,
} from 'ts-fsrs'
import type { Card, ReviewLog } from 'ts-fsrs'
import type { DeckSettings, FlashCard } from '../types/flashcard'

// Re-export types for convenience
export { Rating, State } from 'ts-fsrs'
export type { Card as FSRSCard, ReviewLog } from 'ts-fsrs'

/**
 * Converts a date value to a Date object, handling both Date and Firestore Timestamp
 *
 * Firestore returns Timestamp objects when reading from the database, but our code
 * expects Date objects. This helper safely converts both types.
 *
 * @param date - Date, Firestore Timestamp, or any value with a toDate() method
 * @returns JavaScript Date object
 */
function toDate(date: any): Date {
  if (date instanceof Date) {
    return date
  }
  if (typeof date?.toDate === 'function') {
    return date.toDate()
  }
  return new Date(date)
}

/**
 * Scheduling information for all four rating buttons
 * Used to display intervals like "1m", "10m", "1d", "4d" on rating buttons
 */
export interface SchedulingInfo {
  again: {
    interval: number
    intervalText: string
    card: Card
  }
  hard: {
    interval: number
    intervalText: string
    card: Card
  }
  good: {
    interval: number
    intervalText: string
    card: Card
  }
  easy: {
    interval: number
    intervalText: string
    card: Card
  }
}

/**
 * Result of scheduling a card with a rating
 */
export interface ScheduleResult {
  card: Card
  log: ReviewLog
}

/**
 * Creates an FSRS scheduler instance with custom or default parameters
 *
 * Maps DeckSettings to FSRS parameters:
 * - requestRetention → request_retention (target retention rate)
 * - maximumInterval → maximum_interval (ceiling for scheduling)
 * - learningSteps → learning_steps (steps for new cards)
 *
 * @param settings - Optional deck settings to customize FSRS parameters
 * @returns Configured FSRS scheduler instance
 */
export function createFSRSScheduler(settings?: Partial<DeckSettings>): FSRS {
  const params: {
    request_retention?: number
    maximum_interval?: number
    learning_steps?: (`${number}m` | `${number}h` | `${number}d`)[]
    enable_fuzz?: boolean
  } = {}

  if (settings) {
    // Map DeckSettings to FSRS parameters
    if (settings.requestRetention !== undefined) {
      params.request_retention = settings.requestRetention
    }
    if (settings.maximumInterval !== undefined) {
      params.maximum_interval = settings.maximumInterval
    }
    if (settings.learningSteps !== undefined && settings.learningSteps.length > 0) {
      // Convert learning steps from minutes to FSRS step format (e.g., [1, 10] → ['1m', '10m'])
      params.learning_steps = settings.learningSteps.map((minutes) => `${minutes}m` as const)
    }
    // Enable fuzzing for more natural intervals (adds randomness to prevent same-day pile-ups)
    params.enable_fuzz = true
  }

  return new FSRS(params)
}

/**
 * Creates a new card with initial FSRS state
 *
 * The card starts in the "New" state with due date set to now,
 * making it immediately available for study.
 *
 * @param now - Optional timestamp for card creation (defaults to current time)
 * @returns New FSRS card with initial state
 */
export function createNewCard(now?: Date): Card {
  const timestamp = now || new Date()
  return createFSRSEmptyCard(timestamp)
}

/**
 * Schedules a card based on user rating
 *
 * Uses the FSRS algorithm to calculate the next review interval and update card state.
 * Returns both the updated card and a review log entry for analytics.
 *
 * @param card - Current FSRS card state
 * @param rating - User rating (Again, Hard, Good, Easy)
 * @param scheduler - Optional FSRS instance (creates default if not provided)
 * @param now - Optional review timestamp (defaults to current time)
 * @returns Updated card state and review log
 */
export function scheduleCard(
  card: Card,
  rating: Rating,
  scheduler?: FSRS,
  now?: Date
): ScheduleResult {
  const fsrs = scheduler || createFSRSScheduler()
  const timestamp = now || new Date()

  // Get scheduling info for all ratings
  const scheduling = fsrs.repeat(card, timestamp)

  // Extract the result for the chosen rating based on Rating enum value
  let result
  switch (rating) {
    case Rating.Again:
      result = scheduling[Rating.Again]
      break
    case Rating.Hard:
      result = scheduling[Rating.Hard]
      break
    case Rating.Good:
      result = scheduling[Rating.Good]
      break
    case Rating.Easy:
      result = scheduling[Rating.Easy]
      break
    default:
      result = scheduling[Rating.Good]
  }

  return {
    card: result.card,
    log: result.log,
  }
}

/**
 * Gets scheduling information for all four rating buttons
 *
 * Useful for showing preview intervals like "1m", "10m", "1d", "4d" on rating buttons
 * before the user makes a choice.
 *
 * @param card - Current FSRS card state
 * @param scheduler - Optional FSRS instance (creates default if not provided)
 * @param now - Optional timestamp (defaults to current time)
 * @returns Scheduling info for all four ratings
 */
export function getSchedulingInfo(
  card: Card,
  scheduler?: FSRS,
  now?: Date
): SchedulingInfo {
  const fsrs = scheduler || createFSRSScheduler()
  const timestamp = now || new Date()

  const scheduling = fsrs.repeat(card, timestamp)

  return {
    again: {
      interval: scheduling[Rating.Again].card.scheduled_days,
      intervalText: formatInterval(scheduling[Rating.Again].card.scheduled_days),
      card: scheduling[Rating.Again].card,
    },
    hard: {
      interval: scheduling[Rating.Hard].card.scheduled_days,
      intervalText: formatInterval(scheduling[Rating.Hard].card.scheduled_days),
      card: scheduling[Rating.Hard].card,
    },
    good: {
      interval: scheduling[Rating.Good].card.scheduled_days,
      intervalText: formatInterval(scheduling[Rating.Good].card.scheduled_days),
      card: scheduling[Rating.Good].card,
    },
    easy: {
      interval: scheduling[Rating.Easy].card.scheduled_days,
      intervalText: formatInterval(scheduling[Rating.Easy].card.scheduled_days),
      card: scheduling[Rating.Easy].card,
    },
  }
}

/**
 * Formats an interval in days to human-readable format
 *
 * Examples:
 * - 0.007 days (10 minutes) → "10m"
 * - 0.5 days (12 hours) → "12h"
 * - 1 day → "1d"
 * - 7 days → "7d"
 * - 45 days → "1.5mo"
 * - 730 days → "2y"
 *
 * @param days - Interval in days (can be fractional for sub-day intervals)
 * @returns Human-readable interval string
 */
export function formatInterval(days: number): string {
  if (days < 1) {
    // Sub-day intervals: show in minutes or hours
    const minutes = Math.round(days * 24 * 60)
    if (minutes < 60) {
      // Ensure minimum of 1 minute display
      return `${Math.max(1, minutes)}m`
    }
    const hours = Math.round(days * 24)
    return `${hours}h`
  }

  if (days < 30) {
    // 1-29 days: show in days
    return `${Math.round(days)}d`
  }

  if (days < 365) {
    // 30-364 days: show in months
    const months = days / 30
    if (months < 2) {
      return `${months.toFixed(1)}mo`
    }
    return `${Math.round(months)}mo`
  }

  // 365+ days: show in years
  const years = days / 365
  if (years < 2) {
    return `${years.toFixed(1)}y`
  }
  return `${Math.round(years)}y`
}

/**
 * Filters cards that are due for review
 *
 * A card is considered due if its due date is less than or equal to the current time.
 * This includes new cards (due immediately), learning cards, and review cards.
 *
 * @param cards - Array of flashcards to filter
 * @param now - Optional timestamp (defaults to current time)
 * @returns Cards that are due for review
 */
export function getDueCards(cards: FlashCard[], now?: Date): FlashCard[] {
  const timestamp = now || new Date()
  return cards.filter((card) => {
    // Skip suspended and buried cards
    if (card.suspended || card.buried) {
      return false
    }
    // Check if card is due (handle both Date and Firestore Timestamp)
    const dueDate = toDate(card.fsrs.due)
    return dueDate <= timestamp
  })
}

/**
 * Sorts cards by due date (most overdue first)
 *
 * Cards that are more overdue (earlier due date) appear first.
 * This ensures users review the most critical cards first.
 *
 * @param cards - Array of flashcards to sort
 * @returns Sorted array (does not modify original)
 */
export function sortCardsByDue(cards: FlashCard[]): FlashCard[] {
  return [...cards].sort((a, b) => {
    // Handle both Date and Firestore Timestamp
    const aDue = toDate(a.fsrs.due)
    const bDue = toDate(b.fsrs.due)
    return aDue.getTime() - bDue.getTime()
  })
}

/**
 * Gets the readable state of a card
 *
 * Maps FSRS State enum to human-readable strings:
 * - State.New → 'new'
 * - State.Learning → 'learning'
 * - State.Review → 'review'
 * - State.Relearning → 'relearning'
 *
 * @param card - Flashcard to get state from
 * @returns Readable state string
 */
export function getCardState(card: FlashCard): 'new' | 'learning' | 'review' | 'relearning' {
  switch (card.fsrs.state) {
    case State.New:
      return 'new'
    case State.Learning:
      return 'learning'
    case State.Review:
      return 'review'
    case State.Relearning:
      return 'relearning'
    default:
      return 'new'
  }
}

/**
 * Counts cards by state
 *
 * Useful for deck statistics display (e.g., "20 new, 15 learning, 50 review")
 *
 * @param cards - Array of flashcards to count
 * @returns Object with counts for each state
 */
export function countCardsByState(cards: FlashCard[]): {
  new: number
  learning: number
  review: number
  relearning: number
  total: number
} {
  const counts = {
    new: 0,
    learning: 0,
    review: 0,
    relearning: 0,
    total: cards.length,
  }

  cards.forEach((card) => {
    // Skip suspended and buried cards
    if (card.suspended || card.buried) {
      return
    }

    const state = getCardState(card)
    counts[state]++
  })

  return counts
}

/**
 * Gets cards that are new (never studied)
 *
 * @param cards - Array of flashcards to filter
 * @returns Cards in New state
 */
export function getNewCards(cards: FlashCard[]): FlashCard[] {
  return cards.filter((card) => !card.suspended && !card.buried && card.fsrs.state === State.New)
}

/**
 * Gets cards that are in learning phase
 *
 * @param cards - Array of flashcards to filter
 * @returns Cards in Learning state
 */
export function getLearningCards(cards: FlashCard[]): FlashCard[] {
  return cards.filter(
    (card) => !card.suspended && !card.buried && card.fsrs.state === State.Learning
  )
}

/**
 * Gets cards that are due for review
 *
 * @param cards - Array of flashcards to filter
 * @param now - Optional timestamp (defaults to current time)
 * @returns Cards in Review state that are due
 */
export function getReviewCards(cards: FlashCard[], now?: Date): FlashCard[] {
  const timestamp = now || new Date()
  return cards.filter((card) => {
    if (card.suspended || card.buried || card.fsrs.state !== State.Review) {
      return false
    }
    // Handle both Date and Firestore Timestamp
    const dueDate = toDate(card.fsrs.due)
    return dueDate <= timestamp
  })
}

/**
 * Checks if a card is due for review
 *
 * @param card - Flashcard to check
 * @param now - Optional timestamp (defaults to current time)
 * @returns True if card is due
 */
export function isCardDue(card: FlashCard, now?: Date): boolean {
  const timestamp = now || new Date()
  // Handle both Date and Firestore Timestamp
  const dueDate = toDate(card.fsrs.due)
  return !card.suspended && !card.buried && dueDate <= timestamp
}

/**
 * Gets the number of days until a card is due
 *
 * @param card - Flashcard to check
 * @param now - Optional timestamp (defaults to current time)
 * @returns Number of days (negative if overdue)
 */
export function getDaysUntilDue(card: FlashCard, now?: Date): number {
  const timestamp = now || new Date()
  // Handle both Date and Firestore Timestamp
  const dueDate = toDate(card.fsrs.due)
  const diffMs = dueDate.getTime() - timestamp.getTime()
  return diffMs / (1000 * 60 * 60 * 24)
}
