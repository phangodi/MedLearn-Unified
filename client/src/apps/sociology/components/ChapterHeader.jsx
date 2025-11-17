import React from 'react';

const ChapterHeader = ({ chapterNum, title, subtitle }) => {
  return (
    <div className="chapter-header">
      <div className="header-container">
        <div className="header-decoration">
          <div className="decoration-circle"></div>
          <div className="decoration-line"></div>
        </div>
        <div className="header-content">
          <div className="chapter-badge">
            <span className="badge-label">Chapter</span>
            <span className="badge-number">{chapterNum}</span>
          </div>
          <h1 className="chapter-title">{subtitle || title}</h1>
          <p className="chapter-subtitle">Lara's Sociology Studies</p>
        </div>
      </div>
    </div>
  );
};

export default ChapterHeader;
