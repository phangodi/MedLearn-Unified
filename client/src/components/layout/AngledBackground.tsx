import { motion } from 'framer-motion'

export function AngledBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Top left - Medical blue angled shape */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 0.15, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute -top-20 -left-20 w-96 h-96"
        style={{
          background: 'linear-gradient(135deg, #0066CC 0%, #00A896 100%)',
          transform: 'rotate(-15deg) skewY(-10deg)',
          filter: 'blur(40px)',
        }}
      />

      {/* Top right - Teal accent */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        className="absolute top-32 -right-32 w-80 h-80"
        style={{
          background: 'linear-gradient(225deg, #00A896 0%, #06D6A0 100%)',
          transform: 'rotate(25deg) skewY(15deg)',
          filter: 'blur(50px)',
        }}
      />

      {/* Bottom left - Subtle purple */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 0.08, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
        className="absolute bottom-20 left-20 w-96 h-96"
        style={{
          background: 'linear-gradient(45deg, #7C3AED 0%, #0066CC 100%)',
          transform: 'rotate(-25deg) skewX(-10deg)',
          filter: 'blur(60px)',
        }}
      />

      {/* Center right - Warm accent */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.12, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
        className="absolute top-1/2 right-10 w-72 h-72"
        style={{
          background: 'linear-gradient(180deg, #06D6A0 0%, #0066CC 100%)',
          transform: 'rotate(35deg) skewY(-15deg)',
          filter: 'blur(45px)',
        }}
      />

      {/* Diagonal lines overlay */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.03]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="diagonalLines"
            patternUnits="userSpaceOnUse"
            width="60"
            height="60"
            patternTransform="rotate(45)"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="60"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diagonalLines)" />
      </svg>
    </div>
  )
}
