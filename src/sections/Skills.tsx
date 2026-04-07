import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import Container from '@components/Container'
import Section from '@components/Section'
import { SKILLS } from '@data/portfolio'
import { SECTION_CONTENT } from '@data/sections'

const iconMap: Record<string, any> = {
  Code: Icons.Code,
  Database: Icons.Database,
  GitBranch: Icons.GitBranch,
  Zap: Icons.Zap,
  Network: Icons.Network,
  Workflow: Icons.Workflow,
  Link: Icons.Link,
  Smartphone: Icons.Smartphone,
  Palette: Icons.Palette,
  Container: Icons.Container,
  Box: Icons.Box,
  Cloud: Icons.Cloud,
  Settings: Icons.Settings,
  Search: Icons.Search,
  MessageSquare: Icons.MessageSquare,
  Activity: Icons.Activity,
  Terminal: Icons.Terminal,
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
    <Section id="skills" className="bg-dark-50 dark:bg-dark-800/50 py-20 sm:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{SECTION_CONTENT.skills.title}</h2>
          <p className="section-subtitle mb-12">
            {SECTION_CONTENT.skills.subtitle}
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {SKILLS.map((skillGroup) => {
            const IconComponent = iconMap[skillGroup.items[0]?.icon] || Icons.Code
            return (
              <motion.div
                key={skillGroup.category}
                className="glass-effect rounded-xl p-6 hover:shadow-lg transition-shadow"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <motion.h3 
                  className="text-xl font-bold mb-4 flex items-center gap-2"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <IconComponent className="w-5 h-5 text-primary-500" />
                  {skillGroup.category}
                </motion.h3>
                <motion.div
                  className="space-y-3"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {skillGroup.items.map((skill, idx) => {
                    const SkillIcon = iconMap[skill.icon] || Icons.Code
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
                            <SkillIcon className="w-5 h-5 text-primary-500 flex-shrink-0" />
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
