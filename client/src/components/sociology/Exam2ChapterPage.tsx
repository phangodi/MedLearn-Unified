import { useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChapterHeader } from './ChapterHeader';
import { ContentRenderer } from './ContentRenderer';
import { SearchBar } from './SearchBar';
import type { ChapterData } from '@/types/sociology';

interface Exam2ChapterPageProps {
  chapter: ChapterData;
  totalChapters: number;
  examNumber: number;
  basePath: string;
  allChapters: Record<number, ChapterData>;
}

export function Exam2ChapterPage({
  chapter,
  totalChapters,
  examNumber,
  basePath,
  allChapters,
}: Exam2ChapterPageProps) {
  // Scroll to top when chapter changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [chapter.id]);

  return (
    <div className="min-h-screen bg-background">
      {/* Chapter Hero Header */}
      <ChapterHeader
        chapterNum={chapter.id}
        title={chapter.title}
        subtitle={chapter.subtitle}
        totalChapters={totalChapters}
        basePath={basePath}
      />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-sm text-muted-foreground mb-6"
        >
          <Link
            to="/sociology"
            className="hover:text-primary transition-colors"
          >
            Sociology
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link
            to={basePath}
            className="hover:text-primary transition-colors"
          >
            Exam {examNumber}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-semibold">
            Chapter {chapter.id}
          </span>
        </motion.div>

        {/* Search Bar */}
        <SearchBar chapters={allChapters} basePath={basePath} />

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card rounded-2xl shadow-sm border border-border p-8 md:p-12"
        >
          <ContentRenderer content={chapter.content} />
        </motion.div>
      </div>
    </div>
  );
}
