# WYSIWYG Editor

TipTap-based rich text editor for flashcard content.

## Files

- **WYSIWYGEditor.tsx** - Main editor component
- **EditorToolbar.tsx** - Toolbar with formatting buttons
- **index.ts** - Barrel exports

## Usage

```tsx
import { WYSIWYGEditor } from '@/apps/flashcards/components/editor'
import { useState } from 'react'

function MyComponent() {
  const [content, setContent] = useState('<p>Hello world</p>')
  
  return (
    <WYSIWYGEditor
      content={content}
      onChange={setContent}
      placeholder="Start typing..."
      minHeight="200px"
    />
  )
}
```

## Props

### WYSIWYGEditor

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `content` | `string` | (required) | HTML content to edit |
| `onChange` | `(html: string) => void` | (required) | Callback when content changes |
| `placeholder` | `string` | `'Start typing...'` | Placeholder text |
| `className` | `string` | `''` | Additional CSS classes |
| `minHeight` | `string` | `'200px'` | Minimum editor height |

## Features

### Text Formatting
- Bold, Italic, Underline, Strikethrough
- Subscript, Superscript
- Inline code
- Text color (8 preset colors)
- Background highlight (8 preset colors)

### Structure
- Headings (H1, H2, H3)
- Bullet lists
- Numbered lists
- Blockquotes
- Code blocks

### Alignment
- Left, Center, Right, Justify

### Advanced
- Links (with URL prompt)
- Tables (via TipTap extension)

### Coming Soon
- Image upload (placeholder button)
- LaTeX math formulas (placeholder button)

## Output Format

The editor outputs HTML. Example:

```html
<p>This is <strong>bold</strong> and <em>italic</em> text.</p>
<h2>A heading</h2>
<ul>
  <li>List item 1</li>
  <li>List item 2</li>
</ul>
```

## Styling

The editor automatically supports dark mode using Tailwind's `dark:` classes.

Content is styled with `prose` classes for good typography.

## Extensions Included

- StarterKit (basic formatting)
- Underline, Subscript, Superscript
- Color, Highlight, TextStyle
- TextAlign
- Link
- Table, TableRow, TableCell, TableHeader

## Keyboard Shortcuts

- `Ctrl/Cmd + B` - Bold
- `Ctrl/Cmd + I` - Italic
- `Ctrl/Cmd + U` - Underline

## Character/Word Count

The editor displays character and word counts below the editor area.
