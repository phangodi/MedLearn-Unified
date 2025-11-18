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

export interface PrivacySettings {
  postAnonymously: 'always' | 'ask' | 'never'
}

export interface Author {
  id: string
  name: string
  avatar: string
  role: string
  verified: boolean
  isAnonymous?: boolean  // Flag to indicate if this is an anonymous post
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
  isAnonymous?: boolean  // Whether this comment was made anonymously
  actualAuthorId?: string  // The real author ID (for owner's view of anonymous comments)
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
  isAnonymous?: boolean  // Whether this post was made anonymously
  actualAuthorId?: string  // The real author ID (for owner's view of anonymous posts)
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
  displayName?: string  // Optional username chosen by user
  email: string
  avatar: string
  role: string
  year?: number  // Medical school year (1-6)
  verified: boolean
  likedPosts: string[]
  bookmarkedPosts: string[]
  createdAt: Timestamp
  isAdmin?: boolean
  privacySettings?: PrivacySettings
  anonymousPseudonym?: string  // Generated medical-themed pseudonym
}
