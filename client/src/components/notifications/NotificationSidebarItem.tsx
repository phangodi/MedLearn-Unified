import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Bell, X, ExternalLink, RefreshCw } from 'lucide-react'
import { useNotifications } from '@/contexts/NotificationContext'
import { Button } from '@/components/ui/Button'
import type { Notification } from '@/types/notifications'

interface NotificationSidebarItemProps {
  isCollapsed: boolean
}

export function NotificationSidebarItem({ isCollapsed }: NotificationSidebarItemProps) {
  const { normalNotifications, unreadCount, markAsRead, dismissNotification } = useNotifications()
  const [isOpen, setIsOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Close dropdown when clicking outside (but with better logic)
  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node

      // Don't close if clicking the button (handled by toggle)
      if (buttonRef.current?.contains(target)) {
        return
      }

      // Don't close if clicking inside the panel
      if (panelRef.current?.contains(target)) {
        return
      }

      // Close only if clicking far away (not in the gap)
      const buttonRect = buttonRef.current?.getBoundingClientRect()
      const panelRect = panelRef.current?.getBoundingClientRect()

      if (buttonRect && panelRect) {
        const mouseX = (event as MouseEvent).clientX
        const mouseY = (event as MouseEvent).clientY

        // Check if click is between button and panel (the gap)
        const inGapX = mouseX >= buttonRect.right && mouseX <= panelRect.left + 20
        const inGapY = mouseY >= Math.min(buttonRect.top, panelRect.top) &&
                       mouseY <= Math.max(buttonRect.bottom, panelRect.bottom)

        // Don't close if in the gap area
        if (inGapX && inGapY) {
          return
        }
      }

      // Close if clicking far outside
      setIsOpen(false)
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  // Mark all as read when opening panel
  const handleOpen = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      normalNotifications.forEach((n) => {
        if (!n.read) {
          markAsRead(n.id)
        }
      })
    }
  }

  const handleAction = (notification: Notification) => {
    const { action } = notification

    // ALWAYS dismiss first, then take action
    dismissNotification(notification.id)
    setIsOpen(false)

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
        onClick={handleOpen}
        className={`sidebar-item w-full flex items-center ${
          isCollapsed ? 'justify-center' : 'space-x-2.5'
        } px-3 py-2 rounded-lg text-left relative`}
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
              initial={{ opacity: 0, x: -10, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed w-96 max-w-[calc(100vw-120px)] bg-card border border-border rounded-lg shadow-2xl overflow-hidden"
              style={{
                // Position relative to the button
                left: isCollapsed ? '92px' : '300px', // Adjust based on sidebar width
                top: buttonRef.current ? `${buttonRef.current.getBoundingClientRect().top}px` : '50%',
                maxHeight: 'calc(100vh - 100px)',
                zIndex: 9999, // Very high z-index to appear above all content
              }}
            >
              {/* Header */}
              <div className="p-4 border-b border-border flex items-center justify-between">
                <h3 className="font-semibold text-foreground">Notifications</h3>
                {normalNotifications.length > 0 && (
                  <span className="text-sm text-muted-foreground">
                    {normalNotifications.length} active
                  </span>
                )}
              </div>

              {/* Notification list */}
              <div className="max-h-96 overflow-y-auto">
                {normalNotifications.length === 0 ? (
                  <div className="p-8 text-center text-muted-foreground">
                    <Bell className="w-12 h-12 mx-auto mb-3 opacity-30" />
                    <p>No new notifications</p>
                  </div>
                ) : (
                  <div className="divide-y divide-border">
                    {normalNotifications.map((notification) => (
                      <NotificationItem
                        key={notification.id}
                        notification={notification}
                        onAction={() => handleAction(notification)}
                        onDismiss={() => dismissNotification(notification.id)}
                      />
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group"
    >
      <div className="flex gap-3">
        {/* Content */}
        <div className="flex-1 min-w-0">
          <p className="text-sm text-foreground leading-relaxed mb-3">{notification.message}</p>

          {/* Actions */}
          <div className="flex gap-2">
            <Button size="sm" onClick={onAction} className="text-xs gap-1.5">
              {getActionIcon()}
              {notification.action.label}
            </Button>

            {notification.dismissible && (
              <button
                onClick={onDismiss}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Dismiss
              </button>
            )}
          </div>
        </div>

        {/* Dismiss icon */}
        {notification.dismissible && (
          <button
            onClick={onDismiss}
            className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-foreground"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Timestamp */}
      <p className="text-xs text-muted-foreground mt-2">
        {formatTimestamp(notification.createdAt)}
      </p>
    </motion.div>
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
