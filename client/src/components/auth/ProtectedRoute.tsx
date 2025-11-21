import type { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'

interface ProtectedRouteProps {
  children: ReactNode
  requireSuperAdmin?: boolean
}

export function ProtectedRoute({ children, requireSuperAdmin = false }: ProtectedRouteProps) {
  const { user, userProfile, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-full border-4 border-primary/30 border-t-primary animate-spin" />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return <Navigate to="/login" replace />
  }

  // ========== TEMPORARILY DISABLED - ALLOW ACCESS WITHOUT EMAIL VERIFICATION ==========
  // Check email verification (OAuth providers like Google/Apple auto-verify)
  // TEMPORARILY DISABLED until Firebase email sending issue is resolved
  // RE-ENABLE by uncommenting the lines below:
  // if (!user.emailVerified) {
  //   return <Navigate to="/verify-email" replace />
  // }
  // ========== END TEMPORARY DISABLE ==========

  // Check super admin requirement
  if (requireSuperAdmin && userProfile?.role !== 'superadmin') {
    return <Navigate to="/dashboard" replace />
  }

  return <>{children}</>
}
