# MedLearn-Unified - Development Guide & Continuation Prompt

## 🚀 Quick Start (Local Setup)

### Prerequisites
- Node.js 18+ installed
- Git installed

### Setup Instructions
```bash
# Clone the repository
git clone https://github.com/phangodi/MedLearn-Unified.git
cd MedLearn-Unified

# Navigate to client folder
cd client

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:5173
```

---

## 📋 Project Overview

**Goal:** Build a unified, modern medical education platform that consolidates multiple existing apps (MedLearn-Szeged, Physiology Review, Histology Study App) into one professionally-designed site with a COMPLETE REDESIGN featuring modern features.

**Target Users:** Medical students preparing for exams

**Key Philosophy:**
- Free for all students, no paid features
- Modern, professional medical aesthetic
- AI-generated content to help exam preparation
- Community-driven with user contributions
- Desktop-like interface for subject navigation

---

## ✅ What's Been Built (Current Status)

### 1. Project Foundation ✓
- **Tech Stack:**
  - Vite + React 18 + TypeScript
  - Tailwind CSS for styling
  - Framer Motion for animations
  - Zustand (installed, ready for state management)
  - React Router (installed, ready for routing)
  - Lucide React for icons

- **Project Structure:**
  ```
  client/
  ├── src/
  │   ├── components/
  │   │   ├── ui/              # Reusable UI components
  │   │   ├── layout/          # Layout components (empty, ready)
  │   │   └── auth/            # Auth components (empty, ready)
  │   ├── pages/
  │   │   └── LoginPage.tsx    # ✓ Complete
  │   ├── hooks/
  │   │   └── useTheme.ts      # ✓ Complete
  │   ├── lib/
  │   │   └── utils.ts         # ✓ Utility functions
  │   ├── store/               # Empty, ready for Zustand
  │   └── index.css            # ✓ Complete design system
  ```

### 2. Design System ✓

**Color Palette (Medical Theme):**
```css
/* Light Mode */
Primary: #0066CC (Medical Blue)
Secondary: #00A896 (Accent Teal)
Success: #06D6A0 (Green)
Warning: #FFB703 (Amber)
Background: White
Foreground: Dark gray

/* Dark Mode */
Background: #0A0E27 (Deep blue-black)
Cards: #1A1F3A (Elevated surfaces)
Primary: Brighter blue (#0080FF)
Secondary: Brighter teal
Text: #E0E6ED (Light gray)
```

**Typography:**
- System fonts (Inter-like)
- Clear hierarchy
- Minimum 16px for body text

**Spacing & Layout:**
- Generous whitespace
- Comfortable padding
- Card-based design
- Rounded corners (0.5rem default)

**Design Patterns:**
- Glassmorphism on cards
- Smooth transitions (200ms)
- Subtle shadows with depth
- Hover states with lift effect
- Focus states with ring

### 3. UI Components Built ✓

All components are in `src/components/ui/`:

**Button** (`Button.tsx`)
- Variants: default, secondary, outline, ghost
- Sizes: sm, default, lg
- Smooth hover/active states
- Accessibility built-in

**Card** (`Card.tsx`)
- Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter
- Subtle shadow
- Supports glassmorphism

**Input** (`Input.tsx`)
- Clean form input
- Focus ring animation
- Placeholder support
- Validation ready

**Label** (`Label.tsx`)
- Form labels
- Accessible

**ThemeToggle** (`ThemeToggle.tsx`)
- Sun/Moon icon animation
- Toggles dark/light mode
- Smooth rotation transition

### 4. Pages Built ✓

**LoginPage** (`src/pages/LoginPage.tsx`)
- Beautiful centered card layout
- Animated entrance (fade-in, slide-up)
- Floating gradient orbs in background
- Email/password inputs
- "Remember me" checkbox
- "Forgot password" link
- "Sign up" link
- Theme toggle in corner
- Fully responsive
- Form validation ready (not connected yet)

### 5. Features Implemented ✓

**Dark/Light Mode:**
- `useTheme()` hook in `src/hooks/useTheme.ts`
- Persists to localStorage
- Respects system preference
- Smooth theme transitions
- All components support both themes

**Path Aliases:**
- `@/` imports configured
- Works in TypeScript and Vite

---

## 🎯 What Needs to Be Done Next

### Priority 1: Dashboard Layout & Navigation

**Goal:** Create the main dashboard that users see after login

**Components to Build:**

1. **Sidebar Navigation** (`src/components/layout/Sidebar.tsx`)
   - Logo at top
   - Navigation items:
     - Dashboard (home icon)
     - Physiology (brain icon)
     - Histology (microscope icon)
     - Pathology (stethoscope icon)
     - Anatomy (user icon)
     - AI Exam Prep (sparkles icon)
     - Community (users icon)
     - Settings (settings icon)
   - User profile at bottom
   - Collapsible on mobile
   - Active state highlighting

2. **Header** (`src/components/layout/Header.tsx`)
   - Search bar (prominent)
   - Notifications icon with badge
   - Theme toggle
   - User menu dropdown
   - Breadcrumbs (optional)

3. **Dashboard Layout** (`src/components/layout/DashboardLayout.tsx`)
   - Combines Sidebar + Header + main content area
   - Responsive (sidebar becomes drawer on mobile)
   - Smooth transitions

4. **Dashboard Page** (`src/pages/DashboardPage.tsx`)
   - Welcome message with user name
   - Stats cards (3-4 cards showing):
     - Study progress percentage
     - Study streak (days)
     - Tests completed
     - Upcoming exams
   - Subject cards grid (Physiology, Histology, etc.):
     - Card with subject icon
     - Subject name
     - Progress bar
     - "Continue" button
   - Recent activity timeline
   - Quick actions section

**Visual Design Notes:**
- Use card-based layout with subtle shadows
- Grid layout for subject cards (responsive: 1 col mobile, 2 col tablet, 3-4 col desktop)
- Glassmorphism on stat cards
- Smooth hover effects (lift + shadow increase)
- Progress bars with gradient fills

### Priority 2: Routing

**Setup React Router:**

1. Create `src/App.tsx` with router:
   ```tsx
   import { BrowserRouter, Routes, Route } from 'react-router-dom'
   import { LoginPage } from './pages/LoginPage'
   import { DashboardPage } from './pages/DashboardPage'
   import { DashboardLayout } from './components/layout/DashboardLayout'

   function App() {
     return (
       <BrowserRouter>
         <Routes>
           <Route path="/login" element={<LoginPage />} />
           <Route path="/" element={<DashboardLayout />}>
             <Route index element={<DashboardPage />} />
             {/* More routes here */}
           </Route>
         </Routes>
       </BrowserRouter>
     )
   }
   ```

2. Add protected route logic (simple for now)

### Priority 3: Subject Pages

**For each subject (Physiology, Histology, etc.):**

1. **Subject Page Template** (`src/pages/SubjectPage.tsx`)
   - Topic list sidebar
   - Content viewer area
   - Progress tracking
   - Bookmark functionality
   - Notes section

2. **Content Types:**
   - Hierarchical view (comprehensive)
   - Quick Cards (flashcard-style)
   - Relationships (visual connections)
   - Ultra-Minimal (exam prep)

3. **Features:**
   - Search within subject
   - Filter by topic
   - Mark as completed
   - Add personal notes

### Priority 4: AI Features

1. **AI Exam Prep Page** (`src/pages/AIExamPrepPage.tsx`)
   - Question generator interface
   - Practice test creator
   - Quiz interface
   - Performance analytics

2. **Integration:**
   - Claude API or OpenAI API
   - Caching for cost reduction
   - Rate limiting

### Priority 5: Community Features

1. **Blog/Discussion Page** (`src/pages/CommunityPage.tsx`)
   - Post list with cards
   - Comment threads
   - Upvoting system
   - Create post modal

2. **Contribution Portal** (`src/pages/ContributionsPage.tsx`)
   - File upload interface
   - Content review queue
   - Resource library

---

## 🎨 Design Guidelines

### Component Creation Checklist
When building new components:
- ✓ Support both light and dark themes
- ✓ Use theme colors from CSS variables
- ✓ Add smooth transitions (200ms)
- ✓ Include hover states
- ✓ Make it responsive
- ✓ Use Lucide icons
- ✓ Add Framer Motion animations (subtle)
- ✓ Use `cn()` utility for className merging

### Animation Guidelines
- **Entrance:** fade-in + slide-up (stagger for lists)
- **Exit:** fade-out
- **Hover:** scale(1.02) + shadow increase
- **Active:** scale(0.98)
- **Duration:** 200ms for UI, 500ms for page transitions
- **Easing:** ease-in-out or spring

### Layout Guidelines
- **Spacing:** Use Tailwind spacing (p-4, p-6, space-y-4)
- **Max width:** Content should have max-w-7xl
- **Gaps:** gap-4 for cards, gap-6 for sections
- **Padding:** p-6 for cards, p-4 for compact areas

### Mobile Responsiveness
- **Breakpoints:** sm (640px), md (768px), lg (1024px), xl (1280px)
- **Pattern:** Mobile-first (base styles for mobile, add md:, lg: for larger)
- **Sidebar:** Full width drawer on mobile, fixed sidebar on desktop
- **Cards:** 1 column mobile, 2 tablet, 3-4 desktop
- **Typography:** Slightly smaller on mobile

---

## 📦 Content Structure (From Old Apps)

### Histology Content Format
Based on the histology-study-app review:
- 21 slides (70-89) focused on nervous system
- 4 study formats:
  1. Hierarchical (comprehensive nested structure)
  2. Quick Cards (flashcard rapid review)
  3. Relationships (visual connection maps)
  4. Ultra-Minimal (essential facts)
- Content includes:
  - Staining methods
  - Clinical notes
  - Relationships between structures
  - Examination essentials
  - Identification tips

### Physiology & MedLearn Portal
(Repos were private/unavailable, but assume similar structure)

---

## 🔧 Technical Notes

### State Management (Not Yet Implemented)
When you implement Zustand:

```tsx
// src/store/authStore.ts
import { create } from 'zustand'

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: async (email, password) => {
    // Implement login
  },
  logout: () => set({ user: null, isAuthenticated: false }),
}))
```

### API Integration (Not Yet Implemented)
Create `src/lib/api.ts` for API calls:
- Use fetch or axios
- Add error handling
- Implement retry logic
- Add loading states

---

## 📝 Continuation Prompt for Future Sessions

**Copy this prompt to continue where we left off:**

```
I'm continuing work on the MedLearn-Unified medical education platform. Please read the DEVELOPMENT_GUIDE.md file in the repository to understand what's been built.

Current Status:
- ✅ Project foundation: Vite + React + TypeScript setup complete
- ✅ Design system: Medical-themed colors with dark/light mode
- ✅ UI components: Button, Card, Input, Label, ThemeToggle
- ✅ Login page: Beautiful animated login page complete

Next Task: Build the Dashboard Layout
Please create:
1. Sidebar navigation component with medical subjects
2. Header component with search, notifications, theme toggle
3. DashboardLayout component that combines sidebar + header
4. DashboardPage with welcome section, stats cards, and subject cards grid

Design Requirements:
- Follow the medical blue theme (#0066CC primary, #00A896 secondary)
- Use Framer Motion for smooth animations
- Make it fully responsive (mobile-first)
- Ensure dark/light mode support
- Use card-based layout with glassmorphism effects
- Add subject cards for: Physiology, Histology, Pathology, Anatomy, AI Exam Prep, Community

Tech Details:
- All UI components are in src/components/ui/
- Use the existing design system from src/index.css
- Use Lucide React for icons
- Follow the pattern established in LoginPage.tsx

Please start by creating the Sidebar component, then Header, then DashboardLayout, then DashboardPage. Let me review each before moving to the next.
```

---

## 🎯 Success Criteria

### Dashboard (Next Milestone)
- ✓ Beautiful, modern dashboard that impresses
- ✓ Smooth animations throughout
- ✓ Fully responsive (perfect on mobile)
- ✓ Dark/light mode works flawlessly
- ✓ Easy navigation between subjects
- ✓ Visual feedback for interactions
- ✓ Professional medical aesthetic maintained

### Full Application (End Goal)
- ✓ Unified platform for all medical content
- ✓ Desktop-like subject navigation
- ✓ AI-generated study content
- ✓ Community features (blog, discussions)
- ✓ User contribution system
- ✓ Multiple study formats per subject
- ✓ Progress tracking
- ✓ Mobile-friendly
- ✓ Fast and performant
- ✓ Free for all students

---

## 📚 Reference Links

**Original Apps (for content reference only, not copying):**
- MedLearn-Szeged: https://medlearn-szeged.netlify.app (403 error)
- Physiology Review: https://physiology-review.netlify.app (403 error)
- GitHub Repos:
  - https://github.com/phangodi/histology-study-app
  - https://github.com/phangodi/physiology-app
  - https://github.com/phangodi/MedLearn-Portal

**Tech Documentation:**
- Vite: https://vitejs.dev/
- React: https://react.dev/
- Tailwind CSS: https://tailwindcss.com/
- Framer Motion: https://www.framer.com/motion/
- Lucide Icons: https://lucide.dev/
- Zustand: https://github.com/pmndrs/zustand

---

## 🐛 Known Issues / TODO

- [ ] Login form doesn't actually authenticate (needs backend/auth)
- [ ] No routing set up yet (React Router installed but not configured)
- [ ] No state management configured (Zustand installed but not used)
- [ ] No API integration
- [ ] Need to add form validation library (React Hook Form recommended)
- [ ] Need to add toast notifications (sonner recommended)

---

## 💡 Development Tips

1. **Always test dark mode** - Every component should look good in both themes
2. **Mobile-first** - Build for mobile, then enhance for desktop
3. **Reuse components** - Use the UI components we've built
4. **Keep animations subtle** - Medical professionals prefer understated elegance
5. **Performance matters** - Lazy load pages, optimize images
6. **Accessibility** - Use semantic HTML, ARIA labels where needed

---

## 🎨 Design Inspiration

**Visual Style:**
- Modern SaaS dashboards (Linear, Notion)
- Medical apps with clean aesthetics
- Glassmorphism for depth
- Card-based layouts
- Smooth micro-interactions

**Avoid:**
- Overly playful animations
- Cluttered layouts
- Busy backgrounds
- Too many colors
- Comic Sans (obviously!)

---

## 📊 Token Usage Notes

This session used approximately **45,000 tokens** to build:
- Complete project setup
- Design system
- 5 UI components
- Login page
- Documentation

Remaining features will require additional sessions. Prioritize in this order:
1. Dashboard (most important for evaluation)
2. Routing (needed for navigation)
3. One subject page (template for others)
4. AI features (unique value proposition)
5. Community features (engagement)

---

## 🚀 Ready to Continue!

When you clone this repository and run it locally:
1. You'll see a beautiful animated login page
2. Theme toggle works (try it!)
3. Fully responsive (resize your browser)
4. All the foundation is ready to build on

Use the "Continuation Prompt" section above to pick up exactly where we left off in your next conversation with Claude!

---

**Last Updated:** Session ending at 45k tokens
**Current Branch:** `claude/multi-repo-unification-guide-011CV4Yhvx75B9cEXZFHvqg3`
**Status:** Login page complete, ready for dashboard development
