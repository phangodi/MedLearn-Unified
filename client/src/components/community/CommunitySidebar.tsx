import { motion } from 'framer-motion'
import {
  Home,
  Compass,
  Bell,
  MessageCircle,
  Bookmark,
  User,
  Heart,
  FileText
} from 'lucide-react'

interface CommunitySidebarProps {
  activeSection: string
  onSectionChange: (section: string) => void
  onHomeClick: () => void
}

const menuItems = [
  { id: 'feed', label: 'Home', icon: Home, description: 'Your personalized feed' },
  { id: 'explore', label: 'Explore', icon: Compass, description: 'Discover new content' },
  { id: 'notifications', label: 'Notifications', icon: Bell, description: 'Stay updated', badge: 3 },
  { id: 'messages', label: 'Messages', icon: MessageCircle, description: 'Direct messages', badge: 5 },
  { id: 'bookmarks', label: 'Bookmarks', icon: Bookmark, description: 'Saved posts' },
  { id: 'liked', label: 'Liked', icon: Heart, description: 'Posts you liked' },
  { id: 'my-posts', label: 'My Posts', icon: FileText, description: 'Your contributions' },
  { id: 'profile', label: 'Profile', icon: User, description: 'Your profile' },
]

export function CommunitySidebar({ activeSection, onSectionChange, onHomeClick }: CommunitySidebarProps) {
  return (
    <div className="w-64 h-screen bg-card border-r border-border flex flex-col fixed left-0 top-0 z-40">
      {/* Logo / Home Button */}
      <div className="p-6 border-b border-border">
        <button
          onClick={onHomeClick}
          className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-muted transition-all group"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
            <Home className="w-4 h-4 text-primary-foreground" />
          </div>
          <div className="text-left">
            <div className="font-bold text-sm bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Lara's MedLearn
            </div>
            <div className="text-xs text-muted-foreground">
              Back to Dashboard
            </div>
          </div>
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 overflow-y-auto p-4">
        <div className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.id

            return (
              <motion.button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all relative
                  ${isActive
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'hover:bg-muted text-foreground'
                  }
                `}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-primary-foreground' : 'text-muted-foreground'}`} />
                <div className="flex-1 text-left">
                  <div className={`font-medium text-sm ${isActive ? 'text-primary-foreground' : ''}`}>
                    {item.label}
                  </div>
                  {!isActive && (
                    <div className="text-xs text-muted-foreground">
                      {item.description}
                    </div>
                  )}
                </div>
                {item.badge && (
                  <div className="w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center font-bold">
                    {item.badge}
                  </div>
                )}
              </motion.button>
            )
          })}
        </div>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-border">
        <div className="text-xs text-muted-foreground text-center">
          <p className="font-medium mb-1">Community Hub</p>
          <p>Share knowledge, learn together</p>
        </div>
      </div>
    </div>
  )
}
