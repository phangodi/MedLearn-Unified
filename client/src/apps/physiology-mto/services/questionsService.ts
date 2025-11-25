/**
 * Questions Service - Data access layer for MCQ questions
 */

import type { Question, QuestionIndex, TestConfig, TestQuestions } from '../../physiology/data/questions/types';

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
};

// Get all questions from JSON files
export async function getAllQuestions(): Promise<Question[]> {
  try {
    const indexModule = await import('../../physiology/data/questions/index.json');
    const index = indexModule.default as QuestionIndex;

    const allQuestions: Question[] = [];

    for (const testId of index.testIds) {
      const testQuestions = await getQuestionsByTestId(testId);
      allQuestions.push(...testQuestions);
    }

    return allQuestions;
  } catch (error) {
    console.error('Error loading questions:', error);
    return [];
  }
}

// Get questions by test ID
export async function getQuestionsByTestId(testId: string): Promise<Question[]> {
  try {
    const module = await import(`../../physiology/data/questions/by-test-id/${testId}.json`);
    const data = module.default as TestQuestions;
    return data.questions;
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

// Filter questions based on test config
export async function getQuestionsForTest(config: TestConfig): Promise<Question[]> {
  let questions: Question[] = [];

  switch (config.filterMode) {
    case 'topic':
      questions = await getQuestionsByTopics(config.selectedTopics);
      break;
    case 'mcq':
      if (config.selectedMcq) {
        questions = await getQuestionsByMcq(config.selectedMcq);
      }
      break;
    case 'test':
      if (config.selectedTestId) {
        questions = await getQuestionsByTestId(config.selectedTestId);
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
  try {
    const module = await import('../../physiology/data/questions/index.json');
    return module.default as QuestionIndex;
  } catch (error) {
    console.error('Error loading question index:', error);
    return {
      version: '1.0.0',
      lastUpdated: new Date().toISOString(),
      totalQuestions: 0,
      testIds: [],
      topicCoverage: {},
      mcqCoverage: {}
    };
  }
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
      .filter(t => t <= 51) // Only implemented topics
      .map(t => ({
        number: t,
        title: getTopicTitle(t)
      }))
  }));
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
