import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

// Node type detection
type NodeType = 'regular' | 'branch-point' | 'merge-point' | 'inhibitor'

interface PathwayNode {
  id: string
  label: string
  type: NodeType
  level: number
  column?: number // For branching: 0 = left, 1 = center, 2 = right
  inhibits?: string // For inhibitor nodes: which node they inhibit
}

interface Connection {
  from: string
  to: string
  type: 'activation' | 'inhibition'
}

interface PathwayData {
  nodes: PathwayNode[]
  connections: Connection[]
  maxColumns: number
}

interface PathwayDiagramProps {
  diagram: string
  title?: string
  className?: string
}

// ASCII art parser - converts text diagram to structured data
function parsePathwayDiagram(text: string): PathwayData {
  const lines = text.split('\n').filter(line => line.trim())
  const nodes: PathwayNode[] = []
  const connections: Connection[] = []
  let level = 0
  let maxColumns = 1
  let isBranching = false
  let branchColumns = 1

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()

    // Skip pure connector lines (just arrows)
    if (line === '↓' || line === '|') {
      continue
    }

    // Detect branching start (↙ ↘)
    if (line.includes('↙') && line.includes('↘')) {
      isBranching = true
      const prevNode = nodes[nodes.length - 1]
      if (prevNode) {
        prevNode.type = 'branch-point'
      }
      continue
    }

    // Detect merging (↘ ↙)
    if (line.includes('↘') && line.includes('↙')) {
      isBranching = false
      branchColumns = 1
      continue
    }

    // Detect inhibitor (─┤)
    if (line.includes('─┤')) {
      const parts = line.split('─┤')
      const inhibitorName = parts[0].trim()
      const targetInfo = parts[1]?.trim() || ''

      nodes.push({
        id: `inhibitor-${nodes.length}`,
        label: inhibitorName,
        type: 'inhibitor',
        level,
        column: -1, // Place to the left
        inhibits: targetInfo
      })
      continue
    }

    // Parse regular nodes
    // Check if multiple items on same line (parallel branches)
    const parallelItems = line
      .split(/\s{2,}/) // Split by 2+ spaces
      .map(s => s.trim())
      .filter(s => s && s !== '↓' && !s.includes('→'))

    if (parallelItems.length > 1) {
      // Multiple nodes on same line = parallel branches
      isBranching = true
      branchColumns = Math.max(branchColumns, parallelItems.length)
      maxColumns = Math.max(maxColumns, parallelItems.length)

      parallelItems.forEach((item, colIndex) => {
        nodes.push({
          id: `node-${nodes.length}`,
          label: item,
          type: 'regular',
          level,
          column: colIndex
        })
      })
      level++
    } else if (parallelItems.length === 1) {
      // Single node
      const label = parallelItems[0]

      // Check if this is a merge point (previous level had multiple columns)
      const prevLevelNodes = nodes.filter(n => n.level === level - 1 && n.column !== undefined && n.column >= 0)
      const isMerge = isBranching && prevLevelNodes.length > 1

      nodes.push({
        id: `node-${nodes.length}`,
        label,
        type: isMerge ? 'merge-point' : 'regular',
        level,
        column: isBranching ? Math.floor(branchColumns / 2) : undefined
      })

      if (isMerge) {
        isBranching = false
        branchColumns = 1
      }

      level++
    }
  }

  // Generate connections
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i]

    if (node.type === 'inhibitor') {
      // Find target node
      const targetNode = nodes.find(n =>
        n.label.toLowerCase().includes(node.inhibits?.toLowerCase() || '') ||
        n.level === node.level
      )
      if (targetNode) {
        connections.push({
          from: node.id,
          to: targetNode.id,
          type: 'inhibition'
        })
      }
      continue
    }

    // Find next level nodes
    const nextLevelNodes = nodes.filter(n =>
      n.level === node.level + 1 && n.type !== 'inhibitor'
    )

    if (nextLevelNodes.length === 0) continue

    // If node is a branch point, connect to all next level nodes
    if (node.type === 'branch-point') {
      nextLevelNodes.forEach(nextNode => {
        connections.push({
          from: node.id,
          to: nextNode.id,
          type: 'activation'
        })
      })
    }
    // If multiple nodes in next level but this is not a branch point
    else if (nextLevelNodes.length > 1) {
      // Connect to node in same column if exists
      const sameColumnNode = nextLevelNodes.find(n => n.column === node.column)
      if (sameColumnNode) {
        connections.push({
          from: node.id,
          to: sameColumnNode.id,
          type: 'activation'
        })
      }
    }
    // Merge point: all previous level nodes connect to this one
    else if (nextLevelNodes[0].type === 'merge-point') {
      connections.push({
        from: node.id,
        to: nextLevelNodes[0].id,
        type: 'activation'
      })
    }
    // Regular connection
    else {
      connections.push({
        from: node.id,
        to: nextLevelNodes[0].id,
        type: 'activation'
      })
    }
  }

  return { nodes, connections, maxColumns }
}

// Node component with premium styling
function PathwayNode({
  node,
  index,
  isHighlighted
}: {
  node: PathwayNode
  index: number
  isHighlighted: boolean
}) {
  const isInhibitor = node.type === 'inhibitor'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        delay: index * 0.08,
        type: 'spring',
        stiffness: 200,
        damping: 20
      }}
      whileHover={{
        scale: 1.05,
        y: -4,
        transition: { duration: 0.2 }
      }}
      className={`
        relative group
        ${isInhibitor ? 'w-32' : 'w-48'}
      `}
    >
      {/* Gradient glow effect */}
      <div className={`
        absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100
        bg-gradient-to-r from-rose-500/20 via-pink-500/20 to-rose-500/20
        blur-xl transition-opacity duration-300
      `} />

      {/* Main card */}
      <div className={`
        relative rounded-xl p-4
        ${isInhibitor
          ? 'bg-gradient-to-br from-red-500/10 to-red-600/10 dark:from-red-500/20 dark:to-red-600/20 border-2 border-red-500/30'
          : 'bg-gradient-to-br from-rose-500/10 via-pink-500/10 to-rose-600/10 dark:from-rose-500/20 dark:via-pink-500/20 dark:to-rose-600/20 border border-rose-300/30 dark:border-rose-500/30'
        }
        backdrop-blur-sm
        shadow-lg group-hover:shadow-xl
        transition-all duration-300
        ${isHighlighted ? 'ring-2 ring-rose-500 ring-offset-2 dark:ring-offset-slate-900' : ''}
      `}>
        {/* Step number badge (only for regular nodes) */}
        {!isInhibitor && (
          <div className="
            absolute -top-3 -left-3
            w-8 h-8 rounded-full
            bg-gradient-to-br from-rose-500 to-pink-600
            flex items-center justify-center
            text-white text-xs font-bold
            shadow-lg
            group-hover:scale-110 transition-transform duration-200
          ">
            {index + 1}
          </div>
        )}

        {/* Inhibitor badge */}
        {isInhibitor && (
          <div className="
            absolute -top-2 -right-2
            px-2 py-0.5 rounded-full
            bg-red-500 text-white text-xs font-bold
            shadow-md
          ">
            ⊣
          </div>
        )}

        {/* Node content */}
        <div className="text-center">
          <p className={`
            font-medium leading-tight
            ${isInhibitor
              ? 'text-sm text-red-700 dark:text-red-400'
              : 'text-slate-800 dark:text-slate-100'
            }
          `}>
            {node.label}
          </p>

          {/* Type indicator */}
          {node.type === 'branch-point' && (
            <div className="mt-2 text-xs text-rose-600 dark:text-rose-400 font-medium">
              ⋮ Branch
            </div>
          )}
          {node.type === 'merge-point' && (
            <div className="mt-2 text-xs text-rose-600 dark:text-rose-400 font-medium">
              ⋮ Merge
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

// SVG connection lines with dynamic position calculation
function ConnectionLines({
  nodes,
  connections,
  containerRef
}: {
  nodes: PathwayNode[]
  connections: Connection[]
  containerRef: React.RefObject<HTMLDivElement>
}) {
  const [positions, setPositions] = useState<Map<string, { x: number; y: number }>>(new Map())

  // Calculate node positions dynamically
  useEffect(() => {
    if (!containerRef.current) return

    const updatePositions = () => {
      const newPositions = new Map<string, { x: number; y: number }>()
      nodes.forEach(node => {
        const element = containerRef.current?.querySelector(`[data-node-id="${node.id}"]`)
        if (element) {
          const rect = element.getBoundingClientRect()
          const containerRect = containerRef.current!.getBoundingClientRect()
          newPositions.set(node.id, {
            x: rect.left - containerRect.left + rect.width / 2,
            y: rect.top - containerRect.top + rect.height / 2
          })
        }
      })
      setPositions(newPositions)
    }

    updatePositions()

    // Recalculate on window resize
    window.addEventListener('resize', updatePositions)
    return () => window.removeEventListener('resize', updatePositions)
  }, [nodes, containerRef])

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
      <defs>
        {/* Gradient for activation lines */}
        <linearGradient id="activationGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgb(244, 63, 94)" stopOpacity="0.6" />
          <stop offset="100%" stopColor="rgb(236, 72, 153)" stopOpacity="0.8" />
        </linearGradient>

        {/* Arrow marker for activation */}
        <marker
          id="arrowActivation"
          markerWidth="10"
          markerHeight="10"
          refX="9"
          refY="3"
          orient="auto"
          markerUnits="strokeWidth"
        >
          <path d="M0,0 L0,6 L9,3 z" fill="url(#activationGradient)" />
        </marker>

        {/* Bar marker for inhibition */}
        <marker
          id="barInhibition"
          markerWidth="10"
          markerHeight="10"
          refX="5"
          refY="5"
          orient="auto"
        >
          <line x1="0" y1="5" x2="10" y2="5" stroke="rgb(239, 68, 68)" strokeWidth="3" />
        </marker>
      </defs>

      {connections.map((conn, idx) => {
        const fromPos = positions.get(conn.from)
        const toPos = positions.get(conn.to)

        if (!fromPos || !toPos) return null

        const isInhibition = conn.type === 'inhibition'

        // Calculate control points for curved lines
        const dx = toPos.x - fromPos.x
        const dy = toPos.y - fromPos.y
        const absDx = Math.abs(dx)

        // Use curved path if horizontal distance is significant (branching)
        const useCurve = absDx > 50

        let pathData: string
        if (useCurve) {
          // Cubic Bezier curve for smooth branching
          const controlY = fromPos.y + dy * 0.5
          pathData = `M ${fromPos.x} ${fromPos.y} C ${fromPos.x} ${controlY}, ${toPos.x} ${controlY}, ${toPos.x} ${toPos.y}`
        } else {
          // Straight line for linear flow
          pathData = `M ${fromPos.x} ${fromPos.y} L ${toPos.x} ${toPos.y}`
        }

        return (
          <motion.g
            key={`${conn.from}-${conn.to}-${idx}`}
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: 1, pathLength: 1 }}
            transition={{
              delay: idx * 0.1 + 0.5,
              duration: 0.6,
              ease: 'easeInOut'
            }}
          >
            {/* Glow effect */}
            <motion.path
              d={pathData}
              stroke={isInhibition ? 'rgb(239, 68, 68)' : 'url(#activationGradient)'}
              strokeWidth="6"
              fill="none"
              opacity="0.2"
              filter="blur(4px)"
            />

            {/* Main line */}
            <motion.path
              d={pathData}
              stroke={isInhibition ? 'rgb(239, 68, 68)' : 'url(#activationGradient)'}
              strokeWidth="3"
              fill="none"
              strokeDasharray={isInhibition ? '8,8' : 'none'}
              markerEnd={isInhibition ? 'url(#barInhibition)' : 'url(#arrowActivation)'}
              className={isInhibition ? '' : 'animate-pulse'}
              style={{
                animationDuration: '3s',
                animationTimingFunction: 'ease-in-out'
              }}
            />

            {/* Flowing particles effect for activation lines */}
            {!isInhibition && (
              <motion.circle
                r="4"
                fill="rgb(244, 63, 94)"
                filter="blur(1px)"
              >
                <animateMotion
                  dur="2s"
                  repeatCount="indefinite"
                  path={pathData}
                />
              </motion.circle>
            )}
          </motion.g>
        )
      })}
    </svg>
  )
}

export function PathwayDiagram({ diagram, title, className = '' }: PathwayDiagramProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [highlightedNode, setHighlightedNode] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const pathwayData = parsePathwayDiagram(diagram)
  const { nodes, connections } = pathwayData

  // Group nodes by level and column for layout
  const levels = nodes.reduce((acc, node) => {
    if (!acc[node.level]) acc[node.level] = []
    acc[node.level].push(node)
    return acc
  }, {} as Record<number, PathwayNode[]>)

  return (
    <div className={`pathway-diagram-container ${className}`}>
      {/* Header with expand/collapse button */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="
          w-full flex items-center justify-between
          px-6 py-4 rounded-xl
          bg-gradient-to-r from-rose-500/10 via-pink-500/10 to-rose-600/10
          dark:from-rose-500/20 dark:via-pink-500/20 dark:to-rose-600/20
          border border-rose-300/30 dark:border-rose-500/30
          hover:from-rose-500/20 hover:via-pink-500/20 hover:to-rose-600/20
          dark:hover:from-rose-500/30 dark:hover:via-pink-500/30 dark:hover:to-rose-600/30
          transition-all duration-300
          group
        "
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <div className="flex items-center gap-3">
          <div className="
            w-10 h-10 rounded-lg
            bg-gradient-to-br from-rose-500 to-pink-600
            flex items-center justify-center
            shadow-lg group-hover:shadow-xl
            transition-shadow duration-300
          ">
            <span className="text-white text-xl">🧬</span>
          </div>
          <div className="text-left">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
              {title || 'Signaling Pathway'}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {isExpanded ? 'Click to collapse' : 'Click to view interactive pathway'}
            </p>
          </div>
        </div>

        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isExpanded ? (
            <ChevronUp className="w-6 h-6 text-rose-600 dark:text-rose-400" />
          ) : (
            <ChevronDown className="w-6 h-6 text-rose-600 dark:text-rose-400" />
          )}
        </motion.div>
      </motion.button>

      {/* Diagram content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pt-8 pb-4">
              {/* Diagram container with SVG overlay */}
              <div
                ref={containerRef}
                className="relative min-h-[600px] w-full px-4"
              >
                {/* Connection lines (background layer) */}
                <ConnectionLines
                  nodes={nodes}
                  connections={connections}
                  containerRef={containerRef}
                />

                {/* Nodes (foreground layer) */}
                <div className="relative z-10 flex flex-col items-center gap-12">
                  {Object.entries(levels)
                    .sort(([a], [b]) => Number(a) - Number(b))
                    .map(([levelNum, levelNodes]) => {
                      const level = Number(levelNum)
                      const hasMultipleColumns = levelNodes.some(n => n.column !== undefined && n.column >= 0)
                      const inhibitors = levelNodes.filter(n => n.type === 'inhibitor')
                      const regularNodes = levelNodes.filter(n => n.type !== 'inhibitor')

                      return (
                        <div
                          key={level}
                          className="flex items-center justify-center gap-8 w-full"
                        >
                          {/* Inhibitors (left side) */}
                          {inhibitors.length > 0 && (
                            <div className="flex flex-col gap-4 mr-8">
                              {inhibitors.map((node) => (
                                <div key={node.id} data-node-id={node.id}>
                                  <PathwayNode
                                    node={node}
                                    index={nodes.indexOf(node)}
                                    isHighlighted={highlightedNode === node.id}
                                  />
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Regular nodes */}
                          <div className={`
                            flex items-center gap-8
                            ${hasMultipleColumns ? 'justify-center' : 'justify-center'}
                          `}>
                            {regularNodes
                              .sort((a, b) => (a.column ?? 0) - (b.column ?? 0))
                              .map((node) => (
                                <div
                                  key={node.id}
                                  data-node-id={node.id}
                                  onMouseEnter={() => setHighlightedNode(node.id)}
                                  onMouseLeave={() => setHighlightedNode(null)}
                                >
                                  <PathwayNode
                                    node={node}
                                    index={nodes.indexOf(node)}
                                    isHighlighted={highlightedNode === node.id}
                                  />
                                </div>
                              ))}
                          </div>
                        </div>
                      )
                    })}
                </div>
              </div>

              {/* Legend */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-8 flex flex-wrap items-center justify-center gap-6 px-4"
              >
                <div className="flex items-center gap-2">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-rose-500 to-pink-600" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Activation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-0.5 border-t-2 border-dashed border-red-500" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Inhibition</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-gradient-to-br from-rose-500/20 to-pink-600/20 border border-rose-300/30" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Step</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-gradient-to-br from-red-500/20 to-red-600/20 border-2 border-red-500/30" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Inhibitor</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
