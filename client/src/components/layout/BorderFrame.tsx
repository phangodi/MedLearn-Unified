interface BorderFrameProps {
  sidebarCollapsed?: boolean
}

export function BorderFrame({ sidebarCollapsed = false }: BorderFrameProps) {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 transition-all duration-300"
      style={{ left: sidebarCollapsed ? '80px' : '288px' }}
    >
      {/* Full page diagonal lines pattern - fixed, doesn't scroll */}
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <pattern id="diagonal-pattern" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="10" stroke="#9CA3AF" strokeWidth="1" opacity="0.15" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diagonal-pattern)" />
      </svg>
    </div>
  )
}
