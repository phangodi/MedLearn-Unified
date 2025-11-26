import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useContentMode } from '../context';
import { useFlipCards } from '../hooks';
import { FormattedExamAnswer, MiniAudioPlayer } from '../components';
import styles from '../App.module.css';

/**
 * TopicPage Component - Detailed view of a single topic
 */
const TopicPage = ({ topics }) => {
  const { topicId } = useParams();
  const topic = topics.find(t => t.id === topicId);
  const { contentMode, useFormattedAnswers } = useContentMode();
  const { flippedCards, toggleCard, isFlipped, resetCards } = useFlipCards(topicId);
  const [compactLineSpacing, setCompactLineSpacing] = useState(false);

  // Scroll to top on topic change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [topicId]);

  if (!topic) {
    return (
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1 className={styles.title}>Topic Not Found</h1>
          <p className={styles.subtitle}>The requested topic could not be found.</p>
        </div>
      </div>
    );
  }

  const currentIndex = topics.findIndex(t => t.id === topicId);
  const prevTopic = currentIndex > 0 ? topics[currentIndex - 1] : null;
  const nextTopic = currentIndex < topics.length - 1 ? topics[currentIndex + 1] : null;

  return (
    <div className={styles.container}>
      <div style={{ marginBottom: '20px', fontSize: '14px' }}>
        <Link to="/physiology">Home</Link> {'>'} Topic {topic.number}
      </div>

      <header className={styles.hero}>
        <div aria-hidden="true" className={`${styles.accent} ${styles.accentLo}`}></div>
        <div className={styles.eyebrow}>
          <span className={styles.dot}></span> Topic {topic.number}
        </div>
        <h1 className={styles.title}>{topic.title}</h1>
        <p className={styles.subtitle}>{topic.subtitle}</p>
      </header>

      <section aria-label="Learning Objectives" className={styles.lo}>
        {topic.learningObjectives.map((lo, index) => (
          <article
            key={lo.id}
            className={`${styles.loCard} ${lo.isCritical ? styles.loCardCritical : ''}`}
          >
            <div aria-hidden="true" className={`${styles.accent} ${styles.accentLo} ${lo.isCritical ? styles.accentCritical : ''}`}></div>
            <div className={styles.loHead}>
              {lo.isCritical && (
                <span className={styles.badge}>
                  <span className={styles.chip}></span> Exam Critical
                </span>
              )}
              <div className={styles.loTitle}>
                <div>
                  {lo.title.includes('>>') && lo.title.includes('<<') ? (
                    <React.Fragment>
                      {(() => {
                        const parts = [];
                        let remaining = lo.title;
                        let key = 0;
                        
                        while (remaining.includes('>>') && remaining.includes('<<')) {
                          const beforeMarker = remaining.split('>>')[0];
                          const insideMarker = remaining.split('>>')[1].split('<<')[0];
                          const afterMarker = remaining.split('<<').slice(1).join('<<');
                          
                          if (beforeMarker) parts.push(<span key={key++}>{beforeMarker}</span>);
                          parts.push(<span key={key++} className={`${styles.criticalPart} ${styles.criticalPartTitle}`}>{insideMarker}</span>);
                          
                          remaining = afterMarker;
                        }
                        
                        if (remaining) parts.push(<span key={key++}>{remaining}</span>);
                        
                        return parts;
                      })()}
                    </React.Fragment>
                  ) : (
                    lo.title
                  )}
                </div>
              </div>

              {contentMode !== 'hideDetails' && (
                <React.Fragment>
                  <div className={styles.sectionLabel}>
                    {contentMode === 'keyPoints'
                      ? '📌 Key Takeaway Points'
                      : (lo.officialDefinitions
                          ? '📖 Official Definitions'
                          : <>
                              📌 Key Takeaway Points <span style={{ textTransform: 'lowercase', borderBottom: '2px solid #d1d5db', paddingBottom: '2px' }}>(official definitions from slides are not available for this LO)</span>
                            </>
                        )}
                  </div>
                  <div className={styles.keyPoints}>
                    <ul>
                      {(contentMode === 'definitions' && lo.officialDefinitions 
                        ? lo.officialDefinitions 
                        : lo.keyPoints
                      ).map((point, idx) => {
                        // Handle critical markers (>><<)
                        if (point.includes('>>') && point.includes('<<')) {
                          return (
                            <li key={idx}>
                              {(() => {
                                const parts = [];
                                let remaining = point;
                                let key = 0;
                                
                                while (remaining.includes('>>') && remaining.includes('<<')) {
                                  const beforeMarker = remaining.split('>>')[0];
                                  const insideMarker = remaining.split('>>')[1].split('<<')[0];
                                  const afterMarker = remaining.split('<<').slice(1).join('<<');
                                  
                                  if (beforeMarker) parts.push(<span key={key++}>{beforeMarker}</span>);
                                  parts.push(<span key={key++} className={styles.criticalPart}>{insideMarker}</span>);
                                  
                                  remaining = afterMarker;
                                }
                                
                                if (remaining) parts.push(<span key={key++}>{remaining}</span>);
                                
                                return parts;
                              })()}
                            </li>
                          );
                        }
                        
                        // Handle keyword highlighting (text before colon)
                        if (point.includes(':')) {
                          return (
                            <li key={idx}>
                              <span className={styles.highlight}>{point.split(':')[0]}:</span>
                              {point.split(':').slice(1).join(':')}
                            </li>
                          );
                        }
                        
                        return <li key={idx}>{point}</li>;
                      })}
                    </ul>
                  </div>
                </React.Fragment>
              )}

              {lo.examAnswer && (
                <React.Fragment>
                  <div className={styles.sectionLabel} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', marginBottom: lo.audioUrl ? '0' : undefined }}>
                    <span>🎯 Oral Exam Answer</span>
                    {/* Audio Player - Inline with section label */}
                    {lo.audioUrl && (
                      <MiniAudioPlayer
                        audioUrl={lo.audioUrl}
                        loId={lo.id}
                        isCritical={lo.isCritical}
                      />
                    )}
                  </div>

                  <FormattedExamAnswer
                    examAnswer={lo.examAnswer}
                    className={styles.examAnswer}
                    useFormatting={useFormattedAnswers}
                    compactLineSpacing={compactLineSpacing}
                  />
                </React.Fragment>
              )}
            </div>
          </article>
        ))}
      </section>

      {topic.referenceValues && topic.referenceValues.length > 0 && (
        <section aria-label="Reference Values" className={styles.referenceValuesSection}>
          <div className={styles.referenceValuesHeader}>
            <svg className={styles.referenceValuesIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="20" x2="18" y2="10"></line>
              <line x1="12" y1="20" x2="12" y2="4"></line>
              <line x1="6" y1="20" x2="6" y2="14"></line>
            </svg>
            <h2>Reference Values</h2>
            <button
              className={styles.studyModeToggle}
              onClick={() => {
                if (flippedCards.length > 0) {
                  resetCards();
                } else {
                  topic.referenceValues.forEach((ref) => {
                    const cardId = `ref-${ref.parameter}`;
                    if (!isFlipped(cardId)) {
                      toggleCard(cardId);
                    }
                  });
                }
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 4v6h6M23 20v-6h-6"></path>
                <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>
              </svg>
              {flippedCards.length > 0 ? 'Exit Study Mode' : 'Study Mode'}
            </button>
          </div>
          <div className={styles.referenceValuesGrid}>
            {topic.referenceValues.map((ref) => {
              const cardId = `ref-${ref.parameter}`;
              const flipped = isFlipped(cardId);
              
              return (
                <div
                  key={cardId}
                  className={`${styles.referenceValueCard} ${ref.isCritical ? styles.referenceValueCardCritical : ''} ${flipped ? styles.flipped : ''}`}
                  onClick={() => toggleCard(cardId)}
                >
                  <div className={styles.referenceValueCardInner}>
                    <div className={styles.referenceValueCardFront}>
                      <div className={styles.referenceValueContent}>
                        <div className={styles.referenceValueParameter}>{ref.parameter}</div>
                        <div className={styles.referenceValueValue}>
                          {(() => {
                            const valueStr = ref.value;
                            const match = valueStr.match(/^([^(]+)(\(.+\))$/);
                            if (match) {
                              const mainPart = match[1].trim();
                              const detailPart = match[2];
                              return (
                                <>
                                  <span className={styles.referenceValueValueMain}>{mainPart}</span>
                                  <span className={styles.referenceValueValueDetail}>{detailPart}</span>
                                </>
                              );
                            }
                            return valueStr;
                          })()}
                        </div>
                      </div>
                    </div>
                    <div className={styles.referenceValueCardBack}>
                      <div className={styles.referenceValueContent}>
                        <div className={styles.referenceValueParameter}>{ref.parameter}</div>
                        <div className={styles.referenceValueHint}>Tap to reveal</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        {prevTopic ? (
          <Link to={`/physiology/topics/topic/${prevTopic.id}`} style={{ textDecoration: 'none', color: '#000000' }}>
            ← Previous Topic (Topic {prevTopic.number})
          </Link>
        ) : <div></div>}
        {nextTopic ? (
          <Link to={`/physiology/topics/topic/${nextTopic.id}`} style={{ textDecoration: 'none', color: '#000000' }}>
            Next Topic (Topic {nextTopic.number}) →
          </Link>
        ) : <div></div>}
      </div>

      <div className={styles.footer}>
        <div>© Physiology Quick Review — Topic {topic.number}</div>
        <div>University of Szeged · Print friendly · Lara</div>
      </div>
    </div>
  );
};

export default TopicPage;
