import { motion } from 'framer-motion'
import Container from '@components/Container'
import Section from '@components/Section'
import { ABOUT_DATA } from '@data/portfolio'
import { SECTION_CONTENT } from '@data/sections'
import { CheckCircle } from 'lucide-react'

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
}

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

export default function About() {
  return (
    <Section id="about" className="bg-dark-50 dark:bg-dark-800/50 py-20 sm:py-24">
      <Container>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">{SECTION_CONTENT.about.title}</h2>
            <motion.p 
              className="text-dark-600 dark:text-dark-400 leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {ABOUT_DATA.intro}
            </motion.p>
            <motion.p 
              className="text-dark-600 dark:text-dark-400 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {ABOUT_DATA.description}
            </motion.p>
          </motion.div>

          {/* Right side */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Interests */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h3 
                className="text-xl font-bold mb-4"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {SECTION_CONTENT.about.focusTitle}
              </motion.h3>
              <ul className="space-y-3">
                {ABOUT_DATA.interests.map((interest, idx) => (
                  <motion.li 
                    key={idx} 
                    className="flex items-start gap-3 group"
                    variants={listItemVariants}
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5 group-hover:text-primary-600" />
                    </motion.div>
                    <span className="text-dark-700 dark:text-dark-300 group-hover:text-dark-900 dark:group-hover:text-dark-100 transition-colors">
                      {interest}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Hobbies */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h3 
                className="text-xl font-bold mb-4"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {SECTION_CONTENT.about.hobbyTitle}
              </motion.h3>
              <ul className="space-y-3">
                {ABOUT_DATA.hobbies.map((hobby, idx) => (
                  <motion.li 
                    key={idx} 
                    className="flex items-start gap-3 group"
                    variants={listItemVariants}
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5 group-hover:text-primary-600" />
                    </motion.div>
                    <span className="text-dark-700 dark:text-dark-300 group-hover:text-dark-900 dark:group-hover:text-dark-100 transition-colors">
                      {hobby}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
