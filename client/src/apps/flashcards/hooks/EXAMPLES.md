# Flashcard Hooks - Complete Examples

This document provides complete, production-ready examples of using the flashcard hooks.

## Example 1: Complete Deck Browser Component

```typescript
import { useFlashcards } from '@/apps/flashcards/hooks'
import { useAuth } from '@/contexts/AuthContext'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'

export function DeckBrowserPage() {
  const { userId } = useAuth()
  const {
    decks,
    decksLoading,
    decksError,
    totalDue,
    loadDeck,
    setView,
    createDeck,
  } = useFlashcards()

  const handleCreateDeck = async () => {
    if (!userId) return

    try {
      const deckId = await createDeck(userId, {
        name: 'New Deck',
        description: '',
        color: '#0066CC',
        icon: 'BookOpen',
      })
      console.log('Created deck:', deckId)
    } catch (error) {
      console.error('Failed to create deck:', error)
    }
  }

  const handleSelectDeck = async (deckId: string) => {
    try {
      await loadDeck(deckId)
      setView('deck-detail')
    } catch (error) {
      console.error('Failed to load deck:', error)
    }
  }

  if (decksLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin">Loading...</div>
      </div>
    )
  }

  if (decksError) {
    return (
      <div className="p-8">
        <p className="text-red-500">Error: {decksError}</p>
      </div>
    )
  }

  return (
    <div className="p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Your Decks</h1>
        <p className="text-muted-foreground">
          {totalDue} cards due across all decks
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {decks.map((deck) => {
          const Icon = (Icons as any)[deck.icon] || Icons.BookOpen

          return (
            <motion.div
              key={deck.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-lg border cursor-pointer"
              style={{ borderColor: deck.color }}
              onClick={() => handleSelectDeck(deck.id)}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="p-2 rounded-lg"
                  style={{ backgroundColor: `${deck.color}20` }}
                >
                  <Icon size={24} style={{ color: deck.color }} />
                </div>
                <h2 className="text-xl font-semibold">{deck.name}</h2>
              </div>

              {deck.description && (
                <p className="text-sm text-muted-foreground mb-4">
                  {deck.description}
                </p>
              )}

              <div className="grid grid-cols-3 gap-2 text-sm">
                <div>
                  <p className="text-blue-500 font-semibold">{deck.newCount}</p>
                  <p className="text-muted-foreground">New</p>
                </div>
                <div>
                  <p className="text-orange-500 font-semibold">
                    {deck.learningCount}
                  </p>
                  <p className="text-muted-foreground">Learning</p>
                </div>
                <div>
                  <p className="text-green-500 font-semibold">
                    {deck.reviewCount}
                  </p>
                  <p className="text-muted-foreground">Review</p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t">
                <p className="text-sm text-muted-foreground">
                  {deck.cardCount} total cards
                </p>
              </div>
            </motion.div>
          )
        })}

        {/* Create new deck button */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="p-6 rounded-lg border-2 border-dashed border-muted cursor-pointer
                     flex items-center justify-center"
          onClick={handleCreateDeck}
        >
          <div className="text-center">
            <Icons.Plus className="mx-auto mb-2" size={32} />
            <p className="font-semibold">Create New Deck</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
```

---

## Example 2: Complete Study Session Component

```typescript
import { useStudySession } from '@/apps/flashcards/hooks'
import { Rating } from '@/apps/flashcards/types/flashcard'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import ReactMarkdown from 'react-markdown'

interface StudySessionProps {
  deckId: string
}

export function StudySessionView({ deckId }: StudySessionProps) {
  const {
    isActive,
    isPaused,
    currentCard,
    showAnswer,
    progress,
    elapsedSeconds,
    formattedTime,
    startSession,
    endSession,
    pauseSession,
    resumeSession,
    revealAnswer,
    rateCard,
    undoLastRating,
    keyboardEnabled,
  } = useStudySession()

  const [loading, setLoading] = useState(false)

  const handleStart = async () => {
    setLoading(true)
    try {
      await startSession(deckId)
    } catch (error) {
      console.error('Failed to start session:', error)
      alert(error instanceof Error ? error.message : 'Failed to start session')
    } finally {
      setLoading(false)
    }
  }

  const handleRating = async (rating: Rating) => {
    try {
      await rateCard(rating)
    } catch (error) {
      console.error('Failed to rate card:', error)
    }
  }

  const getRatingButtonText = (rating: Rating): string => {
    switch (rating) {
      case Rating.Again:
        return 'Again (1)'
      case Rating.Hard:
        return 'Hard (2)'
      case Rating.Good:
        return 'Good (3)'
      case Rating.Easy:
        return 'Easy (4)'
    }
  }

  const getRatingColor = (rating: Rating): string => {
    switch (rating) {
      case Rating.Again:
        return 'bg-red-500 hover:bg-red-600'
      case Rating.Hard:
        return 'bg-orange-500 hover:bg-orange-600'
      case Rating.Good:
        return 'bg-green-500 hover:bg-green-600'
      case Rating.Easy:
        return 'bg-blue-500 hover:bg-blue-600'
    }
  }

  // Not started yet
  if (!isActive) {
    return (
      <div className="flex items-center justify-center h-screen">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-primary text-white rounded-lg text-lg font-semibold"
          onClick={handleStart}
          disabled={loading}
        >
          {loading ? 'Starting...' : 'Start Study Session'}
        </motion.button>
      </div>
    )
  }

  // Session complete
  if (!currentCard) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Session Complete!</h2>
          <p className="text-muted-foreground mb-6">
            You studied {progress.total} cards in {formattedTime}
          </p>
          <button
            className="px-6 py-3 bg-primary text-white rounded-lg"
            onClick={endSession}
          >
            Finish
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="p-4 border-b flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={endSession}
            className="px-4 py-2 rounded-lg border hover:bg-muted"
          >
            End Session (Esc)
          </button>

          <button
            onClick={isPaused ? resumeSession : pauseSession}
            className="px-4 py-2 rounded-lg border hover:bg-muted"
          >
            {isPaused ? 'Resume (P)' : 'Pause (P)'}
          </button>
        </div>

        <div className="flex items-center gap-6">
          <div>
            <p className="text-sm text-muted-foreground">Progress</p>
            <p className="font-semibold">
              {progress.current} / {progress.total}
            </p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Time</p>
            <p className="font-semibold">{formattedTime}</p>
          </div>

          {keyboardEnabled && (
            <div className="text-sm text-muted-foreground">
              Keyboard shortcuts enabled
            </div>
          )}
        </div>
      </header>

      {/* Progress bar */}
      <div className="w-full h-1 bg-muted">
        <motion.div
          className="h-full bg-primary"
          initial={{ width: 0 }}
          animate={{ width: `${progress.percentage}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Card display */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="max-w-2xl w-full">
          {/* Front side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h3 className="text-sm text-muted-foreground mb-2">Question</h3>
            <div className="p-8 rounded-lg border bg-card">
              <ReactMarkdown className="prose dark:prose-invert">
                {currentCard.front.text}
              </ReactMarkdown>

              {currentCard.front.images?.map((image) => (
                <img
                  key={image.id}
                  src={image.url}
                  alt={image.alt || ''}
                  className="mt-4 rounded-lg max-w-full"
                />
              ))}
            </div>
          </motion.div>

          {/* Back side (when revealed) */}
          <AnimatePresence>
            {showAnswer && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mb-8"
              >
                <h3 className="text-sm text-muted-foreground mb-2">Answer</h3>
                <div className="p-8 rounded-lg border bg-card border-green-500">
                  <ReactMarkdown className="prose dark:prose-invert">
                    {currentCard.back.text}
                  </ReactMarkdown>

                  {currentCard.back.images?.map((image) => (
                    <img
                      key={image.id}
                      src={image.url}
                      alt={image.alt || ''}
                      className="mt-4 rounded-lg max-w-full"
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Action buttons */}
          <div className="flex gap-4">
            {!showAnswer ? (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 py-4 bg-primary text-white rounded-lg font-semibold"
                onClick={revealAnswer}
              >
                Show Answer (Space)
              </motion.button>
            ) : (
              <>
                {[Rating.Again, Rating.Hard, Rating.Good, Rating.Easy].map(
                  (rating) => (
                    <motion.button
                      key={rating}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex-1 py-4 text-white rounded-lg font-semibold ${getRatingColor(
                        rating
                      )}`}
                      onClick={() => handleRating(rating)}
                    >
                      {getRatingButtonText(rating)}
                    </motion.button>
                  )
                )}
              </>
            )}
          </div>

          {/* Card tags */}
          {currentCard.tags.length > 0 && (
            <div className="mt-4 flex gap-2">
              {currentCard.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs rounded-full bg-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
```

---

## Example 3: Deck Statistics Dashboard

```typescript
import { useDeckStats } from '@/apps/flashcards/hooks'
import { useAuth } from '@/contexts/AuthContext'
import { Deck } from '@/apps/flashcards/types/flashcard'
import { motion } from 'framer-motion'
import { TrendingUp, Calendar, Target, Clock, Flame } from 'lucide-react'

interface DeckStatsDashboardProps {
  deck: Deck
}

export function DeckStatsDashboard({ deck }: DeckStatsDashboardProps) {
  const { userId } = useAuth()
  const stats = useDeckStats(deck, userId)

  if (stats.loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin">Loading stats...</div>
      </div>
    )
  }

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Statistics</h2>

      {/* Key metrics grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {/* Due today */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 rounded-lg border bg-card"
        >
          <div className="flex items-center gap-2 mb-2">
            <Calendar size={20} className="text-blue-500" />
            <h3 className="font-semibold">Due Today</h3>
          </div>
          <p className="text-3xl font-bold">{stats.dueToday}</p>
          <p className="text-sm text-muted-foreground mt-1">
            {stats.dueThisWeek} this week
          </p>
        </motion.div>

        {/* Study streak */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-6 rounded-lg border bg-card"
        >
          <div className="flex items-center gap-2 mb-2">
            <Flame size={20} className="text-orange-500" />
            <h3 className="font-semibold">Study Streak</h3>
          </div>
          <p className="text-3xl font-bold">{stats.studyStreak}</p>
          <p className="text-sm text-muted-foreground mt-1">
            Best: {stats.longestStreak} days
          </p>
        </motion.div>

        {/* Retention rate */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-6 rounded-lg border bg-card"
        >
          <div className="flex items-center gap-2 mb-2">
            <Target size={20} className="text-green-500" />
            <h3 className="font-semibold">Retention</h3>
          </div>
          <p className="text-3xl font-bold">{stats.retentionRate}%</p>
          <p className="text-sm text-muted-foreground mt-1">
            {stats.successfulReviews} / {stats.totalReviews} reviews
          </p>
        </motion.div>

        {/* Average time */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="p-6 rounded-lg border bg-card"
        >
          <div className="flex items-center gap-2 mb-2">
            <Clock size={20} className="text-purple-500" />
            <h3 className="font-semibold">Avg Time</h3>
          </div>
          <p className="text-3xl font-bold">
            {stats.averageReviewTimeSeconds}s
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            {stats.cardsPerDay} cards/day
          </p>
        </motion.div>
      </div>

      {/* 7-day forecast */}
      <div className="p-6 rounded-lg border bg-card">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp size={20} />
          <h3 className="font-semibold">7-Day Forecast</h3>
        </div>

        <div className="space-y-3">
          {stats.forecast.map((day, index) => {
            const isToday = index === 0
            const maxDue = Math.max(...stats.forecast.map((d) => d.dueCount))
            const percentage = maxDue > 0 ? (day.dueCount / maxDue) * 100 : 0

            return (
              <div key={index}>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className={isToday ? 'font-semibold' : ''}>
                    {isToday
                      ? 'Today'
                      : day.date.toLocaleDateString('en-US', {
                          weekday: 'short',
                          month: 'short',
                          day: 'numeric',
                        })}
                  </span>
                  <span className="text-muted-foreground">
                    {day.dueCount} cards ({day.newCount} new, {day.reviewCount}{' '}
                    review)
                  </span>
                </div>

                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Last studied */}
      {stats.lastStudiedDaysAgo !== null && (
        <div className="mt-4 text-sm text-muted-foreground">
          Last studied {stats.lastStudiedDaysAgo} day
          {stats.lastStudiedDaysAgo !== 1 ? 's' : ''} ago
        </div>
      )}
    </div>
  )
}
```

---

## Example 4: Card Browser with Search and Filters

```typescript
import { useFlashcards } from '@/apps/flashcards/hooks'
import { State } from '@/apps/flashcards/types/flashcard'
import { Search, Filter } from 'lucide-react'
import { useState } from 'react'

export function CardBrowserView() {
  const {
    filteredCards,
    searchQuery,
    setSearchQuery,
    filters,
    setFilters,
    clearFilters,
    availableTags,
    setEditingCard,
    setView,
    setEditorMode,
  } = useFlashcards()

  const [showFilters, setShowFilters] = useState(false)

  const handleEditCard = (card: typeof filteredCards[0]) => {
    setEditingCard(card)
    setEditorMode('edit')
    setView('editor')
  }

  const stateOptions = [
    { value: State.New, label: 'New', color: 'text-blue-500' },
    { value: State.Learning, label: 'Learning', color: 'text-orange-500' },
    { value: State.Review, label: 'Review', color: 'text-green-500' },
    { value: State.Relearning, label: 'Relearning', color: 'text-red-500' },
  ]

  return (
    <div className="p-8">
      {/* Search and filter bar */}
      <div className="mb-6">
        <div className="flex gap-4 mb-4">
          {/* Search input */}
          <div className="flex-1 relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              size={20}
            />
            <input
              type="text"
              placeholder="Search cards..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border bg-background"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Filter button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`px-4 py-2 rounded-lg border flex items-center gap-2
                       ${showFilters ? 'bg-primary text-white' : 'bg-background'}`}
          >
            <Filter size={20} />
            Filters
          </button>

          {/* Clear filters */}
          {(searchQuery || Object.keys(filters).length > 0) && (
            <button
              onClick={clearFilters}
              className="px-4 py-2 rounded-lg border bg-background"
            >
              Clear
            </button>
          )}
        </div>

        {/* Filter panel */}
        {showFilters && (
          <div className="p-4 rounded-lg border bg-card space-y-4">
            {/* State filter */}
            <div>
              <label className="block text-sm font-medium mb-2">State</label>
              <div className="flex gap-2">
                {stateOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      const currentStates = filters.state || []
                      const newStates = currentStates.includes(option.value)
                        ? currentStates.filter((s) => s !== option.value)
                        : [...currentStates, option.value]
                      setFilters({ state: newStates })
                    }}
                    className={`px-3 py-1 rounded-lg border ${
                      filters.state?.includes(option.value)
                        ? 'bg-primary text-white'
                        : 'bg-background'
                    }`}
                  >
                    <span className={option.color}>{option.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tag filter */}
            <div>
              <label className="block text-sm font-medium mb-2">Tags</label>
              <div className="flex flex-wrap gap-2">
                {availableTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => {
                      const currentTags = filters.tags || []
                      const newTags = currentTags.includes(tag)
                        ? currentTags.filter((t) => t !== tag)
                        : [...currentTags, tag]
                      setFilters({ tags: newTags })
                    }}
                    className={`px-3 py-1 rounded-full text-sm ${
                      filters.tags?.includes(tag)
                        ? 'bg-primary text-white'
                        : 'bg-muted'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Results count */}
      <p className="text-sm text-muted-foreground mb-4">
        {filteredCards.length} card{filteredCards.length !== 1 ? 's' : ''} found
      </p>

      {/* Card list */}
      <div className="space-y-4">
        {filteredCards.map((card) => {
          const stateOption = stateOptions.find((o) => o.value === card.fsrs.state)

          return (
            <div
              key={card.id}
              className="p-4 rounded-lg border bg-card hover:border-primary cursor-pointer
                         transition-colors"
              onClick={() => handleEditCard(card)}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <p className="font-medium mb-1">{card.front.text}</p>
                  <p className="text-sm text-muted-foreground">
                    {card.back.text}
                  </p>
                </div>

                <div className="text-right">
                  <span className={`text-sm ${stateOption?.color}`}>
                    {stateOption?.label}
                  </span>
                  <p className="text-xs text-muted-foreground mt-1">
                    Due: {card.fsrs.due.toLocaleDateString()}
                  </p>
                </div>
              </div>

              {card.tags.length > 0 && (
                <div className="flex gap-2 mt-2">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-full bg-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )
        })}

        {filteredCards.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            No cards found. Try adjusting your filters.
          </div>
        )}
      </div>
    </div>
  )
}
```

---

## Example 5: All-in-One Flashcard App

This example shows how to combine all the hooks into a complete flashcard application:

```typescript
import { useFlashcards, useStudySession, useDeckStats } from '@/apps/flashcards/hooks'
import { useAuth } from '@/contexts/AuthContext'

export function FlashcardApp() {
  const { userId } = useAuth()
  const flashcards = useFlashcards()
  const study = useStudySession()
  const stats = useDeckStats(flashcards.currentDeck, userId)

  // Render different views based on state
  const renderView = () => {
    // Study mode is active
    if (study.isActive) {
      return <StudySessionView />
    }

    // View a specific deck
    if (flashcards.view === 'deck-detail' && flashcards.currentDeck) {
      return (
        <div>
          <DeckDetailView
            deck={flashcards.currentDeck}
            stats={stats}
            onStartStudy={() => study.startSession(flashcards.currentDeck!.id)}
          />
        </div>
      )
    }

    // Card editor
    if (flashcards.view === 'editor') {
      return <CardEditorView />
    }

    // Default: deck browser
    return <DeckBrowserView />
  }

  return (
    <div className="min-h-screen bg-background">
      {renderView()}
    </div>
  )
}
```

These examples demonstrate production-ready usage of the flashcard hooks with proper error handling, loading states, animations, and TypeScript typing.
