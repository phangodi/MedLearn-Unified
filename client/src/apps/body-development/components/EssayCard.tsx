import { motion } from 'framer-motion'
import { FileText, ArrowRight } from 'lucide-react'

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
      {/* Main Card - Lift on Hover */}
      <div className="relative h-full bg-card border border-border/50 rounded-xl overflow-hidden
                      transition-all duration-300 ease-out
                      hover:border-rose-400/50 dark:hover:border-rose-500/30
                      hover:shadow-lg hover:shadow-rose-500/5 dark:hover:shadow-rose-500/10
                      hover:-translate-y-1 active:translate-y-0">

        {/* Left Accent Bar - Elegant and Subtle */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-rose-400 via-pink-400 to-rose-500
                        dark:from-rose-500 dark:via-pink-500 dark:to-rose-600
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Content Container */}
        <div className="relative flex flex-col h-full p-5 pl-6">
          {/* Header Section */}
          <div className="flex items-start justify-between gap-4 mb-4">
            {/* Essay Number - Aligned with Icon */}
            <div className="flex items-start gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg
                              bg-gradient-to-br from-rose-50 to-pink-50
                              dark:from-rose-950/30 dark:to-pink-950/30
                              border border-rose-200/40 dark:border-rose-800/20
                              transition-all duration-300
                              group-hover:border-rose-300/60 dark:group-hover:border-rose-700/40">
                <FileText className="w-4.5 h-4.5 text-rose-600 dark:text-rose-400" strokeWidth={2} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Essay
                </span>
                <span className="text-2xl font-bold text-rose-600 dark:text-rose-400 leading-none
                                 group-hover:text-rose-500 dark:group-hover:text-rose-300
                                 transition-colors duration-300">
                  {id}
                </span>
              </div>
            </div>

            {/* Category Badge */}
            <span className="px-3 py-1.5 text-xs font-semibold rounded-lg
                             bg-rose-50 text-rose-700
                             dark:bg-rose-950/30 dark:text-rose-300
                             border border-rose-200/40 dark:border-rose-800/20
                             transition-all duration-300
                             group-hover:bg-rose-100 dark:group-hover:bg-rose-900/40
                             whitespace-nowrap">
              {category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold mb-2 text-foreground leading-tight
                         group-hover:text-rose-600 dark:group-hover:text-rose-400
                         transition-colors duration-300 line-clamp-2">
            {title}
          </h3>

          {/* Subtitle - flex-1 pushes footer to bottom */}
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 flex-1
                        group-hover:text-foreground/70 transition-colors duration-300">
            {subtitle}
          </p>

          {/* Action Footer - Always at bottom */}
          <div className="flex items-center justify-between pt-3 mt-3 border-t border-border/40
                          group-hover:border-rose-200/40 dark:group-hover:border-rose-800/30
                          transition-colors duration-300">
            <span className="text-sm font-semibold text-muted-foreground
                             group-hover:text-rose-600 dark:group-hover:text-rose-400
                             transition-colors duration-300">
              Read Essay
            </span>
            <ArrowRight className="w-5 h-5 text-rose-500 dark:text-rose-400
                                   group-hover:text-rose-600 dark:group-hover:text-rose-300
                                   group-hover:translate-x-1 transition-all duration-300" strokeWidth={2} />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
