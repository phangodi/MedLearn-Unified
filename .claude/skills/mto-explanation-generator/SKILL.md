---
name: mto-explanation-generator
description: "Generate AI-powered explanations for MTO physiology questions. Reads questions from Firestore, uses topic JS files as source material, and saves structured explanations. Use with commands like 'generate explanations for topic 41' or 'explain questions for MCQ-3'."
allowed-tools:
  - Read
  - Grep
  - Glob
  - Bash
  - Write
  - Edit
---

# MTO Explanation Generator

Generate accurate, exam-focused explanations for MTO physiology practice questions.

## CONTEXT

You are generating explanations for **University of Szeged medical physiology MCQ questions**. These explanations help students understand:
- WHY correct answers are correct
- WHY incorrect answers are wrong
- The underlying physiology concepts

**Source Material:** Topic JS files contain official definitions, key points, and exam answers from the physiology department.

**Storage:** Questions and explanations are stored in Firebase Firestore:
- `mtoQuestions` collection - 549 migrated questions
- `questionExplanations` collection - explanations you generate

---

## FILE LOCATIONS

**Topic Files:** `client/src/apps/physiology/data/Topics/topic{number}.js`
- Topics 1-51 currently have detailed content
- Each file contains `learningObjectives` with `officialDefinitions`, `keyPoints`, and `examAnswer`

**Firebase Types:** `client/src/apps/physiology-mto/types/firebase.ts`
- `MTOQuestion` - question structure
- `QuestionExplanation` - explanation structure

**Services:**
- `client/src/apps/physiology-mto/services/firebaseQuestionsService.ts`
- `client/src/apps/physiology-mto/services/explanationsService.ts`

---

## EXPLANATION FORMAT (APPROVED)

Each explanation MUST follow this exact structure:

```typescript
{
  questionId: string;           // Firestore document ID
  correctLetters: string[];     // ["a", "c"]
  summary: string;              // 1-2 sentence overview
  whyCorrect: {
    "a": "Explanation why A is correct...",
    "c": "Explanation why C is correct..."
  },
  whyIncorrect: {
    "b": "Explanation why B is wrong...",
    "d": "Explanation why D is wrong...",
    "e": "Explanation why E is wrong..."
  },
  topicReference: string;       // "Topic 41: The microcirculation"
  sourceTopics: number[];       // [41]
  needsReview: boolean;         // true if uncertain
  reviewReason?: string;        // Why needs review
}
```

---

## QUALITY REQUIREMENTS

### 1. Medical Accuracy (CRITICAL)

- Use ONLY information from topic JS files (officialDefinitions, keyPoints, examAnswer)
- Preserve exact reference values and units
- Use official medical terminology
- If unsure, mark `needsReview: true` with reason

### 2. Concise and Exam-Focused

- Each explanation should be 1-3 sentences
- Focus on the KEY distinction that makes the answer correct/incorrect
- Don't over-explain - students need quick understanding

### 3. Consistent Style

**Good explanation:**
```
"a": "The afferent arteriole is the main site of vascular resistance control in the glomerulus. Constriction here directly reduces GFR by decreasing glomerular capillary pressure."
```

**Bad explanation (too verbose):**
```
"a": "This is correct because in the kidney, the afferent arteriole, which is the vessel that brings blood into the glomerulus, plays a crucial role in regulating the glomerular filtration rate through its ability to constrict or dilate, thereby changing the pressure..."
```

---

## WORKFLOW

### Step 1: Identify Questions to Process

When user says:
- **"Generate explanations for all questions without explanations"** → See workflow below
- "Generate explanations for test XXXXXXXX" → Process all questions in that test file
- "Generate explanations for topic 41" → Process all questions with topic 41
- "Explain questions for MCQ-3" → Process all MCQ-3 questions
- "Generate explanations for question [ID]" → Process specific question

**Test files location:** `client/src/apps/physiology/data/questions/by-test-id/XXXXXXXX.json`

#### Finding Questions Without Explanations

1. Get all question IDs from test files:
   ```bash
   ls client/src/apps/physiology/data/questions/by-test-id/
   ```
   Read each JSON file to collect all question IDs.

2. Get existing explanation IDs from explanation files:
   ```bash
   ls client/src/apps/physiology-mto/data/explanations/
   ```
   Read each JSON file to collect all `questionId` values that have been explained.

3. Find the difference - questions that have no explanation yet.

4. Process those questions (generate explanations, save, import to Firebase).

### Step 2: Read Topic Source Material

**EFFICIENCY NOTE:** Do NOT read entire topic JS files. Use your medical/physiology knowledge directly. The topic files contain standard physiology content that you already know. Only use targeted grep if you need a very specific University of Szeged reference value.

If you genuinely need to verify something specific:
```bash
Grep for the specific term in client/src/apps/physiology/data/Topics/topic{number}.js
```

Extract only what's needed:
- `officialDefinitions` - authoritative definitions
- `keyPoints` - important facts
- `examAnswer.raw` - what students should know

### Step 3: Analyze Each Question

For each question:
1. Read question text and options
2. Identify correct answer(s)
3. Find relevant content in topic file
4. Determine WHY each option is correct/incorrect

### Step 4: Generate Explanation

Create explanation following the format above.

**Mark for review if:**
- Question topic doesn't match content (possible wrong assignment)
- Cannot find supporting information in topic file
- Multiple interpretations possible
- Reference values or mechanisms unclear

### Step 5: Output for Firestore Import

Generate a JSON file that can be imported to Firestore:

```json
{
  "explanations": [
    {
      "questionId": "abc123",
      "correctLetters": ["a", "c"],
      "summary": "Brief overview...",
      "whyCorrect": { "a": "...", "c": "..." },
      "whyIncorrect": { "b": "...", "d": "...", "e": "..." },
      "topicReference": "Topic 41: The microcirculation",
      "sourceTopics": [41],
      "needsReview": false
    }
  ]
}
```

Save to: `client/src/apps/physiology-mto/data/explanations/test-XXXXXXXX-explanations.json` (for test-based) or `topic{number}-explanations.json` (for topic-based)

### Step 6: Auto-Import to Firebase

**IMPORTANT:** Immediately after saving the JSON file, run the import script:

```bash
cd /Users/peti/Documents/GitHub/MedLearn-Unified && npx ts-node --esm client/scripts/import-explanations.ts --file <filename>
```

Report the final summary including import results.

---

## EXAMPLE SESSION

**User:** "Generate explanations for test 05561187"

**You:**
1. Read the test file to get all questions
2. For each question, generate explanation using your medical knowledge
3. Save JSON file with all explanations
4. Run import script to push to Firebase
5. Report summary: "Generated 18 explanations for test 05561187. Imported to Firebase: 18. Marked for review: 0."

---

## TOPIC-TO-MCQ MAPPING

For reference, here are the MCQ assignments:

- **MCQ-1** (Topics 1-7, 17-24): Control theory, membrane, nerve, muscle
- **MCQ-2** (Topics 8-16, 25-32): Blood, respiratory
- **MCQ-3** (Topics 33-58): Cardiovascular, renal ← MAIN FOCUS (549 questions)
- **MCQ-4** (Topics 59-76): Digestive, metabolic
- **MCQ-5** (Topics 77-94): Endocrine
- **MCQ-6** (Topics 95-122): Reproductive, special senses

---

## HANDLING EDGE CASES

### Question Doesn't Match Topic Content
If question seems unrelated to its assigned topic:
```json
{
  "needsReview": true,
  "reviewReason": "Question about cardiac output assigned to Topic 41 (microcirculation) - verify topic assignment"
}
```

### Multiple Correct Answers
Some questions have 2-3 correct answers. Handle each in `whyCorrect`:
```json
{
  "correctLetters": ["a", "c", "d"],
  "whyCorrect": {
    "a": "...",
    "c": "...",
    "d": "..."
  }
}
```

### Cannot Determine Answer
If the topic file doesn't contain enough information:
```json
{
  "needsReview": true,
  "reviewReason": "Topic 41 does not contain information about precapillary sphincter innervation - needs additional source"
}
```

---

## FIRESTORE IMPORT SCRIPT

After generating explanations, they can be imported using:

```bash
# Create import script or use Firebase Admin SDK
npx ts-node client/scripts/import-explanations.ts --file topic41-explanations.json
```

---

## COMMANDS

**Generate for all missing (most common):**
```
"Generate explanations for all questions without explanations"
```
→ Queries Firebase for questions missing explanations, generates them, and imports automatically.

**Generate for test:**
```
"Generate explanations for test 05561187"
```

**Generate for topic:**
```
"Generate explanations for topic 41"
```

**Generate for MCQ:**
```
"Generate explanations for MCQ-3"
```

**Generate for specific questions:**
```
"Explain question abc123"
"Generate explanation for questions about baroreceptors"
```

**Check status:**
```
"How many questions need explanations in topic 41?"
"Show questions needing review"
```

---

## REMEMBER

1. **Medical Accuracy First** - Never guess. If unsure, mark for review.
2. **Use Source Material** - Topic JS files are your authoritative source.
3. **Be Concise** - Students need quick, clear explanations.
4. **Flag Problems** - If question seems wrong or misassigned, flag it.
5. **Consistent Format** - Follow the exact JSON structure.

This skill helps students understand their mistakes and learn physiology more effectively for their University of Szeged exams.
