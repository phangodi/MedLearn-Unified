import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Label } from '@/components/ui/Label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { Particles } from '@/components/ui/Particles'
import { LoginHero } from '@/components/layout/LoginHero'
import { Mail, Lock, User, AlertCircle } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'
import { useAuth } from '@/contexts/AuthContext'
import { useToast } from '@/components/ui/Toast'
import { getAuthErrorMessage } from '@/lib/authErrors'
import { validatePassword } from '@/lib/passwordValidation'
import { PasswordStrengthIndicator } from '@/components/ui/PasswordStrengthIndicator'
import { validateDisplayName } from '@/lib/displayNameValidation'

// 3D Card wrapper with mouse tracking
function Card3DWrapper({ children }: { children: React.ReactNode }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(mouseY, [-200, 200], [5, -5])
  const rotateY = useTransform(mouseX, [-200, 200], [-5, 5])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      style={{ perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

// Form field entrance animation variants
const formVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const fieldVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
}

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
        // Validate display name
        const displayNameValidation = validateDisplayName(name)
        if (!displayNameValidation.isValid) {
          setError(displayNameValidation.error || 'Invalid display name')
          toast.error(displayNameValidation.error || 'Invalid display name')
          setLocalLoading(false)
          return
        }

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

      // Handle popup closed by user - don't show scary error, just reset
      if (err?.code === 'auth/popup-closed-by-user' ||
          err?.code === 'auth/cancelled-popup-request' ||
          err?.code === 'auth/timeout') {
        // User cancelled or timeout, silently reset without showing error
        return
      }

      // Handle popup blocked
      if (err?.code === 'auth/popup-blocked') {
        setError('Please allow popups for this site to sign in with Google.')
        toast.error('Please allow popups for this site to sign in with Google.')
        return
      }

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

      // Handle popup closed by user - don't show scary error, just reset
      if (err?.code === 'auth/popup-closed-by-user' ||
          err?.code === 'auth/cancelled-popup-request' ||
          err?.code === 'auth/timeout') {
        // User cancelled or timeout, silently reset without showing error
        return
      }

      // Handle popup blocked
      if (err?.code === 'auth/popup-blocked') {
        setError('Please allow popups for this site to sign in with Apple.')
        toast.error('Please allow popups for this site to sign in with Apple.')
        return
      }

      const friendlyMessage = getAuthErrorMessage(err)
      setError(friendlyMessage)
      toast.error(friendlyMessage)
    } finally {
      setLocalLoading(false)
    }
  }

  return (
    <div className="min-h-screen w-full bg-background relative overflow-hidden">
      {/* Animated particle background */}
      <Particles quantity={40} ease={50} />

      {/* Theme Toggle - Always visible */}
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Split Screen Layout */}
      <div className="min-h-screen flex flex-col lg:flex-row">
        {/* Left Side - Hero (hidden on mobile, shown on lg+) */}
        <div className="hidden lg:flex lg:w-1/2 xl:w-[52%] relative bg-gradient-to-br from-slate-50 via-background to-primary/[0.08] dark:from-background dark:via-background dark:to-primary/10">
          <LoginHero />
        </div>

        {/* Right Side - Login Card */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-12 xl:px-16 py-12 lg:py-0 relative">
          {/* Mobile Hero - Only shown on mobile */}
          <div className="lg:hidden absolute inset-0 overflow-hidden pointer-events-none">
            {/* Gradient orbs for mobile */}
            <motion.div
              className="absolute -top-20 -right-20 w-[250px] h-[250px] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-gradient-to-tr from-secondary/20 to-primary/20 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>

          {/* Mobile Header - Only shown on mobile */}
          <motion.div
            className="lg:hidden absolute top-8 left-0 right-0 text-center px-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">
              <span className="bg-gradient-to-r from-primary via-cyan-500 to-secondary bg-clip-text text-transparent">
                Your AI Study Partner
              </span>
            </h1>
            <p className="text-sm text-muted-foreground">
              AI does the prep. You do the learning.
            </p>
          </motion.div>

          {/* Login Card */}
          <div className="w-full max-w-md mt-24 lg:mt-0 relative z-10">
            <Card3DWrapper>
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  type: 'spring',
                  stiffness: 100,
                  damping: 15,
                }}
              >
                {/* Animated gradient border glow */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/50 via-secondary/50 to-primary/50 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500 blur-sm" />

                <Card className="relative backdrop-blur-xl bg-card/95 dark:bg-card/95 shadow-2xl border-2 border-border/50 hover:border-primary/30 transition-colors duration-300 rounded-2xl overflow-hidden">
                  {/* Subtle inner glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />

                  <CardHeader className="space-y-4 relative">
                    <motion.div
                      className="flex items-center justify-center mb-2"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: 0.2,
                        type: 'spring',
                        stiffness: 200,
                        damping: 15,
                      }}
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-md">
                        <Logo className="text-primary-foreground" size={24} />
                      </div>
                    </motion.div>
                    <CardTitle className="text-2xl text-center bg-gradient-to-r from-primary via-cyan-500 to-secondary bg-clip-text text-transparent font-bold">
                      Lara's MedLearn
                    </CardTitle>
                    <CardDescription className="text-center text-muted-foreground">
                      {mode === 'signin' && 'Welcome back! Sign in to continue'}
                      {mode === 'signup' && 'Create your account to get started'}
                      {mode === 'reset' && 'Reset your password'}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6 relative">
                    {/* Error Message */}
                    <AnimatePresence>
                      {error && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, y: -10 }}
                          animate={{ opacity: 1, height: 'auto', y: 0 }}
                          exit={{ opacity: 0, height: 0, y: -10 }}
                          className="p-3 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg flex items-center gap-2 text-red-600 dark:text-red-400 text-sm"
                        >
                          <AlertCircle className="w-4 h-4 flex-shrink-0" />
                          <span>{error}</span>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Social Login Buttons */}
                    <motion.div
                      className="space-y-4"
                      variants={formVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <motion.div variants={fieldVariants}>
                        <Button
                          onClick={handleGoogleSignIn}
                          disabled={localLoading}
                          variant="outline"
                          className="w-full flex items-center justify-center gap-2 h-11 hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 hover:border-primary/50 hover:text-foreground transition-all duration-200"
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
                      </motion.div>

                      <motion.div variants={fieldVariants}>
                        <Button
                          onClick={handleAppleSignIn}
                          disabled={localLoading}
                          variant="outline"
                          className="w-full flex items-center justify-center gap-2 h-11 hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 hover:border-primary/50 hover:text-foreground transition-all duration-200"
                          type="button"
                        >
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                          </svg>
                          Continue with Apple
                        </Button>
                      </motion.div>
                    </motion.div>

                    {/* Divider - more subtle and elegant */}
                    <motion.div
                      className="relative py-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full flex items-center gap-4">
                          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-border/50" />
                          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-border to-border/50" />
                        </div>
                      </div>
                      <div className="relative flex justify-center">
                        <span className="bg-card px-3 text-[11px] tracking-wide text-muted-foreground/60 lowercase">or</span>
                      </div>
                    </motion.div>

                    {/* Email/Password Form */}
                    <motion.form
                      onSubmit={handleEmailAuth}
                      className="space-y-5"
                      variants={formVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <AnimatePresence mode="wait">
                        {mode === 'signup' && (
                          <motion.div
                            key="name-field"
                            variants={fieldVariants}
                            initial="hidden"
                            animate="visible"
                            exit={{ opacity: 0, height: 0 }}
                            className="space-y-2"
                          >
                            <Label htmlFor="name">Name</Label>
                            <div className="relative group">
                              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                              <Input
                                id="name"
                                type="text"
                                placeholder="Your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="pl-10 h-11 focus:border-primary/50 transition-colors"
                                required
                                disabled={localLoading}
                                maxLength={30}
                              />
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <motion.div variants={fieldVariants} className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <div className="relative group">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                          <Input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="pl-10 h-11 focus:border-primary/50 transition-colors"
                            required
                            disabled={localLoading}
                          />
                        </div>
                      </motion.div>

                      <AnimatePresence mode="wait">
                        {mode !== 'reset' && (
                          <motion.div
                            key="password-field"
                            variants={fieldVariants}
                            initial="hidden"
                            animate="visible"
                            exit={{ opacity: 0, height: 0 }}
                            className="space-y-2"
                          >
                            <div className="flex items-center justify-between">
                              <Label htmlFor="password">Password</Label>
                              {mode === 'signin' && (
                                <button
                                  onClick={() => setMode('reset')}
                                  className="text-xs text-primary hover:text-primary/80 hover:underline transition-colors"
                                  type="button"
                                >
                                  Forgot password?
                                </button>
                              )}
                            </div>
                            <div className="relative group">
                              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                              <Input
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="pl-10 h-11 focus:border-primary/50 transition-colors"
                                required
                                disabled={localLoading}
                                minLength={mode === 'signup' ? 8 : 6}
                              />
                            </div>

                            {/* Password Strength Indicator (only show during signup) */}
                            <AnimatePresence>
                              {mode === 'signup' && password.length > 0 && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  className="mt-3"
                                >
                                  <PasswordStrengthIndicator password={password} showRequirements={true} />
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <motion.div variants={fieldVariants}>
                        <Button
                          type="submit"
                          className="w-full h-11 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-medium shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-200"
                          disabled={localLoading}
                        >
                          {localLoading ? (
                            <motion.span
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="flex items-center gap-2"
                            >
                              <motion.div
                                className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                              />
                              Please wait...
                            </motion.span>
                          ) : mode === 'signin' ? 'Sign In' : mode === 'signup' ? 'Create Account' : 'Send Reset Link'}
                        </Button>
                      </motion.div>
                    </motion.form>
                  </CardContent>

                  <CardFooter className="flex flex-col space-y-4 relative">
                    <div className="text-sm text-center text-muted-foreground">
                      {mode === 'signin' && (
                        <>
                          Don't have an account?{' '}
                          <button
                            onClick={() => setMode('signup')}
                            className="text-primary hover:text-primary/80 hover:underline font-medium transition-colors"
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
                            className="text-primary hover:text-primary/80 hover:underline font-medium transition-colors"
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
                            className="text-primary hover:text-primary/80 hover:underline font-medium transition-colors"
                            type="button"
                          >
                            Back to sign in
                          </button>
                        </>
                      )}
                    </div>

                    {/* Free for medical students message - Desktop only (mobile shows in hero) */}
                    <p className="hidden lg:block text-center text-xs text-muted-foreground pt-2 border-t border-border/30">
                      Free for all medical students. Always.
                    </p>
                  </CardFooter>
                </Card>
              </motion.div>
            </Card3DWrapper>

            {/* Mobile footnote */}
            <motion.p
              className="lg:hidden text-center text-xs text-muted-foreground mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Free for all medical students. Always.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  )
}
