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

## Recent Updates (November 2025)

### Production Deployment (Nov 21, 2025)
- **Anatomy Page:** CNS Neuroanatomy card hidden (can be re-enabled by uncommenting line 31 in AnatomyPage.tsx)
- **Community Page:** Post title is mandatory, content is now optional (users can post title + files without text)
- **Firestore Rules:** Production rules deployed with proper authentication and security
- **Email Verification:** Working via SendGrid SMTP (emails may land in junk folder - users are warned)
- **Status:** ✅ Live on production at https://medlearn-szeged.netlify.app

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

## ✅ Email Verification System (WORKING with SendGrid SMTP)

### Current Status: ENABLED and WORKING

Email verification is **FULLY FUNCTIONAL** using SendGrid SMTP service. Emails are successfully sent, though they may land in junk/spam folders due to sender reputation (resolved by domain ownership in future).

### Implementation Details

1. **VerifyEmailPage.tsx** (`client/src/pages/VerifyEmailPage.tsx`)
   - Professional UI for unverified users
   - Shows email address verification was sent to
   - **Prominent junk/spam folder warning** (yellow warning box)
   - "Resend Verification Email" button with rate limit handling
   - Auto-polling every 3 seconds to detect verification without manual button click
   - Status: ✅ Working

2. **AuthActionPage.tsx** (`client/src/pages/AuthActionPage.tsx`)
   - Handles verification links when users click from emails
   - Route: `/__/auth/action`
   - Processes Firebase action codes
   - Shows success/error states with proper UI
   - Auto-redirects to dashboard after successful verification
   - Status: ✅ Working

3. **ProtectedRoute.tsx** (`client/src/components/auth/ProtectedRoute.tsx`)
   - Email verification check at lines 28-31
   - Blocks unverified email/password users
   - OAuth users (Google/Apple) skip verification (auto-verified by provider)
   - Status: ✅ ENABLED and enforcing verification

4. **AuthContext.tsx** (`client/src/contexts/AuthContext.tsx`)
   - Clean email sending implementation (diagnostic logs removed)
   - Uses Firebase `sendEmailVerification()` via SMTP
   - Lines 204, 261: Simple, clean implementation
   - Status: ✅ Working

### SendGrid SMTP Configuration

**Firebase Console SMTP Settings** (Authentication → Templates → SMTP settings):
- **SMTP Server Host:** `smtp.sendgrid.net`
- **SMTP Server Port:** `587`
- **SMTP Security Mode:** `STARTTLS`
- **SMTP Account Username:** `apikey` (literal string)
- **SMTP Account Password:** SendGrid API Key
- **Sender Address:** Verified sender identity email
- **Sender Name:** `Lara's MedLearn`

**SendGrid Account:**
- **Service:** Twilio SendGrid (free tier)
- **Free Tier:** 100 emails/day permanently free
- **Sender Verification:** Single sender identity verified
- **Status:** ✅ Active and working

### Known Issue: Junk/Spam Folder Delivery

**Current Behavior:**
- Emails ARE successfully sent via SendGrid
- Emails often land in junk/spam folders (not inbox)
- This is due to sender reputation and lack of custom domain

**User Warning:**
- VerifyEmailPage displays prominent yellow warning box
- Instructs users to check junk/spam folder
- Includes guidance to mark email as "Not Junk"

**Long-term Solution (Future):**
- Purchase custom domain (e.g., `medlearn-szeged.com`)
- Verify domain in SendGrid with DNS records (SPF, DKIM, DMARC)
- This will improve sender reputation and inbox delivery
- Cost: ~$12/year for domain

### How Email Verification Works

**For Email/Password Users:**
1. User signs up with email/password
2. Firebase sends verification email via SendGrid SMTP
3. Email arrives (often in junk folder)
4. User clicks verification link
5. Redirected to `/__/auth/action` → AuthActionPage
6. Email marked as verified
7. User can access dashboard

**For OAuth Users (Google/Apple):**
- Emails are pre-verified by OAuth provider
- No verification step required
- Immediate access to dashboard

### Related Files

- **Pages:**
  - `client/src/pages/VerifyEmailPage.tsx` - Verification UI with junk mail warning
  - `client/src/pages/AuthActionPage.tsx` - Handles email verification links

- **Authentication:**
  - `client/src/contexts/AuthContext.tsx` - Email sending logic (lines 204, 261)
  - `client/src/components/auth/ProtectedRoute.tsx` - Verification enforcement (lines 28-31)

- **Routes:**
  - `/verify-email` - Verification required screen
  - `/__/auth/action` - Email verification link handler

### Console Warnings (Safe to Ignore)

**Yellow Warning:**
- `<meta name="apple-mobile-web-app-capable" content="yes"> is deprecated`
- Impact: None - deprecation notice only

**Red Errors:**
- `Cross-Origin-Opener-Policy policy would block the window.close call`
- What: OAuth popup security warnings
- Impact: None - OAuth works correctly
- Source: Google/Apple login popups

These warnings do not affect functionality or performance.

## 🎯 MTO Questions System - ID Rules (CRITICAL)

**⚠️ IMPORTANT: Read this before adding questions or explanations to Firebase!**

The MTO Questions system uses a specific ID convention that MUST be followed to ensure explanations work correctly.

### The Rule

| Collection | Document ID |
|------------|-------------|
| `mtoQuestions` | Auto-generated by Firestore (let Firebase create it) |
| `questionExplanations` | **Must match the question's `legacyId` field** |
| `userBookmarks` | User's UID |

### Why This Matters

Questions have TWO IDs:
1. **Firestore Document ID** - Auto-generated (e.g., `ABC123xyz`)
2. **`legacyId` field** - The original question ID (e.g., `0313014645-q1`)

**Explanations are keyed by `legacyId`**, not by Firestore document ID. The app uses `legacyId` to look up explanations.

### When Adding NEW Questions

1. **Create the question** in `mtoQuestions` collection
   - Let Firestore auto-generate the document ID
   - Set the `legacyId` field to a unique identifier (e.g., `{testId}-q{number}` or `manual-{timestamp}`)

2. **Create the explanation** in `questionExplanations` collection
   - Use the SAME value as the question's `legacyId` as the document ID
   - NOT the Firestore document ID

### Example

```
mtoQuestions/ABC123xyz (Firestore auto-generated)
├── text: "Which of the following..."
├── legacyId: "test-2024-q42"    ← This is what matters!
├── topics: [33, 40]
└── ...

questionExplanations/test-2024-q42   ← Document ID = legacyId
├── summary: "This question tests..."
├── whyCorrect: { "a": "...", "c": "..." }
└── ...
```

### Code Reference

The ID mapping happens in:
- `client/src/apps/physiology-mto/services/firebaseQuestionsService.ts` (line 100)
- Function: `convertToLegacyQuestion()` uses `data.legacyId || firestoreDoc.id`

### What Happens If You Break This Rule

- Explanations will show "No explanation available for this question yet."
- The question will work, but users won't see any explanation after answering

### Future Consideration

This dual-ID system exists due to migration from local JSON files. A future cleanup could standardize on one ID system, but for now, **always follow this rule**.

## Known Technical Debt

- Zustand state management not yet configured
- Some legacy apps use older React patterns (class components)
- Audio player implementation in physiology has known race condition bugs
- No global error boundary implementation
- Community page comments system incomplete
- Profile page user stats not implemented
- MTO system uses dual-ID pattern (legacyId for explanations) - see section above

## 🔀 Pending Branch: feature/flashcards (MERGE INSTRUCTIONS)

**⚠️ CRITICAL: Read this ENTIRE section before merging the flashcards branch!**

The `feature/flashcards` branch contains the Flashcard system with Anki import. When the user requests to merge this branch, follow these instructions carefully.

### Branch Status (as of Nov 28, 2025)

- **Branch name:** `feature/flashcards`
- **Based on:** `main` (before MTO merge)
- **Status:** Feature complete, needs merge with updated main

### Files That Will Have Merge Conflicts

When merging `feature/flashcards` into `main`, Git will report conflicts in these files:

| File | Conflict Type | How to Resolve |
|------|---------------|----------------|
| `CLAUDE.md` | Both branches added new sections | **Keep BOTH sections** - MTO ID rules AND Flashcard docs |
| `firestore.rules` | Both branches added new collections | **Keep BOTH rules** - MTO rules AND Flashcard rules |
| `client/package.json` | Both branches added dependencies | **Keep BOTH dependencies** - merge the objects |
| `client/package-lock.json` | Auto-generated | **Delete and regenerate** with `npm install` |

### Step-by-Step Merge Process

```bash
# 1. Make sure you're on main and it's up to date
git checkout main
git pull origin main

# 2. Attempt the merge
git merge feature/flashcards

# 3. Git will report conflicts - THIS IS EXPECTED
# You'll see something like:
# CONFLICT (content): Merge conflict in CLAUDE.md
# CONFLICT (content): Merge conflict in firestore.rules
# CONFLICT (content): Merge conflict in client/package.json

# 4. Resolve each conflict (see detailed instructions below)

# 5. After resolving, stage the files
git add .

# 6. Complete the merge
git commit -m "Merge feature/flashcards into main"

# 7. Regenerate package-lock.json
cd client
rm package-lock.json
npm install
cd ..

# 8. Test that everything works
cd client && npm run dev

# 9. Push to GitHub
git push origin main
```

### Detailed Conflict Resolution

#### 1. CLAUDE.md Conflict

**What you'll see:**
```
<<<<<<< HEAD
(MTO documentation that's currently in main)
=======
(Flashcard documentation from the branch)
>>>>>>> feature/flashcards
```

**How to resolve:**
- Keep ALL content from both sides
- The MTO ID Rules section should stay where it is
- Add the Flashcard documentation as a NEW section (don't replace anything)
- Make sure both sections are complete and not cut off

#### 2. firestore.rules Conflict

**What you'll see:**
```
<<<<<<< HEAD
    // MTO collections (mtoQuestions, questionExplanations, etc.)
=======
    // Flashcard collections (flashcardDecks, flashcards, etc.)
>>>>>>> feature/flashcards
```

**How to resolve:**
- Keep ALL rules from both branches
- The final file should have rules for:
  - Users collection
  - Posts/Comments collections
  - MTO collections (mtoQuestions, questionExplanations, questionFlags, mtoAuditLog, systemStats, userBookmarks)
  - Flashcard collections (if any were added)
- Make sure no rules are duplicated or missing

#### 3. client/package.json Conflict

**What you'll see:**
```json
<<<<<<< HEAD
  "dependencies": {
    // MTO dependencies
  }
=======
  "dependencies": {
    // Flashcard dependencies (ts-fsrs, etc.)
  }
>>>>>>> feature/flashcards
```

**How to resolve:**
- Merge the `dependencies` objects - keep ALL packages from both sides
- Merge the `devDependencies` objects if affected
- The flashcards branch likely added:
  - `ts-fsrs` (spaced repetition algorithm)
  - Possibly other packages for Anki import

#### 4. client/package-lock.json

**How to resolve:**
- Don't try to manually merge this file
- Delete it entirely
- Run `npm install` in the client folder to regenerate it

### Files That Should NOT Conflict

These files are modified by flashcards branch but NOT by MTO, so they should merge cleanly:

- `client/src/App.tsx` - Adds flashcard routes
- `client/src/components/layout/Sidebar.tsx` - Adds flashcard nav item
- `client/src/index.css` - Adds flashcard styles
- `client/src/pages/FlashcardsPage.tsx` - New page
- `client/src/apps/flashcards/*` - Entire new folder
- `client/src/store/flashcardStore.ts` - New Zustand store
- `storage.rules` - New file for Firebase Storage

### Post-Merge Verification Checklist

After merging, verify these features still work:

**MTO System:**
- [ ] Navigate to `/physiology/mto` - Home page loads
- [ ] Start a test - Questions load from Firebase
- [ ] Answer a question - Explanation appears
- [ ] Bookmark a question - Save button works
- [ ] Report Issue button works

**Flashcard System:**
- [ ] Navigate to `/flashcards` - Page loads
- [ ] View existing decks (if any)
- [ ] Anki import works (if implemented)
- [ ] Study session works

**General:**
- [ ] No console errors on page load
- [ ] Firebase connection works
- [ ] Authentication works

### What If Something Breaks?

If the merge causes issues:

1. **Don't panic** - Git keeps history, nothing is lost
2. **Check the console** for specific errors
3. **Common issues:**
   - Missing import → Add the import statement
   - Type error → Check if types need to be updated
   - Firebase error → Check firestore.rules deployment
4. **Nuclear option:** `git merge --abort` to undo the merge and try again

### After Successful Merge

1. **Deploy Firestore rules** (if they changed):
   ```bash
   firebase deploy --only firestore:rules
   ```

2. **Deploy Storage rules** (new file from flashcards):
   ```bash
   firebase deploy --only storage
   ```

3. **Test locally** before deploying to Netlify

4. **Delete the feature branch** (optional):
   ```bash
   git branch -d feature/flashcards
   git push origin --delete feature/flashcards
   ```

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

## Netlify Deployment Guidelines

**⚠️ CRITICAL: Do NOT deploy to Netlify or push to GitHub unless explicitly requested by the user.**

### Deployment Rules

1. **Manual deployments only** - GitHub pushes do NOT automatically trigger Netlify builds
2. **Deploy only when user explicitly requests it** - Never proactively deploy
3. **No automatic GitHub pushes** - Only commit and push to GitHub when user explicitly requests it
4. **Test locally first** - Always use `npm run dev` locally before considering deployment
5. **Local build verification** - Use `netlify build` to test builds locally (costs no credits)
6. **Credit conservation** - Minimize deployments to conserve Netlify build credits

### Netlify Credit System (2025)

- **Free Plan:** 300 credits/month
- **Production deploy cost:** 15 credits per deploy
- **Bandwidth cost:** 10 credits per GB
- **Free Plan limit:** ~20 deploys per month (300 ÷ 15)
- **Local testing is FREE:** `netlify build` and `netlify dev` cost zero credits

### Deployment URLs

- **Production:** `https://medlearn-szeged.netlify.app`
- **Staging:** `https://staging--medlearn-szeged.netlify.app`
- **Custom domain:** To be configured later

### Deployment Workflow

**Local Testing (FREE - no credits):**
```bash
cd client
npm run dev                        # Test locally with hot reload
netlify build                      # Build locally to verify (no credits)
netlify build --dry                # Preview build steps (no credits)
```

**Staging Deployment (when needed - 15 credits):**
```bash
netlify deploy --alias=staging     # Deploy to staging URL
# Test at: https://staging--medlearn-szeged.netlify.app
```

**Production Deployment (15 credits):**
```bash
netlify deploy --prod              # Deploy to production URL
# Live at: https://medlearn-szeged.netlify.app
```

### When to Use Staging vs Production

- **Use staging** only for features that CANNOT be tested locally:
  - API integrations requiring live environment
  - Edge functions or serverless functions
  - Third-party service integrations
  - OAuth redirect testing (after initial setup)

- **Skip staging** for:
  - UI changes (test with `npm run dev`)
  - Component updates (test locally)
  - Content updates (test locally)
  - Style changes (test locally)

### Firebase Configuration for Netlify

After first deployment, user must manually configure Firebase Console:

1. **Add Authorized Domains** (Firebase Console → Authentication → Settings → Authorized domains):
   - `medlearn-szeged.netlify.app`
   - `staging--medlearn-szeged.netlify.app`
   - Custom domain (when configured)

2. **Update OAuth Settings:**
   - **Google Cloud Console:** Add authorized JavaScript origins and redirect URIs
   - **Apple Developer Console:** Add return URLs with Netlify domains

3. **Environment Variables:** All VITE_* variables from `.env.local` must be added to Netlify
   - ⚠️ **CRITICAL:** Ensure `VITE_USE_FIREBASE_EMULATORS` is NOT set on Netlify (or set to `false`)
   - If set to `true`, the app will try to connect to non-existent emulators instead of production Firebase

### 🔥 FIRESTORE SECURITY RULES - PRE-DEPLOYMENT CHECKLIST

**⚠️ MANDATORY: Always check and deploy Firestore rules BEFORE deploying to Netlify!**

The Community page uses Firestore with security rules that control data access. Rules are maintained in two modes:
- **Emulator Mode** (for local development)
- **Production Mode** (for staging/production deployment)

#### Pre-Deployment Checklist

**BEFORE every deployment to Netlify, Claude MUST:**

1. **Check Firestore Rules Configuration** (`/firestore.rules`):
   - [ ] Production rules are ACTIVE (uncommented)
   - [ ] Emulator mode rules are COMMENTED OUT
   - [ ] Review changes if rules were modified

2. **Deploy Firestore Rules to Firebase**:
   ```bash
   firebase use medlearn-dev
   firebase deploy --only firestore:rules
   ```

3. **Verify Rules Deployment**:
   - [ ] Check Firebase Console: https://console.firebase.google.com/project/medlearn-dev/firestore/rules
   - [ ] Confirm rules show "Published" status with recent timestamp

4. **Verify Netlify Environment Variables**:
   - [ ] `VITE_USE_FIREBASE_EMULATORS` is NOT set (or is `false`)

#### Why This Matters

- **Without production rules**: Users cannot create posts/comments on deployed sites
- **With emulator rules active**: Firebase blocks all authenticated operations
- **Rules are global**: One set of rules applies to all environments (local, staging, production)
- **Separate deployment**: Firestore rules deploy via Firebase CLI, not Netlify

#### Quick Reference

For detailed instructions on managing Firestore rules, see:
- **Full Guide:** `/FIRESTORE_RULES_GUIDE.md`
- **Firebase Project:** `medlearn-dev`
- **Firebase Console:** https://console.firebase.google.com/project/medlearn-dev

#### Common Scenarios

**Scenario 1: User requests Netlify deployment**
→ Claude must FIRST check and deploy Firestore rules, THEN proceed with Netlify deployment

**Scenario 2: User is testing Community page features**
→ Claude should remind user about Firestore rules status and offer to check/deploy if needed

**Scenario 3: User reports "can't post/comment on staging"**
→ Claude should immediately check if production Firestore rules are deployed

#### Automated Reminder

When user mentions ANY of these keywords:
- "deploy to netlify"
- "deploy to staging"
- "push to netlify"
- "community page not working"
- "can't post/comment"

→ Claude MUST ask: "Should I check and deploy the Firestore rules first?"

### Git Workflow Rules

**⚠️ NEVER push to GitHub unless user explicitly requests it**

- User may have uncommitted changes they want to test first
- User may want to review changes before committing
- Always ask before creating commits or pushing to remote
- Follow Git Safety Protocol (see below) when explicitly requested to commit

### Build Configuration

- **Build command:** `npm run build` (runs TypeScript check + Vite build)
- **Publish directory:** `client/dist`
- **Base directory:** `client`
- **Node version:** 18.x or higher

### Audio Files and Bandwidth

- Physiology app contains audio files served via Howler.js
- Free plan includes 100GB bandwidth/month
- If bandwidth becomes an issue, migrate audio to Firebase Storage
- Current Netlify hosting is sufficient for small community launch

## Reference Documentation

- `README.md` - Quick start guide
- `DEVELOPMENT_GUIDE.md` - Detailed development documentation
- `design-refs/` - Design inspiration screenshots
