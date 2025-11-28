import { useState, useEffect, useMemo } from 'react'
import { collection, getDocs, doc, deleteDoc, updateDoc } from 'firebase/firestore'
import { db } from '@/firebase/config'
import { Sidebar } from '@/components/layout/Sidebar'
import { Button } from '@/components/ui/Button'
import {
  BarChart3,
  FileQuestion,
  Search,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  AlertCircle,
  Loader2,
  Copy,
  BookOpen,
  Wrench,
  Trash2,
  RefreshCw,
  AlertTriangle,
  Eye,
  EyeOff
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface MTOQuestion {
  id: string
  text: string
  textNormalized?: string
  options: { letter: string; text: string }[]
  correctAnswers: string[]
  topics: number[]
  mcqs: string[]
  status: 'active' | 'archived' | 'draft'
  legacyId?: string
  contentHash?: string
  createdAt: { seconds: number }
  updatedAt: { seconds: number }
}

interface QuestionExplanation {
  id: string
  questionId: string
  summary: string
  whyCorrect?: Record<string, string>
  whyIncorrect?: Record<string, string>
  topicReference: string
  needsReview?: boolean
}

interface TopicStats {
  topicNumber: number
  questionCount: number
  explanationCount: number
}

interface DuplicateGroup {
  hash: string
  questions: MTOQuestion[]
}

type TabType = 'dashboard' | 'questions' | 'duplicates' | 'explanations' | 'tools'

export function MTOAdminPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [activeTab, setActiveTab] = useState<TabType>('dashboard')

  const tabs: { id: TabType; label: string; icon: React.ReactNode }[] = [
    { id: 'dashboard', label: 'Dashboard', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'questions', label: 'Questions', icon: <FileQuestion className="w-4 h-4" /> },
    { id: 'duplicates', label: 'Duplicates', icon: <Copy className="w-4 h-4" /> },
    { id: 'explanations', label: 'Explanations', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'tools', label: 'Tools', icon: <Wrench className="w-4 h-4" /> },
  ]

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
          <div className="flex gap-2 mb-6 border-b border-border overflow-x-auto">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 font-medium transition-colors relative whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <div className="flex items-center gap-2">
                  {tab.icon}
                  {tab.label}
                </div>
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                )}
              </button>
            ))}
          </div>

          {/* Content */}
          {activeTab === 'dashboard' && <DashboardTab />}
          {activeTab === 'questions' && <QuestionsTab />}
          {activeTab === 'duplicates' && <DuplicatesTab />}
          {activeTab === 'explanations' && <ExplanationsTab />}
          {activeTab === 'tools' && <ToolsTab />}
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
        const questionsSnapshot = await getDocs(collection(db, 'mtoQuestions'))
        const questions = questionsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as MTOQuestion[]

        const explanationsSnapshot = await getDocs(collection(db, 'questionExplanations'))
        const explanations = explanationsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as QuestionExplanation[]

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
        const questionsSnapshot = await getDocs(collection(db, 'mtoQuestions'))
        const questionsData = questionsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as MTOQuestion[]

        const explanationsSnapshot = await getDocs(collection(db, 'questionExplanations'))
        const explanationsData = explanationsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as QuestionExplanation[]

        const expMap = new Map<string, QuestionExplanation>()
        explanationsData.forEach(exp => {
          expMap.set(exp.questionId, exp)
        })

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
    if (searchQuery && !q.text.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false
    }
    if (topicFilter !== null && !q.topics?.includes(topicFilter)) {
      return false
    }
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
      <div className="bg-card border border-border rounded-lg p-4">
        <div className="flex flex-wrap gap-4">
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

        <div className="mt-3 text-sm text-muted-foreground">
          Showing {filteredQuestions.length} of {questions.length} questions
        </div>
      </div>

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

function DuplicatesTab() {
  const [loading, setLoading] = useState(true)
  const [duplicateGroups, setDuplicateGroups] = useState<DuplicateGroup[]>([])
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null)

  useEffect(() => {
    async function findDuplicates() {
      try {
        const questionsSnapshot = await getDocs(collection(db, 'mtoQuestions'))
        const questions = questionsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as MTOQuestion[]

        // Group by content hash or normalized text
        const hashGroups = new Map<string, MTOQuestion[]>()

        questions.forEach(q => {
          // Use contentHash if available, otherwise normalize text
          const key = q.contentHash || normalizeText(q.text)
          const existing = hashGroups.get(key) || []
          existing.push(q)
          hashGroups.set(key, existing)
        })

        // Filter to only groups with more than 1 question
        const duplicates: DuplicateGroup[] = []
        hashGroups.forEach((questions, hash) => {
          if (questions.length > 1) {
            duplicates.push({ hash, questions })
          }
        })

        // Sort by group size (largest first)
        duplicates.sort((a, b) => b.questions.length - a.questions.length)

        setDuplicateGroups(duplicates)
      } catch (error) {
        console.error('Error finding duplicates:', error)
      } finally {
        setLoading(false)
      }
    }

    findDuplicates()
  }, [])

  function normalizeText(text: string): string {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '')
      .substring(0, 100)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

  const totalDuplicates = duplicateGroups.reduce((sum, g) => sum + g.questions.length - 1, 0)

  return (
    <div className="space-y-6">
      {/* Summary */}
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-lg ${
            duplicateGroups.length > 0
              ? 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400'
              : 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400'
          }`}>
            {duplicateGroups.length > 0 ? (
              <AlertTriangle className="w-6 h-6" />
            ) : (
              <CheckCircle className="w-6 h-6" />
            )}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">
              {duplicateGroups.length > 0
                ? `Found ${duplicateGroups.length} duplicate groups`
                : 'No duplicates found'}
            </h3>
            <p className="text-sm text-muted-foreground">
              {duplicateGroups.length > 0
                ? `${totalDuplicates} questions could be removed`
                : 'All questions are unique'}
            </p>
          </div>
        </div>
      </div>

      {/* Duplicate Groups */}
      {duplicateGroups.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Duplicate Groups</h3>

          {duplicateGroups.map((group, index) => {
            const isExpanded = expandedGroup === group.hash

            return (
              <div
                key={group.hash}
                className="bg-card border border-border rounded-lg overflow-hidden"
              >
                <div
                  className="p-4 cursor-pointer hover:bg-muted/50 transition-colors"
                  onClick={() => setExpandedGroup(isExpanded ? null : group.hash)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-muted-foreground">
                        Group {index + 1}
                      </span>
                      <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 text-xs rounded-full">
                        {group.questions.length} duplicates
                      </span>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                  <p className="text-foreground mt-2 line-clamp-2">
                    {group.questions[0].text}
                  </p>
                </div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 border-t border-border pt-4 space-y-3">
                        {group.questions.map((q, qIndex) => (
                          <div
                            key={q.id}
                            className={`p-3 rounded-lg ${
                              qIndex === 0
                                ? 'bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800'
                                : 'bg-muted/50'
                            }`}
                          >
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  {qIndex === 0 && (
                                    <span className="px-2 py-0.5 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-xs rounded-full">
                                      Keep
                                    </span>
                                  )}
                                  <span className="text-xs text-muted-foreground">
                                    ID: {q.legacyId || q.id}
                                  </span>
                                </div>
                                <div className="flex flex-wrap gap-1 mt-1">
                                  {q.topics?.map(t => (
                                    <span key={t} className="px-1.5 py-0.5 bg-primary/10 text-primary text-xs rounded">
                                      T{t}
                                    </span>
                                  ))}
                                  {q.mcqs?.map(m => (
                                    <span key={m} className="px-1.5 py-0.5 bg-muted text-muted-foreground text-xs rounded">
                                      {m}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              {qIndex > 0 && (
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    // TODO: Implement delete
                                    alert(`Would delete question ${q.id}`)
                                  }}
                                >
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

function ExplanationsTab() {
  const [loading, setLoading] = useState(true)
  const [explanations, setExplanations] = useState<QuestionExplanation[]>([])
  const [questions, setQuestions] = useState<MTOQuestion[]>([])
  const [filter, setFilter] = useState<'all' | 'with' | 'without' | 'needsReview'>('all')
  const [expandedExplanation, setExpandedExplanation] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const [questionsSnapshot, explanationsSnapshot] = await Promise.all([
          getDocs(collection(db, 'mtoQuestions')),
          getDocs(collection(db, 'questionExplanations'))
        ])

        const questionsData = questionsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as MTOQuestion[]

        const explanationsData = explanationsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as QuestionExplanation[]

        setQuestions(questionsData)
        setExplanations(explanationsData)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const explanationsMap = useMemo(() => {
    return new Map(explanations.map(e => [e.questionId, e]))
  }, [explanations])

  const filteredData = useMemo(() => {
    const questionsWithExplanations = questions.filter(q =>
      explanationsMap.has(q.legacyId || q.id)
    )
    const questionsWithoutExplanations = questions.filter(q =>
      !explanationsMap.has(q.legacyId || q.id)
    )
    const needsReview = explanations.filter(e => e.needsReview)

    switch (filter) {
      case 'with':
        return { type: 'questions', data: questionsWithExplanations }
      case 'without':
        return { type: 'questions', data: questionsWithoutExplanations }
      case 'needsReview':
        return { type: 'explanations', data: needsReview }
      default:
        return { type: 'explanations', data: explanations }
    }
  }, [filter, questions, explanations, explanationsMap])

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

  const questionsWithExplanations = questions.filter(q =>
    explanationsMap.has(q.legacyId || q.id)
  ).length
  const questionsWithoutExplanations = questions.length - questionsWithExplanations
  const needsReviewCount = explanations.filter(e => e.needsReview).length

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <button
          onClick={() => setFilter('all')}
          className={`p-4 rounded-lg border transition-colors text-left ${
            filter === 'all'
              ? 'border-primary bg-primary/5'
              : 'border-border bg-card hover:bg-muted/50'
          }`}
        >
          <div className="text-2xl font-bold text-foreground">{explanations.length}</div>
          <div className="text-sm text-muted-foreground">Total Explanations</div>
        </button>
        <button
          onClick={() => setFilter('with')}
          className={`p-4 rounded-lg border transition-colors text-left ${
            filter === 'with'
              ? 'border-primary bg-primary/5'
              : 'border-border bg-card hover:bg-muted/50'
          }`}
        >
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">
            {questionsWithExplanations}
          </div>
          <div className="text-sm text-muted-foreground">With Explanations</div>
        </button>
        <button
          onClick={() => setFilter('without')}
          className={`p-4 rounded-lg border transition-colors text-left ${
            filter === 'without'
              ? 'border-primary bg-primary/5'
              : 'border-border bg-card hover:bg-muted/50'
          }`}
        >
          <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
            {questionsWithoutExplanations}
          </div>
          <div className="text-sm text-muted-foreground">Without Explanations</div>
        </button>
        <button
          onClick={() => setFilter('needsReview')}
          className={`p-4 rounded-lg border transition-colors text-left ${
            filter === 'needsReview'
              ? 'border-primary bg-primary/5'
              : 'border-border bg-card hover:bg-muted/50'
          }`}
        >
          <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
            {needsReviewCount}
          </div>
          <div className="text-sm text-muted-foreground">Needs Review</div>
        </button>
      </div>

      {/* List */}
      <div className="space-y-3">
        {filteredData.type === 'explanations' ? (
          (filteredData.data as QuestionExplanation[]).map(exp => {
            const isExpanded = expandedExplanation === exp.id

            return (
              <div
                key={exp.id}
                className="bg-card border border-border rounded-lg overflow-hidden"
              >
                <div
                  className="p-4 cursor-pointer hover:bg-muted/50 transition-colors"
                  onClick={() => setExpandedExplanation(isExpanded ? null : exp.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-foreground font-medium line-clamp-2">{exp.summary}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-xs text-muted-foreground">
                          Q: {exp.questionId}
                        </span>
                        {exp.needsReview && (
                          <span className="px-2 py-0.5 bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 text-xs rounded-full">
                            Needs Review
                          </span>
                        )}
                      </div>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                </div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 border-t border-border pt-4 space-y-4">
                        {exp.whyCorrect && Object.keys(exp.whyCorrect).length > 0 && (
                          <div>
                            <h4 className="text-sm font-medium text-green-700 dark:text-green-400 mb-2">
                              Why Correct:
                            </h4>
                            <div className="space-y-1">
                              {Object.entries(exp.whyCorrect).map(([letter, text]) => (
                                <div key={letter} className="text-sm text-foreground">
                                  <span className="font-medium">{letter.toUpperCase()}:</span> {text}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {exp.whyIncorrect && Object.keys(exp.whyIncorrect).length > 0 && (
                          <div>
                            <h4 className="text-sm font-medium text-red-700 dark:text-red-400 mb-2">
                              Why Incorrect:
                            </h4>
                            <div className="space-y-1">
                              {Object.entries(exp.whyIncorrect).map(([letter, text]) => (
                                <div key={letter} className="text-sm text-foreground">
                                  <span className="font-medium">{letter.toUpperCase()}:</span> {text}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {exp.topicReference && (
                          <p className="text-sm text-muted-foreground">
                            Reference: {exp.topicReference}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })
        ) : (
          (filteredData.data as MTOQuestion[]).map(q => (
            <div
              key={q.id}
              className="bg-card border border-border rounded-lg p-4"
            >
              <p className="text-foreground line-clamp-2">{q.text}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {q.topics?.map(t => (
                  <span key={t} className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full">
                    Topic {t}
                  </span>
                ))}
              </div>
              <div className="mt-2 text-xs text-muted-foreground">
                ID: {q.legacyId || q.id}
              </div>
            </div>
          ))
        )}

        {filteredData.data.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            No items found for this filter.
          </div>
        )}
      </div>
    </div>
  )
}

function ToolsTab() {
  const [actionStatus, setActionStatus] = useState<{
    action: string
    status: 'idle' | 'running' | 'success' | 'error'
    message?: string
  }>({ action: '', status: 'idle' })

  async function handleRefreshStats() {
    setActionStatus({ action: 'refresh', status: 'running' })
    try {
      // Just re-fetch to verify connectivity
      await getDocs(collection(db, 'mtoQuestions'))
      await getDocs(collection(db, 'questionExplanations'))
      setActionStatus({
        action: 'refresh',
        status: 'success',
        message: 'Database connection verified successfully'
      })
    } catch (error) {
      setActionStatus({
        action: 'refresh',
        status: 'error',
        message: 'Failed to connect to database'
      })
    }
  }

  async function handleClearOrphans() {
    setActionStatus({ action: 'orphans', status: 'running' })
    try {
      const [questionsSnapshot, explanationsSnapshot] = await Promise.all([
        getDocs(collection(db, 'mtoQuestions')),
        getDocs(collection(db, 'questionExplanations'))
      ])

      const questionIds = new Set(
        questionsSnapshot.docs.flatMap(doc => {
          const data = doc.data()
          return [doc.id, data.legacyId].filter(Boolean)
        })
      )

      const orphanExplanations = explanationsSnapshot.docs.filter(
        doc => !questionIds.has(doc.data().questionId)
      )

      if (orphanExplanations.length === 0) {
        setActionStatus({
          action: 'orphans',
          status: 'success',
          message: 'No orphan explanations found'
        })
        return
      }

      // For now, just report - don't auto-delete
      setActionStatus({
        action: 'orphans',
        status: 'success',
        message: `Found ${orphanExplanations.length} orphan explanations (not deleted)`
      })
    } catch (error) {
      setActionStatus({
        action: 'orphans',
        status: 'error',
        message: 'Failed to check for orphans'
      })
    }
  }

  return (
    <div className="space-y-6">
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Admin Tools</h3>
        <p className="text-sm text-muted-foreground mb-6">
          Use these tools to maintain the MTO database. Be careful with destructive operations.
        </p>

        <div className="space-y-4">
          {/* Refresh Stats */}
          <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
            <div>
              <h4 className="font-medium text-foreground">Verify Database Connection</h4>
              <p className="text-sm text-muted-foreground">
                Test connectivity to Firebase and verify data access
              </p>
            </div>
            <Button
              onClick={handleRefreshStats}
              disabled={actionStatus.status === 'running'}
            >
              {actionStatus.action === 'refresh' && actionStatus.status === 'running' ? (
                <Loader2 className="w-4 h-4 animate-spin mr-2" />
              ) : (
                <RefreshCw className="w-4 h-4 mr-2" />
              )}
              Verify
            </Button>
          </div>

          {/* Find Orphan Explanations */}
          <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
            <div>
              <h4 className="font-medium text-foreground">Find Orphan Explanations</h4>
              <p className="text-sm text-muted-foreground">
                Find explanations that don't have matching questions
              </p>
            </div>
            <Button
              onClick={handleClearOrphans}
              disabled={actionStatus.status === 'running'}
              variant="outline"
            >
              {actionStatus.action === 'orphans' && actionStatus.status === 'running' ? (
                <Loader2 className="w-4 h-4 animate-spin mr-2" />
              ) : (
                <Search className="w-4 h-4 mr-2" />
              )}
              Find
            </Button>
          </div>

          {/* Database Info */}
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <h4 className="font-medium text-blue-700 dark:text-blue-400 mb-2">
              Database Information
            </h4>
            <div className="text-sm text-foreground space-y-1">
              <p><strong>Project:</strong> medlearn-dev</p>
              <p><strong>Collections:</strong> mtoQuestions, questionExplanations</p>
              <p><strong>Scripts Location:</strong> client/scripts/</p>
            </div>
          </div>
        </div>

        {/* Status Message */}
        {actionStatus.status !== 'idle' && actionStatus.message && (
          <div className={`mt-4 p-4 rounded-lg ${
            actionStatus.status === 'success'
              ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400'
              : actionStatus.status === 'error'
                ? 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400'
                : 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400'
          }`}>
            {actionStatus.status === 'success' && <CheckCircle className="w-4 h-4 inline mr-2" />}
            {actionStatus.status === 'error' && <AlertCircle className="w-4 h-4 inline mr-2" />}
            {actionStatus.message}
          </div>
        )}
      </div>

      {/* CLI Commands Reference */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">CLI Commands</h3>
        <p className="text-sm text-muted-foreground mb-4">
          For bulk operations, use these command-line scripts:
        </p>

        <div className="space-y-3 font-mono text-sm">
          <div className="p-3 bg-muted rounded-lg">
            <p className="text-muted-foreground"># Generate explanation template for a topic</p>
            <p className="text-foreground">npx ts-node scripts/generate-topic-explanations.ts --topic 41</p>
          </div>
          <div className="p-3 bg-muted rounded-lg">
            <p className="text-muted-foreground"># Import explanations to Firebase</p>
            <p className="text-foreground">npx ts-node scripts/import-explanations.ts --file topic41-complete.json</p>
          </div>
          <div className="p-3 bg-muted rounded-lg">
            <p className="text-muted-foreground"># Verify database integrity</p>
            <p className="text-foreground">npx ts-node scripts/verify-database.ts</p>
          </div>
        </div>
      </div>
    </div>
  )
}
