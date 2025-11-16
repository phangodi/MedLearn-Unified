import React from 'react';
import styles from '../App.module.css';

/**
 * Component that displays formatted exam answers with improved readability
 * Supports paragraphs, lists, and numbered steps
 * 
 * @param {Object|string} examAnswer - Structured exam answer or raw text
 * @param {string} className - Optional CSS class name
 * @param {boolean} useFormatting - Whether to use formatted view (default: true)
 * @param {boolean} compactLineSpacing - Whether to increase line spacing in compact mode (default: false)
 */
const FormattedExamAnswer = ({ examAnswer, className = '', useFormatting = true, compactLineSpacing = false }) => {
  // Handle backward compatibility - if examAnswer is a string, render old way
  if (typeof examAnswer === 'string') {
    return (
      <div className={className} style={compactLineSpacing ? { lineHeight: '2.0' } : {}}>
        <p>{renderCriticalText(examAnswer)}</p>
      </div>
    );
  }

  // If formatting is disabled, show raw text
  if (!useFormatting || !examAnswer.formatted) {
    return (
      <div className={className} style={compactLineSpacing ? { lineHeight: '2.0' } : {}}>
        <p>{renderCriticalText(examAnswer.raw || examAnswer)}</p>
      </div>
    );
  }

  // Render formatted version
  return (
    <div className={className}>
      {examAnswer.formatted.map((block, index) => {
        if (block.type === 'paragraph') {
          const content = removeCriticalMarkers(block.content);
          return (
            <div key={index} className={`${styles.formattedParagraph} ${block.critical ? styles.criticalPart : ''}`}>
              {content}
            </div>
          );
        } else if (block.type === 'list') {
          const intro = block.intro ? removeCriticalMarkers(block.intro) : null;
          return (
            <div key={index} className={styles.formattedListBlock}>
              {intro && (
                <div className={`${styles.formattedListIntro} ${block.critical ? styles.criticalPart : ''}`}>
                  {intro}
                </div>
              )}
              <ul className={styles.formattedList}>
                {block.items.map((item, itemIndex) => {
                  const itemContent = removeCriticalMarkers(item);
                  return (
                    <li key={itemIndex} className={`${styles.formattedListItem} ${block.critical ? styles.criticalPart : ''}`}>
                      {itemContent}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        } else if (block.type === 'steps') {
          const intro = block.intro ? removeCriticalMarkers(block.intro) : null;
          return (
            <div key={index} className={styles.formattedStepsBlock}>
              {intro && (
                <div className={`${styles.formattedStepsIntro} ${block.critical ? styles.criticalPart : ''}`}>
                  {intro}
                </div>
              )}
              <ol className={styles.formattedSteps}>
                {block.items.map((item, itemIndex) => {
                  const itemContent = removeCriticalMarkers(item);
                  return (
                    <li key={itemIndex} className={`${styles.formattedStepItem} ${block.critical ? styles.criticalPart : ''}`}>
                      {itemContent}
                    </li>
                  );
                })}
              </ol>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

/**
 * Removes critical markers (>> <<) from text
 * @param {string} text - Text potentially containing critical markers
 * @returns {string} Text with markers removed
 */
function removeCriticalMarkers(text) {
  if (!text || typeof text !== 'string') {
    return text;
  }
  
  // Remove all >> and << markers
  return text.replace(/>>|<</g, '');
}

/**
 * Renders text with critical markers (>> <<) highlighted (for backward compatibility with raw text)
 * @param {string} text - Text potentially containing critical markers
 * @returns {React.Element|string} Rendered text with critical parts highlighted
 */
function renderCriticalText(text) {
  if (!text || typeof text !== 'string') {
    return text;
  }
  
  if (!text.includes('>>') || !text.includes('<<')) {
    return text;
  }

  const parts = [];
  let remaining = text;
  let key = 0;

  while (remaining.includes('>>') && remaining.includes('<<')) {
    const markerStart = remaining.indexOf('>>');
    const markerEnd = remaining.indexOf('<<', markerStart);
    
    if (markerStart === -1 || markerEnd === -1) break;
    
    const beforeMarker = remaining.substring(0, markerStart);
    const insideMarker = remaining.substring(markerStart + 2, markerEnd);
    const afterMarker = remaining.substring(markerEnd + 2);

    if (beforeMarker) {
      parts.push(<span key={key++}>{beforeMarker}</span>);
    }
    parts.push(
      <span key={key++} className={styles.criticalPart}>
        {insideMarker}
      </span>
    );

    remaining = afterMarker;
  }

  if (remaining) {
    parts.push(<span key={key++}>{remaining}</span>);
  }

  return <>{parts}</>;
}

export default FormattedExamAnswer;
