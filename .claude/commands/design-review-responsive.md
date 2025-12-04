---
description: Run a full responsive design review testing Desktop (1440px), Tablet (768px), and Mobile (375px) viewports. More thorough but slower than the default desktop-only review.
arguments:
  - name: target
    description: "page/component to review"
---

# Comprehensive Responsive Design Review

You are initiating a full responsive design review across all major viewport sizes.

## Target

The user specified: `$ARGUMENTS`

If empty, review the current page or the most recently modified page.

## Process

### Step 1: Verify Dev Server

Ensure `http://localhost:5173` is accessible. If not, prompt user to start it.

### Step 2: Desktop Review (1440px)

Spawn the design-reviewer agent:

```
Review the target at Desktop viewport (1440px width).
- Take screenshots in both light and dark mode
- Conduct full 7-phase review
- Note any desktop-specific issues
```

### Step 3: Tablet Review (768px)

Spawn the design-reviewer agent:

```
Review the target at Tablet viewport (768px width).
- Take screenshots in both light and dark mode
- Focus on:
  - Layout reflow from desktop
  - Touch target sizes
  - Navigation adaptation
  - Content readability
- Note any tablet-specific issues
```

### Step 4: Mobile Review (375px)

Spawn the design-reviewer agent:

```
Review the target at Mobile viewport (375px width).
- Take screenshots in both light and dark mode
- Focus on:
  - Single-column layout adaptation
  - Touch target sizes (44px minimum)
  - No horizontal scrolling
  - Navigation (hamburger menu, bottom nav)
  - Font sizes (16px minimum for body)
  - Thumb-zone accessibility for key actions
- Note any mobile-specific issues
```

### Step 5: Consolidated Report

After all three reviews complete, provide a consolidated responsive report:

```markdown
# Responsive Design Review: [Target]

## Overall Grade: [A+ to F]

## Viewport Summary

| Viewport | Grade | Critical Issues |
|----------|-------|-----------------|
| Desktop (1440px) | [Grade] | [Count] |
| Tablet (768px) | [Grade] | [Count] |
| Mobile (375px) | [Grade] | [Count] |

## Screenshots

### Desktop - Light Mode
[Screenshot]

### Desktop - Dark Mode
[Screenshot]

### Tablet - Light Mode
[Screenshot]

### Tablet - Dark Mode
[Screenshot]

### Mobile - Light Mode
[Screenshot]

### Mobile - Dark Mode
[Screenshot]

## Issues by Viewport

### Desktop Issues
[List issues specific to desktop]

### Tablet Issues
[List issues specific to tablet]

### Mobile Issues
[List issues specific to mobile]

### Cross-Viewport Issues
[Issues that appear at multiple sizes]

## Priority Actions

### Blockers (Fix before shipping)
1. [Issue]

### High Priority
1. [Issue]

### Medium Priority
1. [Issue]

## Responsive Implementation Quality

- [ ] Layout adapts smoothly between breakpoints
- [ ] No content is hidden unintentionally
- [ ] Touch targets are adequate on mobile/tablet
- [ ] Typography scales appropriately
- [ ] Images are responsive
- [ ] Navigation works at all sizes

## Recommendation
[Ship as-is / Fix issues / Major rework needed]
```

## When to Use This Command

Use `/design-review-responsive` when:
- Finalizing a new page or major component
- Before creating a pull request
- After significant layout changes
- When you need to verify mobile experience

For quick checks during development, use `/design-review` (desktop only) instead.

## The Iterative Loop

Same as `/design-review` - continue reviewing and fixing until all viewports achieve A grade:

```
/design-review-responsive
        │
        ▼
   Issues found?
        │
       Yes
        │
        ▼
   ui-design-master fixes
        │
        ▼
   /design-review-responsive again
        │
        └──► Repeat until A grade at all viewports
```
