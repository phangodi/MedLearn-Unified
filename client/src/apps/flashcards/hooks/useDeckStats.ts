/**
 * useDeckStats Hook
 *
 * Calculates comprehensive statistics for a flashcard deck including:
 * - Cards due today
 * - Study streak
 * - Retention rate
 * - Average review time
 * - Forecast (cards due per day for next 7 days)
 */

import { useMemo, useEffect, useState } from 'react'
import type { Deck, FlashCard } from '@/apps/flashcards/types/flashcard'
import { getUserReviews, getDeckCards } from '@/apps/flashcards/services/flashcardService'
import { getDueCards } from '@/apps/flashcards/services/fsrsService'
import { Rating } from 'ts-fsrs'

export interface DeckStats {
  // Cards due
  dueToday: number
  dueThisWeek: number
  newCardsAvailable: number
  reviewCardsAvailable: number
  learningCardsAvailable: number

  // Study streak
  studyStreak: number
  longestStreak: number
  lastStudiedDaysAgo: number | null

  // Retention
  retentionRate: number // Percentage (0-100)
  totalReviews: number
  successfulReviews: number // Good + Easy ratings

  // Performance
  averageReviewTimeSeconds: number
  cardsPerDay: number // Average over last 30 days

  // Forecast - cards due for next 7 days
  forecast: {
    date: Date
    dueCount: number
    newCount: number
    reviewCount: number
  }[]

  // Loading state
  loading: boolean
}

/**
 * Calculates statistics for a specific deck
 */
export function useDeckStats(deck: Deck | null, userId: string | null): DeckStats {
  const [cards, setCards] = useState<FlashCard[]>([])
  const [reviews, setReviews] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  // Load cards and reviews when deck changes
  useEffect(() => {
    if (!deck || !userId) {
      setCards([])
      setReviews([])
      return
    }

    const loadData = async () => {
      setLoading(true)
      try {
        // Load cards
        const deckCards = await getDeckCards(deck.id)
        setCards(deckCards)

        // Load reviews from last 30 days
        const thirtyDaysAgo = new Date()
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)
        const userReviews = await getUserReviews(userId, thirtyDaysAgo)

        // Filter reviews for this deck
        const deckReviews = userReviews.filter((r) => r.deckId === deck.id)
        setReviews(deckReviews)
      } catch (error) {
        console.error('Error loading deck stats:', error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [deck?.id, userId])

  // Calculate statistics
  const stats = useMemo<DeckStats>(() => {
    if (!deck) {
      return getEmptyStats()
    }

    const now = new Date()

    // =============================================================================
    // Cards Due
    // =============================================================================

    const dueCards = getDueCards(cards, now)
    const dueToday = dueCards.length
    const newCardsAvailable = cards.filter(
      (c) => !c.suspended && !c.buried && c.fsrs.state === 0 // State.New
    ).length
    const learningCardsAvailable = cards.filter(
      (c) =>
        !c.suspended &&
        !c.buried &&
        (c.fsrs.state === 1 || c.fsrs.state === 3) && // State.Learning or State.Relearning
        c.fsrs.due <= now
    ).length
    const reviewCardsAvailable = cards.filter(
      (c) => !c.suspended && !c.buried && c.fsrs.state === 2 && c.fsrs.due <= now // State.Review
    ).length

    // Cards due in next 7 days
    const oneWeekFromNow = new Date(now)
    oneWeekFromNow.setDate(oneWeekFromNow.getDate() + 7)
    const dueThisWeek = cards.filter(
      (c) => !c.suspended && !c.buried && c.fsrs.due <= oneWeekFromNow
    ).length

    // =============================================================================
    // Study Streak
    // =============================================================================

    const { studyStreak, longestStreak, lastStudiedDaysAgo } = calculateStreak(reviews, now)

    // =============================================================================
    // Retention Rate
    // =============================================================================

    const totalReviews = reviews.length
    const successfulReviews = reviews.filter(
      (r) => r.rating === Rating.Good || r.rating === Rating.Easy
    ).length
    const retentionRate = totalReviews > 0 ? Math.round((successfulReviews / totalReviews) * 100) : 0

    // =============================================================================
    // Performance Metrics
    // =============================================================================

    const averageReviewTimeSeconds =
      totalReviews > 0
        ? Math.round(reviews.reduce((sum, r) => sum + (r.timeMs || 0), 0) / totalReviews / 1000)
        : 0

    // Cards per day (average over review period)
    const reviewDays = getUniqueDays(reviews)
    const cardsPerDay = reviewDays.length > 0 ? Math.round(totalReviews / reviewDays.length) : 0

    // =============================================================================
    // Forecast - Next 7 Days
    // =============================================================================

    const forecast = generateForecast(cards, now, 7)

    return {
      dueToday,
      dueThisWeek,
      newCardsAvailable,
      reviewCardsAvailable,
      learningCardsAvailable,
      studyStreak,
      longestStreak,
      lastStudiedDaysAgo,
      retentionRate,
      totalReviews,
      successfulReviews,
      averageReviewTimeSeconds,
      cardsPerDay,
      forecast,
      loading,
    }
  }, [deck, cards, reviews, loading])

  return stats
}

/**
 * Returns empty stats object
 */
function getEmptyStats(): DeckStats {
  return {
    dueToday: 0,
    dueThisWeek: 0,
    newCardsAvailable: 0,
    reviewCardsAvailable: 0,
    learningCardsAvailable: 0,
    studyStreak: 0,
    longestStreak: 0,
    lastStudiedDaysAgo: null,
    retentionRate: 0,
    totalReviews: 0,
    successfulReviews: 0,
    averageReviewTimeSeconds: 0,
    cardsPerDay: 0,
    forecast: [],
    loading: false,
  }
}

/**
 * Calculates study streak from review history
 */
function calculateStreak(
  reviews: any[],
  now: Date
): {
  studyStreak: number
  longestStreak: number
  lastStudiedDaysAgo: number | null
} {
  if (reviews.length === 0) {
    return {
      studyStreak: 0,
      longestStreak: 0,
      lastStudiedDaysAgo: null,
    }
  }

  // Get unique days when reviews were done
  const reviewDays = getUniqueDays(reviews)
  reviewDays.sort((a, b) => b.getTime() - a.getTime()) // Sort descending (newest first)

  if (reviewDays.length === 0) {
    return {
      studyStreak: 0,
      longestStreak: 0,
      lastStudiedDaysAgo: null,
    }
  }

  // Calculate days since last review
  const lastReviewDate = reviewDays[0]
  const lastStudiedDaysAgo = Math.floor((now.getTime() - lastReviewDate.getTime()) / (1000 * 60 * 60 * 24))

  // Calculate current streak
  let currentStreak = 0
  const todayStart = new Date(now)
  todayStart.setHours(0, 0, 0, 0)

  let checkDate = new Date(todayStart)

  for (const reviewDay of reviewDays) {
    const reviewDayStart = new Date(reviewDay)
    reviewDayStart.setHours(0, 0, 0, 0)

    // Check if review is on the expected day
    if (reviewDayStart.getTime() === checkDate.getTime()) {
      currentStreak++
      checkDate.setDate(checkDate.getDate() - 1)
    } else if (reviewDayStart.getTime() < checkDate.getTime()) {
      // Gap found, streak broken
      break
    }
  }

  // Calculate longest streak
  let longestStreak = 0
  let tempStreak = 1

  for (let i = 1; i < reviewDays.length; i++) {
    const prevDay = new Date(reviewDays[i - 1])
    prevDay.setHours(0, 0, 0, 0)
    const currDay = new Date(reviewDays[i])
    currDay.setHours(0, 0, 0, 0)

    const dayDiff = Math.floor((prevDay.getTime() - currDay.getTime()) / (1000 * 60 * 60 * 24))

    if (dayDiff === 1) {
      tempStreak++
    } else {
      longestStreak = Math.max(longestStreak, tempStreak)
      tempStreak = 1
    }
  }
  longestStreak = Math.max(longestStreak, tempStreak)

  return {
    studyStreak: currentStreak,
    longestStreak,
    lastStudiedDaysAgo,
  }
}

/**
 * Gets unique days from review history
 */
function getUniqueDays(reviews: any[]): Date[] {
  const daySet = new Set<string>()

  reviews.forEach((review) => {
    const date = review.review instanceof Date ? review.review : new Date(review.review)
    const dayKey = date.toISOString().split('T')[0] // YYYY-MM-DD
    daySet.add(dayKey)
  })

  return Array.from(daySet).map((dayKey) => new Date(dayKey))
}

/**
 * Generates forecast for next N days
 */
function generateForecast(
  cards: FlashCard[],
  startDate: Date,
  days: number
): {
  date: Date
  dueCount: number
  newCount: number
  reviewCount: number
}[] {
  const forecast: {
    date: Date
    dueCount: number
    newCount: number
    reviewCount: number
  }[] = []

  for (let i = 0; i < days; i++) {
    const date = new Date(startDate)
    date.setDate(date.getDate() + i)
    date.setHours(23, 59, 59, 999) // End of day

    // Count cards due by this date
    const dueCards = cards.filter((c) => !c.suspended && !c.buried && c.fsrs.due <= date)

    const newCount = dueCards.filter((c) => c.fsrs.state === 0).length // State.New
    const reviewCount = dueCards.filter(
      (c) => c.fsrs.state === 1 || c.fsrs.state === 2 || c.fsrs.state === 3 // Learning, Review, Relearning
    ).length

    forecast.push({
      date: new Date(date),
      dueCount: dueCards.length,
      newCount,
      reviewCount,
    })
  }

  return forecast
}
