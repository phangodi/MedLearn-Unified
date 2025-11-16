import os
import re
import json

# Configuration
TOPICS_DIR = r"c:\Users\hpeti\Downloads\WindSurf\physiology-react-app\src\data\Topics"
TOPICS_TO_PROCESS = [13, 14, 15, 16, 25, 26, 27, 28, 29]

def fix_smart_quotes(text):
    """Replace smart quotes with straight quotes - ONLY for fixing syntax"""
    replacements = {
        ''': "'",
        ''': "'",
        '"': '"',
        '"': '"',
        '…': '...',
        '–': '-',
        '—': '-'
    }
    for old, new in replacements.items():
        text = text.replace(old, new)
    return text

def parse_official_definitions(txt_file_path):
    """Parse official definitions from txt file - returns list of LO definitions"""
    with open(txt_file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Fix smart quotes in the txt file content
    content = fix_smart_quotes(content)
    
    # Split by LO markers
    lo_pattern = r'//\s*\*\*\s*LO[-\s]*(\d+)\*\*'
    sections = re.split(lo_pattern, content)
    
    lo_definitions = []
    
    # Process pairs of (LO_number, content)
    for i in range(1, len(sections), 2):
        if i + 1 < len(sections):
            lo_content = sections[i + 1]
            
            # Extract the officialDefinitions array
            match = re.search(r'officialDefinitions:\s*\[(.*?)\](?=\s*(?://|$))', lo_content, re.DOTALL)
            if match:
                array_content = match.group(1)
                
                # Parse individual definitions using a state machine
                definitions = []
                in_string = False
                current_def = []
                escape_next = False
                
                for char in array_content:
                    if escape_next:
                        current_def.append(char)
                        escape_next = False
                        continue
                    
                    if char == '\\':
                        escape_next = True
                        current_def.append(char)
                        continue
                    
                    if char == "'" and not in_string:
                        in_string = True
                        continue
                    elif char == "'" and in_string:
                        in_string = False
                        definitions.append(''.join(current_def))
                        current_def = []
                        continue
                    
                    if in_string:
                        current_def.append(char)
                
                lo_definitions.append(definitions)
    
    return lo_definitions

def process_topic_file(topic_num):
    """Process a single topic file"""
    topic_file = os.path.join(TOPICS_DIR, f"topic{topic_num}.js")
    offdef_file = os.path.join(TOPICS_DIR, f"offdef_topic{topic_num}.txt")
    
    print(f"\n{'='*60}")
    print(f"Processing Topic {topic_num}")
    print(f"{'='*60}")
    
    if not os.path.exists(topic_file):
        print(f"❌ topic{topic_num}.js not found!")
        return False
    
    if not os.path.exists(offdef_file):
        print(f"❌ offdef_topic{topic_num}.txt not found!")
        return False
    
    # Read the topic file
    with open(topic_file, 'r', encoding='utf-8') as f:
        original_content = f.read()
    
    # Fix smart quotes in the entire file
    content = fix_smart_quotes(original_content)
    
    # Parse official definitions
    try:
        lo_definitions = parse_official_definitions(offdef_file)
        print(f"✅ Parsed {len(lo_definitions)} learning objectives with definitions")
    except Exception as e:
        print(f"❌ Error parsing offdef file: {e}")
        return False
    
    # 1. Add const declaration if missing
    if not content.strip().startswith('const topic'):
        content = f"const topic{topic_num} = " + content.strip()
        print("✅ Added const declaration")
    
    # 2. Add mcqs field if missing (right after id field)
    if "'mcqs'" not in content and '"mcqs"' not in content and 'mcqs:' not in content:
        content = content.replace(
            f"id: 'topic-{topic_num}',",
            f"id: 'topic-{topic_num}',\n  mcqs: ['mcq-2'],"
        )
        print("✅ Added mcqs field")
    
    # 3. Add export statement if missing
    if 'export default topic' not in content:
        if not content.strip().endswith(';'):
            content = content.rstrip() + ';'
        content += f'\n\nexport default topic{topic_num};\n'
        print("✅ Added export statement")
    
    # 4. Insert officialDefinitions for each LO
    # Find all learning objectives and insert definitions
    lo_pattern = r'(\s+\{[^}]*?id:\s*[\'"]lo-(\d+)[\'"][^}]*?keyPoints:\s*\[[^\]]*?\]\s*,)'
    
    def replace_lo(match):
        full_match = match.group(0)
        lo_num = int(match.group(2))
        
        # Check if this LO already has officialDefinitions
        if 'officialDefinitions:' in full_match:
            return full_match
        
        # Get the definitions for this LO (lo_num is 1-indexed)
        if lo_num <= len(lo_definitions):
            defs = lo_definitions[lo_num - 1]
            
            # Format the officialDefinitions array
            formatted_defs = "      officialDefinitions: [\n"
            for i, definition in enumerate(defs):
                # Escape single quotes in the definition
                escaped_def = definition.replace("'", "\\'")
                formatted_defs += f"        '{escaped_def}'"
                if i < len(defs) - 1:
                    formatted_defs += ",\n"
                else:
                    formatted_defs += "\n"
            formatted_defs += "      ],\n"
            
            return full_match + "\n" + formatted_defs
        
        return full_match
    
    content = re.sub(lo_pattern, replace_lo, content, flags=re.DOTALL)
    print(f"✅ Inserted officialDefinitions for learning objectives")
    
    # Write back to file
    with open(topic_file, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"✅ Successfully processed topic{topic_num}.js")
    return True

# Main execution
def main():
    print("="*60)
    print("TOPIC PROCESSOR - Medical Education Content")
    print("="*60)
    print("This script will:")
    print("  1. Add proper JavaScript structure (const, export)")
    print("  2. Add mcqs field")
    print("  3. Fix smart quotes to straight quotes")
    print("  4. Insert officialDefinitions from .txt files")
    print("  5. LEAVE ALL CONTENT INTACT (no modifications)")
    print("="*60)
    
    success_count = 0
    failed_topics = []
    
    for topic_num in TOPICS_TO_PROCESS:
        try:
            if process_topic_file(topic_num):
                success_count += 1
            else:
                failed_topics.append(topic_num)
        except Exception as e:
            print(f"❌ CRITICAL ERROR processing topic{topic_num}: {e}")
            import traceback
            traceback.print_exc()
            failed_topics.append(topic_num)
    
    # Summary
    print("\n" + "="*60)
    print("PROCESSING COMPLETE")
    print("="*60)
    print(f"✅ Successfully processed: {success_count}/{len(TOPICS_TO_PROCESS)} topics")
    
    if failed_topics:
        print(f"❌ Failed topics: {', '.join(map(str, failed_topics))}")
    else:
        print("🎉 All topics processed successfully!")
    
    print("\n📝 Next steps:")
    print("  1. Check the browser console for any compilation errors")
    print("  2. Verify that topics 13-16 and 25-29 are visible on the site")
    print("  3. Test the 'Official Definitions' toggle for each topic")
    print("="*60)

if __name__ == "__main__":
    main()