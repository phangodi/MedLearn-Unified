import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Bell, X, ExternalLink, RefreshCw } from 'lucide-react'
import { useNotifications } from '@/contexts/NotificationContext'
import type { Notification } from '@/types/notifications'

interface NotificationSidebarItemProps {
  isCollapsed: boolean
  onOpenChange?: (isOpen: boolean) => void
}

export function NotificationSidebarItem({ isCollapsed, onOpenChange }: NotificationSidebarItemProps) {
  const { normalNotifications, unreadCount, markAsRead, dismissNotification } = useNotifications()
  const [isOpen, setIsOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Close dropdown when clicking outside - SIMPLE VERSION
  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node

      // Don't close if clicking the button or inside the panel
      if (
        buttonRef.current?.contains(target) ||
        panelRef.current?.contains(target)
      ) {
        return
      }

      // Close if clicking anywhere else
      setIsOpen(false)
      onOpenChange?.(false)
    }

    // Use click event instead of mousedown
    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isOpen, onOpenChange])

  // Simple toggle - no event manipulation
  const handleOpen = () => {
    const newIsOpen = !isOpen

    if (newIsOpen) {
      // Mark all as read when opening
      normalNotifications.forEach((n) => {
        if (!n.read) {
          markAsRead(n.id)
        }
      })
    }

    setIsOpen(newIsOpen)
    onOpenChange?.(newIsOpen)
  }

  const handleAction = (notification: Notification) => {
    const { action } = notification

    // ALWAYS dismiss first, then take action
    dismissNotification(notification.id)
    setIsOpen(false)
    onOpenChange?.(false) // Notify parent

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

  return (
    <div className="relative">
      {/* Notification button styled like sidebar items */}
      <button
        ref={buttonRef}
        type="button"
        onClick={handleOpen}
        className={`sidebar-item w-full flex items-center ${
          isCollapsed ? 'justify-center' : 'space-x-2.5'
        } px-3 py-2 rounded-lg text-left relative outline-none focus:outline-none`}
        title={isCollapsed ? 'Notifications' : undefined}
      >
        <div className="relative">
          <Bell className="sidebar-icon w-4.5 h-4.5" />

          {/* Unread badge */}
          {unreadCount > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center"
            >
              {unreadCount > 9 ? '9+' : unreadCount}
            </motion.span>
          )}
        </div>

        {!isCollapsed && <span className="text-sm">Notifications</span>}
      </button>

      {/* Dropdown panel - rendered in portal to ensure proper z-index */}
      {createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={panelRef}
              initial={{ opacity: 0, x: -20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -20, scale: 0.9 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="notification-glass-panel fixed w-96 max-w-[calc(100vw-120px)] overflow-hidden rounded-2xl"
              style={{
                // Position relative to the button
                left: isCollapsed ? '92px' : '300px', // Adjust based on sidebar width
                top: buttonRef.current ? `${buttonRef.current.getBoundingClientRect().top}px` : '50%',
                maxHeight: 'calc(100vh - 100px)',
                zIndex: 9999, // Very high z-index to appear above all content
              }}
            >
              {/* Header - Transparent glass */}
              <div className="p-4 flex items-center justify-between">
                <h3 className="font-semibold text-foreground">Notifications</h3>
                {normalNotifications.length > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="px-2 py-0.5 rounded-full text-xs font-medium
                             bg-primary/10 text-primary
                             border border-primary/20"
                  >
                    {normalNotifications.length} active
                  </motion.span>
                )}
              </div>

              {/* Notification list */}
              <div className="notification-scroll max-h-96 overflow-y-auto">
                {normalNotifications.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-8 text-center text-muted-foreground"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', damping: 15, delay: 0.1 }}
                    >
                      <Bell className="w-12 h-12 mx-auto mb-3 opacity-30" />
                    </motion.div>
                    <p>No new notifications</p>
                  </motion.div>
                ) : (
                  <div>
                    {normalNotifications.map((notification, index) => (
                      <motion.div
                        key={notification.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <NotificationItem
                          notification={notification}
                          onAction={() => handleAction(notification)}
                          onDismiss={() => dismissNotification(notification.id)}
                        />
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  )
}

interface NotificationItemProps {
  notification: Notification
  onAction: () => void
  onDismiss: () => void
}

function NotificationItem({ notification, onAction, onDismiss }: NotificationItemProps) {
  const getActionIcon = () => {
    switch (notification.action.type) {
      case 'refresh':
        return <RefreshCw className="w-4 h-4" />
      case 'navigate':
        return <ExternalLink className="w-4 h-4" />
      default:
        return null
    }
  }

  return (
    <div
      className="p-4 transition-colors duration-300 group
                 hover:bg-black/[0.02] dark:hover:bg-white/[0.02]"
    >
      <div className="flex gap-3">
        {/* Content */}
        <div className="flex-1 min-w-0">
          <p className="text-sm text-foreground leading-relaxed mb-3">{notification.message}</p>

          {/* Actions */}
          <div className="flex gap-2">
            {/* Primary Action Button - Elegant Glass Style */}
            <button
              onClick={onAction}
              className="px-3 py-1.5 text-xs font-medium rounded-lg
                       flex items-center gap-1.5
                       bg-foreground/[0.04] hover:bg-foreground/[0.08]
                       text-foreground/80 hover:text-foreground/95
                       border border-foreground/[0.08] hover:border-foreground/[0.12]
                       transition-all duration-300
                       backdrop-blur-sm"
            >
              {getActionIcon()}
              {notification.action.label}
            </button>

            {/* Dismiss Button - Ultra-Minimal */}
            {notification.dismissible && (
              <button
                onClick={onDismiss}
                className="px-3 py-1.5 text-xs font-medium rounded-lg
                         bg-transparent hover:bg-foreground/[0.04]
                         text-foreground/50 hover:text-foreground/70
                         border border-foreground/[0.06] hover:border-foreground/[0.10]
                         transition-all duration-300"
              >
                Dismiss
              </button>
            )}
          </div>
        </div>

        {/* Dismiss icon - Minimal hover reveal */}
        {notification.dismissible && (
          <button
            onClick={onDismiss}
            className="flex-shrink-0 opacity-0 group-hover:opacity-60
                     transition-opacity duration-300
                     text-foreground/40 hover:text-foreground/60
                     rounded-lg p-1
                     hover:bg-foreground/[0.04]"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Timestamp */}
      <p className="text-xs text-muted-foreground mt-2 opacity-60">
        {formatTimestamp(notification.createdAt)}
      </p>
    </div>
  )
}

function formatTimestamp(date: Date): string {
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  const minutes = Math.floor(diff / 60000)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  if (minutes < 1) return 'Just now'
  if (minutes < 60) return `${minutes}m ago`
  if (hours < 24) return `${hours}h ago`
  if (days < 7) return `${days}d ago`

  return date.toLocaleDateString()
}
