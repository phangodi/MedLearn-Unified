# Community Page - Feature Implementation Guide

## Overview
The Community Page has been fully implemented with Firebase Firestore integration. All features are now functional and persist data to Firebase emulators.

## Implemented Features

### 1. **Post Creation** ✅
- **Functionality**: Create new posts with content, tags, and file attachments
- **How to use**:
  - Click "New Post" button in the header
  - Write your post content in the text area
  - Add up to 5 tags/topics to categorize your post
  - Attach files (images, PDFs, or videos)
  - Click "Post" to publish

### 2. **Like/Unlike Posts** ✅
- **Functionality**: Like and unlike posts with real-time counter updates
- **How to use**:
  - Click the heart icon on any post
  - The like count updates immediately
  - Your like is saved to Firebase and persists across sessions
  - Heart icon fills in red when you've liked a post

### 3. **Bookmark/Save Posts** ✅
- **Functionality**: Save posts for later reference
- **How to use**:
  - Click the bookmark icon on any post
  - Bookmarked posts are saved to your profile
  - The bookmark icon fills in blue when saved
  - Data persists in Firebase

### 4. **Comment System** ✅
- **Functionality**: Add comments to posts and view all comments
- **How to use**:
  - Click the comment icon (speech bubble) on any post
  - A modal opens showing all existing comments
  - Type your comment in the input field at the bottom
  - Press "Post" or use Cmd/Ctrl + Enter to submit
  - Comments are stored in Firebase and appear in real-time

### 5. **Pin/Unpin Posts (Admin)** ✅
- **Functionality**: Admin users can pin important posts to the top
- **How to use**:
  - As an admin (demo user has admin privileges), click the pin icon
  - Pinned posts appear at the top with a blue badge
  - Click again to unpin

### 6. **Delete Posts (Admin)** ✅
- **Functionality**: Admin users can delete posts
- **How to use**:
  - As an admin, click the trash icon on any post
  - Confirm the deletion
  - Post and all its comments are removed from Firebase

### 7. **File Attachments** ✅
- **Functionality**: Attach and display files with posts
- **Supported types**:
  - Images (PNG, JPG, etc.)
  - PDFs
  - Videos
- **How to use**:
  - Click the file type button when creating a post
  - Select file(s) from your computer
  - Files are displayed with appropriate icons and metadata
  - Remove files before posting by clicking the X

### 8. **Sample Data Loading** ✅
- **Functionality**: Load pre-populated sample posts for testing
- **How to use**:
  - When the feed is empty, click "Load Sample Data"
  - 4 sample posts with various content types are created
  - Includes posts from different users with attachments and tags

### 9. **Real-time View Counting** ✅
- **Functionality**: Track unique views for each post
- **How it works**:
  - View count increments when a user views a post
  - Each user is counted only once per post
  - Stored in Firebase with user tracking

## Firebase Structure

### Collections

#### **posts**
```
{
  id: string
  author: {
    id: string
    name: string
    avatar: string
    role: string
    verified: boolean
  }
  content: string
  timestamp: Timestamp
  likes: number
  likedBy: string[]  // User IDs
  comments: number
  shares: number
  views: number
  viewedBy: string[]  // User IDs
  tags: string[]
  attachments: Attachment[]
  bookmarkedBy: string[]  // User IDs
  pinned: boolean
  pinnedBy: string | null
  createdAt: Timestamp
  updatedAt: Timestamp
}
```

#### **comments**
```
{
  id: string
  postId: string
  author: {
    id: string
    name: string
    avatar: string
    role: string
    verified: boolean
  }
  content: string
  timestamp: Timestamp
  likes: number
  likedBy: string[]
  parentCommentId?: string  // For replies (not yet implemented)
}
```

## Technical Implementation

### State Management
- **Zustand Store**: `src/store/communityStore.ts`
  - Manages posts, comments, and user state
  - Handles all Firebase operations
  - Provides real-time updates

### Firebase Configuration
- **Location**: `src/lib/firebase.ts`
- **Emulator Settings**:
  - Firestore: `localhost:8080`
  - Auth: `localhost:9099`
  - Storage: `localhost:9199`

### Key Components
1. **CommunityPage.tsx**: Main community feed page
2. **CommentsModal.tsx**: Modal for viewing and adding comments
3. **communityStore.ts**: Zustand store for state management
4. **sampleData.ts**: Sample data seeding utility

## Testing Instructions

### 1. Start Firebase Emulators
```bash
# From the root directory
firebase emulators:start
```

### 2. Start Development Server
```bash
cd client
npm run dev
```

### 3. Navigate to Community Page
- Login with demo credentials
- Click "Community" in the sidebar
- The emulator UI is available at `http://localhost:4000`

### 4. Test Features
1. **Load Sample Data**: Click the button to populate with sample posts
2. **Create Post**: Click "New Post" and try creating a post with tags and files
3. **Like Posts**: Click hearts on different posts
4. **Comment**: Click comment icons to open modal and add comments
5. **Bookmark**: Save posts for later
6. **Admin Actions** (Demo user has admin privileges):
   - Pin/unpin posts
   - Delete posts
   - Edit posts (UI ready, functionality pending)

## Current Limitations & Future Enhancements

### Not Yet Implemented
- [ ] File upload to Firebase Storage (files are saved as metadata only)
- [ ] Nested comment replies
- [ ] Edit post functionality
- [ ] Share post functionality
- [ ] Search and filter posts
- [ ] User profiles page
- [ ] Notifications
- [ ] Real-time updates via Firestore listeners

### Planned Enhancements
- Add pagination for large post lists
- Implement post editing
- Add rich text editor for posts
- Enable image/video preview
- Add user reputation system
- Implement post reporting

## Firebase Security Rules

For production, you'll need to add security rules. Example:

```javascript
// firestore.rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /posts/{postId} {
      allow read: if true;
      allow create: if request.auth != null;
      allow update, delete: if request.auth != null &&
        (request.auth.uid == resource.data.author.id ||
         get(/databases/$(database)/documents/users/$(request.auth.uid)).data.isAdmin == true);
    }

    match /comments/{commentId} {
      allow read: if true;
      allow create: if request.auth != null;
      allow delete: if request.auth != null &&
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.isAdmin == true;
    }
  }
}
```

## Demo User Credentials

- **Email**: `demo@medlearn.com`
- **Password**: `demo`
- **Privileges**: Admin access (can pin/delete posts)

## Support

If you encounter any issues:
1. Check that Firebase emulators are running
2. Clear browser cache and Firestore data
3. Restart the dev server
4. Check browser console for errors

## Architecture Diagram

```
┌─────────────────────────────────────────┐
│         CommunityPage.tsx               │
│  (Main UI Component)                    │
└─────────────┬───────────────────────────┘
              │
              ├─── Uses ──────────────────┐
              │                           │
              ▼                           ▼
┌─────────────────────────┐   ┌──────────────────────┐
│  communityStore.ts      │   │  CommentsModal.tsx   │
│  (Zustand State)        │   │  (Comment UI)        │
└──────────┬──────────────┘   └──────────────────────┘
           │
           ├─── Talks to ────┐
           │                 │
           ▼                 ▼
┌──────────────────┐   ┌─────────────────┐
│  firebase.ts     │   │  dateUtils.ts   │
│  (Config)        │   │  (Formatting)   │
└────────┬─────────┘   └─────────────────┘
         │
         ▼
┌──────────────────────────────┐
│  Firebase Firestore          │
│  (Emulator: localhost:8080)  │
└──────────────────────────────┘
```

---

**Status**: ✅ All core features implemented and functional!
**Last Updated**: 2025-11-15
