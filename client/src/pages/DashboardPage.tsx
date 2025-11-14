import { useState } from 'react'
import { motion } from 'framer-motion'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { Button } from '@/components/ui/Button'
import { Sidebar } from '@/components/layout/Sidebar'
import { AngledBackground } from '@/components/layout/AngledBackground'
import { BorderFrame } from '@/components/layout/BorderFrame'
import { TypewriterSequence } from '@/components/ui/TypewriterSequence'
import { RotatingCard } from '@/components/ui/RotatingCard'
import { Particles } from '@/components/ui/Particles'
import { LogOut, Brain, Microscope, User, Sparkles, Users, Activity } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'

export function DashboardPage() {
  const navigate = useNavigate()
  const { userProfile, signOut } = useAuth()
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
      color: 'bg-blue-50 dark:bg-blue-950/30',
      iconColor: 'text-blue-600 dark:text-blue-400',
    },
    {
      name: 'Histology',
      icon: Microscope,
      description: '21 Nervous System Slides • Staining Tips',
      subtitle: '21 Slides',
      enabled: true,
      image: '/subjects/histology.png',
      color: 'bg-purple-50 dark:bg-purple-950/30',
      iconColor: 'text-purple-600 dark:text-purple-400',
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
      name: 'AI Exam Prep',
      icon: Sparkles,
      description: 'AI-Powered Practice Tests • Personalized Learning',
      subtitle: 'AI Assistant',
      enabled: true,
      color: 'bg-amber-50 dark:bg-amber-950/30',
      iconColor: 'text-amber-600 dark:text-amber-400',
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
    <div className="min-h-screen bg-background flex lg:ml-[80px] lg:mr-[80px]">
      {/* Animated particle background */}
      <Particles quantity={60} ease={50} />

      {/* Subtle background pattern */}
      <AngledBackground />

      {/* Continuous diagonal-line border frame (Tailwind + Compass style) */}
      <BorderFrame />

      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
        isCollapsed={sidebarCollapsed}
        setIsCollapsed={setSidebarCollapsed}
      />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header - clean continuous bar, NO diagonal lines, EXACT same height as sidebar */}
        <header className="sticky top-0 z-30 bg-card/95 backdrop-blur-sm border-b border-border/50 h-[60px]">
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
              <Button variant="ghost" size="sm" onClick={handleLogout} className="hover:bg-gray-100 dark:hover:bg-gray-800/50 text-gray-600 dark:text-gray-200 hover:text-foreground">
                <LogOut className="w-4 h-4 mr-1.5" />
                <span className="hidden sm:inline text-sm">Logout</span>
              </Button>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 container mx-auto px-6 lg:px-10 py-8">
          {/* Welcome Banner */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 relative"
          >
            <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent">
              Welcome back, {userProfile?.name || 'Student'}! 👋
            </h2>
          </motion.div>

          {/* Hero Section with Typewriter and Rotating Card */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
            {/* Hero Text with Typewriter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                <span className="inline-block">
                  AI-assisted exam preparation for
                  {'\u00A0'}
                </span>
                <TypewriterSequence className="text-3xl sm:text-4xl lg:text-5xl font-extrabold" />
              </h1>

              <motion.p
                className="text-base lg:text-lg text-muted-foreground mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Consolidates study materials into interactive content to help you learn more effectively.
              </motion.p>
            </motion.div>

            {/* Rotating Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <RotatingCard />
            </motion.div>
          </div>

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
                  whileHover={subject.enabled ? { y: -10 } : {}}
                  className={`group ${subject.enabled ? 'cursor-pointer' : 'cursor-not-allowed opacity-60'}`}
                >
                  <div className="relative bg-card border border-border/50 rounded-xl overflow-hidden h-[280px] hover:border-primary/50 hover:shadow-[0_20px_40px_rgba(var(--primary-rgb),0.15)] dark:hover:shadow-[0_20px_40px_rgba(var(--primary-rgb),0.25)] transition-all duration-400">
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
                </motion.div>
              )
            })}
          </div>
        </main>
      </div>
    </div>
  )
}
