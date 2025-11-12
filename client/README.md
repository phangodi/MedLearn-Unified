# MedLearn-Unified

A modern, unified medical education platform built for medical students.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Visit `http://localhost:5173` to see the application.

## 🎨 What's Been Built

### ✅ Project Foundation
- **Vite + React + TypeScript** - Fast, modern development setup
- **Tailwind CSS** - Utility-first styling with custom medical theme
- **Framer Motion** - Smooth, professional animations
- **shadcn/ui inspired** - Beautiful, accessible component system

### ✅ Design System
**Color Theme:**
- Primary: Medical Blue (#0066CC)
- Secondary: Accent Teal (#00A896)
- Success: Green (#06D6A0)
- Warning: Amber (#FFB703)

**Features:**
- Full dark/light mode support
- CSS variables for easy theming
- Glassmorphism effects
- Professional gradients

### ✅ Login Page
A beautiful, animated login page featuring:
- Smooth entrance animations
- Animated gradient background with floating orbs
- Theme toggle (light/dark mode)
- Form validation ready
- Responsive design (mobile-first)
- Frosted glass card effect

## 📁 Project Structure

```
client/
├── src/
│   ├── components/
│   │   ├── ui/           # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Label.tsx
│   │   │   └── ThemeToggle.tsx
│   │   ├── layout/       # Layout components (coming next)
│   │   └── auth/         # Auth components
│   ├── pages/
│   │   └── LoginPage.tsx # Login page
│   ├── hooks/
│   │   └── useTheme.ts   # Theme management hook
│   ├── lib/
│   │   └── utils.ts      # Utility functions
│   └── store/            # State management (Zustand - coming)
├── public/
└── ...config files
```

## 🎯 Next Steps

- [ ] Build Dashboard layout with sidebar
- [ ] Create subject cards (Physiology, Histology, etc.)
- [ ] Add routing with React Router
- [ ] Implement authentication flow
- [ ] Build subject-specific pages
- [ ] Add AI content integration
- [ ] Create community features

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Zustand** - State management (ready to use)
- **React Router** - Navigation (ready to use)
- **Lucide React** - Icons

## 🎨 Design Philosophy

- **Modern & Professional** - Clean medical aesthetic
- **Accessible** - WCAG compliant components
- **Mobile-First** - Responsive on all devices
- **Performant** - Optimized animations and loading
- **Delightful** - Smooth interactions that feel premium

## 💡 Usage

### Theme Toggle
The app supports dark and light modes out of the box. Click the sun/moon icon to toggle.

### Components
All UI components support theming and are built with accessibility in mind:

```tsx
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

<Button variant="default" size="lg">
  Sign In
</Button>
```

---

Built with ❤️ for medical students
