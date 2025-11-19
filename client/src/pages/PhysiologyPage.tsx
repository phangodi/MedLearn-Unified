import { useState } from 'react'
import { Sidebar } from '@/components/layout/Sidebar'
import { DashboardReturnMarker } from '@/components/layout/DashboardReturnMarker'
import PhysiologyApp from '@/apps/physiology'

export function PhysiologyPage() {
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

      <main className="flex-1 overflow-auto">
        <PhysiologyApp />
      </main>
    </div>
  )
}
