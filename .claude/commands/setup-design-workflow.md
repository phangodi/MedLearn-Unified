---
description: Set up the Playwright design review workflow for any project. Creates agents, commands, and design documents. Run this when starting a new project.
arguments:
  - name: project_info
    description: "project description - colors, style, purpose"
---

# Setup Design Workflow for New Project

This command sets up the complete design review workflow for a new project.

## What This Creates

```
project/
├── .claude/
│   ├── agents/
│   │   ├── design-reviewer.md      # Reviews designs, gives grades
│   │   └── ui-design-master.md     # Creates premium UI
│   └── commands/
│       ├── design-review.md        # Quick desktop review
│       └── design-review-responsive.md  # Full responsive review
└── context/
    ├── design-principles.md        # Universal S-tier standards
    └── style-guide.md              # Creative framework + project specifics
```

## Project Information

User provided: `$ARGUMENTS`

Use this to customize the style-guide.md with project-specific details like:
- Primary/secondary brand colors
- Typography preferences
- Target audience
- Design aesthetic (playful, professional, minimal, bold, etc.)

## Setup Process

### Step 1: Create Directory Structure

```bash
mkdir -p .claude/agents .claude/commands context
```

### Step 2: Copy Core Files

Copy these files from an existing project or create them fresh:

1. **`.claude/agents/design-reviewer.md`** - The design review agent
   - Uses Opus 4.5 model
   - 7-phase review process
   - Grades designs A+ to F
   - Uses Playwright for screenshots

2. **`.claude/agents/ui-design-master.md`** - The UI creation agent
   - Uses Opus 4.5 model
   - Creates premium, animated UI
   - Focuses on visual impact
   - Works with design-reviewer in a loop

3. **`.claude/commands/design-review.md`** - Quick review command
4. **`.claude/commands/design-review-responsive.md`** - Full responsive review

5. **`context/design-principles.md`** - Universal design standards
   - S-tier SaaS quality guidelines
   - Accessibility requirements
   - Animation timing
   - Spacing system

6. **`context/style-guide.md`** - Customize for each project
   - Fixed elements (colors, typography)
   - Creative zones (where to innovate)
   - Project-specific notes

### Step 3: Install Playwright MCP

Ensure Playwright MCP is installed:

```bash
claude mcp add playwright npx @playwright/mcp@latest
```

### Step 4: Verify Installation

Run a quick test:
```
/design-review
```

This should:
1. Open a Playwright browser
2. Navigate to your dev server
3. Take screenshots
4. Provide a design review

## Project Customization

After setup, edit `context/style-guide.md` to add project-specific details:

```markdown
## Project: [Your Project Name]

### Brand Colors
- Primary: #[HEX]
- Secondary: #[HEX]
- Accent: #[HEX]

### Design Aesthetic
[Describe the visual style: minimal, bold, playful, professional, etc.]

### Target Audience
[Who uses this product? What do they expect?]

### Special Considerations
[Any project-specific design requirements]
```

## Usage After Setup

### Creating New UI
1. Describe what you need to the ui-design-master agent
2. It creates the design with animations and polish
3. Run `/design-review` to get feedback
4. Iterate until A grade achieved

### Reviewing Existing UI
1. Run `/design-review [page-name]` for quick check
2. Run `/design-review-responsive` for full responsive test
3. Address issues by priority
4. Re-review until satisfactory

### The Design Loop
```
User Request
     │
     ▼
ui-design-master creates
     │
     ▼
/design-review evaluates
     │
     ▼
Grade A+? ──► Ship it!
     │
     No
     │
     ▼
ui-design-master fixes
     │
     └──► /design-review again
```

## Files Reference

After setup, you'll have these key files:

| File | Purpose |
|------|---------|
| `.claude/agents/design-reviewer.md` | Reviews and grades designs |
| `.claude/agents/ui-design-master.md` | Creates premium UI |
| `.claude/commands/design-review.md` | Quick review slash command |
| `.claude/commands/design-review-responsive.md` | Full responsive review |
| `context/design-principles.md` | Universal design standards |
| `context/style-guide.md` | Project-specific style framework |

## Troubleshooting

### Playwright not working
```bash
# Reinstall the MCP
claude mcp remove playwright
claude mcp add playwright npx @playwright/mcp@latest
```

### Dev server not found
Make sure your dev server is running before reviews:
```bash
npm run dev
# or
yarn dev
```

### Agent not found
Check that files are in the correct location:
- Agents must be in `.claude/agents/`
- Commands must be in `.claude/commands/`
- File names must match the agent/command name

## Remember

This workflow is designed to produce **S-tier quality designs** through iteration. Don't skip the review step - it's what ensures consistency and excellence across your entire application.
