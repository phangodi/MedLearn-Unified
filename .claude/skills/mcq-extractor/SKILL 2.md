# MCQ Extractor Skill

Extract multiple-choice questions from University of Szeged physiology exam screenshots/markdown files into structured JSON question bank.

---

## ⛔ CRITICAL - READ THIS FIRST ⛔

### THE ONE RULE THAT MUST NEVER BE BROKEN:

**Topic assignment is based on QUESTION CONTENT matched against LEARNING OBJECTIVES.**

- The MD file name is IRRELEVANT (ignore "mto3", "Phisio_35-43", etc.)
- The exam paper number is IRRELEVANT
- The only thing that matters: **What does THIS question test?**

### CORRECT Process:
1. Read question: "What regulates ADH secretion?"
2. Search ALL learning objectives (MCQ 1-6)
3. Find which topic covers ADH → Could be Topic 78 (MCQ-5), NOT automatically MCQ-3

### WRONG Process:
1. See file name has "mto3"
2. Assume all questions are MCQ-3
3. Assign topics 33-58 to everything ← **THIS IS WRONG**

**A single exam file can contain questions from ANY MCQ (1-6).** The file name tells you NOTHING about topic assignment.

---

## Trigger

Use when user provides a path to an MD file containing physiology MCQ questions, or mentions:
- "import questions"
- "extract MCQ"
- "process physiology exam"
- "extract questions from"
- MCQ extraction
- question bank

## CRITICAL: 3-Pass Topic Assignment Process

The previous system failed because the learning objectives file (36K+ tokens) was too large for agents to read. This skill uses **split MCQ-specific files** and a **3-pass verification process** to ensure 100% accurate topic assignments.

### File Structure

```
client/src/apps/physiology/data/learning-objectives/
  ├── topic-index.json           # Keywords for all 122 topics (~8K tokens)
  ├── mcq-1-objectives.md        # Topics 1-7, 17-24 (~6K tokens)
  ├── mcq-2-objectives.md        # Topics 8-16, 25-32 (~8K tokens)
  ├── mcq-3-objectives.md        # Topics 33-58 (~9K tokens)
  ├── mcq-4-objectives.md        # Topics 59-76 (~8K tokens)
  ├── mcq-5-objectives.md        # Topics 77-94 (~8K tokens)
  └── mcq-6-objectives.md        # Topics 95-122 (~9K tokens)
```

### Pass 1: MCQ Classification (Required)

For EACH question:
1. Read `topic-index.json`
2. Analyze the question text and options against keyword lists
3. Identify which MCQ exam(s) the question likely belongs to
4. Record the candidate MCQ(s) (e.g., "mcq-3")

**This pass determines which smaller objectives file to read.**

### Pass 2: Topic Matching (Required)

For EACH question:
1. Read ONLY the corresponding MCQ objectives file (e.g., `mcq-3-objectives.md`)
2. Analyze the question against the detailed learning objectives
3. Find the SPECIFIC topic(s) that the question tests
4. The topic MUST appear in the MCQ objectives file
5. Record the matched topic number(s) and match confidence

**IMPORTANT**: A question asking about "GFR" should be assigned to:
- Topic 52 (Glomerular filtration) - because the question content matches that topic
- NOT based on which MD file it came from

### Pass 3: Verification (Required)

For EACH question:
1. Verify the topic assignment makes sense:
   - Does the question text contain terms from the topic's learning objectives?
   - Is this the most specific topic for this content?
   - Would a medical student expect to find this question under this topic?
2. If verification fails, re-analyze with broader context
3. If still uncertain, flag as "needs-review"

## MCQ-to-Topic Mapping

```
MCQ I:   Topics 1-7, 17-24  (Control theory, membrane, nerve/muscle physiology)
MCQ II:  Topics 8-16, 25-32 (Blood, respiratory)
MCQ III: Topics 33-58       (Cardiovascular, renal)
MCQ IV:  Topics 59-76       (Digestive, metabolic, endocrine basics)
MCQ V:   Topics 77-94       (Regulation, reproduction, growth)
MCQ VI:  Topics 95-122      (Special senses, motor control, CNS)
```

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

## Process Steps

### Step 1: Parse the MD File

1. Read the file at the provided path
2. Extract test ID from header (e.g., "0313014645")
3. Parse each question block to extract:
   - Question number
   - Question text
   - Number of correct answers
   - All options (letter and text)
   - Correct answer(s)

### Step 2: 3-Pass Topic Assignment

For EACH question, execute all three passes:

**Pass 1 - MCQ Classification:**
```
Read: topic-index.json
Input: Question text + options
Output: Candidate MCQ(s) based on keywords
```

**Pass 2 - Topic Matching:**
```
Read: mcq-{N}-objectives.md (based on Pass 1)
Input: Question text + options + learning objectives
Output: Specific topic number(s) with confidence
```

**Pass 3 - Verification:**
```
Input: Question + assigned topic + objectives
Output: Verified | needs-review
```

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
    matchedBy: "3-pass-verified" | "needs-review",
    matchConfidence: {0-1},
    matchReason: "{Brief explanation of why this topic was assigned}"
  }
}
```

### Step 4: Save to Database

1. Create/update: `client/src/apps/physiology/data/questions/by-test-id/{testId}.json`
2. Update the master index: `client/src/apps/physiology/data/questions/index.json`
3. Update `client/src/apps/physiology-mto/services/questionsService.ts` with new imports

### Step 5: Report Results

Output a summary:
- Total questions processed
- Questions successfully categorized (by topic)
- Questions flagged for review (list them with reasons)
- Topic distribution
- Any errors encountered

## Quality Requirements

1. **Medical Accuracy**: Topic assignments MUST be verifiable against the learning objectives
2. **No Guessing**: If uncertain after 3 passes, flag as "needs-review"
3. **Content-Based Assignment**: Assign topics based on QUESTION CONTENT, not source file name
4. **Preserve Exact Text**: Keep all original question text, options, and answers exactly as written
5. **Handle Multiple Topics**: Some questions span multiple topics - assign all relevant topics

## WARNINGS

- **NEVER** assign topics based on the MD file name
- **NEVER** skip the 3-pass process
- **NEVER** read the full physiology_learning_objectives.md (36K+ tokens - will overflow context)
- **ALWAYS** read from the smaller MCQ-specific files

## Example Workflow

User: "Import questions from /Users/peti/Downloads/Phisio_35-43.md"

Agent:
1. Reads and parses `Phisio_35-43.md` (extracts questions)
2. For each question:
   - Pass 1: Reads `topic-index.json`, identifies keywords like "cardiac cycle", "stroke volume" -> MCQ III
   - Pass 2: Reads `mcq-3-objectives.md`, matches to Topic 36 (Cardiac cycle)
   - Pass 3: Verifies question content matches Topic 36 learning objectives
3. Saves to `by-test-id/{testId}.json`
4. Updates `index.json` and `questionsService.ts`
5. Reports: "Imported 45 questions. 42 verified, 3 flagged for review."

## Flagged Questions Handling

Questions flagged as "needs-review" should:
1. Be saved with `matchedBy: "needs-review"`
2. Be listed in the import report with:
   - Question text (first 50 chars)
   - Best guess topic(s)
   - Reason for uncertainty
3. Be reviewed by the user before final verification
