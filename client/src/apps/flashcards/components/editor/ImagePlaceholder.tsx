import { Node, mergeAttributes } from '@tiptap/core'
import type { RawCommands } from '@tiptap/core'
import { ReactNodeViewRenderer, NodeViewWrapper } from '@tiptap/react'
import type { NodeViewProps } from '@tiptap/react'
import { Image as ImageIcon, Upload, Loader2, GripVertical, AlignLeft, AlignCenter, AlignRight, MoveHorizontal } from 'lucide-react'

// Margin presets for quick adjustment
const MARGIN_PRESETS = [
  { label: '0', value: 0 },
  { label: 'S', value: 8 },
  { label: 'M', value: 16 },
  { label: 'L', value: 24 }
]
import { useRef, useState, useCallback, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import { uploadCardImage, validateImage } from '../../services/storageService'

// Type for alignment options
type ImageAlign = 'left' | 'center' | 'right'

// Extend the TipTap commands
declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    imagePlaceholder: {
      setImagePlaceholder: (options?: { width?: number; height?: number; align?: ImageAlign }) => ReturnType
    }
  }
}

interface ImagePlaceholderOptions {
  onAddImage?: (replaceWithImage: (src: string) => void) => void
  cardId?: string
}

// Placeholder Component - styled like ImageUploader with drag-drop
function PlaceholderComponent({ node, updateAttributes, selected, extension, editor: nodeEditor }: NodeViewProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isResizing, setIsResizing] = useState(false)
  const [currentHandle, setCurrentHandle] = useState<string | null>(null)
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [preview, setPreview] = useState<string | null>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [currentSize, setCurrentSize] = useState({ width: 0, height: 0 })
  const startPos = useRef({ x: 0, y: 0, width: 0, height: 0 })

  // Drag-to-align state
  const [isDraggingForAlign, setIsDraggingForAlign] = useState(false)
  const [hoverZone, setHoverZone] = useState<'left' | 'center' | 'right' | null>(null)

  // Minimum dimensions to prevent unusable collapsed placeholders
  const MIN_WIDTH = 150
  const MIN_HEIGHT = 120

  const { width = 300, height = 200, align = 'center', margin = 16 } = node.attrs

  // Handle file drop/select
  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) return

    const file = acceptedFiles[0]

    // Validate image
    const validation = validateImage(file)
    if (!validation.valid) {
      console.error('Invalid image:', validation.error)
      return
    }

    try {
      setUploading(true)
      setProgress(0)

      // Create preview
      const previewUrl = URL.createObjectURL(file)
      setPreview(previewUrl)

      // Upload to Firebase Storage
      const cardId = extension.options.cardId || `placeholder-${Date.now()}`
      const cardImage = await uploadCardImage(file, cardId, (uploadProgress) => {
        setProgress(uploadProgress)
      })

      setProgress(100)

      // Replace placeholder with actual image
      if (nodeEditor) {
        nodeEditor.chain().focus().deleteSelection().setImage({
          src: cardImage.url,
          width,
          align
        }).run()
      }

      // Cleanup
      URL.revokeObjectURL(previewUrl)
    } catch (error) {
      console.error('Image upload error:', error)
      setPreview(null)
      setProgress(0)
      setUploading(false)
    }
  }, [nodeEditor, width, align, extension.options.cardId])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png'],
      'image/gif': ['.gif'],
      'image/webp': ['.webp']
    },
    maxFiles: 1,
    maxSize: 10 * 1024 * 1024, // 10MB
    disabled: uploading,
    noKeyboard: true // Prevent keyboard events from interfering with editor
  })

  // Start resize on handle mousedown
  const handleResizeStart = useCallback((e: React.MouseEvent, handle: string) => {
    e.preventDefault()
    e.stopPropagation()

    if (!containerRef.current) return

    setIsResizing(true)
    setCurrentHandle(handle)

    const rect = containerRef.current.getBoundingClientRect()
    startPos.current = {
      x: e.clientX,
      y: e.clientY,
      width: rect.width,
      height: rect.height
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
      switch (currentHandle) {
        // Corner handles
        case 'nw':
          newWidth = startPos.current.width - deltaX
          newHeight = startPos.current.height - deltaY
          break
        case 'ne':
          newWidth = startPos.current.width + deltaX
          newHeight = startPos.current.height - deltaY
          break
        case 'sw':
          newWidth = startPos.current.width - deltaX
          newHeight = startPos.current.height + deltaY
          break
        case 'se':
          newWidth = startPos.current.width + deltaX
          newHeight = startPos.current.height + deltaY
          break
        // Side handles
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

      // Set minimum dimensions to prevent unusable collapsed placeholders
      newWidth = Math.max(MIN_WIDTH, newWidth)
      newHeight = Math.max(MIN_HEIGHT, newHeight)

      // Update current size for tooltip
      setCurrentSize({ width: Math.round(newWidth), height: Math.round(newHeight) })

      containerRef.current.style.width = `${newWidth}px`
      containerRef.current.style.height = `${newHeight}px`
    }

    const handleMouseUp = () => {
      setIsResizing(false)
      setCurrentHandle(null)

      if (containerRef.current) {
        // Parse and enforce minimum dimensions before saving
        const parsedWidth = parseInt(containerRef.current.style.width)
        const parsedHeight = parseInt(containerRef.current.style.height)

        // Use MIN dimensions if parsing fails (NaN) or value is below minimum
        const finalWidth = Math.max(MIN_WIDTH, isNaN(parsedWidth) ? MIN_WIDTH : parsedWidth)
        const finalHeight = Math.max(MIN_HEIGHT, isNaN(parsedHeight) ? MIN_HEIGHT : parsedHeight)

        updateAttributes({ width: finalWidth, height: finalHeight })

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

  // Container styles based on alignment and user-defined margin
  const getContainerStyles = (): React.CSSProperties => {
    // Enforce minimum dimensions - handle undefined, null, 0, or small values
    const effectiveWidth = Math.max(MIN_WIDTH, width || MIN_WIDTH)
    const effectiveHeight = Math.max(MIN_HEIGHT, height || MIN_HEIGHT)
    const marginPx = `${margin || 16}px`

    const baseStyles: React.CSSProperties = {
      position: 'relative',
      width: `${effectiveWidth}px`,
      height: `${effectiveHeight}px`,
      userSelect: 'none'
    }

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
      className="image-placeholder-wrapper"
      style={{ overflow: 'visible', position: 'relative' }}
      draggable={true}
      data-drag-handle=""
    >
      <div
        ref={containerRef}
        style={getContainerStyles()}
        className={`
          rounded-2xl
          flex flex-col items-center justify-center
          transition-all duration-200
          ${isDragActive
            ? 'bg-primary/5 border-2 border-dashed border-primary'
            : uploading
            ? 'bg-muted/30 border border-border'
            : selected
            ? 'bg-muted/20 border-2 border-dashed border-primary/60'
            : 'bg-muted/10 hover:bg-muted/20 border-2 border-dashed border-muted-foreground/20 hover:border-muted-foreground/30'
          }
        `}
      >
        {/* Dropzone area - only this part handles file drop/click */}
        <div
          {...getRootProps()}
          className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer"
          style={{ zIndex: 1 }}
        >
          <input {...getInputProps()} />

          {uploading ? (
            <div className="space-y-3 text-center px-4">
              {preview && (
                <div className="relative w-16 h-16 mx-auto rounded-lg overflow-hidden">
                  <img
                    src={preview}
                    alt="Upload preview"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <Loader2 className="w-5 h-5 text-white animate-spin" />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <Loader2 className="w-3 h-3 animate-spin" />
                  <span>Uploading... {Math.round(progress)}%</span>
                </div>

                <div className="w-24 mx-auto h-1 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all duration-300 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4 text-center px-6">
              <div className={`
                w-14 h-14 mx-auto rounded-full flex items-center justify-center
                transition-all duration-200
                ${isDragActive
                  ? 'bg-primary/15 scale-105'
                  : 'bg-primary/10'
                }
              `}>
                {isDragActive ? (
                  <Upload className="w-6 h-6 text-primary" />
                ) : (
                  <ImageIcon className="w-6 h-6 text-primary/70" />
                )}
              </div>

              <div className="space-y-1">
                {isDragActive ? (
                  <p className="text-sm font-semibold text-primary">
                    Drop to upload
                  </p>
                ) : (
                  <>
                    <p className="text-sm font-semibold text-foreground">
                      Drag & drop an image, or click to select
                    </p>
                    <p className="text-xs text-muted-foreground">
                      JPEG, PNG, GIF, WebP (max 10MB)
                    </p>
                  </>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Control bar with drag handle and alignment - OUTSIDE the dropzone */}
        {selected && !uploading && (
          <div
            contentEditable={false}
            className="absolute left-1/2 -translate-x-1/2 select-none"
            style={{
              top: '-36px',
              backgroundColor: '#3b82f6',
              borderRadius: '8px',
              padding: '4px 6px',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              zIndex: 50,
              boxShadow: '0 2px 12px rgba(0,0,0,0.3)'
            }}
          >
            {/* Drag handle - drag horizontally to change alignment */}
            <div
              draggable={true}
              className="cursor-grab active:cursor-grabbing flex items-center gap-1 px-2 py-1 hover:bg-white/20 rounded transition-colors"
              title="Drag to align left/center/right"
              onMouseDown={(e) => e.stopPropagation()}
              onDragStart={(e) => {
                setIsDraggingForAlign(true)
                // Set drag image to be semi-transparent
                if (containerRef.current) {
                  e.dataTransfer.setDragImage(containerRef.current, 0, 0)
                }
                e.dataTransfer.effectAllowed = 'move'
              }}
              onDragEnd={() => {
                // Apply alignment based on hover zone
                if (hoverZone) {
                  updateAttributes({ align: hoverZone })
                }
                setIsDraggingForAlign(false)
                setHoverZone(null)
              }}
            >
              <GripVertical className="w-4 h-4 text-white" />
            </div>

            {/* Separator */}
            <div className="w-px h-5 bg-white/30" />

            {/* Alignment controls */}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                updateAttributes({ align: 'left' })
              }}
              className={`p-1.5 rounded transition-colors ${align === 'left' ? 'bg-white/30' : 'hover:bg-white/20'}`}
              title="Align left"
            >
              <AlignLeft className="w-4 h-4 text-white" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                updateAttributes({ align: 'center' })
              }}
              className={`p-1.5 rounded transition-colors ${align === 'center' ? 'bg-white/30' : 'hover:bg-white/20'}`}
              title="Align center"
            >
              <AlignCenter className="w-4 h-4 text-white" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                updateAttributes({ align: 'right' })
              }}
              className={`p-1.5 rounded transition-colors ${align === 'right' ? 'bg-white/30' : 'hover:bg-white/20'}`}
              title="Align right"
            >
              <AlignRight className="w-4 h-4 text-white" />
            </button>

            {/* Separator */}
            <div className="w-px h-5 bg-white/30" />

            {/* Margin controls */}
            <div className="flex items-center gap-0.5">
              <MoveHorizontal className="w-3 h-3 text-white/70 mr-0.5" />
              {MARGIN_PRESETS.map((preset) => (
                <button
                  key={preset.label}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    updateAttributes({ margin: preset.value })
                  }}
                  className={`w-5 h-5 rounded text-[9px] font-medium transition-colors ${margin === preset.value ? 'bg-white/30 text-white' : 'hover:bg-white/20 text-white/70'}`}
                  title={`${preset.value}px gap`}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Invisible resize zones - all 8 directions */}
        {selected && !uploading && (
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

        {/* Alignment drop zones - appear when dragging to align */}
        {isDraggingForAlign && (
          <div
            className="fixed inset-0 z-[9998] flex items-stretch gap-2 p-4 bg-black/20 backdrop-blur-[2px]"
            style={{ pointerEvents: 'auto' }}
          >
            {/* Left zone */}
            <div
              className={`flex-1 flex items-center justify-center rounded-xl border-2 border-dashed transition-all ${
                hoverZone === 'left'
                  ? 'bg-primary/30 border-primary scale-[1.02]'
                  : 'bg-white/10 border-white/40 hover:bg-white/20'
              }`}
              onDragOver={(e) => {
                e.preventDefault()
                setHoverZone('left')
              }}
              onDragLeave={() => setHoverZone(null)}
              onDrop={(e) => {
                e.preventDefault()
                updateAttributes({ align: 'left' })
                setIsDraggingForAlign(false)
                setHoverZone(null)
              }}
            >
              <div className="text-center">
                <AlignLeft className={`w-10 h-10 mx-auto mb-2 ${hoverZone === 'left' ? 'text-primary' : 'text-white/70'}`} />
                <span className={`text-lg font-semibold ${hoverZone === 'left' ? 'text-primary' : 'text-white/70'}`}>Left</span>
              </div>
            </div>

            {/* Center zone */}
            <div
              className={`flex-1 flex items-center justify-center rounded-xl border-2 border-dashed transition-all ${
                hoverZone === 'center'
                  ? 'bg-primary/30 border-primary scale-[1.02]'
                  : 'bg-white/10 border-white/40 hover:bg-white/20'
              }`}
              onDragOver={(e) => {
                e.preventDefault()
                setHoverZone('center')
              }}
              onDragLeave={() => setHoverZone(null)}
              onDrop={(e) => {
                e.preventDefault()
                updateAttributes({ align: 'center' })
                setIsDraggingForAlign(false)
                setHoverZone(null)
              }}
            >
              <div className="text-center">
                <AlignCenter className={`w-10 h-10 mx-auto mb-2 ${hoverZone === 'center' ? 'text-primary' : 'text-white/70'}`} />
                <span className={`text-lg font-semibold ${hoverZone === 'center' ? 'text-primary' : 'text-white/70'}`}>Center</span>
              </div>
            </div>

            {/* Right zone */}
            <div
              className={`flex-1 flex items-center justify-center rounded-xl border-2 border-dashed transition-all ${
                hoverZone === 'right'
                  ? 'bg-primary/30 border-primary scale-[1.02]'
                  : 'bg-white/10 border-white/40 hover:bg-white/20'
              }`}
              onDragOver={(e) => {
                e.preventDefault()
                setHoverZone('right')
              }}
              onDragLeave={() => setHoverZone(null)}
              onDrop={(e) => {
                e.preventDefault()
                updateAttributes({ align: 'right' })
                setIsDraggingForAlign(false)
                setHoverZone(null)
              }}
            >
              <div className="text-center">
                <AlignRight className={`w-10 h-10 mx-auto mb-2 ${hoverZone === 'right' ? 'text-primary' : 'text-white/70'}`} />
                <span className={`text-lg font-semibold ${hoverZone === 'right' ? 'text-primary' : 'text-white/70'}`}>Right</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </NodeViewWrapper>
  )
}

// Define the ImagePlaceholder extension
export const ImagePlaceholder = Node.create<ImagePlaceholderOptions>({
  name: 'imagePlaceholder',
  group: 'block',
  atom: true, // Treat as a single unit
  draggable: true,

  addOptions() {
    return {
      onAddImage: undefined,
      cardId: undefined
    }
  },

  addAttributes() {
    return {
      width: {
        default: 300,
        parseHTML: (element) => {
          const width = element.getAttribute('data-width')
          return width ? parseInt(width) : 300
        },
        renderHTML: (attributes) => {
          return { 'data-width': attributes.width }
        }
      },
      height: {
        default: 200,
        parseHTML: (element) => {
          const height = element.getAttribute('data-height')
          return height ? parseInt(height) : 200
        },
        renderHTML: (attributes) => {
          return { 'data-height': attributes.height }
        }
      },
      align: {
        default: 'center',
        parseHTML: (element) => element.getAttribute('data-align') || 'center',
        renderHTML: (attributes) => {
          return { 'data-align': attributes.align || 'center' }
        }
      },
      margin: {
        default: 16,
        parseHTML: (element) => {
          const margin = element.getAttribute('data-margin')
          return margin ? parseInt(margin) : 16
        },
        renderHTML: (attributes) => {
          return { 'data-margin': attributes.margin || 16 }
        }
      }
    }
  },

  parseHTML() {
    return [
      {
        tag: 'div[data-type="image-placeholder"]'
      }
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['div', mergeAttributes(HTMLAttributes, { 'data-type': 'image-placeholder' })]
  },

  addNodeView() {
    return ReactNodeViewRenderer(PlaceholderComponent, {
      // Important: allow the drag handle to work
      stopEvent: () => false
    })
  },

  addCommands() {
    return {
      setImagePlaceholder: (options = {}) =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs: {
              width: options.width || 300,
              height: options.height || 200,
              align: options.align || 'center'
            }
          })
        }
    } as Partial<RawCommands>
  }
})
