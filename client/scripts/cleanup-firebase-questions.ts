#!/usr/bin/env ts-node

/**
 * Cleanup Firebase MTO Questions
 * Deletes all documents from mtoQuestions and systemStats collections
 */

import admin from 'firebase-admin';
import { cert } from 'firebase-admin/app';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FIREBASE_ADMIN_KEY_PATH = path.resolve(__dirname, '../../firebase-admin-key.json');

async function deleteCollection(db: admin.firestore.Firestore, collectionName: string): Promise<number> {
  const collectionRef = db.collection(collectionName);
  const snapshot = await collectionRef.get();

  if (snapshot.empty) {
    console.log(`   Collection ${collectionName} is empty`);
    return 0;
  }

  const batchSize = 500;
  let deleted = 0;

  while (true) {
    const batch = db.batch();
    const docs = await collectionRef.limit(batchSize).get();

    if (docs.empty) break;

    docs.forEach(doc => {
      batch.delete(doc.ref);
      deleted++;
    });

    await batch.commit();
    console.log(`   Deleted ${deleted} documents from ${collectionName}...`);
  }

  return deleted;
}

async function main() {
  console.log('\n╔════════════════════════════════════════════════════════════╗');
  console.log('║          Firebase MTO Questions Cleanup Script             ║');
  console.log('╚════════════════════════════════════════════════════════════╝\n');

  if (!fs.existsSync(FIREBASE_ADMIN_KEY_PATH)) {
    console.error('❌ Firebase Admin key not found');
    process.exit(1);
  }

  const serviceAccount = JSON.parse(fs.readFileSync(FIREBASE_ADMIN_KEY_PATH, 'utf8'));
  admin.initializeApp({ credential: cert(serviceAccount) });
  const db = admin.firestore();

  console.log('✅ Firebase initialized\n');
  console.log('🗑️  Deleting collections...\n');

  const questionsDeleted = await deleteCollection(db, 'mtoQuestions');
  const statsDeleted = await deleteCollection(db, 'systemStats');
  const explanationsDeleted = await deleteCollection(db, 'questionExplanations');

  console.log('\n╔════════════════════════════════════════════════════════════╗');
  console.log('║                    CLEANUP COMPLETE                        ║');
  console.log('╚════════════════════════════════════════════════════════════╝\n');
  console.log(`   mtoQuestions deleted: ${questionsDeleted}`);
  console.log(`   systemStats deleted: ${statsDeleted}`);
  console.log(`   questionExplanations deleted: ${explanationsDeleted}\n`);
}

main().then(() => process.exit(0)).catch(e => { console.error(e); process.exit(1); });
