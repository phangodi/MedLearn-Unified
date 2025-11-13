# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Lara's MedLearn** is a unified medical education platform for students preparing for exams. The platform consolidates multiple existing medical study apps (Histology, Physiology, MedLearn Portal) into one modern, professionally-designed application with AI-powered features. The platform is completely free for all medical students.

**Tech Stack:**
- Vite + React 18 + TypeScript
- Tailwind CSS v4 with @tailwindcss/vite plugin
- Framer Motion (animations)
- React Router v6 (routing)
- Zustand (state management - installed but not yet configured)
- Lucide React (icons)

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
│   │   ├── ui/              # Reusable UI primitives (Button, Card, Input, Label, ThemeToggle)
│   │   └── layout/          # Layout components (Sidebar, AngledBackground)
│   ├── pages/               # Page components (LoginPage, DashboardPage)
│   ├── hooks/               # Custom hooks (useTheme for dark/light mode)
│   ├── lib/                 # Utilities (utils.ts with cn() function)
│   ├── store/               # Zustand stores (directory exists but empty)
│   ├── App.tsx              # Router configuration
│   ├── main.tsx             # Application entry point
│   └── index.css            # Design system with CSS variables
├── vite.config.ts           # Vite configuration with path aliases
├── tsconfig.json            # TypeScript project references
└── package.json             # Dependencies and scripts
```

### Path Aliases

The project uses `@/` as an import alias for `./src/`:

```typescript
import { Button } from '@/components/ui/Button'
import { useTheme } from '@/hooks/useTheme'
```

### Routing

Routes are defined in `src/App.tsx`:
- `/login` - Login page with demo authentication
- `/dashboard` - Main dashboard with subject tiles
- `/` - Redirects to `/login`
- All other routes redirect to `/login`

### Theme System

Dark/light theme is managed by `useTheme()` hook in `src/hooks/useTheme.ts`:
- Persists to localStorage
- Respects system preference on initial load
- Uses CSS variables defined in `src/index.css`
- All components support both themes

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

### Dashboard Layout

The dashboard (`src/pages/DashboardPage.tsx`) features:
- Collapsible sidebar (always visible on desktop, drawer on mobile)
- Angled gradient background with diagonal line patterns
- Decorative border framing (top and left edges)
- Desktop-like subject tiles in responsive grid
- Circular progress indicators for each subject
- Quick stats cards showing study metrics

Subject tiles include:
- Physiology, Histology, Pathology, Anatomy (core medical subjects)
- AI Exam Prep (AI-powered practice tests)
- Community (peer connections and discussions)

### Authentication

**Current Implementation:**
- Demo bypass in `src/pages/LoginPage.tsx`
- Email: `demo@medlearn.com` / Password: `demo`
- No real authentication backend yet
- Simple navigation to dashboard on successful "login"

**TODO:** Replace with proper authentication system (Supabase/Firebase recommended)

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

Mobile-first approach with specific breakpoints:
- Base styles: Mobile (< 640px)
- `sm:` Tablet (640px+)
- `md:` Larger tablet (768px+)
- `lg:` Desktop (1024px+) - Sidebar becomes always visible
- `xl:` Wide desktop (1280px+)

### Content Structure (Future Implementation)

Based on the legacy histology app, subjects should support 4 study formats:
1. **Hierarchical** - Comprehensive nested structure
2. **Quick Cards** - Flashcard-style rapid review
3. **Relationships** - Visual connection maps
4. **Ultra-Minimal** - Essential exam prep facts

## Known Issues & TODOs

- No real authentication (using demo bypass)
- Subject cards don't navigate to actual subject pages yet (placeholders)
- Sidebar navigation buttons don't have routes configured
- No actual study content implemented
- Zustand state management not configured
- No form validation library (React Hook Form recommended)
- No toast notifications (sonner recommended)

## Next Development Priorities

1. **Subject Pages** - Create template for subject content pages with topic navigation
2. **Content Viewers** - Implement the 4 study format viewers (Hierarchical, Quick Cards, Relationships, Ultra-Minimal)
3. **AI Integration** - Build AI Exam Prep page with question generation (Claude/OpenAI API)
4. **Community Features** - Implement blog/discussion board with commenting and contributions
5. **Real Authentication** - Replace demo bypass with proper auth system

## Context Files

- `README.md` - Quick start guide and project overview
- `DEVELOPMENT_GUIDE.md` - Detailed development documentation and continuation prompts
- `SESSION_SUMMARY.md` - Latest session summary with design decisions and current status
- `design-refs/` - Reference screenshots for design inspiration
