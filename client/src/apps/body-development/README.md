# Body Development & Molecular Background of Diseases

Elective course covering embryology, molecular biology, and disease mechanisms.

## Structure

```
body-development/
├── pages/
│   ├── HubPage.tsx          # Main hub page with essay cards
│   └── index.ts
├── components/
│   ├── EssayCard.tsx        # Individual essay card component
│   └── index.ts
└── README.md
```

## Design System

**Color Theme:** Rose/Coral (organic, biological theme)
- Primary: `rose-600` (#e11d48) / `rose-400` (dark mode)
- Secondary: `pink-500` / `pink-400` (dark mode)
- Accent gradients: rose → pink → rose

**Visual Elements:**
- Aurora gradient background with animated meshes
- Organic flowing shapes (no geometric patterns)
- Smooth hover animations with glow effects
- Rose-tinted cards with gradient accents
- Category badges with color coding

## Content

- **22 Essay Questions** covering:
  - Embryology (dorso-ventral axis, notochord, neural crest, limb development, etc.)
  - Molecular Biology (Hox genes, Sonic Hedgehog, growth factors, epigenetics, etc.)
  - Cell Biology (apoptosis, stem cells, senescence, etc.)
  - Genetic Disorders (Situs Inversus, VHL, congenital heart defects, etc.)
  - Oncology (cancer cell identity, P53, etc.)
  - Blood Disorders (thalassemias, etc.)

## Usage

To integrate into the app:

1. **Add route** in `src/App.tsx`:
```typescript
import { HubPage as BodyDevelopmentPage } from '@/apps/body-development/pages'

// In routes:
<Route path="/body-development" element={<BodyDevelopmentPage />} />
```

2. **Add to sidebar** in `src/components/layout/Sidebar.tsx`:
```typescript
import { Dna } from 'lucide-react'

const subjects = [
  // ... existing subjects
  { name: 'Body Development', icon: Dna, path: '/body-development' },
]
```

## Routes

- `/body-development` - Hub page with all 22 essays
- `/body-development/essay/:essayId` - Individual essay detail page (ID 1-22)

## Essay Data Structure

Essays are currently stored in `pages/EssayPage.tsx` in the `essayData` object. Each essay follows this structure:

```typescript
{
  id: number,              // Unique ID (1-22)
  title: string,           // Main essay title
  subtitle: string,        // Subtitle/topic focus
  category: string,        // Category badge (e.g., "Embryology", "Molecular Biology")
  reference: string,       // Slide reference (e.g., "Slides 5-8/II")
  sections: Section[]      // Array of content sections
}
```

### Section Types

#### 1. Introduction Section
```typescript
{
  type: 'introduction',
  title: 'Introduction',
  content: 'Paragraph text...'
}
```

#### 2. Regular Section with Subsections
```typescript
{
  type: 'section',
  title: 'Section Title',
  content: 'Overview paragraph...',
  subsections: [
    {
      title: 'Subsection Title',
      bullets: ['Bullet point 1', 'Bullet point 2'],
      // OR
      numbered: ['Numbered item 1', 'Numbered item 2']
    }
  ]
}
```

Use `**bold text**` in bullets for emphasis (renders with rose color).

#### 3. Section with Table
```typescript
{
  type: 'section',
  title: 'Section Title',
  table: {
    headers: ['Column 1', 'Column 2', 'Column 3'],
    rows: [
      ['Row 1 Col 1', 'Row 1 Col 2', 'Row 1 Col 3'],
      ['Row 2 Col 1', 'Row 2 Col 2', 'Row 2 Col 3']
    ]
  }
}
```

#### 4. Section with Diagram (ASCII Art)
```typescript
{
  type: 'section',
  title: 'Pathway Diagram',
  diagram: `
    Signal
        ↓
    Receptor
        ↓
    Gene Activation
  `
}
```

#### 5. Clinical Significance Section
```typescript
{
  type: 'clinical',
  title: 'Clinical Significance',
  content: 'Overview paragraph...',
  bullets: [
    '**Disease Name**: Description',
    '**Another Disease**: Description'
  ]
}
```

Gets special rose background styling.

#### 6. Conclusion Section
```typescript
{
  type: 'conclusion',
  title: 'Conclusion',
  content: 'Summary paragraph...'
}
```

## Essay Page Features

### Design Elements
- Clean white (light) / dark card background
- Perfect typography for long-form reading
- Rose section underlines and accents
- Table of contents (mobile collapse)
- Previous/Next navigation
- Reference link to summary tables

### Typography
- **H1**: text-3xl to text-5xl, gradient text
- **H2**: text-2xl to text-3xl, rose underline
- **H3**: text-xl to text-2xl
- **Body**: text-base to text-lg, leading-relaxed
- **Tables**: Rose header, alternating rows
- **Diagrams**: Monospace, dark background

### Dark Mode
All elements adapt beautifully to both light and dark themes with proper contrast.

## Future Enhancements

- Search & filter essays
- Reference page with summary tables
- PDF export
- Bookmark essays
- Progress tracking
- Personal annotations
