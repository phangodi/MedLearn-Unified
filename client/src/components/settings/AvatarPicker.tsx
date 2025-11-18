import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { User, Check, ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface AvatarPickerProps {
  currentAvatar: string
  oauthAvatar?: string // Avatar from Google/Apple OAuth
  onSave: (newAvatar: string) => Promise<void>
}

// Medical and professional themed emojis
const avatarOptions = [
  // Medical professionals
  '👨‍⚕️', '👩‍⚕️', '🧑‍⚕️',
  // Students
  '👨‍🎓', '👩‍🎓', '🧑‍🎓',
  // Scientists
  '👨‍🔬', '👩‍🔬', '🧑‍🔬',
  // Teachers
  '👨‍🏫', '👩‍🏫', '🧑‍🏫',
  // General people
  '👤', '👨', '👩', '🧑',
  '👨‍💼', '👩‍💼', '🧑‍💼',
  // Medical/science icons
  '🔬', '⚕️', '🧬', '🩺', '💉', '🧪',
  '🔭', '🧫', '🦠', '🧠', '🫀', '🫁',
  // Study/education
  '📚', '📖', '✏️', '📝', '🎓', '🏆',
  // Abstract
  '⭐', '✨', '🌟', '💫', '🔥', '💎',
  '🎯', '🚀', '💡', '🎨'
]

export function AvatarPicker({ currentAvatar, oauthAvatar, onSave }: AvatarPickerProps) {
  const [selectedAvatar, setSelectedAvatar] = useState(currentAvatar)
  const [isExpanded, setIsExpanded] = useState(false)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  const handleSave = async () => {
    if (selectedAvatar === currentAvatar) return

    setSaving(true)
    try {
      await onSave(selectedAvatar)
      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
      // Close the picker after successful save
      setIsExpanded(false)
    } catch (error) {
      console.error('Error saving avatar:', error)
    } finally {
      setSaving(false)
    }
  }

  const hasChanges = selectedAvatar !== currentAvatar

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card border border-border rounded-xl p-6"
    >
      {/* Header - Always Visible */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
            <User className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Avatar</h2>
            <p className="text-sm text-muted-foreground">
              {isExpanded ? 'Choose an emoji to represent you' : `Current: ${selectedAvatar}`}
            </p>
          </div>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors"
        >
          <span className="text-sm font-medium">
            {isExpanded ? 'Cancel' : 'Change Avatar'}
          </span>
          {isExpanded ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Expandable Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="space-y-6"
          >
            {/* Current Selection Preview */}
            <div className="flex items-center gap-4 pt-4 border-t border-border">
              <div className="text-5xl">{selectedAvatar}</div>
              <div className="flex-1">
                <p className="text-sm font-medium mb-1">Current Selection</p>
                <p className="text-xs text-muted-foreground">
                  This avatar will appear on your profile and posts
                </p>
              </div>
            </div>

            {/* OAuth Avatar Option */}
            {oauthAvatar && oauthAvatar.startsWith('http') && (
              <div>
                <p className="text-sm font-medium mb-3">Keep Your OAuth Photo:</p>
                <button
                  onClick={() => setSelectedAvatar(oauthAvatar)}
                  className={`relative flex items-center gap-3 p-3 rounded-lg border transition-all ${
                    selectedAvatar === oauthAvatar
                      ? 'border-primary bg-primary/10 ring-2 ring-primary'
                      : 'border-border hover:bg-muted'
                  }`}
                >
                  <img
                    src={oauthAvatar}
                    alt="OAuth avatar"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1 text-left">
                    <p className="text-sm font-medium">Google/Apple Photo</p>
                    <p className="text-xs text-muted-foreground">
                      Keep your profile picture from sign-in
                    </p>
                  </div>
                  {selectedAvatar === oauthAvatar && (
                    <Check className="w-5 h-5 text-primary" />
                  )}
                </button>
              </div>
            )}

            {/* Avatar Grid */}
            <div>
              <p className="text-sm font-medium mb-3">Choose Emoji Avatar:</p>
        <div className="grid grid-cols-8 sm:grid-cols-10 md:grid-cols-12 gap-2 max-h-64 overflow-y-auto p-2 bg-muted/20 rounded-lg">
          {avatarOptions.map((emoji, index) => (
            <button
              key={index}
              onClick={() => setSelectedAvatar(emoji)}
              className={`relative aspect-square rounded-lg flex items-center justify-center text-2xl transition-all hover:scale-110 ${
                selectedAvatar === emoji
                  ? 'bg-primary/20 ring-2 ring-primary'
                  : 'bg-card hover:bg-muted'
              }`}
              title={`Select ${emoji}`}
            >
              {emoji}
              {selectedAvatar === emoji && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center"
                >
                  <Check className="w-3 h-3 text-primary-foreground" />
                </motion.div>
              )}
            </button>
          ))}
            </div>
          </div>

            {/* Save Button */}
            <div className="flex items-center justify-between pt-4 border-t border-border">
        <div className="text-xs text-muted-foreground">
          <AnimatePresence>
            {saved && (
              <motion.span
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-green-600 dark:text-green-400"
              >
                ✓ Avatar saved successfully
              </motion.span>
            )}
          </AnimatePresence>
        </div>
        <Button
          onClick={handleSave}
          disabled={!hasChanges || saving}
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
              Save Avatar
            </>
          )}
        </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
