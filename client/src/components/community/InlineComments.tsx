import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Heart, Award, Clock, Loader2, MessageSquare, ChevronDown, ChevronUp, Bookmark, Trash2, MoreHorizontal } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { useCommunityStore } from '@/store/communityStore'
import { formatTimestamp } from '@/lib/dateUtils'
import { AnonymousToggle } from './AnonymousToggle'

interface InlineCommentsProps {
  postId: string
  commentCount: number
  likes: number
  isLiked: boolean
  isBookmarked: boolean
  onToggleLike: () => void
  onToggleBookmark: () => void
}

export function InlineComments({
  postId,
  commentCount,
  likes,
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
  const [replyBoxOpen, setReplyBoxOpen] = useState<string | null>(null) // ID of comment being replied to
  const [replyText, setReplyText] = useState<Record<string, string>>({}) // Reply text for each comment
  const [replyAnonymous, setReplyAnonymous] = useState<Record<string, boolean>>({}) // Anonymous state for each reply
  const [replySubmitting, setReplySubmitting] = useState<string | null>(null)
  const [expandedReplies, setExpandedReplies] = useState<Set<string>>(new Set()) // Set of comment IDs with expanded replies
  const [openMenuCommentId, setOpenMenuCommentId] = useState<string | null>(null) // ID of comment with open menu
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const replyRefs = useRef<Record<string, HTMLTextAreaElement | null>>({})

  const { comments, currentUser, fetchComments, addComment, deleteComment } = useCommunityStore()

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

  // Handle top-level comment submission
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

  // Handle inline reply submission
  const handleSubmitReply = async (parentCommentId: string) => {
    const text = replyText[parentCommentId]
    if (!text?.trim()) return

    setReplySubmitting(parentCommentId)
    await addComment(postId, text, parentCommentId, replyAnonymous[parentCommentId] || false)

    // Clear reply state
    setReplyText(prev => ({ ...prev, [parentCommentId]: '' }))
    setReplyBoxOpen(null)
    setReplySubmitting(null)

    // Automatically expand replies to show the new reply
    setExpandedReplies(prev => new Set(prev).add(parentCommentId))

    // Reset anonymity to user's default preference
    if (currentUser?.privacySettings) {
      const { postAnonymously: preference } = currentUser.privacySettings
      if (preference === 'always') {
        setReplyAnonymous(prev => ({ ...prev, [parentCommentId]: true }))
      } else if (preference === 'never') {
        setReplyAnonymous(prev => ({ ...prev, [parentCommentId]: false }))
      } else {
        setReplyAnonymous(prev => ({ ...prev, [parentCommentId]: false }))
      }
    }
  }

  // Handle comment/reply deletion (admin only)
  const handleDeleteComment = async (commentId: string) => {
    if (!confirm('Are you sure you want to delete this comment?')) return

    await deleteComment(commentId, postId)
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
        {/* Left side - Like, Comments */}
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
                  {commentAnonymously ? '👤' : (currentUser?.avatar || '👤')}
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

              {/* Comments List - Twitter Style */}
              {comments.length === 0 ? (
                <div className="text-center py-8">
                  <MessageSquare className="w-10 h-10 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">No comments yet</p>
                  <p className="text-xs text-muted-foreground">Be the first to comment!</p>
                </div>
              ) : (
                <div className="space-y-3 mt-4">
                  {(() => {
                    // Separate top-level comments from replies
                    const topLevelComments = comments.filter(c => !c.parentCommentId)
                    const repliesByParent = comments
                      .filter(c => c.parentCommentId)
                      .reduce((acc, reply) => {
                        if (!acc[reply.parentCommentId!]) acc[reply.parentCommentId!] = []
                        acc[reply.parentCommentId!].push(reply)
                        return acc
                      }, {} as Record<string, typeof comments>)

                    return topLevelComments.map((comment, index) => {
                      const replies = repliesByParent[comment.id] || []
                      const isRepliesExpanded = expandedReplies.has(comment.id)
                      const isReplyBoxOpen = replyBoxOpen === comment.id
                      const isAnonymous = replyAnonymous[comment.id] || false

                      return (
                        <motion.div
                          key={comment.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="space-y-2"
                        >
                          {/* Main Comment */}
                          <div className="flex justify-between gap-3 p-3 rounded-lg bg-card hover:bg-muted/30 transition-colors">
                            <div className="flex gap-3 flex-1 min-w-0">
                              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-muted to-muted-foreground/30 flex items-center justify-center text-base shadow-sm flex-shrink-0 overflow-hidden">
                                {comment.author.avatar.startsWith('http') ? (
                                  <img
                                    src={comment.author.avatar}
                                    alt={comment.author.name}
                                    className="w-full h-full object-cover"
                                  />
                                ) : (
                                  comment.author.avatar
                                )}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="font-semibold text-sm">{comment.author.name}</span>
                                  {comment.author.verified && (
                                    <Award className="w-3.5 h-3.5 text-muted-foreground" />
                                  )}
                                  {comment.author.role && (
                                    <span className="text-xs text-muted-foreground">· {comment.author.role}</span>
                                  )}
                                  <span className="text-xs text-muted-foreground">· {formatTimestamp(comment.timestamp)}</span>
                                </div>
                              <p className="text-sm text-foreground mb-2 leading-relaxed whitespace-pre-wrap">
                                {comment.content}
                              </p>
                              <div className="flex items-center gap-4">
                                <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-red-500 transition-colors">
                                  <Heart className="w-3.5 h-3.5" />
                                  <span>{comment.likes}</span>
                                </button>
                                <button
                                  onClick={() => {
                                    setReplyBoxOpen(isReplyBoxOpen ? null : comment.id)
                                    // Initialize reply anonymous state based on user preference
                                    if (!isReplyBoxOpen && currentUser?.privacySettings) {
                                      const pref = currentUser.privacySettings.postAnonymously
                                      setReplyAnonymous(prev => ({ ...prev, [comment.id]: pref === 'always' }))
                                    }
                                  }}
                                  className="text-xs text-muted-foreground hover:text-primary transition-colors"
                                >
                                  Reply
                                </button>
                                {replies.length > 0 && (
                                  <button
                                    onClick={() => {
                                      setExpandedReplies(prev => {
                                        const newSet = new Set(prev)
                                        if (newSet.has(comment.id)) {
                                          newSet.delete(comment.id)
                                        } else {
                                          newSet.add(comment.id)
                                        }
                                        return newSet
                                      })
                                    }}
                                    className="text-xs text-primary hover:text-primary/80 transition-colors font-medium"
                                  >
                                    {isRepliesExpanded ? 'Hide' : 'View'} {replies.length} {replies.length === 1 ? 'reply' : 'replies'}
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>

                            {/* Three-dot menu (super admin only) */}
                            {currentUser?.isSuperAdmin && (
                              <div className="relative flex-shrink-0">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-8 w-8 p-0"
                                  onClick={() => setOpenMenuCommentId(openMenuCommentId === comment.id ? null : comment.id)}
                                >
                                  <MoreHorizontal className="w-4 h-4" />
                                </Button>

                                {/* Dropdown Menu */}
                                <AnimatePresence>
                                  {openMenuCommentId === comment.id && (
                                    <motion.div
                                      initial={{ opacity: 0, scale: 0.95, y: -10 }}
                                      animate={{ opacity: 1, scale: 1, y: 0 }}
                                      exit={{ opacity: 0, scale: 0.95, y: -10 }}
                                      transition={{ duration: 0.15 }}
                                      className="absolute right-0 top-10 z-50 min-w-[160px] bg-card border border-border rounded-lg shadow-lg overflow-hidden"
                                    >
                                      <button
                                        onClick={() => {
                                          handleDeleteComment(comment.id)
                                          setOpenMenuCommentId(null)
                                        }}
                                        className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors flex items-center gap-2"
                                      >
                                        <Trash2 className="w-4 h-4" />
                                        Delete Comment
                                      </button>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            )}
                          </div>

                          {/* Inline Reply Box */}
                          <AnimatePresence>
                            {isReplyBoxOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="ml-12 flex gap-3 p-3 rounded-lg bg-muted/20 border-l-2 border-primary/30"
                              >
                                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-muted to-muted-foreground/30 flex items-center justify-center text-base shadow-sm flex-shrink-0">
                                  {isAnonymous ? '👤' : (currentUser?.avatar || '👤')}
                                </div>
                                <div className="flex-1 space-y-2">
                                  <textarea
                                    ref={el => { replyRefs.current[comment.id] = el }}
                                    value={replyText[comment.id] || ''}
                                    onChange={(e) => setReplyText(prev => ({ ...prev, [comment.id]: e.target.value }))}
                                    onKeyDown={(e) => {
                                      if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
                                        e.preventDefault()
                                        handleSubmitReply(comment.id)
                                      }
                                    }}
                                    placeholder={`Reply to ${comment.author.name}...`}
                                    className="comment-textarea w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none min-h-[42px]"
                                    autoFocus
                                  />
                                  {currentUser?.anonymousPseudonym && (
                                    <AnonymousToggle
                                      isAnonymous={isAnonymous}
                                      onToggle={() => setReplyAnonymous(prev => ({ ...prev, [comment.id]: !prev[comment.id] }))}
                                      pseudonym={currentUser.anonymousPseudonym}
                                    />
                                  )}
                                  <div className="flex items-center justify-between">
                                    <p className="text-xs text-muted-foreground">Press Cmd/Ctrl + Enter to submit</p>
                                    <div className="flex gap-2">
                                      <Button
                                        onClick={() => setReplyBoxOpen(null)}
                                        size="sm"
                                        variant="outline"
                                      >
                                        Cancel
                                      </Button>
                                      <Button
                                        onClick={() => handleSubmitReply(comment.id)}
                                        disabled={!replyText[comment.id]?.trim() || replySubmitting === comment.id}
                                        size="sm"
                                        className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white"
                                      >
                                        {replySubmitting === comment.id ? (
                                          <Loader2 className="w-4 h-4 animate-spin" />
                                        ) : (
                                          <>
                                            <Send className="w-3.5 h-3.5 mr-1.5" />
                                            Reply
                                          </>
                                        )}
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>

                          {/* Nested Replies */}
                          <AnimatePresence>
                            {isRepliesExpanded && replies.length > 0 && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="ml-12 space-y-2"
                              >
                                {replies.map((reply, replyIndex) => (
                                  <motion.div
                                    key={reply.id}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: replyIndex * 0.05 }}
                                    className="flex justify-between gap-3 p-3 rounded-lg bg-muted/20 border-l-2 border-primary/30 hover:bg-muted/40 transition-colors"
                                  >
                                    <div className="flex gap-3 flex-1 min-w-0">
                                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-muted to-muted-foreground/30 flex items-center justify-center text-sm shadow-sm flex-shrink-0 overflow-hidden">
                                        {reply.author.avatar.startsWith('http') ? (
                                          <img
                                            src={reply.author.avatar}
                                            alt={reply.author.name}
                                            className="w-full h-full object-cover"
                                          />
                                        ) : (
                                          reply.author.avatar
                                        )}
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-1">
                                          <span className="font-semibold text-sm">{reply.author.name}</span>
                                          {reply.author.verified && (
                                            <Award className="w-3 h-3 text-muted-foreground" />
                                          )}
                                          <span className="text-xs text-muted-foreground">· {reply.author.role}</span>
                                          <span className="text-xs text-muted-foreground">· {formatTimestamp(reply.timestamp)}</span>
                                        </div>
                                        <p className="text-xs text-primary/70 mb-1.5">
                                          Replying to <span className="font-semibold">{comment.author.name}</span>
                                        </p>
                                        <p className="text-sm text-foreground leading-relaxed whitespace-pre-wrap">
                                          {reply.content}
                                        </p>
                                      </div>
                                    </div>

                                    {/* Three-dot menu for replies (super admin only) */}
                                    {currentUser?.isSuperAdmin && (
                                      <div className="relative flex-shrink-0">
                                        <Button
                                          variant="ghost"
                                          size="sm"
                                          className="h-7 w-7 p-0"
                                          onClick={() => setOpenMenuCommentId(openMenuCommentId === reply.id ? null : reply.id)}
                                        >
                                          <MoreHorizontal className="w-3.5 h-3.5" />
                                        </Button>

                                        {/* Dropdown Menu */}
                                        <AnimatePresence>
                                          {openMenuCommentId === reply.id && (
                                            <motion.div
                                              initial={{ opacity: 0, scale: 0.95, y: -10 }}
                                              animate={{ opacity: 1, scale: 1, y: 0 }}
                                              exit={{ opacity: 0, scale: 0.95, y: -10 }}
                                              transition={{ duration: 0.15 }}
                                              className="absolute right-0 top-9 z-50 min-w-[150px] bg-card border border-border rounded-lg shadow-lg overflow-hidden"
                                            >
                                              <button
                                                onClick={() => {
                                                  handleDeleteComment(reply.id)
                                                  setOpenMenuCommentId(null)
                                                }}
                                                className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors flex items-center gap-2"
                                              >
                                                <Trash2 className="w-3.5 h-3.5" />
                                                Delete Reply
                                              </button>
                                            </motion.div>
                                          )}
                                        </AnimatePresence>
                                      </div>
                                    )}
                                  </motion.div>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      )
                    })
                  })()}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
