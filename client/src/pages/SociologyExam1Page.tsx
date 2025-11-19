import { useState, useEffect } from 'react'
import { Sidebar } from '@/components/layout/Sidebar'
import { DashboardReturnMarker } from '@/components/layout/DashboardReturnMarker'
import SociologyApp from '@/apps/sociology/App'

export function SociologyExam1Page() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  // Auto-collapse sidebar on legacy app pages (desktop only)
  useEffect(() => {
    setSidebarCollapsed(true)
    localStorage.setItem('sidebarCollapsed', 'true')
  }, [])

  return (
    <div className="min-h-screen bg-background flex">
      {/* Desktop sidebar - hidden on mobile */}
      <div className="hidden lg:block">
        <Sidebar
          isOpen={sidebarOpen}
          setIsOpen={setSidebarOpen}
          isCollapsed={sidebarCollapsed}
          setIsCollapsed={setSidebarCollapsed}
        />
      </div>

      {/* Mobile-only dashboard return marker */}
      <div className="lg:hidden">
        <DashboardReturnMarker />
      </div>

      <main className="flex-1 overflow-auto">
        <SociologyApp />
      </main>
    </div>
  )
}
