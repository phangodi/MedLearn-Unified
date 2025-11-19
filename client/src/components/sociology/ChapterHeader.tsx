import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ChapterHeaderProps {
  chapterNum: number;
  title: string;
  subtitle: string;
  totalChapters: number;
  basePath: string;
}

export function ChapterHeader({
  chapterNum,
  title,
  subtitle,
  totalChapters,
  basePath,
}: ChapterHeaderProps) {
  return (
    <div className="relative bg-gradient-to-br from-primary via-cyan-600 to-secondary py-12 px-6 mb-8 overflow-hidden">
      {/* Animated background orbs */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 right-20 w-32 h-32 bg-white/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-10 left-20 w-40 h-40 bg-white/15 rounded-full blur-3xl"
      />

      <div className="relative max-w-4xl mx-auto">
        {/* Decorative circle icon and vertical line (like old design) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute left-0 top-0 flex flex-col items-center"
        >
          {/* Circle */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-white/30 bg-white/10 backdrop-blur-sm mb-2" />
          {/* Vertical line */}
          <div className="w-1 h-32 bg-gradient-to-b from-white/30 to-transparent" />
        </motion.div>

        {/* Content with left margin for the decorative element */}
        <div className="ml-28 sm:ml-32">
          {/* Chapter badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white mb-4"
          >
            <span className="text-sm font-medium">CHAPTER</span>
            <span className="text-2xl font-bold">{chapterNum}</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg uppercase"
          >
            {title}
          </motion.h1>

          {/* Branding */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-sm sm:text-base text-white/80 mb-2 tracking-wide"
          >
            LARA'S SOCIOLOGY STUDIES
          </motion.p>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-white/90 mb-6"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Chapter navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-between gap-4"
        >
          {/* Previous button */}
          {chapterNum > 8 ? (
            <Link to={`${basePath}/chapter/${chapterNum - 1}`}>
              <motion.button
                whileHover={{ x: -4, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white font-medium hover:bg-white/30 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Chapter {chapterNum - 1}</span>
                <span className="sm:hidden">Prev</span>
              </motion.button>
            </Link>
          ) : (
            <div />
          )}

          {/* Chapter dots indicator */}
          <div className="flex items-center gap-2">
            {Array.from({ length: totalChapters }).map((_, i) => (
              <div
                key={i}
                className={cn(
                  'h-2 rounded-full transition-all',
                  i + 8 === chapterNum ? 'w-8 bg-white' : 'w-2 bg-white/40'
                )}
              />
            ))}
          </div>

          {/* Next button */}
          {chapterNum < 8 + totalChapters - 1 ? (
            <Link to={`${basePath}/chapter/${chapterNum + 1}`}>
              <motion.button
                whileHover={{ x: 4, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white font-medium hover:bg-white/30 transition-colors"
              >
                <span className="hidden sm:inline">Chapter {chapterNum + 1}</span>
                <span className="sm:hidden">Next</span>
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </Link>
          ) : (
            <div />
          )}
        </motion.div>
      </div>
    </div>
  );
}
