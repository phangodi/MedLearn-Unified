import { useState } from 'react'
import { motion } from 'framer-motion'
import { Shield, Eye, EyeOff, Save, Info, Dices, GraduationCap } from 'lucide-react'
import type { PrivacySettings as PrivacySettingsType } from '@/types/community'
import { Button } from '@/components/ui/Button'
import { getRandomMedicalPseudonym } from '@/lib/anonymousNames'

interface PrivacySettingsProps {
  settings: PrivacySettingsType
  anonymousPseudonym: string
  year?: number
  onSave: (settings: PrivacySettingsType, year?: number, newPseudonym?: string) => Promise<void>
}

export function PrivacySettings({ settings, anonymousPseudonym, year, onSave }: PrivacySettingsProps) {
  const [localSettings, setLocalSettings] = useState<PrivacySettingsType>(settings)
  const [localYear, setLocalYear] = useState<number>(year || 1)
  const [localPseudonym, setLocalPseudonym] = useState<string>(anonymousPseudonym)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  const handleSave = async () => {
    setSaving(true)
    try {
      const yearChanged = localYear !== year
      const pseudonymChanged = localPseudonym !== anonymousPseudonym
      await onSave(
        localSettings,
        yearChanged ? localYear : undefined,
        pseudonymChanged ? localPseudonym : undefined
      )
      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
    } catch (error) {
      console.error('Error saving privacy settings:', error)
    } finally {
      setSaving(false)
    }
  }

  const handleRegeneratePseudonym = () => {
    const newPseudonym = getRandomMedicalPseudonym()
    setLocalPseudonym(newPseudonym)
  }

  const hasChanges =
    JSON.stringify(localSettings) !== JSON.stringify(settings) ||
    localYear !== year ||
    localPseudonym !== anonymousPseudonym

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card border border-border rounded-xl p-6"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
          <Shield className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h2 className="text-xl font-semibold">Privacy Settings</h2>
          <p className="text-sm text-muted-foreground">
            Control what information is visible to others
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Anonymous Posting Preference */}
        <div className="space-y-3">
          <div className="flex items-start gap-2">
            <h3 className="text-sm font-semibold text-foreground">Posting Preferences</h3>
            <div className="group relative">
              <Info className="w-4 h-4 text-muted-foreground cursor-help" />
              <div className="absolute left-0 top-6 w-64 p-3 bg-popover border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                <p className="text-xs text-popover-foreground">
                  Choose your default posting preference. You can always override this when creating a post.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-3 p-3 rounded-lg border border-border cursor-pointer hover:bg-muted/50 transition-colors">
              <input
                type="radio"
                name="postAnonymously"
                checked={localSettings.postAnonymously === 'always'}
                onChange={() => setLocalSettings({ ...localSettings, postAnonymously: 'always' })}
                className="w-4 h-4 text-primary"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <EyeOff className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Always post anonymously</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  All your posts will show as "{localPseudonym}"
                </p>
              </div>
            </label>

            <label className="flex items-center gap-3 p-3 rounded-lg border border-border cursor-pointer hover:bg-muted/50 transition-colors">
              <input
                type="radio"
                name="postAnonymously"
                checked={localSettings.postAnonymously === 'ask'}
                onChange={() => setLocalSettings({ ...localSettings, postAnonymously: 'ask' })}
                className="w-4 h-4 text-primary"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Ask me each time</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Choose whether to post anonymously for each post
                </p>
              </div>
            </label>

            <label className="flex items-center gap-3 p-3 rounded-lg border border-border cursor-pointer hover:bg-muted/50 transition-colors">
              <input
                type="radio"
                name="postAnonymously"
                checked={localSettings.postAnonymously === 'never'}
                onChange={() => setLocalSettings({ ...localSettings, postAnonymously: 'never' })}
                className="w-4 h-4 text-primary"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Always use my display name</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  All your posts will show your display name
                </p>
              </div>
            </label>
          </div>
        </div>

        {/* Medical School Year */}
        <div className="space-y-3">
          <div className="flex items-start gap-2">
            <h3 className="text-sm font-semibold text-foreground">Medical School Year</h3>
            <div className="group relative">
              <Info className="w-4 h-4 text-muted-foreground cursor-help" />
              <div className="absolute left-0 top-6 w-64 p-3 bg-popover border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                <p className="text-xs text-popover-foreground">
                  Select your current year in medical school (1-6). This will appear in your profile and posts.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-6 gap-2">
            {[1, 2, 3, 4, 5, 6].map((yearNum) => (
              <button
                key={yearNum}
                onClick={() => setLocalYear(yearNum)}
                className={`p-3 rounded-lg border transition-all ${
                  localYear === yearNum
                    ? 'border-primary bg-primary/10 text-primary font-semibold'
                    : 'border-border hover:bg-muted/50 text-muted-foreground'
                }`}
              >
                <div className="flex flex-col items-center gap-1">
                  <GraduationCap className="w-5 h-5" />
                  <span className="text-xs font-medium">Year {yearNum}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Profile Visibility */}
        <div className="p-4 bg-muted/30 rounded-lg border border-border">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-primary mt-0.5" />
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-1">Profile Visibility</h3>
              <p className="text-sm text-muted-foreground">
                Profiles are private and only visible to you.
              </p>
            </div>
          </div>
        </div>

        {/* Anonymous Identity */}
        <div className="p-4 bg-muted/30 rounded-lg border border-border">
          <div className="flex items-start gap-3">
            <div className="text-2xl">🔬</div>
            <div className="flex-1">
              <h4 className="text-sm font-medium text-foreground mb-1">Your Anonymous Identity</h4>
              <p className="text-sm text-muted-foreground mb-2">
                When posting anonymously, you'll appear as:
              </p>
              <div className="flex items-center gap-2 mb-2">
                <div className="inline-flex items-center gap-2 px-3 py-2 bg-card border border-border rounded-lg flex-1">
                  <span className="text-sm font-medium">{localPseudonym}</span>
                </div>
                <button
                  onClick={handleRegeneratePseudonym}
                  className="px-3 py-2 rounded-lg border border-border hover:bg-muted transition-colors flex items-center gap-2"
                  title="Generate new pseudonym"
                >
                  <Dices className="w-4 h-4" />
                  <span className="text-sm">Regenerate</span>
                </button>
              </div>
              <p className="text-xs text-muted-foreground">
                Click "Regenerate" to get a new pseudonym.
              </p>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="text-xs text-muted-foreground">
            {saved && (
              <motion.span
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-600 dark:text-green-400"
              >
                ✓ Settings saved successfully
              </motion.span>
            )}
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
                <Save className="w-4 h-4 mr-2" />
                Save Settings
              </>
            )}
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
