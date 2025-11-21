#!/usr/bin/env node
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, doc, deleteDoc } from 'firebase/firestore'
import { config } from 'dotenv'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Load environment variables
config({ path: join(__dirname, '.env.local') })

console.log('🔥 MedLearn Firestore Cleanup Script')
console.log('=====================================\n')

// Initialize Firebase
const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

// These are the ONLY 4 valid user UIDs from your Firebase Auth Console
const VALID_UIDS = [
  'KKx3dEmadmQDujvbbWWHf',      // hpeti@icloud.com
  'raTlcJTWCZVoBm50v2E6ZDZ',    // hpeti@me.com
  '07C6W6jGbtVAbxW3EaWUm2',     // lara05@me.com
  'tdEb7msBytWsruiQn2spBM3k',   // hpeti@mac.com
]

async function cleanupOrphanedUsers() {
  try {
    console.log('📊 Fetching all users from Firestore...\n')

    const usersSnapshot = await getDocs(collection(db, 'users'))
    const allUsers = []

    usersSnapshot.forEach(doc => {
      allUsers.push({
        id: doc.id,
        data: doc.data()
      })
    })

    console.log(`Found ${allUsers.length} total documents in Firestore\n`)

    // Identify orphaned users
    const orphanedUsers = []
    const validUsers = []

    allUsers.forEach(user => {
      const isValid = VALID_UIDS.some(validUid => user.id.startsWith(validUid))

      if (isValid) {
        validUsers.push(user)
        console.log(`✅ KEEP: ${user.data.email} (${user.id.substring(0, 20)}...)`)
      } else {
        orphanedUsers.push(user)
        console.log(`❌ DELETE: ${user.data.email} (${user.id.substring(0, 20)}...)`)
      }
    })

    console.log(`\n📈 Summary:`)
    console.log(`   Valid users: ${validUsers.length}`)
    console.log(`   Orphaned documents: ${orphanedUsers.length}\n`)

    if (orphanedUsers.length === 0) {
      console.log('✅ No orphaned documents found! Database is clean.')
      process.exit(0)
    }

    // Delete orphaned documents
    console.log(`🗑️  Deleting ${orphanedUsers.length} orphaned documents...\n`)

    let deleted = 0
    for (const user of orphanedUsers) {
      try {
        await deleteDoc(doc(db, 'users', user.id))
        console.log(`   ✅ Deleted: ${user.data.email}`)
        deleted++
      } catch (error) {
        console.error(`   ❌ Failed to delete ${user.data.email}:`, error.message)
      }
    }

    console.log(`\n🎉 Cleanup complete!`)
    console.log(`   Successfully deleted: ${deleted}/${orphanedUsers.length} documents\n`)
    console.log(`✅ Your admin panel will now show exactly ${validUsers.length} users matching Firebase Console!`)
    console.log(`\n🔄 Refresh your admin panel to see the changes.`)

  } catch (error) {
    console.error('\n❌ Error during cleanup:', error.message)
    process.exit(1)
  }
}

// Run the cleanup
cleanupOrphanedUsers()
