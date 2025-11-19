import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Home } from 'lucide-react'

export function DashboardReturnMarker() {
  const navigate = useNavigate()
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <motion.div
      className="fixed top-0 left-1/2 -translate-x-1/2 w-16 h-8 z-[9999] cursor-pointer group"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onClick={() => navigate('/dashboard')}
      whileTap={{ scale: 0.95 }}
    >
      {/* Subtle marker line (always visible) - horizontal version */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1 w-12 bg-gradient-to-r from-primary/30 via-primary/50 to-primary/30 group-hover:from-primary/50 group-hover:via-primary/70 group-hover:to-primary/50 transition-all duration-300 rounded-full shadow-sm" />

      {/* "Go to Dashboard" button (appears on hover) */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{
              duration: 0.15,
              ease: 'easeOut'
            }}
            className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center justify-center cursor-pointer pointer-events-none"
          >
            {/* Horizontal pill - integrated with sidebar style */}
            <div className="bg-card border border-border rounded-lg shadow-md px-3 py-2 flex items-center gap-2">
              <Home className="w-4 h-4 text-primary" />
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground whitespace-nowrap">
                Dashboard
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
