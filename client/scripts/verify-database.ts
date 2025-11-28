import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Firebase Admin
const serviceAccountPath = path.join(__dirname, '../../firebase-admin-key.json');
const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function verifyDatabase() {
  console.log('='.repeat(60));
  console.log('        FIREBASE DATABASE VERIFICATION');
  console.log('='.repeat(60));

  const snapshot = await db.collection('questionExplanations').get();
  console.log('\n📊 Total documents in mtoExplanations:', snapshot.size);

  // Check for duplicate document IDs (shouldn't be possible in Firestore, but check anyway)
  const idCounts: Record<string, number> = {};
  snapshot.docs.forEach(doc => {
    idCounts[doc.id] = (idCounts[doc.id] || 0) + 1;
  });

  const duplicates = Object.entries(idCounts).filter(([_, count]) => count > 1);
  if (duplicates.length > 0) {
    console.log('\n⚠️  DUPLICATES FOUND (this should be impossible):');
    duplicates.forEach(([id, count]) => console.log('  ', id, ':', count, 'times'));
  } else {
    console.log('\n✅ NO DUPLICATE DOCUMENT IDs - Database structure is correct');
  }

  // Count by topic
  const topicCounts: Record<string, number> = {};
  snapshot.docs.forEach(doc => {
    const data = doc.data();
    const topicRef = data.topicReference || 'unknown';
    const match = topicRef.match(/Topic (\d+)/);
    const topic = match ? match[1] : 'unknown';
    topicCounts[topic] = (topicCounts[topic] || 0) + 1;
  });

  console.log('\n📋 Explanations by topic:');
  const sortedTopics = Object.keys(topicCounts).sort((a,b) => parseInt(a) - parseInt(b));
  sortedTopics.forEach(t => {
    console.log(`  Topic ${t}: ${topicCounts[t]} explanations`);
  });

  console.log('\n' + '='.repeat(60));
  console.log('✅ DATABASE VERIFICATION COMPLETE');
  console.log('='.repeat(60));
}

verifyDatabase();
