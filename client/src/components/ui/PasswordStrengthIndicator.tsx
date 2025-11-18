import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import { calculatePasswordStrength, type PasswordStrength } from '@/lib/passwordValidation'

interface PasswordStrengthIndicatorProps {
  password: string
  showRequirements?: boolean
}

export function PasswordStrengthIndicator({ password, showRequirements = true }: PasswordStrengthIndicatorProps) {
  const strength = calculatePasswordStrength(password)

  // Don't show anything if password is empty
  if (password.length === 0) {
    return null
  }

  return (
    <div className="space-y-3">
      {/* Strength Bar */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-xs font-medium text-muted-foreground">Password Strength</span>
          <span className={`text-xs font-semibold ${getStrengthColor(strength.label)}`}>
            {strength.label.charAt(0).toUpperCase() + strength.label.slice(1)}
          </span>
        </div>
        <div className="flex gap-1">
          {[1, 2, 3, 4].map((level) => (
            <div
              key={level}
              className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                level <= strength.score
                  ? getStrengthBarColor(strength.label)
                  : 'bg-gray-200 dark:bg-gray-700'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Requirements Checklist */}
      {showRequirements && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="space-y-1.5"
        >
          <Requirement met={strength.requirements.minLength} text="At least 8 characters" />
          <Requirement met={strength.requirements.hasUppercase} text="One uppercase letter (A-Z)" />
          <Requirement met={strength.requirements.hasLowercase} text="One lowercase letter (a-z)" />
          <Requirement met={strength.requirements.hasNumber} text="One number (0-9)" />
          <Requirement
            met={strength.requirements.hasSpecialChar}
            text="Special character (optional, adds strength)"
            optional
          />
        </motion.div>
      )}
    </div>
  )
}

interface RequirementProps {
  met: boolean
  text: string
  optional?: boolean
}

function Requirement({ met, text, optional = false }: RequirementProps) {
  return (
    <div className="flex items-center gap-2">
      {met ? (
        <Check className="w-3.5 h-3.5 text-green-600 dark:text-green-400 flex-shrink-0" />
      ) : (
        <X className="w-3.5 h-3.5 text-gray-400 dark:text-gray-600 flex-shrink-0" />
      )}
      <span
        className={`text-xs ${
          met
            ? 'text-green-700 dark:text-green-300 font-medium'
            : optional
            ? 'text-gray-500 dark:text-gray-500'
            : 'text-gray-600 dark:text-gray-400'
        }`}
      >
        {text}
      </span>
    </div>
  )
}

function getStrengthColor(label: PasswordStrength['label']): string {
  switch (label) {
    case 'weak':
      return 'text-red-600 dark:text-red-400'
    case 'fair':
      return 'text-orange-600 dark:text-orange-400'
    case 'good':
      return 'text-blue-600 dark:text-blue-400'
    case 'strong':
      return 'text-green-600 dark:text-green-400'
  }
}

function getStrengthBarColor(label: PasswordStrength['label']): string {
  switch (label) {
    case 'weak':
      return 'bg-red-500'
    case 'fair':
      return 'bg-orange-500'
    case 'good':
      return 'bg-blue-500'
    case 'strong':
      return 'bg-green-500'
  }
}
