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
import topic36QuickReview from './topic36-quickreview';
import topic37QuickReview from './topic37-quickreview';
import topic38QuickReview from './topic38-quickreview';
import topic39QuickReview from './topic39-quickreview';
import topic40QuickReview from './topic40-quickreview';
import topic41QuickReview from './topic41-quickreview';
import topic42QuickReview from './topic42-quickreview';
import topic43QuickReview from './topic43-quickreview';
import topic44QuickReview from './topic44-quickreview';
import topic45QuickReview from './topic45-quickreview';
import topic46QuickReview from './topic46-quickreview';
import topic47QuickReview from './topic47-quickreview';
import topic48QuickReview from './topic48-quickreview';
import topic49QuickReview from './topic49-quickreview';
import topic50QuickReview from './topic50-quickreview';
import topic51QuickReview from './topic51-quickreview';

// Aggregate all Quick Review data by topic ID
const quickReviewData = {
  'topic-9': topic9QuickReview,
  'topic-10': topic10QuickReview,
  'topic-33': topic33QuickReview,
  'topic-34': topic34QuickReview,
  'topic-35': topic35QuickReview,
  'topic-36': topic36QuickReview,
  'topic-37': topic37QuickReview,
  'topic-38': topic38QuickReview,
  'topic-39': topic39QuickReview,
  'topic-40': topic40QuickReview,
  'topic-41': topic41QuickReview,
  'topic-42': topic42QuickReview,
  'topic-43': topic43QuickReview,
  'topic-44': topic44QuickReview,
  'topic-45': topic45QuickReview,
  'topic-46': topic46QuickReview,
  'topic-47': topic47QuickReview,
  'topic-48': topic48QuickReview,
  'topic-49': topic49QuickReview,
  'topic-50': topic50QuickReview,
  'topic-51': topic51QuickReview,
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
