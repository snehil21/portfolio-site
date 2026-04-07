import { motion } from 'framer-motion'
import Container from '@components/Container'
import Section from '@components/Section'
import { COMPETITIVE_PROGRAMMING_STATS } from '@data/portfolio'
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

export default function Stats() {
  return (
    <Section id="stats" className="bg-dark-50 dark:bg-dark-800/50 py-20 sm:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center mb-2">{SECTION_CONTENT.stats.title}</h2>
          <p className="section-subtitle text-center mb-12">
            {SECTION_CONTENT.stats.subtitle}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="overflow-x-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <table className="w-full">
              <thead>
                <tr className="border-b border-dark-300 dark:border-dark-600">
                  <th className="text-left px-4 py-3 font-semibold text-dark-700 dark:text-dark-300">{SECTION_CONTENT.stats.tableHeaders.platform}</th>
                  <th className="text-left px-4 py-3 font-semibold text-dark-700 dark:text-dark-300">{SECTION_CONTENT.stats.tableHeaders.handle}</th>
                  <th className="text-left px-4 py-3 font-semibold text-dark-700 dark:text-dark-300">{SECTION_CONTENT.stats.tableHeaders.rating}</th>
                  <th className="text-left px-4 py-3 font-semibold text-dark-700 dark:text-dark-300">{SECTION_CONTENT.stats.tableHeaders.badge}</th>
                  <th className="text-center px-4 py-3 font-semibold text-dark-700 dark:text-dark-300">{SECTION_CONTENT.stats.tableHeaders.link}</th>
                </tr>
              </thead>
              <tbody>
                {COMPETITIVE_PROGRAMMING_STATS.map((stat, idx) => (
                  <motion.tr
                    key={idx}
                    className="border-b border-dark-200 dark:border-dark-700 hover:bg-primary-500/5 transition-colors"
                    variants={itemVariants}
                  >
                    <td className="px-4 py-4">
                      <motion.span 
                        className="font-semibold text-dark-900 dark:text-white"
                        whileHover={{ x: 5 }}
                      >
                        {stat.platform}
                      </motion.span>
                    </td>
                    <td className="px-4 py-4 text-dark-700 dark:text-dark-300">{stat.handle}</td>
                    <td className="px-4 py-4">
                      <span className="px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium">
                        {stat.rating}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-dark-700 dark:text-dark-300">{stat.badge}</td>
                    <td className="px-4 py-4 text-center">
                      <motion.a
                        href={stat.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img 
                          src={stat.icon} 
                          alt={stat.platform}
                          className="w-6 h-6 hover:drop-shadow-lg transition-all"
                        />
                      </motion.a>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
