import { initializeApp } from 'firebase/app'
import type { FirebaseApp } from 'firebase/app'
import { getAuth, connectAuthEmulator } from 'firebase/auth'
import type { Auth } from 'firebase/auth'
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'
import type { Firestore } from 'firebase/firestore'
import { getStorage, connectStorageEmulator } from 'firebase/storage'
import type { FirebaseStorage } from 'firebase/storage'

// Firebase configuration from environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
}

// Validate configuration
const validateConfig = () => {
  const required = [
    'VITE_FIREBASE_API_KEY',
    'VITE_FIREBASE_AUTH_DOMAIN',
    'VITE_FIREBASE_PROJECT_ID',
    'VITE_FIREBASE_STORAGE_BUCKET',
    'VITE_FIREBASE_APP_ID',
  ]

  const missing = required.filter((key) => !import.meta.env[key])

  if (missing.length > 0) {
    console.error('Missing Firebase environment variables:', missing)
    console.error('Please copy .env.example to .env.local and fill in your Firebase config')
    return false
  }

  return true
}

// Initialize Firebase only if config is valid
let app: FirebaseApp | undefined
let auth: Auth | undefined
let db: Firestore | undefined
let storage: FirebaseStorage | undefined

if (validateConfig()) {
  app = initializeApp(firebaseConfig)
  auth = getAuth(app)
  db = getFirestore(app)
  storage = getStorage(app)

  // Connect to emulators in development mode ONLY if explicitly enabled
  if (import.meta.env.DEV && import.meta.env.VITE_USE_FIREBASE_EMULATORS === 'true') {
    try {
      connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true })
      connectFirestoreEmulator(db, 'localhost', 8080)
      connectStorageEmulator(storage, 'localhost', 9199)

      console.log('🧪 Connected to Firebase Emulators')
      console.log('   Auth: http://localhost:9099')
      console.log('   Firestore: http://localhost:8080')
      console.log('   Storage: http://localhost:9199')
      console.log('   UI: http://localhost:4000')
    } catch (error) {
      console.warn('Failed to connect to emulators (they may not be running):', error)
    }
  } else if (import.meta.env.DEV) {
    console.log('🔥 Connected to Firebase Production')
    console.log('   Tip: Set VITE_USE_FIREBASE_EMULATORS=true in .env.local to use emulators')
  }
} else {
  console.warn('Firebase not initialized. Please configure environment variables.')
}

// Export with type assertion - app won't work without Firebase anyway
const dbExport = db as Firestore
const authExport = auth as Auth
const storageExport = storage as FirebaseStorage
export { app, authExport as auth, dbExport as db, storageExport as storage }
export default app
