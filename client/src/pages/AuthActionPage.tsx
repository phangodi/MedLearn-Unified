import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { applyActionCode } from 'firebase/auth'
import { auth } from '@/firebase/config'
import { Button } from '@/components/ui/Button'
import { motion } from 'framer-motion'
import { CheckCircle, XCircle, Loader2, Mail } from 'lucide-react'

type ActionMode = 'verifyEmail' | 'resetPassword' | 'recoverEmail' | 'unknown'

export function AuthActionPage() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const [loading, setLoading] = useState(true)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [mode, setMode] = useState<ActionMode>('unknown')

  useEffect(() => {
    handleAuthAction()
  }, [])

  const handleAuthAction = async () => {
    if (!auth) {
      setError('Firebase not initialized')
      setLoading(false)
      return
    }

    const actionMode = searchParams.get('mode') as ActionMode
    const actionCode = searchParams.get('oobCode')

    if (!actionCode) {
      setError('Invalid or missing action code')
      setLoading(false)
      return
    }

    setMode(actionMode)

    try {
      switch (actionMode) {
        case 'verifyEmail':
          await handleVerifyEmail(actionCode)
          break
        case 'resetPassword':
          // For password reset, we need to show a form (implement later if needed)
          setError('Password reset not yet implemented. Please request a new reset link.')
          break
        case 'recoverEmail':
          setError('Email recovery not yet implemented. Please contact support.')
          break
        default:
          setError('Invalid action type')
      }
    } catch (err: any) {
      console.error('Auth action error:', err)

      switch (err.code) {
        case 'auth/expired-action-code':
          setError('This link has expired. Please request a new verification email.')
          break
        case 'auth/invalid-action-code':
          setError('This link is invalid or has already been used.')
          break
        case 'auth/user-disabled':
          setError('This account has been disabled.')
          break
        case 'auth/user-not-found':
          setError('User not found.')
          break
        default:
          setError('An error occurred. Please try again.')
      }
    } finally {
      setLoading(false)
    }
  }

  const handleVerifyEmail = async (actionCode: string) => {
    await applyActionCode(auth!, actionCode)
    setSuccess(true)

    // Redirect to dashboard after 3 seconds
    setTimeout(() => {
      navigate('/dashboard')
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="bg-card/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-border/50">
          {/* Loading State */}
          {loading && (
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <Loader2 className="w-10 h-10 text-primary animate-spin" />
                </div>
              </div>
              <h1 className="text-2xl font-bold mb-2">Verifying...</h1>
              <p className="text-muted-foreground">Please wait while we verify your email.</p>
            </div>
          )}

          {/* Success State */}
          {!loading && success && (
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-success" />
                </div>
              </div>
              <h1 className="text-3xl font-bold mb-2 text-success">Email Verified!</h1>
              <p className="text-muted-foreground mb-6">
                Your email has been successfully verified. Redirecting to dashboard...
              </p>
              <Button onClick={() => navigate('/dashboard')} size="lg" className="w-full">
                Go to Dashboard
              </Button>
            </div>
          )}

          {/* Error State */}
          {!loading && error && (
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-destructive/10 flex items-center justify-center">
                  <XCircle className="w-10 h-10 text-destructive" />
                </div>
              </div>
              <h1 className="text-3xl font-bold mb-2 text-destructive">Verification Failed</h1>
              <p className="text-muted-foreground mb-6">{error}</p>

              <div className="space-y-3">
                {mode === 'verifyEmail' && (
                  <>
                    <Button
                      onClick={() => navigate('/verify-email')}
                      size="lg"
                      className="w-full"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Request New Verification Email
                    </Button>
                    <Button
                      onClick={() => navigate('/login')}
                      variant="outline"
                      size="lg"
                      className="w-full"
                    >
                      Back to Login
                    </Button>
                  </>
                )}

                {mode !== 'verifyEmail' && (
                  <Button
                    onClick={() => navigate('/login')}
                    size="lg"
                    className="w-full"
                  >
                    Back to Login
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  )
}
