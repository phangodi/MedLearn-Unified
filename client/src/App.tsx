import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { NotificationProvider } from './contexts/NotificationContext'
import { ToastProvider } from './components/ui/Toast'
import { ProtectedRoute } from './components/auth/ProtectedRoute'
import { NotificationModal } from './components/notifications/NotificationModal'
import { AuthPage } from './pages/AuthPage'
import { DashboardPage } from './pages/DashboardPage'
import { CommunityPage } from './pages/CommunityPage'
import { ProfilePage } from './pages/ProfilePage'
import { HistologyPage } from './pages/HistologyPage'
import { HistologyMTO1Page } from './pages/HistologyMTO1Page'
import { PhysiologyPage } from './pages/PhysiologyPage'
import { SociologyPage } from './pages/SociologyPage'
import { SociologyExam1Page } from './pages/SociologyExam1Page'
import { AnatomyPage } from './pages/AnatomyPage'
import { AnatomyCNSPage } from './pages/AnatomyCNSPage'
import { AdminNotificationsPage } from './pages/AdminNotificationsPage'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <NotificationProvider>
          <ToastProvider>
            {/* Global notification modal for critical announcements */}
            <NotificationModal />

            <Routes>
            <Route path="/login" element={<AuthPage />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/community"
              element={
                <ProtectedRoute>
                  <CommunityPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/notifications"
              element={
                <ProtectedRoute requireSuperAdmin>
                  <AdminNotificationsPage />
                </ProtectedRoute>
              }
            />
            <Route path="/histology" element={<ProtectedRoute><HistologyPage /></ProtectedRoute>} />
            <Route path="/histology/mto1" element={<ProtectedRoute><HistologyMTO1Page /></ProtectedRoute>} />
            <Route path="/physiology/*" element={<ProtectedRoute><PhysiologyPage /></ProtectedRoute>} />
            <Route path="/sociology" element={<ProtectedRoute><SociologyPage /></ProtectedRoute>} />
            <Route path="/sociology/exam1/*" element={<ProtectedRoute><SociologyExam1Page /></ProtectedRoute>} />
            <Route path="/anatomy" element={<ProtectedRoute><AnatomyPage /></ProtectedRoute>} />
            <Route path="/anatomy/cns" element={<ProtectedRoute><AnatomyCNSPage /></ProtectedRoute>} />
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
          </ToastProvider>
        </NotificationProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
