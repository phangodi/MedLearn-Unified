import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useParams, useNavigate } from 'react-router-dom'
import { Sidebar } from '@/components/layout/Sidebar'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { Button } from '@/components/ui/Button'
import {
  LogOut,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  FileText,
  BookOpen,
  List,
  ChevronDown,
} from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'
import { PathwayDiagram } from '../components/PathwayDiagram'
import { essays } from '../data/essays'

export function EssayPage() {
  const { essayId } = useParams<{ essayId: string }>()
  const navigate = useNavigate()
  const { signOut } = useAuth()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [showTableOfContents, setShowTableOfContents] = useState(false)

  // Auto-COLLAPSE sidebar on body development pages (more room for content)
  useEffect(() => {
    setSidebarCollapsed(true)
    localStorage.setItem('sidebarCollapsed', 'true')
  }, [])

  const essay = essays[Number(essayId)]

  // If essay not found, redirect to hub
  useEffect(() => {
    if (!essay) {
      navigate('/electives/body-development')
    }
  }, [essay, navigate])

  const handleLogout = async () => {
    await signOut()
    navigate('/login')
  }

  const handleBack = () => {
    navigate('/electives/body-development')
  }

  const handlePrevious = () => {
    const prevId = Number(essayId) - 1
    if (prevId >= 1) {
      navigate(`/electives/body-development/essay/${prevId}`)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleNext = () => {
    const nextId = Number(essayId) + 1
    if (nextId <= 22) {
      navigate(`/electives/body-development/essay/${nextId}`)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleReferenceClick = () => {
    navigate('/electives/body-development/reference')
  }

  const scrollToSection = (index: number) => {
    const element = document.getElementById(`section-${index}`)
    if (element) {
      const offset = 80 // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
      setShowTableOfContents(false)
    }
  }

  if (!essay) return null

  return (
    <div className="min-h-screen bg-background flex">
      {/* Medium Intensity Aurora Gradient Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{
            opacity: [0.25, 0.4, 0.25],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-1/3 -left-1/4 w-[700px] h-[700px] rounded-full
                     bg-gradient-to-br from-rose-300/35 via-pink-300/22 to-transparent
                     dark:from-rose-500/25 dark:via-pink-500/15 dark:to-transparent
                     blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.2, 0.35, 0.2],
            scale: [1.05, 1, 1.05],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute -bottom-1/3 -right-1/4 w-[800px] h-[800px] rounded-full
                     bg-gradient-to-tl from-rose-400/32 via-pink-400/18 to-transparent
                     dark:from-rose-600/20 dark:via-pink-600/12 dark:to-transparent
                     blur-3xl"
        />
      </div>

      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} isCollapsed={sidebarCollapsed} setIsCollapsed={setSidebarCollapsed} />

      <div className="flex-1 flex flex-col relative z-10">
        {/* Header */}
        <header className="sticky top-0 z-30 bg-card/95 backdrop-blur-sm border-b border-border/50 h-[60px]">
          <div className="px-6 lg:px-10 h-full flex items-center justify-between">
            {/* Back Button */}
            <Button variant="ghost" size="sm" onClick={handleBack}>
              <ArrowLeft className="w-4 h-4 mr-1.5" />
              <span className="hidden sm:inline text-sm">Back to Hub</span>
            </Button>

            <div className="flex items-center gap-1.5">
              <ThemeToggle />
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-1.5" />
                <span className="hidden sm:inline text-sm">Logout</span>
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 w-full mx-auto px-6 lg:px-10 py-8 relative z-10 max-w-5xl">
          {/* Essay Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            {/* Category Badge + Question Number */}
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1.5 text-xs font-semibold rounded-full
                             bg-rose-100 text-rose-700
                             dark:bg-rose-950/40 dark:text-rose-300
                             border border-rose-200/50 dark:border-rose-800/30">
                {essay.category}
              </span>
              <span className="text-sm text-muted-foreground">Question #{essay.id}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-3
                           bg-gradient-to-r from-rose-600 via-pink-500 to-rose-500
                           dark:from-rose-400 dark:via-pink-400 dark:to-rose-400
                           bg-clip-text text-transparent">
              {essay.title}
            </h1>

            {/* Subtitle */}
            <p className="text-lg lg:text-xl text-muted-foreground mb-4">
              {essay.subtitle}
            </p>

            {/* Reference */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <BookOpen className="w-4 h-4 text-rose-500" />
              <span>Reference: {essay.reference}</span>
            </div>
          </motion.div>

          {/* Table of Contents Toggle (Mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 lg:hidden"
          >
            <button
              onClick={() => setShowTableOfContents(!showTableOfContents)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-lg
                         bg-card border border-border/50 hover:border-rose-400/60
                         dark:hover:border-rose-500/40 transition-all duration-200"
            >
              <div className="flex items-center gap-2">
                <List className="w-4 h-4 text-rose-500" />
                <span className="font-medium text-sm">Table of Contents</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${
                  showTableOfContents ? 'rotate-180' : ''
                }`}
              />
            </button>

            <AnimatePresence>
              {showTableOfContents && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="mt-2 p-4 rounded-lg bg-card border border-border/50">
                    {essay.sections.map((section, index) => (
                      <button
                        key={index}
                        onClick={() => scrollToSection(index)}
                        className="block w-full text-left px-3 py-2 rounded-md text-sm
                                   hover:bg-rose-50 dark:hover:bg-rose-950/20
                                   hover:text-rose-600 dark:hover:text-rose-400
                                   transition-colors duration-200"
                      >
                        {section.title}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Essay Content Card */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-[#1A1F3A] rounded-xl shadow-lg border border-border/50 p-8 lg:p-12 mb-8"
          >
            {essay.sections.map((section, index) => (
              <section key={index} id={`section-${index}`} className={index > 0 ? 'mt-12' : ''}>
                {/* Section Title */}
                <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground
                               border-b-2 border-rose-500/50 pb-2">
                  {section.title}
                </h2>

                {/* Section Content */}
                {section.content && (
                  <div
                    className="text-base lg:text-lg leading-relaxed text-foreground/90 mb-6 prose prose-lg max-w-none
                               prose-strong:text-rose-600 dark:prose-strong:text-rose-400
                               prose-p:mb-4 prose-ul:my-4 prose-ul:space-y-2"
                    dangerouslySetInnerHTML={{
                      __html: section.content
                        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-rose-600 dark:text-rose-400">$1</strong>')
                        .replace(/\n\n/g, '<br/><br/>')
                        .replace(/• /g, '<br/>• ')
                    }}
                  />
                )}

                {/* Subsections */}
                {section.subsections?.map((subsection, subIndex) => (
                  <div key={subIndex} className="mt-6">
                    <h3 className="text-xl lg:text-2xl font-semibold mb-3 text-foreground">
                      {subsection.title}
                    </h3>

                    {/* Bullet List */}
                    {subsection.bullets && (
                      <ul className="space-y-2 ml-6">
                        {subsection.bullets.map((bullet, bulletIndex) => (
                          <li
                            key={bulletIndex}
                            className="text-base lg:text-lg leading-relaxed text-foreground/90
                                       relative before:content-['•'] before:absolute before:-left-6
                                       before:text-rose-500 before:font-bold before:text-xl"
                          >
                            <span dangerouslySetInnerHTML={{ __html: bullet.replace(/\*\*(.*?)\*\*/g, '<strong class="text-rose-600 dark:text-rose-400">$1</strong>') }} />
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Numbered List */}
                    {subsection.numbered && (
                      <ol className="space-y-2 ml-6 list-decimal list-outside">
                        {subsection.numbered.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="text-base lg:text-lg leading-relaxed text-foreground/90 pl-2"
                          >
                            <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-rose-600 dark:text-rose-400">$1</strong>') }} />
                          </li>
                        ))}
                      </ol>
                    )}
                  </div>
                ))}

                {/* Table */}
                {section.table && (
                  <div className="overflow-x-auto mt-6">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gradient-to-r from-rose-100 to-pink-100
                                       dark:from-rose-950/40 dark:to-pink-950/40
                                       border-b-2 border-rose-500">
                          {section.table.headers.map((header, headerIndex) => (
                            <th
                              key={headerIndex}
                              className="px-4 py-3 text-left text-sm font-bold text-rose-700
                                         dark:text-rose-300 uppercase tracking-wider"
                            >
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row, rowIndex) => (
                          <tr
                            key={rowIndex}
                            className={`border-b border-border/30 ${
                              rowIndex % 2 === 0
                                ? 'bg-card'
                                : 'bg-muted/30'
                            }`}
                          >
                            {row.map((cell, cellIndex) => (
                              <td
                                key={cellIndex}
                                className="px-4 py-3 text-base text-foreground/90"
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Diagram */}
                {section.diagram && <PathwayDiagram diagram={section.diagram} />}

                {/* Clinical Bullets (with styling) */}
                {section.type === 'clinical' && section.bullets && (
                  <div className="mt-4 p-6 rounded-lg bg-rose-50 dark:bg-rose-950/20 border-l-4 border-rose-500">
                    <ul className="space-y-3">
                      {section.bullets.map((bullet, bulletIndex) => (
                        <li
                          key={bulletIndex}
                          className="text-base lg:text-lg leading-relaxed text-foreground/90
                                     relative pl-6 before:content-['▸'] before:absolute before:left-0
                                     before:text-rose-500 before:font-bold before:text-xl"
                        >
                          <span dangerouslySetInnerHTML={{ __html: bullet.replace(/\*\*(.*?)\*\*/g, '<strong class="text-rose-600 dark:text-rose-400">$1</strong>') }} />
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            ))}
          </motion.article>

          {/* Navigation Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8"
          >
            {/* Previous Button */}
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={Number(essayId) === 1}
              className="w-full sm:w-auto group"
            >
              <ChevronLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
              Previous Essay
            </Button>

            {/* Reference Link */}
            <button
              onClick={handleReferenceClick}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg
                         bg-gradient-to-r from-rose-100 to-pink-100
                         dark:from-rose-950/40 dark:to-pink-950/40
                         border border-rose-200/50 dark:border-rose-800/30
                         text-rose-700 dark:text-rose-300 font-medium text-sm
                         hover:from-rose-200 hover:to-pink-200
                         dark:hover:from-rose-900/50 dark:hover:to-pink-900/50
                         hover:scale-105 active:scale-95
                         transition-all duration-200"
            >
              <FileText className="w-4 h-4" />
              Summary Tables & Abbreviations
            </button>

            {/* Next Button */}
            <Button
              variant="outline"
              onClick={handleNext}
              disabled={Number(essayId) === 22}
              className="w-full sm:w-auto group"
            >
              Next Essay
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </motion.div>
        </main>
      </div>
    </div>
  )
}
