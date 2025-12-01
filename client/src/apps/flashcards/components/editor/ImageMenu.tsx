import { BubbleMenu } from '@tiptap/react/menus'
import { Editor } from '@tiptap/react'
import { AlignLeft, AlignCenter, AlignRight, Trash2 } from 'lucide-react'
import { useState, useEffect } from 'react'

interface ImageMenuProps {
  editor: Editor
}

type ImageAlign = 'left' | 'center' | 'right'

interface SizeOption {
  label: string
  width: number
  percentage: string
}

const SIZE_OPTIONS: SizeOption[] = [
  { label: 'Small', width: 200, percentage: '25%' },
  { label: 'Medium', width: 400, percentage: '50%' },
  { label: 'Large', width: 600, percentage: '75%' },
  { label: 'Full', width: 800, percentage: '100%' }
]

interface MarginOption {
  label: string
  value: number
}

const MARGIN_PRESETS: MarginOption[] = [
  { label: '0', value: 0 },
  { label: 'S', value: 8 },
  { label: 'M', value: 16 },
  { label: 'L', value: 24 }
]

export function ImageMenu({ editor }: ImageMenuProps) {
  const [sliderValue, setSliderValue] = useState(16)

  // Only show menu when an image is selected
  const shouldShow = () => {
    return editor.isActive('image')
  }

  // Get current image attributes
  const getCurrentAlign = (): ImageAlign => {
    const attrs = editor.getAttributes('image')
    return (attrs.align as ImageAlign) || 'center'
  }

  const getCurrentWidth = (): number | null => {
    const attrs = editor.getAttributes('image')
    return attrs.width || null
  }

  const getCurrentMargin = (): number => {
    const attrs = editor.getAttributes('image')
    return attrs.margin ?? 16
  }

  // Sync slider with current margin when image selection changes
  useEffect(() => {
    if (editor.isActive('image')) {
      setSliderValue(getCurrentMargin())
    }
  }, [editor.state.selection])

  // Set image alignment
  const setAlign = (align: ImageAlign) => {
    editor.chain().focus().updateAttributes('image', { align }).run()
  }

  // Set image size
  const setSize = (width: number) => {
    editor.chain().focus().updateAttributes('image', { width }).run()
  }

  // Set image margin
  const setMargin = (margin: number) => {
    setSliderValue(margin)
    editor.chain().focus().updateAttributes('image', { margin }).run()
  }

  // Delete image
  const deleteImage = () => {
    editor.chain().focus().deleteSelection().run()
  }

  const currentAlign = getCurrentAlign()
  const currentWidth = getCurrentWidth()
  const currentMargin = getCurrentMargin()

  return (
    <BubbleMenu
      editor={editor}
      options={{
        placement: 'top',
        offset: 10
      }}
      shouldShow={shouldShow}
      className="image-menu"
    >
      <div className="flex items-center gap-1 bg-popover border border-border rounded-lg shadow-lg p-1">
        {/* Alignment buttons */}
        <div className="flex items-center gap-0.5">
          <button
            onClick={() => setAlign('left')}
            className={`
              p-2 rounded hover:bg-accent transition-colors
              ${currentAlign === 'left' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'}
            `}
            title="Align Left"
            type="button"
          >
            <AlignLeft className="w-4 h-4" />
          </button>

          <button
            onClick={() => setAlign('center')}
            className={`
              p-2 rounded hover:bg-accent transition-colors
              ${currentAlign === 'center' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'}
            `}
            title="Align Center"
            type="button"
          >
            <AlignCenter className="w-4 h-4" />
          </button>

          <button
            onClick={() => setAlign('right')}
            className={`
              p-2 rounded hover:bg-accent transition-colors
              ${currentAlign === 'right' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'}
            `}
            title="Align Right"
            type="button"
          >
            <AlignRight className="w-4 h-4" />
          </button>
        </div>

        {/* Separator */}
        <div className="w-px h-6 bg-border" />

        {/* Size buttons */}
        <div className="flex items-center gap-0.5">
          {SIZE_OPTIONS.map((option) => (
            <button
              key={option.label}
              onClick={() => setSize(option.width)}
              className={`
                px-2.5 py-1.5 rounded text-xs font-medium transition-colors
                ${currentWidth === option.width
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                }
              `}
              title={`${option.label} (${option.percentage})`}
              type="button"
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* Separator */}
        <div className="w-px h-6 bg-border" />

        {/* Margin control */}
        <div className="flex items-center gap-1">
          <span className="text-xs text-muted-foreground px-1">Gap:</span>
          {/* Preset buttons */}
          <div className="flex items-center gap-0.5">
            {MARGIN_PRESETS.map((option) => (
              <button
                key={option.label}
                onClick={() => setMargin(option.value)}
                className={`
                  w-6 h-6 rounded text-[10px] font-medium transition-colors
                  ${currentMargin === option.value
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                  }
                `}
                title={`${option.value}px margin`}
                type="button"
              >
                {option.label}
              </button>
            ))}
          </div>
          {/* Slider for fine-tuning */}
          <input
            type="range"
            min="0"
            max="32"
            value={sliderValue}
            onChange={(e) => setMargin(parseInt(e.target.value))}
            className="w-16 h-1.5 bg-muted rounded-full appearance-none cursor-pointer accent-primary"
            title={`${sliderValue}px margin`}
          />
          <span className="text-[10px] text-muted-foreground w-6 text-right">{sliderValue}</span>
        </div>

        {/* Separator */}
        <div className="w-px h-6 bg-border" />

        {/* Delete button */}
        <button
          onClick={deleteImage}
          className="p-2 rounded text-destructive hover:bg-destructive/10 transition-colors"
          title="Delete Image"
          type="button"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </BubbleMenu>
  )
}
