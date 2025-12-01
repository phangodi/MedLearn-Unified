import { useState, useLayoutEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Sidebar } from '@/components/layout/Sidebar'
import { EssayCard } from '../components/EssayCard'
import { Dna, FileText, ChevronRight } from 'lucide-react'

// Essay data - expandable to full 22 questions
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
      {/* Aurora Gradient Background - Unique Organic Effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Animated Gradient Mesh */}
        <motion.div
          animate={{
            opacity: [0.4, 0.65, 0.4],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-1/2 -left-1/4 w-[900px] h-[900px] rounded-full
                     bg-gradient-to-br from-rose-300/45 via-pink-300/30 to-transparent
                     dark:from-rose-500/35 dark:via-pink-500/20 dark:to-transparent
                     blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute -bottom-1/2 -right-1/4 w-[1000px] h-[1000px] rounded-full
                     bg-gradient-to-tl from-rose-400/40 via-pink-400/25 to-transparent
                     dark:from-rose-600/28 dark:via-pink-600/18 dark:to-transparent
                     blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.35, 0.5, 0.35],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute top-1/3 right-1/3 w-[700px] h-[700px] rounded-full
                     bg-gradient-to-br from-pink-300/35 via-rose-300/25 to-transparent
                     dark:from-pink-500/25 dark:via-rose-500/18 dark:to-transparent
                     blur-3xl"
        />
      </div>

      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} isCollapsed={sidebarCollapsed} setIsCollapsed={setSidebarCollapsed} />

      <div className="flex-1 flex flex-col relative z-10">
        {/* Main Content */}
        <main className="flex-1 w-full mx-auto px-6 lg:px-10 py-8 relative z-10 max-w-7xl">
          {/* PREMIUM HERO SECTION */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative mb-16"
          >
            {/* Hero Container - Increased Height for Impact */}
            <div className="relative min-h-[500px] flex items-center justify-center">


              {/* Main Content - Layered Above Helix */}
              <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

                {/* DNA Icon - Artistic Placement */}
                <motion.div
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                  className="relative mb-6 inline-block"
                >
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 rounded-full
                               bg-gradient-to-tr from-rose-400/30 via-pink-400/30 to-rose-400/30
                               dark:from-rose-500/40 dark:via-pink-500/40 dark:to-rose-500/40
                               blur-2xl scale-150"
                  />
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative w-20 h-20 rounded-full
                               bg-gradient-to-br from-rose-500 via-pink-500 to-rose-600
                               dark:from-rose-400 dark:via-pink-400 dark:to-rose-500
                               flex items-center justify-center
                               shadow-lg shadow-rose-500/50 dark:shadow-rose-500/60"
                  >
                    <Dna className="w-11 h-11 text-white drop-shadow-lg" />
                  </motion.div>
                </motion.div>

                {/* Title - Sophisticated Typography */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="relative mb-4"
                >
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight
                                 tracking-tight">
                    <span className="block bg-gradient-to-r from-rose-600 via-pink-500 to-rose-600
                                     dark:from-rose-400 dark:via-pink-400 dark:to-rose-400
                                     bg-clip-text text-transparent
                                     drop-shadow-sm">
                      Body Development
                    </span>
                    <span className="block text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mt-2
                                     bg-gradient-to-r from-rose-500 via-pink-600 to-rose-500
                                     dark:from-rose-300 dark:via-pink-300 dark:to-rose-300
                                     bg-clip-text text-transparent">
                      & Diseases
                    </span>
                  </h1>

                  {/* Decorative Underline */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="mx-auto mt-4 w-32 h-1 rounded-full
                               bg-gradient-to-r from-transparent via-rose-400 to-transparent
                               dark:via-rose-500"
                  />
                </motion.div>

                {/* Subtitle - Enhanced Spacing */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="relative text-lg sm:text-xl lg:text-2xl font-medium mb-8
                             text-slate-700 dark:text-slate-300"
                >
                  Molecular Background of Diseases & Embryology
                </motion.p>

                {/* Reference Button - Premium Styling */}
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  onClick={handleReferenceClick}
                  className="relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl
                             bg-gradient-to-r from-rose-500 via-pink-500 to-rose-500
                             dark:from-rose-600 dark:via-pink-600 dark:to-rose-600
                             text-white font-semibold text-base
                             shadow-lg shadow-rose-500/30 dark:shadow-rose-500/40
                             hover:shadow-xl hover:shadow-rose-500/40 dark:hover:shadow-rose-500/50
                             hover:scale-105 active:scale-95
                             transition-all duration-300 group
                             overflow-hidden"
                >
                  {/* Button Shine Effect */}
                  <motion.div
                    animate={{
                      x: ['-200%', '200%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/25 to-transparent
                               skew-x-12"
                  />

                  <FileText className="relative w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="relative">Reference: Summary Tables & Abbreviations</span>
                  <ChevronRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </div>
            </div>

          </motion.div>

          {/* Essay Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto w-full">
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

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 text-center"
          >
            <p className="text-sm text-muted-foreground">
              22 essay questions covering embryology, molecular biology, and disease mechanisms
            </p>
          </motion.div>
        </main>
      </div>
    </div>
  )
}
