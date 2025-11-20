import { memo, useMemo } from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, TrendingUp, Eye } from 'lucide-react'
import type { Post } from '@/types/community'

interface TrendingDiscussionsProps {
  posts: Post[]
  onPostClick?: (postId: string) => void
  onNewPostClick?: () => void
}

function TrendingDiscussionsComponent({ posts, onPostClick, onNewPostClick }: TrendingDiscussionsProps) {
  // Calculate trending posts using useMemo to prevent recalculation on every render
  const trendingPosts = useMemo(() => {
    // Remove duplicates first
    const uniquePosts = Array.from(
      new Map(posts.map(post => [post.id, post])).values()
    )

    const now = Date.now()

    // OPTIMIZED FOR SMALL EDUCATIONAL COMMUNITIES (<100 users, exam-driven usage)
    // Unlike Reddit/HN, medical students use this episodically (before exams)
    // Content has long-tail value - study materials stay relevant for weeks/months
    return uniquePosts
      .map(post => {
        const ageInDays = (now - post.timestamp.toMillis()) / (1000 * 60 * 60 * 24)

        // LINEAR ENGAGEMENT SCORE (not logarithmic)
        // With small numbers (1-10 comments), linear scaling shows better differentiation
        // 5 comments → 10 comments IS a significant difference in small communities
        const baseScore =
          post.comments * 10 +  // Comments highly valuable (discussions)
          post.likes * 5 +       // Likes show quality
          post.views * 0.5       // Views show reach

        // ACTIVITY RECENCY BOOST
        // Key insight: Recent engagement matters more than post age
        // A 2-week-old post that got commented TODAY should trend!
        // This makes content resurface when students engage with it
        let activityMultiplier = 1.0

        // Boost posts with very recent activity (last 24 hours)
        if (ageInDays < 1) {
          activityMultiplier = 3.0  // Brand new or freshly active
        }
        // Recent activity (last 7 days) - still very relevant
        else if (ageInDays < 7) {
          activityMultiplier = 1.5  // Recent discussions
        }
        // Older content - no boost but no heavy penalty either
        // Study materials can stay relevant during entire exam prep period

        // GENTLE TIME PENALTY (not aggressive decay)
        // Medical discussions stay relevant longer than news/tech
        // Only penalize posts that are truly stale (30+ days)
        let timePenalty = 1.0

        if (ageInDays > 30) {
          // Very gentle penalty for old content
          // A great post from 60 days ago gets divided by 2, not eliminated
          timePenalty = ageInDays / 30
        }

        // FINAL SCORE = (Base Engagement × Activity Boost) ÷ Time Penalty
        const trendingScore = (baseScore * activityMultiplier) / timePenalty

        return {
          ...post,
          trendingScore
        }
      })
      .sort((a, b) => b.trendingScore - a.trendingScore)
      .slice(0, 5)
  }, [posts])

  if (trendingPosts.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-card border border-border rounded-xl p-6 shadow-lg"
      >
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-muted-foreground" />
          <h2 className="font-semibold text-base">Trending Discussions</h2>
        </div>
        <p className="text-sm text-muted-foreground text-center py-4">
          No discussions yet.{' '}
          <button
            onClick={onNewPostClick}
            className="text-primary hover:underline font-medium"
          >
            Start a conversation!
          </button>
        </p>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-card border border-border rounded-xl p-6 shadow-lg"
    >
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="w-5 h-5 text-muted-foreground" />
        <h2 className="font-semibold text-base">Trending Discussions</h2>
      </div>

      <div className="space-y-3">
        {trendingPosts.map((post, index) => {
          const preview = post.content.length > 80
            ? post.content.substring(0, 80) + '...'
            : post.content

          return (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              onClick={() => onPostClick?.(post.id)}
              className="p-3 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors group"
            >
              <p className="text-sm font-normal text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                {preview}
              </p>

              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MessageSquare className="w-3 h-3" />
                  <span>{post.comments}</span>
                </div>
                <div className="flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  <span>{post.likes}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="w-3 h-3" />
                  <span>{post.views}</span>
                </div>
              </div>

              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-2">
                  {post.tags.slice(0, 2).map((tag, idx) => (
                    <span
                      key={`${post.id}-${tag}-${idx}`}
                      className="px-1.5 py-0.5 bg-muted text-muted-foreground rounded text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                  {post.tags.length > 2 && (
                    <span className="px-1.5 py-0.5 text-muted-foreground text-xs">
                      +{post.tags.length - 2}
                    </span>
                  )}
                </div>
              )}
            </motion.div>
          )
        })}
      </div>

      <div className="mt-4 pt-4 border-t border-border">
        <p className="text-xs text-muted-foreground text-center">
          Based on recent activity and engagement
        </p>
      </div>
    </motion.div>
  )
}

// Wrap with memo to prevent unnecessary re-renders
export const TrendingDiscussions = memo(TrendingDiscussionsComponent)
