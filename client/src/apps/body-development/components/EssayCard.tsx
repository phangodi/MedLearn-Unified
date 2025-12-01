import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { BookOpen, ChevronRight, Sparkles } from 'lucide-react'
import { useRef, type MouseEvent } from 'react'

interface EssayCardProps {
  id: number
  title: string
  subtitle: string
  category: string
  onClick: () => void
  index: number
}

export function EssayCard({ id, title, subtitle, category, onClick, index }: EssayCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  // 3D tilt effect using Framer Motion
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg'])

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.05,
        duration: 0.5,
        ease: [0.23, 1, 0.32, 1]
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className="group relative cursor-pointer perspective-1000"
    >
      {/* Glow effect on hover */}
      <motion.div
        className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-rose-500 via-pink-500 to-rose-500 opacity-0
                   group-hover:opacity-100 blur transition-all duration-500 -z-10"
        animate={{
          opacity: [0, 0.3, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Main Card */}
      <motion.div
        className="relative h-full bg-card/80 backdrop-blur-md border-2 rounded-2xl p-6
                   transition-all duration-300 overflow-hidden
                   hover:border-rose-400/60 dark:hover:border-rose-500/40
                   hover:shadow-[0_0_50px_rgba(244,63,94,0.4)] dark:hover:shadow-[0_0_50px_rgba(244,63,94,0.25)]
                   hover:scale-[1.02] active:scale-[0.98]
                   border-border/40"
        style={{
          transformStyle: 'preserve-3d',
          transform: 'translateZ(50px)',
        }}
      >
        {/* Animated gradient accent bar */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-rose-400 via-pink-400 to-rose-500
                     opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />

        {/* Floating particles effect on hover */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-rose-500 rounded-full opacity-0
                         group-hover:opacity-60 blur-sm"
              animate={{
                y: [0, -100],
                x: [0, Math.random() * 50 - 25],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 2 + i * 0.5,
                repeat: Infinity,
                ease: 'easeOut',
                delay: i * 0.3,
              }}
              style={{
                bottom: '20%',
                left: `${30 + i * 20}%`,
              }}
            />
          ))}
        </div>

        {/* Corner sparkle */}
        <motion.div
          className="absolute top-4 right-4 opacity-0 group-hover:opacity-100"
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Sparkles className="w-4 h-4 text-rose-500 dark:text-rose-400" />
        </motion.div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Header: Question Number + Category Badge */}
          <div className="flex items-start justify-between mb-5">
            {/* Question Number with Icon */}
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl
                              bg-gradient-to-br from-rose-100 to-pink-100
                              dark:from-rose-950/40 dark:to-pink-950/40
                              border-2 border-rose-200/50 dark:border-rose-800/30
                              group-hover:scale-110 group-hover:rotate-6
                              transition-all duration-300 shadow-lg"
                   style={{ transformStyle: 'preserve-3d', transform: 'translateZ(20px)' }}>
                <BookOpen className="w-6 h-6 text-rose-600 dark:text-rose-400
                                     group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="text-3xl font-black text-rose-600 dark:text-rose-400
                               group-hover:scale-110 transition-all duration-300"
                    style={{ transformStyle: 'preserve-3d', transform: 'translateZ(30px)' }}>
                #{id}
              </span>
            </motion.div>

            {/* Category Badge */}
            <motion.span
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="px-3 py-1.5 text-xs font-bold rounded-full
                         bg-rose-100 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300
                         border-2 border-rose-200/50 dark:border-rose-800/30
                         group-hover:shadow-lg transition-all duration-300"
              style={{ transformStyle: 'preserve-3d', transform: 'translateZ(25px)' }}
            >
              {category}
            </motion.span>
          </div>

          {/* Essay Title */}
          <h3 className="text-xl font-bold mb-3 text-foreground
                         group-hover:text-rose-600 dark:group-hover:text-rose-400
                         transition-colors duration-300 line-clamp-2 leading-tight"
              style={{ transformStyle: 'preserve-3d', transform: 'translateZ(15px)' }}>
            {title}
          </h3>

          {/* Essay Subtitle */}
          <p className="text-sm text-muted-foreground mb-5 flex-1 line-clamp-2 leading-relaxed
                        group-hover:text-foreground/90 transition-colors duration-300"
             style={{ transformStyle: 'preserve-3d', transform: 'translateZ(10px)' }}>
            {subtitle}
          </p>

          {/* Action Footer */}
          <div className="flex items-center justify-between pt-4 border-t-2 border-border/30
                          group-hover:border-rose-200/50 dark:group-hover:border-rose-800/30
                          transition-all duration-300"
               style={{ transformStyle: 'preserve-3d', transform: 'translateZ(5px)' }}>
            <span className="text-sm font-semibold text-muted-foreground
                             group-hover:text-rose-600 dark:group-hover:text-rose-400
                             transition-colors duration-300 flex items-center gap-2">
              <motion.span
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="w-2 h-2 rounded-full bg-rose-500
                           opacity-0 group-hover:opacity-100"
              />
              Read Essay
            </span>
            <motion.div
              animate={{
                x: [0, 5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <ChevronRight className="w-5 h-5 text-muted-foreground
                                       group-hover:text-rose-600 dark:group-hover:text-rose-400
                                       transition-all duration-300" />
            </motion.div>
          </div>
        </div>

        {/* Bottom gradient reflection */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-rose-500 via-pink-500 to-transparent
                        opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10
                        transition-opacity duration-500 pointer-events-none" />
      </motion.div>
    </motion.div>
  )
}
