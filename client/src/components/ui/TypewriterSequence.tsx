import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface TypewriterSequenceProps {
  className?: string
}

export function TypewriterSequence({ className }: TypewriterSequenceProps) {
  const [displayText, setDisplayText] = useState('')
  const [phase, setPhase] = useState<'typing' | 'deleting' | 'paused'>('typing')
  const [sequenceIndex, setSequenceIndex] = useState(0)

  const sequences = ['myself', 'my friends', 'all medical students']

  useEffect(() => {
    const currentSequence = sequences[sequenceIndex]
    const isLastSequence = sequenceIndex === sequences.length - 1

    if (phase === 'typing') {
      if (displayText.length < currentSequence.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentSequence.slice(0, displayText.length + 1))
        }, 100)
        return () => clearTimeout(timeout)
      } else if (!isLastSequence) {
        // Pause before deleting
        const timeout = setTimeout(() => {
          setPhase('paused')
        }, 1000)
        return () => clearTimeout(timeout)
      }
    } else if (phase === 'paused') {
      // Pause then start deleting
      const timeout = setTimeout(() => {
        setPhase('deleting')
      }, 500)
      return () => clearTimeout(timeout)
    } else if (phase === 'deleting') {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 50)
        return () => clearTimeout(timeout)
      } else {
        // Move to next sequence
        setSequenceIndex(sequenceIndex + 1)
        setPhase('typing')
      }
    }
  }, [displayText, phase, sequenceIndex, sequences])

  return (
    <span className={cn('inline', className)}>
      {displayText.split('').map((letter, i) => (
        <span key={i} className="inline-block">
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
      <motion.span
        className="inline-block"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      >
        |
      </motion.span>
    </span>
  )
}
