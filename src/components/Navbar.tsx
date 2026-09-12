import {
  Menu,
  X,
  Moon,
  Sun,
  Home,
  Github,
  Briefcase,
  Folder,
  MessageSquare,
  Mail,
} from 'lucide-react'
import { MouseEvent, useCallback, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

interface NavbarProps {
  isDark: boolean
  onThemeToggle: () => void
}

const navItems = [
  {
    id: 'home', label: 'Home', path: '/', sectionId: 'hero',
    trackedSections: ['hero', 'expertise'], icon: Home,
  },
  {
    id: 'experience', label: 'Experience', path: '/experience', sectionId: 'experience',
    trackedSections: ['experience'], icon: Briefcase,
  },
  {
    id: 'projects', label: 'Skills & Projects', path: '/projects', sectionId: 'skills',
    trackedSections: ['skills', 'projects'], icon: Folder,
  },
  {
    id: 'recommendations', label: 'Recommendations', path: '/recommendations',
    sectionId: 'recommendations', trackedSections: ['recommendations'], icon: MessageSquare,
  },
  {
    id: 'github', label: 'GitHub', path: '/github', sectionId: 'github',
    trackedSections: ['github', 'stats'], icon: Github,
  },
  {
    id: 'contact', label: 'Contact', path: '/contact', sectionId: 'contact',
    trackedSections: ['contact'], icon: Mail,
  },
]

export default function Navbar({ isDark, onThemeToggle }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrollProgress, setScrollProgress] = useState(0)
  const location = useLocation()

  const updateScrollState = useCallback(() => {
    setIsScrolled(window.scrollY > 50)

    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
    setScrollProgress(scrollableHeight > 0 ? Math.min(window.scrollY / scrollableHeight, 1) : 0)

    if (location.pathname !== '/') {
      const routeItem = navItems.find((item) => item.path === location.pathname)
      setActiveSection(routeItem?.id ?? 'home')
      return
    }

    const marker = window.scrollY + Math.min(window.innerHeight * 0.32, 260)
    let currentSection = 'home'

    navItems.forEach((item) => {
      item.trackedSections.forEach((sectionId) => {
        const section = document.getElementById(sectionId)
        if (section && section.offsetTop <= marker) currentSection = item.id
      })
    })

    setActiveSection(currentSection)
  }, [location.pathname])

  useEffect(() => {
    let frameId = 0
    const handleScroll = () => {
      cancelAnimationFrame(frameId)
      frameId = requestAnimationFrame(updateScrollState)
    }

    updateScrollState()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [updateScrollState])

  const getDestination = (path: string, sectionId: string) =>
    location.pathname === '/' ? `/#${sectionId}` : path

  const handleHomeSectionClick = (
    event: MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    setIsOpen(false)
    if (location.pathname !== '/') return

    event.preventDefault()
    window.history.replaceState(null, '', `/#${sectionId}`)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      aria-label="Primary navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen
          ? 'glass-effect border-b border-dark-200 dark:border-dark-700'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" aria-label="Go to the home page" className="flex items-center space-x-2">
            <motion.div
              className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-primary-500/70 shadow-sm"
              whileHover={{ scale: 1.08 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img
                src="/snehil-kumar-profile.png"
                alt="Snehil Kumar"
                width="36"
                height="36"
                className="w-full h-full object-cover object-top origin-top scale-[1.45]"
              />
            </motion.div>
            <motion.span
              className="hidden sm:block font-bold text-dark-900 dark:text-white"
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Snehil
            </motion.span>
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, idx) => {
              const IconComponent = item.icon
              const isActive = activeSection === item.id

              return (
                <motion.div
                  key={item.id}
                  className="relative"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-nav-item"
                      className="absolute inset-0 rounded-lg bg-primary-500/10 ring-1 ring-primary-500/25 dark:bg-primary-500/15"
                      transition={{ type: 'spring', stiffness: 360, damping: 30 }}
                    />
                  )}
                  <Link
                    to={getDestination(item.path, item.sectionId)}
                    onClick={(event) => handleHomeSectionClick(event, item.sectionId)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`relative z-10 px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 group ${
                      isActive
                        ? 'text-primary-600 dark:text-primary-300'
                        : 'text-dark-700 dark:text-dark-300 hover:bg-dark-100 dark:hover:bg-dark-800'
                    }`}
                  >
                    <motion.div
                      animate={isActive ? { scale: 1.12 } : { scale: 1 }}
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                    >
                      <IconComponent className="w-4 h-4 text-primary-500 group-hover:text-primary-600 transition-colors" />
                    </motion.div>
                    <span>{item.label}</span>
                  </Link>
                </motion.div>
              )
            })}
          </div>

          <div className="flex items-center space-x-2">
            <motion.div
              className="hidden xl:flex items-center space-x-2 px-3 py-1 rounded-lg bg-dark-100 dark:bg-dark-800 text-xs text-dark-600 dark:text-dark-400"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <kbd>⌘</kbd>
              <span>K</span>
            </motion.div>

            <motion.button
              onClick={onThemeToggle}
              aria-label={isDark ? 'Use light theme' : 'Use dark theme'}
              className="p-2 rounded-lg hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors"
              whileHover={{ scale: 1.1, rotate: 20 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-dark-700" />
              )}
            </motion.button>

            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
              className="lg:hidden p-2 rounded-lg hover:bg-dark-100 dark:hover:bg-dark-800"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        <motion.div
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          variants={{
            open: { opacity: 1, height: 'auto' },
            closed: { opacity: 0, height: 0 },
          }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden"
        >
          <div className="pb-4 space-y-2">
            {navItems.map((item, idx) => {
              const IconComponent = item.icon
              const isActive = activeSection === item.id

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: isOpen ? idx * 0.05 : 0 }}
                >
                  <Link
                    to={getDestination(item.path, item.sectionId)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-primary-500/10 text-primary-600 ring-1 ring-primary-500/25 dark:text-primary-300'
                        : 'text-dark-700 dark:text-dark-300 hover:bg-dark-100 dark:hover:bg-dark-800'
                    }`}
                    onClick={(event) => handleHomeSectionClick(event, item.sectionId)}
                  >
                    <IconComponent className="w-4 h-4 text-primary-500" />
                    {item.label}
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>

      <motion.div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-0.5 origin-left bg-gradient-to-r from-primary-500 to-blue-400"
        animate={{ scaleX: scrollProgress }}
        transition={{ duration: 0.12, ease: 'easeOut' }}
        style={{ width: '100%' }}
      />
    </nav>
  )
}
