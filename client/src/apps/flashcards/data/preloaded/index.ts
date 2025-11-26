/**
 * Preloaded Flashcard Decks Index
 *
 * Exports all preloaded flashcard decks that are available to all users.
 * These decks are sample/demo decks created from subject content.
 */

import type { Deck } from '../../types/flashcard'
import { DEFAULT_DECK_SETTINGS } from '../../types/flashcard'
import { Timestamp } from 'firebase/firestore'

// Import all preloaded deck JSON files
import physiologyTopic29 from './physiology/topic-29-respiration-gas-transport.json'

/**
 * Structure of a preloaded deck JSON file
 */
interface PreloadedDeckJSON {
  id: string
  name: string
  description: string
  subject: string
  topicId?: number
  version: string
  cards: Array<{
    id: string
    front: {
      text: string
      images?: Array<{ id: string; url: string; alt?: string }>
    }
    back: {
      text: string
      images?: Array<{ id: string; url: string; alt?: string }>
    }
    tags: string[]
  }>
}

/**
 * Converts a preloaded deck JSON file to a Deck object
 */
function convertPreloadedDeckToDecks(preloadedDeck: PreloadedDeckJSON): Deck {
  const now = Timestamp.now()

  return {
    id: preloadedDeck.id,
    userId: '', // Empty for preloaded decks (available to all users)
    name: preloadedDeck.name,
    description: preloadedDeck.description,
    color: getSubjectColor(preloadedDeck.subject),
    icon: getSubjectIcon(preloadedDeck.subject),
    cardCount: preloadedDeck.cards.length,
    newCount: preloadedDeck.cards.length, // All cards are new initially
    learningCount: 0,
    reviewCount: 0,
    settings: DEFAULT_DECK_SETTINGS,
    createdAt: now,
    updatedAt: now,
    isPreloaded: true,
    sourceSubject: preloadedDeck.subject,
    sourceTopic: preloadedDeck.topicId?.toString(),
  }
}

/**
 * Get color for a subject
 */
function getSubjectColor(subject: string): string {
  const colors: Record<string, string> = {
    physiology: '#3B82F6', // Blue
    histology: '#10B981', // Green
    sociology: '#8B5CF6', // Purple
    anatomy: '#F59E0B', // Amber
  }
  return colors[subject.toLowerCase()] || '#0066CC'
}

/**
 * Get icon for a subject
 */
function getSubjectIcon(subject: string): string {
  const icons: Record<string, string> = {
    physiology: 'Activity',
    histology: 'Microscope',
    sociology: 'Users',
    anatomy: 'Brain',
  }
  return icons[subject.toLowerCase()] || 'BookOpen'
}

/**
 * All preloaded decks as Deck objects
 */
export const preloadedDecks: Deck[] = [
  convertPreloadedDeckToDecks(physiologyTopic29 as PreloadedDeckJSON),
]

/**
 * Get preloaded deck by ID
 */
export function getPreloadedDeck(id: string): Deck | null {
  return preloadedDecks.find((deck) => deck.id === id) || null
}

/**
 * Get all preloaded decks for a subject
 */
export function getPreloadedDecksBySubject(subject: string): Deck[] {
  return preloadedDecks.filter((deck) => deck.sourceSubject === subject)
}

/**
 * Get preloaded cards for a deck
 */
export function getPreloadedCards(deckId: string) {
  // Find the original JSON data for the deck
  const allPreloadedDecks = [physiologyTopic29]
  const deckData = allPreloadedDecks.find(
    (deck) => (deck as PreloadedDeckJSON).id === deckId
  ) as PreloadedDeckJSON | undefined

  return deckData?.cards || []
}

/**
 * Check if a deck ID is a preloaded deck
 */
export function isPreloadedDeck(deckId: string): boolean {
  return preloadedDecks.some((deck) => deck.id === deckId)
}

export default preloadedDecks
