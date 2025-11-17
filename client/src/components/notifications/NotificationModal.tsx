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
            {/* Glassmorphism Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="notification-glass-backdrop fixed inset-0 pointer-events-auto"
              onClick={currentNotification.dismissible ? handleDismiss : undefined}
            />

            {/* Modal */}
            <div className="fixed inset-0 flex items-center justify-center p-4 pointer-events-none">
              <div className="pointer-events-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="notification-glass-modal relative max-w-md w-full p-6 rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Dismiss button (if dismissible) */}
              {currentNotification.dismissible && (
                <button
                  onClick={handleDismiss}
                  className="absolute top-4 right-4 text-muted-foreground hover:text-foreground
                           transition-all duration-200
                           hover:scale-110 hover:rotate-90
                           rounded-lg p-1
                           hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                  aria-label="Dismiss notification"
                >
                  <X className="w-5 h-5" />
                </button>
              )}

              {/* Icon */}
              <div className="flex items-start gap-4">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', damping: 15, stiffness: 200, delay: 0.1 }}
                  className="flex-shrink-0 w-12 h-12 rounded-full
                           bg-gradient-to-br from-primary/20 to-primary/10
                           border border-primary/20
                           backdrop-blur-sm
                           flex items-center justify-center
                           shadow-lg shadow-primary/10"
                >
                  <AlertCircle className="w-6 h-6 text-primary" />
                </motion.div>

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
