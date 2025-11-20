import { BookOpen, FileText } from 'lucide-react';
import type { QuestionBadgeType } from '@/types/sociology';

interface QuestionBadgeProps {
  type: QuestionBadgeType;
}

export function QuestionBadge({ type }: QuestionBadgeProps) {
  if (type === 'activity') {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-gradient-to-r from-cyan-600 to-cyan-700 dark:from-cyan-500 dark:to-cyan-600 text-white text-[10px] font-bold tracking-wide shadow-lg shadow-cyan-500/30 dark:shadow-cyan-500/20">
        <BookOpen className="w-3 h-3" />
        ACTIVITY TASK
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-gradient-to-r from-red-600 to-red-700 dark:from-red-500 dark:to-red-600 text-white text-[10px] font-bold tracking-wide shadow-lg shadow-red-500/30 dark:shadow-red-500/20">
      <FileText className="w-3 h-3" />
      EXAM QUESTION
    </span>
  );
}
