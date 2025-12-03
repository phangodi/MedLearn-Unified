import { useState, useEffect } from 'react'
import { Sidebar } from '@/components/layout/Sidebar'
import { BorderFrame } from '@/components/layout/BorderFrame'
import { HeroSection } from '@/components/layout/HeroSection'
import { DashboardMessageCard } from '@/components/notifications/DashboardMessageCard'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { Button } from '@/components/ui/Button'
import { useNotifications } from '@/contexts/NotificationContext'
import { useAuth } from '@/contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { LogOut } from 'lucide-react'

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
    <div className="min-h-screen bg-background flex relative overflow-hidden">

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

        {/* CSS for action buttons */}
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

        {/* Upper right corner actions - Theme toggle and Logout */}
        <div className="fixed top-4 right-6 z-30 flex items-center gap-1.5">
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

        {/* Main content */}
        <main className="flex-1 mx-auto px-6 lg:px-10 py-10 relative z-10 max-w-7xl">
          {/* Dashboard Message Card */}
          <DashboardMessageCard />

          {/* Hero Section with subject cards */}
          <HeroSection interactive={true} />
        </main>
      </div>
    </div>
  )
}
