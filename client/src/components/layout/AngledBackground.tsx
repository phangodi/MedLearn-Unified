import { motion } from 'framer-motion'

export function AngledBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Top left - Medical blue angled shape */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 0.4, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute -top-32 -left-32 w-[500px] h-[500px]"
        style={{
          background: 'linear-gradient(135deg, #0066CC 0%, #00A896 100%)',
          transform: 'rotate(-15deg) skewY(-8deg)',
          filter: 'blur(60px)',
        }}
      />

      {/* Top right - Teal accent */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.35, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        className="absolute top-20 -right-32 w-[450px] h-[450px]"
        style={{
          background: 'linear-gradient(225deg, #00A896 0%, #06D6A0 100%)',
          transform: 'rotate(25deg) skewY(12deg)',
          filter: 'blur(70px)',
        }}
      />

      {/* Bottom - Purple gradient */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 0.3, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
        className="absolute bottom-0 left-[10%] w-[600px] h-[400px]"
        style={{
          background: 'linear-gradient(45deg, #8B5CF6 0%, #0066CC 100%)',
          transform: 'rotate(-20deg) skewX(-8deg)',
          filter: 'blur(80px)',
        }}
      />

      {/* Diagonal line pattern overlay */}
      <div className="absolute inset-0 opacity-[0.08]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="diagonalLines"
              patternUnits="userSpaceOnUse"
              width="40"
              height="40"
              patternTransform="rotate(45)"
            >
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="40"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-primary"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonalLines)" />
        </svg>
      </div>
    </div>
  )
}
