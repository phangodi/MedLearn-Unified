import { useState, useRef, useEffect } from 'react'
import type { Editor } from '@tiptap/react'
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Subscript,
  Superscript,
  List,
  ListOrdered,
  Palette,
  Highlighter,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Link as LinkIcon,
  Code,
  Image,
  ImagePlus,
  Sigma,
  ChevronDown,
  Undo2,
  Redo2
} from 'lucide-react'

interface EditorToolbarProps {
  editor: Editor | null
  onImageClick?: () => void
  onMathClick?: () => void
}

const PRESET_COLORS = [
  { label: 'Black', value: '#000000' },
  { label: 'Red', value: '#ef4444' },
  { label: 'Blue', value: '#3b82f6' },
  { label: 'Green', value: '#22c55e' },
  { label: 'Orange', value: '#f97316' },
  { label: 'Purple', value: '#a855f7' },
  { label: 'Pink', value: '#ec4899' },
  { label: 'Gray', value: '#6b7280' }
]

const PRESET_HIGHLIGHTS = [
  { label: 'Yellow', value: '#fef08a' },
  { label: 'Green', value: '#bbf7d0' },
  { label: 'Blue', value: '#bfdbfe' },
  { label: 'Pink', value: '#fbcfe8' },
  { label: 'Orange', value: '#fed7aa' },
  { label: 'Purple', value: '#e9d5ff' },
  { label: 'Gray', value: '#e5e7eb' },
  { label: 'Red', value: '#fecaca' }
]

export function EditorToolbar({ editor, onImageClick, onMathClick }: EditorToolbarProps) {
  const [showColorPicker, setShowColorPicker] = useState(false)
  const [showHighlightPicker, setShowHighlightPicker] = useState(false)
  const [showHeadingMenu, setShowHeadingMenu] = useState(false)
  const colorPickerRef = useRef<HTMLDivElement>(null)
  const highlightPickerRef = useRef<HTMLDivElement>(null)
  const headingMenuRef = useRef<HTMLDivElement>(null)

  // Close color picker when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (colorPickerRef.current && !colorPickerRef.current.contains(event.target as Node)) {
        setShowColorPicker(false)
      }
      if (highlightPickerRef.current && !highlightPickerRef.current.contains(event.target as Node)) {
        setShowHighlightPicker(false)
      }
      if (headingMenuRef.current && !headingMenuRef.current.contains(event.target as Node)) {
        setShowHeadingMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  if (!editor) {
    return null
  }

  const setLink = () => {
    const previousUrl = editor.getAttributes('link').href
    const url = window.prompt('Enter URL:', previousUrl)

    // cancelled
    if (url === null) {
      return
    }

    // empty
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run()
      return
    }

    // update link
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
  }

  return (
    <div className="flex flex-wrap items-center gap-1 p-2 bg-muted/30 rounded-lg border border-border">
      {/* Undo/Redo */}
      <button
        onClick={() => editor?.chain().focus().undo().run()}
        disabled={!editor?.can().undo()}
        className={`p-2 rounded hover:bg-background hover:shadow-sm transition-all duration-200 group ${
          !editor?.can().undo() ? 'opacity-40 cursor-not-allowed' : ''
        }`}
        title="Undo (Ctrl+Z)"
        type="button"
      >
        <Undo2 className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
      </button>

      <button
        onClick={() => editor?.chain().focus().redo().run()}
        disabled={!editor?.can().redo()}
        className={`p-2 rounded hover:bg-background hover:shadow-sm transition-all duration-200 group ${
          !editor?.can().redo() ? 'opacity-40 cursor-not-allowed' : ''
        }`}
        title="Redo (Ctrl+Shift+Z)"
        type="button"
      >
        <Redo2 className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
      </button>

      {/* Separator */}
      <div className="w-px h-6 bg-border mx-1" />

      {/* Text formatting */}
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`p-2 rounded hover:bg-background hover:shadow-sm transition-all duration-200 group ${
          editor.isActive('bold') ? 'bg-background shadow-sm' : ''
        }`}
        title="Bold (Ctrl+B)"
        type="button"
      >
        <Bold className={`w-4 h-4 transition-colors ${
          editor.isActive('bold') ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'
        }`} />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`p-2 rounded hover:bg-background hover:shadow-sm transition-all duration-200 group ${
          editor.isActive('italic') ? 'bg-background shadow-sm' : ''
        }`}
        title="Italic (Ctrl+I)"
        type="button"
      >
        <Italic className={`w-4 h-4 transition-colors ${
          editor.isActive('italic') ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'
        }`} />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={`p-2 rounded hover:bg-background hover:shadow-sm transition-all duration-200 group ${
          editor.isActive('underline') ? 'bg-background shadow-sm' : ''
        }`}
        title="Underline (Ctrl+U)"
        type="button"
      >
        <Underline className={`w-4 h-4 transition-colors ${
          editor.isActive('underline') ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'
        }`} />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={`p-2 rounded hover:bg-background hover:shadow-sm transition-all duration-200 group ${
          editor.isActive('strike') ? 'bg-background shadow-sm' : ''
        }`}
        title="Strikethrough"
        type="button"
      >
        <Strikethrough className={`w-4 h-4 transition-colors ${
          editor.isActive('strike') ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'
        }`} />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleSubscript().run()}
        className={`p-2 rounded hover:bg-background hover:shadow-sm transition-all duration-200 group ${
          editor.isActive('subscript') ? 'bg-background shadow-sm' : ''
        }`}
        title="Subscript"
        type="button"
      >
        <Subscript className={`w-4 h-4 transition-colors ${
          editor.isActive('subscript') ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'
        }`} />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleSuperscript().run()}
        className={`p-2 rounded hover:bg-background hover:shadow-sm transition-all duration-200 group ${
          editor.isActive('superscript') ? 'bg-background shadow-sm' : ''
        }`}
        title="Superscript"
        type="button"
      >
        <Superscript className={`w-4 h-4 transition-colors ${
          editor.isActive('superscript') ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'
        }`} />
      </button>

      {/* Separator */}
      <div className="w-px h-6 bg-border mx-1" />

      {/* Heading dropdown */}
      <div className="relative" ref={headingMenuRef}>
        <button
          onClick={() => setShowHeadingMenu(!showHeadingMenu)}
          className={`p-2 rounded hover:bg-background hover:shadow-sm transition-all duration-200 group flex items-center gap-1 ${
            editor.isActive('heading') ? 'bg-background shadow-sm' : ''
          }`}
          title="Heading"
          type="button"
        >
          <span className={`text-sm font-medium transition-colors ${
            editor.isActive('heading') ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'
          }`}>
            {editor.isActive('heading', { level: 1 }) ? 'H1' :
             editor.isActive('heading', { level: 2 }) ? 'H2' :
             editor.isActive('heading', { level: 3 }) ? 'H3' : 'N'}
          </span>
          <ChevronDown className={`w-3 h-3 transition-colors ${
            editor.isActive('heading') ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'
          }`} />
        </button>

        {showHeadingMenu && (
          <div className="absolute top-full left-0 mt-1 bg-background border border-border rounded-lg shadow-lg p-1 z-50 min-w-[120px]">
            <button
              onClick={() => {
                editor.chain().focus().setParagraph().run()
                setShowHeadingMenu(false)
              }}
              className={`w-full text-left px-3 py-1.5 rounded hover:bg-muted transition-colors text-sm ${
                editor.isActive('paragraph') ? 'bg-muted text-primary' : 'text-foreground'
              }`}
              type="button"
            >
              Normal
            </button>
            <button
              onClick={() => {
                editor.chain().focus().toggleHeading({ level: 1 }).run()
                setShowHeadingMenu(false)
              }}
              className={`w-full text-left px-3 py-1.5 rounded hover:bg-muted transition-colors text-lg font-bold ${
                editor.isActive('heading', { level: 1 }) ? 'bg-muted text-primary' : 'text-foreground'
              }`}
              type="button"
            >
              Heading 1
            </button>
            <button
              onClick={() => {
                editor.chain().focus().toggleHeading({ level: 2 }).run()
                setShowHeadingMenu(false)
              }}
              className={`w-full text-left px-3 py-1.5 rounded hover:bg-muted transition-colors text-base font-bold ${
                editor.isActive('heading', { level: 2 }) ? 'bg-muted text-primary' : 'text-foreground'
              }`}
              type="button"
            >
              Heading 2
            </button>
            <button
              onClick={() => {
                editor.chain().focus().toggleHeading({ level: 3 }).run()
                setShowHeadingMenu(false)
              }}
              className={`w-full text-left px-3 py-1.5 rounded hover:bg-muted transition-colors text-sm font-bold ${
                editor.isActive('heading', { level: 3 }) ? 'bg-muted text-primary' : 'text-foreground'
              }`}
              type="button"
            >
              Heading 3
            </button>
          </div>
        )}
      </div>

      {/* Separator */}
      <div className="w-px h-6 bg-border mx-1" />

      {/* Lists */}
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`p-2 rounded hover:bg-background hover:shadow-sm transition-all duration-200 group ${
          editor.isActive('bulletList') ? 'bg-background shadow-sm' : ''
        }`}
        title="Bullet List"
        type="button"
      >
        <List className={`w-4 h-4 transition-colors ${
          editor.isActive('bulletList') ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'
        }`} />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`p-2 rounded hover:bg-background hover:shadow-sm transition-all duration-200 group ${
          editor.isActive('orderedList') ? 'bg-background shadow-sm' : ''
        }`}
        title="Numbered List"
        type="button"
      >
        <ListOrdered className={`w-4 h-4 transition-colors ${
          editor.isActive('orderedList') ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'
        }`} />
      </button>

      {/* Separator */}
      <div className="w-px h-6 bg-border mx-1" />

      {/* Text color */}
      <div className="relative" ref={colorPickerRef}>
        <button
          onClick={() => setShowColorPicker(!showColorPicker)}
          className="p-2 rounded hover:bg-background hover:shadow-sm transition-all duration-200 group"
          title="Text Color"
          type="button"
        >
          <Palette className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
        </button>

        {showColorPicker && (
          <div className="absolute top-full left-0 mt-1 p-3 bg-background border border-border rounded-lg shadow-lg z-50 min-w-[160px]">
            <div className="grid grid-cols-4 gap-2">
              {PRESET_COLORS.map((color) => (
                <button
                  key={color.value}
                  onClick={() => {
                    editor.chain().focus().setColor(color.value).run()
                    setShowColorPicker(false)
                  }}
                  className="w-7 h-7 rounded border border-border hover:scale-110 transition-transform"
                  style={{ backgroundColor: color.value }}
                  title={color.label}
                  type="button"
                />
              ))}
            </div>
            <button
              onClick={() => {
                editor.chain().focus().unsetColor().run()
                setShowColorPicker(false)
              }}
              className="w-full mt-2 px-2 py-1 text-xs text-muted-foreground hover:text-foreground border border-border rounded hover:bg-muted transition-colors"
              type="button"
            >
              Clear
            </button>
          </div>
        )}
      </div>

      {/* Highlight color */}
      <div className="relative" ref={highlightPickerRef}>
        <button
          onClick={() => setShowHighlightPicker(!showHighlightPicker)}
          className="p-2 rounded hover:bg-background hover:shadow-sm transition-all duration-200 group"
          title="Highlight"
          type="button"
        >
          <Highlighter className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
        </button>

        {showHighlightPicker && (
          <div className="absolute top-full left-0 mt-1 p-3 bg-background border border-border rounded-lg shadow-lg z-50 min-w-[160px]">
            <div className="grid grid-cols-4 gap-2">
              {PRESET_HIGHLIGHTS.map((color) => (
                <button
                  key={color.value}
                  onClick={() => {
                    editor.chain().focus().toggleHighlight({ color: color.value }).run()
                    setShowHighlightPicker(false)
                  }}
                  className="w-7 h-7 rounded border border-border hover:scale-110 transition-transform"
                  style={{ backgroundColor: color.value }}
                  title={color.label}
                  type="button"
                />
              ))}
            </div>
            <button
              onClick={() => {
                editor.chain().focus().unsetHighlight().run()
                setShowHighlightPicker(false)
              }}
              className="w-full mt-2 px-2 py-1 text-xs text-muted-foreground hover:text-foreground border border-border rounded hover:bg-muted transition-colors"
              type="button"
            >
              Clear
            </button>
          </div>
        )}
      </div>

      {/* Separator */}
      <div className="w-px h-6 bg-border mx-1" />

      {/* Text alignment */}
      <button
        onClick={() => editor.chain().focus().setTextAlign('left').run()}
        className={`p-2 rounded hover:bg-background hover:shadow-sm transition-all duration-200 group ${
          editor.isActive({ textAlign: 'left' }) ? 'bg-background shadow-sm' : ''
        }`}
        title="Align Left"
        type="button"
      >
        <AlignLeft className={`w-4 h-4 transition-colors ${
          editor.isActive({ textAlign: 'left' }) ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'
        }`} />
      </button>

      <button
        onClick={() => editor.chain().focus().setTextAlign('center').run()}
        className={`p-2 rounded hover:bg-background hover:shadow-sm transition-all duration-200 group ${
          editor.isActive({ textAlign: 'center' }) ? 'bg-background shadow-sm' : ''
        }`}
        title="Align Center"
        type="button"
      >
        <AlignCenter className={`w-4 h-4 transition-colors ${
          editor.isActive({ textAlign: 'center' }) ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'
        }`} />
      </button>

      <button
        onClick={() => editor.chain().focus().setTextAlign('right').run()}
        className={`p-2 rounded hover:bg-background hover:shadow-sm transition-all duration-200 group ${
          editor.isActive({ textAlign: 'right' }) ? 'bg-background shadow-sm' : ''
        }`}
        title="Align Right"
        type="button"
      >
        <AlignRight className={`w-4 h-4 transition-colors ${
          editor.isActive({ textAlign: 'right' }) ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'
        }`} />
      </button>

      <button
        onClick={() => editor.chain().focus().setTextAlign('justify').run()}
        className={`p-2 rounded hover:bg-background hover:shadow-sm transition-all duration-200 group ${
          editor.isActive({ textAlign: 'justify' }) ? 'bg-background shadow-sm' : ''
        }`}
        title="Align Justify"
        type="button"
      >
        <AlignJustify className={`w-4 h-4 transition-colors ${
          editor.isActive({ textAlign: 'justify' }) ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'
        }`} />
      </button>

      {/* Separator */}
      <div className="w-px h-6 bg-border mx-1" />

      {/* Link */}
      <button
        onClick={setLink}
        className={`p-2 rounded hover:bg-background hover:shadow-sm transition-all duration-200 group ${
          editor.isActive('link') ? 'bg-background shadow-sm' : ''
        }`}
        title="Link"
        type="button"
      >
        <LinkIcon className={`w-4 h-4 transition-colors ${
          editor.isActive('link') ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'
        }`} />
      </button>

      {/* Code */}
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        className={`p-2 rounded hover:bg-background hover:shadow-sm transition-all duration-200 group ${
          editor.isActive('code') ? 'bg-background shadow-sm' : ''
        }`}
        title="Inline Code"
        type="button"
      >
        <Code className={`w-4 h-4 transition-colors ${
          editor.isActive('code') ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'
        }`} />
      </button>

      {/* Separator */}
      <div className="w-px h-6 bg-border mx-1" />

      {/* Image */}
      <button
        onClick={onImageClick}
        className="p-2 rounded hover:bg-background hover:shadow-sm transition-all duration-200 group"
        title="Insert Image"
        type="button"
        disabled={!onImageClick}
      >
        <Image className={`w-4 h-4 transition-colors ${
          !onImageClick ? 'text-muted-foreground/50' : 'text-muted-foreground group-hover:text-foreground'
        }`} />
      </button>

      {/* Image Placeholder */}
      <button
        onClick={() => {
          // Insert image placeholder directly using the editor command
          // @ts-ignore - setImagePlaceholder is added by ImagePlaceholder extension
          editor?.chain().focus().setImagePlaceholder().run()
        }}
        className="p-2 rounded hover:bg-background hover:shadow-sm transition-all duration-200 group"
        title="Insert Image Placeholder"
        type="button"
      >
        <ImagePlus className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
      </button>

      {/* Math */}
      <button
        onClick={() => {
          if (onMathClick) {
            onMathClick()
          }
        }}
        className="p-2 rounded hover:bg-background hover:shadow-sm transition-all duration-200 group"
        title="Insert Math Formula"
        type="button"
        disabled={!onMathClick}
      >
        <Sigma className={`w-4 h-4 transition-colors ${
          !onMathClick ? 'text-muted-foreground/50' : 'text-muted-foreground group-hover:text-foreground'
        }`} />
      </button>
    </div>
  )
}
