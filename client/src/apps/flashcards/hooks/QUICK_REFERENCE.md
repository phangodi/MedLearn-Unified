# Flashcard Hooks - Quick Reference Card

## Quick Start

```typescript
// 1. Import the hook
import { useFlashcards } from '@/apps/flashcards/hooks'

// 2. Use in component
function MyComponent() {
  const { decks, loadDeck } = useFlashcards()

  return (
    <div>
      {decks.map(deck => (
        <button key={deck.id} onClick={() => loadDeck(deck.id)}>
          {deck.name}
        </button>
      ))}
    </div>
  )
}
```

## Hook Overview

| Hook | Purpose | Key Features |
|------|---------|--------------|
| `useFlashcards()` | Main hook for decks/cards | Auto-loading, computed values, filtering |
| `useStudySession()` | Study mode | Keyboard shortcuts, timer, auto-end |
| `useDeckStats()` | Analytics | Streaks, retention, forecast |

## useFlashcards() - Cheat Sheet

### Decks
```typescript
const {
  decks,              // Deck[] - All user's decks
  currentDeck,        // Deck | null - Selected deck
  loadDecks,          // (userId) => Promise<void>
  loadDeck,           // (deckId) => Promise<void>
  createDeck,         // (userId, data) => Promise<string>
  updateDeck,         // (deckId, data) => Promise<void>
  deleteDeck,         // (deckId) => Promise<void>
} = useFlashcards()
```

### Cards
```typescript
const {
  cards,              // FlashCard[] - All cards in current deck
  loadCards,          // (deckId) => Promise<void>
  createCard,         // (data) => Promise<string>
  updateCard,         // (cardId, data) => Promise<void>
  deleteCard,         // (cardId) => Promise<void>
  filteredCards,      // FlashCard[] - Cards after search/filters
} = useFlashcards()
```

### Computed Values
```typescript
const {
  totalDue,           // number - Cards due across all decks
  currentDeckDue,     // { total, new, learning, review, dueCards }
  canStudy,           // boolean - Can start study session
  availableTags,      // string[] - All unique tags
} = useFlashcards()
```

### UI State
```typescript
const {
  view,               // 'browser' | 'study' | 'editor' | 'stats' | 'deck-detail'
  setView,            // (view) => void
  searchQuery,        // string
  setSearchQuery,     // (query) => void
  filters,            // CardFilters
  setFilters,         // (filters) => void
  clearFilters,       // () => void
} = useFlashcards()
```

## useStudySession() - Cheat Sheet

### State
```typescript
const {
  isActive,           // boolean - Session in progress
  isPaused,           // boolean - Session paused
  currentCard,        // FlashCard | null
  showAnswer,         // boolean
  progress,           // { current, total, percentage, remaining }
} = useStudySession()
```

### Timer
```typescript
const {
  elapsedSeconds,     // number
  formattedTime,      // string - "12:34" or "1:23:45"
} = useStudySession()
```

### Actions
```typescript
const {
  startSession,       // (deckId) => Promise<void>
  endSession,         // () => Promise<void>
  pauseSession,       // () => void
  resumeSession,      // () => void
  revealAnswer,       // () => void
  rateCard,           // (rating: Rating) => Promise<void>
  undoLastRating,     // () => Promise<void>
  skipCard,           // () => void
} = useStudySession()
```

### Keyboard
```typescript
const {
  keyboardEnabled,    // boolean
  enableKeyboard,     // () => void
  disableKeyboard,    // () => void
} = useStudySession()
```

### Keyboard Shortcuts
- `Space` - Show answer / Rate Good
- `1` - Again
- `2` - Hard
- `3` - Good
- `4` - Easy
- `Esc` - End session
- `Ctrl+Z` - Undo
- `S` - Skip
- `P` - Pause/Resume

## useDeckStats() - Cheat Sheet

```typescript
const stats = useDeckStats(deck, userId)

stats.dueToday                  // number
stats.dueThisWeek              // number
stats.newCardsAvailable        // number
stats.reviewCardsAvailable     // number
stats.learningCardsAvailable   // number

stats.studyStreak              // number - Current streak in days
stats.longestStreak            // number - Best streak
stats.lastStudiedDaysAgo       // number | null

stats.retentionRate            // number - Percentage (0-100)
stats.totalReviews             // number
stats.successfulReviews        // number

stats.averageReviewTimeSeconds // number
stats.cardsPerDay              // number

stats.forecast                 // Array<{ date, dueCount, newCount, reviewCount }>
stats.loading                  // boolean
```

## Common Patterns

### Pattern: Load and Display Decks
```typescript
function DeckList() {
  const { decks, loadDeck, setView } = useFlashcards()

  const handleSelect = async (deckId: string) => {
    await loadDeck(deckId)
    setView('deck-detail')
  }

  return (
    <div>
      {decks.map(deck => (
        <div key={deck.id} onClick={() => handleSelect(deck.id)}>
          {deck.name} - {deck.reviewCount} due
        </div>
      ))}
    </div>
  )
}
```

### Pattern: Start Study Session
```typescript
function StudyButton({ deckId }: { deckId: string }) {
  const { startSession } = useStudySession()

  return (
    <button onClick={() => startSession(deckId)}>
      Start Studying
    </button>
  )
}
```

### Pattern: Display Stats
```typescript
function StatsPanel({ deck }: { deck: Deck }) {
  const { userId } = useAuth()
  const stats = useDeckStats(deck, userId)

  if (stats.loading) return <div>Loading...</div>

  return (
    <div>
      <p>Due Today: {stats.dueToday}</p>
      <p>Streak: {stats.studyStreak} days</p>
      <p>Retention: {stats.retentionRate}%</p>
    </div>
  )
}
```

### Pattern: Study Loop
```typescript
function Study() {
  const {
    currentCard,
    showAnswer,
    revealAnswer,
    rateCard,
  } = useStudySession()

  return (
    <div>
      <p>{currentCard?.front.text}</p>

      {showAnswer && <p>{currentCard?.back.text}</p>}

      {!showAnswer ? (
        <button onClick={revealAnswer}>Show Answer</button>
      ) : (
        <div>
          <button onClick={() => rateCard(Rating.Again)}>Again</button>
          <button onClick={() => rateCard(Rating.Hard)}>Hard</button>
          <button onClick={() => rateCard(Rating.Good)}>Good</button>
          <button onClick={() => rateCard(Rating.Easy)}>Easy</button>
        </div>
      )}
    </div>
  )
}
```

### Pattern: Search and Filter
```typescript
function CardSearch() {
  const {
    filteredCards,
    searchQuery,
    setSearchQuery,
    setFilters,
  } = useFlashcards()

  return (
    <div>
      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search cards..."
      />

      <select onChange={(e) => setFilters({ tags: [e.target.value] })}>
        <option value="">All tags</option>
        {/* ... */}
      </select>

      {filteredCards.map(card => (
        <div key={card.id}>{card.front.text}</div>
      ))}
    </div>
  )
}
```

## Types Quick Reference

```typescript
import {
  Deck,
  FlashCard,
  Rating,
  State,
  StudySession,
  CardFilters,
} from '@/apps/flashcards/types/flashcard'

// Rating enum
Rating.Again  // 1
Rating.Hard   // 2
Rating.Good   // 3
Rating.Easy   // 4

// State enum
State.New         // 0
State.Learning    // 1
State.Review      // 2
State.Relearning  // 3
```

## Direct Store Access (Advanced)

```typescript
import { useFlashcardStore } from '@/store/flashcardStore'

// Subscribe to specific slice
const decks = useFlashcardStore((state) => state.decks)

// Subscribe to multiple values
const { session, cards } = useFlashcardStore((state) => ({
  session: state.session,
  cards: state.cards,
}))

// Call actions
const loadDecks = useFlashcardStore((state) => state.loadDecks)
await loadDecks(userId)
```

## Error Handling

```typescript
try {
  await createDeck(userId, deckData)
  toast.success('Deck created!')
} catch (error) {
  console.error(error)
  toast.error('Failed to create deck')
}
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Decks not loading | Check user is authenticated |
| Keyboard shortcuts not working | Check not focused on input/textarea |
| Stats showing 0 | Need review history (new decks have no stats) |
| Session ending immediately | No cards due, check `canStudy` |
| Types not recognized | Import from `@/apps/flashcards/types/flashcard` |

## Performance Tips

1. Use `useMemo` for expensive calculations
2. Subscribe to specific store slices, not entire state
3. Use `filteredCards` instead of filtering manually
4. Let hooks auto-load data, don't fetch manually
5. Disable keyboard shortcuts when not needed

## Links

- Full Documentation: `/hooks/README.md`
- Complete Examples: `/hooks/EXAMPLES.md`
- Implementation Summary: `/IMPLEMENTATION_SUMMARY.md`
- Store Source: `/store/flashcardStore.ts`
