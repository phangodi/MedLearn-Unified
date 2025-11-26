interface BorderFrameProps {
  sidebarCollapsed?: boolean
  fullWidth?: boolean
}

export function BorderFrame({ sidebarCollapsed = false, fullWidth = false }: BorderFrameProps) {
  // Calculate sidebar offset for desktop only (lg breakpoint = 1024px)
  // On mobile, sidebar is hidden so we want full width (left: 0)
  const desktopOffset = fullWidth ? '0' : (sidebarCollapsed ? '80px' : '288px')

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 transition-all duration-300 left-0 lg:left-[var(--sidebar-offset)]"
      style={{ '--sidebar-offset': desktopOffset } as React.CSSProperties}
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
