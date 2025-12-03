# Physiology MTO Question Import Skill

Import and categorize MCQ questions from markdown files into the physiology question database.

## Trigger

Use when user provides a path to an MD file containing physiology MCQ questions, or mentions:
- "import questions"
- "add MCQ questions"
- "process physiology exam"
- "extract questions from"

## Input Format

The MD file should contain questions in this format:

```markdown
## EXAM: {TestID}

### Question {N}
**{Question text}** *(X correct answer(s))*

a) Option A text
b) Option B text
c) Option C text
d) Option D text
e) Option E text

**Answer: {letter(s)}**
```

## Process

### Step 1: Parse the MD File
1. Read the file at the provided path
2. Extract test ID from header (e.g., "0313014645")
3. Parse each question block to extract:
   - Question number
   - Question text
   - Number of correct answers
   - All options (letter and text)
   - Correct answer(s)

### Step 2: Topic Categorization (Two-Pass Verification)

For EACH question, perform topic matching:

**Pass 1 - Initial Categorization:**
- Analyze the question text and all options
- Consider medical terminology, physiological concepts
- Reference the 122 topic titles from `/physiology_learning_objectives.md`
- Suggest 1-3 most likely topics with confidence scores

**Pass 2 - Verification:**
- For each suggested topic, read the detailed learning objectives
- Verify the question directly tests content from those objectives
- Confirm or reject each suggestion
- If no confident match, flag as "needs-review"

**Topic Matching Criteria:**
- Question must DIRECTLY test content from the topic's learning objectives
- Look for specific terms, formulas, values that match
- Consider which physiology system the question relates to
- Multiple topics are valid if question spans concepts

### Step 3: Build Question Objects

For each parsed question, create a JSON object:

```typescript
{
  id: "q-{testId}-{questionNum}",
  testId: "{testId}",
  questionNumber: {N},
  text: "{Question text}",
  correctAnswerCount: {X},
  options: [
    { letter: "a", text: "{Option A}" },
    // ...
  ],
  correctAnswers: ["{letter(s)}"],
  topics: [{matched topic numbers}],
  mcqs: ["{derived MCQ IDs}"],
  metadata: {
    importedAt: "{ISO timestamp}",
    matchedBy: "ai-verified" | "needs-review",
    matchConfidence: {0-1}
  }
}
```

### Step 4: Save to Firebase

Import questions directly to Firestore `mtoQuestions` collection:

```typescript
// For each question, create a document with:
{
  text: "Question text",
  textNormalized: "question text normalized for deduplication",
  correctAnswerCount: 2,
  options: [{ letter: "a", text: "..." }, ...],
  correctAnswers: ["a", "c"],
  topics: [46, 48],
  mcqs: ["mcq-3"],  // Auto-derived from topics
  status: "active",
  legacyId: "q-{testId}-{questionNum}",  // CRITICAL for explanations
  contentHash: "hash for deduplication",
  matchedBy: "learning-objectives",
  matchConfidence: 1.0,
  matchReason: "Topic X: 'specific learning objective text'",
  createdAt: Timestamp.now(),
  createdBy: "import-script",
  updatedAt: Timestamp.now(),
  updatedBy: "import-script"
}
```

Use the migration script:
```bash
# Dry run (test without writing):
npx ts-node --esm client/scripts/migrate-questions-to-firebase.ts --dry-run

# Live run (ALWAYS use this - imports ALL questions):
npx ts-node --esm client/scripts/migrate-questions-to-firebase.ts
```

**IMPORTANT:** NEVER use --skip-duplicates! Deduplication happens at query time, not import time. Test ID mode must show ALL questions from that test.

**CRITICAL:** The `legacyId` field must be set correctly as this links to explanations in `questionExplanations` collection.

### Step 4B: JSON Backup (Optional)

For backup, also save to: `client/src/apps/physiology/data/questions/by-test-id/{testId}.json`

### Step 5: Report Results

Output a summary:
- Total questions processed
- Questions successfully categorized
- Questions flagged for review (list them)
- Topics covered
- Any errors encountered

## MCQ Exam Mapping

Use these MCQ-to-topic mappings:
- MCQ I: Topics 1-7, 17-24 (Control theory, membrane, nerve/muscle)
- MCQ II: Topics 8-16, 25-32 (Blood, respiratory)
- MCQ III: Topics 33-58 (Cardiovascular, renal)
- MCQ IV: Topics 59-76 (Digestive, metabolic)
- MCQ V: Topics 77-94 (Endocrine)
- MCQ VI: Topics 95-122 (Reproductive, special senses)

## Topic Reference

The 51 currently implemented topics:
1. Principles of control theory
2. Passive transport mechanisms
3. Active transport mechanisms
4. Resting membrane potential
5. Electric properties of neuronal membranes
6. Axonal propagation of action potential
7. Receptors, signal transduction
8. Fluid compartments, blood plasma
9. General features of RBCs
10. Erythropoiesis
11. Hemoglobin degradation, bilirubin
12. White blood cell physiology
13. ABO and Rh blood groups
14. Primary hemostasis
15. Secondary hemostasis
16. Fibrinolysis, coagulation inhibition
17. Synaptic transmission
18. Neuromuscular junction
19. Skeletal muscle contraction
20. Mechanics of skeletal muscle
21. Smooth muscle
22. Somatosensory: receptors/pathways
23. Somatosensory: central processing
24. Physiology of pain
25. Mechanics of breathing
26. Pulmonary circulation, gas exchange
27. O2 and CO2 transport
28. Regulation of breathing
29. Hypoxia
30. Airway resistance, lung compliance
31. Ventilation-perfusion ratio
32. Lung volumes and capacities
33. General circulatory hemodynamics
34. Arterial blood pressure
35. Properties of heart muscle
36. Cardiac cycle
37. Cardiac output
38. Electrocardiography
39. Capillaries, transcapillary exchange
40. Venous system
41. Microcirculation
42. Lymphatic system
43. Short-term BP regulation
44. Long-term BP regulation
45. Renal blood flow, glomerular filtration
46. Tubular reabsorption
47. Tubular secretion
48. Renal concentration/dilution
49. ECF osmolarity regulation
50. ECF volume regulation
51. Acid-base balance

## Quality Requirements

- **Medical Accuracy**: All topic assignments must be verifiable against learning objectives
- **No Guessing**: If uncertain, flag for review rather than assign wrong topic
- **Preserve Content**: Keep all original question text, options, and answers exactly as written
- **Handle Variations**: Account for different answer formats (single "a" vs multiple "ac")

## Example Usage

User: "Import questions from /Users/peti/Downloads/Phisio_02-07.md"

Agent:
1. Reads and parses the file
2. Extracts test IDs and questions
3. Categorizes each question to topics
4. Saves to database
5. Reports: "Imported 63 questions from 2 exams. 58 categorized, 5 flagged for review."
