import { motion } from 'framer-motion'
import { Eye, EyeOff } from 'lucide-react'

interface AnonymousToggleProps {
  isAnonymous: boolean
  onToggle: (isAnonymous: boolean) => void
  pseudonym?: string
}

export function AnonymousToggle({ isAnonymous, onToggle, pseudonym }: AnonymousToggleProps) {
  return (
    <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg border border-border">
      <button
        onClick={() => onToggle(!isAnonymous)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
          isAnonymous ? 'bg-primary' : 'bg-muted'
        }`}
      >
        <motion.span
          animate={{
            x: isAnonymous ? 22 : 2,
          }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          className="inline-block h-5 w-5 transform rounded-full bg-white shadow-lg"
        />
      </button>

      <div className="flex items-center gap-2 flex-1">
        {isAnonymous ? (
          <>
            <EyeOff className="w-4 h-4 text-primary" />
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">Post Anonymously</p>
              {pseudonym && (
                <p className="text-xs text-muted-foreground">
                  Posting as: {pseudonym}
                </p>
              )}
            </div>
          </>
        ) : (
          <>
            <Eye className="w-4 h-4 text-muted-foreground" />
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">Post with Your Name</p>
              <p className="text-xs text-muted-foreground">
                Your identity will be visible
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
