import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Heart, Award, Clock, Loader2, MessageSquare, ChevronDown, ChevronUp, Share2, Bookmark } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { useCommunityStore } from '@/store/communityStore'
import { formatTimestamp } from '@/lib/dateUtils'
import { AnonymousToggle } from './AnonymousToggle'

interface InlineCommentsProps {
  postId: string
  commentCount: number
  likes: number
  shares: number
  isLiked: boolean
  isBookmarked: boolean
  onToggleLike: () => void
  onToggleBookmark: () => void
}

export function InlineComments({
  postId,
  commentCount,
  likes,
  shares,
  isLiked,
  isBookmarked,
  onToggleLike,
  onToggleBookmark
}: InlineCommentsProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [commentText, setCommentText] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [commentAnonymously, setCommentAnonymously] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const { comments, currentUser, fetchComments, addComment } = useCommunityStore()

  // Initialize anonymous commenting based on user's privacy settings
  useEffect(() => {
    if (currentUser?.privacySettings) {
      const { postAnonymously: preference } = currentUser.privacySettings
      if (preference === 'always') {
        setCommentAnonymously(true)
      } else if (preference === 'never') {
        setCommentAnonymously(false)
      }
      // 'ask' leaves it to user's choice via toggle
    }
  }, [currentUser])

  useEffect(() => {
    if (isExpanded) {
      fetchComments(postId)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isExpanded, postId])

  const handleSubmitComment = async () => {
    if (!commentText.trim()) return

    setSubmitting(true)
    await addComment(postId, commentText, undefined, commentAnonymously)
    setCommentText('')
    setSubmitting(false)

    // Reset anonymity to user's default preference
    if (currentUser?.privacySettings) {
      const { postAnonymously: preference } = currentUser.privacySettings
      if (preference === 'always') {
        setCommentAnonymously(true)
      } else if (preference === 'never') {
        setCommentAnonymously(false)
      } else {
        setCommentAnonymously(false) // Reset to false for 'ask' mode
      }
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    // Submit with Cmd/Ctrl + Enter
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault()
      handleSubmitComment()
    }
  }

  // Auto-resize textarea as user types AND when section is expanded
  useEffect(() => {
    const textarea = textareaRef.current
    if (!textarea) return

    // Only resize if the section is expanded
    if (!isExpanded) return

    // Reset height to auto to get the correct scrollHeight
    textarea.style.height = 'auto'

    // Calculate new height based on content
    const newHeight = textarea.scrollHeight
    const maxHeight = 200 // Max height in pixels before showing scrollbar

    // Set height, capped at maxHeight
    if (newHeight > maxHeight) {
      textarea.style.height = `${maxHeight}px`
      textarea.style.overflowY = 'auto'
    } else {
      textarea.style.height = `${newHeight}px`
      textarea.style.overflowY = 'hidden'
    }
  }, [commentText, isExpanded]) // Recalculate when text changes OR when section is expanded

  return (
    <div className="border-t border-border">
      {/* Consolidated Actions Bar with Comments Toggle */}
      <div className="px-6 py-2.5 bg-muted/30 flex items-center justify-between">
        {/* Left side - Like, Share, Comments */}
        <div className="flex items-center gap-1">
          {/* Like Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => {
              e.stopPropagation()
              onToggleLike()
            }}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all hover:bg-muted ${
              isLiked ? 'text-foreground bg-muted' : 'text-muted-foreground'
            }`}
          >
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
            <span className="text-sm font-normal">{likes}</span>
          </motion.button>

          {/* Share Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-3 py-1.5 rounded-lg hover:bg-muted flex items-center gap-1.5 transition-all text-muted-foreground"
          >
            <Share2 className="w-4 h-4" />
            <span className="text-sm font-normal">{shares}</span>
          </motion.button>

          {/* Comments Toggle */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`px-3 py-1.5 rounded-lg hover:bg-muted flex items-center gap-1.5 transition-all ${
              isExpanded ? 'text-foreground bg-muted' : 'text-muted-foreground'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span className="text-sm font-normal">{commentCount}</span>
            {isExpanded ? (
              <ChevronUp className="w-3.5 h-3.5" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5" />
            )}
          </button>
        </div>

        {/* Right side - Bookmark */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={(e) => {
            e.stopPropagation()
            onToggleBookmark()
          }}
          className={`p-1.5 rounded-lg transition-all hover:bg-muted ${
            isBookmarked ? 'text-foreground bg-muted' : 'text-muted-foreground'
          }`}
        >
          <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
        </motion.button>
      </div>

      {/* Expanded Comments Section */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 py-4 bg-muted/10 space-y-4">
              <style>{`
                /* Custom scrollbar styling for textarea */
                .comment-textarea::-webkit-scrollbar {
                  width: 8px;
                }
                .comment-textarea::-webkit-scrollbar-track {
                  background: transparent;
                  border-radius: 4px;
                }
                .comment-textarea::-webkit-scrollbar-thumb {
                  background: rgb(203, 213, 225); /* slate-300 */
                  border-radius: 4px;
                  transition: background 0.2s;
                }
                .comment-textarea::-webkit-scrollbar-thumb:hover {
                  background: rgb(148, 163, 184); /* slate-400 */
                }
                .dark .comment-textarea::-webkit-scrollbar-thumb {
                  background: rgb(71, 85, 105); /* slate-600 */
                }
                .dark .comment-textarea::-webkit-scrollbar-thumb:hover {
                  background: rgb(100, 116, 139); /* slate-500 */
                }

                /* Firefox scrollbar */
                .comment-textarea {
                  scrollbar-width: thin;
                  scrollbar-color: rgb(203, 213, 225) transparent;
                }
                .dark .comment-textarea {
                  scrollbar-color: rgb(71, 85, 105) transparent;
                }
              `}</style>

              {/* Comment Input */}
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-muted to-muted-foreground/30 flex items-center justify-center text-lg shadow-sm flex-shrink-0">
                  {currentUser?.avatar || '👤'}
                </div>
                <div className="flex-1 space-y-2">
                  <textarea
                    ref={textareaRef}
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    onKeyDown={handleKeyPress}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder="Write a comment..."
                    className="comment-textarea w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none min-h-[42px]"
                    style={{ height: 'auto', overflowY: 'hidden' }}
                    disabled={submitting}
                  />

                  {/* Anonymous Toggle */}
                  {currentUser?.anonymousPseudonym && (
                    <AnonymousToggle
                      isAnonymous={commentAnonymously}
                      onToggle={setCommentAnonymously}
                      pseudonym={currentUser.anonymousPseudonym}
                    />
                  )}

                  {/* Submit Button and Helper Text */}
                  <AnimatePresence>
                    {(isFocused || commentText) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flex items-center justify-between"
                      >
                        <p className="text-xs text-muted-foreground">
                          Press Cmd/Ctrl + Enter to submit
                        </p>
                        <Button
                          onClick={handleSubmitComment}
                          disabled={!commentText.trim() || submitting}
                          size="sm"
                          className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white"
                        >
                          {submitting ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                          ) : (
                            <>
                              <Send className="w-3.5 h-3.5 mr-1.5" />
                              Comment
                            </>
                          )}
                        </Button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Comments List */}
              {comments.length === 0 ? (
                <div className="text-center py-8">
                  <MessageSquare className="w-10 h-10 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">No comments yet</p>
                  <p className="text-xs text-muted-foreground">Be the first to comment!</p>
                </div>
              ) : (
                <div className="space-y-3 mt-4">
                  {comments.map((comment, index) => (
                    <motion.div
                      key={comment.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex gap-3 p-3 rounded-lg bg-card hover:bg-muted/30 transition-colors"
                    >
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-muted to-muted-foreground/30 flex items-center justify-center text-base shadow-sm flex-shrink-0">
                        {comment.author.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-sm">
                            {comment.author.name}
                          </span>
                          {comment.author.verified && (
                            <Award className="w-3.5 h-3.5 text-muted-foreground" />
                          )}
                          <span className="text-xs text-muted-foreground">
                            · {comment.author.role}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            · {formatTimestamp(comment.timestamp)}
                          </span>
                        </div>
                        <p className="text-sm text-foreground mb-2 leading-relaxed whitespace-pre-wrap">
                          {comment.content}
                        </p>
                        <div className="flex items-center gap-4">
                          <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-red-500 transition-colors">
                            <Heart className="w-3.5 h-3.5" />
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
