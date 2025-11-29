import { useState, useEffect, useMemo } from 'react'
import { collection, getDocs } from 'firebase/firestore'
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
  Flag,
  CheckSquare
} from 'lucide-react'
import {
  getAllFlagsIncludingResolved,
  resolveFlag,
  unresolveFlag,
  deleteFlag,
  getFlagStats,
} from '@/apps/physiology-mto/services/flagService'
import { useAuth } from '@/contexts/AuthContext'
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

interface QuestionFlag {
  id: string
  questionId: string
  flagCount: number
  flaggedBy: string[]
  flagReasons: {
    wrongTopic: number
    incorrectAnswer: number
    unclearQuestion: number
    other: number
  }
  resolved: boolean
  resolvedAt?: { seconds: number }
  resolvedBy?: string
}

type TabType = 'dashboard' | 'questions' | 'duplicates' | 'explanations' | 'flags' | 'tools'

export function MTOAdminPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [activeTab, setActiveTab] = useState<TabType>('dashboard')

  const tabs: { id: TabType; label: string; icon: React.ReactNode }[] = [
    { id: 'dashboard', label: 'Dashboard', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'questions', label: 'Questions', icon: <FileQuestion className="w-4 h-4" /> },
    { id: 'duplicates', label: 'Duplicates', icon: <Copy className="w-4 h-4" /> },
    { id: 'explanations', label: 'Explanations', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'flags', label: 'Flags', icon: <Flag className="w-4 h-4" /> },
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
          {activeTab === 'flags' && <FlagsTab />}
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
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null)

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
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-foreground">Duplicate Groups</h3>
            <p className="text-sm text-muted-foreground">
              Click on each question to see full details and compare
            </p>
          </div>

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
                      <div className="border-t border-border">
                        {/* Compare header */}
                        <div className="px-4 py-3 bg-muted/30 border-b border-border">
                          <p className="text-sm font-medium text-foreground">
                            Compare {group.questions.length} questions - click each to expand
                          </p>
                        </div>

                        {/* Questions side by side comparison */}
                        <div className="p-4 space-y-4">
                          {group.questions.map((q, qIndex) => {
                            const isQuestionExpanded = expandedQuestion === q.id
                            const isKeep = qIndex === 0

                            return (
                              <div
                                key={q.id}
                                className={`rounded-lg border-2 overflow-hidden ${
                                  isKeep
                                    ? 'border-green-300 dark:border-green-700'
                                    : 'border-border'
                                }`}
                              >
                                {/* Question header - always visible */}
                                <div
                                  className={`p-4 cursor-pointer transition-colors ${
                                    isKeep
                                      ? 'bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30'
                                      : 'bg-card hover:bg-muted/50'
                                  }`}
                                  onClick={() => setExpandedQuestion(isQuestionExpanded ? null : q.id)}
                                >
                                  <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1 min-w-0">
                                      {/* Header with badges */}
                                      <div className="flex items-center flex-wrap gap-2 mb-2">
                                        {isKeep ? (
                                          <span className="px-2 py-0.5 bg-green-500 text-white text-xs font-medium rounded-full">
                                            KEEP (Primary)
                                          </span>
                                        ) : (
                                          <span className="px-2 py-0.5 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 text-xs font-medium rounded-full">
                                            Duplicate #{qIndex}
                                          </span>
                                        )}
                                        {q.topics?.map(t => (
                                          <span key={t} className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full">
                                            Topic {t}
                                          </span>
                                        ))}
                                        {q.mcqs?.map(m => (
                                          <span key={m} className="px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded-full">
                                            {m.toUpperCase()}
                                          </span>
                                        ))}
                                      </div>

                                      {/* Question text */}
                                      <p className={`text-foreground font-medium ${isQuestionExpanded ? '' : 'line-clamp-2'}`}>
                                        {q.text}
                                      </p>

                                      {/* ID */}
                                      <p className="text-xs text-muted-foreground mt-2">
                                        ID: {q.legacyId || q.id}
                                      </p>
                                    </div>

                                    <div className="flex items-center gap-2 flex-shrink-0">
                                      {!isKeep && (
                                        <Button
                                          variant="outline"
                                          size="sm"
                                          className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                                          onClick={(e) => {
                                            e.stopPropagation()
                                            if (confirm(`Delete question ${q.legacyId || q.id}?\n\nThis action cannot be undone.`)) {
                                              // TODO: Implement actual delete
                                              alert('Delete functionality coming soon')
                                            }
                                          }}
                                        >
                                          <Trash2 className="w-4 h-4 mr-1" />
                                          Delete
                                        </Button>
                                      )}
                                      {isQuestionExpanded ? (
                                        <ChevronUp className="w-5 h-5 text-muted-foreground" />
                                      ) : (
                                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                                      )}
                                    </div>
                                  </div>
                                </div>

                                {/* Expanded content - options and answers */}
                                <AnimatePresence>
                                  {isQuestionExpanded && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: 'auto', opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.2 }}
                                      className="overflow-hidden"
                                    >
                                      <div className={`p-4 border-t ${
                                        isKeep
                                          ? 'border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-900/10'
                                          : 'border-border bg-muted/30'
                                      }`}>
                                        <h4 className="text-sm font-medium text-muted-foreground mb-3">
                                          Answer Options:
                                        </h4>
                                        <div className="space-y-2">
                                          {q.options?.map(option => {
                                            const isCorrect = q.correctAnswers?.includes(option.letter)
                                            return (
                                              <div
                                                key={option.letter}
                                                className={`flex items-start gap-3 p-3 rounded-lg ${
                                                  isCorrect
                                                    ? 'bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700'
                                                    : 'bg-background border border-border'
                                                }`}
                                              >
                                                <span className={`font-bold text-lg ${
                                                  isCorrect
                                                    ? 'text-green-700 dark:text-green-400'
                                                    : 'text-muted-foreground'
                                                }`}>
                                                  {option.letter}.
                                                </span>
                                                <span className={`flex-1 ${
                                                  isCorrect
                                                    ? 'text-green-800 dark:text-green-300 font-medium'
                                                    : 'text-foreground'
                                                }`}>
                                                  {option.text}
                                                </span>
                                                {isCorrect && (
                                                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                                                )}
                                              </div>
                                            )
                                          })}
                                        </div>

                                        {/* Correct answer summary */}
                                        <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                          <p className="text-sm text-blue-700 dark:text-blue-400">
                                            <strong>Correct answer(s):</strong>{' '}
                                            {q.correctAnswers?.join(', ') || 'None specified'}
                                          </p>
                                        </div>
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            )
                          })}
                        </div>
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

function FlagsTab() {
  const { user } = useAuth()
  const [loading, setLoading] = useState(true)
  const [flags, setFlags] = useState<(QuestionFlag & { id: string })[]>([])
  const [questions, setQuestions] = useState<Map<string, MTOQuestion>>(new Map())
  const [filter, setFilter] = useState<'all' | 'unresolved' | 'resolved'>('unresolved')
  const [expandedFlag, setExpandedFlag] = useState<string | null>(null)
  const [processingId, setProcessingId] = useState<string | null>(null)
  const [stats, setStats] = useState({
    total: 0,
    unresolved: 0,
    resolved: 0,
    byReason: {
      wrongTopic: 0,
      incorrectAnswer: 0,
      unclearQuestion: 0,
      other: 0
    }
  })

  useEffect(() => {
    async function fetchData() {
      try {
        const [flagsData, statsData, questionsSnapshot] = await Promise.all([
          getAllFlagsIncludingResolved(),
          getFlagStats(),
          getDocs(collection(db, 'mtoQuestions'))
        ])

        const questionsMap = new Map<string, MTOQuestion>()
        questionsSnapshot.docs.forEach(doc => {
          const data = doc.data() as MTOQuestion
          questionsMap.set(doc.id, { ...data, id: doc.id })
          if (data.legacyId) {
            questionsMap.set(data.legacyId, { ...data, id: doc.id })
          }
        })

        setFlags(flagsData)
        setStats(statsData)
        setQuestions(questionsMap)
      } catch (error) {
        console.error('Error fetching flags:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const filteredFlags = useMemo(() => {
    switch (filter) {
      case 'unresolved':
        return flags.filter(f => !f.resolved)
      case 'resolved':
        return flags.filter(f => f.resolved)
      default:
        return flags
    }
  }, [flags, filter])

  async function handleResolve(questionId: string) {
    if (!user) return
    setProcessingId(questionId)
    const result = await resolveFlag(questionId, user.uid)
    if (result.success) {
      setFlags(prev => prev.map(f =>
        f.questionId === questionId ? { ...f, resolved: true } : f
      ))
      setStats(prev => ({
        ...prev,
        unresolved: prev.unresolved - 1,
        resolved: prev.resolved + 1
      }))
    }
    setProcessingId(null)
  }

  async function handleUnresolve(questionId: string) {
    setProcessingId(questionId)
    const result = await unresolveFlag(questionId)
    if (result.success) {
      setFlags(prev => prev.map(f =>
        f.questionId === questionId ? { ...f, resolved: false } : f
      ))
      setStats(prev => ({
        ...prev,
        unresolved: prev.unresolved + 1,
        resolved: prev.resolved - 1
      }))
    }
    setProcessingId(null)
  }

  async function handleDelete(questionId: string) {
    if (!confirm('Delete this flag? This action cannot be undone.')) return
    setProcessingId(questionId)
    const result = await deleteFlag(questionId)
    if (result.success) {
      const deletedFlag = flags.find(f => f.questionId === questionId)
      setFlags(prev => prev.filter(f => f.questionId !== questionId))
      if (deletedFlag) {
        setStats(prev => ({
          ...prev,
          total: prev.total - 1,
          unresolved: deletedFlag.resolved ? prev.unresolved : prev.unresolved - 1,
          resolved: deletedFlag.resolved ? prev.resolved - 1 : prev.resolved
        }))
      }
    }
    setProcessingId(null)
  }

  function getReasonLabel(reason: string): string {
    switch (reason) {
      case 'wrongTopic': return 'Wrong Topic'
      case 'incorrectAnswer': return 'Incorrect Answer'
      case 'unclearQuestion': return 'Unclear Question'
      case 'other': return 'Other'
      default: return reason
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

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
          <div className="text-2xl font-bold text-foreground">{stats.total}</div>
          <div className="text-sm text-muted-foreground">Total Flags</div>
        </button>
        <button
          onClick={() => setFilter('unresolved')}
          className={`p-4 rounded-lg border transition-colors text-left ${
            filter === 'unresolved'
              ? 'border-primary bg-primary/5'
              : 'border-border bg-card hover:bg-muted/50'
          }`}
        >
          <div className="text-2xl font-bold text-red-600 dark:text-red-400">
            {stats.unresolved}
          </div>
          <div className="text-sm text-muted-foreground">Unresolved</div>
        </button>
        <button
          onClick={() => setFilter('resolved')}
          className={`p-4 rounded-lg border transition-colors text-left ${
            filter === 'resolved'
              ? 'border-primary bg-primary/5'
              : 'border-border bg-card hover:bg-muted/50'
          }`}
        >
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">
            {stats.resolved}
          </div>
          <div className="text-sm text-muted-foreground">Resolved</div>
        </button>
        <div className="p-4 rounded-lg border border-border bg-card">
          <div className="text-sm text-muted-foreground mb-2">By Reason</div>
          <div className="space-y-1 text-xs">
            <div className="flex justify-between">
              <span>Incorrect Answer</span>
              <span className="font-medium">{stats.byReason.incorrectAnswer}</span>
            </div>
            <div className="flex justify-between">
              <span>Wrong Topic</span>
              <span className="font-medium">{stats.byReason.wrongTopic}</span>
            </div>
            <div className="flex justify-between">
              <span>Unclear</span>
              <span className="font-medium">{stats.byReason.unclearQuestion}</span>
            </div>
            <div className="flex justify-between">
              <span>Other</span>
              <span className="font-medium">{stats.byReason.other}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Flags List */}
      <div className="space-y-3">
        {filteredFlags.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            {filter === 'unresolved'
              ? 'No unresolved flags. All clear!'
              : filter === 'resolved'
                ? 'No resolved flags yet.'
                : 'No flags have been submitted yet.'}
          </div>
        ) : (
          filteredFlags.map(flag => {
            const question = questions.get(flag.questionId)
            const isExpanded = expandedFlag === flag.id
            const isProcessing = processingId === flag.questionId

            return (
              <div
                key={flag.id}
                className={`bg-card border rounded-lg overflow-hidden ${
                  flag.resolved
                    ? 'border-green-300 dark:border-green-800'
                    : 'border-red-300 dark:border-red-800'
                }`}
              >
                <div
                  className="p-4 cursor-pointer hover:bg-muted/50 transition-colors"
                  onClick={() => setExpandedFlag(isExpanded ? null : flag.id)}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      {/* Header */}
                      <div className="flex items-center flex-wrap gap-2 mb-2">
                        {flag.resolved ? (
                          <span className="px-2 py-0.5 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-xs font-medium rounded-full flex items-center gap-1">
                            <CheckCircle className="w-3 h-3" />
                            Resolved
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 text-xs font-medium rounded-full flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            Unresolved
                          </span>
                        )}
                        <span className="px-2 py-0.5 bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 text-xs font-medium rounded-full">
                          {flag.flagCount} {flag.flagCount === 1 ? 'flag' : 'flags'}
                        </span>
                      </div>

                      {/* Question text */}
                      {question ? (
                        <p className={`text-foreground font-medium ${isExpanded ? '' : 'line-clamp-2'}`}>
                          {question.text}
                        </p>
                      ) : (
                        <p className="text-muted-foreground italic">
                          Question not found (ID: {flag.questionId})
                        </p>
                      )}

                      {/* Reasons */}
                      <div className="flex flex-wrap gap-1 mt-2">
                        {Object.entries(flag.flagReasons)
                          .filter(([, count]) => count > 0)
                          .map(([reason, count]) => (
                            <span
                              key={reason}
                              className="px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded"
                            >
                              {getReasonLabel(reason)}: {count}
                            </span>
                          ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Expanded content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-border p-4 space-y-4">
                        {/* Question details */}
                        {question && (
                          <div className="space-y-3">
                            <h4 className="text-sm font-medium text-muted-foreground">Answer Options:</h4>
                            <div className="space-y-2">
                              {question.options?.map(option => {
                                const isCorrect = question.correctAnswers?.includes(option.letter)
                                return (
                                  <div
                                    key={option.letter}
                                    className={`flex items-start gap-3 p-3 rounded-lg ${
                                      isCorrect
                                        ? 'bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700'
                                        : 'bg-background border border-border'
                                    }`}
                                  >
                                    <span className={`font-bold ${
                                      isCorrect
                                        ? 'text-green-700 dark:text-green-400'
                                        : 'text-muted-foreground'
                                    }`}>
                                      {option.letter}.
                                    </span>
                                    <span className={`flex-1 ${
                                      isCorrect
                                        ? 'text-green-800 dark:text-green-300 font-medium'
                                        : 'text-foreground'
                                    }`}>
                                      {option.text}
                                    </span>
                                    {isCorrect && (
                                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                                    )}
                                  </div>
                                )
                              })}
                            </div>

                            <div className="flex flex-wrap gap-2 pt-2">
                              {question.topics?.map(t => (
                                <span key={t} className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full">
                                  Topic {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Flag info */}
                        <div className="bg-muted/50 rounded-lg p-3">
                          <h4 className="text-sm font-medium text-muted-foreground mb-2">Flag Details:</h4>
                          <div className="text-sm text-foreground space-y-1">
                            <p><strong>Question ID:</strong> {flag.questionId}</p>
                            <p><strong>Total Flags:</strong> {flag.flagCount}</p>
                            <p><strong>Flagged By:</strong> {flag.flaggedBy.length} users</p>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-3 pt-2">
                          {flag.resolved ? (
                            <Button
                              variant="outline"
                              onClick={(e) => {
                                e.stopPropagation()
                                handleUnresolve(flag.questionId)
                              }}
                              disabled={isProcessing}
                            >
                              {isProcessing ? (
                                <Loader2 className="w-4 h-4 animate-spin mr-2" />
                              ) : (
                                <AlertCircle className="w-4 h-4 mr-2" />
                              )}
                              Unresolve
                            </Button>
                          ) : (
                            <Button
                              onClick={(e) => {
                                e.stopPropagation()
                                handleResolve(flag.questionId)
                              }}
                              disabled={isProcessing}
                            >
                              {isProcessing ? (
                                <Loader2 className="w-4 h-4 animate-spin mr-2" />
                              ) : (
                                <CheckSquare className="w-4 h-4 mr-2" />
                              )}
                              Mark Resolved
                            </Button>
                          )}
                          <Button
                            variant="outline"
                            className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                            onClick={(e) => {
                              e.stopPropagation()
                              handleDelete(flag.questionId)
                            }}
                            disabled={isProcessing}
                          >
                            <Trash2 className="w-4 h-4 mr-2" />
                            Delete Flag
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })
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
