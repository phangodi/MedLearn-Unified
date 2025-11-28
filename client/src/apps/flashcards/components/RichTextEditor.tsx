import { useRef, useEffect, type KeyboardEvent } from 'react'
import { Bold, Italic, List, ListOrdered, Code, Link as LinkIcon, Hash, Image as ImageIcon, Minus } from 'lucide-react'

interface RichTextEditorProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  onImageClick?: () => void
  className?: string
}

interface ToolbarButton {
  icon: React.ComponentType<{ className?: string }>
  label: string
  action: () => void
  shortcut?: string
}

export function RichTextEditor({
  value,
  onChange,
  placeholder = 'Enter markdown content...',
  onImageClick,
  className = ''
}: RichTextEditorProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  // Auto-resize textarea to fit content
  useEffect(() => {
    const textarea = textareaRef.current
    if (!textarea) return

    const adjustHeight = () => {
      textarea.style.height = 'auto'
      textarea.style.height = `${textarea.scrollHeight}px`
    }

    adjustHeight()
  }, [value])

  // Insert text at cursor position
  const insertText = (before: string, after = '', placeholder = '') => {
    const textarea = textareaRef.current
    if (!textarea) return

    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selectedText = value.substring(start, end)
    const textToInsert = selectedText || placeholder

    const newValue =
      value.substring(0, start) +
      before +
      textToInsert +
      after +
      value.substring(end)

    onChange(newValue)

    // Set cursor position after insertion
    setTimeout(() => {
      const newCursorPos = start + before.length + textToInsert.length
      textarea.focus()
      textarea.setSelectionRange(newCursorPos, newCursorPos)
    }, 0)
  }

  // Insert text at start of line(s)
  const insertLinePrefix = (prefix: string) => {
    const textarea = textareaRef.current
    if (!textarea) return

    const start = textarea.selectionStart
    const end = textarea.selectionEnd

    // Get start of first line and end of last line
    const lineStart = value.lastIndexOf('\n', start - 1) + 1
    const lineEnd = value.indexOf('\n', end)
    const lastLineEnd = lineEnd === -1 ? value.length : lineEnd

    const selectedLines = value.substring(lineStart, lastLineEnd)
    const lines = selectedLines.split('\n')

    // Toggle prefix if all lines already have it
    const allHavePrefix = lines.every(line => line.trim().startsWith(prefix))

    let newLines: string[]
    if (allHavePrefix) {
      // Remove prefix
      newLines = lines.map(line => {
        const trimmed = line.trimStart()
        if (trimmed.startsWith(prefix)) {
          return line.replace(prefix, '')
        }
        return line
      })
    } else {
      // Add prefix
      newLines = lines.map(line => {
        if (line.trim().length === 0) return line
        return prefix + line
      })
    }

    const newValue =
      value.substring(0, lineStart) +
      newLines.join('\n') +
      value.substring(lastLineEnd)

    onChange(newValue)

    // Restore selection
    setTimeout(() => {
      textarea.focus()
      textarea.setSelectionRange(lineStart, lineStart + newLines.join('\n').length)
    }, 0)
  }

  // Handle keyboard shortcuts
  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    // Ctrl/Cmd + B for bold
    if ((e.ctrlKey || e.metaKey) && e.key === 'b') {
      e.preventDefault()
      insertText('**', '**', 'bold text')
    }

    // Ctrl/Cmd + I for italic
    if ((e.ctrlKey || e.metaKey) && e.key === 'i') {
      e.preventDefault()
      insertText('*', '*', 'italic text')
    }

    // Tab to insert 4 spaces (not navigate away)
    if (e.key === 'Tab') {
      e.preventDefault()
      insertText('    ')
    }
  }

  const toolbarButtons: ToolbarButton[] = [
    {
      icon: Bold,
      label: 'Bold',
      action: () => insertText('**', '**', 'bold text'),
      shortcut: 'Ctrl+B'
    },
    {
      icon: Italic,
      label: 'Italic',
      action: () => insertText('*', '*', 'italic text'),
      shortcut: 'Ctrl+I'
    },
    {
      icon: Hash,
      label: 'Heading',
      action: () => insertLinePrefix('## ')
    },
    {
      icon: List,
      label: 'Bullet List',
      action: () => insertLinePrefix('- ')
    },
    {
      icon: ListOrdered,
      label: 'Numbered List',
      action: () => insertLinePrefix('1. ')
    },
    {
      icon: Code,
      label: 'Code Block',
      action: () => insertText('```\n', '\n```', 'code here')
    },
    {
      icon: LinkIcon,
      label: 'Link',
      action: () => insertText('[', '](https://)', 'link text')
    },
    {
      icon: Minus,
      label: 'LaTeX Math',
      action: () => insertText('$$', '$$', 'x^2 + y^2 = z^2')
    }
  ]

  return (
    <div className={`space-y-2 ${className}`}>
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1 p-2 bg-muted/30 rounded-lg border border-border">
        {toolbarButtons.map((button, index) => (
          <button
            key={index}
            onClick={button.action}
            title={`${button.label}${button.shortcut ? ` (${button.shortcut})` : ''}`}
            className="p-2 rounded hover:bg-background hover:shadow-sm transition-all duration-200 group"
            type="button"
          >
            <button.icon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
          </button>
        ))}

        {/* Divider */}
        <div className="w-px h-6 bg-border mx-1" />

        {/* Image upload button */}
        {onImageClick && (
          <button
            onClick={onImageClick}
            title="Upload Image"
            className="p-2 rounded hover:bg-background hover:shadow-sm transition-all duration-200 group"
            type="button"
          >
            <ImageIcon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
          </button>
        )}
      </div>

      {/* Textarea */}
      <div className="relative">
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          onDragEnter={(e) => {
            e.preventDefault()
            e.stopPropagation()
            // Show image uploader immediately when user drags files over editor
            if (e.dataTransfer.types.includes('Files') && onImageClick) {
              onImageClick()
            }
          }}
          onDragOver={(e) => {
            e.preventDefault()
            e.stopPropagation()
          }}
          onDragLeave={(e) => {
            e.preventDefault()
            e.stopPropagation()
          }}
          onDrop={(e) => {
            e.preventDefault()
            e.stopPropagation()
            // Upload window is already open from dragEnter
          }}
          placeholder={placeholder}
          className="
            w-full min-h-[200px] p-4 rounded-lg border border-border
            bg-background text-foreground font-mono text-sm
            focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary
            transition-all duration-200 resize-none
            placeholder:text-muted-foreground/50
          "
          style={{
            overflow: 'hidden'
          }}
        />

        {/* Character count */}
        <div className="absolute bottom-2 right-2 text-xs text-muted-foreground bg-background/80 px-2 py-1 rounded">
          {value.length} characters
        </div>
      </div>

      {/* Markdown tips */}
      <div className="text-xs text-muted-foreground space-y-1">
        <p className="font-medium">Markdown Tips:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-0.5">
          <p><code className="bg-muted px-1 rounded">**text**</code> for <strong>bold</strong></p>
          <p><code className="bg-muted px-1 rounded">*text*</code> for <em>italic</em></p>
          <p><code className="bg-muted px-1 rounded">## Heading</code> for headings</p>
          <p><code className="bg-muted px-1 rounded">- item</code> for lists</p>
          <p><code className="bg-muted px-1 rounded">$$x^2$$</code> for LaTeX math</p>
          <p><code className="bg-muted px-1 rounded">![alt](url)</code> for images</p>
        </div>
      </div>
    </div>
  )
}
