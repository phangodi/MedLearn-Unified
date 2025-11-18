import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Label } from '@/components/ui/Label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { BorderFrame } from '@/components/layout/BorderFrame'
import { Particles } from '@/components/ui/Particles'
import { HeroSection } from '@/components/layout/HeroSection'
import { Activity, Mail, Lock, User, AlertCircle } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'
import { useToast } from '@/components/ui/Toast'
import { getAuthErrorMessage } from '@/lib/authErrors'
import { validatePassword } from '@/lib/passwordValidation'
import { PasswordStrengthIndicator } from '@/components/ui/PasswordStrengthIndicator'

export function AuthPage() {
  const navigate = useNavigate()
  const { user, loading, signInWithEmail, signUpWithEmail, signInWithGoogle, signInWithApple, resetPassword } = useAuth()
  const toast = useToast()

  const [mode, setMode] = useState<'signin' | 'signup' | 'reset'>('signin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const [localLoading, setLocalLoading] = useState(false)

  // Redirect to dashboard if user is already logged in
  useEffect(() => {
    if (!loading && user) {
      navigate('/dashboard', { replace: true })
    }
  }, [user, loading, navigate])

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLocalLoading(true)

    try {
      if (mode === 'reset') {
        // Password Reset
        await resetPassword(email)
        toast.success('Password reset email sent! Check your inbox (or emulator console if using emulators).')
        // Clear form and switch back to sign in
        setEmail('')
        setTimeout(() => setMode('signin'), 2000)
      } else if (mode === 'signup') {
        // Validate password strength before signup
        const passwordError = validatePassword(password)
        if (passwordError) {
          setError(passwordError)
          toast.error(passwordError)
          setLocalLoading(false)
          return
        }

        // Sign Up
        await signUpWithEmail(email, password, name)
        toast.success('Account created! Please check your email to verify your address.')
        navigate('/dashboard')
      } else {
        // Sign In
        await signInWithEmail(email, password)
        toast.success('Welcome back!')
        navigate('/dashboard')
      }
    } catch (err: any) {
      console.error('Auth error:', err)
      const friendlyMessage = getAuthErrorMessage(err)
      setError(friendlyMessage)
      toast.error(friendlyMessage)
    } finally {
      setLocalLoading(false)
    }
  }

  const handleGoogleSignIn = async () => {
    setError('')
    setLocalLoading(true)

    try {
      await signInWithGoogle()
      toast.success('Successfully signed in with Google!')
      navigate('/dashboard')
    } catch (err: any) {
      console.error('Google sign-in error:', err)
      const friendlyMessage = getAuthErrorMessage(err)
      setError(friendlyMessage)
      toast.error(friendlyMessage)
    } finally {
      setLocalLoading(false)
    }
  }

  const handleAppleSignIn = async () => {
    setError('')
    setLocalLoading(true)

    try {
      await signInWithApple()
      toast.success('Successfully signed in with Apple!')
      navigate('/dashboard')
    } catch (err: any) {
      console.error('Apple sign-in error:', err)
      const friendlyMessage = getAuthErrorMessage(err)
      setError(friendlyMessage)
      toast.error(friendlyMessage)
    } finally {
      setLocalLoading(false)
    }
  }

  return (
    <div className="min-h-screen w-full bg-background relative overflow-hidden">
      {/* Animated particle background - same as dashboard */}
      <Particles quantity={60} ease={50} />

      {/* Diagonal line pattern background - full width for login page */}
      <BorderFrame fullWidth={true} />

      {/* Background Hero Section - full visibility, pointer-events disabled */}
      <div className="absolute inset-0 overflow-auto pointer-events-none">
        <div className="min-h-screen mx-auto px-6 lg:px-10 py-8 max-w-7xl">
          <HeroSection interactive={false} />
        </div>
      </div>

      {/* Theme Toggle */}
      <div className="absolute top-4 right-4 z-50 pointer-events-auto">
        <ThemeToggle />
      </div>

      {/* Login Card - Centered Overlay with strong glassmorphism */}
      <div className="relative z-40 min-h-screen w-full flex items-center justify-center px-4 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md pointer-events-auto"
        >
        <Card className="backdrop-blur-xl bg-card/98 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] border-2 border-border/60">
          <CardHeader className="space-y-3">
            <div className="flex items-center justify-center mb-2">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                <Activity className="w-6 h-6 text-primary-foreground" />
              </div>
            </div>
            <CardTitle className="text-2xl text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Lara's MedLearn
            </CardTitle>
            <CardDescription className="text-center">
              {mode === 'signin' && 'Welcome back! Sign in to continue'}
              {mode === 'signup' && 'Create your account to get started'}
              {mode === 'reset' && 'Reset your password'}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            {/* Error Message */}
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-3 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg flex items-center gap-2 text-red-600 dark:text-red-400 text-sm"
                >
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{error}</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Social Login Buttons */}
            <div className="space-y-2">
              <Button
                onClick={handleGoogleSignIn}
                disabled={localLoading}
                variant="outline"
                className="w-full flex items-center justify-center gap-2 hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 hover:text-foreground transition-all duration-200"
                type="button"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continue with Google
              </Button>

              <Button
                onClick={handleAppleSignIn}
                disabled={localLoading}
                variant="outline"
                className="w-full flex items-center justify-center gap-2 hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 hover:text-foreground transition-all duration-200"
                type="button"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                Continue with Apple
              </Button>
            </div>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">Or continue with email</span>
              </div>
            </div>

            {/* Email/Password Form */}
            <form onSubmit={handleEmailAuth} className="space-y-3">
              {mode === 'signup' && (
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="pl-10"
                      required
                      disabled={localLoading}
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                    disabled={localLoading}
                  />
                </div>
              </div>

              {mode !== 'reset' && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    {mode === 'signin' && (
                      <button
                        onClick={() => setMode('reset')}
                        className="text-xs text-primary hover:underline"
                        type="button"
                      >
                        Forgot password?
                      </button>
                    )}
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10"
                      required
                      disabled={localLoading}
                      minLength={mode === 'signup' ? 8 : 6}
                    />
                  </div>

                  {/* Password Strength Indicator (only show during signup) */}
                  {mode === 'signup' && password.length > 0 && (
                    <div className="mt-3">
                      <PasswordStrengthIndicator password={password} showRequirements={true} />
                    </div>
                  )}
                </div>
              )}

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white"
                disabled={localLoading}
              >
                {localLoading ? 'Please wait...' : mode === 'signin' ? 'Sign In' : mode === 'signup' ? 'Sign Up' : 'Send Reset Link'}
              </Button>
            </form>
          </CardContent>

          <CardFooter className="flex flex-col space-y-2">
            <div className="text-sm text-center text-muted-foreground">
              {mode === 'signin' && (
                <>
                  Don't have an account?{' '}
                  <button
                    onClick={() => setMode('signup')}
                    className="text-primary hover:underline"
                    type="button"
                  >
                    Sign up
                  </button>
                </>
              )}
              {mode === 'signup' && (
                <>
                  Already have an account?{' '}
                  <button
                    onClick={() => setMode('signin')}
                    className="text-primary hover:underline"
                    type="button"
                  >
                    Sign in
                  </button>
                </>
              )}
              {mode === 'reset' && (
                <>
                  Remember your password?{' '}
                  <button
                    onClick={() => setMode('signin')}
                    className="text-primary hover:underline"
                    type="button"
                  >
                    Back to sign in
                  </button>
                </>
              )}
            </div>

            {/* Free for medical students message */}
            <p className="text-center text-xs text-muted-foreground pt-2 border-t border-border/30">
              Free for all medical students. Always.
            </p>
          </CardFooter>
        </Card>
        </motion.div>
      </div>
    </div>
  )
}
