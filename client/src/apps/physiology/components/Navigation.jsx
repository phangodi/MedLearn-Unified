import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContentMode, useMcqFilter } from '../context';
import { useSearch, useToggle } from '../hooks';
import styles from '../App.module.css';

/**
 * Navigation Component - Main navigation bar with search and customization
 */
const Navigation = ({ topics = [] }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { contentMode, toggleContentMode, useFormattedAnswers, toggleFormattedAnswers } = useContentMode();
  const { selectedMcqFilter } = useMcqFilter();
  const [mobileMenuOpen, toggleMobileMenu, setMobileMenuOpen] = useToggle(false);
  const [customizeOptionsOpen, toggleCustomizeOptions, setCustomizeOptionsOpen] = useToggle(false);

  // Filter topics based on selected MCQ
  const filteredTopics = selectedMcqFilter
    ? topics.filter(topic => topic.mcqs && topic.mcqs.includes(selectedMcqFilter))
    : topics;

  // Use search hook with filtered topics
  const { searchTerm, handleSearchChange, handleSearchSubmit } = useSearch(filteredTopics);

  // Extract topic ID from pathname if on a topic page
  const topicId = location.pathname.includes('/topic/') ? location.pathname.split('/topic/')[1] : null;
  const currentTopicIndex = filteredTopics.findIndex(t => t.id === topicId);
  const prevTopic = currentTopicIndex > 0 ? filteredTopics[currentTopicIndex - 1] : null;
  const nextTopic = currentTopicIndex >= 0 && currentTopicIndex < filteredTopics.length - 1
    ? filteredTopics[currentTopicIndex + 1]
    : null;

  return (
    <>
      {/* Top Banner - Desktop Only */}
      <div className={styles.brandingBanner}>
        <span className={styles.brandingTagline}>Lara's Digital Learning System</span>
        <span className={styles.brandingSeparator}>•</span>
        <span className={styles.brandingTagline}>Physiology Oral Exam Prep</span>
        <span className={styles.brandingSeparator}>•</span>
        <span className={styles.brandingTagline}>Use Customize to access all content types
        </span>
      </div>

      <nav className={styles.nav}>
        <div className={styles.navContent}>
        {/* Mobile Navigation Bar */}
        <div className={styles.mobileNavBar}>
          {/* Mobile Menu Toggle Button */}
          <button
            className={styles.mobileMenuToggle}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className={styles.hamburgerIcon}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>

          {/* Mobile: Only Prev/Next visible by default */}
          <div className={styles.mobileNavVisible}>
            {topicId && (
              <>
                {prevTopic && (
                  <Link to={`/physiology/topics/topic/${prevTopic.id}`} className={styles.navLink}>
                    ← Prev
                  </Link>
                )}
                {nextTopic && (
                  <Link to={`/physiology/topics/topic/${nextTopic.id}`} className={styles.navLink}>
                    Next →
                  </Link>
                )}
              </>
            )}
          </div>
        </div>

        {/* Desktop Navigation - Always Visible */}
        <div className={styles.desktopNav}>
          {/* Back Button */}
          {topicId && (
            <button onClick={() => navigate(-1)} className={styles.navLink}>
              ← Back
            </button>
          )}

          {/* Home Button */}
          <Link to="/physiology/topics" className={styles.navLink}>
            Home
          </Link>

          {/* Customize Options Button */}
          <button
            className={`${styles.navLink} ${styles.customizeBtn}`}
            onClick={toggleCustomizeOptions}
          >
            ⚙️ Customize
          </button>

          {/* Search Bar */}
          <form onSubmit={handleSearchSubmit} className={styles.searchForm}>
            <input
              type="text"
              placeholder="Search topics..."
              value={searchTerm}
              onChange={handleSearchChange}
              className={styles.searchInput}
            />
            <button type="submit" className={styles.searchButton}>
              Search
            </button>
          </form>

          {/* Spacer to push prev/next to the right */}
          <div className={styles.navSpacer}></div>

          {/* Previous/Next Navigation for Topic Pages */}
          {topicId && (
            <>
              {prevTopic && (
                <Link to={`/physiology/topics/topic/${prevTopic.id}`} className={styles.navLink}>
                  ← Prev
                </Link>
              )}
              {nextTopic && (
                <Link to={`/physiology/topics/topic/${nextTopic.id}`} className={styles.navLink}>
                  Next →
                </Link>
              )}
            </>
          )}
        </div>

        {/* Customize Options Modal - Outside desktop/mobile nav so it works on both */}
        {customizeOptionsOpen && (
          <div className={styles.customizeModalOverlay} onClick={() => setCustomizeOptionsOpen(false)}>
            <div className={styles.customizeModal} onClick={(e) => e.stopPropagation()}>
              <div className={styles.customizeHeader}>
                <h3>Customize View Options</h3>
                <button className={styles.closeBtn} onClick={() => setCustomizeOptionsOpen(false)}>×</button>
              </div>

              <div className={styles.customizeSection}>
                <label>Content Mode</label>
                <div className={`${styles.contentToggle} ${styles.contentToggleThree}`}>
                  <button
                    className={contentMode === 'keyPoints' ? styles.active : ''}
                    onClick={() => toggleContentMode('keyPoints')}
                  >
                    Key Points
                  </button>
                  <button
                    className={contentMode === 'definitions' ? styles.active : ''}
                    onClick={() => toggleContentMode('definitions')}
                  >
                    Official Definitions
                  </button>
                  <button
                    className={contentMode === 'hideDetails' ? styles.active : ''}
                    onClick={() => toggleContentMode('hideDetails')}
                  >
                    Hide Details
                  </button>
                </div>
              </div>

              <div className={styles.customizeSection}>
                <label>Oral Exam Answer Format</label>
                <div className={styles.contentToggle}>
                  <button
                    className={useFormattedAnswers ? styles.active : ''}
                    onClick={toggleFormattedAnswers}
                  >
                    Formatted
                  </button>
                  <button
                    className={!useFormattedAnswers ? styles.active : ''}
                    onClick={toggleFormattedAnswers}
                  >
                    Compact
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className={styles.mobileMenuDropdown}>
            <Link to="/physiology/topics" className={styles.mobileMenuItem} onClick={() => setMobileMenuOpen(false)}>
              🏠 Home
            </Link>

            <button
              className={styles.mobileMenuItem}
              onClick={() => { setCustomizeOptionsOpen(true); setMobileMenuOpen(false); }}
            >
              ⚙️ Customize Options
            </button>

            <div className={styles.mobileMenuSection}>
              <div className={styles.mobileMenuLabel}>Search</div>
              <form onSubmit={(e) => { handleSearchSubmit(e); setMobileMenuOpen(false); }} className={styles.searchForm}>
                <input
                  type="text"
                  placeholder="Search topics..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className={styles.searchInput}
                />
                <button type="submit" className={styles.searchButton}>
                  Search
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </nav>
    </>
  );
};

export default Navigation;
