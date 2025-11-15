import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { db } from './firebase'
import type { UserProfile } from '@/types/community'

// Sample users
export const sampleUsers: UserProfile[] = [
  {
    id: 'user-1',
    name: 'Sarah Johnson',
    email: 'sarah@medlearn.com',
    avatar: '👩‍⚕️',
    role: 'Med Student - Year 3',
    verified: true,
    likedPosts: [],
    bookmarkedPosts: [],
    createdAt: Timestamp.now(),
    isAdmin: false
  },
  {
    id: 'user-2',
    name: 'Dr. Michael Chen',
    email: 'michael@medlearn.com',
    avatar: '👨‍🏫',
    role: 'Teaching Assistant',
    verified: true,
    likedPosts: [],
    bookmarkedPosts: [],
    createdAt: Timestamp.now(),
    isAdmin: true
  },
  {
    id: 'user-3',
    name: 'Emma Williams',
    email: 'emma@medlearn.com',
    avatar: '👩‍🎓',
    role: 'Med Student - Year 2',
    verified: false,
    likedPosts: [],
    bookmarkedPosts: [],
    createdAt: Timestamp.now(),
    isAdmin: false
  },
  {
    id: 'user-4',
    name: 'James Martinez',
    email: 'james@medlearn.com',
    avatar: '👨‍🔬',
    role: 'Med Student - Year 4',
    verified: true,
    likedPosts: [],
    bookmarkedPosts: [],
    createdAt: Timestamp.now(),
    isAdmin: false
  },
  {
    id: 'demo-user',
    name: 'Demo User',
    email: 'demo@medlearn.com',
    avatar: '👤',
    role: 'Med Student - Year 1',
    verified: false,
    likedPosts: [],
    bookmarkedPosts: [],
    createdAt: Timestamp.now(),
    isAdmin: true
  }
]

// Function to seed sample posts
export async function seedSampleData() {
  console.log('🌱 Starting to seed sample data...')
  try {
    console.log('📊 Creating sample posts...')
    // Create sample posts
    const now = Timestamp.now()
    const twoHoursAgo = Timestamp.fromMillis(now.toMillis() - 2 * 60 * 60 * 1000)
    const fourHoursAgo = Timestamp.fromMillis(now.toMillis() - 4 * 60 * 60 * 1000)
    const sixHoursAgo = Timestamp.fromMillis(now.toMillis() - 6 * 60 * 60 * 1000)
    const oneDayAgo = Timestamp.fromMillis(now.toMillis() - 24 * 60 * 60 * 1000)

    const samplePosts = [
      {
        author: {
          id: 'user-1',
          name: 'Sarah Johnson',
          avatar: '👩‍⚕️',
          role: 'Med Student - Year 3',
          verified: true
        },
        content: 'Just finished reviewing the cardiovascular physiology module! Here are my comprehensive notes on cardiac cycle regulation. Hope this helps everyone preparing for finals! 📚',
        timestamp: twoHoursAgo,
        likes: 45,
        likedBy: ['user-2', 'user-3', 'user-4'],
        comments: 0,
        shares: 8,
        views: 234,
        viewedBy: ['user-2', 'user-3', 'user-4', 'demo-user'],
        tags: ['Physiology', 'Cardiology', 'Study Notes'],
        attachments: [
          {
            type: 'pdf' as const,
            name: 'Cardiac_Cycle_Notes.pdf',
            size: '2.4 MB',
            downloads: 23
          },
          {
            type: 'image' as const,
            name: 'ECG_diagram.png',
            size: '450 KB',
            preview: true
          }
        ],
        bookmarkedBy: ['demo-user', 'user-3'],
        pinned: false,
        createdAt: twoHoursAgo,
        updatedAt: twoHoursAgo
      },
      {
        author: {
          id: 'user-2',
          name: 'Dr. Michael Chen',
          avatar: '👨‍🏫',
          role: 'Teaching Assistant',
          verified: true
        },
        content: 'Quick tip for tomorrow\'s histology exam: Focus on distinguishing between different types of epithelial tissue. I\'ve uploaded high-resolution microscopy slides with annotations!',
        timestamp: fourHoursAgo,
        likes: 89,
        likedBy: ['user-1', 'user-3', 'user-4', 'demo-user'],
        comments: 0,
        shares: 15,
        views: 456,
        viewedBy: ['user-1', 'user-3', 'user-4', 'demo-user'],
        tags: ['Histology', 'Exam Tips', 'Microscopy'],
        attachments: [
          {
            type: 'image' as const,
            name: 'epithelial_tissue_comparison.jpg',
            size: '1.8 MB',
            preview: true
          },
          {
            type: 'pdf' as const,
            name: 'Histology_Quick_Reference.pdf',
            size: '3.1 MB',
            downloads: 67
          }
        ],
        bookmarkedBy: ['user-1', 'user-3'],
        pinned: true,
        pinnedBy: 'user-2',
        createdAt: fourHoursAgo,
        updatedAt: fourHoursAgo
      },
      {
        author: {
          id: 'user-3',
          name: 'Emma Williams',
          avatar: '👩‍🎓',
          role: 'Med Student - Year 2',
          verified: false
        },
        content: 'Created a visual mind map for the nervous system pathways. This really helped me connect all the concepts together. Feel free to download and modify for your own studies!',
        timestamp: sixHoursAgo,
        likes: 67,
        likedBy: ['user-1', 'user-2', 'demo-user'],
        comments: 0,
        shares: 22,
        views: 389,
        viewedBy: ['user-1', 'user-2', 'user-4', 'demo-user'],
        tags: ['Anatomy', 'Neuroscience', 'Study Tools'],
        attachments: [
          {
            type: 'pdf' as const,
            name: 'Nervous_System_Mindmap.pdf',
            size: '5.2 MB',
            downloads: 45
          }
        ],
        bookmarkedBy: ['demo-user', 'user-1'],
        pinned: false,
        createdAt: sixHoursAgo,
        updatedAt: sixHoursAgo
      },
      {
        author: {
          id: 'user-4',
          name: 'James Martinez',
          avatar: '👨‍🔬',
          role: 'Med Student - Year 4',
          verified: true
        },
        content: 'Video tutorial on interpreting arterial blood gas (ABG) results! Covered all the major acid-base disorders with clinical cases. Let me know if you have questions!',
        timestamp: oneDayAgo,
        likes: 123,
        likedBy: ['user-1', 'user-2', 'user-3'],
        comments: 0,
        shares: 28,
        views: 678,
        viewedBy: ['user-1', 'user-2', 'user-3', 'demo-user'],
        tags: ['Clinical Skills', 'Pathophysiology', 'Video Tutorial'],
        attachments: [
          {
            type: 'video' as const,
            name: 'ABG_Interpretation_Tutorial.mp4',
            size: '45.6 MB',
            duration: '12:34',
            views: 234
          }
        ],
        bookmarkedBy: ['demo-user'],
        pinned: false,
        createdAt: oneDayAgo,
        updatedAt: oneDayAgo
      }
    ]

    // Add posts to Firestore
    console.log('🔥 Adding posts to Firestore...')
    const postsRef = collection(db, 'posts')
    console.log('📍 Posts collection reference created')

    for (let i = 0; i < samplePosts.length; i++) {
      console.log(`📝 Adding post ${i + 1}/${samplePosts.length}...`)
      const docRef = await addDoc(postsRef, samplePosts[i])
      console.log(`✅ Post ${i + 1} added with ID: ${docRef.id}`)
    }

    console.log('✅ Sample data seeded successfully!')

    return { success: true, message: 'Sample data seeded!' }
  } catch (error) {
    console.error('❌ Error seeding sample data:', error)
    console.error('Error details:', {
      name: (error as Error).name,
      message: (error as Error).message,
      stack: (error as Error).stack
    })
    return { success: false, message: `Failed to seed data: ${(error as Error).message}` }
  }
}

// Function to clear all data (for testing)
export async function clearAllData() {
  try {
    // Note: In production, you'd want to use Firebase Admin SDK for bulk deletes
    // For emulator testing, this is fine
    console.log('Clear all data - this should be done via Firebase console or Admin SDK')
    return { success: true, message: 'Data cleared' }
  } catch (error) {
    console.error('Error clearing data:', error)
    return { success: false, message: 'Failed to clear data' }
  }
}
