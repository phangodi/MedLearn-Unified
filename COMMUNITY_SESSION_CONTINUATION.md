# Community Hub - Session Continuation Guide

**Last Updated**: 2025-11-15
**Current Branch**: `main`
**Status**: Profile Page Complete ✅

---

## 🚀 Quick Start for Next Session

### 1. Start Background Services (REQUIRED)

You need **TWO** terminal windows/tabs running simultaneously:

#### Terminal 1: Firebase Emulators
```bash
cd /Users/peti/Documents/GitHub/MedLearn-Unified
firebase emulators:start
```

**Expected Output:**
```
✔  All emulators ready! It is now safe to connect your app.
┌─────────────┬────────────────┬─────────────────────────────────┐
│ Emulator    │ Host:Port      │ View in Emulator Suite          │
├─────────────┼────────────────┼─────────────────────────────────┤
│ Auth        │ 127.0.0.1:9099 │ http://127.0.0.1:4000/auth      │
│ Firestore   │ 127.0.0.1:8080 │ http://127.0.0.1:4000/firestore │
│ Storage     │ 127.0.0.1:9199 │ http://127.0.0.1:4000/storage   │
└─────────────┴────────────────┴─────────────────────────────────┘
```

**Keep this terminal running!** The app won't work without it.

#### Terminal 2: Vite Dev Server
```bash
cd /Users/peti/Documents/GitHub/MedLearn-Unified/client
npm run dev
```

**Expected Output:**
```
VITE v7.2.2  ready in XXX ms
➜  Local:   http://localhost:5173/
```

**Keep this terminal running too!**

### 2. Access the Application

Open browser and navigate to:
- **App**: http://localhost:5173/
- **Firebase Emulator UI**: http://localhost:4000/

### 3. Login Credentials

Use these demo credentials:
- **Email**: `demo@medlearn.com`
- **Password**: `demo`

---

## 📍 Current State - What's Working

### ✅ Fully Functional Features

1. **Community Feed**
   - Create posts with text, tags, and file attachments
   - Like/unlike posts (persists to Firestore)
   - Bookmark/save posts (persists to Firestore)
   - Comment on posts (modal with original post display)
   - View counts tracked per user
   - Admin controls (pin/delete posts)
   - Filter by section: Feed, Bookmarks, Liked, My Posts

2. **Profile Page** (NEW!)
   - User information display (avatar, name, role, verified badge)
   - Join date with timestamp
   - Statistics dashboard:
     - Total posts created
     - Total likes received
     - Total comments made
     - Total bookmarks
   - My Posts tab (shows all user's posts)
   - Activity tab (placeholder)
   - Full post interaction (like, bookmark) from profile

3. **Navigation**
   - Community sidebar with 8 sections
   - "Back to Dashboard" button (navigates to /dashboard)
   - Sidebar navigation respects user choices (e.g., clicking Bookmarks from Profile correctly goes to Bookmarks view)
   - Profile navigation (click Profile → goes to /profile)

4. **Data Persistence**
   - All posts stored in Firestore
   - All comments stored in Firestore
   - Likes, bookmarks, views tracked in Firestore
   - Sample data seeding available

### ⚠️ Placeholder Features (Not Yet Implemented)

- **Explore**: Search, trending tags, popular posts
- **Notifications**: Real-time notifications for likes, comments, mentions
- **Messages**: Direct messaging between users
- **Edit Profile**: Profile editing functionality
- **File Upload**: Files are metadata only (not uploaded to Storage yet)
- **Edit Post**: UI exists but backend not implemented

---

## 📂 Key Files & Structure

### Core Community Files

```
client/src/
├── pages/
│   ├── CommunityPage.tsx       # Main feed with posts
│   └── ProfilePage.tsx         # User profile page (NEW!)
├── components/community/
│   ├── CommunitySidebar.tsx    # Sidebar navigation
│   └── CommentsModal.tsx       # Comments modal
├── store/
│   └── communityStore.ts       # Zustand state management
├── types/
│   └── community.ts            # TypeScript interfaces
└── lib/
    ├── firebase.ts             # Firebase config with emulators
    ├── sampleData.ts           # Sample data seeding
    └── dateUtils.ts            # Date formatting utilities
```

### Documentation Files

```
/
├── COMMUNITY_NEXT_STEPS.md           # Detailed next steps & implementation plans
├── COMMUNITY_FEATURES.md             # Features overview
├── COMMUNITY_SESSION_CONTINUATION.md # This file
├── FIREBASE_SETUP.md                 # Firebase setup guide
└── PRODUCTION_CHECKLIST.md           # Pre-deployment checklist
```

### Configuration Files

```
/
├── firestore.rules        # Security rules (currently allow all for demo)
├── firebase.json          # Emulator ports configuration
└── .firebaserc            # Firebase project config
```

---

## 🎯 What to Work on Next

Based on `COMMUNITY_NEXT_STEPS.md`, the priority order is:

### 1. **Notifications System** (Next Priority)

**Goal**: Notify users when someone likes, comments, or interacts with their content

**Tasks**:
- Create Firestore `notifications` collection
- Add notification creation on like, comment, reply events
- Create NotificationsPage.tsx component
- Update sidebar badge with real count
- Mark notifications as read

**Files to Create**:
- `client/src/pages/NotificationsPage.tsx`
- Update `client/src/store/communityStore.ts` (add notification methods)

**Estimated Time**: 1-2 hours

### 2. **Messages/DM System**

**Goal**: Allow users to send direct messages to each other

**Tasks**:
- Create `conversations` and `messages` collections in Firestore
- Create MessagesPage.tsx with conversation list + message thread
- Add "Send Message" button on user profiles
- Real-time message updates

**Files to Create**:
- `client/src/pages/MessagesPage.tsx`
- `client/src/components/messages/ConversationList.tsx`
- `client/src/components/messages/MessageThread.tsx`

**Estimated Time**: 2-3 hours

### 3. **Explore Page**

**Goal**: Discover content via search, trending topics, popular posts

**Tasks**:
- Create ExplorePage.tsx
- Implement search functionality (search posts by content/tags)
- Show trending tags (most used in last 7 days)
- Show popular posts (most likes recently)
- Display active users

**Files to Create**:
- `client/src/pages/ExplorePage.tsx`

**Estimated Time**: 1-2 hours

---

## 🐛 Known Issues

### Minor Issues (Not Blocking)

1. **Edit Profile Button**: Currently just UI, no functionality
2. **File Uploads**: Files are metadata only, not actually uploaded to Storage
3. **Edit Post**: UI exists but not wired up
4. **Real-time Updates**: Using polling instead of Firestore listeners
5. **Production Security**: Firestore rules allow all operations (needs tightening before production)

### Not Issues (By Design)

1. **Demo Authentication**: Using bypass auth (`demo@medlearn.com`), not real auth
2. **Sample Data Button**: Appears on first visit to seed test posts
3. **Comments Count**: May not match actual comment count until refresh

---

## 💡 Development Tips

### Testing Changes

1. **After Code Changes**: Vite will hot-reload automatically
2. **After Firestore Changes**: Restart Firebase emulators
3. **Clear Data**:
   ```bash
   # Stop emulators (Ctrl+C)
   # Delete data
   rm -rf .firebase/
   # Restart emulators
   firebase emulators:start
   ```

### Common Commands

```bash
# View Firestore data in Emulator UI
open http://localhost:4000/firestore

# Check dev server logs
# (in client directory terminal)

# Check Firebase logs
# (in root directory terminal running emulators)

# Seed sample data
# Click "Seed Sample Data" button in Community page
```

### Debugging

1. **White Page**: Check browser console for errors
2. **Posts Not Loading**: Check Firebase emulators are running
3. **Like/Bookmark Not Working**: Check Firestore rules (should allow all in demo)
4. **Navigation Issues**: Check React Router state in browser DevTools

---

## 📝 Continuation Prompt for Claude Code

**Copy and paste this into your next session:**

```
I'm continuing work on the MedLearn Community Hub. Here's the current state:

BACKGROUND SERVICES:
- I have Firebase emulators running (Firestore: 8080, Auth: 9099, Storage: 9199)
- I have the Vite dev server running (localhost:5173)

CURRENT STATUS:
- Community feed is fully functional with posts, likes, comments, bookmarks
- Profile page is complete with user stats and posts display
- Navigation between Community sections works correctly
- All data persists to Firestore emulators

WHAT I WANT TO WORK ON:
[Describe what you want to work on - e.g., "implement notifications system", "add messages feature", "fix a bug", etc.]

IMPORTANT CONTEXT:
- Read COMMUNITY_NEXT_STEPS.md for implementation plans
- The app uses Zustand for state management
- Firebase is in emulator mode (demo data, not production)
- All community code is in client/src/pages/CommunityPage.tsx and client/src/pages/ProfilePage.tsx
- Firestore security rules are in allow-all mode for testing

Please help me [specific task].
```

---

## 🔧 Troubleshooting

### Problem: "Cannot connect to Firestore"

**Solution**:
1. Check if Firebase emulators are running (`firebase emulators:start`)
2. Check port 8080 is not in use: `lsof -i :8080`
3. Check `client/src/lib/firebase.ts` has correct emulator settings

### Problem: "White page / blank screen"

**Solution**:
1. Open browser DevTools → Console
2. Look for import errors or undefined function calls
3. Most common: Wrong import path or missing export
4. Check Vite dev server terminal for build errors

### Problem: "Posts not appearing"

**Solution**:
1. Click "Seed Sample Data" button to add test posts
2. Check Firestore Emulator UI (http://localhost:4000/firestore) for data
3. Check browser console for errors
4. Verify `fetchPosts()` is called in `useEffect`

### Problem: "Changes not showing"

**Solution**:
1. Hard refresh browser (Cmd+Shift+R / Ctrl+Shift+R)
2. Check if Vite dev server is running
3. Look for HMR update messages in dev server terminal
4. If still not working, restart dev server

---

## 📊 Architecture Overview

### Data Flow

```
User Action (Click Like)
    ↓
Component Handler (handleLike)
    ↓
Zustand Store Action (toggleLike)
    ↓
Firestore Update (updateDoc with arrayUnion/arrayRemove)
    ↓
Local State Update (optimistic UI update)
    ↓
Re-render with new data
```

### State Management

- **Zustand Store** (`client/src/store/communityStore.ts`):
  - Posts array
  - Comments array
  - Current user
  - Loading/error states
  - All CRUD operations

- **Local Component State**:
  - UI-only state (modals open/closed, form inputs, etc.)
  - Active section selection
  - Temporary file uploads

### Firebase Collections

```
Firestore
├── posts/
│   └── {postId}
│       ├── author: { id, name, avatar, role, verified }
│       ├── content: string
│       ├── tags: string[]
│       ├── likes: number
│       ├── likedBy: string[]
│       ├── bookmarkedBy: string[]
│       ├── comments: number
│       ├── attachments: Attachment[]
│       └── timestamps...
│
└── comments/
    └── {commentId}
        ├── postId: string
        ├── author: { id, name, avatar, role, verified }
        ├── content: string
        ├── likes: number
        ├── likedBy: string[]
        └── timestamp: Timestamp
```

---

## 🎓 Best Practices for This Project

### When Adding New Features

1. **Update Types First**: Add interfaces to `client/src/types/community.ts`
2. **Add Store Methods**: Update `client/src/store/communityStore.ts`
3. **Create Components**: Build UI components
4. **Test with Emulators**: Use Firebase Emulator UI to verify data
5. **Update Documentation**: Add notes to COMMUNITY_NEXT_STEPS.md

### Code Style

- Use TypeScript strict mode (already enabled)
- Use Tailwind for styling (no inline styles)
- Use Framer Motion for animations
- Keep components under 500 lines (split if larger)
- Use Zustand for global state, useState for local UI state

### Git Workflow

- Work on feature branches: `git checkout -b feature/your-feature-name`
- Commit often with clear messages
- Merge to main when feature is complete
- Delete feature branch after merge

---

## 📞 Getting Help

If you encounter issues:

1. **Check Documentation**:
   - COMMUNITY_NEXT_STEPS.md (implementation plans)
   - FIREBASE_SETUP.md (Firebase help)
   - PRODUCTION_CHECKLIST.md (deployment prep)

2. **Check Logs**:
   - Browser DevTools Console
   - Vite dev server terminal
   - Firebase emulators terminal

3. **Use Claude Code**:
   - Paste the continuation prompt above
   - Describe the specific issue you're facing
   - Include error messages if any

---

## ✅ Pre-Session Checklist

Before starting your next session:

- [ ] Both terminals ready (Firebase emulators + Vite dev server)
- [ ] Browser open to http://localhost:5173/
- [ ] Firebase Emulator UI open at http://localhost:4000/ (optional but helpful)
- [ ] Logged in with demo credentials
- [ ] Git status clean (`git status` shows no uncommitted changes)
- [ ] On main branch (`git branch` shows `* main`)
- [ ] Know what feature you want to work on next

---

**Ready to continue! 🚀**

When you start your next session, just:
1. Start the two background services
2. Paste the continuation prompt above
3. Tell me what you want to work on!
