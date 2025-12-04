---
description: Run a comprehensive design review on the current page or specified component. Uses Playwright to screenshot and analyze UI against design standards. Default viewport is desktop (1440px).
arguments:
  - name: target
    description: "page/component or 'mobile'/'tablet'/'responsive'"
---

# Design Review Command

You are initiating a design review. Follow this process:

## Step 1: Determine Review Scope

The user specified: `$ARGUMENTS`

Parse this to understand:
- **If empty or a page/component name**: Review that specific target at desktop viewport (1440px)
- **If "mobile"**: Review at mobile viewport (375px)
- **If "tablet"**: Review at tablet viewport (768px)
- **If "responsive"**: Run `/design-review-responsive` instead (tests all viewports)

## Step 2: Ensure Dev Server is Running

Check if the development server is accessible at `http://localhost:5173` (or the project's configured port).

If not running, inform the user they need to start it:
```bash
cd client && npm run dev
```

## Step 3: Spawn Design Reviewer Agent

Use the Task tool to spawn the `design-reviewer` agent with this prompt:

---

**Design Review Request**

Please conduct a design review with the following parameters:

**Target**: [The page/component to review, or "current page" if not specified]
**Viewport**: [Desktop 1440px / Tablet 768px / Mobile 375px based on arguments]

**Instructions**:

1. Navigate to the target page using Playwright
2. Resize the browser to the specified viewport width
3. Take a screenshot in LIGHT mode
4. Toggle to DARK mode (if theme toggle available) and take another screenshot
5. Conduct your 7-phase review process
6. Provide a complete design review report with:
   - Grade (A+ to F)
   - Strengths
   - Issues by priority (Blockers, High, Medium, Nitpicks)
   - Screenshots with annotations
   - Specific recommendations

**Reference Documents**:
- Design Principles: `/context/design-principles.md`
- Style Guide: `/context/style-guide.md`

Focus especially on:
- Visual polish and alignment
- Dark/Light mode quality
- Accessibility basics
- Component states (hover, focus)

---

## Step 4: Present Results

After the design-reviewer agent completes:
1. Share the full report with the user
2. If grade is B+ or below, ask if they want the ui-design-master agent to address the issues
3. If issues are addressed, offer to re-run the review

## The Iterative Loop

This command is part of an iterative design improvement workflow:

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│   /design-review                                        │
│         │                                               │
│         ▼                                               │
│   design-reviewer agent                                 │
│   (takes screenshots, reviews, grades)                  │
│         │                                               │
│         ▼                                               │
│   Grade A or A+? ──Yes──► Done! Ship it.               │
│         │                                               │
│         No                                              │
│         │                                               │
│         ▼                                               │
│   ui-design-master agent                                │
│   (implements fixes based on feedback)                  │
│         │                                               │
│         └────────► Back to /design-review              │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

Continue this loop until the design achieves A grade or higher.
