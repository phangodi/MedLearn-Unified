import { Node, mergeAttributes, InputRule } from '@tiptap/core'
import { ReactNodeViewRenderer, NodeViewWrapper } from '@tiptap/react'
import type { NodeViewProps } from '@tiptap/react'
import katex from 'katex'
import 'katex/dist/katex.min.css'
import { useEffect, useRef, useState } from 'react'

// Inline Math Node View Component
const InlineMathView = ({ node, updateAttributes, selected, extension }: NodeViewProps) => {
  const [error, setError] = useState<string | null>(null)
  const containerRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (containerRef.current) {
      try {
        const html = katex.renderToString(node.attrs.latex, {
          throwOnError: false,
          displayMode: false,
          output: 'html'
        })
        containerRef.current.innerHTML = html
        setError(null)
      } catch (err) {
        setError('Invalid LaTeX')
        containerRef.current.textContent = `$${node.attrs.latex}$`
      }
    }
  }, [node.attrs.latex])

  const handleClick = () => {
    if (extension.options.onEdit) {
      extension.options.onEdit(node.attrs.latex, false, (newLatex: string) => {
        updateAttributes({ latex: newLatex })
      })
    }
  }

  return (
    <NodeViewWrapper
      as="span"
      className={`inline-math ${selected ? 'ProseMirror-selectednode' : ''}`}
    >
      <span
        ref={containerRef}
        onClick={handleClick}
        className={`cursor-pointer px-1 rounded transition-colors ${
          selected ? 'bg-primary/20 ring-2 ring-primary' : 'hover:bg-muted'
        } ${error ? 'text-destructive' : ''}`}
        title={error || 'Click to edit'}
      />
    </NodeViewWrapper>
  )
}

// Block Math Node View Component
const BlockMathView = ({ node, updateAttributes, selected, extension }: NodeViewProps) => {
  const [error, setError] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current) {
      try {
        const html = katex.renderToString(node.attrs.latex, {
          throwOnError: false,
          displayMode: true,
          output: 'html'
        })
        containerRef.current.innerHTML = html
        setError(null)
      } catch (err) {
        setError('Invalid LaTeX')
        containerRef.current.textContent = `$$${node.attrs.latex}$$`
      }
    }
  }, [node.attrs.latex])

  const handleClick = () => {
    if (extension.options.onEdit) {
      extension.options.onEdit(node.attrs.latex, true, (newLatex: string) => {
        updateAttributes({ latex: newLatex })
      })
    }
  }

  return (
    <NodeViewWrapper className="block-math my-4">
      <div
        ref={containerRef}
        onClick={handleClick}
        className={`cursor-pointer p-4 rounded-lg text-center transition-colors ${
          selected ? 'bg-primary/20 ring-2 ring-primary' : 'hover:bg-muted'
        } ${error ? 'text-destructive' : ''}`}
        title={error || 'Click to edit'}
      />
    </NodeViewWrapper>
  )
}

// Inline Math Extension
export const MathInline = Node.create({
  name: 'mathInline',
  group: 'inline',
  inline: true,
  atom: true,

  addAttributes() {
    return {
      latex: {
        default: '',
        parseHTML: (element) => element.getAttribute('data-latex'),
        renderHTML: (attributes) => {
          return {
            'data-latex': attributes.latex
          }
        }
      }
    }
  },

  parseHTML() {
    return [
      {
        tag: 'span[data-type="math-inline"]'
      }
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['span', mergeAttributes(HTMLAttributes, { 'data-type': 'math-inline' })]
  },

  addNodeView() {
    return ReactNodeViewRenderer(InlineMathView)
  },

  addInputRules() {
    return [
      new InputRule({
        find: /\$([^$]+)\$/,
        handler: ({ range, match, commands }) => {
          const latex = match[1]

          if (!latex) return null

          commands.insertContentAt(range, [
            {
              type: this.name,
              attrs: { latex }
            }
          ])
        }
      })
    ]
  }
})

// Block Math Extension
export const MathBlock = Node.create({
  name: 'mathBlock',
  group: 'block',
  atom: true,

  addAttributes() {
    return {
      latex: {
        default: '',
        parseHTML: (element) => element.getAttribute('data-latex'),
        renderHTML: (attributes) => {
          return {
            'data-latex': attributes.latex
          }
        }
      }
    }
  },

  parseHTML() {
    return [
      {
        tag: 'div[data-type="math-block"]'
      }
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['div', mergeAttributes(HTMLAttributes, { 'data-type': 'math-block' })]
  },

  addNodeView() {
    return ReactNodeViewRenderer(BlockMathView)
  },

  addInputRules() {
    return [
      new InputRule({
        find: /^\$\$([^$]*)\$\$$/,
        handler: ({ range, match, commands }) => {
          const latex = match[1]

          if (!latex) return null

          commands.insertContentAt(range, [
            {
              type: this.name,
              attrs: { latex }
            }
          ])
        }
      })
    ]
  }
})

// Combined export for easy importing
export const MathExtensions = [MathInline, MathBlock]
