import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Brain,
  Microscope,
  Stethoscope,
  User,
  Sparkles,
  Users,
  ChevronDown,
  ChevronRight,
  Home,
  Settings,
  Menu,
  X
} from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface SidebarProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

export function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>(['subjects'])

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    )
  }

  const subjects = [
    { name: 'Physiology', icon: Brain, path: '/physiology', color: 'text-blue-500' },
    { name: 'Histology', icon: Microscope, path: '/histology', color: 'text-purple-500' },
    { name: 'Pathology', icon: Stethoscope, path: '/pathology', color: 'text-red-500' },
    { name: 'Anatomy', icon: User, path: '/anatomy', color: 'text-green-500' },
  ]

  const tools = [
    { name: 'AI Exam Prep', icon: Sparkles, path: '/ai-prep', color: 'text-amber-500' },
    { name: 'Community', icon: Users, path: '/community', color: 'text-teal-500' },
  ]

  return (
    <>
      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{
          x: isOpen ? 0 : -280,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed left-0 top-0 h-full w-72 bg-card border-r border-border z-50 lg:translate-x-0 lg:static flex flex-col"
      >
        {/* Header */}
        <div className="p-4 border-b border-border flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-white font-bold text-sm">L</span>
            </div>
            <span className="font-bold text-lg bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Lara's MedLearn
            </span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(false)}
            className="lg:hidden"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          {/* Dashboard */}
          <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors text-left">
            <Home className="w-5 h-5 text-muted-foreground" />
            <span className="text-sm font-medium">Dashboard</span>
          </button>

          {/* Subjects Section */}
          <div className="pt-4">
            <button
              onClick={() => toggleSection('subjects')}
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-accent transition-colors text-left"
            >
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Subjects
              </span>
              {expandedSections.includes('subjects') ? (
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              ) : (
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              )}
            </button>

            <AnimatePresence>
              {expandedSections.includes('subjects') && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-1 pt-1">
                    {subjects.map((subject) => {
                      const Icon = subject.icon
                      return (
                        <button
                          key={subject.name}
                          className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors text-left group"
                        >
                          <Icon className={`w-5 h-5 ${subject.color}`} />
                          <span className="text-sm">{subject.name}</span>
                        </button>
                      )
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Tools Section */}
          <div className="pt-4">
            <button
              onClick={() => toggleSection('tools')}
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-accent transition-colors text-left"
            >
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Tools
              </span>
              {expandedSections.includes('tools') ? (
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              ) : (
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              )}
            </button>

            <AnimatePresence>
              {expandedSections.includes('tools') && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-1 pt-1">
                    {tools.map((tool) => {
                      const Icon = tool.icon
                      return (
                        <button
                          key={tool.name}
                          className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors text-left group"
                        >
                          <Icon className={`w-5 h-5 ${tool.color}`} />
                          <span className="text-sm">{tool.name}</span>
                        </button>
                      )
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-border">
          <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors text-left">
            <Settings className="w-5 h-5 text-muted-foreground" />
            <span className="text-sm">Settings</span>
          </button>
        </div>
      </motion.aside>

      {/* Mobile menu button */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 z-30 lg:hidden"
      >
        <Menu className="w-4 h-4" />
      </Button>
    </>
  )
}
