# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Lara's MedLearn** is a unified medical education platform consolidating multiple legacy medical study apps (Histology, Physiology, Sociology, Anatomy) into one modern, professionally-designed application. The platform is completely free for all medical students.

**Tech Stack:**
- Vite + React 18 + TypeScript
- Tailwind CSS v4 with @tailwindcss/vite plugin
- Framer Motion (animations)
- React Router v6 (routing)
- Firebase (authentication, Firestore database, storage)
- Zustand (state management - installed but not yet configured)
- Lucide React (icons)
- Howler.js (audio playback in legacy apps)

## Development Commands

```bash
# Navigate to client directory
cd client

# Install dependencies
npm install

# Start development server (runs on http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Project Architecture

### Directory Structure

```
client/
├── src/
│   ├── components/
│   │   ├── ui/              # Reusable UI primitives (Button, Card, Input, etc.)
│   │   ├── layout/          # Layout components (Sidebar, AngledBackground)
│   │   └── auth/            # Auth components (ProtectedRoute)
│   ├── pages/               # Page components (AuthPage, DashboardPage, etc.)
│   ├── apps/                # Legacy app integrations
│   │   ├── physiology/      # Physiology app (32 topics, audio, MCQs)
│   │   ├── histology/       # Histology app (5 study formats)
│   │   ├── sociology/       # Sociology app (5 chapters)
│   │   └── anatomy/         # Anatomy CNS app (cranial nerves, brainstem)
│   ├── contexts/            # React contexts (AuthContext)
│   ├── firebase/            # Firebase configuration
│   ├── hooks/               # Custom hooks (useTheme)
│   ├── lib/                 # Utilities (utils.ts with cn() function)
│   ├── store/               # Zustand stores (empty, ready to use)
│   ├── App.tsx              # Router configuration
│   ├── main.tsx             # Application entry point
│   └── index.css            # Design system with CSS variables
├── vite.config.ts           # Vite configuration with path aliases
├── tsconfig.json            # TypeScript project references
└── .env.example             # Environment variable template
```

### Path Aliases

The project uses `@/` as an import alias for `./src/`:

```typescript
import { Button } from '@/components/ui/Button'
import { useAuth } from '@/contexts/AuthContext'
```

### Authentication System

**Firebase Authentication** is implemented with:
- Email/password authentication
- Google OAuth
- Apple OAuth
- Protected routes using `<ProtectedRoute>` wrapper
- User profile storage in Firestore with role-based permissions
- Super admin configuration via `VITE_SUPER_ADMIN_EMAIL` environment variable

**Setup Requirements:**
1. Copy `client/.env.example` to `client/.env.local`
2. Fill in Firebase configuration values from Firebase Console
3. Set `VITE_SUPER_ADMIN_EMAIL` to grant super admin privileges

### Routing Architecture

Routes are defined in `src/App.tsx`:

```typescript
/login              → AuthPage (login/signup)
/dashboard          → DashboardPage (main subject selection)
/profile            → ProfilePage (user profile)
/community          → CommunityPage (blog/discussions)
/histology          → HistologyPage (histology subject hub)
/histology/mto1     → HistologyMTO1Page (legacy histology app)
/physiology/*       → PhysiologyPage (legacy physiology app)
/sociology          → SociologyPage (sociology subject hub)
/sociology/exam1/*  → SociologyExam1Page (legacy sociology app)
/anatomy            → AnatomyPage (anatomy subject hub)
/anatomy/cns        → AnatomyCNSPage (legacy anatomy CNS app)
/                   → Redirects to /login
*                   → Redirects to /login
```

All routes except `/login` are protected and require authentication.

### Legacy App Integration Pattern

Legacy apps are integrated as standalone React apps embedded within page wrappers. Each wrapper:
1. Includes the unified `<Sidebar>` component for navigation
2. Mounts the legacy app in the main content area
3. Preserves original app functionality and styling

**Example structure:**
```typescript
export function PhysiologyPage() {
  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar /> {/* Unified navigation */}
      <main className="flex-1 overflow-auto">
        <PhysiologyApp /> {/* Legacy app */}
      </main>
    </div>
  )
}
```

**CSS Scoping:** Legacy apps use CSS Modules (e.g., `App.module.css`) to prevent style conflicts with the unified platform's Tailwind CSS.

### Theme System

Dark/light theme is managed by `useTheme()` hook:
- Persists to localStorage
- Respects system preference on initial load
- Uses CSS variables defined in `src/index.css`
- All new components must support both themes

### Design System

**Medical-themed color palette:**

Light mode:
- Primary: `#0066CC` (Medical Blue)
- Secondary: `#00A896` (Teal)
- Success: `#06D6A0` (Green)
- Warning: `#FFB703` (Amber)

Dark mode:
- Background: `#0A0E27` (Deep blue-black)
- Card surfaces: `#1A1F3A`
- Enhanced primary/secondary colors for contrast

**Component patterns:**
- Card-based layouts with subtle shadows
- Glassmorphism effects (backdrop-blur)
- Smooth transitions (200ms for UI, 500ms for page transitions)
- Hover states with scale and lift effects
- Framer Motion for entrance animations
- Responsive breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)

**Animation guidelines:**
- Entrance: fade-in + slide-up with stagger delays for lists
- Hover: `scale(1.02-1.05)` + shadow increase
- Active/tap: `scale(0.98)`
- Use Framer Motion's `motion` components with spring physics

## Important Implementation Notes

### UI Component Creation

When building new components:
- Support both light and dark themes using CSS variables
- Include smooth transitions (use `transition-all duration-200` or `duration-300`)
- Add hover states for interactive elements
- Make responsive using mobile-first approach
- Use Lucide icons for consistency
- Add Framer Motion animations for page-level components
- Use `cn()` utility from `@/lib/utils` for className merging

### Responsive Design

Mobile-first approach with breakpoints:
- Base styles: Mobile (< 640px)
- `sm:` Tablet (640px+)
- `md:` Larger tablet (768px+)
- `lg:` Desktop (1024px+) - Sidebar becomes always visible
- `xl:` Wide desktop (1280px+)

### Common CSS Layout Issues

**Grid Container Width Collapsing:**

When using CSS Grid with `grid-cols-2` (or any multi-column layout) without explicit width constraints, the grid container will shrink to fit its intrinsic content width rather than expanding to fill available space.

**Symptoms:**
- Cards with short text content appear narrow and cramped
- Images get cropped to show only vertical/center portions (looking like "tall vertical tiles")
- Layout appears correct on pages with longer text but breaks on pages with short text
- Grid is technically rendering in multiple columns, but columns are too narrow to display properly

**Root Cause:**
1. **Grid without width:** `grid grid-cols-2 gap-6 max-w-4xl mx-auto` only sets a maximum width, not a minimum or explicit width
2. **Flex parent shrinking:** When the grid is inside a flex container (`flex-1 flex flex-col`), the flex item also shrinks to content width by default

**Solution:**
Add `w-full` to BOTH the grid container AND its parent flex container:

```tsx
{/* Parent flex container needs w-full */}
<main className="flex-1 w-full mx-auto px-6 lg:px-10 py-8 relative z-10 max-w-7xl">
  {/* Grid container also needs w-full */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
    {/* Card content */}
  </div>
</main>
```

**Why this works:**
- `w-full` forces both containers to take full available width
- `max-w-4xl` / `max-w-7xl` still caps the maximum width
- `mx-auto` centers the content
- Cards maintain consistent sizing regardless of text content length

**Example Issue:** HistologyPage.tsx had narrow cards because text content was short ("MTO1", "Nervous System") compared to SociologyPage.tsx with longer text ("Chapters 1-7", "Fundamentals, Medicine, Research..."). Fixed by adding `w-full` to both containers.

### Working with Legacy Apps

When modifying legacy apps in `src/apps/`:
- **DO NOT** refactor to TypeScript unless explicitly requested
- Preserve existing functionality and file structure
- Use CSS Modules to avoid style conflicts
- Test thoroughly as these apps have complex state management
- Legacy apps use contexts for state (see `context/` folders)

### Firebase Integration

The app uses Firebase for backend services:
- **Authentication:** Email/password, Google, Apple OAuth
- **Firestore:** User profiles, community posts, comments
- **Storage:** Future use for file uploads
- **Emulators:** Can be enabled in dev with `VITE_USE_FIREBASE_EMULATORS=true`

Configuration is validated on startup. Missing environment variables will show console warnings.

### Content Structure (Legacy Apps)

Legacy apps provide different study formats:
1. **Histology App:** Hierarchical, Quick Cards, Relationships, Ultra-Minimal, Final Check, Exam Presentation
2. **Physiology App:** 32 topics with audio explanations, MCQ practice, exam answers
3. **Sociology App:** 5 chapters with hierarchical content and search
4. **Anatomy CNS App:** Cranial nerves reference, brainstem anatomy

## Recent Updates (January 2025)

### Settings Dropdown Panel
- **Location:** `client/src/components/layout/Sidebar.tsx`
- **Feature:** Replaced direct profile navigation with dropdown settings panel
- **Includes:** Edit Profile, Theme Toggle (light/dark), Logout
- **Status:** ✅ Working in both expanded and collapsed sidebar states
- **Design:** Matches sidebar aesthetic with smooth animations and proper z-index handling

### Notification Panel Single-Click Fix
- **Location:** `client/src/components/notifications/NotificationSidebarItem.tsx`
- **Issue:** Notifications required double-click to open (timing conflict with collapse/expand hover)
- **Fix:** Resolved click event timing to enable single-click opening
- **Status:** ✅ Working - maintains all collapse/expand functionality

### AI Exam Prep Coming Soon Page
- **Location:** `client/src/pages/AIExamPrepPage.tsx`
- **Route:** `/ai-prep`
- **Features:** Premium coming soon design with animated background, floating icons, hero section
- **Status:** ✅ Implemented with `showFullContent` toggle for future sections

## Known Technical Debt

- Zustand state management not yet configured
- Some legacy apps use older React patterns (class components)
- Audio player implementation in physiology has known race condition bugs
- No global error boundary implementation
- Community page comments system incomplete
- Profile page user stats not implemented

## Environment Variables

Required for development (see `.env.example`):
```bash
VITE_FIREBASE_API_KEY=              # Firebase API key
VITE_FIREBASE_AUTH_DOMAIN=          # Firebase auth domain
VITE_FIREBASE_PROJECT_ID=           # Firebase project ID
VITE_FIREBASE_STORAGE_BUCKET=       # Firebase storage bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=  # Firebase messaging sender ID
VITE_FIREBASE_APP_ID=               # Firebase app ID
VITE_FIREBASE_MEASUREMENT_ID=       # (Optional) Firebase analytics
VITE_SUPER_ADMIN_EMAIL=             # Super admin email address
VITE_USE_FIREBASE_EMULATORS=        # (Optional) true/false for emulators
```

## Reference Documentation

- `README.md` - Quick start guide
- `DEVELOPMENT_GUIDE.md` - Detailed development documentation
- `design-refs/` - Design inspiration screenshots
