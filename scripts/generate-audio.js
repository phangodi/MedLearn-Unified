#!/usr/bin/env node

/**
 * ElevenLabs Audio Generation Script with Claude API Preprocessing
 *
 * Automatically generates audio files for physiology exam answers using:
 * 1. Claude API (Sonnet 4.5) - Preprocesses medical text for natural TTS pronunciation
 * 2. ElevenLabs API - Generates audio from preprocessed text
 *
 * Usage:
 *   node scripts/generate-audio.js --topic 41 --lo 1   # Test with single LO
 *   node scripts/generate-audio.js --topic 41          # Process entire topic
 *   node scripts/generate-audio.js --topic 41 --force  # Regenerate existing files
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import Anthropic from '@anthropic-ai/sdk';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables from scripts/.env
dotenv.config({ path: path.join(__dirname, '.env') });

// Configuration
const CONFIG = {
  // API Keys
  anthropicApiKey: process.env.ANTHROPIC_API_KEY,
  elevenlabsApiKey: process.env.ELEVENLABS_API_KEY,

  // ElevenLabs Settings
  voiceId: process.env.ELEVENLABS_VOICE_ID || 'TX3LPaxmHKxFdv7VOQHJ',
  modelId: process.env.ELEVENLABS_MODEL_ID || 'eleven_flash_v2_5',

  // Paths
  outputDir: path.join(__dirname, '../client/public/Audio'),
  topicsDir: path.join(__dirname, '../client/src/apps/physiology/data/Topics'),

  // API Settings
  maxRetries: 3,
  retryDelay: 2000, // ms
};

// Validate environment
const missingVars = [];
if (!CONFIG.anthropicApiKey) missingVars.push('ANTHROPIC_API_KEY');
if (!CONFIG.elevenlabsApiKey) missingVars.push('ELEVENLABS_API_KEY');

if (missingVars.length > 0) {
  console.error('❌ Error: Missing required environment variables:');
  missingVars.forEach(v => console.error(`   - ${v}`));
  console.error('\nPlease create scripts/.env file with:');
  console.error('   ANTHROPIC_API_KEY=your_key_here');
  console.error('   ELEVENLABS_API_KEY=your_key_here');
  console.error('\nSee scripts/.env.example for template');
  process.exit(1);
}

// Initialize Claude client
const anthropic = new Anthropic({
  apiKey: CONFIG.anthropicApiKey,
});

// Ensure output directory exists
if (!fs.existsSync(CONFIG.outputDir)) {
  fs.mkdirSync(CONFIG.outputDir, { recursive: true });
}

/**
 * Parse command line arguments
 */
function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    topic: null,
    learningObjectives: [],
    force: false,
    review: false,
    quiet: false,
  };

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--topic':
        options.topic = parseInt(args[++i]);
        break;
      case '--lo':
        options.learningObjectives = args[++i].split(',').map(n => parseInt(n.trim()));
        break;
      case '--force':
        options.force = true;
        break;
      case '--review':
        options.review = true;
        break;
      case '--quiet':
        options.quiet = true;
        break;
      case '--help':
        printHelp();
        process.exit(0);
      default:
        console.error(`Unknown option: ${args[i]}`);
        printHelp();
        process.exit(1);
    }
  }

  if (!options.topic) {
    console.error('❌ Error: --topic is required');
    printHelp();
    process.exit(1);
  }

  return options;
}

function printHelp() {
  console.log(`
🎙️  ElevenLabs Audio Generation Script

Usage:
  node scripts/generate-audio.js --topic <number> [options]

Options:
  --topic N             Topic number to process (required)
  --lo N,M              Process specific learning objectives only (optional)
  --force               Regenerate existing audio files
  --review              Show preprocessing and require manual approval
  --quiet               Minimal output (summary only)
  --help                Show this help message

Examples:
  # Test with single learning objective
  node scripts/generate-audio.js --topic 41 --lo 1

  # Process entire topic
  node scripts/generate-audio.js --topic 41

  # Process specific LOs in topic
  node scripts/generate-audio.js --topic 41 --lo 1,2,3

  # Regenerate all audio for topic
  node scripts/generate-audio.js --topic 41 --force

Environment Variables (in scripts/.env):
  ANTHROPIC_API_KEY       Your Claude API key (required)
  ELEVENLABS_API_KEY      Your ElevenLabs API key (required)
  ELEVENLABS_VOICE_ID     Voice ID (default: TX3LPaxmHKxFdv7VOQHJ)
  ELEVENLABS_MODEL_ID     Model ID (default: eleven_flash_v2_5)
`);
}

/**
 * Extract learning objectives from topic file
 */
function extractLearningObjectives(topicNumber) {
  const topicPath = path.join(CONFIG.topicsDir, `topic${topicNumber}.js`);

  if (!fs.existsSync(topicPath)) {
    console.error(`❌ Error: Topic file not found: topic${topicNumber}.js`);
    return null;
  }

  try {
    const content = fs.readFileSync(topicPath, 'utf8');
    const objectives = [];

    // Extract learning objectives using regex
    const loRegex = /\{\s*id:\s*['"]lo-(\d+)['"]/g;
    const matches = [...content.matchAll(loRegex)];

    for (const match of matches) {
      const loId = parseInt(match[1]);

      // Extract the raw exam answer for this learning objective
      // Use a more robust pattern that handles escaped quotes
      const loPattern = new RegExp(
        `id:\\s*['"]lo-${loId}['"][\\s\\S]*?examAnswer:\\s*\\{[\\s\\S]*?raw:\\s*['"]([\\s\\S]*?)['"]\\s*\\}`,
        'i'
      );

      const loMatch = content.match(loPattern);

      if (loMatch && loMatch[1]) {
        // Unescape the text and remove critical markers
        let rawText = loMatch[1]
          .replace(/\\n/g, ' ')
          .replace(/\\'/g, "'")
          .replace(/\\"/g, '"')
          .replace(/\\\\/g, '\\')
          .replace(/>>|<</g, '')
          .trim();

        // Generate zero-padded filenames
        const topicPadded = String(topicNumber).padStart(3, '0');
        const loPadded = String(loId).padStart(2, '0');
        const topicDir = `Topic-${topicPadded}`;
        const filename = `LO-${loPadded}.mp3`;

        objectives.push({
          topicNumber,
          loId,
          rawText,
          topicDir,
          filename,
          filepath: path.join(CONFIG.outputDir, topicDir, filename),
          audioUrl: `/Audio/${topicDir}/${filename}`,
        });
      }
    }

    return objectives;
  } catch (error) {
    console.error(`❌ Error reading topic${topicNumber}.js:`, error.message);
    return null;
  }
}

/**
 * Preprocess text using Claude API for natural TTS pronunciation
 * Philosophy: "How would a professor say this in a lecture?"
 */
async function preprocessTextForTTS(rawText) {
  const systemPrompt = `You are a medical education text-to-speech preprocessing expert. Your job is to convert medical exam answer text into a natural spoken format that sounds like a professor giving a lecture.

CORE PHILOSOPHY: "How would a professor naturally say this in a lecture to students?"

CRITICAL RULE: ALWAYS expand ALL abbreviations and symbols. Never leave an abbreviation that a text-to-speech engine would read as individual letters. When in doubt, expand it.

PREPROCESSING RULES:

1. PUNCTUATION FOR SPEECH
   - Em-dash (—) → comma and space (", ")
   - Semicolons separating list items → keep as-is or replace with period for natural pause
   - Colons introducing lists → keep as-is

2. GREEK LETTERS (Always expand)
   - α → alpha
   - β → beta
   - γ → gamma
   - δ or Δ → delta
   - τ → tau
   - μ → micro (e.g., μm → micrometers, μmol → micromoles)
   - Σ → sigma

3. VARIABLE NOTATION (Expand contextually)
   - Ptm → P transmural
   - Pinside → P inside
   - Poutside → P outside
   - ΔV → delta V
   - ΔP → delta P
   - Subscripts: R₁ → R 1, R₂ → R 2

4. CHEMICAL FORMULAS (Always expand)
   - O₂ or O2 → oxygen
   - CO₂ or CO2 → carbon dioxide
   - H₂O or H2O → water
   - H⁺ → hydrogen ions
   - HCO₃⁻ or HCO3- → bicarbonate
   - Na⁺ → sodium
   - K⁺ → potassium
   - Ca²⁺ → calcium
   - Cl⁻ → chloride
   - Mg²⁺ → magnesium
   - NO → nitric oxide
   - H₂O₂ → hydrogen peroxide
   - ATP → A T P
   - ADP → A D P
   - AMP → A M P
   - cAMP → cyclic A M P
   - cGMP → cyclic G M P
   - NADH → N A D H
   - FADH₂ → F A D H 2

5. ENDOCRINOLOGY ABBREVIATIONS (Always expand)
   - GH → growth hormone
   - ACTH → adrenocorticotropic hormone
   - TSH → thyroid-stimulating hormone
   - FSH → follicle-stimulating hormone
   - LH → luteinizing hormone
   - ADH → antidiuretic hormone
   - ANP → atrial natriuretic peptide
   - CRH → corticotropin-releasing hormone
   - TRH → thyrotropin-releasing hormone
   - GnRH → gonadotropin-releasing hormone
   - GHRH → growth hormone-releasing hormone
   - PRH → prolactin-releasing hormone
   - MSH → melanocyte-stimulating hormone
   - POMC → pro-opiomelanocortin
   - T3 → T 3 (thyroid hormone T 3)
   - T4 → T 4 (thyroid hormone T 4)
   - PTH → parathyroid hormone
   - IGF-1 or IGF1 → insulin-like growth factor 1
   - RAAS or RAA → renin-angiotensin-aldosterone system
   - EPO → erythropoietin

6. CARDIOVASCULAR ABBREVIATIONS (Always expand)
   - HR → heart rate
   - SV → stroke volume
   - CO (cardiac context) → cardiac output
   - MAP → mean arterial pressure
   - TPR or SVR → total peripheral resistance
   - EDV → end-diastolic volume
   - ESV → end-systolic volume
   - EF → ejection fraction
   - BP → blood pressure
   - CVP → central venous pressure
   - PAP → pulmonary artery pressure

7. RESPIRATORY ABBREVIATIONS (Always expand)
   - FRC → functional residual capacity
   - TLC → total lung capacity
   - RV (lung context) → residual volume
   - VC → vital capacity
   - TV or VT → tidal volume
   - IRV → inspiratory reserve volume
   - ERV → expiratory reserve volume
   - FEV1 → F E V 1
   - FVC → forced vital capacity
   - V/Q → ventilation-perfusion
   - PaO2 → partial pressure of oxygen in arterial blood
   - PaCO2 → partial pressure of carbon dioxide in arterial blood
   - SpO2 → oxygen saturation
   - pO2 → partial pressure of oxygen
   - pCO2 → partial pressure of carbon dioxide

8. RENAL ABBREVIATIONS (Always expand)
   - GFR → glomerular filtration rate
   - RPF → renal plasma flow
   - FF → filtration fraction
   - PCT → proximal convoluted tubule
   - DCT → distal convoluted tubule
   - TAL → thick ascending limb
   - CCT → cortical collecting tubule
   - RBF → renal blood flow
   - Tm → tubular maximum

9. NERVOUS SYSTEM ABBREVIATIONS (Always expand)
   - CNS → central nervous system
   - SNS → sympathetic nervous system
   - PNS → parasympathetic nervous system
   - ANS → autonomic nervous system
   - ACh → acetylcholine
   - NE or NA (neurotransmitter context) → norepinephrine
   - GABA → gamma-aminobutyric acid
   - 5-HT → serotonin
   - DA → dopamine
   - EPSP → excitatory postsynaptic potential
   - IPSP → inhibitory postsynaptic potential

10. GENERAL MEDICAL ABBREVIATIONS (Always expand)
    - IV → intravenous
    - IM → intramuscular
    - SC or SQ → subcutaneous
    - PO → by mouth
    - mRNA → messenger R N A
    - DNA → D N A
    - RNA → R N A

11. UNITS (Natural pronunciation)
    - mmHg → millimeters of mercury
    - cmH₂O or cmH2O → centimeters of water
    - mL → milliliters
    - L → liters
    - g → grams
    - mg → milligrams
    - kg → kilograms
    - mmol → millimoles
    - nmol → nanomoles
    - pmol → picomoles

12. MATHEMATICAL EXPRESSIONS
    - "equals", "divided by", "times", "plus", "minus" → keep as-is
    - Fractions already in spoken form → preserve

13. PRESERVE EVERYTHING ELSE
    - Sentence structure, punctuation, flow
    - Don't simplify or summarize
    - Don't add explanations
    - Keep the same meaning and detail level
    - Medical terminology that is already a full word → keep unchanged

OUTPUT: Return ONLY the preprocessed text, nothing else. No explanations, no markdown, no labels, just the plain converted text ready for text-to-speech.`;

  try {
    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 4096,
      temperature: 0,
      system: systemPrompt,
      messages: [
        {
          role: 'user',
          content: `Convert this medical exam answer text for text-to-speech:\n\n${rawText}`
        }
      ]
    });

    const preprocessedText = message.content[0].text.trim();
    return preprocessedText;
  } catch (error) {
    console.error('❌ Claude API error:', error.message);
    throw error;
  }
}

/**
 * Generate audio using ElevenLabs API
 */
async function generateAudio(text, outputPath, retries = 0) {
  try {
    const response = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${CONFIG.voiceId}`,
      {
        method: 'POST',
        headers: {
          'Accept': 'audio/mpeg',
          'Content-Type': 'application/json',
          'xi-api-key': CONFIG.elevenlabsApiKey,
        },
        body: JSON.stringify({
          text: text,
          model_id: CONFIG.modelId,
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.75,
          },
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`ElevenLabs API error: ${response.status} - ${errorText}`);
    }

    // Get audio data as buffer
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Ensure directory exists
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Save to file
    fs.writeFileSync(outputPath, buffer);

    return {
      success: true,
      characters: text.length,
      fileSize: buffer.length,
    };
  } catch (error) {
    if (retries < CONFIG.maxRetries) {
      console.warn(`   ⚠️  Retry ${retries + 1}/${CONFIG.maxRetries} after ${CONFIG.retryDelay}ms...`);
      await new Promise(resolve => setTimeout(resolve, CONFIG.retryDelay));
      return generateAudio(text, outputPath, retries + 1);
    }
    throw error;
  }
}

/**
 * Update topic.js file with audioUrl for all processed learning objectives
 */
function updateTopicFileWithAudioUrls(topicNumber, audioMappings) {
  const topicPath = path.join(CONFIG.topicsDir, `topic${topicNumber}.js`);
  let content = fs.readFileSync(topicPath, 'utf8');

  // Update each learning objective with audioUrl
  for (const { loId, audioUrl } of audioMappings) {
    // Find the learning objective and add/update audioUrl
    const loPattern = new RegExp(
      `(\\{\\s*id:\\s*['"]lo-${loId}['"][\\s\\S]*?examAnswer:\\s*\\{[\\s\\S]*?\\})([\\s\\S]*?)(,?\\s*audioUrl:\\s*['"][^'"]*['"])?([\\s\\S]*?(?=\\}\\s*,?\\s*(?:\\{\\s*id:|\\])))`,
      'i'
    );

    // Check if audioUrl already exists
    const hasAudioUrl = content.match(new RegExp(`id:\\s*['"]lo-${loId}['"][\\s\\S]*?audioUrl:\\s*['"]`, 'i'));

    if (hasAudioUrl) {
      // Replace existing audioUrl
      content = content.replace(
        new RegExp(`(id:\\s*['"]lo-${loId}['"][\\s\\S]*?audioUrl:\\s*)['"][^'"]*['"]`, 'i'),
        `$1'${audioUrl}'`
      );
    } else {
      // Add new audioUrl after examAnswer
      content = content.replace(
        new RegExp(`(id:\\s*['"]lo-${loId}['"][\\s\\S]*?examAnswer:\\s*\\{[\\s\\S]*?\\})(\\s*)((?:,\\s*)?\\})`, 'i'),
        `$1,\n        audioUrl: '${audioUrl}'$2$3`
      );
    }
  }

  fs.writeFileSync(topicPath, content, 'utf8');
}

/**
 * Format file size for display
 */
function formatBytes(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}

/**
 * Prompt user for input
 */
function promptUser(question) {
  return new Promise((resolve) => {
    process.stdout.write(question);
    process.stdin.once('data', (data) => {
      resolve(data.toString().trim());
    });
  });
}

/**
 * Main execution
 */
async function main() {
  const options = parseArgs();

  if (!options.quiet) {
    console.log('═══════════════════════════════════════════════════════');
    console.log('🎙️  ElevenLabs Audio Generation with Claude Preprocessing');
    console.log('═══════════════════════════════════════════════════════\n');

    console.log(`📚 Topic: ${options.topic}`);
    console.log(`🎤 Voice: ${CONFIG.voiceId}`);
    console.log(`🤖 ElevenLabs Model: ${CONFIG.modelId}`);
    console.log(`🧠 Preprocessing: Claude Sonnet 4.5\n`);
  }

  // Extract learning objectives
  const allObjectives = extractLearningObjectives(options.topic);

  if (!allObjectives || allObjectives.length === 0) {
    console.log('⚠️  No learning objectives found');
    return;
  }

  // Filter by specific LOs if requested
  let objectives = options.learningObjectives.length > 0
    ? allObjectives.filter(obj => options.learningObjectives.includes(obj.loId))
    : allObjectives;

  if (!options.quiet) {
    console.log(`📝 Found ${objectives.length} learning objective(s) to process\n`);

    // Calculate total characters
    const totalChars = objectives.reduce((sum, obj) => sum + obj.rawText.length, 0);
    console.log(`📊 Total characters (raw): ${totalChars.toLocaleString()}`);
    console.log(`💰 Estimated ElevenLabs cost: ~${(totalChars / 1000).toFixed(1)}K characters\n`);
  }

  // Process each learning objective
  let successCount = 0;
  let failureCount = 0;
  let skippedCount = 0;
  let totalBytes = 0;
  const audioMappings = [];

  for (let i = 0; i < objectives.length; i++) {
    const obj = objectives[i];
    const progress = `[${i + 1}/${objectives.length}]`;

    if (!options.quiet) {
      console.log(`\n${'═'.repeat(60)}`);
      console.log(`${progress} Topic ${obj.topicNumber}, Learning Objective ${obj.loId}`);
      console.log(`${'═'.repeat(60)}\n`);
    }

    // Check if file already exists
    if (fs.existsSync(obj.filepath) && !options.force) {
      if (!options.quiet) {
        console.log(`⏭️  Audio file already exists: ${obj.topicDir}/${obj.filename}`);
        console.log(`   Use --force to regenerate`);
      }
      skippedCount++;

      // Still add to mappings for topic.js update
      audioMappings.push({ loId: obj.loId, audioUrl: obj.audioUrl });
      continue;
    }

    try {
      // Step 1: Preprocess text with Claude
      if (!options.quiet) {
        console.log(`🧠 Preprocessing text with Claude Sonnet 4.5...`);
      }
      const preprocessedText = await preprocessTextForTTS(obj.rawText);

      let finalText = preprocessedText;

      // Ensure text ends with sentence-ending punctuation to prevent ElevenLabs clipping the last word
      if (!/[.!?]\s*$/.test(finalText)) {
        finalText = finalText.trimEnd() + '.';
      }

      // Only show review if --review flag is set
      if (options.review) {
        // Show before/after
        console.log(`\n📄 ORIGINAL TEXT:`);
        console.log(`   ${obj.rawText}\n`);

        console.log(`📝 PREPROCESSED FOR TTS:`);
        console.log(`   ${preprocessedText}\n`);

        // Get user approval
        console.log(`\n⚠️  Review the preprocessed text above.`);
        const approval = await promptUser(`   Type 'approve' to continue, 'edit' to modify, 'skip' to skip: `);

        if (approval.toLowerCase() === 'skip') {
          console.log(`   ⏭️  Skipped by user\n`);
          skippedCount++;
          continue;
        } else if (approval.toLowerCase() === 'edit') {
          console.log(`\n   Paste the corrected text (press Enter twice when done):`);
          const lines = [];
          const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
          });

          await new Promise((resolve) => {
            readline.on('line', (line) => {
              if (line === '') {
                readline.close();
                resolve();
              } else {
                lines.push(line);
              }
            });
          });

          finalText = lines.join(' ').trim();
          console.log(`\n   ✅ Using edited text\n`);
        } else if (approval.toLowerCase() !== 'approve') {
          console.log(`   ❌ Invalid input. Skipping.\n`);
          skippedCount++;
          continue;
        }
      }

      // Step 2: Generate audio with ElevenLabs
      if (!options.quiet) {
        console.log(`🎙️  Generating audio with ElevenLabs...`);
      }
      const result = await generateAudio(finalText, obj.filepath);

      successCount++;
      totalBytes += result.fileSize;
      audioMappings.push({ loId: obj.loId, audioUrl: obj.audioUrl });

      if (!options.quiet) {
        console.log(`   ✅ Success! ${formatBytes(result.fileSize)} (${result.characters} chars)`);
        console.log(`   📁 Saved: ${obj.topicDir}/${obj.filename}`);
      }

    } catch (error) {
      failureCount++;
      if (!options.quiet) {
        console.error(`   ❌ Failed: ${error.message}`);
      }
    }
  }

  // Update topic.js file with all audioUrls
  if (audioMappings.length > 0) {
    if (!options.quiet) {
      console.log(`\n${'═'.repeat(60)}`);
      console.log(`📝 Updating topic${options.topic}.js with audio URLs...`);
    }
    try {
      updateTopicFileWithAudioUrls(options.topic, audioMappings);
      if (!options.quiet) {
        console.log(`✅ Successfully updated topic${options.topic}.js\n`);
      }
    } catch (error) {
      console.error(`❌ Failed to update topic file: ${error.message}\n`);
    }
  }

  // Summary - always show minimal summary
  if (options.quiet) {
    // Minimal output for quiet mode
    const loNumbers = objectives.map(o => o.loId);
    const loRange = loNumbers.length > 1
      ? `LO ${Math.min(...loNumbers)}-${Math.max(...loNumbers)}`
      : `LO ${loNumbers[0]}`;

    if (successCount > 0) {
      console.log(`✅ Topic ${options.topic}: ${loRange} processed (${successCount} successful, ${formatBytes(totalBytes)})`);
    }
    if (failureCount > 0) {
      console.log(`❌ ${failureCount} failed`);
    }
    if (skippedCount > 0 && successCount === 0) {
      console.log(`⏭️  ${skippedCount} skipped (already exist)`);
    }
  } else {
    // Detailed summary for normal mode
    console.log(`${'═'.repeat(60)}`);
    console.log('📊 GENERATION SUMMARY');
    console.log(`${'═'.repeat(60)}`);
    console.log(`✅ Successful:    ${successCount}`);
    console.log(`❌ Failed:        ${failureCount}`);
    console.log(`⏭️  Skipped:       ${skippedCount}`);
    if (successCount > 0) {
      console.log(`💾 Total size:    ${formatBytes(totalBytes)}`);
    }
    console.log(`📁 Output:        ${CONFIG.outputDir}`);
    console.log(`${'═'.repeat(60)}\n`);
  }
}

// Run the script
main().catch(error => {
  console.error('\n❌ Fatal error:', error);
  process.exit(1);
});
