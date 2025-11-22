# RED TEXT MARKER CORRECTION INSTRUCTIONS

## PROBLEM STATEMENT

The red text markers `>>like this<<` in examAnswer fields are **not accurately marking the content that directly answers the red portion of the LO title**. Sometimes they mark too little, sometimes too much, and often they mark the wrong parts entirely.

**Current issue:** Red markers are not precisely aligned with what the red question in the title is asking.
**Goal:** Red markers should ACCURATELY mark the text that directly answers the red question - no more, no less - just what students must say to pass that specific red requirement.

---

## SCOPE

**Applicable to:** Any topic file in the project

**Location:** `src/data/Topics/topicX.js` (where X is the topic number)

**IMPORTANT - CRITICAL LOs ONLY:**
- **ONLY** check LOs where `isCritical: true`
- Non-critical LOs (where `isCritical: false`) **NEVER** have red sections in their titles or answers
- This saves time and tokens - skip all non-critical LOs entirely

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

## EXAMPLES OF CORRECT RED MARKING

### Example 1: Definition Question

**LO Title:** >>Define the term mucociliary clearance.<<

**CURRENT (may be incomplete):**
```
>>Mucociliary clearance is the coordinated action of mucus production and ciliary movement to remove inhaled particles from the airways.<<
```

**CORRECT (complete definition):**
```
>>Mucociliary clearance is the essential defense mechanism of the respiratory tract that involves the coordinated action of mucus production and ciliary movement to remove inhaled particles, pathogens, and debris from the airways.<<
```

**Why:** A complete DEFINITION should include what it IS (defense mechanism), WHERE (respiratory tract), WHAT IT INVOLVES (mucus + cilia), and WHAT IT DOES (removes particles/pathogens/debris). All of this is part of defining the term.

---

### Example 2: Multiple Definitions

**LO Title:** >>Define the following breathing patterns: Kussmaul breathing, Cheyne-Stokes breathing, apneusia, gasping.<<

**IMPORTANT:** Since FOUR patterns are asked for in red, ALL FOUR definitions must be marked red.

**CORRECT marking:**
```
>>Kussmaul breathing is a deep, labored, and rapid breathing pattern.<< It is typically associated with metabolic acidosis, particularly diabetic ketoacidosis. The body compensates for acidosis by increasing rate and depth of breathing to expel more carbon dioxide and reduce blood acidity, representing a hyperventilation response indicating severe metabolic imbalance. >>Cheyne-Stokes breathing is a cyclical pattern characterized by gradual increase in breathing depth and rate, followed by gradual decrease, resulting in temporary apnea.<< Each cycle lasts 30 seconds to 2 minutes. It is commonly observed in congestive heart failure, stroke, traumatic brain injuries, and during sleep especially in the elderly, related to delayed central nervous system feedback to changes in blood carbon dioxide and oxygen levels. >>Apneustic breathing or apneusia is a pattern characterized by prolonged inspiratory phase followed by inadequate or insufficient expiratory phase,<< often leading to gasping or pauses at full inspiration before exhalation begins. It is typically associated with damage to the pons or upper brainstem from stroke, trauma, or neurological damage, resulting from loss of pneumotaxic center inhibition. >>Gasping is a sudden, forceful, and irregular inspiration associated with intense need for air,<< characterized by labored and jerky breathing that is often noisy. Gasping is seen in severe oxygen deprivation or the agonal state before death or during cardiac arrest, representing a reflex response when the body is severely hypoxic and struggling for oxygen.
```

**Why:** The red question asks to "Define the following breathing patterns" - plural. Therefore, ALL definitions of ALL patterns mentioned must be marked red. The associations and mechanisms are NOT definitions, so they stay unmarked.

---

### Example 3: Describe with Multiple Parts

**LO Title:** >>Describe the anatomical locations of chemoreceptors monitoring blood pO2, pCO2, and pH levels,<< explain their respective importance...

**CORRECT (complete locations with identifying details):**
```
>>Peripheral chemoreceptors are located in the carotid bodies at the bifurcation of the common carotid arteries and in the aortic bodies above and below the aortic arch. Carotid bodies are sensitive to arterial pO2, pCO2, and pH, signaling via the glossopharyngeal nerve or cranial nerve nine. Aortic bodies primarily respond to arterial pO2 only and signal via the vagus nerve or cranial nerve ten. Central chemoreceptors are located on the ventral surface of the medulla near the exit of cranial nerves nine and ten, close to the dorsal respiratory group.<< For detecting blood gas changes: oxygen detection by peripheral chemoreceptors...
```

**Why:** The red asks to "Describe the anatomical locations" - this means WHERE they are AND what identifies them (carotid vs aortic, peripheral vs central). The question specifically mentions "chemoreceptors monitoring blood pO2, pCO2, and pH levels" - so describing WHICH chemoreceptor monitors WHAT is part of the location description. However, the "importance" part is NOT in red, so the importance explanation stays unmarked.

---

## SYSTEMATIC CORRECTION PROCESS

### Step 1: Identify All CRITICAL LOs with Red Text

For the target topic(s), list ONLY the LOs where **`isCritical: true`** AND have `>>red text<<` in their titles.

**SKIP all LOs where `isCritical: false` - they never have red markers.**

**Format:**
```
Topic X:
- LO-1 (isCritical: true): >>Red portion of title...<<
- LO-3 (isCritical: true): >>Red portion of title...<<
- LO-5 (isCritical: true): >>Red portion of title...<<

Topic Y:
- LO-2 (isCritical: true): >>Red portion of title...<<
- LO-4 (isCritical: true): >>Red portion of title...<<
```

### Step 2: For Each Red-Marked LO

Create analysis in this format:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LO: [Topic X, LO-Y]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RED QUESTION: [Exact red text from title]

WHAT IS BEING ASKED: [Define? Describe location? List items?]

CURRENT RED MARKING:
[Show current text marked as red]

PROPOSED RED MARKING:
[Show minimal text that should be red]

JUSTIFICATION:
[Why the proposed marking is correct]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Step 3: Present All Corrections for Approval

Before making ANY changes, present all proposed corrections to the user for review and approval.

### Step 4: Apply Corrections

Once approved, use the Edit tool to update each examAnswer field with corrected red text markers.

---

## SPECIFIC GUIDELINES BY QUESTION TYPE

### "Define..." Questions
**Mark as red:** The complete definition sentence(s)
- If defining ONE term: Mark the full definition including what it IS, WHERE, WHAT it involves, WHAT it does
- If defining MULTIPLE terms (e.g., "Define A, B, C, D"): Mark ALL definitions, each one separately
**Don't mark:** Mechanisms WHY it occurs, clinical associations, causes (unless part of the definition itself)

### "Describe..." Questions - READ CAREFULLY!
**"Describe location":** Mark WHERE + identifying details (e.g., which chemoreceptor monitors what)
**"Describe structure":** Mark cell types, components, organization
**"Describe function":** Mark ENTIRE functional description (what it detects, HOW it works, mechanism, what it signals, importance)
**"Describe structure AND function":** Mark BOTH complete structure AND complete functional mechanism
**Don't mark:** Information not asked for in the red portion (even if important)

### "List..." Questions
**Mark as red:** Only if a specific item is highlighted in red (e.g., >>Hering-Breuer reflex<<)
**Don't mark:** The entire list unless title says >>List all...<<

### Multiple-Part Red Questions
If red portion has multiple parts (e.g., >>locations AND what they monitor<<), mark ALL parts completely.

### Compound Questions
If red says "Define X. Describe Y." - mark X definition AND Y description, keep them as separate red blocks in the answer.

---

## SPECIAL CASES

### Case 1: List with One Item Highlighted

**Title:** List reflexes (1. >>Hering-Breuer reflex,<< 2. irritant receptors, 3. J-receptors)

**Correct marking:**
- Mark ONLY the Hering-Breuer reflex description as red
- Other reflexes remain unmarked

### Case 2: Compound Red Questions

**Title:** >>Define bronchomotor tone. Describe adrenergic effects.<<

**Correct marking:**
- Mark the bronchomotor tone definition as red
- Mark the adrenergic effects description as red
- Keep them separate in the answer

### Case 3: No Red in Title (Non-Critical LOs)

**If LO has `isCritical: false`:** The LO will NEVER have red text in title or answer - skip it entirely.
**If LO has `isCritical: true` but no red in title:** The examAnswer should have NO red markers (rare case).

---

## QUALITY CHECKLIST

Before finalizing each correction, verify:

- [ ] Only processing CRITICAL LOs (`isCritical: true`) - skipped all non-critical LOs
- [ ] Red text answers the red question COMPLETELY and ACCURATELY
- [ ] Red text includes ALL parts if red question has multiple parts (e.g., "structure AND function" = both must be red)
- [ ] For "Describe function" - entire functional mechanism is marked, not just location
- [ ] For "Describe X and Y" or "Define A, B, C" - ALL items marked
- [ ] Red text would fully satisfy what the examiner is asking in the red portion
- [ ] Mechanisms/causes/examples are NOT marked red (unless specifically asked for in red)
- [ ] All red portions from title are addressed with corresponding red text in answer
- [ ] Read the red question, then read ONLY the red-marked text - does it answer the question fully?
- [ ] NO text was rewritten - ONLY marker positions changed

---

## EXECUTION WORKFLOW

1. Read this document completely
2. **Confirm target topic(s)** with user if not specified
3. Identify all CRITICAL LOs (`isCritical: true`) with red text in target topic(s)
4. **SKIP all non-critical LOs** - they never have red markers
5. Create correction analysis for each CRITICAL red-marked LO
6. Present ALL corrections to user for approval
7. Upon approval, apply corrections systematically using Edit tool
8. Verify each change before moving to next (ensure only markers moved, no text changed)
9. Provide summary of all corrections made

**Token-saving tip:** Only read and analyze critical LOs to save processing time.

---

## FILES TO MODIFY

**General path:** `/Users/peti/Documents/GitHub/physiology-app/src/data/Topics/topicX.js`

Where X is the topic number specified by the user (e.g., topic1.js, topic2.js, topic30.js, etc.)

**CRITICAL - WHAT TO MODIFY:**
- **ONLY** change the placement of `>>red markers<<` in the `examAnswer` field
- **DO NOT** rewrite, rephrase, or change ANY words in the examAnswer
- **DO NOT** touch the title - the red portions in titles must stay exactly as they are
- **DO NOT** modify keyPoints or officialDefinitions fields
- **ONLY** move the `>>` and `<<` markers to the correct positions

**Example of what you're doing:**
```
BEFORE: >>Peripheral chemoreceptors are located in the carotid bodies.<< They signal via cranial nerve nine.

AFTER: >>Peripheral chemoreceptors are located in the carotid bodies. They signal via cranial nerve nine.<<

You are ONLY moving the markers, NOT changing the text itself.
```

---

## IMPORTANT MEDICAL SAFETY NOTE

While correcting red text placement, ensure the FULL answer still contains all medically accurate information. We're only changing WHAT is marked red, not removing or adding content. The complete answer must remain comprehensive for student learning.

**Student perspective:**
- Red text = "This is what the examiner specifically asked for in the red portion - I MUST say this to pass"
- Non-red text = "Additional important information that completes my answer - good to know and may be asked in follow-up, but not the primary red question"

**The test:** If you only read the red-marked portions, you should have a complete answer to the red question. If you read the entire answer, you understand the full topic.

---

## STARTING COMMAND

When ready to execute this task, begin with:

1. "I will now identify all CRITICAL red-marked LOs in [specify topic(s)] (skipping non-critical LOs) and create correction proposals."
2. Generate the analysis for all affected CRITICAL LOs only
3. Present for approval
4. Execute corrections

## REAL-WORLD EXAMPLES

### Example 1: "Describe structure AND function"
**LO Title:** >>Describe the structure and function of peripheral chemoreceptors.<<
**What's asked:** BOTH structure AND function (complete mechanism)
**Correction:** Marked ENTIRE answer red because question asks for BOTH structure AND complete functional mechanism (signal transduction pathway, neural connections, not just cell types).

### Example 2: "Describe function"
**LO Title:** >>Describe the function of central chemoreceptors.<<
**What's asked:** The FUNCTION (not just location)
**Correction:** Marked ENTIRE answer red including location context, sensitivity, mechanism, signaling pathway, and importance for breathing control. "Describe function" requires the complete functional description.

### Example 3: "Describe locations of [things] monitoring X, Y, Z"
**LO Title:** >>Describe the anatomical locations of chemoreceptors monitoring the blood pO2, pCO2, and pH levels,<<
**What's asked:** Locations AND identification of what monitors what
**Correction:** Marked locations AND which chemoreceptor monitors which gases (part of describing their locations in context).

### Example 4: "Define multiple terms"
**LO Title:** >>Define the following breathing patterns: Kussmaul breathing, Cheyne-Stokes breathing, apneusia, gasping.<<
**What's asked:** Definitions of ALL FOUR patterns
**Correction:** Marked ALL FOUR definitions separately throughout the answer. Each pattern's definition is red, but mechanisms/causes are not.

---

**Document created:** 2025-01-02
**Last updated:** 2025-01-02
**Purpose:** Correct inaccurate red text marking in examAnswer fields to precisely match what the red question asks
**Applicable to:** Any topic in the project (CRITICAL LOs only - skip non-critical)
**Principle:** Red text = ACCURATE and COMPLETE answer to the red question - mark exactly what the red portion asks for, nothing more, nothing less
