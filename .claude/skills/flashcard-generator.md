# Flashcard Deck Generator Skill

Generate beautifully-styled flashcard decks from Physiology topic data with intelligent content-aware formatting, professor-level organization, and proper styling for light/dark mode.

## How to Use

This skill helps you generate flashcard decks from the Physiology topic files. Use natural language commands like:

- "Generate flashcard deck for topic 29"
- "Generate MCQ3 deck with topics 33-40"
- "Create a deck with topics 41, 42, 43"
- "Add topics 45-52 to the MCQ4 deck"

## Commands

### Generate Single Topic Deck
```bash
cd client && npx ts-node --esm scripts/generate-flashcard-deck.ts --topics <NUM>
```

Example:
```bash
cd client && npx ts-node --esm scripts/generate-flashcard-deck.ts --topics 29
```

### Generate Multi-Topic Deck (Range)
```bash
cd client && npx ts-node --esm scripts/generate-flashcard-deck.ts --topics <START>-<END> --name "<NAME>" --id "<ID>"
```

Example:
```bash
cd client && npx ts-node --esm scripts/generate-flashcard-deck.ts --topics 33-40 --name "MCQ3: Respiration & Blood" --id "mcq3"
```

### Generate Multi-Topic Deck (Specific Topics)
```bash
cd client && npx ts-node --esm scripts/generate-flashcard-deck.ts --topics <N1>,<N2>,<N3> --name "<NAME>" --id "<ID>"
```

Example:
```bash
cd client && npx ts-node --esm scripts/generate-flashcard-deck.ts --topics 29,30,31 --name "Blood Gases" --id "blood-gases"
```

## Arguments

| Argument | Description | Example |
|----------|-------------|---------|
| `--topics` | Topic numbers (single, range, or comma-separated) | `29`, `33-40`, `29,30,31` |
| `--id` | Deck ID (optional, auto-generated if not provided) | `mcq3`, `blood-gases` |
| `--name` | Deck display name (optional, auto-generated if not provided) | `"MCQ3: Respiration"` |
| `--description` | Deck description (optional) | `"Study deck for..."` |

## Output Location

Generated decks are saved to:
```
client/src/apps/flashcards/data/preloaded/physiology/<deck-id>.json
```

## After Generating a New Deck

1. **Update the index** - Add the new deck import to `client/src/apps/flashcards/data/preloaded/index.ts`:
   ```typescript
   import newDeck from './physiology/<deck-id>.json'

   // Add to preloadedDecks array
   export const preloadedDecks: Deck[] = [
     convertPreloadedDeckToDecks(existingDeck as PreloadedDeckJSON),
     convertPreloadedDeckToDecks(newDeck as PreloadedDeckJSON),
   ]

   // Add to getPreloadedCards allPreloadedDecks array
   const allPreloadedDecks = [existingDeck, newDeck]
   ```

2. **Test the deck** - Run `npm run dev` and navigate to Flashcards to verify the deck appears and cards render correctly in both light and dark mode.

---

## Card Design Philosophy

### CRITICAL: Professor-Level Organization

The generator uses **content-aware intelligent formatting** - NOT just bullet points. Each learning objective type has a specialized formatter that organizes content for **quick review**, not reading.

**Key Principles:**
1. **Understand the content** - Analyze what the LO is asking and organize accordingly
2. **Visual hierarchy** - Use colored headers, cards, and sections to separate concepts
3. **Meaningful colors** - Blue for key values, red for critical terms, green for normal values
4. **Side-by-side comparisons** - For contrasting concepts (tissues vs lungs, types of anemia)
5. **No wall of bullets** - Everything should have logical groupings

### Specialized Formatters

The script in `client/scripts/generate-flashcard-deck.ts` contains these specialized formatters:

| LO Type | Formatter | Design |
|---------|-----------|--------|
| RBC Parameters (count, size, shape) | `formatRBCParameters()` | Grid with blue headers: Count, Size, Shape, Lifespan, Production |
| Types of Anemia | `formatAnemiaTypes()` | 3 color-coded cards: Red (Microcytic), Yellow (Normocytic), Blue (Macrocytic) |
| ESR/Sedimentation | `formatESR()` | Sections: Definition, Mechanism, Method, Normal Values, Clinical |
| Haldane Effect | `formatHaldaneEffect()` | Side-by-side: IN TISSUES (red) vs IN LUNGS (blue) |
| Chloride Shift | `formatChlorideShift()` | Side-by-side comparison + key transporter box |
| Price-Jones Curve | `formatPriceJones()` | Definition + 3-column visual (← LEFT / NORMAL / RIGHT →) |
| Osmotic Resistance | `formatOsmoticResistance()` | Sections with values and clinical changes |
| MCH/MCHC/MCV | `formatRBCIndices()` | 3 separate colored cards with What, Normal, Formula |
| Organelle Fate | `formatOrganelleFate()` | Intro box + 3 numbered reason cards |
| RBC Membrane | `formatRBCMembrane()` | Sections with protein grid (Cytoskeletal vs Transmembrane) |
| Carbonic Anhydrase | `formatCarbonicAnhydrase()` | Enzyme card with speed, location, significance |
| CO2 Transport | `formatCO2Transport()` | 3 mechanism cards with percentages |
| Reference Values | `formatReferenceValuesContent()` | Table format with arterial vs venous comparison |
| Generic | `formatGenericContent()` | Intro box + left-bordered detail lines |

### Color Scheme

| Color | Hex | Usage |
|-------|-----|-------|
| **Blue headers** | `#2563eb` | Section titles, headers |
| **Red** | `#dc2626` | Critical concepts, important terms |
| **Green** | `#059669` | Normal values, numbers |
| **Purple** | `#7c3aed` | Processes (erythropoiesis, rouleaux formation) |
| **Yellow/Amber** | `#ca8a04` | Middle categories (normocytic) |
| **Gray** | `#6b7280` | Supplementary info, smaller text |

### Card Structure

**Front Side:**
- Navy gradient header (`#1e3a5f`) with "LEARNING OBJECTIVE" label
- Exact learning objective text (unchanged from source)

**Back Side:**
- Navy gradient header with derived descriptive title
- Content organized by specialized formatter
- Colored sections, cards, or grids based on content type

---

## Adding New Specialized Formatters

When you encounter a new type of LO that doesn't format well:

1. **Identify the pattern** - What type of content is it? (comparison, list of values, process, etc.)

2. **Add detection** in `generateCardBackContent()`:
   ```typescript
   if (/your pattern/i.test(loTitle)) {
     html += formatYourNewType(rawContent)
   }
   ```

3. **Create the formatter** - Follow existing patterns:
   ```typescript
   function formatYourNewType(content: string): string {
     return `
     <div style="...">
       <!-- Organized content here -->
     </div>`
   }
   ```

4. **Add title mapping** in `generateTitleFromLO()`:
   ```typescript
   [/your pattern/i, 'Descriptive Title'],
   ```

5. **Test** - Generate the deck and verify in browser

---

## Consistency Guidelines for Future Development

### When generating new topic decks:

1. **Check if specialized formatter exists** - Look at the LO titles and see if they match existing formatters

2. **If no formatter exists** - The generic formatter will be used, which creates:
   - Gray intro box with first sentence
   - Left-bordered detail lines for remaining sentences

3. **For complex LOs** - Consider adding a new specialized formatter following the patterns above

### When asked to "generate flashcards for topic X":

1. Run the generation command
2. Check the output in browser
3. If any cards look like "wall of bullets", identify the LO type
4. Add a specialized formatter if needed
5. Regenerate

### Replicating Results:

To ensure consistent, high-quality output:
1. **Always use the script** - Don't manually create JSON
2. **Check specialized formatters** - If content doesn't look right, a new formatter may be needed
3. **Follow the color scheme** - Blue headers, green values, red critical terms
4. **Avoid generic bullets** - Every card type should have logical visual organization

---

## Available Topics

Topics 1-51 are available in `client/src/apps/physiology/data/Topics/`:
- Topic 1: Principles of Control Theory
- Topic 9: Red Blood Cells (RBC Parameters, Anemia, ESR, etc.)
- Topic 10: Erythropoiesis
- Topic 29: Carbon-dioxide Transport in Blood
- Topic 33-40: Respiration topics
- etc.

---

## Troubleshooting

### Script Not Found
Ensure you're in the `client` directory:
```bash
cd /Users/peti/Documents/GitHub/MedLearn-Unified/client
```

### Topic Not Found
Check the topic file exists:
```bash
ls client/src/apps/physiology/data/Topics/topic<NUM>.js
```

### Cards look like "wall of bullets"
The LO type doesn't have a specialized formatter. Add one following the patterns in this document.

### Parsing Errors
The script handles most topic formats, but complex nested structures may require manual adjustment.
