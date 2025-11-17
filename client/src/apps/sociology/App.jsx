import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import ChapterPage from './pages/ChapterPage';
import './sociology.css';

function App() {
  return (
    <div className="sociologyRoot">
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="chapter/:id" element={<ChapterPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
