/**
 * Medical-themed anonymous pseudonym generator
 * Creates persistent anonymous identities for users who wish to post anonymously
 * while maintaining a consistent identity across their anonymous posts
 */

const medicalTerms = [
  // Anatomy - Nervous System
  'Axon',
  'Neuron',
  'Synapse',
  'Dendrite',
  'Cortex',
  'Cerebellum',
  'Hypothalamus',
  'Thalamus',
  'Medulla',
  'Ganglion',

  // Anatomy - Cardiovascular
  'Ventricle',
  'Atrium',
  'Aorta',
  'Capillary',
  'Arteriole',
  'Cardiac',

  // Anatomy - Respiratory
  'Alveoli',
  'Bronchiole',
  'Pulmonary',
  'Pleura',

  // Anatomy - Digestive & Other Systems
  'Hepatic',
  'Renal',
  'Gastric',
  'Nephron',
  'Glomerulus',
  'Pancreatic',

  // Cellular & Molecular
  'Mitochondria',
  'Nucleus',
  'Ribosome',
  'Lysosome',
  'Endoplasmic',
  'Golgi',
  'Cytoplasm',
  'Membrane',
  'Myocyte',
  'Osteocyte',
  'Leukocyte',
  'Erythrocyte',

  // Physiological Processes
  'Osmosis',
  'Diffusion',
  'Metabolism',
  'Homeostasis',
  'Hemostasis',
  'Peristalsis',
  'Glycolysis',

  // Medical Specialties (as nouns/adjectives)
  'Cardiology',
  'Neurology',
  'Immunology',
  'Pathology',
  'Pharmacology',
  'Histology',
  'Physiology',
  'Anatomy',

  // Tissues & Structures
  'Epithelial',
  'Muscular',
  'Connective',
  'Neural',
  'Vascular',
  'Skeletal',
  'Cartilage',
  'Tendon',

  // Biochemistry
  'Enzyme',
  'Hormone',
  'Peptide',
  'Lipid',
  'Glucose',
  'Protein',
  'Antibody',
  'Antigen',
]

/**
 * Generates a deterministic anonymous pseudonym based on user ID
 * This ensures the same user always gets the same pseudonym
 * Uses compound medical terms for better uniqueness (88 * 88 = 7,744 combinations)
 */
export function generateMedicalPseudonym(userId: string): string {
  // Create a hash from the user ID
  let hash = 0
  for (let i = 0; i < userId.length; i++) {
    const char = userId.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash // Convert to 32-bit integer
  }

  // Create a second hash for the second term
  let hash2 = 0
  for (let i = userId.length - 1; i >= 0; i--) {
    const char = userId.charCodeAt(i)
    hash2 = ((hash2 << 3) - hash2) + char
    hash2 = hash2 & hash2
  }

  // Get two different medical terms
  const index1 = Math.abs(hash) % medicalTerms.length
  const index2 = Math.abs(hash2) % medicalTerms.length

  const term1 = medicalTerms[index1]
  const term2 = medicalTerms[index2]

  // If by chance they're the same, use the next term for the second one
  if (term1 === term2) {
    const nextIndex = (index2 + 1) % medicalTerms.length
    return `Anonymous ${term1} ${medicalTerms[nextIndex]}`
  }

  return `Anonymous ${term1} ${term2}`
}

/**
 * Gets a random medical pseudonym (for testing or one-time use)
 */
export function getRandomMedicalPseudonym(): string {
  const randomIndex = Math.floor(Math.random() * medicalTerms.length)
  return `Anonymous ${medicalTerms[randomIndex]}`
}

/**
 * Validates if a string is a valid medical pseudonym format
 */
export function isMedicalPseudonym(name: string): boolean {
  if (!name.startsWith('Anonymous ')) return false

  const term = name.substring(10) // Remove "Anonymous "
  return medicalTerms.includes(term)
}

/**
 * Gets the anonymous avatar emoji (medical-themed)
 */
export function getAnonymousAvatar(): string {
  // Medical/science-themed emojis
  const avatars = ['🔬', '⚕️', '🧬', '🩺', '💉', '🧪', '🔭']
  return avatars[Math.floor(Math.random() * avatars.length)]
}

/**
 * Gets a consistent avatar for a specific pseudonym
 */
export function getAvatarForPseudonym(pseudonym: string): string {
  const avatars = ['🔬', '⚕️', '🧬', '🩺', '💉', '🧪', '🔭']

  // Create hash from pseudonym to get consistent avatar
  let hash = 0
  for (let i = 0; i < pseudonym.length; i++) {
    hash = ((hash << 5) - hash) + pseudonym.charCodeAt(i)
    hash = hash & hash
  }

  const index = Math.abs(hash) % avatars.length
  return avatars[index]
}
