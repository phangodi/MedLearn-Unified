/**
 * Flashcard Deck Generator
 *
 * Generates beautifully-styled flashcard decks from Physiology topic data.
 *
 * Usage:
 *   npx ts-node --esm scripts/generate-flashcard-deck.ts --topics 29
 *   npx ts-node --esm scripts/generate-flashcard-deck.ts --topics 33-40 --name "MCQ3" --id "mcq3"
 *   npx ts-node --esm scripts/generate-flashcard-deck.ts --topics 41-52 --append "mcq3"
 */

import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// ============================================================================
// Types
// ============================================================================

interface LearningObjective {
  id: string
  isCritical: boolean
  title: string
  keyPoints: string[]
  officialDefinitions: string[]
  examAnswer: {
    formatted: Array<{ type: string; content?: string; items?: string[]; intro?: string; critical?: boolean }>
    raw: string
  }
  audioUrl?: string
}

interface Topic {
  id: string
  number: number
  title: string
  subtitle: string
  learningObjectives: LearningObjective[]
  referenceValues?: Array<{ parameter: string; value: string; isCritical: boolean }>
}

interface PreloadedCard {
  id: string
  front: { text: string }
  back: { text: string }
  tags: string[]
}

interface PreloadedDeck {
  id: string
  name: string
  description: string
  subject: string
  topicIds: number[]
  version: string
  cards: PreloadedCard[]
}

interface GeneratorOptions {
  topics: number[]
  deckId: string
  deckName: string
  description?: string
  appendToExisting?: string
}

// ============================================================================
// Color Scheme
// ============================================================================

const COLORS = {
  // Header gradient (works in both light and dark mode)
  headerBg: 'linear-gradient(135deg, #1e3a5f 0%, #2d4a6f 100%)',
  headerText: '#ffffff',

  // Section titles - using CSS variables for theme awareness
  sectionTitle: '#1e3a5f',  // Navy in light mode
  sectionTitleDark: '#94a3b8',  // Slate-300 in dark mode

  // Mechanism headers (red)
  mechanismHeader: '#b91c1c',  // Dark red for light mode
  mechanismHeaderDark: '#f87171',  // Red-400 for dark mode

  // Percentages (blue)
  percentage: '#2563eb',  // Blue-600 for light mode
  percentageDark: '#60a5fa',  // Blue-400 for dark mode
}

// ============================================================================
// HTML Templates
// ============================================================================

function createFrontHTML(questionText: string): string {
  // Strip >> << markers from the question
  const cleanQuestion = questionText.replace(/>>|<</g, '').trim()

  return `<div style="background: ${COLORS.headerBg}; color: ${COLORS.headerText}; padding: 16px 20px; border-radius: 12px; margin: -8px -8px 16px -8px;">
  <div style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; opacity: 0.85; margin-bottom: 10px; font-weight: 500;">Learning Objective</div>
  <div style="font-size: 1.05rem; font-weight: 600; line-height: 1.5;">${cleanQuestion}</div>
</div>`
}

function createBackHeaderHTML(title: string): string {
  return `<div style="background: ${COLORS.headerBg}; color: ${COLORS.headerText}; padding: 14px 18px; border-radius: 12px; margin: -8px -8px 16px -8px;">
  <div style="font-size: 1.1rem; font-weight: 700;">${title}</div>
</div>`
}

function formatMechanismHeader(number: number, name: string, percentage?: string): string {
  const percentageHtml = percentage
    ? ` <span class="fc-percentage" style="color: ${COLORS.percentage}; font-weight: 600;">(${percentage})</span>`
    : ''

  return `<div class="fc-mechanism" style="color: ${COLORS.mechanismHeader}; font-weight: 700; font-size: 1rem; margin-top: 16px; margin-bottom: 8px;">
  ${number}. ${name}${percentageHtml}
</div>`
}

function formatBulletList(items: string[]): string {
  const listItems = items.map(item => {
    // Bold key terms (words followed by colon, or scientific terms)
    const formattedItem = boldKeyTerms(item)
    return `  <li style="margin-bottom: 5px; line-height: 1.5;">${formattedItem}</li>`
  }).join('\n')

  return `<ul style="margin: 0 0 0 8px; padding-left: 16px; list-style-type: disc;">
${listItems}
</ul>`
}

function boldKeyTerms(text: string): string {
  // Bold terms followed by colon (e.g., "Carbonic anhydrase: ...")
  let result = text.replace(/\b([A-Z][a-zA-Z\s]+):/g, '<strong>$1</strong>:')

  // Bold scientific terms and abbreviations
  const scientificTerms = [
    'carbonic anhydrase', 'hemoglobin', 'bicarbonate', 'carbaminohemoglobin',
    'chloride shift', 'Hamburger shift', 'Haldane effect', 'Bohr effect',
    'Band 3', 'HCO₃⁻', 'CO₂', 'H₂CO₃', 'H⁺', 'Cl⁻', 'O₂',
    'PCO₂', 'PO₂', 'pH', 'RBC', 'RBCs', 'ATP', 'ADP',
    'deoxygenated', 'oxygenated', 'partial pressure', 'diffusion gradient',
    'carbonic acid', 'terminal amino groups', 'globin chains', 'heme group'
  ]

  scientificTerms.forEach(term => {
    const regex = new RegExp(`\\b(${term})\\b`, 'gi')
    result = result.replace(regex, '<strong>$1</strong>')
  })

  return result
}

// ============================================================================
// Content Parsing
// ============================================================================

interface ParsedContent {
  introText: string
  mechanisms: Array<{
    number: number
    name: string
    percentage?: string
    details: string[]
  }>
  conclusion?: string
}

function parseExamAnswerRaw(raw: string, definitions: string[]): ParsedContent {
  // Strip >> << markers
  const cleanRaw = raw.replace(/>>|<</g, '').trim()

  // Try to identify numbered sections
  const numberedPattern = /(?:First|Second|Third|Fourth|Fifth|1\.|2\.|3\.|4\.|5\.)/gi
  const hasNumberedSections = numberedPattern.test(cleanRaw)

  if (hasNumberedSections) {
    return parseNumberedContent(cleanRaw, definitions)
  }

  // For non-numbered content, create a simpler structure
  return parseSimpleContent(cleanRaw, definitions)
}

function parseNumberedContent(text: string, definitions: string[]): ParsedContent {
  const result: ParsedContent = {
    introText: '',
    mechanisms: [],
    conclusion: ''
  }

  // Split by sentence boundaries first
  const sentences = text.split(/(?<=[.!?])\s+/)

  // Find intro (sentences before first numbered section)
  let introSentences: string[] = []
  let mechanismStartIndex = 0

  for (let i = 0; i < sentences.length; i++) {
    if (/^(First|Second|Third|1\.|2\.)/i.test(sentences[i])) {
      mechanismStartIndex = i
      break
    }
    introSentences.push(sentences[i])
  }

  result.introText = introSentences.join(' ')

  // Parse mechanisms
  let currentMechanism: { number: number; name: string; percentage?: string; details: string[] } | null = null
  let mechanismNumber = 0

  for (let i = mechanismStartIndex; i < sentences.length; i++) {
    const sentence = sentences[i]

    // Check if this starts a new mechanism
    if (/^(First|1\.)/i.test(sentence)) {
      if (currentMechanism) result.mechanisms.push(currentMechanism)
      mechanismNumber = 1
      currentMechanism = extractMechanismFromSentence(sentence, mechanismNumber, definitions)
    } else if (/^(Second|2\.)/i.test(sentence)) {
      if (currentMechanism) result.mechanisms.push(currentMechanism)
      mechanismNumber = 2
      currentMechanism = extractMechanismFromSentence(sentence, mechanismNumber, definitions)
    } else if (/^(Third|3\.)/i.test(sentence)) {
      if (currentMechanism) result.mechanisms.push(currentMechanism)
      mechanismNumber = 3
      currentMechanism = extractMechanismFromSentence(sentence, mechanismNumber, definitions)
    } else if (/^(Fourth|4\.)/i.test(sentence)) {
      if (currentMechanism) result.mechanisms.push(currentMechanism)
      mechanismNumber = 4
      currentMechanism = extractMechanismFromSentence(sentence, mechanismNumber, definitions)
    } else if (/^(Fifth|5\.)/i.test(sentence)) {
      if (currentMechanism) result.mechanisms.push(currentMechanism)
      mechanismNumber = 5
      currentMechanism = extractMechanismFromSentence(sentence, mechanismNumber, definitions)
    } else if (currentMechanism) {
      // Add to current mechanism details
      currentMechanism.details.push(sentence)
    } else {
      // This might be a conclusion
      result.conclusion = (result.conclusion ? result.conclusion + ' ' : '') + sentence
    }
  }

  if (currentMechanism) result.mechanisms.push(currentMechanism)

  // Enhance with definitions if mechanisms are sparse
  enhanceWithDefinitions(result, definitions)

  return result
}

function extractMechanismFromSentence(
  sentence: string,
  number: number,
  definitions: string[]
): { number: number; name: string; percentage?: string; details: string[] } {
  // Extract percentage if present
  const percentMatch = sentence.match(/(\d+(?:\s*(?:to|-)\s*\d+)?)\s*percent/i) ||
                       sentence.match(/(\d+(?:\s*(?:to|-)\s*\d+)?)\s*%/)
  const percentage = percentMatch ? percentMatch[1].replace(/\s*to\s*/g, '–') + '%' : undefined

  // Try to extract mechanism name
  let name = ''

  // Look for patterns like "physically dissolved CO₂", "bicarbonate anions", etc.
  const namePatterns = [
    /physically dissolved\s*CO₂?/i,
    /bicarbonate\s*(anions|ions)?/i,
    /carbaminohemoglobin/i,
    /chemically dissolved/i,
    /hemoglobin-?bound/i,
    /carbamino\s*compounds?/i,
  ]

  for (const pattern of namePatterns) {
    const match = sentence.match(pattern)
    if (match) {
      name = capitalizeWords(match[0])
      break
    }
  }

  // If no name found, use a default based on number
  if (!name) {
    const defaultNames = ['', 'Mechanism One', 'Mechanism Two', 'Mechanism Three', 'Mechanism Four', 'Mechanism Five']
    name = defaultNames[number] || `Mechanism ${number}`
  }

  // Clean up the sentence for details
  const cleanedSentence = sentence
    .replace(/^(First|Second|Third|Fourth|Fifth|1\.|2\.|3\.|4\.|5\.)\s*,?\s*/i, '')
    .trim()

  return {
    number,
    name,
    percentage,
    details: cleanedSentence ? [cleanedSentence] : []
  }
}

function enhanceWithDefinitions(content: ParsedContent, definitions: string[]): void {
  // Add relevant details from definitions to mechanisms, but avoid redundancy
  for (const mechanism of content.mechanisms) {
    const nameLower = mechanism.name.toLowerCase()

    // Get existing detail content for comparison
    const existingContent = mechanism.details.join(' ').toLowerCase()

    for (const def of definitions) {
      const defLower = def.toLowerCase()

      // Check if definition is relevant to this mechanism
      if (defLower.includes(nameLower) ||
          (nameLower.includes('bicarbonate') && defLower.includes('bicarbonate')) ||
          (nameLower.includes('dissolved') && defLower.includes('dissolved')) ||
          (nameLower.includes('hemoglobin') && defLower.includes('carbamino'))) {

        // Extract key facts from definition that aren't already covered
        const facts = extractKeyFacts(def)
        for (const fact of facts) {
          // Check for substantial overlap (more than just common words)
          const factWords = fact.toLowerCase().split(/\s+/).filter(w => w.length > 4)
          const matchingWords = factWords.filter(w => existingContent.includes(w))

          // Only add if less than 50% of significant words overlap
          if (matchingWords.length < factWords.length * 0.5) {
            mechanism.details.push(capitalizeFirstLetter(fact))
          }
        }
      }
    }

    // Deduplicate and limit details per mechanism
    mechanism.details = deduplicateDetails(mechanism.details)
    if (mechanism.details.length > 4) {
      mechanism.details = mechanism.details.slice(0, 4)
    }
  }
}

function deduplicateDetails(details: string[]): string[] {
  const seen = new Set<string>()
  const result: string[] = []

  for (const detail of details) {
    // Create a normalized version for comparison
    const normalized = detail.toLowerCase().replace(/[^\w\s]/g, '').trim()
    const key = normalized.substring(0, 50)

    if (!seen.has(key)) {
      seen.add(key)
      result.push(capitalizeFirstLetter(detail))
    }
  }

  return result
}

function capitalizeFirstLetter(text: string): string {
  if (!text) return text
  return text.charAt(0).toUpperCase() + text.slice(1)
}

function extractKeyFacts(definition: string): string[] {
  // Split definition into sentences and filter for key facts
  const sentences = definition.split(/(?<=[.!?])\s+/)
  return sentences
    .filter(s => s.length > 20 && s.length < 200)
    .slice(0, 2)
}

function parseSimpleContent(text: string, definitions: string[]): ParsedContent {
  // For content without numbered sections
  const sentences = text.split(/(?<=[.!?])\s+/)

  return {
    introText: text,
    mechanisms: [],
    conclusion: ''
  }
}

function capitalizeWords(str: string): string {
  return str.replace(/\b\w/g, c => c.toUpperCase())
}

// ============================================================================
// Main Generation Functions
// ============================================================================

/**
 * Generate card back content with intelligent, professor-level organization
 * Think: "What does a student need to quickly review this concept?"
 */
function generateCardBackContent(lo: LearningObjective, topic: Topic): string {
  const titleFromLO = generateTitleFromLO(lo.title)
  const rawContent = (lo.examAnswer.raw || '').replace(/>>|<</g, '').trim()
  const loTitle = lo.title.toLowerCase()

  // Build HTML with header
  let html = createBackHeaderHTML(titleFromLO)

  // Route to specialized formatters based on content type
  if (/parameters?.*(count|size|shape|life\s*span)/i.test(loTitle)) {
    html += formatRBCParameters(rawContent)
  } else if (/types?.*(anemia)|anemia.*(mechanism|types)/i.test(loTitle)) {
    html += formatAnemiaTypes(rawContent)
  } else if (/sedimentation|ESR/i.test(loTitle)) {
    html += formatESR(rawContent)
  } else if (/haldane/i.test(loTitle)) {
    html += formatHaldaneEffect(rawContent)
  } else if (/chloride.?shift|hamburger/i.test(loTitle)) {
    html += formatChlorideShift(rawContent)
  } else if (/price.?jones/i.test(loTitle)) {
    html += formatPriceJones(rawContent)
  } else if (/osmotic resistance/i.test(loTitle)) {
    html += formatOsmoticResistance(rawContent)
  } else if (/MCH.*MCHC.*MCV|indices/i.test(loTitle)) {
    html += formatRBCIndices(rawContent)
  } else if (/fate.*(organelles)|organelles.*(mature)/i.test(loTitle)) {
    html += formatOrganelleFate(rawContent)
  } else if (/membrane.*(red blood|RBC)/i.test(loTitle)) {
    html += formatRBCMembrane(rawContent)
  } else if (/carbonic anhydrase/i.test(loTitle)) {
    html += formatCarbonicAnhydrase(rawContent)
  } else if (/CO2 transport|carbon.?dioxide transport/i.test(loTitle)) {
    html += formatCO2Transport(rawContent)
  } else if (/reference values?/i.test(loTitle)) {
    html += formatReferenceValuesContent(rawContent)
  }
  // ===== TOPIC 33: HEMODYNAMICS =====
  // NOTE: Order matters! More specific patterns must come BEFORE more general ones
  else if (/systemic.*pulmonary.*circulation|pulmonary.*systemic|serially connected/i.test(loTitle)) {
    // LO-4: Must check before Ohm's law since this LO also mentions Ohm's law
    html += formatCirculationComparison(rawContent)
  } else if (/define resistance and conductance|resistance.*conductance.*series.*parallel/i.test(loTitle)) {
    // LO-5: Must check before flow/velocity since this LO mentions "flow" at the end
    html += formatResistanceConductance(rawContent)
  } else if (/define.*compare.*flow.*velocity|flow and velocity.*concept.*unit|velocity of flow/i.test(loTitle)) {
    // LO-1: Flow vs Velocity comparison
    html += formatFlowVelocity(rawContent)
  } else if (/bernoulli|total energy.*(flowing|blood)/i.test(loTitle)) {
    // LO-2: Bernoulli's law
    html += formatBernoulliLaw(rawContent)
  } else if (/pressure gradient.*flow.*resistance.*ohm|ohm.?s law.*calculate/i.test(loTitle)) {
    // LO-3: Ohm's law (be more specific to avoid matching LO-4)
    html += formatOhmsLaw(rawContent)
  } else if (/hagen.?poiseuille|hydraulic resistance/i.test(loTitle)) {
    // LO-6: Hagen-Poiseuille
    html += formatHagenPoiseuille(rawContent)
  } else if (/laminar.*turbulent|turbulent.*laminar|reynolds/i.test(loTitle)) {
    // LO-7: Laminar vs Turbulent
    html += formatLaminarTurbulent(rawContent)
  } else {
    // Default: intelligent generic formatting
    html += formatGenericContent(rawContent, loTitle)
  }

  return html
}

/**
 * Intelligently format raw exam answer content
 * Detects structure (numbered items, sections) and formats appropriately
 */
function formatRawContentIntelligently(raw: string, loTitle: string): string {
  // Convert audio format to visual format first
  let content = convertToVisualFormat(raw)

  // Detect if content has numbered sections (First, Second, Third OR 1., 2., 3.)
  const hasNumberedSections = /\b(First|Second|Third|Fourth|Fifth)\b|^\s*\d+\.\s/im.test(content)

  if (hasNumberedSections) {
    return formatNumberedContent(content)
  }

  // Detect if content is about reference values
  if (/reference values?|concentration.*arterial|arterial.*venous/i.test(loTitle)) {
    return formatReferenceValuesContent(content)
  }

  // Default: format as structured paragraphs with bullet points
  return formatAsStructuredContent(content)
}

/**
 * Convert audio-style text to visual format
 */
function convertToVisualFormat(text: string): string {
  let result = text

  // Strip >> << markers (these indicate critical content for audio)
  // For visual flashcards, we rely on bold key terms instead
  result = result.replace(/>>|<</g, '')

  // Convert spelled-out numbers/units to abbreviations
  result = result.replace(/milliliters? per liter/gi, 'ml/L')
  result = result.replace(/milliliters? per minute/gi, 'ml/min')
  result = result.replace(/millimolar/gi, 'mM')
  result = result.replace(/millimeters? of mercury/gi, 'mmHg')
  result = result.replace(/(\d+)\s+to\s+(\d+)\s+percent/gi, '$1–$2%')
  result = result.replace(/(\d+)\s+percent/gi, '$1%')
  result = result.replace(/approximately\s+/gi, '~')
  result = result.replace(/negative\s+(\d+)/gi, '-$1')

  return result
}

/**
 * Apply rich formatting to text - bold key terms, blue for effects/cross-refs
 */
function applyRichFormatting(text: string): string {
  let result = text

  // Key medical/scientific terms to bold - sorted by length (longest first) to prevent partial matches
  const boldTerms = [
    // Longer phrases first - CO2 Transport
    'arteriovenous difference', 'three main mechanisms',
    'dissolved directly in plasma', 'terminal amino groups',
    'primary blood buffer', 'electrical neutrality',
    'conformational change', 'carbaminohemoglobin',
    'carbonic anhydrase', 'chloride shift', 'Hamburger shift',
    'main mechanisms', 'diffusion gradient', 'pressure gradient',
    'red blood cells', 'hydrogen ions', 'carbonic acid',
    'osmotic balance', 'buffer system', 'blood plasma',
    'mixed venous', 'arterial blood', 'venous blood',
    'partial pressure', 'globin chains', 'heme group',
    'renal tubules', 'epithelial cells', 'amino groups',
    'electroneutrality', '~10,000-fold', '10,000-fold',
    'bicarbonate', 'deoxygenated', 'oxygenated',
    'AVDCO₂', 'HCO₃⁻', 'H₂CO₃', 'HbCO₂', 'HCO3',
    'Band 3', 'PCO₂', 'PO₂', 'RBCs', 'RBC', 'H⁺',
    // RBC/Blood terms
    'Mean Corpuscular Hemoglobin Concentration', 'Mean Corpuscular Hemoglobin',
    'Mean Corpuscular Volume', 'erythrocyte sedimentation rate',
    'Price-Jones curve', 'rouleaux formation', 'Westergren method',
    'hereditary spherocytosis', 'iron deficiency anemia', 'macrocytic anemia',
    'microcytic anemia', 'normocytic anemia', 'pernicious anemia',
    'hemolytic anemia', 'sickle cell anemia', 'megaloblastic anemia',
    'biconcave disc', 'bone marrow', 'erythropoiesis', 'erythropoietin',
    'zeta potential', 'sodium citrate', 'acute-phase reactants',
    'phospholipid bilayer', 'cytoskeletal proteins',
    'hemoglobin', 'hematocrit', 'glycolysis', 'anisocytosis',
    'spectrin', 'ankyrin', 'glycocalyx', 'glycophorin',
    'GLUT1', 'MCHC', 'MCH', 'MCV', 'ESR',
  ].sort((a, b) => b.length - a.length) // Sort by length, longest first

  for (const term of boldTerms) {
    const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    // Only match if NOT already inside a <strong> tag
    // Use negative lookbehind to check we're not right after <strong>
    // And negative lookahead to check we're not right before </strong>
    const regex = new RegExp(`(?<!<strong[^>]*>[^<]*)\\b(${escaped})\\b(?![^<]*</strong>)`, 'gi')
    result = result.replace(regex, '<strong>$1</strong>')
  }

  // Blue text for cross-references and effects (apply after bolding)
  const blueTerms = [
    'Haldane effect', 'Bohr effect',
  ]

  for (const term of blueTerms) {
    const regex = new RegExp(`\\b(${term})\\b`, 'gi')
    result = result.replace(regex, '<span style="color: #2563eb; font-weight: 600;">$1</span>')
  }

  return result
}

/**
 * Format content that has numbered sections (First, Second, Third...)
 * Matches the sample format with:
 * - RED underlined section headers with BLUE percentages
 * - Explanation sentence below header (not a bullet)
 * - Circle bullet points (○) for sub-details
 * - Proper spacing between sections
 */
function formatNumberedContent(content: string): string {
  let html = ''

  // Check if this is structured content (has percentages, known patterns)
  const isStructuredContent = detectKnownStructuredContent(content)

  // Split by numbered markers
  const sections = content.split(/(?=\b(?:First|Second|Third|Fourth|Fifth)\b)|(?=^\s*\d+\.\s)/im)

  let introAdded = false
  let pointNumber = 0

  for (const section of sections) {
    const trimmed = section.trim()
    if (!trimmed) continue

    // Check if this is a numbered section
    const numberMatch = trimmed.match(/^(First|Second|Third|Fourth|Fifth|\d+\.)\s*,?\s*/i)

    if (numberMatch) {
      pointNumber++
      // Remove the "First," etc. and get the actual content
      const sectionContent = trimmed.replace(/^(First|Second|Third|Fourth|Fifth|\d+\.)\s*,?\s*/i, '').trim()

      // Extract section info
      const { title, percentage, mainSentence, bulletPoints } = extractSectionStructure(sectionContent, isStructuredContent)

      // Build section HTML
      html += `\n<div style="margin-top: 18px; margin-bottom: 14px;">`

      // Section header: RED + underlined, with BLUE percentage
      const percentageHtml = percentage ? ` <span style="color: #2563eb; font-weight: 600;">(${percentage})</span>` : ''
      html += `\n  <div style="color: #b91c1c; font-weight: 700; font-size: 1rem; margin-bottom: 8px; text-decoration: underline;">${pointNumber}. ${title}${percentageHtml}</div>`

      // Main explanation sentence (not a bullet)
      if (mainSentence) {
        html += `\n  <p style="margin: 0 0 10px 0; line-height: 1.6;">${applyRichFormatting(mainSentence)}</p>`
      }

      // Circle bullet points for details
      if (bulletPoints.length > 0) {
        html += `\n  <ul style="margin: 0 0 0 20px; padding: 0; list-style-type: circle;">`
        for (const point of bulletPoints) {
          html += `\n    <li style="margin-bottom: 6px; line-height: 1.5; padding-left: 4px;">${applyRichFormatting(point)}</li>`
        }
        html += `\n  </ul>`
      }

      html += `\n</div>`
    } else if (!introAdded) {
      // Intro paragraph
      html += `\n<p style="margin-bottom: 16px; line-height: 1.6;">${applyRichFormatting(trimmed)}</p>`
      introAdded = true
    }
  }

  return html
}

/**
 * Extract section structure: title, percentage, main sentence, and bullet points
 */
function extractSectionStructure(content: string, isStructured: boolean): {
  title: string
  percentage?: string
  mainSentence: string
  bulletPoints: string[]
} {
  // Extract percentage
  const percentMatch = content.match(/(\d+(?:–|-|to)\s*\d+\s*%|\d+\s*%)/i)
  const percentage = percentMatch ? percentMatch[1].replace(/\s+/g, '').replace('to', '–') : undefined

  // Split into sentences
  const sentences = content.split(/(?<=[.!?])\s+/).filter(s => s.trim().length > 10)

  // Determine title based on content - check ALL patterns first
  let title = 'Point'

  // Try to extract a descriptive title from known patterns
  const titlePatterns: [RegExp, string][] = [
    // CO2 transport
    [/physically dissolved/i, 'Physically Dissolved CO₂'],
    [/bicarbonate\s*(anions?|ions?)?/i, 'Chemically Dissolved as Bicarbonate Ions'],
    [/carbaminohemoglobin|carbamino|hemoglobin.?bound/i, 'Hemoglobin-Bound as Carbamino Compounds'],
    // Organelle loss reasons
    [/make room.*hemoglobin|room for hemoglobin/i, 'Make Room for Hemoglobin'],
    [/more flexible|flexibility|soft and bendable/i, 'Increased Flexibility'],
    [/without mitochondria|don.?t use oxygen|anaerobic|glycolysis/i, 'No Oxygen Consumption'],
  ]

  for (const [pattern, mappedTitle] of titlePatterns) {
    if (pattern.test(content)) {
      title = mappedTitle
      break
    }
  }

  // If no pattern matched and title is still default, use smart extraction
  if (title === 'Point') {
    // Try to find a key phrase at the start
    const firstPhrase = sentences[0]?.match(/^(to\s+)?(\w+(?:\s+\w+){1,3})/i)
    if (firstPhrase) {
      let extracted = firstPhrase[2] || firstPhrase[0]
      // Capitalize properly
      title = extracted.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ')
    }
  }

  // First sentence is the main explanation
  const mainSentence = sentences[0] || ''

  // Remaining sentences become bullet points
  const bulletPoints = sentences.slice(1)

  return { title, percentage, mainSentence, bulletPoints }
}

/**
 * Detect if content has structured sections (percentages, mechanism names, etc.)
 */
function detectKnownStructuredContent(content: string): boolean {
  // CO2 transport - has percentages
  if (/\d+\s*(?:–|-|to)\s*\d+\s*%|\d+\s*%/i.test(content)) {
    return true
  }
  // Known mechanisms
  if (/physically dissolved|bicarbonate|carbamino|hemoglobin.?bound/i.test(content)) {
    return true
  }
  return false
}

/**
 * Format reference values content with sections and table
 */
function formatReferenceValuesContent(content: string): string {
  let html = ''

  // Parse values from content
  const co2Arterial = content.match(/CO₂.*?(?:arterial|480)\s*ml\/L/i) ? '480 ml/L' : null
  const co2Venous = content.match(/CO₂.*?(?:venous|520)\s*ml\/L/i) ? '520 ml/L' : null
  const bicarbArterial = content.match(/bicarbonate.*?24\s*mM|24\s*mM.*?arterial/i) ? '24 mM' : null
  const bicarbVenous = content.match(/bicarbonate.*?27\s*mM|27\s*mM.*?venous/i) ? '27 mM' : null
  const avdco2 = content.match(/-40\s*ml\/L/i) ? '-40 ml/L' : null
  const production = content.match(/210\s*ml\/min/i) ? '210 ml/min' : null

  // CO2 Section
  html += `\n<div style="margin-top: 12px; margin-bottom: 12px;">`
  html += `\n  <div style="color: #b91c1c; font-weight: 700; font-size: 1rem; margin-bottom: 8px; text-decoration: underline;">CO₂ Concentration</div>`
  html += `\n  <ul style="margin: 0 0 0 8px; padding-left: 16px; list-style-type: disc;">`
  html += `\n    <li style="margin-bottom: 5px; line-height: 1.5;"><strong>Arterial blood:</strong> ${co2Arterial || '480 ml/L'}</li>`
  html += `\n    <li style="margin-bottom: 5px; line-height: 1.5;"><strong>Mixed venous blood:</strong> ${co2Venous || '520 ml/L'}</li>`
  if (avdco2) {
    html += `\n    <li style="margin-bottom: 5px; line-height: 1.5;"><strong>Arteriovenous difference (AVDCO₂):</strong> ${avdco2}</li>`
    html += `\n    <li style="margin-bottom: 5px; line-height: 1.5; margin-left: 16px; list-style-type: circle;">Negative value indicates direction from tissues to lungs</li>`
  }
  html += `\n  </ul>`
  html += `\n</div>`

  // Bicarbonate Section
  html += `\n<div style="margin-top: 16px; margin-bottom: 12px;">`
  html += `\n  <div style="color: #b91c1c; font-weight: 700; font-size: 1rem; margin-bottom: 8px; text-decoration: underline;">Plasma Bicarbonate (HCO₃⁻) Concentration</div>`
  html += `\n  <ul style="margin: 0 0 0 8px; padding-left: 16px; list-style-type: disc;">`
  html += `\n    <li style="margin-bottom: 5px; line-height: 1.5;"><strong>Arterial blood:</strong> ${bicarbArterial || '24 mM'}</li>`
  html += `\n    <li style="margin-bottom: 5px; line-height: 1.5;"><strong>Mixed venous blood:</strong> ${bicarbVenous || '27 mM'}</li>`
  html += `\n  </ul>`
  html += `\n</div>`

  // Additional values
  if (production) {
    html += `\n<div style="margin-top: 16px; margin-bottom: 12px;">`
    html += `\n  <div style="color: #b91c1c; font-weight: 700; font-size: 1rem; margin-bottom: 8px; text-decoration: underline;">Additional Reference Value</div>`
    html += `\n  <ul style="margin: 0 0 0 8px; padding-left: 16px; list-style-type: disc;">`
    html += `\n    <li style="margin-bottom: 5px; line-height: 1.5;"><strong>CO₂ production at rest:</strong> ${production}</li>`
    html += `\n  </ul>`
    html += `\n</div>`
  }

  // Clinical significance
  html += `\n<div style="margin-top: 16px; margin-bottom: 12px;">`
  html += `\n  <div style="font-weight: 600; margin-bottom: 6px;">Clinical Significance</div>`
  html += `\n  <p style="line-height: 1.5;"><strong>Venous blood has higher CO₂ and bicarbonate</strong> because:</p>`
  html += `\n  <ul style="margin: 4px 0 0 8px; padding-left: 16px; list-style-type: disc;">`
  html += `\n    <li style="margin-bottom: 4px;">CO₂ is continuously <strong>picked up from metabolizing tissues</strong></li>`
  html += `\n    <li style="margin-bottom: 4px;">Tissues release CO₂ as a waste product of cellular respiration</li>`
  html += `\n    <li style="margin-bottom: 4px;">Blood transports CO₂ from tissues to lungs for elimination</li>`
  html += `\n  </ul>`
  html += `\n</div>`

  // Summary table
  html += `\n<div style="margin-top: 20px;">`
  html += `\n  <div style="font-weight: 600; margin-bottom: 8px;">Summary Table</div>`
  html += `\n  <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">`
  html += `\n    <thead><tr style="background: #f3f4f6;">`
  html += `<th style="padding: 8px; text-align: left; border: 1px solid #e5e7eb; font-weight: 600;">Parameter</th>`
  html += `<th style="padding: 8px; text-align: left; border: 1px solid #e5e7eb; font-weight: 600;">Arterial Blood</th>`
  html += `<th style="padding: 8px; text-align: left; border: 1px solid #e5e7eb; font-weight: 600;">Mixed Venous Blood</th>`
  html += `</tr></thead>`
  html += `\n    <tbody>`
  html += `\n      <tr><td style="padding: 8px; border: 1px solid #e5e7eb;"><strong>CO₂ concentration</strong></td><td style="padding: 8px; border: 1px solid #e5e7eb;">480 ml/L</td><td style="padding: 8px; border: 1px solid #e5e7eb;">520 ml/L</td></tr>`
  html += `\n      <tr><td style="padding: 8px; border: 1px solid #e5e7eb;"><strong>Bicarbonate (HCO₃⁻)</strong></td><td style="padding: 8px; border: 1px solid #e5e7eb;">24 mM</td><td style="padding: 8px; border: 1px solid #e5e7eb;">27 mM</td></tr>`
  html += `\n      <tr><td style="padding: 8px; border: 1px solid #e5e7eb;"><strong>Difference</strong></td><td style="padding: 8px; border: 1px solid #e5e7eb;">AVDCO₂ = -40 ml/L</td><td style="padding: 8px; border: 1px solid #e5e7eb;"></td></tr>`
  html += `\n    </tbody>`
  html += `\n  </table>`
  html += `\n</div>`

  return html
}

/**
 * Format content as structured paragraphs with bullet points
 * First sentence(s) as intro, then bullets for details
 */
function formatAsStructuredContent(content: string): string {
  let html = ''

  // Split into sentences
  const sentences = content.split(/(?<=[.!?])\s+/).filter(s => s.trim().length > 10)

  if (sentences.length === 0) {
    return `\n<p style="line-height: 1.6;">${applyRichFormatting(content)}</p>`
  }

  if (sentences.length <= 2) {
    // Very short content - format as paragraph(s)
    html += `\n<p style="margin-bottom: 12px; line-height: 1.6;">${applyRichFormatting(sentences.join(' '))}</p>`
  } else if (sentences.length <= 4) {
    // Medium content - first sentence as intro, rest as short list
    html += `\n<p style="margin-bottom: 14px; line-height: 1.6;">${applyRichFormatting(sentences[0])}</p>`
    html += `\n<ul style="margin: 0 0 0 20px; padding: 0; list-style-type: circle;">`
    for (let i = 1; i < sentences.length; i++) {
      html += `\n  <li style="margin-bottom: 8px; line-height: 1.5; padding-left: 4px;">${applyRichFormatting(sentences[i])}</li>`
    }
    html += `\n</ul>`
  } else {
    // Longer content - first 1-2 sentences as intro, rest as bullets
    // Group intro sentences
    const introCount = sentences[1].length < 80 ? 2 : 1
    const introSentences = sentences.slice(0, introCount)
    const bulletSentences = sentences.slice(introCount)

    html += `\n<p style="margin-bottom: 14px; line-height: 1.6;">${applyRichFormatting(introSentences.join(' '))}</p>`

    if (bulletSentences.length > 0) {
      html += `\n<ul style="margin: 0 0 0 20px; padding: 0; list-style-type: circle;">`
      for (const sentence of bulletSentences) {
        html += `\n  <li style="margin-bottom: 8px; line-height: 1.5; padding-left: 4px;">${applyRichFormatting(sentence)}</li>`
      }
      html += `\n</ul>`
    }
  }

  return html
}

// ============================================================================
// SPECIALIZED CONTENT FORMATTERS - Professor-level organization
// ============================================================================

/**
 * Format RBC Parameters - Count, Size, Shape, Lifespan, Production
 */
function formatRBCParameters(content: string): string {
  return `
<div style="display: grid; gap: 16px;">

  <div>
    <div style="color: #2563eb; font-weight: 700; font-size: 0.95rem; margin-bottom: 6px; border-bottom: 2px solid #dbeafe; padding-bottom: 4px;">Count</div>
    <div style="padding-left: 12px; line-height: 1.6;">
      <span style="color: #059669; font-weight: 600;">4.3–5.2 million/μL</span><br>
      <span style="font-size: 0.9rem; color: #6b7280;">Males: 5.2M | Females: 4.7M per mm³</span>
    </div>
  </div>

  <div>
    <div style="color: #2563eb; font-weight: 700; font-size: 0.95rem; margin-bottom: 6px; border-bottom: 2px solid #dbeafe; padding-bottom: 4px;">Size</div>
    <div style="padding-left: 12px; line-height: 1.6;">
      <strong>Diameter:</strong> 7–8 μm<br>
      <strong>Thickness:</strong> 2.5 μm (edge) → 1 μm (center)<br>
      <strong>Volume:</strong> <span style="color: #059669; font-weight: 600;">90–95 fL</span>
    </div>
  </div>

  <div>
    <div style="color: #2563eb; font-weight: 700; font-size: 0.95rem; margin-bottom: 6px; border-bottom: 2px solid #dbeafe; padding-bottom: 4px;">Shape</div>
    <div style="padding-left: 12px; line-height: 1.6;">
      <span style="color: #dc2626; font-weight: 600;">Biconcave disc</span><br>
      <span style="font-size: 0.9rem;">→ ↑ Surface area for gas exchange<br>
      → Highly deformable through capillaries</span>
    </div>
  </div>

  <div>
    <div style="color: #2563eb; font-weight: 700; font-size: 0.95rem; margin-bottom: 6px; border-bottom: 2px solid #dbeafe; padding-bottom: 4px;">Lifespan</div>
    <div style="padding-left: 12px; line-height: 1.6;">
      <span style="color: #059669; font-weight: 600;">~120 days</span> → recycled in <strong>spleen</strong>
    </div>
  </div>

  <div>
    <div style="color: #2563eb; font-weight: 700; font-size: 0.95rem; margin-bottom: 6px; border-bottom: 2px solid #dbeafe; padding-bottom: 4px;">Production</div>
    <div style="padding-left: 12px; line-height: 1.6;">
      <strong>Bone marrow</strong> → <span style="color: #7c3aed;">erythropoiesis</span><br>
      <span style="font-size: 0.9rem;">Stimulated by: <strong>erythropoietin</strong> (kidneys → hypoxia)</span>
    </div>
  </div>

</div>`
}

/**
 * Format Types of Anemia - organized by MCV classification
 */
function formatAnemiaTypes(content: string): string {
  return `
<div style="font-size: 0.95rem; line-height: 1.5; margin-bottom: 8px;">
  Anemia = deficiency in <strong>RBCs</strong> or <strong>hemoglobin</strong> → reduced O₂ transport
</div>

<div style="display: grid; gap: 18px; margin-top: 12px;">

  <div style="background: #fef2f2; border-left: 4px solid #dc2626; padding: 12px 14px; border-radius: 0 8px 8px 0;">
    <div style="color: #dc2626; font-weight: 700; font-size: 1rem; margin-bottom: 8px;">MICROCYTIC <span style="font-weight: 500; font-size: 0.85rem;">(MCV < 80 fL)</span></div>
    <div style="margin-bottom: 6px;"><strong>Mechanism:</strong> Impaired hemoglobin synthesis</div>
    <div><strong>Causes:</strong></div>
    <ul style="margin: 4px 0 0 16px; padding: 0;">
      <li><span style="color: #dc2626; font-weight: 600;">Iron deficiency</span> — most common (diet, blood loss, malabsorption)</li>
      <li><strong>Thalassemia</strong> — genetic defect in Hb production</li>
    </ul>
  </div>

  <div style="background: #fefce8; border-left: 4px solid #ca8a04; padding: 12px 14px; border-radius: 0 8px 8px 0;">
    <div style="color: #ca8a04; font-weight: 700; font-size: 1rem; margin-bottom: 8px;">NORMOCYTIC <span style="font-weight: 500; font-size: 0.85rem;">(MCV 80–100 fL)</span></div>
    <div style="margin-bottom: 6px;"><strong>Mechanism:</strong> ↓ production, ↑ destruction, or blood loss</div>
    <div><strong>Causes:</strong></div>
    <ul style="margin: 4px 0 0 16px; padding: 0;">
      <li><strong>Chronic disease</strong> — cytokines interfere with iron/erythropoiesis</li>
      <li><span style="color: #ca8a04; font-weight: 600;">Hemolytic anemia</span> — ↑ RBC destruction (autoimmune, sickle cell)</li>
      <li><strong>Acute blood loss</strong> — trauma, surgery</li>
    </ul>
  </div>

  <div style="background: #eff6ff; border-left: 4px solid #2563eb; padding: 12px 14px; border-radius: 0 8px 8px 0;">
    <div style="color: #2563eb; font-weight: 700; font-size: 1rem; margin-bottom: 8px;">MACROCYTIC <span style="font-weight: 500; font-size: 0.85rem;">(MCV > 100 fL)</span></div>
    <div style="margin-bottom: 6px;"><strong>Mechanism:</strong> Defective DNA synthesis → delayed division → larger cells</div>
    <div><strong>Causes:</strong></div>
    <ul style="margin: 4px 0 0 16px; padding: 0;">
      <li><span style="color: #2563eb; font-weight: 600;">Vitamin B12 deficiency</span> (pernicious anemia)</li>
      <li><strong>Folate deficiency</strong></li>
    </ul>
  </div>

</div>`
}

/**
 * Format ESR - Definition, Mechanism, Method, Values, Clinical
 */
function formatESR(content: string): string {
  return `
<div style="display: grid; gap: 16px;">

  <div>
    <div style="color: #2563eb; font-weight: 700; font-size: 0.95rem; margin-bottom: 6px; border-bottom: 2px solid #dbeafe; padding-bottom: 4px;">Definition</div>
    <div style="padding-left: 12px; line-height: 1.6;">
      Test measuring how quickly <strong>RBCs settle</strong> in a vertical tube over <span style="color: #059669; font-weight: 600;">1 hour</span>
    </div>
  </div>

  <div>
    <div style="color: #2563eb; font-weight: 700; font-size: 0.95rem; margin-bottom: 6px; border-bottom: 2px solid #dbeafe; padding-bottom: 4px;">Mechanism</div>
    <div style="padding-left: 12px; line-height: 1.6;">
      <span style="color: #7c3aed; font-weight: 600;">Rouleaux formation</span> = RBC stacking<br>
      <span style="font-size: 0.9rem;">• <strong>Acute-phase reactants</strong> (fibrinogen) coat RBCs<br>
      • ↓ <strong>Zeta potential</strong> (negative surface charge)<br>
      • ↑ Aggregation → heavier stacks → faster settling</span>
    </div>
  </div>

  <div>
    <div style="color: #2563eb; font-weight: 700; font-size: 0.95rem; margin-bottom: 6px; border-bottom: 2px solid #dbeafe; padding-bottom: 4px;">Method: Westergren</div>
    <div style="padding-left: 12px; line-height: 1.6;">
      <strong>Venous blood</strong> + <strong>sodium citrate</strong> → marked tube → measure settling (mm) after 1 hr
    </div>
  </div>

  <div>
    <div style="color: #2563eb; font-weight: 700; font-size: 0.95rem; margin-bottom: 6px; border-bottom: 2px solid #dbeafe; padding-bottom: 4px;">Normal Values</div>
    <div style="padding-left: 12px; line-height: 1.6;">
      <span style="color: #059669; font-weight: 600;">< 20 mm/hr</span> (typically 3–10 mm/hr)<br>
      <span style="font-size: 0.9rem; color: #6b7280;">Higher in women</span>
    </div>
  </div>

  <div>
    <div style="color: #2563eb; font-weight: 700; font-size: 0.95rem; margin-bottom: 6px; border-bottom: 2px solid #dbeafe; padding-bottom: 4px;">Clinical Significance</div>
    <div style="padding-left: 12px; line-height: 1.6;">
      <span style="color: #dc2626; font-weight: 600;">↑ ESR:</span> Inflammation, infection, RA, SLE, TB, cancer, pregnancy<br>
      <span style="color: #2563eb; font-weight: 600;">↓ ESR:</span> Sickle cell, polycythemia, extreme leukocytosis
    </div>
  </div>

</div>`
}

/**
 * Format Haldane Effect - Two-location comparison
 */
function formatHaldaneEffect(content: string): string {
  return `
<div style="background: #f0fdf4; border-radius: 8px; padding: 12px 14px; margin-bottom: 16px;">
  <div style="color: #166534; font-weight: 600; margin-bottom: 4px;">Core Concept</div>
  <div>Oxygenation state of <strong>hemoglobin</strong> affects its ability to bind <span style="color: #2563eb; font-weight: 600;">CO₂</span> and <span style="color: #2563eb; font-weight: 600;">H⁺</span></div>
</div>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">

  <div style="background: #fef2f2; border-radius: 8px; padding: 14px;">
    <div style="color: #dc2626; font-weight: 700; font-size: 1rem; margin-bottom: 10px; text-align: center;">IN TISSUES</div>
    <div style="text-align: center; font-size: 0.85rem; color: #6b7280; margin-bottom: 10px;">(O₂ released)</div>
    <div style="line-height: 1.6;">
      <strong>Deoxy-Hb</strong> has <span style="color: #dc2626; font-weight: 600;">↑ affinity</span> for CO₂ and H⁺<br><br>
      → Forms <strong>carbaminohemoglobin</strong><br>
      → Buffers H⁺ ions<br>
      → <span style="color: #dc2626;">Promotes CO₂ uptake</span>
    </div>
  </div>

  <div style="background: #eff6ff; border-radius: 8px; padding: 14px;">
    <div style="color: #2563eb; font-weight: 700; font-size: 1rem; margin-bottom: 10px; text-align: center;">IN LUNGS</div>
    <div style="text-align: center; font-size: 0.85rem; color: #6b7280; margin-bottom: 10px;">(O₂ bound)</div>
    <div style="line-height: 1.6;">
      <strong>Oxy-Hb</strong> has <span style="color: #2563eb; font-weight: 600;">↓ affinity</span> for CO₂ and H⁺<br><br>
      → Conformational change<br>
      → Releases CO₂<br>
      → <span style="color: #2563eb;">H⁺ converts HCO₃⁻ → CO₂</span>
    </div>
  </div>

</div>`
}

/**
 * Format Chloride Shift
 */
function formatChlorideShift(content: string): string {
  return `
<div style="background: #f0fdf4; border-radius: 8px; padding: 12px 14px; margin-bottom: 16px;">
  <div style="color: #166534; font-weight: 600; margin-bottom: 4px;">Purpose</div>
  <div>Maintain <span style="color: #059669; font-weight: 600;">electrical neutrality</span> during CO₂ transport while enabling continuous HCO₃⁻ production</div>
</div>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">

  <div style="background: #fef2f2; border-radius: 8px; padding: 14px;">
    <div style="color: #dc2626; font-weight: 700; font-size: 1rem; margin-bottom: 10px; text-align: center;">IN TISSUES</div>
    <div style="line-height: 1.7; font-size: 0.95rem;">
      1. CO₂ enters RBC<br>
      2. <strong>Carbonic anhydrase</strong> → HCO₃⁻ + H⁺<br>
      3. <span style="color: #dc2626; font-weight: 600;">HCO₃⁻ exits</span> via <strong>Band 3</strong><br>
      4. <span style="color: #2563eb; font-weight: 600;">Cl⁻ enters</span> to balance charge
    </div>
  </div>

  <div style="background: #eff6ff; border-radius: 8px; padding: 14px;">
    <div style="color: #2563eb; font-weight: 700; font-size: 1rem; margin-bottom: 10px; text-align: center;">IN LUNGS</div>
    <div style="line-height: 1.7; font-size: 0.95rem;">
      1. <span style="color: #2563eb; font-weight: 600;">HCO₃⁻ re-enters</span> RBC<br>
      2. <span style="color: #dc2626; font-weight: 600;">Cl⁻ exits</span> to balance<br>
      3. HCO₃⁻ → CO₂ + H₂O<br>
      4. CO₂ exhaled into alveoli
    </div>
  </div>

</div>

<div style="margin-top: 14px; padding: 10px 12px; background: #fefce8; border-radius: 6px;">
  <strong>Key transporter:</strong> <span style="color: #7c3aed; font-weight: 600;">Band 3 protein</span> (anion exchanger) — exchanges HCO₃⁻ for Cl⁻
</div>`
}

/**
 * Format Price-Jones Curve
 */
function formatPriceJones(content: string): string {
  return `
<div style="background: #f0fdf4; border-radius: 8px; padding: 12px 14px; margin-bottom: 16px;">
  <div style="color: #166534; font-weight: 600; margin-bottom: 4px;">Definition</div>
  <div>Graph showing <span style="color: #059669; font-weight: 600;">distribution of RBC diameters</span> in a blood sample — used to assess <strong>anisocytosis</strong> (size variation)</div>
</div>

<div style="display: grid; gap: 12px;">
  <div>
    <div style="color: #2563eb; font-weight: 700; font-size: 0.95rem; margin-bottom: 6px;">Axes</div>
    <div style="padding-left: 12px;">
      <strong>X-axis:</strong> RBC diameter (μm)<br>
      <strong>Y-axis:</strong> Frequency/number of cells
    </div>
  </div>

  <div>
    <div style="color: #2563eb; font-weight: 700; font-size: 0.95rem; margin-bottom: 6px;">Normal Curve</div>
    <div style="padding-left: 12px;">
      <span style="color: #059669; font-weight: 600;">Bell-shaped</span> — peak at <strong>7–8 μm</strong> (normal RBC size)
    </div>
  </div>
</div>

<div style="margin-top: 16px; display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; text-align: center;">
  <div style="background: #fef2f2; padding: 10px; border-radius: 6px;">
    <div style="color: #dc2626; font-weight: 700; font-size: 0.85rem;">← SHIFT LEFT</div>
    <div style="font-size: 0.85rem; margin-top: 4px;"><strong>Microcytic</strong><br>(iron deficiency)</div>
  </div>
  <div style="background: #f0fdf4; padding: 10px; border-radius: 6px;">
    <div style="color: #059669; font-weight: 700; font-size: 0.85rem;">NORMAL</div>
    <div style="font-size: 0.85rem; margin-top: 4px;"><strong>7–8 μm</strong><br>peak</div>
  </div>
  <div style="background: #eff6ff; padding: 10px; border-radius: 6px;">
    <div style="color: #2563eb; font-weight: 700; font-size: 0.85rem;">SHIFT RIGHT →</div>
    <div style="font-size: 0.85rem; margin-top: 4px;"><strong>Macrocytic</strong><br>(B12/folate def)</div>
  </div>
</div>`
}

/**
 * Format Osmotic Resistance
 */
function formatOsmoticResistance(content: string): string {
  return `
<div style="background: #f0fdf4; border-radius: 8px; padding: 12px 14px; margin-bottom: 16px;">
  <div style="color: #166534; font-weight: 600; margin-bottom: 4px;">Definition</div>
  <div>Ability of RBCs to <span style="color: #059669; font-weight: 600;">resist hemolysis</span> (bursting) when placed in hypotonic solutions</div>
</div>

<div style="display: grid; gap: 14px;">

  <div>
    <div style="color: #2563eb; font-weight: 700; font-size: 0.95rem; margin-bottom: 6px; border-bottom: 2px solid #dbeafe; padding-bottom: 4px;">Mechanism</div>
    <div style="padding-left: 12px; line-height: 1.6;">
      Hypotonic solution → <strong>water enters RBC</strong> (osmosis) → cell swells<br>
      If too dilute → membrane ruptures → <span style="color: #dc2626; font-weight: 600;">hemolysis</span>
    </div>
  </div>

  <div>
    <div style="color: #2563eb; font-weight: 700; font-size: 0.95rem; margin-bottom: 6px; border-bottom: 2px solid #dbeafe; padding-bottom: 4px;">Normal Values (NaCl %)</div>
    <div style="padding-left: 12px; line-height: 1.6;">
      <strong>Initial hemolysis:</strong> <span style="color: #059669; font-weight: 600;">0.44–0.45%</span><br>
      <strong>Complete hemolysis:</strong> <span style="color: #dc2626; font-weight: 600;">0.30%</span>
    </div>
  </div>

  <div>
    <div style="color: #2563eb; font-weight: 700; font-size: 0.95rem; margin-bottom: 6px; border-bottom: 2px solid #dbeafe; padding-bottom: 4px;">Key Structural Proteins</div>
    <div style="padding-left: 12px; line-height: 1.6;">
      <span style="color: #7c3aed; font-weight: 600;">Spectrin</span> (α & β), <span style="color: #7c3aed; font-weight: 600;">Ankyrin</span>, <span style="color: #7c3aed; font-weight: 600;">Band 3</span> — maintain biconcave shape & membrane integrity
    </div>
  </div>

  <div>
    <div style="color: #2563eb; font-weight: 700; font-size: 0.95rem; margin-bottom: 6px; border-bottom: 2px solid #dbeafe; padding-bottom: 4px;">Clinical Changes</div>
    <div style="padding-left: 12px; line-height: 1.6;">
      <span style="color: #dc2626; font-weight: 600;">↓ Resistance</span> (more fragile): Old RBCs, anemia, <strong>hereditary spherocytosis</strong>
    </div>
  </div>

</div>`
}

/**
 * Format RBC Indices (MCH, MCHC, MCV)
 */
function formatRBCIndices(content: string): string {
  return `
<div style="display: grid; gap: 16px;">

  <div style="background: #eff6ff; border-radius: 8px; padding: 14px;">
    <div style="color: #2563eb; font-weight: 700; font-size: 1rem; margin-bottom: 8px;">MCV — Mean Corpuscular Volume</div>
    <div style="line-height: 1.6;">
      <strong>What:</strong> Average <span style="color: #2563eb; font-weight: 600;">size</span> of one RBC<br>
      <strong>Normal:</strong> <span style="color: #059669; font-weight: 600;">94 fL</span><br>
      <strong>Formula:</strong> (Hct % × 10) ÷ RBC count (millions/μL)<br>
      <span style="font-size: 0.85rem; color: #6b7280;">↓ = microcytic | ↑ = macrocytic</span>
    </div>
  </div>

  <div style="background: #fef2f2; border-radius: 8px; padding: 14px;">
    <div style="color: #dc2626; font-weight: 700; font-size: 1rem; margin-bottom: 8px;">MCH — Mean Corpuscular Hemoglobin</div>
    <div style="line-height: 1.6;">
      <strong>What:</strong> Average <span style="color: #dc2626; font-weight: 600;">amount of Hb</span> per RBC<br>
      <strong>Normal:</strong> <span style="color: #059669; font-weight: 600;">29 pg</span><br>
      <strong>Formula:</strong> (Hb g/dL × 10) ÷ RBC count (millions/μL)<br>
      <span style="font-size: 0.85rem; color: #6b7280;">↓ = iron deficiency | ↑ = macrocytic anemia</span>
    </div>
  </div>

  <div style="background: #fefce8; border-radius: 8px; padding: 14px;">
    <div style="color: #ca8a04; font-weight: 700; font-size: 1rem; margin-bottom: 8px;">MCHC — Mean Corpuscular Hb Concentration</div>
    <div style="line-height: 1.6;">
      <strong>What:</strong> Average <span style="color: #ca8a04; font-weight: 600;">concentration of Hb</span> in packed RBCs<br>
      <strong>Normal:</strong> <span style="color: #059669; font-weight: 600;">333 g/L</span><br>
      <strong>Formula:</strong> (Hb g/dL × 100) ÷ Hct %<br>
      <span style="font-size: 0.85rem; color: #6b7280;">↓ = hypochromic (iron def) | ↑ = hereditary spherocytosis</span>
    </div>
  </div>

</div>`
}

/**
 * Format Organelle Fate in Mature RBCs
 */
function formatOrganelleFate(content: string): string {
  return `
<div style="background: #f0fdf4; border-radius: 8px; padding: 12px 14px; margin-bottom: 16px;">
  <div style="line-height: 1.6;">
    During maturation in <strong>bone marrow</strong>, RBCs lose <span style="color: #059669; font-weight: 600;">all organelles</span>: nucleus, mitochondria, ER, Golgi, ribosomes → become flexible, Hb-filled discs
  </div>
</div>

<div style="color: #1e3a5f; font-weight: 700; font-size: 0.95rem; margin-bottom: 12px;">Three Reasons for Organelle Loss:</div>

<div style="display: grid; gap: 12px;">

  <div style="background: #eff6ff; border-left: 4px solid #2563eb; padding: 12px 14px; border-radius: 0 8px 8px 0;">
    <div style="color: #2563eb; font-weight: 700; margin-bottom: 4px;">1. Maximize Hemoglobin Space</div>
    <div style="font-size: 0.95rem;">Without organelles → more room for <strong>hemoglobin</strong> → <span style="color: #059669; font-weight: 600;">carry more O₂</span></div>
  </div>

  <div style="background: #fef2f2; border-left: 4px solid #dc2626; padding: 12px 14px; border-radius: 0 8px 8px 0;">
    <div style="color: #dc2626; font-weight: 700; margin-bottom: 4px;">2. Increase Flexibility</div>
    <div style="font-size: 0.95rem;">No rigid nucleus → <span style="color: #dc2626; font-weight: 600;">soft & bendable</span> → squeeze through tiny capillaries</div>
  </div>

  <div style="background: #f0fdf4; border-left: 4px solid #059669; padding: 12px 14px; border-radius: 0 8px 8px 0;">
    <div style="color: #059669; font-weight: 700; margin-bottom: 4px;">3. Preserve O₂ for Tissues</div>
    <div style="font-size: 0.95rem;">No mitochondria → use <strong>anaerobic glycolysis</strong> → <span style="color: #059669; font-weight: 600;">don't consume the O₂ they carry</span></div>
  </div>

</div>`
}

/**
 * Format RBC Membrane Structure
 */
function formatRBCMembrane(content: string): string {
  return `
<div style="display: grid; gap: 14px;">

  <div>
    <div style="color: #2563eb; font-weight: 700; font-size: 0.95rem; margin-bottom: 6px; border-bottom: 2px solid #dbeafe; padding-bottom: 4px;">Basic Structure</div>
    <div style="padding-left: 12px; line-height: 1.6;">
      <span style="color: #7c3aed; font-weight: 600;">Phospholipid bilayer</span> with embedded proteins<br>
      Outer surface: <strong>Glycocalyx</strong> (glycoproteins/glycolipids)
    </div>
  </div>

  <div>
    <div style="color: #2563eb; font-weight: 700; font-size: 0.95rem; margin-bottom: 6px; border-bottom: 2px solid #dbeafe; padding-bottom: 4px;">Key Proteins</div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; padding-left: 12px;">
      <div>
        <div style="font-weight: 600; color: #dc2626;">Cytoskeletal:</div>
        <div style="font-size: 0.9rem;">• Spectrin (α & β)<br>• Ankyrin<br>• Actin</div>
      </div>
      <div>
        <div style="font-weight: 600; color: #059669;">Transmembrane:</div>
        <div style="font-size: 0.9rem;">• Band 3 (anion exchanger)<br>• Glycophorin<br>• GLUT1 (glucose)</div>
      </div>
    </div>
  </div>

  <div>
    <div style="color: #2563eb; font-weight: 700; font-size: 0.95rem; margin-bottom: 6px; border-bottom: 2px solid #dbeafe; padding-bottom: 4px;">Functions</div>
    <div style="padding-left: 12px; line-height: 1.6;">
      • Maintain <strong>biconcave shape</strong><br>
      • Enable <span style="color: #059669; font-weight: 600;">deformability</span> through capillaries<br>
      • Support gas exchange & nutrient transport
    </div>
  </div>

</div>`
}

/**
 * Format Carbonic Anhydrase
 */
function formatCarbonicAnhydrase(content: string): string {
  return `
<div style="background: #f0fdf4; border-radius: 8px; padding: 12px 14px; margin-bottom: 16px;">
  <div style="color: #166534; font-weight: 600; margin-bottom: 4px;">Critical Enzyme for CO₂ Transport</div>
  <div>Catalyzes: <strong>CO₂ + H₂O ⇌ H₂CO₃ ⇌ HCO₃⁻ + H⁺</strong></div>
</div>

<div style="display: grid; gap: 14px;">

  <div>
    <div style="color: #2563eb; font-weight: 700; font-size: 0.95rem; margin-bottom: 6px; border-bottom: 2px solid #dbeafe; padding-bottom: 4px;">Speed</div>
    <div style="padding-left: 12px;">
      Accelerates reaction <span style="color: #dc2626; font-weight: 700; font-size: 1.1rem;">~10,000×</span> faster than uncatalyzed
    </div>
  </div>

  <div>
    <div style="color: #2563eb; font-weight: 700; font-size: 0.95rem; margin-bottom: 6px; border-bottom: 2px solid #dbeafe; padding-bottom: 4px;">Primary Location</div>
    <div style="padding-left: 12px;">
      <span style="color: #059669; font-weight: 600;">Inside RBCs</span> — where CO₂ is converted to bicarbonate
    </div>
  </div>

  <div>
    <div style="color: #2563eb; font-weight: 700; font-size: 0.95rem; margin-bottom: 6px; border-bottom: 2px solid #dbeafe; padding-bottom: 4px;">Other Locations</div>
    <div style="padding-left: 12px; line-height: 1.6;">
      • <strong>Renal tubules</strong> — pH regulation, HCO₃⁻ reabsorption<br>
      • Various <strong>epithelial cells</strong>
    </div>
  </div>

  <div style="background: #fefce8; border-radius: 6px; padding: 10px 12px;">
    <strong>Why it matters:</strong> Without carbonic anhydrase, CO₂ transport as bicarbonate (60–70% of total) would be too slow
  </div>

</div>`
}

/**
 * Format CO2 Transport Mechanisms (already good, keep similar)
 */
function formatCO2Transport(content: string): string {
  return `
<div style="font-size: 0.95rem; line-height: 1.5; margin-bottom: 12px;">
  Carbon dioxide is transported in blood by <strong>three mechanisms</strong>:
</div>

<div style="display: grid; gap: 14px;">

  <div style="background: #f0fdf4; border-left: 4px solid #059669; padding: 12px 14px; border-radius: 0 8px 8px 0;">
    <div style="color: #059669; font-weight: 700; font-size: 1rem; margin-bottom: 6px;">1. Physically Dissolved CO₂ <span style="color: #2563eb;">(5–10%)</span></div>
    <div style="font-size: 0.95rem; line-height: 1.5;">
      CO₂ dissolves directly in <strong>blood plasma</strong><br>
      <span style="font-size: 0.85rem; color: #6b7280;">Proportional to partial pressure — maintains diffusion gradient</span>
    </div>
  </div>

  <div style="background: #eff6ff; border-left: 4px solid #2563eb; padding: 12px 14px; border-radius: 0 8px 8px 0;">
    <div style="color: #2563eb; font-weight: 700; font-size: 1rem; margin-bottom: 6px;">2. Bicarbonate Ions (HCO₃⁻) <span style="color: #dc2626;">(60–70%)</span></div>
    <div style="font-size: 0.95rem; line-height: 1.5;">
      In RBCs: CO₂ + H₂O → <strong>carbonic acid</strong> → HCO₃⁻ + H⁺<br>
      <span style="font-size: 0.85rem;">Catalyzed by <strong>carbonic anhydrase</strong> | HCO₃⁻ exits via Band 3</span>
    </div>
  </div>

  <div style="background: #fef2f2; border-left: 4px solid #dc2626; padding: 12px 14px; border-radius: 0 8px 8px 0;">
    <div style="color: #dc2626; font-weight: 700; font-size: 1rem; margin-bottom: 6px;">3. Carbaminohemoglobin <span style="color: #2563eb;">(20–30%)</span></div>
    <div style="font-size: 0.95rem; line-height: 1.5;">
      CO₂ binds to <strong>terminal amino groups</strong> of Hb <em>(not heme)</em><br>
      <span style="font-size: 0.85rem; color: #6b7280;">Binding favored when Hb is deoxygenated (Haldane effect)</span>
    </div>
  </div>

</div>`
}

// ============================================================================
// TOPIC 33: HEMODYNAMICS FORMATTERS
// ============================================================================

/**
 * Format Flow vs Velocity comparison (LO-1)
 */
function formatFlowVelocity(content: string): string {
  return `
<div style="display: grid; gap: 16px;">

  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
    <div style="background: #eff6ff; border-radius: 8px; padding: 14px;">
      <div style="color: #2563eb; font-weight: 700; font-size: 1rem; margin-bottom: 8px; text-align: center;">FLOW (Q)</div>
      <div style="line-height: 1.6; font-size: 0.95rem;">
        <strong>Definition:</strong> Volume of fluid passing through a cross-section per unit time<br><br>
        <strong>Units:</strong> L/min, m³/s<br><br>
        <strong>Key:</strong> Equals <span style="color: #dc2626; font-weight: 600;">cardiac output</span> (~5 L/min at rest)
      </div>
    </div>

    <div style="background: #fef2f2; border-radius: 8px; padding: 14px;">
      <div style="color: #dc2626; font-weight: 700; font-size: 1rem; margin-bottom: 8px; text-align: center;">VELOCITY (v)</div>
      <div style="line-height: 1.6; font-size: 0.95rem;">
        <strong>Definition:</strong> Speed at which fluid particles move through a cross-section<br><br>
        <strong>Units:</strong> m/s, cm/s<br><br>
        <strong>Key:</strong> Varies <span style="color: #2563eb; font-weight: 600;">inversely</span> with cross-sectional area
      </div>
    </div>
  </div>

  <div style="background: #f0fdf4; border-radius: 8px; padding: 12px 14px;">
    <div style="color: #166534; font-weight: 700; margin-bottom: 6px; text-align: center;">Continuity Equation</div>
    <div style="text-align: center; font-size: 1.1rem; font-weight: 600;">Q = v × A</div>
    <div style="text-align: center; font-size: 0.85rem; color: #6b7280; margin-top: 4px;">Flow = Velocity × Cross-sectional Area</div>
  </div>

  <div>
    <div style="color: #1e3a5f; font-weight: 700; font-size: 0.95rem; margin-bottom: 8px;">Vessel Comparison</div>
    <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
      <thead><tr style="background: #f3f4f6;">
        <th style="padding: 8px; text-align: left; border: 1px solid #e5e7eb;">Vessel</th>
        <th style="padding: 8px; text-align: center; border: 1px solid #e5e7eb;">Cross-sectional Area</th>
        <th style="padding: 8px; text-align: center; border: 1px solid #e5e7eb;">Velocity</th>
      </tr></thead>
      <tbody>
        <tr><td style="padding: 8px; border: 1px solid #e5e7eb;"><strong>Aorta</strong></td>
            <td style="padding: 8px; text-align: center; border: 1px solid #e5e7eb;">~5.3 cm²</td>
            <td style="padding: 8px; text-align: center; border: 1px solid #e5e7eb;"><span style="color: #dc2626; font-weight: 600;">20–30 cm/s</span> (HIGH)</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #e5e7eb;"><strong>Capillaries</strong></td>
            <td style="padding: 8px; text-align: center; border: 1px solid #e5e7eb;">~3500 cm²</td>
            <td style="padding: 8px; text-align: center; border: 1px solid #e5e7eb;"><span style="color: #2563eb; font-weight: 600;">0.02–0.1 cm/s</span> (LOW)</td></tr>
      </tbody>
    </table>
    <div style="font-size: 0.85rem; color: #6b7280; margin-top: 6px; text-align: center;">
      Same flow throughout → slow velocity in capillaries allows gas exchange
    </div>
  </div>

</div>`
}

/**
 * Format Bernoulli's Law - 3 energy components (LO-2)
 */
function formatBernoulliLaw(content: string): string {
  return `
<div style="background: #f0fdf4; border-radius: 8px; padding: 12px 14px; margin-bottom: 16px;">
  <div style="color: #166534; font-weight: 600; margin-bottom: 4px;">Core Principle</div>
  <div><strong>Conservation of total energy</strong> in flowing blood — total energy remains constant but proportions change</div>
</div>

<div style="background: #1e3a5f; color: white; border-radius: 8px; padding: 12px; margin-bottom: 16px; text-align: center;">
  <div style="font-size: 1.1rem; font-weight: 600;">P + ½ρv² + ρgh = constant</div>
  <div style="font-size: 0.8rem; opacity: 0.85; margin-top: 4px;">ρ = blood density (~1060 kg/m³) | g = gravity (~9.8 m/s²) | h = height</div>
</div>

<div style="display: grid; gap: 12px;">

  <div style="background: #eff6ff; border-left: 4px solid #2563eb; padding: 12px 14px; border-radius: 0 8px 8px 0;">
    <div style="color: #2563eb; font-weight: 700; margin-bottom: 4px;">1. Pressure Energy (P)</div>
    <div style="font-size: 0.95rem; line-height: 1.5;">
      Potential energy stored due to fluid <strong>pressure</strong><br>
      <span style="font-size: 0.85rem; color: #6b7280;">Units: Pa or mmHg | Drives blood flow, overcomes resistance</span>
    </div>
  </div>

  <div style="background: #fef2f2; border-left: 4px solid #dc2626; padding: 12px 14px; border-radius: 0 8px 8px 0;">
    <div style="color: #dc2626; font-weight: 700; margin-bottom: 4px;">2. Kinetic Energy (½ρv²)</div>
    <div style="font-size: 0.95rem; line-height: 1.5;">
      Energy due to blood <strong>motion</strong> (velocity)<br>
      <span style="font-size: 0.85rem; color: #6b7280;">Higher in narrow vessels | Formula: KE = ½mv²</span>
    </div>
  </div>

  <div style="background: #f0fdf4; border-left: 4px solid #059669; padding: 12px 14px; border-radius: 0 8px 8px 0;">
    <div style="color: #059669; font-weight: 700; margin-bottom: 4px;">3. Gravitational Potential Energy (ρgh)</div>
    <div style="font-size: 0.95rem; line-height: 1.5;">
      Energy due to blood <strong>position</strong> in gravitational field<br>
      <span style="font-size: 0.85rem; color: #6b7280;">Blood in head has more PE | Formula: PE = mgh</span>
    </div>
  </div>

</div>

<div style="margin-top: 14px; padding: 10px 12px; background: #fefce8; border-radius: 6px;">
  <strong>Clinical:</strong> In stenotic valves → <span style="color: #dc2626;">↑ velocity</span> causes <span style="color: #2563eb;">↓ pressure</span> → murmurs
</div>`
}

/**
 * Format Ohm's Law for circulation (LO-3)
 */
function formatOhmsLaw(content: string): string {
  return `
<div style="background: #1e3a5f; color: white; border-radius: 8px; padding: 14px; margin-bottom: 16px; text-align: center;">
  <div style="font-size: 0.85rem; opacity: 0.85; margin-bottom: 4px;">The Major Law of Hemodynamics</div>
  <div style="font-size: 1.3rem; font-weight: 700;">Q = ΔP / R</div>
  <div style="font-size: 0.85rem; margin-top: 6px;">Flow = Pressure Gradient ÷ Resistance</div>
</div>

<div style="display: grid; gap: 14px;">

  <div>
    <div style="color: #2563eb; font-weight: 700; font-size: 0.95rem; margin-bottom: 6px; border-bottom: 2px solid #dbeafe; padding-bottom: 4px;">Flow (Q)</div>
    <div style="padding-left: 12px; line-height: 1.6;">
      Volume of blood per unit time<br>
      <span style="color: #059669; font-weight: 600;">Units: L/min or mL/min</span>
    </div>
  </div>

  <div>
    <div style="color: #2563eb; font-weight: 700; font-size: 0.95rem; margin-bottom: 6px; border-bottom: 2px solid #dbeafe; padding-bottom: 4px;">Pressure Gradient (ΔP)</div>
    <div style="padding-left: 12px; line-height: 1.6;">
      Difference between arterial and venous pressure<br>
      <span style="color: #059669; font-weight: 600;">Units: mmHg</span> | <strong>Driving force</strong> for blood flow
    </div>
  </div>

  <div>
    <div style="color: #2563eb; font-weight: 700; font-size: 0.95rem; margin-bottom: 6px; border-bottom: 2px solid #dbeafe; padding-bottom: 4px;">Resistance (R)</div>
    <div style="padding-left: 12px; line-height: 1.6;">
      Opposition to flow (vessel radius⁴, viscosity, length)<br>
      <span style="color: #059669; font-weight: 600;">Units: mmHg·min/L</span> | Radius is <span style="color: #dc2626; font-weight: 600;">most important</span> (1/r⁴)
    </div>
  </div>

</div>

<div style="margin-top: 16px; background: #f0fdf4; border-radius: 8px; padding: 12px 14px;">
  <div style="color: #166534; font-weight: 700; margin-bottom: 8px;">Three Rearrangements</div>
  <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; text-align: center;">
    <div style="background: white; padding: 8px; border-radius: 6px;">
      <div style="font-weight: 600;">Q = ΔP/R</div>
      <div style="font-size: 0.8rem; color: #6b7280;">Calculate Flow</div>
    </div>
    <div style="background: white; padding: 8px; border-radius: 6px;">
      <div style="font-weight: 600;">ΔP = Q × R</div>
      <div style="font-size: 0.8rem; color: #6b7280;">Calculate Pressure</div>
    </div>
    <div style="background: white; padding: 8px; border-radius: 6px;">
      <div style="font-weight: 600;">R = ΔP/Q</div>
      <div style="font-size: 0.8rem; color: #6b7280;">Calculate Resistance</div>
    </div>
  </div>
</div>`
}

/**
 * Format Systemic vs Pulmonary Circulation comparison (LO-4)
 */
function formatCirculationComparison(content: string): string {
  return `
<div style="background: #f0fdf4; border-radius: 8px; padding: 12px 14px; margin-bottom: 16px;">
  <div style="color: #166534; font-weight: 600; margin-bottom: 4px;">Serial Connection</div>
  <div>Blood flows: RV → <strong>Pulmonary</strong> → LA → LV → <strong>Systemic</strong> → RA</div>
  <div style="font-size: 0.9rem; margin-top: 4px;"><span style="color: #dc2626; font-weight: 600;">CO must be equal</span> in both circuits (~5–6 L/min)</div>
</div>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">

  <div style="background: #fef2f2; border-radius: 8px; padding: 14px;">
    <div style="color: #dc2626; font-weight: 700; font-size: 1rem; margin-bottom: 10px; text-align: center;">SYSTEMIC</div>
    <div style="line-height: 1.7; font-size: 0.95rem;">
      <strong>Function:</strong> O₂ to body tissues<br><br>
      <strong>Pressure:</strong> <span style="color: #dc2626; font-weight: 600;">HIGH</span><br><br>
      <strong>Resistance:</strong> <span style="color: #dc2626; font-weight: 600;">HIGH</span><br>
      TPR ≈ 16.5 mmHg·min/L<br><br>
      <strong>Gradient:</strong> ~92 mmHg<br>
      <span style="font-size: 0.85rem;">(P<sub>aorta</sub> − P<sub>RA</sub>)</span>
    </div>
  </div>

  <div style="background: #eff6ff; border-radius: 8px; padding: 14px;">
    <div style="color: #2563eb; font-weight: 700; font-size: 1rem; margin-bottom: 10px; text-align: center;">PULMONARY</div>
    <div style="line-height: 1.7; font-size: 0.95rem;">
      <strong>Function:</strong> Gas exchange in lungs<br><br>
      <strong>Pressure:</strong> <span style="color: #2563eb; font-weight: 600;">LOW</span><br><br>
      <strong>Resistance:</strong> <span style="color: #2563eb; font-weight: 600;">LOW</span><br>
      PVR ≈ 1.5 mmHg·min/L<br><br>
      <strong>Gradient:</strong> ~10 mmHg<br>
      <span style="font-size: 0.85rem;">(P<sub>PA</sub> − P<sub>LA</sub>)</span>
    </div>
  </div>

</div>

<div style="margin-top: 14px; background: #1e3a5f; color: white; border-radius: 8px; padding: 12px; text-align: center;">
  <div style="font-size: 0.9rem; margin-bottom: 4px;">Ohm's Law Applied</div>
  <div style="font-size: 0.95rem;">CO<sub>systemic</sub> = (P<sub>aorta</sub> − P<sub>RA</sub>) / TPR</div>
  <div style="font-size: 0.95rem;">CO<sub>pulmonary</sub> = (P<sub>PA</sub> − P<sub>LA</sub>) / PVR</div>
</div>`
}

/**
 * Format Resistance vs Conductance, Series vs Parallel (LO-5)
 */
function formatResistanceConductance(content: string): string {
  return `
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 16px;">
  <div style="background: #fef2f2; border-radius: 8px; padding: 14px;">
    <div style="color: #dc2626; font-weight: 700; font-size: 1rem; margin-bottom: 8px; text-align: center;">RESISTANCE (R)</div>
    <div style="line-height: 1.6; font-size: 0.95rem;">
      <strong>Definition:</strong> Opposition to blood flow<br><br>
      <strong>Units:</strong> mmHg·min/L<br><br>
      <strong>Determined by:</strong><br>
      • Radius (most important)<br>
      • Viscosity<br>
      • Length
    </div>
  </div>

  <div style="background: #eff6ff; border-radius: 8px; padding: 14px;">
    <div style="color: #2563eb; font-weight: 700; font-size: 1rem; margin-bottom: 8px; text-align: center;">CONDUCTANCE (C)</div>
    <div style="line-height: 1.6; font-size: 0.95rem;">
      <strong>Definition:</strong> Ease of blood flow<br><br>
      <strong>Formula:</strong> <span style="font-weight: 600;">C = 1/R</span><br><br>
      <strong>Units:</strong> L/min·mmHg<br><br>
      <span style="font-size: 0.85rem; color: #6b7280;">Reciprocal of resistance</span>
    </div>
  </div>
</div>

<div style="display: grid; gap: 12px;">

  <div style="background: #f0fdf4; border-left: 4px solid #059669; padding: 12px 14px; border-radius: 0 8px 8px 0;">
    <div style="color: #059669; font-weight: 700; margin-bottom: 6px;">Resistances in SERIES</div>
    <div style="font-size: 0.95rem; line-height: 1.5;">
      Connected end-to-end, blood flows sequentially<br>
      <strong>R<sub>total</sub> = R₁ + R₂ + R₃</strong><br>
      <span style="color: #dc2626;">→ ↑ Total resistance, ↓ Flow</span><br>
      <span style="font-size: 0.85rem; color: #6b7280;">Example: Arteries → arterioles → capillaries within an organ</span>
    </div>
  </div>

  <div style="background: #fefce8; border-left: 4px solid #ca8a04; padding: 12px 14px; border-radius: 0 8px 8px 0;">
    <div style="color: #ca8a04; font-weight: 700; margin-bottom: 6px;">Resistances in PARALLEL</div>
    <div style="font-size: 0.95rem; line-height: 1.5;">
      Multiple pathways, blood flow splits<br>
      <strong>1/R<sub>total</sub> = 1/R₁ + 1/R₂ + 1/R₃</strong><br>
      <span style="color: #059669;">→ ↓ Total resistance, ↑ Flow</span><br>
      <span style="font-size: 0.85rem; color: #6b7280;">Example: Organ circulations (brain, kidneys, GI) arranged in parallel</span>
    </div>
  </div>

</div>`
}

/**
 * Format Hagen-Poiseuille's Law and deviations (LO-6)
 */
function formatHagenPoiseuille(content: string): string {
  return `
<div style="background: #1e3a5f; color: white; border-radius: 8px; padding: 14px; margin-bottom: 16px; text-align: center;">
  <div style="font-size: 0.85rem; opacity: 0.85; margin-bottom: 4px;">Hagen-Poiseuille's Law</div>
  <div style="font-size: 1.2rem; font-weight: 700;">R = 8ηL / πr⁴</div>
  <div style="font-size: 0.85rem; margin-top: 6px;">η = viscosity | L = length | r = radius</div>
</div>

<div style="display: grid; gap: 12px; margin-bottom: 16px;">

  <div>
    <div style="color: #2563eb; font-weight: 700; font-size: 0.95rem; margin-bottom: 6px; border-bottom: 2px solid #dbeafe; padding-bottom: 4px;">Four Factors Determining Resistance</div>
    <div style="padding-left: 12px; line-height: 1.6;">
      • <strong>Viscosity (η):</strong> Directly proportional<br>
      • <strong>Length (L):</strong> Directly proportional<br>
      • <strong>Radius (r):</strong> <span style="color: #dc2626; font-weight: 600;">Inversely proportional to 4th power</span> (MOST IMPORTANT)<br>
      <span style="font-size: 0.9rem; color: #6b7280; margin-left: 16px;">→ Doubling radius ↓ resistance by factor of 16</span>
    </div>
  </div>

</div>

<div style="color: #dc2626; font-weight: 700; font-size: 0.95rem; margin-bottom: 10px;">Five Deviations in Circulatory System:</div>

<div style="display: grid; gap: 8px;">
  <div style="padding: 10px 12px; background: #fef2f2; border-radius: 6px; font-size: 0.95rem;">
    <strong>1. Non-Newtonian fluid:</strong> Blood viscosity changes with shear rate (↓ at high shear, ↑ at low shear)
  </div>
  <div style="padding: 10px 12px; background: #fefce8; border-radius: 6px; font-size: 0.95rem;">
    <strong>2. Pulsatile flow:</strong> Rhythmic heart contractions, not steady flow
  </div>
  <div style="padding: 10px 12px; background: #f0fdf4; border-radius: 6px; font-size: 0.95rem;">
    <strong>3. Vessel elasticity:</strong> Blood vessels expand/contract, not rigid tubes
  </div>
  <div style="padding: 10px 12px; background: #eff6ff; border-radius: 6px; font-size: 0.95rem;">
    <strong>4. Branching geometry:</strong> Not straight cylinders — causes flow pattern changes
  </div>
  <div style="padding: 10px 12px; background: #f3e8ff; border-radius: 6px; font-size: 0.95rem;">
    <strong>5. Turbulent flow:</strong> Can occur in large vessels at high velocities
  </div>
</div>`
}

/**
 * Format Laminar vs Turbulent flow, Reynolds number (LO-7)
 */
function formatLaminarTurbulent(content: string): string {
  return `
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 16px;">

  <div style="background: #f0fdf4; border-radius: 8px; padding: 14px;">
    <div style="color: #059669; font-weight: 700; font-size: 1rem; margin-bottom: 8px; text-align: center;">LAMINAR FLOW</div>
    <div style="line-height: 1.6; font-size: 0.95rem;">
      <strong>Definition:</strong> Smooth, orderly, layered flow<br><br>
      <strong>Profile:</strong> Parabolic velocity<br>
      (fastest at center)<br><br>
      <strong>Properties:</strong><br>
      • Quiet, energy-efficient<br>
      • Normal in small vessels
    </div>
  </div>

  <div style="background: #fef2f2; border-radius: 8px; padding: 14px;">
    <div style="color: #dc2626; font-weight: 700; font-size: 1rem; margin-bottom: 8px; text-align: center;">TURBULENT FLOW</div>
    <div style="line-height: 1.6; font-size: 0.95rem;">
      <strong>Definition:</strong> Chaotic, disordered with eddies<br><br>
      <strong>Profile:</strong> Random mixing<br><br>
      <strong>Properties:</strong><br>
      • ↑ Energy loss<br>
      • <span style="color: #dc2626; font-weight: 600;">Produces sounds</span>
    </div>
  </div>

</div>

<div style="background: #1e3a5f; color: white; border-radius: 8px; padding: 12px; margin-bottom: 16px; text-align: center;">
  <div style="font-size: 0.85rem; opacity: 0.85;">Reynolds Number</div>
  <div style="font-size: 1.1rem; font-weight: 600; margin: 4px 0;">Re = (d × v × ρ) / η</div>
  <div style="font-size: 0.85rem;">d = diameter | v = velocity | ρ = density | η = viscosity</div>
  <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; margin-top: 10px; font-size: 0.85rem;">
    <div style="background: rgba(255,255,255,0.15); padding: 6px; border-radius: 4px;"><span style="color: #86efac;">Re < 2000</span><br>Laminar</div>
    <div style="background: rgba(255,255,255,0.15); padding: 6px; border-radius: 4px;"><span style="color: #fde047;">2000–3000</span><br>Transitional</div>
    <div style="background: rgba(255,255,255,0.15); padding: 6px; border-radius: 4px;"><span style="color: #fca5a5;">Re > 3000</span><br>Turbulent</div>
  </div>
</div>

<div style="color: #dc2626; font-weight: 700; font-size: 0.95rem; margin-bottom: 8px;">Six Factors Shifting to Turbulence:</div>
<ol style="margin: 0 0 0 20px; padding: 0; line-height: 1.7; font-size: 0.95rem;">
  <li>↑ Flow velocity</li>
  <li>Large vessel diameter</li>
  <li>↓ Blood viscosity (anemia)</li>
  <li>Irregular vessel geometry (plaques, stenosis)</li>
  <li>High pressure gradients</li>
  <li>Vessel branching/curvature</li>
</ol>

<div style="margin-top: 14px; padding: 10px 12px; background: #fefce8; border-radius: 6px;">
  <strong>Audible Events:</strong><br>
  <strong>Murmurs</strong> = turbulent flow across heart valves<br>
  <strong>Bruits</strong> = turbulent flow in arteries (stenosis, plaques)
</div>`
}

/**
 * Generic intelligent formatter for other content
 */
function formatGenericContent(content: string, loTitle: string): string {
  // Split into sentences
  const sentences = content.split(/(?<=[.!?])\s+/).filter(s => s.trim().length > 10)

  if (sentences.length === 0) {
    return `<p style="line-height: 1.6;">${content}</p>`
  }

  // First sentence as intro
  let html = `<div style="background: #f8fafc; border-radius: 8px; padding: 12px 14px; margin-bottom: 14px; line-height: 1.6;">
  ${applySmartFormatting(sentences[0])}
</div>`

  // Remaining sentences as organized points
  if (sentences.length > 1) {
    html += `<div style="display: grid; gap: 8px;">`
    for (let i = 1; i < sentences.length && i <= 6; i++) {
      html += `<div style="padding-left: 12px; line-height: 1.5; border-left: 3px solid #e2e8f0;">
  ${applySmartFormatting(sentences[i])}
</div>`
    }
    html += `</div>`
  }

  return html
}

/**
 * Apply smart formatting - bold key terms, blue for important concepts
 */
function applySmartFormatting(text: string): string {
  let result = text

  // Blue text for key physiological concepts (not just random terms)
  const blueTerms = [
    'Haldane effect', 'Bohr effect', 'chloride shift', 'Hamburger shift',
    '10,000-fold', '~10,000×', 'Band 3',
  ]

  for (const term of blueTerms) {
    const regex = new RegExp(`\\b(${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})\\b`, 'gi')
    result = result.replace(regex, '<span style="color: #2563eb; font-weight: 600;">$1</span>')
  }

  // Green for normal values/numbers
  result = result.replace(/(\d+(?:–|-)\d+\s*(?:fL|μm|mm|%|mM|ml\/L|pg|g\/L))/g,
    '<span style="color: #059669; font-weight: 600;">$1</span>')
  result = result.replace(/(~?\d+\s*(?:days?|hours?|minutes?))/gi,
    '<span style="color: #059669; font-weight: 600;">$1</span>')

  // Bold for key structural terms
  const boldTerms = [
    'hemoglobin', 'bicarbonate', 'carbonic anhydrase', 'RBCs', 'red blood cells',
    'bone marrow', 'erythropoiesis', 'erythropoietin', 'deoxygenated', 'oxygenated',
    'carbaminohemoglobin', 'spectrin', 'ankyrin', 'glycolysis',
  ]

  for (const term of boldTerms) {
    const regex = new RegExp(`\\b(${term})\\b`, 'gi')
    result = result.replace(regex, '<strong>$1</strong>')
  }

  return result
}

function generateTitleFromLO(loTitle: string): string {
  // Generate a DERIVED descriptive title for the answer card (not the question)
  const clean = loTitle.replace(/>>|<</g, '').trim()

  // Known topic patterns → descriptive titles
  const topicPatterns: [RegExp, string][] = [
    [/CO2 transport mechanisms/i, 'CO₂ Transport Mechanisms in Blood'],
    [/carbon.?dioxide transport/i, 'CO₂ Transport Mechanisms in Blood'],
    [/chloride.?shift|hamburger.?shift/i, 'The Chloride Shift (Hamburger Shift)'],
    [/haldane effect/i, 'The Haldane Effect'],
    [/bohr effect/i, 'The Bohr Effect'],
    [/carbonic anhydrase/i, 'Carbonic Anhydrase'],
    [/reference values?.+CO2|CO2.+reference values?/i, 'CO₂ & Bicarbonate Reference Values'],
    [/reference values?.+bicarbonate|bicarbonate.+reference/i, 'CO₂ & Bicarbonate Reference Values'],
    [/fate.+organelles|organelles.+mature/i, 'Organelle Loss in Mature RBCs'],
    [/MCH.*MCHC.*MCV|red blood cell indices/i, 'Red Blood Cell Indices (MCH, MCHC, MCV)'],
    [/price.?jones/i, 'The Price-Jones Curve'],
    [/types?.+anemia|anemia.+mechanism/i, 'Types and Mechanisms of Anemia'],
    [/osmotic resistance/i, 'Osmotic Resistance of RBCs'],
    [/blood sedimentation|ESR/i, 'Erythrocyte Sedimentation Rate (ESR)'],
    [/membrane.+red blood|RBC.+membrane/i, 'Red Blood Cell Membrane Structure'],
    [/parameters?.+red blood|RBC.+count.*size/i, 'RBC Parameters'],
    // Topic 33: Hemodynamics
    [/flow.*(velocity|cross.?sectional)|velocity.*(flow|cross.?sectional)|define.*(flow|velocity)/i, 'Flow vs Velocity in Blood Circulation'],
    [/bernoulli|total energy.*(flowing|blood)/i, 'Bernoulli\'s Law: Blood Flow Energy'],
    [/ohm.?s law|pressure gradient.*flow.*resistance/i, 'Ohm\'s Law for Hemodynamics'],
    [/systemic.*pulmonary|pulmonary.*systemic|serially connected/i, 'Systemic vs Pulmonary Circulation'],
    [/resistance.*conductance|conductance.*resistance/i, 'Resistance & Conductance: Series vs Parallel'],
    [/hagen.?poiseuille|hydraulic resistance/i, 'Hagen-Poiseuille\'s Law & Deviations'],
    [/laminar.*turbulent|turbulent.*laminar|reynolds/i, 'Laminar vs Turbulent Flow'],
  ]

  for (const [pattern, title] of topicPatterns) {
    if (pattern.test(clean)) {
      return title
    }
  }

  // Fallback: extract main concept from LO
  const verbPatterns = [
    /(?:Describe|Explain|Define|Name|Give|Characterize)\s+(?:the\s+)?(.+?)(?:\.|$)/i,
  ]

  for (const pattern of verbPatterns) {
    const match = clean.match(pattern)
    if (match && match[1]) {
      // Clean up and capitalize
      let title = match[1].trim()
      if (title.length > 50) title = title.substring(0, 47) + '...'
      return title.charAt(0).toUpperCase() + title.slice(1)
    }
  }

  return clean.length > 50 ? clean.substring(0, 47) + '...' : clean
}

function generateTagsFromLO(lo: LearningObjective, topic: Topic): string[] {
  const tags: string[] = []

  // Add topic-based tags
  const topicWords = topic.title.toLowerCase().split(/\s+/)
  topicWords.forEach(word => {
    if (word.length > 3 && !['the', 'and', 'for', 'with'].includes(word)) {
      tags.push(word.replace(/[^a-z0-9]/g, ''))
    }
  })

  // Add high-yield tag for critical LOs
  if (lo.isCritical) {
    tags.push('high-yield')
  }

  // Extract key terms from title
  const keyTerms = [
    'co2-transport', 'bicarbonate', 'carbonic-anhydrase', 'chloride-shift',
    'haldane-effect', 'hemoglobin', 'respiration', 'reference-values'
  ]

  const titleLower = lo.title.toLowerCase()
  keyTerms.forEach(term => {
    if (titleLower.includes(term.replace(/-/g, ' ')) || titleLower.includes(term.replace(/-/g, ''))) {
      tags.push(term)
    }
  })

  // Deduplicate and limit
  return [...new Set(tags)].slice(0, 8)
}

async function loadTopic(topicNumber: number): Promise<Topic> {
  const topicPath = path.join(__dirname, '..', 'src', 'apps', 'physiology', 'data', 'Topics', `topic${topicNumber}.js`)

  if (!fs.existsSync(topicPath)) {
    throw new Error(`Topic file not found: ${topicPath}`)
  }

  // Read the file content
  const content = fs.readFileSync(topicPath, 'utf-8')

  // Extract the topic object using regex (safer than eval)
  const match = content.match(/const\s+topic\d+\s*=\s*(\{[\s\S]*?\});?\s*export/)
  if (!match) {
    throw new Error(`Could not parse topic file: ${topicPath}`)
  }

  // Use Function constructor to safely evaluate the object literal
  try {
    const topicObj = new Function(`return ${match[1]}`)()
    return topicObj as Topic
  } catch (e) {
    throw new Error(`Failed to parse topic ${topicNumber}: ${e}`)
  }
}

async function generateDeck(options: GeneratorOptions): Promise<PreloadedDeck> {
  const cards: PreloadedCard[] = []
  const topicIds: number[] = []

  for (const topicNum of options.topics) {
    console.log(`Processing topic ${topicNum}...`)

    try {
      const topic = await loadTopic(topicNum)
      topicIds.push(topicNum)

      for (const lo of topic.learningObjectives) {
        const card: PreloadedCard = {
          id: `topic${topicNum}-${lo.id}`,
          front: {
            text: createFrontHTML(lo.title)
          },
          back: {
            text: generateCardBackContent(lo, topic)
          },
          tags: generateTagsFromLO(lo, topic)
        }

        cards.push(card)
        console.log(`  - Generated card for ${lo.id}`)
      }
    } catch (error) {
      console.error(`Error processing topic ${topicNum}:`, error)
    }
  }

  const deck: PreloadedDeck = {
    id: `preloaded-${options.deckId}`,
    name: options.deckName,
    description: options.description || `Flashcards for Physiology topics ${options.topics.join(', ')}`,
    subject: 'physiology',
    topicIds,
    version: '2.0.0',
    cards
  }

  return deck
}

function saveDeck(deck: PreloadedDeck, outputPath: string): void {
  const dir = path.dirname(outputPath)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }

  fs.writeFileSync(outputPath, JSON.stringify(deck, null, 2))
  console.log(`\nDeck saved to: ${outputPath}`)
  console.log(`Total cards: ${deck.cards.length}`)
}

// ============================================================================
// CLI
// ============================================================================

function parseArgs(): GeneratorOptions {
  const args = process.argv.slice(2)
  const options: GeneratorOptions = {
    topics: [],
    deckId: '',
    deckName: '',
    description: ''
  }

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--topics':
        const topicsArg = args[++i]
        if (topicsArg.includes('-')) {
          const [start, end] = topicsArg.split('-').map(Number)
          for (let t = start; t <= end; t++) {
            options.topics.push(t)
          }
        } else {
          options.topics = topicsArg.split(',').map(Number)
        }
        break
      case '--id':
        options.deckId = args[++i]
        break
      case '--name':
        options.deckName = args[++i]
        break
      case '--description':
        options.description = args[++i]
        break
      case '--append':
        options.appendToExisting = args[++i]
        break
    }
  }

  // Set defaults
  if (!options.deckId && options.topics.length > 0) {
    if (options.topics.length === 1) {
      options.deckId = `physio-topic-${options.topics[0]}`
    } else {
      options.deckId = `physio-topics-${options.topics[0]}-${options.topics[options.topics.length - 1]}`
    }
  }

  if (!options.deckName && options.topics.length > 0) {
    options.deckName = `Physiology: Topics ${options.topics.join(', ')}`
  }

  return options
}

async function main(): Promise<void> {
  console.log('Flashcard Deck Generator v2.0')
  console.log('=============================\n')

  const options = parseArgs()

  if (options.topics.length === 0) {
    console.log('Usage:')
    console.log('  npx ts-node --esm scripts/generate-flashcard-deck.ts --topics 29')
    console.log('  npx ts-node --esm scripts/generate-flashcard-deck.ts --topics 33-40 --name "MCQ3" --id "mcq3"')
    console.log('')
    console.log('Options:')
    console.log('  --topics <nums>   Topic numbers (e.g., 29 or 33-40 or 29,30,31)')
    console.log('  --id <id>         Deck ID (default: auto-generated)')
    console.log('  --name <name>     Deck name (default: auto-generated)')
    console.log('  --description <d> Deck description')
    console.log('  --append <id>     Append to existing deck by ID')
    process.exit(0)
  }

  console.log(`Generating deck for topics: ${options.topics.join(', ')}`)
  console.log(`Deck ID: ${options.deckId}`)
  console.log(`Deck Name: ${options.deckName}\n`)

  const deck = await generateDeck(options)

  // Determine output path
  const outputDir = path.join(__dirname, '..', 'src', 'apps', 'flashcards', 'data', 'preloaded', 'physiology')
  const outputFile = `${options.deckId.replace(/^preloaded-/, '')}.json`
  const outputPath = path.join(outputDir, outputFile)

  saveDeck(deck, outputPath)

  console.log('\nDone!')
}

main().catch(console.error)
