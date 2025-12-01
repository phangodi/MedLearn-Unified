import { useState, useLayoutEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Sidebar } from '@/components/layout/Sidebar'
import { EssayCard } from '../components/EssayCard'
import { Dna, FileText, ChevronRight } from 'lucide-react'

// Essay data - all 22 questions
const essays = [
  { id: 1, title: 'Dorso-Ventral Axis Development', subtitle: 'Wnt Signaling Pathway & Organizer Formation', category: 'Embryology' },
  { id: 2, title: 'Situs Inversus & Kartagener Syndrome', subtitle: 'Molecular Background & Clinical Manifestations', category: 'Genetic Disorders' },
  { id: 3, title: 'Role of Glutathione in Embryogenesis', subtitle: 'Antioxidant Functions & Developmental Impact', category: 'Biochemistry' },
  { id: 4, title: 'Notochord Development', subtitle: 'Molecular Mechanisms & Signaling', category: 'Embryology' },
  { id: 5, title: 'Hox Genes in Body Patterning', subtitle: 'Spatial Organization & Expression', category: 'Molecular Biology' },
  { id: 6, title: 'Apoptosis in Development', subtitle: 'Programmed Cell Death Pathways', category: 'Cell Biology' },
  { id: 7, title: 'Neural Crest Cell Migration', subtitle: 'Molecular Control & Derivatives', category: 'Embryology' },
  { id: 8, title: 'Sonic Hedgehog Signaling', subtitle: 'Development & Disease', category: 'Molecular Biology' },
  { id: 9, title: 'Cell Cycle Regulation', subtitle: 'Checkpoints & Cancer', category: 'Cell Biology' },
  { id: 10, title: 'Teratogens & Embryonic Development', subtitle: 'Molecular Mechanisms of Birth Defects', category: 'Embryology' },
  { id: 11, title: 'Stem Cell Differentiation', subtitle: 'Signaling Pathways & Transcription Factors', category: 'Cell Biology' },
  { id: 12, title: 'Angiogenesis in Development', subtitle: 'VEGF Signaling & Vascular Formation', category: 'Molecular Biology' },
  { id: 13, title: 'Limb Development', subtitle: 'Zone of Polarizing Activity & Pattern Formation', category: 'Embryology' },
  { id: 14, title: 'P53 Tumor Suppressor', subtitle: 'Guardian of the Genome', category: 'Oncology' },
  { id: 15, title: 'Epigenetic Modifications', subtitle: 'DNA Methylation & Histone Acetylation', category: 'Molecular Biology' },
  { id: 16, title: 'Congenital Heart Defects', subtitle: 'Molecular Etiology & Development', category: 'Genetic Disorders' },
  { id: 17, title: 'Growth Factor Signaling', subtitle: 'RTK Pathways in Development', category: 'Molecular Biology' },
  { id: 18, title: 'Cellular Senescence', subtitle: 'Aging & Cancer Prevention', category: 'Cell Biology' },
  { id: 19, title: 'Thalassemias', subtitle: 'Molecular Characterization & Hemoglobin Disorders', category: 'Blood Disorders' },
  { id: 20, title: 'Stem Cells', subtitle: 'Types, Characterization & Therapeutic Potential', category: 'Cell Biology' },
  { id: 21, title: 'Cancer Cell Identity', subtitle: 'Hallmarks of Cancer & Diagnostic Criteria', category: 'Oncology' },
  { id: 22, title: 'VHL Syndrome', subtitle: 'Von Hippel-Lindau Molecular Background', category: 'Genetic Disorders' },
]

export function HubPage() {
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Initialize from localStorage - sidebar should already be collapsed, no animation needed
  const [sidebarCollapsed, setSidebarCollapsed] = useState(() => {
    // Set to true and save to localStorage (collapsed by default for body development)
    localStorage.setItem('sidebarCollapsed', 'true')
    return true
  })

  // Scroll to top on mount
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [])

  const handleEssayClick = (essayId: number) => {
    navigate(`/electives/body-development/essay/${essayId}`)
  }

  const handleReferenceClick = () => {
    navigate('/electives/body-development/reference')
  }

  return (
    <div className="min-h-screen bg-background flex">
      {/* Enhanced Background with Floating Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Main gradient orbs - all rose/pink themed */}
        <motion.div
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-1/2 -left-1/4 w-[1000px] h-[1000px] rounded-full
                     bg-gradient-to-br from-rose-400/30 via-pink-400/20 to-transparent
                     dark:from-rose-500/25 dark:via-pink-500/15 dark:to-transparent
                     blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.25, 0.4, 0.25],
            scale: [1.1, 0.9, 1.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute -bottom-1/2 -right-1/4 w-[1100px] h-[1100px] rounded-full
                     bg-gradient-to-tl from-rose-400/25 via-pink-400/15 to-transparent
                     dark:from-rose-600/20 dark:via-pink-600/12 dark:to-transparent
                     blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.3, 0.45, 0.3],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute top-1/3 left-1/2 w-[800px] h-[800px] rounded-full
                     bg-gradient-to-br from-pink-400/20 via-rose-400/15 to-transparent
                     dark:from-pink-500/18 dark:via-rose-500/12 dark:to-transparent
                     blur-3xl"
        />

        {/* Floating DNA helix particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(i) * 20, 0],
              opacity: [0.2, 0.5, 0.2],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8 + i * 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.8,
            }}
            className="absolute"
            style={{
              top: `${20 + i * 10}%`,
              left: `${10 + i * 11}%`,
            }}
          >
            <Dna
              className="w-8 h-8 text-rose-500/30 dark:text-rose-400/20"
              strokeWidth={1.5}
            />
          </motion.div>
        ))}
      </div>

      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} isCollapsed={sidebarCollapsed} setIsCollapsed={setSidebarCollapsed} />

      <div className="flex-1 flex flex-col relative z-10">
        {/* Main Content */}
        <main className="flex-1 w-full mx-auto px-4 sm:px-6 lg:px-10 py-8 relative z-10 max-w-7xl">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12 max-w-4xl mx-auto"
          >
            {/* Animated Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 15,
                delay: 0.2
              }}
              className="flex justify-center mb-6"
            >
              <div className="relative">
                {/* Pulsing glow */}
                <motion.div
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full blur-xl"
                />
                <div className="relative bg-gradient-to-br from-rose-500 to-pink-600 p-6 rounded-2xl shadow-2xl">
                  <Dna className="w-16 h-16 text-white" strokeWidth={2} />
                </div>
              </div>
            </motion.div>

            {/* Title with animated gradient */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4"
            >
              <span className="bg-gradient-to-r from-rose-600 via-pink-500 to-rose-500
                             dark:from-rose-400 dark:via-pink-400 dark:to-rose-400
                             bg-clip-text text-transparent">
                Body Development & Diseases
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              Molecular Background of Diseases & Embryology
            </motion.p>

            {/* Reference Link - Enhanced */}
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              onClick={handleReferenceClick}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                         bg-gradient-to-r from-rose-50 to-pink-50
                         dark:from-rose-950/40 dark:to-pink-950/40
                         border-2 border-rose-200/50 dark:border-rose-800/30
                         text-rose-700 dark:text-rose-300 font-semibold text-sm
                         hover:from-rose-100 hover:to-pink-100
                         dark:hover:from-rose-900/60 dark:hover:to-pink-900/60
                         hover:scale-105 active:scale-95
                         hover:shadow-[0_0_30px_rgba(244,63,94,0.4)]
                         dark:hover:shadow-[0_0_30px_rgba(244,63,94,0.3)]
                         transition-all duration-300 group backdrop-blur-sm"
            >
              <FileText className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              Reference: Summary Tables & Abbreviations
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </motion.div>

          {/* Essay Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto w-full">
            {essays.map((essay, index) => (
              <EssayCard
                key={essay.id}
                id={essay.id}
                title={essay.title}
                subtitle={essay.subtitle}
                category={essay.category}
                onClick={() => handleEssayClick(essay.id)}
                index={index}
              />
            ))}
          </div>

          {/* Stats Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-6 px-8 py-4 rounded-2xl
                          bg-card/50 backdrop-blur-sm border border-border/50
                          shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-rose-600 to-pink-600
                              dark:from-rose-400 dark:to-pink-400 bg-clip-text text-transparent">
                  22
                </div>
                <div className="text-xs text-muted-foreground font-medium mt-1">
                  Total Essays
                </div>
              </div>
              <div className="w-px h-12 bg-border/50" />
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-rose-600 to-pink-600
                              dark:from-rose-400 dark:to-pink-400 bg-clip-text text-transparent">
                  7
                </div>
                <div className="text-xs text-muted-foreground font-medium mt-1">
                  Categories
                </div>
              </div>
              <div className="w-px h-12 bg-border/50" />
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-rose-600 to-pink-600
                              dark:from-rose-400 dark:to-pink-400 bg-clip-text text-transparent">
                  100%
                </div>
                <div className="text-xs text-muted-foreground font-medium mt-1">
                  Coverage
                </div>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  )
}
