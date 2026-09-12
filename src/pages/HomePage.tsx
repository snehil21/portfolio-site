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
