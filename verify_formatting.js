/**
 * Verification script to check which exam answers need formatting
 * Run with: node verify_formatting.js <topic_number>
 */

const fs = require('fs');
const path = require('path');

function verifyTopicFormatting(topicNumber) {
  const filePath = path.join(__dirname, `client/src/apps/physiology/data/Topics/topic${topicNumber}.js`);

  if (!fs.existsSync(filePath)) {
    console.error(`❌ File not found: topic${topicNumber}.js`);
    return;
  }

  const content = fs.readFileSync(filePath, 'utf-8');

  // Find all LO IDs
  const loMatches = [...content.matchAll(/id: 'lo-(\d+)'/g)];
  const totalLOs = loMatches.length;

  console.log(`\n📊 Topic ${topicNumber} - Total LOs: ${totalLOs}`);
  console.log('─'.repeat(50));

  let unformattedCount = 0;
  let formattedCount = 0;

  // Check each LO
  for (let i = 1; i <= totalLOs; i++) {
    const loId = `lo-${i}`;

    // Find the LO block
    const loRegex = new RegExp(`id: '${loId}'[\\s\\S]*?examAnswer:\\s*(['{])[\\s\\S]*?(?=\\n\\s{4}\\}|\\n\\s{2}\\],)`, 'g');
    const loMatch = loRegex.exec(content);

    if (!loMatch) {
      console.log(`⚠️  LO-${i}: Could not find examAnswer`);
      continue;
    }

    const examAnswerChar = loMatch[1];
    const isFormatted = examAnswerChar === '{';

    if (isFormatted) {
      console.log(`✅ LO-${i}: Formatted`);
      formattedCount++;
    } else {
      console.log(`❌ LO-${i}: NOT formatted (still string)`);
      unformattedCount++;
    }
  }

  console.log('─'.repeat(50));
  console.log(`✅ Formatted: ${formattedCount}/${totalLOs}`);
  console.log(`❌ Unformatted: ${unformattedCount}/${totalLOs}`);

  if (unformattedCount === 0) {
    console.log(`\n🎉 Topic ${topicNumber} is COMPLETE!\n`);
  } else {
    console.log(`\n⚠️  Topic ${topicNumber} needs ${unformattedCount} more LO(s) formatted\n`);
  }

  return { totalLOs, formattedCount, unformattedCount };
}

// Run for specific topic or all topics 37-40
const topicArg = process.argv[2];

if (topicArg) {
  verifyTopicFormatting(parseInt(topicArg));
} else {
  console.log('\n🔍 Verifying Topics 37-40...\n');

  let grandTotal = { total: 0, formatted: 0, unformatted: 0 };

  for (let i = 37; i <= 40; i++) {
    const result = verifyTopicFormatting(i);
    if (result) {
      grandTotal.total += result.totalLOs;
      grandTotal.formatted += result.formattedCount;
      grandTotal.unformatted += result.unformattedCount;
    }
  }

  console.log('\n' + '═'.repeat(50));
  console.log('📈 GRAND TOTAL (Topics 37-40)');
  console.log('═'.repeat(50));
  console.log(`Total LOs: ${grandTotal.total}`);
  console.log(`✅ Formatted: ${grandTotal.formatted}`);
  console.log(`❌ Unformatted: ${grandTotal.unformatted}`);

  if (grandTotal.unformatted === 0) {
    console.log('\n🎉🎉🎉 ALL TOPICS COMPLETE! 🎉🎉🎉\n');
  } else {
    console.log(`\n⚠️  ${grandTotal.unformatted} LO(s) still need formatting\n`);
  }
}
