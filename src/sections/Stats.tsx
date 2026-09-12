import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { CalendarDays, Code2, ExternalLink, Trophy } from 'lucide-react'
import Container from '@components/Container'
import Section from '@components/Section'
import { GFG_STATS } from '@data/portfolio'
import { SECTION_CONTENT } from '@data/sections'

interface StatsProps {
  isDark: boolean
}

interface PlatformCardProps {
  alt: string
  href: string
  name: string
  src: string
}

const cardMotion = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
}

function PlatformCard({ alt, href, name, src }: PlatformCardProps) {
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null)
  const [failedSrc, setFailedSrc] = useState<string | null>(null)
  const isLoaded = loadedSrc === src
  const hasError = failedSrc === src

  useEffect(() => {
    if (isLoaded || hasError) return

    const timeoutId = window.setTimeout(() => setFailedSrc(src), 20000)
    return () => window.clearTimeout(timeoutId)
  }, [hasError, isLoaded, src])

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${name} profile`}
      className="group relative flex h-full min-h-72 items-center overflow-hidden rounded-2xl border border-dark-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-primary-500/50 hover:shadow-xl dark:border-dark-700 dark:bg-dark-900"
      variants={cardMotion}
    >
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 animate-pulse bg-dark-100 dark:bg-dark-800" aria-hidden="true" />
      )}

      {hasError ? (
        <div className="flex min-h-72 flex-col items-center justify-center gap-3 p-8 text-center text-dark-600 dark:text-dark-300">
          <Code2 className="h-8 w-8 text-primary-500" aria-hidden="true" />
          <p>{name} statistics are temporarily unavailable.</p>
          <span className="inline-flex items-center gap-1.5 font-medium text-primary-500">
            View profile <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </span>
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

function GfgCard() {
  const total = GFG_STATS.problemsSolved
  let accumulated = 0
  const donutStops = GFG_STATS.difficulty.map((item) => {
    const start = (accumulated / total) * 100
    accumulated += item.value
    const end = (accumulated / total) * 100
    return `${item.color} ${start.toFixed(2)}% ${end.toFixed(2)}%`
  }).join(', ')

  const metrics = [
    { label: 'Coding score', value: GFG_STATS.codingScore.toLocaleString(), icon: Code2 },
    { label: 'Institute rank', value: GFG_STATS.instituteRank, icon: Trophy },
    { label: 'Longest streak', value: `${GFG_STATS.longestStreak} days`, icon: CalendarDays },
    { label: 'POTDs solved', value: GFG_STATS.potdsSolved, icon: Trophy },
  ]

  return (
    <motion.article
      className="flex h-full min-h-72 flex-col overflow-hidden rounded-2xl border border-dark-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-xl dark:border-dark-700 dark:bg-dark-900"
      variants={cardMotion}
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <p className="font-semibold text-dark-900 dark:text-white">GeeksforGeeks</p>
          <p className="text-xs text-dark-500 dark:text-dark-400">@{GFG_STATS.handle}</p>
        </div>
        <a
          href={GFG_STATS.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View GeeksforGeeks profile"
          className="rounded-lg p-2 text-emerald-600 transition-colors hover:bg-emerald-500/10 dark:text-emerald-400"
        >
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>

      <div className="grid grid-cols-[6.5rem_1fr] items-center gap-3">
        <div
          className="relative grid aspect-square place-items-center rounded-full"
          style={{ background: `conic-gradient(${donutStops})` }}
          role="img"
          aria-label={`${GFG_STATS.problemsSolved} GeeksforGeeks problems solved`}
        >
          <div className="grid h-[72%] w-[72%] place-items-center rounded-full bg-white text-center dark:bg-dark-900">
            <div>
              <p className="text-2xl font-bold leading-none text-dark-900 dark:text-white">{GFG_STATS.problemsSolved}</p>
              <p className="mt-1 text-[0.7rem] leading-tight text-dark-500 dark:text-dark-400">problems solved</p>
            </div>
          </div>
        </div>

        <ul className="space-y-1.5" aria-label="Problems solved by difficulty">
          {GFG_STATS.difficulty.map((item) => (
            <li key={item.label} className="flex items-center justify-between gap-2 text-xs">
              <span className="flex items-center gap-2 text-dark-600 dark:text-dark-300">
                <span className="h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: item.color }} aria-hidden="true" />
                {item.label}
              </span>
              <span className="font-semibold text-dark-800 dark:text-dark-100">{item.value}</span>
            </li>
          ))}
        </ul>
      </div>

      <dl className="mt-3 grid grid-cols-2 gap-2">
        {metrics.map(({ icon: Icon, label, value }) => (
          <div key={label} className="rounded-xl bg-dark-50 p-2.5 dark:bg-dark-800/80">
            <dt className="flex items-center gap-1.5 text-xs text-dark-500 dark:text-dark-400">
              <Icon className="h-3.5 w-3.5 text-emerald-500" aria-hidden="true" />
              {label}
            </dt>
            <dd className="mt-1 font-semibold text-dark-900 dark:text-white">{value}</dd>
          </div>
        ))}
      </dl>

      <p className="mt-auto pt-3 text-right text-xs text-dark-400 dark:text-dark-500">
        Updated {GFG_STATS.lastUpdated}
      </p>
    </motion.article>
  )
}

export default function Stats({ isDark }: StatsProps) {
  const leetCodeTheme = isDark ? 'dark' : 'light'
  const codeChefTheme = isDark ? 'dark' : 'light'

  return (
    <Section id="stats" className="bg-dark-50 py-14 dark:bg-dark-800/50 sm:py-20 lg:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title mb-2 text-center">{SECTION_CONTENT.stats.title}</h2>
          <p className="section-subtitle mx-auto mb-8 text-center sm:mb-12">
            {SECTION_CONTENT.stats.subtitle}
          </p>
        </motion.div>

        <motion.div
          className="mx-auto grid max-w-7xl items-stretch gap-5 md:grid-cols-2 xl:auto-rows-fr xl:grid-cols-3"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <PlatformCard
            name="LeetCode"
            href="https://leetcode.com/u/snehilthakur21/"
            alt="Snehil Thakur's LeetCode solved problems and contest rating"
            src={`https://leetcard.jacoblin.cool/snehilthakur21?theme=${leetCodeTheme}&font=Inter&ext=contest`}
          />
          <PlatformCard
            name="CodeChef"
            href="https://www.codechef.com/users/snehil21"
            alt="Snehil Kumar's CodeChef rating, solved problems, contests, and rating history"
            src={`https://codechef-stat-card.vercel.app/api/snehil21?theme=${codeChefTheme}&ext=contest`}
          />
          <div className="h-full md:col-span-2 md:mx-auto md:w-full md:max-w-md xl:col-span-1 xl:max-w-none">
            <GfgCard />
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
