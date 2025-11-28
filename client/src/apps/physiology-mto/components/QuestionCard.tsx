import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, AlertCircle, ChevronDown, Lightbulb, Loader2, Flag } from 'lucide-react';
import type { Question } from '../../physiology/data/questions/types';
import { getExplanationByLegacyId } from '../services/firebaseQuestionsService';
import { flagQuestion, hasUserFlagged, type FlagReason } from '../services/flagService';
import { useAuth } from '@/contexts/AuthContext';
import type { QuestionExplanation } from '../types/firebase';

interface QuestionCardProps {
  question: Question;
  onSubmit: (selectedAnswers: string[]) => void;
  isAnswered: boolean;
  isCorrect: boolean | null;
  selectedAnswers?: string[];
}

export function QuestionCard({
  question,
  onSubmit,
  isAnswered,
  isCorrect,
  selectedAnswers: submittedAnswers
}: QuestionCardProps) {
  const { user } = useAuth();
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [explanation, setExplanation] = useState<QuestionExplanation | null>(null);
  const [explanationLoading, setExplanationLoading] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showFlagMenu, setShowFlagMenu] = useState(false);
  const [flagStatus, setFlagStatus] = useState<'idle' | 'loading' | 'success' | 'already-flagged'>('idle');
  const [userHasFlagged, setUserHasFlagged] = useState(false);
  const fetchedForQuestion = useRef<string | null>(null);
  const flagCheckRef = useRef<string | null>(null);
  const isMultipleChoice = question.correctAnswerCount > 1;

  // Fetch explanation when question is answered
  useEffect(() => {
    // Only fetch once per question when answered
    if (isAnswered && fetchedForQuestion.current !== question.id) {
      fetchedForQuestion.current = question.id;
      setExplanationLoading(true);
      getExplanationByLegacyId(question.id)
        .then((exp) => {
          setExplanation(exp);
          if (exp) {
            setShowExplanation(true); // Auto-expand if explanation exists
          }
        })
        .catch((err) => {
          console.error('Failed to fetch explanation:', err);
        })
        .finally(() => {
          setExplanationLoading(false);
        });
    }
  }, [isAnswered, question.id]);

  // Reset state when question changes
  useEffect(() => {
    setSelectedAnswers([]);
    setExplanation(null);
    setShowExplanation(false);
    setShowFlagMenu(false);
    setFlagStatus('idle');
    setUserHasFlagged(false);
    fetchedForQuestion.current = null;
    flagCheckRef.current = null;
  }, [question.id]);

  // Check if user has already flagged this question
  useEffect(() => {
    if (isAnswered && user && flagCheckRef.current !== question.id) {
      flagCheckRef.current = question.id;
      hasUserFlagged(question.id, user.uid).then((flagged) => {
        setUserHasFlagged(flagged);
        if (flagged) {
          setFlagStatus('already-flagged');
        }
      });
    }
  }, [isAnswered, question.id, user]);

  const handleFlag = async (reason: FlagReason) => {
    if (!user) return;

    setFlagStatus('loading');
    setShowFlagMenu(false);

    const result = await flagQuestion(question.id, user.uid, reason);

    if (result.success) {
      setFlagStatus('success');
      setUserHasFlagged(true);
    } else if (result.alreadyFlagged) {
      setFlagStatus('already-flagged');
      setUserHasFlagged(true);
    } else {
      setFlagStatus('idle');
    }
  };

  const toggleOption = (letter: string) => {
    if (isAnswered) return;

    if (isMultipleChoice) {
      setSelectedAnswers(prev =>
        prev.includes(letter)
          ? prev.filter(l => l !== letter)
          : [...prev, letter]
      );
    } else {
      setSelectedAnswers([letter]);
    }
  };

  const handleSubmit = () => {
    if (selectedAnswers.length === 0) return;
    onSubmit(selectedAnswers);
  };

  const getOptionState = (letter: string) => {
    if (!isAnswered) {
      return selectedAnswers.includes(letter) ? 'selected' : 'default';
    }

    const wasSelected = submittedAnswers?.includes(letter);
    const isCorrectAnswer = question.correctAnswers.includes(letter);

    // Highlight user's selections, but show checkmarks on all correct answers
    if (wasSelected && isCorrectAnswer) return 'correct';       // Selected + correct = green highlight + checkmark
    if (wasSelected && !isCorrectAnswer) return 'incorrect';    // Selected + wrong = red highlight + X
    if (!wasSelected && isCorrectAnswer) return 'missed';       // Not selected but correct = checkmark only, no highlight
    return 'default';
  };

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      {/* Question Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm font-semibold">
            Q
          </span>
          <div className="flex-1">
            <p className="text-lg text-foreground leading-relaxed">{question.text}</p>
            <p className="text-sm text-muted-foreground mt-2">
              {isMultipleChoice ? (
                <span className="flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  Select all correct answers
                </span>
              ) : (
                'Select one answer'
              )}
            </p>
          </div>
        </div>
      </div>

      {/* Options */}
      <div className="p-6 space-y-3">
        {question.options.map((option) => {
          const state = getOptionState(option.letter);

          return (
            <motion.button
              key={option.letter}
              whileHover={!isAnswered ? { scale: 1.01 } : {}}
              whileTap={!isAnswered ? { scale: 0.99 } : {}}
              onClick={() => toggleOption(option.letter)}
              disabled={isAnswered}
              className={`
                w-full flex items-center gap-3 p-4 rounded-lg border-2 text-left
                transition-all
                ${state === 'default' && 'border-border hover:border-primary/50 bg-card'}
                ${state === 'selected' && 'border-primary bg-primary/10'}
                ${state === 'correct' && 'border-green-500 bg-green-500/10'}
                ${state === 'incorrect' && 'border-red-500 bg-red-500/10'}
                ${state === 'missed' && 'border-border bg-card'}
                ${isAnswered ? 'cursor-default' : 'cursor-pointer'}
              `}
            >
              {/* Option Letter - Always visible */}
              <span
                className={`
                  flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center
                  text-sm font-semibold uppercase
                  ${state === 'default' && 'bg-muted text-muted-foreground'}
                  ${state === 'selected' && 'bg-primary text-primary-foreground'}
                  ${state === 'correct' && 'bg-green-500 text-white dark:bg-green-500/20 dark:text-green-300'}
                  ${state === 'incorrect' && 'bg-red-500 text-white dark:bg-red-500/20 dark:text-red-300'}
                  ${state === 'missed' && 'bg-muted text-muted-foreground'}
                `}
              >
                {option.letter}
              </span>

              {/* Option Text */}
              <span
                className={`
                  flex-1 text-sm
                  ${state === 'correct' && 'text-foreground dark:text-green-300 font-medium'}
                  ${state === 'incorrect' && 'text-foreground dark:text-red-300'}
                  ${state === 'missed' && 'text-foreground'}
                  ${state === 'default' && 'text-foreground'}
                  ${state === 'selected' && 'text-foreground'}
                `}
              >
                {option.text}
              </span>

              {/* Checkmark for multi-select (before submit) */}
              {isMultipleChoice && state === 'selected' && (
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
              )}

              {/* Result icon on the right (after submit) */}
              {(state === 'correct' || state === 'missed') && (
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </span>
              )}
              {state === 'incorrect' && (
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                  <X className="w-4 h-4 text-white" />
                </span>
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Submit Button (only when not answered) */}
      {!isAnswered && (
        <div className="p-6 pt-0">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSubmit}
            disabled={selectedAnswers.length === 0}
            className={`
              w-full py-3 rounded-lg font-semibold transition-all
              ${selectedAnswers.length > 0
                ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                : 'bg-muted text-muted-foreground cursor-not-allowed'
              }
            `}
          >
            Submit Answer
          </motion.button>
        </div>
      )}

      {/* Feedback (only when answered) */}
      {isAnswered && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`
            p-6 border-t
            ${isCorrect
              ? 'bg-green-500/10 border-green-500/30'
              : 'bg-red-500/10 border-red-500/30'
            }
          `}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              {isCorrect ? (
                <>
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-semibold text-foreground dark:text-green-300">
                    Correct!
                  </span>
                </>
              ) : (
                <>
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <X className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-semibold text-foreground dark:text-red-300">
                    Incorrect
                  </span>
                </>
              )}
            </div>

            {/* Flag Button */}
            <div className="relative">
              {flagStatus === 'loading' ? (
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Flagging...</span>
                </div>
              ) : flagStatus === 'success' || flagStatus === 'already-flagged' ? (
                <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 text-sm">
                  <Flag className="w-4 h-4 fill-current" />
                  <span>Flagged</span>
                </div>
              ) : (
                <>
                  <button
                    onClick={() => setShowFlagMenu(!showFlagMenu)}
                    className="flex items-center gap-2 px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                  >
                    <Flag className="w-4 h-4" />
                    <span>Report Issue</span>
                  </button>

                  {/* Flag Menu Dropdown */}
                  <AnimatePresence>
                    {showFlagMenu && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 top-full mt-2 w-56 bg-card border border-border rounded-lg shadow-lg z-50 overflow-hidden"
                      >
                        <div className="p-2 border-b border-border">
                          <p className="text-xs text-muted-foreground font-medium">What's the issue?</p>
                        </div>
                        <div className="p-1">
                          <button
                            onClick={() => handleFlag('incorrectAnswer')}
                            className="w-full text-left px-3 py-2 text-sm hover:bg-muted rounded-md transition-colors"
                          >
                            Incorrect answer marked
                          </button>
                          <button
                            onClick={() => handleFlag('wrongTopic')}
                            className="w-full text-left px-3 py-2 text-sm hover:bg-muted rounded-md transition-colors"
                          >
                            Wrong topic assigned
                          </button>
                          <button
                            onClick={() => handleFlag('unclearQuestion')}
                            className="w-full text-left px-3 py-2 text-sm hover:bg-muted rounded-md transition-colors"
                          >
                            Question is unclear
                          </button>
                          <button
                            onClick={() => handleFlag('other')}
                            className="w-full text-left px-3 py-2 text-sm hover:bg-muted rounded-md transition-colors"
                          >
                            Other issue
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              )}
            </div>
          </div>

          {/* Correct Answer Display */}
          {!isCorrect && (
            <p className="text-sm text-muted-foreground mb-3">
              Correct answer{question.correctAnswers.length > 1 ? 's' : ''}:{' '}
              <span className="font-semibold text-foreground dark:text-green-400">
                {question.correctAnswers.join(', ').toUpperCase()}
              </span>
            </p>
          )}

          {/* Explanation Section */}
          <div className="mt-4">
            {explanationLoading ? (
              <div className="flex items-center gap-2 text-muted-foreground">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span className="text-sm">Loading explanation...</span>
              </div>
            ) : explanation ? (
              <div className="bg-card rounded-lg border border-border overflow-hidden">
                {/* Explanation Header - Clickable */}
                <button
                  onClick={() => setShowExplanation(!showExplanation)}
                  className="w-full flex items-center justify-between p-4 hover:bg-muted/30 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-amber-500" />
                    <span className="font-semibold text-foreground">Explanation</span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${
                      showExplanation ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Explanation Content - Collapsible */}
                <AnimatePresence>
                  {showExplanation && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 space-y-4">
                        {/* Summary */}
                        <div className="p-3 bg-muted/30 rounded-lg">
                          <p className="text-sm text-foreground leading-relaxed">
                            {explanation.summary}
                          </p>
                        </div>

                        {/* Personalized Feedback Based on User's Selections */}
                        {(() => {
                          const userSelections = submittedAnswers || [];
                          const correctAnswers = question.correctAnswers;

                          // Categorize the user's performance
                          const correctlySelected = userSelections.filter(s => correctAnswers.includes(s));
                          const missedCorrect = correctAnswers.filter(c => !userSelections.includes(c));
                          const wrongSelections = userSelections.filter(s => !correctAnswers.includes(s));

                          return (
                            <>
                              {/* Section 1: What user got RIGHT */}
                              {correctlySelected.length > 0 && (
                                <div>
                                  <h5 className="text-sm font-semibold text-green-600 dark:text-green-400 mb-2 flex items-center gap-1">
                                    <Check className="w-4 h-4" />
                                    {isCorrect
                                      ? (correctlySelected.length === 1 ? 'Why Your Answer is Correct' : 'Why Your Answers are Correct')
                                      : (correctlySelected.length === 1 ? 'You Got This One Right' : 'You Got These Right')
                                    }
                                  </h5>
                                  <div className="space-y-2">
                                    {correctlySelected.map(letter => (
                                      <div key={letter} className="flex gap-2 text-sm">
                                        <span className="font-semibold text-green-600 dark:text-green-400 uppercase flex-shrink-0">
                                          {letter}.
                                        </span>
                                        <span className="text-foreground">
                                          {explanation.whyCorrect[letter] || 'Correct answer.'}
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {/* Section 2: What user MISSED (correct answers they didn't select) */}
                              {missedCorrect.length > 0 && (
                                <div>
                                  <h5 className="text-sm font-semibold text-amber-600 dark:text-amber-400 mb-2 flex items-center gap-1">
                                    <AlertCircle className="w-4 h-4" />
                                    {question.correctAnswerCount === 1
                                      ? 'The Correct Answer Is'
                                      : correctlySelected.length > 0
                                        ? (missedCorrect.length === 1 ? 'You Should Have Also Selected This' : 'You Should Have Also Selected These')
                                        : (missedCorrect.length === 1 ? 'The Correct Answer Is' : 'The Correct Answers Are')
                                    }
                                  </h5>
                                  <div className="space-y-2">
                                    {missedCorrect.map(letter => (
                                      <div key={letter} className="flex gap-2 text-sm">
                                        <span className="font-semibold text-amber-600 dark:text-amber-400 uppercase flex-shrink-0">
                                          {letter}.
                                        </span>
                                        <span className="text-foreground">
                                          {explanation.whyCorrect[letter] || 'This is also a correct answer.'}
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {/* Section 3: What user got WRONG */}
                              {wrongSelections.length > 0 && (
                                <div>
                                  <h5 className="text-sm font-semibold text-red-600 dark:text-red-400 mb-2 flex items-center gap-1">
                                    <X className="w-4 h-4" />
                                    Why Your Selection Was Incorrect
                                  </h5>
                                  <div className="space-y-2">
                                    {wrongSelections.map(letter => (
                                      <div key={letter} className="flex gap-2 text-sm">
                                        <span className="font-semibold text-red-600 dark:text-red-400 uppercase flex-shrink-0">
                                          {letter}.
                                        </span>
                                        <span className="text-muted-foreground">
                                          {explanation.whyIncorrect[letter] || 'This answer is incorrect.'}
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </>
                          );
                        })()}

                        {/* Topic Reference */}
                        {explanation.topicReference && (
                          <p className="text-xs text-muted-foreground italic border-t border-border pt-3">
                            {explanation.topicReference}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <div className="text-sm text-muted-foreground italic">
                No explanation available for this question yet.
              </div>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
}
