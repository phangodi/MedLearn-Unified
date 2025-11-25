import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Flag, Trophy, Clock, Target, AlertTriangle } from 'lucide-react';
import { useTest } from '../context/TestContext';
import { QuestionCard } from '../components/QuestionCard';
import type { TestResult } from '../../physiology/data/questions/types';

export function MTOTestPage() {
  const navigate = useNavigate();
  const {
    session,
    currentQuestion,
    isAnswered,
    lastAnswerCorrect,
    progress,
    submitAnswer,
    nextQuestion,
    endTest,
    resetTest
  } = useTest();

  const [result, setResult] = useState<TestResult | null>(null);
  const [showExitConfirm, setShowExitConfirm] = useState(false);

  // Redirect if no session
  useEffect(() => {
    if (!session) {
      navigate('/physiology/mto');
    }
  }, [session, navigate]);

  if (!session || !currentQuestion) {
    return null;
  }

  const isLastQuestion = progress.current === progress.total;
  const currentAnswer = session.answers.find(a => a.questionId === currentQuestion.id);

  const handleNext = () => {
    if (isLastQuestion) {
      const testResult = endTest();
      setResult(testResult);
    } else {
      nextQuestion();
    }
  };

  const handleExit = () => {
    resetTest();
    navigate('/physiology/mto');
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Show results
  if (result) {
    return (
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-card border border-border rounded-xl overflow-hidden"
        >
          {/* Result Header */}
          <div className={`p-8 text-center ${result.score >= 70 ? 'bg-green-500/10' : result.score >= 50 ? 'bg-amber-500/10' : 'bg-red-500/10'}`}>
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-card flex items-center justify-center">
              <Trophy className={`w-10 h-10 ${result.score >= 70 ? 'text-green-500' : result.score >= 50 ? 'text-amber-500' : 'text-red-500'}`} />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              {result.score >= 70 ? 'Great Job!' : result.score >= 50 ? 'Good Effort!' : 'Keep Practicing!'}
            </h1>
            <p className="text-muted-foreground">Test Completed</p>
          </div>

          {/* Stats */}
          <div className="p-6 grid grid-cols-3 gap-4 border-b border-border">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Target className="w-5 h-5 text-primary" />
                <span className="text-2xl font-bold text-foreground">{result.score}%</span>
              </div>
              <p className="text-sm text-muted-foreground">Score</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="text-2xl font-bold text-green-500">{result.correctCount}</span>
                <span className="text-muted-foreground">/</span>
                <span className="text-2xl font-bold text-foreground">{result.totalQuestions}</span>
              </div>
              <p className="text-sm text-muted-foreground">Correct</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Clock className="w-5 h-5 text-muted-foreground" />
                <span className="text-2xl font-bold text-foreground">{formatTime(result.duration)}</span>
              </div>
              <p className="text-sm text-muted-foreground">Time</p>
            </div>
          </div>

          {/* Weak Topics */}
          {result.weakTopics.length > 0 && (
            <div className="p-6 border-b border-border">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
                Topics to Review
              </h3>
              <div className="space-y-2">
                {result.weakTopics.map((topic) => (
                  <div
                    key={topic.topicNumber}
                    className="flex items-center justify-between p-3 bg-muted/30 rounded-lg"
                  >
                    <span className="text-sm text-foreground">
                      <span className="font-medium">{topic.topicNumber}.</span> {topic.topicTitle}
                    </span>
                    <span className="text-sm text-red-500 font-medium">
                      {topic.incorrectCount} wrong
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="p-6 flex gap-3">
            <button
              onClick={handleExit}
              className="flex-1 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-muted transition-colors"
            >
              Back to Settings
            </button>
            <button
              onClick={() => {
                resetTest();
                navigate('/physiology/mto');
              }}
              className="flex-1 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              New Test
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Exit Confirmation Modal */}
      <AnimatePresence>
        {showExitConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowExitConfirm(false)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="bg-card border border-border rounded-xl p-6 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-lg font-semibold text-foreground mb-2">Exit Test?</h3>
              <p className="text-muted-foreground mb-6">
                Your progress will be lost. Are you sure you want to exit?
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowExitConfirm(false)}
                  className="flex-1 py-2 rounded-lg border border-border text-foreground font-medium hover:bg-muted transition-colors"
                >
                  Continue Test
                </button>
                <button
                  onClick={handleExit}
                  className="flex-1 py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition-colors"
                >
                  Exit
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => setShowExitConfirm(true)}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Exit
        </button>

        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">
            Question {progress.current} of {progress.total}
          </span>
          <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: 0 }}
              animate={{ width: `${(progress.current / progress.total) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        <button
          onClick={() => {/* TODO: Flag question */}}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <Flag className="w-4 h-4" />
          Flag
        </button>
      </div>

      {/* Question Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          <QuestionCard
            question={currentQuestion}
            onSubmit={submitAnswer}
            isAnswered={isAnswered}
            isCorrect={lastAnswerCorrect}
            selectedAnswers={currentAnswer?.selectedAnswers}
          />
        </motion.div>
      </AnimatePresence>

      {/* Next Button */}
      {isAnswered && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6"
        >
          <button
            onClick={handleNext}
            className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
          >
            {isLastQuestion ? (
              <>
                <Trophy className="w-5 h-5" />
                See Results
              </>
            ) : (
              <>
                Next Question
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
        </motion.div>
      )}
    </div>
  );
}
