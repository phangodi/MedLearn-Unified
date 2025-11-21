import { useState, useEffect } from 'react'
import { collection, query, where, getDocs, deleteDoc, doc, Timestamp } from 'firebase/firestore'
import { db } from '@/firebase/config'
import { Button } from '@/components/ui/Button'
import { Bell, Trash2, RefreshCw, Clock, AlertCircle } from 'lucide-react'
import type { NotificationPriority, NotificationTarget, NotificationActionType } from '@/types/notifications'

interface Announcement {
  id: string
  message: string
  priority: NotificationPriority
  target: NotificationTarget
  action: {
    type: NotificationActionType
    label: string
    url?: string
  }
  dismissible: boolean
  createdAt: Timestamp
  expiresAt: Timestamp
}

export function ManageNotifications() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([])
  const [loading, setLoading] = useState(true)
  const [deleting, setDeleting] = useState<string | null>(null)

  const fetchAnnouncements = async () => {
    setLoading(true)
    try {
      if (!db) {
        console.error('Firestore not initialized')
        return
      }

      const announcementsRef = collection(db, 'announcements')
      const now = Timestamp.now()
      const q = query(
        announcementsRef,
        where('expiresAt', '>', now)
      )
      const snapshot = await getDocs(q)

      const fetchedAnnouncements: Announcement[] = snapshot.docs.map(docSnap => ({
        id: docSnap.id,
        ...docSnap.data()
      } as Announcement))

      // Sort by creation date descending (newest first)
      fetchedAnnouncements.sort((a, b) => b.createdAt.seconds - a.createdAt.seconds)

      setAnnouncements(fetchedAnnouncements)
    } catch (error) {
      console.error('Error fetching announcements:', error)
      alert('Failed to fetch announcements')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAnnouncements()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleDelete = async (announcementId: string) => {
    if (!confirm('Are you sure you want to delete this announcement?')) return

    if (!db) {
      console.error('Firestore not initialized')
      return
    }

    setDeleting(announcementId)
    try {
      await deleteDoc(doc(db, 'announcements', announcementId))
      setAnnouncements(prev => prev.filter(a => a.id !== announcementId))
    } catch (error) {
      console.error('Error deleting announcement:', error)
      alert('Failed to delete announcement')
    } finally {
      setDeleting(null)
    }
  }

  const formatDate = (timestamp: Timestamp) => {
    return new Date(timestamp.seconds * 1000).toLocaleString()
  }

  const getTimeRemaining = (expiresAt: Timestamp) => {
    const now = Date.now()
    const expiry = expiresAt.seconds * 1000
    const diff = expiry - now

    if (diff < 0) return 'Expired'

    const hours = Math.floor(diff / (1000 * 60 * 60))
    const days = Math.floor(hours / 24)

    if (days > 0) return `${days}d ${hours % 24}h remaining`
    if (hours > 0) return `${hours}h remaining`
    return 'Less than 1h remaining'
  }

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-foreground">Active Announcements</h2>
          <p className="text-sm text-muted-foreground mt-1">
            {announcements.length} active notification{announcements.length !== 1 ? 's' : ''}
          </p>
        </div>
        <Button
          variant="outline"
          onClick={fetchAnnouncements}
          disabled={loading}
          className="gap-2"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          Refresh
        </Button>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="text-center py-12">
          <RefreshCw className="w-8 h-8 text-muted-foreground animate-spin mx-auto mb-3" />
          <p className="text-muted-foreground">Loading announcements...</p>
        </div>
      )}

      {/* Empty State */}
      {!loading && announcements.length === 0 && (
        <div className="text-center py-12 bg-muted/30 rounded-lg border border-border">
          <Bell className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
          <p className="text-foreground font-medium mb-1">No Active Announcements</p>
          <p className="text-sm text-muted-foreground">
            Create an announcement to notify students
          </p>
        </div>
      )}

      {/* Announcements List */}
      {!loading && announcements.length > 0 && (
        <div className="space-y-3">
          {announcements.map((announcement) => (
            <div
              key={announcement.id}
              className="bg-card border border-border rounded-lg p-4"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    {announcement.priority === 'critical' ? (
                      <AlertCircle className="w-4 h-4 text-red-500" />
                    ) : (
                      <Bell className="w-4 h-4 text-primary" />
                    )}
                    <span className="text-xs font-medium text-muted-foreground uppercase">
                      {announcement.priority} • {announcement.target}
                    </span>
                  </div>
                  <p className="text-sm text-foreground">{announcement.message}</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDelete(announcement.id)}
                  disabled={deleting === announcement.id}
                  className="gap-2 text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950"
                >
                  {deleting === announcement.id ? (
                    <RefreshCw className="w-4 h-4 animate-spin" />
                  ) : (
                    <Trash2 className="w-4 h-4" />
                  )}
                  Delete
                </Button>
              </div>

              {/* Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-muted-foreground pt-3 border-t border-border">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{getTimeRemaining(announcement.expiresAt)}</span>
                </div>
                <div>
                  <span className="font-medium">Action:</span> {announcement.action.label}
                </div>
                <div>
                  <span className="font-medium">Created:</span> {formatDate(announcement.createdAt)}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
