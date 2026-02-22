import os
import re
import json

# Configuration
TOPICS_DIR = "/Users/peti/Documents/GitHub/MedLearn-Unified/client/src/apps/physiology/data/Topics"
TOPICS_TO_PROCESS = [64, 65, 66, 67, 68, 69, 70]

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
        lines = f.readlines()

    lo_definitions = []
    current_lo_defs = []
    in_array = False
    current_def = []
    in_string = False

    for line in lines:
        # Fix smart quotes
        line = fix_smart_quotes(line)
        stripped = line.strip()

        # STOP parsing if we hit REFERENCE VALUES section
        if '// **REFERENCE VALUES' in stripped or 'REFERENCE VALUES' in stripped:
            # Save current LO if we have definitions
            if current_lo_defs:
                lo_definitions.append(current_lo_defs)
            break

        # Check for LO marker
        if '// **LO' in stripped or '// ** LO' in stripped:
            # Save previous LO if we have definitions
            if current_lo_defs:
                lo_definitions.append(current_lo_defs)
                current_lo_defs = []
            in_array = False
            in_string = False
            current_def = []
            continue

        # Check for officialDefinitions start
        if 'officialDefinitions:' in stripped and '[' in stripped:
            in_array = True
            continue

        # Check for array end
        if in_array and stripped.startswith(']'):
            # Save last definition if exists
            if current_def:
                def_text = ' '.join(current_def).strip()
                # Remove trailing comma and quotes
                def_text = def_text.rstrip(',').rstrip().strip("'")
                if def_text:
                    current_lo_defs.append(def_text)
                current_def = []
            in_array = False
            continue

        # Process array content
        if in_array and stripped and not stripped.startswith('//'):
            # Check if line starts a new string
            if stripped.startswith("'"):
                # Save previous definition
                if current_def:
                    def_text = ' '.join(current_def).strip()
                    def_text = def_text.rstrip(',').rstrip().strip("'")
                    if def_text:
                        current_lo_defs.append(def_text)
                    current_def = []

                # Start new definition
                in_string = True
                # Remove opening quote
                text = stripped[1:]

                # Check if it also ends on same line
                if text.endswith("',") or text.endswith("'"):
                    text = text.rstrip(',').rstrip().rstrip("'")
                    if text:
                        current_lo_defs.append(text)
                    current_def = []
                    in_string = False
                else:
                    current_def.append(text)
            elif in_string:
                # Continue building current definition
                # Check if this line ends the string
                if stripped.endswith("',") or stripped.endswith("'"):
                    text = stripped.rstrip(',').rstrip().rstrip("'")
                    if text:
                        current_def.append(text)
                    # Save the definition
                    def_text = ' '.join(current_def).strip()
                    if def_text:
                        current_lo_defs.append(def_text)
                    current_def = []
                    in_string = False
                else:
                    current_def.append(stripped)

    # Save last LO
    if current_lo_defs:
        lo_definitions.append(current_lo_defs)

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

    # SAFETY CHECK: Ensure file is not empty
    if os.path.getsize(topic_file) == 0:
        print(f"❌ topic{topic_num}.js is EMPTY! Skipping to prevent data loss.")
        return False

    # Read the topic file COMPLETELY FIRST
    with open(topic_file, 'r', encoding='utf-8') as f:
        original_content = f.read()

    # SAFETY CHECK: Ensure we actually read content
    if not original_content or len(original_content) < 100:
        print(f"❌ topic{topic_num}.js has insufficient content! Skipping.")
        return False

    # Fix smart quotes in the entire file
    content = fix_smart_quotes(original_content)

    # Parse official definitions
    try:
        lo_definitions = parse_official_definitions(offdef_file)
        print(f"📖 Parsed {len(lo_definitions)} learning objectives with definitions")
    except Exception as e:
        print(f"❌ Error parsing offdef file: {e}")
        return False

    # 1. Add const declaration if missing
    if not content.strip().startswith('const topic'):
        content = f"const topic{topic_num} = " + content.strip()
        print("✅ Added const declaration")

    # 2. Add mcqs field if missing (right after id field)
    if "'mcqs'" not in content and '"mcqs"' not in content and 'mcqs:' not in content:
        # Determine MCQ filter based on topic number
        if topic_num <= 7 or (17 <= topic_num <= 24):
            mcq_filter = 'mcq-1'
        elif topic_num <= 16 or (25 <= topic_num <= 32):
            mcq_filter = 'mcq-2'
        elif 33 <= topic_num <= 58:
            mcq_filter = 'mcq-3'
        elif 59 <= topic_num <= 76:
            mcq_filter = 'mcq-4'
        elif 77 <= topic_num <= 94:
            mcq_filter = 'mcq-5'
        else:
            mcq_filter = 'mcq-6'

        content = content.replace(
            f"id: 'topic-{topic_num}',",
            f"id: 'topic-{topic_num}',\n  mcqs: ['{mcq_filter}'],"
        )
        print(f"✅ Added mcqs field: {mcq_filter}")

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
            # Must escape single quotes in definitions for JavaScript syntax
            formatted_defs = "      officialDefinitions: [\n"
            for i, definition in enumerate(defs):
                # Escape for JavaScript - only escape single quotes
                escaped = definition.replace("\\", "\\\\").replace("'", "\\'")
                formatted_defs += f"        '{escaped}'"
                if i < len(defs) - 1:
                    formatted_defs += ",\n"
                else:
                    formatted_defs += "\n"
            formatted_defs += "      ],\n"

            return full_match + "\n" + formatted_defs

        return full_match

    content = re.sub(lo_pattern, replace_lo, content, flags=re.DOTALL)
    print(f"✅ Inserted officialDefinitions for learning objectives")

    # SAFETY: Only write if content is substantial
    if len(content) < len(original_content) * 0.5:
        print(f"❌ ERROR: Processed content is suspiciously small! Aborting write.")
        return False

    # Write back to file
    with open(topic_file, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"✅ Successfully processed topic{topic_num}.js")
    return True

# Main execution
def main():
    print("="*60)
    print("TOPIC PROCESSOR - MedLearn Physiology")
    print("="*60)
    print("This script will:")
    print("  1. Add proper JavaScript structure (const, export)")
    print("  2. Add mcqs field (auto-detected by topic number)")
    print("  3. Fix smart quotes to straight quotes")
    print("  4. Insert officialDefinitions from .txt files")
    print("  5. STOP before REFERENCE VALUES section")
    print("  6. LEAVE ALL OTHER CONTENT INTACT")
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
    print("  2. Verify topics 37-40 display correctly")
    print("  3. Test the 'Official Definitions' toggle for each topic")
    print("="*60)

if __name__ == "__main__":
    main()
