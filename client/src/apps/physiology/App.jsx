import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import styles from './App.module.css';

// Context Providers
import { ContentModeProvider, McqFilterProvider, AudioPlayerProvider } from './context';

// Pages
import { HomePage, TopicPage } from './pages';

// Components
import { Navigation } from './components';

// Services
import { getAllTopics } from './services';

/**
 * Wrapper component to provide key to TopicPage for remounting
 */
const TopicPageWrapper = ({ topics }) => {
  const { topicId } = useParams();
  // Key forces remount when topicId changes, resetting all audio players
  return <TopicPage key={topicId} topics={topics} />;
};

/**
 * Main App Component
 * Uses clean modular architecture with feature-based structure
 */
function App() {
  const topicsData = getAllTopics();

  return (
    <AudioPlayerProvider>
      <ContentModeProvider>
        <McqFilterProvider>
          {/* CRITICAL: This wrapper applies scoped base styles */}
          <div className={styles.physiologyRoot}>
            <div className={styles.App}>
              <Navigation topics={topicsData} />
              <Routes>
                <Route path="/" element={<HomePage topics={topicsData} />} />
                <Route path="topic/:topicId" element={<TopicPageWrapper topics={topicsData} />} />
              </Routes>
            </div>
          </div>
        </McqFilterProvider>
      </ContentModeProvider>
    </AudioPlayerProvider>
  );
}

export default App;
