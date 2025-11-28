import { useState, useEffect } from 'react'
import { collection, getDocs, query, where, orderBy, limit, doc, updateDoc, deleteDoc } from 'firebase/firestore'
import { db } from '@/firebase/config'
import { Sidebar } from '@/components/layout/Sidebar'
import { Button } from '@/components/ui/Button'
import {
  BarChart3,
  FileQuestion,
  Search,
  Filter,
  ChevronDown,
  ChevronUp,
  Edit,
  Trash2,
  Eye,
  CheckCircle,
  AlertCircle,
  Loader2
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface MTOQuestion {
  id: string
  text: string
  options: { letter: string; text: string }[]
  correctAnswers: string[]
  topics: number[]
  mcqs: string[]
  status: 'active' | 'archived' | 'draft'
  legacyId?: string
  createdAt: { seconds: number }
  updatedAt: { seconds: number }
}

interface QuestionExplanation {
  id: string
  questionId: string
  summary: string
  topicReference: string
}

interface TopicStats {
  topicNumber: number
  questionCount: number
  explanationCount: number
}

export function MTOAdminPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [activeTab, setActiveTab] = useState<'dashboard' | 'questions'>('dashboard')

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
        isCollapsed={sidebarCollapsed}
        setIsCollapsed={setSidebarCollapsed}
      />
      <main className="flex-1 overflow-auto">
        <div className="max-w-6xl mx-auto p-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">MTO Admin Panel</h1>
            <p className="text-muted-foreground">
              Manage MTO practice questions and explanations
            </p>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-6 border-b border-border">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`px-4 py-2 font-medium transition-colors relative ${
                activeTab === 'dashboard'
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                Dashboard
              </div>
              {activeTab === 'dashboard' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>

            <button
              onClick={() => setActiveTab('questions')}
              className={`px-4 py-2 font-medium transition-colors relative ${
                activeTab === 'questions'
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <div className="flex items-center gap-2">
                <FileQuestion className="w-4 h-4" />
                Questions
              </div>
              {activeTab === 'questions' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
          </div>

          {/* Content */}
          {activeTab === 'dashboard' ? (
            <DashboardTab />
          ) : (
            <QuestionsTab />
          )}
        </div>
      </main>
    </div>
  )
}

function DashboardTab() {
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState({
    totalQuestions: 0,
    totalExplanations: 0,
    topicsWithQuestions: 0,
    topicsWithFullCoverage: 0,
    mcqs: {} as Record<string, number>
  })
  const [topicStats, setTopicStats] = useState<TopicStats[]>([])

  useEffect(() => {
    async function fetchStats() {
      try {
        // Fetch questions
        const questionsSnapshot = await getDocs(collection(db, 'mtoQuestions'))
        const questions = questionsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as MTOQuestion[]

        // Fetch explanations
        const explanationsSnapshot = await getDocs(collection(db, 'questionExplanations'))
        const explanations = explanationsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as QuestionExplanation[]

        // Calculate stats
        const mcqCounts: Record<string, number> = {}
        const topicQuestionCounts: Record<number, number> = {}

        questions.forEach(q => {
          q.mcqs?.forEach(mcq => {
            mcqCounts[mcq] = (mcqCounts[mcq] || 0) + 1
          })
          q.topics?.forEach(topic => {
            topicQuestionCounts[topic] = (topicQuestionCounts[topic] || 0) + 1
          })
        })

        // Calculate topic stats with explanation coverage
        const explanationsByQuestion = new Map(explanations.map(e => [e.questionId, e]))
        const topicExplanationCounts: Record<number, number> = {}

        questions.forEach(q => {
          const hasExplanation = explanationsByQuestion.has(q.legacyId || q.id)
          if (hasExplanation) {
            q.topics?.forEach(topic => {
              topicExplanationCounts[topic] = (topicExplanationCounts[topic] || 0) + 1
            })
          }
        })

        const topicStatsArray = Object.entries(topicQuestionCounts).map(([topic, count]) => ({
          topicNumber: parseInt(topic),
          questionCount: count,
          explanationCount: topicExplanationCounts[parseInt(topic)] || 0
        })).sort((a, b) => a.topicNumber - b.topicNumber)

        const topicsWithFullCoverage = topicStatsArray.filter(
          t => t.questionCount === t.explanationCount && t.questionCount > 0
        ).length

        setStats({
          totalQuestions: questions.length,
          totalExplanations: explanations.length,
          topicsWithQuestions: Object.keys(topicQuestionCounts).length,
          topicsWithFullCoverage,
          mcqs: mcqCounts
        })
        setTopicStats(topicStatsArray)
      } catch (error) {
        console.error('Error fetching stats:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Questions"
          value={stats.totalQuestions}
          icon={<FileQuestion className="w-5 h-5" />}
          color="blue"
        />
        <StatCard
          title="Total Explanations"
          value={stats.totalExplanations}
          icon={<CheckCircle className="w-5 h-5" />}
          color="green"
        />
        <StatCard
          title="Topics with Questions"
          value={stats.topicsWithQuestions}
          icon={<BarChart3 className="w-5 h-5" />}
          color="purple"
        />
        <StatCard
          title="Full Coverage Topics"
          value={stats.topicsWithFullCoverage}
          icon={<CheckCircle className="w-5 h-5" />}
          color="green"
          subtitle={`of ${stats.topicsWithQuestions} topics`}
        />
      </div>

      {/* MCQ Distribution */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Questions by MCQ Set</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {Object.entries(stats.mcqs).sort().map(([mcq, count]) => (
            <div key={mcq} className="bg-background rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-foreground">{count}</div>
              <div className="text-sm text-muted-foreground">{mcq.toUpperCase()}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Topic Coverage Table */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Topic Coverage</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Topic</th>
                <th className="text-center py-3 px-4 font-medium text-muted-foreground">Questions</th>
                <th className="text-center py-3 px-4 font-medium text-muted-foreground">Explanations</th>
                <th className="text-center py-3 px-4 font-medium text-muted-foreground">Coverage</th>
              </tr>
            </thead>
            <tbody>
              {topicStats.map(topic => {
                const coverage = topic.questionCount > 0
                  ? Math.round((topic.explanationCount / topic.questionCount) * 100)
                  : 0
                const isComplete = coverage === 100

                return (
                  <tr key={topic.topicNumber} className="border-b border-border/50 hover:bg-muted/50">
                    <td className="py-3 px-4 font-medium text-foreground">
                      Topic {topic.topicNumber}
                    </td>
                    <td className="py-3 px-4 text-center text-foreground">
                      {topic.questionCount}
                    </td>
                    <td className="py-3 px-4 text-center text-foreground">
                      {topic.explanationCount}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                        isComplete
                          ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                          : coverage > 0
                            ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                            : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                      }`}>
                        {isComplete && <CheckCircle className="w-3 h-3" />}
                        {coverage}%
                      </span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

function StatCard({
  title,
  value,
  icon,
  color,
  subtitle
}: {
  title: string
  value: number
  icon: React.ReactNode
  color: 'blue' | 'green' | 'purple' | 'orange'
  subtitle?: string
}) {
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
    green: 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400',
    purple: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400',
    orange: 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400'
  }

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center gap-3 mb-3">
        <div className={`p-2 rounded-lg ${colorClasses[color]}`}>
          {icon}
        </div>
        <span className="text-sm font-medium text-muted-foreground">{title}</span>
      </div>
      <div className="text-3xl font-bold text-foreground">{value}</div>
      {subtitle && <div className="text-sm text-muted-foreground mt-1">{subtitle}</div>}
    </div>
  )
}

function QuestionsTab() {
  const [loading, setLoading] = useState(true)
  const [questions, setQuestions] = useState<MTOQuestion[]>([])
  const [explanationsMap, setExplanationsMap] = useState<Map<string, QuestionExplanation>>(new Map())
  const [searchQuery, setSearchQuery] = useState('')
  const [topicFilter, setTopicFilter] = useState<number | null>(null)
  const [mcqFilter, setMcqFilter] = useState<string | null>(null)
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null)
  const [availableTopics, setAvailableTopics] = useState<number[]>([])
  const [availableMcqs, setAvailableMcqs] = useState<string[]>([])

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch all questions
        const questionsSnapshot = await getDocs(collection(db, 'mtoQuestions'))
        const questionsData = questionsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as MTOQuestion[]

        // Fetch all explanations
        const explanationsSnapshot = await getDocs(collection(db, 'questionExplanations'))
        const explanationsData = explanationsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as QuestionExplanation[]

        // Create lookup map
        const expMap = new Map<string, QuestionExplanation>()
        explanationsData.forEach(exp => {
          expMap.set(exp.questionId, exp)
        })

        // Extract unique topics and mcqs
        const topics = new Set<number>()
        const mcqs = new Set<string>()
        questionsData.forEach(q => {
          q.topics?.forEach(t => topics.add(t))
          q.mcqs?.forEach(m => mcqs.add(m))
        })

        setQuestions(questionsData)
        setExplanationsMap(expMap)
        setAvailableTopics(Array.from(topics).sort((a, b) => a - b))
        setAvailableMcqs(Array.from(mcqs).sort())
      } catch (error) {
        console.error('Error fetching questions:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const filteredQuestions = questions.filter(q => {
    // Search filter
    if (searchQuery && !q.text.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false
    }
    // Topic filter
    if (topicFilter !== null && !q.topics?.includes(topicFilter)) {
      return false
    }
    // MCQ filter
    if (mcqFilter && !q.mcqs?.includes(mcqFilter)) {
      return false
    }
    return true
  })

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="bg-card border border-border rounded-lg p-4">
        <div className="flex flex-wrap gap-4">
          {/* Search */}
          <div className="flex-1 min-w-[200px]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Topic Filter */}
          <div className="w-40">
            <select
              value={topicFilter ?? ''}
              onChange={(e) => setTopicFilter(e.target.value ? parseInt(e.target.value) : null)}
              className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">All Topics</option>
              {availableTopics.map(topic => (
                <option key={topic} value={topic}>Topic {topic}</option>
              ))}
            </select>
          </div>

          {/* MCQ Filter */}
          <div className="w-40">
            <select
              value={mcqFilter ?? ''}
              onChange={(e) => setMcqFilter(e.target.value || null)}
              className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">All MCQs</option>
              {availableMcqs.map(mcq => (
                <option key={mcq} value={mcq}>{mcq.toUpperCase()}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Results count */}
        <div className="mt-3 text-sm text-muted-foreground">
          Showing {filteredQuestions.length} of {questions.length} questions
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-3">
        {filteredQuestions.map(question => {
          const hasExplanation = explanationsMap.has(question.legacyId || question.id)
          const isExpanded = expandedQuestion === question.id
          const explanation = explanationsMap.get(question.legacyId || question.id)

          return (
            <div
              key={question.id}
              className="bg-card border border-border rounded-lg overflow-hidden"
            >
              {/* Question Header */}
              <div
                className="p-4 cursor-pointer hover:bg-muted/50 transition-colors"
                onClick={() => setExpandedQuestion(isExpanded ? null : question.id)}
              >
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p className="text-foreground font-medium line-clamp-2">{question.text}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {question.topics?.map(topic => (
                        <span
                          key={topic}
                          className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full"
                        >
                          Topic {topic}
                        </span>
                      ))}
                      {question.mcqs?.map(mcq => (
                        <span
                          key={mcq}
                          className="px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded-full"
                        >
                          {mcq.toUpperCase()}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {hasExplanation ? (
                      <span className="flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-xs rounded-full">
                        <CheckCircle className="w-3 h-3" />
                        Has Explanation
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 px-2 py-1 bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 text-xs rounded-full">
                        <AlertCircle className="w-3 h-3" />
                        No Explanation
                      </span>
                    )}
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                </div>
              </div>

              {/* Expanded Content */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 border-t border-border pt-4">
                      {/* Options */}
                      <div className="space-y-2 mb-4">
                        <h4 className="text-sm font-medium text-muted-foreground">Options:</h4>
                        {question.options?.map(option => (
                          <div
                            key={option.letter}
                            className={`flex items-start gap-2 p-2 rounded-lg ${
                              question.correctAnswers?.includes(option.letter)
                                ? 'bg-green-100 dark:bg-green-900/20'
                                : 'bg-muted/50'
                            }`}
                          >
                            <span className={`font-medium ${
                              question.correctAnswers?.includes(option.letter)
                                ? 'text-green-700 dark:text-green-400'
                                : 'text-foreground'
                            }`}>
                              {option.letter}.
                            </span>
                            <span className="text-foreground">{option.text}</span>
                            {question.correctAnswers?.includes(option.letter) && (
                              <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 ml-auto flex-shrink-0" />
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Explanation */}
                      {explanation && (
                        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                          <h4 className="text-sm font-medium text-blue-700 dark:text-blue-400 mb-2">
                            Explanation:
                          </h4>
                          <p className="text-foreground">{explanation.summary}</p>
                          {explanation.topicReference && (
                            <p className="text-sm text-muted-foreground mt-2">
                              Reference: {explanation.topicReference}
                            </p>
                          )}
                        </div>
                      )}

                      {/* Metadata */}
                      <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                        <span>ID: {question.legacyId || question.id}</span>
                        <span>Status: {question.status}</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}

        {filteredQuestions.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            No questions found matching your filters.
          </div>
        )}
      </div>
    </div>
  )
}
