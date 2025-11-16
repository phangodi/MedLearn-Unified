import React, { createContext, useContext, useState } from 'react';

const DisplayPreferencesContext = createContext();

export const DisplayPreferencesProvider = ({ children }) => {
  const [contentMode, setContentMode] = useState('keyPoints'); // 'keyPoints' or 'definitions'
  const [useFormattedAnswers, setUseFormattedAnswers] = useState(true);
  const [showSupplementaryContent, setShowSupplementaryContent] = useState(true);

  const toggleContentMode = (mode) => {
    setContentMode(mode);
  };

  const toggleFormattedAnswers = () => {
    setUseFormattedAnswers(!useFormattedAnswers);
  };

  const toggleSupplementaryContent = () => {
    setShowSupplementaryContent(!showSupplementaryContent);
  };

  return (
    <DisplayPreferencesContext.Provider
      value={{
        contentMode,
        toggleContentMode,
        useFormattedAnswers,
        toggleFormattedAnswers,
        showSupplementaryContent,
        toggleSupplementaryContent,
      }}
    >
      {children}
    </DisplayPreferencesContext.Provider>
  );
};

export const useDisplayPreferences = () => {
  const context = useContext(DisplayPreferencesContext);
  if (!context) {
    throw new Error('useDisplayPreferences must be used within a DisplayPreferencesProvider');
  }
  return context;
};
