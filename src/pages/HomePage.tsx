import React from 'react'
import Hero from '@sections/Hero'
import Stats from '@sections/Stats'
import Container from '@components/Container'

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Container>
        <div className="py-20">
          <Stats />
        </div>
      </Container>
    </div>
  )
}
