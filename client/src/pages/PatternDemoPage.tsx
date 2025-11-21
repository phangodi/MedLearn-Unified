import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';
import { Moon, Sun } from 'lucide-react';

/**
 * PATTERN DEMO PAGE
 *
 * This page displays all 6 background pattern options side-by-side
 * for easy comparison. You can toggle between light/dark mode to see
 * how each pattern looks in both themes.
 *
 * To test this page, add a temporary route in App.tsx:
 * <Route path="/pattern-demo" element={<PatternDemoPage />} />
 *
 * Then navigate to: http://localhost:5173/pattern-demo
 *
 * DELETE THIS FILE once you've chosen your pattern.
 */
export function PatternDemoPage() {
  const { theme, setTheme } = useTheme();

  const patterns = [
    {
      name: 'Soft Dot Grid',
      className: 'bg-pattern-dots',
      description: 'Clean, minimalist dots in a grid. Like graph paper.',
      recommendation: 'Best for: Professional medical/scientific feel',
    },
    {
      name: 'Diagonal Grid Lines',
      className: 'bg-pattern-grid',
      description: 'Subtle grid lines. Like engineering blueprints.',
      recommendation: 'Best for: Structured, organized aesthetic',
    },
    {
      name: 'Subtle Noise Texture',
      className: 'bg-pattern-noise',
      description: 'Paper-like organic texture. Like premium textbook paper.',
      recommendation: 'Best for: Reducing digital fatigue',
    },
    {
      name: 'Medical Hexagon',
      className: 'bg-pattern-hexagon',
      description: 'Honeycomb molecular structure. Like chemistry diagrams.',
      recommendation: 'Best for: Strong medical theme',
    },
    {
      name: 'Gradient Overlay',
      className: 'bg-pattern-gradient',
      description: 'Smooth radial gradients. Like modern SaaS apps.',
      recommendation: 'Best for: Premium, sophisticated feel',
    },
    {
      name: 'Cross-hatch Lines',
      className: 'bg-pattern-crosshatch',
      description: 'Diagonal crossing lines. Like classic textbooks.',
      recommendation: 'Best for: Traditional academic aesthetic',
    },
  ];

  return (
    <div className="min-h-screen bg-background p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Background Pattern Options
            </h1>
            <p className="text-muted-foreground">
              Compare all 6 subtle background patterns for chapter reading pages
            </p>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:bg-accent transition-all"
          >
            {theme === 'dark' ? (
              <>
                <Sun className="w-5 h-5" />
                <span>Switch to Light</span>
              </>
            ) : (
              <>
                <Moon className="w-5 h-5" />
                <span>Switch to Dark</span>
              </>
            )}
          </button>
        </div>

        <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
          <p className="text-sm text-foreground">
            <strong>Instructions:</strong> Toggle between light/dark mode to see how each
            pattern adapts. All patterns use 1.5-4% opacity for maximum readability during
            long study sessions. Click the pattern cards to see the full effect.
          </p>
        </div>
      </div>

      {/* Pattern Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {patterns.map((pattern, index) => (
          <motion.div
            key={pattern.className}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative"
          >
            {/* Pattern Preview Card */}
            <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              {/* Pattern Preview Area - Shows actual pattern */}
              <div
                className={`h-48 bg-background ${pattern.className} border-b border-border relative overflow-hidden`}
              >
                {/* Sample Content to Show Readability */}
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-foreground mb-2">Aa</div>
                    <p className="text-sm text-muted-foreground">
                      Sample text to test readability
                    </p>
                  </div>
                </div>

                {/* Pattern Name Badge */}
                <div className="absolute top-4 left-4">
                  <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    Option {index + 1}
                  </div>
                </div>
              </div>

              {/* Pattern Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {pattern.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {pattern.description}
                </p>
                <div className="bg-accent/50 rounded-lg p-3">
                  <p className="text-xs text-accent-foreground font-medium">
                    {pattern.recommendation}
                  </p>
                </div>

                {/* CSS Class Name */}
                <div className="mt-4 pt-4 border-t border-border">
                  <code className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground font-mono">
                    {pattern.className}
                  </code>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Full-Width Preview Section */}
      <div className="max-w-7xl mx-auto mt-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Full-Width Preview (Scroll to See More)
        </h2>

        {patterns.map((pattern, index) => (
          <div key={`full-${pattern.className}`} className="mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs">
                {index + 1}
              </span>
              {pattern.name}
            </h3>
            <div
              className={`bg-background ${pattern.className} rounded-2xl border border-border p-12 min-h-[400px]`}
            >
              <div className="max-w-3xl mx-auto">
                <h4 className="text-2xl font-bold text-foreground mb-4">
                  Chapter 1: Fundamentals of Medical Sociology
                </h4>
                <div className="space-y-4 text-foreground/90">
                  <p>
                    Medical sociology is the study of how social factors influence health,
                    illness, and healthcare. This interdisciplinary field combines insights
                    from sociology, medicine, public health, and social psychology to
                    understand the complex relationships between society and health.
                  </p>
                  <p>
                    The field emerged in the mid-20th century as researchers began to
                    recognize that health outcomes are not solely determined by biological
                    factors, but are deeply influenced by social determinants such as
                    socioeconomic status, education, race, gender, and access to healthcare.
                  </p>
                  <h5 className="text-xl font-semibold text-foreground mt-6 mb-3">
                    Key Concepts in Medical Sociology
                  </h5>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Social determinants of health</li>
                    <li>Health inequalities and disparities</li>
                    <li>The sick role and illness behavior</li>
                    <li>Healthcare systems and access</li>
                    <li>Medical professionalization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Implementation Instructions */}
      <div className="max-w-7xl mx-auto mt-12 bg-card border border-border rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          How to Apply Your Chosen Pattern
        </h2>
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Once you've chosen your favorite pattern, update{' '}
            <code className="bg-muted px-2 py-1 rounded text-foreground font-mono text-sm">
              Exam2ChapterPage.tsx
            </code>{' '}
            line 31:
          </p>

          <div className="bg-muted rounded-lg p-4">
            <p className="text-sm text-muted-foreground mb-2">Before:</p>
            <code className="block bg-background rounded p-3 text-sm font-mono text-foreground border border-border">
              &lt;div className="min-h-screen bg-background"&gt;
            </code>
          </div>

          <div className="bg-muted rounded-lg p-4">
            <p className="text-sm text-muted-foreground mb-2">After:</p>
            <code className="block bg-background rounded p-3 text-sm font-mono text-foreground border border-border">
              &lt;div className="min-h-screen bg-background{' '}
              <span className="text-primary font-bold">bg-pattern-gradient</span>"&gt;
            </code>
          </div>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mt-4">
            <p className="text-sm text-foreground">
              <strong>My Recommendation:</strong> Use{' '}
              <code className="bg-muted px-2 py-1 rounded font-mono">
                bg-pattern-gradient
              </code>{' '}
              for the most premium, modern feel, or{' '}
              <code className="bg-muted px-2 py-1 rounded font-mono">
                bg-pattern-noise
              </code>{' '}
              to best reduce digital fatigue during long reading sessions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
