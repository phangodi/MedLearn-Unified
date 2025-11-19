import { useState, useEffect } from 'react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { Button } from '@/components/ui/Button'
import { Sidebar } from '@/components/layout/Sidebar'
import { BorderFrame } from '@/components/layout/BorderFrame'
import { Particles } from '@/components/ui/Particles'
import { HeroSection } from '@/components/layout/HeroSection'
import { DashboardMessageCard } from '@/components/notifications/DashboardMessageCard'
import { LogOut } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'
import { useNotifications } from '@/contexts/NotificationContext'

export function DashboardPage() {
  const navigate = useNavigate()
  const { signOut } = useAuth()
  const { setCurrentTarget } = useNotifications()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  // Set notification target to global for dashboard
  useEffect(() => {
    setCurrentTarget('global')

    // Auto-expand sidebar when returning to dashboard
    setSidebarCollapsed(false)
    localStorage.setItem('sidebarCollapsed', 'false')
  }, [setCurrentTarget])

  const handleLogout = async () => {
    await signOut()
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-background flex">
      {/* Animated particle background */}
      <Particles quantity={60} ease={50} />

      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
        isCollapsed={sidebarCollapsed}
        setIsCollapsed={setSidebarCollapsed}
      />

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
          <div className="px-6 lg:px-10 h-full flex items-center justify-end">
            {/* Right side actions - logo stays only in sidebar */}
            <div className="flex items-center gap-1.5">
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
        <main className="flex-1 mx-auto px-6 lg:px-10 py-8 relative z-10 max-w-7xl">
          {/* Dashboard Message Card */}
          <DashboardMessageCard />

          {/* Hero Section with subject cards */}
          <HeroSection interactive={true} />
        </main>
      </div>
    </div>
  )
}
