# Image Extension Usage Guide

This guide shows how to integrate the custom Image Extension with resize handles and the Image Menu into your TipTap editor.

## Files Created

1. **ImageExtension.tsx** - Custom TipTap image node with resize handles and alignment
2. **ImageMenu.tsx** - Bubble menu for image controls (alignment, size, delete)
3. **index.ts** - Convenient exports

## Integration Example

Here's how to use these components in your TipTap editor:

```tsx
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { ImageExtension, ImageMenu } from './editor'

function MyEditor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      // Replace the default Image extension with our custom one
      ImageExtension,
      // ... other extensions
    ],
    content: '<p>Your content here</p>',
  })

  if (!editor) return null

  return (
    <div>
      {/* Image Menu - automatically appears when image is selected */}
      <ImageMenu editor={editor} />

      {/* Editor Content */}
      <EditorContent editor={editor} />
    </div>
  )
}
```

## Inserting Images

### Method 1: Using the setImage command

```tsx
// Insert image with default settings (centered, auto width)
editor.commands.setImage({
  src: 'https://example.com/image.jpg',
  alt: 'Description'
})

// Insert image with custom alignment and width
editor.commands.setImage({
  src: 'https://example.com/image.jpg',
  alt: 'Description',
  width: 400,
  align: 'left'
})
```

### Method 2: From image upload

```tsx
import { uploadCardImage } from '../services/storageService'

async function handleImageUpload(file: File, cardId: string) {
  try {
    // Upload to Firebase Storage
    const cardImage = await uploadCardImage(file, cardId)

    // Insert into editor
    editor.commands.setImage({
      src: cardImage.url,
      alt: cardImage.alt,
      width: 400,
      align: 'center'
    })
  } catch (error) {
    console.error('Upload failed:', error)
  }
}
```

## Features

### 1. Resize Handles

When an image is selected:
- **Corner handles** appear (NW, NE, SW, SE)
- Drag any corner to resize proportionally
- Maintains aspect ratio automatically
- Minimum width enforced (100px)
- Smooth visual feedback during drag

### 2. Alignment Options

**Left Align:**
- Image floats to the left
- Text wraps around the right side
- Has right margin for spacing

**Center Align:**
- Image is centered as a block element
- No text wrapping
- Default alignment

**Right Align:**
- Image floats to the right
- Text wraps around the left side
- Has left margin for spacing

### 3. Size Presets

Quick size buttons in the bubble menu:
- **Small**: 200px (25% of container)
- **Medium**: 400px (50% of container)
- **Large**: 600px (75% of container)
- **Full**: 800px (100% of container)

### 4. Delete

Removes the image from the document.

## Image Menu Behavior

The bubble menu (ImageMenu):
- **Automatically appears** when an image is selected
- **Positioned above** the selected image
- **Disappears** when clicking elsewhere
- **Active states** show current alignment/size
- **Responsive** with proper z-index handling

## Data Attributes

Images store their properties as attributes:

```html
<img
  src="https://..."
  alt="Description"
  data-width="400"
  data-align="center"
/>
```

These attributes are:
- **Preserved** when content is saved/loaded
- **Accessible** via `editor.getAttributes('image')`
- **Updatable** via `editor.commands.updateAttributes('image', { ... })`

## Styling

The extension includes built-in styles:

- **Selected state**: Blue ring around the image
- **Resize handles**: Blue squares at corners with hover effects
- **Smooth transitions**: For shadows and opacity changes
- **Dark mode support**: Uses CSS variables from the theme

## Advanced Usage

### Programmatically Update Image

```tsx
// Update alignment
editor.commands.updateAttributes('image', { align: 'right' })

// Update width
editor.commands.updateAttributes('image', { width: 600 })

// Update multiple attributes
editor.commands.updateAttributes('image', {
  width: 500,
  align: 'left'
})
```

### Get Current Image Attributes

```tsx
if (editor.isActive('image')) {
  const attrs = editor.getAttributes('image')
  console.log('Current image:', attrs.src)
  console.log('Width:', attrs.width)
  console.log('Alignment:', attrs.align)
}
```

### Check if Image is Selected

```tsx
const isImageSelected = editor.isActive('image')
```

## Integration with ImageUploader Component

If you're using the existing `ImageUploader` component:

```tsx
import { ImageUploader } from './ImageUploader'

function CardEditor({ cardId }: { cardId: string }) {
  const editor = useEditor({
    extensions: [StarterKit, ImageExtension],
    content: ''
  })

  const handleUploadComplete = (url: string) => {
    // Insert uploaded image into editor
    editor?.commands.setImage({
      src: url,
      alt: 'Uploaded image',
      width: 400,
      align: 'center'
    })
  }

  return (
    <div>
      <ImageUploader
        cardId={cardId}
        onUploadComplete={handleUploadComplete}
      />

      <ImageMenu editor={editor} />
      <EditorContent editor={editor} />
    </div>
  )
}
```

## CSS Requirements

The extension uses Tailwind classes and assumes these are available:
- `ring-2`, `ring-primary` - for selection outline
- `bg-popover`, `border`, `shadow-lg` - for menu styling
- `text-muted-foreground`, `hover:bg-accent` - for button states

Make sure your Tailwind configuration includes these utilities.

## TypeScript Types

```typescript
// Image alignment type
type ImageAlign = 'left' | 'center' | 'right'

// Image attributes
interface ImageAttributes {
  src: string
  alt?: string
  title?: string
  width?: number
  align?: ImageAlign
}

// Commands
editor.commands.setImage(attrs: ImageAttributes)
editor.commands.updateImage(attrs: Partial<ImageAttributes>)
```

## Troubleshooting

### Images not resizing
- Check that the editor is properly initialized
- Verify that `updateAttributes` is being called
- Ensure mouse events are not blocked by other elements

### Menu not appearing
- Confirm the editor has `isActive('image')` returning true
- Check z-index conflicts with other UI elements
- Verify TipTap's BubbleMenu is properly installed

### Images not maintaining aspect ratio
- Check that `onLoad` handler is setting the aspect ratio
- Ensure `naturalWidth` and `naturalHeight` are available
- Verify the image src is valid and loadable

## Performance Notes

- Resize uses CSS transforms during drag for smoothness
- Final size is applied only on mouseup to minimize re-renders
- Aspect ratio is calculated once on image load and cached
- No debouncing needed - native browser performance is sufficient
