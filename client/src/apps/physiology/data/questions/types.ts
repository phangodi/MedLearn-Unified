/**
 * Type definitions for the MCQ question database
 */

export interface QuestionOption {
  letter: string;    // "a", "b", "c", etc.
  text: string;      // Option text
}

export interface QuestionMetadata {
  importedAt?: string;      // ISO timestamp (optional)
  matchedBy: string;        // How topic was matched (e.g., 'learning-objectives', 'ai-verified', 'manual')
  matchConfidence: number;  // 0-1 confidence score
  matchReason?: string;     // Explanation of why topic was assigned
}

export interface Question {
  id: string;                    // Unique ID: "q-{testId}-{questionNum}"
  testId: string;                // Source exam ID (e.g., "0313014645")
  questionNumber: number;        // Question number within source exam
  text: string;                  // Question text
  correctAnswerCount: number;    // How many answers are correct (1, 2, 3)
  options: QuestionOption[];
  correctAnswers: string[];      // ["a"] or ["a", "c"] for multiple
  topics: number[];              // Matched topic numbers [33, 45]
  mcqs: string[];                // Derived MCQ exams ["mcq-3"]
  contentHash?: string;          // Hash for deduplication across tests
  explanation?: string;          // Generated explanation (added later)
  metadata: QuestionMetadata;
}

export interface TestQuestions {
  testId: string;
  examName?: string;
  questions: Question[];
}

export interface QuestionIndex {
  version: string;
  lastUpdated: string;
  totalQuestions: number;
  testIds: string[];             // All source exam IDs
  topicCoverage: {               // Questions per topic
    [topicNumber: string]: number;
  };
  mcqCoverage: {                 // Questions per MCQ exam
    [mcqId: string]: number;
  };
}

export interface TopicQuestions {
  topicNumber: number;
  topicTitle: string;
  questionIds: string[];         // References to questions in by-test-id files
}

// Filter types for the test configuration UI
export type FilterMode = 'topic' | 'mcq' | 'test';

export interface TestConfig {
  filterMode: FilterMode;
  selectedTopics: number[];      // Topic numbers
  selectedMcq?: string;          // MCQ ID (mcq-1 through mcq-6)
  selectedTestId?: string;       // Specific test ID
  questionCount: number | 'all'; // Number of questions or all
}

export interface TestSession {
  id: string;
  config: TestConfig;
  questions: Question[];
  currentIndex: number;
  answers: {
    questionId: string;
    selectedAnswers: string[];
    isCorrect: boolean;
    answeredAt: string;
  }[];
  startedAt: string;
  completedAt?: string;
}

export interface TestResult {
  sessionId: string;
  totalQuestions: number;
  correctCount: number;
  incorrectCount: number;
  score: number;                 // Percentage
  duration: number;              // Seconds
  weakTopics: {
    topicNumber: number;
    topicTitle: string;
    incorrectCount: number;
  }[];
}
