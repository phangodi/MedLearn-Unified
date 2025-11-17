import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ChapterHeader from '../components/ChapterHeader';
import ChapterNavigation from '../components/ChapterNavigation';
import QuestionBadge from '../components/QuestionBadge';
import { chaptersData } from '../data/chaptersData';

const ChapterPage = () => {
  const { id } = useParams();
  const chapterNum = parseInt(id);
  
  const chapter = chaptersData.find(ch => ch.id === chapterNum);

  // Scroll to top when chapter changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [chapterNum]);

  if (!chapter) {
    return <Navigate to="/" replace />;
  }

  const renderContent = (content) => {
    return content.map((item, index) => {
      switch (item.type) {
        case 'question':
          return (
            <h2 key={index}>
              {item.badge && <QuestionBadge type={item.badge} />}
              {item.text}
            </h2>
          );
        
        case 'paragraph':
          return <p key={index} dangerouslySetInnerHTML={{ __html: item.text }} />;
        
        case 'list':
          return (
            <ul key={index}>
              {item.items.map((listItem, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: listItem }} />
              ))}
            </ul>
          );
        
        case 'orderedList':
          return (
            <ol key={index}>
              {item.items.map((listItem, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: listItem }} />
              ))}
            </ol>
          );
        
        case 'table':
          return (
            <table key={index}>
              <thead>
                <tr>
                  {item.headers.map((header, i) => (
                    <th key={i}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {item.rows.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j} dangerouslySetInnerHTML={{ __html: cell }} />
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          );
        
        default:
          return null;
      }
    });
  };

  return (
    <div className="chapter-page">
      <ChapterHeader 
        chapterNum={chapterNum}
        title={chapter.title}
        subtitle={chapter.subtitle}
      />
      
      <div className="container">
        <ChapterNavigation currentChapter={chapterNum} />
        <div className="chapter-content">
          {renderContent(chapter.content)}
        </div>
      </div>
    </div>
  );
};

export default ChapterPage;
