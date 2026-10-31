import { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

interface BlurFadeProps {
  children: ReactNode
  className?: string
  delay?: number
  yOffset?: number
}

export default function BlurFade({
  children,
  className = '',
  delay = 0,
  yOffset = 14,
}: BlurFadeProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: yOffset, filter: 'blur(8px)' }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
