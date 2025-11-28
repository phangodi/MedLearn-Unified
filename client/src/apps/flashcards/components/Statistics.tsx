/**
 * Statistics Component
 *
 * Comprehensive learning analytics and progress tracking for the flashcard system.
 * Shows study trends, retention rates, forecasts, and session history.
 */

import { useState, useEffect, useMemo } from 'react'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import {
  ArrowLeft,
  TrendingUp,
  Calendar,
  Clock,
  Target,
  Flame,
  BarChart2,
  Activity,
  Award,
  BookOpen,
} from 'lucide-react'
import { format, subDays, eachDayOfInterval, startOfWeek, isSameDay, startOfDay } from 'date-fns'
import { Button } from '@/components/ui/Button'
import { useFlashcards } from '../hooks'
import { getUserReviews, getUserSessions } from '../services/flashcardService'
import { Rating } from '../types/flashcard'
import type { ReviewLogEntry, StudySession } from '../types/flashcard'

type DateRange = 'today' | 'week' | 'month' | 'all'

// Animated number component
function AnimatedNumber({ value, decimals = 0, suffix = '' }: { value: number; decimals?: number; suffix?: string }) {
  const motionValue = useMotionValue(0)
  const rounded = useTransform(motionValue, (latest) => {
    return decimals > 0 ? latest.toFixed(decimals) : Math.round(latest).toString()
  })

  useEffect(() => {
    const controls = animate(motionValue, value, {
      duration: 1,
      ease: 'easeOut',
    })
    return controls.stop
  }, [motionValue, value])

  // Convert MotionValue to string for display
  const displayValue = typeof rounded === 'object' && 'get' in rounded ? rounded.get() : rounded

  return (
    <span>
      {displayValue}
      {suffix}
    </span>
  )
}

export function Statistics() {
  const navigate = useNavigate()
  const { userId, decks } = useFlashcards()

  const [dateRange, setDateRange] = useState<DateRange>('all')
  const [reviews, setReviews] = useState<ReviewLogEntry[]>([])
  const [sessions, setSessions] = useState<StudySession[]>([])
  const [loading, setLoading] = useState(true)

  // Load reviews and sessions
  useEffect(() => {
    if (!userId) return

    const loadData = async () => {
      setLoading(true)
      try {
        // Load reviews based on date range
        let startDate: Date | undefined
        const now = new Date()

        switch (dateRange) {
          case 'today':
            startDate = startOfDay(now)
            break
          case 'week':
            startDate = subDays(now, 7)
            break
          case 'month':
            startDate = subDays(now, 30)
            break
          case 'all':
            startDate = undefined
            break
        }

        const [reviewsData, sessionsData] = await Promise.all([
          getUserReviews(userId, startDate),
          getUserSessions(userId, 20),
        ])

        setReviews(reviewsData)
        setSessions(sessionsData)
      } catch (error) {
        console.error('Error loading statistics:', error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [userId, dateRange])

  // Calculate overview stats
  const overviewStats = useMemo(() => {
    const totalCards = reviews.length
    const successfulReviews = reviews.filter(
      (r) => r.rating === Rating.Good || r.rating === Rating.Easy
    ).length
    const retentionRate = totalCards > 0 ? (successfulReviews / totalCards) * 100 : 0

    // Calculate study streak
    const reviewDates = Array.from(
      new Set(reviews.map((r) => startOfDay(new Date(r.review)).getTime()))
    )
      .map((time) => new Date(time))
      .sort((a, b) => b.getTime() - a.getTime())

    let streak = 0
    const today = startOfDay(new Date())
    let checkDate = new Date(today)

    for (const date of reviewDates) {
      if (isSameDay(date, checkDate)) {
        streak++
        checkDate = subDays(checkDate, 1)
      } else if (date < checkDate) {
        break
      }
    }

    // Calculate total time
    const totalTimeMs = reviews.reduce((sum, r) => sum + (r.timeMs || 0), 0)
    const totalTimeHours = totalTimeMs / (1000 * 60 * 60)

    return {
      totalCards,
      streak,
      retentionRate,
      totalTimeHours,
    }
  }, [reviews])

  // Calculate forecast (next 7 days)
  const forecast = useMemo(() => {
    const forecastDays = 7
    const result: { date: Date; count: number; isToday: boolean }[] = []

    for (let i = 0; i < forecastDays; i++) {
      const date = subDays(new Date(), -i) // Today + i days
      const isToday = i === 0

      // Count cards due on this date from all decks
      let count = 0
      decks.forEach((deck) => {
        // Simplified: use deck counts as approximation
        if (i === 0) {
          count += deck.reviewCount + deck.learningCount
        } else {
          // Distribute future reviews
          count += Math.round((deck.reviewCount + deck.learningCount) * 0.3)
        }
      })

      result.push({ date, count, isToday })
    }

    return result
  }, [decks])

  // Calculate activity heatmap data (last 12 weeks)
  const heatmapData = useMemo(() => {
    const weeks = 12
    const startDate = subDays(startOfWeek(new Date()), weeks * 7)
    const endDate = new Date()
    const allDays = eachDayOfInterval({ start: startDate, end: endDate })

    // Count reviews per day
    const reviewCounts = new Map<string, number>()
    reviews.forEach((review) => {
      const dateKey = format(startOfDay(new Date(review.review)), 'yyyy-MM-dd')
      reviewCounts.set(dateKey, (reviewCounts.get(dateKey) || 0) + 1)
    })

    // Find max for normalization
    const maxCount = Math.max(...Array.from(reviewCounts.values()), 1)

    // Group by week
    const weekData: { date: Date; count: number; intensity: number }[][] = []
    let currentWeek: { date: Date; count: number; intensity: number }[] = []

    allDays.forEach((date, index) => {
      const dateKey = format(date, 'yyyy-MM-dd')
      const count = reviewCounts.get(dateKey) || 0
      const intensity = count / maxCount

      currentWeek.push({ date, count, intensity })

      if (currentWeek.length === 7 || index === allDays.length - 1) {
        weekData.push(currentWeek)
        currentWeek = []
      }
    })

    return weekData
  }, [reviews])

  // Calculate card state distribution
  const stateDistribution = useMemo(() => {
    const total = decks.reduce((sum, deck) => sum + deck.cardCount, 0)
    const newCards = decks.reduce((sum, deck) => sum + deck.newCount, 0)
    const learning = decks.reduce((sum, deck) => sum + deck.learningCount, 0)
    const review = decks.reduce((sum, deck) => sum + deck.reviewCount, 0)

    return {
      new: { count: newCards, percentage: total > 0 ? (newCards / total) * 100 : 0 },
      learning: { count: learning, percentage: total > 0 ? (learning / total) * 100 : 0 },
      review: { count: review, percentage: total > 0 ? (review / total) * 100 : 0 },
    }
  }, [decks])

  // Calculate rating breakdown
  const ratingBreakdown = useMemo(() => {
    const total = reviews.length
    const again = reviews.filter((r) => r.rating === Rating.Again).length
    const hard = reviews.filter((r) => r.rating === Rating.Hard).length
    const good = reviews.filter((r) => r.rating === Rating.Good).length
    const easy = reviews.filter((r) => r.rating === Rating.Easy).length

    return {
      again: { count: again, percentage: total > 0 ? (again / total) * 100 : 0 },
      hard: { count: hard, percentage: total > 0 ? (hard / total) * 100 : 0 },
      good: { count: good, percentage: total > 0 ? (good / total) * 100 : 0 },
      easy: { count: easy, percentage: total > 0 ? (easy / total) * 100 : 0 },
    }
  }, [reviews])

  // Calculate deck performance
  const deckPerformance = useMemo(() => {
    return decks.map((deck) => {
      // Get reviews for this deck
      const deckReviews = reviews.filter((r) => r.deckId === deck.id)
      const total = deckReviews.length
      const successful = deckReviews.filter(
        (r) => r.rating === Rating.Good || r.rating === Rating.Easy
      ).length
      const retention = total > 0 ? (successful / total) * 100 : 0

      return {
        deck,
        retention,
        totalReviews: total,
        dueCards: deck.reviewCount + deck.learningCount,
      }
    }).sort((a, b) => b.retention - a.retention)
  }, [decks, reviews])

  const maxForecastCount = Math.max(...forecast.map((f) => f.count), 1)

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            className="inline-block"
          >
            <BarChart2 className="w-12 h-12 text-primary" />
          </motion.div>
          <p className="text-muted-foreground mt-4">Loading statistics...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8">
        {/* Back Button & Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate('/flashcards')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Decks
          </Button>

          {/* Date Range Selector */}
          <div className="flex gap-2">
            {(['today', 'week', 'month', 'all'] as DateRange[]).map((range) => (
              <button
                key={range}
                onClick={() => setDateRange(range)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  dateRange === range
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-card border border-border hover:bg-muted'
                }`}
              >
                {range === 'today' && 'Today'}
                {range === 'week' && 'This Week'}
                {range === 'month' && 'This Month'}
                {range === 'all' && 'All Time'}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <BarChart2 className="w-12 h-12 text-primary" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight pb-1 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Study Statistics
            </h1>
          </div>
          <p className="text-base lg:text-lg text-muted-foreground">
            Track your learning progress and achievements
          </p>
        </motion.div>

        {/* Overview Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {/* Cards Studied */}
          <div className="bg-card border-2 border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-200">
            <div className="flex items-center justify-between mb-2">
              <div className="p-2 bg-primary/10 rounded-lg">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <TrendingUp className="w-4 h-4 text-success" />
            </div>
            <div className="text-3xl font-bold mb-1">
              <AnimatedNumber value={overviewStats.totalCards} />
            </div>
            <div className="text-sm text-muted-foreground">Cards Studied</div>
          </div>

          {/* Study Streak */}
          <div className="bg-card border-2 border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-200">
            <div className="flex items-center justify-between mb-2">
              <div className="p-2 bg-orange-500/10 rounded-lg">
                <Flame className="w-5 h-5 text-orange-500" />
              </div>
              <span className="text-xs text-muted-foreground">days</span>
            </div>
            <div className="text-3xl font-bold mb-1">
              <AnimatedNumber value={overviewStats.streak} />
            </div>
            <div className="text-sm text-muted-foreground">Current Streak</div>
          </div>

          {/* Retention Rate */}
          <div className="bg-card border-2 border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-200">
            <div className="flex items-center justify-between mb-2">
              <div className="p-2 bg-success/10 rounded-lg">
                <Target className="w-5 h-5 text-success" />
              </div>
              <TrendingUp className="w-4 h-4 text-success" />
            </div>
            <div className="text-3xl font-bold mb-1">
              <AnimatedNumber value={overviewStats.retentionRate} decimals={1} suffix="%" />
            </div>
            <div className="text-sm text-muted-foreground">Retention Rate</div>
          </div>

          {/* Time Studied */}
          <div className="bg-card border-2 border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-200">
            <div className="flex items-center justify-between mb-2">
              <div className="p-2 bg-secondary/10 rounded-lg">
                <Clock className="w-5 h-5 text-secondary" />
              </div>
              <span className="text-xs text-muted-foreground">hours</span>
            </div>
            <div className="text-3xl font-bold mb-1">
              <AnimatedNumber value={overviewStats.totalTimeHours} decimals={1} />
            </div>
            <div className="text-sm text-muted-foreground">Time Studied</div>
          </div>
        </motion.div>

        {/* Forecast Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card border-2 border-border/50 rounded-xl p-6 mb-12"
        >
          <div className="flex items-center gap-2 mb-6">
            <Calendar className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-bold">Cards Due - Next 7 Days</h2>
          </div>

          <div className="flex items-end justify-between gap-4 h-48">
            {forecast.map((day, index) => (
              <motion.div
                key={index}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                className="flex-1 flex flex-col items-center gap-2"
              >
                <div className="text-xs text-muted-foreground font-medium">
                  {day.count}
                </div>
                <div
                  className={`w-full rounded-lg transition-all duration-200 hover:opacity-80 ${
                    day.isToday
                      ? 'bg-primary'
                      : day.count > maxForecastCount * 0.7
                      ? 'bg-destructive/70'
                      : day.count > maxForecastCount * 0.4
                      ? 'bg-warning/70'
                      : 'bg-success/70'
                  }`}
                  style={{ height: `${(day.count / maxForecastCount) * 100}%` }}
                />
                <div className={`text-xs font-medium ${day.isToday ? 'text-primary' : 'text-muted-foreground'}`}>
                  {format(day.date, 'EEE')}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Activity Heatmap */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card border-2 border-border/50 rounded-xl p-6"
          >
            <div className="flex items-center gap-2 mb-6">
              <Activity className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-bold">Study Activity</h2>
            </div>

            <div className="flex gap-1 overflow-x-auto pb-2">
              {heatmapData.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-1">
                  {week.map((day, dayIndex) => {
                    const isToday = isSameDay(day.date, new Date())
                    return (
                      <div
                        key={dayIndex}
                        className={`w-3 h-3 rounded-sm transition-all duration-200 hover:scale-125 cursor-pointer ${
                          day.count === 0
                            ? 'bg-muted'
                            : day.intensity > 0.75
                            ? 'bg-primary'
                            : day.intensity > 0.5
                            ? 'bg-primary/70'
                            : day.intensity > 0.25
                            ? 'bg-primary/40'
                            : 'bg-primary/20'
                        } ${isToday ? 'ring-2 ring-primary ring-offset-2 ring-offset-background' : ''}`}
                        title={`${format(day.date, 'MMM d, yyyy')}: ${day.count} cards`}
                      />
                    )
                  })}
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between mt-4 text-xs text-muted-foreground">
              <span>{format(heatmapData[0]?.[0]?.date || new Date(), 'MMM d')}</span>
              <div className="flex items-center gap-2">
                <span>Less</span>
                <div className="flex gap-1">
                  <div className="w-3 h-3 bg-muted rounded-sm" />
                  <div className="w-3 h-3 bg-primary/20 rounded-sm" />
                  <div className="w-3 h-3 bg-primary/40 rounded-sm" />
                  <div className="w-3 h-3 bg-primary/70 rounded-sm" />
                  <div className="w-3 h-3 bg-primary rounded-sm" />
                </div>
                <span>More</span>
              </div>
            </div>
          </motion.div>

          {/* Card State Distribution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="bg-card border-2 border-border/50 rounded-xl p-6"
          >
            <div className="flex items-center gap-2 mb-6">
              <BarChart2 className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-bold">Card State Distribution</h2>
            </div>

            <div className="space-y-4">
              {/* New */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">New</span>
                  <span className="text-sm text-muted-foreground">
                    {stateDistribution.new.count} ({stateDistribution.new.percentage.toFixed(0)}%)
                  </span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${stateDistribution.new.percentage}%` }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="h-full bg-blue-500"
                  />
                </div>
              </div>

              {/* Learning */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Learning</span>
                  <span className="text-sm text-muted-foreground">
                    {stateDistribution.learning.count} ({stateDistribution.learning.percentage.toFixed(0)}%)
                  </span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${stateDistribution.learning.percentage}%` }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="h-full bg-warning"
                  />
                </div>
              </div>

              {/* Review */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Review</span>
                  <span className="text-sm text-muted-foreground">
                    {stateDistribution.review.count} ({stateDistribution.review.percentage.toFixed(0)}%)
                  </span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${stateDistribution.review.percentage}%` }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="h-full bg-success"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Rating Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-card border-2 border-border/50 rounded-xl p-6 mb-12"
        >
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-bold">Rating Breakdown</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Again */}
            <div className="text-center">
              <div className="mb-2">
                <div className="text-2xl font-bold text-destructive">
                  <AnimatedNumber value={ratingBreakdown.again.percentage} decimals={1} suffix="%" />
                </div>
                <div className="text-xs text-muted-foreground">
                  {ratingBreakdown.again.count} cards
                </div>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${ratingBreakdown.again.percentage}%` }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="h-full bg-destructive"
                />
              </div>
              <div className="mt-2 text-sm font-medium text-destructive">Again</div>
            </div>

            {/* Hard */}
            <div className="text-center">
              <div className="mb-2">
                <div className="text-2xl font-bold text-warning">
                  <AnimatedNumber value={ratingBreakdown.hard.percentage} decimals={1} suffix="%" />
                </div>
                <div className="text-xs text-muted-foreground">
                  {ratingBreakdown.hard.count} cards
                </div>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${ratingBreakdown.hard.percentage}%` }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="h-full bg-warning"
                />
              </div>
              <div className="mt-2 text-sm font-medium text-warning">Hard</div>
            </div>

            {/* Good */}
            <div className="text-center">
              <div className="mb-2">
                <div className="text-2xl font-bold text-success">
                  <AnimatedNumber value={ratingBreakdown.good.percentage} decimals={1} suffix="%" />
                </div>
                <div className="text-xs text-muted-foreground">
                  {ratingBreakdown.good.count} cards
                </div>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${ratingBreakdown.good.percentage}%` }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="h-full bg-success"
                />
              </div>
              <div className="mt-2 text-sm font-medium text-success">Good</div>
            </div>

            {/* Easy */}
            <div className="text-center">
              <div className="mb-2">
                <div className="text-2xl font-bold text-primary">
                  <AnimatedNumber value={ratingBreakdown.easy.percentage} decimals={1} suffix="%" />
                </div>
                <div className="text-xs text-muted-foreground">
                  {ratingBreakdown.easy.count} cards
                </div>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${ratingBreakdown.easy.percentage}%` }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="h-full bg-primary"
                />
              </div>
              <div className="mt-2 text-sm font-medium text-primary">Easy</div>
            </div>
          </div>
        </motion.div>

        {/* Recent Sessions & Deck Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Sessions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="bg-card border-2 border-border/50 rounded-xl p-6"
          >
            <div className="flex items-center gap-2 mb-6">
              <Clock className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-bold">Recent Sessions</h2>
            </div>

            {sessions.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No study sessions yet. Start studying to see your history!
              </div>
            ) : (
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {sessions.slice(0, 10).map((session) => {
                  const deck = decks.find((d) => d.id === session.deckId)
                  const accuracy = session.cardsStudied > 0
                    ? Math.round(((session.goodCount + session.easyCount) / session.cardsStudied) * 100)
                    : 0
                  const startDate = session.startedAt instanceof Date
                    ? session.startedAt
                    : (session.startedAt as any).toDate()

                  return (
                    <div
                      key={session.id}
                      className="bg-muted/30 rounded-lg p-4 hover:bg-muted/50 transition-all duration-200"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-medium">{deck?.name || 'Unknown Deck'}</div>
                        <div className="text-xs text-muted-foreground">
                          {format(startDate, 'MMM d, h:mm a')}
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div>{session.cardsStudied} cards</div>
                        <div>{Math.round(session.totalTimeMs / 60000)} min</div>
                        <div className={accuracy >= 80 ? 'text-success' : accuracy >= 60 ? 'text-warning' : 'text-destructive'}>
                          {accuracy}% accuracy
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </motion.div>

          {/* Deck Performance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-card border-2 border-border/50 rounded-xl p-6"
          >
            <div className="flex items-center gap-2 mb-6">
              <Target className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-bold">Deck Performance</h2>
            </div>

            {deckPerformance.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No decks yet. Create a deck to start studying!
              </div>
            ) : (
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {deckPerformance.map(({ deck, retention, totalReviews, dueCards }) => (
                  <div
                    key={deck.id}
                    className="bg-muted/30 rounded-lg p-4 hover:bg-muted/50 transition-all duration-200 cursor-pointer"
                    onClick={() => navigate(`/flashcards/deck/${deck.id}`)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: deck.color }}
                        />
                        <div className="font-medium">{deck.name}</div>
                      </div>
                      <div className={`text-sm font-bold ${
                        retention >= 80 ? 'text-success' : retention >= 60 ? 'text-warning' : 'text-destructive'
                      }`}>
                        {retention.toFixed(0)}%
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div>{totalReviews} reviews</div>
                      <div>{dueCards} due</div>
                      <div>{deck.cardCount} total</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
