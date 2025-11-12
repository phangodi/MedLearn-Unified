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
  X,
  ChevronLeft
} from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface SidebarProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

export function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)
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

  const SidebarContent = () => (
    <>
      {/* Header */}
      <div className="p-4 border-b border-border flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <span className="text-white font-bold text-sm">L</span>
          </div>
          {!isCollapsed && (
            <span className="font-bold text-lg bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Lara's MedLearn
            </span>
          )}
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
          {!isCollapsed && <span className="text-sm font-medium">Dashboard</span>}
        </button>

        {/* Subjects Section */}
        <div className="pt-4">
          <button
            onClick={() => toggleSection('subjects')}
            className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-accent transition-colors text-left"
          >
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              {!isCollapsed ? 'Subjects' : 'SUB'}
            </span>
            {!isCollapsed && (expandedSections.includes('subjects') ? (
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            ) : (
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            ))}
          </button>

          <AnimatePresence>
            {expandedSections.includes('subjects') && !isCollapsed && (
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

          {/* Collapsed view - show icons only */}
          {isCollapsed && (
            <div className="space-y-1 pt-1">
              {subjects.map((subject) => {
                const Icon = subject.icon
                return (
                  <button
                    key={subject.name}
                    className="w-full flex items-center justify-center px-3 py-2 rounded-lg hover:bg-accent transition-colors"
                    title={subject.name}
                  >
                    <Icon className={`w-5 h-5 ${subject.color}`} />
                  </button>
                )
              })}
            </div>
          )}
        </div>

        {/* Tools Section */}
        <div className="pt-4">
          <button
            onClick={() => toggleSection('tools')}
            className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-accent transition-colors text-left"
          >
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              {!isCollapsed ? 'Tools' : 'TOO'}
            </span>
            {!isCollapsed && (expandedSections.includes('tools') ? (
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            ) : (
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            ))}
          </button>

          <AnimatePresence>
            {expandedSections.includes('tools') && !isCollapsed && (
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

          {/* Collapsed view - show icons only */}
          {isCollapsed && (
            <div className="space-y-1 pt-1">
              {tools.map((tool) => {
                const Icon = tool.icon
                return (
                  <button
                    key={tool.name}
                    className="w-full flex items-center justify-center px-3 py-2 rounded-lg hover:bg-accent transition-colors"
                    title={tool.name}
                  >
                    <Icon className={`w-5 h-5 ${tool.color}`} />
                  </button>
                )
              })}
            </div>
          )}
        </div>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-border space-y-2">
        <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors text-left">
          <Settings className="w-5 h-5 text-muted-foreground" />
          {!isCollapsed && <span className="text-sm">Settings</span>}
        </button>

        {/* Collapse button - Desktop only */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="hidden lg:flex w-full items-center justify-center px-3 py-2 rounded-lg hover:bg-accent transition-colors"
        >
          <ChevronLeft className={`w-4 h-4 transition-transform ${isCollapsed ? 'rotate-180' : ''}`} />
        </button>
      </div>
    </>
  )

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

      {/* Desktop Sidebar - collapsible */}
      <motion.aside
        animate={{ width: isCollapsed ? 80 : 288 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="hidden lg:flex lg:flex-col bg-card border-r border-border"
      >
        <SidebarContent />
      </motion.aside>

      {/* Mobile Sidebar - slides in/out */}
      <motion.aside
        initial={false}
        animate={{
          x: isOpen ? 0 : -288,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed left-0 top-0 h-full w-72 bg-card border-r border-border z-50 lg:hidden flex flex-col"
      >
        <SidebarContent />
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
