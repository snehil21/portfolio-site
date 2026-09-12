import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  id?: string
  className?: string
}

export default function Section({ children, id, className = '' }: SectionProps) {
  return (
    <section id={id} className={`w-full scroll-mt-16 ${className}`}>
      {children}
    </section>
  )
}
