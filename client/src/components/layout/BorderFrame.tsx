export function BorderFrame() {
  return (
    <>
      {/* Tailwind-style border frame - ONLY left/right, NO top/bottom */}

      {/* Right border - VERY WIDE with LIGHT diagonal lines */}
      <div className="fixed top-0 right-0 bottom-0 w-[80px] z-50 pointer-events-none overflow-hidden">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <pattern id="diagonal-right" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="10" stroke="#0EA5E9" strokeWidth="1" opacity="0.15" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal-right)" />
        </svg>
      </div>

      {/* Left border - VERY WIDE with LIGHT diagonal lines */}
      <div className="fixed top-0 left-0 bottom-0 w-[80px] z-0 pointer-events-none overflow-hidden">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <pattern id="diagonal-left" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="10" stroke="#06B6D4" strokeWidth="1" opacity="0.15" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal-left)" />
        </svg>
      </div>
    </>
  )
}
