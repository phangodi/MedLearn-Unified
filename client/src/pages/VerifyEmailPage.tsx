import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'
import { Button } from '@/components/ui/Button'
import { motion } from 'framer-motion'
import { Mail, RefreshCw, CheckCircle, AlertCircle } from 'lucide-react'

export function VerifyEmailPage() {
  const { user, signOut, resendVerificationEmail } = useAuth()
  const navigate = useNavigate()
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [checking, setChecking] = useState(false)

  // Check if email is already verified
  useEffect(() => {
    if (user?.emailVerified) {
      navigate('/dashboard', { replace: true })
    }
  }, [user, navigate])

  // Auto-check verification status every 3 seconds
  useEffect(() => {
    if (!user) return

    const intervalId = setInterval(async () => {
      try {
        // Reload user to get latest emailVerified status
        await user.reload()

        if (user.emailVerified) {
          // Email verified! Redirect to dashboard
          navigate('/dashboard', { replace: true })
        }
      } catch (error) {
        console.error('Error checking verification status:', error)
      }
    }, 3000) // Check every 3 seconds

    return () => clearInterval(intervalId)
  }, [user, navigate])

  const handleResendEmail = async () => {
    if (!user) return

    try {
      setSending(true)
      setError(null)
      await resendVerificationEmail()
      setSent(true)

      // Reset success message after 10 seconds
      setTimeout(() => setSent(false), 10000)
    } catch (err: any) {
      console.error('Error resending verification email:', err)

      // Handle rate limiting error
      if (err.code === 'auth/too-many-requests') {
        setError('Too many requests. Please wait a few minutes before trying again.')
      } else {
        setError('Failed to send verification email. Please try again.')
      }
    } finally {
      setSending(false)
    }
  }

  const handleCheckVerification = async () => {
    if (!user) return

    try {
      setChecking(true)
      setError(null)

      // Reload user to get latest emailVerified status
      await user.reload()

      if (user.emailVerified) {
        navigate('/dashboard', { replace: true })
      } else {
        setError('Email not verified yet. Please check your inbox and click the verification link.')
      }
    } catch (err) {
      console.error('Error checking verification:', err)
      setError('Failed to check verification status. Please try again.')
    } finally {
      setChecking(false)
    }
  }

  const handleSignOut = async () => {
    try {
      await signOut()
      navigate('/login', { replace: true })
    } catch (err) {
      console.error('Error signing out:', err)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="bg-card/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-border/50">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
              <Mail className="w-10 h-10 text-primary" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Verify Your Email
          </h1>

          {/* Email address */}
          <p className="text-center text-muted-foreground mb-6">
            We sent a verification link to:
          </p>
          <p className="text-center font-semibold text-foreground mb-6 break-all px-4 py-2 bg-muted/50 rounded-lg">
            {user?.email}
          </p>

          {/* Instructions */}
          <div className="bg-muted/30 rounded-lg p-4 mb-6 space-y-2">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">1.</span> Check your inbox (and spam folder)
            </p>
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">2.</span> Click the verification link in the email
            </p>
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">3.</span> Return here and click "I've Verified"
            </p>
          </div>

          {/* Success message */}
          {sent && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-4 p-4 bg-success/10 border border-success/30 rounded-lg flex items-start gap-3"
            >
              <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-success">Email sent successfully!</p>
                <p className="text-xs text-success/80 mt-1">
                  Check your inbox and spam folder. It may take a few minutes to arrive.
                </p>
              </div>
            </motion.div>
          )}

          {/* Error message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-4 p-4 bg-destructive/10 border border-destructive/30 rounded-lg flex items-start gap-3"
            >
              <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
              <p className="text-sm text-destructive">{error}</p>
            </motion.div>
          )}

          {/* Action buttons */}
          <div className="space-y-3">
            <Button
              onClick={handleCheckVerification}
              disabled={checking}
              className="w-full"
              size="lg"
            >
              {checking ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin mr-2" />
                  Checking...
                </>
              ) : (
                <>
                  <CheckCircle className="w-4 h-4 mr-2" />
                  I've Verified My Email
                </>
              )}
            </Button>

            <Button
              onClick={handleResendEmail}
              disabled={sending || sent}
              variant="outline"
              className="w-full"
              size="lg"
            >
              {sending ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin mr-2" />
                  Sending...
                </>
              ) : sent ? (
                <>
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Email Sent
                </>
              ) : (
                <>
                  <Mail className="w-4 h-4 mr-2" />
                  Resend Verification Email
                </>
              )}
            </Button>
          </div>

          {/* Sign out option */}
          <div className="mt-6 text-center">
            <button
              onClick={handleSignOut}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors underline"
            >
              Sign out and use a different email
            </button>
          </div>

          {/* Help text */}
          <div className="mt-6 pt-6 border-t border-border/50">
            <p className="text-xs text-muted-foreground text-center">
              Can't find the email? Check your spam folder or contact support.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
