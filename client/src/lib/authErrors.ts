/**
 * Firebase Auth Error Code to User-Friendly Message Mapper
 * Converts technical Firebase error codes into readable messages for users
 */

export function getAuthErrorMessage(error: any): string {
  // If error has a code property, map it
  const errorCode = error?.code || error?.message || ''

  // Firebase Auth Error Code Mappings
  const errorMessages: Record<string, string> = {
    // Email/Password Authentication
    'auth/email-already-in-use': 'This email address is already registered. Please sign in instead.',
    'auth/invalid-email': 'Please enter a valid email address.',
    'auth/user-not-found': 'No account found with this email address. Please sign up first.',
    'auth/wrong-password': 'Incorrect password. Please try again or reset your password.',
    'auth/weak-password': 'Password should be at least 6 characters long.',
    'auth/user-disabled': 'This account has been disabled. Please contact support.',

    // Account State
    'auth/email-already-exists': 'This email is already registered. Please sign in instead.',
    'auth/requires-recent-login': 'For security, please sign out and sign in again before making this change.',
    'auth/user-token-expired': 'Your session has expired. Please sign in again.',

    // Network & Connection
    'auth/network-request-failed': 'Network error. Please check your internet connection and try again.',
    'auth/too-many-requests': 'Too many attempts. Please wait a few minutes before trying again.',
    'auth/timeout': 'Request timed out. Please check your connection and try again.',

    // OAuth Errors
    'auth/popup-blocked': 'Sign-in popup was blocked. Please allow popups and try again.',
    'auth/popup-closed-by-user': 'Sign-in was cancelled. Please try again.',
    'auth/cancelled-popup-request': 'Another sign-in is in progress. Please wait.',
    'auth/account-exists-with-different-credential': 'An account already exists with this email using a different sign-in method.',
    'auth/credential-already-in-use': 'This credential is already associated with a different account.',

    // Operation Errors
    'auth/operation-not-allowed': 'This sign-in method is not enabled. Please contact support.',
    'auth/invalid-credential': 'Invalid credentials. Please try again.',
    'auth/invalid-verification-code': 'Invalid verification code. Please try again.',
    'auth/invalid-verification-id': 'Verification failed. Please try signing in again.',

    // Custom Errors
    'Firebase not initialized': 'Authentication service is not configured. Please check your setup.',
    'auth/missing-email': 'Please enter your email address.',
    'auth/missing-password': 'Please enter your password.',
  }

  // Check if we have a mapping for this error code
  if (errorMessages[errorCode]) {
    return errorMessages[errorCode]
  }

  // Check if error code is in the error message string
  for (const [code, message] of Object.entries(errorMessages)) {
    if (errorCode.includes(code)) {
      return message
    }
  }

  // Default fallback messages
  if (errorCode.includes('email')) {
    return 'There was a problem with your email address. Please check and try again.'
  }
  if (errorCode.includes('password')) {
    return 'There was a problem with your password. Please try again.'
  }
  if (errorCode.includes('network') || errorCode.includes('connection')) {
    return 'Connection error. Please check your internet and try again.'
  }

  // Final fallback
  return 'Something went wrong. Please try again or contact support if the problem persists.'
}
