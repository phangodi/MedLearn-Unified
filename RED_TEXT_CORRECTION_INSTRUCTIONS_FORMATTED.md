# RED TEXT MARKER CORRECTION INSTRUCTIONS - FORMATTED VERSION

## PROBLEM STATEMENT

The red text markers `>>like this<<` in examAnswer fields are **not accurately marking the content that directly answers the red portion of the LO title**. Sometimes they mark too little, sometimes too much, and often they mark the wrong parts entirely.

**Current issue:** Red markers are not precisely aligned with what the red question in the title is asking.
**Goal:** Red markers should ACCURATELY mark the text that directly answers the red question - no more, no less - just what students must say to pass that specific red requirement.

---

## SCOPE

**Applicable to:** Topics with FORMATTED examAnswer structure (containing both `formatted` and `raw` fields)

**Example topics:** Topic 29 and any other topics using the formatted structure

**Location:** `src/data/Topics/topicX.js` (where X is the topic number)

**IMPORTANT - CRITICAL LOs ONLY:**
- **ONLY** check LOs where `isCritical: true`
- Non-critical LOs (where `isCritical: false`) **NEVER** have red sections in their titles or answers
- This saves time and tokens - skip all non-critical LOs entirely

---

## EXAMANSWER STRUCTURE IN FORMATTED TOPICS

### Structure Overview:
```javascript
examAnswer: {
  formatted: [
    { type: 'paragraph', content: 'Red text here', critical: true },        // Red in formatted = critical: true flag
    { type: 'paragraph', content: 'More red text', critical: true },        // NO >><< markers in content!
    { type: 'paragraph', content: 'Normal text without markers' }           // No critical flag = black text
  ],
  raw: '>>Red text here<< >>More red text<< Normal text without markers'     // Red in raw = >><< markers
}
```

### **CRITICAL UNDERSTANDING - HOW RED TEXT WORKS IN FORMATTED ARRAYS!**

**THE `critical: true` FLAG IS WHAT MAKES TEXT RED IN FORMATTED ARRAYS, NOT `>><<` MARKERS!**

**FORMATTED ARRAY RULES:**
1. **Add `critical: true` flag to EVERY object that should display as red**
2. **DO NOT use `>><<` markers in formatted array content** - they don't control red display
3. **ONLY use `>><<` markers in the `raw` string field**

**WRONG - DO NOT DO THIS:**
```javascript
formatted: [
  { type: 'paragraph', content: '>>First paragraph<<', critical: true },    // ❌ WRONG - has markers
  { type: 'paragraph', content: '>>Second paragraph<<' },                   // ❌ WRONG - has markers, missing flag
  { type: 'paragraph', content: '>>Third paragraph<<' }                     // ❌ WRONG - has markers, missing flag
]
```

**CORRECT - DO THIS:**
```javascript
formatted: [
  { type: 'paragraph', content: 'First paragraph', critical: true },    // ✓ CORRECT - flag present, no markers
  { type: 'paragraph', content: 'Second paragraph', critical: true },   // ✓ CORRECT - flag present, no markers
  { type: 'paragraph', content: 'Third paragraph', critical: true }     // ✓ CORRECT - flag present, no markers
]
```

### Key Points:
1. **TWO places need correction:** Both `formatted` array and `raw` string
2. **formatted array:** Add `critical: true` flag to EACH object that should display as red (NO `>><<` markers in content)
3. **raw string:** Use `>><<` markers to wrap red text (can span multiple sentences)
4. **Both must match:** Objects with `critical: true` flag in formatted must correspond to `>><<` content in raw
5. **Do NOT modify:** Object structure, types, or other fields - ONLY add `critical: true` flags and update raw markers

---

## RULES FOR RED TEXT MARKING

### CORE PRINCIPLE:
**Mark EXACTLY what directly answers the red question - no more, no less.**

### CRITICAL: READ ONLY THE RED PORTION!
**The black (non-red) portion of LO titles often provides context, examples, or specific terms - but these are NOT part of what the red question is asking!**

**Example:**
- **LO Title:** >>Describe the brainstem regions involved in rhythmogenesis:<< DRG, VRG, pre-Bötzinger complex, PRG
- **Red asks:** "Describe the brainstem regions involved in rhythmogenesis"
- **Black provides:** Specific region names as guidance/context
- **CORRECT red answer:** "The brainstem regions involved in rhythmogenesis include DRG, VRG, pre-Bötzinger complex, and PRG."
- **WRONG:** Marking detailed descriptions of each region's location, function, inputs, outputs, etc.

**The black portion is NOT part of the question - it's additional information to guide the student!**

**Key Rules:**
- If red asks "Describe X and Y" → BOTH X and Y descriptions must be red
- If red asks "Define X" → Only the definition is red, not causes/mechanisms (unless asked)
- If red asks "Describe the regions involved" → List/identify the regions, NOT detailed descriptions of each
- If red asks "Describe structure and function" → BOTH structure AND complete functional mechanism must be red
- If red asks "Describe function" → The ENTIRE functional description including mechanism must be red
- If red asks "Define the following: A, B, C, D" → ALL definitions (A, B, C, D) must be marked red

**Context matters:**
- "Describe anatomical locations of chemoreceptors monitoring X, Y, Z" means describe WHERE they are AND WHICH monitors WHAT
- "Describe structure and function" requires the complete signal transduction pathway, not just cell types
- "Describe function" includes location context, what it detects, HOW it works, what it signals, and importance

### ✓ MARK AS RED (Include):
- **Complete direct answer** to what the red question asks
- **All parts** if the red question has multiple parts
- **Specific items** mentioned in red (e.g., if >>Hering-Breuer reflex<< is red, mark its description)
- **Values/thresholds** if specifically requested in red portion

### ✗ DO NOT MARK AS RED (Exclude):
- Information NOT asked for in the red question (even if important)
- Mechanisms explaining HOW (unless red asks "describe how...")
- Causes or reasons WHY (unless red asks "explain why...")
- Clinical significance (unless red asks for it)
- Examples and elaborations (unless red asks for examples)
- Supporting details that go beyond the red question's scope

---

## FORMATTED STRUCTURE EXAMPLES

### Example 1: Single Paragraph Answer

**LO Title:** >>Name the critical enzyme required for CO2-transport,<< and its cellular location.

**CURRENT:**
```javascript
examAnswer: {
  formatted: [
    { type: 'paragraph', content: 'The critical enzyme required for carbon dioxide transport is carbonic anhydrase.', critical: true },
    { type: 'paragraph', content: 'It is primarily located in red blood cells where it catalyzes rapid conversion...' }
  ],
  raw: '>>The critical enzyme required for carbon dioxide transport is carbonic anhydrase.<< It is primarily located in red blood cells...'
}
```

**ANALYSIS:** Red asks to "Name the critical enzyme" - currently ONLY the name has `critical: true` flag (displays red). The non-red portion asks "and its cellular location" - so location should NOT be red. **This is CORRECT.**

---

### Example 2: Multi-Paragraph with Complete Description

**LO Title:** >>Describe the CO2 transport mechanisms in blood and the percentage contribution...<<

**INCORRECT:**
```javascript
examAnswer: {
  formatted: [
    { type: 'paragraph', content: 'Carbon dioxide is transported in blood by three mechanisms with distinct percentage contributions.', critical: true },
    { type: 'paragraph', content: 'First, physically dissolved CO₂ represents 5 to 10 percent...' }  // ❌ Missing critical: true
  ],
  raw: '>>Carbon dioxide is transported in blood by three mechanisms with distinct percentage contributions.<< First, physically dissolved...'
}
```

**CORRECT:**
```javascript
examAnswer: {
  formatted: [
    { type: 'paragraph', content: 'Carbon dioxide is transported in blood by three mechanisms with distinct percentage contributions.', critical: true },
    { type: 'paragraph', content: 'First, physically dissolved CO₂ represents 5 to 10 percent. CO₂ dissolves directly in blood plasma proportional to its partial pressure, maintaining the critical CO₂ gradient between tissues and blood that drives diffusion.', critical: true },
    { type: 'paragraph', content: 'Second, bicarbonate anions account for 60 to 70 percent. Inside red blood cells, CO₂ reacts with water to form carbonic acid catalyzed by carbonic anhydrase, which rapidly dissociates into bicarbonate ions and hydrogen ions. Bicarbonate is then transported into plasma.', critical: true },
    { type: 'paragraph', content: 'Third, carbaminohemoglobin represents 20 to 30 percent. CO₂ binds directly to terminal amino groups of hemoglobin globin chains, not the heme group. This binding occurs more readily when hemoglobin is deoxygenated.', critical: true }
  ],
  raw: '>>Carbon dioxide is transported in blood by three mechanisms with distinct percentage contributions. First, physically dissolved CO₂ represents 5 to 10 percent. CO₂ dissolves directly in blood plasma proportional to its partial pressure, maintaining the critical CO₂ gradient between tissues and blood that drives diffusion. Second, bicarbonate anions account for 60 to 70 percent. Inside red blood cells, CO₂ reacts with water to form carbonic acid catalyzed by carbonic anhydrase, which rapidly dissociates into bicarbonate ions and hydrogen ions. Bicarbonate is then transported into plasma. Third, carbaminohemoglobin represents 20 to 30 percent. CO₂ binds directly to terminal amino groups of hemoglobin globin chains, not the heme group. This binding occurs more readily when hemoglobin is deoxygenated.<<'
}
```

**WHY:** Red asks to "Describe the CO2 transport mechanisms... and the percentage contribution" - so ALL FOUR paragraphs need `critical: true` flag, and the entire description must be wrapped in `>><<` in the raw string.

---

## SYSTEMATIC CORRECTION PROCESS FOR FORMATTED TOPICS

### Step 1: Identify All CRITICAL LOs with Red Text

For the target topic(s), list ONLY the LOs where **`isCritical: true`** AND have `>>red text<<` in their titles.

**SKIP all LOs where `isCritical: false` - they never have red markers.**

### Step 2: For Each Red-Marked LO

Create analysis in this format:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LO: [Topic X, LO-Y]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RED QUESTION: [Exact red text from title]

WHAT IS BEING ASKED: [Define? Describe location? List items?]

CURRENT RED MARKING IN formatted:
[List which objects have critical: true flag - e.g., "Only first paragraph has critical: true"]

CURRENT RED MARKING IN raw:
[Show current >><<  wrapped content]

PROPOSED RED MARKING IN formatted:
[List which objects should have critical: true flag - e.g., "All four paragraphs need critical: true"]

PROPOSED RED MARKING IN raw:
[Show corrected >><<  wrapped content]

JUSTIFICATION:
[Why the proposed marking is correct]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Step 3: Present All Corrections for Approval

Before making ANY changes, present all proposed corrections to the user for review and approval.

### Step 4: Apply Corrections

Once approved, use the Edit tool to update:
1. **FIRST:** The `formatted` array - move markers in `content` fields
2. **SECOND:** The `raw` string - move markers to match formatted

**CRITICAL:** Both must have identical red text content!

---

## CRITICAL - WHAT TO MODIFY IN FORMATTED STRUCTURE

### In the `formatted` array:
- **ADD or REMOVE** the `critical: true` flag from objects based on whether they should be red
- **DO NOT** add `>>` or `<<` markers to the `content` field (they don't work in formatted arrays)
- **DO NOT** change the `type` field (paragraph, list, steps)
- **DO NOT** change any other object properties
- **DO NOT** rewrite, rephrase, or modify the actual text content

### In the `raw` string:
- **ONLY** change the placement of `>>` and `<<` markers to match which objects have `critical: true`
- **DO NOT** rewrite, rephrase, or modify the actual text content
- Content wrapped in `>><<` in raw must correspond to objects with `critical: true` in formatted

### DO NOT touch:
- Title red portions (they must stay exactly as they are)
- keyPoints field
- officialDefinitions field
- Object structure or array structure

---

## EXAMPLE CORRECTION - COMPLETE WORKFLOW

**Before:**
```javascript
examAnswer: {
  formatted: [
    { type: 'paragraph', content: 'The Haldane effect describes how oxygenation of hemoglobin influences its ability to bind carbon dioxide and hydrogen ions.', critical: true },
    { type: 'paragraph', content: 'Deoxygenated hemoglobin has higher affinity for CO₂ and H⁺ compared to oxygenated hemoglobin.' },  // ❌ Missing critical: true
    { type: 'paragraph', content: 'In tissues where oxygen is released, deoxygenated hemoglobin more effectively picks up CO₂...' }  // ❌ Missing critical: true
  ],
  raw: '>>The Haldane effect describes how oxygenation of hemoglobin influences its ability to bind carbon dioxide and hydrogen ions.<< Deoxygenated hemoglobin has higher affinity for CO₂ and H⁺ compared to oxygenated hemoglobin. In tissues where oxygen is released...'
}
```

**After (if red asks to "Explain the effect" - full explanation needed):**
```javascript
examAnswer: {
  formatted: [
    { type: 'paragraph', content: 'The Haldane effect describes how oxygenation of hemoglobin influences its ability to bind carbon dioxide and hydrogen ions. Deoxygenated hemoglobin has higher affinity for CO₂ and H⁺ compared to oxygenated hemoglobin.', critical: true },
    { type: 'paragraph', content: 'In tissues where oxygen is released, deoxygenated hemoglobin more effectively picks up CO₂ by forming carbaminohemoglobin and buffers H⁺ ions, promoting CO₂ uptake and transport to lungs.', critical: true },
    { type: 'paragraph', content: 'When blood reaches the lungs and hemoglobin binds oxygen, the conformational change decreases hemoglobin\'s affinity for CO₂ and H⁺, promoting CO₂ release into alveoli. The H⁺ release also helps convert bicarbonate back to CO₂ for expiration.', critical: true }
  ],
  raw: '>>The Haldane effect describes how oxygenation of hemoglobin influences its ability to bind carbon dioxide and hydrogen ions. Deoxygenated hemoglobin has higher affinity for CO₂ and H⁺ compared to oxygenated hemoglobin. In tissues where oxygen is released, deoxygenated hemoglobin more effectively picks up CO₂ by forming carbaminohemoglobin and buffers H⁺ ions, promoting CO₂ uptake and transport to lungs. When blood reaches the lungs and hemoglobin binds oxygen, the conformational change decreases hemoglobin\'s affinity for CO₂ and H⁺, promoting CO₂ release into alveoli. The H⁺ release also helps convert bicarbonate back to CO₂ for expiration.<<'
}
```

---

## QUALITY CHECKLIST FOR FORMATTED TOPICS

Before finalizing each correction, verify:

- [ ] Only processing CRITICAL LOs (`isCritical: true`) - skipped all non-critical LOs
- [ ] Red text answers the red question COMPLETELY and ACCURATELY
- [ ] Objects with `critical: true` flag in formatted correspond to `>><<` wrapped content in raw
- [ ] Red text includes ALL parts if red question has multiple parts
- [ ] For "Describe function" - all objects containing functional mechanism have `critical: true`
- [ ] For "Describe X and Y" or "Define A, B, C" - ALL items have `critical: true` in formatted AND wrapped in `>><<` in raw
- [ ] Mechanisms/causes/examples are NOT marked red (unless specifically asked for in red)
- [ ] Object structure unchanged (type field, array structure intact)
- [ ] NO `>><<` markers in formatted array content fields
- [ ] NO text was rewritten in either formatted or raw - ONLY `critical` flags and raw `>><<` markers changed
- [ ] Read the red question, then read ONLY objects with `critical: true` - does it answer the question fully?

---

## EXECUTION WORKFLOW FOR FORMATTED TOPICS

1. Read this document completely
2. **Confirm target topic(s)** with user if not specified
3. Identify all CRITICAL LOs (`isCritical: true`) with red text in target topic(s)
4. **SKIP all non-critical LOs** - they never have red markers
5. Create correction analysis for each CRITICAL red-marked LO showing BOTH formatted and raw
6. Present ALL corrections to user for approval
7. Upon approval, apply corrections systematically:
   - Use Edit tool to add/remove `critical: true` flags in `formatted` array first
   - Then update `>><<` markers in `raw` string to match
8. Verify each change before moving to next:
   - Ensure only `critical` flags changed in formatted (NO `>><<` markers in content)
   - Ensure only `>><<` markers moved in raw
   - Ensure objects with `critical: true` in formatted correspond to `>><<` wrapped content in raw
9. Provide summary of all corrections made

**Token-saving tip:** Only read and analyze critical LOs to save processing time.

---

## FILES TO MODIFY

**General path:** `/Users/peti/Documents/GitHub/physiology-app/src/data/Topics/topicX.js`

Where X is the topic number specified by the user (e.g., topic29.js, etc.)

---

## IMPORTANT MEDICAL SAFETY NOTE

While correcting red text placement, ensure the FULL answer still contains all medically accurate information. We're only changing WHAT is marked red, not removing or adding content. The complete answer must remain comprehensive for student learning.

**Student perspective:**
- Red text = "This is what the examiner specifically asked for in the red portion - I MUST say this to pass"
- Non-red text = "Additional important information that completes my answer - good to know and may be asked in follow-up, but not the primary red question"

**The test:** If you only read the red-marked portions (from either formatted or raw), you should have a complete answer to the red question. If you read the entire answer, you understand the full topic.

---

## STARTING COMMAND

When ready to execute this task, begin with:

1. "I will now identify all CRITICAL red-marked LOs in [specify topic(s)] with formatted examAnswer structure (skipping non-critical LOs) and create correction proposals."
2. "I will analyze both the `formatted` array (checking `critical: true` flags) and `raw` string (checking `>><<` markers) fields for each LO."
3. Generate the analysis for all affected CRITICAL LOs only
4. Present for approval
5. Execute corrections: Add/remove `critical: true` flags in formatted, update `>><<` markers in raw

---

## SPECIFIC GUIDELINES BY QUESTION TYPE

### "Define..." Questions
**Mark as red:** The complete definition sentence(s) in BOTH formatted and raw
- If defining ONE term: Mark the full definition including what it IS, WHERE, WHAT it involves, WHAT it does
- If defining MULTIPLE terms (e.g., "Define A, B, C, D"): Mark ALL definitions, each one separately
**Don't mark:** Mechanisms WHY it occurs, clinical associations, causes (unless part of the definition itself)

### "Describe..." Questions - READ CAREFULLY!
**"Describe location":** Mark WHERE + identifying details (e.g., which chemoreceptor monitors what)
**"Describe structure":** Mark cell types, components, organization
**"Describe function":** Mark ENTIRE functional description (what it detects, HOW it works, mechanism, what it signals, importance)
**"Describe structure AND function":** Mark BOTH complete structure AND complete functional mechanism
**Don't mark:** Information not asked for in the red portion (even if important)

### "Explain..." Questions
**Mark as red:** The complete explanation including mechanism and effects
**Example:** "Explain the importance of X" requires marking the entire importance explanation, not just "X is important"

### Multiple-Part Red Questions
If red portion has multiple parts (e.g., >>mechanisms AND percentage contribution<<), mark ALL parts completely in BOTH formatted and raw.

---

**Document created:** 2025-01-02
**Last updated:** 2025-11-02
**Purpose:** Correct inaccurate red text marking in examAnswer fields with formatted structure (formatted array + raw string)
**Applicable to:** Topics using formatted examAnswer structure (CRITICAL LOs only - skip non-critical)
**Principle:** Red text = ACCURATE and COMPLETE answer to the red question
- **Formatted array:** Add `critical: true` flag to objects that should display red (NO `>><<` markers in content)
- **Raw string:** Wrap red text with `>><<` markers
- Both must correspond to the same content answering the red question
