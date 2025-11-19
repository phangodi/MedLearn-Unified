import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { ChapterCardData } from '@/types/sociology';

interface ChapterCardProps extends ChapterCardData {
  basePath: string;
}

export function ChapterCard({ num, icon, title, description, basePath }: ChapterCardProps) {
  return (
    <Link to={`${basePath}/chapter/${num}`} className="block">
      <motion.div
        whileHover={{ scale: 1.03, y: -4 }}
        whileTap={{ scale: 0.98 }}
        className="group relative bg-white dark:bg-card border-2 border-gray-200 dark:border-border rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:border-primary dark:hover:border-primary hover:shadow-[0_8px_30px_rgba(0,102,204,0.2)] dark:hover:shadow-[0_8px_30px_rgba(0,128,255,0.2)] h-full"
      >
        {/* Gradient background effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Icon with gradient background */}
        <div className="relative mb-4 w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30 flex items-center justify-center text-2xl">
          {icon}
        </div>

        {/* Chapter number badge */}
        <div className="relative mb-3">
          <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold tracking-wide">
            CHAPTER {num}
          </span>
        </div>

        {/* Title and description */}
        <h3 className="relative text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-primary dark:group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>
        <p className="relative text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          {description}
        </p>

        {/* Arrow indicator */}
        <div className="relative mt-auto flex items-center text-primary dark:text-cyan-400 font-semibold text-sm">
          Start Learning
          <motion.div
            className="ml-1"
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowRight className="w-4 h-4" />
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
}
