import React, { createContext, useState, useContext } from 'react';

const McqFilterContext = createContext();

export const McqFilterProvider = ({ children }) => {
  const [selectedMcqFilter, setSelectedMcqFilter] = useState(null); // null means "All Topics"

  return (
    <McqFilterContext.Provider value={{ selectedMcqFilter, setSelectedMcqFilter }}>
      {children}
    </McqFilterContext.Provider>
  );
};

export const useMcqFilter = () => {
  const context = useContext(McqFilterContext);
  if (!context) {
    throw new Error('useMcqFilter must be used within McqFilterProvider');
  }
  return context;
};
