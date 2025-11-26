import { useState, useMemo, useRef, useEffect, useLayoutEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
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
  LogOut,
  Moon,
  Sun,
  Bell,
  Layers
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Logo } from '@/components/ui/Logo'
import { NotificationSidebarItem } from '@/components/notifications/NotificationSidebarItem'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'
import { useTheme } from '@/hooks/useTheme'

interface SidebarProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  isCollapsed: boolean
  setIsCollapsed: (collapsed: boolean) => void
}

export function Sidebar({ isOpen, setIsOpen, isCollapsed, setIsCollapsed }: SidebarProps) {
  const navigate = useNavigate()
  const location = useLocation()
  const { userProfile, signOut } = useAuth()
  const { theme, toggleTheme } = useTheme()
  const [expandedSections, setExpandedSections] = useState<string[]>(['subjects', 'tools'])
  const [showExpandTooltip, setShowExpandTooltip] = useState(false)
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [settingsPosition, setSettingsPosition] = useState<{
    top: number
    left: number
    width: number
    transform: string
  } | null>(null)
  const settingsPanelRef = useRef<HTMLDivElement>(null)
  const settingsButtonRef = useRef<HTMLButtonElement>(null)

  // Close settings panel when clicking outside
  useEffect(() => {
    if (!settingsOpen) return

    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node

      if (
        settingsButtonRef.current?.contains(target) ||
        settingsPanelRef.current?.contains(target)
      ) {
        return
      }

      setSettingsOpen(false)
    }

    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [settingsOpen])

  const updateSettingsPanelPosition = useCallback((anchor?: HTMLButtonElement | null) => {
    const button = anchor ?? settingsButtonRef.current
    if (!button) return

    const rect = button.getBoundingClientRect()
    const scrollX = window.scrollX || window.pageXOffset
    const scrollY = window.scrollY || window.pageYOffset

    if (isCollapsed) {
      setSettingsPosition({
        top: rect.top + scrollY + rect.height / 2,
        left: rect.right + scrollX + 12,
        width: 192,
        transform: 'translateY(-50%)'
      })
    } else {
      setSettingsPosition({
        top: rect.top + scrollY - 8,
        left: rect.left + scrollX,
        width: rect.width,
        transform: 'translateY(-100%)'
      })
    }
  }, [isCollapsed])

  useLayoutEffect(() => {
    if (!settingsOpen) return

    const handleWindowChange = () => updateSettingsPanelPosition()
    updateSettingsPanelPosition()

    window.addEventListener('resize', handleWindowChange)
    window.addEventListener('scroll', handleWindowChange, true)

    return () => {
      window.removeEventListener('resize', handleWindowChange)
      window.removeEventListener('scroll', handleWindowChange, true)
    }
  }, [settingsOpen, updateSettingsPanelPosition])

  useEffect(() => {
    if (!settingsOpen) {
      setSettingsPosition(null)
    }
  }, [settingsOpen])

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    )
  }

  const handleLogout = async () => {
    await signOut()
    navigate('/login')
    setSettingsOpen(false)
  }

  const subjects = [
    { name: 'Physiology', icon: Brain, path: '/physiology' },
    { name: 'Histology', icon: Microscope, path: '/histology' },
    { name: 'Sociology', icon: Users, path: '/sociology' },
    { name: 'Anatomy', icon: User, path: '/anatomy' },
  ]

  const tools = [
    { name: 'AI Exam Prep', icon: Sparkles, path: '/ai-prep' },
    { name: 'Flashcards', icon: Layers, path: '/flashcards' },
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
        } w-full flex items-center ${isCollapsed ? 'justify-center' : 'space-x-2.5'} px-3 py-2 rounded-lg text-left`}
      >
        <Home className="sidebar-icon w-4.5 h-4.5" />
        {!isCollapsed && (
          <span className="text-sm">Dashboard</span>
        )}
      </button>

      {/* Divider between Dashboard and Subjects */}
      {isCollapsed && (
        <div className="my-3 mx-auto w-8 h-px bg-border/50" />
      )}

      {/* Subjects Section */}
      <div className="pt-4">
        {!isCollapsed && (
          <button
            onClick={() => toggleSection('subjects')}
            className="sidebar-header w-full flex items-center justify-between px-3 py-2 rounded-lg dark:hover:bg-gray-800/40 transition-colors text-left"
          >
            <span className="text-xs uppercase tracking-wider">Subjects</span>
            {expandedSections.includes('subjects') ? (
              <ChevronDown className="sidebar-icon w-4 h-4" />
            ) : (
              <ChevronRight className="sidebar-icon w-4 h-4" />
            )}
          </button>
        )}

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

      {/* Divider between Subjects and Tools */}
      {isCollapsed && (
        <div className="my-3 mx-auto w-8 h-px bg-border/50" />
      )}

      {/* Tools Section */}
      <div className="pt-4">
        {!isCollapsed && (
          <button
            onClick={() => toggleSection('tools')}
            className="sidebar-header w-full flex items-center justify-between px-3 py-2 rounded-lg dark:hover:bg-gray-800/40 transition-colors text-left"
          >
            <span className="text-xs uppercase tracking-wider">Tools</span>
            {expandedSections.includes('tools') ? (
              <ChevronDown className="sidebar-icon w-4 h-4" />
            ) : (
              <ChevronRight className="sidebar-icon w-4 h-4" />
            )}
          </button>
        )}

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
                {/* Notifications */}
                <NotificationSidebarItem isCollapsed={false} onOpenChange={setNotificationsOpen} />

                {/* Other tools */}
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
            {/* Notifications */}
            <NotificationSidebarItem isCollapsed={true} onOpenChange={setNotificationsOpen} />

            {/* Other tools */}
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
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-md">
              <Logo className="text-primary-foreground" size={16} />
            </div>
            <span className="font-bold text-base bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Lara's MedLearn
            </span>
          </div>
        )}
        {isCollapsed && (
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-md mx-auto">
            <Logo className="text-primary-foreground" size={16} />
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

      {/* Footer - Settings & Admin */}
      <div className="p-3 border-t border-border/50 mt-auto space-y-1">
        {/* Admin link (super admin only) */}
        {userProfile?.role === 'superadmin' && (
          <button
            onClick={() => navigate('/admin/notifications')}
            className={`sidebar-item ${
              location.pathname === '/admin/notifications' ? 'active' : ''
            } w-full flex items-center ${isCollapsed ? 'justify-center' : 'space-x-2.5'} px-3 py-2 rounded-lg text-left`}
            title={isCollapsed ? 'Notifications Admin' : undefined}
          >
            <Bell className="sidebar-icon w-4.5 h-4.5" />
            {!isCollapsed && <span className="text-sm">Notifications Admin</span>}
          </button>
        )}

        {/* Settings Button with Dropdown */}
        <div className="relative">
          <button
            onClick={(event) => {
              const button = event.currentTarget
              settingsButtonRef.current = button

              if (settingsOpen) {
                setSettingsOpen(false)
              } else {
                updateSettingsPanelPosition(button)
                setSettingsOpen(true)
              }
            }}
            className={`sidebar-item ${
              settingsOpen ? 'active' : ''
            } w-full flex items-center ${isCollapsed ? 'justify-center' : 'space-x-2.5'} px-3 py-2 rounded-lg text-left`}
            title={isCollapsed ? 'Settings' : undefined}
          >
            <Settings className="sidebar-icon w-4.5 h-4.5" />
            {!isCollapsed && <span className="text-sm">Settings</span>}
          </button>

          {/* Settings Dropdown Panel */}
          {isCollapsed
            ? createPortal(
                <AnimatePresence>
                  {settingsOpen && settingsPosition && (
                    <>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/20 z-40 lg:hidden"
                        onClick={() => setSettingsOpen(false)}
                      />

                      <motion.div
                        ref={settingsPanelRef}
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.15, ease: 'easeOut' }}
                        className="fixed bg-card border border-border/50 rounded-lg shadow-lg overflow-hidden z-[9999]"
                        style={{
                          top: settingsPosition.top,
                          left: settingsPosition.left,
                          width: settingsPosition.width,
                          transform: settingsPosition.transform,
                          transformOrigin: 'top left'
                        }}
                      >
                        <div className="p-2 space-y-1">
                          <button
                            type="button"
                            onClick={() => {
                              navigate('/profile')
                              setSettingsOpen(false)
                            }}
                            className="sidebar-item w-full flex items-center space-x-2.5 px-3 py-2 rounded-lg text-left"
                          >
                            <User className="sidebar-icon w-4.5 h-4.5" />
                            <span className="text-sm">Edit Profile</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => {
                              toggleTheme()
                            }}
                            className="sidebar-item w-full flex items-center justify-between px-3 py-2 rounded-lg text-left"
                          >
                            <div className="flex items-center space-x-2.5">
                              {theme === 'dark' ? (
                                <Moon className="sidebar-icon w-4.5 h-4.5" />
                              ) : (
                                <Sun className="sidebar-icon w-4.5 h-4.5" />
                              )}
                              <span className="text-sm">Theme</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-muted-foreground capitalize">{theme}</span>
                              <div className={`relative w-9 h-5 rounded-full transition-colors ${
                                theme === 'dark' ? 'bg-primary' : 'bg-gray-300'
                              }`}>
                                <motion.div
                                  layout
                                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                  className="absolute top-0.5 w-4 h-4 bg-white rounded-full shadow-md"
                                  style={{ left: theme === 'dark' ? '18px' : '2px' }}
                                />
                              </div>
                            </div>
                          </button>

                          <div className="h-px bg-border/50 my-1" />

                          <button
                            type="button"
                            onClick={handleLogout}
                            className="sidebar-item w-full flex items-center space-x-2.5 px-3 py-2 rounded-lg text-left text-red-500 dark:text-red-400"
                          >
                            <LogOut className="w-4.5 h-4.5" />
                            <span className="text-sm">Logout</span>
                          </button>
                        </div>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>,
                document.body
              )
            : (
                <AnimatePresence>
                  {settingsOpen && (
                    <motion.div
                      ref={settingsPanelRef}
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.15, ease: 'easeOut' }}
                      className="absolute bottom-full left-0 right-0 mb-2 bg-card border border-border/50 rounded-lg shadow-lg overflow-hidden z-50"
                    >
                      <div className="p-2 space-y-1">
                        <button
                          type="button"
                          onClick={() => {
                            navigate('/profile')
                            setSettingsOpen(false)
                          }}
                          className="sidebar-item w-full flex items-center space-x-2.5 px-3 py-2 rounded-lg text-left"
                        >
                          <User className="sidebar-icon w-4.5 h-4.5" />
                          <span className="text-sm">Edit Profile</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            toggleTheme()
                          }}
                          className="sidebar-item w-full flex items-center justify-between px-3 py-2 rounded-lg text-left"
                        >
                          <div className="flex items-center space-x-2.5">
                            {theme === 'dark' ? (
                              <Moon className="sidebar-icon w-4.5 h-4.5" />
                            ) : (
                              <Sun className="sidebar-icon w-4.5 h-4.5" />
                            )}
                            <span className="text-sm">Theme</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-muted-foreground capitalize">{theme}</span>
                            <div className={`relative w-9 h-5 rounded-full transition-colors ${
                              theme === 'dark' ? 'bg-primary' : 'bg-gray-300'
                            }`}>
                              <motion.div
                                layout
                                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                className="absolute top-0.5 w-4 h-4 bg-white rounded-full shadow-md"
                                style={{ left: theme === 'dark' ? '18px' : '2px' }}
                              />
                            </div>
                          </div>
                        </button>

                        <div className="h-px bg-border/50 my-1" />

                        <button
                          type="button"
                          onClick={handleLogout}
                          className="sidebar-item w-full flex items-center space-x-2.5 px-3 py-2 rounded-lg text-left text-red-500 dark:text-red-400"
                        >
                          <LogOut className="w-4.5 h-4.5" />
                          <span className="text-sm">Logout</span>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
        </div>
      </div>

      {/* Collapse/Expand interaction area - DISABLED when notifications or settings are open */}
      {!notificationsOpen && !settingsOpen && (
        <motion.div
          className="hidden lg:flex absolute top-0 bottom-0 -right-3 w-6 items-center justify-center cursor-col-resize z-20 group"
          onMouseEnter={() => setShowExpandTooltip(true)}
          onMouseLeave={() => setShowExpandTooltip(false)}
          onClick={() => setIsCollapsed(!isCollapsed)}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
          onDragEnd={(_e, info) => {
            // Detect drag direction and velocity for smooth interaction
            const threshold = 30 // pixels to trigger
            const velocityThreshold = 200 // velocity to auto-trigger

            if (Math.abs(info.offset.x) > threshold || Math.abs(info.velocity.x) > velocityThreshold) {
              if (isCollapsed) {
                // If collapsed, dragging left expands
                if (info.offset.x < -threshold || info.velocity.x < -velocityThreshold) {
                  setIsCollapsed(false)
                }
              } else {
                // If expanded, dragging right collapses
                if (info.offset.x > threshold || info.velocity.x > velocityThreshold) {
                  setIsCollapsed(true)
                }
              }
            }
          }}
          whileDrag={{ scale: 1.05 }}
        >
        {/* Subtle marker line (always visible) - centered in drag area */}
        <div className="w-1 h-8 bg-gradient-to-b from-primary/30 via-primary/50 to-primary/30 group-hover:from-primary/50 group-hover:via-primary/70 group-hover:to-primary/50 transition-all duration-300 rounded-full shadow-sm" />

        {/* Simple integrated tab (appears on hover) - COLLAPSE left, EXPAND right */}
        <AnimatePresence>
          {showExpandTooltip && (
            <motion.div
              initial={{ opacity: 0, x: isCollapsed ? 10 : -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isCollapsed ? 10 : -10 }}
              transition={{
                duration: 0.15,
                ease: 'easeOut'
              }}
              className={`absolute ${isCollapsed ? 'left-4' : 'right-4'} flex items-center cursor-col-resize pointer-events-none`}
            >
              {/* Simple tab - integrated with sidebar style */}
              <div className="bg-card border border-border rounded-md shadow-md">
                {/* Rotated text - clean and minimal */}
                <div className="px-1.5 py-3 flex items-center justify-center">
                  <span
                    className="text-[9px] font-semibold uppercase tracking-wider text-muted-foreground"
                    style={{
                      writingMode: 'vertical-rl',
                      textOrientation: 'mixed',
                      transform: 'rotate(180deg)'
                    }}
                  >
                    {isCollapsed ? 'Expand' : 'Collapse'}
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      )}
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
        className="hidden lg:flex lg:flex-col bg-card border-r border-border/50 z-40 relative h-screen sticky top-0"
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
