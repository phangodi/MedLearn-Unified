import { useState } from 'react'
import { motion } from 'framer-motion'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { Button } from '@/components/ui/Button'
import { Sidebar } from '@/components/layout/Sidebar'
import { AngledBackground } from '@/components/layout/AngledBackground'
import { LogOut, Brain, Microscope, Stethoscope, User, Sparkles, Users } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export function DashboardPage() {
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleLogout = () => {
    navigate('/login')
  }

  const subjects = [
    {
      name: 'Physiology',
      icon: Brain,
      description: 'Study body functions and systems',
      progress: 65,
      gradient: 'from-blue-500 to-blue-600',
      color: 'bg-blue-500',
    },
    {
      name: 'Histology',
      icon: Microscope,
      description: 'Explore tissue structures',
      progress: 40,
      gradient: 'from-purple-500 to-purple-600',
      color: 'bg-purple-500',
    },
    {
      name: 'Pathology',
      icon: Stethoscope,
      description: 'Understand disease processes',
      progress: 55,
      gradient: 'from-red-500 to-red-600',
      color: 'bg-red-500',
    },
    {
      name: 'Anatomy',
      icon: User,
      description: 'Learn body structures',
      progress: 30,
      gradient: 'from-green-500 to-green-600',
      color: 'bg-green-500',
    },
    {
      name: 'AI Exam Prep',
      icon: Sparkles,
      description: 'AI-powered practice tests',
      progress: 0,
      gradient: 'from-amber-500 to-amber-600',
      color: 'bg-amber-500',
    },
    {
      name: 'Community',
      icon: Users,
      description: 'Connect with peers',
      progress: 0,
      gradient: 'from-teal-500 to-teal-600',
      color: 'bg-teal-500',
    },
  ]

  return (
    <div className="min-h-screen bg-background flex">
      {/* Angled background pattern */}
      <AngledBackground />

      {/* Decorative borders */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-30 z-10" />
      <div className="fixed top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary opacity-20 z-10" />

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      {/* Main content */}
      <div className="flex-1 flex flex-col lg:ml-0">
        {/* Top header */}
        <header className="sticky top-0 z-20 bg-card/80 backdrop-blur-lg border-b border-border">
          <div className="container mx-auto px-4 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent lg:block hidden">
                  Lara's MedLearn
                </h1>
                <span className="text-sm text-muted-foreground hidden md:block">
                  Your Medical Study Desktop
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <ThemeToggle />
                <Button variant="ghost" size="sm" onClick={handleLogout}>
                  <LogOut className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Logout</span>
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Main desktop area */}
        <main className="flex-1 container mx-auto px-4 lg:px-8 py-8">
          {/* Welcome message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold mb-2">Welcome back! 👋</h2>
            <p className="text-muted-foreground">
              Choose a subject to continue your medical studies
            </p>
          </motion.div>

          {/* Desktop-like app grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject, index) => {
              const Icon = subject.icon
              return (
                <motion.div
                  key={subject.name}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                    type: 'spring',
                    stiffness: 150,
                  }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  className="group cursor-pointer"
                >
                  <div className="relative bg-card border border-border rounded-2xl p-6 h-full hover:shadow-2xl hover:border-primary/30 transition-all duration-300">
                    {/* Progress indicator */}
                    {subject.progress > 0 && (
                      <div className="absolute top-3 right-3">
                        <div className="relative w-12 h-12">
                          <svg className="w-12 h-12 transform -rotate-90">
                            <circle
                              cx="24"
                              cy="24"
                              r="20"
                              stroke="currentColor"
                              strokeWidth="3"
                              fill="none"
                              className="text-muted opacity-20"
                            />
                            <circle
                              cx="24"
                              cy="24"
                              r="20"
                              stroke="currentColor"
                              strokeWidth="3"
                              fill="none"
                              strokeDasharray={`${2 * Math.PI * 20}`}
                              strokeDashoffset={`${2 * Math.PI * 20 * (1 - subject.progress / 100)}`}
                              className={`${subject.color.replace('bg-', 'text-')} transition-all duration-1000`}
                            />
                          </svg>
                          <span className="absolute inset-0 flex items-center justify-center text-xs font-bold">
                            {subject.progress}%
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Icon */}
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${subject.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {subject.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {subject.description}
                    </p>

                    {/* Action hint */}
                    <div className="flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>
                        {subject.progress > 0 ? 'Continue learning' : 'Get started'}
                      </span>
                      <svg
                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="text-sm text-muted-foreground mb-1">Study Streak</div>
              <div className="text-3xl font-bold text-primary">7 days 🔥</div>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="text-sm text-muted-foreground mb-1">Total Progress</div>
              <div className="text-3xl font-bold text-secondary">48%</div>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="text-sm text-muted-foreground mb-1">Tests Completed</div>
              <div className="text-3xl font-bold text-accent">12</div>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  )
}
