import { useState, useEffect } from 'react'
import { Sidebar } from '@/components/layout/Sidebar'
import AnatomyApp from '@/apps/anatomy/App'

export function AnatomyCNSPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  // Force light mode for this legacy app, restore user's preference on unmount
  useEffect(() => {
    const root = window.document.documentElement
    const originalTheme = root.classList.contains('dark') ? 'dark' : 'light'

    // Force light mode for this page
    root.classList.remove('dark', 'light')
    root.classList.add('light')

    // Restore original theme when leaving this page
    return () => {
      root.classList.remove('dark', 'light')
      root.classList.add(originalTheme)
    }
  }, [])

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
        <AnatomyApp />
      </main>
    </div>
  )
}
