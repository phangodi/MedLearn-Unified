/**
 * ExportModal Component
 *
 * Modal for exporting MedLearn flashcard decks to Anki .apkg format.
 * Shows export progress and automatically triggers download when complete.
 * Can load cards on demand if not provided.
 */

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  X,
  Download,
  FileArchive,
  AlertCircle,
  Check,
  Loader2,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import {
  exportDeckToApkg,
  type ExportProgressCallback,
  type AnkiExportResult
} from '../services/ankiExportService'
import { getDeckCards } from '../services/flashcardService'
import type { Deck, FlashCard } from '../types/flashcard'

interface ExportModalProps {
  deck: Deck
  cards?: FlashCard[]  // Optional - will load if not provided
  onClose: () => void
}

type ExportStage = 'loading' | 'confirm' | 'exporting' | 'complete' | 'error'

export function ExportModal({ deck, cards: providedCards, onClose }: ExportModalProps) {
  // State
  const [stage, setStage] = useState<ExportStage>(providedCards ? 'confirm' : 'loading')
  const [cards, setCards] = useState<FlashCard[]>(providedCards || [])
  const [error, setError] = useState<string | null>(null)

  // Progress
  const [progressStage, setProgressStage] = useState('')
  const [progressPercent, setProgressPercent] = useState(0)
  const [progressDetail, setProgressDetail] = useState('')

  // Result
  const [exportResult, setExportResult] = useState<AnkiExportResult | null>(null)

  // Load cards if not provided
  useEffect(() => {
    if (!providedCards && stage === 'loading') {
      loadCards()
    }
  }, [providedCards, stage])

  const loadCards = async () => {
    try {
      const loadedCards = await getDeckCards(deck.id)
      setCards(loadedCards)
      setStage('confirm')
    } catch (err) {
      console.error('Failed to load cards:', err)
      setError('Failed to load deck cards')
      setStage('error')
    }
  }

  // Auto-download when export completes
  useEffect(() => {
    if (stage === 'complete' && exportResult) {
      triggerDownload(exportResult.blob, exportResult.filename)
    }
  }, [stage, exportResult])

  // Trigger file download
  const triggerDownload = (blob: Blob, filename: string) => {
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  // Handle export
  const handleExport = async () => {
    setStage('exporting')
    setProgressStage('Initializing...')
    setProgressPercent(0)
    setError(null)

    try {
      const onProgress: ExportProgressCallback = (stage, progress, detail) => {
        setProgressStage(stage)
        setProgressPercent(progress)
        if (detail) setProgressDetail(detail)
      }

      const result = await exportDeckToApkg(deck, cards, onProgress)
      setExportResult(result)
      setStage('complete')
    } catch (err) {
      console.error('Export failed:', err)
      setError(err instanceof Error ? err.message : 'Export failed')
      setStage('error')
    }
  }

  // Manual re-download
  const handleRedownload = () => {
    if (exportResult) {
      triggerDownload(exportResult.blob, exportResult.filename)
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
        onClick={stage !== 'exporting' && stage !== 'loading' ? onClose : undefined}
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative z-10 bg-card border border-border rounded-xl shadow-2xl max-w-md w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <FileArchive className="w-6 h-6 text-primary" />
            <h2 className="text-xl font-bold">Export to Anki</h2>
          </div>
          {stage !== 'exporting' && stage !== 'loading' && (
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
          {/* Loading Stage */}
          {stage === 'loading' && (
            <div className="space-y-6 py-4">
              <div className="text-center">
                <Loader2 className="w-16 h-16 text-primary mx-auto mb-4 animate-spin" />
                <p className="font-medium text-lg">Loading deck cards...</p>
              </div>
            </div>
          )}

          {/* Confirm Stage */}
          {stage === 'confirm' && (
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Export this deck as an Anki package (.apkg) file that can be imported
                into the Anki desktop or mobile app.
              </p>

              {/* Deck Info */}
              <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-white"
                    style={{ backgroundColor: deck.color }}
                  >
                    <FileArchive className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">{deck.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {cards.length} cards
                    </p>
                  </div>
                </div>

                <div className="text-sm text-muted-foreground space-y-1">
                  <p>The exported file will include:</p>
                  <ul className="list-disc list-inside ml-2 space-y-0.5">
                    <li>All card content (front and back)</li>
                    <li>Images (downloaded from storage)</li>
                    <li>Tags for each card</li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-3">
                <p className="text-sm text-amber-600 dark:text-amber-400">
                  <strong>Note:</strong> Learning progress (due dates, intervals) is not
                  included. Cards will appear as new in Anki.
                </p>
              </div>
            </div>
          )}

          {/* Exporting Stage */}
          {stage === 'exporting' && (
            <div className="space-y-6 py-4">
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
          {stage === 'complete' && exportResult && (
            <div className="space-y-6 py-4">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Export Complete!</h3>
                <p className="text-muted-foreground">
                  Your download should start automatically.
                </p>
              </div>

              {/* Summary */}
              <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Filename</span>
                  <span className="font-medium font-mono text-sm">{exportResult.filename}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Cards Exported</span>
                  <span className="font-medium">{exportResult.cardCount}</span>
                </div>
                {exportResult.mediaCount > 0 && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Media Files</span>
                    <span className="font-medium">{exportResult.mediaCount}</span>
                  </div>
                )}
              </div>

              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                <p className="text-sm text-blue-600 dark:text-blue-400">
                  <strong>Next step:</strong> Open Anki and go to File → Import to add
                  the deck to your collection.
                </p>
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
                <h3 className="text-xl font-bold mb-2">Export Failed</h3>
                <p className="text-muted-foreground">{error}</p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 p-6 border-t border-border">
          {stage === 'confirm' && (
            <>
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button onClick={handleExport} className="gap-2">
                <Download className="w-4 h-4" />
                Export {cards.length} Cards
              </Button>
            </>
          )}

          {stage === 'complete' && (
            <>
              <Button variant="outline" onClick={handleRedownload} className="gap-2">
                <Download className="w-4 h-4" />
                Download Again
              </Button>
              <Button onClick={onClose}>
                Done
              </Button>
            </>
          )}

          {stage === 'error' && (
            <>
              <Button
                variant="outline"
                onClick={() => {
                  setStage('confirm')
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
