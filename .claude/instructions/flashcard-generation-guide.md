# Flashcard Generation Guide

## Quick Start Prompt

```
Generate flashcard deck for Topic [X]. Create any specialized formatters needed for its LO types. Content comes from the topic.js file only.
```

## How It Works

1. **Script location:** `client/scripts/generate-flashcard-deck.ts`
2. **Content source:** `client/src/apps/physiology/data/Topics/topic[X].js` - specifically `examAnswer.raw` field
3. **Output:** JSON files in `client/src/apps/flashcards/data/preloaded/physiology/`

## Command to Generate

```bash
cd client && npx ts-node --esm scripts/generate-flashcard-deck.ts --topics [X] --name "[Name]" --id "physio-topic-[X]"
```

## After Generating - Update index.ts

Add to `client/src/apps/flashcards/data/preloaded/index.ts`:
```typescript
import physiologyTopicX from './physiology/physio-topic-X.json'
// Add to preloadedDecks array and allPreloadedDecks array
```

## Specialized Formatters

Located in `generateCardBackContent()` function. Each formatter:
1. Detects LO type by regex pattern on title
2. Returns organized HTML (NOT bullet walls)
3. Uses colored headers and sections

**Existing formatters (Topic 9 & 29):**
- `formatRBCParameters()` - Count, Size, Shape, Lifespan, Production
- `formatAnemiaTypes()` - 3 color-coded cards (Micro/Normo/Macrocytic)
- `formatESR()` - Definition, Mechanism, Method, Values, Clinical
- `formatHaldaneEffect()` - Side-by-side Tissues vs Lungs
- `formatChlorideShift()` - Side-by-side comparison
- `formatPriceJones()` - 3-column visual diagram
- `formatOsmoticResistance()` - Sections with values
- `formatRBCIndices()` - 3 colored cards (MCV/MCH/MCHC)
- `formatOrganelleFate()` - Intro + 3 reason cards
- `formatRBCMembrane()` - Protein grid layout
- `formatCarbonicAnhydrase()` - Enzyme card
- `formatCO2Transport()` - 3 mechanism cards with percentages
- `formatReferenceValuesContent()` - Table format

**Color scheme:**
- Blue headers: `#2563eb`
- Red critical: `#dc2626`
- Green values: `#059669`
- Purple processes: `#7c3aed`
- Yellow/amber: `#ca8a04`

## Creating New Formatters

1. Add detection in `generateCardBackContent()`:
```typescript
if (/your pattern/i.test(loTitle)) {
  html += formatYourNewType(rawContent)
}
```

2. Create formatter function returning HTML with sections, not bullets

3. Add title mapping in `generateTitleFromLO()` if needed

## What's Done

- Topic 9 (Red Blood Cells) - COMPLETE with specialized formatters
- Topic 29 (CO2 Transport) - COMPLETE with specialized formatters
- Topics 1-8, 10-28, 30-51 - NEED specialized formatters created

## Full Documentation

See `.claude/skills/flashcard-generator.md` for complete reference.

---

## OPTIONAL: Dark Mode Fix (ONLY IF REQUESTED)

**Problem:** Inline background colors (#f0fdf4, #fef2f2, #eff6ff) look bad in dark mode.

**Solution:** Add CSS overrides in `client/src/index.css`:
```css
.dark .card-content div[style*="background: #f0fdf4"],
.dark .card-content div[style*="background: #fef2f2"],
.dark .card-content div[style*="background: #eff6ff"],
.dark .card-content div[style*="background: #fefce8"] {
  background: transparent !important;
}
```

**WARNING:** Only implement if user explicitly requests dark mode fix. Do not touch otherwise - it can break things.
