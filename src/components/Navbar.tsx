import { Menu, X, Moon, Sun, Home, User, Briefcase, Folder, Mail } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

interface NavbarProps {
  isDark: boolean
  onThemeToggle: () => void
}

export default function Navbar({ isDark, onThemeToggle }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', path: '/', icon: Home },
    { label: 'About', path: '/about', icon: User },
    { label: 'Experience', path: '/experience', icon: Briefcase },
    { label: 'Skills & Projects', path: '/projects', icon: Folder },
    { label: 'Contact', path: '/contact', icon: Mail },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-effect border-b border-dark-200 dark:border-dark-700'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div 
              className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center"
              whileHover={{ rotate: 180, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className="text-white font-bold text-lg">SK</span>
            </motion.div>
            <motion.span 
              className="hidden sm:block font-bold text-dark-900 dark:text-white"
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Snehil
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, idx) => {
              const IconComponent = item.icon
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    to={item.path}
                    className="px-3 py-2 rounded-lg text-sm font-medium text-dark-700 dark:text-dark-300 hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors flex items-center gap-2 group"
                  >
                    <motion.div
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

          {/* Right side controls */}
          <div className="flex items-center space-x-2">
            {/* Command Palette hint */}
            <motion.div 
              className="hidden sm:flex items-center space-x-2 px-3 py-1 rounded-lg bg-dark-100 dark:bg-dark-800 text-xs text-dark-600 dark:text-dark-400"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <kbd>⌘</kbd>
              <span>K</span>
            </motion.div>

            {/* Theme toggle */}
            <motion.button
              onClick={onThemeToggle}
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

            {/* Mobile menu button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-dark-100 dark:hover:bg-dark-800"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          variants={{
            open: { opacity: 1, height: 'auto' },
            closed: { opacity: 0, height: 0 },
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="pb-4 space-y-2">
            {navItems.map((item, idx) => {
              const IconComponent = item.icon
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: isOpen ? idx * 0.05 : 0 }}
                >
                  <Link
                    to={item.path}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-dark-700 dark:text-dark-300 hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors"
                    onClick={() => setIsOpen(false)}
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
    </nav>
  )
}
