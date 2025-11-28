/**
 * useStudySession Hook
 *
 * Provides study session functionality including:
 * - Keyboard event handling (Space, 1-4, Escape, Ctrl+Z)
 * - Session timer
 * - Progress calculations
 * - Auto-end session when queue is empty
 */

import { useEffect, useState, useCallback } from 'react'
import { useFlashcards } from './useFlashcards'
import { Rating } from '@/apps/flashcards/types/flashcard'

export interface StudySessionHook {
  // Session state
  isActive: boolean
  isPaused: boolean
  currentCard: ReturnType<typeof useFlashcards>['currentCard']
  showAnswer: boolean
  progress: ReturnType<typeof useFlashcards>['studyProgress']

  // Timer
  elapsedSeconds: number
  formattedTime: string

  // Actions
  startSession: (deckId: string) => Promise<void>
  endSession: () => Promise<void>
  pauseSession: () => void
  resumeSession: () => void
  revealAnswer: () => void
  rateCard: (rating: Rating) => Promise<void>
  undoLastRating: () => Promise<void>
  skipCard: () => void

  // Keyboard shortcuts enabled
  keyboardEnabled: boolean
  enableKeyboard: () => void
  disableKeyboard: () => void
}

/**
 * Study session hook with keyboard controls and timer
 */
export function useStudySession(): StudySessionHook {
  const flashcards = useFlashcards()
  const [elapsedSeconds, setElapsedSeconds] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [keyboardEnabled, setKeyboardEnabled] = useState(true)

  const isActive = flashcards.session !== null

  // =============================================================================
  // Timer Management
  // =============================================================================

  useEffect(() => {
    if (!isActive || isPaused) {
      return
    }

    // Start timer
    const startTime = Date.now()
    const baseElapsed = elapsedSeconds

    const interval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000) + baseElapsed
      setElapsedSeconds(elapsed)
    }, 1000)

    return () => clearInterval(interval)
  }, [isActive, isPaused, elapsedSeconds])

  // Reset timer when session ends
  useEffect(() => {
    if (!isActive) {
      setElapsedSeconds(0)
      setIsPaused(false)
    }
  }, [isActive])

  // Format elapsed time as MM:SS or HH:MM:SS
  const formattedTime = formatElapsedTime(elapsedSeconds)

  // =============================================================================
  // Session Actions
  // =============================================================================

  const startSession = useCallback(
    async (deckId: string) => {
      if (!flashcards.userId) {
        throw new Error('User not authenticated')
      }

      await flashcards.startStudySession(deckId, flashcards.userId)
      setElapsedSeconds(0)
      setIsPaused(false)
    },
    [flashcards.userId, flashcards.startStudySession]
  )

  const endSession = useCallback(async () => {
    await flashcards.endStudySession()
  }, [flashcards.endStudySession])

  const pauseSession = useCallback(() => {
    setIsPaused(true)
  }, [])

  const resumeSession = useCallback(() => {
    setIsPaused(false)
  }, [])

  const revealAnswer = useCallback(() => {
    flashcards.revealAnswer()
  }, [flashcards.revealAnswer])

  const rateCard = useCallback(
    async (rating: Rating) => {
      await flashcards.rateCard(rating)
    },
    [flashcards.rateCard]
  )

  const undoLastRating = useCallback(async () => {
    await flashcards.undoLastRating()
  }, [flashcards.undoLastRating])

  const skipCard = useCallback(() => {
    flashcards.skipCard()
  }, [flashcards.skipCard])

  // =============================================================================
  // Keyboard Event Handling
  // =============================================================================

  useEffect(() => {
    if (!isActive || !keyboardEnabled) {
      return
    }

    const handleKeyPress = (event: KeyboardEvent) => {
      // Ignore if user is typing in an input/textarea
      const target = event.target as HTMLElement
      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable
      ) {
        return
      }

      // Space: Reveal answer or rate as Good
      if (event.code === 'Space') {
        event.preventDefault()
        if (flashcards.showAnswer) {
          rateCard(Rating.Good)
        } else {
          revealAnswer()
        }
        return
      }

      // Number keys: Rate card (only when answer is shown)
      if (flashcards.showAnswer) {
        if (event.key === '1') {
          event.preventDefault()
          rateCard(Rating.Again)
          return
        }
        if (event.key === '2') {
          event.preventDefault()
          rateCard(Rating.Hard)
          return
        }
        if (event.key === '3') {
          event.preventDefault()
          rateCard(Rating.Good)
          return
        }
        if (event.key === '4') {
          event.preventDefault()
          rateCard(Rating.Easy)
          return
        }
      }

      // Escape: End session
      if (event.code === 'Escape') {
        event.preventDefault()
        endSession()
        return
      }

      // Ctrl+Z or Cmd+Z: Undo last rating
      if ((event.ctrlKey || event.metaKey) && event.key === 'z') {
        event.preventDefault()
        if (flashcards.canUndo) {
          undoLastRating()
        }
        return
      }

      // S: Skip card
      if (event.key === 's' || event.key === 'S') {
        event.preventDefault()
        skipCard()
        return
      }

      // P: Pause/Resume
      if (event.key === 'p' || event.key === 'P') {
        event.preventDefault()
        if (isPaused) {
          resumeSession()
        } else {
          pauseSession()
        }
        return
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [
    isActive,
    keyboardEnabled,
    flashcards.showAnswer,
    flashcards.canUndo,
    isPaused,
    revealAnswer,
    rateCard,
    undoLastRating,
    skipCard,
    pauseSession,
    resumeSession,
    endSession,
  ])

  // =============================================================================
  // Auto-end session when queue is empty
  // =============================================================================

  useEffect(() => {
    if (
      isActive &&
      !flashcards.currentCard &&
      flashcards.sessionIndex >= flashcards.sessionQueue.length
    ) {
      // Queue is complete, auto-end session
      endSession()
    }
  }, [isActive, flashcards.currentCard, flashcards.sessionIndex, flashcards.sessionQueue.length, endSession])

  return {
    // Session state
    isActive,
    isPaused,
    currentCard: flashcards.currentCard,
    showAnswer: flashcards.showAnswer,
    progress: flashcards.studyProgress,

    // Timer
    elapsedSeconds,
    formattedTime,

    // Actions
    startSession,
    endSession,
    pauseSession,
    resumeSession,
    revealAnswer,
    rateCard,
    undoLastRating,
    skipCard,

    // Keyboard control
    keyboardEnabled,
    enableKeyboard: () => setKeyboardEnabled(true),
    disableKeyboard: () => setKeyboardEnabled(false),
  }
}

/**
 * Formats elapsed time in seconds to MM:SS or HH:MM:SS
 */
function formatElapsedTime(seconds: number): string {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const secs = seconds % 60

  if (hours > 0) {
    return `${hours}:${pad(minutes)}:${pad(secs)}`
  }

  return `${minutes}:${pad(secs)}`
}

/**
 * Pads a number with leading zero
 */
function pad(num: number): string {
  return num.toString().padStart(2, '0')
}
