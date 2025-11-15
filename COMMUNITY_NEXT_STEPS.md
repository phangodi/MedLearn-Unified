# Community Page - Next Steps & Implementation Plan

## ✅ Issues Fixed (Just Now)

### 1. **"Back to Dashboard" Now Actually Goes to Dashboard**
- **Before**: Clicked "Home" → Just toggled sidebars, stayed on Community page
- **After**: Click "Back to Dashboard" button → Navigates to `/dashboard`
- **Location**: Bottom of Community sidebar (blue button)

### 2. **Removed Confusing "Back to Community" Button**
- **Before**: Had "Back to Community" checkbox in header when main sidebar showed
- **After**: Clean header with just Theme Toggle and Logout
- **Why**: Was confusing - users should navigate via sidebar, not header

### 3. **Simplified Sidebar Logic**
- **Before**: Two sidebars (main + community) with complex toggling
- **After**: One community sidebar always shown, "Back to Dashboard" button to leave
- **Result**: Cleaner, more intuitive navigation

---

## 📋 What Works Now

### Community Sidebar Sections:
1. **Feed** - Shows all posts ✅
2. **Explore** - Placeholder (future feature) 
3. **Notifications** - Placeholder with badge (3) 
4. **Messages** - Placeholder with badge (5)
5. **Bookmarks** - Shows posts you've saved ✅
6. **Liked** - Shows posts you've liked ✅
7. **My Posts** - Shows your own posts ✅
8. **Profile** - Click to see profile page (need to create)

### Fully Functional:
- Create posts with tags and attachments
- Like/unlike posts
- Save/bookmark posts
- Comment on posts
- Filter by section (Feed, Bookmarks, Liked, My Posts)
- Admin controls (pin/delete)
- "Back to Dashboard" navigation

---

## 🎯 Next: Create Profile Page

### What the Profile Page Should Show:

1. **User Information**
   - Avatar (emoji)
   - Name
   - Role (e.g., "Med Student - Year 1")
   - Verified badge (if applicable)
   - Join date
   - Edit profile button

2. **User Statistics**
   - Total posts created
   - Total likes received
   - Total comments made
   - Posts bookmarked by others

3. **User's Posts Tab**
   - Show all posts created by the user
   - Same card design as main feed
   - Can edit/delete their own posts

4. **Activity Tab** (Optional)
   - Recent activity timeline
   - Comments made
   - Posts liked

### Implementation Plan:

```typescript
// 1. Create ProfilePage.tsx
// Path: client/src/pages/ProfilePage.tsx

export function ProfilePage() {
  const { currentUser } = useCommunityStore()
  const userPosts = posts.filter(p => p.author.id === currentUser.id)
  const totalLikesReceived = userPosts.reduce((sum, p) => sum + p.likes, 0)
  
  return (
    <div>
      {/* Profile Header */}
      {/* Stats Cards */}
      {/* User's Posts */}
    </div>
  )
}

// 2. Add route in App.tsx
<Route path="/profile" element={<ProfilePage />} />

// 3. Update CommunitySidebar to navigate
case 'profile':
  navigate('/profile')
```

### Profile Page Structure:

```
┌─────────────────────────────────────────┐
│ Community Sidebar │ Profile Content     │
├───────────────────┼─────────────────────┤
│                   │ ┌─────────────────┐ │
│ [Feed]            │ │ Avatar  Name    │ │
│ [Explore]         │ │ Role   Badge    │ │
│ [Notifications]   │ │ [Edit Profile]  │ │
│ [Messages]        │ └─────────────────┘ │
│ [Bookmarks]       │                     │
│ [Liked]           │ ┌─Stats─────────┐  │
│ [My Posts]        │ │ 12 Posts      │  │
│ [Profile] ←────   │ │ 45 Likes      │  │
│                   │ │ 23 Comments   │  │
│                   │ └───────────────┘  │
│                   │                     │
│ [Back to          │ [My Posts ▼]        │
│  Dashboard]       │ ┌─────────────┐    │
│                   │ │ Post Card   │    │
│                   │ │ ...         │    │
└───────────────────┴─────────────────────┘
```

---

## 💬 Notifications Implementation Plan

### How Notifications Will Work:

**Purpose:** Notify users when:
- Someone likes their post
- Someone comments on their post
- Someone replies to their comment
- Admin pins their post
- (Future) Someone mentions them

### Implementation:

1. **Data Structure** (Firestore)
```typescript
interface Notification {
  id: string
  userId: string // Who receives the notification
  type: 'like' | 'comment' | 'reply' | 'pin' | 'mention'
  actorId: string // Who performed the action
  actorName: string
  actorAvatar: string
  postId?: string
  commentId?: string
  message: string // "John liked your post"
  read: boolean
  createdAt: Timestamp
}
```

2. **Create Notifications**
```typescript
// In communityStore.ts - when someone likes a post
await addDoc(collection(db, 'notifications'), {
  userId: post.author.id, // Post author gets notified
  type: 'like',
  actorId: currentUser.id,
  actorName: currentUser.name,
  actorAvatar: currentUser.avatar,
  postId: post.id,
  message: `${currentUser.name} liked your post`,
  read: false,
  createdAt: Timestamp.now()
})
```

3. **Notifications Page**
```typescript
// client/src/pages/NotificationsPage.tsx
export function NotificationsPage() {
  const [notifications, setNotifications] = useState([])
  
  // Fetch unread notifications
  const unreadCount = notifications.filter(n => !n.read).length
  
  return (
    <div>
      {notifications.map(notif => (
        <NotificationCard
          avatar={notif.actorAvatar}
          message={notif.message}
          time={notif.createdAt}
          onClick={() => markAsRead(notif.id)}
        />
      ))}
    </div>
  )
}
```

4. **Badge Counter**
```typescript
// In CommunitySidebar - show real count
const notificationCount = notifications.filter(n => !n.read).length
```

---

## 📨 Messages Implementation Plan

### How Messages Will Work:

**Purpose:** Direct messaging between users

### Implementation:

1. **Data Structure** (Firestore)
```typescript
// Conversations collection
interface Conversation {
  id: string
  participants: string[] // [userId1, userId2]
  participantDetails: {
    [userId: string]: {
      name: string
      avatar: string
      role: string
    }
  }
  lastMessage: string
  lastMessageTime: Timestamp
  unreadCount: {
    [userId: string]: number
  }
}

// Messages subcollection: /conversations/{conversationId}/messages
interface Message {
  id: string
  senderId: string
  content: string
  timestamp: Timestamp
  read: boolean
}
```

2. **Messages Page**
```typescript
// client/src/pages/MessagesPage.tsx
export function MessagesPage() {
  const [conversations, setConversations] = useState([])
  const [selectedConv, setSelectedConv] = useState(null)
  const [messages, setMessages] = useState([])
  
  return (
    <div className="flex h-screen">
      {/* Left: Conversation List */}
      <div className="w-1/3 border-r">
        {conversations.map(conv => (
          <ConversationItem
            key={conv.id}
            name={conv.participantDetails[otherUserId].name}
            lastMessage={conv.lastMessage}
            unreadCount={conv.unreadCount[currentUser.id]}
            onClick={() => selectConversation(conv.id)}
          />
        ))}
      </div>
      
      {/* Right: Message Thread */}
      <div className="flex-1 flex flex-col">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto">
          {messages.map(msg => (
            <MessageBubble
              key={msg.id}
              content={msg.content}
              isMine={msg.senderId === currentUser.id}
              timestamp={msg.timestamp}
            />
          ))}
        </div>
        
        {/* Input */}
        <MessageInput onSend={sendMessage} />
      </div>
    </div>
  )
}
```

3. **Start Conversation from Profile**
```typescript
// In ProfilePage.tsx
<Button onClick={() => startConversation(profileUser.id)}>
  Send Message
</Button>
```

---

## 🔍 Explore Implementation Plan

### How Explore Will Work:

**Purpose:** Discover new content, trending topics, popular users

### Implementation:

1. **Explore Page Features**
   - Search bar (search posts by content or tags)
   - Trending tags (most used tags this week)
   - Popular posts (most likes in last 7 days)
   - Active users (most posts/comments recently)
   - Suggested topics

2. **Data Queries**
```typescript
// Trending tags
const trendingTags = await getTopTags(timeframe: '7days', limit: 10)

// Popular posts
const popularPosts = await query(
  collection(db, 'posts'),
  where('createdAt', '>', sevenDaysAgo),
  orderBy('likes', 'desc'),
  limit(20)
)
```

---

## ⏰ Implementation Timeline

### Immediate (This Session):
1. ✅ Fix navigation issues
2. 🔄 Create Profile Page (Next)

### Short Term (Next 1-2 Sessions):
3. Add Notifications system
4. Add Messages system
5. Add Explore page

### Medium Term:
6. Real-time updates (Firestore listeners)
7. Push notifications (Firebase Cloud Messaging)
8. Email notifications

---

## 📝 Notes

- **Keep it simple first**: Start with basic profile page, then iterate
- **Reuse components**: Use existing post cards, user avatars, etc.
- **Mobile responsive**: Make sure everything works on mobile
- **Dark mode**: All new pages must support dark mode
- **Performance**: Use pagination for large lists

---

**Status**: Ready to build Profile Page! 🚀
**Last Updated**: 2025-11-15
