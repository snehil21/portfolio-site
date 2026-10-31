interface BorderBeamProps {
  className?: string
}

export default function BorderBeam({ className = '' }: BorderBeamProps) {
  return <span aria-hidden="true" className={`border-beam ${className}`} />
}
