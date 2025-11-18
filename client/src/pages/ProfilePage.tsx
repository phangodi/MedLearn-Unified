import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import {
  LogOut,
  Settings,
  Calendar,
  Heart,
  MessageSquare,
  FileText,
  Bookmark,
  CheckCircle2,
  ThumbsUp,
  Eye
} from 'lucide-react'
import { useCommunityStore } from '@/store/communityStore'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { CommunitySidebar } from '@/components/community/CommunitySidebar'
import { PrivacySettings } from '@/components/settings/PrivacySettings'
import { AvatarPicker } from '@/components/settings/AvatarPicker'
import { formatTimestamp } from '@/lib/dateUtils'
import type { Post } from '@/types/community'
import type { PrivacySettings as PrivacySettingsType } from '@/types/community'
import { useAuth } from '@/contexts/AuthContext'
import { generateMedicalPseudonym } from '@/lib/anonymousNames'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '@/firebase/config'

export function ProfilePage() {
  const navigate = useNavigate()
  const { userProfile, signOut } = useAuth()
  const { posts, comments, currentUser, setCurrentUser, fetchPosts, fetchComments, toggleLike, toggleBookmark, updatePrivacySettings } = useCommunityStore()
  const [activeTab, setActiveTab] = useState<'posts' | 'activity' | 'privacy'>('posts')
  const [composeOpen, setComposeOpen] = useState(false)

  // Initialize user from auth
  useEffect(() => {
    if (userProfile) {
      // Map Firebase userProfile to communityStore UserProfile
      const communityUser = {
        id: userProfile.uid,
        email: userProfile.email,
        name: userProfile.name,
        avatar: userProfile.avatar || '👤',
        role: userProfile.role === 'superadmin' || userProfile.role === 'admin'
          ? 'Admin'
          : userProfile.year
            ? `Medical Student Year ${userProfile.year}`
            : 'Medical Student',
        verified: userProfile.isAdmin || false,
        createdAt: userProfile.createdAt,
        bio: '',
        posts: [],
        followers: 0,
        following: 0,
        likedPosts: [],
        bookmarkedPosts: [],
        isAdmin: userProfile.isAdmin || false,
        year: userProfile.year,
        privacySettings: userProfile.privacySettings || {
          postAnonymously: 'ask',
        },
        anonymousPseudonym: userProfile.anonymousPseudonym || generateMedicalPseudonym(userProfile.uid),
      }
      setCurrentUser(communityUser)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userProfile])

  useEffect(() => {
    fetchPosts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Profiles are private - only the owner can view their profile
  // Note: In the current implementation, /profile route shows currentUser's own profile
  // If we later implement /profile/:userId routes, add a check here:
  // if (userId !== currentUser?.id) { navigate('/community'); return null; }
  if (!currentUser) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Not Logged In</h2>
          <button
            onClick={() => navigate('/login')}
            className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
          >
            Go to Login
          </button>
        </div>
      </div>
    )
  }

  // Calculate user statistics
  // Include both regular posts and anonymous posts made by this user
  const userPosts = posts.filter(p =>
    p.author.id === currentUser.id || p.actualAuthorId === currentUser.id
  )
  const totalLikesReceived = userPosts.reduce((sum, p) => sum + p.likes, 0)
  const userComments = comments.filter(c => c.author.id === currentUser.id)
  const totalBookmarks = posts.filter(p => p.bookmarkedBy.includes(currentUser.id)).length

  const handleLogout = async () => {
    try {
      await signOut()
      navigate('/login')
    } catch (error) {
      console.error('Error logging out:', error)
    }
  }

  const handleLike = async (postId: string) => {
    await toggleLike(postId)
    await fetchPosts()
  }

  const handleBookmark = async (postId: string) => {
    await toggleBookmark(postId)
    await fetchPosts()
  }

  const handleSavePrivacySettings = async (
    settings: PrivacySettingsType,
    year?: number,
    newPseudonym?: string
  ) => {
    // Update privacy settings
    await updatePrivacySettings(settings, year, newPseudonym)

    // Refresh user profile if needed
    if (userProfile && (year !== undefined || newPseudonym !== undefined)) {
      const updatedUser = {
        ...currentUser!,
        year: year !== undefined ? year : currentUser!.year,
        anonymousPseudonym: newPseudonym || currentUser!.anonymousPseudonym,
        role:
          userProfile.role === 'superadmin' || userProfile.role === 'admin'
            ? 'Admin'
            : year
              ? `Medical Student Year ${year}`
              : currentUser?.year
                ? `Medical Student Year ${currentUser.year}`
                : 'Medical Student',
      }
      setCurrentUser(updatedUser)
    }
  }

  const handleSaveAvatar = async (newAvatar: string) => {
    if (!userProfile || !currentUser) return

    try {
      // Update in Firebase
      const userRef = doc(db, 'users', userProfile.uid)
      await updateDoc(userRef, {
        avatar: newAvatar
      })

      // Update local state
      setCurrentUser({
        ...currentUser,
        avatar: newAvatar
      })
    } catch (error) {
      console.error('Error updating avatar:', error)
      throw error
    }
  }

  return (
    <div className="min-h-screen bg-background flex">
      {/* Community Sidebar */}
      <CommunitySidebar
        activeSection="profile"
        onSectionChange={(section) => {
          if (section === 'profile') return
          // Navigate to community page with the selected section
          navigate('/community', { state: { activeSection: section } })
        }}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col ml-64">
        {/* Header */}
        <header className="sticky top-0 z-30 bg-card/80 backdrop-blur-md border-b border-border">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-foreground">
                  Profile
                </h1>
                <p className="text-sm text-muted-foreground">
                  View and manage your profile
                </p>
              </div>
              <div className="flex items-center gap-3">
                <ThemeToggle />
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="text-sm font-medium">Logout</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Profile Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-6 py-8">
            {/* Profile Header Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-card border border-border rounded-xl overflow-hidden mb-6"
            >
              <div className="relative h-32 bg-gradient-to-br from-muted to-muted-foreground/20">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
              </div>

              <div className="px-6 pb-6">
                <div className="flex items-end gap-4 -mt-12">
                  {/* Avatar */}
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-muted to-muted-foreground/30 flex items-center justify-center text-4xl border-4 border-card shadow-xl">
                      {currentUser.avatar}
                    </div>
                    {currentUser.verified && (
                      <div className="absolute bottom-0 right-0 w-7 h-7 bg-muted-foreground rounded-full flex items-center justify-center border-2 border-card">
                        <CheckCircle2 className="w-4 h-4 text-card" />
                      </div>
                    )}
                  </div>

                  {/* User Info */}
                  <div className="flex-1 mt-4">
                    <div className="flex items-center gap-2 mb-1">
                      <h2 className="text-2xl font-bold">{currentUser.name}</h2>
                      {currentUser.verified && (
                        <CheckCircle2 className="w-5 h-5 text-muted-foreground" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{currentUser.role}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>Joined {formatTimestamp(currentUser.createdAt)}</span>
                    </div>
                  </div>

                  {/* Edit Profile Button */}
                  <button
                    onClick={() => setActiveTab('privacy')}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors"
                  >
                    <Settings className="w-4 h-4" />
                    <span className="text-sm font-medium">Edit Profile</span>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-card border border-border rounded-xl p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                    <FileText className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{userPosts.length}</div>
                    <div className="text-xs text-muted-foreground">Posts</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-card border border-border rounded-xl p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                    <Heart className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{totalLikesReceived}</div>
                    <div className="text-xs text-muted-foreground">Likes Received</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-card border border-border rounded-xl p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{userComments.length}</div>
                    <div className="text-xs text-muted-foreground">Comments Made</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-card border border-border rounded-xl p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                    <Bookmark className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{totalBookmarks}</div>
                    <div className="text-xs text-muted-foreground">Bookmarks</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Tabs */}
            <div className="flex gap-4 mb-6 border-b border-border">
              <button
                onClick={() => setActiveTab('posts')}
                className={`px-4 py-3 text-sm font-normal transition-colors relative ${
                  activeTab === 'posts'
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                My Posts ({userPosts.length})
                {activeTab === 'posts' && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground"
                  />
                )}
              </button>
              <button
                onClick={() => setActiveTab('activity')}
                className={`px-4 py-3 text-sm font-normal transition-colors relative ${
                  activeTab === 'activity'
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Activity
                {activeTab === 'activity' && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground"
                  />
                )}
              </button>
              <button
                onClick={() => setActiveTab('privacy')}
                className={`px-4 py-3 text-sm font-normal transition-colors relative ${
                  activeTab === 'privacy'
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Privacy Settings
                {activeTab === 'privacy' && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground"
                  />
                )}
              </button>
            </div>

            {/* Tab Content */}
            {activeTab === 'posts' ? (
              <div className="space-y-4">
                {userPosts.length === 0 ? (
                  <div className="text-center py-12">
                    <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                    <p className="text-muted-foreground">No posts yet</p>
                    <button
                      onClick={() => navigate('/community', { state: { openCompose: true } })}
                      className="mt-4 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
                    >
                      Create Your First Post
                    </button>
                  </div>
                ) : (
                  userPosts.map((post, index) => (
                    <PostCard
                      key={post.id}
                      post={post}
                      index={index}
                      currentUser={currentUser}
                      onLike={handleLike}
                      onBookmark={handleBookmark}
                    />
                  ))
                )}
              </div>
            ) : activeTab === 'privacy' ? (
              <div className="space-y-6">
                {/* Avatar Picker */}
                <AvatarPicker
                  currentAvatar={currentUser?.avatar || '👤'}
                  onSave={handleSaveAvatar}
                />

                {/* Privacy Settings */}
                {currentUser?.privacySettings && currentUser?.anonymousPseudonym && (
                  <PrivacySettings
                    settings={currentUser.privacySettings}
                    anonymousPseudonym={currentUser.anonymousPseudonym}
                    year={currentUser.year}
                    onSave={handleSavePrivacySettings}
                  />
                )}
              </div>
            ) : (
              <div className="space-y-6">
                {/* Recent Comments */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5" />
                    Recent Comments ({userComments.length})
                  </h3>
                  {userComments.length === 0 ? (
                    <div className="text-center py-8 bg-muted/30 rounded-lg">
                      <MessageSquare className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">No comments yet</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {userComments.slice(0, 10).map((comment, index) => (
                        <motion.div
                          key={comment.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="bg-card border border-border rounded-lg p-4"
                        >
                          <p className="text-sm mb-2">{comment.content}</p>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <span>{formatTimestamp(comment.timestamp)}</span>
                            <span className="flex items-center gap-1">
                              <Heart className="w-3 h-3" />
                              {comment.likes}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Liked Posts */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Heart className="w-5 h-5" />
                    Liked Posts
                  </h3>
                  {posts.filter(p => p.likedBy.includes(currentUser.id)).length === 0 ? (
                    <div className="text-center py-8 bg-muted/30 rounded-lg">
                      <Heart className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">No liked posts yet</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {posts
                        .filter(p => p.likedBy.includes(currentUser.id))
                        .slice(0, 5)
                        .map((post, index) => (
                          <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-card border border-border rounded-lg p-4"
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-sm font-medium">{post.author.name}</span>
                              <span className="text-xs text-muted-foreground">•</span>
                              <span className="text-xs text-muted-foreground">{formatTimestamp(post.timestamp)}</span>
                            </div>
                            <p className="text-sm line-clamp-2">{post.content}</p>
                            <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Heart className="w-3 h-3" />
                                {post.likes}
                              </span>
                              <span className="flex items-center gap-1">
                                <MessageSquare className="w-3 h-3" />
                                {post.comments}
                              </span>
                            </div>
                          </motion.div>
                        ))}
                    </div>
                  )}
                </div>

                {/* Bookmarked Posts */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Bookmark className="w-5 h-5" />
                    Bookmarked Posts ({totalBookmarks})
                  </h3>
                  {totalBookmarks === 0 ? (
                    <div className="text-center py-8 bg-muted/30 rounded-lg">
                      <Bookmark className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">No bookmarked posts yet</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {posts
                        .filter(p => p.bookmarkedBy.includes(currentUser.id))
                        .slice(0, 5)
                        .map((post, index) => (
                          <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-card border border-border rounded-lg p-4"
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-sm font-medium">{post.author.name}</span>
                              <span className="text-xs text-muted-foreground">•</span>
                              <span className="text-xs text-muted-foreground">{formatTimestamp(post.timestamp)}</span>
                            </div>
                            <p className="text-sm line-clamp-2">{post.content}</p>
                            <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Heart className="w-3 h-3" />
                                {post.likes}
                              </span>
                              <span className="flex items-center gap-1">
                                <MessageSquare className="w-3 h-3" />
                                {post.comments}
                              </span>
                            </div>
                          </motion.div>
                        ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}

// Post Card Component (reused from CommunityPage)
function PostCard({
  post,
  index,
  currentUser,
  onLike,
  onBookmark
}: {
  post: Post
  index: number
  currentUser: any
  onLike: (postId: string) => void
  onBookmark: (postId: string) => void
}) {
  const isLiked = post.likedBy.includes(currentUser?.id || '')
  const isBookmarked = post.bookmarkedBy.includes(currentUser?.id || '')

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="bg-card border border-border rounded-xl overflow-hidden hover:border-muted-foreground/30 hover:shadow-md transition-all duration-300"
    >
      <div className="p-6">
        {/* Post Header */}
        <div className="flex items-start gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-muted to-muted-foreground/30 flex items-center justify-center text-lg flex-shrink-0 shadow-sm">
            {post.author.avatar}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-semibold">{post.author.name}</span>
              {post.author.verified && (
                <CheckCircle2 className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              )}
              <span className="text-sm text-muted-foreground">• {post.author.role}</span>
            </div>
            <div className="text-xs text-muted-foreground">
              {formatTimestamp(post.timestamp)}
            </div>
          </div>
        </div>

        {/* Post Content */}
        <p className="mb-4 whitespace-pre-wrap">{post.content}</p>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {post.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2.5 py-0.5 bg-card text-muted-foreground text-xs rounded-md font-normal border border-border hover:bg-muted/50 cursor-pointer transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Attachments */}
        {post.attachments.length > 0 && (
          <div className="grid grid-cols-1 gap-2 mb-4">
            {post.attachments.map((attachment, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border hover:bg-muted/30 transition-colors cursor-pointer"
              >
                <FileText className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm truncate">{attachment.name}</div>
                  <div className="text-xs text-muted-foreground">{attachment.size}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Post Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center gap-6">
            {/* Like */}
            <button
              onClick={() => onLike(post.id)}
              className="flex items-center gap-2 group"
            >
              <div
                className={`p-2 rounded-full transition-colors ${
                  isLiked
                    ? 'bg-muted'
                    : 'hover:bg-muted'
                }`}
              >
                <Heart
                  className={`w-4 h-4 transition-colors ${
                    isLiked ? 'text-foreground fill-current' : 'text-muted-foreground'
                  }`}
                />
              </div>
              <span className="text-sm text-muted-foreground">{post.likes}</span>
            </button>

            {/* Comment */}
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-full hover:bg-muted">
                <MessageSquare className="w-4 h-4 text-muted-foreground" />
              </div>
              <span className="text-sm text-muted-foreground">{post.comments}</span>
            </div>

            {/* Views */}
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{post.views}</span>
            </div>
          </div>

          {/* Bookmark */}
          <button
            onClick={() => onBookmark(post.id)}
            className={`p-2 rounded-full transition-colors ${
              isBookmarked
                ? 'bg-muted'
                : 'hover:bg-muted'
            }`}
          >
            <Bookmark
              className={`w-4 h-4 transition-colors ${
                isBookmarked ? 'text-foreground fill-current' : 'text-muted-foreground'
              }`}
            />
          </button>
        </div>
      </div>
    </motion.div>
  )
}
