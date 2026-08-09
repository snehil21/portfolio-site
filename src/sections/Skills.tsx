import { motion } from 'framer-motion'
import Container from '@components/Container'
import Section from '@components/Section'
import { SKILLS } from '@data/portfolio'
import { SECTION_CONTENT } from '@data/sections'
import { SKILL_ICON_MAP } from '@utils/skillIcons'

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
    transition: { duration: 0.5 },
  },
}

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
  hover: {
    scale: 1.05,
    y: -5,
    transition: { duration: 0.3 },
  },
}

export default function Skills() {
  return (
    <Section id="skills" className="bg-dark-50 dark:bg-dark-800/50 py-14 sm:py-20 lg:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{SECTION_CONTENT.skills.title}</h2>
          <p className="section-subtitle mb-8 sm:mb-12">
            {SECTION_CONTENT.skills.subtitle}
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {SKILLS.map((skillGroup) => {
            const IconComponent = SKILL_ICON_MAP[skillGroup.icon]
            return (
              <motion.div
                key={skillGroup.category}
                className="glass-effect rounded-xl p-4 sm:p-6 hover:shadow-lg transition-shadow"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <motion.h3 
                  className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <IconComponent
                    aria-hidden="true"
                    className="w-5 h-5 text-primary-500"
                  />
                  {skillGroup.category}
                </motion.h3>
                <motion.div
                  className="space-y-3"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {skillGroup.items.map((skill, idx) => {
                    const SkillIcon = SKILL_ICON_MAP[skill.icon]
                    return (
                      <motion.div
                        key={skill.name}
                        className="p-3 rounded-lg bg-gradient-to-r from-primary-500/10 to-transparent hover:from-primary-500/20 dark:from-primary-400/10 dark:to-transparent border border-primary-500/20 hover:border-primary-500/40 transition-all cursor-default"
                        variants={skillVariants}
                        whileHover="hover"
                        transition={{ delay: idx * 0.05 }}
                      >
                        <div className="flex items-center gap-3">
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            <SkillIcon
                              aria-hidden="true"
                              className="w-5 h-5 text-primary-500 flex-shrink-0"
                            />
                          </motion.div>
                          <span className="font-medium text-sm">{skill.name}</span>
                        </div>
                      </motion.div>
                    )
                  })}
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </Section>
  )
}
