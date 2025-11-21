import { useState, FormEvent } from 'react'
import { collection, addDoc, doc, setDoc, Timestamp } from 'firebase/firestore'
import { db } from '@/firebase/config'
import { Sidebar } from '@/components/layout/Sidebar'
import { Button } from '@/components/ui/Button'
import { Bell, MessageSquare, Send, X } from 'lucide-react'
import { ManageNotifications } from '@/components/admin/ManageNotifications'
import { ManageTags } from '@/components/admin/ManageTags'
import { ManageUsers } from '@/components/admin/ManageUsers'
import type { NotificationPriority, NotificationTarget, NotificationActionType } from '@/types/notifications'
import { Users } from 'lucide-react'

export function AdminNotificationsPage() {
  const [activeTab, setActiveTab] = useState<'announcement' | 'dashboard' | 'manage' | 'tags' | 'users'>('announcement')

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="max-w-4xl mx-auto p-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Admin Panel</h1>
            <p className="text-muted-foreground">
              Manage announcements, dashboard messages, notifications, and community tags
            </p>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-6 border-b border-border">
            <button
              onClick={() => setActiveTab('announcement')}
              className={`px-4 py-2 font-medium transition-colors relative ${
                activeTab === 'announcement'
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <div className="flex items-center gap-2">
                <Bell className="w-4 h-4" />
                Create Announcement
              </div>
              {activeTab === 'announcement' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>

            <button
              onClick={() => setActiveTab('dashboard')}
              className={`px-4 py-2 font-medium transition-colors relative ${
                activeTab === 'dashboard'
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Dashboard Message
              </div>
              {activeTab === 'dashboard' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>

            <button
              onClick={() => setActiveTab('manage')}
              className={`px-4 py-2 font-medium transition-colors relative ${
                activeTab === 'manage'
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <div className="flex items-center gap-2">
                <Bell className="w-4 h-4" />
                Manage Active
              </div>
              {activeTab === 'manage' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>

            <button
              onClick={() => setActiveTab('tags')}
              className={`px-4 py-2 font-medium transition-colors relative ${
                activeTab === 'tags'
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Manage Tags
              </div>
              {activeTab === 'tags' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>

            <button
              onClick={() => setActiveTab('users')}
              className={`px-4 py-2 font-medium transition-colors relative ${
                activeTab === 'users'
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Manage Users
              </div>
              {activeTab === 'users' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
          </div>

          {/* Content */}
          {activeTab === 'announcement' ? (
            <AnnouncementForm />
          ) : activeTab === 'dashboard' ? (
            <DashboardMessageForm />
          ) : activeTab === 'manage' ? (
            <ManageNotifications />
          ) : activeTab === 'tags' ? (
            <ManageTags />
          ) : (
            <ManageUsers />
          )}
        </div>
      </main>
    </div>
  )
}

function AnnouncementForm() {
  const [message, setMessage] = useState('')
  const [priority, setPriority] = useState<NotificationPriority>('normal')
  const [target, setTarget] = useState<NotificationTarget>('global')
  const [actionType, setActionType] = useState<NotificationActionType>('refresh')
  const [actionLabel, setActionLabel] = useState('Refresh Now')
  const [actionUrl, setActionUrl] = useState('')
  const [dismissible, setDismissible] = useState(true)
  const [expiresInHours, setExpiresInHours] = useState(24)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return

    setIsSubmitting(true)
    setSuccess(false)

    try {
      const expiresAt = new Date()
      expiresAt.setHours(expiresAt.getHours() + expiresInHours)

      await addDoc(collection(db, 'announcements'), {
        message: message.trim(),
        priority,
        target,
        action: {
          type: actionType,
          label: actionLabel,
          ...(actionType === 'navigate' && actionUrl ? { url: actionUrl } : {}),
        },
        dismissible,
        createdAt: Timestamp.now(),
        expiresAt: Timestamp.fromDate(expiresAt),
      })

      setSuccess(true)
      setMessage('')
      setActionUrl('')

      // Reset success message after 3 seconds
      setTimeout(() => setSuccess(false), 3000)
    } catch (error) {
      console.error('Error creating announcement:', error)
      alert('Failed to create announcement. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-6 space-y-6">
      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          rows={4}
          placeholder="Enter your announcement message..."
          required
        />
      </div>

      {/* Priority */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Priority</label>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setPriority('normal')}
            className={`p-4 rounded-lg border-2 transition-all ${
              priority === 'normal'
                ? 'border-primary bg-primary/10'
                : 'border-border hover:border-primary/50'
            }`}
          >
            <div className="font-medium text-foreground">Normal</div>
            <div className="text-sm text-muted-foreground mt-1">Bell icon notification</div>
          </button>

          <button
            type="button"
            onClick={() => setPriority('critical')}
            className={`p-4 rounded-lg border-2 transition-all ${
              priority === 'critical'
                ? 'border-primary bg-primary/10'
                : 'border-border hover:border-primary/50'
            }`}
          >
            <div className="font-medium text-foreground">Critical</div>
            <div className="text-sm text-muted-foreground mt-1">Modal popup</div>
          </button>
        </div>
      </div>

      {/* Target */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Target Audience</label>
        <select
          value={target}
          onChange={(e) => setTarget(e.target.value as NotificationTarget)}
          className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="global">All Students (Global)</option>
          <option value="histology">Histology Students Only</option>
          <option value="physiology">Physiology Students Only</option>
          <option value="sociology">Sociology Students Only</option>
          <option value="anatomy">Anatomy Students Only</option>
        </select>
      </div>

      {/* Action Type */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Action Button</label>
        <select
          value={actionType}
          onChange={(e) => {
            const type = e.target.value as NotificationActionType
            setActionType(type)
            // Set default labels
            if (type === 'refresh') setActionLabel('Refresh Now')
            else if (type === 'navigate') setActionLabel('View Update')
            else if (type === 'dismiss') setActionLabel('Got It')
          }}
          className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary mb-3"
        >
          <option value="refresh">Refresh Page</option>
          <option value="navigate">Navigate to URL</option>
          <option value="dismiss">Dismiss Only</option>
        </select>

        {/* Action Label */}
        <input
          type="text"
          value={actionLabel}
          onChange={(e) => setActionLabel(e.target.value)}
          placeholder="Button text"
          className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />

        {/* Action URL (for navigate) */}
        {actionType === 'navigate' && (
          <input
            type="url"
            value={actionUrl}
            onChange={(e) => setActionUrl(e.target.value)}
            placeholder="https://..."
            className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary mt-3"
          />
        )}
      </div>

      {/* Options */}
      <div className="space-y-3">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={dismissible}
            onChange={(e) => setDismissible(e.target.checked)}
            className="w-5 h-5 text-primary bg-background border-border rounded focus:ring-2 focus:ring-primary"
          />
          <div>
            <div className="font-medium text-foreground">Allow users to dismiss</div>
            <div className="text-sm text-muted-foreground">
              Users can close this notification without taking action
            </div>
          </div>
        </label>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Expires after (hours)
          </label>
          <input
            type="number"
            min="1"
            max="168"
            value={expiresInHours}
            onChange={(e) => setExpiresInHours(parseInt(e.target.value) || 24)}
            className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      {/* Submit */}
      <div className="flex items-center gap-4">
        <Button type="submit" disabled={isSubmitting || !message.trim()} className="gap-2">
          <Send className="w-4 h-4" />
          {isSubmitting ? 'Sending...' : 'Send Announcement'}
        </Button>

        {success && (
          <span className="text-sm text-green-500 font-medium">
            ✓ Announcement sent successfully!
          </span>
        )}
      </div>
    </form>
  )
}

function DashboardMessageForm() {
  const [message, setMessage] = useState('')
  const [visible, setVisible] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return

    setIsSubmitting(true)
    setSuccess(false)

    try {
      await setDoc(doc(db, 'dashboardMessage', 'current'), {
        message: message.trim(),
        visible,
        updatedAt: Timestamp.now(),
      })

      setSuccess(true)

      // Reset success message after 3 seconds
      setTimeout(() => setSuccess(false), 3000)
    } catch (error) {
      console.error('Error updating dashboard message:', error)
      alert('Failed to update dashboard message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-6 space-y-6">
      <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
        <p className="text-sm text-foreground">
          This message will appear as a static card on the dashboard. It stays visible until you
          update or hide it. Perfect for ongoing announcements like "New content coming next week!"
        </p>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Dashboard Message <span className="text-red-500">*</span>
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          rows={4}
          placeholder="e.g., Sociology updates are expected next week. Stay tuned!"
          required
        />
      </div>

      {/* Visibility */}
      <label className="flex items-center gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={visible}
          onChange={(e) => setVisible(e.target.checked)}
          className="w-5 h-5 text-primary bg-background border-border rounded focus:ring-2 focus:ring-primary"
        />
        <div>
          <div className="font-medium text-foreground">Show on dashboard</div>
          <div className="text-sm text-muted-foreground">
            Uncheck to hide the message without deleting it
          </div>
        </div>
      </label>

      {/* Submit */}
      <div className="flex items-center gap-4 flex-wrap">
        <Button type="submit" disabled={isSubmitting || !message.trim()} className="gap-2">
          <Send className="w-4 h-4" />
          {isSubmitting ? 'Updating...' : 'Update Dashboard Message'}
        </Button>

        <Button
          type="button"
          variant="outline"
          disabled={isSubmitting}
          onClick={async () => {
            setIsSubmitting(true)
            setSuccess(false)
            try {
              await setDoc(doc(db, 'dashboardMessage', 'current'), {
                message: message || 'Hidden',
                visible: false,
                updatedAt: Timestamp.now(),
              })
              setVisible(false)
              setSuccess(true)
              setTimeout(() => setSuccess(false), 3000)
            } catch (error) {
              console.error('Error hiding dashboard message:', error)
              alert('Failed to hide dashboard message. Please try again.')
            } finally {
              setIsSubmitting(false)
            }
          }}
          className="gap-2"
        >
          <X className="w-4 h-4" />
          Hide Message
        </Button>

        {success && (
          <span className="text-sm text-green-500 font-medium">
            ✓ Dashboard message updated successfully!
          </span>
        )}
      </div>
    </form>
  )
}
