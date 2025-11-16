import React, { createContext, useContext, useState, useCallback } from 'react';

const AudioPlayerContext = createContext();

export const useAudioPlayerContext = () => {
  const context = useContext(AudioPlayerContext);
  if (!context) {
    throw new Error('useAudioPlayerContext must be used within AudioPlayerProvider');
  }
  return context;
};

export const AudioPlayerProvider = ({ children }) => {
  const [activePlayerId, setActivePlayerId] = useState(null);

  const registerPlayer = useCallback((playerId) => {
    setActivePlayerId(playerId);
  }, []);

  const isActive = useCallback((playerId) => {
    return activePlayerId === playerId;
  }, [activePlayerId]);

  return (
    <AudioPlayerContext.Provider value={{ registerPlayer, isActive, activePlayerId }}>
      {children}
    </AudioPlayerContext.Provider>
  );
};
