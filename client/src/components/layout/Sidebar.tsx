import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Brain,
  Microscope,
  User,
  Sparkles,
  Users,
  ChevronDown,
  ChevronRight,
  Home,
  Settings,
  Menu,
  X,
  Activity
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { useNavigate, useLocation } from 'react-router-dom'

interface SidebarProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  isCollapsed: boolean
  setIsCollapsed: (collapsed: boolean) => void
}

export function Sidebar({ isOpen, setIsOpen, isCollapsed, setIsCollapsed }: SidebarProps) {
  const navigate = useNavigate()
  const location = useLocation()
  const [expandedSections, setExpandedSections] = useState<string[]>(['subjects', 'tools'])
  const [showExpandTooltip, setShowExpandTooltip] = useState(false)

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    )
  }

  const subjects = [
    { name: 'Physiology', icon: Brain, path: '/physiology' },
    { name: 'Histology', icon: Microscope, path: '/histology' },
    { name: 'Sociology', icon: Users, path: '/sociology' },
    { name: 'Anatomy', icon: User, path: '/anatomy' },
  ]

  const tools = [
    { name: 'AI Exam Prep', icon: Sparkles, path: '/ai-prep' },
    { name: 'Community', icon: Users, path: '/community' },
  ]

  // Memoize navigation content to prevent re-renders when tooltip state changes
  const navigationContent = useMemo(() => (
    <nav className="flex-1 overflow-y-auto p-3 space-y-0.5 min-h-0">
        {/* Dashboard */}
        <button
          onClick={() => navigate('/dashboard')}
          className={`w-full flex items-center space-x-2.5 px-3 py-2 rounded-lg transition-colors text-left ${
            location.pathname === '/dashboard'
              ? 'bg-gray-200 dark:bg-gray-700'
              : 'hover:bg-gray-100 dark:hover:bg-gray-800/50'
          }`}
        >
          <Home className={`w-4.5 h-4.5 ${
            location.pathname === '/dashboard'
              ? 'text-foreground'
              : 'text-gray-600 dark:text-gray-400'
          }`} />
          {!isCollapsed && (
            <span className={`text-sm ${
              location.pathname === '/dashboard'
                ? 'font-medium text-foreground'
                : 'text-gray-600 dark:text-gray-400'
            }`}>Dashboard</span>
          )}
        </button>

        {/* Subjects Section */}
        <div className="pt-4">
          <button
            onClick={() => toggleSection('subjects')}
            className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors text-left"
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

          <AnimatePresence initial={false}>
            {expandedSections.includes('subjects') && !isCollapsed && (
              <motion.div
                initial={false}
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
                        className="w-full flex items-center space-x-2.5 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors text-left group"
                      >
                        <Icon className="w-4.5 h-4.5 text-gray-600 dark:text-gray-400" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">{subject.name}</span>
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
                    className="w-full flex items-center justify-center px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors"
                    title={subject.name}
                  >
                    <Icon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
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
            className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors text-left"
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

          <AnimatePresence initial={false}>
            {expandedSections.includes('tools') && !isCollapsed && (
              <motion.div
                initial={false}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="space-y-1 pt-1">
                  {tools.map((tool) => {
                    const Icon = tool.icon
                    const isActive = location.pathname === tool.path
                    return (
                      <button
                        key={tool.name}
                        onClick={() => navigate(tool.path)}
                        className={`w-full flex items-center space-x-2.5 px-3 py-2 rounded-lg transition-colors text-left group ${
                          isActive
                            ? 'bg-gray-200 dark:bg-gray-700'
                            : 'hover:bg-gray-100 dark:hover:bg-gray-800/50'
                        }`}
                      >
                        <Icon className={`w-4.5 h-4.5 ${
                          isActive
                            ? 'text-foreground'
                            : 'text-gray-600 dark:text-gray-400'
                        }`} />
                        <span className={`text-sm ${
                          isActive ? 'font-medium text-foreground' : 'text-gray-600 dark:text-gray-400'
                        }`}>{tool.name}</span>
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
                const isActive = location.pathname === tool.path
                return (
                  <button
                    key={tool.name}
                    onClick={() => navigate(tool.path)}
                    className={`w-full flex items-center justify-center px-3 py-2 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-gray-200 dark:bg-gray-700'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-800/50'
                    }`}
                    title={tool.name}
                  >
                    <Icon className={`w-5 h-5 ${
                      isActive
                        ? 'text-foreground'
                        : 'text-gray-600 dark:text-gray-400'
                    }`} />
                  </button>
                )
              })}
            </div>
          )}
        </div>
      </nav>
  ), [location.pathname, expandedSections, isCollapsed, navigate])

  const SidebarContent = () => (
    <>
      {/* Header - EXACT same height as navbar */}
      <div className="px-4 h-[60px] border-b border-border/50 flex items-center justify-between">
        {!isCollapsed && (
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-md">
              <Activity className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-bold text-base bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Lara's MedLearn
            </span>
          </div>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsOpen(false)}
          className="lg:hidden"
        >
          <X className="w-4 h-4" />
        </Button>
      </div>

      {/* Navigation Content (Memoized) */}
      {navigationContent}

      {/* Footer - Aurora style - Always stick to bottom */}
      <div className="p-3 border-t border-border/50 mt-auto">
        <button className="w-full flex items-center space-x-2.5 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors text-left">
          <Settings className="w-4.5 h-4.5 text-gray-600 dark:text-gray-400" />
          {!isCollapsed && <span className="text-sm text-gray-600 dark:text-gray-400">Settings</span>}
        </button>
      </div>

      {/* Small hover marker for collapse/expand - Position OUTSIDE sidebar on the right edge */}
      <div
        className="hidden lg:flex absolute top-1/2 -translate-y-1/2 -right-3 w-6 h-16 items-center justify-center cursor-pointer z-20 group"
        onMouseEnter={() => setShowExpandTooltip(true)}
        onMouseLeave={() => setShowExpandTooltip(false)}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {/* Small visible marker line */}
        <div className="w-1 h-8 bg-border/40 group-hover:bg-border/80 transition-colors rounded-full" />

        {/* Tooltip */}
        <AnimatePresence>
          {showExpandTooltip && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.15 }}
              className="absolute right-8 bg-foreground text-background px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap shadow-lg"
            >
              {isCollapsed ? 'Expand' : 'Collapse'}
            </motion.div>
          )}
        </AnimatePresence>
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

      {/* Desktop Sidebar - clean card background, above diagonal borders */}
      <motion.aside
        animate={{ width: isCollapsed ? 80 : 288 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="hidden lg:flex lg:flex-col bg-card border-r border-border/50 z-10 relative h-screen sticky top-0"
      >
        <SidebarContent />
      </motion.aside>

      {/* Mobile Sidebar - clean card background, above diagonal borders */}
      <motion.aside
        initial={false}
        animate={{
          x: isOpen ? 0 : -288,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed left-0 top-0 h-full w-72 bg-card border-r border-border/50 z-50 lg:hidden flex flex-col"
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
