import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Brain, Microscope, User, Users, Activity, ArrowRight, Sparkles } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'

// 3D Card Component with mouse tracking
function Card3D({ children, enabled }: { children: React.ReactNode; enabled: boolean }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(mouseY, [-150, 150], [6, -6])
  const rotateY = useTransform(mouseX, [-150, 150], [-6, 6])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enabled) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      style={{ perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{
          rotateX: enabled ? rotateX : 0,
          rotateY: enabled ? rotateY : 0,
          transformStyle: 'preserve-3d',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

// Subjects data
const subjects = [
  {
    name: 'Physiology',
    icon: Brain,
    description: '122 Topics with Multiple Study Formats',
    subtitle: '122 Topics',
    enabled: true,
    image: '/subjects/physiology.png',
    path: '/physiology',
    color: 'from-blue-500/20 to-blue-600/20',
    hoverGlow: 'group-hover:shadow-[0_8px_40px_rgba(59,130,246,0.3)]',
    darkHoverGlow: 'dark:group-hover:shadow-[0_8px_40px_rgba(59,130,246,0.4)]',
  },
  {
    name: 'Histology',
    icon: Microscope,
    description: 'MTO1: Nervous System and MTO2: Integuments',
    subtitle: '30 Slides',
    enabled: true,
    image: '/subjects/histology.png',
    color: 'from-purple-500/20 to-purple-600/20',
    hoverGlow: 'group-hover:shadow-[0_8px_40px_rgba(168,85,247,0.3)]',
    darkHoverGlow: 'dark:group-hover:shadow-[0_8px_40px_rgba(168,85,247,0.4)]',
    path: '/histology',
  },
  {
    name: 'Sociology',
    icon: Users,
    description: 'Medical Sociology and Healthcare Systems',
    subtitle: 'Social Health',
    enabled: true,
    image: '/subjects/sociology.png',
    path: '/sociology',
    color: 'from-teal-500/20 to-teal-600/20',
    hoverGlow: 'group-hover:shadow-[0_8px_40px_rgba(20,184,166,0.3)]',
    darkHoverGlow: 'dark:group-hover:shadow-[0_8px_40px_rgba(20,184,166,0.4)]',
  },
  {
    name: 'Anatomy',
    icon: User,
    description: 'Neuroanatomy and CNS Content',
    subtitle: 'Neuroanatomy',
    enabled: true,
    image: '/subjects/anatomy.png',
    path: '/anatomy',
    color: 'from-emerald-500/20 to-emerald-600/20',
    hoverGlow: 'group-hover:shadow-[0_8px_40px_rgba(16,185,129,0.3)]',
    darkHoverGlow: 'dark:group-hover:shadow-[0_8px_40px_rgba(16,185,129,0.4)]',
  },
  {
    name: 'Immunology',
    icon: Activity,
    description: 'Immune System Fundamentals',
    subtitle: 'In Development',
    enabled: false,
    image: '/subjects/immunology.png',
    color: 'from-rose-500/20 to-rose-600/20',
    hoverGlow: '',
    darkHoverGlow: '',
  },
]


interface HeroSectionProps {
  interactive?: boolean
}

export function HeroSection({ interactive = true }: HeroSectionProps) {
  const navigate = useNavigate()
  const { userProfile } = useAuth()

  // Get user's first name
  const firstName = userProfile?.name?.split(' ')[0] || 'Student'

  return (
    <>
      {/* Hero Section - Premium Redesign */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 max-w-4xl mx-auto relative"
      >
        {/* Decorative gradient orbs - only visible in dark mode */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl opacity-0 dark:opacity-50 pointer-events-none" />
        <div className="absolute -top-10 -right-20 w-64 h-64 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-3xl opacity-0 dark:opacity-40 pointer-events-none" />

        {/* Personalized greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center justify-center gap-2 mb-4"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent via-primary/50 to-primary" />
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Welcome back, {firstName}
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent via-primary/50 to-primary" />
        </motion.div>

        {/* Main headline with gradient */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
          <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
            AI-assisted exam preparation
          </span>
          <br />
          <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
            for all medical students
          </span>
        </h1>

        {/* Subtitle */}
        <motion.p
          className="text-base lg:text-lg text-muted-foreground mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Consolidates study materials into interactive content to help you learn more effectively.
        </motion.p>

      </motion.div>

      {/* Subject cards grid - optimized layout for 5 items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {subjects.map((subject, index) => {
          // Make the 4th and 5th cards span differently for better balance
          const isLastRow = index >= 3
          const gridClass = isLastRow
            ? 'sm:col-span-1 lg:col-span-1'
            : ''

          return (
            <motion.div
              key={subject.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              className={`${gridClass} ${interactive && subject.enabled ? 'cursor-pointer' : 'cursor-default'} ${!interactive ? 'opacity-75' : subject.enabled ? '' : 'cursor-not-allowed'}`}
              onClick={() => interactive && subject.enabled && subject.path && navigate(subject.path)}
            >
              <Card3D enabled={interactive && subject.enabled}>
                <div className={`relative bg-card border border-border/50 rounded-xl overflow-hidden h-[260px] transition-all duration-300 group ${subject.hoverGlow} ${subject.darkHoverGlow} hover:border-border ${subject.enabled ? 'hover:scale-[1.02]' : ''} shadow-sm hover:shadow-lg dark:shadow-none`}>
                  {/* Background Image with zoom effect */}
                  {subject.image ? (
                    <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110">
                      <img
                        src={subject.image}
                        alt={subject.name}
                        className="w-full h-full object-cover"
                      />
                      {/* Gradient overlay for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    </div>
                  ) : (
                    <div className={`absolute inset-0 bg-gradient-to-br ${subject.color}`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20" />
                    </div>
                  )}

                  {/* Content overlay */}
                  <div className="relative z-10 h-full flex flex-col justify-end p-5">
                    {/* Coming Soon badge for disabled subjects */}
                    {!subject.enabled && (
                      <div className="absolute top-4 right-4">
                        <span className="text-xs font-semibold text-white bg-black/50 px-3 py-1.5 rounded-full border border-white/20 backdrop-blur-sm">
                          Coming Soon
                        </span>
                      </div>
                    )}

                    {/* Subject name and description */}
                    <div className="flex items-end justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-1.5 text-white drop-shadow-lg transition-colors duration-300 group-hover:text-white">
                          {subject.name}
                        </h3>
                        <p className="text-sm text-white/80 drop-shadow-md line-clamp-2">
                          {subject.description}
                        </p>
                      </div>

                      {/* Arrow CTA - only show for enabled subjects */}
                      {subject.enabled && (
                        <motion.div
                          className="ml-3 flex-shrink-0 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-white/20"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ArrowRight className="w-5 h-5 text-white" />
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* Subtle hover gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${subject.color} opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none`} />
                </div>
              </Card3D>
            </motion.div>
          )
        })}

        {/* 6th card - "More Coming" teaser */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="cursor-default"
        >
          <div className="relative h-[260px] rounded-xl overflow-hidden">
            {/* Background image */}
            <img
              src="/subjects/more-subjects.png"
              alt="More Subjects"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Content overlay */}
            <div className="relative z-10 h-full flex flex-col justify-end p-5">
              <h3 className="text-xl font-bold mb-1.5 text-white drop-shadow-lg">
                More Subjects
              </h3>
              <p className="text-sm text-white/80 drop-shadow-md">
                New content on the way
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}
