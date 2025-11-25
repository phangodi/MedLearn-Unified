import { Routes, Route } from 'react-router-dom';
import { TestProvider } from './context/TestContext';
import { MTOHomePage } from './pages/MTOHomePage';
import { MTOTestPage } from './pages/MTOTestPage';

export function PhysiologyMTOApp() {
  return (
    <TestProvider>
      <Routes>
        <Route index element={<MTOHomePage />} />
        <Route path="test" element={<MTOTestPage />} />
      </Routes>
    </TestProvider>
  );
}

export default PhysiologyMTOApp;
