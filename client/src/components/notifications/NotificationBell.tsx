import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bell, X, ExternalLink, RefreshCw } from 'lucide-react'
import { useNotifications } from '@/contexts/NotificationContext'
import { Button } from '@/components/ui/Button'
import type { Notification } from '@/types/notifications'

export function NotificationBell() {
  const { normalNotifications, unreadCount, markAsRead, dismissNotification } = useNotifications()
  const [isOpen, setIsOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        panelRef.current &&
        buttonRef.current &&
        !panelRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

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
        dismissNotification(notification.id)
        break
    }

    setIsOpen(false)
  }

  return (
    <div className="relative">
      {/* Bell button */}
      <button
        ref={buttonRef}
        onClick={handleOpen}
        className="relative p-2 rounded-lg hover:bg-accent transition-colors"
        aria-label={`Notifications ${unreadCount > 0 ? `(${unreadCount} unread)` : ''}`}
      >
        <Bell className="w-5 h-5 text-foreground" />

        {/* Unread badge */}
        {unreadCount > 0 && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
          >
            {unreadCount > 9 ? '9+' : unreadCount}
          </motion.span>
        )}
      </button>

      {/* Dropdown panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={panelRef}
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-96 max-w-[calc(100vw-2rem)] bg-card border border-border rounded-lg shadow-2xl overflow-hidden z-50"
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
      </AnimatePresence>
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
      className="p-4 hover:bg-accent/50 transition-colors group"
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
