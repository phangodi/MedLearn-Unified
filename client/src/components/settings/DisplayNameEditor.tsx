import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { User, Check, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { validateDisplayName, getRemainingCharacters } from '@/lib/displayNameValidation'

interface DisplayNameEditorProps {
  currentName: string
  onSave: (newName: string) => Promise<void>
}

export function DisplayNameEditor({ currentName, onSave }: DisplayNameEditorProps) {
  const [displayName, setDisplayName] = useState(currentName)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Reset state when currentName changes
  useEffect(() => {
    setDisplayName(currentName)
  }, [currentName])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value
    setDisplayName(newName)
    setError(null)
    setSaved(false)

    // Real-time validation
    if (newName.trim().length > 0) {
      const validation = validateDisplayName(newName)
      if (!validation.isValid) {
        setError(validation.error || null)
      }
    }
  }

  const handleSave = async () => {
    const trimmedName = displayName.trim()

    // Validate before saving
    const validation = validateDisplayName(trimmedName)
    if (!validation.isValid) {
      setError(validation.error || 'Invalid display name')
      return
    }

    // Don't save if unchanged
    if (trimmedName === currentName) {
      return
    }

    setSaving(true)
    setError(null)

    try {
      await onSave(trimmedName)
      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
    } catch (err) {
      console.error('Error saving display name:', err)
      setError('Failed to save display name. Please try again.')
    } finally {
      setSaving(false)
    }
  }

  const hasChanges = displayName.trim() !== currentName
  const remainingChars = getRemainingCharacters(displayName)
  const isValid = validateDisplayName(displayName).isValid

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card border border-border rounded-xl p-6"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
          <User className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h2 className="text-xl font-semibold">Display Name</h2>
          <p className="text-sm text-muted-foreground">
            How you appear on posts and comments
          </p>
        </div>
      </div>

      {/* Input */}
      <div className="space-y-3">
        <div className="relative">
          <Input
            type="text"
            value={displayName}
            onChange={handleChange}
            placeholder="Choose any name"
            maxLength={30}
            className={`pr-16 ${error ? 'border-red-500 dark:border-red-600' : ''}`}
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
            {remainingChars}
          </div>
        </div>

        {/* Helper text */}
        <p className="text-xs text-muted-foreground">
          Can include emojis • 3-30 characters • No offensive language
        </p>

        {/* Error Message */}
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400"
            >
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{error}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Success Message */}
        <AnimatePresence>
          {saved && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-sm text-green-600 dark:text-green-400"
            >
              ✓ Display name updated successfully
            </motion.div>
          )}
        </AnimatePresence>

        {/* Save Button */}
        <div className="flex items-center justify-end pt-2">
          <Button
            onClick={handleSave}
            disabled={!hasChanges || !isValid || saving}
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white"
          >
            {saving ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                />
                Saving...
              </>
            ) : (
              <>
                <Check className="w-4 h-4 mr-2" />
                Save Changes
              </>
            )}
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
