import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Trash2, AlertTriangle, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface DeleteAccountProps {
  onDelete: () => Promise<void>
}

export function DeleteAccount({ onDelete }: DeleteAccountProps) {
  const [showBox, setShowBox] = useState(false)
  const [showConfirmDialog, setShowConfirmDialog] = useState(false)
  const [confirmText, setConfirmText] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [error, setError] = useState('')

  const handleDelete = async () => {
    if (confirmText !== 'DELETE') {
      setError('Please type DELETE to confirm')
      return
    }

    setDeleting(true)
    setError('')

    try {
      await onDelete()
      // Navigation handled by parent component
    } catch (err: any) {
      setError(err.message || 'Failed to delete account')
      setDeleting(false)
    }
  }

  return (
    <>
      {!showBox ? (
        <div className="pt-8 border-t border-border">
          <div className="flex justify-end">
            <button
              onClick={() => setShowBox(true)}
              className="text-xs text-muted-foreground hover:text-destructive transition-colors"
            >
              Delete Account
            </button>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card border border-destructive/30 rounded-xl p-6"
        >
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
            <Trash2 className="w-5 h-5 text-destructive" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-destructive">Delete Account</h2>
            <p className="text-sm text-muted-foreground">
              Permanently remove your account and all data
            </p>
          </div>
        </div>

        {/* Warning */}
        <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 mb-4">
          <div className="flex gap-3">
            <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
            <div className="text-sm">
              <p className="font-semibold text-destructive mb-2">Warning: This action cannot be undone</p>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Your profile will be permanently deleted</li>
                <li>• All your posts and comments will be removed</li>
                <li>• Your bookmarks and saved content will be lost</li>
                <li>• You will be immediately signed out</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Delete Button */}
        <Button
          onClick={() => setShowConfirmDialog(true)}
          variant="destructive"
          className="w-full bg-destructive hover:bg-destructive/90 text-destructive-foreground"
        >
          <Trash2 className="w-4 h-4 mr-2" />
          Delete My Account
        </Button>
      </motion.div>
      )}

      {/* Confirmation Dialog */}
      <AnimatePresence>
        {showConfirmDialog && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-card border border-border rounded-xl shadow-2xl max-w-md w-full overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border bg-destructive/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-destructive" />
                  </div>
                  <h3 className="text-lg font-semibold text-destructive">Confirm Account Deletion</h3>
                </div>
                <button
                  onClick={() => {
                    setShowConfirmDialog(false)
                    setConfirmText('')
                    setError('')
                  }}
                  disabled={deleting}
                  className="p-1 hover:bg-muted rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <p className="text-sm text-muted-foreground">
                  This action is <strong className="text-destructive">permanent and irreversible</strong>.
                  All your data will be permanently deleted from our servers.
                </p>

                <div className="space-y-2">
                  <label htmlFor="confirm-delete" className="text-sm font-medium">
                    Type <code className="px-2 py-1 bg-muted rounded text-destructive font-mono">DELETE</code> to confirm:
                  </label>
                  <input
                    id="confirm-delete"
                    type="text"
                    value={confirmText}
                    onChange={(e) => {
                      setConfirmText(e.target.value)
                      setError('')
                    }}
                    disabled={deleting}
                    placeholder="Type DELETE"
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-destructive text-foreground disabled:opacity-50"
                    autoComplete="off"
                  />
                  {error && (
                    <p className="text-sm text-destructive">{error}</p>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4">
                  <Button
                    onClick={() => {
                      setShowConfirmDialog(false)
                      setConfirmText('')
                      setError('')
                    }}
                    disabled={deleting}
                    variant="outline"
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleDelete}
                    disabled={deleting || confirmText !== 'DELETE'}
                    variant="destructive"
                    className="flex-1 bg-destructive hover:bg-destructive/90 text-destructive-foreground"
                  >
                    {deleting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                        />
                        Deleting...
                      </>
                    ) : (
                      <>
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete Account
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
