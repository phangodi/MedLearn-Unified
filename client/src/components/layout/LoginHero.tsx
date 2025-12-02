import { motion } from 'framer-motion'
import { Headphones, Layers, FileQuestion, BookOpen, Heart, RefreshCw } from 'lucide-react'

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

// Feature items representing study formats
const features = [
  { icon: Headphones, label: 'Audio explanations' },
  { icon: Layers, label: 'Smart flashcards' },
  { icon: FileQuestion, label: 'MTO practice tests' },
  { icon: BookOpen, label: 'Study notes' },
]

// Subjects with unique accent colors - used for the stacked card effect
const subjects = [
  { name: 'Physiology', color: 'from-blue-500 to-cyan-400', bgLight: 'bg-blue-50', bgDark: 'dark:bg-blue-950/30' },
  { name: 'Histology', color: 'from-violet-500 to-purple-400', bgLight: 'bg-violet-50', bgDark: 'dark:bg-violet-950/30' },
  { name: 'Sociology', color: 'from-amber-500 to-orange-400', bgLight: 'bg-amber-50', bgDark: 'dark:bg-amber-950/30' },
  { name: 'Anatomy', color: 'from-emerald-500 to-teal-400', bgLight: 'bg-emerald-50', bgDark: 'dark:bg-emerald-950/30' },
]

export function LoginHero() {
  return (
    <motion.div
      className="relative h-full w-full flex flex-col justify-center items-center px-8 lg:px-12 xl:px-16 py-12 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Enhanced background with more visual interest in light mode */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Light mode: Stronger mesh gradient effect using overlapping radials */}
        <div className="absolute -top-1/4 -left-1/4 w-[80%] h-[80%] bg-gradient-radial from-primary/15 via-primary/8 to-transparent dark:from-primary/20 dark:via-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-0 w-[50%] h-[50%] bg-gradient-radial from-secondary/12 to-transparent dark:from-secondary/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/4 -right-1/4 w-[60%] h-[60%] bg-gradient-radial from-violet-500/10 to-transparent dark:from-violet-500/12 rounded-full blur-3xl" />

        {/* Additional center glow for light mode depth */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-gradient-radial from-cyan-400/8 to-transparent dark:from-cyan-400/5 rounded-full blur-3xl" />

        {/* Light mode accent: stronger diagonal gradient sweep */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-secondary/[0.05] dark:from-primary/[0.03] dark:via-transparent dark:to-secondary/[0.05]" />

        {/* Subtle top-to-bottom gradient for depth layering */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent dark:via-transparent" />

        {/* Subtle dot pattern for light mode depth - slightly more visible */}
        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      {/* Content - centered with max-width */}
      <div className="relative z-10 max-w-lg w-full">
        {/* Small contextual label - understated */}
        <motion.p
          variants={itemVariants}
          className="text-sm text-muted-foreground/80 mb-6 font-medium"
        >
          Built for SZTE medical students
        </motion.p>

        {/* Main Headline - Bold statement */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold mb-6 leading-[1.08] tracking-tight"
        >
          <span className="text-foreground">Study smarter.</span>
          <br />
          <span className="text-foreground/50 dark:text-foreground/40">Not harder.</span>
        </motion.h1>

        {/* Subheadline - Clear value prop */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-muted-foreground mb-8 leading-relaxed"
        >
          AI-prepared exam materials across multiple subjects.
          <br />
          <span className="text-foreground/80 dark:text-foreground/60 font-medium">Zero prep time. Maximum retention.</span>
        </motion.p>

        {/* Subject list - stacked cards with color accents */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <p className="text-xs uppercase tracking-wider text-muted-foreground/60 mb-3 font-medium">
            Subjects covered
          </p>
          <div className="flex flex-wrap gap-2">
            {subjects.map((subject, index) => (
              <motion.div
                key={subject.name}
                className={`relative group cursor-default`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.08, duration: 0.4 }}
                whileHover={{ y: -2 }}
              >
                {/* Subtle colored background that shows on hover */}
                <div className={`absolute inset-0 rounded-lg ${subject.bgLight} ${subject.bgDark} opacity-0 group-hover:opacity-100 transition-opacity duration-200`} />

                {/* Subject name with left border accent */}
                <div className="relative flex items-center gap-2 px-3 py-1.5">
                  <div className={`w-0.5 h-4 rounded-full bg-gradient-to-b ${subject.color}`} />
                  <span className="text-sm font-medium text-foreground/85 dark:text-foreground/70 group-hover:text-foreground transition-colors duration-200">
                    {subject.name}
                  </span>
                </div>
              </motion.div>
            ))}
            {/* + more indicator */}
            <motion.div
              className="flex items-center px-3 py-1.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.4 }}
            >
              <span className="text-sm text-muted-foreground/50 italic">
                + more coming
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Features - 2x2 grid of study formats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 gap-3 mb-8"
        >
          {features.map((feature) => (
            <div
              key={feature.label}
              className="flex items-center gap-3 text-sm text-muted-foreground"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/5 dark:bg-primary/10">
                <feature.icon className="w-4 h-4 text-primary/70" strokeWidth={1.5} />
              </div>
              <span>{feature.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Bottom highlights - icon + text pairs with subtle styling */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-6"
        >
          <div className="flex items-center gap-2 text-sm">
            <Heart className="w-3.5 h-3.5 text-rose-500/70 dark:text-rose-400/60" strokeWidth={2} />
            <span className="text-foreground/60 dark:text-foreground/50">Free forever</span>
          </div>
          <div className="w-px h-4 bg-border/50 dark:bg-border/30" />
          <div className="flex items-center gap-2 text-sm">
            <RefreshCw className="w-3.5 h-3.5 text-emerald-500/70 dark:text-emerald-400/60" strokeWidth={2} />
            <span className="text-foreground/60 dark:text-foreground/50">Updated before exams</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom decoration - subtle horizontal line */}
      <motion.div
        variants={itemVariants}
        className="absolute bottom-8 left-8 lg:left-12 xl:left-16 right-8 lg:right-12 xl:right-16"
      >
        <div className="h-px bg-gradient-to-r from-border/50 via-border/20 to-transparent" />
      </motion.div>
    </motion.div>
  )
}
