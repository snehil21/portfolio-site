import { Activity, Braces, Cpu, Database, RadioTower } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import BlurFade from '@components/BlurFade'
import Container from '@components/Container'
import Section from '@components/Section'
import { EXPERTISE_AREAS } from '@data/portfolio'

const flowNodes = [
  { label: 'API', detail: 'Requests', Icon: Braces },
  { label: 'Queue', detail: 'Events', Icon: RadioTower },
  { label: 'Workers', detail: 'Processing', Icon: Cpu },
  { label: 'Data', detail: 'State', Icon: Database },
  { label: 'Observe', detail: 'Signals', Icon: Activity },
]

function SystemFlow() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="overflow-x-auto rounded-2xl border border-dark-200 bg-white shadow-sm dark:border-dark-700 dark:bg-dark-900">
      <div className="relative min-w-[720px] px-10 py-9 lg:px-14 lg:py-11">
        <svg
          aria-hidden="true"
          className="absolute inset-x-[9%] top-1/2 h-16 w-[82%] -translate-y-1/2 overflow-visible"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="expertise-beam" x1="0" x2="1">
              <stop offset="0%" stopColor="rgb(var(--color-primary-300))" />
              <stop offset="50%" stopColor="rgb(var(--color-primary-400))" />
              <stop offset="100%" stopColor="rgb(var(--color-primary-600))" />
            </linearGradient>
          </defs>
          <path d="M 15 50 H 985" stroke="currentColor" strokeWidth="2" className="text-dark-200 dark:text-dark-700" />
          <motion.path
            d="M 15 50 H 985"
            fill="none"
            stroke="url(#expertise-beam)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="75 210"
            initial={{ strokeDashoffset: 0 }}
            animate={shouldReduceMotion ? undefined : { strokeDashoffset: -285 }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'linear' }}
          />
        </svg>

        <div className="relative z-10 flex items-center justify-between gap-8">
          {flowNodes.map(({ label, detail, Icon }) => (
            <div key={label} className="flex w-24 flex-col items-center text-center">
              <div className="grid h-14 w-14 place-items-center rounded-2xl border border-primary-400/25 bg-white text-primary-600 shadow-[0_8px_30px_rgb(var(--color-primary-400)/0.12)] dark:bg-dark-950 dark:text-primary-300">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="mt-3 text-sm font-bold text-dark-900 dark:text-white">{label}</p>
              <p className="text-xs text-dark-500 dark:text-dark-400">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Expertise() {
  return (
    <Section id="expertise" className="bg-dark-50 py-14 dark:bg-dark-800/50 sm:py-20 lg:py-24">
      <Container>
        <BlurFade>
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary-700 dark:text-primary-300">
              From request to production signal
            </p>
            <h2 className="section-title">Domain Expertise</h2>
            <p className="section-subtitle mb-8 sm:mb-10">
              Backend systems designed around asynchronous processing, durable state, and observable operations.
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={0.08}>
          <SystemFlow />
        </BlurFade>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {EXPERTISE_AREAS.map((area, index) => (
            <BlurFade key={area.id} delay={0.06 + index * 0.04} className="h-full">
              <article className="glass-effect h-full rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary-400/40 hover:shadow-lg sm:p-6">
                <h3 className="mb-3 text-lg font-bold text-dark-900 dark:text-white sm:text-xl">
                  {area.title}
                </h3>
                <p className="leading-relaxed text-dark-600 dark:text-dark-400">
                  {area.description}
                </p>
              </article>
            </BlurFade>
          ))}
        </div>
      </Container>
    </Section>
  )
}
