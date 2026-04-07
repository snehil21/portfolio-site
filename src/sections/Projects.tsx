import { motion } from 'framer-motion'
import Container from '@components/Container'
import Section from '@components/Section'
import { PROJECTS } from '@data/portfolio'
import { SECTION_CONTENT } from '@data/sections'
import { Github, ExternalLink } from 'lucide-react'
import { useState } from 'react'

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
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5 },
  },
}

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const featured = PROJECTS.filter((p) => p.featured)
  const displayed = filter === 'featured' ? featured : PROJECTS

  return (
    <Section id="projects" className="py-20 sm:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{SECTION_CONTENT.projects.title}</h2>
          <p className="section-subtitle mb-12">
            {SECTION_CONTENT.projects.subtitle}
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div 
          className="flex gap-3 mb-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <motion.button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              filter === 'all'
                ? 'button-primary'
                : 'button-secondary'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {SECTION_CONTENT.projects.filterAllLabel} ({PROJECTS.length})
          </motion.button>
          <motion.button
            onClick={() => setFilter('featured')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              filter === 'featured'
                ? 'button-primary'
                : 'button-secondary'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {SECTION_CONTENT.projects.filterFeaturedLabel} ({featured.length})
          </motion.button>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {displayed.map((project) => (
            <motion.div
              key={project.id}
              className="glass-effect rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col border border-dark-200 dark:border-dark-700 hover:border-primary-500/50"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {/* Header */}
              <motion.div 
                className="p-6 border-b border-dark-200 dark:border-dark-700"
                whileHover={{ backgroundColor: 'rgba(99, 102, 241, 0.03)' }}
              >
                <motion.h3 
                  className="text-xl font-bold mb-2"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-dark-600 dark:text-dark-400 text-sm mb-4">
                  {project.description}
                </p>

                {/* Problem & Solution */}
                <motion.div 
                  className="space-y-2 text-sm"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div>
                    <span className="font-semibold text-dark-700 dark:text-dark-300">
                      Problem:
                    </span>
                    <p className="text-dark-600 dark:text-dark-400">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <span className="font-semibold text-dark-700 dark:text-dark-300">
                      Solution:
                    </span>
                    <p className="text-dark-600 dark:text-dark-400">
                      {project.solution}
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Tech Stack */}
              <div className="px-6 py-4 border-b border-dark-200 dark:border-dark-700">
                <motion.div 
                  className="flex flex-wrap gap-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {project.tech.map((tech, idx) => (
                    <motion.span
                      key={tech}
                      className="text-xs px-2 py-1 rounded bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 cursor-default"
                      whileHover={{ scale: 1.1, y: -2 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + idx * 0.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </div>

              {/* Links */}
              <motion.div 
                className="px-6 py-4 flex gap-3 mt-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary-500 hover:text-primary-600 font-medium text-sm"
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Github className="w-4 h-4" />
                    </motion.div>
                    Code
                  </motion.a>
                )}
                {project.live && (
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary-500 hover:text-primary-600 font-medium text-sm"
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.div>
                    Live
                  </motion.a>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
