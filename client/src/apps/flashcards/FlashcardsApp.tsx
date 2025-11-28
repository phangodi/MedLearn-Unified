import { Routes, Route, Navigate } from 'react-router-dom'
import { DeckBrowser } from './components/DeckBrowser'
import { DeckDetail } from './components/DeckDetail'
import { StudySession } from './components/StudySession'
import { Statistics } from './components/Statistics'

export function FlashcardsApp() {
  return (
    <Routes>
      <Route index element={<DeckBrowser />} />
      <Route path="deck/:deckId" element={<DeckDetail />} />
      <Route path="study/:deckId" element={<StudySession />} />
      <Route path="stats" element={<Statistics />} />
      <Route path="*" element={<Navigate to="/flashcards" replace />} />
    </Routes>
  )
}
