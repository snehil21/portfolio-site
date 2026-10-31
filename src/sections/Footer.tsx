import { motion } from 'framer-motion'
import Container from '@components/Container'
import Section from '@components/Section'
import { SECTION_CONTENT } from '@data/sections'

export default function Footer() {
  return (
    <Section className="bg-dark-50 dark:bg-dark-950 border-t border-dark-200 dark:border-dark-800">
      <Container className="py-14 sm:py-16">
        <motion.p 
          className="text-center text-dark-600 dark:text-dark-400 text-sm font-light"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {SECTION_CONTENT.footer.copyright}
        </motion.p>
      </Container>
    </Section>
  )
}
