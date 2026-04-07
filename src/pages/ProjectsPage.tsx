import React from 'react'
import Projects from '@sections/Projects'
import Skills from '@sections/Skills'
import Section from '@components/Section'
import Container from '@components/Container'

export default function ProjectsPage() {
  return (
    <div>
      <Section id="skills">
        <Container>
          <div className="py-12">
            <Skills />
          </div>
        </Container>
      </Section>
      <Section id="projects">
        <Container>
          <Projects />
        </Container>
      </Section>
    </div>
  )
}
