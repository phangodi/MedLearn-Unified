import React from 'react';

const QuestionBadge = ({ type }) => {
  return (
    <span className={`question-badge ${type === 'exam' ? 'exam-badge' : 'activity-badge'}`}>
      {type === 'exam' ? '📝 Exam Question' : '📚 Activity Task'}
    </span>
  );
};

export default QuestionBadge;
