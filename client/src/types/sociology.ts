// Sociology Exam Types

export type QuestionBadgeType = 'activity' | 'exam';

export interface ContentBlock {
  type: 'question' | 'paragraph' | 'list' | 'orderedList' | 'table';
  text?: string;
  badge?: QuestionBadgeType;
  items?: string[];
  headers?: string[];
  rows?: string[][];
}

export interface ChapterData {
  id: number;
  title: string;
  subtitle: string;
  content: ContentBlock[];
}

export interface ChapterCardData {
  num: number;
  icon: string; // emoji or icon identifier
  title: string;
  description: string;
}

export interface ExamData {
  examNumber: number;
  examTitle: string;
  examDescription: string;
  chapters: ChapterCardData[];
  chapterContent: Record<number, ChapterData>;
}
