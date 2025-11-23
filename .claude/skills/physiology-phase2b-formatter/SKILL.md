---
name: physiology-phase2b-formatter
description: "Format optimized physiology exam answers into structured professional format with paragraphs, lists, and numbered steps (Phase 2B). Analyzes content structure to apply appropriate formatting. Marks critical red text portions. Preserves all content exactly. Use when formatting exam answers, Phase 2B, or formatting optimized answers."
allowed-tools:
  - Read
  - Grep
  - Edit
  - Bash
---

# Physiology Phase 2B Formatter - Professional Exam Answer Formatting

## WHAT IS PHASE 2B?

**Phase 2B converts optimized plain text exam answers into structured, professionally formatted answers.**

**Input:** Optimized examAnswer strings (from Phase 2A)
**Output:** Formatted examAnswer objects with `formatted` array and `raw` string

**Purpose:** Transform wall-of-text into visually scannable structure using paragraphs, bullet lists, and numbered steps to help medical students memorize and recite 20-30 second oral exam answers.

**CRITICAL:** Phase 2B MUST come AFTER Phase 2A optimization. Never format unoptimized verbose text.

---

## 🚨 ABSOLUTE RULE #1: NEVER CHANGE CONTENT

**PRESERVE EVERY SINGLE WORD from the optimized examAnswer exactly.**

- **ONLY add formatting structure** - never rewrite, rephrase, or alter content
- **Transform wall-of-text into professional structure** while keeping all words identical
- This is medical education - students' exam success depends on accuracy
- You are NOT optimizing - you are FORMATTING

---

## 🎧 CRITICAL UNDERSTANDING: AUDIO-VISUAL MATCHING

### **THE RAW TEXT IS CONVERTED TO AUDIO WITH ELEVENLABS TEXT-TO-SPEECH**

**Students LISTEN to the raw text audio while VIEWING the formatted version on screen.**

This is the MOST IMPORTANT concept to understand:
- The `raw` string is processed through ElevenLabs TTS
- Students hear the audio while looking at the `formatted` visual structure
- The formatted version must be **followable** while listening to the audio
- Word-for-word matching is NOT required, but students must be able to follow along

---

### The Balance: Formatting vs Text Preservation

**✅ ACCEPTABLE formatting changes:**
- Extract natural phrases from the original text for list/step intros
- Break long sentences into separate bullets/steps while keeping words mostly the same
- Small adjustments: punctuation changes, "and" → semicolon, breaking compound sentences
- Restructure text for visual scannability while preserving 90%+ of the original words
- Students can follow: hear "involves X, Y, and Z" → see "involves: 1. X 2. Y 3. Z"

**❌ NOT ACCEPTABLE:**
- Adding entirely new phrases that aren't in the original text at all
- Rephrasing or rewriting entire sections
- Adding redundant introductions that create audio-visual mismatch
- Content that doesn't correspond to what students are hearing

---

### The "Followability Test"

**Before finalizing any formatting, ask:**

> "If a student is listening to the raw audio, can they follow along with the formatted version I created?"

**Example that PASSES the test:**

**Original text (what they hear):**
```
"The molecular mechanism involves hypoxia inhibiting oxygen-sensitive potassium channels,
reduced potassium efflux leads to depolarization, depolarization opens calcium channels,
and increased calcium activates contractile proteins."
```

**Formatted version (what they see):**
```javascript
{
  type: 'steps',
  intro: 'The molecular mechanism involves:',  // ✅ Extracted from original
  items: [
    'Hypoxia inhibits oxygen-sensitive potassium channels',     // ✅ Same words
    'Reduced potassium efflux leads to depolarization',         // ✅ Same words
    'Depolarization opens voltage-gated calcium channels',      // ✅ ~Same words
    'Increased intracellular calcium activates contractile proteins'  // ✅ ~Same words
  ]
}
```

**Why it PASSES:**
- Student hears "The molecular mechanism involves hypoxia inhibiting..."
- Student sees "The molecular mechanism involves: 1. Hypoxia inhibits..."
- They can follow along: "Oh, #1 is what I just heard about hypoxia"
- 90%+ words are identical, just restructured into numbered steps
- Small additions like "voltage-gated" and "intracellular" are acceptable clarifications

**Example that FAILS the test:**

**Original text (what they hear):**
```
"The molecular mechanism involves hypoxia inhibiting oxygen channels..."
```

**Bad formatted version (what they see):**
```javascript
{
  type: 'steps',
  intro: 'The sequential molecular cascade proceeds through the following events:',  // ❌ NOT in original!
  items: [...]
}
```

**Why it FAILS:**
- Student hears "involves" but sees "proceeds through the following events"
- Added phrase "sequential molecular cascade" is NOT in original text
- Creates confusion - they can't follow along
- Audio-visual mismatch

---

### When Formatting Requires Text Changes

**Sometimes you need to make small changes to fit the structure. This is OKAY if:**

1. **90%+ of words remain identical**
2. **The changes are minimal** (adding "intracellular", changing "and" to semicolon)
3. **Students can still follow along** between audio and visual
4. **The intro is extracted from the original text**, not invented

**Acceptable intro extraction examples:**

| Original Text | Acceptable Intro | Why It Works |
|--------------|------------------|--------------|
| "Three factors affect resistance: factor A, factor B, and factor C" | `intro: 'Three factors affect resistance:'` | ✅ Exact phrase from text |
| "The process involves several steps. First, X happens. Then Y occurs." | `intro: 'The process involves several steps:'` | ✅ Uses original wording |
| "After acute increase, the pathway activates..." | `intro: 'After acute increase:'` | ✅ Natural extraction |
| "Mechanisms include metabolic control and neural control" | `intro: 'Mechanisms include:'` | ✅ Extracted phrase |

**UNACCEPTABLE intro inventions:**

| Original Text | Bad Intro | Why It Fails |
|--------------|-----------|--------------|
| "The mechanism involves X, Y, Z" | `intro: 'The sequential process proceeds through:'` | ❌ Invented phrase not in text |
| "Three factors affect X" | `intro: 'Multiple distinct factors influencing X:'` | ❌ Rewrote original phrasing |
| "First A, then B, then C" | `intro: 'The following consecutive events occur:'` | ❌ Added words not in original |

---

### Decision Framework for Every LO

**For EACH Learning Objective, follow this framework IN ORDER:**

#### Step 1: Structure Analysis (MANDATORY)
```
☐ Is this describing a SEQUENTIAL process? (First→Then→Next, cascade, pathway)
   → If YES: Consider using STEPS

☐ Is this describing MULTIPLE DISTINCT items? (Three factors, Five components, Types of)
   → If YES: Consider using LIST

☐ Is this EXPLANATORY PROSE? (Definition, flowing explanation, no enumeration)
   → If YES: Consider using PARAGRAPHS
```

#### Step 2: Text Preservation Check (MANDATORY)
```
☐ Can I format as steps/lists by EXTRACTING phrases from the original text?
   → If YES: Proceed with steps/lists
   → If NO: Continue to Step 3

☐ Would formatting as steps/lists require ADDING phrases not in the text?
   → If YES: Continue to Step 3
   → If NO: Proceed with steps/lists
```

#### Step 3: Conservative Decision (MANDATORY)
```
☐ If breaking into steps/lists requires adding text:
   → Keep as PARAGRAPHS
   → Better to have clear paragraphs than mismatched audio-visual

☐ If text naturally fits into steps/lists with extracted phrases:
   → Use STEPS/LISTS with confidence
   → Students will be able to follow along
```

---

### Practical Examples: When to Use Steps/Lists vs Paragraphs

#### ✅ Example 1: SHOULD use STEPS

**Original text:**
```
"After acute increase, volume receptors activate. Signals transmit via vagus nerve
to NTS. NTS inhibits sympathetic activity. PVN reduces ADH release."
```

**✅ CORRECT formatting:**
```javascript
{
  type: 'steps',
  intro: 'After acute increase:',  // ✅ Extracted from text
  items: [
    'Volume receptors activate',
    'Signals transmit via vagus nerve to NTS',
    'NTS inhibits sympathetic activity',
    'PVN reduces ADH release'
  ]
}
```

**Why:** Sequential process, intro extracted naturally, students can follow along.

---

#### ✅ Example 2: SHOULD use LIST

**Original text:**
```
"Three mechanisms include capillary recruitment where collapsed capillaries open up,
vascular distension where vessels expand, and flow-mediated dilation via shear stress."
```

**✅ CORRECT formatting:**
```javascript
{
  type: 'list',
  intro: 'Three mechanisms include:',  // ✅ Extracted from text
  items: [
    'Capillary recruitment where collapsed capillaries open up',
    'Vascular distension where vessels expand',
    'Flow-mediated dilation via shear stress'
  ]
}
```

**Why:** Multiple distinct items, intro extracted naturally, students can follow along.

---

#### ✅ Example 3: SHOULD keep as PARAGRAPHS

**Original text:**
```
"The baroreceptor reflex operates short-term while renal regulation acts long-term.
The reflex adjusts pressure rapidly but resets within days. Renal control works
over hours to days through volume regulation."
```

**✅ CORRECT formatting (keep as paragraphs):**
```javascript
{
  type: 'paragraph',
  content: 'The baroreceptor reflex operates short-term while renal regulation acts long-term.
           The reflex adjusts pressure rapidly but resets within days.'
},
{
  type: 'paragraph',
  content: 'Renal control works over hours to days through volume regulation.'
}
```

**Why:** Comparative explanation, no clear "three factors" or "first→then→next" structure. Breaking it into lists would require adding phrases like "Baroreceptor characteristics:" which aren't in the text. Keep as clear paragraphs.

---

#### ❌ Example 4: DON'T force into STEPS if it requires adding text

**Original text:**
```
"The trigger is hypoxia below 70 mmHg. This inhibits K+ channels causing depolarization,
which opens Ca2+ channels, leading to contraction."
```

**❌ WRONG formatting (too much added text):**
```javascript
{
  type: 'paragraph',
  content: 'The trigger is hypoxia below 70 mmHg.'
},
{
  type: 'steps',
  intro: 'The sequential molecular mechanism proceeds through:',  // ❌ NOT in original!
  items: [...]
}
```

**✅ CORRECT formatting (conservative):**
```javascript
{
  type: 'paragraph',
  content: 'The trigger is hypoxia below 70 mmHg. This inhibits K+ channels causing
           depolarization, which opens Ca2+ channels, leading to contraction.'
}
```

**Why:** Original text flows as one sentence. Breaking it would require adding "sequential molecular mechanism proceeds through" which isn't in the text. Better to keep as a clear paragraph that students can follow.

**✅ ALTERNATIVE CORRECT formatting (if extraction is natural):**
```javascript
{
  type: 'paragraph',
  content: 'The trigger is hypoxia below 70 mmHg.'
},
{
  type: 'steps',
  intro: 'The mechanism involves:',  // ✅ IF "involves" appears in nearby text
  items: [
    'K+ channels are inhibited causing depolarization',
    'Ca2+ channels open',
    'Contraction occurs'
  ]
}
```

**Only use this alternative IF** the word "involves" or "mechanism" appears naturally in the nearby text that you can extract.

---

### The Golden Rules for 122 Topics

1. **ALWAYS do structure analysis** - Is it sequential? Multiple items? Prose?
2. **ALWAYS check text preservation** - Can I extract phrases or must I add new text?
3. **When in doubt, keep as paragraphs** - Better clear paragraphs than mismatched audio-visual
4. **Each LO is individual** - No blanket rules, evaluate case-by-case
5. **Students must be able to follow** - The formatted version must correspond to the audio they're hearing
6. **90%+ words preserved** - Small changes OK, wholesale rewriting NOT OK
7. **Extract, don't invent** - Pull intro phrases from the text, don't make up new ones

---

### Mandatory Self-Check Before Formatting ANY LO

**Write this in your thinking blocks for EVERY LO:**

```
STRUCTURE ANALYSIS FOR LO-X:
1. Sequential process? (First→Then, cascade, pathway, consecutive events)
   → YES/NO: [Answer]

2. Multiple distinct items? (Three factors, Five types, Different mechanisms)
   → YES/NO: [Answer]

3. Explanatory prose only? (Definition, comparison, flowing explanation)
   → YES/NO: [Answer]

TEXT PRESERVATION CHECK:
4. Can I extract intro phrases from original text without inventing new ones?
   → YES/NO: [Answer]

5. Will students be able to follow formatted version while listening to audio?
   → YES/NO: [Answer]

DECISION: [STEPS / LIST / PARAGRAPHS / COMBINATION]
REASONING: [Why this structure preserves content while improving scannability]
```

**If you don't write this analysis, the formatting is INVALID.**

---

## CONTEXT

**Working on:** Topics 41-51 (continuing through topic 122)
**Branch:** `physiology-update-41-51`
**Repository:** `/Users/peti/Documents/GitHub/MedLearn-Unified`
**File Location:** `client/src/apps/physiology/data/Topics/topic{number}.js`
**Students:** University of Szeged medical students
**Exam Type:** Oral exams requiring 20-30 second recitation from memory

---

## 📖 STEP 1: READ REQUIRED GUIDES (EVERY SESSION)

Before formatting ANY topic, read these four guides IN ORDER:

### Guide 1: Phase 2B Workflow
**File:** `/Users/peti/Documents/GitHub/MedLearn-Unified/PHYSIOLOGY_TOPIC_UPDATE_GUIDE.md`
**Read lines:** 482-653

### Guide 2: Formatting Rules
**File:** `/Users/peti/Documents/GitHub/MedLearn-Unified/FORMATTING_RULES.md`

### Guide 3: Content Structure Analysis (MOST IMPORTANT)
**File:** `/Users/peti/Documents/GitHub/MedLearn-Unified/FORMATTING_ANALYSIS_GUIDE.md`

### Guide 4: Red Text Marking Instructions
**File:** `/Users/peti/Documents/GitHub/MedLearn-Unified/RED_TEXT_CORRECTION_INSTRUCTIONS_FORMATTED.md`

**After reading all four guides, confirm you've read them.**

---

## THE THREE STRUCTURE TYPES

### Type 1: Paragraphs (`type: 'paragraph'`)

**Use for:** Explanatory text, definitions, summaries, flowing prose

```javascript
{
  type: 'paragraph',
  content: 'Text content here',
  critical: true  // Optional - only for red text in critical LOs
}
```

### Type 2: Bullet Lists (`type: 'list'`)

**Use for:** Multiple distinct items/factors/features (non-sequential)

```javascript
{
  type: 'list',
  intro: 'Three factors include:',  // Optional
  critical: true,  // Optional - if intro is red text
  items: [
    'First factor with explanation',
    'Second factor with explanation',
    'Third factor with explanation'
  ]
}
```

### Type 3: Numbered Steps (`type: 'steps'`)

**Use for:** Sequential processes, pathways, cascades

```javascript
{
  type: 'steps',
  intro: 'The cardiac conduction sequence:',  // Optional
  items: [
    'SA node initiates impulse',
    'Impulse spreads to atria',
    'AV node delays signal'
  ]
  // NO critical: true on steps - steps are ALWAYS purple numbered
}
```

**VISUAL:** Steps render as purple numbered items (1, 2, 3...) in the UI.

---

## 🚨 THE CRITICAL MISTAKE TO AVOID - DON'T DEFAULT TO PARAGRAPHS!

### **⚠️ YOU HAVE A TENDENCY TO BREAK EVERYTHING INTO PARAGRAPHS - STOP!**

**The problem:** You're lazy and default to paragraphs instead of properly analyzing structure.

**This happens EVERY session** - you break content into multiple paragraphs when it should be lists or steps.

---

### ❌ WRONG Example 1: Missing NUMBERED STEPS for Sequential Processes

**Bad formatting (what you tend to do):**
```javascript
// Breaking sequential events into separate paragraphs - WRONG!
formatted: [
  { type: 'paragraph', content: 'First, action potential depolarizes membrane...' },
  { type: 'paragraph', content: 'Then calcium channels open...' },
  { type: 'paragraph', content: 'Next, neurotransmitter is released...' }
]
```

**✅ CORRECT formatting:**
```javascript
// Recognized sequential process → use STEPS with purple numbering!
formatted: [
  {
    type: 'steps',
    intro: 'Chemical neurotransmission consecutive events:',
    items: [
      'Action potential depolarizes presynaptic membrane',
      'Voltage-gated calcium channels open causing calcium influx',
      'Elevated intracellular calcium triggers SNARE protein-mediated vesicle fusion',
      'Neurotransmitter released into synaptic cleft via exocytosis',
      'Neurotransmitter diffuses across cleft and binds postsynaptic receptors',
      'Ion channels open or second messengers activated',
      'Postsynaptic potentials develop as graded electrical responses'
    ]
  }
]
```

**Why correct is better:** Purple numbered steps (1-7) are visually scannable and show clear sequence!

---

### ❌ WRONG Example 2: Missing LISTS for Multiple Components

**Bad formatting (what you tend to do):**
```javascript
// Breaking components into separate paragraphs - WRONG!
formatted: [
  { type: 'paragraph', content: 'The Starling equation defines fluid movement...' },
  { type: 'paragraph', content: 'Jv is net fluid movement. Kf is filtration coefficient...' },
  { type: 'paragraph', content: 'Pc is capillary hydrostatic pressure...' },
  { type: 'paragraph', content: 'Pi c is capillary oncotic pressure...' },
  { type: 'paragraph', content: 'Sigma is the reflection coefficient...' }
]
```

**✅ CORRECT formatting:**
```javascript
// Recognized multiple components → use LIST!
formatted: [
  { type: 'paragraph', content: 'The Starling equation defines fluid movement across the capillary wall: Jv equals Kf times...' },
  {
    type: 'list',
    intro: 'Components influencing fluid movement:',
    items: [
      'Jv is net fluid movement in milliliters per minute; positive indicates filtration, negative indicates reabsorption',
      'Kf is the filtration coefficient proportional to capillary wall permeability and surface area',
      'Pc is capillary hydrostatic pressure driving fluid out of capillaries',
      'Pi is interstitial hydrostatic pressure opposing filtration',
      'πc is capillary oncotic pressure exerted by plasma proteins pulling fluid into capillaries',
      'πi is interstitial oncotic pressure promoting filtration',
      'Sigma is the reflection coefficient describing capillary selectivity for proteins'
    ]
  },
  { type: 'paragraph', content: 'Net filtration produces approximately 2 milliliters per minute...' }
]
```

**Why correct is better:** Bullet points make components visually scannable instead of walls of text!

---

## CONTENT STRUCTURE ANALYSIS - THE THREE QUESTIONS

**For EACH Learning Objective's examAnswer, analyze the optimized text:**

### Question 1: Does this describe multiple distinct items/factors/features?

**Recognition patterns:**
- Counting indicators: "Three factors...", "Five phases...", "Four components..."
- Plural categories: "Energy substrates include...", "Mechanisms causing...", "Factors affecting..."
- Comparison structures: "Phase 1 does X, Phase 2 does Y, Phase 3 does Z"
- Multiple reasons: "These values are unique because: reason 1; reason 2; reason 3"

**If YES → USE `type: 'list'`**

### Question 2: Does this describe a sequential process/pathway/cascade?

**Recognition patterns:**
- Sequential indicators: "First... then... next... finally..."
- Arrows: "SA node → atria → AV node → Bundle of His"
- Process descriptions: "The cascade proceeds...", "The pathway involves..."
- Temporal ordering: "During isovolumetric contraction... During ventricular ejection..."
- Causal chains: "X triggers Y, which causes Z, leading to..."

**If YES → USE `type: 'steps'`**

### Question 3: Is this explanatory text, definitions, or context?

**Use for:**
- Definitions (1-3 sentences)
- Flowing explanatory prose
- Introductory context
- Summary/conclusion statements
- Single coherent explanations

**If YES → USE `type: 'paragraph'`**

---

## DECISION TREE

```
For each examAnswer, ask:

┌─────────────────────────────────────────────────┐
│ Does it list multiple items/factors/features?  │
│ (Three factors, Five phases, Multiple reasons) │
└─────────────────────────────────────────────────┘
                    │
                    ├─ YES → type: 'list'
                    │
                    └─ NO ↓
┌─────────────────────────────────────────────────┐
│ Does it describe a sequential process/pathway? │
│ (First→then→next, Cascade, Phase 1→2→3)       │
└─────────────────────────────────────────────────┘
                    │
                    ├─ YES → type: 'steps'
                    │
                    └─ NO ↓
┌─────────────────────────────────────────────────┐
│ Is it explanatory text/definition/context?     │
│ (Flowing prose, definitions, summaries)        │
└─────────────────────────────────────────────────┘
                    │
                    └─ YES → type: 'paragraph'
```

---

## COMBINING STRUCTURE TYPES (VERY COMMON)

**Most Learning Objectives use MULTIPLE structure types.** This is normal and expected.

**Common patterns:**
- Paragraph → List (intro + factors)
- List → Paragraph (factors + summary)
- Paragraph → Steps → Paragraph (intro + process + conclusion)
- Multiple Lists (categorized items with separate intros)

**Example:**
```javascript
formatted: [
  { type: 'paragraph', content: 'Introduction to the concept.' },
  { type: 'list', intro: 'Three direct effects:', items: [...] },
  { type: 'list', intro: 'Two indirect effects:', items: [...] },
  { type: 'paragraph', content: 'Overall clinical significance.' }
]
```

---

## 🚨 CRITICAL RULE: AVOID REDUNDANT INTRODUCTIONS

**⚠️ IMPORTANT: The raw text is used for text-to-speech (11Labs)! Students LISTEN to it while viewing the formatted version.**

**You CANNOT deviate significantly from the raw text. Small formatting improvements are OK, but NO unnecessary additions or repetitions.**

### ❌ WRONG: Redundant Paragraph + List Intro

**Bad example:**
```javascript
formatted: [
  {
    type: 'paragraph',
    content: 'The relationship has three phases.' // Says "three phases"
  },
  {
    type: 'list',
    intro: 'Three phases of the relationship:', // REPEATS "three phases"!
    items: ['Phase 1...', 'Phase 2...', 'Phase 3...']
  }
]
```

**Why wrong:**
- Students hear "three phases" TWICE in a row via text-to-speech
- Unnecessary repetition that wasn't in the original text
- Deviates from raw content students are listening to

### ✅ CORRECT: No Redundant Intro

**Good example:**
```javascript
formatted: [
  {
    type: 'paragraph',
    content: 'The relationship has three phases.'
  },
  {
    type: 'list',
    // NO intro - paragraph already introduced it!
    items: [
      'At low pressure, lymph flow is minimal...',
      'With moderate pressure increases, lymph flow increases dramatically...',
      'When pressure exceeds zero, lymph flow reaches maximum plateau...'
    ]
  }
]
```

**Why correct:**
- No repetition - paragraph introduces, list delivers
- Students hear content only once
- Stays true to original raw text

---

### When to OMIT vs INCLUDE List Intro

**OMIT list intro when:**
- ✅ Previous paragraph already says "three factors", "four mechanisms", "five phases"
- ✅ Previous paragraph ends with introducing what's coming next
- ✅ Example: "...because of four mechanisms." → List has NO intro
- ✅ Example: "The process has three phases." → List has NO intro

**INCLUDE list intro when:**
- ✅ No previous introduction exists
- ✅ List stands alone without preceding paragraph
- ✅ Multiple lists need differentiation (e.g., "Direct effects:" vs "Indirect effects:")
- ✅ The intro adds NEW information not mentioned before

**Golden Rule:** If you just mentioned the number/category in a paragraph, DON'T repeat it in the list intro!

---

## RED TEXT MARKING (CRITICAL LOs ONLY)

### How Red Text Works in Formatted Arrays

**THE `critical: true` FLAG MAKES TEXT RED, NOT `>><<` MARKERS!**

### In the `formatted` array:
- Add `critical: true` flag to objects that should display as red
- **DO NOT use `>><<` markers** in the `content` field
- Only apply to **critical LOs** where `isCritical: true`

### In the `raw` string:
- Use `>><<` markers to wrap red portions
- Content wrapped in `>><<` must correspond to objects with `critical: true` in formatted

### For Non-Critical LOs:
- No red marking needed
- Still format into structured paragraphs/lists/steps
- No `critical: true` flags, no `>>markers<<`

### Red Text Identification Process:

**1. Read LO title** - identify text between `>>markers<<`
**2. Analyze what red portion asks:**
   - "Define X" → only definitions are red
   - "Describe function" → ENTIRE functional mechanism is red
   - "Explain factors" → all factors are red
   - "Describe X and Y" → BOTH X and Y must be red

**3. Mark ONLY the direct answer** to red question in examAnswer
**4. In formatted:** Add `critical: true` flag (NO `>>markers<<` in content!)
**5. In raw:** Keep `>>markers<<` around same content

### CRITICAL RULE FOR STEPS:

**Steps items are ALWAYS purple numbered - NEVER add `critical: true` to individual items.**

- Steps intro CAN be red if intro answers red question
- Items array ALWAYS stays purple regardless
- DO NOT add `critical: true` to the steps object unless entire sequence answers red question

---

## 🎯 TRIGGER WORDS - QUICK REFERENCE

### When you see these words in the LO title or content → USE STEPS!

**Instant "STEPS" triggers:**
- "consecutive events"
- "sequence"
- "cascade"
- "pathway"
- "process of"
- "First... then... next... finally"
- "During X... During Y... During Z..."
- Arrows: "A → B → C"
- "stages of"
- "phases of" (when describing temporal progression)

**If you see these → format as `type: 'steps'` with purple numbered items!**

---

### When you see these words → USE LIST!

**Instant "LIST" triggers:**
- "types of"
- "factors affecting"
- "components of"
- "Three/Four/Five [things]"
- "different [categories]"
- "mechanisms causing"
- "characteristics of"
- "main [items]"
- "contrast A, B, and C"

**If you see these → format as `type: 'list'` with bullet points!**

---

## THE WORKFLOW - HOW TO FORMAT A TOPIC

### STEP 1: Count Total LOs

Before formatting anything, count the total number of Learning Objectives:

```bash
grep "id: 'lo-" client/src/apps/physiology/data/Topics/topic{number}.js
```

**Announce:** "Topic {X} has {Y} Learning Objectives. I will format all {Y}."

---

### STEP 2: Read Topic File

Read the complete topic file to see all LOs:

```bash
Read client/src/apps/physiology/data/Topics/topic{number}.js
```

---

### STEP 3: Format Each LO Immediately

**For EACH Learning Objective, do this process:**

#### 3.1 Check If Already Formatted
- If examAnswer is an object with `formatted` and `raw` → Skip (already done)
- If examAnswer is a string → Needs formatting

#### 3.2 Analyze Content Structure - MANDATORY SELF-CHECK

**BEFORE formatting, answer these questions OUT LOUD to yourself:**

**Question 1:** Does this content describe **consecutive events, a sequence, or a process**?
- Keywords: "First... then... next", "consecutive", "sequence", "cascade", "pathway"
- Examples: "Describe the events of...", "Explain the process of...", "Describe the consecutive..."
- **If YES → Use `type: 'steps'` with purple numbering!**
- **If NO → Continue to Question 2**

**Question 2:** Does this content describe **multiple distinct items, factors, components, or categories**?
- Keywords: "Three factors", "Four components", "Different types", "Multiple mechanisms"
- Examples: "Describe the main types...", "List the factors...", "What are the components..."
- **If YES → Use `type: 'list'` with bullet points!**
- **If NO → Continue to Question 3**

**Question 3:** Is this content **flowing explanatory prose, a definition, or contextual information**?
- Single coherent explanation without enumerated items
- Definition or concept explanation
- Contextual background or summary
- **If YES → Use `type: 'paragraph'` - this is CORRECT when appropriate!**

**⚠️ PARAGRAPHS ARE FINE when they're the right choice - just don't default to them lazily!**

#### 3.3 Identify Red Text (Critical LOs Only)
- Read LO title → find `>>markers<<`
- Determine what red portion asks
- Identify which content directly answers it

#### 3.4 Format Immediately Using Edit Tool
- Break optimized text into logical segments
- Apply appropriate structure types
- Add `critical: true` flags where needed (NO `>>markers<<` in content!)
- Create `raw` string with `>>markers<<`
- Use Edit tool to replace examAnswer string with formatted object

#### 3.5 Verify Preservation
- Every word preserved from optimized version
- No rewording, rephrasing, or content changes

#### 3.6 Move to Next LO

**Track progress:**
```
✓ LO-1 formatted (paragraph + list)
✓ LO-2 formatted (steps with 6 items)
→ LO-3 formatting now...
```

**Repeat for all LOs, formatting each one immediately as you go.**

---

### STEP 4: Verify All LOs Formatted

After formatting all LOs, verify none were skipped:

```bash
grep -A 1 "examAnswer:" client/src/apps/physiology/data/Topics/topic{number}.js
```

**All should show:**
```javascript
examAnswer: {           // ✅ Object (formatted)
  formatted: [
```

**If any show:**
```javascript
examAnswer: 'text...'   // ❌ String (missed!)
```

→ Go back and format the missed LO

---

### STEP 5: Provide Completion Summary

```
✅ Topic {X} Formatting Complete

Formatted LOs:
- LO-1: Paragraph + list (red: list intro)
- LO-2: Steps (6 items, purple numbered)
- LO-3: Multiple paragraphs (no red)
- LO-4: Paragraph + list + paragraph (red: first paragraph)
[... all LOs ...]

All {Y} LOs formatted successfully.

Summary:
- Total LOs: {Y}
- Critical LOs: {Z} (with red marking)
- Non-critical LOs: {W} (no red marking)
- Structure types used: X lists, Y steps, Z paragraphs

Content preservation: ✓ All words preserved
Structure analysis: ✓ Appropriate types used
Red marking: ✓ Only critical LOs marked correctly
```

**User can now request structure changes if needed:**
- "Make LO-3 a list instead"
- "Change LO-5 from steps to paragraphs"

---

## QUALITY CHECKPOINTS

### Before Moving to Next LO:

**Content Preservation:**
- [ ] Every word from optimized version preserved exactly
- [ ] No rewording, rephrasing, or content alterations
- [ ] Only formatting structure added

**Structure Analysis:**
- [ ] Content structure analyzed using three questions
- [ ] Appropriate structure type chosen
- [ ] NOT just broken into multiple paragraphs
- [ ] Combined structures used where appropriate

**Red Text Marking (Critical LOs Only):**
- [ ] LO title read to identify `>>markers<<`
- [ ] Red question analyzed (Define? Describe? Explain?)
- [ ] Only direct answer to red question marked
- [ ] `critical: true` flags added in formatted (NO `>>markers<<` in content)
- [ ] `>>markers<<` added in raw string
- [ ] Steps items are purple (NO `critical: true` on items)

**Both Versions:**
- [ ] `formatted` array present with proper structure
- [ ] `raw` string present with all content
- [ ] Both versions contain identical text content

---

## CRITICAL RULES SUMMARY

1. **NEVER CHANGE CONTENT** - Preserve every single word
2. **Analyze structure** - Don't just break into paragraphs
3. **Use appropriate types** - Lists for items, steps for sequences, paragraphs for prose
4. **Red text in formatted** - Use `critical: true` flag, NO `>>markers<<` in content
5. **Red text in raw** - Use `>>markers<<` around red portions
6. **Steps are ALWAYS purple** - Never add `critical: true` to step items
7. **Process ALL LOs** - Both critical and non-critical (only critical have red)
8. **Verify completion** - Check all examAnswers are objects, not strings
9. **No formulas** - Each LO analyzed individually based on content
10. **Goal is memorability** - Structure should help students scan and remember

---

## REMEMBER

**There is NO mechanical formula for formatting.**

Each Learning Objective must be analyzed individually based on its specific content:
- Some "First, Second, Third" should be steps (sequential)
- Other "First, Second, Third" should be lists (distinct factors)
- Some need no lists/steps - just well-structured paragraphs
- Some need multiple lists, or lists + steps, or steps + paragraphs

**Ask yourself:** "How would I want this information presented if I had to memorize it for a medical exam?"

**The goal:** Make exam answers visually structured, scannable, and memorable for students preparing for 20-30 second oral recitation.

---

## EXECUTION PROTOCOL

### When User Says:

- "Format physiology topic {X}"
- "Phase 2B for topic {X}"
- "Format exam answers for topic {X}"
- "Format topic {X}"

### You MUST:

1. ✅ Read all four guide files (confirm after reading)
2. ✅ Count total LOs in topic (announce count)
3. ✅ Read the topic file completely
4. ✅ Format each LO immediately (analyze → format → move to next)
5. ✅ Track progress as you go
6. ✅ Verify all LOs formatted (no strings remaining)
7. ✅ Provide completion summary

### You Should NEVER:

- ❌ Skip reading the guide files
- ❌ Format without counting total LOs first
- ❌ **DEFAULT TO PARAGRAPHS - check for lists/steps first!**
- ❌ **Break sequential processes into paragraphs - use STEPS!**
- ❌ **Break multiple components into paragraphs - use LIST!**
- ❌ Just break text into multiple paragraphs without analyzing structure
- ❌ Create a "plan" and wait for approval (format directly!)
- ❌ Change, reword, or rephrase any content
- ❌ Add `critical: true` to individual step items
- ❌ Use `>>markers<<` in formatted array content
- ❌ Skip verification step at the end
- ❌ Claim completion when some LOs are still strings

---

## FINAL CHECKLIST BEFORE CLAIMING COMPLETE

- [ ] Read all four guide files
- [ ] Counted total LOs at start
- [ ] Formatted ALL LOs (none skipped)
- [ ] Analyzed each LO's content structure individually
- [ ] **Checked for sequential processes → used STEPS with purple numbering**
- [ ] **Checked for multiple components → used LIST with bullet points**
- [ ] **Used paragraphs ONLY when appropriate (not by default!)**
- [ ] Used appropriate structure types (list/steps/paragraph)
- [ ] Did NOT just break text into multiple paragraphs
- [ ] Preserved ALL optimized content (no rewording)
- [ ] Marked critical portions correctly (only in critical LOs)
- [ ] Created raw version with `>>markers<<` in correct positions
- [ ] Verified all examAnswers are objects (no strings remain)

---

**Phase 2B converts optimized strings into professionally formatted structures that help medical students memorize and excel in their oral exams.**
