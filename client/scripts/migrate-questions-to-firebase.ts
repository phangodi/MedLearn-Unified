#!/usr/bin/env ts-node

/**
 * MTO Questions Migration Script
 *
 * Migrates all MTO questions from JSON files to Firebase Firestore.
 *
 * SETUP:
 * 1. Install dependencies:
 *    npm install --save-dev firebase-admin ts-node @types/node
 *
 * 2. Download Firebase Admin SDK credentials:
 *    - Go to Firebase Console → Project Settings → Service Accounts
 *    - Click "Generate New Private Key"
 *    - Save as: /Users/peti/Documents/GitHub/MedLearn-Unified/firebase-admin-key.json
 *    - IMPORTANT: Add this file to .gitignore
 *
 * 3. Run migration:
 *    DRY RUN (test without writing):
 *      npx ts-node client/scripts/migrate-questions-to-firebase.ts --dry-run
 *
 *    LIVE RUN (writes to Firestore):
 *      npx ts-node client/scripts/migrate-questions-to-firebase.ts
 *
 *    SKIP DUPLICATES (won't overwrite existing questions):
 *      npx ts-node client/scripts/migrate-questions-to-firebase.ts --skip-duplicates
 *
 * WHAT IT DOES:
 * - Reads all JSON files from client/src/apps/physiology/data/questions/by-test-id/
 * - Transforms each question to MTOQuestion schema
 * - Generates contentHash and textNormalized
 * - Writes to Firestore mtoQuestions collection
 * - Creates initial SystemStats document
 * - Logs detailed progress and errors
 */

import admin from 'firebase-admin';
import { cert } from 'firebase-admin/app';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { Timestamp } from 'firebase-admin/firestore';
import { createHash } from 'crypto';

// ============================================================================
// CONFIGURATION
// ============================================================================

// ES Module compatibility - get __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FIREBASE_ADMIN_KEY_PATH = path.resolve(__dirname, '../../firebase-admin-key.json');
const QUESTIONS_DIR = path.resolve(__dirname, '../src/apps/physiology/data/questions/by-test-id');
const BATCH_SIZE = 500; // Firestore max batch size
const COLLECTION_NAME = 'mtoQuestions';
const STATS_COLLECTION = 'systemStats';
const STATS_DOC_ID = 'current';

// Parse command line arguments
const args = process.argv.slice(2);
const DRY_RUN = args.includes('--dry-run');
const SKIP_DUPLICATES = args.includes('--skip-duplicates');

// ============================================================================
// TYPES
// ============================================================================

interface QuestionOption {
  letter: string;
  text: string;
}

interface LegacyQuestion {
  id: string;
  testId: string;
  questionNumber: number;
  text: string;
  correctAnswerCount: number;
  options: QuestionOption[];
  correctAnswers: string[];
  topics: number[];
  mcqs: string[];
  metadata?: {
    importedAt?: string;
    matchedBy?: 'ai-verified' | 'manual' | 'imported';
    matchConfidence?: number;
    matchReason?: string;
  };
}

interface MTOQuestion {
  text: string;
  textNormalized: string;
  correctAnswerCount: number;
  options: QuestionOption[];
  correctAnswers: string[];
  topics: number[];
  mcqs: string[];
  testId?: string;
  contentHash: string;
  status: 'active' | 'archived' | 'draft';
  createdAt: Timestamp;
  createdBy: string;
  updatedAt: Timestamp;
  updatedBy: string;
  legacyId?: string;
  matchedBy: 'ai-verified' | 'manual' | 'imported';
  matchConfidence: number;
  matchReason?: string;
}

interface SystemStats {
  totalQuestions: number;
  questionsByTopic: Record<number, number>;
  questionsByMcq: Record<string, number>;
  questionsWithExplanations: number;
  questionsNeedingReview: number;
  totalFlags: number;
  unresolvedFlags: number;
  lastUpdated: Timestamp;
}

interface MigrationStats {
  totalFiles: number;
  totalQuestions: number;
  successfulWrites: number;
  skippedDuplicates: number;
  errors: number;
  errorDetails: Array<{ file: string; question: string; error: string }>;
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Normalize text for duplicate detection
 */
function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, '') // Remove punctuation
    .replace(/\s+/g, ' ')    // Collapse multiple spaces
    .trim();
}

/**
 * Generate content hash for duplicate detection
 */
function generateContentHash(text: string, options: QuestionOption[]): string {
  const normalizedText = normalizeText(text);
  const normalizedOptions = options
    .map(opt => normalizeText(opt.text))
    .sort()
    .join('|');

  const content = `${normalizedText}|||${normalizedOptions}`;
  return createHash('md5').update(content).digest('hex');
}

/**
 * Convert legacy question to MTOQuestion format
 */
function convertLegacyToMTOQuestion(
  legacyQuestion: LegacyQuestion,
  userId: string = 'migration-script'
): MTOQuestion {
  const now = Timestamp.now();

  return {
    text: legacyQuestion.text,
    textNormalized: normalizeText(legacyQuestion.text),
    correctAnswerCount: legacyQuestion.correctAnswerCount,
    options: legacyQuestion.options,
    correctAnswers: legacyQuestion.correctAnswers,
    topics: legacyQuestion.topics,
    mcqs: legacyQuestion.mcqs,
    testId: legacyQuestion.testId,
    contentHash: generateContentHash(legacyQuestion.text, legacyQuestion.options),
    status: 'active',
    createdAt: now,
    createdBy: userId,
    updatedAt: now,
    updatedBy: userId,
    legacyId: legacyQuestion.id,
    matchedBy: legacyQuestion.metadata?.matchedBy || 'imported',
    matchConfidence: legacyQuestion.metadata?.matchConfidence || 0.5,
    matchReason: legacyQuestion.metadata?.matchReason,
  };
}

/**
 * Calculate system stats from questions
 */
function calculateSystemStats(questions: MTOQuestion[]): SystemStats {
  const stats: SystemStats = {
    totalQuestions: questions.length,
    questionsByTopic: {},
    questionsByMcq: {},
    questionsWithExplanations: 0,
    questionsNeedingReview: 0,
    totalFlags: 0,
    unresolvedFlags: 0,
    lastUpdated: Timestamp.now(),
  };

  questions.forEach(q => {
    // Count by topic
    q.topics.forEach(topicId => {
      stats.questionsByTopic[topicId] = (stats.questionsByTopic[topicId] || 0) + 1;
    });

    // Count by MCQ
    q.mcqs.forEach(mcqId => {
      stats.questionsByMcq[mcqId] = (stats.questionsByMcq[mcqId] || 0) + 1;
    });
  });

  return stats;
}

// ============================================================================
// FIREBASE INITIALIZATION
// ============================================================================

/**
 * Initialize Firebase Admin SDK
 */
function initializeFirebase(): admin.firestore.Firestore {
  try {
    if (!fs.existsSync(FIREBASE_ADMIN_KEY_PATH)) {
      console.error(`\n❌ ERROR: Firebase Admin key not found at:`);
      console.error(`   ${FIREBASE_ADMIN_KEY_PATH}\n`);
      console.error(`Please download the service account key from Firebase Console:`);
      console.error(`1. Go to Firebase Console → Project Settings → Service Accounts`);
      console.error(`2. Click "Generate New Private Key"`);
      console.error(`3. Save to: ${FIREBASE_ADMIN_KEY_PATH}\n`);
      process.exit(1);
    }

    const serviceAccount = JSON.parse(fs.readFileSync(FIREBASE_ADMIN_KEY_PATH, 'utf8'));

    admin.initializeApp({
      credential: cert(serviceAccount),
    });

    const db = admin.firestore();
    // Enable ignoring undefined properties to handle optional fields
    db.settings({ ignoreUndefinedProperties: true });

    console.log('✅ Firebase Admin SDK initialized');
    return db;
  } catch (error) {
    console.error('❌ Failed to initialize Firebase:', error);
    process.exit(1);
  }
}

// ============================================================================
// FILE READING
// ============================================================================

/**
 * Read all JSON files from questions directory
 */
function readQuestionFiles(): Map<string, LegacyQuestion[]> {
  const questionsByFile = new Map<string, LegacyQuestion[]>();

  try {
    if (!fs.existsSync(QUESTIONS_DIR)) {
      console.error(`\n❌ ERROR: Questions directory not found:`);
      console.error(`   ${QUESTIONS_DIR}\n`);
      process.exit(1);
    }

    // Only use original 12 JSON files, exclude mto3-* files (unverified)
    const files = fs.readdirSync(QUESTIONS_DIR)
      .filter(f => f.endsWith('.json'))
      .filter(f => !f.startsWith('mto3-')); // Exclude unverified mto3-* files

    console.log(`\n📁 Found ${files.length} JSON files in:`);
    console.log(`   ${QUESTIONS_DIR}\n`);

    files.forEach(file => {
      const filePath = path.join(QUESTIONS_DIR, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const parsed = JSON.parse(fileContent);

      // Handle both formats: direct array or {questions: [...]}
      const questions: LegacyQuestion[] = Array.isArray(parsed) ? parsed : parsed.questions;

      if (!questions || !Array.isArray(questions)) {
        console.log(`   ⚠ ${file}: No valid questions array found, skipping`);
        return;
      }

      questionsByFile.set(file, questions);
      console.log(`   ✓ ${file}: ${questions.length} questions`);
    });

    return questionsByFile;
  } catch (error) {
    console.error('❌ Failed to read question files:', error);
    process.exit(1);
  }
}

// ============================================================================
// FIRESTORE WRITING
// ============================================================================

/**
 * Check if question already exists by contentHash
 */
async function questionExists(
  db: admin.firestore.Firestore,
  contentHash: string
): Promise<boolean> {
  const snapshot = await db
    .collection(COLLECTION_NAME)
    .where('contentHash', '==', contentHash)
    .limit(1)
    .get();

  return !snapshot.empty;
}

/**
 * Write questions to Firestore in batches
 */
async function writeQuestionsToFirestore(
  db: admin.firestore.Firestore,
  questions: MTOQuestion[],
  stats: MigrationStats
): Promise<void> {
  const totalBatches = Math.ceil(questions.length / BATCH_SIZE);

  console.log(`\n📝 Writing ${questions.length} questions to Firestore...`);
  console.log(`   Batches: ${totalBatches} (${BATCH_SIZE} questions per batch)\n`);

  for (let i = 0; i < questions.length; i += BATCH_SIZE) {
    const batchNumber = Math.floor(i / BATCH_SIZE) + 1;
    const batch = db.batch();
    const batchQuestions = questions.slice(i, i + BATCH_SIZE);

    console.log(`   Processing batch ${batchNumber}/${totalBatches}...`);

    for (const question of batchQuestions) {
      try {
        // Check for duplicates if flag is set
        if (SKIP_DUPLICATES) {
          const exists = await questionExists(db, question.contentHash);
          if (exists) {
            console.log(`      ⊘ Skipped duplicate: ${question.legacyId}`);
            stats.skippedDuplicates++;
            continue;
          }
        }

        // Let Firestore auto-generate document ID
        const docRef = db.collection(COLLECTION_NAME).doc();

        if (DRY_RUN) {
          console.log(`      [DRY RUN] Would write: ${question.legacyId} → ${docRef.id}`);
          stats.successfulWrites++;
        } else {
          batch.set(docRef, question);
          stats.successfulWrites++;
        }
      } catch (error) {
        console.error(`      ❌ Error processing question ${question.legacyId}:`, error);
        stats.errors++;
        stats.errorDetails.push({
          file: question.testId || 'unknown',
          question: question.legacyId || 'unknown',
          error: error instanceof Error ? error.message : String(error),
        });
      }
    }

    // Commit batch
    if (!DRY_RUN && batchQuestions.length > 0) {
      try {
        await batch.commit();
        console.log(`   ✅ Batch ${batchNumber}/${totalBatches} committed`);
      } catch (error) {
        console.error(`   ❌ Failed to commit batch ${batchNumber}:`, error);
        stats.errors += batchQuestions.length;
      }
    }
  }
}

/**
 * Write system stats to Firestore
 */
async function writeSystemStats(
  db: admin.firestore.Firestore,
  systemStats: SystemStats
): Promise<void> {
  if (DRY_RUN) {
    console.log(`\n[DRY RUN] Would write system stats:`);
    console.log(JSON.stringify(systemStats, null, 2));
    return;
  }

  try {
    await db.collection(STATS_COLLECTION).doc(STATS_DOC_ID).set(systemStats);
    console.log(`\n✅ System stats written to ${STATS_COLLECTION}/${STATS_DOC_ID}`);
  } catch (error) {
    console.error(`\n❌ Failed to write system stats:`, error);
  }
}

// ============================================================================
// MAIN MIGRATION LOGIC
// ============================================================================

async function runMigration(): Promise<void> {
  console.log('\n╔════════════════════════════════════════════════════════════╗');
  console.log('║        MTO Questions Firebase Migration Script           ║');
  console.log('╚════════════════════════════════════════════════════════════╝\n');

  if (DRY_RUN) {
    console.log('🔍 MODE: DRY RUN (no data will be written)\n');
  } else {
    console.log('⚠️  MODE: LIVE RUN (data will be written to Firestore)\n');
  }

  if (SKIP_DUPLICATES) {
    console.log('⊘ SKIP DUPLICATES: Enabled (existing questions will not be overwritten)\n');
  }

  // Initialize Firebase
  const db = initializeFirebase();

  // Read all question files
  const questionsByFile = readQuestionFiles();

  // Convert all questions
  const allQuestions: MTOQuestion[] = [];
  const stats: MigrationStats = {
    totalFiles: questionsByFile.size,
    totalQuestions: 0,
    successfulWrites: 0,
    skippedDuplicates: 0,
    errors: 0,
    errorDetails: [],
  };

  console.log('\n🔄 Converting questions to Firestore format...\n');

  questionsByFile.forEach((questions, fileName) => {
    console.log(`   Converting ${fileName}...`);
    questions.forEach(legacyQ => {
      try {
        const mtoQuestion = convertLegacyToMTOQuestion(legacyQ);
        allQuestions.push(mtoQuestion);
        stats.totalQuestions++;
      } catch (error) {
        console.error(`      ❌ Error converting ${legacyQ.id}:`, error);
        stats.errors++;
        stats.errorDetails.push({
          file: fileName,
          question: legacyQ.id,
          error: error instanceof Error ? error.message : String(error),
        });
      }
    });
  });

  console.log(`\n   ✅ Converted ${stats.totalQuestions} questions`);

  // Write to Firestore
  await writeQuestionsToFirestore(db, allQuestions, stats);

  // Calculate and write system stats
  const systemStats = calculateSystemStats(allQuestions);
  await writeSystemStats(db, systemStats);

  // Print summary
  console.log('\n╔════════════════════════════════════════════════════════════╗');
  console.log('║                   MIGRATION SUMMARY                       ║');
  console.log('╚════════════════════════════════════════════════════════════╝\n');
  console.log(`   Total Files:          ${stats.totalFiles}`);
  console.log(`   Total Questions:      ${stats.totalQuestions}`);
  console.log(`   Successful Writes:    ${stats.successfulWrites}`);
  console.log(`   Skipped Duplicates:   ${stats.skippedDuplicates}`);
  console.log(`   Errors:               ${stats.errors}\n`);

  if (stats.errors > 0) {
    console.log('❌ ERRORS ENCOUNTERED:\n');
    stats.errorDetails.forEach(err => {
      console.log(`   File: ${err.file}`);
      console.log(`   Question: ${err.question}`);
      console.log(`   Error: ${err.error}\n`);
    });
  }

  console.log('\n📊 SYSTEM STATS:\n');
  console.log(`   Total Questions:      ${systemStats.totalQuestions}`);
  console.log(`   Topics:               ${Object.keys(systemStats.questionsByTopic).length}`);
  console.log(`   MCQ Sets:             ${Object.keys(systemStats.questionsByMcq).length}`);

  console.log('\n   Questions by Topic:');
  Object.entries(systemStats.questionsByTopic)
    .sort(([a], [b]) => Number(a) - Number(b))
    .forEach(([topicId, count]) => {
      console.log(`      Topic ${topicId}: ${count} questions`);
    });

  console.log('\n   Questions by MCQ:');
  Object.entries(systemStats.questionsByMcq)
    .sort()
    .forEach(([mcqId, count]) => {
      console.log(`      ${mcqId}: ${count} questions`);
    });

  if (DRY_RUN) {
    console.log('\n✅ DRY RUN COMPLETE - No data was written to Firestore');
    console.log('   Run without --dry-run to perform actual migration\n');
  } else {
    console.log('\n✅ MIGRATION COMPLETE\n');
  }
}

// ============================================================================
// ENTRY POINT
// ============================================================================

runMigration()
  .then(() => {
    process.exit(0);
  })
  .catch(error => {
    console.error('\n❌ MIGRATION FAILED:', error);
    process.exit(1);
  });
