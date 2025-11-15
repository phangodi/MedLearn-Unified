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

  // Navigation content
  const navigationContent = useMemo(() => (
    <nav className="flex-1 overflow-y-auto p-3 space-y-0.5 min-h-0">
      <style>{`
        /* Light mode colors */
        .sidebar-item {
          color: rgb(107, 114, 128); /* gray-500 - lighter for unselected */
          transition: all 0.2s;
        }
        .sidebar-item:hover {
          background-color: rgb(243, 244, 246); /* gray-100 - more visible */
          color: rgb(0, 0, 0);
        }
        .sidebar-item.active {
          background-color: rgb(229, 231, 235); /* gray-200 */
          color: rgb(0, 0, 0);
          font-weight: 600;
        }
        .sidebar-icon {
          color: rgb(107, 114, 128); /* gray-500 - lighter for unselected */
          transition: all 0.2s;
        }
        .sidebar-item:hover .sidebar-icon {
          color: rgb(0, 0, 0);
        }
        .sidebar-item.active .sidebar-icon {
          color: rgb(0, 0, 0);
        }
        .sidebar-header {
          color: rgb(0, 0, 0);
          font-weight: 700;
        }
        .sidebar-header:hover {
          background-color: rgb(243, 244, 246); /* gray-100 - lighter like items */
        }
        .sidebar-header .sidebar-icon {
          color: rgb(0, 0, 0);
        }

        /* Dark mode colors - same hierarchy as light mode */
        .dark .sidebar-item {
          color: rgb(156, 163, 175); /* gray-400 - medium brightness for unselected */
        }
        .dark .sidebar-item:hover {
          background-color: rgb(55, 65, 81); /* gray-700 - visible but subtle */
          color: rgb(243, 244, 246); /* gray-100 - bright on hover */
        }
        .dark .sidebar-item.active {
          background-color: rgb(55, 65, 81); /* gray-700 - darker background for selected */
          color: rgb(243, 244, 246); /* gray-100 - brightest for selected */
          font-weight: 600;
        }
        .dark .sidebar-icon {
          color: rgb(156, 163, 175); /* gray-400 - medium brightness for unselected */
        }
        .dark .sidebar-item:hover .sidebar-icon {
          color: rgb(243, 244, 246); /* gray-100 - bright on hover */
        }
        .dark .sidebar-item.active .sidebar-icon {
          color: rgb(243, 244, 246); /* gray-100 - brightest for selected */
        }
        .dark .sidebar-header {
          color: rgb(243, 244, 246); /* gray-100 - brightest for headers */
          font-weight: 700;
        }
        .dark .sidebar-header:hover {
          background-color: rgb(55, 65, 81); /* gray-700 - same as items */
        }
        .dark .sidebar-header .sidebar-icon {
          color: rgb(243, 244, 246); /* gray-100 - brightest for headers */
        }
      `}</style>

      {/* Dashboard */}
      <button
        onClick={() => navigate('/dashboard')}
        className={`sidebar-item ${
          (location.pathname === '/dashboard' || location.pathname === '/') ? 'active' : ''
        } w-full flex items-center space-x-2.5 px-3 py-2 rounded-lg text-left`}
      >
        <Home className="sidebar-icon w-4.5 h-4.5" />
        {!isCollapsed && (
          <span className="text-sm">Dashboard</span>
        )}
      </button>

      {/* Subjects Section */}
      <div className="pt-4">
        <button
          onClick={() => toggleSection('subjects')}
          className="sidebar-header w-full flex items-center justify-between px-3 py-2 rounded-lg dark:hover:bg-gray-800/40 transition-colors text-left"
        >
          <span className="text-xs uppercase tracking-wider">
            {!isCollapsed ? 'Subjects' : 'SUB'}
          </span>
          {!isCollapsed && (expandedSections.includes('subjects') ? (
            <ChevronDown className="sidebar-icon w-4 h-4" />
          ) : (
            <ChevronRight className="sidebar-icon w-4 h-4" />
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
                  const isActive = location.pathname === subject.path
                  return (
                    <button
                      key={subject.name}
                      onClick={() => navigate(subject.path)}
                      className={`sidebar-item ${isActive ? 'active' : ''} w-full flex items-center space-x-2.5 px-3 py-2 rounded-lg text-left`}
                    >
                      <Icon className="sidebar-icon w-4.5 h-4.5" />
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
              const isActive = location.pathname === subject.path
              return (
                <button
                  key={subject.name}
                  onClick={() => navigate(subject.path)}
                  className={`sidebar-item ${isActive ? 'active' : ''} w-full flex items-center justify-center px-3 py-2 rounded-lg`}
                  title={subject.name}
                >
                  <Icon className="sidebar-icon w-5 h-5" />
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
          className="sidebar-header w-full flex items-center justify-between px-3 py-2 rounded-lg dark:hover:bg-gray-800/40 transition-colors text-left"
        >
          <span className="text-xs uppercase tracking-wider">
            {!isCollapsed ? 'Tools' : 'TOO'}
          </span>
          {!isCollapsed && (expandedSections.includes('tools') ? (
            <ChevronDown className="sidebar-icon w-4 h-4" />
          ) : (
            <ChevronRight className="sidebar-icon w-4 h-4" />
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
                      className={`sidebar-item ${isActive ? 'active' : ''} w-full flex items-center space-x-2.5 px-3 py-2 rounded-lg text-left`}
                    >
                      <Icon className="sidebar-icon w-4.5 h-4.5" />
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
              const isActive = location.pathname === tool.path
              return (
                <button
                  key={tool.name}
                  onClick={() => navigate(tool.path)}
                  className={`sidebar-item ${isActive ? 'active' : ''} w-full flex items-center justify-center px-3 py-2 rounded-lg`}
                  title={tool.name}
                >
                  <Icon className="sidebar-icon w-5 h-5" />
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
      {/* Header */}
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
        {isCollapsed && (
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-md mx-auto">
            <Activity className="w-4 h-4 text-primary-foreground" />
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

      {/* Navigation Content */}
      {navigationContent}

      {/* Footer - Settings */}
      <div className="p-3 border-t border-border/50 mt-auto">
        <button className="sidebar-item w-full flex items-center space-x-2.5 px-3 py-2 rounded-lg text-left">
          <Settings className="sidebar-icon w-4.5 h-4.5" />
          {!isCollapsed && <span className="text-sm">Settings</span>}
        </button>
      </div>

      {/* Collapse/Expand marker */}
      <div
        className="hidden lg:flex absolute top-1/2 -translate-y-1/2 -right-3 w-6 h-16 items-center justify-center cursor-pointer z-20 group"
        onMouseEnter={() => setShowExpandTooltip(true)}
        onMouseLeave={() => setShowExpandTooltip(false)}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <div className="w-1 h-8 bg-border/40 group-hover:bg-border/80 transition-colors rounded-full" />

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

      {/* Desktop Sidebar */}
      <motion.aside
        animate={{ width: isCollapsed ? 80 : 288 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="hidden lg:flex lg:flex-col bg-card border-r border-border/50 z-10 relative h-screen sticky top-0"
      >
        <SidebarContent />
      </motion.aside>

      {/* Mobile Sidebar */}
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
