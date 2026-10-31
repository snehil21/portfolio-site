import type { CSSProperties } from 'react'

interface BorderBeamProps {
  className?: string
  delay?: number
}

export default function BorderBeam({ className = '', delay = 0 }: BorderBeamProps) {
  return (
    <span
      aria-hidden="true"
      className={`border-beam ${className}`}
      style={{ '--border-beam-delay': `${-delay}s` } as CSSProperties}
    />
  )
}
