import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { Question, TestConfig, TestSession, TestResult, FilterMode } from '../../physiology/data/questions/types';
import { getQuestionsForTest, checkAnswer, getTopicTitle } from '../services/questionsService';

interface TestContextValue {
  // Test configuration
  config: TestConfig;
  setFilterMode: (mode: FilterMode) => void;
  toggleTopic: (topicNumber: number) => void;
  selectAllTopicsInMcq: (mcqId: string, topics: number[]) => void;
  clearTopicsInMcq: (mcqId: string, topics: number[]) => void;
  setSelectedMcq: (mcqId: string | undefined) => void;
  setSelectedTestId: (testId: string | undefined) => void;
  setQuestionCount: (count: number | 'all') => void;

  // Test session
  session: TestSession | null;
  isLoading: boolean;
  error: string | null;
  startTest: () => Promise<void>;
  submitAnswer: (selectedAnswers: string[]) => void;
  nextQuestion: () => void;
  endTest: () => TestResult | null;
  resetTest: () => void;

  // Current state helpers
  currentQuestion: Question | null;
  isAnswered: boolean;
  lastAnswerCorrect: boolean | null;
  progress: { current: number; total: number };
}

const TestContext = createContext<TestContextValue | null>(null);

export function TestProvider({ children }: { children: ReactNode }) {
  // Configuration state
  const [config, setConfig] = useState<TestConfig>({
    filterMode: 'topic',
    selectedTopics: [],
    selectedMcq: undefined,
    selectedTestId: undefined,
    questionCount: 25
  });

  // Session state
  const [session, setSession] = useState<TestSession | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Configuration setters
  const setFilterMode = useCallback((mode: FilterMode) => {
    setConfig(prev => ({ ...prev, filterMode: mode }));
  }, []);

  const toggleTopic = useCallback((topicNumber: number) => {
    setConfig(prev => ({
      ...prev,
      selectedTopics: prev.selectedTopics.includes(topicNumber)
        ? prev.selectedTopics.filter(t => t !== topicNumber)
        : [...prev.selectedTopics, topicNumber]
    }));
  }, []);

  const selectAllTopicsInMcq = useCallback((_mcqId: string, topics: number[]) => {
    setConfig(prev => ({
      ...prev,
      selectedTopics: [...new Set([...prev.selectedTopics, ...topics])]
    }));
  }, []);

  const clearTopicsInMcq = useCallback((_mcqId: string, topics: number[]) => {
    setConfig(prev => ({
      ...prev,
      selectedTopics: prev.selectedTopics.filter(t => !topics.includes(t))
    }));
  }, []);

  const setSelectedMcq = useCallback((mcqId: string | undefined) => {
    setConfig(prev => ({ ...prev, selectedMcq: mcqId }));
  }, []);

  const setSelectedTestId = useCallback((testId: string | undefined) => {
    setConfig(prev => ({ ...prev, selectedTestId: testId }));
  }, []);

  const setQuestionCount = useCallback((count: number | 'all') => {
    setConfig(prev => ({ ...prev, questionCount: count }));
  }, []);

  // Start a new test
  const startTest = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const questions = await getQuestionsForTest(config);

      if (questions.length === 0) {
        setError('No questions found for your selection. Please try different filters.');
        setIsLoading(false);
        return;
      }

      const newSession: TestSession = {
        id: `test-${Date.now()}`,
        config: { ...config },
        questions,
        currentIndex: 0,
        answers: [],
        startedAt: new Date().toISOString()
      };

      setSession(newSession);
    } catch (err) {
      setError('Failed to load questions. Please try again.');
      console.error('Error starting test:', err);
    } finally {
      setIsLoading(false);
    }
  }, [config]);

  // Submit answer for current question
  const submitAnswer = useCallback((selectedAnswers: string[]) => {
    if (!session) return;

    const currentQuestion = session.questions[session.currentIndex];
    const isCorrect = checkAnswer(currentQuestion, selectedAnswers);

    setSession(prev => {
      if (!prev) return null;
      return {
        ...prev,
        answers: [
          ...prev.answers,
          {
            questionId: currentQuestion.id,
            selectedAnswers,
            isCorrect,
            answeredAt: new Date().toISOString()
          }
        ]
      };
    });
  }, [session]);

  // Move to next question
  const nextQuestion = useCallback(() => {
    if (!session) return;

    setSession(prev => {
      if (!prev) return null;
      return {
        ...prev,
        currentIndex: prev.currentIndex + 1
      };
    });
  }, [session]);

  // End test and calculate results
  const endTest = useCallback((): TestResult | null => {
    if (!session) return null;

    const correctCount = session.answers.filter(a => a.isCorrect).length;
    const totalQuestions = session.questions.length;

    // Calculate weak topics
    const topicErrors: { [key: number]: number } = {};
    session.answers.forEach((answer, idx) => {
      if (!answer.isCorrect) {
        const question = session.questions[idx];
        question.topics.forEach(t => {
          topicErrors[t] = (topicErrors[t] || 0) + 1;
        });
      }
    });

    const weakTopics = Object.entries(topicErrors)
      .map(([topicNum, count]) => ({
        topicNumber: parseInt(topicNum),
        topicTitle: getTopicTitle(parseInt(topicNum)),
        incorrectCount: count
      }))
      .sort((a, b) => b.incorrectCount - a.incorrectCount)
      .slice(0, 5);

    const startTime = new Date(session.startedAt).getTime();
    const endTime = Date.now();
    const duration = Math.round((endTime - startTime) / 1000);

    setSession(prev => prev ? { ...prev, completedAt: new Date().toISOString() } : null);

    return {
      sessionId: session.id,
      totalQuestions,
      correctCount,
      incorrectCount: totalQuestions - correctCount,
      score: Math.round((correctCount / totalQuestions) * 100),
      duration,
      weakTopics
    };
  }, [session]);

  // Reset everything
  const resetTest = useCallback(() => {
    setSession(null);
    setError(null);
  }, []);

  // Computed values
  const currentQuestion = session?.questions[session.currentIndex] ?? null;
  const currentAnswer = session?.answers.find(
    a => a.questionId === currentQuestion?.id
  );
  const isAnswered = !!currentAnswer;
  const lastAnswerCorrect = currentAnswer?.isCorrect ?? null;
  const progress = session
    ? { current: session.currentIndex + 1, total: session.questions.length }
    : { current: 0, total: 0 };

  const value: TestContextValue = {
    config,
    setFilterMode,
    toggleTopic,
    selectAllTopicsInMcq,
    clearTopicsInMcq,
    setSelectedMcq,
    setSelectedTestId,
    setQuestionCount,
    session,
    isLoading,
    error,
    startTest,
    submitAnswer,
    nextQuestion,
    endTest,
    resetTest,
    currentQuestion,
    isAnswered,
    lastAnswerCorrect,
    progress
  };

  return (
    <TestContext.Provider value={value}>
      {children}
    </TestContext.Provider>
  );
}

export function useTest() {
  const context = useContext(TestContext);
  if (!context) {
    throw new Error('useTest must be used within a TestProvider');
  }
  return context;
}
