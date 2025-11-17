import React from 'react';
import { Link } from 'react-router-dom';

const ChapterNavigation = ({ currentChapter }) => {
  const prevChapter = currentChapter > 1 ? currentChapter - 1 : null;
  const nextChapter = currentChapter < 7 ? currentChapter + 1 : null;

  return (
    <div className="chapter-navigation">
      {prevChapter ? (
        <Link to={`/sociology/exam1/chapter/${prevChapter}`} className="nav-button">
          ← Chapter {prevChapter}
        </Link>
      ) : (
        <Link to="/sociology/exam1" className="nav-button">
          ← Home
        </Link>
      )}

      {nextChapter ? (
        <Link to={`/sociology/exam1/chapter/${nextChapter}`} className="nav-button">
          Chapter {nextChapter} →
        </Link>
      ) : (
        <Link to="/sociology/exam1" className="nav-button">
          Home →
        </Link>
      )}
    </div>
  );
};

export default ChapterNavigation;
