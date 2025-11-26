/**
 * Zustand Store for MedLearn Flashcard System
 *
 * Central state management for flashcards, decks, and study sessions.
 * Integrates with Firestore via flashcardService and FSRS scheduling.
 */

import { create } from 'zustand'
import type {
  Deck,
  FlashCard,
  StudySession,
  CardFilters,
} from '@/apps/flashcards/types/flashcard'
import { Rating, State } from '@/apps/flashcards/types/flashcard'
import {
  createDeck as createDeckService,
  updateDeck as updateDeckService,
  deleteDeck as deleteDeckService,
  getDeck as getDeckService,
  getUserDecks as getUserDecksService,
  createCard as createCardService,
  updateCard as updateCardService,
  deleteCard as deleteCardService,
  getDeckCards as getDeckCardsService,
  getDueCards as getDueCardsService,
  updateCardFSRS,
  startSession,
  endSession as endSessionService,
  recordReview,
  updateDeckStats,
} from '@/apps/flashcards/services/flashcardService'
import {
  createFSRSScheduler,
  scheduleCard,
  sortCardsByDue,
  createNewCard,
} from '@/apps/flashcards/services/fsrsService'
import {
  getPreloadedDeck,
  getPreloadedCards,
  isPreloadedDeck,
} from '@/apps/flashcards/data/preloaded'

interface FlashcardState {
  // =============================================================================
  // STATE - Decks
  // =============================================================================
  decks: Deck[]
  currentDeck: Deck | null
  decksLoading: boolean
  decksError: string | null

  // =============================================================================
  // STATE - Cards
  // =============================================================================
  cards: FlashCard[]
  currentCard: FlashCard | null
  cardsLoading: boolean

  // =============================================================================
  // STATE - Study Session
  // =============================================================================
  session: StudySession | null
  sessionQueue: FlashCard[]
  sessionIndex: number
  showAnswer: boolean
  cardStartTime: number
  lastReviewUndo: { card: FlashCard; index: number } | null

  // =============================================================================
  // STATE - UI
  // =============================================================================
  view: 'browser' | 'study' | 'editor' | 'stats' | 'deck-detail'
  editorMode: 'create' | 'edit'
  editingCard: FlashCard | null
  editingDeck: Deck | null
  searchQuery: string
  filters: CardFilters

  // =============================================================================
  // ACTIONS - Decks
  // =============================================================================

  /**
   * Loads all decks for a user
   * @param userId - ID of the user
   */
  loadDecks: (userId: string) => Promise<void>

  /**
   * Loads a single deck by ID and sets it as current
   * @param deckId - ID of the deck to load
   */
  loadDeck: (deckId: string) => Promise<void>

  /**
   * Creates a new deck
   * @param userId - ID of the user creating the deck
   * @param deck - Partial deck data
   * @returns The ID of the created deck
   */
  createDeck: (userId: string, deck: Partial<Deck>) => Promise<string>

  /**
   * Updates an existing deck
   * @param deckId - ID of the deck to update
   * @param data - Partial deck data to update
   */
  updateDeck: (deckId: string, data: Partial<Deck>) => Promise<void>

  /**
   * Deletes a deck and all its cards
   * @param deckId - ID of the deck to delete
   */
  deleteDeck: (deckId: string) => Promise<void>

  /**
   * Sets the current deck
   * @param deck - Deck to set as current (or null to clear)
   */
  setCurrentDeck: (deck: Deck | null) => void

  // =============================================================================
  // ACTIONS - Cards
  // =============================================================================

  /**
   * Loads all cards for a deck
   * @param deckId - ID of the deck
   */
  loadCards: (deckId: string) => Promise<void>

  /**
   * Creates a new card
   * @param card - Partial card data
   * @returns The ID of the created card
   */
  createCard: (card: Partial<FlashCard>) => Promise<string>

  /**
   * Updates an existing card
   * @param cardId - ID of the card to update
   * @param data - Partial card data to update
   */
  updateCard: (cardId: string, data: Partial<FlashCard>) => Promise<void>

  /**
   * Deletes a card
   * @param cardId - ID of the card to delete
   */
  deleteCard: (cardId: string) => Promise<void>

  /**
   * Sets the card being edited
   * @param card - Card to edit (or null to clear)
   */
  setEditingCard: (card: FlashCard | null) => void

  // =============================================================================
  // ACTIONS - Study Session
  // =============================================================================

  /**
   * Starts a new study session for a deck
   * @param deckId - ID of the deck to study
   * @param userId - ID of the user
   */
  startStudySession: (deckId: string, userId: string) => Promise<void>

  /**
   * Ends the current study session
   */
  endStudySession: () => Promise<void>

  /**
   * Reveals the answer for the current card
   */
  revealAnswer: () => void

  /**
   * Rates the current card and moves to the next one
   * @param rating - Rating from user (Again, Hard, Good, Easy)
   */
  rateCard: (rating: Rating) => Promise<void>

  /**
   * Undoes the last rating and returns to the previous card
   */
  undoLastRating: () => Promise<void>

  /**
   * Skips the current card without rating
   */
  skipCard: () => void

  // =============================================================================
  // ACTIONS - UI
  // =============================================================================

  /**
   * Sets the current view
   * @param view - View to display
   */
  setView: (view: FlashcardState['view']) => void

  /**
   * Sets the editor mode (create or edit)
   * @param mode - Editor mode
   */
  setEditorMode: (mode: 'create' | 'edit') => void

  /**
   * Sets the search query for filtering cards
   * @param query - Search query string
   */
  setSearchQuery: (query: string) => void

  /**
   * Sets filters for querying cards
   * @param filters - Partial filters to apply
   */
  setFilters: (filters: Partial<CardFilters>) => void

  /**
   * Clears all filters
   */
  clearFilters: () => void

  // =============================================================================
  // ACTIONS - Reset
  // =============================================================================

  /**
   * Resets the entire store to initial state
   */
  reset: () => void
}

/**
 * Initial state values
 */
const initialState = {
  // Decks
  decks: [],
  currentDeck: null,
  decksLoading: false,
  decksError: null,

  // Cards
  cards: [],
  currentCard: null,
  cardsLoading: false,

  // Study Session
  session: null,
  sessionQueue: [],
  sessionIndex: 0,
  showAnswer: false,
  cardStartTime: 0,
  lastReviewUndo: null,

  // UI State
  view: 'browser' as const,
  editorMode: 'create' as const,
  editingCard: null,
  editingDeck: null,
  searchQuery: '',
  filters: {},
}

/**
 * Flashcard Store
 *
 * Manages all flashcard-related state and operations.
 * Use via the `useFlashcards` hook for enhanced functionality.
 */
export const useFlashcardStore = create<FlashcardState>((set, get) => ({
  ...initialState,

  // =============================================================================
  // DECK ACTIONS
  // =============================================================================

  loadDecks: async (userId: string) => {
    set({ decksLoading: true, decksError: null })
    try {
      const decks = await getUserDecksService(userId)
      set({ decks, decksLoading: false })
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to load decks'
      set({ decksError: errorMessage, decksLoading: false })
      console.error('Error loading decks:', error)
    }
  },

  loadDeck: async (deckId: string) => {
    set({ decksLoading: true, decksError: null })
    try {
      // Check if it's a preloaded deck first
      if (isPreloadedDeck(deckId)) {
        const preloadedDeck = getPreloadedDeck(deckId)
        if (preloadedDeck) {
          set({ currentDeck: preloadedDeck, decksLoading: false })
          return
        }
      }

      // Otherwise load from Firestore
      const deck = await getDeckService(deckId)
      if (deck) {
        set({ currentDeck: deck, decksLoading: false })
      } else {
        set({ decksError: 'Deck not found', decksLoading: false })
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to load deck'
      set({ decksError: errorMessage, decksLoading: false })
      console.error('Error loading deck:', error)
    }
  },

  createDeck: async (userId: string, deck: Partial<Deck>) => {
    try {
      console.log('Creating deck for user:', userId, deck)
      const deckId = await createDeckService(userId, deck)
      console.log('Deck created with ID:', deckId)

      // Reload decks to get the new one
      await get().loadDecks(userId)
      return deckId
    } catch (error) {
      console.error('Error in createDeck store action:', error)

      // Re-throw with enhanced error context
      if (error instanceof Error) {
        throw new Error(error.message)
      }
      throw new Error('Failed to create deck: Unknown error')
    }
  },

  updateDeck: async (deckId: string, data: Partial<Deck>) => {
    try {
      await updateDeckService(deckId, data)

      // Update local state
      const { decks, currentDeck } = get()
      const updatedDecks = decks.map((d) => (d.id === deckId ? { ...d, ...data } : d))
      set({ decks: updatedDecks })

      // Update current deck if it's the one being updated
      if (currentDeck?.id === deckId) {
        set({ currentDeck: { ...currentDeck, ...data } })
      }
    } catch (error) {
      console.error('Error updating deck:', error)
      throw error
    }
  },

  deleteDeck: async (deckId: string) => {
    try {
      await deleteDeckService(deckId)

      // Update local state
      const { decks, currentDeck } = get()
      const filteredDecks = decks.filter((d) => d.id !== deckId)
      set({ decks: filteredDecks })

      // Clear current deck if it was deleted
      if (currentDeck?.id === deckId) {
        set({ currentDeck: null, cards: [], view: 'browser' })
      }
    } catch (error) {
      console.error('Error deleting deck:', error)
      throw error
    }
  },

  setCurrentDeck: (deck: Deck | null) => {
    set({ currentDeck: deck })
  },

  // =============================================================================
  // CARD ACTIONS
  // =============================================================================

  loadCards: async (deckId: string) => {
    set({ cardsLoading: true })
    try {
      // Check if it's a preloaded deck first
      if (isPreloadedDeck(deckId)) {
        const preloadedCardsData = getPreloadedCards(deckId)
        // Convert preloaded cards to FlashCard format with FSRS state
        const cards: FlashCard[] = preloadedCardsData.map((cardData) => {
          const newCardFSRS = createNewCard()
          return {
            id: cardData.id,
            deckId: deckId,
            userId: '', // Preloaded cards don't have a user
            front: cardData.front,
            back: cardData.back,
            tags: cardData.tags || [],
            fsrs: {
              due: newCardFSRS.due,
              stability: newCardFSRS.stability,
              difficulty: newCardFSRS.difficulty,
              elapsed_days: newCardFSRS.elapsed_days,
              scheduled_days: newCardFSRS.scheduled_days,
              reps: newCardFSRS.reps,
              lapses: newCardFSRS.lapses,
              state: newCardFSRS.state,
              last_review: newCardFSRS.last_review,
            },
            suspended: false,
            createdAt: { seconds: Date.now() / 1000, nanoseconds: 0 } as any,
            updatedAt: { seconds: Date.now() / 1000, nanoseconds: 0 } as any,
          }
        })
        set({ cards, cardsLoading: false })
        return
      }

      // Otherwise load from Firestore
      const cards = await getDeckCardsService(deckId)
      set({ cards, cardsLoading: false })
    } catch (error) {
      set({ cardsLoading: false })
      console.error('Error loading cards:', error)
    }
  },

  createCard: async (card: Partial<FlashCard>) => {
    try {
      const cardId = await createCardService(card)

      // Reload cards to include the new one
      if (card.deckId) {
        await get().loadCards(card.deckId)
        // Update deck stats
        const deck = await getDeckService(card.deckId)
        if (deck) {
          get().updateDeck(card.deckId, {
            cardCount: deck.cardCount,
            newCount: deck.newCount,
            learningCount: deck.learningCount,
            reviewCount: deck.reviewCount,
          })
        }
      }

      return cardId
    } catch (error) {
      console.error('Error creating card:', error)
      throw error
    }
  },

  updateCard: async (cardId: string, data: Partial<FlashCard>) => {
    try {
      await updateCardService(cardId, data)

      // Update local state
      const { cards } = get()
      const updatedCards = cards.map((c) => (c.id === cardId ? { ...c, ...data } : c))
      set({ cards: updatedCards })
    } catch (error) {
      console.error('Error updating card:', error)
      throw error
    }
  },

  deleteCard: async (cardId: string) => {
    try {
      const { cards } = get()
      const cardToDelete = cards.find((c) => c.id === cardId)

      await deleteCardService(cardId)

      // Update local state
      const filteredCards = cards.filter((c) => c.id !== cardId)
      set({ cards: filteredCards })

      // Update deck stats if card was found
      if (cardToDelete?.deckId) {
        const deck = await getDeckService(cardToDelete.deckId)
        if (deck) {
          get().updateDeck(cardToDelete.deckId, {
            cardCount: deck.cardCount,
            newCount: deck.newCount,
            learningCount: deck.learningCount,
            reviewCount: deck.reviewCount,
          })
        }
      }
    } catch (error) {
      console.error('Error deleting card:', error)
      throw error
    }
  },

  setEditingCard: (card: FlashCard | null) => {
    set({ editingCard: card })
  },

  // =============================================================================
  // STUDY SESSION ACTIONS
  // =============================================================================

  startStudySession: async (deckId: string, userId: string) => {
    try {
      let dueCards: FlashCard[]

      // Check if it's a preloaded deck
      if (isPreloadedDeck(deckId)) {
        // For preloaded decks, use the cards already loaded in state
        const { cards } = get()
        if (cards.length === 0) {
          throw new Error('No cards loaded. Please load the deck first.')
        }
        // All preloaded cards are considered "due" since they're new
        dueCards = cards.filter(card =>
          card.fsrs.due.getTime() <= Date.now() || card.fsrs.state === State.New
        )
      } else {
        // Get due cards from Firestore
        dueCards = await getDueCardsService(deckId, userId)
      }

      if (dueCards.length === 0) {
        throw new Error('No cards due for review')
      }

      // Sort by due date (most overdue first)
      const sortedCards = sortCardsByDue(dueCards)

      // Start session - for preloaded decks, we create a local session ID
      let sessionId: string
      if (isPreloadedDeck(deckId)) {
        sessionId = `preloaded-session-${Date.now()}`
      } else {
        sessionId = await startSession(userId, deckId)
      }

      // Create session object
      const session: StudySession = {
        id: sessionId,
        userId,
        deckId,
        startedAt: { seconds: Date.now() / 1000, nanoseconds: 0 } as any,
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

      set({
        session,
        sessionQueue: sortedCards,
        sessionIndex: 0,
        currentCard: sortedCards[0],
        showAnswer: false,
        cardStartTime: Date.now(),
        lastReviewUndo: null,
        view: 'study',
      })
    } catch (error) {
      console.error('Error starting study session:', error)
      throw error
    }
  },

  endStudySession: async () => {
    const { session } = get()

    if (!session) {
      return
    }

    try {
      // For preloaded decks, skip Firestore operations
      if (!isPreloadedDeck(session.deckId)) {
        // End session in Firestore
        await endSessionService(session.id, {
          cardsStudied: session.cardsStudied,
          newCards: session.newCards,
          reviewCards: session.reviewCards,
          learningCards: session.learningCards,
          againCount: session.againCount,
          hardCount: session.hardCount,
          goodCount: session.goodCount,
          easyCount: session.easyCount,
          totalTimeMs: session.totalTimeMs,
        })

        // Update deck's lastStudiedAt
        const deck = await getDeckService(session.deckId)
        if (deck) {
          await updateDeckService(session.deckId, {
            lastStudiedAt: { seconds: Date.now() / 1000, nanoseconds: 0 } as any,
          })
        }

        // Reload deck stats
        await updateDeckStats(session.deckId)
      }

      // Reset session state
      set({
        session: null,
        sessionQueue: [],
        sessionIndex: 0,
        currentCard: null,
        showAnswer: false,
        cardStartTime: 0,
        lastReviewUndo: null,
        view: 'browser',
      })
    } catch (error) {
      console.error('Error ending study session:', error)
      throw error
    }
  },

  revealAnswer: () => {
    set({ showAnswer: true })
  },

  rateCard: async (rating: Rating) => {
    const { currentCard, session, sessionQueue, sessionIndex, cardStartTime, currentDeck } = get()

    if (!currentCard || !session || !currentDeck) {
      return
    }

    try {
      // Calculate time spent on card
      const timeMs = Date.now() - cardStartTime

      // Create FSRS scheduler with deck settings
      const scheduler = createFSRSScheduler(currentDeck.settings)

      // Schedule the card with FSRS
      const { card: updatedFSRS, log } = scheduleCard(currentCard.fsrs, rating, scheduler)

      // For non-preloaded decks, save to Firestore
      if (!isPreloadedDeck(session.deckId)) {
        // Update card in Firestore
        await updateCardFSRS(currentCard.id, updatedFSRS)

        // Record review in Firestore
        await recordReview({
          cardId: currentCard.id,
          userId: session.userId,
          deckId: session.deckId,
          rating,
          state: currentCard.fsrs.state,
          due: updatedFSRS.due,
          stability: updatedFSRS.stability,
          difficulty: updatedFSRS.difficulty,
          elapsedDays: log.elapsed_days,
          lastElapsedDays: log.last_elapsed_days,
          scheduledDays: log.scheduled_days,
          review: log.review,
          timeMs,
        })
      }

      // Update session statistics
      const updatedSession: StudySession = {
        ...session,
        cardsStudied: session.cardsStudied + 1,
        totalTimeMs: session.totalTimeMs + timeMs,
      }

      // Increment rating counters
      switch (rating) {
        case Rating.Again:
          updatedSession.againCount++
          break
        case Rating.Hard:
          updatedSession.hardCount++
          break
        case Rating.Good:
          updatedSession.goodCount++
          break
        case Rating.Easy:
          updatedSession.easyCount++
          break
      }

      // Increment state counters
      switch (currentCard.fsrs.state) {
        case State.New:
          updatedSession.newCards++
          break
        case State.Learning:
        case State.Relearning:
          updatedSession.learningCards++
          break
        case State.Review:
          updatedSession.reviewCards++
          break
      }

      // Save undo information
      const lastReviewUndo = {
        card: currentCard,
        index: sessionIndex,
      }

      // Move to next card
      const nextIndex = sessionIndex + 1
      const nextCard = sessionQueue[nextIndex]

      if (nextCard) {
        // More cards to review
        set({
          session: updatedSession,
          sessionIndex: nextIndex,
          currentCard: nextCard,
          showAnswer: false,
          cardStartTime: Date.now(),
          lastReviewUndo,
        })
      } else {
        // No more cards - end session
        set({
          session: updatedSession,
          sessionIndex: nextIndex,
          currentCard: null,
          showAnswer: false,
          lastReviewUndo,
        })

        // Auto-end session
        await get().endStudySession()
      }
    } catch (error) {
      console.error('Error rating card:', error)
      throw error
    }
  },

  undoLastRating: async () => {
    const { lastReviewUndo, session } = get()

    if (!lastReviewUndo || !session) {
      return
    }

    try {
      // Restore previous card and index
      set({
        currentCard: lastReviewUndo.card,
        sessionIndex: lastReviewUndo.index,
        showAnswer: false,
        cardStartTime: Date.now(),
        lastReviewUndo: null,
      })

      // Note: We don't undo the Firestore changes as that would be complex
      // and could mess up the review history. This just allows the user
      // to review the card again if they made a mistake.
    } catch (error) {
      console.error('Error undoing rating:', error)
      throw error
    }
  },

  skipCard: () => {
    const { sessionQueue, sessionIndex } = get()

    // Move to next card without rating
    const nextIndex = sessionIndex + 1
    const nextCard = sessionQueue[nextIndex]

    if (nextCard) {
      set({
        sessionIndex: nextIndex,
        currentCard: nextCard,
        showAnswer: false,
        cardStartTime: Date.now(),
      })
    } else {
      // No more cards
      set({
        sessionIndex: nextIndex,
        currentCard: null,
        showAnswer: false,
      })
    }
  },

  // =============================================================================
  // UI ACTIONS
  // =============================================================================

  setView: (view: FlashcardState['view']) => {
    set({ view })
  },

  setEditorMode: (mode: 'create' | 'edit') => {
    set({ editorMode: mode })
  },

  setSearchQuery: (query: string) => {
    set({ searchQuery: query })
  },

  setFilters: (filters: Partial<CardFilters>) => {
    set((state) => ({
      filters: { ...state.filters, ...filters },
    }))
  },

  clearFilters: () => {
    set({ filters: {}, searchQuery: '' })
  },

  // =============================================================================
  // RESET
  // =============================================================================

  reset: () => {
    set(initialState)
  },
}))
