/**
 * Quick Review Data Index
 *
 * This file aggregates all Quick Review content for dynamic loading.
 * When new topics are generated, import them here.
 */

// Import all available Quick Review files
import topic9QuickReview from './topic9-quickreview';
import topic10QuickReview from './topic10-quickreview';
import topic33QuickReview from './topic33-quickreview';
import topic34QuickReview from './topic34-quickreview';
import topic35QuickReview from './topic35-quickreview';

// Aggregate all Quick Review data by topic ID
const quickReviewData = {
  'topic-9': topic9QuickReview,
  'topic-10': topic10QuickReview,
  'topic-33': topic33QuickReview,
  'topic-34': topic34QuickReview,
  'topic-35': topic35QuickReview,
};

/**
 * Get Quick Review content for a specific topic and learning objective
 * @param {string} topicId - e.g., 'topic-9'
 * @param {string} loId - e.g., 'lo-1'
 * @returns {Object|null} Quick Review blocks or null if not available
 */
export function getQuickReviewContent(topicId, loId) {
  const topicData = quickReviewData[topicId];
  if (!topicData || !topicData.learningObjectives) {
    return null;
  }
  return topicData.learningObjectives[loId] || null;
}

/**
 * Check if Quick Review content exists for a topic
 * @param {string} topicId - e.g., 'topic-9'
 * @returns {boolean}
 */
export function hasQuickReviewContent(topicId) {
  return topicId in quickReviewData;
}

/**
 * Get list of topics that have Quick Review content
 * @returns {string[]} Array of topic IDs
 */
export function getAvailableTopics() {
  return Object.keys(quickReviewData);
}

export default quickReviewData;
