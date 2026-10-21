import Container from '@components/Container'
import Section from '@components/Section'
import { RECOMMENDATIONS } from '@data/portfolio'
import { FaLinkedin } from 'react-icons/fa'

const recommendationsUrl =
  'https://www.linkedin.com/in/snehilkumarr/details/recommendations/'

export default function Recommendations() {
  return (
    <Section
      id="recommendations"
      className="bg-dark-50 pt-24 pb-14 dark:bg-dark-800/50 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24"
    >
      <Container>
        <div className="text-center">
          <h2 className="section-title">What colleagues say</h2>
          <p className="section-subtitle mx-auto mb-8 sm:mb-12">
            Recommendations from engineering leaders and colleagues I worked
            with.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          {RECOMMENDATIONS.map((recommendation) => (
            <article
              key={recommendation.id}
              className="glass-effect group relative flex h-full flex-col overflow-hidden rounded-xl border border-dark-200 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary-500/50 hover:shadow-lg dark:border-dark-700"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary-600 to-primary-300 opacity-80" />
              <div className="flex items-start gap-4">
                <div
                  aria-hidden="true"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-500/10 text-sm font-bold text-primary-600 ring-1 ring-primary-500/25 dark:bg-primary-500/20 dark:text-primary-300"
                >
                  {recommendation.initials}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="min-w-0 text-lg font-bold leading-tight text-dark-900 dark:text-white">
                      {recommendation.name}
                    </h3>
                    <a
                      href={recommendation.linkedInUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${recommendation.name}'s LinkedIn profile`}
                      className="ml-auto inline-flex shrink-0 items-center gap-2 rounded-full bg-primary-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-primary-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-dark-900"
                    >
                      <FaLinkedin aria-hidden="true" className="h-4 w-4 shrink-0" />
                      <span className="hidden sm:inline">View LinkedIn profile</span>
                    </a>
                  </div>
                  <p className="mt-1 text-sm leading-snug text-dark-500 dark:text-dark-400">
                    {recommendation.role}
                  </p>
                </div>
              </div>

              <blockquote className="mt-5 border-l-2 border-primary-500/40 pl-4 text-sm leading-relaxed text-dark-700 dark:text-dark-300 sm:text-base">
                “{recommendation.excerpt}”
              </blockquote>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center sm:mt-10">
          <a
            href={recommendationsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View all recommendations on LinkedIn"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary-600 px-5 py-3 font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-700 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-dark-900 sm:w-auto"
          >
            <FaLinkedin aria-hidden="true" className="h-5 w-5" />
            <span>View all recommendations on LinkedIn</span>
          </a>
        </div>
      </Container>
    </Section>
  )
}
