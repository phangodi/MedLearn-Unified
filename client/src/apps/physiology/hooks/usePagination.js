import { useState, useEffect } from 'react';

/**
 * Custom hook for pagination logic
 * @param {Array} items - Array of items to paginate
 * @param {number} itemsPerPage - Number of items per page
 * @returns {Object} Pagination state and controls
 */
export const usePagination = (items = [], itemsPerPage = 9) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate pagination values
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // Reset to first page when items change
  useEffect(() => {
    setCurrentPage(1);
  }, [items.length]);

  // Handle page change with scroll to top
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return {
    currentPage,
    totalPages,
    currentItems,
    handlePageChange,
    setCurrentPage
  };
};
