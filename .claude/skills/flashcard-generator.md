# Flashcard Generator Skill

Generate professor-quality flashcard decks from physiology topic files. Each card should look like a beautifully designed lecture slide that helps students learn and retain medical concepts.

## Your Role

You are a world-class medical educator creating lecture materials. For each Learning Objective, you must:
1. **Understand** what the content is teaching
2. **Decide** the best visual presentation for that specific content
3. **Create** styled HTML that makes the information memorable and clear

Think like a professor making slides - every topic is different, every LO needs individual attention.

---

## Design Principles

### Color Palette

Use colors with semantic meaning:

| Color | Hex Values | When to Use |
|-------|------------|-------------|
| **Navy** | `#1e3a5f`, `#2d4a6f` | Card headers, authority, main banners |
| **Blue** | `#2563eb`, `#3b82f6`, `#dbeafe`, `#eff6ff` | Key terms, definitions, one side of comparisons |
| **Red** | `#dc2626`, `#fef2f2` | Critical concepts, warnings, other side of comparisons |
| **Green** | `#059669`, `#166534`, `#f0fdf4` | Positive values, normal states, correct answers |
| **Yellow** | `#ca8a04`, `#fefce8` | Clinical notes, middle states, important callouts |
| **Purple** | `#7c3aed`, `#f3e8ff` | Special terms, unique concepts, processes |
| **Gray** | `#6b7280`, `#f3f4f6`, `#e5e7eb` | Secondary text, borders, table backgrounds |

### Typography

- **Headers**: 1.1rem, font-weight 700
- **Body text**: 0.95rem, line-height 1.5-1.6
- **Captions/units**: 0.85rem, color #6b7280
- **Formula text**: 1.1-1.3rem, font-weight 600-700

### Spacing

- **Card padding**: 14-16px
- **Element gaps**: 12-16px
- **Border radius**: 6-8px for elements, 12px for cards
- **Left border accent**: 4px solid [color]

---

## Layout Decision Framework

Before creating each card, ask yourself these questions about the LO content:

### Question 1: Is this comparing two things?
**Examples:** Newtonian vs Non-Newtonian, Systemic vs Pulmonary, High vs Low

**Use:** Side-by-side grid layout
- Two columns with contrasting background colors
- One side blue-tinted, other side red-tinted
- Same structure in each column for easy comparison

### Question 2: Is there a key formula or equation?
**Examples:** Q = ΔP/R, P + ½ρv² + ρgh = constant

**Use:** Formula banner
- Navy background, white text
- Centered, larger font
- Variables explained below in smaller text

### Question 3: Are there 3+ distinct mechanisms, factors, or steps?
**Examples:** "Three factors affect...", "Five mechanisms..."

**Use:** Numbered cards with left border accent
- Each mechanism gets its own card
- Left border in alternating colors (green, blue, purple, yellow)
- Clear numbering
- Title in color, explanation in body text

### Question 4: Are there multiple terms with definitions and units?
**Examples:** Shear stress (τ), Shear rate (γ), Viscosity (η)

**Use:** Definition grid
- Blue header with underline for each term
- Definition indented below
- Units highlighted in green

### Question 5: Is there a reference table or multi-attribute comparison?
**Examples:** Vessel diameters and velocities, ESR reference values

**Use:** HTML table
- Header row with gray background
- Clean borders
- Centered values with units
- Color highlighting for high/low values

### Question 6: Is there a clinical correlation or practical application?
**Examples:** "In sickle cell disease...", "Clinically significant because..."

**Use:** Yellow callout box
- Yellow background (#fefce8)
- Bold "Clinical:" prefix
- Concise practical point

### Question 7: Is there a sequence or flow?
**Examples:** RV → Pulmonary → LA → LV → Systemic → RA

**Use:** Flow visualization
- Arrow symbols (→) between steps
- Optional: green box for the pathway

---

## Card Structure

### Front (Question Side)

Always use this header structure:
```html
<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d4a6f 100%); color: #ffffff; padding: 16px 20px; border-radius: 12px; margin: -8px -8px 16px -8px;">
  <div style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; opacity: 0.85; margin-bottom: 10px; font-weight: 500;">Learning Objective</div>
  <div style="font-size: 1.05rem; font-weight: 600; line-height: 1.5;">[LO TITLE - cleaned of >> markers]</div>
</div>
```

### Back (Answer Side)

Start with a title banner, then add content sections:
```html
<div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d4a6f 100%); color: #ffffff; padding: 14px 18px; border-radius: 12px; margin: -8px -8px 16px -8px;">
  <div style="font-size: 1.1rem; font-weight: 700;">[DESCRIPTIVE TITLE]</div>
</div>
[CONTENT SECTIONS BASED ON LAYOUT DECISIONS]
```

---

## JSON Structure (Required Format)

```json
{
  "id": "preloaded-physio-topic-[N]",
  "name": "Topic [N]: [Title from topic file]",
  "description": "Flashcards for Physiology Topic [N]",
  "subject": "physiology",
  "topicIds": [[N]],
  "version": "2.0.0",
  "cards": [
    {
      "id": "topic[N]-lo-[M]",
      "front": { "text": "[HTML]" },
      "back": { "text": "[HTML]" },
      "tags": ["[topic-keyword]", "[subtopic]", "high-yield" if isCritical]
    }
  ]
}
```

---

## Agent Instructions

When invoked with "Generate flashcard deck for Topic X":

1. **Read this skill file** to understand design principles

2. **Read the topic file** at:
   `client/src/apps/physiology/data/Topics/topic[X].js`

3. **For each Learning Objective:**
   - Clean the title (remove `>>` and `<<` markers)
   - Analyze the content (keyPoints, officialDefinitions, examAnswer)
   - Ask yourself the layout decision questions
   - Generate appropriate HTML for front and back
   - Add tags based on topic title and isCritical flag

4. **Create the JSON file** at:
   `client/src/apps/flashcards/data/preloaded/physiology/physio-topic-[X].json`

5. **Update index.ts** at:
   `client/src/apps/flashcards/data/preloaded/index.ts`
   - Add import: `import physiologyTopic[X] from './physiology/physio-topic-[X].json'`
   - Add to preloadedDecks array: `convertPreloadedDeckToDecks(physiologyTopic[X] as PreloadedDeckJSON),`
   - Add to allPreloadedDecks in getPreloadedCards(): `physiologyTopic[X]`

6. **Report completion** with summary of cards created

---

## Quality Standards

Every card must:
- Be visually beautiful and professional
- Present information in the most learnable way for that specific content
- Use color semantically (not decoratively)
- Have clean, readable typography
- Include all critical information from the LO
- Be self-contained (understandable without other cards)

Remember: You are the professor. Each LO deserves your individual attention and creative decision-making about how best to teach it.
