import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { NotificationProvider } from './contexts/NotificationContext'
import { ToastProvider } from './components/ui/Toast'
import { ProtectedRoute } from './components/auth/ProtectedRoute'
import { NotificationModal } from './components/notifications/NotificationModal'
import { AuthPage } from './pages/AuthPage'
import { VerifyEmailPage } from './pages/VerifyEmailPage'
import { AuthActionPage } from './pages/AuthActionPage'
import { DashboardPage } from './pages/DashboardPage'
import { CommunityPage } from './pages/CommunityPage'
import { ProfilePage } from './pages/ProfilePage'
import { HistologyPage } from './pages/HistologyPage'
import { HistologyMTO1Page } from './pages/HistologyMTO1Page'
import { HistologyMTO2Page } from './pages/HistologyMTO2Page'
import { PhysiologyPage } from './pages/PhysiologyPage'
import { PhysiologyTopicsPage } from './pages/PhysiologyTopicsPage'
import { PhysiologyMTOPage } from './pages/PhysiologyMTOPage'
import { SociologyPage } from './pages/SociologyPage'
import { SociologyExam1Page } from './pages/SociologyExam1Page'
import { SociologyExam2Page } from './pages/SociologyExam2Page'
import { SociologyExam2ChapterPage } from './pages/SociologyExam2ChapterPage'
import { AnatomyPage } from './pages/AnatomyPage'
import { AnatomyCNSPage } from './pages/AnatomyCNSPage'
import { AdminNotificationsPage } from './pages/AdminNotificationsPage'
import { AIExamPrepPage } from './pages/AIExamPrepPage'

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
            <Route path="/verify-email" element={<VerifyEmailPage />} />
            <Route path="/__/auth/action" element={<AuthActionPage />} />
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
            <Route
              path="/ai-prep"
              element={
                <ProtectedRoute>
                  <AIExamPrepPage />
                </ProtectedRoute>
              }
            />
            <Route path="/histology" element={<ProtectedRoute><HistologyPage /></ProtectedRoute>} />
            <Route path="/histology/mto1" element={<ProtectedRoute><HistologyMTO1Page /></ProtectedRoute>} />
            <Route path="/histology/mto2" element={<ProtectedRoute><HistologyMTO2Page /></ProtectedRoute>} />
            <Route path="/physiology" element={<ProtectedRoute><PhysiologyPage /></ProtectedRoute>} />
            <Route path="/physiology/topics/*" element={<ProtectedRoute><PhysiologyTopicsPage /></ProtectedRoute>} />
            <Route path="/physiology/mto/*" element={<ProtectedRoute><PhysiologyMTOPage /></ProtectedRoute>} />
            <Route path="/sociology" element={<ProtectedRoute><SociologyPage /></ProtectedRoute>} />
            <Route path="/sociology/exam1/*" element={<ProtectedRoute><SociologyExam1Page /></ProtectedRoute>} />
            <Route path="/sociology/exam2" element={<ProtectedRoute><SociologyExam2Page /></ProtectedRoute>} />
            <Route path="/sociology/exam2/chapter/:id" element={<ProtectedRoute><SociologyExam2ChapterPage /></ProtectedRoute>} />
            <Route path="/anatomy" element={<ProtectedRoute><AnatomyPage /></ProtectedRoute>} />
            <Route path="/anatomy/cns" element={<ProtectedRoute><AnatomyCNSPage /></ProtectedRoute>} />
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
          </ToastProvider>
        </NotificationProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
