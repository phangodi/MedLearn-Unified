import { useState } from 'react'
import { Sidebar } from '@/components/layout/Sidebar'
import PhysiologyApp from '@/apps/physiology'

export function PhysiologyPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <div className="min-h-screen bg-background flex">
      <div className="relative z-10">
        <Sidebar
          isOpen={sidebarOpen}
          setIsOpen={setSidebarOpen}
          isCollapsed={sidebarCollapsed}
          setIsCollapsed={setSidebarCollapsed}
        />
      </div>
      <main className="flex-1 overflow-auto">
        <PhysiologyApp />
      </main>
    </div>
  )
}
