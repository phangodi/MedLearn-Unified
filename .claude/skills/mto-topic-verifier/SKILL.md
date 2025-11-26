---
name: mto-topic-verifier
description: "Verify that MTO exam questions are correctly assigned to physiology topics. Spawns an agent to check if questions match their topic's learning objectives. Use when verifying question-topic assignments, checking MTO data quality, or auditing question categorization. Syntax: 'verify topic X' or 'verify topics X, Y, Z'"
allowed-tools:
  - Task
  - Read
  - Grep
  - Glob
---

# MTO Topic Question Assignment Verifier

## PURPOSE

This skill verifies that MTO (Multiple Choice Test) questions are correctly assigned to their physiology topics. It spawns agents to compare each question against its assigned topic's learning objectives and content.

## WHEN TO USE

- Verifying question-to-topic assignment accuracy
- Auditing MTO question data quality
- Checking if imported questions are correctly categorized
- Quality assurance for medical education content

## DATA LOCATIONS

- **Topic files:** `/Users/peti/Documents/GitHub/MedLearn-Unified/client/src/apps/physiology/data/Topics/topic{N}.js`
- **Question files:** `/Users/peti/Documents/GitHub/MedLearn-Unified/client/src/apps/physiology/data/questions/by-test-id/*.json`
- **Question index:** `/Users/peti/Documents/GitHub/MedLearn-Unified/client/src/apps/physiology/data/questions/index.json`

## HOW TO USE

The user will specify which topic(s) to verify. Parse their request for topic numbers.

**Examples:**
- "verify topic 41" → Verify topic 41
- "verify topics 7, 19, 20" → Verify topics 7, 19, and 20
- "verify all MCQ I topics" → Verify topics 1-7 and 17-24
- "verify all MCQ II topics" → Verify topics 8-16 and 25-32

## MCQ TOPIC RANGES (Reference)

- **MCQ I:** Topics 1, 2, 3, 4, 5, 6, 7, 17, 18, 19, 20, 21, 22, 23, 24
- **MCQ II:** Topics 8, 9, 10, 11, 12, 13, 14, 15, 16, 25, 26, 27, 28, 29, 30, 31, 32
- **MCQ III:** Topics 33-58
- **MCQ IV:** Topics 59-76
- **MCQ V:** Topics 77-94
- **MCQ VI:** Topics 95-122

## WORKFLOW

### Step 1: Parse User Request
Extract the topic number(s) from the user's message.

### Step 2: Check Topic Coverage
First, read the question index to see how many questions are assigned to each requested topic:
```
/Users/peti/Documents/GitHub/MedLearn-Unified/client/src/apps/physiology/data/questions/index.json
```
Look at the `topicCoverage` field to see question counts.

### Step 3: Spawn Verification Agent(s)
For each topic with questions, spawn an agent using the Task tool with this prompt template:

```
You are verifying question-to-topic assignments for a medical education platform.

**Your task:** Verify that all questions assigned to Topic {TOPIC_NUMBER} actually belong there.

**Steps:**

1. First, read Topic {TOPIC_NUMBER}'s content to understand what it covers:
   - Read `/Users/peti/Documents/GitHub/MedLearn-Unified/client/src/apps/physiology/data/Topics/topic{TOPIC_NUMBER}.js`
   - Note the title, learning objectives, and key concepts

2. Find all questions assigned to Topic {TOPIC_NUMBER}:
   - Search in `/Users/peti/Documents/GitHub/MedLearn-Unified/client/src/apps/physiology/data/questions/by-test-id/` for questions with topics arrays containing {TOPIC_NUMBER}
   - Use grep to search for the topic number in topics arrays

3. For EACH question found:
   - Read the full question text and all answer options
   - Compare against Topic {TOPIC_NUMBER}'s learning objectives
   - Determine if this question actually tests knowledge from Topic {TOPIC_NUMBER}

4. **Return a report with:**
   - Topic {TOPIC_NUMBER}'s title and main learning objectives (brief summary)
   - For each question:
     - Question ID and text (first 100 characters)
     - Verdict: CORRECT MATCH / QUESTIONABLE / WRONG TOPIC
     - Brief reason for your verdict
     - If wrong, suggest the correct topic if possible
   - Summary: How many correct, questionable, wrong

Be thorough. This is medical education - accuracy matters.
```

Use `subagent_type: "general-purpose"` for the Task tool.

### Step 4: Report Results
After all agents complete, summarize:
- Total questions verified
- Correct matches count and percentage
- Any questionable or wrong assignments (list them)
- Recommendations if issues found

## IMPORTANT NOTES

1. **Spawn agents in parallel** when verifying multiple topics to save time
2. **Topics without questions** - Skip them and note "No questions assigned to Topic X"
3. **Medical accuracy matters** - Even one wrong assignment could mislead students
4. **Agent results are trusted** - Report their findings directly

## OUTPUT FORMAT

After verification completes, provide a summary table:

```
| Topic | Title | Questions | Correct | Questionable | Wrong |
|-------|-------|-----------|---------|--------------|-------|
| 41    | Hemodynamics | 18 | 18 (100%) | 0 | 0 |
```

Then list any issues found with details.
