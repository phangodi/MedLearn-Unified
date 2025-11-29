import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Lock, Mail, Eye, EyeOff, AlertCircle, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import {
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider
} from 'firebase/auth'
import { auth as firebaseAuth } from '@/firebase/config'

interface AccountSecurityProps {
  email: string
  authProvider: 'password' | 'google.com' | 'apple.com'
  userId: string
}

export function AccountSecurity({ email, authProvider, userId: _userId }: AccountSecurityProps) {
  const [showChangePassword, setShowChangePassword] = useState(false)

  // Change Password states
  const [currentPasswordForPwd, setCurrentPasswordForPwd] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [passwordError, setPasswordError] = useState('')
  const [passwordSuccess, setPasswordSuccess] = useState('')
  const [passwordLoading, setPasswordLoading] = useState(false)

  const isOAuthUser = authProvider !== 'password'

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!firebaseAuth || !firebaseAuth.currentUser) return

    setPasswordError('')
    setPasswordSuccess('')

    // Validate passwords
    if (newPassword.length < 6) {
      setPasswordError('Password must be at least 6 characters long.')
      return
    }

    if (newPassword !== confirmPassword) {
      setPasswordError('New passwords do not match.')
      return
    }

    setPasswordLoading(true)

    try {
      // Re-authenticate user
      const credential = EmailAuthProvider.credential(email, currentPasswordForPwd)
      await reauthenticateWithCredential(firebaseAuth.currentUser, credential)

      // Update password
      await updatePassword(firebaseAuth.currentUser, newPassword)

      setPasswordSuccess('Password updated successfully!')
      setCurrentPasswordForPwd('')
      setNewPassword('')
      setConfirmPassword('')
      setTimeout(() => {
        setShowChangePassword(false)
        setPasswordSuccess('')
      }, 3000)
    } catch (error: any) {
      console.error('Error changing password:', error)
      if (error.code === 'auth/wrong-password') {
        setPasswordError('Incorrect current password. Please try again.')
      } else if (error.code === 'auth/weak-password') {
        setPasswordError('Password is too weak. Please use a stronger password.')
      } else if (error.code === 'auth/requires-recent-login') {
        setPasswordError('Please sign out and sign in again before changing your password.')
      } else {
        setPasswordError('Failed to update password. Please try again.')
      }
    } finally {
      setPasswordLoading(false)
    }
  }

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <h3 className="text-lg font-semibold text-foreground mb-1 flex items-center gap-2">
        <Lock className="w-5 h-5" />
        Account Security
      </h3>
      <p className="text-sm text-muted-foreground mb-6">
        Manage your login credentials and security settings
      </p>

      {/* Email Display */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Login Email
          </label>
          <div className="flex items-center gap-3 px-4 py-3 bg-muted/30 rounded-lg border border-border">
            <Mail className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-sm text-foreground font-medium truncate">{email}</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Used only for login • Not visible to other users • Not used for messaging
              </p>
            </div>
          </div>
        </div>

        {/* Email/Password User: Show Change Password Button */}
        {!isOAuthUser && (
          <>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Authentication Method
              </label>
              <div className="px-4 py-3 bg-muted/30 rounded-lg border border-border">
                <p className="text-sm text-foreground">🔑 Email/Password</p>
              </div>
            </div>

            <div className="pt-2">
              <Button
                variant="outline"
                onClick={() => {
                  setShowChangePassword(!showChangePassword)
                  setPasswordError('')
                  setPasswordSuccess('')
                }}
                className="w-full sm:w-auto"
              >
                <Lock className="w-4 h-4 mr-2" />
                Change Password
              </Button>
            </div>
          </>
        )}

        {/* OAuth User: Just show auth method, no actions */}
        {isOAuthUser && (
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Authentication Method
            </label>
            <div className="px-4 py-3 bg-muted/30 rounded-lg border border-border">
              <p className="text-sm text-foreground">
                {authProvider === 'google.com' && '🔵 Google Sign-In'}
                {authProvider === 'apple.com' && '🍎 Apple Sign-In'}
              </p>
            </div>
          </div>
        )}

        {/* Change Password Form */}
        <AnimatePresence>
          {showChangePassword && !isOAuthUser && (
            <motion.form
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              onSubmit={handleChangePassword}
              className="space-y-4 pt-4 border-t border-border overflow-hidden"
            >
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Current Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showCurrentPassword ? 'text' : 'password'}
                    value={currentPasswordForPwd}
                    onChange={(e) => setCurrentPasswordForPwd(e.target.value)}
                    placeholder="Enter your current password"
                    required
                    className="w-full px-4 py-2 pr-10 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showCurrentPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  New Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showNewPassword ? 'text' : 'password'}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Enter your new password"
                    required
                    className="w-full px-4 py-2 pr-10 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                <p className="text-xs text-muted-foreground mt-1.5">
                  Must be at least 6 characters long
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Confirm New Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm your new password"
                    required
                    className="w-full px-4 py-2 pr-10 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {passwordError && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-sm"
                >
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  {passwordError}
                </motion.div>
              )}

              {passwordSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-3 bg-green-500/10 border border-green-500/20 rounded-lg text-green-500 text-sm"
                >
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  {passwordSuccess}
                </motion.div>
              )}

              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setShowChangePassword(false)
                    setCurrentPasswordForPwd('')
                    setNewPassword('')
                    setConfirmPassword('')
                    setPasswordError('')
                  }}
                  disabled={passwordLoading}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={!currentPasswordForPwd || !newPassword || !confirmPassword || passwordLoading}
                  className="flex-1"
                >
                  {passwordLoading ? 'Updating...' : 'Update Password'}
                </Button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
