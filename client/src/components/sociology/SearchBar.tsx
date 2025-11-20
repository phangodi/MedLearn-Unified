import { useState, useEffect, useRef, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import type { ChapterData } from '@/types/sociology';

interface SearchTerm {
  text: string;
  chapterId: number;
  chapterTitle: string;
  type: string;
}

interface SearchBarProps {
  chapters: Record<number, ChapterData>;
  basePath: string;
}

export function SearchBar({ chapters, basePath }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<SearchTerm[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Extract all searchable terms from chapters
  const searchableTerms = useMemo(() => {
    const terms: SearchTerm[] = [];

    // Helper function to extract bold terms from HTML text
    const extractBoldTerms = (text: string): string[] => {
      const boldTerms: string[] = [];
      const strongRegex = /<strong>(.*?)<\/strong>/g;
      let match;
      while ((match = strongRegex.exec(text)) !== null) {
        const term = match[1].trim();
        if (term && term.length > 2) {
          boldTerms.push(term);
        }
      }
      return boldTerms;
    };

    Object.values(chapters).forEach((chapter) => {
      chapter.content.forEach((item) => {
        // Add questions
        if (item.type === 'question' && item.text) {
          terms.push({
            text: item.text,
            chapterId: chapter.id,
            chapterTitle: chapter.title,
            type: 'Question',
          });
        }

        // Extract bold terms from paragraphs
        if (item.type === 'paragraph' && item.text) {
          const boldTerms = extractBoldTerms(item.text);
          boldTerms.forEach((term) => {
            terms.push({
              text: term,
              chapterId: chapter.id,
              chapterTitle: chapter.title,
              type: 'Definition',
            });
          });
        }

        // Extract bold terms from list items
        if ((item.type === 'list' || item.type === 'orderedList') && item.items) {
          item.items.forEach((listItem) => {
            const boldTerms = extractBoldTerms(listItem);
            boldTerms.forEach((term) => {
              terms.push({
                text: term,
                chapterId: chapter.id,
                chapterTitle: chapter.title,
                type: 'Definition',
              });
            });
          });
        }

        // Extract from table headers and content
        if (item.type === 'table') {
          if (item.headers) {
            item.headers.forEach((header) => {
              if (header && header.length > 2) {
                terms.push({
                  text: header,
                  chapterId: chapter.id,
                  chapterTitle: chapter.title,
                  type: 'Table Header',
                });
              }
            });
          }
          if (item.rows) {
            item.rows.forEach((row) => {
              row.forEach((cell) => {
                const boldTerms = extractBoldTerms(cell);
                boldTerms.forEach((term) => {
                  terms.push({
                    text: term,
                    chapterId: chapter.id,
                    chapterTitle: chapter.title,
                    type: 'Table Content',
                  });
                });
              });
            });
          }
        }
      });
    });

    // Remove duplicates based on text and chapter
    const uniqueTerms: SearchTerm[] = [];
    const seen = new Set<string>();
    terms.forEach((term) => {
      const key = `${term.text.toLowerCase()}-${term.chapterId}`;
      if (!seen.has(key)) {
        seen.add(key);
        uniqueTerms.push(term);
      }
    });

    return uniqueTerms;
  }, [chapters]);

  // Handle search input changes
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    setSelectedIndex(-1);

    if (value.trim().length < 2) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    // Filter suggestions based on search term
    const filtered = searchableTerms.filter((term) =>
      term.text.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(filtered.slice(0, 10)); // Limit to 10 suggestions
    setShowSuggestions(filtered.length > 0);
  };

  // Handle suggestion selection
  const handleSuggestionClick = (suggestion: SearchTerm) => {
    navigate(`${basePath}/chapter/${suggestion.chapterId}`);
    setSearchTerm('');
    setSuggestions([]);
    setShowSuggestions(false);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showSuggestions || suggestions.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex((prev) => (prev < suggestions.length - 1 ? prev + 1 : prev));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && suggestions[selectedIndex]) {
          handleSuggestionClick(suggestions[selectedIndex]);
        }
        break;
      case 'Escape':
        setShowSuggestions(false);
        setSelectedIndex(-1);
        break;
    }
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
        setSelectedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative max-w-2xl mx-auto mb-8" ref={searchRef}>
      <div className="relative group">
        {/* Glow effect on focus */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300" />

        <div className="relative flex items-center bg-card border-2 border-border rounded-xl px-4 py-3 transition-all duration-300 focus-within:border-primary focus-within:shadow-lg">
          <Search className="w-5 h-5 text-muted-foreground mr-3 flex-shrink-0" />
          <input
            type="text"
            placeholder="Search definitions, terms, or questions..."
            value={searchTerm}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}
            onFocus={() =>
              searchTerm.length >= 2 && suggestions.length > 0 && setShowSuggestions(true)
            }
            className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground"
          />
          {searchTerm && (
            <button
              onClick={() => {
                setSearchTerm('');
                setSuggestions([]);
                setShowSuggestions(false);
              }}
              className="ml-2 p-1 rounded-full hover:bg-muted transition-colors"
              aria-label="Clear search"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
          )}
        </div>
      </div>

      {/* Search results dropdown */}
      <AnimatePresence>
        {showSuggestions && suggestions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 left-0 right-0 bg-card border-2 border-border rounded-xl shadow-2xl max-h-96 overflow-y-auto z-50"
          >
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                onMouseEnter={() => setSelectedIndex(index)}
                className={`w-full text-left px-4 py-3 hover:bg-muted/50 transition-colors border-b border-border last:border-b-0 ${
                  index === selectedIndex
                    ? 'bg-primary/10'
                    : ''
                }`}
              >
                <div className="font-medium text-foreground mb-1">
                  {suggestion.text}
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="px-2 py-0.5 rounded bg-primary/10 text-primary font-medium">
                    {suggestion.type}
                  </span>
                  <span>
                    Chapter {suggestion.chapterId}: {suggestion.chapterTitle}
                  </span>
                </div>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
