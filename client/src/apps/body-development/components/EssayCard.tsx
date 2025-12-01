import { motion } from 'framer-motion'
import { BookOpen, ChevronRight } from 'lucide-react'

interface EssayCardProps {
  id: number
  title: string
  subtitle: string
  category: string
  onClick: () => void
  index: number
}

export function EssayCard({ id, title, subtitle, category, onClick, index }: EssayCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      onClick={onClick}
      className="group relative cursor-pointer"
    >
      {/* Main Card */}
      <div className="relative h-full bg-card border border-border/50 rounded-xl p-6 transition-all duration-300 overflow-hidden
                      hover:border-rose-400/60 dark:hover:border-rose-500/40
                      hover:shadow-[0_0_40px_rgba(244,63,94,0.25)] dark:hover:shadow-[0_0_40px_rgba(244,63,94,0.2)]
                      hover:scale-[1.02] active:scale-[0.98]">

        {/* Gradient Accent Top - Animated on Hover */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-400 via-pink-400 to-rose-500
                        dark:from-rose-500 dark:via-pink-500 dark:to-rose-600
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Subtle Glow Background - Organic Shape */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-rose-500/10 dark:bg-rose-500/5
                        rounded-full blur-3xl opacity-0 group-hover:opacity-100
                        transition-opacity duration-500 group-hover:scale-150" />

        {/* Content Container */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Header: Question Number + Category Badge */}
          <div className="flex items-start justify-between mb-4">
            {/* Question Number with Icon */}
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg
                              bg-gradient-to-br from-rose-100 to-pink-100
                              dark:from-rose-950/40 dark:to-pink-950/40
                              border border-rose-200/50 dark:border-rose-800/30
                              group-hover:from-rose-200 group-hover:to-pink-200
                              dark:group-hover:from-rose-900/50 dark:group-hover:to-pink-900/50
                              transition-all duration-300">
                <BookOpen className="w-5 h-5 text-rose-600 dark:text-rose-400
                                     group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="text-2xl font-bold text-rose-600 dark:text-rose-400
                               group-hover:text-rose-500 dark:group-hover:text-rose-300
                               transition-colors duration-300">
                #{id}
              </span>
            </div>

            {/* Category Badge */}
            <span className="px-3 py-1 text-xs font-semibold rounded-full
                             bg-rose-100 text-rose-700
                             dark:bg-rose-950/40 dark:text-rose-300
                             border border-rose-200/50 dark:border-rose-800/30
                             group-hover:bg-rose-200 dark:group-hover:bg-rose-900/50
                             group-hover:scale-105 transition-all duration-300">
              {category}
            </span>
          </div>

          {/* Essay Title */}
          <h3 className="text-lg font-bold mb-2 text-foreground
                         group-hover:text-rose-600 dark:group-hover:text-rose-400
                         transition-colors duration-300 line-clamp-2">
            {title}
          </h3>

          {/* Essay Subtitle */}
          <p className="text-sm text-muted-foreground mb-4 flex-1 line-clamp-2
                        group-hover:text-foreground/80 transition-colors duration-300">
            {subtitle}
          </p>

          {/* Action Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-border/30
                          group-hover:border-rose-200/50 dark:group-hover:border-rose-800/30
                          transition-colors duration-300">
            <span className="text-sm font-medium text-muted-foreground
                             group-hover:text-rose-600 dark:group-hover:text-rose-400
                             transition-colors duration-300">
              Read Essay
            </span>
            <ChevronRight className="w-5 h-5 text-muted-foreground
                                     group-hover:text-rose-600 dark:group-hover:text-rose-400
                                     group-hover:translate-x-1 transition-all duration-300" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
