#!/usr/bin/env npx ts-node --esm

/**
 * One-time script to add testIds to Firebase systemStats/current
 */

import admin from 'firebase-admin';
import { cert } from 'firebase-admin/app';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FIREBASE_ADMIN_KEY_PATH = path.resolve(__dirname, '../../firebase-admin-key.json');

async function main() {
  console.log('\n📤 Adding testIds to Firebase systemStats/current...\n');

  const serviceAccount = JSON.parse(fs.readFileSync(FIREBASE_ADMIN_KEY_PATH, 'utf8'));
  admin.initializeApp({ credential: cert(serviceAccount) });
  const db = admin.firestore();

  const testIds = [
    '0313014645-B',
    '0313014645',
    '05561187',
    '1526033148',
    '2734027349',
    '3221027349',
    '3543048990',
    '4447200607',
    '4525102917',
    '4855200607',
    '5090109547',
    '5156012322',
    '625411501B'
  ];

  console.log('Test IDs to add:', testIds.length);
  testIds.forEach(id => console.log(`  - ${id}`));

  await db.collection('systemStats').doc('current').update({ testIds });

  console.log('\n✅ Successfully added testIds to Firebase!\n');
}

main().then(() => process.exit(0)).catch(err => {
  console.error('❌ Failed:', err);
  process.exit(1);
});
