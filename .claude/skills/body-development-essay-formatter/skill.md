# Body Development Essay Formatter Skill

Format and verify Body Development essay pages against source markdown files. (project)

## IMPORTANT: Rendering Logic

The EssayPage component now handles formatting automatically based on these patterns:

### Pattern Detection (Automatic)

| Pattern | Example | Renders As |
|---------|---------|------------|
| `**Label**:` alone | `'**Functions**:'` | Mini-header (red, no bullet) |
| `**Label**: content` | `'**Definition**: Cells that...'` | Paragraph (no bullet) |
| Plain text | `'Controls G1/S transition'` | Bullet point |

### What This Means

**You do NOT need to restructure data** for these patterns to work. The rendering automatically:
1. Detects `**Label**:` with no content → renders as styled header
2. Detects `**Label**: content` → renders as paragraph without bullet
3. Renders everything else with bullets

## Source Files

- `Essay_Answers_Q1_Q2_Q3.md` (Essays 1-3)
- `Essay_Answers_Q4_Q5_Q6.md` (Essays 4-6)
- `Essay_Answers_Q7_Q8_Q9.md` (Essays 7-9)
- `Essay_Answers_Q10_Q11_Q12.md` (Essays 10-12)
- `Essay_Answers_Q13_Q14_Q15.md` (Essays 13-15)
- `Essay_Answers_Q16_Q17_Q18.md` (Essays 16-18)
- `Essay_Answers_Q19_Q20_Q21_Q22.md` (Essays 19-22)

Website data: `client/src/apps/body-development/data/essays.ts`

## When to Reformat Data

Only reformat data when:
1. Content is missing from the website
2. Content order is wrong
3. Diagrams are missing
4. Tables are not showing

Do NOT reformat just because of bullet/paragraph styling - the renderer handles that.

## Data Structure

```typescript
export interface EssaySection {
  type: 'introduction' | 'section' | 'clinical' | 'conclusion'
  title: string
  content?: string  // Intro paragraph for the section
  subsections?: {
    title: string
    content?: string  // Paragraph content
    bullets?: string[]  // All items - renderer decides what gets bullets
    numbered?: string[]
  }[]
  bullets?: string[]
  numbered?: string[]
  table?: { headers: string[], rows: string[][] }
  diagram?: string  // NEVER MODIFY - creates animated pathway visualization
}
```

## CRITICAL: Preserve Diagrams

The `diagram` property creates animated pathway visualizations. NEVER modify diagram content. These contain:
- Arrow symbols (↓, →)
- Step-by-step pathways
- ASCII art representations

## Verification Checklist

When checking an essay:
1. ✅ All content from source markdown is present
2. ✅ Content order matches source
3. ✅ Tables are properly formatted
4. ✅ Diagrams are preserved exactly
5. ✅ Section types are correct (introduction, section, clinical, conclusion)

## DO NOT

- Concatenate bullet items with " - " separators
- Put bullet items in content field as single string
- Modify diagram content
- Change the order of existing content
