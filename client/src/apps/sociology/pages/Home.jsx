import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Scroll to top when returning to home
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const chapters = [
    {
      num: 1,
      icon: '📚',
      title: 'Sociology Fundamentals',
      description: 'Introduction to sociology, sociological imagination, theoretical approaches, and the importance of studying human society.'
    },
    {
      num: 2,
      icon: '⚕️',
      title: 'Sociology of Medicine',
      description: 'Explore the intersection of sociology and healthcare, medical institutions, and health disparities in society.'
    },
    {
      num: 3,
      icon: '🔬',
      title: 'Research Methods',
      description: 'Learn about quantitative and qualitative research approaches, data collection, and analysis techniques in sociology.'
    },
    {
      num: 4,
      icon: '📊',
      title: 'Social Stratification',
      description: 'Understanding class systems, social hierarchies, inequality, and mobility in modern societies.'
    },
    {
      num: 5,
      icon: '⚖️',
      title: 'Stratification Systems',
      description: 'Deep dive into different forms of social stratification, caste, class, and their societal implications.'
    },
    {
      num: 6,
      icon: '🏚️',
      title: 'Poverty & Inequality',
      description: 'Examining poverty, its causes, consequences, and the social policies designed to address economic inequality.'
    },
    {
      num: 7,
      icon: '⚠️',
      title: 'Deviance & Social Control',
      description: 'Study deviant behavior, crime, social norms, and mechanisms of social control in various societies.'
    }
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Lara's Sociology Studies</h1>
          <p>Minimalist answers barely covering sociology fundamentals, medical sociology, research methods, social stratification, poverty, and deviance.</p>
        </div>
      </section>

      <section className="chapters-section">
        <div className="chapters-container">
          <div className="section-header">
            <h2>Study Chapters</h2>
            <p>Explore minimalist answers to all Activity Tasks and Exam questions</p>
          </div>

          <div className="chapters-grid">
            {chapters.map(chapter => (
              <Link
                key={chapter.num}
                to={`/sociology/exam1/chapter/${chapter.num}`}
                className="chapter-card"
              >
                <div className="chapter-icon">{chapter.icon}</div>
                <span className="chapter-number">CHAPTER {chapter.num}</span>
                <h3>{chapter.title}</h3>
                <p>{chapter.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <h3>Activity Tasks and Exam Answers</h3>
          <div className="footer-divider"></div>
          <p>&copy; 2025 Lara's Sociology Studies. All rights reserved.</p>
          <p>⚠️ Ultra-compressed version – key points only, details omitted.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
