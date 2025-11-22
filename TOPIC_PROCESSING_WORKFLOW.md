# PHYSIOLOGY TOPIC PROCESSING WORKFLOW

## Overview

This guide provides step-by-step instructions for processing new physiology topics (currently 33-36, eventually up to 122 topics). It **references** but does NOT replace the original instruction files that define quality standards and detailed rules.

**Purpose:** Organize the workflow so processing can be done efficiently while maintaining the highest quality standards.

**Processing Strategy:**
- **Phase 1:** Bulk processing (all topics together)
- **Phase 2A onwards:** One topic at a time for quality control

---

## Required Instruction Files

These files are the **source of truth** and must NEVER be modified. They are located in the project root:

1. **`OPTIMIZE_ANSWERS.md`**
   - Defines exam answer optimization principles
   - Medical safety rules (complete > concise)
   - When to use: Phase 2A (Optimization)

2. **`FORMATTING_RULES.md`**
   - Defines structured formatting types (paragraph, list, steps)
   - When to use: Phase 2B (Formatting)

3. **`RED_TEXT_CORRECTION_INSTRUCTIONS.md`**
   - Instructions for marking red text in simple string format
   - When to use: Reference during optimization

4. **`RED_TEXT_CORRECTION_INSTRUCTIONS_FORMATTED.md`**
   - Instructions for marking critical text in formatted structure
   - When to use: Phase 2B (Formatting)

---

## PHASE 1: Bulk Setup (Process All Topics Together)

**Goal:** Get all new topic files integrated into the app and visible to students.

**When:** At the start when processing multiple topics (e.g., topics 33-36).

### Step 1: Copy Topic Files

**Input:** Topic files from Downloads folder (provided by professor)

**Action:**
```bash
# User copies files manually to:
/Users/peti/Documents/GitHub/MedLearn-Unified/client/src/apps/physiology/data/Topics/
```

**Files to copy:** `topic33.js`, `topic34.js`, `topic35.js`, `topic36.js`, etc.

**Verify:** Files contain base structure:
- `id`, `mcqs`, `number`, `title`, `subtitle`
- `learningObjectives` array with all LOs
- `referenceValues` (if applicable - not all topics have these)

---

### Step 2: Update Topic Index

**File:** `/Users/peti/Documents/GitHub/MedLearn-Unified/client/src/apps/physiology/data/Topics/index.js`

**Action:** Add import and export for new topics

**Example:**
```javascript
import topic33 from './topic33';
import topic34 from './topic34';
import topic35 from './topic35';
import topic36 from './topic36';

const topics = [
  topic1,
  // ... existing topics ...
  topic32,
  topic33,
  topic34,
  topic35,
  topic36,
];

export default topics;
```

**Verify:** No syntax errors, all topics exported in order.

---

### Step 3: Update MCQ Filter Mappings

**File:** `/Users/peti/Documents/GitHub/MedLearn-Unified/client/src/apps/physiology/components/HomePage.js`

**Action:** Update the `mcqFilterOptions` array to include new topic ranges.

**MCQ Mapping Logic:**
- Each topic has an `mcqs` field (e.g., `mcqs: 'mcq-5'`)
- MCQ filters group topics by these identifiers
- Example: `mcq-5` might include topics 29-32
- New topics extend existing filters or create new ones

**Example Update:**
```javascript
const mcqFilterOptions = [
  { value: 'mcq-1', label: 'Topics 1-5', range: [1, 5] },
  { value: 'mcq-2', label: 'Topics 6-10', range: [6, 10] },
  // ... existing filters ...
  { value: 'mcq-6', label: 'Topics 33-36', range: [33, 36] }, // NEW
];
```

**Verify:**
- Each topic's `mcqs` value matches a filter
- Filter labels accurately reflect topic ranges
- No topics left unmapped

---

### Step 4: Run Python Script for Official Definitions

**File:** `/Users/peti/Documents/GitHub/MedLearn-Unified/process_topics.py`

**Purpose:** Insert `officialDefinitions` from professor-provided definition files into topic.js files.

**Prerequisites:**
- Topic files (topic33.js, etc.) must be in place
- Official definition text files must be in `/Users/peti/Downloads/` (one per topic)

**Action:**
```bash
cd /Users/peti/Documents/GitHub/MedLearn-Unified
python3 process_topics.py
```

**What the script does:**
1. Reads definition text files from Downloads
2. Parses definitions (numbered list format)
3. Inserts into topic.js files as `officialDefinitions` arrays
4. **Creates triple-backslash escaping** (e.g., `\\\\'`) - this is intentional

**Output:** Topic files updated with `officialDefinitions` populated.

**⚠️ CRITICAL:** Do NOT modify the Python script's escaping logic (line 221). It's a proven approach that requires manual post-processing.

---

### Step 5: Fix Triple-Backslash Escaping

**Issue:** Python script creates `\\\\'` (triple backslash) for apostrophes, which is incorrect JavaScript syntax.

**Required Fix:** Manually change all `\\\\'` to `\\'` (single backslash).

**Method:**
Use Find & Replace in topic files:
- **Find:** `\\\\'` (four characters: three backslashes + apostrophe)
- **Replace:** `\\'` (two characters: one backslash + apostrophe)

**Files to fix:**
- `topic33.js`
- `topic34.js`
- `topic35.js`
- `topic36.js`

**Verify:** Search for `\\\\` in files - should return no results after fix.

---

### Step 6: Verify Topics Visible in Browser

**Action:** Start development server and test

```bash
cd client
npm run dev
```

**Check:**
1. **Home page:** All new topics appear in topic list
2. **MCQ filters:** New topics appear when filtering by their MCQ category
3. **Individual topic pages:** Navigate to each topic (e.g., `/physiology/topic/33`)
4. **No console errors:** Check browser console for JavaScript errors

**Fix common issues:**
- White page = syntax error (check console)
- Topics not visible = index.js not updated or syntax error
- MCQ filter broken = check mcqs field matches filter value

---

### Phase 1 Completion Checklist

- [ ] All topic files copied to Topics folder
- [ ] Topic index updated with imports/exports
- [ ] MCQ filters updated and topics mapped
- [ ] Python script run successfully
- [ ] Triple-backslash escaping fixed in all topics
- [ ] All topics visible in browser
- [ ] No console errors

**After Phase 1:** All topics are integrated and visible. Ready for optimization (one topic at a time).

---

## PHASE 2A: Exam Answer Optimization (ONE TOPIC AT A TIME)

**Goal:** Optimize exam answers to be memorizable (20-30 seconds) while maintaining complete medical accuracy.

**Instruction File:** `OPTIMIZE_ANSWERS.md` (follow it word-for-word)

**Critical Rules:**
- Medical accuracy is PARAMOUNT
- Complete > concise (when in doubt, keep content)
- Every examAnswer must COMPLETELY answer its Learning Objective
- Red text (`>>markers<<`) are CRITICAL exam requirements
- Process ONE topic at a time for quality control

---

### Step 1: Read Current Topic File

**Example:** Working on Topic 33

**Action:** Read the entire topic file to understand all Learning Objectives

```bash
Read: /Users/peti/Documents/GitHub/MedLearn-Unified/client/src/apps/physiology/data/Topics/topic33.js
```

**Analyze:**
- How many LOs total? (e.g., Topic 33 has 7 LOs)
- Which are critical vs non-critical?
- What does each LO ask for? (Define, Describe, List, etc.)
- Are there red text markers (`>>text<<`) in LO titles?

---

### Step 2: Follow OPTIMIZE_ANSWERS.md Process

**Read:** `OPTIMIZE_ANSWERS.md` - this is the authoritative guide

**Follow the exact workflow:**

1. **Review Guidelines** (lines 6-12 in OPTIMIZE_ANSWERS.md)
   - Medical safety rules
   - Red text priority
   - Optimization principles

2. **Analyze All LOs** (line 19-22)
   - Read entire topic
   - Analyze all Learning Objectives together
   - Understand relationships between LOs

3. **Present Optimization Plan** (lines 24-41)
   - For EACH LO, provide analysis in specified format:
     ```
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     LO-[X]: [Critical: YES/NO]
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     TITLE: [full title with >>red markers<<]

     ANALYSIS:
     ✓ Keeps: [what must be preserved]
     ✗ Removes: [unnecessary content]
     ⚠ Improves: [using officialDefinitions if needed]

     OPTIMIZED (Y words, -Z%): [optimized text]

     RED TEXT: [confirm correct portion marked]
     SAFETY: [confirm all critical elements preserved]
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     ```

4. **Present Summary** (lines 43-54)
   - Total LOs count
   - Total word reduction
   - Medical accuracy confirmation
   - Student benefit

5. **Wait for User Approval**
   - User reviews optimization plan
   - User may request revisions to specific LOs
   - Only proceed after explicit "yes" or "approved"

---

### Step 3: Apply Approved Optimizations

**After user approval:**

**Action:** Update the topic file's `examAnswer` fields with optimized text

**Important:**
- Only update the `examAnswer` field (still as simple string)
- Do NOT format yet (that's Phase 2B)
- Preserve `>>red markers<<` exactly as in optimization plan
- Keep all other fields unchanged (keyPoints, officialDefinitions, etc.)

**Example:**
```javascript
{
  id: 'lo-1',
  isCritical: true,
  title: 'Define >>flow and velocity<< in the context of the circulation.',
  keyPoints: [...], // UNCHANGED
  officialDefinitions: [...], // UNCHANGED
  examAnswer: 'OPTIMIZED TEXT HERE with >>red markers<<' // UPDATED
}
```

---

### Step 4: Medical Accuracy Verification

**Before moving to next topic, verify** (from OPTIMIZE_ANSWERS.md lines 98-107):

- [ ] Multi-part LO fully answered (check each part)
- [ ] Red text marks precise answer to red LO portion
- [ ] No medical terminology lost or altered
- [ ] Mechanisms explained sufficiently (not just "it occurs")
- [ ] Clinical significance preserved when relevant
- [ ] Answer passable by examiner standards
- [ ] Speakable fluently in 20-30 seconds
- [ ] Can be perfectly processed by ElevenLab's text-to-speech

---

### Step 5: Save and Move to Next Topic

**Action:** Save the optimized topic file

**Next:** Move to next topic (e.g., Topic 33 done → start Topic 34)

**Do NOT:**
- Batch process multiple topics' optimization
- Skip the approval step
- Modify instruction files

---

### Phase 2A Completion Checklist (Per Topic)

- [ ] Read and analyzed entire topic file
- [ ] Followed OPTIMIZE_ANSWERS.md workflow exactly
- [ ] Presented optimization plan for all LOs
- [ ] Received user approval
- [ ] Applied optimizations to topic file
- [ ] Verified medical accuracy checklist
- [ ] Saved topic file
- [ ] Ready for Phase 2B (Formatting)

---

## PHASE 2B: Exam Answer Formatting (ONE TOPIC AT A TIME)

**Goal:** Convert optimized exam answers from simple strings to structured formatted objects.

**Instruction Files:**
- `FORMATTING_RULES.md` (structure types and rules)
- `RED_TEXT_CORRECTION_INSTRUCTIONS_FORMATTED.md` (critical text marking)

**Critical Rules:**
- Process ONE topic at a time
- Only format AFTER optimization is complete
- Preserve optimized content exactly
- Apply structure types: paragraph, list, steps
- Mark critical text ONLY in critical LOs

---

### Step 1: Read Optimized Topic File

**Action:** Read the topic file with optimized exam answers

**Verify:**
- All examAnswers are optimized (from Phase 2A)
- Still in simple string format (not yet formatted)
- Red markers (`>>text<<`) present where applicable

---

### Step 2: Follow FORMATTING_RULES.md

**Read:** `FORMATTING_RULES.md` - defines structure types

**Structure Types:**

1. **`type: 'paragraph'`** - Standard text block
   - Use for: Explanatory text, definitions, descriptions
   - Can be marked `critical: true` if contains red text answer

2. **`type: 'list'`** - Bulleted list
   - Use for: Multiple items, factors, characteristics (unordered)
   - Each item in `items` array

3. **`type: 'steps'`** - Numbered sequential steps
   - Use for: Processes, mechanisms, sequences (ordered)
   - Each step in `items` array

**Decision Tree:**
- Content is sequential/process? → `steps`
- Content is multiple items (unordered)? → `list`
- Content is explanatory text? → `paragraph`

---

### Step 3: Determine Critical Text Portions

**Read:** `RED_TEXT_CORRECTION_INSTRUCTIONS_FORMATTED.md`

**Rule:** Mark `critical: true` ONLY for text portions that directly answer red text (`>>marked<<`) portions of LO titles.

**Only for critical LOs:**
- If LO has `isCritical: true` AND title contains `>>red text<<`
- Identify which formatted portion(s) answer the red text
- Mark those portion(s) with `critical: true`

**For non-critical LOs:**
- Never use `critical: true` in formatted portions
- Even if LO is marked `isCritical: true` but title has no red text

**Example:**
```javascript
// LO title: "Define >>flow and velocity<< in the context of circulation."
// isCritical: true

examAnswer: {
  formatted: [
    {
      type: 'paragraph',
      content: 'Flow is the volume of fluid... Velocity is the speed...',
      critical: true // ← Answers the >>flow and velocity<< portion
    },
    {
      type: 'paragraph',
      content: 'In the context of circulation, these concepts relate...'
      // No critical: true (additional context, not direct answer to red text)
    }
  ],
  raw: '>>Flow is the volume of fluid... Velocity is the speed...<< In the context...'
}
```

---

### Step 4: Format All LOs in Topic

**For EACH Learning Objective:**

1. **Analyze content structure**
   - Does it contain sequential steps?
   - Does it list multiple items?
   - Is it explanatory paragraphs?
   - Mix of above?

2. **Create formatted array**
   - Break content into logical portions
   - Assign appropriate type (paragraph/list/steps)
   - Mark critical portions if applicable

3. **Create raw version**
   - Copy the optimized text exactly
   - Preserve `>>red markers<<` around critical answer portions
   - This is for TTS (text-to-speech) processing

4. **Replace examAnswer field**
   ```javascript
   // BEFORE (Phase 2A):
   examAnswer: 'Optimized text here...'

   // AFTER (Phase 2B):
   examAnswer: {
     formatted: [
       { type: 'paragraph', content: '...', critical: true },
       { type: 'list', items: ['...', '...'] }
     ],
     raw: '>>Critical text here...<< Additional text...'
   }
   ```

---

### Step 5: Quality Verification

**Check each formatted LO:**

- [ ] Formatted content matches optimized content (no changes to wording)
- [ ] Structure types appropriate (paragraph/list/steps)
- [ ] Critical markings only in critical LOs
- [ ] Critical markings only on portions answering red text
- [ ] Raw version has `>>markers<<` in correct positions
- [ ] Raw version identical to formatted content (just different format)
- [ ] No nested structures (e.g., list inside paragraph)

---

### Step 6: Browser Verification

**Action:** View topic in browser to verify formatting displays correctly

```bash
cd client
npm run dev
# Navigate to /physiology/topic/33 (or current topic number)
```

**Check:**
- Paragraphs render as text blocks
- Lists render as bulleted items
- Steps render as numbered items (with visible numbers)
- Critical text appears highlighted/styled
- No display errors or missing content

**Common CSS Issues:**
- Numbered steps not visible? Check `.formattedSteps` has `list-style-type: decimal`

---

### Step 7: Save and Move to Next Topic

**Action:** Save formatted topic file

**Next:** Move to next topic (e.g., Topic 33 done → start Topic 34)

**Phase 2B Complete:** Topic is now fully optimized and formatted (no audio yet)

---

### Phase 2B Completion Checklist (Per Topic)

- [ ] Read optimized topic file
- [ ] Followed FORMATTING_RULES.md for structure types
- [ ] Applied RED_TEXT_CORRECTION_INSTRUCTIONS_FORMATTED.md for critical markings
- [ ] Formatted all LOs in topic
- [ ] Created both formatted and raw versions
- [ ] Verified quality (content matches, structure appropriate)
- [ ] Tested in browser (displays correctly)
- [ ] Saved topic file
- [ ] Ready for Phase 3 (Audio) or next topic

---

## PHASE 3: Audio Files (Future Implementation)

**Status:** Not yet implemented

**Placeholder for future audio generation workflow**

---

## Processing Order Example

**Scenario:** Processing Topics 33-36

### Round 1: Bulk Setup
1. **Phase 1:** Process all topics 33-36 together (copy, index, MCQ, Python, escaping, verify)
   - ✅ All topics visible in browser

### Round 2: Topic-by-Topic Processing
2. **Phase 2A:** Optimize Topic 33 → approval → done
3. **Phase 2B:** Format Topic 33 → verify → done
4. ✅ **Topic 33 complete** (no audio)

5. **Phase 2A:** Optimize Topic 34 → approval → done
6. **Phase 2B:** Format Topic 34 → verify → done
7. ✅ **Topic 34 complete** (no audio)

8. **Phase 2A:** Optimize Topic 35 → approval → done
9. **Phase 2B:** Format Topic 35 → verify → done
10. ✅ **Topic 35 complete** (no audio)

11. **Phase 2A:** Optimize Topic 36 → approval → done
12. **Phase 2B:** Format Topic 36 → verify → done
13. ✅ **Topic 36 complete** (no audio)

### Later: Audio
14. **Phase 3:** Add audio to Topics 33-36 (process TBD)

---

## Lessons Learned & Best Practices

### From Topic 33 Processing Session:

1. **Optimization MUST come before formatting**
   - Never format before optimizing
   - Quality control requires separate phases
   - Rushed formatting = loss of medical accuracy

2. **Python script escaping is permanent**
   - Triple-backslash (`\\\\'`) output is expected
   - Manual fix with Find & Replace is required step
   - Do NOT modify Python script (proven approach)

3. **One topic at a time for quality**
   - Batch processing OK for Phase 1 setup
   - Individual processing required for optimization/formatting
   - Prevents errors from cascading across topics

4. **User approval is critical**
   - Always present optimization plan before applying
   - Wait for explicit approval
   - User may catch over-optimization (e.g., Topic 33 LO-7 revision)

5. **Medical accuracy is non-negotiable**
   - When in doubt: complete > concise
   - Preserve all reference values, mechanisms, terminology
   - Students will FAIL exams if content is incomplete

6. **Red text marking is precise**
   - In raw: `>>markers<<` around critical answer
   - In formatted: `critical: true` ONLY on portions answering red LO text
   - Non-critical LOs never get `critical: true` in formatted

7. **Browser verification is essential**
   - Always test after major changes
   - Catch CSS issues early (e.g., numbered steps not visible)
   - Verify content displays as intended

8. **Document everything**
   - This workflow took months to perfect
   - Every detail matters for consistency
   - Future automation depends on precise documentation

---

## Quick Reference Commands

```bash
# Start development server
cd client
npm run dev

# Run Python script for official definitions
cd /Users/peti/Documents/GitHub/MedLearn-Unified
python3 process_topics.py

# Find & Replace for escaping fix
Find: \\\\'
Replace: \\'
```

---

## Current Progress Tracking

**Topics 33-36 Status:**

| Topic | Phase 1 | Phase 2A | Phase 2B | Phase 3 | Status |
|-------|---------|----------|----------|---------|--------|
| Topic 33 | ✅ | ✅ | ✅ | ⏸️ | Complete (no audio) |
| Topic 34 | ✅ | ⏸️ | ⏸️ | ⏸️ | Ready for optimization |
| Topic 35 | ✅ | ⏸️ | ⏸️ | ⏸️ | Ready for optimization |
| Topic 36 | ✅ | ⏸️ | ⏸️ | ⏸️ | Ready for optimization |

**Next Action:** Process Topic 34 Phase 2A (Optimization)

---

## Notes

- **Reference values:** Not all topics have them. When present, they come with original topic.js file from professor.
- **Instruction files:** Never modify. They are the source of truth.
- **Quality over speed:** Take time to get it right. Students depend on this for exam success.
- **Consistency matters:** Students are used to current format/quality. Maintain standards.

---

**End of Workflow Guide**
