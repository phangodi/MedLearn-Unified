import React from 'react';
import styles from '../App.module.css';

/**
 * QuickReviewContent - Renders structured Quick Review blocks
 *
 * Supports block types: header, paragraph, keypoint, list, steps,
 * comparison, formula, table, clinical
 *
 * @param {Object} content - Quick Review content with blocks array
 * @param {string} className - Optional CSS class
 */
const QuickReviewContent = ({ content, className = '' }) => {
  if (!content || !content.blocks || !Array.isArray(content.blocks)) {
    return null;
  }

  return (
    <div className={`${styles.quickReviewContainer} ${className}`}>
      {content.blocks.map((block, index) => (
        <BlockRenderer key={index} block={block} />
      ))}
    </div>
  );
};

/**
 * BlockRenderer - Routes each block to its specific renderer
 */
const BlockRenderer = ({ block }) => {
  switch (block.type) {
    case 'header':
      return <HeaderBlock {...block} />;
    case 'paragraph':
      return <ParagraphBlock {...block} />;
    case 'keypoint':
      return <KeypointBlock {...block} />;
    case 'list':
      return <ListBlock {...block} />;
    case 'steps':
      return <StepsBlock {...block} />;
    case 'comparison':
      return <ComparisonBlock {...block} />;
    case 'formula':
      return <FormulaBlock {...block} />;
    case 'table':
      return <TableBlock {...block} />;
    case 'clinical':
      return <ClinicalBlock {...block} />;
    default:
      return null;
  }
};

/**
 * Header Block - Navy gradient banner with title
 */
const HeaderBlock = ({ text, critical = false }) => {
  const cleanText = removeCriticalMarkers(text);
  return (
    <div className={`${styles.qrHeader} ${critical ? styles.qrCritical : ''}`}>
      {cleanText}
    </div>
  );
};

/**
 * Paragraph Block - Standard text content
 */
const ParagraphBlock = ({ text, critical = false }) => {
  const cleanText = removeCriticalMarkers(text);
  return (
    <div className={`${styles.qrParagraph} ${critical ? styles.qrCritical : ''}`}>
      {cleanText}
    </div>
  );
};

/**
 * Keypoint Block - Highlighted important information
 */
const KeypointBlock = ({ text, critical = false }) => {
  const cleanText = removeCriticalMarkers(text);
  return (
    <div className={`${styles.qrKeypoint} ${critical ? styles.qrCritical : ''}`}>
      {cleanText}
    </div>
  );
};

/**
 * List Block - Bulleted list with optional intro
 */
const ListBlock = ({ intro, items = [], critical = false }) => {
  const cleanIntro = intro ? removeCriticalMarkers(intro) : null;
  return (
    <div className={styles.qrListBlock}>
      {cleanIntro && (
        <div className={`${styles.qrListIntro} ${critical ? styles.qrCritical : ''}`}>
          {cleanIntro}
        </div>
      )}
      <ul className={styles.qrList}>
        {items.map((item, idx) => (
          <li key={idx} className={`${styles.qrListItem} ${critical ? styles.qrCritical : ''}`}>
            {removeCriticalMarkers(item)}
          </li>
        ))}
      </ul>
    </div>
  );
};

/**
 * Steps Block - Numbered steps/sequence
 */
const StepsBlock = ({ intro, items = [], critical = false }) => {
  const cleanIntro = intro ? removeCriticalMarkers(intro) : null;
  return (
    <div className={styles.qrStepsBlock}>
      {cleanIntro && (
        <div className={`${styles.qrStepsIntro} ${critical ? styles.qrCritical : ''}`}>
          {cleanIntro}
        </div>
      )}
      <ol className={styles.qrSteps}>
        {items.map((item, idx) => (
          <li key={idx} className={`${styles.qrStepItem} ${critical ? styles.qrCritical : ''}`}>
            {removeCriticalMarkers(item)}
          </li>
        ))}
      </ol>
    </div>
  );
};

/**
 * Comparison Block - Side-by-side comparison
 */
const ComparisonBlock = ({ left, right }) => {
  return (
    <div className={styles.qrComparisonContainer}>
      <div className={styles.qrComparisonLeft}>
        <div className={styles.qrComparisonTitle}>
          {removeCriticalMarkers(left.title)}
        </div>
        {left.items && (
          <ul className={styles.qrComparisonList}>
            {left.items.map((item, idx) => (
              <li key={idx}>{removeCriticalMarkers(item)}</li>
            ))}
          </ul>
        )}
        {left.text && (
          <div className={styles.qrComparisonText}>
            {removeCriticalMarkers(left.text)}
          </div>
        )}
      </div>
      <div className={styles.qrComparisonRight}>
        <div className={styles.qrComparisonTitle}>
          {removeCriticalMarkers(right.title)}
        </div>
        {right.items && (
          <ul className={styles.qrComparisonList}>
            {right.items.map((item, idx) => (
              <li key={idx}>{removeCriticalMarkers(item)}</li>
            ))}
          </ul>
        )}
        {right.text && (
          <div className={styles.qrComparisonText}>
            {removeCriticalMarkers(right.text)}
          </div>
        )}
      </div>
    </div>
  );
};

/**
 * Formula Block - Mathematical equation display
 */
const FormulaBlock = ({ formula, explanation, critical = false }) => {
  return (
    <div className={`${styles.qrFormulaBlock} ${critical ? styles.qrCritical : ''}`}>
      <div className={styles.qrFormula}>
        {removeCriticalMarkers(formula)}
      </div>
      {explanation && (
        <div className={styles.qrFormulaExplanation}>
          {removeCriticalMarkers(explanation)}
        </div>
      )}
    </div>
  );
};

/**
 * Table Block - Data table
 */
const TableBlock = ({ headers = [], rows = [], critical = false }) => {
  return (
    <div className={styles.qrTableContainer}>
      <table className={`${styles.qrTable} ${critical ? styles.qrCritical : ''}`}>
        {headers.length > 0 && (
          <thead>
            <tr>
              {headers.map((header, idx) => (
                <th key={idx}>{removeCriticalMarkers(header)}</th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {rows.map((row, rowIdx) => (
            <tr key={rowIdx}>
              {row.map((cell, cellIdx) => (
                <td key={cellIdx}>{removeCriticalMarkers(cell)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

/**
 * Clinical Block - Yellow clinical relevance callout
 */
const ClinicalBlock = ({ text, critical = false }) => {
  const cleanText = removeCriticalMarkers(text);
  return (
    <div className={`${styles.qrClinical} ${critical ? styles.qrCritical : ''}`}>
      <span className={styles.qrClinicalLabel}>Clinical:</span>
      {cleanText}
    </div>
  );
};

/**
 * Removes critical markers (>> <<) from text
 */
function removeCriticalMarkers(text) {
  if (!text || typeof text !== 'string') {
    return text;
  }
  return text.replace(/>>|<</g, '');
}

export default QuickReviewContent;
