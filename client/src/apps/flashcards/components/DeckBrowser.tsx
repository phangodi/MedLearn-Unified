import { useState, useMemo, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import {
  Plus,
  Search,
  MoreVertical,
  Play,
  Edit,
  Trash2,
  Clock,
  BookOpen,
  Layers,
  ChevronDown,
  X,
  Check,
  AlertCircle,
  Sparkles,
  Copy,
  Brain,
  Microscope,
  Activity,
  Heart,
  Zap,
  Upload,
} from 'lucide-react'
import { useFlashcards } from '../hooks'
import { useAuth } from '@/contexts/AuthContext'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import type { Deck } from '../types/flashcard'
import { getPreloadedDecksWithStats } from '../data/preloaded'
import { ImportModal } from './ImportModal'

type SortOption = 'name' | 'dueCount' | 'lastStudied' | 'created'

// Color options for deck creation
const DECK_COLORS = [
  { value: '#3B82F6', label: 'Blue' },
  { value: '#10B981', label: 'Green' },
  { value: '#8B5CF6', label: 'Purple' },
  { value: '#F59E0B', label: 'Amber' },
  { value: '#EF4444', label: 'Red' },
  { value: '#06B6D4', label: 'Cyan' },
  { value: '#EC4899', label: 'Pink' },
  { value: '#6366F1', label: 'Indigo' },
]

// Icon options for deck creation
const DECK_ICONS = [
  'BookOpen',
  'Brain',
  'Microscope',
  'Layers',
  'Sparkles',
  'Activity',
  'Heart',
  'Zap',
]

export function DeckBrowser() {
  const navigate = useNavigate()
  const { user } = useAuth()
  const {
    decks,
    decksLoading,
    decksError,
    totalDue,
    createDeck,
    deleteDeck,
    copyDeck,
    loadDecks,
  } = useFlashcards()

  // Refresh decks on mount to ensure fresh stats after study sessions
  useEffect(() => {
    if (user?.uid) {
      loadDecks(user.uid)
    }
  }, [user?.uid, loadDecks])

  // UI state
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState<SortOption>('lastStudied')
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [showImportModal, setShowImportModal] = useState(false)
  const [showOptionsMenu, setShowOptionsMenu] = useState<string | null>(null)

  // Create deck form state
  const [deckName, setDeckName] = useState('')
  const [deckDescription, setDeckDescription] = useState('')
  const [deckColor, setDeckColor] = useState(DECK_COLORS[0].value)
  const [deckIcon, setDeckIcon] = useState(DECK_ICONS[0])
  const [isCreating, setIsCreating] = useState(false)
  const [createError, setCreateError] = useState('')

  // Merge user decks with preloaded decks (with computed stats)
  const allDecks = useMemo(() => {
    return [...decks, ...getPreloadedDecksWithStats()]
  }, [decks])

  // Filter and sort decks
  const filteredDecks = useMemo(() => {
    let filtered = [...allDecks]

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (deck) =>
          deck.name.toLowerCase().includes(query) ||
          deck.description?.toLowerCase().includes(query)
      )
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name)
        case 'dueCount':
          // Use dueCount if available, fallback to old method
          const aDue = a.dueCount ?? (a.reviewCount + a.learningCount)
          const bDue = b.dueCount ?? (b.reviewCount + b.learningCount)
          return bDue - aDue
        case 'lastStudied':
          if (!a.lastStudiedAt && !b.lastStudiedAt) return 0
          if (!a.lastStudiedAt) return 1
          if (!b.lastStudiedAt) return -1
          return b.lastStudiedAt.seconds - a.lastStudiedAt.seconds
        case 'created':
          return b.createdAt.seconds - a.createdAt.seconds
        default:
          return 0
      }
    })

    return filtered
  }, [allDecks, searchQuery, sortBy])

  // Separate user decks and preloaded decks
  const userDecks = filteredDecks.filter((deck) => !deck.isPreloaded)
  const preloadedDecks = filteredDecks.filter((deck) => deck.isPreloaded)

  // Handle create deck with timeout and error handling
  const handleCreateDeck = async () => {
    if (!user?.uid) {
      setCreateError('User not authenticated')
      return
    }

    if (!deckName.trim()) {
      setCreateError('Deck name is required')
      return
    }

    setIsCreating(true)
    setCreateError('')

    try {
      // Add client-side timeout wrapper (15 seconds total, including service timeout)
      const timeoutPromise = new Promise<never>((_, reject) => {
        setTimeout(() => reject(new Error('Request timed out. Please try again.')), 15000)
      })

      await Promise.race([
        createDeck(user.uid, {
          name: deckName.trim(),
          description: deckDescription.trim(),
          color: deckColor,
          icon: deckIcon,
        }),
        timeoutPromise
      ])

      // Reset form on success
      setDeckName('')
      setDeckDescription('')
      setDeckColor(DECK_COLORS[0].value)
      setDeckIcon(DECK_ICONS[0])
      setShowCreateModal(false)
    } catch (error) {
      console.error('Error creating deck:', error)

      // Provide user-friendly error messages
      if (error instanceof Error) {
        if (error.message.includes('permission') || error.message.includes('PERMISSION_DENIED')) {
          setCreateError('Permission denied. Firestore security rules may not be deployed.')
        } else if (error.message.includes('timeout')) {
          setCreateError('Request timed out. Please check your connection and try again.')
        } else if (error.message.includes('network')) {
          setCreateError('Network error. Please check your internet connection.')
        } else {
          setCreateError(error.message)
        }
      } else {
        setCreateError('Failed to create deck. Please try again.')
      }
    } finally {
      setIsCreating(false)
    }
  }

  // Handle delete deck
  const handleDeleteDeck = async (deckId: string) => {
    if (!confirm('Are you sure you want to delete this deck? All cards will be permanently deleted.')) {
      return
    }

    try {
      await deleteDeck(deckId)
      setShowOptionsMenu(null)
    } catch (error) {
      console.error('Error deleting deck:', error)
      alert('Failed to delete deck. Please try again.')
    }
  }

  // Handle copy deck
  const handleCopyDeck = async (deckId: string) => {
    if (!user?.uid) {
      alert('You must be logged in to copy a deck.')
      return
    }

    try {
      await copyDeck(deckId, user.uid)
      setShowOptionsMenu(null)
      alert('Deck copied to your collection!')
    } catch (error) {
      console.error('Error copying deck:', error)
      alert('Failed to copy deck. Please try again.')
    }
  }

  // Format last studied date
  const formatLastStudied = (deck: Deck) => {
    // Check if any cards have been studied (better indicator than just lastStudiedAt)
    const hasBeenStudied = deck.learningCount > 0 ||
                          deck.reviewCount > 0 ||
                          deck.lastStudiedAt !== null

    if (!hasBeenStudied) return 'Never studied'

    if (!deck.lastStudiedAt) return 'Previously studied'

    const date = new Date(deck.lastStudiedAt.seconds * 1000)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffMins = Math.floor(diffMs / 60000)
    const diffHours = Math.floor(diffMs / 3600000)
    const diffDays = Math.floor(diffMs / 86400000)

    if (diffMins < 60) return `${diffMins}m ago`
    if (diffHours < 24) return `${diffHours}h ago`
    if (diffDays === 1) return 'Yesterday'
    if (diffDays < 7) return `${diffDays}d ago`

    return date.toLocaleDateString()
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Layers className="w-12 h-12 text-primary" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight pb-1 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Flashcards
            </h1>
          </div>
          <p className="text-base lg:text-lg text-muted-foreground">
            {allDecks.length > 0
              ? `${allDecks.length} ${allDecks.length === 1 ? 'deck' : 'decks'} • ${totalDue} ${totalDue === 1 ? 'card' : 'cards'} due today`
              : 'Create your first deck to get started'}
          </p>
        </motion.div>

        {/* Search, Filter, and Create */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between max-w-4xl mx-auto"
        >
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search decks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-10 pl-10 pr-4 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
            />
          </div>

          {/* Sort */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="h-10 pl-3 pr-8 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring appearance-none cursor-pointer min-w-[160px]"
            >
              <option value="lastStudied">Last Studied</option>
              <option value="dueCount">Due Count</option>
              <option value="name">Name</option>
              <option value="created">Created Date</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
          </div>

          {/* Import and Create Deck Buttons */}
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => setShowImportModal(true)}
              className="gap-2"
            >
              <Upload className="w-4 h-4" />
              Import
            </Button>
            <Button
              onClick={() => setShowCreateModal(true)}
              className="gap-2"
            >
              <Plus className="w-4 h-4" />
              Create Deck
            </Button>
          </div>
        </motion.div>

        {/* Loading State */}
        {decksLoading && (
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p className="text-muted-foreground">Loading decks...</p>
            </div>
          </div>
        )}

        {/* Error State */}
        {decksError && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md mx-auto bg-destructive/10 border border-destructive/20 rounded-lg p-6 text-center"
          >
            <AlertCircle className="w-12 h-12 text-destructive mx-auto mb-3" />
            <h3 className="font-semibold text-destructive mb-2">Error Loading Decks</h3>
            <p className="text-sm text-muted-foreground">{decksError}</p>
          </motion.div>
        )}

        {/* Empty State - Only show if no user decks, but preloaded decks will still be shown */}
        {!decksLoading && !decksError && userDecks.length === 0 && preloadedDecks.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-card border-2 border-border/50 rounded-xl p-8 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
                <Layers className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-2">No Decks Yet</h2>
              <p className="text-muted-foreground mb-6">
                Create your first flashcard deck to start learning with spaced repetition
              </p>
              <Button
                onClick={() => setShowCreateModal(true)}
                size="lg"
                className="gap-2"
              >
                <Plus className="w-5 h-5" />
                Create Your First Deck
              </Button>
            </div>
          </motion.div>
        )}

        {/* User Decks */}
        {!decksLoading && !decksError && userDecks.length > 0 && (
          <div className="mb-12">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold mb-6 max-w-4xl mx-auto"
            >
              My Decks
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {userDecks.map((deck, idx) => (
                <DeckCard
                  key={deck.id}
                  deck={deck}
                  index={idx}
                  onStudy={() => navigate(`/flashcards/study/${deck.id}`)}
                  onEdit={() => navigate(`/flashcards/deck/${deck.id}`)}
                  onDelete={() => handleDeleteDeck(deck.id)}
                  onCopy={() => handleCopyDeck(deck.id)}
                  onClick={() => navigate(`/flashcards/deck/${deck.id}`)}
                  onAddCards={() => navigate(`/flashcards/deck/${deck.id}?addCard=true`)}
                  formatLastStudied={formatLastStudied}
                  showOptionsMenu={showOptionsMenu}
                  setShowOptionsMenu={setShowOptionsMenu}
                />
              ))}
            </div>
          </div>
        )}

        {/* Preloaded Decks */}
        {!decksLoading && !decksError && preloadedDecks.length > 0 && (
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-4xl mx-auto mb-6"
            >
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">Sample Decks</h2>
              </div>
              <p className="text-sm text-muted-foreground">
                Pre-made flashcards for common medical topics. Study directly or create your own cards.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {preloadedDecks.map((deck, idx) => (
                <DeckCard
                  key={deck.id}
                  deck={deck}
                  index={idx + userDecks.length}
                  onStudy={() => navigate(`/flashcards/study/${deck.id}`)}
                  onEdit={() => navigate(`/flashcards/deck/${deck.id}`)}
                  onDelete={() => handleDeleteDeck(deck.id)}
                  onCopy={() => handleCopyDeck(deck.id)}
                  onClick={() => navigate(`/flashcards/deck/${deck.id}`)}
                  onAddCards={() => navigate(`/flashcards/deck/${deck.id}?addCard=true`)}
                  formatLastStudied={formatLastStudied}
                  showOptionsMenu={showOptionsMenu}
                  setShowOptionsMenu={setShowOptionsMenu}
                  isPreloaded
                />
              ))}
            </div>
          </div>
        )}

        {/* No Results State */}
        {!decksLoading && !decksError && allDecks.length > 0 && filteredDecks.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md mx-auto text-center py-12"
          >
            <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-30" />
            <h3 className="text-xl font-semibold mb-2">No decks found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filters</p>
          </motion.div>
        )}
      </div>

      {/* Create Deck Modal */}
      <AnimatePresence>
        {showCreateModal && (
          <CreateDeckModal
            deckName={deckName}
            setDeckName={setDeckName}
            deckDescription={deckDescription}
            setDeckDescription={setDeckDescription}
            deckColor={deckColor}
            setDeckColor={setDeckColor}
            deckIcon={deckIcon}
            setDeckIcon={setDeckIcon}
            isCreating={isCreating}
            createError={createError}
            onClose={() => {
              setShowCreateModal(false)
              setCreateError('')
            }}
            onCreate={handleCreateDeck}
          />
        )}
      </AnimatePresence>

      {/* Import Modal */}
      <AnimatePresence>
        {showImportModal && (
          <ImportModal
            onClose={() => setShowImportModal(false)}
            onImportComplete={(deckId) => {
              navigate(`/flashcards/deck/${deckId}`)
            }}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

// Deck Card Component
interface DeckCardProps {
  deck: Deck
  index: number
  onStudy: () => void
  onEdit: () => void
  onDelete: () => void
  onCopy: () => void
  onClick: () => void
  onAddCards: () => void
  formatLastStudied: (deck: Deck) => string
  showOptionsMenu: string | null
  setShowOptionsMenu: (id: string | null) => void
  isPreloaded?: boolean
}

function DeckCard({
  deck,
  index,
  onStudy,
  onEdit,
  onDelete,
  onCopy,
  onClick,
  onAddCards,
  formatLastStudied,
  showOptionsMenu,
  setShowOptionsMenu,
  isPreloaded = false,
}: DeckCardProps) {
  // Use dueCount if available (computed accurately), fallback includes new + learning + review
  const dueCount = deck.dueCount ?? (deck.newCount + deck.learningCount + deck.reviewCount)
  const hasDue = dueCount > 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="group relative"
    >
      <div
        onClick={onClick}
        className="relative bg-card border-2 border-border/50 rounded-xl p-6 hover:border-primary hover:shadow-lg dark:hover:shadow-primary/20 transition-all duration-300 cursor-pointer h-full flex flex-col"
        style={{
          borderTopWidth: '4px',
          borderTopColor: deck.color,
        }}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-xl"
            style={{ backgroundColor: deck.color }}
          >
            {deck.icon === 'BookOpen' && <BookOpen className="w-6 h-6" />}
            {deck.icon === 'Layers' && <Layers className="w-6 h-6" />}
            {deck.icon === 'Sparkles' && <Sparkles className="w-6 h-6" />}
            {deck.icon === 'Brain' && <Brain className="w-6 h-6" />}
            {deck.icon === 'Microscope' && <Microscope className="w-6 h-6" />}
            {deck.icon === 'Activity' && <Activity className="w-6 h-6" />}
            {deck.icon === 'Heart' && <Heart className="w-6 h-6" />}
            {deck.icon === 'Zap' && <Zap className="w-6 h-6" />}
            {!['BookOpen', 'Layers', 'Sparkles', 'Brain', 'Microscope', 'Activity', 'Heart', 'Zap'].includes(deck.icon) && deck.name.charAt(0).toUpperCase()}
          </div>

          {/* Options Menu */}
          <div className="relative">
            <button
              onClick={(e) => {
                e.stopPropagation()
                setShowOptionsMenu(showOptionsMenu === deck.id ? null : deck.id)
              }}
              className="p-1.5 rounded-md hover:bg-muted transition-colors opacity-0 group-hover:opacity-100"
            >
              <MoreVertical className="w-4 h-4" />
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {showOptionsMenu === deck.id && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-1 w-48 bg-popover border border-border rounded-lg shadow-lg z-50 overflow-hidden"
                  onClick={(e) => e.stopPropagation()}
                >
                  {isPreloaded && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        onCopy()
                      }}
                      className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-muted transition-colors text-left"
                    >
                      <Copy className="w-4 h-4" />
                      Copy to My Decks
                    </button>
                  )}
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      onEdit()
                      setShowOptionsMenu(null)
                    }}
                    className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-muted transition-colors text-left"
                  >
                    <Edit className="w-4 h-4" />
                    {isPreloaded ? 'View Cards' : 'Edit'}
                  </button>
                  {!isPreloaded && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        onDelete()
                      }}
                      className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-destructive/10 text-destructive transition-colors text-left"
                    >
                      <Trash2 className="w-4 h-4" />
                      Delete
                    </button>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Name and Description */}
        <div className="flex-1 mb-4">
          <h3 className="text-xl font-bold mb-2 line-clamp-2">{deck.name}</h3>
          {deck.description && (
            <p className="text-sm text-muted-foreground line-clamp-2">
              {deck.description}
            </p>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          <div className="text-center">
            <div className="text-lg font-bold">{deck.cardCount}</div>
            <div className="text-xs text-muted-foreground">Total</div>
          </div>
          <div className="text-center">
            <div className={cn('text-lg font-bold', hasDue && 'text-destructive')}>
              {dueCount}
            </div>
            <div className="text-xs text-muted-foreground">Due</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-primary">{deck.newCount}</div>
            <div className="text-xs text-muted-foreground">New</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-orange-500">{deck.learningCount}</div>
            <div className="text-xs text-muted-foreground">Learning</div>
          </div>
        </div>

        {/* Last Studied */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
          <Clock className="w-3.5 h-3.5" />
          {formatLastStudied(deck)}
        </div>

        {/* Study Button */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            if (deck.cardCount === 0) {
              onAddCards()
            } else {
              onStudy()
            }
          }}
          disabled={!hasDue && deck.cardCount > 0}
          className={`w-full flex items-center justify-center gap-2 h-9 px-3 rounded-md text-sm font-medium transition-colors ${
            hasDue || deck.cardCount === 0
              ? 'bg-[#0066CC] text-white hover:bg-[#0055AA]'
              : 'bg-muted text-muted-foreground cursor-not-allowed'
          }`}
        >
          {deck.cardCount === 0 ? <Plus className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          {hasDue ? `Study (${dueCount})` : deck.cardCount === 0 ? 'Add First Card' : 'All Caught Up'}
        </button>

        {/* Preloaded Badge - positioned at top center */}
        {isPreloaded && (
          <div className="absolute top-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 shadow-sm">
              Pre-loaded
            </span>
          </div>
        )}
      </div>
    </motion.div>
  )
}

// Create Deck Modal Component
interface CreateDeckModalProps {
  deckName: string
  setDeckName: (name: string) => void
  deckDescription: string
  setDeckDescription: (desc: string) => void
  deckColor: string
  setDeckColor: (color: string) => void
  deckIcon: string
  setDeckIcon: (icon: string) => void
  isCreating: boolean
  createError: string
  onClose: () => void
  onCreate: () => void
}

function CreateDeckModal({
  deckName,
  setDeckName,
  deckDescription,
  setDeckDescription,
  deckColor,
  setDeckColor,
  deckIcon,
  setDeckIcon,
  isCreating,
  createError,
  onClose,
  onCreate,
}: CreateDeckModalProps) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Dark overlay backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal content - centered */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative z-10 bg-card border border-border rounded-xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <h2 className="text-2xl font-bold">Create New Deck</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-md hover:bg-muted transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form */}
          <div className="p-6 space-y-6">
            {/* Error */}
            {createError && (
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3 flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <p className="text-sm text-destructive">{createError}</p>
              </div>
            )}

            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Deck Name <span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                value={deckName}
                onChange={(e) => setDeckName(e.target.value)}
                placeholder="e.g., Medical Terminology"
                className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                autoFocus
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Description
              </label>
              <textarea
                value={deckDescription}
                onChange={(e) => setDeckDescription(e.target.value)}
                placeholder="Optional description..."
                rows={3}
                className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              />
            </div>

            {/* Color */}
            <div>
              <label className="block text-sm font-medium mb-2">Color</label>
              <div className="grid grid-cols-4 gap-2">
                {DECK_COLORS.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => setDeckColor(color.value)}
                    className={cn(
                      'h-12 rounded-md border-2 transition-all relative',
                      deckColor === color.value
                        ? 'border-foreground scale-105'
                        : 'border-transparent hover:scale-105'
                    )}
                    style={{ backgroundColor: color.value }}
                    title={color.label}
                  >
                    {deckColor === color.value && (
                      <Check className="w-5 h-5 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Icon */}
            <div>
              <label className="block text-sm font-medium mb-2">Icon</label>
              <div className="grid grid-cols-4 gap-2">
                {DECK_ICONS.map((icon) => (
                  <button
                    key={icon}
                    onClick={() => setDeckIcon(icon)}
                    className={cn(
                      'h-12 rounded-md border-2 transition-all flex items-center justify-center',
                      deckIcon === icon
                        ? 'border-primary bg-primary/10 scale-105'
                        : 'border-border hover:border-primary/50 hover:scale-105'
                    )}
                  >
                    {icon === 'BookOpen' && <BookOpen className="w-5 h-5" />}
                    {icon === 'Layers' && <Layers className="w-5 h-5" />}
                    {icon === 'Sparkles' && <Sparkles className="w-5 h-5" />}
                    {icon === 'Brain' && <Brain className="w-5 h-5" />}
                    {icon === 'Microscope' && <Microscope className="w-5 h-5" />}
                    {icon === 'Activity' && <Activity className="w-5 h-5" />}
                    {icon === 'Heart' && <Heart className="w-5 h-5" />}
                    {icon === 'Zap' && <Zap className="w-5 h-5" />}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end gap-3 p-6 border-t border-border">
            <Button variant="outline" onClick={onClose} disabled={isCreating}>
              Cancel
            </Button>
            <Button
              onClick={onCreate}
              disabled={isCreating || !deckName.trim()}
              className="gap-2"
            >
              {isCreating ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Creating...
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4" />
                  Create Deck
                </>
              )}
            </Button>
          </div>
        </motion.div>
    </div>
  )
}
