/**
 * ImportModal Component
 *
 * Modal for importing Anki .apkg files into the MedLearn flashcard system.
 * Handles file selection, parsing preview, customization, and import progress.
 */

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import {
  X,
  Upload,
  FileArchive,
  AlertCircle,
  Check,
  Loader2,
  Layers,
  BookOpen,
  Brain,
  Microscope,
  Activity,
  Heart,
  Zap,
  Sparkles,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import {
  parseApkgFile,
  uploadMediaAndCreateCards,
  type ParsedAnkiDeck,
  type ImportProgressCallback
} from '../services/ankiImportService'
import { useFlashcards } from '../hooks'
import { useAuth } from '@/contexts/AuthContext'

// Color options for deck
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

// Icon options for deck
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

interface ImportModalProps {
  onClose: () => void
  onImportComplete?: (deckId: string) => void
}

type ImportStage = 'select' | 'preview' | 'importing' | 'complete' | 'error'

export function ImportModal({ onClose, onImportComplete }: ImportModalProps) {
  const { user } = useAuth()
  const { createDeck, createCard } = useFlashcards()
  const fileInputRef = useRef<HTMLInputElement>(null)

  // State
  const [stage, setStage] = useState<ImportStage>('select')
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [parsedDeck, setParsedDeck] = useState<ParsedAnkiDeck | null>(null)
  const [error, setError] = useState<string | null>(null)

  // Customization
  const [deckName, setDeckName] = useState('')
  const [deckColor, setDeckColor] = useState(DECK_COLORS[0].value)
  const [deckIcon, setDeckIcon] = useState(DECK_ICONS[0])

  // Progress
  const [progressStage, setProgressStage] = useState('')
  const [progressPercent, setProgressPercent] = useState(0)
  const [progressDetail, setProgressDetail] = useState('')

  // Result
  const [importedDeckId, setImportedDeckId] = useState<string | null>(null)
  const [importedCardCount, setImportedCardCount] = useState(0)
  const [importedMediaCount, setImportedMediaCount] = useState(0)

  // Drag and drop state
  const [isDragging, setIsDragging] = useState(false)

  // Process a file (shared between file input and drag/drop)
  const processFile = async (file: File) => {
    if (!file.name.endsWith('.apkg')) {
      setError('Please select a valid Anki package (.apkg) file')
      return
    }

    setSelectedFile(file)
    setError(null)
    setStage('preview')

    try {
      const onProgress: ImportProgressCallback = (stage, progress) => {
        setProgressStage(stage)
        setProgressPercent(progress)
      }

      const parsed = await parseApkgFile(file, onProgress)
      setParsedDeck(parsed)
      setDeckName(parsed.deckName)
    } catch (err) {
      console.error('Failed to parse .apkg file:', err)
      setError(err instanceof Error ? err.message : 'Failed to parse Anki package')
      setStage('error')
    }
  }

  // Handle file selection from input
  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return
    await processFile(file)
  }

  // Drag and drop handlers
  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    // Only set isDragging to false if we're leaving the drop zone (not entering a child)
    if (e.currentTarget === e.target) {
      setIsDragging(false)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)

    const files = e.dataTransfer.files
    if (files.length > 0) {
      await processFile(files[0])
    }
  }

  // Handle import
  const handleImport = async () => {
    if (!parsedDeck || !user?.uid) return

    setStage('importing')
    setProgressStage('Creating deck...')
    setProgressPercent(0)

    try {
      // Create the deck
      const deckId = await createDeck(user.uid, {
        name: deckName.trim() || parsedDeck.deckName,
        description: `Imported from Anki (${parsedDeck.cards.length} cards)`,
        color: deckColor,
        icon: deckIcon,
      })

      // Upload media and prepare cards
      setProgressStage('Processing media...')
      const onMediaProgress: ImportProgressCallback = (stage, progress, detail) => {
        setProgressStage(stage)
        setProgressPercent(progress)
        if (detail) setProgressDetail(detail)
      }

      const { cards, mediaCount } = await uploadMediaAndCreateCards(
        parsedDeck,
        deckId,
        onMediaProgress
      )

      // Create cards in batches
      setProgressStage('Creating cards...')
      setProgressDetail('')
      const totalCards = cards.length
      let createdCount = 0

      for (const card of cards) {
        await createCard({
          deckId,
          userId: user.uid,
          front: card.front,
          back: card.back,
          tags: card.tags,
        })
        createdCount++

        if (createdCount % 10 === 0 || createdCount === totalCards) {
          setProgressPercent(Math.round((createdCount / totalCards) * 100))
          setProgressDetail(`${createdCount}/${totalCards}`)
        }
      }

      // Success!
      setImportedDeckId(deckId)
      setImportedCardCount(createdCount)
      setImportedMediaCount(mediaCount)
      setStage('complete')
    } catch (err) {
      console.error('Import failed:', err)
      setError(err instanceof Error ? err.message : 'Import failed')
      setStage('error')
    }
  }

  // Render icon
  const renderIcon = (iconName: string, className: string = 'w-5 h-5') => {
    switch (iconName) {
      case 'BookOpen': return <BookOpen className={className} />
      case 'Layers': return <Layers className={className} />
      case 'Sparkles': return <Sparkles className={className} />
      case 'Brain': return <Brain className={className} />
      case 'Microscope': return <Microscope className={className} />
      case 'Activity': return <Activity className={className} />
      case 'Heart': return <Heart className={className} />
      case 'Zap': return <Zap className={className} />
      default: return <Layers className={className} />
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={stage !== 'importing' ? onClose : undefined}
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative z-10 bg-card border border-border rounded-xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <FileArchive className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Import Anki Deck</h2>
          </div>
          {stage !== 'importing' && (
            <button
              onClick={onClose}
              className="p-2 rounded-md hover:bg-muted transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {/* File Selection Stage */}
          {stage === 'select' && (
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Import flashcards from an Anki package file (.apkg). All cards will be
                imported as new cards with fresh scheduling.
              </p>

              <div
                onClick={() => fileInputRef.current?.click()}
                onDragEnter={handleDragEnter}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={cn(
                  "border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all",
                  isDragging
                    ? "border-primary bg-primary/10 scale-[1.02]"
                    : "border-border hover:border-primary hover:bg-primary/5"
                )}
              >
                <Upload className={cn(
                  "w-12 h-12 mx-auto mb-4 transition-colors",
                  isDragging ? "text-primary" : "text-muted-foreground"
                )} />
                <p className="font-medium mb-1">
                  {isDragging ? "Drop file here" : "Click to select file"}
                </p>
                <p className="text-sm text-muted-foreground">or drag and drop</p>
                <p className="text-xs text-muted-foreground mt-2">
                  Supports .apkg files from Anki
                </p>
              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept=".apkg"
                onChange={handleFileSelect}
                className="hidden"
              />
            </div>
          )}

          {/* Preview Stage */}
          {stage === 'preview' && parsedDeck && (
            <div className="space-y-6">
              {/* File Info */}
              <div className="bg-muted/50 rounded-lg p-4 flex items-center gap-3">
                <FileArchive className="w-10 h-10 text-primary" />
                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate">{selectedFile?.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {parsedDeck.cards.length} cards • {parsedDeck.media.size} media files
                  </p>
                </div>
                <Check className="w-6 h-6 text-green-500" />
              </div>

              {/* Deck Name */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Deck Name
                </label>
                <input
                  type="text"
                  value={deckName}
                  onChange={(e) => setDeckName(e.target.value)}
                  placeholder="Enter deck name"
                  className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
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
                        'h-10 rounded-md border-2 transition-all relative',
                        deckColor === color.value
                          ? 'border-foreground scale-105'
                          : 'border-transparent hover:scale-105'
                      )}
                      style={{ backgroundColor: color.value }}
                      title={color.label}
                    >
                      {deckColor === color.value && (
                        <Check className="w-4 h-4 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
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
                        'h-10 rounded-md border-2 transition-all flex items-center justify-center',
                        deckIcon === icon
                          ? 'border-primary bg-primary/10 scale-105'
                          : 'border-border hover:border-primary/50 hover:scale-105'
                      )}
                    >
                      {renderIcon(icon)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Importing Stage */}
          {stage === 'importing' && (
            <div className="space-y-6 py-8">
              <div className="text-center">
                <Loader2 className="w-16 h-16 text-primary mx-auto mb-4 animate-spin" />
                <p className="font-medium text-lg">{progressStage}</p>
                {progressDetail && (
                  <p className="text-sm text-muted-foreground mt-1">{progressDetail}</p>
                )}
              </div>

              {/* Progress Bar */}
              <div className="bg-muted rounded-full h-2 overflow-hidden">
                <motion.div
                  className="bg-primary h-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <p className="text-center text-sm text-muted-foreground">
                Please don't close this window
              </p>
            </div>
          )}

          {/* Complete Stage */}
          {stage === 'complete' && (
            <div className="space-y-6 py-4">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Import Complete!</h3>
                <p className="text-muted-foreground">
                  Successfully imported {importedCardCount} cards
                  {importedMediaCount > 0 && ` with ${importedMediaCount} media files`}
                </p>
              </div>

              {/* Summary */}
              <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Deck Name</span>
                  <span className="font-medium">{deckName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Cards Created</span>
                  <span className="font-medium">{importedCardCount}</span>
                </div>
                {importedMediaCount > 0 && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Media Uploaded</span>
                    <span className="font-medium">{importedMediaCount}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Error Stage */}
          {stage === 'error' && (
            <div className="space-y-6 py-4">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="w-8 h-8 text-destructive" />
                </div>
                <h3 className="text-xl font-bold mb-2">Import Failed</h3>
                <p className="text-muted-foreground">{error}</p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 p-6 border-t border-border">
          {stage === 'select' && (
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
          )}

          {stage === 'preview' && (
            <>
              <Button
                variant="outline"
                onClick={() => {
                  setStage('select')
                  setSelectedFile(null)
                  setParsedDeck(null)
                }}
              >
                Back
              </Button>
              <Button onClick={handleImport} className="gap-2">
                <Upload className="w-4 h-4" />
                Import {parsedDeck?.cards.length} Cards
              </Button>
            </>
          )}

          {stage === 'complete' && (
            <Button
              onClick={() => {
                if (importedDeckId) {
                  onImportComplete?.(importedDeckId)
                }
                onClose()
              }}
            >
              Done
            </Button>
          )}

          {stage === 'error' && (
            <>
              <Button
                variant="outline"
                onClick={() => {
                  setStage('select')
                  setSelectedFile(null)
                  setParsedDeck(null)
                  setError(null)
                }}
              >
                Try Again
              </Button>
              <Button variant="outline" onClick={onClose}>
                Close
              </Button>
            </>
          )}
        </div>
      </motion.div>
    </div>
  )
}
