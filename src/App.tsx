import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from '@components/Navbar'
import Footer from '@sections/Footer'
import CommandPalette from '@components/CommandPalette'

// Import pages
import HomePage from '@pages/HomePage'
import AboutPage from '@pages/AboutPage'
import ExperiencePage from '@pages/ExperiencePage'
import ProjectsPage from '@pages/ProjectsPage'
import ContactPage from '@pages/ContactPage'

function App() {
  const [isDark, setIsDark] = useState(true)
  const [showCommand, setShowCommand] = useState(false)

  // Keyboard shortcut for command palette
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setShowCommand(!showCommand)
      }
      // Escape to close
      if (e.key === 'Escape') {
        setShowCommand(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [showCommand])

  return (
    <Router>
      <div className={isDark ? 'dark' : ''}>
        <div className="min-h-screen bg-white dark:bg-dark-900 text-dark-900 dark:text-dark-50 transition-colors duration-300 flex flex-col">
          <Navbar isDark={isDark} onThemeToggle={() => setIsDark(!isDark)} />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>

          <Footer />
          <CommandPalette isOpen={showCommand} onClose={() => setShowCommand(false)} />
        </div>
      </div>
    </Router>
  )
}

export default App
