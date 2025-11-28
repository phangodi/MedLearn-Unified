#!/usr/bin/env ts-node

/**
 * Import Explanations to Firebase
 *
 * Reads explanation JSON files and imports them to the questionExplanations
 * collection in Firestore.
 *
 * USAGE:
 *   npx ts-node client/scripts/import-explanations.ts --file topic41-explanations.json
 *   npx ts-node client/scripts/import-explanations.ts --file topic41-explanations.json --dry-run
 *
 * INPUT FORMAT:
 * {
 *   "explanations": [
 *     {
 *       "questionId": "abc123",
 *       "correctLetters": ["a", "c"],
 *       "summary": "...",
 *       "whyCorrect": { "a": "...", "c": "..." },
 *       "whyIncorrect": { "b": "...", "d": "...", "e": "..." },
 *       "topicReference": "Topic 41: The microcirculation",
 *       "sourceTopics": [41],
 *       "needsReview": false
 *     }
 *   ]
 * }
 */

import admin from 'firebase-admin';
import { cert } from 'firebase-admin/app';
import { Timestamp } from 'firebase-admin/firestore';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

// ES Module compatibility
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const FIREBASE_ADMIN_KEY_PATH = path.resolve(__dirname, '../../firebase-admin-key.json');
const EXPLANATIONS_DIR = path.resolve(__dirname, '../src/apps/physiology-mto/data/explanations');
const COLLECTION_NAME = 'questionExplanations';

// Parse command line arguments
const args = process.argv.slice(2);
const DRY_RUN = args.includes('--dry-run');
const fileArg = args.find(a => a.startsWith('--file=')) || args[args.indexOf('--file') + 1];
const inputFile = fileArg?.replace('--file=', '');

// Types
interface ExplanationInput {
  questionId: string;
  correctLetters: string[];
  summary: string;
  whyCorrect: Record<string, string>;
  whyIncorrect: Record<string, string>;
  topicReference: string;
  sourceTopics: number[];
  needsReview: boolean;
  reviewReason?: string;
}

interface ExplanationsFile {
  explanations: ExplanationInput[];
}

interface ImportStats {
  total: number;
  imported: number;
  skipped: number;
  errors: number;
  needsReview: number;
}

// Initialize Firebase
function initializeFirebase(): admin.firestore.Firestore {
  try {
    if (!fs.existsSync(FIREBASE_ADMIN_KEY_PATH)) {
      console.error(`\n❌ ERROR: Firebase Admin key not found at:`);
      console.error(`   ${FIREBASE_ADMIN_KEY_PATH}\n`);
      process.exit(1);
    }

    const serviceAccount = JSON.parse(fs.readFileSync(FIREBASE_ADMIN_KEY_PATH, 'utf8'));

    admin.initializeApp({
      credential: cert(serviceAccount),
    });

    const db = admin.firestore();
    db.settings({ ignoreUndefinedProperties: true });

    console.log('✅ Firebase Admin SDK initialized');
    return db;
  } catch (error) {
    console.error('❌ Failed to initialize Firebase:', error);
    process.exit(1);
  }
}

// Read explanations file
function readExplanationsFile(filename: string): ExplanationsFile {
  const filePath = filename.startsWith('/') ? filename : path.join(EXPLANATIONS_DIR, filename);

  if (!fs.existsSync(filePath)) {
    console.error(`\n❌ ERROR: File not found: ${filePath}`);
    process.exit(1);
  }

  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(content) as ExplanationsFile;
  } catch (error) {
    console.error(`\n❌ ERROR: Failed to parse file: ${error}`);
    process.exit(1);
  }
}

// Import explanations to Firestore
async function importExplanations(
  db: admin.firestore.Firestore,
  explanations: ExplanationInput[]
): Promise<ImportStats> {
  const stats: ImportStats = {
    total: explanations.length,
    imported: 0,
    skipped: 0,
    errors: 0,
    needsReview: 0,
  };

  console.log(`\n📝 Importing ${explanations.length} explanations...`);

  for (const exp of explanations) {
    try {
      // Validate required fields
      if (!exp.questionId || !exp.summary || !exp.whyCorrect || !exp.whyIncorrect) {
        console.log(`   ⚠️ Skipped ${exp.questionId || 'unknown'}: missing required fields`);
        stats.skipped++;
        continue;
      }

      const docData = {
        ...exp,
        generatedAt: Timestamp.now(),
      };

      if (DRY_RUN) {
        console.log(`   [DRY RUN] Would import: ${exp.questionId}`);
        stats.imported++;
      } else {
        // Use questionId as document ID
        await db.collection(COLLECTION_NAME).doc(exp.questionId).set(docData);
        console.log(`   ✅ Imported: ${exp.questionId}`);
        stats.imported++;
      }

      if (exp.needsReview) {
        stats.needsReview++;
      }
    } catch (error) {
      console.error(`   ❌ Error importing ${exp.questionId}:`, error);
      stats.errors++;
    }
  }

  return stats;
}

// Main
async function main(): Promise<void> {
  console.log('\n╔════════════════════════════════════════════════════════════╗');
  console.log('║          MTO Explanations Import Script                   ║');
  console.log('╚════════════════════════════════════════════════════════════╝\n');

  if (!inputFile) {
    console.log('Usage:');
    console.log('  npx ts-node client/scripts/import-explanations.ts --file <filename>');
    console.log('  npx ts-node client/scripts/import-explanations.ts --file <filename> --dry-run');
    console.log('\nExample:');
    console.log('  npx ts-node client/scripts/import-explanations.ts --file topic41-explanations.json');
    process.exit(0);
  }

  if (DRY_RUN) {
    console.log('🔍 MODE: DRY RUN (no data will be written)\n');
  } else {
    console.log('⚠️  MODE: LIVE RUN (data will be written to Firestore)\n');
  }

  // Initialize Firebase
  const db = initializeFirebase();

  // Read file
  console.log(`\n📁 Reading file: ${inputFile}`);
  const data = readExplanationsFile(inputFile);
  console.log(`   Found ${data.explanations.length} explanations\n`);

  // Import
  const stats = await importExplanations(db, data.explanations);

  // Summary
  console.log('\n╔════════════════════════════════════════════════════════════╗');
  console.log('║                      IMPORT SUMMARY                        ║');
  console.log('╚════════════════════════════════════════════════════════════╝\n');
  console.log(`   Total:          ${stats.total}`);
  console.log(`   Imported:       ${stats.imported}`);
  console.log(`   Skipped:        ${stats.skipped}`);
  console.log(`   Errors:         ${stats.errors}`);
  console.log(`   Needs Review:   ${stats.needsReview}\n`);

  if (DRY_RUN) {
    console.log('✅ DRY RUN COMPLETE - No data was written to Firestore\n');
  } else {
    console.log('✅ IMPORT COMPLETE\n');
  }
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error('\n❌ IMPORT FAILED:', error);
    process.exit(1);
  });
