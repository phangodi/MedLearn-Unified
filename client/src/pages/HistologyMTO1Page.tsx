import { useState } from 'react'
import { Sidebar } from '@/components/layout/Sidebar'
import HistologyApp from '@/apps/histology/mto1/App'
import '@/apps/histology/mto1/index.css'

export function HistologyMTO1Page() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <div className="min-h-screen bg-background flex">
      <div className="relative z-10">
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} isCollapsed={sidebarCollapsed} setIsCollapsed={setSidebarCollapsed} />
      </div>
      <main className="flex-1 overflow-auto histology-mto1-app">
        <HistologyApp />
      </main>
    </div>
  )
}
