/**
 * Password Validation Utilities
 * Requirements: 8+ chars, uppercase, lowercase, number (special chars optional)
 */

export interface PasswordRequirements {
  minLength: boolean
  hasUppercase: boolean
  hasLowercase: boolean
  hasNumber: boolean
  hasSpecialChar: boolean // Optional, for bonus strength
}

export interface PasswordStrength {
  score: number // 0-4
  label: 'weak' | 'fair' | 'good' | 'strong'
  requirements: PasswordRequirements
  isValid: boolean // Meets minimum requirements
}

/**
 * Check all password requirements
 */
export function checkPasswordRequirements(password: string): PasswordRequirements {
  return {
    minLength: password.length >= 8,
    hasUppercase: /[A-Z]/.test(password),
    hasLowercase: /[a-z]/.test(password),
    hasNumber: /[0-9]/.test(password),
    hasSpecialChar: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
  }
}

/**
 * Calculate password strength (0-4)
 */
export function calculatePasswordStrength(password: string): PasswordStrength {
  const requirements = checkPasswordRequirements(password)

  // Check if password meets minimum requirements
  const isValid =
    requirements.minLength &&
    requirements.hasUppercase &&
    requirements.hasLowercase &&
    requirements.hasNumber

  // Calculate strength score (0-4)
  let score = 0

  // Length scoring
  if (password.length >= 8) score++
  if (password.length >= 12) score++

  // Character type scoring
  if (requirements.hasUppercase && requirements.hasLowercase) score++
  if (requirements.hasNumber) score++
  if (requirements.hasSpecialChar) score++

  // Cap at 4
  score = Math.min(score, 4)

  // Determine label
  let label: 'weak' | 'fair' | 'good' | 'strong'
  if (score <= 1) label = 'weak'
  else if (score === 2) label = 'fair'
  else if (score === 3) label = 'good'
  else label = 'strong'

  return {
    score,
    label,
    requirements,
    isValid,
  }
}

/**
 * Validate password and return error message if invalid
 */
export function validatePassword(password: string): string | null {
  if (password.length < 8) {
    return 'Password must be at least 8 characters long'
  }

  if (!/[A-Z]/.test(password)) {
    return 'Password must contain at least one uppercase letter'
  }

  if (!/[a-z]/.test(password)) {
    return 'Password must contain at least one lowercase letter'
  }

  if (!/[0-9]/.test(password)) {
    return 'Password must contain at least one number'
  }

  return null // Valid
}
