import { motion, AnimatePresence } from 'framer-motion'
import { Info } from 'lucide-react'
import { useNotifications } from '@/contexts/NotificationContext'

export function DashboardMessageCard() {
  const { dashboardMessage } = useNotifications()

  return (
    <AnimatePresence>
      {dashboardMessage && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border border-primary/20 rounded-lg p-6 mb-6"
        >
          <div className="flex gap-4 items-start">
            {/* Icon */}
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <Info className="w-5 h-5 text-primary" />
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-2">Important Update</h3>
              <p className="text-foreground/90 leading-relaxed whitespace-pre-line">
                {dashboardMessage.message}
              </p>

              {/* Timestamp */}
              <p className="text-xs text-muted-foreground mt-3">
                Last updated: {formatDate(dashboardMessage.updatedAt)}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function formatDate(date: Date): string {
  const now = new Date()
  const isToday = date.toDateString() === now.toDateString()

  const yesterday = new Date(now)
  yesterday.setDate(yesterday.getDate() - 1)
  const isYesterday = date.toDateString() === yesterday.toDateString()

  if (isToday) {
    return `Today at ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`
  }

  if (isYesterday) {
    return `Yesterday at ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`
  }

  return date.toLocaleDateString([], {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}
