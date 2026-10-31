import { CSSProperties, PointerEvent, ReactNode, useState } from 'react'

interface MagicCardProps {
  children: ReactNode
  className?: string
}

type GlowStyle = CSSProperties & {
  '--magic-x': string
  '--magic-y': string
  '--magic-opacity': number
}

export default function MagicCard({ children, className = '' }: MagicCardProps) {
  const [glow, setGlow] = useState({ x: '50%', y: '50%', opacity: 0 })

  const updateGlow = (event: PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    setGlow({
      x: `${event.clientX - bounds.left}px`,
      y: `${event.clientY - bounds.top}px`,
      opacity: 1,
    })
  }

  const style: GlowStyle = {
    '--magic-x': glow.x,
    '--magic-y': glow.y,
    '--magic-opacity': glow.opacity,
  }

  return (
    <div
      className={`magic-card ${className}`}
      style={style}
      onPointerMove={updateGlow}
      onPointerEnter={updateGlow}
      onPointerLeave={() => setGlow((current) => ({ ...current, opacity: 0 }))}
    >
      {children}
    </div>
  )
}
