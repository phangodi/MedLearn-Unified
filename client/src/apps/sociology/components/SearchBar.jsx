import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { chaptersData } from '../data/chaptersData';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  // Extract all searchable terms from chapters
  const searchableTerms = React.useMemo(() => {
    const terms = [];
    
    // Helper function to extract bold terms from HTML text
    const extractBoldTerms = (text) => {
      const boldTerms = [];
      // Match <strong>text</strong> or <strong>text:</strong>
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
    
    chaptersData.forEach(chapter => {
      chapter.content.forEach(item => {
        // Add questions
        if (item.type === 'question') {
          terms.push({
            text: item.text,
            chapterId: chapter.id,
            chapterTitle: chapter.title,
            type: 'Question'
          });
        }
        
        // Extract bold terms from paragraphs
        if (item.type === 'paragraph' && item.text) {
          const boldTerms = extractBoldTerms(item.text);
          boldTerms.forEach(term => {
            terms.push({
              text: term,
              chapterId: chapter.id,
              chapterTitle: chapter.title,
              type: 'Definition'
            });
          });
        }
        
        // Extract bold terms from list items
        if ((item.type === 'list' || item.type === 'orderedList') && item.items) {
          item.items.forEach(listItem => {
            const boldTerms = extractBoldTerms(listItem);
            boldTerms.forEach(term => {
              terms.push({
                text: term,
                chapterId: chapter.id,
                chapterTitle: chapter.title,
                type: 'Definition'
              });
            });
          });
        }
        
        // Extract from table headers and content
        if (item.type === 'table') {
          // Add headers as searchable
          if (item.headers) {
            item.headers.forEach(header => {
              if (header && header.length > 2) {
                terms.push({
                  text: header,
                  chapterId: chapter.id,
                  chapterTitle: chapter.title,
                  type: 'Table Header'
                });
              }
            });
          }
          // Add table row content
          if (item.rows) {
            item.rows.forEach(row => {
              row.forEach(cell => {
                const boldTerms = extractBoldTerms(cell);
                boldTerms.forEach(term => {
                  terms.push({
                    text: term,
                    chapterId: chapter.id,
                    chapterTitle: chapter.title,
                    type: 'Table Content'
                  });
                });
              });
            });
          }
        }
      });
    });
    
    // Remove duplicates based on text and chapter
    const uniqueTerms = [];
    const seen = new Set();
    terms.forEach(term => {
      const key = `${term.text.toLowerCase()}-${term.chapterId}`;
      if (!seen.has(key)) {
        seen.add(key);
        uniqueTerms.push(term);
      }
    });
    
    return uniqueTerms;
  }, []);

  // Handle search input changes
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setSelectedIndex(-1);

    if (value.trim().length < 2) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    // Filter suggestions based on search term
    const filtered = searchableTerms.filter(term =>
      term.text.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(filtered.slice(0, 10)); // Limit to 10 suggestions
    setShowSuggestions(filtered.length > 0);
  };

  // Handle suggestion selection
  const handleSuggestionClick = (suggestion) => {
    navigate(`/sociology/exam1/chapter/${suggestion.chapterId}`);
    setSearchTerm('');
    setSuggestions([]);
    setShowSuggestions(false);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (!showSuggestions || suggestions.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < suggestions.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
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
      default:
        break;
    }
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
        setSelectedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="search-bar-container" ref={searchRef}>
      <div className="search-input-wrapper">
        <svg 
          className="search-icon" 
          width="18" 
          height="18" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
        <input
          type="text"
          className="search-input"
          placeholder="Search definitions..."
          value={searchTerm}
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
          onFocus={() => searchTerm.length >= 2 && suggestions.length > 0 && setShowSuggestions(true)}
        />
        {searchTerm && (
          <button
            className="search-clear"
            onClick={() => {
              setSearchTerm('');
              setSuggestions([]);
              setShowSuggestions(false);
            }}
            aria-label="Clear search"
          >
            ×
          </button>
        )}
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <div className="suggestions-dropdown">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className={`suggestion-item ${index === selectedIndex ? 'selected' : ''}`}
              onClick={() => handleSuggestionClick(suggestion)}
              onMouseEnter={() => setSelectedIndex(index)}
            >
              <div className="suggestion-text">{suggestion.text}</div>
              <div className="suggestion-meta">
                <span className="suggestion-type">{suggestion.type}</span>
                <span className="suggestion-chapter">
                  Chapter {suggestion.chapterId}: {suggestion.chapterTitle}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
