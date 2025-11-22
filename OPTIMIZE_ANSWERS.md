# MEDICAL PHYSIOLOGY EXAM ANSWER OPTIMIZATION - BATCH MODE

## CONTEXT
You are optimizing examAnswer sections in medical physiology study materials for University of Szeged students. These are oral exam answers that students must memorize and recite in 20-30 seconds. Current answers contain unnecessary content making memorization difficult, but we CANNOT compromise medical accuracy or completeness.

## CRITICAL MEDICAL SAFETY RULES
- **This is medical education** - students will FAIL their exam if content is incomplete
- **Every examAnswer must COMPLETELY answer its Learning Objective (LO)**
- **All reference values, official terminology, and mechanisms MUST be preserved**
- **When in doubt: complete > concise**
- **Red text (>>marked<<) in LOs are CRITICAL exam requirements**
- **officialDefinitions contain verified content from official slides/textbooks - use this content to improve answers when needed**

## FILE LOCATION
`src/data/topics/topic30.js` (or whichever topic specified)

## YOUR TASK - PROCESS ENTIRE TOPIC

### STEP 1: READ & ANALYZE
Read the entire topic file and analyze ALL Learning Objectives together.

### STEP 2: PRESENT OPTIMIZATION PLAN
For each LO in the topic, provide:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LO-[X]: [Critical: YES/NO]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TITLE: [full title with >>red markers<<]

ANALYSIS:
✓ Keeps: [what must be preserved - values, mechanisms, official terms]
✗ Removes: [unnecessary setup, redundancy, non-essential info]
⚠ Improves: [using knowledge from officialDefinitions (if available) if answer is incomplete/imprecise]

OPTIMIZED (Y words, -Z%): [optimized examAnswer with >>red markers<<]

RED TEXT: [if applicable, confirm correct portion marked]
SAFETY: [confirm all critical elements preserved]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### STEP 3: SUMMARY & APPROVAL
After presenting all LOs:
```
TOPIC SUMMARY:
Total LOs: X
Total reduction: A words → B words (C% reduction)
Critical LOs optimized: X/Y
Medical accuracy: ✓ All values/mechanisms preserved
Student benefit: [specific improvements to memorability]

APPROVE ALL OPTIMIZATIONS? (yes/no/modify specific LO)
```

### STEP 4: APPLY CHANGES
Upon approval:
- Update the topic file with all optimized examAnswers
- Preserve all other fields (keyPoints, officialDefinitions, etc.)
- Maintain exact JavaScript structure
- Save to same file location

## OPTIMIZATION PRINCIPLES

### RED TEXT PRIORITY (ABSOLUTE)
- The >>marked<< portion is what examiners test first
- Must be answered directly, completely, and early in the response
- Mark ONLY the precise answer to red portion, not setup text

### ALWAYS ELIMINATE
- Redundant transitions ("Furthermore", "In addition", "Moreover")
- Restating the question ("To answer this question...")
- Verbose setup before core answer
- Information NOT a direct answer to the LO 
- Overly detailed explanations of concepts already covered in earlier LOs

### NEVER ELIMINATE
- Reference values with units (e.g., "500 ml", "37°C")
- Official terminology from officialDefinitions
- Complete mechanisms when LO asks to "Describe/Explain"
- All components when LO says "List..."
- Clinical significance when present in source materials
- Any part of multi-part LO questions

### ENHANCE USING officialDefinitions
- If current examAnswer lacks precision, use wording from officialDefinitions if possible
- If values are missing but present in officialDefinitions, ADD them
- If mechanism is vague but detailed in officialDefinitions, use that detail
- officialDefinitions are from official slides/textbooks - authoritative source

### CONDENSE INTELLIGENTLY
- Combine related concepts into flowing sentences
- Use precise medical terminology (shorter, more accurate)
- Maintain natural speaking rhythm for text-to-speech
- Numbers: "500 milliliters" not "five hundred ml"
- Remove filler while keeping comprehensibility

## MEDICAL ACCURACY CHECKLIST
Before finalizing each LO:
- [ ] Multi-part LO fully answered (check each part)
- [ ] Red text marks precise answer to red LO portion
- [ ] No medical terminology lost or altered
- [ ] Mechanisms explained sufficiently (not just "it occurs")
- [ ] Clinical significance preserved when relevant
- [ ] Answer passable by examiner standards
- [ ] Speakable fluently in 20-30 seconds
- [ ] Can be perfectly processed by ElevenLab's text-to-speech

## EXAMPLE OPTIMIZATION

**BEFORE (78 words):**
"Surfactant is produced and secreted by type II alveolar cells, also called type II pneumocytes. These cells are simple cuboidal epithelial cells that are less abundant than type I cells but play the crucial role of producing surfactant. Surfactant is stored inside large globules within the alveolar cells called lamellar bodies. The composition of surfactant consists of approximately 90% lipid and 10% protein."

**ANALYSIS:**
- ✓ Keep: cell type, storage, composition with percentages
- ✗ Remove: "less abundant than type I cells but play the crucial role" - not essential
- ✗ Remove: "within the alveolar cells" - redundant after "type II alveolar cells"

**AFTER (51 words, -35%):**
"Surfactant is produced and secreted by type II alveolar cells, also called type II pneumocytes, which are simple cuboidal epithelial cells. Surfactant is stored inside large globules called lamellar bodies. The composition consists of approximately 90% lipid and 10% protein."

**PRESERVED:** All essential facts, medical accuracy, speakable flow

## EXECUTION COMMAND

**To start:** 
"Process src/data/topics/topic29.js - read file, analyze all LOs, present optimization plan for entire topic"

**After approval:**
"Apply all optimizations and save updated topic29.js"

**For next topic:**
"Process src/data/topics/topic8.js"

## OUTPUT FORMAT AFTER APPROVAL

Save optimized topic file maintaining exact structure:
```javascript
const topicX = {
  id: 'topic-X',
  mcqs: [...],
  number: X,
  title: '...',
  subtitle: '...',
  learningObjectives: [
    {
      id: 'lo-1',
      isCritical: true/false,
      title: 'text >>red text<< text', //UNCHANGED
      keyPoints: [...], // UNCHANGED
      officialDefinitions: [...], // UNCHANGED
      examAnswer: 'OPTIMIZED ANSWER with >>red markers<< in correct positions'
    }
  ],
  referenceValues: [...] // UNCHANGED
};

export default topicX;
```

## STUDENT-FIRST MINDSET

Every optimization must serve the student:
- **Memorizable**: Shorter but complete answers
- **Accurate**: Medical precision maintained
- **Targeted**: Direct response to LO requirements
- **Valuable**: Every word earns its place
- **Passable**: Examiner will accept the answer

Remember: Students trust this content for exam success. Make every word count, but never sacrifice completeness for brevity. Their exam results depend on getting this right. There is no room for error.

Special requests for topic 30: Due to extreme length of LOs and time constraints, please pay extra attention to LO 4, 5 and 7. (LO 4 needs to be reduced to at least half the size, but following all rules above!)

---

## TOKEN EFFICIENCY NOTES
- Process all LOs in one topic per interaction
- Concise analysis format (symbols: ✓✗⚠)
- No verbose explanations - bullet points only
- Show optimization results immediately
- Single approval for entire topic (not per LO)