import { motion } from 'framer-motion'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Activity, Brain, Microscope, Stethoscope, User, Sparkles, Users, LogOut } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { useNavigate } from 'react-router-dom'

export function DashboardPage() {
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/login')
  }

  const subjects = [
    { name: 'Physiology', icon: Brain, progress: 65, color: 'from-blue-500 to-blue-600' },
    { name: 'Histology', icon: Microscope, progress: 40, color: 'from-purple-500 to-purple-600' },
    { name: 'Pathology', icon: Stethoscope, progress: 55, color: 'from-red-500 to-red-600' },
    { name: 'Anatomy', icon: User, progress: 30, color: 'from-green-500 to-green-600' },
    { name: 'AI Exam Prep', icon: Sparkles, progress: 0, color: 'from-amber-500 to-amber-600' },
    { name: 'Community', icon: Users, progress: 0, color: 'from-teal-500 to-teal-600' },
  ]

  const stats = [
    { label: 'Study Progress', value: '48%', color: 'text-primary' },
    { label: 'Study Streak', value: '7 days', color: 'text-secondary' },
    { label: 'Tests Completed', value: '12', color: 'text-accent' },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Activity className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              MedLearn
            </h1>
          </div>

          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold mb-2">Welcome back, Medical Student! 👋</h2>
          <p className="text-muted-foreground">
            Continue your learning journey. You're doing great!
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
        >
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Subjects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-6">Your Subjects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject, index) => {
              const Icon = subject.icon
              return (
                <motion.div
                  key={subject.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="cursor-pointer"
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-200">
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${subject.color} flex items-center justify-center mb-4`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle>{subject.name}</CardTitle>
                      <CardDescription>
                        {subject.progress > 0 ? `${subject.progress}% complete` : 'Get started'}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {/* Progress Bar */}
                      <div className="w-full bg-muted rounded-full h-2 mb-4">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${subject.progress}%` }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                          className={`h-2 rounded-full bg-gradient-to-r ${subject.color}`}
                        />
                      </div>
                      <Button
                        variant={subject.progress > 0 ? "default" : "outline"}
                        className="w-full"
                      >
                        {subject.progress > 0 ? 'Continue' : 'Start Learning'}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-8"
        >
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your latest study sessions and achievements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Completed Cardiovascular System quiz</p>
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Studied Nervous Tissue - Histology</p>
                    <p className="text-xs text-muted-foreground">Yesterday</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Achieved 7-day study streak! 🔥</p>
                    <p className="text-xs text-muted-foreground">2 days ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Development Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-8"
        >
          <Card className="border-dashed border-2 bg-muted/30">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground text-center">
                🚧 <strong>Development Mode:</strong> This is a preview of the dashboard.
                Subject pages and features are coming next!
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  )
}
