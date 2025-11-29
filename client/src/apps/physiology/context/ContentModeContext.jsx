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

  // Answer format: 'formatted', 'compact', or 'quickReview'
  // answerFormat replaces useFormattedAnswers but we keep both for backwards compatibility
  const [answerFormat, setAnswerFormat] = useState(() => {
    const savedFormat = localStorage.getItem('answerFormat');
    if (savedFormat) return savedFormat;
    // Migrate from old boolean setting
    const oldPref = localStorage.getItem('useFormattedAnswers');
    return oldPref === 'false' ? 'compact' : 'formatted';
  });

  // Save to localStorage whenever mode changes
  useEffect(() => {
    localStorage.setItem('contentMode', contentMode);
  }, [contentMode]);

  useEffect(() => {
    localStorage.setItem('useFormattedAnswers', useFormattedAnswers);
  }, [useFormattedAnswers]);

  useEffect(() => {
    localStorage.setItem('answerFormat', answerFormat);
    // Keep useFormattedAnswers in sync for backwards compatibility
    setUseFormattedAnswers(answerFormat === 'formatted');
  }, [answerFormat]);

  const toggleContentMode = (mode) => {
    setContentMode(mode);
  };

  const toggleFormattedAnswers = () => {
    setUseFormattedAnswers(!useFormattedAnswers);
  };

  const setAnswerFormatMode = (format) => {
    setAnswerFormat(format);
  };

  return (
    <ContentModeContext.Provider value={{
      contentMode,
      toggleContentMode,
      useFormattedAnswers,
      toggleFormattedAnswers,
      answerFormat,
      setAnswerFormatMode
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


