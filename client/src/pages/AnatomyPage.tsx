import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Sidebar } from '@/components/layout/Sidebar'
import { BorderFrame } from '@/components/layout/BorderFrame'
import { Particles } from '@/components/ui/Particles'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { Button } from '@/components/ui/Button'
import { LogOut, User } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useAuth } from '@/contexts/AuthContext'

export function AnatomyPage() {
  const navigate = useNavigate()
  const { signOut } = useAuth()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  // Auto-expand sidebar on subject landing pages
  useEffect(() => {
    setSidebarCollapsed(false)
    localStorage.setItem('sidebarCollapsed', 'false')
  }, [])

  const handleLogout = async () => {
    await signOut()
    navigate('/login')
  }

  const topics = [
    // HIDDEN: CNS Neuroanatomy - Can be re-enabled later by uncommenting
    // { id: 'cns', name: 'CNS Neuroanatomy', title: 'Brainstem & Cranial Nerves', description: 'Complete study guide: Brainstem structures, all 12 cranial nerves, quick reference & practice quiz', enabled: true, image: '/subjects/anatomy1.png', path: '/anatomy/cns' },
    { id: 'peripheral', name: 'Anatomy Part 2', title: 'New Anatomy Module', description: 'Coming Soon', enabled: false, image: '/subjects/anatomy2.png', path: '#' },
  ]

  return (
    <div className="min-h-screen bg-background flex">
      <Particles quantity={60} ease={50} />
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} isCollapsed={sidebarCollapsed} setIsCollapsed={setSidebarCollapsed} />
      <div className="flex-1 flex flex-col relative z-10">
        <BorderFrame sidebarCollapsed={sidebarCollapsed} />
        <header className="sticky top-0 z-30 bg-card/95 backdrop-blur-sm border-b border-border/50 h-[60px]">
          <div className="px-6 lg:px-10 h-full flex items-center justify-end">
            <div className="flex items-center gap-1.5"><ThemeToggle /><Button variant="ghost" size="sm" onClick={handleLogout}><LogOut className="w-4 h-4 mr-1.5" /><span className="hidden sm:inline text-sm">Logout</span></Button></div>
          </div>
        </header>
        <main className="flex-1 w-full mx-auto px-6 lg:px-10 py-8 relative z-10 max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4"><User className="w-12 h-12 text-emerald-600 dark:text-emerald-400" /><h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight pb-1 bg-gradient-to-r from-foreground to-emerald-600 dark:to-emerald-400 bg-clip-text text-transparent">Anatomy</h1></div>
            <p className="text-base lg:text-lg text-muted-foreground">Select a topic to begin studying</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
            {topics.map((topic, idx) => (
              <motion.div key={topic.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} className={topic.enabled ? 'cursor-pointer' : 'cursor-not-allowed opacity-60'} onClick={() => topic.enabled && navigate(topic.path)}>
                <div className="relative bg-card border-2 border-border/50 rounded-xl overflow-hidden h-[320px] hover:border-primary hover:shadow-[0_0_60px_rgba(16,185,129,0.4)] transition-all group">
                  <div className="absolute inset-0 transition-transform group-hover:scale-110"><img src={topic.image} alt={topic.title} className="w-full h-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent" /></div>
                  <div className="relative z-10 h-full flex flex-col justify-end p-6">
                    {!topic.enabled && <div className="absolute top-4 right-4"><span className="text-xs font-semibold text-white bg-black/50 px-3 py-1.5 rounded-full">Coming Soon</span></div>}
                    <div className="mb-2"><span className="inline-block px-3 py-1 rounded-lg bg-emerald-600/90 text-white text-xs font-semibold shadow-lg">{topic.name}</span></div>
                    <h3 className="text-2xl font-bold mb-1 drop-shadow-lg text-white group-hover:bg-gradient-to-r group-hover:from-emerald-300 group-hover:to-green-300 group-hover:bg-clip-text group-hover:text-transparent transition-all">{topic.title}</h3>
                    <p className="text-sm mb-2 text-white/90 font-medium">{topic.description}</p>
                    {topic.enabled && <span className="inline-flex items-center text-sm font-semibold text-white group-hover:text-emerald-200">Start Learning<svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></span>}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
