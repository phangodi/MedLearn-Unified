import { Routes, Route, Navigate } from 'react-router-dom'
import { HubPage } from '@/apps/body-development/pages/HubPage'
import { EssayPage } from '@/apps/body-development/pages/EssayPage'
import { ReferencePage } from '@/apps/body-development/pages/ReferencePage'

export function BodyDevelopmentPage() {
  return (
    <Routes>
      <Route path="/" element={<HubPage />} />
      <Route path="/essay/:essayId" element={<EssayPage />} />
      <Route path="/reference" element={<ReferencePage />} />
      <Route path="*" element={<Navigate to="/electives/body-development" replace />} />
    </Routes>
  )
}
