# Audio Generation Script - Setup Guide

## 📋 Quick Start

This script automatically generates audio files for physiology exam answers using:
1. **Claude API (Sonnet 4.5)** - Preprocesses medical text for natural pronunciation
2. **ElevenLabs API** - Generates high-quality audio from preprocessed text

---

## 🔧 Step 1: Install Dependencies

Navigate to the scripts directory and install required packages:

```bash
cd scripts
npm install
```

This installs:
- `@anthropic-ai/sdk` - Claude API client
- `dotenv` - Environment variable loader

---

## 🔑 Step 2: Get API Keys

### Claude API Key
1. Go to https://console.anthropic.com/settings/keys
2. Click "Create Key"
3. Give it a name (e.g., "MedLearn Audio Generation")
4. Copy the API key (starts with `sk-ant-...`)

### ElevenLabs API Key
1. Go to https://elevenlabs.io/app/settings/api-keys
2. Click "Create API Key"
3. **Important**: Set permissions:
   - ✅ **Text to Speech**: `Access` (required)
   - ✅ **Voices**: `Read` (optional)
   - ✅ **Models**: `Read` (optional)
4. Copy the API key

---

## 📝 Step 3: Configure Environment Variables

Create your `.env` file:

```bash
cp .env.example .env
```

Then edit `scripts/.env` and add your API keys:

```bash
ANTHROPIC_API_KEY=sk-ant-your-actual-key-here
ELEVENLABS_API_KEY=your-elevenlabs-key-here
ELEVENLABS_VOICE_ID=TX3LPaxmHKxFdv7VOQHJ
ELEVENLABS_MODEL_ID=eleven_flash_v2_5
```

**Note**: The voice ID and model ID already have defaults, so you only need to change them if you want to use a different voice.

---

## ✅ Step 4: Verify Setup

Run the help command to verify everything is installed correctly:

```bash
node generate-audio.js --help
```

You should see the help menu. If you get errors about missing environment variables, check that your `.env` file is in the correct location and has the right keys.

---

## 🎙️ Step 5: Test with Single Learning Objective

**ALWAYS start with a single LO to test:**

```bash
node generate-audio.js --topic 41 --lo 1
```

### What Happens:
1. Script extracts raw text from topic 41, LO 1
2. Claude preprocesses it for natural pronunciation
3. Shows you **BEFORE** and **AFTER** versions
4. You type `approve`, `edit`, or `skip`
5. If approved, generates audio via ElevenLabs
6. Saves audio file to `/client/public/audio/physiology/Topic-041/LO-01.mp3`
7. Updates `topic41.js` with `audioUrl` property

### Expected Output:
```
═══════════════════════════════════════════════════════
🎙️  ElevenLabs Audio Generation with Claude Preprocessing
═══════════════════════════════════════════════════════

📚 Topic: 41
🎤 Voice: TX3LPaxmHKxFdv7VOQHJ
🤖 ElevenLabs Model: eleven_flash_v2_5
🧠 Preprocessing: Claude Sonnet 4.5

📝 Found 1 learning objective(s) to process
📊 Total characters (raw): 456
💰 Estimated ElevenLabs cost: ~0.5K characters

════════════════════════════════════════════════════════
[1/1] Topic 41, Learning Objective 1
════════════════════════════════════════════════════════

🧠 Preprocessing text with Claude Sonnet 4.5...

📄 ORIGINAL TEXT:
   Transmural pressure is the pressure difference across the blood vessel wall, calculated as Ptm equals Pinside minus Poutside...

📝 PREPROCESSED FOR TTS:
   Transmural pressure is the pressure difference across the blood vessel wall, calculated as P transmural equals P inside minus P outside...

⚠️  Review the preprocessed text above.
   Type 'approve' to continue, 'edit' to modify, 'skip' to skip:
```

---

## 🚀 Step 6: Process Entire Topic

Once you're happy with the test, process the entire topic:

```bash
node generate-audio.js --topic 41
```

This will:
- Process all 8 learning objectives in topic 41
- Show you each preprocessing for approval
- Generate audio files
- Update topic41.js with all audioUrl properties

---

## 📚 Usage Examples

```bash
# Test single LO
node generate-audio.js --topic 41 --lo 1

# Process entire topic
node generate-audio.js --topic 41

# Process specific LOs
node generate-audio.js --topic 41 --lo 1,2,3

# Regenerate existing files
node generate-audio.js --topic 41 --force

# Process another topic
node generate-audio.js --topic 42
```

---

## ⚠️ Important Notes

### 1. Environment File Isolation
- This script uses `scripts/.env` (separate from website)
- The website uses `client/.env.local`
- **No conflicts** - they are completely independent

### 2. Never Process Multiple Topics at Once
- Always process ONE topic at a time
- This gives you control and prevents wasting API credits

### 3. Always Test First
- Start with `--topic 41 --lo 1` to verify everything works
- Check audio quality before processing entire topics

### 4. Approval Workflow
- **approve** - Use the preprocessed text as-is
- **edit** - Paste your own corrected version
- **skip** - Skip this learning objective

### 5. Cost Estimates
- **Claude API**: ~$0.01 per topic (Sonnet 4.5)
- **ElevenLabs**: ~3-4K characters per topic
- Topics 41-51 (11 topics): ~$0.15 total for Claude, ~40K ElevenLabs characters

---

## 🐛 Troubleshooting

### "Missing required environment variables"
- Check that `scripts/.env` exists
- Verify API keys are correct (no extra spaces)
- Ensure you're running from the scripts directory

### "Topic file not found"
- Make sure you're using the correct topic number
- Check that the file exists: `client/src/apps/physiology/data/Topics/topic41.js`

### "Claude API error" or "ElevenLabs API error"
- Verify your API keys are active
- Check your API quotas/credits
- Ensure you have the correct permissions set

### Script hangs at "Type 'approve'..."
- Just type `approve` and press Enter
- Or type `skip` to skip this LO
- Or type `edit` to manually correct the text

---

## 📁 Output Structure

Audio files are saved to:
```
client/public/audio/physiology/
├── Topic-041/
│   ├── LO-01.mp3
│   ├── LO-02.mp3
│   └── ...
├── Topic-042/
│   └── ...
```

Topic files are updated with:
```javascript
audioUrl: '/audio/physiology/Topic-041/LO-01.mp3'
```

---

## ✅ Next Steps

After generating audio for all topics:
1. Test audio playback in the website
2. Verify all `audioUrl` properties are correct
3. Commit audio files and updated topic files to Git
4. Deploy to Netlify

---

Need help? Check the main README.md or ask Claude!
