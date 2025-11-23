# Generate Audio Skill

## Purpose
Generate audio files for physiology learning objectives using Claude API (Sonnet 4.5) for text preprocessing and ElevenLabs API for text-to-speech conversion.

## Context
This project has an audio generation script at `/scripts/generate-audio.js` that:
1. Extracts raw exam answer text from topic files
2. Preprocesses text with Claude API for natural pronunciation (e.g., "τ" → "tau", "Ptm" → "P transmural")
3. Shows BEFORE/AFTER for user approval
4. Generates audio via ElevenLabs API
5. Saves to `/client/public/Audio/Topic-XXX/LO-YY.mp3`
6. Updates topic.js file with `audioUrl: '/Audio/Topic-XXX/LO-YY.mp3'`

## API Keys
- API keys are stored in `/scripts/.env`
- ANTHROPIC_API_KEY (Claude Sonnet 4.5)
- ELEVENLABS_API_KEY (Voice ID: TX3LPaxmHKxFdv7VOQHJ, Model: eleven_flash_v2_5)
- Keys are already configured and working

## Usage

When the user invokes this skill, they will say one of:
- "Generate audio for topic 41"
- "Generate audio for topic 41 LO 1"
- "Process audio for topic 34"
- "skill: generate-audio topic 41"
- "skill: generate-audio topic 41 lo 2"

## Instructions

1. **Parse the user's request** to determine:
   - Topic number (required)
   - Learning objective number (optional - if not specified, process entire topic)

2. **Verify prerequisites**:
   - Script exists at `/scripts/generate-audio.js`
   - API keys configured in `/scripts/.env`
   - Topic file exists at `/client/src/apps/physiology/data/Topics/topic[NUMBER].js`

3. **Run the audio generation script**:

   **DEFAULT MODE (Auto-approve with minimal output):**
   ```bash
   cd /Users/peti/Documents/GitHub/MedLearn-Unified/scripts

   # For single LO:
   node generate-audio.js --topic [NUMBER] --lo [LO_NUMBER] --quiet

   # For entire topic:
   node generate-audio.js --topic [NUMBER] --quiet

   # To regenerate existing:
   node generate-audio.js --topic [NUMBER] --quiet --force
   ```

   **REVIEW MODE (Show preprocessing, requires approval - use when user requests it):**
   ```bash
   # Only use when user says "review" or "show me the preprocessing"
   node generate-audio.js --topic [NUMBER] --lo [LO_NUMBER] --review
   ```

4. **Handle the workflow**:
   - The script will show BEFORE/AFTER preprocessing
   - We auto-approve by piping "approve" to stdin
   - Monitor output for success/failure
   - Report character count and file size

5. **Verify results**:
   - Check that audio file was created at `/client/public/Audio/Topic-XXX/LO-YY.mp3`
   - Verify topic file was updated with audioUrl
   - Report success with file size and location

6. **Handle errors**:
   - If script fails, check error message
   - Common issues:
     - API key problems → verify .env file
     - Topic file not found → verify topic number
     - Network issues → retry once

## Expected Output

**Default Mode (--quiet):**
Report minimal summary to user:
```
✅ Topic 34: LO 1-7 processed (7 successful, 6.2 MB)
```

Or for single LO:
```
✅ Topic 34: LO 2 processed (1 successful, 1.0 MB)
```

**Review Mode (--review):**
Show full preprocessing text and wait for user approval in terminal (they must type "approve")

## Important Notes

- The script does NOT modify the original raw text in topic files
- It only temporarily removes `>>` `<<` markers for audio generation
- The website content remains unchanged
- Only the `audioUrl` property is added to topic files
- Audio path format: `/Audio/Topic-XXX/LO-YY.mp3` (capital A, zero-padded numbers)
- This matches existing audio structure (Topic-009, Topic-008, etc.)

## Cost Information

Per topic (average 8 LOs):
- Claude API: ~$0.01
- ElevenLabs: ~3-4K characters

User has:
- ElevenLabs Creator plan: 200,000 chars/month
- All topics 41-51: ~40K characters (20% of monthly quota)

## Interactive Mode

If user wants to review preprocessing manually:
```bash
cd /Users/peti/Documents/GitHub/MedLearn-Unified/scripts
node generate-audio.js --topic [NUMBER] --lo [LO_NUMBER]
```

Then they can type `approve`, `edit`, or `skip` for each LO.

## Files Modified

- Creates: `/client/public/Audio/Topic-XXX/LO-YY.mp3`
- Updates: `/client/src/apps/physiology/data/Topics/topic[NUMBER].js` (adds audioUrl property)

## Success Criteria

- Audio file exists at correct path
- Audio file size > 500 KB (indicates full content)
- Topic file has audioUrl property added
- Audio plays correctly in website audio player
