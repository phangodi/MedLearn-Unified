import { Sidebar } from '@/components/layout/Sidebar'
import { useState, useEffect } from 'react'
import { FlashcardsApp } from '@/apps/flashcards/FlashcardsApp'

export function FlashcardsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  // Auto-collapse sidebar on flashcards page for more room
  useEffect(() => {
    setSidebarCollapsed(true)
    localStorage.setItem('sidebarCollapsed', 'true')
  }, [])

  return (
    <div className="min-h-screen flex bg-background">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} isCollapsed={sidebarCollapsed} setIsCollapsed={setSidebarCollapsed} />
      <div className="flex-1 flex flex-col">
        <main className="flex-1 overflow-auto">
          <FlashcardsApp />
        </main>
      </div>
    </div>
  )
}
