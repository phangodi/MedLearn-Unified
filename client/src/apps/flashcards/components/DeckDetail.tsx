import { useState, useMemo, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useParams, useNavigate } from 'react-router-dom'
import {
  ArrowLeft,
  Plus,
  Play,
  Settings,
  Search,
  Edit,
  Trash2,
  Pause,
  MoreVertical,
  Download,
  ChevronDown,
  ChevronRight,
  X,
  AlertCircle,
  CheckCircle2,
  Clock,
  BookOpen,
  Filter,
  PlayCircle
} from 'lucide-react'
import { useFlashcards } from '../hooks'
import { CardEditor } from './CardEditor'
import { Button } from '@/components/ui/Button'
import { State, type FlashCard } from '../types/flashcard'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css'

type SortOption = 'due' | 'created' | 'alphabetical'
type FilterOption = 'all' | 'due' | 'new' | 'suspended'

/**
 * Helper to convert Firestore Timestamps to JavaScript Dates
 * Firestore returns Timestamps that have toDate() method, not getTime()
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

export function DeckDetail() {
  const { deckId } = useParams()
  const navigate = useNavigate()
  const {
    currentDeck,
    cards,
    cardsLoading,
    loadDeck,
    loadCards,
    deleteCard,
    updateCard,
    startStudySession,
    userId,
    updateDeck,
    deleteDeck,
    currentDeckDue
  } = useFlashcards()

  // UI State
  const [showCardEditor, setShowCardEditor] = useState(false)
  const [editingCardId, setEditingCardId] = useState<string | undefined>()
  const [showSettings, setShowSettings] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [filterOption, setFilterOption] = useState<FilterOption>('all')
  const [sortOption, setSortOption] = useState<SortOption>('due')
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null)
  const [selectedCards, setSelectedCards] = useState<Set<string>>(new Set())
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null)
  const [showBulkActions, setShowBulkActions] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  // Settings state
  const [editedName, setEditedName] = useState('')
  const [editedDescription, setEditedDescription] = useState('')
  const [editedColor, setEditedColor] = useState('')
  const [editedIcon, setEditedIcon] = useState('')
  const [editedSettings, setEditedSettings] = useState({
    newCardsPerDay: 20,
    reviewsPerDay: 200,
  })
  const [showDeckDeleteConfirm, setShowDeckDeleteConfirm] = useState(false)
  const [isSavingSettings, setIsSavingSettings] = useState(false)

  // Load deck and cards
  useEffect(() => {
    if (deckId) {
      // For preloaded decks, don't require userId
      // For user decks, we need userId but can still load the deck
      loadDeck(deckId)
      loadCards(deckId)
    }
  }, [deckId])

  // Initialize settings when deck loads
  useEffect(() => {
    if (currentDeck) {
      setEditedName(currentDeck.name)
      setEditedDescription(currentDeck.description || '')
      setEditedColor(currentDeck.color)
      setEditedIcon(currentDeck.icon)
      setEditedSettings({
        newCardsPerDay: currentDeck.settings.newCardsPerDay,
        reviewsPerDay: currentDeck.settings.reviewsPerDay,
      })
    }
  }, [currentDeck])

  // Filtered and sorted cards
  const filteredAndSortedCards = useMemo(() => {
    let filtered = [...cards]

    // Apply search
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(card =>
        card.front.text.toLowerCase().includes(query) ||
        card.back.text.toLowerCase().includes(query) ||
        card.tags.some(tag => tag.toLowerCase().includes(query))
      )
    }

    // Apply filter
    switch (filterOption) {
      case 'due':
        filtered = filtered.filter(card => toDate(card.fsrs.due).getTime() <= Date.now())
        break
      case 'new':
        filtered = filtered.filter(card => card.fsrs.state === State.New)
        break
      case 'suspended':
        filtered = filtered.filter(card => card.suspended)
        break
    }

    // Apply sort
    filtered.sort((a, b) => {
      switch (sortOption) {
        case 'due':
          return toDate(a.fsrs.due).getTime() - toDate(b.fsrs.due).getTime()
        case 'created':
          return b.createdAt.seconds - a.createdAt.seconds
        case 'alphabetical':
          return a.front.text.localeCompare(b.front.text)
        default:
          return 0
      }
    })

    return filtered
  }, [cards, searchQuery, filterOption, sortOption])

  // State badge styling
  const getStateBadge = (card: FlashCard) => {
    if (card.suspended) {
      return <span className="px-2 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">Suspended</span>
    }

    switch (card.fsrs.state) {
      case State.New:
        return <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-500 border border-blue-500/20">New</span>
      case State.Learning:
        return <span className="px-2 py-1 rounded-full text-xs font-medium bg-orange-500/10 text-orange-500 border border-orange-500/20">Learning</span>
      case State.Review:
        return <span className="px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">Review</span>
      case State.Relearning:
        return <span className="px-2 py-1 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-500 border border-yellow-500/20">Relearning</span>
      default:
        return null
    }
  }

  // Due date display with more specific timing
  const getDueDisplay = (card: FlashCard) => {
    const now = new Date()
    const dueDate = toDate(card.fsrs.due)
    const diffMs = dueDate.getTime() - now.getTime()
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
    const diffMins = Math.floor(diffMs / (1000 * 60))

    if (card.fsrs.state === State.New) {
      return 'Not studied'
    }

    if (diffMs < 0) {
      // Overdue - show how long
      const overdueHours = Math.abs(diffHours)
      if (overdueHours < 1) {
        return <span className="text-destructive font-medium">Overdue ({Math.abs(diffMins)}m)</span>
      } else if (overdueHours < 24) {
        return <span className="text-destructive font-medium">Overdue ({overdueHours}h)</span>
      } else {
        const overdueDays = Math.ceil(overdueHours / 24)
        return <span className="text-destructive font-medium">Overdue ({overdueDays}d)</span>
      }
    }

    // Due in the future
    if (diffMins < 60) {
      return <span className="text-primary font-medium">In {diffMins}m</span>
    }

    if (diffHours < 24) {
      return <span className="text-primary font-medium">In {diffHours}h</span>
    }

    // Check if it's tomorrow (next calendar day)
    const tomorrow = new Date(now)
    tomorrow.setDate(tomorrow.getDate() + 1)
    tomorrow.setHours(23, 59, 59, 999)

    if (dueDate <= tomorrow) {
      return 'Tomorrow'
    }

    // More than tomorrow - show days
    const diffDays = Math.ceil(diffHours / 24)
    if (diffDays < 7) {
      return `In ${diffDays} days`
    }

    // More than a week - show date
    return dueDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }

  // Truncate text and strip markdown formatting
  const truncateText = (text: string, maxLength: number) => {
    // First, remove image markdown ![alt](url) and replace with [Image]
    let cleanText = text.replace(/!\[([^\]]*)\]\([^)]+\)/g, '[Image]')
    // Remove HTML img tags
    cleanText = cleanText.replace(/<img[^>]*>/gi, '[Image]')
    // Remove other markdown formatting
    cleanText = cleanText.replace(/[#*_~`[\]()]/g, '').trim()
    // Collapse multiple spaces
    cleanText = cleanText.replace(/\s+/g, ' ')
    // If only "[Image]" after cleanup, show it
    if (cleanText === 'Image') return '[Image]'
    if (cleanText.length <= maxLength) return cleanText
    return cleanText.slice(0, maxLength) + '...'
  }

  // Handle card actions
  const handleEditCard = (cardId: string) => {
    setEditingCardId(cardId)
    setShowCardEditor(true)
  }

  const handleDeleteCard = async (cardId: string) => {
    setIsDeleting(true)
    try {
      await deleteCard(cardId)
      setShowDeleteConfirm(null)
    } catch (error) {
      console.error('Failed to delete card:', error)
    } finally {
      setIsDeleting(false)
    }
  }

  const handleToggleSuspend = async (card: FlashCard) => {
    try {
      await updateCard(card.id, { suspended: !card.suspended })
    } catch (error) {
      console.error('Failed to toggle suspend:', error)
    }
  }

  // Bulk actions
  const handleSelectCard = (cardId: string) => {
    const newSelected = new Set(selectedCards)
    if (newSelected.has(cardId)) {
      newSelected.delete(cardId)
    } else {
      newSelected.add(cardId)
    }
    setSelectedCards(newSelected)
  }

  const handleSelectAll = () => {
    if (selectedCards.size === filteredAndSortedCards.length) {
      setSelectedCards(new Set())
    } else {
      setSelectedCards(new Set(filteredAndSortedCards.map(c => c.id)))
    }
  }

  const handleBulkDelete = async () => {
    setIsDeleting(true)
    try {
      await Promise.all(Array.from(selectedCards).map(cardId => deleteCard(cardId)))
      setSelectedCards(new Set())
      setShowBulkActions(false)
    } catch (error) {
      console.error('Failed to bulk delete:', error)
    } finally {
      setIsDeleting(false)
    }
  }

  const handleBulkSuspend = async () => {
    setIsDeleting(true)
    try {
      await Promise.all(
        Array.from(selectedCards).map(cardId => {
          const card = cards.find(c => c.id === cardId)
          if (card) {
            return updateCard(cardId, { suspended: !card.suspended })
          }
          return Promise.resolve()
        })
      )
      setSelectedCards(new Set())
    } catch (error) {
      console.error('Failed to bulk suspend:', error)
    } finally {
      setIsDeleting(false)
    }
  }

  // Start study session
  const handleStartStudy = async () => {
    // For preloaded decks, we don't need userId check
    // For preloaded decks, all cards are initially "new" so they should be due
    const isPreloaded = currentDeck?.isPreloaded
    const hasDueCards = currentDeckDue.total > 0 || (isPreloaded && cards.length > 0)

    if (!deckId || !hasDueCards) return
    if (!isPreloaded && !userId) return // Only require userId for user decks

    try {
      await startStudySession(deckId, userId || 'preloaded-user')
      navigate(`/flashcards/study/${deckId}`)
    } catch (error) {
      console.error('Failed to start study session:', error)
    }
  }

  // Settings actions
  const handleSaveSettings = async () => {
    if (!currentDeck) return
    setIsSavingSettings(true)
    try {
      await updateDeck(currentDeck.id, {
        name: editedName,
        description: editedDescription,
        color: editedColor,
        icon: editedIcon,
        settings: {
          ...currentDeck.settings,
          newCardsPerDay: editedSettings.newCardsPerDay,
          reviewsPerDay: editedSettings.reviewsPerDay,
        }
      })
      setShowSettings(false)
    } catch (error) {
      console.error('Failed to save settings:', error)
    } finally {
      setIsSavingSettings(false)
    }
  }

  const handleDeleteDeck = async () => {
    if (!currentDeck) return
    setIsDeleting(true)
    try {
      await deleteDeck(currentDeck.id)
      navigate('/flashcards')
    } catch (error) {
      console.error('Failed to delete deck:', error)
    } finally {
      setIsDeleting(false)
    }
  }

  const handleExportDeck = () => {
    if (!currentDeck) return
    const exportData = {
      deck: currentDeck,
      cards: cards,
      exportedAt: new Date().toISOString(),
    }
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${currentDeck.name.replace(/\s+/g, '-').toLowerCase()}-deck.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  if (!deckId) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Invalid deck ID</p>
      </div>
    )
  }

  if (cardsLoading || !currentDeck) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading deck...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-6"
        >
          <button
            onClick={() => navigate('/flashcards')}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Decks
          </button>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-start gap-4">
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center text-white text-2xl flex-shrink-0"
                style={{ backgroundColor: currentDeck.color }}
              >
                <BookOpen className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">
                  {currentDeck.name}
                </h1>
                {currentDeck.description && (
                  <p className="text-muted-foreground">{currentDeck.description}</p>
                )}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-3">
              {!currentDeck.isPreloaded && (
                <>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setEditingCardId(undefined)
                      setShowCardEditor(true)
                    }}
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Card
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowSettings(true)}
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                  </Button>
                </>
              )}
              <div className="flex items-center gap-3">
                {currentDeck.isPreloaded && (
                  <span className="text-xs text-muted-foreground/70 px-2 py-1 rounded border border-border/50 bg-muted/30">
                    Read-only
                  </span>
                )}
                <Button
                  onClick={handleStartStudy}
                  disabled={!currentDeckDue.total && !(currentDeck?.isPreloaded && cards.length > 0)}
                  className="px-6 py-2.5 rounded-lg bg-[#0066CC] text-white font-medium hover:bg-[#0055AA] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Study Now {currentDeck?.isPreloaded && cards.length > 0 ? `(${cards.length})` : currentDeckDue.total > 0 ? `(${currentDeckDue.total})` : ''}
                </Button>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-1">
                <BookOpen className="w-4 h-4 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Total Cards</p>
              </div>
              <p className="text-2xl font-bold text-foreground">{currentDeck.cardCount}</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-1">
                <Clock className="w-4 h-4 text-destructive" />
                <p className="text-sm text-muted-foreground">Due</p>
              </div>
              <p className="text-2xl font-bold text-destructive">{currentDeckDue.review}</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-1">
                <PlayCircle className="w-4 h-4 text-blue-500" />
                <p className="text-sm text-muted-foreground">New</p>
              </div>
              <p className="text-2xl font-bold text-blue-500">{currentDeckDue.new}</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-1">
                <AlertCircle className="w-4 h-4 text-orange-500" />
                <p className="text-sm text-muted-foreground">Learning</p>
              </div>
              <p className="text-2xl font-bold text-orange-500">{currentDeckDue.learning}</p>
            </div>
          </div>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6 space-y-4"
        >
          {/* Search bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search cards..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
            />
          </div>

          {/* Filter and Sort buttons */}
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <div className="flex gap-2">
                {(['all', 'due', 'new', 'suspended'] as FilterOption[]).map((option) => (
                  <button
                    key={option}
                    onClick={() => setFilterOption(option)}
                    className={`
                      px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200
                      ${filterOption === option
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                      }
                    `}
                  >
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              {selectedCards.size > 0 && (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">
                    {selectedCards.size} selected
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowBulkActions(!showBulkActions)}
                  >
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </div>
              )}

              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value as SortOption)}
                className="px-3 py-1.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              >
                <option value="due">Sort by Due Date</option>
                <option value="created">Sort by Created</option>
                <option value="alphabetical">Sort Alphabetically</option>
              </select>
            </div>
          </div>

          {/* Bulk actions panel */}
          <AnimatePresence>
            {showBulkActions && selectedCards.size > 0 && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="bg-card border border-border rounded-lg p-4 flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleBulkSuspend}
                    disabled={isDeleting}
                  >
                    <Pause className="w-4 h-4 mr-2" />
                    Toggle Suspend
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleBulkDelete}
                    disabled={isDeleting}
                    className="text-destructive hover:bg-destructive/10"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete Selected
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setSelectedCards(new Set())
                      setShowBulkActions(false)
                    }}
                  >
                    <X className="w-4 h-4 mr-2" />
                    Cancel
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Cards List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {filteredAndSortedCards.length === 0 ? (
            // Empty state
            <div className="bg-card border-2 border-dashed border-border rounded-xl p-12 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
                <BookOpen className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-2">
                {cards.length === 0 ? 'No cards yet' : 'No cards match your filters'}
              </h2>
              <p className="text-muted-foreground mb-6">
                {cards.length === 0
                  ? 'Add your first flashcard to start learning'
                  : 'Try adjusting your search or filters'
                }
              </p>
              {cards.length === 0 && !currentDeck?.isPreloaded && (
                <Button
                  onClick={() => {
                    setEditingCardId(undefined)
                    setShowCardEditor(true)
                  }}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add First Card
                </Button>
              )}
            </div>
          ) : (
            // Cards table
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              {/* Table header */}
              <div className="bg-muted/30 border-b border-border px-6 py-3 grid grid-cols-12 gap-4 text-sm font-medium text-muted-foreground">
                <div className="col-span-1 flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedCards.size === filteredAndSortedCards.length}
                    onChange={handleSelectAll}
                    className="w-4 h-4 rounded border-border"
                  />
                </div>
                <div className="col-span-3">Front</div>
                <div className="col-span-3">Back</div>
                <div className="col-span-2">Due</div>
                <div className="col-span-2">State</div>
                <div className="col-span-1 text-right">Actions</div>
              </div>

              {/* Table rows */}
              <div className="divide-y divide-border">
                {filteredAndSortedCards.map((card, index) => (
                  <div key={card.id}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.02 }}
                      className="px-6 py-4 grid grid-cols-12 gap-4 items-center hover:bg-muted/30 transition-colors"
                    >
                      <div className="col-span-1">
                        <input
                          type="checkbox"
                          checked={selectedCards.has(card.id)}
                          onChange={() => handleSelectCard(card.id)}
                          className="w-4 h-4 rounded border-border"
                        />
                      </div>
                      <div
                        className="col-span-3 cursor-pointer"
                        onClick={() => setExpandedCardId(expandedCardId === card.id ? null : card.id)}
                      >
                        <div className="flex items-start gap-2">
                          {expandedCardId === card.id ? (
                            <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" />
                          ) : (
                            <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" />
                          )}
                          <p className="text-sm text-foreground line-clamp-2">
                            {truncateText(card.front.text, 50)}
                          </p>
                        </div>
                      </div>
                      <div className="col-span-3">
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {truncateText(card.back.text, 40)}
                        </p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-sm">{getDueDisplay(card)}</p>
                      </div>
                      <div className="col-span-2">
                        {getStateBadge(card)}
                      </div>
                      <div className="col-span-1 flex items-center justify-end gap-2">
                        {!currentDeck?.isPreloaded && (
                          <>
                            <button
                              onClick={() => handleEditCard(card.id)}
                              className="p-1.5 rounded-lg hover:bg-muted transition-colors"
                              title="Edit"
                            >
                              <Edit className="w-4 h-4 text-muted-foreground" />
                            </button>
                            <button
                              onClick={() => handleToggleSuspend(card)}
                              className="p-1.5 rounded-lg hover:bg-muted transition-colors"
                              title={card.suspended ? 'Unsuspend' : 'Suspend'}
                            >
                              <Pause className={`w-4 h-4 ${card.suspended ? 'text-primary' : 'text-muted-foreground'}`} />
                            </button>
                            <button
                              onClick={() => setShowDeleteConfirm(card.id)}
                              className="p-1.5 rounded-lg hover:bg-destructive/10 transition-colors"
                              title="Delete"
                            >
                              <Trash2 className="w-4 h-4 text-destructive" />
                            </button>
                          </>
                        )}
                      </div>
                    </motion.div>

                    {/* Expanded card preview */}
                    <AnimatePresence>
                      {expandedCardId === card.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-4 ml-11 grid grid-cols-1 md:grid-cols-2 gap-6 bg-muted/20">
                            {/* Front preview */}
                            <div>
                              <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                                <BookOpen className="w-4 h-4" />
                                Front
                              </h4>
                              <div className="prose prose-sm dark:prose-invert max-w-none bg-background border border-border rounded-lg p-4">
                                <ReactMarkdown
                                  remarkPlugins={[remarkGfm, remarkMath]}
                                  rehypePlugins={[rehypeKatex]}
                                >
                                  {card.front.text}
                                </ReactMarkdown>
                              </div>
                            </div>

                            {/* Back preview */}
                            <div>
                              <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4" />
                                Back
                              </h4>
                              <div className="prose prose-sm dark:prose-invert max-w-none bg-background border border-border rounded-lg p-4">
                                <ReactMarkdown
                                  remarkPlugins={[remarkGfm, remarkMath]}
                                  rehypePlugins={[rehypeKatex]}
                                >
                                  {card.back.text}
                                </ReactMarkdown>
                              </div>
                            </div>

                            {/* Tags */}
                            {card.tags.length > 0 && (
                              <div className="col-span-full">
                                <h4 className="text-sm font-semibold text-foreground mb-2">Tags</h4>
                                <div className="flex flex-wrap gap-2">
                                  {card.tags.map(tag => (
                                    <span
                                      key={tag}
                                      className="px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Quick edit button */}
                            {!currentDeck?.isPreloaded && (
                              <div className="col-span-full flex justify-end">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => handleEditCard(card.id)}
                                >
                                  <Edit className="w-4 h-4 mr-2" />
                                  Edit Card
                                </Button>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Delete confirmation */}
                    <AnimatePresence>
                      {showDeleteConfirm === card.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-4 ml-11 bg-destructive/10 border-t border-destructive/20">
                            <div className="py-3 flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <AlertCircle className="w-5 h-5 text-destructive" />
                                <p className="text-sm font-medium text-destructive">
                                  Delete this card permanently?
                                </p>
                              </div>
                              <div className="flex items-center gap-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => setShowDeleteConfirm(null)}
                                  disabled={isDeleting}
                                >
                                  Cancel
                                </Button>
                                <Button
                                  size="sm"
                                  onClick={() => handleDeleteCard(card.id)}
                                  disabled={isDeleting}
                                  className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                                >
                                  {isDeleting ? 'Deleting...' : 'Delete'}
                                </Button>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {/* Card Editor Modal */}
      <AnimatePresence>
        {showCardEditor && (
          <CardEditor
            deckId={deckId}
            cardId={editingCardId}
            onClose={() => {
              setShowCardEditor(false)
              setEditingCardId(undefined)
            }}
            onSave={() => {
              // Reload cards after save
              loadCards(deckId)
            }}
          />
        )}
      </AnimatePresence>

      {/* Settings Panel */}
      <AnimatePresence>
        {showSettings && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Dark overlay backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setShowSettings(false)}
            />

            {/* Modal content - centered */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative z-10 w-full max-w-2xl bg-card rounded-xl shadow-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border sticky top-0 bg-card z-10">
                <h2 className="text-2xl font-bold text-foreground">Deck Settings</h2>
                <button
                  onClick={() => setShowSettings(false)}
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Basic settings */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Basic Information</h3>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Deck Name
                    </label>
                    <input
                      type="text"
                      value={editedName}
                      onChange={(e) => setEditedName(e.target.value)}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Description
                    </label>
                    <textarea
                      value={editedDescription}
                      onChange={(e) => setEditedDescription(e.target.value)}
                      rows={3}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                    />
                  </div>
                </div>

                {/* FSRS settings */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Study Limits</h3>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      New Cards Per Day
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="999"
                      value={editedSettings.newCardsPerDay}
                      onChange={(e) => setEditedSettings({
                        ...editedSettings,
                        newCardsPerDay: parseInt(e.target.value) || 0
                      })}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Maximum new cards to introduce per day
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Reviews Per Day
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="9999"
                      value={editedSettings.reviewsPerDay}
                      onChange={(e) => setEditedSettings({
                        ...editedSettings,
                        reviewsPerDay: parseInt(e.target.value) || 0
                      })}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Maximum review cards per day
                    </p>
                  </div>
                </div>

                {/* Deck actions */}
                <div className="space-y-4 pt-6 border-t border-border">
                  <h3 className="text-lg font-semibold text-foreground">Deck Actions</h3>

                  <Button
                    variant="outline"
                    onClick={handleExportDeck}
                    className="w-full"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Export Deck as JSON
                  </Button>

                  {!showDeckDeleteConfirm ? (
                    <Button
                      variant="outline"
                      onClick={() => setShowDeckDeleteConfirm(true)}
                      className="w-full text-destructive hover:bg-destructive/10"
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete Deck
                    </Button>
                  ) : (
                    <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                      <div className="flex items-start gap-3 mb-3">
                        <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-destructive">
                            Delete this deck and all its cards?
                          </p>
                          <p className="text-xs text-destructive/80 mt-1">
                            This action cannot be undone. All {currentDeck?.cardCount} cards will be permanently deleted.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setShowDeckDeleteConfirm(false)}
                          className="flex-1"
                        >
                          Cancel
                        </Button>
                        <Button
                          size="sm"
                          onClick={handleDeleteDeck}
                          disabled={isDeleting}
                          className="flex-1 bg-destructive text-destructive-foreground hover:bg-destructive/90"
                        >
                          {isDeleting ? 'Deleting...' : 'Yes, Delete Deck'}
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-end gap-3 p-6 border-t border-border sticky bottom-0 bg-card">
                <Button
                  variant="outline"
                  onClick={() => setShowSettings(false)}
                  disabled={isSavingSettings}
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleSaveSettings}
                  disabled={isSavingSettings}
                >
                  {isSavingSettings ? 'Saving...' : 'Save Changes'}
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
