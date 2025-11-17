import React, { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { collection, query, orderBy, onSnapshot, doc, Timestamp, where } from 'firebase/firestore'
import { db } from '@/firebase/config'
import type {
  Notification,
  DashboardMessage,
  AnnouncementDocument,
  DashboardMessageDocument,
  NotificationTarget,
} from '@/types/notifications'

interface NotificationContextType {
  /** All active notifications for current page/subject */
  notifications: Notification[]
  /** Critical notifications that should show as modal */
  criticalNotifications: Notification[]
  /** Normal notifications for bell icon panel */
  normalNotifications: Notification[]
  /** Unread notification count */
  unreadCount: number
  /** Dashboard message (static card) */
  dashboardMessage: DashboardMessage | null
  /** Mark notification as read */
  markAsRead: (notificationId: string) => void
  /** Dismiss notification (won't show again) */
  dismissNotification: (notificationId: string) => void
  /** Set current page target for filtering notifications */
  setCurrentTarget: (target: NotificationTarget) => void
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined)

const DISMISSED_KEY = 'medlearn_dismissed_notifications'

export function NotificationProvider({ children }: { children: React.ReactNode }) {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [dashboardMessage, setDashboardMessage] = useState<DashboardMessage | null>(null)
  const [currentTarget, setCurrentTarget] = useState<NotificationTarget>('global')
  const [dismissedIds, setDismissedIds] = useState<Set<string>>(() => {
    try {
      const stored = localStorage.getItem(DISMISSED_KEY)
      return stored ? new Set(JSON.parse(stored)) : new Set()
    } catch {
      return new Set()
    }
  })

  // Persist dismissed notifications to localStorage
  useEffect(() => {
    localStorage.setItem(DISMISSED_KEY, JSON.stringify([...dismissedIds]))
  }, [dismissedIds])

  // Real-time listener for announcements
  useEffect(() => {
    const now = Timestamp.now()
    const announcementsQuery = query(
      collection(db, 'announcements'),
      orderBy('createdAt', 'desc')
    )

    const unsubscribe = onSnapshot(
      announcementsQuery,
      (snapshot) => {
        const newNotifications: Notification[] = []
        const currentTime = new Date()

        snapshot.forEach((doc) => {
          const data = doc.data() as AnnouncementDocument

          // Skip if expired
          if (data.expiresAt && data.expiresAt.toDate() < currentTime) {
            return
          }

          // Skip if dismissed by user
          if (dismissedIds.has(doc.id)) {
            return
          }

          // Filter by target (show global OR matching current page)
          if (data.target !== 'global' && data.target !== currentTarget) {
            return
          }

          newNotifications.push({
            id: doc.id,
            message: data.message,
            priority: data.priority,
            target: data.target,
            action: data.action,
            dismissible: data.dismissible,
            createdAt: data.createdAt.toDate(),
            expiresAt: data.expiresAt?.toDate(),
            read: false,
            dismissed: false,
          })
        })

        setNotifications(newNotifications)
      },
      (error) => {
        console.error('Error listening to announcements:', error)
      }
    )

    return () => unsubscribe()
  }, [currentTarget, dismissedIds])

  // Real-time listener for dashboard message
  useEffect(() => {
    const messageDoc = doc(db, 'dashboardMessage', 'current')

    const unsubscribe = onSnapshot(
      messageDoc,
      (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.data() as DashboardMessageDocument

          if (data.visible) {
            setDashboardMessage({
              id: snapshot.id,
              message: data.message,
              updatedAt: data.updatedAt.toDate(),
              visible: data.visible,
            })
          } else {
            setDashboardMessage(null)
          }
        } else {
          setDashboardMessage(null)
        }
      },
      (error) => {
        console.error('Error listening to dashboard message:', error)
      }
    )

    return () => unsubscribe()
  }, [])

  const markAsRead = useCallback((notificationId: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === notificationId ? { ...n, read: true } : n))
    )
  }, [])

  const dismissNotification = useCallback((notificationId: string) => {
    setDismissedIds((prev) => new Set(prev).add(notificationId))
    setNotifications((prev) => prev.filter((n) => n.id !== notificationId))
  }, [])

  const setCurrentTargetCallback = useCallback((target: NotificationTarget) => {
    setCurrentTarget(target)
  }, [])

  const criticalNotifications = notifications.filter((n) => n.priority === 'critical')
  const normalNotifications = notifications.filter((n) => n.priority === 'normal')
  const unreadCount = normalNotifications.filter((n) => !n.read).length

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        criticalNotifications,
        normalNotifications,
        unreadCount,
        dashboardMessage,
        markAsRead,
        dismissNotification,
        setCurrentTarget: setCurrentTargetCallback,
      }}
    >
      {children}
    </NotificationContext.Provider>
  )
}

export function useNotifications() {
  const context = useContext(NotificationContext)
  if (context === undefined) {
    throw new Error('useNotifications must be used within NotificationProvider')
  }
  return context
}
