import React, { createContext, useState, useContext, useEffect } from 'react';

const ContentModeContext = createContext();

export const ContentModeProvider = ({ children }) => {
  // Get initial mode from localStorage or default to 'hideDetails'
  // Modes: 'keyPoints', 'definitions', 'hideDetails'
  const [contentMode, setContentMode] = useState(() => {
    const savedMode = localStorage.getItem('contentMode');
    // Clean up old setting
    localStorage.removeItem('showSupplementaryContent');
    return savedMode || 'hideDetails';
  });

  // Get initial formatted answers preference from localStorage or default to true
  const [useFormattedAnswers, setUseFormattedAnswers] = useState(() => {
    const savedPref = localStorage.getItem('useFormattedAnswers');
    return savedPref === null ? true : savedPref === 'true';
  });

  // Save to localStorage whenever mode changes
  useEffect(() => {
    localStorage.setItem('contentMode', contentMode);
  }, [contentMode]);

  useEffect(() => {
    localStorage.setItem('useFormattedAnswers', useFormattedAnswers);
  }, [useFormattedAnswers]);

  const toggleContentMode = (mode) => {
    setContentMode(mode);
  };

  const toggleFormattedAnswers = () => {
    setUseFormattedAnswers(!useFormattedAnswers);
  };

  return (
    <ContentModeContext.Provider value={{ 
      contentMode, 
      toggleContentMode,
      useFormattedAnswers,
      toggleFormattedAnswers
    }}>
      {children}
    </ContentModeContext.Provider>
  );
};

export const useContentMode = () => {
  const context = useContext(ContentModeContext);
  if (!context) {
    throw new Error('useContentMode must be used within ContentModeProvider');
  }
  return context;
};


