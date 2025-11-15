import { Timestamp } from 'firebase/firestore'

export interface Attachment {
  type: 'pdf' | 'image' | 'video' | 'other'
  name: string
  size: string
  url?: string
  storageRef?: string
  downloads?: number
  preview?: boolean
  duration?: string
  views?: number
}

export interface Author {
  id: string
  name: string
  avatar: string
  role: string
  verified: boolean
}

export interface Comment {
  id: string
  postId: string
  author: Author
  content: string
  timestamp: Timestamp
  likes: number
  likedBy: string[]
  parentCommentId?: string  // For nested replies
}

export interface Post {
  id: string
  author: Author
  content: string
  timestamp: Timestamp
  likes: number
  likedBy: string[]  // Array of user IDs who liked this post
  comments: number
  shares: number
  views: number
  viewedBy: string[]  // Array of user IDs who viewed this post
  tags: string[]
  attachments: Attachment[]
  bookmarkedBy: string[]  // Array of user IDs who bookmarked this post
  pinned?: boolean
  pinnedBy?: string  // Admin user ID who pinned it
  createdAt: Timestamp
  updatedAt: Timestamp
}

// For display purposes (with computed properties)
export interface PostDisplay extends Omit<Post, 'timestamp' | 'createdAt' | 'updatedAt'> {
  timestampDisplay: string
  liked: boolean
  bookmarked: boolean
  isAdmin?: boolean
}

export interface UserProfile {
  id: string
  name: string
  email: string
  avatar: string
  role: string
  verified: boolean
  likedPosts: string[]
  bookmarkedPosts: string[]
  createdAt: Timestamp
  isAdmin?: boolean
}
