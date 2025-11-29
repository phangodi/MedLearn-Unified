# Flashcard Generation Quick Reference

## Generate Single Topic
```
Generate flashcard deck for Topic X
```
Agent reads skill, creates JSON, updates index.ts.

## Combine Topics into MCQ Deck (Future)
After individual topics exist, combine:
```
Combine topics 33-40 into one MCQ3 deck
```

## Known Glitches
Some cards show raw HTML. Likely causes:
- Unescaped quotes in JSON
- Nested HTML structure issues
Agent should double-check JSON validity after generation.

## Files
- Skill: `.claude/skills/flashcard-generator.md`
- Output: `client/src/apps/flashcards/data/preloaded/physiology/`
- Index: `client/src/apps/flashcards/data/preloaded/index.ts`

## Current Progress
- Topic 33: ✅ Hemodynamics (7 cards)
- Topic 34: ✅ Hemorheology (6 cards)
- Topic 35: ✅ Cardiac Muscle (5 cards)
