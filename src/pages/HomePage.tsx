import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '@sections/Hero'
import Expertise from '@sections/Expertise'
import GitHubStats from '@sections/GitHubStats'
import Stats from '@sections/Stats'
import Experience from '@sections/Experience'
import Skills from '@sections/Skills'
import Projects from '@sections/Projects'
import Recommendations from '@sections/Recommendations'
import Contact from '@sections/Contact'

interface HomePageProps {
  isDark: boolean
}

export default function HomePage({ isDark }: HomePageProps) {
  const location = useLocation()

  useEffect(() => {
    const sectionId = location.hash.slice(1)
    if (!sectionId) return undefined

    const frameId = window.requestAnimationFrame(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    })

    return () => window.cancelAnimationFrame(frameId)
  }, [location.hash])

  return (
    <>
      <Hero />
      <Expertise />
      <Experience />
      <Skills />
      <Projects />
      <Recommendations />
      <GitHubStats isDark={isDark} />
      <Stats isDark={isDark} />
      <Contact />
    </>
  )
}
