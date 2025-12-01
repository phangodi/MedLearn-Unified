import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useParams, useNavigate } from 'react-router-dom'
import { Sidebar } from '@/components/layout/Sidebar'
import { Button } from '@/components/ui/Button'
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  FileText,
  BookOpen,
  List,
  ChevronDown,
} from 'lucide-react'
import { PathwayDiagram } from '../components/PathwayDiagram'
import { essays } from '../data/essays'

export function EssayPage() {
  const { essayId } = useParams<{ essayId: string }>()
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  // Initialize from localStorage so sidebar doesn't animate on mount
  const [sidebarCollapsed, setSidebarCollapsed] = useState(() => {
    return localStorage.getItem('sidebarCollapsed') === 'true'
  })
  const [showTableOfContents, setShowTableOfContents] = useState(false)
  const topRef = useRef<HTMLDivElement>(null)

  const essay = essays[Number(essayId)]

  // Scroll to top when essayId changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [essayId])

  // If essay not found, redirect to hub
  useEffect(() => {
    if (!essay) {
      navigate('/electives/body-development')
    }
  }, [essay, navigate])

  const handleBack = () => {
    navigate('/electives/body-development')
  }

  const handlePrevious = () => {
    const prevId = Number(essayId) - 1
    if (prevId >= 1) {
      navigate(`/electives/body-development/essay/${prevId}`)
    }
  }

  const handleNext = () => {
    const nextId = Number(essayId) + 1
    if (nextId <= 22) {
      navigate(`/electives/body-development/essay/${nextId}`)
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
      {/* Aurora Gradient Background - balanced intensity */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{
            opacity: [0.5, 0.75, 0.5],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-1/2 -left-1/4 w-[900px] h-[900px] rounded-full
                     bg-gradient-to-br from-rose-300/55 via-pink-300/40 to-transparent
                     dark:from-rose-500/45 dark:via-pink-500/28 dark:to-transparent
                     blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.4, 0.6, 0.4],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute -bottom-1/2 -right-1/4 w-[1000px] h-[1000px] rounded-full
                     bg-gradient-to-tl from-rose-400/50 via-pink-400/35 to-transparent
                     dark:from-rose-600/38 dark:via-pink-600/25 dark:to-transparent
                     blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.45, 0.65, 0.45],
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
                     bg-gradient-to-br from-pink-300/45 via-rose-300/35 to-transparent
                     dark:from-pink-500/35 dark:via-rose-500/25 dark:to-transparent
                     blur-3xl"
        />
      </div>

      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} isCollapsed={sidebarCollapsed} setIsCollapsed={setSidebarCollapsed} />

      <div className="flex-1 flex flex-col relative z-10">
        {/* Main Content */}
        <main className="flex-1 w-full mx-auto px-6 lg:px-10 py-8 relative z-10 max-w-5xl">
          {/* Scroll anchor - focusable to prevent scroll issues */}
          <div ref={topRef} tabIndex={-1} style={{ outline: 'none' }} />

          {/* Back Button */}
          <div className="mb-6">
            <Button variant="ghost" size="sm" onClick={handleBack}>
              <ArrowLeft className="w-4 h-4 mr-1.5" />
              Back to Hub
            </Button>
          </div>

          {/* Essay Header */}
          <div className="mb-8">
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
          </div>

          {/* Table of Contents Toggle (Mobile) */}
          <div className="mb-6 lg:hidden">
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

            {showTableOfContents && (
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
            )}
          </div>

          {/* Essay Content Card */}
          <article
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
                        .replace(/\*([^*]+)\*/g, '<em>$1</em>')
                        .replace(/\n\n(\d+)\. /g, '<br/><br/>$1. ')
                        .replace(/\n\n• /g, '<br/><br/>• ')
                        .replace(/\n\n/g, '<br/><br/>')
                        .replace(/\n(\d+)\. /g, '<br/>$1. ')
                        .replace(/\n• /g, '<br/>• ')
                    }}
                  />
                )}

                {/* Diagram - placed before subsections as visual introduction */}
                {section.diagram && <PathwayDiagram diagram={section.diagram} />}

                {/* Subsections */}
                {section.subsections?.map((subsection, subIndex) => (
                  <div key={subIndex} className="mt-6">
                    <h3 className="text-xl lg:text-2xl font-semibold mb-3 text-foreground">
                      {subsection.title}
                    </h3>

                    {/* Bullet List */}
                    {subsection.bullets && (
                      <div className="space-y-2">
                        {subsection.bullets.map((bullet, bulletIndex) => {
                          // Check if this is a label (starts with **Label**: and has no content after)
                          const isLabel = /^\*\*[^*]+\*\*:?\s*$/.test(bullet)

                          if (isLabel) {
                            // Render as a styled label without bullet
                            return (
                              <p
                                key={bulletIndex}
                                className="text-base lg:text-lg font-semibold text-rose-600 dark:text-rose-400 mt-4 first:mt-0"
                                dangerouslySetInnerHTML={{ __html: bullet.replace(/\*\*(.*?)\*\*/g, '$1') }}
                              />
                            )
                          }

                          // Render as regular bullet
                          return (
                            <p
                              key={bulletIndex}
                              className="text-base lg:text-lg leading-relaxed text-foreground/90
                                         relative ml-6 before:content-['•'] before:absolute before:-left-6
                                         before:text-rose-500 before:font-bold before:text-xl"
                            >
                              <span dangerouslySetInnerHTML={{ __html: bullet.replace(/\*\*(.*?)\*\*/g, '<strong class="text-rose-600 dark:text-rose-400">$1</strong>') }} />
                            </p>
                          )
                        })}
                      </div>
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

                {/* Section-level Bullets (for non-clinical sections) */}
                {section.type !== 'clinical' && section.bullets && (
                  <div className="space-y-2 mt-4">
                    {section.bullets.map((bullet, bulletIndex) => {
                      // Check if this is a label (starts with **Label**: and has no content after)
                      const isLabel = /^\*\*[^*]+\*\*:?\s*$/.test(bullet)

                      if (isLabel) {
                        // Render as a styled label without bullet
                        return (
                          <p
                            key={bulletIndex}
                            className="text-base lg:text-lg font-semibold text-rose-600 dark:text-rose-400 mt-4 first:mt-0"
                            dangerouslySetInnerHTML={{ __html: bullet.replace(/\*\*(.*?)\*\*/g, '$1') }}
                          />
                        )
                      }

                      // Render as regular bullet
                      return (
                        <p
                          key={bulletIndex}
                          className="text-base lg:text-lg leading-relaxed text-foreground/90
                                     relative ml-6 before:content-['•'] before:absolute before:-left-6
                                     before:text-rose-500 before:font-bold before:text-xl"
                        >
                          <span dangerouslySetInnerHTML={{ __html: bullet.replace(/\*\*(.*?)\*\*/g, '<strong class="text-rose-600 dark:text-rose-400">$1</strong>') }} />
                        </p>
                      )
                    })}
                  </div>
                )}

                {/* Section-level Numbered List (for non-clinical sections) */}
                {section.type !== 'clinical' && section.numbered && (
                  <ol className="space-y-2 ml-6 mt-4 list-decimal list-outside">
                    {section.numbered.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="text-base lg:text-lg leading-relaxed text-foreground/90 pl-2"
                      >
                        <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-rose-600 dark:text-rose-400">$1</strong>') }} />
                      </li>
                    ))}
                  </ol>
                )}

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

                {/* Clinical Bullets (with styling) */}
                {section.type === 'clinical' && section.bullets && (
                  <div className="mt-4 p-6 rounded-lg bg-rose-50 dark:bg-rose-950/20 border-l-4 border-rose-500">
                    <div className="space-y-3">
                      {section.bullets.map((bullet, bulletIndex) => {
                        // Check if this is a label (starts with **Label**: and has no content after)
                        const isLabel = /^\*\*[^*]+\*\*:?\s*$/.test(bullet)

                        if (isLabel) {
                          return (
                            <p
                              key={bulletIndex}
                              className="text-base lg:text-lg font-semibold text-rose-600 dark:text-rose-400 mt-4 first:mt-0"
                              dangerouslySetInnerHTML={{ __html: bullet.replace(/\*\*(.*?)\*\*/g, '$1') }}
                            />
                          )
                        }

                        return (
                          <p
                            key={bulletIndex}
                            className="text-base lg:text-lg leading-relaxed text-foreground/90
                                       relative pl-6 before:content-['▸'] before:absolute before:left-0
                                       before:text-rose-500 before:font-bold before:text-xl"
                          >
                            <span dangerouslySetInnerHTML={{ __html: bullet.replace(/\*\*(.*?)\*\*/g, '<strong class="text-rose-600 dark:text-rose-400">$1</strong>') }} />
                          </p>
                        )
                      })}
                    </div>
                  </div>
                )}

                {/* Clinical Numbered List (with styling) */}
                {section.type === 'clinical' && section.numbered && (
                  <div className="mt-4 p-6 rounded-lg bg-rose-50 dark:bg-rose-950/20 border-l-4 border-rose-500">
                    <ol className="space-y-3 list-decimal list-inside">
                      {section.numbered.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="text-base lg:text-lg leading-relaxed text-foreground/90 marker:text-rose-500 marker:font-bold"
                        >
                          <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-rose-600 dark:text-rose-400">$1</strong>') }} />
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </section>
            ))}
          </article>

          {/* Navigation Footer - no animation to prevent scroll issues */}
          <div
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
          </div>
        </main>
      </div>
    </div>
  )
}
