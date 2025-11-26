/**
 * useFlashcards Hook
 *
 * Main hook for the MedLearn flashcard system.
 * Wraps the Zustand store and provides:
 * - Auto-loading of decks when user changes
 * - Computed values (totalDue, studyProgress, etc.)
 * - Integration with AuthContext
 */

import { useEffect, useMemo } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { useFlashcardStore } from '@/store/flashcardStore'
import { getDueCards, countCardsByState } from '@/apps/flashcards/services/fsrsService'

/**
 * Helper to convert Firestore Timestamps to JavaScript Dates
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
 * Main flashcard hook with auto-loading and computed values
 */
export function useFlashcards() {
  const { user } = useAuth()
  const store = useFlashcardStore()

  // Auto-load decks when user changes
  useEffect(() => {
    if (user?.uid && !store.decksLoading && store.decks.length === 0) {
      store.loadDecks(user.uid)
    }
  }, [user?.uid])

  // Computed: Total cards due across all decks
  const totalDue = useMemo(() => {
    if (!user?.uid) return 0

    return store.decks.reduce((total, deck) => {
      // Use dueCount if available (computed accurately), fallback to old method
      const deckDue = deck.dueCount ?? (deck.reviewCount + deck.learningCount)
      return total + deckDue
    }, 0)
  }, [store.decks, user?.uid])

  // Computed: Cards due in current deck
  const currentDeckDue = useMemo(() => {
    if (!store.currentDeck || store.cards.length === 0) {
      return {
        total: 0,
        new: 0,
        learning: 0,
        review: 0,
        dueCards: [],
      }
    }

    const dueCards = getDueCards(store.cards)
    const counts = countCardsByState(dueCards)

    return {
      total: dueCards.length,
      new: counts.new,
      learning: counts.learning,
      review: counts.review,
      dueCards,
    }
  }, [store.currentDeck, store.cards])

  // Computed: Study session progress
  const studyProgress = useMemo(() => {
    if (!store.session || store.sessionQueue.length === 0) {
      return {
        current: 0,
        total: 0,
        percentage: 0,
        remaining: 0,
      }
    }

    const current = store.sessionIndex
    const total = store.sessionQueue.length
    const percentage = Math.round((current / total) * 100)
    const remaining = total - current

    return {
      current,
      total,
      percentage,
      remaining,
    }
  }, [store.session, store.sessionQueue, store.sessionIndex])

  // Computed: Filtered cards based on search and filters
  const filteredCards = useMemo(() => {
    let filtered = [...store.cards]

    // Apply search query
    if (store.searchQuery) {
      const query = store.searchQuery.toLowerCase()
      filtered = filtered.filter((card) => {
        const frontText = card.front.text.toLowerCase()
        const backText = card.back.text.toLowerCase()
        const tags = card.tags.join(' ').toLowerCase()
        return frontText.includes(query) || backText.includes(query) || tags.includes(query)
      })
    }

    // Apply state filter
    if (store.filters.state && store.filters.state.length > 0) {
      filtered = filtered.filter((card) => store.filters.state?.includes(card.fsrs.state))
    }

    // Apply tags filter
    if (store.filters.tags && store.filters.tags.length > 0) {
      filtered = filtered.filter((card) =>
        store.filters.tags?.some((tag) => card.tags.includes(tag))
      )
    }

    // Apply due date filter
    if (store.filters.dueBefore) {
      filtered = filtered.filter((card) => toDate(card.fsrs.due) <= store.filters.dueBefore!)
    }

    return filtered
  }, [store.cards, store.searchQuery, store.filters])

  // Computed: Available tags from all cards
  const availableTags = useMemo(() => {
    const tagSet = new Set<string>()
    store.cards.forEach((card) => {
      card.tags.forEach((tag) => tagSet.add(tag))
    })
    return Array.from(tagSet).sort()
  }, [store.cards])

  // Computed: Session statistics
  const sessionStats = useMemo(() => {
    if (!store.session) {
      return null
    }

    const { session } = store
    const accuracy = session.cardsStudied > 0
      ? Math.round(
          ((session.goodCount + session.easyCount) / session.cardsStudied) * 100
        )
      : 0

    const averageTimeSeconds = session.cardsStudied > 0
      ? Math.round(session.totalTimeMs / session.cardsStudied / 1000)
      : 0

    return {
      cardsStudied: session.cardsStudied,
      accuracy,
      averageTimeSeconds,
      newCards: session.newCards,
      reviewCards: session.reviewCards,
      learningCards: session.learningCards,
      ratings: {
        again: session.againCount,
        hard: session.hardCount,
        good: session.goodCount,
        easy: session.easyCount,
      },
    }
  }, [store.session])

  // Helper: Check if user can undo
  const canUndo = useMemo(() => {
    return store.lastReviewUndo !== null && store.session !== null
  }, [store.lastReviewUndo, store.session])

  // Helper: Check if deck is ready to study
  const canStudy = useMemo(() => {
    return (
      store.currentDeck !== null &&
      !store.cardsLoading &&
      currentDeckDue.total > 0
    )
  }, [store.currentDeck, store.cardsLoading, currentDeckDue.total])

  // Helper: Get deck by ID
  const getDeckById = (deckId: string) => {
    return store.decks.find((deck) => deck.id === deckId) || null
  }

  // Helper: Get card by ID
  const getCardById = (cardId: string) => {
    return store.cards.find((card) => card.id === cardId) || null
  }

  return {
    // Store state
    ...store,

    // User info
    userId: user?.uid || null,

    // Computed values
    totalDue,
    currentDeckDue,
    studyProgress,
    filteredCards,
    availableTags,
    sessionStats,
    canUndo,
    canStudy,

    // Helper functions
    getDeckById,
    getCardById,
  }
}
