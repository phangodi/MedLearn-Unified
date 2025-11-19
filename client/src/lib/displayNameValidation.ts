/**
 * Display Name Validation Utility
 * Validates display names for length, content, and offensive language
 */

// Common offensive words to filter (expand as needed)
const OFFENSIVE_WORDS = [
  'fuck',
  'shit',
  'bitch',
  'ass',
  'damn',
  'crap',
  'dick',
  'piss',
  'bastard',
  'slut',
  'whore',
  'cock',
  'pussy',
  // Add more as needed
]

// Character limits
const MIN_LENGTH = 3
const MAX_LENGTH = 30

/**
 * Validates a display name
 * @param name - The display name to validate
 * @returns Object with isValid boolean and error message if invalid
 */
export function validateDisplayName(name: string): { isValid: boolean; error?: string } {
  // Trim whitespace
  const trimmedName = name.trim()

  // Check minimum length
  if (trimmedName.length < MIN_LENGTH) {
    return {
      isValid: false,
      error: `Display name must be at least ${MIN_LENGTH} characters`
    }
  }

  // Check maximum length
  if (trimmedName.length > MAX_LENGTH) {
    return {
      isValid: false,
      error: `Display name must be no more than ${MAX_LENGTH} characters`
    }
  }

  // Check for empty or only whitespace
  if (trimmedName.length === 0) {
    return {
      isValid: false,
      error: 'Display name cannot be empty'
    }
  }

  // Check for offensive words (case-insensitive)
  const lowerName = trimmedName.toLowerCase()
  for (const word of OFFENSIVE_WORDS) {
    if (lowerName.includes(word)) {
      return {
        isValid: false,
        error: 'Display name contains inappropriate language'
      }
    }
  }

  // Check for excessive special characters (allow emojis but not spam)
  const specialCharCount = (trimmedName.match(/[^a-zA-Z0-9\s]/g) || []).length
  if (specialCharCount > 10) {
    return {
      isValid: false,
      error: 'Display name has too many special characters'
    }
  }

  // All checks passed
  return { isValid: true }
}

/**
 * Sanitizes a display name by trimming whitespace
 * @param name - The display name to sanitize
 * @returns Sanitized display name
 */
export function sanitizeDisplayName(name: string): string {
  return name.trim()
}

/**
 * Gets the character count for a display name (useful for UI feedback)
 * @param name - The display name
 * @returns Character count
 */
export function getDisplayNameLength(name: string): number {
  return name.trim().length
}

/**
 * Gets remaining characters allowed
 * @param name - The display name
 * @returns Remaining characters
 */
export function getRemainingCharacters(name: string): number {
  return MAX_LENGTH - getDisplayNameLength(name)
}
