import About from '@sections/About'
import Stats from '@sections/Stats'

interface AboutPageProps {
  isDark: boolean
}

export default function AboutPage({ isDark }: AboutPageProps) {
  return (
    <>
      <About />
      <Stats isDark={isDark} />
    </>
  )
}
