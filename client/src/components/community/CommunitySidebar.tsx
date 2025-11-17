import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import {
  Home,
  Compass,
  Bookmark,
  User,
  Heart,
  FileText,
  ArrowLeft,
  Users
} from 'lucide-react'
import { NotificationSidebarItem } from '@/components/notifications/NotificationSidebarItem'

interface CommunitySidebarProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

const menuItems = [
  { id: 'feed', label: 'Feed', icon: Home, description: 'All posts' },
  { id: 'explore', label: 'Explore', icon: Compass, description: 'Discover content' },
  { id: 'bookmarks', label: 'Bookmarks', icon: Bookmark, description: 'Saved posts' },
  { id: 'liked', label: 'Liked', icon: Heart, description: 'Posts you liked' },
  { id: 'my-posts', label: 'My Posts', icon: FileText, description: 'Your posts' },
  { id: 'profile', label: 'Profile', icon: User, description: 'Your profile' },
]

export function CommunitySidebar({ activeSection, onSectionChange }: CommunitySidebarProps) {
  const navigate = useNavigate()

  return (
    <div className="w-64 h-screen bg-card border-r border-border flex flex-col fixed left-0 top-0 z-40">
      {/* Logo / Branding */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3 w-full">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-md">
            <Users className="w-4 h-4 text-primary-foreground" />
          </div>
          <div className="text-left flex-1">
            <div className="font-bold text-sm bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Lara's MedLearn
            </div>
            <div className="text-xs text-muted-foreground">
              Community Hub
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 overflow-y-auto p-4">
        <style>{`
          /* Light mode colors - matching Dashboard sidebar */
          .community-sidebar-item {
            color: rgb(107, 114, 128); /* gray-500 - lighter for unselected */
            transition: all 0.2s;
          }
          .community-sidebar-item:hover {
            background-color: rgb(243, 244, 246); /* gray-100 - more visible */
            color: rgb(0, 0, 0);
          }
          .community-sidebar-item.active {
            background-color: rgb(229, 231, 235); /* gray-200 */
            color: rgb(0, 0, 0);
            font-weight: 600;
          }
          .community-sidebar-icon {
            color: rgb(107, 114, 128); /* gray-500 - lighter for unselected */
            transition: all 0.2s;
          }
          .community-sidebar-item:hover .community-sidebar-icon {
            color: rgb(0, 0, 0);
          }
          .community-sidebar-item.active .community-sidebar-icon {
            color: rgb(0, 0, 0);
          }

          /* Dark mode colors - same hierarchy as light mode */
          .dark .community-sidebar-item {
            color: rgb(156, 163, 175); /* gray-400 - medium brightness for unselected */
          }
          .dark .community-sidebar-item:hover {
            background-color: rgb(55, 65, 81); /* gray-700 - visible but subtle */
            color: rgb(243, 244, 246); /* gray-100 - bright on hover */
          }
          .dark .community-sidebar-item.active {
            background-color: rgb(55, 65, 81); /* gray-700 - darker background for selected */
            color: rgb(243, 244, 246); /* gray-100 - brightest for selected */
            font-weight: 600;
          }
          .dark .community-sidebar-icon {
            color: rgb(156, 163, 175); /* gray-400 - medium brightness for unselected */
          }
          .dark .community-sidebar-item:hover .community-sidebar-icon {
            color: rgb(243, 244, 246); /* gray-100 - bright on hover */
          }
          .dark .community-sidebar-item.active .community-sidebar-icon {
            color: rgb(243, 244, 246); /* gray-100 - brightest for selected */
          }
        `}</style>

        <div className="space-y-1">
          {/* Back to Dashboard - Prominent Position */}
          <motion.button
            onClick={() => navigate('/dashboard')}
            whileHover={{ scale: 1.02, x: 4 }}
            whileTap={{ scale: 0.98 }}
            className="community-sidebar-item w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-3"
          >
            <ArrowLeft className="community-sidebar-icon w-5 h-5" />
            <div className="flex-1 text-left">
              <div className="text-sm font-semibold">
                Back to Dashboard
              </div>
            </div>
          </motion.button>

          {/* Divider */}
          <div className="h-px bg-border my-2"></div>

          {/* Notifications - Working notification system */}
          <NotificationSidebarItem isCollapsed={false} />

          {/* Divider */}
          <div className="h-px bg-border my-2"></div>

          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.id

            return (
              <motion.button
                key={item.id}
                onClick={() => {
                  // Navigate to profile page if profile is clicked
                  if (item.id === 'profile') {
                    navigate('/profile')
                  } else {
                    onSectionChange(item.id)
                  }
                }}
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
                className={`community-sidebar-item ${isActive ? 'active' : ''} w-full flex items-center gap-3 px-4 py-3 rounded-lg relative`}
              >
                <Icon className="community-sidebar-icon w-5 h-5" />
                <div className="flex-1 text-left">
                  <div className="text-sm">
                    {item.label}
                  </div>
                  {!isActive && (
                    <div className="text-xs opacity-75">
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
          <p>Collaborate & Learn Together</p>
        </div>
      </div>
    </div>
  )
}
