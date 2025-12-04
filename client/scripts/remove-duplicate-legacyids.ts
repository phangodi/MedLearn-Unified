#!/usr/bin/env ts-node

/**
 * Remove Duplicate Questions by legacyId
 * Keeps ONE document per legacyId, deletes the rest
 */

import admin from 'firebase-admin';
import { cert } from 'firebase-admin/app';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FIREBASE_ADMIN_KEY_PATH = path.resolve(__dirname, '../../firebase-admin-key.json');
const DRY_RUN = process.argv.includes('--dry-run');

async function main() {
  console.log('\n=== Remove Duplicate legacyIds ===\n');

  if (DRY_RUN) {
    console.log('DRY RUN - no deletions will occur\n');
  }

  // Initialize Firebase
  const serviceAccount = JSON.parse(fs.readFileSync(FIREBASE_ADMIN_KEY_PATH, 'utf8'));
  admin.initializeApp({ credential: cert(serviceAccount) });
  const db = admin.firestore();

  // Get all questions
  const snapshot = await db.collection('mtoQuestions').get();
  console.log(`Total documents: ${snapshot.size}`);

  // Group by legacyId
  const byLegacyId = new Map<string, admin.firestore.QueryDocumentSnapshot[]>();

  snapshot.forEach(doc => {
    const legacyId = doc.data().legacyId || doc.id;
    if (!byLegacyId.has(legacyId)) {
      byLegacyId.set(legacyId, []);
    }
    byLegacyId.get(legacyId)!.push(doc);
  });

  // Find duplicates
  const toDelete: admin.firestore.QueryDocumentSnapshot[] = [];

  byLegacyId.forEach((docs, legacyId) => {
    if (docs.length > 1) {
      console.log(`  ${legacyId}: ${docs.length} copies (keeping 1, deleting ${docs.length - 1})`);
      // Keep first, delete rest
      toDelete.push(...docs.slice(1));
    }
  });

  console.log(`\nUnique legacyIds: ${byLegacyId.size}`);
  console.log(`Duplicates to delete: ${toDelete.length}`);

  if (toDelete.length === 0) {
    console.log('\nNo duplicates found!');
    process.exit(0);
  }

  if (DRY_RUN) {
    console.log('\nDRY RUN complete. Run without --dry-run to delete.');
    process.exit(0);
  }

  // Delete in batches
  const batchSize = 500;
  for (let i = 0; i < toDelete.length; i += batchSize) {
    const batch = db.batch();
    const chunk = toDelete.slice(i, i + batchSize);
    chunk.forEach(doc => batch.delete(doc.ref));
    await batch.commit();
    console.log(`Deleted ${Math.min(i + batchSize, toDelete.length)}/${toDelete.length}`);
  }

  console.log('\n✅ Duplicates removed!');
  console.log(`Remaining documents: ${snapshot.size - toDelete.length}`);
}

main().catch(console.error);
