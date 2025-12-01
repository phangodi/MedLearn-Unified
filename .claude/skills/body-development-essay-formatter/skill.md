# Body Development Essay Formatter Skill

Format and verify Body Development essay pages against source markdown files. This skill ensures essay content is properly structured and displayed on the website. (project)

## When to Use This Skill

Use this skill when:
- Verifying that essay content matches source markdown files
- Fixing formatting issues on essay pages
- Reformatting a specific essay (e.g., "format essay 20")
- Checking all essays for consistency

## Source Files

The source markdown files are located in the project root:
- `Essay_Answers_Q1_Q2_Q3.md` (Essays 1-3)
- `Essay_Answers_Q4_Q5_Q6.md` (Essays 4-6)
- `Essay_Answers_Q7_Q8_Q9.md` (Essays 7-9)
- `Essay_Answers_Q10_Q11_Q12.md` (Essays 10-12)
- `Essay_Answers_Q13_Q14_Q15.md` (Essays 13-15)
- `Essay_Answers_Q16_Q17_Q18.md` (Essays 16-18)
- `Essay_Answers_Q19_Q20_Q21_Q22.md` (Essays 19-22)

The website data is in:
- `client/src/apps/body-development/data/essays.ts`

## Data Structure Interface

```typescript
export interface EssaySection {
  type: 'introduction' | 'section' | 'clinical' | 'conclusion'
  title: string
  content?: string
  subsections?: {
    title: string
    bullets?: string[]
    numbered?: string[]
  }[]
  bullets?: string[]
  numbered?: string[]
  table?: {
    headers: string[]
    rows: string[][]
  }
  diagram?: string  // ASCII pathway diagram for PathwayDiagram component
}

export interface Essay {
  id: number
  title: string
  subtitle: string
  category: string
  reference: string
  sections: EssaySection[]
}
```

## Markdown to Data Structure Mapping Rules

### 1. Section Headers
- `### Section Name` → `{ type: 'section', title: 'Section Name' }`
- `### Introduction` → `{ type: 'introduction', title: 'Introduction' }`
- `### Conclusion` → `{ type: 'conclusion', title: 'Conclusion' }`
- `### Clinical ...` → `{ type: 'clinical', title: '...' }`

### 2. Subsection Headers
- `#### Subsection Name` → Add to parent section's `subsections[]` array:
  ```typescript
  subsections: [{ title: 'Subsection Name', bullets: [...] }]
  ```

### 3. Content Types Within Sections

#### A. Inline Labels (Keep as bullets with bold)
Pattern: `**Label**: Some content here`
- Has content AFTER the colon
- Render as bullet with bold label
- Example: `'**Definition**: Cells that can only renew...'`

#### B. Standalone Labels (Render as mini-headers)
Pattern: `**Label:**` followed by newline and bullet list
- NO content after the colon (or just whitespace)
- Should become a nested structure using subsections
- Example in markdown:
  ```markdown
  **Characteristics:**
  - Item 1
  - Item 2
  ```
- Should become:
  ```typescript
  subsections: [
    { title: 'Characteristics', bullets: ['Item 1', 'Item 2'] }
  ]
  ```

#### C. Regular Bullets
- Lines starting with `- ` in markdown
- Add to `bullets[]` array (without the `- ` prefix)

#### D. Numbered Lists
- Lines starting with `1. `, `2. `, etc.
- Add to `numbered[]` array (without the number prefix)

#### E. Tables
- Markdown tables with `|` separators
- Convert to `table: { headers: [...], rows: [[...], [...]] }`

#### F. Code Blocks (Pathway Diagrams)
- Content between ``` markers
- Store in `diagram` property
- Will be rendered by PathwayDiagram component as expandable accordion
- IMPORTANT: Preserve these exactly - they create animated visualizations

### 4. Proper Nesting Strategy

When you encounter a standalone label followed by bullets, you have two options:

**Option A: If inside a subsection already**
Create nested content by splitting the subsection:
```typescript
// Instead of flat:
{ title: 'Main Subsection', bullets: ['**Label**:', 'item1', 'item2'] }

// Create proper structure:
{ title: 'Main Subsection',
  bullets: ['**Definition**: inline content here'],  // Inline labels stay
  // Note: Standalone labels need their own subsection
}
```

**Option B: If at section level**
Add as a new subsection:
```typescript
subsections: [
  { title: 'Existing Subsection', bullets: [...] },
  { title: 'Label', bullets: ['item1', 'item2'] }  // Standalone label becomes title
]
```

## Verification Process

When formatting an essay:

1. **Read the source markdown** for the essay number
2. **Read current essays.ts** data for that essay
3. **Parse the markdown** following the rules above
4. **Compare** the parsed structure with current data
5. **Identify issues:**
   - Standalone labels stored as bullets (should be subsection titles)
   - Missing content
   - Incorrect nesting
   - Missing diagrams
6. **Generate corrected TypeScript** for the essay
7. **Report findings** and suggest/apply fixes

## Common Issues to Fix

1. **Double bullets**: Labels like `**Characteristics**:` rendered with bullet points
2. **Flat structure**: Nested content stored in flat bullet arrays
3. **Missing diagrams**: Code blocks not converted to `diagram` property
4. **Wrong section types**: Clinical sections marked as regular sections
5. **Missing tables**: Markdown tables not converted to table objects

## Output Format

When reformatting an essay, output:
1. Summary of issues found
2. The corrected TypeScript code for the essay
3. Instructions for applying the fix

## Example Usage

User: "format essay 20"
Action:
1. Read Essay_Answers_Q19_Q20_Q21_Q22.md
2. Parse Essay Question 20 section
3. Compare with essays.ts entry for id: 20
4. Generate corrected structure
5. Update essays.ts
