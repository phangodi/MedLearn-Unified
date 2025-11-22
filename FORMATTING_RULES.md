# Exam Answer Formatting Rules

## ⚠️ CRITICAL RULES - DO NOT FORGET!

### 1. NEVER CHANGE CONTENT - MOST IMPORTANT!
- **PRESERVE EVERY SINGLE WORD** from the original examAnswer exactly
- **ONLY add formatting structure** - never rewrite, rephrase, or alter content
- **Transform wall-of-text into professional structure** while keeping all words identical
- This is oral exam content - medical accuracy is critical

### 2. Red Text (Critical Markers)
- **Analyze the LO title to identify the red part (between `>>` and `<<`)**
- **Find the text in examAnswer that DIRECTLY responds to that red part**
- **Add/adjust `>>` `<<` markers around ONLY that direct response text**
- Add `critical: true` flag to blocks containing marked text
- Markers `>>` and `<<` are HIDDEN in the UI
- **DO NOT blindly follow existing markers - verify they correctly mark the direct answer to the red LO title part**

### 3. Professional Formatting Structure
- **Break long paragraphs** into logical sections using bullet points and paragraph breaks
- **Use numbered steps** for sequential processes (always purple)
- **Use bullet lists** for comparisons, classifications, and related points
- **Logical paragraph breaks** for better readability
- **Preserve original sentence structure** - just reorganize into professional format

### 4. Numbered Lists (Steps)
- Use `type: 'steps'` for numbered/sequential processes
- **Numbered items are ALWAYS PURPLE - NEVER add `critical: true` to steps type**
- Only the intro text can be red if it's between markers
- Items array stays purple regardless

### 5. Bullet Lists
- Use `type: 'list'` for non-sequential items, comparisons, classifications
- Can have optional `intro` text
- Intro can be red if between markers, items stay normal
- Add `critical: true` to the list block if intro is marked
- **Perfect for breaking up long sentences with multiple points**

### 6. Paragraphs
- Use `type: 'paragraph'` for regular text blocks
- Add `critical: true` if text is between `>>` and `<<`
- **Break long paragraphs at logical points** while preserving all words

## Structure Template

```javascript
examAnswer: {
  formatted: [
    { type: 'paragraph', content: '>>Red text here<<', critical: true },
    { type: 'paragraph', content: 'Normal text here' },
    {
      type: 'list',
      intro: '>>Red intro:<<',
      critical: true,  // Only if intro is marked
      items: [
        'Item 1 - always normal color',
        'Item 2 - always normal color'
      ]
    },
    {
      type: 'steps',
      intro: '>>Red intro:<<',  // Intro can be red
      items: [
        'Step 1 - always PURPLE',
        'Step 2 - always PURPLE'
      ]
      // NO critical: true on steps!
    }
  ],
  raw: 'Original string with >>markers<< preserved'
}
```

## Verification Checklist
1. ✅ Read LO title and identify red parts (between >> <<)
2. ✅ Read examAnswer and find text that DIRECTLY answers the red part
3. ✅ Add/adjust >> << markers around ONLY the direct answer text
4. ✅ Add critical: true to blocks containing marked text
5. ✅ NEVER add critical: true to type: 'steps' (steps are always purple)
6. ✅ Include both formatted and raw versions
7. ✅ Close all brackets properly

## Example
**LO Title:** "Explain homeostasis. >>Define negative and positive feedback.<<"
- Red part: "Define negative and positive feedback"
- In examAnswer: Find ONLY the definitions of negative/positive feedback
- Mark ONLY those definitions with >> <<, NOT the homeostasis explanation

## Progress Tracker
- ✅ Topic 1: 10 LOs complete
- ✅ Topic 2: 5 LOs complete  
- ✅ Topic 3: 4 LOs complete
- ✅ Topic 4: 6 LOs complete
- ✅ Topic 5: 5 LOs complete (fixed step critical flags)
- ✅ Topic 6: 3 LOs complete
- ✅ Topic 7: 10 LOs complete
- ✅ Topic 17: 8 LOs complete
- ✅ Topic 18: 8 LOs complete (all done!)
- ✅ Topic 19: 7 LOs complete (all done!)
- ✅ Topic 20: 6 LOs complete (all done!)
- ✅ Topic 21: 6 LOs complete (all done!)
- ✅ Topic 22: 5 LOs complete (all done!)
- ✅ Topic 23: 8 LOs complete (all done!)
- ✅ Topic 24: 8 LOs complete (all done!)
- ⏳ Remaining: ~100 topics

**Total formatted: 103 LOs across 16 topics**

## Recent Highlights
- Beautiful numbered steps for signal transduction processes (Topic 18 LO-5)
- Clean classification lists with red intros (Topic 18 LO-4, LO-7)
- Well-structured ACh biosynthesis/release/elimination (Topic 19 LO-5)
- Co-transmitter lists with detailed effects (Topic 19 LO-6)
- Adrenergic receptor pathways with clean arrows (Topic 20 LO-3)
- Catecholamine biosynthesis steps (Topic 20 LO-2)
- Sympathetic cholinergic vs NANC effects (Topic 20 LO-6)
- Motor neuron parts with preserved Greek letters (Topic 21 LO-1)
- Cross-bridge cycle with purple steps (Topic 22 LO-4)
- Rigor mortis mechanism steps (Topic 22 LO-5)
