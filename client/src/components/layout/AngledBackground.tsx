import { motion } from 'framer-motion'

export function AngledBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Subtle angled decorative elements on the EDGES only */}

      {/* Top right corner decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-[0.03]">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#0066CC', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#00A896', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path d="M400 0 L400 400 L0 0 Z" fill="url(#grad1)" />
        </svg>
      </div>

      {/* Bottom left corner decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 opacity-[0.03]">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <defs>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#00A896', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#8B5CF6', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path d="M0 400 L0 0 L400 400 Z" fill="url(#grad2)" />
        </svg>
      </div>

      {/* Subtle diagonal lines pattern on edges */}
      <div className="absolute top-0 right-0 w-64 h-full opacity-[0.02]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diagonals" patternUnits="userSpaceOnUse" width="20" height="20" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="20" stroke="#0066CC" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonals)" />
        </svg>
      </div>
    </div>
  )
}
