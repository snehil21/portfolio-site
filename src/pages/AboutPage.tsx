import React from 'react'
import About from '@sections/About'
import Expertise from '@sections/Expertise'
import Section from '@components/Section'
import Container from '@components/Container'

export default function AboutPage() {
  return (
    <div>
      <Section id="about">
        <About />
      </Section>
      <Section id="expertise">
        <Container>
          <Expertise />
        </Container>
      </Section>
    </div>
  )
}
