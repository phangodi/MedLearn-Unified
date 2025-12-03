#!/usr/bin/env npx ts-node --esm

/**
 * Import Single Test File to Firebase
 *
 * Usage:
 *   npx ts-node --esm client/scripts/import-single-test.ts --file 05561187
 *   npx ts-node --esm client/scripts/import-single-test.ts --file 05561187 --dry-run
 */

import admin from 'firebase-admin';
import { cert } from 'firebase-admin/app';
import { FieldValue } from 'firebase-admin/firestore';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { Timestamp } from 'firebase-admin/firestore';
import { createHash } from 'crypto';

// ES Module compatibility
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FIREBASE_ADMIN_KEY_PATH = path.resolve(__dirname, '../../firebase-admin-key.json');
const QUESTIONS_DIR = path.resolve(__dirname, '../src/apps/physiology/data/questions/by-test-id');
const COLLECTION_NAME = 'mtoQuestions';

// Parse command line arguments
const args = process.argv.slice(2);
const DRY_RUN = args.includes('--dry-run');
const fileArgIndex = args.findIndex(a => a === '--file');
const FILE_NAME = fileArgIndex >= 0 ? args[fileArgIndex + 1] : null;

if (!FILE_NAME) {
  console.error('Usage: npx ts-node --esm client/scripts/import-single-test.ts --file <testId>');
  console.error('Example: npx ts-node --esm client/scripts/import-single-test.ts --file 05561187');
  process.exit(1);
}

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

function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function generateContentHash(text: string, options: QuestionOption[]): string {
  const normalizedText = normalizeText(text);
  const normalizedOptions = options
    .map(opt => normalizeText(opt.text))
    .sort()
    .join('|');

  const content = `${normalizedText}|||${normalizedOptions}`;
  return createHash('md5').update(content).digest('hex');
}

async function main() {
  console.log('\n╔════════════════════════════════════════════════════════════╗');
  console.log('║           Import Single Test File to Firebase              ║');
  console.log('╚════════════════════════════════════════════════════════════╝\n');

  if (DRY_RUN) {
    console.log('🔍 MODE: DRY RUN (no data will be written)\n');
  }

  // Check for admin key
  if (!fs.existsSync(FIREBASE_ADMIN_KEY_PATH)) {
    console.error('❌ Firebase admin key not found at:', FIREBASE_ADMIN_KEY_PATH);
    process.exit(1);
  }

  // Initialize Firebase
  const serviceAccount = JSON.parse(fs.readFileSync(FIREBASE_ADMIN_KEY_PATH, 'utf8'));
  admin.initializeApp({ credential: cert(serviceAccount) });
  const db = admin.firestore();
  db.settings({ ignoreUndefinedProperties: true });
  console.log('✅ Firebase Admin SDK initialized\n');

  // Read the JSON file
  const filePath = path.join(QUESTIONS_DIR, `${FILE_NAME}.json`);
  if (!fs.existsSync(filePath)) {
    console.error(`❌ File not found: ${filePath}`);
    process.exit(1);
  }

  const fileContent = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const questions: LegacyQuestion[] = fileContent.questions;

  console.log(`📁 Processing: ${FILE_NAME}.json`);
  console.log(`   Questions: ${questions.length}\n`);

  // Check for duplicates and import
  let imported = 0;
  let skipped = 0;

  for (const q of questions) {
    const contentHash = generateContentHash(q.text, q.options);

    // Check if already exists
    const existing = await db.collection(COLLECTION_NAME)
      .where('contentHash', '==', contentHash)
      .limit(1)
      .get();

    if (!existing.empty) {
      console.log(`   ⊘ Skipped duplicate: ${q.id}`);
      skipped++;
      continue;
    }

    const now = Timestamp.now();
    const mtoQuestion = {
      text: q.text,
      textNormalized: normalizeText(q.text),
      correctAnswerCount: q.correctAnswerCount,
      options: q.options,
      correctAnswers: q.correctAnswers,
      topics: q.topics,
      mcqs: q.mcqs,
      testId: q.testId,
      contentHash: contentHash,
      status: 'active',
      createdAt: now,
      createdBy: 'import-script',
      updatedAt: now,
      updatedBy: 'import-script',
      legacyId: q.id,
      matchedBy: q.metadata?.matchedBy || 'manual',
      matchConfidence: q.metadata?.matchConfidence || 0.9,
      matchReason: q.metadata?.matchReason,
    };

    if (DRY_RUN) {
      console.log(`   [DRY RUN] Would import: ${q.id}`);
    } else {
      await db.collection(COLLECTION_NAME).add(mtoQuestion);
      console.log(`   ✅ Imported: ${q.id}`);
    }
    imported++;
  }

  // Add testId to systemStats.testIds array (if not already present)
  const testId = fileContent.testId || FILE_NAME;
  if (!DRY_RUN && imported > 0) {
    console.log(`\n📝 Adding testId "${testId}" to systemStats...`);
    await db.collection('systemStats').doc('current').update({
      testIds: FieldValue.arrayUnion(testId)
    });
    console.log(`   ✅ testId added to Firebase systemStats`);
  } else if (DRY_RUN) {
    console.log(`\n[DRY RUN] Would add testId "${testId}" to systemStats`);
  }

  console.log('\n╔════════════════════════════════════════════════════════════╗');
  console.log('║                      IMPORT SUMMARY                        ║');
  console.log('╚════════════════════════════════════════════════════════════╝\n');
  console.log(`   File:              ${FILE_NAME}.json`);
  console.log(`   Test ID:           ${testId}`);
  console.log(`   Total Questions:   ${questions.length}`);
  console.log(`   Imported:          ${imported}`);
  console.log(`   Skipped (dupes):   ${skipped}\n`);

  if (DRY_RUN) {
    console.log('✅ DRY RUN COMPLETE - No data was written\n');
  } else {
    console.log('✅ IMPORT COMPLETE - Test ID now available in Firebase\n');
  }
}

main()
  .then(() => process.exit(0))
  .catch(err => {
    console.error('❌ Import failed:', err);
    process.exit(1);
  });
