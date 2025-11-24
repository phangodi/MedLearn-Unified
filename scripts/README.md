# Audio Generation Scripts

This directory contains automation scripts for generating audio files for the physiology learning objectives using the ElevenLabs API.

## Prerequisites

1. **ElevenLabs Account**
   - Sign up at https://elevenlabs.io
   - Get an API key from Settings → API Keys
   - Recommended: Creator plan or higher (200,000 chars/month)

2. **API Key Setup**
   - Create a new API key in ElevenLabs
   - Required permission: **Text to Speech** → `Access`
   - Optional permissions (for verification):
     - **Voices** → `Read`
     - **Models** → `Read`

3. **Environment Configuration**
   - Copy `client/.env.example` to `client/.env.local`
   - Add your ElevenLabs API key:
     ```bash
     ELEVENLABS_API_KEY=your_api_key_here
     ELEVENLABS_VOICE_ID=TX3LPaxmHKxFdv7VOQHJ
     ELEVENLABS_MODEL_ID=eleven_flash_v2_5
     ```

## Usage

### Generate Audio for Specific Topics

```bash
# Generate audio for topics 41, 42, and 43
node scripts/generate-audio.js --topics 41,42,43

# Generate audio for a single topic
node scripts/generate-audio.js --topic 41

# Generate audio for specific learning objectives only
node scripts/generate-audio.js --topic 41 --lo 1,2,3
```

### Generate Audio for All Topics

```bash
# Preview what would be generated (dry run)
node scripts/generate-audio.js --all --dry-run

# Generate audio for all topics
node scripts/generate-audio.js --all
```

### Options

- `--topics N,M,P` - Generate for specific topics (comma-separated)
- `--topic N` - Generate for a single topic
- `--lo N,M` - Filter specific learning objectives
- `--all` - Process all available topics
- `--dry-run` - Preview without making API calls
- `--update-files` - Update topic JS files with audio paths (not yet implemented)
- `--help` - Show help message

## Output

Audio files are saved to:
```
client/public/audio/physiology/
├── topic41_lo1.mp3
├── topic41_lo2.mp3
├── topic42_lo1.mp3
└── ...
```

## Cost Estimation

Based on your current topic files (41-51):
- **Total characters**: ~35,000-40,000 characters
- **Creator plan**: 200,000 characters/month with Turbo v2.5 Flash
- **Cost**: ~20% of your monthly quota for all 11 topics

The script shows character count and cost estimate before generating audio.

## Features

- ✅ Automatic text extraction from topic JS files
- ✅ Batch processing with progress tracking
- ✅ Smart retry logic with exponential backoff
- ✅ Character and cost estimation
- ✅ Skip existing files to avoid regeneration
- ✅ Dry run mode for testing
- ✅ Detailed progress and summary reports

## Troubleshooting

### "ELEVENLABS_API_KEY environment variable is not set"

Make sure you've:
1. Created `client/.env.local` file
2. Added `ELEVENLABS_API_KEY=your_key` to it
3. The `.env.local` file is in the `client/` directory

You can also export it temporarily:
```bash
export ELEVENLABS_API_KEY=your_api_key_here
node scripts/generate-audio.js --topic 41
```

### "Could not parse learning objectives from topicXX.js"

The script uses regex to extract learning objectives. If you've recently modified the topic file structure, ensure:
- The `learningObjectives` array is properly formatted
- Each LO has an `examAnswer.raw` property
- The file syntax is valid JavaScript

### API Rate Limiting

The script includes:
- 500ms delay between requests
- Automatic retry logic (max 3 retries)
- 2-second delay between retries

If you hit rate limits, the script will retry automatically.

## Next Steps

After generating audio files, you can:

1. **Test the audio** - Check a few files to ensure quality
2. **Update topic files** - Manually add audio paths to learning objectives:
   ```javascript
   examAnswer: {
     formatted: [...],
     raw: '...',
     audioUrl: '/audio/physiology/topic41_lo1.mp3'
   }
   ```
3. **Deploy** - Commit audio files and deploy to Netlify

## Future Enhancements

- [ ] Automatic topic file updates with audio paths
- [ ] Progress persistence (resume interrupted generations)
- [ ] Parallel generation for faster processing
- [ ] Voice preview/selection tool
- [ ] Batch regeneration for updated content
