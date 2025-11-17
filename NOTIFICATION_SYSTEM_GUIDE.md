# Real-Time Notification System Guide

## Overview

The MedLearn platform now includes a comprehensive **real-time notification system** powered by Firebase Firestore. This system solves the browser cache problem by delivering instant updates to students without requiring page refreshes.

## Why This Solves Your Problem

### The Cache Problem
- Browsers (especially mobile) aggressively cache static content
- New content updates don't appear until cache expires (hours or days)
- Students miss time-sensitive exam materials

### The Solution
- Notifications are delivered via **Firestore real-time listeners** (WebSocket connections)
- Messages update **instantly** on all connected devices
- Works even when the main website content is cached
- Uses Firebase infrastructure (same as Community feature)

## System Architecture

### 1. Three Types of Notifications

#### **Critical Announcements** (Modal Popup)
- Appears as center-screen modal dialog
- Requires user action (can't be missed)
- Use for urgent updates: "New histology content available - refresh now!"
- Can be dismissible or forced-action

#### **Normal Announcements** (Bell Icon)
- Appears in notification bell dropdown
- Shows badge with unread count
- Less intrusive, user checks when ready
- Use for: "Sociology updates coming next week"

#### **Dashboard Message Card** (Static)
- Persistent message on dashboard
- Not a popup - part of the page layout
- Updates in real-time but always visible
- Use for: "New study materials being added this week"

### 2. Targeting System

Announcements can be targeted to:
- **Global**: All students see it everywhere
- **Histology**: Only on Histology pages
- **Physiology**: Only on Physiology pages
- **Sociology**: Only on Sociology pages
- **Anatomy**: Only on Anatomy pages

### 3. Action Types

Each notification can have different action buttons:
- **Refresh Page**: Forces browser to reload (gets new cached content)
- **Navigate to URL**: Links to specific page
- **Dismiss**: Just closes the notification
- **Custom**: Custom JavaScript action (advanced)

## How to Use (Step-by-Step)

### Prerequisites

1. **Set Super Admin Email**
   - Edit your `.env.local` file
   - Set: `VITE_SUPER_ADMIN_EMAIL=your-email@example.com`
   - Use the same email you log in with
   - Restart dev server after changing

2. **Deploy Firestore Rules** (Production Only)
   ```bash
   # In production, uncomment the production rules in firestore.rules
   # Then deploy:
   firebase deploy --only firestore:rules
   firebase deploy --only firestore:indexes
   ```

### Creating Notifications

#### Option 1: Using the Admin Panel (Recommended)

1. **Access Admin Panel**
   - Log in with your super admin email
   - Click "Notifications Admin" in the sidebar (bottom)
   - Or navigate to `/admin/notifications`

2. **Create an Announcement**
   - Click "Create Announcement" tab
   - Fill in the message (e.g., "New histology slides added! Refresh to see updates.")
   - Choose priority:
     - **Normal**: Bell icon notification (less intrusive)
     - **Critical**: Modal popup (forces attention)
   - Select target audience:
     - All Students (Global)
     - Specific subject only
   - Configure action button:
     - **Refresh Page**: Most common for content updates
     - **Navigate to URL**: Link to specific content
     - **Dismiss**: Just close notification
   - Set options:
     - Allow users to dismiss (checkbox)
     - Expires after X hours (default: 24)
   - Click "Send Announcement"

3. **Update Dashboard Message**
   - Click "Dashboard Message" tab
   - Enter message (e.g., "Sociology exam prep materials coming Friday!")
   - Check "Show on dashboard" to make visible
   - Click "Update Dashboard Message"
   - **This appears as a card on the dashboard** - not a popup

#### Option 2: Using Firebase Console (Direct)

1. **Go to Firestore Database** in Firebase Console
2. **Create Collection**: `announcements`
3. **Add Document** with fields:
   ```javascript
   {
     message: "New physiology audio files added - refresh to access!",
     priority: "critical",  // or "normal"
     target: "physiology",  // or "global", "histology", etc.
     action: {
       type: "refresh",     // or "navigate", "dismiss"
       label: "Refresh Now",
       url: ""              // only needed if type is "navigate"
     },
     dismissible: true,     // can users close it?
     createdAt: [Firestore Timestamp - Now],
     expiresAt: [Firestore Timestamp - 24 hours from now]
   }
   ```

## Common Use Cases

### Use Case 1: New Content Added to Histology

**Scenario**: You just uploaded 10 new histology slides. Students need to refresh to see them.

**Solution**:
1. Open Admin Panel → Create Announcement
2. Message: "10 new histology slides added! Refresh your browser to see the latest content."
3. Priority: **Critical** (modal popup)
4. Target: **Histology** (only shows on histology pages)
5. Action: **Refresh Page** with label "Refresh Now"
6. Dismissible: **No** (force refresh)
7. Expires: 6 hours

**Result**: Any student on histology pages sees a modal popup with "Refresh Now" button. After clicking, they see the new slides immediately.

---

### Use Case 2: Upcoming Exam Content

**Scenario**: Physiology exam prep materials will be added Friday. You want students to know.

**Solution**: Dashboard Message
1. Open Admin Panel → Dashboard Message
2. Message: "New physiology exam practice questions coming Friday! Stay tuned."
3. Check "Show on dashboard"
4. Click Update

**Result**: A blue card appears on the dashboard for all students. It stays visible until you update or hide it.

---

### Use Case 3: Quick Info Update

**Scenario**: You want to let sociology students know the study guide was updated, but it's not urgent.

**Solution**: Normal Priority Announcement
1. Open Admin Panel → Create Announcement
2. Message: "Sociology study guide has been updated with additional examples."
3. Priority: **Normal** (bell icon)
4. Target: **Sociology**
5. Action: **Refresh Page** with label "View Update"
6. Dismissible: **Yes**
7. Expires: 48 hours

**Result**: Sociology students see a badge on the bell icon. When they click it, they see the message and can choose to refresh or dismiss.

---

### Use Case 4: Site-Wide Announcement

**Scenario**: Server maintenance tonight, all students should know.

**Solution**: Global Critical Announcement
1. Message: "Server maintenance tonight 11 PM - 1 AM. Save your work!"
2. Priority: **Critical**
3. Target: **Global** (everyone)
4. Action: **Dismiss** with label "Got It"
5. Dismissible: **Yes**
6. Expires: 12 hours

**Result**: Every logged-in student sees a modal popup with the message, regardless of which page they're on.

## How It Works Technically

### Real-Time Updates Flow

```
1. You create announcement in Admin Panel
   ↓
2. Saved to Firestore database
   ↓
3. Firestore triggers WebSocket update
   ↓
4. All connected browsers receive update instantly
   ↓
5. React components re-render with new notification
   ↓
6. Student sees notification (modal, bell badge, or card)
```

### Why This Bypasses Cache

- **Cached**: HTML, CSS, JS, images (static files)
- **NOT Cached**: Firestore data (live database connection)
- Notifications come from Firestore, so they always show up
- When user clicks "Refresh Now", browser re-downloads cached files

### Offline Behavior

- If student is offline, notifications queue
- When they reconnect, notifications appear
- Dismissed notifications tracked in localStorage (per device)

## Best Practices

### Message Writing

✅ **Good Messages**
- "New histology slides (15-20) added - refresh to see them!"
- "Physiology audio fixed for Topics 10-15. Refresh page."
- "Sociology exam answers now available. Click to view."

❌ **Avoid**
- "Update available" (too vague)
- "Click here" (what happens?)
- Technical jargon students won't understand

### Priority Selection

**Use Critical (Modal) When:**
- Content is time-sensitive (exam tomorrow)
- Students must see it immediately
- Action is required (refresh to see new content)

**Use Normal (Bell) When:**
- Informational updates
- Non-urgent changes
- Supplementary materials

**Use Dashboard Message When:**
- Ongoing status updates
- Future events ("Coming next week")
- Persistent announcements

### Targeting

- Use **Global** sparingly (interrupts everyone)
- **Subject-specific** is less intrusive
- Consider timing (don't send at 3 AM)

### Expiration

- **Urgent updates**: 6-12 hours
- **Standard updates**: 24-48 hours
- **Info only**: 3-7 days
- Don't set too long (clutters notification panel)

## Troubleshooting

### "I don't see Notifications Admin in sidebar"

- Check that you're logged in with super admin email
- Verify `VITE_SUPER_ADMIN_EMAIL` in `.env.local` matches your email
- Restart dev server after changing .env
- Clear browser cache and re-login

### "Students aren't seeing notifications"

- Check Firestore rules are deployed
- Verify announcement hasn't expired
- Check target audience matches current page
- Look for browser console errors
- Ensure students are logged in

### "Notification appeared but won't dismiss"

- Check if `dismissible` field is `true`
- Clear localStorage: `localStorage.removeItem('medlearn_dismissed_notifications')`
- Check browser console for errors

### "Dashboard message not appearing"

- Verify `visible` field is `true` in Firestore
- Check that you're on the dashboard page
- Look for browser console errors
- Ensure you're logged in

## Advanced Features

### Manually Managing Dismissed Notifications

Students' dismissed notifications are stored in localStorage with key `medlearn_dismissed_notifications`.

To reset for testing:
```javascript
// In browser console
localStorage.removeItem('medlearn_dismissed_notifications')
location.reload()
```

### Custom Actions (Advanced)

You can create custom action handlers by modifying the notification components. This is for advanced users who want actions beyond refresh/navigate.

### Programmatic API

The notification system can be controlled programmatically:

```typescript
import { useNotifications } from '@/contexts/NotificationContext'

function MyComponent() {
  const {
    notifications,        // All active notifications
    criticalNotifications, // Critical only
    normalNotifications,   // Normal only
    unreadCount,          // Badge count
    dashboardMessage,     // Current dashboard message
    markAsRead,           // Mark notification as read
    dismissNotification,  // Dismiss notification
    setCurrentTarget      // Change page target
  } = useNotifications()

  // Your custom logic here
}
```

## Cost Considerations

### Firestore Usage

- **Reads**: Each notification loads once per student session
- **Writes**: Only when you create/update notifications
- **Real-time listeners**: One per active student

### Typical Monthly Costs (1000 active students)

- Announcements: ~5,000 reads/month ($0.01)
- Dashboard message: ~1,000 reads/month ($0.002)
- Real-time connections: Included in free tier

**Estimated**: Less than $1/month for this feature.

## Security

### Access Control

- Only super admin can create/edit/delete notifications
- All students can read notifications
- Firestore rules enforce this automatically
- See `firestore.rules` for details

### Data Privacy

- Notifications are not user-specific (public to all authenticated users)
- Don't include sensitive student information
- All data stored in Firebase (GDPR compliant)

## Future Enhancements (Ideas)

- User-specific notifications (grades, deadlines)
- Email/SMS integration for critical updates
- Scheduled notifications (auto-post at specific time)
- Rich text formatting in messages
- Attachment support (PDFs, images)
- Analytics (who saw/dismissed notifications)

## Support

If you encounter issues or have questions:

1. Check this guide first
2. Look at browser console for errors
3. Verify Firebase configuration
4. Check Firestore rules and indexes
5. Test with a fresh browser/incognito mode

## Summary

You now have three powerful tools to communicate with students:

1. **Critical Announcements**: Urgent updates via modal popup
2. **Normal Announcements**: Informational via bell icon
3. **Dashboard Messages**: Persistent status updates

All of these **bypass browser cache** and update in **real-time**, ensuring students always get your latest messages even when static content is cached.

Use the Admin Panel at `/admin/notifications` to manage everything with a user-friendly interface.
