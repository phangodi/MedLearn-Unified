/**
 * Notification System Types
 *
 * Supports real-time announcements via Firestore listeners
 */

export type NotificationPriority = 'critical' | 'normal'
export type NotificationTarget = 'global' | 'histology' | 'physiology' | 'sociology' | 'anatomy'
export type NotificationActionType = 'refresh' | 'navigate' | 'dismiss' | 'custom'

export interface NotificationAction {
  type: NotificationActionType
  label: string
  /** URL for navigate action */
  url?: string
  /** Custom handler for custom action type */
  handler?: () => void
}

export interface Notification {
  id: string
  /** Main notification message */
  message: string
  /** Priority determines display style (critical = modal, normal = bell) */
  priority: NotificationPriority
  /** Target audience (global or specific subject) */
  target: NotificationTarget
  /** Primary action button configuration */
  action: NotificationAction
  /** Whether user can dismiss this notification */
  dismissible: boolean
  /** Timestamp when created */
  createdAt: Date
  /** Optional expiration time */
  expiresAt?: Date
  /** Whether this notification has been read by current user */
  read?: boolean
  /** Whether this notification has been dismissed by current user */
  dismissed?: boolean
}

export interface DashboardMessage {
  id: string
  /** Message to display on dashboard */
  message: string
  /** Last updated timestamp */
  updatedAt: Date
  /** Whether to show this message */
  visible: boolean
}

/**
 * Firestore document structure for announcements collection
 */
export interface AnnouncementDocument {
  message: string
  priority: NotificationPriority
  target: NotificationTarget
  action: {
    type: NotificationActionType
    label: string
    url?: string
  }
  dismissible: boolean
  createdAt: any // Firestore Timestamp
  expiresAt?: any // Firestore Timestamp
}

/**
 * Firestore document structure for dashboardMessage document
 */
export interface DashboardMessageDocument {
  message: string
  updatedAt: any // Firestore Timestamp
  visible: boolean
}
