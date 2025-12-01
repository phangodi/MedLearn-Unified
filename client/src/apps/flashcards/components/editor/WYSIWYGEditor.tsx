import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Underline } from '@tiptap/extension-underline'
import { Subscript } from '@tiptap/extension-subscript'
import { Superscript } from '@tiptap/extension-superscript'
import { TextStyle } from '@tiptap/extension-text-style'
import { Color } from '@tiptap/extension-color'
import { Highlight } from '@tiptap/extension-highlight'
import { TextAlign } from '@tiptap/extension-text-align'
import { Link } from '@tiptap/extension-link'
import { Table } from '@tiptap/extension-table'
import { TableRow } from '@tiptap/extension-table-row'
import { TableCell } from '@tiptap/extension-table-cell'
import { TableHeader } from '@tiptap/extension-table-header'
import { EditorToolbar } from './EditorToolbar'
import { ImageExtension } from './ImageExtension'
import { ImageMenu } from './ImageMenu'
import { ImagePlaceholder } from './ImagePlaceholder'
import { MathInline, MathBlock } from './MathExtension'
import { useEffect } from 'react'

interface WYSIWYGEditorProps {
  content: string
  onChange: (html: string) => void
  placeholder?: string
  className?: string
  minHeight?: string
  onMathEdit?: (latex: string, isBlock: boolean, onSave: (newLatex: string) => void) => void
  onEditorReady?: (editor: any) => void
  onImageClick?: () => void
  onMathClick?: () => void
  cardId?: string // For organizing uploaded images from placeholders
}

export function WYSIWYGEditor({
  content,
  onChange,
  placeholder = 'Start typing...',
  className = '',
  minHeight = '200px',
  onMathEdit,
  onEditorReady,
  onImageClick,
  onMathClick,
  cardId
}: WYSIWYGEditorProps) {
  const editor = useEditor({
    // Prevent SSR hydration issues and React 18 StrictMode warnings
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3]
        }
      }),
      Underline,
      Subscript,
      Superscript,
      TextStyle,
      Color,
      Highlight.configure({
        multicolor: true
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph']
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-primary underline hover:text-primary/80 transition-colors'
        }
      }),
      Table.configure({
        resizable: true
      }),
      TableRow,
      TableHeader.configure({
        HTMLAttributes: {
          class: 'border border-border bg-muted/50 px-3 py-2 text-left font-medium'
        }
      }),
      TableCell.configure({
        HTMLAttributes: {
          class: 'border border-border px-3 py-2'
        }
      }),
      ImageExtension,
      MathInline.configure({
        onEdit: onMathEdit
      }),
      MathBlock.configure({
        onEdit: onMathEdit
      }),
      ImagePlaceholder.configure({
        cardId: cardId
      })
    ],
    content,
    editorProps: {
      attributes: {
        class: `prose prose-sm sm:prose-base dark:prose-invert max-w-none focus:outline-none px-4 py-3`,
        style: `min-height: ${minHeight}`
      }
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    }
  })

  // Update editor content when prop changes (for external updates)
  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content)
    }
  }, [content, editor])

  // Notify parent when editor is ready
  useEffect(() => {
    if (editor && onEditorReady) {
      onEditorReady(editor)
    }
  }, [editor, onEditorReady])

  // Note: useEditor hook handles cleanup internally, no manual destroy needed

  if (!editor) {
    return null
  }

  return (
    <>
      <style>{`
        /* WYSIWYG Editor Content Styles */
        .wysiwyg-content h1 {
          font-size: 2em;
          font-weight: bold;
          margin: 0.67em 0;
          line-height: 1.2;
        }
        .wysiwyg-content h2 {
          font-size: 1.5em;
          font-weight: bold;
          margin: 0.75em 0;
          line-height: 1.3;
        }
        .wysiwyg-content h3 {
          font-size: 1.25em;
          font-weight: bold;
          margin: 0.83em 0;
          line-height: 1.4;
        }
        .wysiwyg-content ul {
          list-style-type: disc;
          padding-left: 1.5em;
          margin: 0.5em 0;
        }
        .wysiwyg-content ol {
          list-style-type: decimal;
          padding-left: 1.5em;
          margin: 0.5em 0;
        }
        .wysiwyg-content li {
          margin: 0.25em 0;
        }
        .wysiwyg-content li > p {
          margin: 0;
        }
        .wysiwyg-content table {
          border-collapse: collapse;
          width: 100%;
          margin: 0.5em 0;
        }
        .wysiwyg-content th,
        .wysiwyg-content td {
          border: 1px solid hsl(var(--border));
          padding: 0.5em;
        }
        .wysiwyg-content th {
          background-color: hsl(var(--muted) / 0.5);
          font-weight: 600;
        }
        .wysiwyg-content code {
          background-color: hsl(var(--muted));
          padding: 0.1em 0.3em;
          border-radius: 3px;
          font-family: monospace;
          font-size: 0.9em;
        }
        .wysiwyg-content pre {
          background-color: hsl(var(--muted));
          padding: 1em;
          border-radius: 5px;
          overflow-x: auto;
          margin: 0.5em 0;
        }
        .wysiwyg-content pre code {
          background-color: transparent;
          padding: 0;
        }
        .wysiwyg-content blockquote {
          border-left: 3px solid hsl(var(--border));
          padding-left: 1em;
          margin: 0.5em 0;
          color: hsl(var(--muted-foreground));
          font-style: italic;
        }
        .wysiwyg-content p {
          margin: 0.5em 0;
        }
        .wysiwyg-content a {
          color: hsl(var(--primary));
          text-decoration: underline;
        }
        .wysiwyg-content a:hover {
          opacity: 0.8;
        }

        /* Dark mode adjustments */
        .dark .wysiwyg-content code {
          background-color: hsl(var(--muted));
        }
        .dark .wysiwyg-content pre {
          background-color: hsl(var(--muted));
        }
        .dark .wysiwyg-content th,
        .dark .wysiwyg-content td {
          border-color: hsl(var(--border));
        }
        .dark .wysiwyg-content th {
          background-color: hsl(var(--muted) / 0.5);
        }
      `}</style>

      <div className={`space-y-2 ${className}`}>
        {/* Toolbar */}
        <EditorToolbar
          editor={editor}
          onImageClick={onImageClick}
          onMathClick={onMathClick}
        />

        {/* Editor */}
        <div
          className={`
            rounded-lg border border-border bg-background
            transition-all duration-200
            ${editor?.isFocused ? 'ring-2 ring-primary/20 border-primary' : ''}
          `}
        >
          <EditorContent
            editor={editor}
            placeholder={placeholder}
            className="wysiwyg-content"
          />
          {/* Image bubble menu - shows alignment/size controls when image is selected */}
          <ImageMenu editor={editor} />
        </div>

        {/* Character count */}
        {editor && (
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>
              {editor.storage.characterCount?.characters() || editor.getText().length} characters
            </span>
            <span>
              {editor.storage.characterCount?.words() || editor.getText().split(/\s+/).filter(Boolean).length} words
            </span>
          </div>
        )}
      </div>
    </>
  )
}

// Export a type for the editor instance
export type { Editor } from '@tiptap/react'
