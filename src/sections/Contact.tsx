import { motion } from 'framer-motion'
import Container from '@components/Container'
import Section from '@components/Section'
import { Send, Mail, Phone } from 'lucide-react'
import { useState } from 'react'
import { SECTION_CONTENT, SECTION_COPY } from '@data/sections'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <Section id="contact" className="py-20 sm:py-24">
      <Container>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title text-center">{SECTION_CONTENT.contact.title}</h2>
            <p className="section-subtitle text-center mb-12">
              {SECTION_CONTENT.contact.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div 
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Email */}
              <motion.div 
                className="glass-effect rounded-xl p-6 hover:shadow-lg border border-dark-200 dark:border-dark-700 hover:border-primary-500/50 transition-all"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div 
                  className="flex items-center gap-4 mb-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Mail className="w-6 h-6 text-primary-500" />
                  </motion.div>
                  <h3 className="text-lg font-bold">{SECTION_CONTENT.contact.emailLabel}</h3>
                </motion.div>
                <motion.a
                  href={`mailto:${SECTION_COPY.contact.email}`}
                  className="text-dark-600 dark:text-dark-400 hover:text-primary-500 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {SECTION_COPY.contact.email}
                </motion.a>
              </motion.div>

              {/* Phone */}
              <motion.div 
                className="glass-effect rounded-xl p-6 hover:shadow-lg border border-dark-200 dark:border-dark-700 hover:border-primary-500/50 transition-all"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div 
                  className="flex items-center gap-4 mb-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <motion.div
                    animate={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Phone className="w-6 h-6 text-primary-500" />
                  </motion.div>
                  <h3 className="text-lg font-bold">{SECTION_CONTENT.contact.phoneLabel}</h3>
                </motion.div>
                <motion.a
                  href={`tel:${SECTION_COPY.contact.phone.replace(/\s/g, '')}`}
                  className="text-dark-600 dark:text-dark-400 hover:text-primary-500 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {SECTION_COPY.contact.phone}
                </motion.a>
              </motion.div>

              {/* Location */}
              <motion.div 
                className="glass-effect rounded-xl p-6 hover:shadow-lg border border-dark-200 dark:border-dark-700 hover:border-primary-500/50 transition-all"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div 
                  className="flex items-center gap-4 mb-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <motion.span 
                    className="text-2xl"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    📍
                  </motion.span>
                  <h3 className="text-lg font-bold">{SECTION_CONTENT.contact.locationLabel}</h3>
                </motion.div>
                <p className="text-dark-600 dark:text-dark-400">
                  {SECTION_COPY.contact.location}
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              className="glass-effect rounded-xl p-6 border border-dark-200 dark:border-dark-700"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block text-sm font-medium mb-2">
                    {SECTION_CONTENT.contact.nameLabel}
                  </label>
                  <motion.input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-dark-100 dark:bg-dark-800 border border-dark-300 dark:border-dark-600 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                    placeholder="Your name"
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.35 }}
                >
                  <label className="block text-sm font-medium mb-2">
                    {SECTION_CONTENT.contact.emailLabel}
                  </label>
                  <motion.input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-dark-100 dark:bg-dark-800 border border-dark-300 dark:border-dark-600 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                    placeholder="your@email.com"
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <label className="block text-sm font-medium mb-2">
                    {SECTION_CONTENT.contact.messageLabel}
                  </label>
                  <motion.textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-dark-100 dark:bg-dark-800 border border-dark-300 dark:border-dark-600 focus:ring-2 focus:ring-primary-500 outline-none transition-all resize-none"
                    placeholder="Your message here..."
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full button-primary flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <motion.div
                    animate={submitted ? { rotate: 360 } : { rotate: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Send className="w-4 h-4" />
                  </motion.div>
                  <motion.span
                    initial={false}
                    animate={submitted ? { scale: 1.1 } : { scale: 1 }}
                  >
                    {submitted ? SECTION_CONTENT.contact.sentButtonText : SECTION_CONTENT.contact.sendButtonText}
                  </motion.span>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
