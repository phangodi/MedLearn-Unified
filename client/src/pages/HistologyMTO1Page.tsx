import { useState } from 'react'
import { Sidebar } from '@/components/layout/Sidebar'
import { DashboardReturnMarker } from '@/components/layout/DashboardReturnMarker'
import HistologyApp from '@/apps/histology/mto1/App'
import '@/apps/histology/mto1/index.css'

export function HistologyMTO1Page() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

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

      <main className="flex-1 overflow-auto histology-mto1-app">
        <HistologyApp />
      </main>
    </div>
  )
}
