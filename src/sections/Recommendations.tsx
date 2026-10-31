import { ArrowUpRight, BadgeCheck, Quote } from 'lucide-react'
import { FaLinkedin } from 'react-icons/fa'
import BlurFade from '@components/BlurFade'
import Container from '@components/Container'
import MagicCard from '@components/MagicCard'
import Section from '@components/Section'
import { RECOMMENDATIONS } from '@data/portfolio'

const recommendationsUrl =
  'https://www.linkedin.com/in/snehilkumarr/details/recommendations/'

export default function Recommendations() {
  return (
    <Section
      id="recommendations"
      className="bg-dark-50 pb-14 pt-24 dark:bg-dark-800/50 sm:pb-20 sm:pt-28 lg:pb-24 lg:pt-32"
    >
      <Container>
        <BlurFade>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary-700 dark:text-primary-300">
              Written by people I worked with
            </p>
            <h2 className="section-title">What colleagues say</h2>
            <p className="section-subtitle mx-auto mb-8 sm:mb-12">
              Recommendations from engineering leaders and colleagues across production teams.
            </p>
          </div>
        </BlurFade>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          {RECOMMENDATIONS.map((recommendation, index) => (
            <BlurFade key={recommendation.id} delay={index * 0.06} className="h-full">
              <MagicCard className="group h-full rounded-2xl border border-dark-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-400/50 hover:shadow-xl dark:border-dark-700 dark:bg-dark-900">
                <article className="relative z-10 flex h-full flex-col p-5 sm:p-6">
                  <header className="flex items-start gap-3">
                    <div
                      aria-hidden="true"
                      className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary-400 text-sm font-bold text-dark-950 ring-4 ring-primary-400/10"
                    >
                      {recommendation.initials}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5">
                        <h3 className="truncate font-bold text-dark-900 dark:text-white">
                          {recommendation.name}
                        </h3>
                        <BadgeCheck className="h-4 w-4 shrink-0 text-primary-500" aria-label="Verified colleague" />
                      </div>
                      <p className="mt-0.5 text-sm leading-snug text-dark-500 dark:text-dark-400">
                        {recommendation.role}
                      </p>
                    </div>

                    <FaLinkedin className="h-5 w-5 shrink-0 text-[#0A66C2]" aria-hidden="true" />
                  </header>

                  <blockquote className="mt-6 flex-1 text-[0.95rem] leading-7 text-dark-700 dark:text-dark-200 sm:text-base">
                    <Quote className="mb-3 h-6 w-6 fill-primary-400/15 text-primary-500" aria-hidden="true" />
                    <p>“{recommendation.excerpt}”</p>
                  </blockquote>

                  <footer className="mt-6 border-t border-dark-200 pt-4 dark:border-dark-700">
                    <a
                      href={recommendation.linkedInUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${recommendation.name}'s LinkedIn profile`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 transition-colors hover:text-primary-500 dark:text-primary-300 dark:hover:text-primary-200"
                    >
                      View LinkedIn profile
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </footer>
                </article>
              </MagicCard>
            </BlurFade>
          ))}
        </div>

        <BlurFade delay={0.12} className="mt-8 text-center sm:mt-10">
          <a
            href={recommendationsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View all recommendations on LinkedIn"
            className="button-primary inline-flex w-full items-center justify-center gap-2 sm:w-auto"
          >
            <FaLinkedin aria-hidden="true" className="h-5 w-5" />
            <span>View all recommendations</span>
          </a>
        </BlurFade>
      </Container>
    </Section>
  )
}
