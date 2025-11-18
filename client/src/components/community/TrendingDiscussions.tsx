import { motion } from 'framer-motion'
import { MessageSquare, TrendingUp, Eye, Clock } from 'lucide-react'
import type { Post } from '@/types/community'

interface TrendingDiscussionsProps {
  posts: Post[]
}

export function TrendingDiscussions({ posts }: TrendingDiscussionsProps) {
  // Calculate trending discussions based on recent activity
  // Factors: comments, likes, views in last 24 hours (for demo, just sort by engagement)
  const trendingPosts = [...posts]
    .sort((a, b) => {
      // Simple engagement score: comments * 2 + likes + views/10
      const scoreA = a.comments * 2 + a.likes + a.views / 10
      const scoreB = b.comments * 2 + b.likes + b.views / 10
      return scoreB - scoreA
    })
    .slice(0, 5) // Top 5 trending

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
          No discussions yet. Start a conversation!
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
        {trendingPosts.map((post, i) => {
          // Truncate content for preview
          const preview = post.content.length > 80
            ? post.content.substring(0, 80) + '...'
            : post.content

          return (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="p-3 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors group"
            >
              {/* Post preview */}
              <p className="text-sm font-normal text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                {preview}
              </p>

              {/* Engagement stats */}
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

              {/* Tags */}
              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-2">
                  {post.tags.slice(0, 2).map((tag, idx) => (
                    <span
                      key={idx}
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
