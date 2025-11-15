import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, Heart, Award, Clock, Loader2, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { useCommunityStore } from '@/store/communityStore'
import { formatTimestamp } from '@/lib/dateUtils'

interface CommentsModalProps {
  postId: string
  onClose: () => void
}

export function CommentsModal({ postId, onClose }: CommentsModalProps) {
  const [commentText, setCommentText] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const { comments, posts, currentUser, fetchComments, addComment } = useCommunityStore()

  // Find the post being commented on
  const post = posts.find(p => p.id === postId)

  useEffect(() => {
    fetchComments(postId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId]) // Fetch when postId changes

  const handleSubmitComment = async () => {
    if (!commentText.trim()) return

    setSubmitting(true)
    await addComment(postId, commentText)
    setCommentText('')
    setSubmitting(false)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      handleSubmitComment()
    }
  }

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-card border border-border rounded-xl shadow-2xl max-w-2xl w-full max-h-[80vh] flex flex-col"
        >
          {/* Header */}
          <div className="px-6 py-4 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-bold">Comments ({comments.length})</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Original Post - Like Twitter/X */}
          {post && (
            <div className="px-6 py-4 border-b border-border bg-muted/20">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-lg shadow-md flex-shrink-0">
                  {post.author.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-sm">
                      {post.author.name}
                    </span>
                    {post.author.verified && (
                      <Award className="w-3.5 h-3.5 text-blue-500" />
                    )}
                    <span className="text-xs text-muted-foreground">
                      · {formatTimestamp(post.timestamp)}
                    </span>
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">
                    {post.content}
                  </p>
                  {/* Tags */}
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {post.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Comments List */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {comments.length === 0 ? (
              <div className="text-center py-12">
                <MessageSquare className="w-12 h-12 mx-auto mb-3 text-muted-foreground" />
                <p className="text-muted-foreground">No comments yet</p>
                <p className="text-sm text-muted-foreground">Be the first to comment!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {comments.map((comment, index) => (
                  <motion.div
                    key={comment.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex gap-3 p-4 rounded-lg hover:bg-muted/30 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-lg shadow-md flex-shrink-0">
                      {comment.author.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-sm">
                          {comment.author.name}
                        </span>
                        {comment.author.verified && (
                          <Award className="w-3.5 h-3.5 text-blue-500" />
                        )}
                        <span className="text-xs text-muted-foreground">
                          {comment.author.role}
                        </span>
                      </div>
                      <p className="text-sm text-foreground mb-2 leading-relaxed">
                        {comment.content}
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          {formatTimestamp(comment.timestamp)}
                        </div>
                        <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-red-500 transition-colors">
                          <Heart className="w-3 h-3" />
                          <span>{comment.likes}</span>
                        </button>
                        <button className="text-xs text-muted-foreground hover:text-primary transition-colors">
                          Reply
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Comment Input */}
          <div className="px-6 py-4 border-t border-border">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-lg shadow-md flex-shrink-0">
                {currentUser?.avatar || '👤'}
              </div>
              <div className="flex-1 flex gap-2">
                <input
                  type="text"
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Write a comment... (Cmd/Ctrl + Enter to submit)"
                  className="flex-1 px-4 py-2.5 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  disabled={submitting}
                />
                <Button
                  onClick={handleSubmitComment}
                  disabled={!commentText.trim() || submitting}
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white"
                >
                  {submitting ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Post
                    </>
                  )}
                </Button>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-2 ml-[52px]">
              Press Cmd/Ctrl + Enter to submit quickly
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
