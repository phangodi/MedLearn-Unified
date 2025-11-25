import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight, Check, Play, BookOpen, FileText, ClipboardList } from 'lucide-react';
import { useTest } from '../context/TestContext';
import { mcqFilters, getTopicsGroupedByMcq } from '../services/questionsService';
import type { FilterMode } from '../../physiology/data/questions/types';

export function MTOHomePage() {
  const navigate = useNavigate();
  const {
    config,
    setFilterMode,
    toggleTopic,
    selectAllTopicsInMcq,
    clearTopicsInMcq,
    setSelectedMcq,
    setSelectedTestId,
    setQuestionCount,
    startTest,
    isLoading,
    error
  } = useTest();

  const [expandedMcqs, setExpandedMcqs] = useState<string[]>(['mcq-1']);
  const topicsGrouped = getTopicsGroupedByMcq();

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
      default:
        return false;
    }
  };

  const tabs: { id: FilterMode; label: string; icon: typeof BookOpen }[] = [
    { id: 'topic', label: 'By Topic', icon: BookOpen },
    { id: 'mcq', label: 'By MCQ Exam', icon: ClipboardList },
    { id: 'test', label: 'By Test', icon: FileText },
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
                  const allSelected = selectedInGroup === topics.length;

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
                                return (
                                  <label
                                    key={topic.number}
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
                                        w-5 h-5 rounded flex items-center justify-center
                                        transition-colors
                                        ${isSelected
                                          ? 'bg-primary text-primary-foreground'
                                          : 'border-2 border-muted-foreground/30'
                                        }
                                      `}
                                      onClick={() => toggleTopic(topic.number)}
                                    >
                                      {isSelected && <Check className="w-3 h-3" />}
                                    </div>
                                    <span className="text-sm text-foreground">
                                      <span className="font-medium">{topic.number}.</span>{' '}
                                      {topic.title}
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
                  const implementedTopics = mcq.topics.filter(t => t <= 51).length;
                  const isSelected = config.selectedMcq === mcq.id;

                  return (
                    <button
                      key={mcq.id}
                      onClick={() => setSelectedMcq(mcq.id)}
                      disabled={implementedTopics === 0}
                      className={`
                        p-4 rounded-lg border-2 text-left transition-all
                        ${isSelected
                          ? 'border-primary bg-primary/10'
                          : 'border-border hover:border-primary/50'
                        }
                        ${implementedTopics === 0 ? 'opacity-50 cursor-not-allowed' : ''}
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
                        {implementedTopics} topics available
                        {implementedTopics === 0 && ' (coming soon)'}
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
              <h3 className="font-semibold text-foreground mb-4">Select Test ID</h3>
              <div className="bg-muted/30 rounded-lg p-6 text-center">
                <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                <p className="text-muted-foreground mb-2">No tests imported yet</p>
                <p className="text-sm text-muted-foreground">
                  Use the import skill to add exam questions
                </p>
              </div>
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
        </p>
      )}
    </div>
  );
}
