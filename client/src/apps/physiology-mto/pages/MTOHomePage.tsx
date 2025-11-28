import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight, Check, Play, BookOpen, FileText, ClipboardList, Flag, Loader2 } from 'lucide-react';
import { useTest } from '../context/TestContext';
// Static definitions from local service
import { mcqFilters, getTopicsGroupedByMcq, getAvailableTestIds } from '../services/questionsService';
// Dynamic counts from Firebase service
import { getAllQuestions } from '../services/firebaseQuestionsService';
import { getBookmarkedQuestionIds } from '../services/bookmarkService';
import { useAuth } from '@/contexts/AuthContext';
import type { FilterMode } from '../../physiology/data/questions/types';

export function MTOHomePage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const {
    config,
    setFilterMode,
    toggleTopic,
    selectAllTopicsInMcq,
    clearTopicsInMcq,
    setSelectedMcq,
    setSelectedTestId,
    setBookmarkedQuestionIds,
    setQuestionCount,
    startTest,
    isLoading,
    error
  } = useTest();

  const [expandedMcqs, setExpandedMcqs] = useState<string[]>([]);
  const [availableTests, setAvailableTests] = useState<string[]>([]);
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [bookmarksLoading, setBookmarksLoading] = useState(false);
  const topicsGrouped = getTopicsGroupedByMcq();

  // Dynamic question counts from Firebase
  const [topicCounts, setTopicCounts] = useState<Record<number, number>>({});
  const [mcqCounts, setMcqCounts] = useState<Record<string, number>>({});
  const [countsLoading, setCountsLoading] = useState(true);

  // Load question counts from Firebase on mount
  useEffect(() => {
    async function loadCounts() {
      setCountsLoading(true);
      try {
        const allQuestions = await getAllQuestions();

        // Calculate topic counts dynamically
        const newTopicCounts: Record<number, number> = {};
        const newMcqCounts: Record<string, number> = {};

        // Count questions per topic
        for (const question of allQuestions) {
          for (const topicNum of question.topics) {
            newTopicCounts[topicNum] = (newTopicCounts[topicNum] || 0) + 1;
          }
        }

        // Count unique questions per MCQ (deduplicated)
        for (const mcq of mcqFilters) {
          const mcqQuestions = new Set<string>();
          for (const question of allQuestions) {
            if (question.topics.some(t => mcq.topics.includes(t))) {
              mcqQuestions.add(question.contentHash || question.id);
            }
          }
          newMcqCounts[mcq.id] = mcqQuestions.size;
        }

        setTopicCounts(newTopicCounts);
        setMcqCounts(newMcqCounts);
        console.log('[MTOHomePage] Loaded dynamic counts from Firebase:', {
          topics: Object.keys(newTopicCounts).length,
          totalTopicQuestions: Object.values(newTopicCounts).reduce((a, b) => a + b, 0),
          mcqs: newMcqCounts
        });
      } catch (error) {
        console.error('[MTOHomePage] Error loading counts:', error);
      } finally {
        setCountsLoading(false);
      }
    }
    loadCounts();
  }, []);

  // Load available test IDs on mount
  useEffect(() => {
    getAvailableTestIds().then(setAvailableTests);
  }, []);

  // Load bookmarks when switching to bookmarks mode or on mount
  useEffect(() => {
    if (user && config.filterMode === 'bookmarks') {
      setBookmarksLoading(true);
      getBookmarkedQuestionIds(user.uid).then(ids => {
        setBookmarkedIds(ids);
        setBookmarkedQuestionIds(ids);
        setBookmarksLoading(false);
      });
    }
  }, [user, config.filterMode, setBookmarkedQuestionIds]);

  const toggleMcqExpanded = (mcqId: string) => {
    setExpandedMcqs(prev =>
      prev.includes(mcqId)
        ? prev.filter(id => id !== mcqId)
        : [...prev, mcqId]
    );
  };

  const handleStartTest = async () => {
    await startTest();
    navigate('test');
  };

  const isConfigValid = () => {
    switch (config.filterMode) {
      case 'topic':
        return config.selectedTopics.length > 0;
      case 'mcq':
        return !!config.selectedMcq;
      case 'test':
        return !!config.selectedTestId;
      case 'bookmarks':
        return bookmarkedIds.length > 0;
      default:
        return false;
    }
  };

  const tabs: { id: FilterMode; label: string; icon: typeof BookOpen }[] = [
    { id: 'topic', label: 'By Topic', icon: BookOpen },
    { id: 'mcq', label: 'By MCQ Exam', icon: ClipboardList },
    { id: 'test', label: 'By Test', icon: FileText },
    { id: 'bookmarks', label: 'Saved', icon: Flag },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-2xl font-bold text-foreground mb-2">Configure Your Test</h1>
        <p className="text-muted-foreground">Select how you want to filter questions</p>
      </motion.div>

      {/* Filter Mode Tabs */}
      <div className="flex gap-2 mb-6 p-1 bg-muted/50 rounded-lg">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilterMode(tab.id)}
            className={`
              flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-md
              text-sm font-medium transition-all
              ${config.filterMode === tab.id
                ? 'bg-card text-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
              }
            `}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Filter Content */}
      <div className="bg-card border border-border rounded-xl p-6 mb-6">
        <AnimatePresence mode="wait">
          {config.filterMode === 'topic' && (
            <motion.div
              key="topic"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-foreground">Select Topics</h3>
                <span className="text-sm text-muted-foreground">
                  {config.selectedTopics.length} selected
                </span>
              </div>

              <div className="space-y-3">
                {topicsGrouped.map(({ mcq, topics }) => {
                  if (topics.length === 0) return null;

                  const isExpanded = expandedMcqs.includes(mcq.id);
                  const selectedInGroup = topics.filter(t =>
                    config.selectedTopics.includes(t.number)
                  ).length;
                  const mcqQuestionCount = mcqCounts[mcq.id] || 0;

                  return (
                    <div key={mcq.id} className="border border-border rounded-lg overflow-hidden">
                      {/* MCQ Header */}
                      <div
                        className="flex items-center justify-between p-3 bg-muted/30 cursor-pointer hover:bg-muted/50 transition-colors"
                        onClick={() => toggleMcqExpanded(mcq.id)}
                      >
                        <div className="flex items-center gap-3">
                          {isExpanded ? (
                            <ChevronDown className="w-4 h-4 text-muted-foreground" />
                          ) : (
                            <ChevronRight className="w-4 h-4 text-muted-foreground" />
                          )}
                          <div>
                            <span className="font-medium text-foreground">{mcq.name}</span>
                            <span className="text-sm text-muted-foreground ml-2">
                              ({selectedInGroup}/{topics.length} topics)
                            </span>
                            <span className="text-sm text-muted-foreground ml-2">
                              • {mcqQuestionCount} {mcqQuestionCount === 1 ? 'question' : 'questions'} available
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
                          <button
                            onClick={() => selectAllTopicsInMcq(mcq.id, topics.map(t => t.number))}
                            className="text-xs text-primary hover:underline"
                          >
                            Select All
                          </button>
                          <span className="text-muted-foreground">|</span>
                          <button
                            onClick={() => clearTopicsInMcq(mcq.id, topics.map(t => t.number))}
                            className="text-xs text-muted-foreground hover:text-foreground"
                          >
                            Clear
                          </button>
                        </div>
                      </div>

                      {/* Topics List */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="p-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {topics.map((topic) => {
                                const isSelected = config.selectedTopics.includes(topic.number);
                                const questionCount = topicCounts[topic.number] || 0;
                                return (
                                  <label
                                    key={topic.number}
                                    onClick={() => toggleTopic(topic.number)}
                                    className={`
                                      flex items-center gap-3 p-2 rounded-lg cursor-pointer
                                      transition-colors
                                      ${isSelected
                                        ? 'bg-primary/10 border border-primary/30'
                                        : 'hover:bg-muted/50 border border-transparent'
                                      }
                                    `}
                                  >
                                    <div
                                      className={`
                                        w-5 h-5 rounded flex items-center justify-center flex-shrink-0
                                        transition-colors
                                        ${isSelected
                                          ? 'bg-primary text-primary-foreground'
                                          : 'border-2 border-muted-foreground/30'
                                        }
                                      `}
                                    >
                                      {isSelected && <Check className="w-3 h-3" />}
                                    </div>
                                    <span className="text-sm text-foreground flex-1">
                                      <span className="font-medium">{topic.number}.</span>{' '}
                                      {topic.title}
                                      {questionCount > 0 && (
                                        <span className="text-xs text-muted-foreground ml-1">
                                          ({questionCount} Qs)
                                        </span>
                                      )}
                                    </span>
                                  </label>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {config.filterMode === 'mcq' && (
            <motion.div
              key="mcq"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              <h3 className="font-semibold text-foreground mb-4">Select MCQ Exam</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {mcqFilters.map((mcq) => {
                  const questionCount = mcqCounts[mcq.id] || 0;
                  const isSelected = config.selectedMcq === mcq.id;

                  return (
                    <button
                      key={mcq.id}
                      onClick={() => setSelectedMcq(mcq.id)}
                      disabled={questionCount === 0}
                      className={`
                        p-4 rounded-lg border-2 text-left transition-all
                        ${isSelected
                          ? 'border-primary bg-primary/10'
                          : 'border-border hover:border-primary/50'
                        }
                        ${questionCount === 0 ? 'opacity-50 cursor-not-allowed' : ''}
                      `}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-foreground">{mcq.name}</span>
                        {isSelected && (
                          <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                            <Check className="w-3 h-3 text-primary-foreground" />
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{mcq.description}</p>
                      <p className="text-xs text-muted-foreground">
                        {questionCount} questions available
                        {questionCount === 0 && ' (coming soon)'}
                      </p>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {config.filterMode === 'test' && (
            <motion.div
              key="test"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-foreground">Select Test ID</h3>
                <span className="text-sm text-muted-foreground">
                  {availableTests.length} tests available
                </span>
              </div>
              {availableTests.length === 0 ? (
                <div className="bg-muted/30 rounded-lg p-6 text-center">
                  <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                  <p className="text-muted-foreground mb-2">Loading tests...</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[400px] overflow-y-auto pr-1">
                  {availableTests.map((testId) => {
                    const isSelected = config.selectedTestId === testId;
                    return (
                      <button
                        key={testId}
                        onClick={() => setSelectedTestId(testId)}
                        className={`
                          p-4 rounded-lg border-2 text-left transition-all
                          ${isSelected
                            ? 'border-primary bg-primary/10'
                            : 'border-border hover:border-primary/50'
                          }
                        `}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-mono font-semibold text-foreground text-sm">
                            {testId}
                          </span>
                          {isSelected && (
                            <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                              <Check className="w-3 h-3 text-primary-foreground" />
                            </div>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Click to select this test
                        </p>
                      </button>
                    );
                  })}
                </div>
              )}
            </motion.div>
          )}

          {config.filterMode === 'bookmarks' && (
            <motion.div
              key="bookmarks"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-foreground">Saved Questions</h3>
                <span className="text-sm text-muted-foreground">
                  {bookmarkedIds.length} saved
                </span>
              </div>

              {bookmarksLoading ? (
                <div className="bg-muted/30 rounded-lg p-8 text-center">
                  <Loader2 className="w-8 h-8 text-primary mx-auto mb-3 animate-spin" />
                  <p className="text-muted-foreground">Loading your saved questions...</p>
                </div>
              ) : bookmarkedIds.length === 0 ? (
                <div className="bg-muted/30 rounded-lg p-8 text-center">
                  <Flag className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                  <p className="text-foreground font-medium mb-2">No saved questions yet</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    While practicing, click the "Save" button on any question to add it here for review later.
                  </p>
                  <button
                    onClick={() => setFilterMode('topic')}
                    className="text-primary hover:underline text-sm"
                  >
                    Start practicing by topic
                  </button>
                </div>
              ) : (
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Flag className="w-8 h-8 text-primary fill-primary" />
                  </div>
                  <p className="text-foreground font-medium mb-2">
                    You have {bookmarkedIds.length} saved {bookmarkedIds.length === 1 ? 'question' : 'questions'}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Ready to practice your flagged questions for review!
                  </p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Question Count */}
      <div className="bg-card border border-border rounded-xl p-6 mb-6">
        <h3 className="font-semibold text-foreground mb-4">Number of Questions</h3>
        <div className="flex flex-wrap gap-2">
          {[10, 25, 50, 'all'].map((count) => (
            <button
              key={count}
              onClick={() => setQuestionCount(count as number | 'all')}
              className={`
                px-4 py-2 rounded-lg text-sm font-medium transition-all
                ${config.questionCount === count
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted/50 text-foreground hover:bg-muted'
                }
              `}
            >
              {count === 'all' ? 'All Questions' : count}
            </button>
          ))}
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 mb-6">
          <p className="text-sm text-destructive">{error}</p>
        </div>
      )}

      {/* Start Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleStartTest}
        disabled={!isConfigValid() || isLoading}
        className={`
          w-full flex items-center justify-center gap-2 py-4 rounded-xl
          text-lg font-semibold transition-all
          ${isConfigValid() && !isLoading
            ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20'
            : 'bg-muted text-muted-foreground cursor-not-allowed'
          }
        `}
      >
        {isLoading ? (
          <>
            <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
            Loading Questions...
          </>
        ) : (
          <>
            <Play className="w-5 h-5" />
            Start Test
          </>
        )}
      </motion.button>

      {!isConfigValid() && (
        <p className="text-sm text-muted-foreground text-center mt-3">
          {config.filterMode === 'topic' && 'Select at least one topic to continue'}
          {config.filterMode === 'mcq' && 'Select an MCQ exam to continue'}
          {config.filterMode === 'test' && 'Select a test to continue'}
          {config.filterMode === 'bookmarks' && 'No saved questions to practice'}
        </p>
      )}
    </div>
  );
}
