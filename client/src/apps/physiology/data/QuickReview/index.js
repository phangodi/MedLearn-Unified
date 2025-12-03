/**
 * Quick Review Data Index
 *
 * This file aggregates all Quick Review content for dynamic loading.
 * When new topics are generated, import them here.
 */

// Import all available Quick Review files
import topic1QuickReview from './topic1-quickreview';
import topic2QuickReview from './topic2-quickreview';
import topic3QuickReview from './topic3-quickreview';
import topic4QuickReview from './topic4-quickreview';
import topic5QuickReview from './topic5-quickreview';
import topic6QuickReview from './topic6-quickreview';
import topic7QuickReview from './topic7-quickreview';
import topic8QuickReview from './topic8-quickreview';
import topic9QuickReview from './topic9-quickreview';
import topic10QuickReview from './topic10-quickreview';
import topic11QuickReview from './topic11-quickreview';
import topic12QuickReview from './topic12-quickreview';
import topic13QuickReview from './topic13-quickreview';
import topic14QuickReview from './topic14-quickreview';
import topic15QuickReview from './topic15-quickreview';
import topic16QuickReview from './topic16-quickreview';
import topic17QuickReview from './topic17-quickreview';
import topic18QuickReview from './topic18-quickreview';
import topic19QuickReview from './topic19-quickreview';
import topic20QuickReview from './topic20-quickreview';
import topic21QuickReview from './topic21-quickreview';
import topic22QuickReview from './topic22-quickreview';
import topic23QuickReview from './topic23-quickreview';
import topic24QuickReview from './topic24-quickreview';
import topic25QuickReview from './topic25-quickreview';
import topic26QuickReview from './topic26-quickreview';
import topic27QuickReview from './topic27-quickreview';
import topic28QuickReview from './topic28-quickreview';
import topic29QuickReview from './topic29-quickreview';
import topic30QuickReview from './topic30-quickreview';
import topic31QuickReview from './topic31-quickreview';
import topic32QuickReview from './topic32-quickreview';
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
import topic52QuickReview from './topic52-quickreview';
import topic53QuickReview from './topic53-quickreview';
import topic54QuickReview from './topic54-quickreview';
import topic55QuickReview from './topic55-quickreview';
import topic56QuickReview from './topic56-quickreview';
import topic57QuickReview from './topic57-quickreview';
import topic58QuickReview from './topic58-quickreview';

// Aggregate all Quick Review data by topic ID
const quickReviewData = {
  'topic-1': topic1QuickReview,
  'topic-2': topic2QuickReview,
  'topic-3': topic3QuickReview,
  'topic-4': topic4QuickReview,
  'topic-5': topic5QuickReview,
  'topic-6': topic6QuickReview,
  'topic-7': topic7QuickReview,
  'topic-8': topic8QuickReview,
  'topic-9': topic9QuickReview,
  'topic-10': topic10QuickReview,
  'topic-11': topic11QuickReview,
  'topic-12': topic12QuickReview,
  'topic-13': topic13QuickReview,
  'topic-14': topic14QuickReview,
  'topic-15': topic15QuickReview,
  'topic-16': topic16QuickReview,
  'topic-17': topic17QuickReview,
  'topic-18': topic18QuickReview,
  'topic-19': topic19QuickReview,
  'topic-20': topic20QuickReview,
  'topic-21': topic21QuickReview,
  'topic-22': topic22QuickReview,
  'topic-23': topic23QuickReview,
  'topic-24': topic24QuickReview,
  'topic-25': topic25QuickReview,
  'topic-26': topic26QuickReview,
  'topic-27': topic27QuickReview,
  'topic-28': topic28QuickReview,
  'topic-29': topic29QuickReview,
  'topic-30': topic30QuickReview,
  'topic-31': topic31QuickReview,
  'topic-32': topic32QuickReview,
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
  'topic-52': topic52QuickReview,
  'topic-53': topic53QuickReview,
  'topic-54': topic54QuickReview,
  'topic-55': topic55QuickReview,
  'topic-56': topic56QuickReview,
  'topic-57': topic57QuickReview,
  'topic-58': topic58QuickReview,
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
