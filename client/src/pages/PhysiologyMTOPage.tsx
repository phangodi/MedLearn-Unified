import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Sidebar } from '@/components/layout/Sidebar'
import { BorderFrame } from '@/components/layout/BorderFrame'
import { Particles } from '@/components/ui/Particles'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { Button } from '@/components/ui/Button'
import { LogOut, ArrowLeft, ClipboardCheck } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'
import { PhysiologyMTOApp } from '@/apps/physiology-mto'

export function PhysiologyMTOPage() {
  const navigate = useNavigate()
  const { signOut } = useAuth()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  // Auto-expand sidebar on this page
  useEffect(() => {
    setSidebarCollapsed(false)
    localStorage.setItem('sidebarCollapsed', 'false')
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
        <header className="sticky top-0 z-30 bg-card/95 backdrop-blur-sm border-b border-border/50 h-[60px]">
          <div className="px-6 lg:px-10 h-full flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" onClick={() => navigate('/physiology')}>
                <ArrowLeft className="w-4 h-4 mr-1.5" />
                <span className="text-sm">Back</span>
              </Button>
              <div className="flex items-center gap-2 text-muted-foreground">
                <ClipboardCheck className="w-5 h-5 text-blue-500" />
                <span className="font-medium text-foreground">MTO Practice</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <ThemeToggle />
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-1.5" />
                <span className="hidden sm:inline text-sm">Logout</span>
              </Button>
            </div>
          </div>
        </header>
        <main className="flex-1 w-full mx-auto px-6 lg:px-10 py-8 relative z-10 max-w-7xl">
          <PhysiologyMTOApp />
        </main>
      </div>
    </div>
  )
}
