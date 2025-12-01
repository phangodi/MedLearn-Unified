import { useEffect, useRef, useState } from 'react'
import katex from 'katex'
import 'katex/dist/katex.min.css'
import { X } from 'lucide-react'

interface MathModalProps {
  isOpen: boolean
  onClose: () => void
  initialLatex: string
  onSave: (latex: string) => void
  isBlock?: boolean
}

// Common LaTeX symbols for quick insertion
const QUICK_SYMBOLS = [
  { symbol: '\\int', display: '∫', label: 'Integral' },
  { symbol: '\\sum', display: '∑', label: 'Sum' },
  { symbol: '\\sqrt{}', display: '√', label: 'Square root' },
  { symbol: '\\infty', display: '∞', label: 'Infinity' },
  { symbol: '\\pi', display: 'π', label: 'Pi' },
  { symbol: '\\pm', display: '±', label: 'Plus-minus' },
  { symbol: '\\times', display: '×', label: 'Times' },
  { symbol: '\\div', display: '÷', label: 'Divide' },
  { symbol: '\\leq', display: '≤', label: 'Less than or equal' },
  { symbol: '\\geq', display: '≥', label: 'Greater than or equal' },
  { symbol: '\\neq', display: '≠', label: 'Not equal' },
  { symbol: '\\alpha', display: 'α', label: 'Alpha' },
  { symbol: '\\beta', display: 'β', label: 'Beta' },
  { symbol: '\\gamma', display: 'γ', label: 'Gamma' },
  { symbol: '\\theta', display: 'θ', label: 'Theta' },
  { symbol: '\\frac{}{}', display: '⁄', label: 'Fraction' }
]

export function MathModal({ isOpen, onClose, initialLatex, onSave, isBlock = false }: MathModalProps) {
  const [latex, setLatex] = useState(initialLatex)
  const [preview, setPreview] = useState('')
  const [error, setError] = useState<string | null>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const previewRef = useRef<HTMLDivElement>(null)

  // Initialize latex when modal opens
  useEffect(() => {
    if (isOpen) {
      setLatex(initialLatex)
      textareaRef.current?.focus()
    }
  }, [isOpen, initialLatex])

  // Update preview when latex changes
  useEffect(() => {
    if (!latex.trim()) {
      setPreview('')
      setError(null)
      return
    }

    try {
      const html = katex.renderToString(latex, {
        throwOnError: true,
        displayMode: isBlock,
        output: 'html'
      })
      setPreview(html)
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid LaTeX syntax')
      setPreview('')
    }
  }, [latex, isBlock])

  const handleSave = () => {
    if (error) return
    onSave(latex)
    onClose()
  }

  const handleCancel = () => {
    setLatex(initialLatex)
    setError(null)
    onClose()
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleCancel()
    } else if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault()
      if (!error) {
        handleSave()
      }
    }
  }

  const insertSymbol = (symbol: string) => {
    const textarea = textareaRef.current
    if (!textarea) return

    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const newValue = latex.substring(0, start) + symbol + latex.substring(end)

    setLatex(newValue)

    // Move cursor after inserted symbol, or inside braces if present
    setTimeout(() => {
      const cursorPos = symbol.includes('{}') ? start + symbol.indexOf('{}') + 1 : start + symbol.length
      textarea.setSelectionRange(cursorPos, cursorPos)
      textarea.focus()
    }, 0)
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-50 transition-opacity"
        onClick={handleCancel}
      />

      {/* Modal */}
      <div
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-background border border-border rounded-lg shadow-xl"
        onKeyDown={handleKeyDown}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="text-lg font-semibold">
            Edit {isBlock ? 'Block' : 'Inline'} Formula
          </h2>
          <button
            onClick={handleCancel}
            className="p-1 rounded-md hover:bg-muted transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* LaTeX Input */}
          <div>
            <label className="block text-sm font-medium mb-2">
              LaTeX Code:
            </label>
            <textarea
              ref={textareaRef}
              value={latex}
              onChange={(e) => setLatex(e.target.value)}
              className="w-full min-h-[100px] p-3 bg-muted border border-border rounded-md font-mono text-sm resize-y focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter LaTeX code..."
              spellCheck={false}
            />
            <p className="text-xs text-muted-foreground mt-1">
              Tip: Use Ctrl+Enter to save, Escape to cancel
            </p>
          </div>

          {/* Quick Symbols */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Quick Symbols:
            </label>
            <div className="flex flex-wrap gap-2">
              {QUICK_SYMBOLS.map((item) => (
                <button
                  key={item.symbol}
                  onClick={() => insertSymbol(item.symbol)}
                  className="px-3 py-1.5 bg-muted hover:bg-muted/80 border border-border rounded-md text-sm font-medium transition-colors"
                  title={item.label}
                  type="button"
                >
                  {item.display}
                </button>
              ))}
            </div>
          </div>

          {/* Preview */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Preview:
            </label>
            <div
              className={`min-h-[100px] p-4 bg-muted border border-border rounded-md ${
                isBlock ? 'text-center' : ''
              }`}
            >
              {error ? (
                <div className="text-destructive text-sm">
                  <p className="font-semibold mb-1">Error:</p>
                  <p className="font-mono">{error}</p>
                </div>
              ) : preview ? (
                <div
                  ref={previewRef}
                  dangerouslySetInnerHTML={{ __html: preview }}
                  className="math-preview"
                />
              ) : (
                <p className="text-muted-foreground text-sm italic">
                  Preview will appear here...
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 p-4 border-t border-border">
          <button
            onClick={handleCancel}
            className="px-4 py-2 bg-muted hover:bg-muted/80 rounded-md text-sm font-medium transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={!!error || !latex.trim()}
            className="px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-md text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Save
          </button>
        </div>
      </div>
    </>
  )
}
