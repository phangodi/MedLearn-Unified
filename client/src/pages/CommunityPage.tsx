import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { Button } from '@/components/ui/Button'
import { Sidebar } from '@/components/layout/Sidebar'
import { AngledBackground } from '@/components/layout/AngledBackground'
import { BorderFrame } from '@/components/layout/BorderFrame'
import { Particles } from '@/components/ui/Particles'
import {
  LogOut,
  Activity,
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
  Pin
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

// Type definitions
interface Attachment {
  type: string
  name: string
  size: string
  downloads?: number
  preview?: boolean
  duration?: string
  views?: number
}

interface Author {
  name: string
  avatar: string
  role: string
  verified: boolean
}

interface Post {
  id: number
  author: Author
  content: string
  timestamp: string
  likes: number
  comments: number
  shares: number
  views: number
  tags: string[]
  attachments: Attachment[]
  liked: boolean
  bookmarked: boolean
  pinned?: boolean  // Admin can pin important posts to top
  isAdmin?: boolean  // Whether the current user viewing has admin privileges
}

// Mock data for posts
const mockPosts: Post[] = [
  {
    id: 1,
    author: {
      name: 'Sarah Johnson',
      avatar: '👩‍⚕️',
      role: 'Med Student - Year 3',
      verified: true
    },
    content: 'Just finished reviewing the cardiovascular physiology module! Here are my comprehensive notes on cardiac cycle regulation. Hope this helps everyone preparing for finals! 📚',
    timestamp: '2 hours ago',
    likes: 45,
    comments: 12,
    shares: 8,
    views: 234,
    tags: ['Physiology', 'Cardiology', 'Study Notes'],
    attachments: [
      {
        type: 'pdf',
        name: 'Cardiac_Cycle_Notes.pdf',
        size: '2.4 MB',
        downloads: 23
      },
      {
        type: 'image',
        name: 'ECG_diagram.png',
        size: '450 KB',
        preview: true
      }
    ],
    liked: false,
    bookmarked: true
  },
  {
    id: 2,
    author: {
      name: 'Dr. Michael Chen',
      avatar: '👨‍🏫',
      role: 'Teaching Assistant',
      verified: true
    },
    content: 'Quick tip for tomorrow\'s histology exam: Focus on distinguishing between different types of epithelial tissue. I\'ve uploaded high-resolution microscopy slides with annotations!',
    timestamp: '4 hours ago',
    likes: 89,
    comments: 24,
    shares: 15,
    views: 456,
    tags: ['Histology', 'Exam Tips', 'Microscopy'],
    attachments: [
      {
        type: 'image',
        name: 'epithelial_tissue_comparison.jpg',
        size: '1.8 MB',
        preview: true
      },
      {
        type: 'pdf',
        name: 'Histology_Quick_Reference.pdf',
        size: '3.1 MB',
        downloads: 67
      }
    ],
    liked: true,
    bookmarked: false,
    pinned: true,  // This post is pinned by admin
    isAdmin: true  // Current user has admin privileges (for demo)
  },
  {
    id: 3,
    author: {
      name: 'Emma Williams',
      avatar: '👩‍🎓',
      role: 'Med Student - Year 2',
      verified: false
    },
    content: 'Created a visual mind map for the nervous system pathways. This really helped me connect all the concepts together. Feel free to download and modify for your own studies!',
    timestamp: '6 hours ago',
    likes: 67,
    comments: 18,
    shares: 22,
    views: 389,
    tags: ['Anatomy', 'Neuroscience', 'Study Tools'],
    attachments: [
      {
        type: 'pdf',
        name: 'Nervous_System_Mindmap.pdf',
        size: '5.2 MB',
        downloads: 45
      }
    ],
    liked: true,
    bookmarked: true
  },
  {
    id: 4,
    author: {
      name: 'James Martinez',
      avatar: '👨‍🔬',
      role: 'Med Student - Year 4',
      verified: true
    },
    content: 'Video tutorial on interpreting arterial blood gas (ABG) results! Covered all the major acid-base disorders with clinical cases. Let me know if you have questions!',
    timestamp: '1 day ago',
    likes: 123,
    comments: 31,
    shares: 28,
    views: 678,
    tags: ['Clinical Skills', 'Pathophysiology', 'Video Tutorial'],
    attachments: [
      {
        type: 'video',
        name: 'ABG_Interpretation_Tutorial.mp4',
        size: '45.6 MB',
        duration: '12:34',
        views: 234
      }
    ],
    liked: false,
    bookmarked: true
  }
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
  { name: 'Lisa K.', avatar: '👩‍⚕️', online: true }
]

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
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [selectedFilter] = useState('All Posts')
  const [posts, setPosts] = useState(mockPosts)
  const [composeOpen, setComposeOpen] = useState(false)
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [showTagPicker, setShowTagPicker] = useState(false)
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [postContent, setPostContent] = useState('')

  const handleLogout = () => {
    navigate('/login')
  }

  const toggleLike = (postId: number) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          liked: !post.liked,
          likes: post.liked ? post.likes - 1 : post.likes + 1
        }
      }
      return post
    }))
  }

  const toggleBookmark = (postId: number) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          bookmarked: !post.bookmarked
        }
      }
      return post
    }))
  }

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag))
    } else {
      if (selectedTags.length < 5) {  // Limit to 5 tags
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

    // Reset input so same file can be selected again if removed
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

  return (
    <div className="min-h-screen bg-background flex lg:ml-[80px] lg:mr-[80px]">
      {/* Animated particle background */}
      <Particles quantity={40} ease={60} />

      {/* Subtle background pattern */}
      <AngledBackground />

      {/* Continuous diagonal-line border frame */}
      <BorderFrame />

      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
        isCollapsed={sidebarCollapsed}
        setIsCollapsed={setSidebarCollapsed}
      />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-30 bg-card/95 backdrop-blur-sm border-b border-border/50 h-[60px]">
          <div className="px-6 lg:px-10 h-full flex items-center justify-between">
            {/* Show branding when sidebar is collapsed */}
            {sidebarCollapsed && (
              <div className="hidden lg:flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-md">
                  <Activity className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="font-bold text-base bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Lara's MedLearn
                </span>
              </div>
            )}

            {/* Right side actions */}
            <div className={`flex items-center gap-1.5 ${!sidebarCollapsed ? 'ml-auto' : ''}`}>
              <ThemeToggle />
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-1.5" />
                <span className="hidden sm:inline text-sm">Logout</span>
              </Button>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 container mx-auto px-4 lg:px-6 py-6">
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
              <Button
                onClick={() => setComposeOpen(!composeOpen)}
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                New Post
              </Button>
            </div>

            {/* Search and Filter Bar */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search posts, files, or topics..."
                  className="w-full pl-10 pr-4 py-2.5 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
              <Button variant="outline" className="gap-2">
                <Filter className="w-4 h-4" />
                {selectedFilter}
                <ChevronDown className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>

          {/* Compose Area (Expandable) */}
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
                      👤
                    </div>
                    <div className="flex-1 space-y-4">
                      <textarea
                        value={postContent}
                        onChange={(e) => setPostContent(e.target.value)}
                        placeholder="Share your knowledge, ask questions, or upload study materials..."
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        rows={4}
                      />

                      {/* Hidden File Inputs */}
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
                          <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white">
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

          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Posts Feed - Takes up 2 columns on large screens */}
            <div className="lg:col-span-2 space-y-4">
              {posts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-card border rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all duration-300 ${
                    post.pinned ? 'border-blue-500/50 shadow-blue-500/10' : 'border-border'
                  }`}
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
                              {post.timestamp}
                            </div>
                            <div className="flex items-center gap-1">
                              <Eye className="w-3 h-3" />
                              {post.views}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Admin Controls or Regular Menu */}
                      <div className="flex gap-1">
                        {post.isAdmin && (
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
                              className="p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/30 text-red-600 dark:text-red-400 transition-colors"
                              title="Delete Post"
                            >
                              <Trash2 className="w-4 h-4" />
                            </motion.button>
                          </>
                        )}
                        {!post.isAdmin && (
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
                            className={`p-4 rounded-lg border flex items-center justify-between cursor-pointer transition-all ${getFileColor(attachment.type)}`}
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

                  {/* Post Actions */}
                  <div className="px-6 py-4 bg-muted/30 border-t border-border flex items-center justify-between">
                    <div className="flex gap-1">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => toggleLike(post.id)}
                        className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all hover:bg-background ${
                          post.liked ? 'text-red-600 dark:text-red-400' : ''
                        }`}
                      >
                        <Heart
                          className={`w-4 h-4 ${post.liked ? 'fill-current' : ''}`}
                        />
                        <span className="text-sm font-medium">{post.likes}</span>
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 rounded-lg hover:bg-background flex items-center gap-2 transition-all"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span className="text-sm font-medium">{post.comments}</span>
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 rounded-lg hover:bg-background flex items-center gap-2 transition-all"
                      >
                        <Share2 className="w-4 h-4" />
                        <span className="text-sm font-medium">{post.shares}</span>
                      </motion.button>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => toggleBookmark(post.id)}
                      className={`p-2 rounded-lg transition-all hover:bg-background ${
                        post.bookmarked ? 'text-blue-600 dark:text-blue-400' : ''
                      }`}
                    >
                      <Bookmark
                        className={`w-4 h-4 ${post.bookmarked ? 'fill-current' : ''}`}
                      />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
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
