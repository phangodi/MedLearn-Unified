import { Node, mergeAttributes } from '@tiptap/core'
import type { RawCommands } from '@tiptap/core'
import { ReactNodeViewRenderer, NodeViewWrapper } from '@tiptap/react'
import type { NodeViewProps } from '@tiptap/react'
import { useRef, useState, useCallback, useEffect } from 'react'
import { GripVertical } from 'lucide-react'

// Type for alignment options
type ImageAlign = 'left' | 'center' | 'right'

// Extend the TipTap commands
declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    image: {
      setImage: (options: { src: string; alt?: string; title?: string; width?: number; align?: ImageAlign }) => ReturnType
      updateImage: (attrs: Record<string, unknown>) => ReturnType
    }
  }
}

// Custom Image Component with resize handles
function ImageComponent({ node, updateAttributes, selected }: NodeViewProps) {
  const imgRef = useRef<HTMLImageElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isResizing, setIsResizing] = useState(false)
  const [currentHandle, setCurrentHandle] = useState<string | null>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [currentSize, setCurrentSize] = useState({ width: 0, height: 0 })
  const startPos = useRef({ x: 0, y: 0, width: 0, height: 0 })
  const aspectRatio = useRef(1)

  const { src, alt, title, width, align = 'center', margin = 16 } = node.attrs

  // Calculate and store aspect ratio on image load
  const handleImageLoad = useCallback(() => {
    if (imgRef.current) {
      aspectRatio.current = imgRef.current.naturalWidth / imgRef.current.naturalHeight
    }
  }, [])

  // Start resize on handle mousedown
  const handleResizeStart = useCallback((e: React.MouseEvent, handle: string) => {
    e.preventDefault()
    e.stopPropagation()

    if (!imgRef.current || !containerRef.current) return

    setIsResizing(true)
    setCurrentHandle(handle)

    const rect = containerRef.current.getBoundingClientRect()
    startPos.current = {
      x: e.clientX,
      y: e.clientY,
      width: rect.width,
      height: rect.height
    }

    // Store aspect ratio
    if (imgRef.current.naturalWidth && imgRef.current.naturalHeight) {
      aspectRatio.current = imgRef.current.naturalWidth / imgRef.current.naturalHeight
    }
  }, [])

  // Handle resize drag
  useEffect(() => {
    if (!isResizing || !currentHandle) return

    const handleMouseMove = (e: MouseEvent) => {
      e.preventDefault()

      if (!containerRef.current) return

      // Track mouse position for tooltip
      setMousePos({ x: e.clientX, y: e.clientY })

      const deltaX = e.clientX - startPos.current.x
      const deltaY = e.clientY - startPos.current.y

      let newWidth = startPos.current.width
      let newHeight = startPos.current.height

      // Calculate new dimensions based on handle
      // For corners, maintain aspect ratio
      // For sides, allow free resize
      switch (currentHandle) {
        // Corner handles - maintain aspect ratio
        case 'nw':
        case 'ne':
        case 'sw':
        case 'se':
          if (currentHandle === 'nw' || currentHandle === 'sw') {
            newWidth = startPos.current.width - deltaX
          } else {
            newWidth = startPos.current.width + deltaX
          }
          newHeight = newWidth / aspectRatio.current
          break
        // Side handles - free resize
        case 'n':
          newHeight = startPos.current.height - deltaY
          break
        case 's':
          newHeight = startPos.current.height + deltaY
          break
        case 'e':
          newWidth = startPos.current.width + deltaX
          break
        case 'w':
          newWidth = startPos.current.width - deltaX
          break
      }

      // Set minimum width
      const minWidth = 50
      const minHeight = 50
      newWidth = Math.max(minWidth, newWidth)
      newHeight = Math.max(minHeight, newHeight)

      // Update current size for tooltip
      setCurrentSize({ width: Math.round(newWidth), height: Math.round(newHeight) })

      // Apply transform for smooth visual feedback
      containerRef.current.style.width = `${newWidth}px`
      containerRef.current.style.height = `${newHeight}px`
    }

    const handleMouseUp = () => {
      setIsResizing(false)
      setCurrentHandle(null)

      // Apply final width to node attributes
      if (containerRef.current) {
        const finalWidth = parseInt(containerRef.current.style.width)
        updateAttributes({ width: finalWidth })

        // Reset inline styles
        containerRef.current.style.width = ''
        containerRef.current.style.height = ''
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isResizing, currentHandle, updateAttributes])

  // Container styles based on alignment and margin
  const getContainerStyles = (): React.CSSProperties => {
    const baseStyles: React.CSSProperties = {
      position: 'relative',
      display: 'inline-block',
      maxWidth: '100%',
      width: width ? `${width}px` : 'auto',
      userSelect: 'none'
    }

    const marginPx = `${margin}px`

    switch (align) {
      case 'left':
        return {
          ...baseStyles,
          float: 'left',
          marginRight: marginPx,
          marginBottom: marginPx,
          clear: 'left'
        }
      case 'right':
        return {
          ...baseStyles,
          float: 'right',
          marginLeft: marginPx,
          marginBottom: marginPx,
          clear: 'right'
        }
      case 'center':
      default:
        return {
          ...baseStyles,
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: marginPx,
          clear: 'both'
        }
    }
  }

  // Invisible resize zones - cursor-only approach (no visible handles)
  const getResizeZoneStyle = (position: string): React.CSSProperties => {
    const base: React.CSSProperties = {
      position: 'absolute',
      background: 'transparent',
      zIndex: 10,
      pointerEvents: 'auto'
    }

    switch (position) {
      // Corners - larger hit areas at corners
      case 'nw':
        return { ...base, top: '-8px', left: '-8px', width: '24px', height: '24px', cursor: 'nwse-resize' }
      case 'ne':
        return { ...base, top: '-8px', right: '-8px', width: '24px', height: '24px', cursor: 'nesw-resize' }
      case 'sw':
        return { ...base, bottom: '-8px', left: '-8px', width: '24px', height: '24px', cursor: 'nesw-resize' }
      case 'se':
        return { ...base, bottom: '-8px', right: '-8px', width: '24px', height: '24px', cursor: 'nwse-resize' }
      // Sides - edge zones
      case 'n':
        return { ...base, top: '-8px', left: '24px', right: '24px', height: '16px', cursor: 'ns-resize' }
      case 's':
        return { ...base, bottom: '-8px', left: '24px', right: '24px', height: '16px', cursor: 'ns-resize' }
      case 'e':
        return { ...base, right: '-8px', top: '24px', bottom: '24px', width: '16px', cursor: 'ew-resize' }
      case 'w':
        return { ...base, left: '-8px', top: '24px', bottom: '24px', width: '16px', cursor: 'ew-resize' }
      default:
        return base
    }
  }

  return (
    <NodeViewWrapper
      className="image-wrapper"
      style={{ overflow: 'visible', position: 'relative' }}
      draggable={true}
      data-drag-handle=""
    >
      <div
        ref={containerRef}
        style={getContainerStyles()}
        className={`
          image-container
          ${selected ? 'ring-2 ring-primary ring-offset-2 ring-offset-background' : ''}
          ${isResizing ? 'cursor-nwse-resize' : ''}
          transition-shadow duration-200
          rounded-lg overflow-visible
        `}
        data-align={align}
      >
        <img
          ref={imgRef}
          src={src}
          alt={alt || ''}
          title={title || ''}
          onLoad={handleImageLoad}
          draggable={false}
          className="w-full h-auto select-none rounded-lg"
          style={{
            display: 'block',
            pointerEvents: 'none'
          }}
        />

        {/* Drag handle - show on selection for repositioning */}
        {selected && (
          <div
            contentEditable={false}
            draggable={true}
            data-drag-handle=""
            className="absolute left-1/2 -translate-x-1/2 cursor-grab active:cursor-grabbing select-none"
            style={{
              top: '-28px',
              backgroundColor: '#3b82f6',
              borderRadius: '6px',
              padding: '4px 10px',
              display: 'flex',
              alignItems: 'center',
              gap: '2px',
              zIndex: 50,
              boxShadow: '0 2px 8px rgba(0,0,0,0.25)'
            }}
            title="Drag to move"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <GripVertical className="w-4 h-4 text-white" />
            <span className="text-[10px] text-white font-medium">DRAG</span>
          </div>
        )}

        {/* Invisible resize zones - all 8 directions */}
        {selected && (
          <>
            {/* Corners */}
            <div style={getResizeZoneStyle('nw')} onMouseDown={(e) => handleResizeStart(e, 'nw')} />
            <div style={getResizeZoneStyle('ne')} onMouseDown={(e) => handleResizeStart(e, 'ne')} />
            <div style={getResizeZoneStyle('sw')} onMouseDown={(e) => handleResizeStart(e, 'sw')} />
            <div style={getResizeZoneStyle('se')} onMouseDown={(e) => handleResizeStart(e, 'se')} />
            {/* Sides */}
            <div style={getResizeZoneStyle('n')} onMouseDown={(e) => handleResizeStart(e, 'n')} />
            <div style={getResizeZoneStyle('s')} onMouseDown={(e) => handleResizeStart(e, 's')} />
            <div style={getResizeZoneStyle('e')} onMouseDown={(e) => handleResizeStart(e, 'e')} />
            <div style={getResizeZoneStyle('w')} onMouseDown={(e) => handleResizeStart(e, 'w')} />
          </>
        )}

        {/* Dimension tooltip during resize */}
        {isResizing && (
          <div
            className="fixed z-[9999] bg-black/85 text-white text-xs font-medium px-2.5 py-1.5 rounded-md shadow-lg pointer-events-none backdrop-blur-sm"
            style={{
              left: mousePos.x + 12,
              top: mousePos.y + 12
            }}
          >
            {currentSize.width} × {currentSize.height}
          </div>
        )}
      </div>
    </NodeViewWrapper>
  )
}

// Define the custom Image extension
export const ImageExtension = Node.create({
  name: 'image',
  group: 'block',
  atom: true, // Treat as a single unit
  draggable: true,

  addAttributes() {
    return {
      src: {
        default: null,
        parseHTML: (element) => element.getAttribute('src'),
        renderHTML: (attributes) => {
          if (!attributes.src) return {}
          return { src: attributes.src }
        }
      },
      alt: {
        default: null,
        parseHTML: (element) => element.getAttribute('alt'),
        renderHTML: (attributes) => {
          if (!attributes.alt) return {}
          return { alt: attributes.alt }
        }
      },
      title: {
        default: null,
        parseHTML: (element) => element.getAttribute('title'),
        renderHTML: (attributes) => {
          if (!attributes.title) return {}
          return { title: attributes.title }
        }
      },
      width: {
        default: null,
        parseHTML: (element) => {
          // Parse width from inline style or attributes
          const style = element.getAttribute('style') || ''
          const widthMatch = style.match(/width:\s*(\d+)px/)
          if (widthMatch) return parseInt(widthMatch[1])
          const widthAttr = element.getAttribute('data-width') || element.getAttribute('width')
          return widthAttr ? parseInt(widthAttr) : null
        },
        // Width is rendered in the style attribute, not as a separate attribute
        renderHTML: () => ({})
      },
      align: {
        default: 'center',
        parseHTML: (element) => {
          // Parse alignment from inline style
          const style = element.getAttribute('style') || ''
          if (style.includes('float: left') || style.includes('float:left')) return 'left'
          if (style.includes('float: right') || style.includes('float:right')) return 'right'
          // Also check data-align for backwards compatibility
          return element.getAttribute('data-align') || 'center'
        },
        // Align is rendered in the style attribute, not as a separate attribute
        renderHTML: () => ({})
      },
      margin: {
        default: 16,
        parseHTML: (element) => {
          // Parse margin from inline style
          const style = element.getAttribute('style') || ''
          const marginMatch = style.match(/margin[^:]*:\s*\d+\s*(\d+)px/)
          if (marginMatch) return parseInt(marginMatch[1])
          // Also check data-margin for backwards compatibility
          const marginAttr = element.getAttribute('data-margin')
          return marginAttr ? parseInt(marginAttr) : 16
        },
        // Margin is rendered in the style attribute, not as a separate attribute
        renderHTML: () => ({})
      }
    }
  },

  parseHTML() {
    return [
      {
        tag: 'img[src]',
        getAttrs: (element) => {
          if (typeof element === 'string') return false

          const img = element as HTMLImageElement
          return {
            src: img.getAttribute('src'),
            alt: img.getAttribute('alt'),
            title: img.getAttribute('title'),
            width: img.getAttribute('data-width') || img.getAttribute('width'),
            align: img.getAttribute('data-align') || 'center'
          }
        }
      }
    ]
  },

  renderHTML({ node, HTMLAttributes }) {
    // Build inline style for Anki compatibility
    const { width, align, margin = 16 } = node.attrs
    const styleProps: string[] = []

    // Add width
    if (width) {
      styleProps.push(`width: ${width}px`)
    }

    // Add alignment styles with user-defined margin
    switch (align) {
      case 'left':
        styleProps.push('float: left')
        styleProps.push(`margin: 0 ${margin}px ${margin}px 0`)
        break
      case 'right':
        styleProps.push('float: right')
        styleProps.push(`margin: 0 0 ${margin}px ${margin}px`)
        break
      case 'center':
      default:
        styleProps.push('display: block')
        styleProps.push(`margin: 0 auto ${margin}px auto`)
        break
    }

    const style = styleProps.join('; ')

    return ['img', mergeAttributes(HTMLAttributes, { style })]
  },

  addNodeView() {
    return ReactNodeViewRenderer(ImageComponent, {
      // Important: allow the drag handle to work
      stopEvent: () => false
    })
  },

  addCommands() {
    return {
      setImage: (options: { src: string; alt?: string; title?: string; width?: number; align?: ImageAlign }) =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs: options
          })
        },
      updateImage: (attrs: Record<string, unknown>) =>
        ({ commands }) => {
          return commands.updateAttributes(this.name, attrs)
        }
    } as Partial<RawCommands>
  }
})
