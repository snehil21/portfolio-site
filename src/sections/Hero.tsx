import { ArrowDown, Github, Linkedin, Twitter, Mail } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Container from '@components/Container'
import Section from '@components/Section'
import { HERO_DATA } from '@data/portfolio'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

const heroTitleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % HERO_DATA.roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <Section id="hero" className="min-h-screen flex items-center pt-20">
      <Container className="py-0">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Name */}
            <motion.div variants={itemVariants}>
              <motion.p 
                className="text-primary-500 font-semibold mb-2"
                whileHover={{ x: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                Welcome 👋
              </motion.p>
              <motion.h1 
                className="text-5xl md:text-6xl font-bold leading-tight mb-2"
                variants={heroTitleVariants}
              >
                {HERO_DATA.name}
              </motion.h1>
              <motion.div 
                className="text-2xl md:text-3xl font-semibold h-12 flex items-center overflow-hidden"
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <span className="gradient-text">{HERO_DATA.roles[currentRole]}</span>
              </motion.div>
            </motion.div>

            {/* Tagline and Intro */}
            <motion.div variants={itemVariants}>
              <p className="text-xl text-dark-600 dark:text-dark-400">
                {HERO_DATA.tagline}
              </p>
              <p className="text-dark-600 dark:text-dark-400 mt-4 leading-relaxed">
                {HERO_DATA.intro}
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-wrap gap-4 pt-4"
              variants={itemVariants}
            >
              <motion.button
                onClick={() => navigate('/projects')}
                className="button-primary group cursor-pointer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                View Projects
                <motion.span
                  className="inline-block ml-2 w-4 h-4"
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowDown className="w-4 h-4" />
                </motion.span>
              </motion.button>
              <motion.a
                href="/resume.pdf"
                className="button-secondary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
                download
              >
                Download Resume
              </motion.a>
              <motion.button
                onClick={() => navigate('/contact')}
                className="button-outline cursor-pointer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                Contact Me
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex gap-4 pt-4"
              variants={itemVariants}
            >
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors"
                title="GitHub"
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors"
                title="LinkedIn"
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors"
                title="Twitter"
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:snehil@example.com"
                className="p-2 rounded-lg hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors"
                title="Email"
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right side - Visual */}
          <motion.div 
            className="hidden md:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="relative w-64 h-64"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* Animated background */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-primary-500/5 rounded-3xl animate-glow"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-3xl"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              />
              
              {/* Avatar placeholder */}
              <motion.div 
                className="absolute inset-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <motion.span 
                  className="text-6xl font-bold text-white"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  SK
                </motion.span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center space-y-2">
            <motion.span 
              className="text-sm text-dark-600 dark:text-dark-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Scroll to explore
            </motion.span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown className="w-4 h-4 text-primary-500" />
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
