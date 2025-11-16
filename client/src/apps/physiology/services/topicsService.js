import topicsData, { mcqFilters } from '../data/Topics';

/**
 * Service layer for topics data access
 */

/**
 * Get all topics
 * @returns {Array} All topics
 */
export const getAllTopics = () => {
  return topicsData;
};

/**
 * Get topic by ID
 * @param {string} topicId - Topic ID
 * @returns {Object|undefined} Topic object or undefined
 */
export const getTopicById = (topicId) => {
  return topicsData.find(t => t.id === topicId);
};

/**
 * Get topic by number
 * @param {number} topicNumber - Topic number
 * @returns {Object|undefined} Topic object or undefined
 */
export const getTopicByNumber = (topicNumber) => {
  return topicsData.find(t => t.number === topicNumber);
};

/**
 * Search topics by title or number
 * @param {string} query - Search query
 * @returns {Array} Matching topics
 */
export const searchTopics = (query) => {
  if (!query) return topicsData;
  
  const lowerQuery = query.toLowerCase();
  return topicsData.filter(t => 
    t.title.toLowerCase().includes(lowerQuery) || 
    t.number.toString().includes(query) ||
    t.subtitle.toLowerCase().includes(lowerQuery)
  );
};

/**
 * Filter topics by MCQ exam
 * @param {string} mcqId - MCQ filter ID (null for all topics)
 * @returns {Array} Filtered topics
 */
export const filterTopicsByMcq = (mcqId) => {
  if (!mcqId) return topicsData;
  
  return topicsData.filter(topic => 
    topic.mcqs && topic.mcqs.includes(mcqId)
  );
};

/**
 * Get all MCQ filters
 * @returns {Array} MCQ filter definitions
 */
export const getMcqFilters = () => {
  return mcqFilters;
};

/**
 * Get MCQ filter by ID
 * @param {string} mcqId - MCQ filter ID
 * @returns {Object|undefined} MCQ filter object or undefined
 */
export const getMcqFilterById = (mcqId) => {
  return mcqFilters.find(f => f.id === mcqId);
};

/**
 * Get navigation info for a topic (prev/next)
 * @param {string} topicId - Current topic ID
 * @param {Array} filteredTopics - Optional filtered topics array
 * @returns {Object} Navigation info with prev and next topics
 */
export const getTopicNavigation = (topicId, filteredTopics = topicsData) => {
  const currentIndex = filteredTopics.findIndex(t => t.id === topicId);
  
  return {
    currentIndex,
    prevTopic: currentIndex > 0 ? filteredTopics[currentIndex - 1] : null,
    nextTopic: currentIndex >= 0 && currentIndex < filteredTopics.length - 1 
      ? filteredTopics[currentIndex + 1] 
      : null
  };
};

/**
 * Get topics count
 * @returns {number} Total number of topics
 */
export const getTopicsCount = () => {
  return topicsData.length;
};

/**
 * Filter topics by category
 * @param {string} categoryId - Category ID
 * @returns {Array} Topics in category
 */
export const filterTopicsByCategory = (categoryId) => {
  if (!categoryId || categoryId === 'all') return topicsData;
  
  return topicsData.filter(topic => topic.category === categoryId);
};
