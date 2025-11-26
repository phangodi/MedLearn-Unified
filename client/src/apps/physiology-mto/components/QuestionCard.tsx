import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, AlertCircle } from 'lucide-react';
import type { Question } from '../../physiology/data/questions/types';

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
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const isMultipleChoice = question.correctAnswerCount > 1;

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
          <div className="flex items-center gap-3 mb-3">
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

          {/* Correct Answer Display */}
          {!isCorrect && (
            <p className="text-sm text-muted-foreground mb-3">
              Correct answer{question.correctAnswers.length > 1 ? 's' : ''}:{' '}
              <span className="font-semibold text-foreground dark:text-green-400">
                {question.correctAnswers.join(', ').toUpperCase()}
              </span>
            </p>
          )}

          {/* Explanation */}
          {question.explanation ? (
            <div className="bg-card rounded-lg p-4 border border-border">
              <h4 className="font-semibold text-foreground mb-2">Explanation</h4>
              <p className="text-sm text-muted-foreground">{question.explanation}</p>
            </div>
          ) : (
            <div className="bg-card rounded-lg p-4 border border-border">
              <p className="text-sm text-muted-foreground italic">
                Explanation not yet available for this question.
              </p>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
}
