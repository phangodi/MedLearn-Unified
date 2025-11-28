# MTO Question Import Skill

## CRITICAL RULES - READ FIRST

1. **NEVER use file names, headers, or "MTO" labels to determine topics**
2. **NEVER batch process** - analyze each question individually
3. **ALWAYS update questionsService.ts** after creating JSON files
4. **ALWAYS update index.json** after adding new tests

## Topic Assignment Process

For EACH question:
1. Read the question text and all options
2. Search `physiology_learning_objectives.md` for matching content
3. Assign topic number(s) based on learning objectives ONLY
4. MCQ is auto-derived from topic using mcqFilters in questionsService.ts
5. Include `matchReason` citing the specific learning objective text

## MCQ to Topic Mapping (Reference Only)
- MCQ-1 (topics 1-7, 17-24): Control theory, membrane, nerve, muscle
- MCQ-2 (topics 8-16, 25-32): Blood, respiratory
- MCQ-3 (topics 33-58): Cardiovascular, renal
- MCQ-4 (topics 59-76): Digestive, metabolic
- MCQ-5 (topics 77-94): Endocrine
- MCQ-6 (topics 95-122): Reproductive, special senses

## After Processing Each Source File

### Step 1: Create JSON file
Location: `client/src/apps/physiology/data/questions/by-test-id/{testId}.json`

### Step 2: Update questionsService.ts
Add import:
```typescript
import test{TESTID} from '../../physiology/data/questions/by-test-id/{testId}.json';
```

Add to testDataMap:
```typescript
'{testId}': test{TESTID} as TestQuestions,
```

### Step 3: Update index.json
Run this command:
```bash
node -e "
const fs = require('fs');
const path = require('path');
const dir = 'client/src/apps/physiology/data/questions/by-test-id';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'));
let allQuestions = [];
let testIds = [];
files.forEach(file => {
  const data = JSON.parse(fs.readFileSync(path.join(dir, file)));
  if (data.questions) {
    allQuestions.push(...data.questions);
    testIds.push(data.testId);
  }
});
const topicCoverage = {};
const mcqCoverage = { 'mcq-1': 0, 'mcq-2': 0, 'mcq-3': 0, 'mcq-4': 0, 'mcq-5': 0, 'mcq-6': 0 };
allQuestions.forEach(q => {
  if (q.topics) q.topics.forEach(t => { topicCoverage[t] = (topicCoverage[t] || 0) + 1; });
  if (q.mcqs) q.mcqs.forEach(m => { mcqCoverage[m] = (mcqCoverage[m] || 0) + 1; });
});
const index = {
  version: '1.0.0',
  lastUpdated: new Date().toISOString(),
  totalQuestions: allQuestions.length,
  testIds,
  topicCoverage,
  mcqCoverage
};
fs.writeFileSync('client/src/apps/physiology/data/questions/index.json', JSON.stringify(index, null, 2));
console.log('Updated: ' + allQuestions.length + ' questions');
"
```

## Verification Checklist
Before ending session, confirm:
- [ ] JSON file created with all questions
- [ ] Each question has topics array with valid topic numbers
- [ ] Each question has matchReason explaining assignment
- [ ] questionsService.ts has import statement
- [ ] questionsService.ts testDataMap has entry
- [ ] index.json updated with new counts

## Current Progress
- Phisio_02-07.md: COMPLETE (70 questions, 3 tests)
- Additional files processed: ~98 more questions across 5 tests
- Total: 168 questions, all MCQ-3 topics
