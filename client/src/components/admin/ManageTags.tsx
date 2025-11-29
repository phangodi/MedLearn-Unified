import { useState, useEffect } from 'react'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '@/firebase/config'
import { Button } from '@/components/ui/Button'
import { Plus, Tag, Trash2, RefreshCw, Check, X } from 'lucide-react'

const DEFAULT_TAGS = [
  'Physiology',
  'Histology',
  'Anatomy',
  'Pathology',
  'Pharmacology',
  'Biochemistry',
  'Cardiology',
  'Neuroscience',
  'Clinical Skills',
  'Exam Tips',
  'Study Notes',
  'Video Tutorial',
  'Microscopy',
  'Study Groups',
  'Research',
  'Case Studies'
]

export function ManageTags() {
  const [tags, setTags] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [newTag, setNewTag] = useState('')
  const [isAddingTag, setIsAddingTag] = useState(false)

  const fetchTags = async () => {
    setLoading(true)
    try {
      if (!db) {
        console.error('Firestore not initialized')
        return
      }

      const tagsDoc = await getDoc(doc(db, 'settings', 'communityTags'))

      if (tagsDoc.exists()) {
        setTags(tagsDoc.data().tags || DEFAULT_TAGS)
      } else {
        // Initialize with default tags
        setTags(DEFAULT_TAGS)
        await setDoc(doc(db, 'settings', 'communityTags'), {
          tags: DEFAULT_TAGS,
          lastUpdated: new Date()
        })
      }
    } catch (error) {
      console.error('Error fetching tags:', error)
      alert('Failed to fetch tags')
      setTags(DEFAULT_TAGS)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTags()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleAddTag = async () => {
    const trimmedTag = newTag.trim()

    if (!trimmedTag) {
      alert('Tag name cannot be empty')
      return
    }

    if (tags.some(tag => tag.toLowerCase() === trimmedTag.toLowerCase())) {
      alert('This tag already exists')
      return
    }

    const updatedTags = [...tags, trimmedTag]
    setTags(updatedTags)
    await saveTags(updatedTags)
    setNewTag('')
    setIsAddingTag(false)
  }

  const handleRemoveTag = async (tagToRemove: string) => {
    if (!confirm(`Are you sure you want to remove the tag "${tagToRemove}"?`)) return

    const updatedTags = tags.filter(tag => tag !== tagToRemove)
    setTags(updatedTags)
    await saveTags(updatedTags)
  }

  const handleResetToDefaults = async () => {
    if (!confirm('Reset to default tags? This will remove all custom tags.')) return

    setTags(DEFAULT_TAGS)
    await saveTags(DEFAULT_TAGS)
  }

  const saveTags = async (updatedTags: string[]) => {
    setSaving(true)
    try {
      if (!db) {
        console.error('Firestore not initialized')
        return
      }

      await setDoc(doc(db, 'settings', 'communityTags'), {
        tags: updatedTags,
        lastUpdated: new Date()
      })
    } catch (error) {
      console.error('Error saving tags:', error)
      alert('Failed to save tags')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-foreground">Manage Community Tags</h2>
          <p className="text-sm text-muted-foreground mt-1">
            {tags.length} tag{tags.length !== 1 ? 's' : ''} available for students to use
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={fetchTags}
            disabled={loading}
            className="gap-2"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
          <Button
            variant="outline"
            onClick={handleResetToDefaults}
            disabled={saving}
            className="gap-2"
          >
            Reset to Defaults
          </Button>
        </div>
      </div>

      {/* Info Box */}
      <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
        <p className="text-sm text-foreground">
          These tags are used throughout the Community page for categorizing posts. Students can select up to 5 tags per post.
          Tags are searchable and help students discover relevant content.
        </p>
      </div>

      {/* Add New Tag */}
      <div className="bg-card border border-border rounded-lg p-4">
        <h3 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add New Tag
        </h3>

        {!isAddingTag ? (
          <Button
            variant="outline"
            onClick={() => setIsAddingTag(true)}
            className="gap-2"
          >
            <Plus className="w-4 h-4" />
            Add Tag
          </Button>
        ) : (
          <div className="flex gap-2">
            <input
              type="text"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAddTag()}
              placeholder="Enter tag name (e.g., Surgery)"
              className="flex-1 px-3 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              autoFocus
            />
            <Button
              onClick={handleAddTag}
              disabled={!newTag.trim() || saving}
              size="sm"
              className="gap-2"
            >
              <Check className="w-4 h-4" />
              Add
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                setNewTag('')
                setIsAddingTag(false)
              }}
              size="sm"
              className="gap-2"
            >
              <X className="w-4 h-4" />
              Cancel
            </Button>
          </div>
        )}
      </div>

      {/* Loading State */}
      {loading && (
        <div className="text-center py-12">
          <RefreshCw className="w-8 h-8 text-muted-foreground animate-spin mx-auto mb-3" />
          <p className="text-muted-foreground">Loading tags...</p>
        </div>
      )}

      {/* Tags List */}
      {!loading && (
        <div className="bg-card border border-border rounded-lg p-4">
          <h3 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
            <Tag className="w-4 h-4" />
            Current Tags ({tags.length})
          </h3>

          {tags.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-8">
              No tags available. Add some tags to get started.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {tags.map((tag) => (
                <div
                  key={tag}
                  className="flex items-center justify-between gap-2 px-3 py-2 bg-muted/30 rounded-lg border border-border group hover:border-muted-foreground/30 transition-colors"
                >
                  <span className="text-sm text-foreground">#{tag}</span>
                  <button
                    onClick={() => handleRemoveTag(tag)}
                    disabled={saving}
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-red-500 hover:text-red-600"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Saving Indicator */}
      {saving && (
        <div className="text-center text-sm text-muted-foreground">
          <RefreshCw className="w-4 h-4 inline animate-spin mr-2" />
          Saving changes...
        </div>
      )}
    </div>
  )
}
