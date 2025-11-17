import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import SearchBar from './SearchBar';

const Navigation = () => {
  const location = useLocation();
  
  const chapters = [
    { num: 1, path: '/sociology/exam1/chapter/1' },
    { num: 2, path: '/sociology/exam1/chapter/2' },
    { num: 3, path: '/sociology/exam1/chapter/3' },
    { num: 4, path: '/sociology/exam1/chapter/4' },
    { num: 5, path: '/sociology/exam1/chapter/5' },
    { num: 6, path: '/sociology/exam1/chapter/6' },
    { num: 7, path: '/sociology/exam1/chapter/7' }
  ];

  return (
    <nav className="navbar">
      <div className="nav-content">
        <Link to="/sociology/exam1" className="nav-logo">
          <span className="logo-icon">📚</span>
          <span>Sociology Studies</span>
        </Link>
        <SearchBar />
        <ul className="nav-links">
          <li>
            <Link
              to="/sociology/exam1"
              className={location.pathname === '/sociology/exam1' ? 'active' : ''}
            >
              Home
            </Link>
          </li>
          <li className="chapter-nav">
            {chapters.map(ch => (
              <Link
                key={ch.num}
                to={ch.path}
                className={location.pathname === ch.path ? 'active' : ''}
              >
                {ch.num}
              </Link>
            ))}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
