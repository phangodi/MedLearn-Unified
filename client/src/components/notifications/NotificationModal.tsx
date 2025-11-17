import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AlertCircle, X } from 'lucide-react'
import { useNotifications } from '@/contexts/NotificationContext'
import { Button } from '@/components/ui/Button'
import type { Notification } from '@/types/notifications'

export function NotificationModal() {
  const { criticalNotifications, dismissNotification } = useNotifications()
  const [currentNotification, setCurrentNotification] = useState<Notification | null>(null)

  // Show first critical notification (simplified approach)
  useEffect(() => {
    if (criticalNotifications.length > 0 && !currentNotification) {
      setCurrentNotification(criticalNotifications[0])
    } else if (criticalNotifications.length === 0) {
      setCurrentNotification(null)
    }
  }, [criticalNotifications, currentNotification])

  const handleAction = () => {
    if (!currentNotification) return

    const { action } = currentNotification

    // ALWAYS dismiss first, then take action
    dismissNotification(currentNotification.id)
    setCurrentNotification(null)

    // Small delay to ensure dismiss is saved before action
    setTimeout(() => {
      switch (action.type) {
        case 'refresh':
          window.location.reload()
          break
        case 'navigate':
          if (action.url) {
            window.location.href = action.url
          }
          break
        case 'custom':
          if (action.handler) {
            action.handler()
          }
          break
        case 'dismiss':
        default:
          // Already dismissed above
          break
      }
    }, 100)
  }

  const handleDismiss = () => {
    if (currentNotification) {
      dismissNotification(currentNotification.id)
      setCurrentNotification(null)
    }
  }

  if (!currentNotification) return null

  return (
    <div className="fixed inset-0 z-[10000] pointer-events-none">
      <AnimatePresence>
        {currentNotification && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto"
              onClick={currentNotification.dismissible ? handleDismiss : undefined}
            />

            {/* Modal */}
            <div className="fixed inset-0 flex items-center justify-center p-4 pointer-events-none">
              <div className="pointer-events-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-card border border-border rounded-lg shadow-2xl max-w-md w-full p-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Dismiss button (if dismissible) */}
              {currentNotification.dismissible && (
                <button
                  onClick={handleDismiss}
                  className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Dismiss notification"
                >
                  <X className="w-5 h-5" />
                </button>
              )}

              {/* Icon */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-primary" />
                </div>

                <div className="flex-1 pt-1">
                  {/* Message */}
                  <p className="text-foreground font-medium leading-relaxed">
                    {currentNotification.message}
                  </p>

                  {/* Action button */}
                  <div className="mt-6 flex gap-3">
                    <Button onClick={handleAction} className="flex-1">
                      {currentNotification.action.label}
                    </Button>

                    {currentNotification.dismissible && (
                      <Button variant="ghost" onClick={handleDismiss}>
                        Later
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
              </div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
