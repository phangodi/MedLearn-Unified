/**
 * Fix Quick Review Format Issues
 *
 * This script converts all the incorrectly formatted Quick Review files
 * to match the correct format used by topics 33-51.
 *
 * Run with: node scripts/fix-quickreview-formats.js
 */

const fs = require('fs');
const path = require('path');

const QUICKREVIEW_DIR = path.join(__dirname, '../src/apps/physiology/data/QuickReview');

// Topics that are known to be correctly formatted (don't touch these)
const WORKING_TOPICS = [9, 10, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51];

// Topics that need fixing
const BROKEN_TOPICS = [1, 2, 3, 4, 5, 6, 7, 8, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32];

function fixBlock(block) {
  if (!block || !block.type) return block;

  const fixed = { type: block.type };

  // Fix header, paragraph, keypoint, clinical - should have 'text' not 'content' or 'title'
  if (['header', 'paragraph', 'keypoint', 'clinical'].includes(block.type)) {
    fixed.text = block.text || block.content || block.title || '';
    if (block.critical) fixed.critical = true;
    return fixed;
  }

  // Fix list and steps - should have 'intro' not 'title', items at top level
  if (block.type === 'list' || block.type === 'steps') {
    // Handle nested in 'text' object
    if (block.text && typeof block.text === 'object') {
      fixed.intro = block.text.intro || block.text.title || '';
      fixed.items = block.text.items || [];
    } else {
      fixed.intro = block.intro || block.title || '';
      fixed.items = block.items || [];
    }
    if (block.critical) fixed.critical = true;
    return fixed;
  }

  // Fix comparison - must have left: { title, items } and right: { title, items }
  if (block.type === 'comparison') {
    // Already correct format
    if (block.left && block.right && block.left.title && block.right.title) {
      return block;
    }

    // Format: { left: { header, items }, right: { header, items } } - header instead of title
    if (block.left && block.right && (block.left.header || block.right.header)) {
      fixed.left = { title: block.left.header || block.left.title || '', items: block.left.items || [] };
      fixed.right = { title: block.right.header || block.right.title || '', items: block.right.items || [] };
      return fixed;
    }

    // Format: { text: { leftTitle, rightTitle, leftItems, rightItems } }
    if (block.text && block.text.leftTitle) {
      fixed.left = { title: block.text.leftTitle, items: block.text.leftItems || [] };
      fixed.right = { title: block.text.rightTitle, items: block.text.rightItems || [] };
      return fixed;
    }

    // Format: { leftTitle, rightTitle, leftItems, rightItems } directly on block
    if (block.leftTitle && block.rightTitle) {
      fixed.left = { title: block.leftTitle, items: block.leftItems || [] };
      fixed.right = { title: block.rightTitle, items: block.rightItems || [] };
      return fixed;
    }

    // Format: { leftLabel, rightLabel, items/rows: [{ left, right }] }
    if (block.leftLabel && block.rightLabel) {
      const sourceItems = block.items || block.rows || [];
      fixed.left = {
        title: block.leftLabel,
        items: sourceItems.map(item => item.left || '')
      };
      fixed.right = {
        title: block.rightLabel,
        items: sourceItems.map(item => item.right || '')
      };
      return fixed;
    }

    // Format: { leftLabel, leftContent, rightLabel, rightContent }
    if (block.leftContent !== undefined || block.rightContent !== undefined) {
      fixed.left = { title: block.leftLabel || '', items: [block.leftContent || ''] };
      fixed.right = { title: block.rightLabel || '', items: [block.rightContent || ''] };
      return fixed;
    }

    // Format: { leftColumn: { title, items }, rightColumn: { title, items } }
    if (block.leftColumn || block.rightColumn) {
      fixed.left = { title: block.leftColumn?.title || '', items: block.leftColumn?.items || [] };
      fixed.right = { title: block.rightColumn?.title || '', items: block.rightColumn?.items || [] };
      return fixed;
    }

    // Format: { headers, rows } - table-like comparison
    if (block.headers && block.rows) {
      // Convert table format to left/right format using headers as titles
      if (block.headers.length >= 2) {
        fixed.left = { title: block.headers[0] || '', items: [] };
        fixed.right = { title: block.headers[1] || '', items: [] };
        for (const row of block.rows) {
          if (Array.isArray(row)) {
            fixed.left.items.push(row[0] || '');
            fixed.right.items.push(row[1] || '');
          } else if (row.col1 !== undefined || row.col2 !== undefined) {
            fixed.left.items.push(`${row.label || ''}: ${row.col1 || ''}`);
            fixed.right.items.push(row.col2 || '');
          } else if (row.category !== undefined) {
            // Format: { category, items: [] }
            const rowText = row.items ? row.items.join(', ') : '';
            fixed.left.items.push(row.category);
            fixed.right.items.push(rowText);
          }
        }
        return fixed;
      }
    }

    // Format: { rows: [{ parameter, value1, value2 }] }
    if (block.rows && Array.isArray(block.rows) && block.rows[0]?.parameter !== undefined) {
      fixed.left = { title: 'Parameter', items: [] };
      fixed.right = { title: 'Details', items: [] };
      for (const row of block.rows) {
        fixed.left.items.push(row.parameter || '');
        fixed.right.items.push(`${row.value1 || ''} - ${row.value2 || ''}`);
      }
      return fixed;
    }

    // Format: { title, items: [{ label, points: [] }] } - points instead of text
    if (block.items && Array.isArray(block.items) && block.items[0]?.points) {
      if (block.items.length >= 2) {
        fixed.left = { title: block.items[0].label || '', items: block.items[0].points || [] };
        fixed.right = { title: block.items[1].label || '', items: block.items[1].points || [] };
        return fixed;
      } else if (block.items.length === 1) {
        // Single item - put in left only
        fixed.left = { title: block.items[0].label || '', items: block.items[0].points || [] };
        fixed.right = { title: '', items: [] };
        return fixed;
      }
    }

    // Format: { title, items: [{ label, value }] } - value instead of text
    if (block.items && Array.isArray(block.items) && block.items[0]?.value !== undefined) {
      if (block.items.length >= 2) {
        fixed.left = { title: block.items[0].label || '', items: [block.items[0].value || ''] };
        fixed.right = { title: block.items[1].label || '', items: [block.items[1].value || ''] };
        // Add remaining items
        for (let i = 2; i < block.items.length; i++) {
          if (i % 2 === 0) {
            fixed.left.items.push(block.items[i].value || block.items[i].label || '');
          } else {
            fixed.right.items.push(block.items[i].value || block.items[i].label || '');
          }
        }
        return fixed;
      }
    }

    // Format: { title, items: [{ name, features: [] }] }
    if (block.items && Array.isArray(block.items) && block.items[0]?.features) {
      if (block.items.length >= 2) {
        fixed.left = { title: block.items[0].name || '', items: block.items[0].features || [] };
        fixed.right = { title: block.items[1].name || '', items: block.items[1].features || [] };
        return fixed;
      }
    }

    // Format: { title, items: [{ label, description }] }
    if (block.items && Array.isArray(block.items) && block.items.length >= 2) {
      const firstItem = block.items[0];
      const secondItem = block.items[1];

      if (firstItem.label) {
        fixed.left = {
          title: firstItem.label,
          items: [firstItem.text || firstItem.description || firstItem.value || '']
        };
        fixed.right = {
          title: secondItem.label,
          items: [secondItem.text || secondItem.description || secondItem.value || '']
        };

        // Add more items if present
        for (let i = 2; i < block.items.length; i++) {
          const item = block.items[i];
          const content = item.text || item.description || item.value || '';
          if (i % 2 === 0) {
            fixed.left.items.push(`${item.label || ''}: ${content}`);
          } else {
            fixed.right.items.push(`${item.label || ''}: ${content}`);
          }
        }
        return fixed;
      }
    }

    // Format: { text: { title, items: [{ label, description/points }] } } - nested in text
    if (block.text && block.text.items && Array.isArray(block.text.items)) {
      const items = block.text.items;
      if (items.length >= 2) {
        const first = items[0];
        const second = items[1];
        fixed.left = {
          title: first.label || '',
          items: first.points || first.features || [first.description || first.text || '']
        };
        fixed.right = {
          title: second.label || '',
          items: second.points || second.features || [second.description || second.text || '']
        };
        return fixed;
      }
    }

    // Format: { intro, items: [...] } - actually a list, convert to simple comparison
    if (block.intro && Array.isArray(block.items)) {
      fixed.left = { title: block.intro, items: block.items };
      fixed.right = { title: '', items: [] };
      return fixed;
    }

    // If we can't fix it, return as-is with empty left/right to prevent crash
    console.log('  WARNING: Could not fix comparison block:', JSON.stringify(block).substring(0, 200));
    return { type: 'comparison', left: { title: block.title || 'Comparison', items: [] }, right: { title: '', items: [] } };
  }

  // Fix table - should have headers and rows at top level
  if (block.type === 'table') {
    if (block.text && typeof block.text === 'object') {
      fixed.headers = block.text.headers || [];
      fixed.rows = block.text.rows || [];
    } else {
      fixed.headers = block.headers || [];
      fixed.rows = block.rows || [];
    }
    if (block.critical) fixed.critical = true;
    return fixed;
  }

  // Fix formula
  if (block.type === 'formula') {
    if (block.text && typeof block.text === 'object') {
      fixed.formula = block.text.formula || '';
      fixed.explanation = block.text.explanation || '';
    } else {
      fixed.formula = block.formula || block.text || '';
      fixed.explanation = block.explanation || '';
    }
    if (block.critical) fixed.critical = true;
    return fixed;
  }

  // Return as-is for unknown types
  return block;
}

function fixLearningObjective(lo) {
  if (!lo || !lo.blocks) return lo;

  return {
    title: lo.title,
    isCritical: lo.isCritical || false,
    blocks: lo.blocks.map(fixBlock)
  };
}

function fixTopicFile(topicNum) {
  const filename = `topic${topicNum}-quickreview.js`;
  const filepath = path.join(QUICKREVIEW_DIR, filename);

  if (!fs.existsSync(filepath)) {
    console.log(`Skipping ${filename} - file not found`);
    return;
  }

  console.log(`Processing ${filename}...`);

  // Read and parse the file
  let content = fs.readFileSync(filepath, 'utf8');

  // Extract the object using regex (safer than eval)
  const match = content.match(/const\s+topic\d+QuickReview\s*=\s*(\{[\s\S]*\});?\s*export/);
  if (!match) {
    console.log(`  ERROR: Could not parse ${filename}`);
    return;
  }

  let data;
  try {
    // Use Function constructor to safely evaluate the object literal
    data = new Function('return ' + match[1])();
  } catch (e) {
    console.log(`  ERROR parsing ${filename}: ${e.message}`);
    return;
  }

  // Fix each learning objective
  const fixedLOs = {};
  for (const [loId, lo] of Object.entries(data.learningObjectives)) {
    fixedLOs[loId] = fixLearningObjective(lo);
  }

  // Generate the fixed file content
  const fixedContent = `/**
 * Quick Review content for Topic ${topicNum}
 * Auto-generated - Format corrected
 */
const topic${topicNum}QuickReview = {
  topicId: 'topic-${topicNum}',
  topicNumber: ${topicNum},
  learningObjectives: ${JSON.stringify(fixedLOs, null, 2).replace(/"([^"]+)":/g, "'$1':")}
};

export default topic${topicNum}QuickReview;
`;

  // Write the fixed file
  fs.writeFileSync(filepath, fixedContent);
  console.log(`  Fixed ${filename} - ${Object.keys(fixedLOs).length} LOs processed`);
}

// Main execution
console.log('=== Quick Review Format Fixer ===\n');
console.log(`Working topics (untouched): ${WORKING_TOPICS.join(', ')}`);
console.log(`Topics to fix: ${BROKEN_TOPICS.join(', ')}\n`);

for (const topicNum of BROKEN_TOPICS) {
  fixTopicFile(topicNum);
}

console.log('\n=== Done ===');
