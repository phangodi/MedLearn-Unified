/**
 * Formats exam answer text into structured data for better readability
 * Preserves all original content - only changes presentation
 * 
 * @param {string} text - Raw exam answer text
 * @returns {Array} Array of content blocks (paragraphs, lists, list items)
 */
export function formatExamAnswer(text) {
  if (!text || typeof text !== 'string') {
    return [{ type: 'paragraph', content: text || '' }];
  }

  const blocks = [];
  
  // List patterns to detect
  const listPatterns = [
    /^(Five examples?:|Five key examples?:|Examples?:|Key examples?:)/i,
    /^(Additional [^:]+:|Additional:|Other [^:]+:)/i,
    /^(Controlled parameters? include:|Parameters? include:|Include:)/i,
    /^(Control is essential because:|Essential because:|Important because:)/i,
    /^(These [^:]+:|This [^:]+:)/i,
    /^(Factors? [^:]+:|Mechanisms? [^:]+:|Functions? [^:]+:)/i
  ];

  // First, temporarily replace critical markers to preserve them during sentence splitting
  const criticalMarkerPlaceholder = 'CRITICAL_START';
  const criticalMarkerEndPlaceholder = 'CRITICAL_END';
  
  let processedText = text.replace(/>>(.+?)<</g, (match, content) => {
    return criticalMarkerPlaceholder + content + criticalMarkerEndPlaceholder;
  });
  
  // Split by periods followed by space and capital letter (sentence boundaries)
  // But preserve the period with the sentence
  const sentences = processedText.split(/\.(?=\s+[A-Z])/).map(s => s.trim() + (s.trim() ? '.' : '')).filter(s => s.length > 1);
  
  let i = 0;
  while (i < sentences.length) {
    let sentence = sentences[i].trim();
    
    // Remove trailing period if it was added incorrectly
    if (sentence.endsWith('..')) {
      sentence = sentence.slice(0, -1);
    }
    
    // Check if this sentence introduces a list
    let isListIntro = false;
    for (const pattern of listPatterns) {
      if (pattern.test(sentence)) {
        isListIntro = true;
        break;
      }
    }
    
    if (isListIntro) {
      // Restore critical markers in the intro sentence
      const restoredSentence = sentence
        .replace(new RegExp(criticalMarkerPlaceholder, 'g'), '>>')
        .replace(new RegExp(criticalMarkerEndPlaceholder, 'g'), '<<');
      
      // Add the intro sentence
      blocks.push({
        type: 'list-intro',
        content: restoredSentence
      });
      
      // Try to extract list items from the next sentence(s)
      i++;
      if (i < sentences.length) {
        const nextSentence = sentences[i];
        
        // Check if the next sentence contains comma-separated items or "and" separated items
        if (nextSentence.includes(',') || nextSentence.match(/\band\b/i)) {
          const listItems = extractListItems(nextSentence);
          
          if (listItems.length > 1) {
            // Restore critical markers in list items
            const restoredItems = listItems.map(item => 
              item
                .replace(new RegExp(criticalMarkerPlaceholder, 'g'), '>>')
                .replace(new RegExp(criticalMarkerEndPlaceholder, 'g'), '<<')
            );
            
            // Found a list!
            blocks.push({
              type: 'list',
              items: restoredItems
            });
            i++;
            continue;
          }
        }
      }
    } else {
      // Restore critical markers in the paragraph
      const restoredSentence = sentence
        .replace(new RegExp(criticalMarkerPlaceholder, 'g'), '>>')
        .replace(new RegExp(criticalMarkerEndPlaceholder, 'g'), '<<');
      
      // Regular paragraph
      blocks.push({
        type: 'paragraph',
        content: restoredSentence
      });
    }
    
    i++;
  }
  
  // If no blocks were created, return the original text as a single paragraph
  if (blocks.length === 0) {
    return [{ type: 'paragraph', content: text }];
  }
  
  return blocks;
}

/**
 * Extracts list items from a sentence containing comma or "and" separated items
 * @param {string} sentence - Sentence potentially containing list items
 * @returns {Array} Array of list item strings
 */
function extractListItems(sentence) {
  // Remove trailing period
  let cleaned = sentence.replace(/\.$/, '').trim();
  
  // Split by commas and "and"
  let items = [];
  
  // First split by "and" to get the last item
  const andParts = cleaned.split(/\s+and\s+/i);
  
  if (andParts.length > 1) {
    // Last part after "and"
    const lastItem = andParts[andParts.length - 1].trim();
    
    // Everything before the last "and"
    const beforeAnd = andParts.slice(0, -1).join(' and ');
    
    // Split the before part by commas
    const commaParts = beforeAnd.split(',').map(item => item.trim()).filter(item => item.length > 0);
    
    items = [...commaParts, lastItem];
  } else {
    // No "and", just split by commas
    items = cleaned.split(',').map(item => item.trim()).filter(item => item.length > 0);
  }
  
  // Clean up items - capitalize first letter if needed
  items = items.map(item => {
    item = item.trim();
    if (item.length > 0 && item[0] === item[0].toLowerCase()) {
      // Only capitalize if it starts with lowercase (preserve acronyms)
      item = item.charAt(0).toUpperCase() + item.slice(1);
    }
    return item;
  });
  
  return items;
}

/**
 * Checks if text contains critical markers (>> <<)
 * @param {string} text - Text to check
 * @returns {boolean} True if contains critical markers
 */
export function hasCriticalMarkers(text) {
  return text && text.includes('>>') && text.includes('<<');
}
