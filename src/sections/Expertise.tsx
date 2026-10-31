import {
  Boxes,
  CloudCog,
  CreditCard,
  createLucideIcon,
  GitBranch,
  RadioTower,
  ShieldCheck,
  Truck,
  type LucideIcon,
} from 'lucide-react'
import { motion } from 'framer-motion'
import BlurFade from '@components/BlurFade'
import BorderBeam from '@components/BorderBeam'
import Container from '@components/Container'
import Section from '@components/Section'
import { EXPERTISE_AREAS } from '@data/portfolio'

const CpuAi = createLucideIcon('CpuAi', [
  ['path', { d: 'M12 20v2', key: '1' }],
  ['path', { d: 'M12 2v2', key: '2' }],
  ['path', { d: 'M16 9v6', key: '3' }],
  ['path', { d: 'M17 20v2', key: '4' }],
  ['path', { d: 'M17 2v2', key: '5' }],
  ['path', { d: 'M2 12h2', key: '6' }],
  ['path', { d: 'M2 17h2', key: '7' }],
  ['path', { d: 'M2 7h2', key: '8' }],
  ['path', { d: 'M20 12h2', key: '9' }],
  ['path', { d: 'M20 17h2', key: '10' }],
  ['path', { d: 'M20 7h2', key: '11' }],
  ['path', { d: 'M7 20v2', key: '12' }],
  ['path', { d: 'M7 2v2', key: '13' }],
  ['path', { d: 'M8 13h4', key: '14' }],
  ['path', { d: 'M8 15v-4a2 2 0 0 1 4 0v4', key: '15' }],
  ['rect', { x: '4', y: '4', width: '16', height: '16', rx: '2', key: '16' }],
])

const BroomSparkles = createLucideIcon('BroomSparkles', [
  ['path', { d: 'M11 2v2', key: '1' }],
  ['path', { d: 'M12 3h-2', key: '2' }],
  ['path', { d: 'M13.5 10.5 22 2', key: '3' }],
  ['path', { d: 'M14.734 13.841a2 2 0 0 0-.314-2.42L12.58 9.58a2 2 0 0 0-2.421-.314l-7.657 4.461A1 1 0 0 0 2.3 15.3l6.403 6.403a1 1 0 0 0 1.571-.204z', key: '4' }],
  ['path', { d: 'M20 15v4', key: '5' }],
  ['path', { d: 'M22 17h-4', key: '6' }],
  ['path', { d: 'M4 4v4', key: '7' }],
  ['path', { d: 'm5 18 2-2', key: '8' }],
  ['path', { d: 'M6 6H2', key: '9' }],
  ['path', { d: 'm7.699 10.7 5.602 5.601', key: '10' }],
])

const domainPillars = [
  {
    title: 'Fulfillment & Logistics',
    description: 'High-volume shipment processing, carrier integrations, and multi-format logistics pipelines.',
    Icon: Truck,
  },
  {
    title: 'Payments',
    description: 'Checkout, payment webhooks, credit allocation, and resilient payment services.',
    Icon: CreditCard,
  },
  {
    title: 'Generative AI',
    description: 'GenAI Logomaker, prompt optimisation, AI-assisted design workflows, and generative product experiences.',
    Icon: BroomSparkles,
  },
]

const expertiseIcons: Record<string, LucideIcon> = {
  '1': Boxes,
  '2': CpuAi,
  '3': RadioTower,
  '4': CloudCog,
  '5': ShieldCheck,
  '6': GitBranch,
}

const expertiseCards = [
  ...domainPillars,
  ...EXPERTISE_AREAS.map((area) => ({
    title: area.title,
    description: area.description,
    Icon: expertiseIcons[area.id],
  })),
]

interface ExpertiseCardProps {
  title: string
  description: string
  Icon: LucideIcon
  beamDelay?: number
}

function ExpertiseCard({ title, description, Icon, beamDelay = 0 }: ExpertiseCardProps) {
  return (
    <motion.article
      className="group relative h-full overflow-hidden rounded-2xl border border-dark-200 bg-white p-6 shadow-sm transition-colors hover:border-primary-400/50 dark:border-dark-700 dark:bg-dark-900"
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
    >
      <BorderBeam delay={beamDelay} />
      <div
        aria-hidden="true"
        className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary-400/10 blur-2xl transition-transform duration-300 group-hover:scale-125"
      />
      <div className="relative">
        <div className="flex items-center gap-4">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-primary-400/25 bg-primary-100/70 text-primary-700 dark:bg-primary-400/10 dark:text-primary-300">
            <Icon className="h-6 w-6" aria-hidden="true" />
          </div>
          <h3 className="text-xl font-bold text-dark-900 dark:text-white">{title}</h3>
        </div>
        <p className="mt-5 leading-relaxed text-dark-600 dark:text-dark-400">{description}</p>
      </div>
    </motion.article>
  )
}

export default function Expertise() {
  return (
    <Section id="expertise" className="bg-dark-50 py-14 dark:bg-dark-800/50 sm:py-20 lg:py-24">
      <Container>
        <BlurFade>
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary-700 dark:text-primary-300">
              Business domains
            </p>
            <h2 className="section-title">Domain Expertise</h2>
            <p className="section-subtitle mb-8 sm:mb-10">
              Product areas where I have built and operated backend systems in real-world environments.
            </p>
          </div>
        </BlurFade>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {expertiseCards.map((card, index) => (
            <BlurFade key={card.title} delay={0.04 + index * 0.035} className="h-full">
              <ExpertiseCard {...card} beamDelay={index * 0.55} />
            </BlurFade>
          ))}
        </div>
      </Container>
    </Section>
  )
}
