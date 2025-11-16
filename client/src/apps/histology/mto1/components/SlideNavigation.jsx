import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Search, Home } from 'lucide-react';

const SlideNavigation = ({ currentSlide, onSlideChange, availableSlides = [], onHomeClick }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const slideNum = parseInt(searchQuery);
    if (availableSlides.includes(slideNum)) {
      onSlideChange(slideNum);
      setSearchQuery('');
      setShowDropdown(false);
    }
  };

  const handlePrevious = () => {
    const currentIndex = availableSlides.indexOf(currentSlide);
    if (currentIndex > 0) {
      onSlideChange(availableSlides[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    const currentIndex = availableSlides.indexOf(currentSlide);
    if (currentIndex < availableSlides.length - 1) {
      onSlideChange(availableSlides[currentIndex + 1]);
    }
  };

  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-3 py-2">
        <div className="flex items-center gap-2">
          {/* Home Button */}
          {onHomeClick && (
            <button
              onClick={onHomeClick}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              title="Go to homepage"
            >
              <Home size={20} className="text-gray-700" />
            </button>
          )}

          {/* Previous Button */}
          <button
            onClick={handlePrevious}
            disabled={availableSlides.indexOf(currentSlide) === 0}
            className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            title="Previous slide"
          >
            <ChevronLeft size={20} className="text-gray-700" />
          </button>

          {/* Slide Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="px-3 py-2 bg-blue-50 text-blue-700 rounded-lg font-semibold text-sm hover:bg-blue-100 transition-colors whitespace-nowrap"
            >
              Slide {currentSlide}
            </button>
            {showDropdown && (
              <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg w-48 max-h-64 overflow-y-auto z-50">
                <div className="p-2 border-b border-gray-100 text-xs text-gray-500 font-semibold">
                  Available Slides ({availableSlides.length})
                </div>
                {availableSlides.map((slideNum) => (
                  <button
                    key={slideNum}
                    onClick={() => {
                      onSlideChange(slideNum);
                      setShowDropdown(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-sm hover:bg-blue-50 transition-colors ${
                      currentSlide === slideNum ? 'bg-blue-100 text-blue-700 font-semibold' : 'text-gray-700'
                    }`}
                  >
                    Slide {slideNum}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex-1 flex items-center gap-1">
            <div className="relative flex-1 max-w-xs">
              <Search size={16} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Go to slide #"
                className="w-full pl-8 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              className="px-3 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
            >
              Go
            </button>
          </form>

          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={availableSlides.indexOf(currentSlide) === availableSlides.length - 1}
            className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            title="Next slide"
          >
            <ChevronRight size={20} className="text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlideNavigation;
