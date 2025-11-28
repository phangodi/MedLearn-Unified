# MTO System Implementation Tracker

## Status: Phase 0 - Proof of Concept
**Last Updated**: 2025-11-28

## Project Overview
Migrate MTO practice questions to Firebase Firestore, implement automated explanation generation using topic materials, and build a comprehensive Admin Panel for content management.

## Key Decisions Made

| Date | Decision | Rationale |
|------|----------|-----------|
| 2025-11-28 | Firebase Firestore for storage | Scalability, dynamic updates without redeploy, easier management |
| 2025-11-28 | Structured JSON for explanations | UI flexibility - can show correct/incorrect separately, easier to extend |
| 2025-11-28 | Topics as primary organization | MCQ is derived from topics, test IDs are secondary/optional |
| 2025-11-28 | Auto-generated Firestore IDs | Simpler than sequential IDs, Firebase handles uniqueness |
| 2025-11-28 | Separate Admin Panel route | `/admin/mto` - doesn't interfere with existing admin |

## Progress Tracker

### Phase 0: Proof of Concept ✅ COMPLETE
- [x] Create feature branch `feature/mto-explanations-system`
- [x] Create implementation tracker file
- [x] Generate 10 sample explanations for Topic 41
- [x] User reviews and approves quality
- [x] No refinements needed - format approved

### Session 1: Foundation & Migration
- [x] Set up Firestore collections structure (types/firebase.ts)
- [x] Write migration script (scripts/migrate-questions-to-firebase.ts)
- [x] Update Firestore security rules (firestore.rules)
- [x] Add firebase-admin-key.json to .gitignore
- [ ] Run test migration (dry-run)
- [ ] Full migration (all 344 questions)
- [ ] Deploy rules to Firebase

### Session 2: Firebase Services
- [ ] Create firebaseQuestionsService.ts
- [ ] Create explanationsService.ts
- [ ] Create auditService.ts
- [ ] Update existing questionsService.ts to use Firebase
- [ ] Test question loading from Firebase
- [ ] Verify no regression in MTO practice

### Session 3: Explanation Generation Skill
- [ ] Create mto-explanation-generator skill files
- [ ] Test on Topic 41 (full topic)
- [ ] Review generated explanations
- [ ] Refine skill prompt if needed
- [ ] Document skill usage

### Session 4: UI - Explanation Display
- [ ] Update QuestionCard to display explanations
- [ ] Style explanation panel
- [ ] Add loading states
- [ ] Test full flow

### Session 5: Bulk Processing (MCQ-3)
- [ ] Process all MCQ-3 topics (33-58)
- [ ] Review needs-review questions
- [ ] Create topic-verifier skill if needed
- [ ] Fix any incorrect topic assignments

### Session 6: Admin Panel - Core
- [ ] Create admin route structure
- [ ] Add sidebar entry (super-admin only)
- [ ] Dashboard page with stats
- [ ] Question list page with filters
- [ ] Add/Edit question form

### Session 7: Admin Panel - Advanced
- [ ] Duplicate detection page
- [ ] Explanation management page
- [ ] Audit log viewer
- [ ] Admin tools (bulk operations)

### Session 8: Flagging System
- [ ] Implement flag button UI
- [ ] Create questionFlags collection logic
- [ ] Flag review queue page
- [ ] Resolve flag functionality

### Session 9: Polish & Testing
- [ ] End-to-end testing
- [ ] Performance optimization
- [ ] Documentation cleanup
- [ ] Deployment to production

## File Changes Log

| File | Change Type | Description | Session |
|------|-------------|-------------|---------|
| `client/docs/MTO_IMPLEMENTATION_TRACKER.md` | Created | Implementation tracking file | Phase 0 |
| `client/src/apps/physiology-mto/types/firebase.ts` | Created | Firebase TypeScript interfaces | Session 1 |
| `client/scripts/migrate-questions-to-firebase.ts` | Created | Migration script for questions | Session 1 |
| `firestore.rules` | Modified | Added MTO collections rules | Session 1 |
| `.gitignore` | Modified | Added firebase-admin-key.json | Session 1 |

## Firebase Collections Schema

### mtoQuestions
```typescript
{
  text: string;
  textNormalized: string;       // For duplicate detection
  correctAnswerCount: number;
  options: { letter: string; text: string; }[];
  correctAnswers: string[];
  topics: number[];             // PRIMARY field
  mcqs: string[];               // Derived from topics
  testId?: string;              // Optional, for future use
  contentHash: string;
  status: 'active' | 'archived' | 'draft';
  createdAt: Timestamp;
  createdBy: string;
  updatedAt: Timestamp;
  updatedBy: string;
  legacyId?: string;
  matchedBy: string;
  matchConfidence: number;
  matchReason?: string;
}
```

### questionExplanations
```typescript
{
  questionId: string;
  correctLetters: string[];
  summary: string;
  whyCorrect: { [letter: string]: string };
  whyIncorrect: { [letter: string]: string };
  topicReference: string;
  generatedAt: Timestamp;
  sourceTopics: number[];
  needsReview: boolean;
  reviewReason?: string;
}
```

## Critical Reference Files

- **Plan file**: `/Users/peti/.claude/plans/elegant-tumbling-alpaca.md`
- **Topic files**: `client/src/apps/physiology/data/Topics/topic*.js`
- **Question JSON**: `client/src/apps/physiology/data/questions/by-test-id/*.json`
- **Questions service**: `client/src/apps/physiology-mto/services/questionsService.ts`
- **QuestionCard**: `client/src/apps/physiology-mto/components/QuestionCard.tsx`

## Known Issues
(None yet)

## Testing Notes
(None yet)

## Context Recovery Instructions

If context is compressed, read these files in order:
1. This file (`client/docs/MTO_IMPLEMENTATION_TRACKER.md`)
2. Plan file (`/Users/peti/.claude/plans/elegant-tumbling-alpaca.md`)
3. Check git log for recent commits
4. Check current branch status with `git status`
