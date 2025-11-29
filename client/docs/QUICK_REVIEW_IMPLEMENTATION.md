# Quick Review Format Implementation

## Purpose

This document ensures continuity across Claude Code sessions. Read this file if context has been compressed or a new session starts.

## What We're Building

A new "Quick Review" format for physiology topics that displays flashcard-style study content. Users can later add individual Learning Objectives to their personal flashcard decks.

## Key Architecture Decision

**We use STRUCTURED JSON BLOCKS (not HTML strings)** to avoid rendering bugs. This mirrors the existing `FormattedExamAnswer.jsx` pattern which works flawlessly.

### Why Not HTML Strings?

The original flashcard skill generated HTML strings like:
```html
<div style="background: #fef2f2; border-radius: 8px;">...</div>
```

These sometimes rendered as raw text (see screenshots in plan). The fix: generate typed blocks that a React component renders with CSS modules.

## Data Structure

```javascript
// Quick Review content for a Learning Objective
quickReview: {
  blocks: [
    { type: 'header', text: 'Topic Title' },
    { type: 'paragraph', text: 'Content here', critical: false },
    { type: 'keypoint', text: 'Important point', critical: true },
    { type: 'list', intro: 'Key items:', items: ['Item 1', 'Item 2'] },
    { type: 'comparison',
      left: { title: 'Option A', items: [...] },
      right: { title: 'Option B', items: [...] }
    },
    { type: 'formula', formula: 'E = mc²', explanation: 'Energy equation' },
    { type: 'table', headers: ['Col1', 'Col2'], rows: [['a', 'b']] },
    { type: 'clinical', text: 'Clinical relevance...' },
    { type: 'steps', intro: 'Process:', items: ['Step 1', 'Step 2'] }
  ]
}
```

## Block Types

| Type | Purpose | Styling |
|------|---------|---------|
| `header` | Section title | Navy gradient banner, white text, rounded |
| `paragraph` | Text content | Standard body text |
| `keypoint` | Highlighted info | Left border accent, slightly emphasized |
| `list` | Bullet points | Purple arrows (like existing) |
| `steps` | Numbered items | Purple numbers (like existing) |
| `comparison` | Side-by-side | Blue vs Red tinted boxes |
| `formula` | Math equation | Centered, larger text, navy banner |
| `table` | Data grid | Gray header, bordered |
| `clinical` | Clinical note | Yellow background callout |

## Critical Files

| File | Purpose |
|------|---------|
| `components/QuickReviewContent.jsx` | Renderer component |
| `App.module.css` | CSS styles (ADD only, don't modify existing) |
| `context/ContentModeContext.jsx` | State management |
| `components/Navigation.jsx` | UI toggle |
| `data/QuickReview/` | Generated content directory |
| `.claude/skills/quick-review-generator.md` | Generation skill |

## CSS Patterns

The physiology app uses CSS Modules with these conventions:
- camelCase class names
- CSS variables: `--brand`, `--brand-2`, `--accent`, `--border`, `--muted`
- Critical text: `#dc2626` (red)
- All new styles go in `App.module.css`

## Progress Checklist

- [x] Create feature/quick-review branch
- [x] Create this documentation file
- [x] Create QuickReviewContent.jsx renderer (10 block types)
- [x] Add CSS styles to App.module.css
- [x] Create index.js for dynamic loading
- [x] Update TopicPage for dynamic Quick Review loading
- [x] Create quick-review-generator.md skill
- [x] Add UI toggle in Navigation.jsx (3 options: Formatted, Compact, Quick Review)
- [x] Update ContentModeContext (answerFormat state)
- [x] Generate Topic 9 (all 8 LOs)
- [x] Generate Topic 10 (all 5 LOs)
- [x] Generate Topics 33, 34, 35
- [x] Fix skill: multiple mechanisms must be SEPARATED (not combined lists)
- [x] Regenerate Topic 34 with improved structure
- [x] Commit save point: 92ed663
- [ ] Add flashcard deck integration (Phase 4)
- [ ] Generate content for remaining topics

## Current State (Nov 29, 2025)

**Branch:** `feature/quick-review`
**Save point commit:** `92ed663`
**Working topics:** 9, 10, 33, 34, 35

## Key Files
- `components/QuickReviewContent.jsx` - Renderer
- `data/QuickReview/index.js` - Dynamic loader
- `.claude/skills/quick-review-generator.md` - Generation skill

## To Generate More Topics
Say: "Generate Quick Review content for Topic X"

## Command to Generate Content

```
"Generate Quick Review content for Topic X"
```

Agent will:
1. Read skill file (JSON structure)
2. Read topic file (content)
3. Generate structured JSON for each LO
4. Save to `data/QuickReview/topicX-quickreview.js`

## Flashcard Integration

When user clicks "Add to Deck":
- Front: Learning Objective title (with critical markers → red text)
- Back: Quick Review content blocks
- Stored in Firebase with `sourceTopicId` and `sourceLOId`

## Branch

All work is on `feature/quick-review` branch. Merge to main when complete.
