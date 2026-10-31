import { MouseEvent } from 'react'
import { flushSync } from 'react-dom'
import { Moon, Sun } from 'lucide-react'
import { useReducedMotion } from 'framer-motion'

interface AnimatedThemeTogglerProps {
  isDark: boolean
  onToggle: () => void
  duration?: number
  className?: string
}

interface ViewTransition {
  ready: Promise<void>
}

type DocumentWithViewTransition = Document & {
  startViewTransition?: (callback: () => void) => ViewTransition
}

type ViewTransitionAnimationOptions = KeyframeAnimationOptions & {
  pseudoElement: string
}

export default function AnimatedThemeToggler({
  isDark,
  onToggle,
  duration = 450,
  className = '',
}: AnimatedThemeTogglerProps) {
  const shouldReduceMotion = useReducedMotion()

  const handleToggle = async (event: MouseEvent<HTMLButtonElement>) => {
    const documentWithTransition = document as DocumentWithViewTransition

    if (shouldReduceMotion || !documentWithTransition.startViewTransition) {
      onToggle()
      return
    }

    const bounds = event.currentTarget.getBoundingClientRect()
    const x = bounds.left + bounds.width / 2
    const y = bounds.top + bounds.height / 2
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    )

    const transition = documentWithTransition.startViewTransition(() => {
      flushSync(onToggle)
    })

    await transition.ready

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${radius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration,
        easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
        pseudoElement: '::view-transition-new(root)',
      } as ViewTransitionAnimationOptions,
    )
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={isDark ? 'Use light theme' : 'Use dark theme'}
      className={`group relative grid h-9 w-9 place-items-center overflow-hidden rounded-lg transition-colors hover:bg-dark-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 dark:hover:bg-dark-800 dark:focus-visible:ring-offset-dark-900 ${className}`}
    >
      <span className="relative h-5 w-5" aria-hidden="true">
        <Sun
          className={`absolute inset-0 h-5 w-5 text-primary-300 transition-all duration-300 ${
            isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
          }`}
        />
        <Moon
          className={`absolute inset-0 h-5 w-5 text-dark-700 transition-all duration-300 ${
            isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
          }`}
        />
      </span>
    </button>
  )
}
