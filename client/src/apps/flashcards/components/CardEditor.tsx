import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Save, Plus, Trash2, AlertCircle, Image as ImageIcon } from 'lucide-react'
import { useFlashcards } from '../hooks'
import { RichTextEditor } from './RichTextEditor'
import { ImageUploader } from './ImageUploader'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css'

interface CardEditorProps {
  deckId: string
  cardId?: string // If editing existing card
  onClose: () => void
  onSave?: () => void
}

type EditingSide = 'front' | 'back'

export function CardEditor({ deckId, cardId, onClose, onSave }: CardEditorProps) {
  const { cards, createCard, updateCard, deleteCard, userId } = useFlashcards()
  const isEditMode = !!cardId
  const existingCard = isEditMode ? cards.find(c => c.id === cardId) : undefined

  // Generate temporary ID for new cards (for organizing uploaded images)
  const tempCardId = useMemo(() => cardId || `temp-${Date.now()}`, [cardId])

  // Form state
  const [frontContent, setFrontContent] = useState(existingCard?.front.text || '')
  const [backContent, setBackContent] = useState(existingCard?.back.text || '')
  const [tags, setTags] = useState<string[]>(existingCard?.tags || [])
  const [tagInput, setTagInput] = useState('')
  const [editingSide, setEditingSide] = useState<EditingSide>('front')
  const [showImageUploader, setShowImageUploader] = useState(false)

  // UI state
  const [isSaving, setIsSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)

  // Track unsaved changes
  useEffect(() => {
    const hasChanges =
      frontContent !== (existingCard?.front.text || '') ||
      backContent !== (existingCard?.back.text || '') ||
      JSON.stringify(tags) !== JSON.stringify(existingCard?.tags || [])
    setHasUnsavedChanges(hasChanges)
  }, [frontContent, backContent, tags, existingCard])

  // Prevent accidental navigation with unsaved changes
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (hasUnsavedChanges) {
        e.preventDefault()
        e.returnValue = ''
      }
    }

    window.addEventListener('beforeunload', handleBeforeUnload)
    return () => window.removeEventListener('beforeunload', handleBeforeUnload)
  }, [hasUnsavedChanges])

  // Validation
  const validateCard = (): string | null => {
    if (!frontContent.trim()) {
      return 'Front content is required'
    }
    if (!backContent.trim()) {
      return 'Back content is required'
    }
    return null
  }

  // Save card
  const handleSave = async (saveAndAddAnother = false) => {
    setError(null)

    const validationError = validateCard()
    if (validationError) {
      setError(validationError)
      return
    }

    setIsSaving(true)

    try {
      if (isEditMode && cardId) {
        // Update existing card
        await updateCard(cardId, {
          front: { text: frontContent },
          back: { text: backContent },
          tags
        })
      } else {
        // Create new card
        await createCard({
          deckId,
          userId: userId!,
          front: { text: frontContent },
          back: { text: backContent },
          tags
        })
      }

      setHasUnsavedChanges(false)
      onSave?.()

      if (saveAndAddAnother) {
        // Reset form for new card
        setFrontContent('')
        setBackContent('')
        setTags([])
        setEditingSide('front')
        setError(null)
      } else {
        // Close editor
        onClose()
      }
    } catch (err) {
      console.error('Failed to save card:', err)
      setError(err instanceof Error ? err.message : 'Failed to save card')
    } finally {
      setIsSaving(false)
    }
  }

  // Delete card
  const handleDelete = async () => {
    if (!cardId) return

    setIsSaving(true)
    try {
      await deleteCard(cardId)
      setHasUnsavedChanges(false)
      onClose()
    } catch (err) {
      console.error('Failed to delete card:', err)
      setError(err instanceof Error ? err.message : 'Failed to delete card')
      setIsSaving(false)
    }
  }

  // Handle close with confirmation if unsaved changes
  const handleClose = () => {
    if (hasUnsavedChanges) {
      const confirmed = window.confirm(
        'You have unsaved changes. Are you sure you want to close?'
      )
      if (!confirmed) return
    }
    onClose()
  }

  // Add tag
  const handleAddTag = () => {
    const trimmedTag = tagInput.trim().toLowerCase()
    if (trimmedTag && !tags.includes(trimmedTag)) {
      setTags([...tags, trimmedTag])
      setTagInput('')
    }
  }

  // Remove tag
  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(t => t !== tagToRemove))
  }

  // Handle image upload completion
  const handleImageUpload = (_url: string, markdown: string) => {
    if (editingSide === 'front') {
      setFrontContent(prev => prev + '\n\n' + markdown)
    } else {
      setBackContent(prev => prev + '\n\n' + markdown)
    }
    setShowImageUploader(false)
  }

  const currentContent = editingSide === 'front' ? frontContent : backContent
  const setCurrentContent = editingSide === 'front' ? setFrontContent : setBackContent

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto">
      {/* Dark overlay backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal content - centered */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        className="relative z-10 w-full max-w-7xl max-h-[90vh] bg-card rounded-xl shadow-2xl overflow-hidden flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              {isEditMode ? 'Edit Flashcard' : 'Create New Flashcard'}
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Use markdown to format your content with images, LaTeX math, and more
            </p>
          </div>

          <button
            onClick={handleClose}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
            disabled={isSaving}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Error message */}
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="mx-6 mt-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-destructive">Error</p>
                  <p className="text-sm text-destructive/80 mt-1">{error}</p>
                </div>
                <button
                  onClick={() => setError(null)}
                  className="p-1 hover:bg-destructive/10 rounded transition-colors"
                >
                  <X className="w-4 h-4 text-destructive" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main content */}
        <div className="p-6 overflow-y-auto flex-1">
          {/* Front/Back tabs */}
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setEditingSide('front')}
              className={`
                flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-200
                ${editingSide === 'front'
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }
              `}
            >
              Front (Question)
              {frontContent && <span className="ml-2 opacity-60">{frontContent.length}</span>}
            </button>
            <button
              onClick={() => setEditingSide('back')}
              className={`
                flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-200
                ${editingSide === 'back'
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }
              `}
            >
              Back (Answer)
              {backContent && <span className="ml-2 opacity-60">{backContent.length}</span>}
            </button>
          </div>

          {/* Split view: Editor and Preview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Editor panel */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-foreground">Editor</h3>
                <button
                  onClick={() => setShowImageUploader(!showImageUploader)}
                  className={`
                    flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium
                    transition-all duration-200
                    ${showImageUploader
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    }
                  `}
                >
                  <ImageIcon className="w-4 h-4" />
                  Upload Image
                </button>
              </div>

              {/* Image uploader */}
              <AnimatePresence>
                {showImageUploader && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <ImageUploader
                      cardId={tempCardId}
                      onUploadComplete={handleImageUpload}
                      onError={(err) => setError(err)}
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Rich text editor */}
              <RichTextEditor
                value={currentContent}
                onChange={setCurrentContent}
                placeholder={`Enter ${editingSide === 'front' ? 'question' : 'answer'} content using markdown...

Example:
## What is photosynthesis?

Use **bold** and *italic* for emphasis.

Add LaTeX equations: $$E = mc^2$$

Insert images: ![description](url)`}
                onImageClick={() => setShowImageUploader(true)}
              />
            </div>

            {/* Preview panel */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Preview</h3>

              <div className="min-h-[200px] p-6 rounded-lg border border-border bg-muted/30">
                {currentContent.trim() ? (
                  <div className="prose prose-sm dark:prose-invert max-w-none">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm, remarkMath]}
                      rehypePlugins={[rehypeKatex]}
                      components={{
                        img: ({ node, ...props }) => (
                          <img
                            {...props}
                            className="rounded-lg max-w-full h-auto"
                            loading="lazy"
                          />
                        ),
                        code: ({ node, className, ...props }) => {
                          const isInline = !className?.includes('language-')
                          return isInline ? (
                            <code className="bg-muted px-1.5 py-0.5 rounded text-sm" {...props} />
                          ) : (
                            <code className="block bg-muted p-4 rounded-lg text-sm overflow-x-auto" {...props} />
                          )
                        }
                      }}
                    >
                      {currentContent}
                    </ReactMarkdown>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full text-muted-foreground">
                    <p className="text-sm">Preview will appear here as you type...</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Tags section */}
          <div className="mt-6 space-y-3">
            <label className="text-sm font-medium text-foreground">
              Tags (optional)
            </label>

            {/* Tag input */}
            <div className="flex gap-2">
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault()
                    handleAddTag()
                  }
                }}
                placeholder="Add tag (e.g., anatomy, physiology)"
                className="
                  flex-1 px-4 py-2 rounded-lg border border-border bg-background
                  text-foreground placeholder:text-muted-foreground
                  focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary
                  transition-all duration-200
                "
              />
              <button
                onClick={handleAddTag}
                disabled={!tagInput.trim()}
                className="
                  px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium
                  hover:shadow-md transition-all duration-200
                  disabled:opacity-50 disabled:cursor-not-allowed
                "
              >
                Add Tag
              </button>
            </div>

            {/* Tag chips */}
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <motion.div
                    key={tag}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    className="
                      flex items-center gap-2 px-3 py-1.5 rounded-full
                      bg-primary/10 text-primary border border-primary/20
                      text-sm font-medium
                    "
                  >
                    <span>{tag}</span>
                    <button
                      onClick={() => handleRemoveTag(tag)}
                      className="hover:bg-muted rounded-full p-0.5 transition-colors"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer actions */}
        <div className="flex items-center justify-between p-6 border-t border-border bg-muted/30">
          {/* Delete button (edit mode only) */}
          <div>
            {isEditMode && (
              <>
                {showDeleteConfirm ? (
                  <div className="flex items-center gap-3">
                    <p className="text-sm text-muted-foreground">Delete this card?</p>
                    <button
                      onClick={handleDelete}
                      disabled={isSaving}
                      className="
                        px-3 py-1.5 rounded-lg bg-destructive text-destructive-foreground
                        text-sm font-medium hover:shadow-md transition-all duration-200
                        disabled:opacity-50 disabled:cursor-not-allowed
                      "
                    >
                      Yes, Delete
                    </button>
                    <button
                      onClick={() => setShowDeleteConfirm(false)}
                      disabled={isSaving}
                      className="
                        px-3 py-1.5 rounded-lg bg-muted text-foreground
                        text-sm font-medium hover:bg-muted/80 transition-all duration-200
                      "
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setShowDeleteConfirm(true)}
                    disabled={isSaving}
                    className="
                      flex items-center gap-2 px-4 py-2 rounded-lg
                      text-destructive hover:bg-destructive/10
                      transition-all duration-200
                      disabled:opacity-50 disabled:cursor-not-allowed
                    "
                  >
                    <Trash2 className="w-4 h-4" />
                    <span className="font-medium">Delete Card</span>
                  </button>
                )}
              </>
            )}
          </div>

          {/* Save buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleClose}
              disabled={isSaving}
              className="
                px-6 py-2 rounded-lg bg-muted text-foreground font-medium
                hover:bg-muted/80 transition-all duration-200
                disabled:opacity-50 disabled:cursor-not-allowed
              "
            >
              Cancel
            </button>

            {!isEditMode && (
              <button
                onClick={() => handleSave(true)}
                disabled={isSaving}
                className="
                  flex items-center gap-2 px-6 py-2 rounded-lg
                  border border-border bg-background text-foreground font-medium
                  hover:bg-muted transition-all duration-200
                  disabled:opacity-50 disabled:cursor-not-allowed
                "
              >
                <Plus className="w-4 h-4" />
                Save & Add Another
              </button>
            )}

            <button
              onClick={() => handleSave(false)}
              disabled={isSaving}
              className="
                flex items-center gap-2 px-6 py-2 rounded-lg
                bg-primary text-primary-foreground font-medium
                hover:shadow-md transition-all duration-200
                disabled:opacity-50 disabled:cursor-not-allowed
              "
            >
              <Save className="w-4 h-4" />
              {isSaving ? 'Saving...' : isEditMode ? 'Save Changes' : 'Save Card'}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
