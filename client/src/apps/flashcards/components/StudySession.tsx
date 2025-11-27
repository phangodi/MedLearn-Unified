/**
 * StudySession Component
 *
 * Full-screen flashcard review interface with:
 * - Card flip animations (3D transform)
 * - Markdown/LaTeX/image support
 * - Rating buttons with interval preview
 * - Progress tracking and timer
 * - Keyboard shortcuts
 * - Session complete screen
 */

import { useEffect, useState, useMemo } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypeRaw from 'rehype-raw'
import DOMPurify from 'dompurify'
import 'katex/dist/katex.min.css'
import { ArrowLeft, Pause, Play, RotateCcw, Clock, CheckCircle } from 'lucide-react'
import { useStudySession } from '../hooks/useStudySession'
import { useFlashcards } from '../hooks/useFlashcards'
import { useFlashcardStore } from '@/store/flashcardStore'
import { Button } from '@/components/ui/Button'
import { Rating } from '../types/flashcard'
import { getSchedulingInfo } from '../services/fsrsService'

export function StudySession() {
  const { deckId } = useParams<{ deckId: string }>()
  const navigate = useNavigate()
  const flashcards = useFlashcards()
  const session = useStudySession()
  const [isFlipped, setIsFlipped] = useState(false)
  const [showSessionComplete, setShowSessionComplete] = useState(false)
  const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(null)
  const [noCardsDue, setNoCardsDue] = useState(false)

  // Load deck and start session on mount
  useEffect(() => {
    if (!deckId) {
      navigate('/flashcards')
      return
    }

    const initSession = async () => {
      try {
        // Step 1: Load deck first
        // Use getState() to check current state (not stale closure values)
        const currentState = useFlashcardStore.getState()
        if (!currentState.currentDeck || currentState.currentDeck.id !== deckId) {
          await flashcards.loadDeck(deckId)
        }

        // Step 2: Check deck loaded successfully using fresh state
        const stateAfterDeckLoad = useFlashcardStore.getState()
        if (!stateAfterDeckLoad.currentDeck || stateAfterDeckLoad.currentDeck.id !== deckId) {
          console.error('Failed to load deck')
          navigate('/flashcards')
          return
        }

        // Step 3: Load cards
        await flashcards.loadCards(deckId)

        // Step 4: Verify cards are loaded using fresh state
        const stateAfterCardsLoad = useFlashcardStore.getState()
        if (!stateAfterCardsLoad.cards || stateAfterCardsLoad.cards.length === 0) {
          console.error('No cards available after loading')
          navigate('/flashcards')
          return
        }

        // Step 5: Start session only after deck and cards are ready
        if (!session.isActive) {
          await session.startSession(deckId)
        }
      } catch (error) {
        // Check if the error is "No cards due for review"
        if (error instanceof Error && error.message.includes('No cards due')) {
          setNoCardsDue(true)
          return
        }
        console.error('Failed to initialize study session:', error)
        navigate('/flashcards')
      }
    }

    initSession()
  }, [deckId])

  // Handle session end
  useEffect(() => {
    if (!session.isActive && flashcards.sessionStats) {
      setShowSessionComplete(true)
    }
  }, [session.isActive, flashcards.sessionStats])

  // Reset flip state when card changes
  useEffect(() => {
    setIsFlipped(false)
  }, [flashcards.currentCard?.id])

  // Sync flip state with showAnswer
  useEffect(() => {
    setIsFlipped(session.showAnswer)
  }, [session.showAnswer])

  // Get scheduling info for current card
  const schedulingInfo = useMemo(() => {
    if (!session.currentCard) return null
    return getSchedulingInfo(session.currentCard.fsrs)
  }, [session.currentCard])

  // Handle exit
  const handleExit = async () => {
    if (session.isActive) {
      await session.endSession()
    }
    navigate('/flashcards')
  }

  // Handle show answer
  const handleShowAnswer = () => {
    session.revealAnswer()
  }

  // Handle rating
  const handleRating = async (rating: Rating) => {
    await session.rateCard(rating)
  }

  // Loading state
  if (flashcards.cardsLoading || !flashcards.currentDeck) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-12 h-12 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading session...</p>
        </div>
      </div>
    )
  }

  // No cards due screen
  if (noCardsDue) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-card border border-border rounded-2xl p-8 max-w-md w-full text-center shadow-lg"
        >
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">All Caught Up!</h2>
          <p className="text-muted-foreground mb-6">
            No cards are due for review right now. Check back later or view the deck to see when cards will be due.
          </p>
          <div className="flex gap-3 justify-center">
            <Button
              variant="outline"
              onClick={() => navigate(`/flashcards/deck/${deckId}`)}
            >
              View Deck
            </Button>
            <Button onClick={() => navigate('/flashcards')}>
              Back to Decks
            </Button>
          </div>
        </motion.div>
      </div>
    )
  }

  // Session complete screen
  if (showSessionComplete && flashcards.sessionStats) {
    const stats = flashcards.sessionStats
    const hasMoreDue = flashcards.currentDeckDue.total > 0

    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl w-full bg-card border-2 border-border rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Session Complete!</h1>
            <p className="text-muted-foreground">Great work on your review session</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-muted/30 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold mb-1">{stats.cardsStudied}</div>
              <div className="text-sm text-muted-foreground">Cards Studied</div>
            </div>
            <div className="bg-muted/30 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold mb-1">{session.formattedTime}</div>
              <div className="text-sm text-muted-foreground">Time Spent</div>
            </div>
            <div className="bg-muted/30 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold mb-1">{stats.accuracy}%</div>
              <div className="text-sm text-muted-foreground">Accuracy</div>
            </div>
            <div className="bg-muted/30 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold mb-1">{stats.averageTimeSeconds}s</div>
              <div className="text-sm text-muted-foreground">Avg per Card</div>
            </div>
          </div>

          {/* Rating Breakdown */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold mb-3 text-muted-foreground">RATING BREAKDOWN</h3>
            <div className="grid grid-cols-4 gap-3">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-500 mb-1">{stats.ratings.again}</div>
                <div className="text-xs text-muted-foreground">Again</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-500 mb-1">{stats.ratings.hard}</div>
                <div className="text-xs text-muted-foreground">Hard</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">{stats.ratings.good}</div>
                <div className="text-xs text-muted-foreground">Good</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-500 mb-1">{stats.ratings.easy}</div>
                <div className="text-xs text-muted-foreground">Easy</div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            {hasMoreDue && (
              <Button
                onClick={() => {
                  setShowSessionComplete(false)
                  session.startSession(deckId!)
                }}
                className="flex-1"
              >
                Study More ({flashcards.currentDeckDue.total} due)
              </Button>
            )}
            <Button
              variant={hasMoreDue ? 'outline' : 'default'}
              onClick={handleExit}
              className="flex-1"
            >
              Back to Decks
            </Button>
          </div>
        </motion.div>
      </div>
    )
  }

  // Empty state - no cards due
  if (!session.currentCard) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-card border-2 border-border rounded-2xl p-8 text-center"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
            <CheckCircle className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-2xl font-bold mb-2">No Cards Due!</h2>
          <p className="text-muted-foreground mb-6">
            You've reviewed all cards in this deck. Come back later for more reviews.
          </p>
          <Button onClick={handleExit}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Decks
          </Button>
        </motion.div>
      </div>
    )
  }

  const currentCard = session.currentCard

  return (
    <div className="h-screen bg-background flex flex-col overflow-hidden">
      {/* Progress Bar */}
      <div className="h-1 bg-muted">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-primary/80"
          initial={{ width: 0 }}
          animate={{ width: `${session.progress.percentage}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Header Bar */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          {/* Left: Back button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={handleExit}
            className="shrink-0"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Exit
          </Button>

          {/* Center: Deck name and progress */}
          <div className="flex-1 text-center min-w-0">
            <h1 className="font-semibold text-sm sm:text-base truncate">
              {flashcards.currentDeck.name}
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Card {session.progress.current + 1} of {session.progress.total}
            </p>
          </div>

          {/* Right: Timer and pause */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span className="font-mono">{session.formattedTime}</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={session.isPaused ? session.resumeSession : session.pauseSession}
            >
              {session.isPaused ? (
                <Play className="w-4 h-4" />
              ) : (
                <Pause className="w-4 h-4" />
              )}
            </Button>
            {flashcards.canUndo && (
              <Button
                variant="ghost"
                size="sm"
                onClick={session.undoLastRating}
                title="Undo (Ctrl+Z)"
              >
                <RotateCcw className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* Pause Overlay */}
      <AnimatePresence>
        {session.isPaused && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Dark overlay backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            />

            {/* Modal content - centered */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative z-10 bg-card border-2 border-border rounded-2xl p-8 text-center max-w-md w-full"
            >
              <Pause className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Session Paused</h2>
              <p className="text-muted-foreground mb-6">Take a break, you're doing great!</p>
              <Button onClick={session.resumeSession} size="lg">
                <Play className="w-5 h-5 mr-2" />
                Resume
              </Button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Card Display Area */}
      <main className="flex-1 flex flex-col items-center justify-start p-4 sm:p-6 lg:p-8 overflow-auto">
        <div className="w-full max-w-6xl flex flex-col gap-6">
          {/* 3D Card Container - uses calc to fill available space */}
          <div
            className="relative w-full"
            style={{
              perspective: '1000px',
              height: 'calc(100vh - 280px)',
              minHeight: '400px',
            }}
          >
            <motion.div
              className="relative w-full h-full transition-transform duration-500 cursor-pointer"
              style={{
                transformStyle: 'preserve-3d',
                transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
              }}
              onClick={() => {
                if (!session.showAnswer) {
                  handleShowAnswer()
                }
              }}
            >
              {/* Front Side */}
              <div
                className="absolute inset-0 backface-hidden"
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                }}
              >
                <CardSide
                  content={currentCard.front}
                  label="Question"
                  onImageClick={setSelectedImageUrl}
                />
              </div>

              {/* Back Side */}
              <div
                className="absolute inset-0 backface-hidden"
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                }}
              >
                <CardSide
                  content={currentCard.back}
                  label="Answer"
                  onImageClick={setSelectedImageUrl}
                />
              </div>
            </motion.div>
          </div>

          {/* Show Answer Button / Rating Buttons - Fixed at bottom */}
          <div className="flex-shrink-0">
            {!session.showAnswer && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <Button
                  onClick={handleShowAnswer}
                  size="lg"
                  className="px-12"
                >
                  Show Answer
                </Button>
                <p className="text-sm text-muted-foreground mt-2">or press Space</p>
              </motion.div>
            )}

            {/* Rating Buttons */}
            <AnimatePresence>
              {session.showAnswer && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                >
                  <div className="flex gap-2 justify-center">
                    <RatingButton
                      rating={Rating.Again}
                      label="Again"
                      interval="1m"
                      color="red"
                      shortcut="1"
                      onClick={() => handleRating(Rating.Again)}
                    />
                    <RatingButton
                      rating={Rating.Hard}
                      label="Hard"
                      interval="6m"
                      color="orange"
                      shortcut="2"
                      onClick={() => handleRating(Rating.Hard)}
                    />
                    <RatingButton
                      rating={Rating.Good}
                      label="Good"
                      interval="10m"
                      color="green"
                      shortcut="3"
                      onClick={() => handleRating(Rating.Good)}
                    />
                    <RatingButton
                      rating={Rating.Easy}
                      label="Easy"
                      interval="5d"
                      color="blue"
                      shortcut="4"
                      onClick={() => handleRating(Rating.Easy)}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>

      {/* Image Zoom Modal */}
      <AnimatePresence>
        {selectedImageUrl && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Dark overlay backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-background/90 backdrop-blur-sm"
              onClick={() => setSelectedImageUrl(null)}
            />

            {/* Image content - centered */}
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={selectedImageUrl}
              alt="Zoomed image"
              className="relative z-10 max-w-full max-h-full object-contain rounded-lg shadow-2xl cursor-pointer"
              onClick={() => setSelectedImageUrl(null)}
            />
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

/**
 * Card Side Component (Front or Back)
 */
interface CardSideProps {
  content: {
    text: string
    images?: { id: string; url: string; alt?: string }[]
  }
  label: string
  onImageClick: (url: string) => void
}

function CardSide({ content, label, onImageClick }: CardSideProps) {
  // Sanitize HTML content with DOMPurify for security
  // Allows safe HTML tags (formatting, images) while removing dangerous content
  const sanitizedContent = useMemo(() => {
    return DOMPurify.sanitize(content.text, {
      ALLOWED_TAGS: ['b', 'i', 'u', 'strong', 'em', 'p', 'br', 'div', 'span',
                     'ul', 'ol', 'li', 'img', 'table', 'tr', 'td', 'th', 'thead', 'tbody',
                     'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'sub', 'sup', 'blockquote',
                     'hr', 'a', 'code', 'pre', 'font'],
      ALLOWED_ATTR: ['src', 'alt', 'class', 'style', 'href', 'target', 'width', 'height',
                     'color', 'size', 'face'],
      ALLOW_DATA_ATTR: false,
    })
  }, [content.text])

  return (
    <div className="bg-card border-2 border-border rounded-2xl p-6 sm:p-8 shadow-lg h-full flex flex-col">
      <div className="text-xs font-semibold text-primary mb-4 uppercase tracking-wide flex-shrink-0">
        {label}
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-muted-foreground/20 scrollbar-track-transparent">
        {/* HTML/Markdown Content - sanitized for security */}
        <div className="prose prose-sm sm:prose dark:prose-invert max-w-none card-content">
          <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkMath]}
            rehypePlugins={[rehypeKatex, rehypeRaw]}
          >
            {sanitizedContent}
          </ReactMarkdown>
        </div>

        {/* Additional images stored separately (for tracking) */}
        {content.images && content.images.length > 0 && (
          <div className="mt-4 space-y-3">
            {content.images.map((image) => (
              <img
                key={image.id}
                src={image.url}
                alt={image.alt || 'Card image'}
                className="w-full rounded-lg border border-border cursor-pointer hover:opacity-80 transition-opacity"
                onClick={(e) => {
                  e.stopPropagation()
                  onImageClick(image.url)
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

/**
 * Rating Button Component
 */
interface RatingButtonProps {
  rating: Rating
  label: string
  interval: string
  color: 'red' | 'orange' | 'green' | 'blue'
  shortcut: string
  onClick: () => void
}

function RatingButton({ label, interval, color, shortcut, onClick }: RatingButtonProps) {
  const colorClasses = {
    red: 'bg-red-500/10 hover:bg-red-500/20 border-red-500/30 text-red-600 dark:text-red-400',
    orange: 'bg-orange-500/10 hover:bg-orange-500/20 border-orange-500/30 text-orange-600 dark:text-orange-400',
    green: 'bg-green-500/10 hover:bg-green-500/20 border-green-500/30 text-green-600 dark:text-green-400',
    blue: 'bg-blue-500/10 hover:bg-blue-500/20 border-blue-500/30 text-blue-600 dark:text-blue-400',
  }

  return (
    <button
      onClick={onClick}
      className={`
        relative px-4 py-2 rounded-lg border-2 transition-all duration-200
        hover:scale-105 active:scale-95 flex items-center gap-2
        ${colorClasses[color]}
      `}
    >
      <span className="font-medium text-sm">{label}</span>
      <span className="text-xs opacity-70">&lt;{interval}</span>
      <span className="text-[10px] opacity-40 ml-1">({shortcut})</span>
    </button>
  )
}
