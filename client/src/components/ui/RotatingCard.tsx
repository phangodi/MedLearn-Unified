import { useState, useEffect } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

const cardContent = [
  {
    title: 'AI-Assisted Exam Preparation',
    description:
      'Bringing your learning materials together in one place to make exam prep easier. Interactive content designed to help you master medical concepts.',
    gradient: 'from-amber-500/20 to-orange-500/20',
  },
  {
    title: 'Physiology',
    description:
      '122 comprehensive topics with multiple study formats and audio playback. Perfect for mastering body functions and systems.',
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'Histology',
    description:
      '21 nervous system slides with staining tips, identification guides, and clinical notes. Master tissue microscopy.',
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    title: 'Anatomy',
    description:
      'Comprehensive neuroanatomy covering CNS and cranial nerves with detailed structures and clinical relationships.',
    gradient: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    title: 'Coming Soon',
    description:
      'More subjects and features are being added. Stay tuned for Pathology, Immunology, and advanced AI-powered study tools.',
    gradient: 'from-rose-500/20 to-pink-500/20',
  },
]

export function RotatingCard() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(mouseY, [-300, 300], [10, -10])
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10])

  useEffect(() => {
    const interval = setInterval(
      () => {
        if (!isHovered) {
          setCurrentIndex((prev) => (prev + 1) % cardContent.length)
        }
      },
      currentIndex === 0 ? 8000 : 4000
    )

    return () => clearInterval(interval)
  }, [currentIndex, isHovered])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      className="w-full max-w-[380px] lg:max-w-[420px] mx-auto cursor-pointer"
      style={{ perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative w-full"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <motion.div
          className="bg-card/50 border border-border/50 rounded-2xl overflow-hidden backdrop-blur-xl shadow-2xl hover:border-primary/50 hover:shadow-[0_25px_70px_rgba(var(--primary-rgb),0.3)] hover:bg-card/60 transition-all duration-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Gradient background instead of image */}
            <div className={`relative w-full h-[220px] lg:h-[250px] bg-gradient-to-br ${cardContent[currentIndex].gradient} flex items-center justify-center`}>
              <div className="text-6xl lg:text-7xl opacity-20">
                {currentIndex === 0 && '🤖'}
                {currentIndex === 1 && '🧠'}
                {currentIndex === 2 && '🔬'}
                {currentIndex === 3 && '🫀'}
                {currentIndex === 4 && '✨'}
              </div>
            </div>
            <div className="p-6 lg:p-8">
              <h3 className="text-xl lg:text-2xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {cardContent[currentIndex].title}
              </h3>
              <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
                {cardContent[currentIndex].description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
