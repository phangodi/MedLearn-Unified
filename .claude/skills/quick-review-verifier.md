# Quick Review Verifier Skill

Verify generated Quick Review content against source topic files. Run this AFTER generation to catch errors before deployment.

---

## Agent Instructions

When invoked with "Verify Quick Review for Topic X":

### Step 1: Read Both Files

```
Source: client/src/apps/physiology/data/Topics/topicX.js
Generated: client/src/apps/physiology/data/QuickReview/topicX-quickreview.js
```

### Step 2: Structural Validation

Check every block in the generated file:

**Property names (MUST be exact):**
- `header`, `paragraph`, `keypoint`, `clinical` blocks → must use `text:` (FAIL if `content:`)
- `list`, `steps` blocks → must use `intro:` (FAIL if `title:`), `items:` as string array
- `comparison` blocks → must have `left: { title: '', items: [] }` and `right: { title: '', items: [] }` (FAIL if nested in `text:` or using `leftTitle`/`rightTitle`/`leftLabel`/`rightLabel`)
- `table` blocks → must have `headers:` and `rows:` at top level (FAIL if nested in `text:`)
- `formula` blocks → must have `formula:` and `explanation:` at top level

**File structure:**
- Has correct `export default topicXQuickReview;`
- Has `topicId: 'topic-X'` and `topicNumber: X`
- All LO keys match pattern `'lo-1'`, `'lo-2'`, etc.

### Step 3: Completeness Check

Compare source to generated:

1. Count LOs in source `topicX.js` (look for `id: 'lo-X'` patterns)
2. Count LOs in generated file
3. **FAIL if counts don't match** - report which LOs are missing

Check for empty content:
- **FAIL if any `items: []` is empty** (content was lost)
- **FAIL if any block has empty `text: ''`**

### Step 4: Content Quality Review

Read the source content and compare to generated:

**Mechanisms/Factors/Types:**
- If source mentions "X mechanisms" or "X factors" or "X types", verify they are SEPARATED into distinct sections (not crammed into one list)
- **SUGGESTION if multiple concepts are merged** when they should be separate

**Block type appropriateness:**
- Contrasts/comparisons in source → should use `comparison` block
- Sequential processes in source → should use `steps` block
- Lists of features/characteristics → should use `list` block
- Key definitions/equations → should use `formula` or `keypoint` block
- **SUGGESTION if block type seems inappropriate** for the content

**Critical content:**
- If source has `isCritical: true` on an LO, verify generated has `isCritical: true`
- Verify critical blocks have `critical: true` flag where appropriate
- **SUGGESTION if critical marking seems inconsistent**

**Content accuracy:**
- Spot-check that key values (numbers, ranges, examples) from source appear in generated
- **FAIL if significant content is missing** (e.g., a whole mechanism dropped)
- **SUGGESTION if minor details seem omitted**

### Step 5: Report Results

Output a structured report:

```
## Verification Report: Topic X

### Structural Validation
- [ ] Property names: PASS/FAIL (list issues)
- [ ] File structure: PASS/FAIL (list issues)

### Completeness
- [ ] LO count: X in source, Y in generated - PASS/FAIL
- [ ] Empty content check: PASS/FAIL (list empty blocks)

### Content Quality
- [ ] Mechanism separation: PASS/SUGGESTION (details)
- [ ] Block type choices: PASS/SUGGESTION (details)
- [ ] Critical marking: PASS/SUGGESTION (details)
- [ ] Content accuracy: PASS/FAIL/SUGGESTION (details)

### Final Status
- ✅ PASS - Ready for use
- ⚠️ SUGGESTIONS - Works but review recommended (list items)
- ❌ FAIL - Must fix before use (list critical issues)
```

---

## Batch Verification

To verify multiple topics:

```
"Verify Quick Review for Topics 1, 2, 3"
```

Run verification sequentially and compile a summary:

```
## Batch Verification Summary

| Topic | Structure | Completeness | Quality | Status |
|-------|-----------|--------------|---------|--------|
| 1     | PASS      | PASS         | PASS    | ✅     |
| 2     | PASS      | PASS         | WARN    | ⚠️     |
| 3     | FAIL      | PASS         | PASS    | ❌     |

### Issues Requiring Attention:
- Topic 2: [suggestions]
- Topic 3: [failures]
```

---

## Quick Reference: Common Failures

| Issue | Cause | Fix |
|-------|-------|-----|
| `content:` instead of `text:` | Agent used wrong property | Replace all `content:` with `text:` |
| `title:` instead of `intro:` | Agent used wrong property for list/steps | Replace `title:` with `intro:` in list/steps blocks |
| Comparison has `leftTitle`/`rightTitle` | Wrong comparison format | Restructure to `left: { title, items }` format |
| Empty `items: []` | Content lost during generation | Regenerate the LO |
| Missing LOs | Agent didn't process all | Regenerate missing LOs |
| Nested `text: { ... }` | Properties wrapped incorrectly | Move properties to top level |
