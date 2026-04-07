import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search } from 'lucide-react'

interface CommandPaletteProps {
  isOpen: boolean
  onClose: () => void
}

interface Command {
  id: string
  label: string
  description: string
  action: () => void
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState(0)
  const navigate = useNavigate()

  const commands: Command[] = [
    {
      id: 'nav-home',
      label: 'Go to Home',
      description: 'Navigate to home',
      action: () => {
        navigate('/')
        onClose()
      },
    },
    {
      id: 'nav-about',
      label: 'Go to About',
      description: 'Learn more about me',
      action: () => {
        navigate('/about')
        onClose()
      },
    },
    {
      id: 'nav-experience',
      label: 'Go to Experience',
      description: 'View my experience',
      action: () => {
        navigate('/experience')
        onClose()
      },
    },
    {
      id: 'nav-projects',
      label: 'Go to Projects',
      description: 'View my projects',
      action: () => {
        navigate('/projects')
        onClose()
      },
    },
    {
      id: 'nav-contact',
      label: 'Go to Contact',
      description: 'Get in touch',
      action: () => {
        navigate('/contact')
        onClose()
      },
    },
    {
      id: 'copy-email',
      label: 'Copy Email',
      description: 'Copy email address to clipboard',
      action: () => {
        navigator.clipboard.writeText('snehil@example.com')
        onClose()
      },
    },
  ]

  const filteredCommands = commands.filter(
    (cmd) =>
      cmd.label.toLowerCase().includes(search.toLowerCase()) ||
      cmd.description.toLowerCase().includes(search.toLowerCase())
  )

  useEffect(() => {
    setSelected(0)
  }, [search])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault()
          setSelected((prev) => (prev + 1) % filteredCommands.length)
          break
        case 'ArrowUp':
          e.preventDefault()
          setSelected((prev) =>
            prev - 1 < 0 ? filteredCommands.length - 1 : prev - 1
          )
          break
        case 'Enter':
          e.preventDefault()
          filteredCommands[selected]?.action()
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, selected, filteredCommands])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/30 dark:bg-black/50"
        onClick={onClose}
      />

      {/* Command Palette */}
      <div className="relative w-full max-w-md glass-effect rounded-xl shadow-xl overflow-hidden">
        {/* Input */}
        <div className="flex items-center px-4 py-3 border-b border-dark-200 dark:border-dark-700">
          <Search className="w-5 h-5 text-dark-400" />
          <input
            autoFocus
            type="text"
            placeholder="Type a command..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 ml-3 bg-transparent outline-none text-dark-900 dark:text-dark-50 placeholder-dark-400"
          />
          <kbd className="text-xs px-2 py-1 rounded bg-dark-200 dark:bg-dark-700 text-dark-600 dark:text-dark-400">
            ESC
          </kbd>
        </div>

        {/* Commands List */}
        <div className="max-h-96 overflow-y-auto">
          {filteredCommands.length === 0 ? (
            <div className="px-4 py-8 text-center text-dark-500 dark:text-dark-400">
              No commands found
            </div>
          ) : (
            <div className="py-2">
              {filteredCommands.map((cmd, idx) => (
                <button
                  key={cmd.id}
                  onClick={cmd.action}
                  className={`w-full px-4 py-2 text-left transition-colors ${
                    idx === selected
                      ? 'bg-primary-500 text-white'
                      : 'text-dark-900 dark:text-dark-50 hover:bg-dark-100 dark:hover:bg-dark-800'
                  }`}
                >
                  <div className="font-medium">{cmd.label}</div>
                  <div
                    className={`text-sm ${
                      idx === selected
                        ? 'text-primary-100'
                        : 'text-dark-500 dark:text-dark-400'
                    }`}
                  >
                    {cmd.description}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-2 border-t border-dark-200 dark:border-dark-700 flex items-center justify-between text-xs text-dark-500 dark:text-dark-400">
          <span>{filteredCommands.length} results</span>
          <span>⏎ to select</span>
        </div>
      </div>
    </div>
  )
}
