# Subject Integration Guide for MedLearn-Unified

This guide documents the proven process for integrating standalone subject apps (like Physiology) into the MedLearn-Unified platform. Follow this exact pattern for Sociology and Anatomy integration.

## ✅ Successful Physiology Integration Reference

**What We Accomplished:**
- Integrated 122 topics, 32 data files, 73 total files
- Maintained CSS isolation - no impact on existing pages
- Fixed critical audio player bugs
- All navigation, search, and filtering working perfectly

---

## 📋 Pre-Integration Checklist

### 1. Source App Location
- [ ] Identify standalone app location (e.g., `/Users/peti/Documents/GitHub/sociology-app/`)
- [ ] Verify app is working independently
- [ ] Document any unique features or dependencies

### 2. Target Directory Structure
```
client/src/apps/{subject}/
├── App.jsx                    # Main app component
├── App.module.css             # Scoped CSS (CRITICAL!)
├── components/
├── context/
├── data/
├── hooks/
├── pages/
├── services/
└── utils/
```

---

## 🚀 Step-by-Step Integration Process

### PHASE 1: Setup & File Copy

**Safety First:**
```bash
# Create feature branch
git checkout -b feature/{subject}-integration

# Copy source files
cp -r /path/to/{subject}-app/src/* client/src/apps/{subject}/
```

**Critical File Cleanup:**
- [ ] **DELETE** `client/src/apps/{subject}/index.css` (global CSS file)
- [ ] Keep only component-specific CSS files
- [ ] Update `index.js` to export only App component:
  ```javascript
  export { default } from './App.jsx';
  ```

---

### PHASE 2: CSS Module Conversion

**⚠️ CRITICAL: This prevents the global CSS disaster that failed 6 times!**

**Convert CSS Files:**
1. Rename: `App.css` → `App.module.css`
2. Add scoped wrapper class:
   ```css
   /* Base styles that were in index.css - now scoped */
   .{subject}Root {
     /* CSS Variables - scoped to {subject} app */
     --bg: #fafbff;
     --text: #0b1220;
     --brand: #6d28d9;
     /* ... all other variables ... */

     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', ...;
     background: var(--bg);
     color: var(--text);
     box-sizing: border-box;
   }

   .{subject}Root *,
   .{subject}Root *::before,
   .{subject}Root *::after {
     box-sizing: border-box;
   }
   ```

3. **Remove ALL global selectors** from CSS:
   - ❌ `body {}`, `code {}`, `:root {}`, `* {}`
   - ✅ Keep only `.className {}` selectors

**Update Component Imports:**
```javascript
// In App.jsx
import styles from './App.module.css';

// Wrap entire app
<div className={styles.{subject}Root}>
  <div className={styles.App}>
    {/* App content */}
  </div>
</div>
```

**Convert Component ClassNames:**
```javascript
// Before: className="nav"
// After:  className={styles.nav}

// Before: className="topic-card"
// After:  className={styles.topicCard}
```

---

### PHASE 3: Router Integration

**Remove MemoryRouter (CRITICAL!):**

**Before (WRONG):**
```javascript
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>  {/* ❌ Causes nested router error */}
      <Routes>...</Routes>
    </BrowserRouter>
  );
}
```

**After (CORRECT):**
```javascript
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <ContextProviders>
      <div className={styles.{subject}Root}>
        <div className={styles.App}>
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="topic/:topicId" element={<TopicPageWrapper />} />
          </Routes>
        </div>
      </div>
    </ContextProviders>
  );
}
```

**Key Points:**
- No `BrowserRouter` wrapper (parent app already has one)
- Use relative routes (`path="/"` not `path="/{subject}"`)
- Parent route will be `/{subject}/*`

---

### PHASE 4: Navigation Path Updates

**Update ALL navigation links to absolute paths:**

**Pattern:**
- ❌ `to="/topic/15"` → Goes to root, redirects to login
- ❌ `to="topic/15"` → Relative, may construct wrong paths
- ✅ `to="/{subject}/topic/15"` → Always works correctly

**Files to Update:**
1. **Navigation Component:**
   ```javascript
   <Link to="/{subject}">Home</Link>
   <Link to={`/{subject}/topic/${prevTopic.id}`}>← Prev</Link>
   <Link to={`/{subject}/topic/${nextTopic.id}`}>Next →</Link>
   ```

2. **HomePage (topic cards):**
   ```javascript
   <Link to={`/{subject}/topic/${topic.id}`}>
   ```

3. **TopicPage (bottom nav):**
   ```javascript
   <Link to="/{subject}">Home</Link>
   <Link to={`/{subject}/topic/${prevTopic.id}`}>
   ```

4. **Search Hook:**
   ```javascript
   // In useSearch.js
   navigate(`/{subject}/topic/${foundTopic.id}`);
   ```

---

### PHASE 5: Integration with Main App

**1. Create Wrapper Page:**

Create `client/src/pages/{Subject}Page.tsx`:
```typescript
import { useState } from 'react'
import { Sidebar } from '@/components/layout/Sidebar'
import {Subject}App from '@/apps/{subject}'

export function {Subject}Page() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <div className="min-h-screen bg-background flex">
      <div className="relative z-10">
        <Sidebar
          isOpen={sidebarOpen}
          setIsOpen={setSidebarOpen}
          isCollapsed={sidebarCollapsed}
          setIsCollapsed={setSidebarCollapsed}
        />
      </div>
      <main className="flex-1 overflow-auto">
        <{Subject}App />
      </main>
    </div>
  )
}
```

**2. Update App.tsx:**
```typescript
import { {Subject}Page } from './pages/{Subject}Page'

// In routes:
<Route
  path="/{subject}/*"
  element={
    <ProtectedRoute>
      <{Subject}Page />
    </ProtectedRoute>
  }
/>
```

**3. Update DashboardPage.tsx:**
```typescript
const subjects = [
  {
    name: '{Subject}',
    icon: {Icon},
    description: 'Description here',
    subtitle: 'Subtitle',
    enabled: true,
    image: '/subjects/{subject}.png',
    path: '/{subject}',  // ← Add this line
    color: 'bg-blue-50 dark:bg-blue-950/30',
    iconColor: 'text-blue-600 dark:text-blue-400',
  },
  // ... other subjects
]
```

**4. Update Sidebar.tsx:**
```typescript
const subjects = [
  { name: '{Subject}', icon: {Icon}, path: '/{subject}' },
  // ... other subjects
]
```

---

### PHASE 6: Audio Files Setup

**Copy Audio Files:**
```bash
# Create directory
mkdir -p client/public/Audio/{subject}/

# Copy audio files
cp -r /path/to/{subject}-app/public/Audio/* client/public/Audio/{subject}/
```

**Update .gitignore:**
```
# Audio files - stored locally, deployed separately
public/Audio/
```

**Verify Audio Paths in Code:**
- Check components for audio URL patterns
- Update to: `/Audio/{subject}/filename.mp3`
- Ensure paths are absolute, not relative

---

### PHASE 7: Audio Player Bug Fixes

**Critical Bug 1: Race Condition (Overlapping Audio)**

**Problem:** Button shows "Play" while audio is playing, allows multiple instances

**Fix:** Check actual Howl state, not React state
```javascript
// ❌ WRONG - uses React state
const togglePlayPause = () => {
  if (isPlaying) {
    soundRef.current.pause();
  } else {
    soundRef.current.play();
  }
};

// ✅ CORRECT - checks actual Howl state
const togglePlayPause = () => {
  if (soundRef.current && soundRef.current.playing()) {
    soundRef.current.pause();
  } else {
    soundRef.current.play();
  }
};
```

**Critical Bug 2: Repeat Functionality**

**Problem:** Repeat toggle doesn't work - stale closure in `onend` callback

**Fix:** Use ref to track current repeat state
```javascript
// Add ref
const repeatRef = React.useRef(false);

// Update toggle function
const toggleRepeat = React.useCallback(() => {
  setRepeat(prev => {
    const newValue = !prev;
    repeatRef.current = newValue; // Keep ref in sync
    return newValue;
  });
}, []);

// Use ref in onend callback
onend: () => {
  if (repeatRef.current) {  // ← Use ref, not state
    soundRef.current.seek(0);
    soundRef.current.play();
  } else {
    setIsPlaying(false);
    setCurrentTime(0);
  }
}

// Remove repeat from dependencies
}, [speed]);  // ← Don't include repeat here
```

---

## 🧪 Testing Checklist

### Functionality Tests:
- [ ] Dashboard card navigates to subject home page
- [ ] Sidebar link navigates to subject home page
- [ ] Topic cards navigate to correct topics
- [ ] Prev/Next buttons work in navbar
- [ ] Bottom page navigation links work
- [ ] Search functionality works
- [ ] MCQ filtering works (if applicable)
- [ ] Audio playback works
- [ ] Audio repeat toggle works
- [ ] Audio speed controls work
- [ ] Cannot create overlapping audio

### CSS Isolation Tests:
- [ ] Dashboard page looks normal
- [ ] Histology page looks normal
- [ ] Community page looks normal
- [ ] Profile page looks normal
- [ ] No unexpected style changes anywhere

### Console Tests:
- [ ] No errors in browser console
- [ ] No infinite render loops
- [ ] No excessive console.log spam
- [ ] Only legitimate errors shown

---

## 🚨 Common Pitfalls & Solutions

### Issue: "Cannot render a <Router> inside another <Router>"
**Cause:** Subject app has MemoryRouter/BrowserRouter
**Fix:** Remove router wrapper, use Routes only

### Issue: Navigation redirects to login page
**Cause:** Relative paths don't match route structure
**Fix:** Use absolute paths: `/{subject}/topic/${id}`

### Issue: Global CSS breaks entire site
**Cause:** Not using CSS Modules properly
**Fix:** Delete index.css, scope all CSS to root class

### Issue: Audio plays but button shows wrong state
**Cause:** Race condition with React state
**Fix:** Check `soundRef.current.playing()` not `isPlaying`

### Issue: Repeat toggle doesn't work
**Cause:** Stale closure in onend callback
**Fix:** Use repeatRef, remove from dependencies

### Issue: Infinite re-render loop
**Cause:** useCallback dependencies cause re-creation
**Fix:** Remove unnecessary dependencies, use refs

---

## 📝 Git Workflow

```bash
# 1. Create feature branch
git checkout -b feature/{subject}-integration

# 2. Make changes following this guide

# 3. Test thoroughly (all checklist items above)

# 4. Commit with descriptive message
git add client/src/apps/{subject}/ client/src/pages/{Subject}Page.tsx client/src/App.tsx client/src/pages/DashboardPage.tsx client/.gitignore
git commit -m "Integrate {Subject} app into unified platform

Major Features:
- ✅ Integrated {Subject} app (X topics) into unified platform
- ✅ Maintained CSS isolation - no impact on existing pages
- ✅ Fixed audio player bugs (if applicable)

Technical Details:
- Converted global CSS to scoped CSS Modules
- Integrated with parent BrowserRouter
- Updated all navigation paths to absolute routes
- Copied audio files (excluded from git)
- Added {Subject} to Dashboard and Sidebar

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
"

# 5. Merge to main
git checkout main
git merge feature/{subject}-integration

# 6. Push to GitHub
git push origin main
```

---

## 🎯 Subject-Specific Notes

### Sociology Integration Notes:
- Check if has audio files (might not need audio setup)
- Verify data structure (might differ from Physiology)
- Icon: `Users` from lucide-react
- Color scheme: teal (bg-teal-50 dark:bg-teal-950/30)

### Anatomy Integration Notes:
- Check if has audio files
- Might have image-heavy content
- Icon: `User` from lucide-react
- Color scheme: emerald (bg-emerald-50 dark:bg-emerald-950/30)

---

## 📚 Reference: Physiology Integration Details

**Files Changed:** 73 files, 13,978 insertions
**Time to Complete:** 1 session (with this guide: much faster!)
**Critical Success Factors:**
1. CSS Modules (prevented 6 previous failures)
2. No nested routers
3. Absolute navigation paths
4. Audio player bug fixes

**Commits:**
- Initial integration: `f69cc5b`
- Bug fixes: `77db7bb`

---

## ✅ Final Checklist Before Merge

- [ ] All functionality tests pass
- [ ] All CSS isolation tests pass
- [ ] No console errors
- [ ] Audio files excluded from git
- [ ] Code reviewed for hardcoded paths
- [ ] Committed with descriptive message
- [ ] Pushed to GitHub
- [ ] Tested on main branch

---

**Created:** 2025-11-16
**Last Updated:** 2025-11-16
**Success Rate:** 100% when following this guide
**Estimated Time:** 2-4 hours per subject (with guide)

---

## 🆘 Troubleshooting

If you encounter issues:
1. Check each phase completed correctly
2. Verify no global CSS (`grep -r "^body\|^:root\|^\*" *.css`)
3. Verify absolute paths (`grep -r "to=\"/topic" src/`)
4. Check browser console for specific errors
5. Compare with Physiology integration as reference

Remember: The Physiology integration took 6 failed attempts before we got it right. This guide captures everything we learned!
