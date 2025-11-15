import { initializeApp, getApps } from 'firebase/app'
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'
import { getAuth, connectAuthEmulator } from 'firebase/auth'
import { getStorage, connectStorageEmulator } from 'firebase/storage'

// Firebase configuration for demo/development
// In production, replace with your actual Firebase config
const firebaseConfig = {
  apiKey: 'demo-api-key',
  authDomain: 'demo-medlearn.firebaseapp.com',
  projectId: 'demo-medlearn',
  storageBucket: 'demo-medlearn.appspot.com',
  messagingSenderId: '123456789',
  appId: 'demo-app-id'
}

// Initialize Firebase (prevent duplicate initialization during hot reload)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]

// Initialize services
const db = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)

// Connect to emulators IMMEDIATELY in development (before exporting)
const isDevelopment = import.meta.env.DEV || window.location.hostname === 'localhost'

if (isDevelopment) {
  try {
    connectFirestoreEmulator(db, 'localhost', 8080)
    console.log('🔥 Connected to Firestore Emulator (localhost:8080)')
  } catch (error) {
    console.warn('⚠️ Firestore emulator not available:', (error as Error).message)
  }

  try {
    connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true })
    console.log('🔥 Connected to Auth Emulator (localhost:9099)')
  } catch (error) {
    console.warn('⚠️ Auth emulator not available:', (error as Error).message)
  }

  try {
    connectStorageEmulator(storage, 'localhost', 9199)
    console.log('🔥 Connected to Storage Emulator (localhost:9199)')
  } catch (error) {
    console.warn('⚠️ Storage emulator not available:', (error as Error).message)
  }
}

// Export after emulator connection
export { db, auth, storage }

export default app
