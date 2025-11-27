/**
 * Anki .apkg Import Service
 *
 * Parses Anki flashcard packages (.apkg files) and converts them to MedLearn format.
 * Handles ZIP extraction, SQLite database parsing, and media file processing.
 *
 * Supports multiple Anki format versions:
 * - Legacy (collection.anki2) - uncompressed SQLite, JSON media mapping
 * - Legacy 2 (collection.anki21) - uncompressed SQLite, JSON media mapping
 * - Latest (collection.anki21b) - zstd compressed SQLite, Protobuf media mapping
 */

import JSZip from 'jszip'
import initSqlJs, { Database } from 'sql.js'
import { decompress } from 'fzstd'
import type { CardContent, CardImage } from '../types/flashcard'
import { uploadCardImage } from './storageService'

// Field separator in Anki notes (ASCII 31 - Unit Separator)
const FIELD_SEPARATOR = String.fromCharCode(31)

// SQL.js WASM URL - use CDN for reliable loading
const SQL_WASM_URL = 'https://sql.js.org/dist/sql-wasm.wasm'

/**
 * Result of importing an Anki deck
 */
export interface AnkiImportResult {
  deckId: string
  deckName: string
  cardCount: number
  mediaCount: number
  errors: string[]
}

/**
 * Progress callback for import stages
 */
export type ImportProgressCallback = (stage: string, progress: number, detail?: string) => void

/**
 * Parsed Anki note from the database
 */
interface AnkiNote {
  id: number
  fields: string[]
  tags: string[]
  modelId: number
}

/**
 * Parsed Anki model (note type) from the database
 */
interface AnkiModel {
  id: number
  name: string
  fieldNames: string[]
  isCloze: boolean
}

/**
 * Card data ready for import
 */
export interface ParsedCard {
  front: string
  back: string
  tags: string[]
  mediaRefs: string[] // Media filenames referenced in content
}

/**
 * Result of parsing an .apkg file (before creating deck)
 */
export interface ParsedAnkiDeck {
  deckName: string
  cards: ParsedCard[]
  media: Map<string, Blob> // filename -> blob
  mediaMapping: Record<string, string> // numbered name -> original name
}

/**
 * Extract and parse an .apkg file
 */
export async function parseApkgFile(
  file: File,
  onProgress?: ImportProgressCallback
): Promise<ParsedAnkiDeck> {
  onProgress?.('Extracting package...', 0)

  // Read file as ArrayBuffer
  const arrayBuffer = await file.arrayBuffer()

  // Extract ZIP
  const zip = await JSZip.loadAsync(arrayBuffer)
  onProgress?.('Extracting package...', 20)

  // Detect format and find database file
  const { dbData, formatVersion } = await findAndExtractDatabase(zip)
  if (!dbData) {
    throw new Error('Invalid .apkg file: No database found')
  }

  onProgress?.('Extracting package...', 40)

  // Parse media mapping (handles both JSON and Protobuf formats)
  const mediaMapping = await parseMediaMapping(zip, formatVersion)
  onProgress?.('Extracting package...', 50)

  // Extract media files (handles zstd compressed media in latest format)
  const media = await extractMediaFiles(zip, mediaMapping, formatVersion)
  onProgress?.('Extracting package...', 70)

  // Parse SQLite database
  onProgress?.('Parsing database...', 80)
  const { notes, deckName, models } = await parseSqliteDatabase(dbData)
  onProgress?.('Parsing database...', 100)

  // Convert notes to cards
  const cards = convertNotesToCards(notes, models, mediaMapping)

  return {
    deckName: deckName || file.name.replace(/\.apkg$/, ''),
    cards,
    media,
    mediaMapping
  }
}

type FormatVersion = 'legacy' | 'legacy2' | 'latest'

/**
 * Find and extract the database file, handling different format versions
 */
async function findAndExtractDatabase(zip: JSZip): Promise<{ dbData: Uint8Array | null; formatVersion: FormatVersion }> {
  // Try latest format first (collection.anki21b - zstd compressed)
  const anki21bFile = zip.file('collection.anki21b')
  if (anki21bFile) {
    try {
      const compressedData = new Uint8Array(await anki21bFile.async('arraybuffer'))
      const decompressedData = decompress(compressedData)
      return { dbData: decompressedData, formatVersion: 'latest' }
    } catch (error) {
      console.warn('Failed to decompress anki21b, trying legacy formats:', error)
    }
  }

  // Try legacy2 format (collection.anki21 - uncompressed)
  const anki21File = zip.file('collection.anki21')
  if (anki21File) {
    const dbData = new Uint8Array(await anki21File.async('arraybuffer'))
    return { dbData, formatVersion: 'legacy2' }
  }

  // Try legacy format (collection.anki2 - uncompressed)
  const anki2File = zip.file('collection.anki2')
  if (anki2File) {
    const dbData = new Uint8Array(await anki2File.async('arraybuffer'))

    // Check if this is a stub database (for backwards compat)
    // Stub databases typically have very few notes (0-1) with upgrade message
    const isStub = await checkIfStubDatabase(dbData)
    if (isStub && anki21bFile) {
      // If it's a stub and we have anki21b, that means decompression failed
      throw new Error('This Anki package uses a format that requires zstd decompression. The file may be corrupted.')
    }

    return { dbData, formatVersion: 'legacy' }
  }

  return { dbData: null, formatVersion: 'legacy' }
}

/**
 * Check if a database is a stub (placeholder for newer formats)
 */
async function checkIfStubDatabase(dbData: Uint8Array): Promise<boolean> {
  try {
    const SQL = await initSqlJs({
      locateFile: () => SQL_WASM_URL
    })
    const db = new SQL.Database(dbData)

    try {
      const result = db.exec('SELECT COUNT(*) FROM notes')
      const noteCount = result[0]?.values[0]?.[0] as number
      if (noteCount <= 1) {
        // Check if the single note is an upgrade message
        const notesResult = db.exec('SELECT flds FROM notes LIMIT 1')
        const flds = notesResult[0]?.values[0]?.[0] as string
        if (flds && flds.toLowerCase().includes('update')) {
          return true
        }
      }
      return false
    } finally {
      db.close()
    }
  } catch {
    return false
  }
}

/**
 * Parse the media mapping file (handles both JSON and Protobuf/zstd formats)
 */
async function parseMediaMapping(zip: JSZip, formatVersion: FormatVersion): Promise<Record<string, string>> {
  const mediaFile = zip.file('media')
  if (!mediaFile) {
    console.log('[Anki Import] No media mapping file found in ZIP')
    // Fallback: try to build mapping from numbered files in ZIP
    return await buildMediaMappingFromZip(zip)
  }

  try {
    const rawData = new Uint8Array(await mediaFile.async('arraybuffer'))
    console.log(`[Anki Import] Media file size: ${rawData.length} bytes, first 4 bytes: ${rawData[0]?.toString(16)} ${rawData[1]?.toString(16)} ${rawData[2]?.toString(16)} ${rawData[3]?.toString(16)}`)

    // Check if it's zstd compressed (magic number: 0x28 0xB5 0x2F 0xFD)
    if (rawData.length >= 4 &&
        rawData[0] === 0x28 &&
        rawData[1] === 0xB5 &&
        rawData[2] === 0x2F &&
        rawData[3] === 0xFD) {
      console.log('[Anki Import] Media mapping is zstd compressed, decompressing...')
      const decompressedMedia = decompress(rawData)
      const mapping = parseDecompressedMediaMapping(decompressedMedia)
      console.log(`[Anki Import] Parsed ${Object.keys(mapping).length} media entries from protobuf`)
      return mapping
    }

    // Try as JSON (legacy format)
    const content = new TextDecoder().decode(rawData)
    if (content.startsWith('{')) {
      const mapping = JSON.parse(content)
      console.log(`[Anki Import] Parsed ${Object.keys(mapping).length} media entries from JSON`)
      return mapping
    }

    // If it starts with other data, might be uncompressed protobuf
    console.log('[Anki Import] Trying to parse as uncompressed protobuf...')
    const mapping = parseDecompressedMediaMapping(rawData)
    console.log(`[Anki Import] Parsed ${Object.keys(mapping).length} media entries from uncompressed protobuf`)
    return mapping
  } catch (error) {
    console.warn('[Anki Import] Failed to parse media mapping:', error)
    // Fallback: try to build mapping from numbered files in ZIP
    console.log('[Anki Import] Falling back to building mapping from ZIP files...')
    return await buildMediaMappingFromZip(zip)
  }
}

/**
 * Parse decompressed media mapping (protobuf format)
 * Extracts filename strings from the binary data
 */
function parseDecompressedMediaMapping(data: Uint8Array): Record<string, string> {
  const mapping: Record<string, string> = {}
  const textDecoder = new TextDecoder('utf-8', { fatal: false })

  // The protobuf contains MediaEntry messages
  // Each entry has: index (varint), filename (string), checksum (bytes)
  // We'll extract strings that look like filenames

  let fileIndex = 0
  let i = 0

  while (i < data.length) {
    // Look for length-prefixed strings (wire type 2)
    const tag = data[i]
    const wireType = tag & 0x07
    const fieldNumber = tag >> 3

    if (wireType === 2 && i + 1 < data.length) { // Length-delimited
      i++

      // Read length as varint
      let length = 0
      let shift = 0
      while (i < data.length && (data[i] & 0x80) !== 0) {
        length |= (data[i] & 0x7f) << shift
        shift += 7
        i++
      }
      if (i < data.length) {
        length |= (data[i] & 0x7f) << shift
        i++
      }

      // Extract the string if it's a reasonable length for a filename
      if (length > 0 && length < 300 && i + length <= data.length) {
        const strBytes = data.slice(i, i + length)
        const str = textDecoder.decode(strBytes)

        // Check if it looks like a media filename
        if (isMediaFilename(str)) {
          mapping[fileIndex.toString()] = str
          fileIndex++
        }
      }

      i += length
    } else {
      i++
    }
  }

  return mapping
}

/**
 * Check if a string looks like a media filename
 */
function isMediaFilename(str: string): boolean {
  if (!str || str.length < 4 || str.length > 255) return false

  // Must have a file extension
  const extMatch = str.match(/\.([a-zA-Z0-9]{2,5})$/)
  if (!extMatch) return false

  const ext = extMatch[1].toLowerCase()
  const validExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg', 'mp3', 'mp4', 'wav', 'ogg', 'm4a', 'webm']

  return validExtensions.includes(ext) && /^[\x20-\x7E\u00A0-\uFFFF]+$/.test(str)
}

/**
 * Build media mapping by inspecting ZIP contents
 */
async function buildMediaMappingFromZip(zip: JSZip): Promise<Record<string, string>> {
  const mapping: Record<string, string> = {}

  // Look for numbered files (0, 1, 2, etc.) and try to determine their types
  for (let i = 0; i < 1000; i++) {
    const file = zip.file(i.toString())
    if (!file) break

    try {
      // Read first bytes to detect file type
      const header = new Uint8Array(await file.async('arraybuffer').then(b => b.slice(0, 12)))
      const ext = detectFileExtension(header)
      mapping[i.toString()] = `media_${i}${ext}`
    } catch {
      mapping[i.toString()] = `media_${i}.bin`
    }
  }

  return mapping
}

/**
 * Detect file extension from magic bytes
 */
function detectFileExtension(header: Uint8Array): string {
  if (header.length < 4) return '.bin'

  // JPEG: FF D8 FF
  if (header[0] === 0xFF && header[1] === 0xD8 && header[2] === 0xFF) {
    return '.jpg'
  }

  // PNG: 89 50 4E 47
  if (header[0] === 0x89 && header[1] === 0x50 && header[2] === 0x4E && header[3] === 0x47) {
    return '.png'
  }

  // GIF: 47 49 46
  if (header[0] === 0x47 && header[1] === 0x49 && header[2] === 0x46) {
    return '.gif'
  }

  // WebP: RIFF....WEBP
  if (header[0] === 0x52 && header[1] === 0x49 && header[2] === 0x46 && header[3] === 0x46) {
    if (header.length >= 12 && header[8] === 0x57 && header[9] === 0x45 && header[10] === 0x42 && header[11] === 0x50) {
      return '.webp'
    }
  }

  // MP3: FF FB or ID3
  if ((header[0] === 0xFF && (header[1] & 0xE0) === 0xE0) ||
      (header[0] === 0x49 && header[1] === 0x44 && header[2] === 0x33)) {
    return '.mp3'
  }

  // MP4/M4A: ....ftyp
  if (header[4] === 0x66 && header[5] === 0x74 && header[6] === 0x79 && header[7] === 0x70) {
    return '.mp4'
  }

  // OGG: OggS
  if (header[0] === 0x4F && header[1] === 0x67 && header[2] === 0x67 && header[3] === 0x53) {
    return '.ogg'
  }

  // WAV: RIFF....WAVE
  if (header[0] === 0x52 && header[1] === 0x49 && header[2] === 0x46 && header[3] === 0x46) {
    if (header.length >= 12 && header[8] === 0x57 && header[9] === 0x41 && header[10] === 0x56 && header[11] === 0x45) {
      return '.wav'
    }
  }

  return '.bin'
}

/**
 * Extract media files from ZIP (handles zstd compressed media in latest format)
 */
async function extractMediaFiles(
  zip: JSZip,
  mediaMapping: Record<string, string>,
  formatVersion: FormatVersion
): Promise<Map<string, Blob>> {
  const media = new Map<string, Blob>()

  console.log(`[Anki Import] Extracting media files. Mapping has ${Object.keys(mediaMapping).length} entries. Format: ${formatVersion}`)

  // Media files are stored as numbered files (0, 1, 2, etc.)
  for (const [numberedName, originalName] of Object.entries(mediaMapping)) {
    const file = zip.file(numberedName)
    if (!file) {
      console.warn(`[Anki Import] Numbered file "${numberedName}" not found in ZIP for "${originalName}"`)
      continue
    }

    try {
      let blobData: Uint8Array

      if (formatVersion === 'latest') {
        // Latest format has zstd compressed media
        const compressedData = new Uint8Array(await file.async('arraybuffer'))

        // Check if it's actually compressed (zstd magic number: 0x28 0xB5 0x2F 0xFD)
        if (compressedData.length >= 4 &&
            compressedData[0] === 0x28 &&
            compressedData[1] === 0xB5 &&
            compressedData[2] === 0x2F &&
            compressedData[3] === 0xFD) {
          blobData = decompress(compressedData)
        } else {
          // Not compressed, use as-is
          blobData = compressedData
        }
      } else {
        // Legacy formats have uncompressed media
        blobData = new Uint8Array(await file.async('arraybuffer'))
      }

      // Determine MIME type from extension or magic bytes
      const mimeType = getMimeType(originalName, blobData)
      const blob = new Blob([blobData], { type: mimeType })
      media.set(originalName, blob)
      console.log(`[Anki Import] Extracted "${numberedName}" -> "${originalName}" (${blobData.length} bytes, ${mimeType})`)
    } catch (error) {
      console.warn(`[Anki Import] Failed to extract media ${numberedName}:`, error)
    }
  }

  console.log(`[Anki Import] Total extracted media files: ${media.size}`)
  return media
}

/**
 * Get MIME type from filename extension or magic bytes
 */
function getMimeType(filename: string, data: Uint8Array): string {
  const ext = filename.toLowerCase().split('.').pop()

  // First try extension
  const mimeByExt: Record<string, string> = {
    'jpg': 'image/jpeg',
    'jpeg': 'image/jpeg',
    'png': 'image/png',
    'gif': 'image/gif',
    'webp': 'image/webp',
    'svg': 'image/svg+xml',
    'mp3': 'audio/mpeg',
    'mp4': 'video/mp4',
    'm4a': 'audio/mp4',
    'wav': 'audio/wav',
    'ogg': 'audio/ogg',
  }

  if (ext && mimeByExt[ext]) {
    return mimeByExt[ext]
  }

  // Fallback to magic bytes detection
  if (data.length >= 4) {
    if (data[0] === 0xFF && data[1] === 0xD8 && data[2] === 0xFF) return 'image/jpeg'
    if (data[0] === 0x89 && data[1] === 0x50 && data[2] === 0x4E && data[3] === 0x47) return 'image/png'
    if (data[0] === 0x47 && data[1] === 0x49 && data[2] === 0x46) return 'image/gif'
  }

  return 'application/octet-stream'
}

/**
 * Parse the SQLite database
 */
async function parseSqliteDatabase(dbData: Uint8Array): Promise<{
  notes: AnkiNote[]
  deckName: string
  models: Map<number, AnkiModel>
}> {
  // Initialize SQL.js
  const SQL = await initSqlJs({
    locateFile: () => SQL_WASM_URL
  })

  const db = new SQL.Database(dbData)

  try {
    // Get deck name from col table
    const deckName = getDeckName(db)

    // Get models (note types)
    const models = getModels(db)

    // Get all notes
    const notes = getNotes(db)

    return { notes, deckName, models }
  } finally {
    db.close()
  }
}

/**
 * Get the primary deck name from the collection
 * Supports both legacy (JSON in col.decks) and v18 (separate decks table) schemas
 */
function getDeckName(db: Database): string {
  // First, try the new schema v18 with separate decks table
  try {
    const decksTableResult = db.exec("SELECT name FROM sqlite_master WHERE type='table' AND name='decks'")
    if (decksTableResult.length > 0 && decksTableResult[0].values.length > 0) {
      // New schema - decks are in a separate table
      const decksResult = db.exec('SELECT id, name FROM decks WHERE name != "Default" ORDER BY id DESC LIMIT 1')
      if (decksResult.length > 0 && decksResult[0].values.length > 0) {
        let deckName = decksResult[0].values[0][1] as string
        // Handle hierarchical deck names (separated by \x1F)
        if (deckName.includes('\x1F')) {
          deckName = deckName.split('\x1F').pop() || deckName
        }
        return deckName
      }
    }
  } catch (error) {
    console.warn('Failed to get deck name from decks table:', error)
  }

  // Fallback to legacy schema (JSON in col.decks column)
  try {
    const result = db.exec('SELECT decks FROM col LIMIT 1')
    if (result.length > 0 && result[0].values.length > 0) {
      const decksJson = result[0].values[0][0] as string
      if (decksJson && decksJson.trim()) {
        const decks = JSON.parse(decksJson)

        // Find the first non-default deck, or use default
        for (const deck of Object.values(decks) as { name: string; id: number }[]) {
          if (deck.name !== 'Default' && deck.id !== 1) {
            return deck.name
          }
        }

        // Return first deck name
        const firstDeck = Object.values(decks)[0] as { name: string } | undefined
        return firstDeck?.name || 'Imported Deck'
      }
    }
  } catch (error) {
    console.warn('Failed to get deck name from col.decks:', error)
  }

  return 'Imported Deck'
}

/**
 * Get note models (templates) from the collection
 * Supports both legacy (JSON in col.models) and v18 (separate notetypes table) schemas
 */
function getModels(db: Database): Map<number, AnkiModel> {
  const models = new Map<number, AnkiModel>()

  // First, try the new schema v18 with separate notetypes table
  try {
    const notetypesTableResult = db.exec("SELECT name FROM sqlite_master WHERE type='table' AND name='notetypes'")
    if (notetypesTableResult.length > 0 && notetypesTableResult[0].values.length > 0) {
      // New schema - notetypes are in a separate table
      const notetypesResult = db.exec('SELECT id, name, config FROM notetypes')
      if (notetypesResult.length > 0) {
        for (const row of notetypesResult[0].values) {
          const [id, name, config] = row as [number, string, Uint8Array | null]
          // In v18, config is a protobuf blob - we'll use basic detection for cloze
          // Cloze notetypes typically have "Cloze" in the name
          const isCloze = name.toLowerCase().includes('cloze')
          models.set(id, {
            id,
            name,
            fieldNames: ['Front', 'Back'], // Default field names
            isCloze
          })
        }
        if (models.size > 0) {
          return models
        }
      }
    }
  } catch (error) {
    console.warn('Failed to get models from notetypes table:', error)
  }

  // Fallback to legacy schema (JSON in col.models column)
  try {
    const result = db.exec('SELECT models FROM col LIMIT 1')
    if (result.length > 0 && result[0].values.length > 0) {
      const modelsJson = result[0].values[0][0] as string
      if (modelsJson && modelsJson.trim()) {
        const modelsData = JSON.parse(modelsJson)

        for (const [id, model] of Object.entries(modelsData) as [string, {
          name: string
          flds: { name: string }[]
          type: number
        }][]) {
          models.set(Number(id), {
            id: Number(id),
            name: model.name,
            fieldNames: model.flds.map(f => f.name),
            isCloze: model.type === 1 // type 1 = cloze
          })
        }
      }
    }
  } catch (error) {
    console.warn('Failed to get models from col.models:', error)
  }

  return models
}

/**
 * Get all notes from the database
 */
function getNotes(db: Database): AnkiNote[] {
  const notes: AnkiNote[] = []

  try {
    const result = db.exec('SELECT id, mid, flds, tags FROM notes')
    if (result.length > 0) {
      for (const row of result[0].values) {
        const [id, mid, flds, tags] = row as [number, number, string, string]

        notes.push({
          id,
          modelId: mid,
          fields: flds.split(FIELD_SEPARATOR),
          tags: tags.trim().split(/\s+/).filter(t => t.length > 0)
        })
      }
    }
  } catch (error) {
    console.error('Failed to get notes:', error)
  }

  return notes
}

/**
 * Convert Anki notes to card format
 * PRESERVES HTML formatting - only sanitizes dangerous content
 */
function convertNotesToCards(
  notes: AnkiNote[],
  models: Map<number, AnkiModel>,
  mediaMapping: Record<string, string>
): ParsedCard[] {
  const cards: ParsedCard[] = []

  for (const note of notes) {
    const model = models.get(note.modelId)

    // Extract front and back from fields
    let front = note.fields[0] || ''
    let back = note.fields[1] || ''

    // Handle cloze deletions
    if (model?.isCloze) {
      const converted = convertClozeToBasic(front)
      front = converted.front
      back = converted.back
    }

    // If there's only one field, use it as both front and back
    if (!back && front) {
      // Check if it might be a cloze-style card
      if (front.includes('{{') && front.includes('}}')) {
        const converted = convertClozeToBasic(front)
        front = converted.front
        back = converted.back
      } else {
        back = front
      }
    }

    // Append additional fields to back if present
    if (note.fields.length > 2) {
      const additionalFields = note.fields.slice(2).filter(f => f.trim())
      if (additionalFields.length > 0) {
        back += '<hr/>' + additionalFields.join('<br/><br/>')
      }
    }

    // Sanitize HTML (keep formatting, remove dangerous content)
    const sanitizedFront = sanitizeHtml(front)
    const sanitizedBack = sanitizeHtml(back)

    // Extract media references from HTML (without modifying content)
    const frontMedia = extractMediaRefs(front, mediaMapping)
    const backMedia = extractMediaRefs(back, mediaMapping)

    cards.push({
      front: sanitizedFront,  // FULL HTML preserved
      back: sanitizedBack,    // FULL HTML preserved
      tags: note.tags,
      mediaRefs: [...new Set([...frontMedia, ...backMedia])]
    })
  }

  return cards
}

/**
 * Convert Anki cloze deletion format to basic question/answer
 */
function convertClozeToBasic(content: string): { front: string; back: string } {
  // Match cloze patterns: {{c1::answer}} or {{c1::answer::hint}}
  const clozePattern = /\{\{c\d+::([^}:]+)(?:::([^}]+))?\}\}/g

  // For front: replace cloze with [...] or hint
  const front = content.replace(clozePattern, (_, _answer, hint) => {
    return hint ? `[${hint}]` : '[...]'
  })

  // For back: replace cloze with the answer (highlighted)
  const back = content.replace(clozePattern, (_, answer) => {
    return `**${answer}**`
  })

  return { front, back }
}

/**
 * Extract media filenames from HTML content WITHOUT modifying the content
 * Returns list of ALL local media filenames referenced in the HTML
 * More lenient - extracts all local refs, upload will skip missing ones
 */
function extractMediaRefs(html: string, mediaMapping: Record<string, string>): string[] {
  const mediaRefs: string[] = []
  const mediaValues = new Set(Object.values(mediaMapping))

  // Extract image references from <img src="..."> tags
  const imgPattern = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi
  let match
  while ((match = imgPattern.exec(html)) !== null) {
    const src = match[1]
    // Check if this is a local media file reference (not external URL)
    if (!src.startsWith('http://') && !src.startsWith('https://') && !src.startsWith('data:')) {
      // Add ALL local media references - upload will handle missing ones
      mediaRefs.push(src)

      // Debug log
      if (!mediaValues.has(src)) {
        console.log(`[Anki Import] Image src "${src}" not found in media mapping, will try anyway`)
      }
    }
  }

  // Extract sound references [sound:filename.mp3]
  const soundPattern = /\[sound:([^\]]+)\]/gi
  while ((match = soundPattern.exec(html)) !== null) {
    const filename = match[1]
    mediaRefs.push(filename)
  }

  if (mediaRefs.length > 0) {
    console.log(`[Anki Import] Extracted ${mediaRefs.length} media refs:`, mediaRefs)
  }

  return mediaRefs
}

/**
 * Sanitize HTML - KEEP formatting, only remove dangerous content
 * This preserves all visual formatting (bold, colors, images, etc.)
 */
function sanitizeHtml(html: string): string {
  return html
    // Remove sound tags (we'll handle audio separately if needed)
    .replace(/\[sound:[^\]]+\]/gi, '')
    // Remove script tags and their content (XSS prevention)
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    // Remove style tags and their content (can contain expressions)
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    // Remove event handlers (onclick, onerror, onload, etc.)
    .replace(/\s+on\w+\s*=\s*["'][^"']*["']/gi, '')
    .replace(/\s+on\w+\s*=\s*[^\s>]*/gi, '')
    // Remove javascript: URLs
    .replace(/href\s*=\s*["']javascript:[^"']*["']/gi, 'href="#"')
    .replace(/src\s*=\s*["']javascript:[^"']*["']/gi, 'src=""')
    // Remove data: URLs in iframes (potential XSS vector)
    .replace(/<iframe[^>]*src\s*=\s*["']data:[^"']*["'][^>]*>/gi, '')
    // Remove object/embed tags (plugin execution)
    .replace(/<object[^>]*>[\s\S]*?<\/object>/gi, '')
    .replace(/<embed[^>]*>/gi, '')
    // Trim whitespace
    .trim()
}

/**
 * Strip HTML for preview display ONLY - used in card list view
 * Converts HTML to plain text for showing in tables/lists
 * This is NOT stored in the card - only used for display
 */
export function stripHtmlForPreview(html: string): string {
  return html
    // Remove sound tags
    .replace(/\[sound:[^\]]+\]/gi, '')
    // Remove script/style tags and content
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    // Convert <br> to spaces (for inline preview)
    .replace(/<br\s*\/?>/gi, ' ')
    // Convert block elements to spaces
    .replace(/<\/p>/gi, ' ')
    .replace(/<\/div>/gi, ' ')
    .replace(/<\/li>/gi, ' ')
    // Remove all remaining HTML tags
    .replace(/<[^>]+>/g, '')
    // Decode common HTML entities
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&apos;/gi, "'")
    // Decode numeric HTML entities
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(parseInt(code, 10)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, code) => String.fromCharCode(parseInt(code, 16)))
    // Normalize whitespace
    .replace(/\s+/g, ' ')
    // Trim
    .trim()
}

/**
 * Upload media files and update card content with Firebase URLs
 */
export async function uploadMediaAndCreateCards(
  parsedDeck: ParsedAnkiDeck,
  deckId: string,
  onProgress?: ImportProgressCallback
): Promise<{ cards: Array<{ front: CardContent; back: CardContent; tags: string[] }>; mediaCount: number }> {
  // Collect all unique media files needed
  const neededMedia = new Set<string>()
  for (const card of parsedDeck.cards) {
    for (const ref of card.mediaRefs) {
      neededMedia.add(ref)
    }
  }

  console.log(`[Anki Import] Need ${neededMedia.size} unique media files:`, [...neededMedia])
  console.log(`[Anki Import] Available in media Map: ${parsedDeck.media.size} files:`, [...parsedDeck.media.keys()])

  // Upload media files and build URL mapping
  const mediaUrls = new Map<string, CardImage>()
  let uploadedCount = 0
  let skippedCount = 0
  const totalMedia = neededMedia.size

  if (totalMedia > 0) {
    onProgress?.('Uploading media...', 0, `0/${totalMedia}`)
  }

  for (const filename of neededMedia) {
    const blob = parsedDeck.media.get(filename)
    if (!blob) {
      console.warn(`[Anki Import] Media file not found in extracted media: "${filename}"`)
      skippedCount++
      continue
    }

    try {
      onProgress?.('Uploading media...', Math.round((uploadedCount / totalMedia) * 100), `${uploadedCount + 1}/${totalMedia}`)

      // Convert blob to File
      const file = new File([blob], filename, { type: blob.type || 'image/jpeg' })

      // Generate a temporary card ID for storage path
      const tempCardId = `import_${deckId}_${Date.now()}_${uploadedCount}`

      // Upload to Firebase Storage
      const cardImage = await uploadCardImage(file, tempCardId)
      mediaUrls.set(filename, cardImage)
      console.log(`[Anki Import] Uploaded "${filename}" -> ${cardImage.url}`)
      uploadedCount++
    } catch (error) {
      console.warn(`[Anki Import] Failed to upload media ${filename}:`, error)
    }
  }

  console.log(`[Anki Import] Upload complete: ${uploadedCount} uploaded, ${skippedCount} skipped`)

  // Convert cards with media URLs
  const cards = parsedDeck.cards.map(card => {
    const frontContent = replaceMediaRefs(card.front, mediaUrls)
    const backContent = replaceMediaRefs(card.back, mediaUrls)

    return {
      front: frontContent,
      back: backContent,
      tags: card.tags
    }
  })

  return { cards, mediaCount: uploadedCount }
}

/**
 * Replace media references in content with Firebase URLs
 */
function replaceMediaRefs(
  content: string,
  mediaUrls: Map<string, CardImage>
): CardContent {
  let text = content
  const images: CardImage[] = []

  // Replace image src attributes
  for (const [filename, cardImage] of mediaUrls) {
    // Escape filename for regex
    const escapedFilename = escapeRegExp(filename)

    // Check if this filename exists in the content (simple string check first)
    if (text.includes(filename)) {
      // Replace in img tags
      const imgPattern = new RegExp(`(<img[^>]*\\ssrc=["'])${escapedFilename}(["'][^>]*>)`, 'gi')
      const newText = text.replace(imgPattern, `$1${cardImage.url}$2`)

      if (newText !== text) {
        text = newText
        images.push(cardImage)
        console.log(`[Anki Import] Replaced image "${filename}" with Firebase URL`)
      }
    }

    // Also handle markdown-style image references ![alt](filename)
    if (text.includes(filename)) {
      const mdPattern = new RegExp(`!\\[([^\\]]*)\\]\\(${escapedFilename}\\)`, 'gi')
      const newTextMd = text.replace(mdPattern, `![$1](${cardImage.url})`)

      if (newTextMd !== text) {
        text = newTextMd
        if (!images.find(img => img.id === cardImage.id)) {
          images.push(cardImage)
          console.log(`[Anki Import] Replaced markdown image "${filename}" with Firebase URL`)
        }
      }
    }
  }

  // Only include images field if there are actual images (Firestore doesn't accept undefined)
  if (images.length > 0) {
    return { text, images }
  }
  return { text }
}

/**
 * Escape special regex characters in a string
 */
function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}
