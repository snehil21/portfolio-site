import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import BorderBeam from '@components/BorderBeam'
import Container from '@components/Container'
import Section from '@components/Section'
import { EXPERIENCES } from '@data/portfolio'
import { SECTION_CONTENT } from '@data/sections'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 75%', 'end 60%'],
  })
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.25,
  })

  return (
    <Section id="experience" className="py-14 sm:py-20 lg:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{SECTION_CONTENT.experience.title}</h2>
          <p className="section-subtitle mb-8 sm:mb-12">
            {SECTION_CONTENT.experience.subtitle}
          </p>
        </motion.div>

        <motion.div
          ref={timelineRef}
          className="relative space-y-6 sm:space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div
            aria-hidden="true"
            className="absolute bottom-8 left-[0.4375rem] top-8 w-px bg-dark-200 dark:bg-dark-700 sm:left-[0.6875rem]"
          >
            <motion.div
              className="h-full w-full origin-top bg-gradient-to-b from-primary-200 via-primary-400 to-primary-600"
              style={{ scaleY: shouldReduceMotion ? 1 : smoothProgress }}
            />
          </div>

          {EXPERIENCES.map((exp, index) => (
            <div key={exp.id} className="relative pl-9 sm:pl-14">
              <motion.span
                aria-hidden="true"
                className="absolute left-0 top-7 z-10 grid h-4 w-4 place-items-center rounded-full border-2 border-white bg-primary-400 shadow-[0_0_0_4px_rgb(var(--color-primary-400)/0.18)] dark:border-dark-900 sm:left-1 sm:h-4 sm:w-4"
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ delay: index * 0.1, type: 'spring', stiffness: 300, damping: 22 }}
              />

              <motion.article
                className="group relative isolate overflow-hidden rounded-2xl border border-dark-200 bg-white p-4 shadow-sm transition-colors hover:border-primary-400/50 dark:border-dark-700 dark:bg-dark-900 sm:p-6"
                variants={itemVariants}
                whileHover={{ y: -3 }}
              >
              <BorderBeam delay={index * 0.7} />
              <div
                aria-hidden="true"
                className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary-400/10 blur-2xl transition-transform duration-300 group-hover:scale-125"
              />
              <div className="relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-xl sm:text-2xl font-bold">{exp.role}</h3>
                  <motion.p 
                    className="text-primary-500 font-medium"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {exp.company}
                  </motion.p>
                </motion.div>
                <motion.span 
                  className="self-start text-sm text-dark-600 dark:text-dark-400 px-3 py-1 rounded-full bg-dark-100 dark:bg-dark-700"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {exp.duration}
                </motion.span>
              </div>

              <motion.div 
                className="space-y-3 mb-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {exp.impact.map((item, itemIdx) => (
                  <motion.div 
                    key={itemIdx} 
                    className="flex gap-3"
                    variants={itemVariants}
                    custom={itemIdx}
                  >
                    <span
                      className="text-primary-500 font-bold text-lg flex-shrink-0"
                    >
                      →
                    </span>
                    <p className="text-dark-700 dark:text-dark-300">{item}</p>
                  </motion.div>
                ))}
              </motion.div>

              {exp.tech && (
                <motion.div 
                  className="flex flex-wrap gap-2 pt-4 border-t border-dark-200 dark:border-dark-700"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {exp.tech.map((tech, techIdx) => (
                    <motion.span
                      key={tech}
                      className="text-xs px-2 py-1 rounded bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 font-medium cursor-default"
                      whileHover={{ scale: 1.1, y: -2 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + techIdx * 0.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              )}
              </div>
              </motion.article>
            </div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
