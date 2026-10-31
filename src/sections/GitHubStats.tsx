import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Container from '@components/Container'
import Section from '@components/Section'

interface GitHubStatsProps {
  isDark: boolean
}

interface GitHubCardProps {
  alt: string
  className?: string
  src: string
}

const githubProfileUrl = 'https://github.com/snehil21'
const cardApiUrl = 'https://github-profile-summary-cards.vercel.app/api/cards'

function GitHubCard({ alt, className = '', src }: GitHubCardProps) {
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null)
  const [failedSrc, setFailedSrc] = useState<string | null>(null)
  const isLoaded = loadedSrc === src
  const hasError = failedSrc === src

  return (
    <motion.a
      href={githubProfileUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${alt}. Open Snehil's GitHub profile.`}
      className={`group relative block min-h-40 overflow-hidden rounded-xl border border-dark-200 bg-dark-50 shadow-sm transition-all hover:-translate-y-1 hover:border-primary-500/50 hover:shadow-lg dark:border-dark-700 dark:bg-dark-900 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 animate-pulse bg-dark-100 dark:bg-dark-800" aria-hidden="true" />
      )}

      {hasError ? (
        <div className="flex min-h-40 items-center justify-center gap-2 p-6 text-center text-dark-600 dark:text-dark-300">
          <Github className="h-5 w-5 shrink-0 text-primary-500" aria-hidden="true" />
          <span>GitHub statistics are temporarily unavailable. View the profile instead.</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoadedSrc(src)}
          onError={() => setFailedSrc(src)}
          className="relative z-10 h-auto w-full"
        />
      )}
    </motion.a>
  )
}

export default function GitHubStats({ isDark }: GitHubStatsProps) {
  const theme = isDark ? 'github_dark' : 'github'
  const themeColors = isDark
    ? '&title_color=fafafa&text_color=a1a1aa&bg_color=09090b&border_color=27272a&icon_color=a9b8b2&chart_color=a9b8b2'
    : '&title_color=18181b&text_color=52525b&bg_color=ffffff&border_color=e4e4e7&icon_color=56645f&chart_color=82968e'
  const cardUrl = (card: string, extraParameters = '') =>
    `${cardApiUrl}/${card}?username=snehil21&theme=${theme}&animation=sequence${themeColors}${extraParameters}`

  return (
    <Section id="github" className="py-14 sm:py-20 lg:py-24">
      <Container>
        <div className="mb-8 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary-700 dark:text-primary-300">
              Open-source footprint
            </p>
            <h2 className="section-title">GitHub Activity</h2>
            <p className="section-subtitle">
              A live view of my public repositories, contributions, languages, and collaboration.
            </p>
          </div>
          <a
            href={githubProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-lg px-4 py-2 font-medium text-primary-500 transition-colors hover:bg-primary-500/10 sm:self-auto"
          >
            View GitHub profile
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="mx-auto max-w-3xl space-y-4 sm:space-y-6">
          <GitHubCard
            alt="GitHub profile details and contribution history"
            src={cardUrl('profile-details')}
          />

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            <GitHubCard
              alt="Top programming languages across public repositories"
              src={cardUrl('repos-per-language')}
            />
            <GitHubCard
              alt="Top programming languages by public commit activity"
              src={cardUrl('most-commit-language')}
            />
            <GitHubCard
              alt="GitHub stars, commits, pull requests, issues, and contributions"
              src={cardUrl('stats')}
            />
            <GitHubCard
              alt="GitHub commit activity by time of day in UTC"
              src={cardUrl('productive-time', '&utcOffset=0')}
            />
          </div>
        </div>
      </Container>
    </Section>
  )
}
