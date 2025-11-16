import { useState } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { Button } from '@/components/ui/Button'
import { Sidebar } from '@/components/layout/Sidebar'
import { BorderFrame } from '@/components/layout/BorderFrame'
import { Particles } from '@/components/ui/Particles'
import { LogOut, Brain, Microscope, User, Users, Activity } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'

// 3D Card Component with mouse tracking
function Card3D({ children, enabled }: { children: React.ReactNode; enabled: boolean }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(mouseY, [-150, 150], [8, -8])
  const rotateY = useTransform(mouseX, [-150, 150], [-8, 8])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enabled) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      style={{ perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{
          rotateX: enabled ? rotateX : 0,
          rotateY: enabled ? rotateY : 0,
          transformStyle: 'preserve-3d',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

export function DashboardPage() {
  const navigate = useNavigate()
  const { signOut } = useAuth()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  const handleLogout = async () => {
    await signOut()
    navigate('/login')
  }

  const subjects = [
    {
      name: 'Physiology',
      icon: Brain,
      description: '122 Topics • Multiple Study Formats • Audio Playback',
      subtitle: '122 Topics',
      enabled: true,
      image: '/subjects/physiology.png',
      path: '/physiology',
      color: 'bg-blue-50 dark:bg-blue-950/30',
      iconColor: 'text-blue-600 dark:text-blue-400',
    },
    {
      name: 'Histology',
      icon: Microscope,
      description: 'Nervous System • Slides 15, 70-89 (22 Slides)',
      subtitle: '22 Slides',
      enabled: true,
      image: '/subjects/histology.png',
      color: 'bg-purple-50 dark:bg-purple-950/30',
      iconColor: 'text-purple-600 dark:text-purple-400',
      path: '/histology/mto1',
    },
    {
      name: 'Sociology',
      icon: Users,
      description: 'Medical Sociology • Healthcare Systems',
      subtitle: 'Social Health',
      enabled: true,
      image: '/subjects/sociology.png',
      color: 'bg-teal-50 dark:bg-teal-950/30',
      iconColor: 'text-teal-600 dark:text-teal-400',
    },
    {
      name: 'Anatomy',
      icon: User,
      description: 'Neuroanatomy • CNS Content',
      subtitle: 'Neuroanatomy',
      enabled: true,
      image: '/subjects/anatomy.png',
      color: 'bg-emerald-50 dark:bg-emerald-950/30',
      iconColor: 'text-emerald-600 dark:text-emerald-400',
    },
    {
      name: 'Immunology',
      icon: Activity,
      description: 'Coming Soon',
      subtitle: 'In Development',
      enabled: false,
      image: '/subjects/immunology.png',
      color: 'bg-cyan-50 dark:bg-cyan-950/30',
      iconColor: 'text-cyan-600 dark:text-cyan-400',
    },
  ]

  return (
    <div className="min-h-screen bg-background flex">
      {/* Animated particle background */}
      <Particles quantity={60} ease={50} />

      {/* Sidebar */}
      <div className="relative z-10">
        <Sidebar
          isOpen={sidebarOpen}
          setIsOpen={setSidebarOpen}
          isCollapsed={sidebarCollapsed}
          setIsCollapsed={setSidebarCollapsed}
        />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col relative z-10">
        {/* Diagonal line pattern background for main content */}
        <BorderFrame sidebarCollapsed={sidebarCollapsed} />

        <style>{`
          .navbar-btn {
            color: rgb(31, 41, 55); /* gray-800 */
            transition: all 0.2s;
          }
          .navbar-btn:hover {
            background-color: rgb(243, 244, 246); /* gray-100 */
            color: rgb(0, 0, 0);
          }
          .dark .navbar-btn {
            color: rgb(156, 163, 175); /* gray-400 - medium brightness */
          }
          .dark .navbar-btn:hover {
            background-color: rgb(55, 65, 81); /* gray-700 */
            color: rgb(243, 244, 246); /* gray-100 - bright on hover */
          }
        `}</style>

        {/* Header - clean continuous bar, NO diagonal lines, EXACT same height as sidebar */}
        <header className="sticky top-0 z-30 bg-card/95 backdrop-blur-sm border-b border-border/50 h-[60px] relative">
          <div className="px-6 lg:px-10 h-full flex items-center justify-between">
            {/* Show branding when sidebar is collapsed */}
            {sidebarCollapsed && (
              <div className="hidden lg:flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-md">
                  <Activity className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="font-bold text-base bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Lara's MedLearn
                </span>
              </div>
            )}

            {/* Right side actions */}
            <div className={`flex items-center gap-1.5 ${!sidebarCollapsed ? 'ml-auto' : ''}`}>
              <ThemeToggle />
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                className="navbar-btn"
              >
                <LogOut className="w-4 h-4 mr-1.5" />
                <span className="hidden sm:inline text-sm">Logout</span>
              </Button>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 container mx-auto px-6 lg:px-10 py-8 relative z-10">
          {/* Hero Section - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 max-w-4xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              AI-assisted exam preparation
              <br />
              for all medical students
            </h1>

            <motion.p
              className="text-base lg:text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Consolidates study materials into interactive content to help you learn more effectively.
            </motion.p>
          </motion.div>

          {/* Enhanced subject grid with wow animations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {subjects.map((subject, index) => {
              return (
                <motion.div
                  key={subject.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                  }}
                  className={`${subject.enabled ? 'cursor-pointer' : 'cursor-not-allowed opacity-60'}`}
                  onClick={() => subject.enabled && subject.path && navigate(subject.path)}
                >
                  <Card3D enabled={subject.enabled}>
                    <div className="relative bg-card border-2 border-border/50 rounded-xl overflow-hidden h-[280px] hover:border-primary hover:shadow-[0_0_60px_rgba(6,182,212,0.6),0_0_100px_rgba(6,182,212,0.4)] dark:hover:shadow-[0_0_60px_rgba(6,182,212,0.7),0_0_100px_rgba(6,182,212,0.5)] transition-all duration-400 group">
                    {/* Background Image with zoom effect or colored background fallback */}
                    {subject.image ? (
                      <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110">
                        <img
                          src={subject.image}
                          alt={subject.name}
                          className="w-full h-full object-cover"
                        />
                        {/* Subtle gradient overlay for text readability - much lighter */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent dark:from-black/60 dark:via-transparent dark:to-transparent" />
                      </div>
                    ) : (
                      <div className={`absolute inset-0 ${subject.color} transition-transform duration-500 group-hover:scale-105`}>
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 dark:to-black/40" />
                      </div>
                    )}

                    {/* Content overlay */}
                    <div className="relative z-10 h-full flex flex-col justify-end p-6">
                      {/* Coming Soon badge for disabled subjects */}
                      {!subject.enabled && (
                        <div className="absolute top-4 right-4">
                          <span className="text-xs font-semibold text-white bg-black/50 px-3 py-1.5 rounded-full border border-white/20 backdrop-blur-sm">
                            Coming Soon
                          </span>
                        </div>
                      )}

                      {/* Content with gradient on hover */}
                      <h3 className={`text-xl font-bold mb-2 drop-shadow-lg group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-blue-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 ${subject.image ? 'text-white' : 'text-foreground'}`}>
                        {subject.name}
                      </h3>
                      <p className={`text-sm drop-shadow-md ${subject.image ? 'text-white/90' : 'text-muted-foreground'}`}>
                        {subject.description}
                      </p>
                    </div>

                    {/* Subtle glow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  </div>
                  </Card3D>
                </motion.div>
              )
            })}
          </div>
        </main>
      </div>
    </div>
  )
}
