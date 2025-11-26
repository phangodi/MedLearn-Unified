import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Custom hook for search functionality
 * @param {Array} topics - Array of topics to search through
 * @returns {Object} Search state and handlers
 */
export const useSearch = (topics = []) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const foundTopic = topics.find(t =>
      t.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.number.toString().includes(searchTerm)
    );
    if (foundTopic) {
      navigate(`/physiology/topics/topic/${foundTopic.id}`);
      setSearchTerm('');
    }
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  return {
    searchTerm,
    handleSearchChange,
    handleSearchSubmit,
    clearSearch,
    setSearchTerm
  };
};
