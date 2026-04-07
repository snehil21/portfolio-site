import { motion } from 'framer-motion'
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
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
}

export default function Experience() {
  return (
    <Section id="experience" className="py-20 sm:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{SECTION_CONTENT.experience.title}</h2>
          <p className="section-subtitle mb-12">
            {SECTION_CONTENT.experience.subtitle}
          </p>
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {EXPERIENCES.map((exp) => (
            <motion.div
              key={exp.id}
              className="glass-effect rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-dark-200 dark:border-dark-700 hover:border-primary-500/50"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start justify-between mb-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-2xl font-bold">{exp.role}</h3>
                  <motion.p 
                    className="text-primary-500 font-medium"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {exp.company}
                  </motion.p>
                </motion.div>
                <motion.span 
                  className="text-sm text-dark-600 dark:text-dark-400 px-3 py-1 rounded-full bg-dark-100 dark:bg-dark-700"
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
                    <motion.span 
                      className="text-primary-500 font-bold text-lg flex-shrink-0"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: itemIdx * 0.2 }}
                    >
                      →
                    </motion.span>
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
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
