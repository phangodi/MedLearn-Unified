import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'
import { Button } from './Button'
import { motion } from 'framer-motion'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <style>{`
        .theme-toggle-btn {
          color: rgb(31, 41, 55); /* gray-800 */
          transition: all 0.2s;
        }
        .theme-toggle-btn:hover {
          background-color: rgb(243, 244, 246); /* gray-100 */
          color: rgb(0, 0, 0);
        }
        .dark .theme-toggle-btn {
          color: rgb(156, 163, 175); /* gray-400 - medium brightness */
        }
        .dark .theme-toggle-btn:hover {
          background-color: rgb(55, 65, 81); /* gray-700 */
          color: rgb(243, 244, 246); /* gray-100 - bright on hover */
        }
      `}</style>
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleTheme}
        className="theme-toggle-btn w-9 px-0"
      >
        <motion.div
          initial={false}
          animate={{ rotate: theme === 'dark' ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {theme === 'light' ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </motion.div>
        <span className="sr-only">Toggle theme</span>
      </Button>
    </>
  )
}
