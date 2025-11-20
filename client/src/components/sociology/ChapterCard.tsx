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
        className="group relative bg-card border-2 border-border rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-lg h-full"
      >
        {/* Gradient background effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Icon with gradient background */}
        <div className="relative mb-4 w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-2xl">
          {icon}
        </div>

        {/* Chapter number badge */}
        <div className="relative mb-3">
          <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold tracking-wide">
            CHAPTER {num}
          </span>
        </div>

        {/* Title and description */}
        <h3 className="relative text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="relative text-sm text-muted-foreground leading-relaxed mb-4">
          {description}
        </p>

        {/* Arrow indicator */}
        <div className="relative mt-auto flex items-center text-primary font-semibold text-sm">
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
