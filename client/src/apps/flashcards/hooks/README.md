# Flashcard Hooks Documentation

This directory contains React hooks for the MedLearn flashcard system, built on top of Zustand state management and FSRS spaced repetition algorithm.

## Architecture Overview

```
┌─────────────────────────────────────────────────────────┐
│                    React Components                      │
└─────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────┐
│                   Custom Hooks Layer                     │
│  • useFlashcards (main hook)                            │
│  • useStudySession (study mode)                         │
│  • useDeckStats (analytics)                             │
└─────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────┐
│                  Zustand Store Layer                     │
│            (flashcardStore.ts)                          │
└─────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────┐
│                   Service Layer                          │
│  • flashcardService (Firestore)                         │
│  • fsrsService (FSRS scheduling)                        │
└─────────────────────────────────────────────────────────┘
```

## Hooks

### 1. `useFlashcards()` - Main Hook

The primary hook for flashcard functionality. Auto-loads decks when user is authenticated and provides computed values.

**Usage:**
```typescript
import { useFlashcards } from '@/apps/flashcards/hooks'

function MyComponent() {
  const {
    // Decks
    decks,
    currentDeck,
    loadDeck,
    createDeck,
    updateDeck,
    deleteDeck,

    // Cards
    cards,
    loadCards,
    createCard,
    updateCard,
    deleteCard,
    filteredCards,

    // Computed values
    totalDue,
    currentDeckDue,
    canStudy,

    // UI state
    view,
    setView,
  } = useFlashcards()

  return (
    <div>
      <p>Total cards due: {totalDue}</p>
      <p>Current deck has {currentDeckDue.total} cards due</p>
      {canStudy && <button>Start Study</button>}
    </div>
  )
}
```

**Key Features:**
- Auto-loads user's decks on mount
- Provides computed values (totalDue, currentDeckDue, etc.)
- Integrates with AuthContext for user authentication
- Filters cards based on search query and filters
- Tracks available tags from all cards

**Computed Values:**
- `totalDue` - Total cards due across all decks
- `currentDeckDue` - Cards due in current deck (with breakdown by state)
- `studyProgress` - Current session progress (current/total/percentage)
- `filteredCards` - Cards filtered by search and filters
- `availableTags` - All unique tags from cards
- `sessionStats` - Current session statistics
- `canUndo` - Whether undo is available
- `canStudy` - Whether deck is ready to study

---

### 2. `useStudySession()` - Study Mode Hook

Specialized hook for study sessions with keyboard shortcuts, timer, and auto-end functionality.

**Usage:**
```typescript
import { useStudySession } from '@/apps/flashcards/hooks'
import { Rating } from '@/apps/flashcards/types/flashcard'

function StudyView() {
  const {
    // State
    isActive,
    currentCard,
    showAnswer,
    progress,

    // Timer
    elapsedSeconds,
    formattedTime,

    // Actions
    startSession,
    endSession,
    revealAnswer,
    rateCard,
    undoLastRating,

    // Keyboard
    keyboardEnabled,
  } = useStudySession()

  if (!isActive) {
    return (
      <button onClick={() => startSession('deck-id')}>
        Start Study
      </button>
    )
  }

  return (
    <div>
      <p>Time: {formattedTime}</p>
      <p>Progress: {progress.current}/{progress.total}</p>

      <div>
        <p>{currentCard?.front.text}</p>
        {showAnswer && <p>{currentCard?.back.text}</p>}
      </div>

      {!showAnswer ? (
        <button onClick={revealAnswer}>Show Answer</button>
      ) : (
        <div>
          <button onClick={() => rateCard(Rating.Again)}>Again (1)</button>
          <button onClick={() => rateCard(Rating.Hard)}>Hard (2)</button>
          <button onClick={() => rateCard(Rating.Good)}>Good (3)</button>
          <button onClick={() => rateCard(Rating.Easy)}>Easy (4)</button>
        </div>
      )}

      <button onClick={endSession}>End (Esc)</button>
    </div>
  )
}
```

**Keyboard Shortcuts:**
- `Space` - Show answer / Rate as Good
- `1` - Rate Again (when answer shown)
- `2` - Rate Hard (when answer shown)
- `3` - Rate Good (when answer shown)
- `4` - Rate Easy (when answer shown)
- `Escape` - End session
- `Ctrl+Z` / `Cmd+Z` - Undo last rating
- `S` - Skip card
- `P` - Pause/Resume

**Key Features:**
- Automatic keyboard event handling
- Session timer with formatted display
- Progress tracking
- Auto-end when queue is empty
- Pause/Resume functionality
- Can disable keyboard shortcuts when needed

---

### 3. `useDeckStats()` - Analytics Hook

Calculates comprehensive statistics for a deck including retention, streaks, and forecasts.

**Usage:**
```typescript
import { useDeckStats } from '@/apps/flashcards/hooks'

function DeckStatsView({ deck }: { deck: Deck }) {
  const { userId } = useAuth()
  const stats = useDeckStats(deck, userId)

  if (stats.loading) {
    return <p>Loading stats...</p>
  }

  return (
    <div>
      {/* Cards Due */}
      <p>Due today: {stats.dueToday}</p>
      <p>Due this week: {stats.dueThisWeek}</p>
      <p>New cards: {stats.newCardsAvailable}</p>

      {/* Study Streak */}
      <p>Current streak: {stats.studyStreak} days</p>
      <p>Longest streak: {stats.longestStreak} days</p>
      {stats.lastStudiedDaysAgo !== null && (
        <p>Last studied: {stats.lastStudiedDaysAgo} days ago</p>
      )}

      {/* Retention */}
      <p>Retention rate: {stats.retentionRate}%</p>
      <p>Total reviews: {stats.totalReviews}</p>
      <p>Successful: {stats.successfulReviews}</p>

      {/* Performance */}
      <p>Avg review time: {stats.averageReviewTimeSeconds}s</p>
      <p>Cards per day: {stats.cardsPerDay}</p>

      {/* Forecast */}
      <h3>7-Day Forecast</h3>
      {stats.forecast.map((day, i) => (
        <div key={i}>
          <p>{day.date.toLocaleDateString()}: {day.dueCount} cards</p>
          <p>  New: {day.newCount}, Review: {day.reviewCount}</p>
        </div>
      ))}
    </div>
  )
}
```

**Statistics Provided:**
- **Cards Due**: dueToday, dueThisWeek, breakdown by state
- **Study Streak**: current streak, longest streak, days since last study
- **Retention**: retention rate, total/successful reviews
- **Performance**: average review time, cards per day
- **Forecast**: 7-day prediction of cards due

**Notes:**
- Automatically loads deck cards and reviews
- Reviews are fetched from last 30 days
- Streak calculation accounts for consecutive study days
- Forecast shows cards due at end of each day

---

## Common Usage Patterns

### Pattern 1: Deck Browser

```typescript
function DeckBrowser() {
  const { decks, totalDue, loadDeck, setView } = useFlashcards()

  const handleSelectDeck = async (deckId: string) => {
    await loadDeck(deckId)
    setView('deck-detail')
  }

  return (
    <div>
      <h1>Your Decks ({totalDue} cards due)</h1>
      {decks.map((deck) => (
        <div key={deck.id} onClick={() => handleSelectDeck(deck.id)}>
          <h2>{deck.name}</h2>
          <p>{deck.reviewCount} reviews</p>
        </div>
      ))}
    </div>
  )
}
```

### Pattern 2: Card Editor

```typescript
function CardEditor() {
  const {
    editingCard,
    editorMode,
    createCard,
    updateCard,
    currentDeck,
  } = useFlashcards()
  const { userId } = useAuth()

  const handleSave = async (cardData: Partial<FlashCard>) => {
    if (editorMode === 'create' && currentDeck) {
      await createCard({
        ...cardData,
        deckId: currentDeck.id,
        userId: userId!,
      })
    } else if (editorMode === 'edit' && editingCard) {
      await updateCard(editingCard.id, cardData)
    }
  }

  return (
    <form onSubmit={handleSave}>
      {/* Form fields */}
    </form>
  )
}
```

### Pattern 3: Study Session with Stats

```typescript
function StudyScreen() {
  const { currentDeck } = useFlashcards()
  const { userId } = useAuth()
  const session = useStudySession()
  const stats = useDeckStats(currentDeck, userId)

  return (
    <div>
      <header>
        <p>Streak: {stats.studyStreak} days</p>
        <p>Retention: {stats.retentionRate}%</p>
        <p>Time: {session.formattedTime}</p>
      </header>

      {/* Study interface */}
      {session.currentCard && (
        <div>
          {/* Card display */}
        </div>
      )}

      {/* Rating buttons */}
    </div>
  )
}
```

### Pattern 4: Search and Filter

```typescript
function CardBrowser() {
  const {
    filteredCards,
    searchQuery,
    setSearchQuery,
    filters,
    setFilters,
    availableTags,
  } = useFlashcards()

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search cards..."
      />

      <select onChange={(e) => setFilters({ tags: [e.target.value] })}>
        <option value="">All tags</option>
        {availableTags.map((tag) => (
          <option key={tag} value={tag}>{tag}</option>
        ))}
      </select>

      {filteredCards.map((card) => (
        <div key={card.id}>
          <p>{card.front.text}</p>
          <p>{card.tags.join(', ')}</p>
        </div>
      ))}
    </div>
  )
}
```

---

## Direct Store Access

While the hooks provide a convenient interface, you can also access the Zustand store directly for advanced use cases:

```typescript
import { useFlashcardStore } from '@/store/flashcardStore'

function AdvancedComponent() {
  // Subscribe to specific state slices for optimal performance
  const decks = useFlashcardStore((state) => state.decks)
  const loadDecks = useFlashcardStore((state) => state.loadDecks)

  // Or subscribe to multiple values
  const { cards, session } = useFlashcardStore((state) => ({
    cards: state.cards,
    session: state.session,
  }))

  return <div>...</div>
}
```

---

## TypeScript Support

All hooks are fully typed with TypeScript. Import types as needed:

```typescript
import {
  Deck,
  FlashCard,
  Rating,
  State,
  StudySession
} from '@/apps/flashcards/types/flashcard'

import {
  DeckStats,
  StudySessionHook
} from '@/apps/flashcards/hooks'
```

---

## Best Practices

1. **Use hooks, not direct store access** - The hooks provide optimizations and auto-loading
2. **Let useFlashcards auto-load decks** - It handles this automatically on mount
3. **Enable keyboard shortcuts in study mode** - They significantly improve UX
4. **Show loading states** - Stats loading can take a moment for large decks
5. **Handle errors gracefully** - All async operations can throw errors
6. **Use computed values** - Don't recalculate things like `totalDue` yourself

---

## Performance Considerations

- **Deck auto-loading**: Only happens once when user is authenticated
- **Card filtering**: Uses `useMemo` to avoid unnecessary recalculations
- **Stats loading**: Fetches data asynchronously, shows loading state
- **Store subscriptions**: Hooks only subscribe to needed state slices
- **Review history**: Limited to last 30 days to keep queries fast

---

## Troubleshooting

**Q: Decks not loading?**
A: Ensure user is authenticated. Check `useAuth()` returns a valid user.

**Q: Keyboard shortcuts not working?**
A: Check if user is focused on an input/textarea. Shortcuts are disabled in form fields.

**Q: Stats showing 0?**
A: Stats require review history. New decks will have minimal stats.

**Q: Session ending immediately?**
A: Check that deck has cards due. Use `canStudy` to verify before starting.

**Q: Undo not working?**
A: Undo only works once. Check `canUndo` before showing undo button.
