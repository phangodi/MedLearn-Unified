import { useState, useEffect } from 'react'
import { Sidebar } from '@/components/layout/Sidebar'
import { DashboardReturnMarker } from '@/components/layout/DashboardReturnMarker'
import HistologyApp from '@/apps/histology/mto2/App'
import '@/apps/histology/mto2/index.css'

export function HistologyMTO2Page() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  // Force light mode for this legacy app, restore user's preference on unmount
  useEffect(() => {
    const root = window.document.documentElement
    const originalTheme = root.classList.contains('dark') ? 'dark' : 'light'

    // Force light mode for this page
    root.classList.remove('dark', 'light')
    root.classList.add('light')

    // Auto-collapse sidebar on legacy app pages (desktop only)
    setSidebarCollapsed(true)
    localStorage.setItem('sidebarCollapsed', 'true')

    // Restore original theme when leaving this page
    return () => {
      root.classList.remove('dark', 'light')
      root.classList.add(originalTheme)
    }
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

      <main className="flex-1 overflow-auto histology-mto2-app">
        <HistologyApp />
      </main>
    </div>
  )
}
