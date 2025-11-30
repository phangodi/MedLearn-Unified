/**
 * Anki .apkg Export Service
 *
 * Creates Anki-compatible flashcard packages (.apkg files) from MedLearn decks.
 * Exports raw content only (no learning progress).
 *
 * The .apkg format is a ZIP file containing:
 * - collection.anki21: SQLite database with cards, notes, and deck config
 * - media: JSON file mapping numbered files to original filenames
 * - 0, 1, 2...: Numbered media files
 */

import JSZip from 'jszip'
import initSqlJs, { type Database } from 'sql.js'
import { ref, getBlob } from 'firebase/storage'
import { storage } from '@/firebase/config'
import type { Deck, FlashCard } from '../types/flashcard'

// Field separator in Anki notes (ASCII 31 - Unit Separator)
const FIELD_SEPARATOR = String.fromCharCode(31)

// SQL.js WASM URL - use CDN for reliable loading
const SQL_WASM_URL = 'https://sql.js.org/dist/sql-wasm.wasm'

/**
 * Progress callback for export stages
 */
export type ExportProgressCallback = (stage: string, progress: number, detail?: string) => void

/**
 * Result of exporting an Anki deck
 */
export interface AnkiExportResult {
  blob: Blob
  filename: string
  cardCount: number
  mediaCount: number
}

/**
 * Media mapping between URLs and local filenames
 */
interface MediaMapping {
  indexToFilename: Record<string, string>  // "0" -> "image1.jpg"
  urlToIndex: Map<string, number>          // Firebase URL -> 0
}

/**
 * Main export function - creates an .apkg file from a MedLearn deck
 */
export async function exportDeckToApkg(
  deck: Deck,
  cards: FlashCard[],
  onProgress?: ExportProgressCallback
): Promise<AnkiExportResult> {
  onProgress?.('Initializing...', 0)

  // Step 1: Collect and download media files
  onProgress?.('Downloading media...', 10)
  const { mediaMapping, mediaFiles } = await collectMedia(cards, onProgress)

  // Step 2: Initialize SQL.js and create database
  onProgress?.('Creating database...', 50)
  const SQL = await initSqlJs({
    locateFile: () => SQL_WASM_URL
  })
  const db = new SQL.Database()

  try {
    // Step 3: Create Anki schema
    createAnkiSchema(db)

    // Step 4: Insert collection data (deck config, models)
    const { modelId, deckId } = insertCollectionData(db, deck)

    // Step 5: Insert notes and cards
    onProgress?.('Adding cards...', 70)
    insertNotesAndCards(db, deckId, modelId, cards, mediaMapping)

    // Step 6: Export database to binary
    const dbData = db.export()

    // Step 7: Create ZIP package
    onProgress?.('Creating package...', 85)
    const zip = new JSZip()

    // Add database file (use anki21 format for compatibility)
    zip.file('collection.anki21', dbData)

    // Add media mapping file
    zip.file('media', JSON.stringify(mediaMapping.indexToFilename))

    // Add media files
    for (const [index, blob] of mediaFiles) {
      const arrayBuffer = await blob.arrayBuffer()
      zip.file(index.toString(), new Uint8Array(arrayBuffer))
    }

    // Generate ZIP blob
    onProgress?.('Finalizing...', 95)
    const zipBlob = await zip.generateAsync({ type: 'blob' })

    // Create filename
    const safeName = deck.name.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase()
    const filename = `${safeName}.apkg`

    onProgress?.('Complete!', 100)

    return {
      blob: zipBlob,
      filename,
      cardCount: cards.length,
      mediaCount: mediaFiles.size
    }
  } finally {
    db.close()
  }
}

/**
 * Create Anki SQLite schema
 */
function createAnkiSchema(db: Database): void {
  // Collection table (single row with config)
  db.run(`
    CREATE TABLE col (
      id INTEGER PRIMARY KEY,
      crt INTEGER NOT NULL,
      mod INTEGER NOT NULL,
      scm INTEGER NOT NULL,
      ver INTEGER NOT NULL,
      dty INTEGER NOT NULL,
      usn INTEGER NOT NULL,
      ls INTEGER NOT NULL,
      conf TEXT NOT NULL,
      models TEXT NOT NULL,
      decks TEXT NOT NULL,
      dconf TEXT NOT NULL,
      tags TEXT NOT NULL
    )
  `)

  // Notes table (the actual content)
  db.run(`
    CREATE TABLE notes (
      id INTEGER PRIMARY KEY,
      guid TEXT NOT NULL,
      mid INTEGER NOT NULL,
      mod INTEGER NOT NULL,
      usn INTEGER NOT NULL,
      tags TEXT NOT NULL,
      flds TEXT NOT NULL,
      sfld TEXT NOT NULL,
      csum INTEGER NOT NULL,
      flags INTEGER NOT NULL,
      data TEXT NOT NULL
    )
  `)

  // Cards table (scheduling info)
  db.run(`
    CREATE TABLE cards (
      id INTEGER PRIMARY KEY,
      nid INTEGER NOT NULL,
      did INTEGER NOT NULL,
      ord INTEGER NOT NULL,
      mod INTEGER NOT NULL,
      usn INTEGER NOT NULL,
      type INTEGER NOT NULL,
      queue INTEGER NOT NULL,
      due INTEGER NOT NULL,
      ivl INTEGER NOT NULL,
      factor INTEGER NOT NULL,
      reps INTEGER NOT NULL,
      lapses INTEGER NOT NULL,
      left INTEGER NOT NULL,
      odue INTEGER NOT NULL,
      odid INTEGER NOT NULL,
      flags INTEGER NOT NULL,
      data TEXT NOT NULL
    )
  `)

  // Review log table (empty for fresh export)
  db.run(`
    CREATE TABLE revlog (
      id INTEGER PRIMARY KEY,
      cid INTEGER NOT NULL,
      usn INTEGER NOT NULL,
      ease INTEGER NOT NULL,
      ivl INTEGER NOT NULL,
      lastIvl INTEGER NOT NULL,
      factor INTEGER NOT NULL,
      time INTEGER NOT NULL,
      type INTEGER NOT NULL
    )
  `)

  // Graves table (deleted items - empty)
  db.run(`
    CREATE TABLE graves (
      usn INTEGER NOT NULL,
      oid INTEGER NOT NULL,
      type INTEGER NOT NULL
    )
  `)

  // Create indices for better Anki import performance
  db.run('CREATE INDEX ix_notes_csum ON notes (csum)')
  db.run('CREATE INDEX ix_notes_usn ON notes (usn)')
  db.run('CREATE INDEX ix_cards_nid ON cards (nid)')
  db.run('CREATE INDEX ix_cards_sched ON cards (did, queue, due)')
  db.run('CREATE INDEX ix_cards_usn ON cards (usn)')
  db.run('CREATE INDEX ix_revlog_cid ON revlog (cid)')
  db.run('CREATE INDEX ix_revlog_usn ON revlog (usn)')
}

/**
 * Insert collection metadata (deck config, note types)
 */
function insertCollectionData(db: Database, deck: Deck): { modelId: number; deckId: number } {
  const now = Math.floor(Date.now() / 1000)
  const modelId = generateAnkiId()
  const deckId = generateAnkiId()

  // Basic note type (Front/Back)
  const models: Record<string, unknown> = {
    [modelId.toString()]: {
      id: modelId,
      name: 'Basic',
      type: 0,
      mod: now,
      usn: -1,
      sortf: 0,
      did: null,
      tmpls: [{
        name: 'Card 1',
        ord: 0,
        qfmt: '{{Front}}',
        afmt: '{{FrontSide}}<hr id=answer>{{Back}}',
        bqfmt: '',
        bafmt: '',
        did: null,
        bfont: '',
        bsize: 0
      }],
      flds: [
        { name: 'Front', ord: 0, sticky: false, rtl: false, font: 'Arial', size: 20, media: [] },
        { name: 'Back', ord: 1, sticky: false, rtl: false, font: 'Arial', size: 20, media: [] }
      ],
      css: '.card { font-family: arial; font-size: 16px; text-align: left; color: black; background-color: white; line-height: 1.6; padding: 20px; } .card.nightMode { color: #e0e0e0; background-color: #1a1a1a; } strong, b { font-weight: bold; } a { color: #b91c1c; } .card.nightMode a { color: #ef4444; } ul, ol { margin: 0.5em 0; padding-left: 1.5em; } li { margin: 0.25em 0; } hr { border: none; border-top: 1px solid #ccc; margin: 1em 0; } sub { font-size: 0.75em; vertical-align: sub; } sup { font-size: 0.75em; vertical-align: super; } img { max-width: 100%; height: auto; } table { border-collapse: collapse; width: 100%; margin: 1em 0; } th, td { border: 1px solid #d1d5db; padding: 8px 12px; text-align: left; } th { background-color: #1e3a5f; color: white; font-weight: 600; } .card.nightMode th { background-color: #1e3a5f; color: white; } .card.nightMode td { border-color: #404040; }',
      latexPre: '\\documentclass[12pt]{article}\n\\special{papersize=3in,5in}\n\\usepackage[utf8]{inputenc}\n\\usepackage{amssymb,amsmath}\n\\pagestyle{empty}\n\\setlength{\\parindent}{0in}\n\\begin{document}\n',
      latexPost: '\\end{document}',
      latexsvg: false,
      req: [[0, 'all', [0]]]
    }
  }

  // Deck configuration
  const decks: Record<string, unknown> = {
    '1': {
      id: 1,
      name: 'Default',
      mod: 0,
      usn: -1,
      lrnToday: [0, 0],
      revToday: [0, 0],
      newToday: [0, 0],
      timeToday: [0, 0],
      collapsed: false,
      browserCollapsed: false,
      desc: '',
      dyn: 0,
      conf: 1,
      extendNew: 10,
      extendRev: 50
    },
    [deckId.toString()]: {
      id: deckId,
      name: deck.name,
      mod: now,
      usn: -1,
      lrnToday: [0, 0],
      revToday: [0, 0],
      newToday: [0, 0],
      timeToday: [0, 0],
      collapsed: false,
      browserCollapsed: false,
      desc: deck.description || '',
      dyn: 0,
      conf: 1,
      extendNew: 10,
      extendRev: 50
    }
  }

  // Deck options
  const dconf: Record<string, unknown> = {
    '1': {
      id: 1,
      name: 'Default',
      mod: 0,
      usn: -1,
      maxTaken: 60,
      autoplay: true,
      timer: 0,
      replayq: true,
      new: {
        bury: false,
        delays: [1, 10],
        initialFactor: 2500,
        ints: [1, 4, 0],
        order: 1,
        perDay: 20
      },
      rev: {
        bury: false,
        ease4: 1.3,
        ivlFct: 1,
        maxIvl: 36500,
        perDay: 200,
        hardFactor: 1.2
      },
      lapse: {
        delays: [10],
        leechAction: 1,
        leechFails: 8,
        minInt: 1,
        mult: 0
      }
    }
  }

  // Scheduler config
  const conf: Record<string, unknown> = {
    nextPos: 1,
    estTimes: true,
    activeDecks: [1],
    sortType: 'noteFld',
    timeLim: 0,
    sortBackwards: false,
    addToCur: true,
    curDeck: 1,
    newSpread: 0,
    dueCounts: true,
    curModel: modelId,
    collapseTime: 1200
  }

  db.run(
    `INSERT INTO col VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      1,                          // id
      now,                        // crt (creation time)
      Date.now(),                 // mod (modification time in ms)
      Date.now(),                 // scm (schema modification time)
      11,                         // ver (schema version)
      0,                          // dty (dirty flag)
      -1,                         // usn (update sequence number)
      0,                          // ls (last sync)
      JSON.stringify(conf),       // conf
      JSON.stringify(models),     // models
      JSON.stringify(decks),      // decks
      JSON.stringify(dconf),      // dconf
      '{}'                        // tags
    ]
  )

  return { modelId, deckId }
}

/**
 * Insert notes and cards into the database
 */
function insertNotesAndCards(
  db: Database,
  deckId: number,
  modelId: number,
  cards: FlashCard[],
  mediaMapping: MediaMapping
): void {
  let cardPosition = 0

  for (const card of cards) {
    const noteId = generateAnkiId()
    const cardId = generateAnkiId()
    const now = Math.floor(Date.now() / 1000)

    // Transform content (replace Firebase URLs with local filenames)
    const front = transformContentForExport(card.front.text, mediaMapping)
    const back = transformContentForExport(card.back.text, mediaMapping)

    // Insert note
    db.run(
      `INSERT INTO notes VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        noteId,
        generateGuid(),
        modelId,
        now,
        -1,                                      // usn
        card.tags.join(' '),                     // tags (space-separated)
        front + FIELD_SEPARATOR + back,          // flds (fields joined by \x1f)
        stripHtml(front).substring(0, 100),      // sfld (sort field)
        fieldChecksum(front),                    // csum
        0,                                       // flags
        ''                                       // data
      ]
    )

    // Insert card (as new card with no learning progress)
    db.run(
      `INSERT INTO cards VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        cardId,
        noteId,
        deckId,
        0,               // ord (card ordinal)
        now,             // mod
        -1,              // usn
        0,               // type (0 = new)
        0,               // queue (0 = new)
        cardPosition++,  // due (position for new cards)
        0,               // ivl (interval)
        0,               // factor (ease factor, 0 for new)
        0,               // reps
        0,               // lapses
        0,               // left (learning steps left)
        0,               // odue
        0,               // odid
        0,               // flags
        ''               // data
      ]
    )
  }
}

/**
 * Collect and download media files from cards
 */
async function collectMedia(
  cards: FlashCard[],
  onProgress?: ExportProgressCallback
): Promise<{
  mediaMapping: MediaMapping
  mediaFiles: Map<number, Blob>
}> {
  const mediaUrls = new Set<string>()

  // Extract all image URLs from cards
  for (const card of cards) {
    extractImageUrls(card.front.text, mediaUrls)
    extractImageUrls(card.back.text, mediaUrls)
    card.front.images?.forEach(img => mediaUrls.add(img.url))
    card.back.images?.forEach(img => mediaUrls.add(img.url))
  }

  // Download each media file
  const mediaMapping: MediaMapping = { indexToFilename: {}, urlToIndex: new Map() }
  const mediaFiles = new Map<number, Blob>()

  const totalMedia = mediaUrls.size
  let index = 0
  let downloadedCount = 0

  for (const url of mediaUrls) {
    try {
      onProgress?.('Downloading media...', 10 + Math.round((downloadedCount / Math.max(totalMedia, 1)) * 40), `${downloadedCount + 1}/${totalMedia}`)

      const blob = await fetchMediaBlob(url)
      const filename = generateMediaFilename(url, index, blob.type)

      mediaMapping.indexToFilename[index.toString()] = filename
      mediaMapping.urlToIndex.set(url, index)
      mediaFiles.set(index, blob)

      index++
      downloadedCount++
    } catch (error) {
      console.warn(`Failed to download media: ${url}`, error)
      // Continue with other media - skip failures
    }
  }

  return { mediaMapping, mediaFiles }
}

/**
 * Extract image URLs from HTML content
 */
function extractImageUrls(content: string, urlSet: Set<string>): void {
  // Extract from img tags
  const imgPattern = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi
  let match
  while ((match = imgPattern.exec(content)) !== null) {
    const src = match[1]
    if (src.startsWith('http://') || src.startsWith('https://')) {
      urlSet.add(src)
    }
  }

  // Extract from markdown images
  const mdPattern = /!\[[^\]]*\]\(([^)]+)\)/g
  while ((match = mdPattern.exec(content)) !== null) {
    const src = match[1]
    if (src.startsWith('http://') || src.startsWith('https://')) {
      urlSet.add(src)
    }
  }
}

/**
 * Fetch media blob from Firebase Storage or external URL
 */
async function fetchMediaBlob(url: string): Promise<Blob> {
  // If it's a Firebase Storage URL, use Storage SDK
  if (url.includes('firebasestorage.googleapis.com') && storage) {
    const path = extractStoragePath(url)
    const storageRef = ref(storage, path)
    return await getBlob(storageRef)
  }

  // For external URLs, try direct fetch
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.status}`)
  }
  return await response.blob()
}

/**
 * Extract storage path from Firebase URL
 * URL format: https://firebasestorage.googleapis.com/v0/b/{bucket}/o/{path}?...
 */
function extractStoragePath(url: string): string {
  const urlPattern = /\/o\/(.+?)\?/
  const match = url.match(urlPattern)

  if (!match || !match[1]) {
    throw new Error('Invalid Firebase Storage URL format')
  }

  return decodeURIComponent(match[1])
}

/**
 * Generate a filename for a media file
 */
function generateMediaFilename(url: string, index: number, mimeType: string): string {
  // Try to extract original filename from URL
  const urlPath = url.split('?')[0]
  const pathParts = urlPath.split('/')
  const lastPart = pathParts[pathParts.length - 1]

  // Decode URL-encoded filename
  const decodedName = decodeURIComponent(lastPart)

  // Check if it has a valid extension
  if (/\.(jpg|jpeg|png|gif|webp|svg|mp3|mp4|wav|ogg|m4a)$/i.test(decodedName)) {
    // Clean up the filename (remove prefixes like timestamps)
    const cleanName = decodedName.replace(/^\d+_[a-z0-9]+_/, '')
    return cleanName
  }

  // Generate filename based on mime type
  const ext = getExtensionFromMimeType(mimeType)
  return `media_${index}${ext}`
}

/**
 * Get file extension from MIME type
 */
function getExtensionFromMimeType(mimeType: string): string {
  const mimeToExt: Record<string, string> = {
    'image/jpeg': '.jpg',
    'image/png': '.png',
    'image/gif': '.gif',
    'image/webp': '.webp',
    'image/svg+xml': '.svg',
    'audio/mpeg': '.mp3',
    'audio/mp4': '.m4a',
    'audio/wav': '.wav',
    'audio/ogg': '.ogg',
    'video/mp4': '.mp4'
  }
  return mimeToExt[mimeType] || '.bin'
}

/**
 * Transform content for export - replace Firebase URLs with local filenames
 */
function transformContentForExport(
  content: string,
  mediaMapping: MediaMapping
): string {
  let transformed = content

  for (const [url, index] of mediaMapping.urlToIndex) {
    const filename = mediaMapping.indexToFilename[index.toString()]

    // Escape URL for regex
    const escapedUrl = escapeRegExp(url)

    // Replace in img tags
    transformed = transformed.replace(
      new RegExp(`src=["']${escapedUrl}["']`, 'g'),
      `src="${filename}"`
    )

    // Replace in markdown images
    transformed = transformed.replace(
      new RegExp(`\\]\\(${escapedUrl}\\)`, 'g'),
      `](${filename})`
    )
  }

  return transformed
}

/**
 * Generate unique ID in Anki's format (millisecond timestamp + random)
 */
function generateAnkiId(): number {
  return Date.now() * 1000 + Math.floor(Math.random() * 1000)
}

/**
 * Generate GUID for notes (10-char base91 string)
 */
function generateGuid(): string {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&()*+,-./:;<=>?@[]^_`{|}~'
  let guid = ''
  for (let i = 0; i < 10; i++) {
    guid += chars[Math.floor(Math.random() * chars.length)]
  }
  return guid
}

/**
 * Calculate checksum for duplicate detection
 */
function fieldChecksum(field: string): number {
  // Use first 1000 chars stripped of HTML
  const str = stripHtml(field).substring(0, 1000)
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash // Convert to 32-bit integer
  }
  return Math.abs(hash)
}

/**
 * Strip HTML tags for plain text
 */
function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/\s+/g, ' ')
    .trim()
}

/**
 * Escape special regex characters
 */
function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}
