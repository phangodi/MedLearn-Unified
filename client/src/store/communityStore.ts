import { create } from 'zustand'
import {
  collection,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  getDoc,
  query,
  orderBy,
  limit,
  where,
  Timestamp,
  arrayUnion,
  arrayRemove,
  increment,
  onSnapshot,
  writeBatch
} from 'firebase/firestore'
import { db } from '@/lib/firebase'
import type { Post, Comment, UserProfile, Attachment, PrivacySettings } from '@/types/community'
import { getAvatarForPseudonym } from '@/lib/anonymousNames'

interface CommunityState {
  // State
  posts: Post[]
  comments: Comment[]
  currentUser: UserProfile | null
  loading: boolean
  error: string | null

  // Actions
  setCurrentUser: (user: UserProfile | null) => void
  fetchPosts: () => Promise<void>
  fetchComments: (postId: string) => Promise<void>
  createPost: (title: string, content: string, tags: string[], attachments: Attachment[], isAnonymous?: boolean) => Promise<void>
  deletePost: (postId: string) => Promise<void>
  toggleLike: (postId: string) => Promise<void>
  toggleBookmark: (postId: string) => Promise<void>
  togglePin: (postId: string) => Promise<void>
  addComment: (postId: string, content: string, parentCommentId?: string, isAnonymous?: boolean) => Promise<void>
  deleteComment: (commentId: string, postId: string) => Promise<void>
  incrementViews: (postId: string) => Promise<void>
  subscribeToPost: (postId: string, callback: (post: Post) => void) => () => void
  updatePrivacySettings: (settings: PrivacySettings, year?: number, newPseudonym?: string) => Promise<void>
}

// Helper function to get role display with year if privacy settings allow
const getRoleDisplay = (user: UserProfile, isAnonymous: boolean): string => {
  // If user has enabled showYear and has a year set, show graduation cap + year number
  if (user.year && user.privacySettings?.showYear) {
    return `🎓 ${user.year}`
  }

  // If showYear is disabled, return empty string (no year info shown)
  return ''
}

export const useCommunityStore = create<CommunityState>((set, get) => ({
  // Initial state
  posts: [],
  comments: [],
  currentUser: null,
  loading: false,
  error: null,

  // Set current user
  setCurrentUser: (user) => {
    set({ currentUser: user })
  },

  // Fetch all posts
  fetchPosts: async () => {
    set({ loading: true, error: null })
    try {
      const postsRef = collection(db, 'posts')
      const q = query(postsRef, orderBy('createdAt', 'desc'), limit(50))
      const snapshot = await getDocs(q)

      const posts: Post[] = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as Post))

      set({ posts, loading: false })
    } catch (error) {
      console.error('Error fetching posts:', error)
      set({ error: 'Failed to fetch posts', loading: false })
    }
  },

  // Fetch comments for a post
  fetchComments: async (postId: string) => {
    try {
      const commentsRef = collection(db, 'comments')
      const q = query(
        commentsRef,
        where('postId', '==', postId),
        orderBy('timestamp', 'asc')
      )
      const snapshot = await getDocs(q)

      const comments: Comment[] = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as Comment))

      set({ comments })
    } catch (error) {
      console.error('Error fetching comments:', error)
    }
  },

  // Create a new post
  createPost: async (title: string, content: string, tags: string[], attachments: Attachment[], isAnonymous: boolean = false) => {
    const { currentUser } = get()
    if (!currentUser) {
      set({ error: 'You must be logged in to create a post' })
      return
    }

    // Validate required fields
    if (!title.trim()) {
      set({ error: 'Post title is required' })
      return
    }

    if (!isAnonymous) {
      if (!currentUser.id || !currentUser.name) {
        console.error('Missing required fields in currentUser:', {
          id: currentUser.id,
          name: currentUser.name,
          year: currentUser.year,
          avatar: currentUser.avatar
        })
        set({ error: 'User profile incomplete. Please refresh the page.' })
        return
      }
    }

    try {
      const postsRef = collection(db, 'posts')
      const now = Timestamp.now()

      // Get role display with year based on privacy settings
      const roleDisplay = getRoleDisplay(currentUser, isAnonymous)

      // Determine author display based on anonymity
      const authorDisplay = isAnonymous
        ? {
            id: 'anonymous', // Generic ID for display
            name: currentUser.anonymousPseudonym || 'Anonymous Medical Student',
            avatar: '👤', // Generic no-profile avatar for all anonymous posts
            role: roleDisplay,
            verified: false,
            isAnonymous: true
          }
        : {
            id: currentUser.id,
            name: currentUser.name,
            avatar: currentUser.avatar || '👤', // Fallback to default avatar
            role: roleDisplay,
            verified: currentUser.verified || false,
            isAnonymous: false
          }

      const newPost = {
        title: title.trim(),
        author: authorDisplay,
        content,
        timestamp: now,
        likes: 0,
        likedBy: [],
        comments: 0,
        shares: 0,
        views: 0,
        viewedBy: [],
        tags,
        attachments,
        bookmarkedBy: [],
        pinned: false,
        createdAt: now,
        updatedAt: now,
        isAnonymous,
        ...(isAnonymous && { actualAuthorId: currentUser.id }) // Only include when anonymous
      }

      await addDoc(postsRef, newPost)
      await get().fetchPosts() // Refresh posts
    } catch (error) {
      console.error('Error creating post:', error)
      set({ error: 'Failed to create post' })
    }
  },

  // Delete a post
  deletePost: async (postId: string) => {
    const { currentUser } = get()
    if (!currentUser?.isAdmin) {
      set({ error: 'Only admins can delete posts' })
      return
    }

    try {
      const batch = writeBatch(db)

      // Delete the post
      const postRef = doc(db, 'posts', postId)
      batch.delete(postRef)

      // Delete all comments for this post
      const commentsRef = collection(db, 'comments')
      const q = query(commentsRef, where('postId', '==', postId))
      const snapshot = await getDocs(q)
      snapshot.docs.forEach(doc => {
        batch.delete(doc.ref)
      })

      await batch.commit()
      await get().fetchPosts() // Refresh posts
    } catch (error) {
      console.error('Error deleting post:', error)
      set({ error: 'Failed to delete post' })
    }
  },

  // Toggle like on a post
  toggleLike: async (postId: string) => {
    const { currentUser } = get()
    if (!currentUser) {
      set({ error: 'You must be logged in to like posts' })
      return
    }

    // Get current post state for rollback
    const currentPost = get().posts.find(p => p.id === postId)
    if (!currentPost) return

    const isLiked = currentPost.likedBy?.includes(currentUser.id) || false

    // Optimistic update - update UI immediately
    set(state => ({
      posts: state.posts.map(p =>
        p.id === postId
          ? {
              ...p,
              liked: !isLiked,
              likes: Math.max(0, isLiked ? p.likes - 1 : p.likes + 1), // Prevent negative
              likedBy: isLiked
                ? p.likedBy.filter(id => id !== currentUser.id)
                : [...(p.likedBy || []), currentUser.id]
            }
          : p
      )
    }))

    try {
      const postRef = doc(db, 'posts', postId)
      const postSnap = await getDoc(postRef)

      if (!postSnap.exists()) {
        // Rollback on error
        set(state => ({
          posts: state.posts.map(p => p.id === postId ? currentPost : p)
        }))
        return
      }

      const post = postSnap.data() as Post
      const actualIsLiked = post.likedBy.includes(currentUser.id)

      if (actualIsLiked) {
        // Unlike - with safeguard against negative
        await updateDoc(postRef, {
          likedBy: arrayRemove(currentUser.id),
          likes: post.likes > 0 ? increment(-1) : 0,
          updatedAt: Timestamp.now()
        })
      } else {
        // Like
        await updateDoc(postRef, {
          likedBy: arrayUnion(currentUser.id),
          likes: increment(1),
          updatedAt: Timestamp.now()
        })
      }
    } catch (error) {
      console.error('Error toggling like:', error)
      // Rollback optimistic update
      set(state => ({
        posts: state.posts.map(p => p.id === postId ? currentPost : p)
      }))
      set({ error: 'Failed to like post' })
    }
  },

  // Toggle bookmark on a post
  toggleBookmark: async (postId: string) => {
    const { currentUser } = get()
    if (!currentUser) {
      set({ error: 'You must be logged in to bookmark posts' })
      return
    }

    // Get current post state for rollback
    const currentPost = get().posts.find(p => p.id === postId)
    if (!currentPost) return

    const isBookmarked = currentPost.bookmarkedBy?.includes(currentUser.id) || false

    // Optimistic update - update UI immediately
    set(state => ({
      posts: state.posts.map(p =>
        p.id === postId
          ? {
              ...p,
              bookmarkedBy: isBookmarked
                ? p.bookmarkedBy.filter(id => id !== currentUser.id)
                : [...(p.bookmarkedBy || []), currentUser.id]
            }
          : p
      )
    }))

    try {
      const postRef = doc(db, 'posts', postId)
      const postSnap = await getDoc(postRef)

      if (!postSnap.exists()) {
        // Rollback on error
        set(state => ({
          posts: state.posts.map(p => p.id === postId ? currentPost : p)
        }))
        return
      }

      const post = postSnap.data() as Post
      const actualIsBookmarked = post.bookmarkedBy.includes(currentUser.id)

      if (actualIsBookmarked) {
        // Remove bookmark
        await updateDoc(postRef, {
          bookmarkedBy: arrayRemove(currentUser.id),
          updatedAt: Timestamp.now()
        })
      } else {
        // Add bookmark
        await updateDoc(postRef, {
          bookmarkedBy: arrayUnion(currentUser.id),
          updatedAt: Timestamp.now()
        })
      }
    } catch (error) {
      console.error('Error toggling bookmark:', error)
      // Rollback optimistic update
      set(state => ({
        posts: state.posts.map(p => p.id === postId ? currentPost : p)
      }))
      set({ error: 'Failed to bookmark post' })
    }
  },

  // Toggle pin on a post (admin only)
  togglePin: async (postId: string) => {
    const { currentUser } = get()
    if (!currentUser?.isAdmin) {
      set({ error: 'Only admins can pin posts' })
      return
    }

    try {
      const postRef = doc(db, 'posts', postId)
      const postSnap = await getDoc(postRef)

      if (!postSnap.exists()) return

      const post = postSnap.data() as Post
      const isPinned = post.pinned || false

      await updateDoc(postRef, {
        pinned: !isPinned,
        pinnedBy: isPinned ? null : currentUser.id,
        updatedAt: Timestamp.now()
      })

      await get().fetchPosts() // Refresh to re-sort
    } catch (error) {
      console.error('Error toggling pin:', error)
      set({ error: 'Failed to pin post' })
    }
  },

  // Add a comment to a post
  addComment: async (postId: string, content: string, parentCommentId?: string, isAnonymous: boolean = false) => {
    const { currentUser } = get()
    if (!currentUser) {
      set({ error: 'You must be logged in to comment' })
      return
    }

    // Validate required fields for non-anonymous comments
    if (!isAnonymous) {
      if (!currentUser.id || !currentUser.name) {
        console.error('Missing required fields in currentUser:', {
          id: currentUser.id,
          name: currentUser.name,
          year: currentUser.year,
          avatar: currentUser.avatar
        })
        set({ error: 'User profile incomplete. Please refresh the page.' })
        return
      }
    }

    try {
      const commentsRef = collection(db, 'comments')

      // Get role display with year based on privacy settings
      const roleDisplay = getRoleDisplay(currentUser, isAnonymous)

      // Determine author display based on anonymity (same logic as posts)
      const authorDisplay = isAnonymous
        ? {
            id: 'anonymous', // Generic ID for display
            name: currentUser.anonymousPseudonym || 'Anonymous Medical Student',
            avatar: '👤', // Generic no-profile avatar for all anonymous comments
            role: roleDisplay,
            verified: false,
            isAnonymous: true
          }
        : {
            id: currentUser.id,
            name: currentUser.name,
            avatar: currentUser.avatar || '👤', // Fallback to default avatar
            role: roleDisplay,
            verified: currentUser.verified || false,
            isAnonymous: false
          }

      const newComment = {
        postId,
        author: authorDisplay,
        content,
        timestamp: Timestamp.now(),
        likes: 0,
        likedBy: [],
        isAnonymous,
        ...(isAnonymous && { actualAuthorId: currentUser.id }), // Only include when anonymous
        ...(parentCommentId && { parentCommentId })
      }

      await addDoc(commentsRef, newComment)

      // Increment comment count on post
      const postRef = doc(db, 'posts', postId)
      await updateDoc(postRef, {
        comments: increment(1),
        updatedAt: Timestamp.now()
      })

      await get().fetchComments(postId)
      await get().fetchPosts()
    } catch (error) {
      console.error('Error adding comment:', error)
      set({ error: 'Failed to add comment' })
    }
  },

  // Delete a comment
  deleteComment: async (commentId: string, postId: string) => {
    const { currentUser } = get()
    if (!currentUser?.isAdmin) {
      set({ error: 'Only admins can delete comments' })
      return
    }

    try {
      await deleteDoc(doc(db, 'comments', commentId))

      // Decrement comment count on post
      const postRef = doc(db, 'posts', postId)
      await updateDoc(postRef, {
        comments: increment(-1),
        updatedAt: Timestamp.now()
      })

      await get().fetchComments(postId)
      await get().fetchPosts()
    } catch (error) {
      console.error('Error deleting comment:', error)
      set({ error: 'Failed to delete comment' })
    }
  },

  // Increment view count
  incrementViews: async (postId: string) => {
    const { currentUser } = get()
    if (!currentUser) return

    try {
      const postRef = doc(db, 'posts', postId)
      const postSnap = await getDoc(postRef)

      if (!postSnap.exists()) return

      const post = postSnap.data() as Post
      if (post.viewedBy.includes(currentUser.id)) return // Already viewed

      await updateDoc(postRef, {
        viewedBy: arrayUnion(currentUser.id),
        views: increment(1),
        updatedAt: Timestamp.now()
      })
    } catch (error) {
      console.error('Error incrementing views:', error)
    }
  },

  // Subscribe to post updates (real-time)
  subscribeToPost: (postId: string, callback: (post: Post) => void) => {
    const postRef = doc(db, 'posts', postId)
    return onSnapshot(postRef, (doc) => {
      if (doc.exists()) {
        callback({ id: doc.id, ...doc.data() } as Post)
      }
    })
  },

  // Update user's privacy settings
  updatePrivacySettings: async (settings: PrivacySettings, year?: number, newPseudonym?: string) => {
    const { currentUser } = get()
    if (!currentUser) {
      set({ error: 'You must be logged in to update settings' })
      return
    }

    try {
      const userRef = doc(db, 'users', currentUser.id)
      const updates: any = {
        privacySettings: settings
      }

      if (year !== undefined) {
        updates.year = year
      }

      if (newPseudonym) {
        updates.anonymousPseudonym = newPseudonym
      }

      await updateDoc(userRef, updates)

      // Update local state
      set({
        currentUser: {
          ...currentUser,
          privacySettings: settings,
          year: year !== undefined ? year : currentUser.year,
          anonymousPseudonym: newPseudonym || currentUser.anonymousPseudonym
        }
      })
    } catch (error) {
      console.error('Error updating privacy settings:', error)
      set({ error: 'Failed to update privacy settings' })
      throw error
    }
  }
}))
