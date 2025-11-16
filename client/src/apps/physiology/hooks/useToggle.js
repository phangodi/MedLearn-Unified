import { useState, useCallback } from 'react';

/**
 * Custom hook for boolean toggle state
 * @param {boolean} initialValue - Initial toggle value
 * @returns {Array} [value, toggle, setValue] tuple
 */
export const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue(v => !v);
  }, []);

  return [value, toggle, setValue];
};
