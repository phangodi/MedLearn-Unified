import categoryData from '../data/categories';

/**
 * Service layer for categories data access
 */

/**
 * Get all categories
 * @returns {Array} All categories
 */
export const getAllCategories = () => {
  return categoryData;
};

/**
 * Get category by ID
 * @param {string} categoryId - Category ID
 * @returns {Object|undefined} Category object or undefined
 */
export const getCategoryById = (categoryId) => {
  return categoryData.find(c => c.id === categoryId);
};

/**
 * Get category name by ID
 * @param {string} categoryId - Category ID
 * @returns {string} Category name or empty string
 */
export const getCategoryName = (categoryId) => {
  const category = getCategoryById(categoryId);
  return category ? category.name : '';
};
