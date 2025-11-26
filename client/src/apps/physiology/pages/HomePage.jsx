import React from 'react';
import { Link } from 'react-router-dom';
import { useMcqFilter } from '../context';
import { usePagination } from '../hooks';
import { getMcqFilters, getMcqFilterById } from '../services';
import styles from '../App.module.css';

/**
 * HomePage Component - Landing page with topics grid and filtering
 */
const HomePage = ({ topics }) => {
  const { selectedMcqFilter, setSelectedMcqFilter } = useMcqFilter();
  const mcqFilters = getMcqFilters();
  
  // Get current MCQ filter details
  const currentMcqFilter = getMcqFilterById(selectedMcqFilter);
  
  // Handle MCQ filter change
  const handleMcqFilterChange = (event) => {
    const value = event.target.value;
    setSelectedMcqFilter(value === '' ? null : value);
  };

  // Filter topics by MCQ
  const filteredTopics = selectedMcqFilter
    ? topics.filter(topic => topic.mcqs && topic.mcqs.includes(selectedMcqFilter))
    : topics;

  // Use pagination hook
  const {
    currentPage,
    totalPages,
    currentItems: currentTopics,
    handlePageChange
  } = usePagination(filteredTopics, 9);

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.eyebrow}>
          <span className={styles.dot}></span> Lara's Digital Learning System
        </div>
        <h1 className={styles.title}>Physiology Topic Review Pages</h1>
        <p className={styles.subtitle}>
          Interactive learning system with {topics.length} physiology topics ready out of 122. <br /> 
          Each topic includes learning objectives, key points or optional official definitions extracted from lecture slides or text books, and short oral exam preparation materials.
          
          {selectedMcqFilter && currentMcqFilter && (
            <span style={{ 
              display: 'block', 
              marginTop: '15px', 
              padding: '15px', 
              background: 'linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)', 
              borderRadius: '12px', 
              border: '2px solid #e9d5ff' 
            }}>
              <span style={{ 
                display: 'block', 
                fontWeight: '700', 
                color: '#6d28d9', 
                fontSize: '16px', 
                marginBottom: '8px' 
              }}>
                📚 {currentMcqFilter.name}: {currentMcqFilter.description}
              </span>
              <span style={{ 
                display: 'block', 
                fontWeight: '600', 
                color: '#7c3aed', 
                marginBottom: '6px' 
              }}>
                Showing {filteredTopics.length} topic{filteredTopics.length !== 1 ? 's' : ''}
              </span>
              <span style={{ 
                display: 'block', 
                color: '#6b7280', 
                fontSize: '14px', 
                lineHeight: '1.6' 
              }}>
                Topics included: {currentMcqFilter.topics.sort((a, b) => a - b).join(', ')}
              </span>
            </span>
          )}
        </p>
        
        {/* MCQ Filter Dropdown */}
        <div style={{ margin: '25px 0 0 0' }}>
          <label style={{ 
            display: 'block', 
            marginBottom: '8px', 
            fontWeight: '600', 
            color: '#374151' 
          }}>
            Filter by MCQ Exam:
          </label>
          <select 
            value={selectedMcqFilter || ''} 
            onChange={handleMcqFilterChange}
            style={{
              width: '100%',
              maxWidth: '600px',
              padding: '12px 16px',
              fontSize: '15px',
              border: '2px solid #e5e7eb',
              borderRadius: '10px',
              background: 'white',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              fontWeight: '500'
            }}
            onMouseOver={(e) => e.target.style.borderColor = '#6d28d9'}
            onMouseOut={(e) => e.target.style.borderColor = '#e5e7eb'}
          >
            <option value="">All Topics (No Filter)</option>
            {mcqFilters.map(filter => (
              <option key={filter.id} value={filter.id}>
                {filter.name} - {filter.description}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.topicsGrid}>
        {currentTopics.map((topic) => (
          <Link
            key={topic.id}
            to={`/physiology/topics/topic/${topic.id}`}
            className={styles.topicCard}
          >
            <div className={styles.topicCardTitle}>
              Topic {topic.number}: {topic.title}
            </div>
            <div className={styles.topicCardSubtitle}>
              {topic.subtitle}
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className={styles.paginationControls}>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={styles.paginationButton}
          >
            ← Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`${styles.paginationButton} ${currentPage === index + 1 ? styles.active : ''}`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={styles.paginationButton}
          >
            Next →
          </button>
        </div>
      )}

      <div className={styles.footer}>
        <div>© Physiology Quick Review — Interactive System</div>
        <div>University of Szeged · Print friendly · Lara</div>
      </div>
    </div>
  );
};

export default HomePage;
