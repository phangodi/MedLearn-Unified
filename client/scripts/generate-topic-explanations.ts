#!/usr/bin/env ts-node

/**
 * Generate Explanations for a Topic
 *
 * This script accurately finds ALL questions for a topic and outputs them
 * for explanation generation. It's deterministic and won't miss questions.
 *
 * USAGE:
 *   npx ts-node --esm client/scripts/generate-topic-explanations.ts --topic 41
 *   npx ts-node --esm client/scripts/generate-topic-explanations.ts --topic 41 --list-only
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const QUESTIONS_DIR = path.resolve(__dirname, '../src/apps/physiology/data/questions/by-test-id');
const EXPLANATIONS_DIR = path.resolve(__dirname, '../src/apps/physiology-mto/data/explanations');

// Parse args
const args = process.argv.slice(2);
const topicArg = args.find(a => a.startsWith('--topic=')) || args[args.indexOf('--topic') + 1];
const topicNumber = parseInt(topicArg?.replace('--topic=', '') || '0');
const listOnly = args.includes('--list-only');

if (!topicNumber) {
  console.log('Usage: npx ts-node --esm client/scripts/generate-topic-explanations.ts --topic <number>');
  console.log('       npx ts-node --esm client/scripts/generate-topic-explanations.ts --topic <number> --list-only');
  process.exit(1);
}

interface Question {
  id: string;
  testId: string;
  questionNumber: number;
  text: string;
  correctAnswerCount: number;
  options: { letter: string; text: string }[];
  correctAnswers: string[];
  topics: number[];
  mcqs: string[];
}

interface QuestionsFile {
  testId: string;
  questions: Question[];
}

function findAllQuestionsForTopic(topicNum: number): Question[] {
  const allQuestions: Question[] = [];
  const seenIds = new Set<string>();

  // Get all JSON files (exclude mto3-* which are unverified)
  const files = fs.readdirSync(QUESTIONS_DIR)
    .filter(f => f.endsWith('.json'))
    .filter(f => !f.startsWith('mto3-'));

  console.log(`\nScanning ${files.length} JSON files for Topic ${topicNum}...\n`);

  for (const file of files) {
    const filePath = path.join(QUESTIONS_DIR, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const data: QuestionsFile = JSON.parse(content);

    for (const q of data.questions) {
      if (q.topics.includes(topicNum) && !seenIds.has(q.id)) {
        seenIds.add(q.id);
        allQuestions.push(q);
      }
    }
  }

  return allQuestions;
}

function main() {
  console.log('\n╔════════════════════════════════════════════════════════════╗');
  console.log(`║     Topic ${topicNumber} Question Finder (Deterministic)            ║`);
  console.log('╚════════════════════════════════════════════════════════════╝');

  const questions = findAllQuestionsForTopic(topicNumber);

  console.log(`\n✅ Found ${questions.length} questions for Topic ${topicNumber}\n`);

  if (listOnly) {
    console.log('Questions:\n');
    questions.forEach((q, i) => {
      console.log(`${i + 1}. ${q.id}`);
      console.log(`   "${q.text.substring(0, 80)}${q.text.length > 80 ? '...' : ''}"`);
      console.log(`   Correct: ${q.correctAnswers.join(', ').toUpperCase()}`);
      console.log('');
    });
    return;
  }

  // Generate explanations template
  const outputFile = path.join(EXPLANATIONS_DIR, `topic${topicNumber}-explanations.json`);

  const explanationsData = {
    metadata: {
      topic: topicNumber,
      generatedAt: new Date().toISOString().split('T')[0],
      totalQuestions: questions.length,
      status: 'TEMPLATE - needs explanations generated'
    },
    questions: questions.map(q => ({
      questionId: q.id,
      text: q.text,
      options: q.options,
      correctAnswers: q.correctAnswers,
      correctAnswerCount: q.correctAnswerCount
    }))
  };

  fs.writeFileSync(outputFile, JSON.stringify(explanationsData, null, 2));
  console.log(`📄 Question data saved to: ${outputFile}`);
  console.log(`\n⚠️  This file contains ${questions.length} questions that need explanations.`);
  console.log('   Use the mto-explanation-generator skill to process this file.\n');
}

main();
