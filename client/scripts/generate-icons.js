/**
 * SVG to PNG Conversion Script
 *
 * Generates PNG versions of SVG assets for:
 * - Open Graph social media preview (1200x630)
 * - PWA app icons (192x192, 512x512)
 * - Apple touch icon (180x180)
 * - Favicon (32x32)
 */

import { readFileSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const publicDir = join(__dirname, '..', 'public')

console.log('🎨 Starting SVG to PNG conversion...\n')

/**
 * Convert SVG to PNG at specified dimensions
 */
async function convertSvgToPng(svgPath, outputPath, width, height) {
  try {
    const svgBuffer = readFileSync(svgPath)

    await sharp(svgBuffer, { density: 300 })
      .resize(width, height, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png()
      .toFile(outputPath)

    console.log(`✅ Generated: ${outputPath.split('/').pop()} (${width}x${height})`)
    return true
  } catch (error) {
    console.error(`❌ Error converting ${svgPath}:`, error.message)
    return false
  }
}

/**
 * Main conversion process
 */
async function generateIcons() {
  const conversions = [
    // Open Graph image for social media previews
    {
      input: join(publicDir, 'og-image.svg'),
      output: join(publicDir, 'og-image.png'),
      width: 1200,
      height: 630,
      description: 'Open Graph social media preview'
    },

    // PWA app icons
    {
      input: join(publicDir, 'icons', 'icon-192.svg'),
      output: join(publicDir, 'icons', 'icon-192.png'),
      width: 192,
      height: 192,
      description: 'PWA app icon (Android)'
    },
    {
      input: join(publicDir, 'icons', 'icon-512.svg'),
      output: join(publicDir, 'icons', 'icon-512.png'),
      width: 512,
      height: 512,
      description: 'PWA app icon (Android splash)'
    },

    // Apple touch icon
    {
      input: join(publicDir, 'apple-touch-icon.svg'),
      output: join(publicDir, 'apple-touch-icon.png'),
      width: 180,
      height: 180,
      description: 'Apple touch icon (iOS home screen)'
    },

    // Favicon
    {
      input: join(publicDir, 'icons', 'icon-192.svg'),
      output: join(publicDir, 'favicon.png'),
      width: 32,
      height: 32,
      description: 'Favicon'
    }
  ]

  let successCount = 0
  let failCount = 0

  for (const conversion of conversions) {
    console.log(`\n📝 Converting: ${conversion.description}`)
    console.log(`   Input:  ${conversion.input.split('/').slice(-2).join('/')}`)
    console.log(`   Output: ${conversion.output.split('/').slice(-2).join('/')}`)
    console.log(`   Size:   ${conversion.width}x${conversion.height}`)

    const success = await convertSvgToPng(
      conversion.input,
      conversion.output,
      conversion.width,
      conversion.height
    )

    if (success) {
      successCount++
    } else {
      failCount++
    }
  }

  console.log('\n' + '='.repeat(60))
  console.log(`\n✨ Conversion complete!`)
  console.log(`   ✅ Success: ${successCount}`)
  console.log(`   ❌ Failed:  ${failCount}`)
  console.log('\n📂 Output location: client/public/')
  console.log('\n🔍 Preview the og-image.png before deploying!')
  console.log('   Open: client/public/og-image.png\n')
}

// Run the script
generateIcons().catch(error => {
  console.error('\n❌ Script failed:', error)
  process.exit(1)
})
