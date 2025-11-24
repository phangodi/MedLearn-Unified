# PHASE 2A OPTIMIZATION - SESSION INITIALIZATION PROMPT

**Copy and paste this entire prompt at the start of each new optimization session.**

---

## CONTEXT

You are continuing Phase 2A (optimizing exam answers) for physiology topics in the MedLearn-Unified project. You are preparing medical students at University of Szeged for oral exams where they must memorize and recite answers in 20-30 seconds.

**Branch:** `physiology-update-41-51`
**Repository:** `/Users/peti/Documents/GitHub/MedLearn-Unified`

---

## CRITICAL: READ THESE GUIDES FIRST

Before processing any topics, you MUST read these three guides in order:

1. **EXAM_ANSWER_OPTIMIZATION_INSIGHTS.md** (Primary guide - read completely)
   - Location: `/Users/peti/Documents/GitHub/MedLearn-Unified/EXAM_ANSWER_OPTIMIZATION_INSIGHTS.md`
   - This contains the refined optimization methodology
   - Pay special attention to: Decision trees, special scenarios, real examples from Topic 48

2. **OPTIMIZE_ANSWERS.md** (Core principles)
   - Location: `/Users/peti/Documents/GitHub/MedLearn-Unified/OPTIMIZE_ANSWERS.md`
   - Foundational optimization principles

3. **PHYSIOLOGY_TOPIC_UPDATE_GUIDE.md** (Phase 2A workflow, lines 282-447)
   - Location: `/Users/peti/Documents/GitHub/MedLearn-Unified/PHYSIOLOGY_TOPIC_UPDATE_GUIDE.md`
   - Read lines 282-447 for Phase 2A procedures

**After reading all three guides, confirm you've read them and state you're ready to begin.**

---

## THE ONE DECISION CRITERION

**This principle supersedes all others:**

### "Does this content DIRECTLY answer the Learning Objective?"

**NOT:**
- "Is it in officialDefinitions?" (they can be incomplete)
- "Does it hit X% reduction target?" (% is GUIDELINE not TARGET)
- "Is it in keyPoints?"

**ASK FOR EVERY SENTENCE:**
1. Does the LO explicitly ask for this information?
2. Is this necessary to completely answer what's asked?
3. If removed, would the answer be incomplete?

If NO to all three → **CUT IT**

---

## MEDICAL SAFETY RULES (CRITICAL - Students FAIL if incomplete)

- **ALL reference values with units MUST be preserved**
- **ALL official terminology MUST be preserved**
- **ALL formulas MUST be preserved** (complete equations)
- **ALL mechanisms MUST be preserved** (when LO asks "Describe/Explain")
- **ALL components MUST be preserved** (when LO says "List...")
- **ALL parts of multi-part questions MUST be answered**
- **Red text (>>marked<<) in LOs are CRITICAL exam requirements**
- **When in doubt: complete > concise**

---

## WHAT YOU MUST ALWAYS DO

### 1. Identify ALL Parts of the Learning Objective

Multi-part LOs are common. Missing ANY part = incomplete answer = student fails.

**Example:**
```
">>Describe origin, neurotransmitter, receptor.<< What is significance?
Give examples where significant (skin, muscle, splanchnic) and negligible
(coronary, brain, kidney)"
```

**Required parts:** (1) Origin, (2) NT, (3) Receptor, (4) Significance, (5) 3 significant organs, (6) 3 negligible organs = **9 components total**

### 2. Use officialDefinitions Wording When It Flows Naturally

- officialDefinitions contain authoritative wording from textbooks/slides
- Students recognize and trust this wording
- Use exact phrasing when it sounds natural for oral speech
- **BUT:** officialDefinitions can be incomplete (extraction errors, scan gaps)
- **NEVER remove content just because it's "not in officialDefinitions"**
- Decision criterion: Does the LO ask for it? If YES → keep it

### 3. Maintain Natural Oral Speech Flow

- This is for **ORAL exams** - students speak these answers aloud
- Fluent, natural tone is GOOD and aids memorization
- Don't sound like bullet points - sound like an expert explaining
- Think: "How would a physician explain this verbally to a colleague?"

### 4. Keep TTS Formatting

**Spell out for ElevenLabs text-to-speech:**
- Values: "60 to 80 millimeters mercury" NOT "60-80 mmHg"
- Cranial nerves: "cranial nerve nine" NOT "CN IX"
- Chemicals: "partial pressure of oxygen" NOT "PO₂"
- Formulas: "which equals mean arterial pressure minus intracranial pressure"

---

## WHAT YOU MUST ALWAYS ELIMINATE

1. **Restating the question as introduction**
   - ❌ "Hypoxia and hypercapnia disrupt homeostasis and trigger reflexes..."
   - ✅ "Peripheral chemoreceptors are located in..."

2. **Explanations of WHY/PURPOSE (unless asked)**
   - "Describe" = WHAT happens (no WHY needed)
   - "Explain" = HOW/WHY it happens (include mechanisms)
   - ❌ "to shunt blood toward vital organs" (explains WHY)
   - ✅ "peripheral vasoconstriction except in brain and heart" (states WHAT)

3. **Redundant transitions**
   - ❌ "Furthermore," "Moreover," "In addition,"
   - ❌ "It is important to note that..."
   - ✅ Natural flow with "and" and logical progression

4. **Details beyond LO scope**
   - If LO says "characterize," give key features, not exhaustive detail
   - If LO says "define," give definition, not clinical applications

---

## MANDATORY WORKFLOW

**NEVER skip these steps:**

1. **Read entire topic file** (all learningObjectives together)

2. **Analyze each LO** using this format:
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LO-[X]: Critical: YES/NO [⚠️ VERY LONG if >300 words]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TITLE: [full title with >>red markers<<]

CURRENT: [word count]

LO ANALYSIS:
- What it asks: [main question and ALL parts]
- Required parts: [checklist - (1) A, (2) B, etc.]
- What to preserve: [values, mechanisms, terms]
- What to cut: [redundancy, verbose setup, over-explanation]

OPTIMIZED ([new count] words, -X%):
[optimized text with >>red markers<<]

VERIFICATION:
✓ [all required components]
✓ [all reference values]
✓ [natural oral speech flow]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

3. **Present optimization plan for ALL LOs** in topic

4. **Provide summary:**
```
TOPIC [X] SUMMARY
Total LOs: X (Y critical, Z non-critical)
Word Count Reduction: [list each LO]
TOTAL: X → Y words (-Z%)
Medical Accuracy: ✓ [all values/formulas/mechanisms]
Quality Verification: ✓ [checklist]
Student Benefit: [specific improvements]

READY TO APPLY? (wait for approval)
```

5. **WAIT FOR USER APPROVAL** before applying any changes

6. **Apply all optimizations** using Edit tool

7. **Provide verification summary** with word counts

---

## SPECIAL SCENARIOS

### LO Has Numbered Parts (1. 2. 3. 4.)
→ Use "First... Second... Third... Fourth..." structure in answer

### Very Long LO (>300 words)
→ Investigate: What does LO ACTUALLY ask? Often can reduce 40-60%

### LO Says "Define"
→ Give definitions only, cut clinical significance (unless part of definition)

### LO Says "Describe" vs "Explain"
→ Describe = WHAT (cut WHY/purpose), Explain = HOW/WHY (keep mechanisms)

### officialDefinitions Seems Incomplete
→ Use as foundation but fill gaps. NEVER cut content just because it's "not in officialDefinitions"

---

## QUALITY CHECKPOINTS

Before finalizing, verify:
- [ ] Every part of LO fully answered
- [ ] All reference values with units present
- [ ] All mechanisms complete (if asked)
- [ ] Reads naturally when spoken aloud
- [ ] No restating question as intro
- [ ] No over-explaining WHY (unless asked)
- [ ] Could student pass exam with this answer?

---

## YOUR TASK

Process topics **[specify which topics, e.g., "48-51"]** using this methodology.

For each topic:
1. Read the topic file completely
2. Analyze all LOs using the format above
3. Present optimization plan with summary
4. Wait for approval
5. Apply approved changes
6. Verify and report results

**Consistency is critical** - we're processing 122 topics across multiple sessions. Your optimization quality must be identical in every session.

---

## REMEMBER

- **The goal is NOT to make answers shorter**
- **The goal is to make answers students can memorize, recite naturally, and use to pass oral exams**
- **Every word must serve the learning objective**
- **Complete > Concise**
- **Accurate > Brief**
- **Natural > Choppy**

---

**After reading all guides, confirm you're ready and ask which topics to process.**
