import { useNavigate } from 'react-router-dom'
import { Sidebar } from '@/components/layout/Sidebar'
import { BorderFrame } from '@/components/layout/BorderFrame'
import { Particles } from '@/components/ui/Particles'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { Button } from '@/components/ui/Button'
import { LogOut } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { FlashcardsApp } from '@/apps/flashcards/FlashcardsApp'

export function FlashcardsPage() {
  const navigate = useNavigate()
  const { signOut } = useAuth()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  // Auto-collapse sidebar on flashcards page for more room
  useEffect(() => {
    setSidebarCollapsed(true)
    localStorage.setItem('sidebarCollapsed', 'true')
  }, [])

  const handleLogout = async () => {
    await signOut()
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-background flex">
      <Particles quantity={60} ease={50} />
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} isCollapsed={sidebarCollapsed} setIsCollapsed={setSidebarCollapsed} />
      <div className="flex-1 flex flex-col relative z-10">
        <BorderFrame sidebarCollapsed={sidebarCollapsed} />
        {/* Minimal header - theme and logout only, compact height */}
        <header className="sticky top-0 z-30 bg-card/80 backdrop-blur-sm border-b border-border/30 h-[40px]">
          <div className="px-4 lg:px-6 h-full flex items-center justify-end">
            <div className="flex items-center gap-1">
              <ThemeToggle />
              <Button variant="ghost" size="sm" onClick={handleLogout} className="h-8 px-2">
                <LogOut className="w-3.5 h-3.5" />
              </Button>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-auto">
          <FlashcardsApp />
        </main>
      </div>
    </div>
  )
}
