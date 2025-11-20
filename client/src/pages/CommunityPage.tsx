import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { Button } from '@/components/ui/Button'
import { CommunitySidebar } from '@/components/community/CommunitySidebar'
import { AnonymousToggle } from '@/components/community/AnonymousToggle'
import { TrendingDiscussions } from '@/components/community/TrendingDiscussions'
import {
  LogOut,
  MessageSquare,
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
  Download,
  Play,
  Hash,
  X as XIcon,
  Pin,
  Loader2,
  AlertCircle,
  GraduationCap
} from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useCommunityStore } from '@/store/communityStore'
import { seedSampleData } from '@/lib/sampleData'
import { formatTimestamp } from '@/lib/dateUtils'
import type { Attachment } from '@/types/community'
import { InlineComments } from '@/components/community/InlineComments'
import { features } from '@/config/features'
import { useAuth } from '@/contexts/AuthContext'
import { generateMedicalPseudonym } from '@/lib/anonymousNames'

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

export function CommunityPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const { userProfile, signOut } = useAuth()

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
  const [postTitle, setPostTitle] = useState('')
  const [postContent, setPostContent] = useState('')
  const [showSeedButton, setShowSeedButton] = useState(true)
  const [seeding, setSeeding] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [postAnonymously, setPostAnonymously] = useState(false)
  const [expandedPosts, setExpandedPosts] = useState<Set<string>>(new Set())
  const [validationErrors, setValidationErrors] = useState<{
    title?: string
    content?: string
  }>({})
  const [sidebarOpen, setSidebarOpen] = useState(false)

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

  // Initialize anonymous posting based on user's privacy settings
  useEffect(() => {
    if (currentUser?.privacySettings) {
      const { postAnonymously: preference } = currentUser.privacySettings
      if (preference === 'always') {
        setPostAnonymously(true)
      } else if (preference === 'never') {
        setPostAnonymously(false)
      }
      // 'ask' leaves it to user's choice via toggle
    }
  }, [currentUser])

  // Initialize user from auth
  useEffect(() => {
    if (userProfile) {
      // Map Firebase userProfile to communityStore UserProfile
      const communityUser = {
        id: userProfile.uid,
        email: userProfile.email,
        name: userProfile.name,
        avatar: userProfile.avatar || '👤', // Default avatar if none
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
        // Ensure privacy settings and pseudonym exist with defaults
        privacySettings: userProfile.privacySettings || {
          postAnonymously: 'ask',
          showYear: true,
        },
        anonymousPseudonym: userProfile.anonymousPseudonym || generateMedicalPseudonym(userProfile.uid),
      }
      setCurrentUser(communityUser)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userProfile])

  // Fetch posts on mount
  useEffect(() => {
    fetchPosts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // Only run once on mount

  // Update active section when navigating from other pages with state
  useEffect(() => {
    const state = location.state as { activeSection?: string; openCompose?: boolean } | null
    if (state?.activeSection) {
      setActiveSection(state.activeSection)
    }
    if (state?.openCompose) {
      setComposeOpen(true)
      // Clear the state to prevent reopening on refresh
      window.history.replaceState({}, document.title)
    }
  }, [location.state])

  // Intersection Observer for view counting (impression-based like Twitter/LinkedIn)
  useEffect(() => {
    if (!currentUser) return

    const { incrementViews } = useCommunityStore.getState()
    const viewedPosts = new Set<string>()
    const viewTimers = new Map<string, NodeJS.Timeout>()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const postId = entry.target.getAttribute('data-post-id')
          if (!postId) return

          // Post is 50%+ visible
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            // Only count if not already viewed by this user
            if (!viewedPosts.has(postId)) {
              // Wait 1 second of visibility before counting view
              const timer = setTimeout(() => {
                incrementViews(postId)
                viewedPosts.add(postId)
              }, 1000)
              viewTimers.set(postId, timer)
            }
          } else {
            // Post left viewport, cancel pending timer
            const timer = viewTimers.get(postId)
            if (timer) {
              clearTimeout(timer)
              viewTimers.delete(postId)
            }
          }
        })
      },
      {
        threshold: 0.5, // 50% visibility
        rootMargin: '0px'
      }
    )

    // Observe all post elements
    const postElements = document.querySelectorAll('[data-post-id]')
    postElements.forEach((el) => observer.observe(el))

    return () => {
      observer.disconnect()
      viewTimers.forEach((timer) => clearTimeout(timer))
    }
  }, [currentUser, posts]) // Re-run when posts change

  const handleLogout = async () => {
    try {
      await signOut()
      navigate('/login')
    } catch (error) {
      console.error('Error logging out:', error)
    }
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
    // Professional gray theme for all file types
    return 'bg-card dark:bg-card text-muted-foreground border-border dark:border-border'
  }

  const handleCreatePost = async () => {
    // Validate form
    const errors: { title?: string; content?: string } = {}

    if (!postTitle.trim()) {
      errors.title = 'Title is required to post'
    }
    if (!postContent.trim()) {
      errors.content = 'Content is required to post'
    }

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors)
      return
    }

    // Clear any previous errors
    setValidationErrors({})

    // Convert File objects to Attachment format
    const attachments: Attachment[] = selectedFiles.map(file => ({
      type: getFileType(file) as 'pdf' | 'image' | 'video' | 'other',
      name: file.name,
      size: formatFileSize(file.size),
      downloads: 0,
      preview: getFileType(file) === 'image'
    }))

    await createPost(postTitle, postContent, selectedTags, attachments, postAnonymously)

    // Reset form
    setPostTitle('')
    setPostContent('')
    setSelectedTags([])
    setSelectedFiles([])
    setComposeOpen(false)

    // Reset anonymity to user's default preference
    if (currentUser?.privacySettings) {
      const { postAnonymously: preference } = currentUser.privacySettings
      if (preference === 'always') {
        setPostAnonymously(true)
      } else if (preference === 'never') {
        setPostAnonymously(false)
      } else {
        setPostAnonymously(false) // Reset to false for 'ask' mode
      }
    }
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

  const handleToggleExpand = (postId: string) => {
    setExpandedPosts(prev => {
      const newSet = new Set(prev)
      if (newSet.has(postId)) {
        newSet.delete(postId) // Collapse
      } else {
        newSet.add(postId) // Expand
      }
      return newSet
    })
  }

  const handleTrendingPostClick = (postId: string) => {
    // Expand the post if not already expanded
    if (!expandedPosts.has(postId)) {
      handleToggleExpand(postId)
    }

    // Scroll to the post
    setTimeout(() => {
      const postElement = document.getElementById(`post-${postId}`)
      if (postElement) {
        postElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }, 100)
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
          // Include both regular posts and anonymous posts made by this user
          if (post.author.id !== currentUser.id && post.actualAuthorId !== currentUser.id) return false
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
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />

      <div className="flex-1 flex flex-col lg:ml-64">
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
        <main className="flex-1 mx-auto px-4 lg:px-6 py-6 max-w-7xl">
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
                {showSeedButton && posts.length === 0 && userProfile?.isAdmin && (
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
                  className="gap-2 min-w-[160px] justify-between hover:bg-muted hover:text-foreground"
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
                                  ? 'bg-muted text-foreground font-normal'
                                  : 'hover:bg-muted/50 text-muted-foreground font-normal'
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
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-muted to-muted-foreground/30 flex items-center justify-center text-xl shadow-sm">
                      {currentUser?.avatar || '👤'}
                    </div>
                    <div className="flex-1 space-y-4">
                      {/* Post Title */}
                      <div>
                        <input
                          type="text"
                          value={postTitle}
                          onChange={(e) => {
                            setPostTitle(e.target.value)
                            // Clear title error when user starts typing
                            if (validationErrors.title) {
                              setValidationErrors(prev => ({ ...prev, title: undefined }))
                            }
                          }}
                          placeholder="Give your post a title..."
                          className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:ring-2 transition-all text-lg font-semibold ${
                            validationErrors.title
                              ? 'border-red-500 focus:ring-red-500/50'
                              : 'border-border focus:ring-primary/50'
                          }`}
                          maxLength={100}
                        />
                        {validationErrors.title && (
                          <motion.p
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-1.5 text-sm text-red-500 dark:text-red-400 flex items-center gap-1"
                          >
                            <AlertCircle className="w-4 h-4" />
                            {validationErrors.title}
                          </motion.p>
                        )}
                      </div>

                      {/* Post Content */}
                      <div>
                        <textarea
                          value={postContent}
                          onChange={(e) => {
                            setPostContent(e.target.value)
                            // Clear content error when user starts typing
                            if (validationErrors.content) {
                              setValidationErrors(prev => ({ ...prev, content: undefined }))
                            }
                          }}
                          placeholder="Share your knowledge, ask questions, or upload study materials..."
                          className={`w-full px-4 py-3 bg-background border rounded-lg resize-none focus:outline-none focus:ring-2 transition-all ${
                            validationErrors.content
                              ? 'border-red-500 focus:ring-red-500/50'
                              : 'border-border focus:ring-primary/50'
                          }`}
                          rows={4}
                        />
                        {validationErrors.content && (
                          <motion.p
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-1.5 text-sm text-red-500 dark:text-red-400 flex items-center gap-1"
                          >
                            <AlertCircle className="w-4 h-4" />
                            {validationErrors.content}
                          </motion.p>
                        )}
                      </div>

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
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => document.getElementById('image-upload')?.click()}
                          className="px-3 py-1.5 bg-card text-muted-foreground rounded-lg border border-border flex items-center gap-2 hover:bg-muted transition-colors text-sm"
                          type="button"
                        >
                          <ImageIcon className="w-4 h-4" />
                          Image
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => document.getElementById('pdf-upload')?.click()}
                          className="px-3 py-1.5 bg-card text-muted-foreground rounded-lg border border-border flex items-center gap-2 hover:bg-muted transition-colors text-sm"
                          type="button"
                        >
                          <FileText className="w-4 h-4" />
                          PDF
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => document.getElementById('video-upload')?.click()}
                          className="px-3 py-1.5 bg-card text-muted-foreground rounded-lg border border-border flex items-center gap-2 hover:bg-muted transition-colors text-sm"
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
                          <div className="flex flex-wrap gap-1.5">
                            {selectedTags.map((tag) => (
                              <motion.div
                                key={tag}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                                className="px-2.5 py-1 bg-muted text-muted-foreground rounded-md text-xs font-normal flex items-center gap-1.5 border border-border"
                              >
                                #{tag}
                                <button
                                  onClick={() => removeTag(tag)}
                                  className="hover:bg-background rounded-full p-0.5 transition-colors"
                                >
                                  <XIcon className="w-2.5 h-2.5" />
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
                                <div className="flex flex-wrap gap-1.5">
                                  {availableTags.map((tag) => (
                                    <button
                                      key={tag}
                                      onClick={() => toggleTag(tag)}
                                      className={`px-2.5 py-1 rounded-md text-xs font-normal transition-all ${
                                        selectedTags.includes(tag)
                                          ? 'bg-foreground/10 text-foreground border border-foreground/20'
                                          : 'bg-background hover:bg-muted text-muted-foreground border border-border'
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

                      {/* Anonymous Posting Toggle */}
                      {features.allowAnonymousPosts && currentUser?.anonymousPseudonym && (
                        <AnonymousToggle
                          isAnonymous={postAnonymously}
                          onToggle={setPostAnonymously}
                          pseudonym={currentUser.anonymousPseudonym}
                        />
                      )}

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
              {showSeedButton && userProfile?.isAdmin && (
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
                const isExpanded = expandedPosts.has(post.id)
                const contentPreview = post.content.length > 150
                  ? post.content.slice(0, 150) + '...'
                  : post.content

                return (
                  <motion.div
                    key={post.id}
                    id={`post-${post.id}`}
                    data-post-id={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`bg-card border rounded-xl overflow-hidden hover:border-muted-foreground/30 hover:shadow-md transition-all duration-300 ${
                      post.pinned ? 'border-muted-foreground/40 shadow-sm' : 'border-border'
                    }`}
                  >
                    {/* Compact Post Header */}
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2 min-w-0 flex-1">
                          {/* Small Avatar */}
                          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-muted to-muted-foreground/30 flex items-center justify-center text-lg shadow-sm flex-shrink-0 overflow-hidden">
                            {post.author.avatar.startsWith('http') ? (
                              <img
                                src={post.author.avatar}
                                alt={post.author.name}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              post.author.avatar
                            )}
                          </div>

                          {/* Compact User Info */}
                          <div className="flex items-center gap-2 min-w-0 flex-1">
                            <div className="flex items-center gap-1.5 min-w-0">
                              <h3 className="font-semibold text-sm text-foreground truncate">
                                {post.author.name}
                              </h3>
                              {post.author.verified && (
                                <Award className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
                              )}
                              {/* Year Badge - Only show if role is not empty */}
                              {post.author.role && (
                                <span className="text-xs text-muted-foreground flex-shrink-0">
                                  {post.author.role}
                                </span>
                              )}
                            </div>
                            <span className="text-muted-foreground text-xs">•</span>
                            <span className="text-xs text-muted-foreground whitespace-nowrap">
                              {formatTimestamp(post.timestamp)}
                            </span>
                            {post.pinned && (
                              <>
                                <span className="text-muted-foreground text-xs">•</span>
                                <div className="flex items-center gap-1 text-muted-foreground">
                                  <Pin className="w-3 h-3 fill-current" />
                                  <span className="text-xs">Pinned</span>
                                </div>
                              </>
                            )}
                          </div>
                        </div>

                        {/* Overflow Menu */}
                        <div className="relative flex-shrink-0">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0"
                          >
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>

                      {/* Post Title - Compact */}
                      <h2 className="text-base font-bold text-foreground mb-1.5 leading-tight">
                        {post.title}
                      </h2>

                      {/* Post Content - Always 2 lines when collapsed */}
                      <div
                        onClick={() => !isExpanded && handleToggleExpand(post.id)}
                        className={!isExpanded ? "cursor-pointer" : ""}
                      >
                        {!isExpanded ? (
                          <>
                            <p className="text-sm text-foreground/80 mb-2 leading-relaxed line-clamp-2">
                              {post.content}
                            </p>
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                handleToggleExpand(post.id)
                              }}
                              className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                            >
                              Read more
                            </button>
                          </>
                        ) : (
                          <>
                            <p className="text-sm text-foreground mb-3 leading-relaxed whitespace-pre-wrap">
                              {post.content}
                            </p>
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                handleToggleExpand(post.id)
                              }}
                              className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                            >
                              Show less
                            </button>
                          </>
                        )}
                      </div>

                      {/* Tags - Only show when expanded */}
                      {isExpanded && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-4 mt-4">
                          {post.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-0.5 bg-card text-muted-foreground rounded-md text-xs font-normal hover:bg-muted/50 cursor-pointer transition-colors border border-border"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Attachments - Only show when expanded */}
                      {isExpanded && post.attachments.length > 0 && (
                        <div className="space-y-2 mb-4">
                          {post.attachments.map((attachment, i) => (
                            <motion.div
                              key={i}
                              whileHover={{ scale: 1.01 }}
                              className="p-3 rounded-lg border border-border bg-card flex items-center gap-3 cursor-pointer transition-all hover:bg-muted/30"
                            >
                              <div className="flex-shrink-0">
                                {attachment.type === 'video' ? (
                                  <Play className="w-5 h-5 text-muted-foreground" />
                                ) : (
                                  getFileIcon(attachment.type)
                                )}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="font-medium text-sm truncate">
                                  {attachment.name}
                                </p>
                                <div className="flex items-center gap-3 text-xs text-muted-foreground">
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
                      isLiked={isLiked}
                      isBookmarked={isBookmarked}
                      onToggleLike={() => handleToggleLike(post.id)}
                      onToggleBookmark={() => handleToggleBookmark(post.id)}
                    />
                  </motion.div>
                )
              })}
            </div>

            {/* Sidebar - Trending Discussions */}
            <div className="space-y-6">
              {/* Trending Discussions - Always shown when feature is enabled */}
              {features.showTrendingDiscussions && (
                <TrendingDiscussions
                  posts={sortedPosts}
                  onPostClick={handleTrendingPostClick}
                  onNewPostClick={() => setComposeOpen(true)}
                />
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
