export function AngledBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Tailwind-style angled shapes - VERY SUBTLE */}

      {/* Top right angled shape with light gradient */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] opacity-[0.04]">
        <svg viewBox="0 0 700 700" className="w-full h-full">
          <defs>
            <linearGradient id="grad-tr" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#0EA5E9', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#06B6D4', stopOpacity: 1 }} />
            </linearGradient>
            <pattern id="diag-tr" patternUnits="userSpaceOnUse" width="12" height="12" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="12" stroke="currentColor" strokeWidth="1" className="text-foreground/20" />
            </pattern>
          </defs>
          <path d="M700 0 L700 700 L0 0 Z" fill="url(#grad-tr)" />
          <path d="M700 0 L700 700 L0 0 Z" fill="url(#diag-tr)" opacity="0.5" />
        </svg>
      </div>

      {/* Bottom left angled shape with light gradient */}
      <div className="absolute bottom-0 left-0 w-[700px] h-[700px] opacity-[0.04]">
        <svg viewBox="0 0 700 700" className="w-full h-full">
          <defs>
            <linearGradient id="grad-bl" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#06B6D4', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#8B5CF6', stopOpacity: 1 }} />
            </linearGradient>
            <pattern id="diag-bl" patternUnits="userSpaceOnUse" width="12" height="12" patternTransform="rotate(-45)">
              <line x1="0" y1="0" x2="0" y2="12" stroke="currentColor" strokeWidth="1" className="text-foreground/20" />
            </pattern>
          </defs>
          <path d="M0 700 L0 0 L700 700 Z" fill="url(#grad-bl)" />
          <path d="M0 700 L0 0 L700 700 Z" fill="url(#diag-bl)" opacity="0.5" />
        </svg>
      </div>

      {/* Very subtle diagonal line overlay on edges */}
      <div className="absolute top-0 right-0 w-[300px] h-full opacity-[0.02]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="lines-right" patternUnits="userSpaceOnUse" width="16" height="16" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="16" stroke="#0EA5E9" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#lines-right)" />
        </svg>
      </div>

      <div className="absolute top-0 left-0 w-[300px] h-full opacity-[0.02]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="lines-left" patternUnits="userSpaceOnUse" width="16" height="16" patternTransform="rotate(-45)">
              <line x1="0" y1="0" x2="0" y2="16" stroke="#06B6D4" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#lines-left)" />
        </svg>
      </div>
    </div>
  )
}
