/**
 * Questions Service - Data access layer for MCQ questions
 *
 * Duplicate Handling:
 * - Questions are stored per test ID (same question can exist in different tests)
 * - For topic-based queries, questions are deduplicated by content hash
 * - This ensures users don't see the same question twice when filtering by topic
 */

import type { Question, QuestionIndex, TestConfig, TestQuestions } from '../../physiology/data/questions/types';
import indexData from '../../physiology/data/questions/index.json';

// Import question files
import test0313014645 from '../../physiology/data/questions/by-test-id/0313014645.json';
import test0313014645B from '../../physiology/data/questions/by-test-id/0313014645-B.json';
import test4525102917 from '../../physiology/data/questions/by-test-id/4525102917.json';
import test1526033148 from '../../physiology/data/questions/by-test-id/1526033148.json';
import test3221027349 from '../../physiology/data/questions/by-test-id/3221027349.json';
import test5090109547 from '../../physiology/data/questions/by-test-id/5090109547.json';
import test5156012322 from '../../physiology/data/questions/by-test-id/5156012322.json';
import test625411501B from '../../physiology/data/questions/by-test-id/625411501B.json';
import test2734027349 from '../../physiology/data/questions/by-test-id/2734027349.json';
import test3543048990 from '../../physiology/data/questions/by-test-id/3543048990.json';
import test4447200607 from '../../physiology/data/questions/by-test-id/4447200607.json';
import test4855200607 from '../../physiology/data/questions/by-test-id/4855200607.json';

// Generate a simple content hash for deduplication
// This hash is based on the question text and options (case-insensitive, trimmed)
export function generateContentHash(question: Question): string {
  const normalizedText = question.text.toLowerCase().trim();
  const normalizedOptions = question.options
    .map(o => `${o.letter}:${o.text.toLowerCase().trim()}`)
    .sort()
    .join('|');

  // Simple hash function (djb2)
  const str = `${normalizedText}||${normalizedOptions}`;
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) + hash) + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash).toString(36);
}

// Deduplicate questions by content hash (keeps first occurrence)
export function deduplicateQuestions(questions: Question[]): Question[] {
  const seen = new Map<string, Question>();

  for (const question of questions) {
    const hash = question.contentHash || generateContentHash(question);
    if (!seen.has(hash)) {
      seen.set(hash, question);
    }
  }

  return Array.from(seen.values());
}

// MCQ Filter Definitions (imported from physiology app structure)
export const mcqFilters = [
  {
    id: 'mcq-1',
    name: 'MCQ I',
    description: 'Control theory, membrane, nerve and muscle physiology',
    topics: [1, 2, 3, 4, 5, 6, 7, 17, 18, 19, 20, 21, 22, 23, 24]
  },
  {
    id: 'mcq-2',
    name: 'MCQ II',
    description: 'Blood and respiratory physiology',
    topics: [8, 9, 10, 11, 12, 13, 14, 15, 16, 25, 26, 27, 28, 29, 30, 31, 32]
  },
  {
    id: 'mcq-3',
    name: 'MCQ III',
    description: 'Cardiovascular and renal physiology',
    topics: [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58]
  },
  {
    id: 'mcq-4',
    name: 'MCQ IV',
    description: 'Digestive and metabolic physiology',
    topics: [59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76]
  },
  {
    id: 'mcq-5',
    name: 'MCQ V',
    description: 'Endocrine physiology',
    topics: [77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94]
  },
  {
    id: 'mcq-6',
    name: 'MCQ VI',
    description: 'Reproductive and special senses physiology',
    topics: [95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122]
  }
];

// Topic titles for the implemented topics (1-51)
// This will be used for the filter UI
export const topicTitles: { [key: number]: string } = {
  1: 'Principles of control theory',
  2: 'Passive transport mechanisms of the cell membrane',
  3: 'Active transport mechanisms of the cell membrane',
  4: 'The resting membrane potential',
  5: 'The electric properties of neuronal membranes',
  6: 'The axonal propagation of the action potential',
  7: 'Receptors, signal transduction mechanisms',
  8: 'Fluid compartments of the body. The blood plasma',
  9: 'The general features of red blood cells',
  10: 'Erythropoiesis',
  11: 'Hemoglobin degradation, bilirubin metabolism',
  12: 'The physiology of white blood cell',
  13: 'The ABO and Rh blood groups',
  14: 'Primary hemostasis',
  15: 'Secondary hemostasis: blood clotting',
  16: 'Fibrinolysis and the inhibition of coagulation',
  17: 'Synaptic transmission',
  18: 'The neuromuscular junction',
  19: 'Skeletal muscle contraction',
  20: 'The mechanics of skeletal muscle contraction',
  21: 'The smooth muscle',
  22: 'Somatosensory function: receptors and pathways',
  23: 'Somatosensory function: Central processing',
  24: 'The physiology of pain',
  25: 'Mechanics of breathing',
  26: 'Pulmonary circulation, pulmonary gas exchange',
  27: 'Transport of O2 and CO2 in blood',
  28: 'Regulation of breathing',
  29: 'Hypoxia',
  30: 'Airway resistance and lung compliance',
  31: 'Ventilation-perfusion ratio',
  32: 'Lung volumes and capacities',
  33: 'General circulatory hemodynamics',
  34: 'Arterial blood pressure',
  35: 'Properties of heart muscle',
  36: 'The cardiac cycle',
  37: 'Cardiac output',
  38: 'Electrocardiography',
  39: 'Capillaries, transcapillary exchange',
  40: 'The venous system',
  41: 'The microcirculation',
  42: 'Lymphatic system',
  43: 'Short-term regulation of blood pressure',
  44: 'Long-term regulation of blood pressure',
  45: 'Renal blood flow and glomerular filtration',
  46: 'Tubular reabsorption',
  47: 'Tubular secretion',
  48: 'Renal concentration and dilution of urine',
  49: 'Regulation of extracellular fluid osmolarity',
  50: 'Regulation of extracellular fluid volume',
  51: 'Acid-base balance and its regulation',
  52: 'Glomerular filtration',
  53: 'Renal blood flow and GFR regulation',
  54: 'Renal tubular transport mechanisms',
  55: 'Tubular reabsorption and secretion, renal clearance',
  56: 'Renal transport of organic solutes',
  57: 'NaCl and water transport, medullary osmotic gradient',
  58: 'Urinary tract physiology, micturition',
};

// Map test IDs to their data
const testDataMap: Record<string, TestQuestions> = {
  '0313014645': test0313014645 as TestQuestions,
  '0313014645-B': test0313014645B as TestQuestions,
  '4525102917': test4525102917 as TestQuestions,
  '1526033148': test1526033148 as TestQuestions,
  '3221027349': test3221027349 as TestQuestions,
  '5090109547': test5090109547 as TestQuestions,
  '5156012322': test5156012322 as TestQuestions,
  '625411501B': test625411501B as TestQuestions,
  '2734027349': test2734027349 as TestQuestions,
  '3543048990': test3543048990 as TestQuestions,
  '4447200607': test4447200607 as TestQuestions,
  '4855200607': test4855200607 as TestQuestions,
};

// Cache for loaded questions
let cachedQuestions: Question[] | null = null;

// Get all questions from JSON files
export async function getAllQuestions(): Promise<Question[]> {
  if (cachedQuestions) {
    return cachedQuestions;
  }

  try {
    const allQuestions: Question[] = [];

    for (const testId in testDataMap) {
      const testData = testDataMap[testId];
      if (testData?.questions) {
        allQuestions.push(...testData.questions);
      }
    }

    console.log(`Loaded ${allQuestions.length} questions from ${Object.keys(testDataMap).length} test files`);
    cachedQuestions = allQuestions;
    return allQuestions;
  } catch (error) {
    console.error('Error loading questions:', error);
    return [];
  }
}

// Get questions by test ID
export async function getQuestionsByTestId(testId: string): Promise<Question[]> {
  try {
    const testData = testDataMap[testId];
    if (!testData) {
      console.error(`No questions found for test ${testId}`);
      return [];
    }
    return testData.questions || [];
  } catch (error) {
    console.error(`Error loading questions for test ${testId}:`, error);
    return [];
  }
}

// Get questions by topic number
export async function getQuestionsByTopic(topicNumber: number): Promise<Question[]> {
  const allQuestions = await getAllQuestions();
  return allQuestions.filter(q => q.topics.includes(topicNumber));
}

// Get questions by MCQ exam
export async function getQuestionsByMcq(mcqId: string): Promise<Question[]> {
  const mcqFilter = mcqFilters.find(m => m.id === mcqId);
  if (!mcqFilter) return [];

  const allQuestions = await getAllQuestions();
  return allQuestions.filter(q =>
    q.topics.some(t => mcqFilter.topics.includes(t))
  );
}

// Get questions by multiple topics
export async function getQuestionsByTopics(topicNumbers: number[]): Promise<Question[]> {
  const allQuestions = await getAllQuestions();
  return allQuestions.filter(q =>
    q.topics.some(t => topicNumbers.includes(t))
  );
}

// Get questions by IDs (for bookmarks)
export async function getQuestionsByIds(questionIds: string[]): Promise<Question[]> {
  if (questionIds.length === 0) return [];

  const allQuestions = await getAllQuestions();
  const questionMap = new Map(allQuestions.map(q => [q.id, q]));

  return questionIds
    .map(id => questionMap.get(id))
    .filter((q): q is Question => q !== undefined);
}

// Filter questions based on test config
export async function getQuestionsForTest(config: TestConfig): Promise<Question[]> {
  let questions: Question[] = [];

  switch (config.filterMode) {
    case 'topic':
      questions = await getQuestionsByTopics(config.selectedTopics);
      // Deduplicate for topic-based queries (same question may appear in multiple tests)
      questions = deduplicateQuestions(questions);
      break;
    case 'mcq':
      if (config.selectedMcq) {
        questions = await getQuestionsByMcq(config.selectedMcq);
        // Deduplicate for MCQ-based queries
        questions = deduplicateQuestions(questions);
      }
      break;
    case 'test':
      if (config.selectedTestId) {
        questions = await getQuestionsByTestId(config.selectedTestId);
        // No deduplication for test-based queries (show all questions from that test)
      }
      break;
    case 'bookmarks':
      if (config.bookmarkedQuestionIds && config.bookmarkedQuestionIds.length > 0) {
        questions = await getQuestionsByIds(config.bookmarkedQuestionIds);
        // No deduplication for bookmarks (user explicitly saved these)
      }
      break;
  }

  // Shuffle questions
  questions = shuffleArray(questions);

  // Limit questions if specified
  if (config.questionCount !== 'all' && typeof config.questionCount === 'number') {
    questions = questions.slice(0, config.questionCount);
  }

  return questions;
}

// Get the question index
export async function getQuestionIndex(): Promise<QuestionIndex> {
  return indexData as QuestionIndex;
}

// Get available test IDs
export async function getAvailableTestIds(): Promise<string[]> {
  const index = await getQuestionIndex();
  return index.testIds;
}

// Get topic title by number
export function getTopicTitle(topicNumber: number): string {
  return topicTitles[topicNumber] || `Topic ${topicNumber}`;
}

// Get topics grouped by MCQ
export function getTopicsGroupedByMcq(): { mcq: typeof mcqFilters[0]; topics: { number: number; title: string }[] }[] {
  return mcqFilters.map(mcq => ({
    mcq,
    topics: mcq.topics
      .filter(t => topicTitles[t] !== undefined) // Only topics with defined titles
      .map(t => ({
        number: t,
        title: getTopicTitle(t)
      }))
  }));
}

// Get question count for a specific MCQ exam
export function getMcqQuestionCount(mcqId: string): number {
  const coverage = (indexData as QuestionIndex).mcqCoverage;
  return coverage?.[mcqId] || 0;
}

// Get question count for a specific topic
export function getTopicQuestionCount(topicNumber: number): number {
  const coverage = (indexData as QuestionIndex).topicCoverage;
  return coverage?.[topicNumber.toString()] || 0;
}

// Helper: Shuffle array
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Check answer correctness
export function checkAnswer(question: Question, selectedAnswers: string[]): boolean {
  if (selectedAnswers.length !== question.correctAnswers.length) {
    return false;
  }

  const sortedSelected = [...selectedAnswers].sort();
  const sortedCorrect = [...question.correctAnswers].sort();

  return sortedSelected.every((ans, idx) => ans === sortedCorrect[idx]);
}
