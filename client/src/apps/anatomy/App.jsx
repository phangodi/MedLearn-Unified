import React, { useState, useEffect, createContext, useContext } from 'react';
import { Brain, BookOpen, Award, Menu, X, CheckCircle } from 'lucide-react';
import brainstemData from './brainstem-data.jsx';
import cranialNervesData from './cranial_nerves_complete.jsx';
import { quickRefData, quizData } from './quick_ref.jsx';
import './anatomy.css';

// Progress Context
const ProgressContext = createContext();

const ProgressProvider = ({ children }) => {
  const [completed, setCompleted] = useState(() => {
    const saved = localStorage.getItem('neuro-progress');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('neuro-progress', JSON.stringify(completed));
  }, [completed]);

  const toggleComplete = (id) => {
    setCompleted(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <ProgressContext.Provider value={{ completed, toggleComplete }}>
      {children}
    </ProgressContext.Provider>
  );
};

const useProgress = () => useContext(ProgressContext);

// Import module data (these will be generated from separate prompts)
console.log('Brainstem data:', brainstemData);
const MODULES = {
  brainstem: brainstemData,
  cranialNerves: cranialNervesData
};

// Main App
export default function NeuroanatomyApp() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <ProgressProvider>
      <div className="anatomyRoot">
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
          <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Navigation
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
          />
          <main className="max-w-7xl mx-auto px-4 py-8">
            <Content activeTab={activeTab} />
          </main>
        </div>
      </div>
    </ProgressProvider>
  );
}

// Header Component
function Header({ menuOpen, setMenuOpen }) {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Brain className="w-10 h-10" />
            <div>
              <h1 className="text-3xl font-bold">Lara's Neuroanatomy Study Guide</h1>
              <p className="text-blue-100 text-sm">CNS Structure & Cranial Nerves</p>
            </div>
          </div>
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-blue-700"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}

// Navigation Component
function Navigation({ activeTab, setActiveTab, menuOpen, setMenuOpen }) {
  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'brainstem', label: 'Brainstem', icon: '🧠' },
    { id: 'cranialNerves', label: 'Cranial Nerves', icon: '🎯' },
    { id: 'quickRef', label: 'Quick Reference', icon: '📚' },
    { id: 'quiz', label: 'Quiz', icon: '✍️' }
  ];

  return (
    <nav className={`bg-white shadow-md ${menuOpen ? 'block' : 'hidden'} lg:block`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:space-x-1 overflow-x-auto">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setMenuOpen(false);
              }}
              className={`px-6 py-4 font-semibold transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white border-b-4 border-blue-800'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

// Main Content Router
function Content({ activeTab }) {
  switch (activeTab) {
    case 'dashboard':
      return <Dashboard />;
    case 'brainstem':
      return <ModuleView module={MODULES.brainstem} />;
    case 'cranialNerves':
      return <ModuleView module={MODULES.cranialNerves} />;
    case 'quickRef':
      return <QuickReference />;
    case 'quiz':
      return <Quiz />;
    default:
      return <Dashboard />;
  }
}

// Dashboard Component
function Dashboard() {
  const { completed } = useProgress();
  const totalTopics = 15; // 3 brainstem + 12 CNs
  const completedCount = Object.values(completed).filter(Boolean).length;
  const percentage = Math.round((completedCount / totalTopics) * 100);

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold mb-3">CNS Neuroanatomy Exam Prep</h2>
        <p className="text-lg text-blue-100">
          Master the 15 essential topics: Brainstem structures (nuclei & pathways) + All 12 cranial nerves
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-4">
        <StatCard number={15} label="Total Topics" color="bg-blue-100 text-blue-800" icon="📚" />
        <StatCard number={completedCount} label="Completed" color="bg-green-100 text-green-800" icon="✅" />
        <StatCard number={15 - completedCount} label="Remaining" color="bg-orange-100 text-orange-800" icon="⏳" />
        <StatCard number={`${percentage}%`} label="Progress" color="bg-purple-100 text-purple-800" icon="📊" />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white border-2 border-blue-300 p-6 rounded-xl shadow-md">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold mb-3">
            EXAM TOPIC 1
          </div>
          <h3 className="text-2xl font-bold mb-3">🧠 Brainstem Structures</h3>
          <p className="text-gray-600 mb-4">Fine/microscopic structure including nuclei and pathways</p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span className="text-blue-600 font-bold">1.</span>
              <span className="font-semibold">Medulla Oblongata</span>
              <span className="text-sm text-gray-500">- nuclei & tracts</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-600 font-bold">2.</span>
              <span className="font-semibold">Pons</span>
              <span className="text-sm text-gray-500">- nuclei & tracts</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-600 font-bold">3.</span>
              <span className="font-semibold">Midbrain</span>
              <span className="text-sm text-gray-500">- nuclei & tracts</span>
            </li>
          </ul>
        </div>

        <div className="bg-white border-2 border-indigo-300 p-6 rounded-xl shadow-md">
          <div className="inline-block px-3 py-1 rounded-full bg-indigo-600 text-white text-xs font-bold mb-3">
            EXAM TOPIC 2
          </div>
          <h3 className="text-2xl font-bold mb-3">🎯 12 Cranial Nerves</h3>
          <p className="text-gray-600 mb-4">Name, nuclei location, and cranial exit for each</p>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>• CN I - Olfactory</div>
            <div>• CN VII - Facial</div>
            <div>• CN II - Optic</div>
            <div>• CN VIII - Vestibulocochlear</div>
            <div>• CN III - Oculomotor</div>
            <div>• CN IX - Glossopharyngeal</div>
            <div>• CN IV - Trochlear</div>
            <div>• CN X - Vagus</div>
            <div>• CN V - Trigeminal</div>
            <div>• CN XI - Accessory</div>
            <div>• CN VI - Abducens</div>
            <div>• CN XII - Hypoglossal</div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-yellow-900 mb-2">💡 Study Strategy</h3>
        <ul className="space-y-1 text-yellow-800">
          <li>• Focus on <strong>memorizing nuclei locations</strong> in each brainstem level</li>
          <li>• Create a table: <strong>CN Name → Nuclei → Exit Foramen</strong></li>
          <li>• Use the Quick Reference section for summary tables</li>
          <li>• Test yourself with the Quiz before the exam</li>
        </ul>
      </div>
    </div>
  );
}

function StatCard({ number, label, color, icon }) {
  return (
    <div className={`${color} p-6 rounded-xl shadow-md text-center transform hover:scale-105 transition-transform`}>
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-3xl font-bold mb-1">{number}</div>
      <div className="text-sm font-semibold">{label}</div>
    </div>
  );
}

// Module View Component
function ModuleView({ module }) {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-6 shadow-lg">
        <h2 className="text-3xl font-bold">{module.title}</h2>
      </div>

      {module.sections.length === 0 ? (
        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-8 text-center">
          <BookOpen className="w-16 h-16 mx-auto mb-4 text-blue-500" />
          <h3 className="text-xl font-bold text-blue-900 mb-2">Content Coming Soon</h3>
          <p className="text-blue-700">Use the content generation prompts to populate this module.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {module.sections.map(section => (
            <TopicCard key={section.id} section={section} />
          ))}
        </div>
      )}
    </div>
  );
}

// Topic Card Component
function TopicCard({ section }) {
  const { completed, toggleComplete } = useProgress();
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div 
        className="pt-0 pb-6 px-8 cursor-pointer hover:bg-gray-50"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center gap-4">
          <input
            type="checkbox"
            checked={completed[section.id] || false}
            onChange={(e) => {
              e.stopPropagation();
              toggleComplete(section.id);
            }}
            className="w-5 h-5 cursor-pointer flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold text-gray-900 leading-tight">{section.title}</h3>
            <p className="text-gray-600 text-sm -mt-1">{section.description}</p>
          </div>
          <button className="text-blue-600 font-bold text-xl flex-shrink-0">
            {expanded ? '▲' : '▼'}
          </button>
        </div>
      </div>

      {expanded && (
        <div className="border-t-2 bg-gray-50 p-6">
          {section.content}
        </div>
      )}
    </div>
  );
}

// Quick Reference Component
function QuickReference() {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl p-6 shadow-lg">
        <h2 className="text-3xl font-bold">{quickRefData.title}</h2>
        <p className="text-indigo-100 mt-2">Essential tables, mnemonics, and quick facts</p>
      </div>

      {quickRefData.sections.map(section => (
        <div key={section.id} className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-2xl font-bold mb-4 text-indigo-700">{section.title}</h3>
          <div className="prose prose-sm max-w-none">
            <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed">{section.content}</pre>
          </div>
        </div>
      ))}
    </div>
  );
}

// Quiz Component
function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [filterCategory, setFilterCategory] = useState('all');

  const filteredQuestions = filterCategory === 'all' 
    ? quizData 
    : quizData.filter(q => q.category === filterCategory);

  const question = filteredQuestions[currentQuestion];

  const handleAnswer = (index) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(index);
    setShowExplanation(true);
    
    if (index === question.correct) {
      setScore(score + 1);
    }
    
    setAnsweredQuestions([...answeredQuestions, question.id]);
  };

  const nextQuestion = () => {
    if (currentQuestion < filteredQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setAnsweredQuestions([]);
  };

  const isQuizComplete = currentQuestion === filteredQuestions.length - 1 && selectedAnswer !== null;

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl p-6 shadow-lg">
        <h2 className="text-3xl font-bold">Practice Quiz</h2>
        <p className="text-purple-100 mt-2">Test your neuroanatomy knowledge - {filteredQuestions.length} questions</p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => { setFilterCategory('all'); resetQuiz(); }}
            className={`px-4 py-2 rounded-lg font-semibold ${
              filterCategory === 'all' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            All ({quizData.length})
          </button>
          <button
            onClick={() => { setFilterCategory('brainstem'); resetQuiz(); }}
            className={`px-4 py-2 rounded-lg font-semibold ${
              filterCategory === 'brainstem' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Brainstem ({quizData.filter(q => q.category === 'brainstem').length})
          </button>
          <button
            onClick={() => { setFilterCategory('cranial-nerves'); resetQuiz(); }}
            className={`px-4 py-2 rounded-lg font-semibold ${
              filterCategory === 'cranial-nerves' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Cranial Nerves ({quizData.filter(q => q.category === 'cranial-nerves').length})
          </button>
          <button
            onClick={() => { setFilterCategory('tracts'); resetQuiz(); }}
            className={`px-4 py-2 rounded-lg font-semibold ${
              filterCategory === 'tracts' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Tracts ({quizData.filter(q => q.category === 'tracts').length})
          </button>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-gray-600">
              Question {currentQuestion + 1} of {filteredQuestions.length}
            </span>
            <span className="text-sm font-semibold text-purple-600">
              Score: {score}/{answeredQuestions.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / filteredQuestions.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">{question.question}</h3>
          <div className="space-y-3">
            {question.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === question.correct;
              const showResult = selectedAnswer !== null;

              let buttonClass = 'w-full text-left p-4 rounded-lg border-2 transition-all ';
              
              if (!showResult) {
                buttonClass += 'border-gray-300 hover:border-purple-500 hover:bg-purple-50';
              } else if (isCorrect) {
                buttonClass += 'border-green-500 bg-green-50';
              } else if (isSelected && !isCorrect) {
                buttonClass += 'border-red-500 bg-red-50';
              } else {
                buttonClass += 'border-gray-300';
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={selectedAnswer !== null}
                  className={buttonClass}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{option}</span>
                    {showResult && isCorrect && (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    )}
                    {showResult && isSelected && !isCorrect && (
                      <X className="w-5 h-5 text-red-600" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {showExplanation && (
          <div className={`p-4 rounded-lg mb-6 ${
            selectedAnswer === question.correct ? 'bg-green-50 border-2 border-green-300' : 'bg-red-50 border-2 border-red-300'
          }`}>
            <h4 className="font-bold mb-2">
              {selectedAnswer === question.correct ? '✓ Correct!' : '✗ Incorrect'}
            </h4>
            <p className="text-gray-700">{question.explanation}</p>
          </div>
        )}

        <div className="flex gap-4">
          {!isQuizComplete && selectedAnswer !== null && (
            <button
              onClick={nextQuestion}
              className="flex-1 bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Next Question →
            </button>
          )}
          {isQuizComplete && (
            <div className="w-full">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-lg text-center mb-4">
                <h3 className="text-2xl font-bold mb-2">Quiz Complete!</h3>
                <p className="text-xl">Final Score: {score}/{filteredQuestions.length} ({Math.round((score/filteredQuestions.length)*100)}%)</p>
              </div>
              <button
                onClick={resetQuiz}
                className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Restart Quiz
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
