import { useState, useEffect } from 'react';

/**
 * Custom hook for managing flippable cards state
 * @param {string} dependency - Dependency to trigger reset (e.g., topicId)
 * @returns {Object} Flip cards state and handlers
 */
export const useFlipCards = (dependency) => {
  const [flippedCards, setFlippedCards] = useState([]);

  // Reset flipped cards when dependency changes
  useEffect(() => {
    setFlippedCards([]);
  }, [dependency]);

  const toggleCard = (cardId) => {
    setFlippedCards(prev => 
      prev.includes(cardId) 
        ? prev.filter(id => id !== cardId)
        : [...prev, cardId]
    );
  };

  const isFlipped = (cardId) => flippedCards.includes(cardId);

  const resetCards = () => setFlippedCards([]);

  return {
    flippedCards,
    toggleCard,
    isFlipped,
    resetCards
  };
};
