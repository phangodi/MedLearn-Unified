import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { ChapterCard } from './ChapterCard';
import { SearchBar } from './SearchBar';
import type { ChapterCardData, ChapterData } from '@/types/sociology';

interface Exam2HomeProps {
  examNumber: number;
  examTitle: string;
  examDescription: string;
  chapters: ChapterCardData[];
  chapterContent: Record<number, ChapterData>;
  basePath: string;
}

export function Exam2Home({
  examNumber,
  examTitle,
  examDescription,
  chapters,
  chapterContent,
  basePath,
}: Exam2HomeProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-background">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary via-cyan-600 to-secondary py-16 px-6 overflow-hidden">
        {/* Animated background orbs */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 right-10 w-64 h-64 bg-white/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-20 left-10 w-80 h-80 bg-white/15 rounded-full blur-3xl"
        />

        <div className="relative max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-white/80 text-sm mb-6"
          >
            <span>Sociology</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-semibold">Exam {examNumber}</span>
          </motion.div>

          {/* Branding */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg"
          >
            Lara's Sociology Studies
          </motion.h2>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl sm:text-2xl text-white/90 mb-2"
          >
            Sociology Exam {examNumber}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg sm:text-xl text-white/80 mb-2"
          >
            {examTitle}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-base sm:text-lg text-white/70 max-w-3xl"
          >
            {examDescription}
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Search Bar */}
        <SearchBar chapters={chapterContent} basePath={basePath} />

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Study Chapters
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Explore minimalist answers to all Activity Tasks and Exam questions
          </p>
        </motion.div>

        {/* Chapter Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {chapters.map((chapter, idx) => (
            <motion.div
              key={chapter.num}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5 + idx * 0.1,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <ChapterCard {...chapter} basePath={basePath} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
