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
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 transition-all duration-300 left-0 lg:left-[var(--sidebar-offset)] opacity-100 dark:opacity-100"
      style={{ '--sidebar-offset': desktopOffset } as React.CSSProperties}
    >
      {/* Full page diagonal lines pattern - fixed, doesn't scroll */}
      {/* Light mode: very subtle (5% opacity), Dark mode: slightly more visible (12% opacity) */}
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <pattern id="diagonal-pattern" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="10" className="stroke-gray-400 dark:stroke-gray-500" strokeWidth="1" style={{ opacity: 'var(--pattern-opacity, 0.05)' }} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diagonal-pattern)" />
      </svg>
      <style>{`
        :root { --pattern-opacity: 0.05; }
        .dark { --pattern-opacity: 0.15; }
      `}</style>
    </div>
  )
}
