# Body Development Hub Page - Design Preview

## Visual Concept

A stunning, premium hub page with a **rose/coral color theme** representing organic, biological themes fitting for embryology and molecular development.

### Color Palette

**Light Mode:**
- Primary: Rose-600 (#e11d48) - vibrant rose
- Secondary: Pink-500 - warm coral pink
- Backgrounds: White cards with rose-tinted accents
- Borders: Rose-200/400 on hover

**Dark Mode:**
- Primary: Rose-400 - softer, eye-friendly rose
- Secondary: Pink-400 - warm coral
- Backgrounds: Dark cards (card color) with rose-tinted accents
- Borders: Rose-500/800 - subtle but visible

### Background Effect - Aurora Gradient

The page features a **unique animated aurora gradient background** with three floating gradient meshes:

1. **Top-left mesh**: Large rose/pink gradient (800x800px)
   - Animates: opacity 0.3 → 0.5 → 0.3, scale 1 → 1.1 → 1
   - Duration: 8s infinite

2. **Bottom-right mesh**: Larger coral/rose gradient (900x900px)
   - Animates: opacity 0.2 → 0.4 → 0.2, scale 1.1 → 1 → 1.1
   - Duration: 10s infinite (1s delay)

3. **Center mesh**: Medium pink/rose gradient (600x600px)
   - Animates: opacity 0.25 → 0.35 → 0.25, x: 0 → 50 → 0, y: 0 → -30 → 0
   - Duration: 12s infinite (2s delay)

All meshes use `blur-3xl` for soft, organic effect. NO geometric patterns, NO particles.

### Header Section

**Icon + Title:**
- DNA helix icon (Lucide `Dna`) with subtle rotation animation
- Title: "Body Development & Diseases"
  - Gradient text: rose-600 → pink-500 → rose-500
  - Font: 3xl/4xl/5xl responsive, extrabold
- Subtitle: "Molecular Background of Diseases & Embryology"
  - Muted foreground color

**Reference Button:**
- Gradient background: rose-100 → pink-100 (light) / rose-950/40 → pink-950/40 (dark)
- Border: rose-200/50 with rose-800/30 in dark mode
- Text: rose-700 (light) / rose-300 (dark)
- Icon: FileText with 12° rotation on hover
- Hover effects: scale 1.05, shadow glow, gradient intensifies
- Includes ChevronRight arrow that slides right on hover

### Essay Cards

**Grid Layout:**
- 1 column on mobile
- 2 columns on tablet (sm:)
- 3 columns on desktop (lg:)
- Gap: 5 (20px)

**Card Design:**

1. **Container:**
   - White background (card color)
   - Border: border/50 → rose-400/60 on hover
   - Rounded-xl corners
   - Padding: 6 (24px)
   - Height: Full (consistent)

2. **Top Gradient Accent:**
   - Thin 1px bar at top
   - Gradient: rose-400 → pink-400 → rose-500
   - Opacity 0 → 100% on hover
   - Smooth fade-in

3. **Glow Effect:**
   - Circular rose-500/10 glow at top-right
   - Size: 40x40, positioned -top-20 -right-20
   - Blur: 3xl
   - Opacity 0 → 100% on hover
   - Scales to 150% on hover

4. **Header Row:**
   - Question number badge:
     - Circle icon container with BookOpen icon
     - Gradient bg: rose-100 → pink-100
     - Border: rose-200/50
     - Icon scales 110% on hover
   - Large question number: #1, #2, etc. (rose-600/400)
   - Category badge (right):
     - Rounded pill
     - Background: rose-100 (light) / rose-950/40 (dark)
     - Text: rose-700 / rose-300
     - Border: rose-200/50 / rose-800/30
     - Scales 105% on hover

5. **Title & Subtitle:**
   - Title: text-lg, font-bold, line-clamp-2
   - Changes to rose color on hover
   - Subtitle: text-sm, muted-foreground, line-clamp-2
   - Slightly brighter on hover

6. **Footer:**
   - Border-top separator
   - "Read Essay" text (left)
   - ChevronRight icon (right)
   - Both change to rose color on hover
   - Icon slides right 4px on hover

7. **Hover Effects:**
   - Border changes to rose-400/60
   - Shadow: 40px rose glow
   - Scale: 1.02
   - Active scale: 0.98
   - Duration: 300ms
   - Cursor: pointer

8. **Entrance Animation:**
   - Staggered fade-in + slide-up
   - Delay: index * 0.05s (50ms per card)
   - Duration: 400ms
   - Easing: cubic-bezier(0.23, 1, 0.32, 1)

### Responsive Behavior

**Mobile (< 640px):**
- 1 column grid
- Smaller title (3xl)
- Icon size 10 (40px)

**Tablet (640px - 1024px):**
- 2 column grid
- Medium title (4xl)
- Icon size 11 (44px)

**Desktop (1024px+):**
- 3 column grid
- Large title (5xl)
- Icon size 12 (48px)

### Dark Mode Optimizations

All components beautifully adapt to dark mode:
- Background: Deep blue-black (from theme)
- Cards: Elevated dark surfaces
- Rose colors: Adjusted to rose-400/300 for reduced eye strain
- Borders: Darker rose-800/30 for subtlety
- Gradients: Less saturated, more muted
- Shadows: Adjusted opacity for dark backgrounds
- Aurora meshes: Lower opacity (15-20% vs 25-30% in light)

### Performance

- All animations use CSS transforms and opacity (GPU-accelerated)
- Framer Motion for entrance animations only
- Smooth 60fps animations
- No layout thrashing
- Optimized blur filters

## Unique Aspects (Different from Other Pages)

1. **NO particles effect** (used by dashboard)
2. **NO geometric patterns** (used by sociology)
3. **NO frosted glass/blur cards** (used by sociology)
4. **NO blue gradients** (physiology)
5. **NO purple gradients** (histology)
6. **NO emerald gradients** (anatomy)

Instead:
- **Aurora gradient meshes** with organic movement
- **Rose/coral/pink color palette** (biological theme)
- **Smooth flowing animations** (no harsh geometric shapes)
- **Clean card design** with subtle rose accents
- **Warm, inviting aesthetic** suitable for embryology/biology

## Integration Steps

To use this page in the app:

1. Add route in `src/App.tsx`:
```typescript
import { HubPage as BodyDevelopmentPage } from '@/apps/body-development/pages'

<Route path="/body-development" element={<BodyDevelopmentPage />} />
```

2. Add to sidebar (optional):
```typescript
import { Dna } from 'lucide-react'

const subjects = [
  // existing subjects...
  { name: 'Body Development', icon: Dna, path: '/body-development' },
]
```

3. Start dev server:
```bash
cd client
npm run dev
```

4. Navigate to: `http://localhost:5173/body-development`

Enjoy the stunning rose-themed hub page!
