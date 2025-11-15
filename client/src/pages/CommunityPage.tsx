import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { Button } from '@/components/ui/Button'
import { CommunitySidebar } from '@/components/community/CommunitySidebar'
import {
  LogOut,
  MessageSquare,
  Heart,
  Share2,
  Bookmark,
  TrendingUp,
  Users,
  FileText,
  Image as ImageIcon,
  Video,
  Paperclip,
  Send,
  Search,
  Filter,
  ChevronDown,
  MoreHorizontal,
  Award,
  Clock,
  Eye,
  Download,
  Play,
  Hash,
  X as XIcon,
  Trash2,
  Edit3,
  Pin,
  Loader2,
  AlertCircle
} from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useCommunityStore } from '@/store/communityStore'
import { sampleUsers, seedSampleData } from '@/lib/sampleData'
import { formatTimestamp } from '@/lib/dateUtils'
import type { Attachment } from '@/types/community'
import { InlineComments } from '@/components/community/InlineComments'

// Available topics/tags for posts
const availableTags = [
  'Physiology',
  'Histology',
  'Anatomy',
  'Pathology',
  'Pharmacology',
  'Biochemistry',
  'Cardiology',
  'Neuroscience',
  'Clinical Skills',
  'Exam Tips',
  'Study Notes',
  'Video Tutorial',
  'Microscopy',
  'Study Groups',
  'Research',
  'Case Studies'
]

const trendingTopics = [
  { name: 'Cardiology Finals', count: 234, trend: 'up' },
  { name: 'Histology Slides', count: 189, trend: 'up' },
  { name: 'Clinical Skills', count: 156, trend: 'stable' },
  { name: 'Study Groups', count: 134, trend: 'up' },
  { name: 'Exam Prep', count: 98, trend: 'down' }
]

const activeUsers = [
  { name: 'Sarah J.', avatar: '👩‍⚕️', online: true },
  { name: 'Michael C.', avatar: '👨‍🏫', online: true },
  { name: 'Emma W.', avatar: '👩‍🎓', online: true },
  { name: 'James M.', avatar: '👨‍🔬', online: false },
  { name: 'Demo User', avatar: '👤', online: true }
]

export function CommunityPage() {
  const navigate = useNavigate()
  const location = useLocation()

  // Community section control - check location state for initial section
  const [activeSection, setActiveSection] = useState(() => {
    const state = location.state as { activeSection?: string } | null
    return state?.activeSection || 'feed'
  })

  const [selectedFilter, setSelectedFilter] = useState('Most Recent')
  const [showFilterDropdown, setShowFilterDropdown] = useState(false)
  const [composeOpen, setComposeOpen] = useState(false)
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [showTagPicker, setShowTagPicker] = useState(false)
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [postContent, setPostContent] = useState('')
  const [showSeedButton, setShowSeedButton] = useState(true)
  const [seeding, setSeeding] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  // Get state and actions from store
  const {
    posts,
    currentUser,
    loading,
    error,
    setCurrentUser,
    fetchPosts,
    createPost,
    deletePost,
    toggleLike,
    toggleBookmark,
    togglePin
  } = useCommunityStore()

  // Initialize user on mount
  useEffect(() => {
    // Set demo user as current user (in production, this would come from auth)
    const demoUser = sampleUsers.find(u => u.id === 'demo-user')
    if (demoUser) {
      setCurrentUser(demoUser)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // Only run once on mount

  // Fetch posts on mount
  useEffect(() => {
    fetchPosts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // Only run once on mount

  // Update active section when navigating from other pages with state
  useEffect(() => {
    const state = location.state as { activeSection?: string } | null
    if (state?.activeSection) {
      setActiveSection(state.activeSection)
    }
  }, [location.state])

  const handleLogout = () => {
    navigate('/login')
  }

  const handleSeedData = async () => {
    setSeeding(true)
    const result = await seedSampleData()
    if (result.success) {
      await fetchPosts()
      setShowSeedButton(false)
    }
    setSeeding(false)
  }

  const handleSectionChange = (section: string) => {
    setActiveSection(section)
  }

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag))
    } else {
      if (selectedTags.length < 5) {
        setSelectedTags([...selectedTags, tag])
      }
    }
  }

  const removeTag = (tag: string) => {
    setSelectedTags(selectedTags.filter(t => t !== tag))
  }

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (!files || files.length === 0) return

    const newFiles = Array.from(files)
    setSelectedFiles(prev => [...prev, ...newFiles])
    event.target.value = ''
  }

  const removeFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index))
  }

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i]
  }

  const getFileType = (file: File): string => {
    if (file.type.startsWith('image/')) return 'image'
    if (file.type === 'application/pdf') return 'pdf'
    if (file.type.startsWith('video/')) return 'video'
    return 'other'
  }

  const getAttachmentFileType = (attachment: Attachment): 'pdf' | 'image' | 'video' | 'other' => {
    return attachment.type
  }

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return <FileText className="w-5 h-5" />
      case 'image':
        return <ImageIcon className="w-5 h-5" />
      case 'video':
        return <Video className="w-5 h-5" />
      default:
        return <Paperclip className="w-5 h-5" />
    }
  }

  const getFileColor = (type: string) => {
    switch (type) {
      case 'pdf':
        return 'bg-card dark:bg-card text-red-700 dark:text-red-400 border-border dark:border-border'
      case 'image':
        return 'bg-card dark:bg-card text-purple-700 dark:text-purple-400 border-border dark:border-border'
      case 'video':
        return 'bg-card dark:bg-card text-blue-700 dark:text-blue-400 border-border dark:border-border'
      default:
        return 'bg-card dark:bg-card text-gray-700 dark:text-gray-400 border-border dark:border-border'
    }
  }

  const handleCreatePost = async () => {
    if (!postContent.trim()) return

    // Convert File objects to Attachment format
    const attachments: Attachment[] = selectedFiles.map(file => ({
      type: getFileType(file) as 'pdf' | 'image' | 'video' | 'other',
      name: file.name,
      size: formatFileSize(file.size),
      downloads: 0,
      preview: getFileType(file) === 'image'
    }))

    await createPost(postContent, selectedTags, attachments)

    // Reset form
    setPostContent('')
    setSelectedTags([])
    setSelectedFiles([])
    setComposeOpen(false)
  }

  const handleToggleLike = async (postId: string) => {
    await toggleLike(postId)
  }

  const handleToggleBookmark = async (postId: string) => {
    await toggleBookmark(postId)
  }

  const handleTogglePin = async (postId: string) => {
    await togglePin(postId)
  }

  const handleDeletePost = async (postId: string) => {
    if (confirm('Are you sure you want to delete this post?')) {
      await deletePost(postId)
    }
  }

  // Filter posts based on active section AND search query
  const filteredPosts = posts.filter(post => {
    // First, filter by section
    if (currentUser) {
      switch (activeSection) {
        case 'feed':
          break // Show all posts
        case 'bookmarks':
          if (!post.bookmarkedBy.includes(currentUser.id)) return false
          break
        case 'liked':
          if (!post.likedBy.includes(currentUser.id)) return false
          break
        case 'my-posts':
          if (post.author.id !== currentUser.id) return false
          break
        default:
          break
      }
    }

    // Then, filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()

      // Search in post content
      if (post.content.toLowerCase().includes(query)) return true

      // Search in author name
      if (post.author.name.toLowerCase().includes(query)) return true

      // Search in tags
      if (post.tags.some(tag => tag.toLowerCase().includes(query))) return true

      // Search in attachment names
      if (post.attachments.some(att => att.name.toLowerCase().includes(query))) return true

      // If no match found, exclude this post
      return false
    }

    return true
  })

  // Sort posts based on selected filter
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    // Always keep pinned posts at the top
    if (a.pinned && !b.pinned) return -1
    if (!a.pinned && b.pinned) return 1

    // Then sort by selected filter
    switch (selectedFilter) {
      case 'Most Recent':
        return b.timestamp.toMillis() - a.timestamp.toMillis()
      case 'Most Liked':
        return b.likes - a.likes
      case 'Most Commented':
        return b.comments - a.comments
      case 'Most Viewed':
        return b.views - a.views
      case 'Oldest First':
        return a.timestamp.toMillis() - b.timestamp.toMillis()
      default:
        return b.timestamp.toMillis() - a.timestamp.toMillis()
    }
  })

  return (
    <div className="min-h-screen bg-background flex">
      {/* Community Sidebar */}
      <CommunitySidebar
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
      />

      <div className="flex-1 flex flex-col ml-64">
        <style>{`
          .navbar-btn {
            color: rgb(31, 41, 55);
            transition: all 0.2s;
          }
          .navbar-btn:hover {
            background-color: rgb(243, 244, 246);
            color: rgb(0, 0, 0);
          }
          .dark .navbar-btn {
            color: rgb(156, 163, 175);
          }
          .dark .navbar-btn:hover {
            background-color: rgb(55, 65, 81);
            color: rgb(243, 244, 246);
          }
        `}</style>

        {/* Header */}
        <header className="sticky top-0 z-30 bg-card/95 backdrop-blur-sm border-b border-border/50 h-[60px]">
          <div className="px-6 lg:px-10 h-full flex items-center justify-end">
            <div className="flex items-center gap-1.5">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                className="navbar-btn"
              >
                <LogOut className="w-4 h-4 mr-1.5" />
                <span className="hidden sm:inline text-sm">Logout</span>
              </Button>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 container mx-auto px-4 lg:px-6 py-6">
          {/* Error Display */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 p-4 bg-red-100 dark:bg-red-900/20 border border-red-300 dark:border-red-700 rounded-lg flex items-center gap-2 text-red-800 dark:text-red-300"
            >
              <AlertCircle className="w-5 h-5" />
              {error}
            </motion.div>
          )}

          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent mb-2">
                  Student Community
                </h1>
                <p className="text-muted-foreground">
                  Share knowledge, collaborate, and succeed together
                </p>
              </div>
              <div className="flex gap-2">
                {showSeedButton && posts.length === 0 && (
                  <Button
                    onClick={handleSeedData}
                    disabled={seeding}
                    variant="outline"
                    className="gap-2"
                  >
                    {seeding ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Seeding...
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4" />
                        Load Sample Data
                      </>
                    )}
                  </Button>
                )}
                <Button
                  onClick={() => setComposeOpen(!composeOpen)}
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  New Post
                </Button>
              </div>
            </div>

            {/* Search and Filter Bar */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search posts, files, or topics..."
                  className="w-full pl-10 pr-10 py-2.5 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
                {/* Clear search button */}
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-muted rounded-full transition-colors"
                    title="Clear search"
                  >
                    <XIcon className="w-4 h-4 text-muted-foreground" />
                  </button>
                )}
              </div>

              {/* Filter Dropdown */}
              <div className="relative">
                <Button
                  variant="outline"
                  className="gap-2 min-w-[160px] justify-between"
                  onClick={() => setShowFilterDropdown(!showFilterDropdown)}
                >
                  <div className="flex items-center gap-2">
                    <Filter className="w-4 h-4" />
                    {selectedFilter}
                  </div>
                  <ChevronDown className={`w-4 h-4 transition-transform ${showFilterDropdown ? 'rotate-180' : ''}`} />
                </Button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {showFilterDropdown && (
                    <>
                      {/* Backdrop to close dropdown */}
                      <div
                        className="fixed inset-0 z-10"
                        onClick={() => setShowFilterDropdown(false)}
                      />

                      {/* Dropdown Content */}
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-xl z-20 overflow-hidden"
                      >
                        <div className="py-1">
                          {['Most Recent', 'Most Liked', 'Most Commented', 'Most Viewed', 'Oldest First'].map((filter) => (
                            <button
                              key={filter}
                              onClick={() => {
                                setSelectedFilter(filter)
                                setShowFilterDropdown(false)
                              }}
                              className={`w-full px-4 py-2.5 text-left text-sm transition-colors ${
                                selectedFilter === filter
                                  ? 'bg-primary/10 text-primary font-medium'
                                  : 'hover:bg-muted text-foreground'
                              }`}
                            >
                              {filter}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Search Results Counter */}
            {searchQuery && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <Search className="w-4 h-4" />
                <span>
                  Found {filteredPosts.length} {filteredPosts.length === 1 ? 'result' : 'results'} for "{searchQuery}"
                </span>
              </motion.div>
            )}
          </motion.div>

          {/* Compose Area */}
          <AnimatePresence>
            {composeOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-6 overflow-hidden"
              >
                <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xl shadow-md">
                      {currentUser?.avatar || '👤'}
                    </div>
                    <div className="flex-1 space-y-4">
                      <textarea
                        value={postContent}
                        onChange={(e) => setPostContent(e.target.value)}
                        placeholder="Share your knowledge, ask questions, or upload study materials..."
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        rows={4}
                      />

                      {/* File Inputs */}
                      <input
                        type="file"
                        id="image-upload"
                        accept="image/*"
                        multiple
                        onChange={handleFileSelect}
                        className="hidden"
                      />
                      <input
                        type="file"
                        id="pdf-upload"
                        accept=".pdf"
                        multiple
                        onChange={handleFileSelect}
                        className="hidden"
                      />
                      <input
                        type="file"
                        id="video-upload"
                        accept="video/*"
                        multiple
                        onChange={handleFileSelect}
                        className="hidden"
                      />

                      {/* File Selection Buttons */}
                      <div className="flex gap-2 flex-wrap">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => document.getElementById('image-upload')?.click()}
                          className="px-4 py-2 bg-card text-blue-600 dark:text-blue-400 rounded-lg border border-border flex items-center gap-2 hover:bg-muted transition-colors"
                          type="button"
                        >
                          <ImageIcon className="w-4 h-4" />
                          Image
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => document.getElementById('pdf-upload')?.click()}
                          className="px-4 py-2 bg-card text-red-600 dark:text-red-400 rounded-lg border border-border flex items-center gap-2 hover:bg-muted transition-colors"
                          type="button"
                        >
                          <FileText className="w-4 h-4" />
                          PDF
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => document.getElementById('video-upload')?.click()}
                          className="px-4 py-2 bg-card text-purple-600 dark:text-purple-400 rounded-lg border border-border flex items-center gap-2 hover:bg-muted transition-colors"
                          type="button"
                        >
                          <Video className="w-4 h-4" />
                          Video
                        </motion.button>
                      </div>

                      {/* Selected Files Preview */}
                      {selectedFiles.length > 0 && (
                        <div className="space-y-2">
                          <p className="text-sm font-medium text-foreground">
                            Attached Files ({selectedFiles.length})
                          </p>
                          {selectedFiles.map((file, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className={`p-3 rounded-lg border flex items-center justify-between ${getFileColor(getFileType(file))}`}
                            >
                              <div className="flex items-center gap-3 flex-1 min-w-0">
                                <div className="w-10 h-10 rounded-lg bg-muted/30 dark:bg-muted/30 flex items-center justify-center flex-shrink-0">
                                  {getFileIcon(getFileType(file))}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="font-medium text-sm truncate">
                                    {file.name}
                                  </p>
                                  <p className="text-xs opacity-75">
                                    {formatFileSize(file.size)}
                                  </p>
                                </div>
                              </div>
                              <button
                                onClick={() => removeFile(index)}
                                className="p-1.5 rounded-lg hover:bg-red-100 dark:hover:bg-red-950/50 text-red-600 dark:text-red-400 transition-colors flex-shrink-0"
                                title="Remove file"
                              >
                                <XIcon className="w-4 h-4" />
                              </button>
                            </motion.div>
                          ))}
                        </div>
                      )}

                      {/* Tag Selection System */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <label className="text-sm font-medium text-foreground flex items-center gap-2">
                            <Hash className="w-4 h-4 text-primary" />
                            Topics/Tags {selectedTags.length > 0 && `(${selectedTags.length}/5)`}
                          </label>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setShowTagPicker(!showTagPicker)}
                            className="text-xs"
                          >
                            {showTagPicker ? 'Hide Topics' : 'Add Topics'}
                          </Button>
                        </div>

                        {/* Selected Tags Display */}
                        {selectedTags.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {selectedTags.map((tag) => (
                              <motion.div
                                key={tag}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                                className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium flex items-center gap-2 border border-primary/20"
                              >
                                #{tag}
                                <button
                                  onClick={() => removeTag(tag)}
                                  className="hover:bg-primary/20 rounded-full p-0.5 transition-colors"
                                >
                                  <XIcon className="w-3 h-3" />
                                </button>
                              </motion.div>
                            ))}
                          </div>
                        )}

                        {/* Tag Picker Dropdown */}
                        <AnimatePresence>
                          {showTagPicker && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="p-3 bg-muted/30 rounded-lg border border-border max-h-40 overflow-y-auto">
                                <div className="flex flex-wrap gap-2">
                                  {availableTags.map((tag) => (
                                    <button
                                      key={tag}
                                      onClick={() => toggleTag(tag)}
                                      className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                                        selectedTags.includes(tag)
                                          ? 'bg-primary text-primary-foreground'
                                          : 'bg-background hover:bg-primary/10 text-foreground hover:text-primary border border-border'
                                      }`}
                                    >
                                      #{tag}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="text-xs text-muted-foreground">
                          {selectedTags.length === 0
                            ? 'Add topics to help others find your post'
                            : `${5 - selectedTags.length} more tags available`
                          }
                        </div>
                        <div className="flex gap-2">
                          <Button variant="ghost" onClick={() => setComposeOpen(false)}>
                            Cancel
                          </Button>
                          <Button
                            onClick={handleCreatePost}
                            disabled={!postContent.trim()}
                            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white"
                          >
                            <Send className="w-4 h-4 mr-2" />
                            Post
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Loading State */}
          {loading && posts.length === 0 && (
            <div className="flex justify-center items-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          )}

          {/* Empty State */}
          {!loading && posts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <MessageSquare className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-xl font-semibold mb-2">No posts yet</h3>
              <p className="text-muted-foreground mb-4">
                Be the first to share knowledge with the community!
              </p>
              {showSeedButton && (
                <Button onClick={handleSeedData} disabled={seeding}>
                  {seeding ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Loading Sample Data...
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4 mr-2" />
                      Load Sample Data
                    </>
                  )}
                </Button>
              )}
            </motion.div>
          )}

          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Posts Feed */}
            <div className="lg:col-span-2 space-y-4">
              {sortedPosts.map((post, index) => {
                const isLiked = currentUser ? post.likedBy.includes(currentUser.id) : false
                const isBookmarked = currentUser ? post.bookmarkedBy.includes(currentUser.id) : false
                const isUserAdmin = currentUser?.isAdmin || false

                return (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`bg-card border rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all duration-300 backdrop-blur-none ${
                      post.pinned ? 'border-blue-500/50 shadow-blue-500/10' : 'border-border'
                    }`}
                    style={{ backgroundColor: 'var(--card)', opacity: 1 }}
                  >
                    {/* Pinned Badge */}
                    {post.pinned && (
                      <div className="px-6 pt-3 pb-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-b border-blue-500/20">
                        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                          <Pin className="w-4 h-4 fill-current" />
                          <span className="text-xs font-semibold uppercase tracking-wide">
                            Pinned by Admin
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Post Header */}
                    <div className="p-6 pb-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex gap-3">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl shadow-md">
                            {post.author.avatar}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-semibold text-foreground">
                                {post.author.name}
                              </h3>
                              {post.author.verified && (
                                <Award className="w-4 h-4 text-blue-500" />
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {post.author.role}
                            </p>
                            <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {formatTimestamp(post.timestamp)}
                              </div>
                              <div className="flex items-center gap-1">
                                <Eye className="w-3 h-3" />
                                {post.views}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Admin Controls */}
                        <div className="flex gap-1">
                          {isUserAdmin && (
                            <>
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950/30 text-blue-600 dark:text-blue-400 transition-colors"
                                title="Edit Post"
                              >
                                <Edit3 className="w-4 h-4" />
                              </motion.button>
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleTogglePin(post.id)}
                                className={`p-2 rounded-lg transition-colors hover:bg-background ${
                                  post.pinned
                                    ? 'text-blue-600 dark:text-blue-400'
                                    : 'text-muted-foreground hover:text-blue-600'
                                }`}
                                title={post.pinned ? 'Unpin Post' : 'Pin Post'}
                              >
                                <Pin className={`w-4 h-4 ${post.pinned ? 'fill-current' : ''}`} />
                              </motion.button>
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleDeletePost(post.id)}
                                className="p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/30 text-red-600 dark:text-red-400 transition-colors"
                                title="Delete Post"
                              >
                                <Trash2 className="w-4 h-4" />
                              </motion.button>
                            </>
                          )}
                          {!isUserAdmin && (
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          )}
                        </div>
                      </div>

                      {/* Post Content */}
                      <p className="text-foreground mb-4 leading-relaxed">
                        {post.content}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium hover:bg-primary/20 cursor-pointer transition-colors"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Attachments */}
                      {post.attachments.length > 0 && (
                        <div className="space-y-2 mb-4">
                          {post.attachments.map((attachment, i) => (
                            <motion.div
                              key={i}
                              whileHover={{ scale: 1.02 }}
                              className={`p-4 rounded-lg border flex items-center justify-between cursor-pointer transition-all ${getFileColor(getAttachmentFileType(attachment))}`}
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-muted/30 dark:bg-muted/30 flex items-center justify-center">
                                  {attachment.type === 'video' ? (
                                    <Play className="w-5 h-5" />
                                  ) : (
                                    getFileIcon(attachment.type)
                                  )}
                                </div>
                                <div>
                                  <p className="font-medium text-sm">
                                    {attachment.name}
                                  </p>
                                  <div className="flex items-center gap-3 text-xs opacity-75">
                                    <span>{attachment.size}</span>
                                    {attachment.downloads !== undefined && (
                                      <span className="flex items-center gap-1">
                                        <Download className="w-3 h-3" />
                                        {attachment.downloads}
                                      </span>
                                    )}
                                    {attachment.duration && (
                                      <span>{attachment.duration}</span>
                                    )}
                                  </div>
                                </div>
                              </div>
                              <Button size="sm" variant="ghost">
                                <Download className="w-4 h-4" />
                              </Button>
                            </motion.div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Inline Comments Section with Integrated Actions */}
                    <InlineComments
                      postId={post.id}
                      commentCount={post.comments}
                      likes={post.likes}
                      shares={post.shares}
                      isLiked={isLiked}
                      isBookmarked={isBookmarked}
                      onToggleLike={() => handleToggleLike(post.id)}
                      onToggleBookmark={() => handleToggleBookmark(post.id)}
                    />
                  </motion.div>
                )
              })}
            </div>

            {/* Sidebar - Trending & Active Users */}
            <div className="space-y-6">
              {/* Trending Topics */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-card border border-border rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <h2 className="font-bold text-lg">Trending Topics</h2>
                </div>
                <div className="space-y-3">
                  {trendingTopics.map((topic, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors group"
                    >
                      <div className="flex-1">
                        <p className="font-medium text-sm group-hover:text-primary transition-colors">
                          {topic.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {topic.count} posts
                        </p>
                      </div>
                      <TrendingUp
                        className={`w-4 h-4 ${
                          topic.trend === 'up'
                            ? 'text-green-500'
                            : topic.trend === 'down'
                            ? 'text-red-500'
                            : 'text-gray-500'
                        }`}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Active Users */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-card border border-border rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-5 h-5 text-secondary" />
                  <h2 className="font-bold text-lg">Active Now</h2>
                </div>
                <div className="space-y-3">
                  {activeUsers.map((user, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
                    >
                      <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-lg shadow-md">
                          {user.avatar}
                        </div>
                        {user.online && (
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-card rounded-full" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{user.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {user.online ? 'Online' : 'Offline'}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
