import { useState } from 'react'
import {
  ArrowRight,
  BadgeCheck,
  ExternalLink,
  Github,
  ScanSearch,
  Sparkles,
  Siren,
  Wrench,
} from 'lucide-react'
import { motion } from 'framer-motion'
import BlurFade from '@components/BlurFade'
import BorderBeam from '@components/BorderBeam'
import Container from '@components/Container'
import MagicCard from '@components/MagicCard'
import Section from '@components/Section'
import { PROJECTS } from '@data/portfolio'
import { SECTION_CONTENT } from '@data/sections'
import type { Project } from '../types'

interface ProjectCardProps {
  project: Project
  featuredLayout: boolean
}

const incidentFlow = [
  {
    label: 'Inject incident',
    detail: 'Start a deliberately unhealthy scenario',
    Icon: Siren,
  },
  {
    label: 'Investigate',
    detail: 'Follow logs, metrics, traces, and queue state',
    Icon: ScanSearch,
  },
  {
    label: 'Repair',
    detail: 'Apply a bounded operational fix',
    Icon: Wrench,
  },
  {
    label: 'Verify',
    detail: 'Grade behavior and restart durability',
    Icon: BadgeCheck,
  },
]

function IncidentFlow() {
  return (
    <div className="mt-5 rounded-xl border border-dark-200 bg-dark-950 p-4 text-white dark:border-white/10 sm:p-5">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-300">
          Incident lifecycle
        </p>
        <span className="text-xs text-dark-400">Local, repeatable practice</span>
      </div>

      <div className="grid gap-3 sm:grid-cols-4 sm:gap-2">
        {incidentFlow.map(({ label, detail, Icon }, index) => (
          <div key={label} className="relative flex gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-3 sm:block">
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary-400/15 text-primary-300">
              <Icon className="h-4 w-4" aria-hidden="true" />
            </div>
            <div className="min-w-0 sm:mt-3">
              <p className="text-sm font-semibold text-white">{label}</p>
              <p className="mt-1 text-xs leading-relaxed text-dark-400">{detail}</p>
            </div>
            {index < incidentFlow.length - 1 && (
              <ArrowRight
                aria-hidden="true"
                className="absolute -right-2.5 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 rounded-full bg-dark-950 p-1 text-primary-300 sm:block"
              />
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-col gap-2 border-t border-white/10 pt-3 text-xs text-dark-400 sm:flex-row sm:items-center sm:justify-between">
        <span>
          Evidence: <strong className="font-medium text-dark-200">logs · metrics · traces · queue state</strong>
        </span>
        <span>
          Grading: <strong className="font-medium text-dark-200">broken · repaired · restart-safe</strong>
        </span>
      </div>
    </div>
  )
}

function ProjectCard({ project, featuredLayout }: ProjectCardProps) {
  const isFlagship = project.id === '1'
  const visibleTech = isFlagship ? project.tech.slice(0, 8) : project.tech.slice(0, 5)

  return (
    <MagicCard
      className={`group h-full rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-400/60 hover:shadow-xl dark:bg-dark-900 ${
        isFlagship
          ? 'border-primary-400/35 dark:border-primary-400/30'
          : 'border-dark-200 dark:border-dark-700'
      }`}
    >
      {isFlagship && <BorderBeam />}
      <article className="relative z-10 flex h-full flex-col p-5 sm:p-6 lg:p-7">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              {isFlagship && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-primary-400/25 bg-primary-400/10 px-2.5 py-1 text-xs font-semibold text-primary-700 dark:text-primary-300">
                  <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                  Flagship project
                </span>
              )}
              {project.featured && !isFlagship && (
                <span className="rounded-full bg-dark-100 px-2.5 py-1 text-xs font-medium text-dark-600 dark:bg-white/10 dark:text-dark-300">
                  Featured
                </span>
              )}
            </div>
            <h3 className={`${isFlagship ? 'text-2xl sm:text-3xl' : 'text-xl'} font-bold leading-tight`}>
              {project.title}
            </h3>
          </div>
        </div>

        <p className="mt-4 leading-relaxed text-dark-600 dark:text-dark-300">
          {project.description}
        </p>

        {(isFlagship || !featuredLayout) && (
          <div className={`mt-5 grid gap-4 ${isFlagship ? 'sm:grid-cols-2' : ''}`}>
            <div className="rounded-xl border border-dark-200 bg-dark-50/80 p-4 dark:border-white/10 dark:bg-white/[0.035]">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-dark-500 dark:text-dark-400">
                Problem
              </p>
              <p className="mt-2 text-sm leading-relaxed text-dark-700 dark:text-dark-300">
                {project.problem}
              </p>
            </div>
            <div className="rounded-xl border border-primary-400/20 bg-primary-50/70 p-4 dark:bg-primary-400/[0.06]">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-700 dark:text-primary-300">
                Solution
              </p>
              <p className="mt-2 text-sm leading-relaxed text-dark-700 dark:text-dark-300">
                {project.solution}
              </p>
            </div>
          </div>
        )}

        {isFlagship && <IncidentFlow />}

        <div className="mt-5 flex flex-wrap gap-2">
          {visibleTech.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-primary-400/15 bg-primary-50 px-2 py-1 text-xs font-medium text-primary-700 dark:bg-primary-900/25 dark:text-primary-300"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > visibleTech.length && (
            <span className="rounded-md border border-dark-200 px-2 py-1 text-xs text-dark-500 dark:border-dark-700 dark:text-dark-400">
              +{project.tech.length - visibleTech.length} more
            </span>
          )}
        </div>

        <div className="mt-auto flex flex-wrap gap-4 pt-6">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700 transition-colors hover:text-primary-500 dark:text-primary-300 dark:hover:text-primary-200"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              View code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700 transition-colors hover:text-primary-500 dark:text-primary-300 dark:hover:text-primary-200"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              Live project
            </a>
          )}
        </div>
      </article>
    </MagicCard>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState<'featured' | 'all'>('featured')
  const featured = PROJECTS.filter((project) => project.featured)
  const displayed = filter === 'featured' ? featured : PROJECTS

  return (
    <Section id="projects" className="py-14 sm:py-20 lg:py-24">
      <Container>
        <BlurFade>
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary-700 dark:text-primary-300">
              Systems I have built
            </p>
            <h2 className="section-title">{SECTION_CONTENT.projects.title}</h2>
            <p className="section-subtitle mb-8 sm:mb-10">
              {SECTION_CONTENT.projects.subtitle}
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={0.08}>
          <div className="mb-8 inline-flex w-full rounded-xl border border-dark-200 bg-dark-50 p-1 dark:border-dark-700 dark:bg-dark-800 sm:w-auto">
            <button
              type="button"
              onClick={() => setFilter('featured')}
              className={`flex-1 rounded-lg px-4 py-2 text-sm font-semibold transition-all sm:flex-none ${
                filter === 'featured'
                  ? 'bg-primary-400 text-dark-950 shadow-sm'
                  : 'text-dark-600 hover:text-dark-900 dark:text-dark-400 dark:hover:text-white'
              }`}
            >
              {SECTION_CONTENT.projects.filterFeaturedLabel} ({featured.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`flex-1 rounded-lg px-4 py-2 text-sm font-semibold transition-all sm:flex-none ${
                filter === 'all'
                  ? 'bg-primary-400 text-dark-950 shadow-sm'
                  : 'text-dark-600 hover:text-dark-900 dark:text-dark-400 dark:hover:text-white'
              }`}
            >
              {SECTION_CONTENT.projects.filterAllLabel} ({PROJECTS.length})
            </button>
          </div>
        </BlurFade>

        <motion.div
          key={filter}
          className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-fr"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          {displayed.map((project, index) => (
            <div
              key={project.id}
              className={
                index === 0
                  ? 'md:col-span-2 lg:col-span-2 lg:row-span-2'
                  : 'min-h-[21rem]'
              }
            >
              <ProjectCard project={project} featuredLayout={filter === 'featured'} />
            </div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
