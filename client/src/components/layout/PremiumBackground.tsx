interface PremiumBackgroundProps {
  sidebarCollapsed?: boolean
  fullWidth?: boolean
}

export function PremiumBackground({ sidebarCollapsed = false, fullWidth = false }: PremiumBackgroundProps) {
  // Calculate sidebar offset for desktop only (lg breakpoint = 1024px)
  // On mobile, sidebar is hidden so we want full width (left: 0)
  const desktopOffset = fullWidth ? '0' : (sidebarCollapsed ? '80px' : '288px')

  return (
    <>
      {/* CSS for gradient animations */}
      <style>{`
        @keyframes gradient-shift {
          0%, 100% {
            transform: translate(0%, 0%) scale(1);
            opacity: 0.3;
          }
          33% {
            transform: translate(10%, -10%) scale(1.1);
            opacity: 0.4;
          }
          66% {
            transform: translate(-10%, 10%) scale(0.9);
            opacity: 0.35;
          }
        }

        @keyframes gradient-shift-2 {
          0%, 100% {
            transform: translate(0%, 0%) scale(1);
            opacity: 0.25;
          }
          33% {
            transform: translate(-15%, 15%) scale(1.15);
            opacity: 0.35;
          }
          66% {
            transform: translate(15%, -5%) scale(0.95);
            opacity: 0.3;
          }
        }

        @keyframes gradient-shift-3 {
          0%, 100% {
            transform: translate(0%, 0%) scale(1);
            opacity: 0.2;
          }
          33% {
            transform: translate(5%, 15%) scale(1.05);
            opacity: 0.3;
          }
          66% {
            transform: translate(-10%, -10%) scale(1.1);
            opacity: 0.25;
          }
        }

        .gradient-blob-1 {
          animation: gradient-shift 20s ease-in-out infinite;
        }

        .gradient-blob-2 {
          animation: gradient-shift-2 25s ease-in-out infinite;
          animation-delay: -5s;
        }

        .gradient-blob-3 {
          animation: gradient-shift-3 30s ease-in-out infinite;
          animation-delay: -10s;
        }
      `}</style>

      {/* Premium gradient background */}
      <div
        className="fixed inset-0 pointer-events-none overflow-hidden -z-10 transition-all duration-300 left-0 lg:left-[var(--sidebar-offset)]"
        style={{ '--sidebar-offset': desktopOffset } as React.CSSProperties}
      >
        {/* Base subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-background to-teal-50/20 dark:from-blue-950/20 dark:via-background dark:to-teal-950/10" />

        {/* Animated gradient blobs - Light mode: softer blues and teals */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] gradient-blob-1">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400/40 to-blue-600/30 dark:from-blue-500/25 dark:to-blue-700/20 blur-3xl" />
        </div>

        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] gradient-blob-2">
          <div className="w-full h-full rounded-full bg-gradient-to-tr from-teal-400/35 to-cyan-500/25 dark:from-teal-500/20 dark:to-cyan-600/15 blur-3xl" />
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] gradient-blob-3">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-indigo-400/30 to-blue-500/25 dark:from-indigo-500/15 dark:to-blue-600/12 blur-3xl" />
        </div>

        {/* Subtle noise texture overlay for depth */}
        <div
          className="absolute inset-0 opacity-[0.015] dark:opacity-[0.025]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Radial gradient vignette for subtle edge darkening */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-background/20 dark:to-background/40" />
      </div>
    </>
  )
}
