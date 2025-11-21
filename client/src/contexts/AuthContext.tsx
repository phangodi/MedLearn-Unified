import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import type { User } from 'firebase/auth'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  OAuthProvider,
  signOut as firebaseSignOut,
  sendPasswordResetEmail,
  sendEmailVerification,
  updateProfile,
} from 'firebase/auth'
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore'
import { auth, db } from '@/firebase/config'
import { generateMedicalPseudonym } from '@/lib/anonymousNames'

interface PrivacySettings {
  postAnonymously: 'always' | 'ask' | 'never'
  showYear: boolean
}

interface UserProfile {
  uid: string
  email: string
  name: string  // Display name - shown on profile and posts
  avatar: string
  role: 'user' | 'moderator' | 'admin' | 'superadmin'
  year?: number
  isAdmin: boolean
  permissions: {
    canPin: boolean
    canDelete: boolean
    canEdit: boolean
    canPromoteUsers: boolean
    canManageAdmins: boolean
  }
  createdAt: any
  lastLogin: any
  privacySettings: PrivacySettings
  anonymousPseudonym: string
}

interface AuthContextType {
  user: User | null
  userProfile: UserProfile | null
  loading: boolean
  signInWithEmail: (email: string, password: string) => Promise<void>
  signUpWithEmail: (email: string, password: string, name: string) => Promise<void>
  signInWithGoogle: () => Promise<void>
  signInWithApple: () => Promise<void>
  signOut: () => Promise<void>
  resetPassword: (email: string) => Promise<void>
  resendVerificationEmail: () => Promise<void>
  updateUserProfile: (updates: Partial<UserProfile>) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)

  // Fetch or create user profile
  const fetchUserProfile = async (user: User) => {
    if (!db || !auth) {
      console.error('Firebase not initialized')
      return
    }

    try {
      // Support multiple super admin emails (comma-separated)
      const superAdminEmailsStr = import.meta.env.VITE_SUPER_ADMIN_EMAIL || ''
      const superAdminEmails = superAdminEmailsStr.split(',').map((email: string) => email.trim().toLowerCase())
      const isCurrentUserSuperAdmin = superAdminEmails.includes(user.email?.toLowerCase() || '')

      const userDoc = await getDoc(doc(db, 'users', user.uid))

      if (userDoc.exists()) {
        const existingProfile = userDoc.data() as UserProfile

        // ALWAYS update admin status if email matches super admin list
        const updates: any = {
          lastLogin: serverTimestamp()
        }

        if (isCurrentUserSuperAdmin && !existingProfile.isAdmin) {
          // Promote to admin
          updates.isAdmin = true
          updates.role = 'superadmin'
          updates.permissions = {
            canPin: true,
            canDelete: true,
            canEdit: true,
            canPromoteUsers: true,
            canManageAdmins: true,
          }
          console.log('🎉 Promoting existing user to Super Admin!')
        } else if (!isCurrentUserSuperAdmin && existingProfile.isAdmin) {
          // Demote from admin (email was removed from super admin list)
          updates.isAdmin = false
          updates.role = 'user'
          updates.permissions = {
            canPin: false,
            canDelete: false,
            canEdit: false,
            canPromoteUsers: false,
            canManageAdmins: false,
          }
        }

        await setDoc(doc(db, 'users', user.uid), updates, { merge: true })

        // Fetch updated profile
        const updatedDoc = await getDoc(doc(db, 'users', user.uid))
        setUserProfile(updatedDoc.data() as UserProfile)
      } else {
        // Create new user profile
        const newProfile: UserProfile = {
          uid: user.uid,
          email: user.email || '',
          name: user.displayName || user.email?.split('@')[0] || 'User',
          avatar: user.photoURL || '👤',
          role: isCurrentUserSuperAdmin ? 'superadmin' : 'user',
          year: 2, // Default to Year 2 (most students), user can change later
          isAdmin: isCurrentUserSuperAdmin,
          permissions: {
            canPin: isCurrentUserSuperAdmin,
            canDelete: isCurrentUserSuperAdmin,
            canEdit: isCurrentUserSuperAdmin,
            canPromoteUsers: isCurrentUserSuperAdmin,
            canManageAdmins: isCurrentUserSuperAdmin,
          },
          createdAt: serverTimestamp(),
          lastLogin: serverTimestamp(),
          privacySettings: {
            postAnonymously: 'ask',
            showYear: true, // Show year by default
          },
          anonymousPseudonym: generateMedicalPseudonym(user.uid),
        }

        await setDoc(doc(db, 'users', user.uid), newProfile)
        setUserProfile(newProfile)

        if (isCurrentUserSuperAdmin) {
          console.log('🎉 Super Admin account created!')
        }
      }
    } catch (error) {
      console.error('Error fetching user profile:', error)
    }
  }

  // Listen to auth state changes
  useEffect(() => {
    if (!auth) {
      setLoading(false)
      return
    }

    const unsubscribe = auth.onAuthStateChanged(async (user: User | null) => {
      setUser(user)

      if (user) {
        await fetchUserProfile(user)
      } else {
        setUserProfile(null)
      }

      setLoading(false)
    })

    return unsubscribe
  }, [])

  // Sign in with email/password
  const signInWithEmail = async (email: string, password: string) => {
    if (!auth) throw new Error('Firebase not initialized')
    await signInWithEmailAndPassword(auth, email, password)
  }

  // Sign up with email/password
  const signUpWithEmail = async (email: string, password: string, name: string) => {
    if (!auth) throw new Error('Firebase not initialized')
    const { user } = await createUserWithEmailAndPassword(auth, email, password)
    await updateProfile(user, { displayName: name })

    // Send email verification
    // Configure action code settings to use correct domain
    const actionCodeSettings = {
      url: `${window.location.origin}/dashboard`,
      handleCodeInApp: false,
    }

    // ========== DIAGNOSTIC LOGGING - REMOVE AFTER FIXING ==========
    console.log('🔍 [DIAGNOSTIC] About to send verification email to:', user.email)
    console.log('🔍 [DIAGNOSTIC] Action URL:', actionCodeSettings.url)
    try {
      await sendEmailVerification(user, actionCodeSettings)
      console.log('✅ [DIAGNOSTIC] sendEmailVerification() completed successfully')
    } catch (error: any) {
      console.error('❌ [DIAGNOSTIC] sendEmailVerification() failed:', error)
      console.error('❌ [DIAGNOSTIC] Error code:', error.code)
      console.error('❌ [DIAGNOSTIC] Error message:', error.message)
      throw error // Re-throw so user sees the error
    }
    // ========== END DIAGNOSTIC LOGGING ==========
  }

  // Sign in with Google
  const signInWithGoogle = async () => {
    if (!auth) throw new Error('Firebase not initialized')
    const provider = new GoogleAuthProvider()
    provider.setCustomParameters({
      prompt: 'select_account',
    })

    // Add timeout to prevent hanging if popup is blocked or closed
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject({ code: 'auth/timeout', message: 'Sign-in timeout' }), 60000) // 60 second timeout
    })

    await Promise.race([
      signInWithPopup(auth, provider),
      timeoutPromise
    ])
  }

  // Sign in with Apple
  const signInWithApple = async () => {
    if (!auth) throw new Error('Firebase not initialized')
    const provider = new OAuthProvider('apple.com')
    provider.addScope('email')
    provider.addScope('name')

    // Add timeout to prevent hanging if popup is blocked or closed
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject({ code: 'auth/timeout', message: 'Sign-in timeout' }), 60000) // 60 second timeout
    })

    await Promise.race([
      signInWithPopup(auth, provider),
      timeoutPromise
    ])
  }

  // Sign out
  const signOut = async () => {
    if (!auth) throw new Error('Firebase not initialized')
    await firebaseSignOut(auth)
  }

  // Reset password
  const resetPassword = async (email: string) => {
    if (!auth) throw new Error('Firebase not initialized')
    await sendPasswordResetEmail(auth, email)
  }

  // Resend email verification
  const resendVerificationEmail = async () => {
    if (!auth) throw new Error('Firebase not initialized')
    if (!user) throw new Error('No user logged in')

    // Configure action code settings to use correct domain
    const actionCodeSettings = {
      url: `${window.location.origin}/dashboard`,
      handleCodeInApp: false,
    }

    // ========== DIAGNOSTIC LOGGING - REMOVE AFTER FIXING ==========
    console.log('🔍 [DIAGNOSTIC] Resending verification email to:', user.email)
    console.log('🔍 [DIAGNOSTIC] Action URL:', actionCodeSettings.url)
    try {
      await sendEmailVerification(user, actionCodeSettings)
      console.log('✅ [DIAGNOSTIC] Resend completed successfully')
    } catch (error: any) {
      console.error('❌ [DIAGNOSTIC] Resend failed:', error)
      console.error('❌ [DIAGNOSTIC] Error code:', error.code)
      console.error('❌ [DIAGNOSTIC] Error message:', error.message)
      throw error
    }
    // ========== END DIAGNOSTIC LOGGING ==========
  }

  // Update user profile in memory (for immediate UI updates)
  const updateUserProfile = (updates: Partial<UserProfile>) => {
    if (userProfile) {
      setUserProfile({ ...userProfile, ...updates })
    }
  }

  const value: AuthContextType = {
    user,
    userProfile,
    loading,
    signInWithEmail,
    signUpWithEmail,
    signInWithGoogle,
    signInWithApple,
    signOut,
    resetPassword,
    resendVerificationEmail,
    updateUserProfile,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
