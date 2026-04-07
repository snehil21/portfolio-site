import Container from '@components/Container'
import Section from '@components/Section'
import { EXPERTISE_AREAS } from '@data/portfolio'

export default function Expertise() {
  return (
    <Section id="expertise" className="bg-dark-50 dark:bg-dark-800/50 py-20 sm:py-24">
      <Container>
        <h2 className="section-title">Domain Expertise</h2>
        <p className="section-subtitle mb-12">
          Specialized knowledge areas where I excel
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPERTISE_AREAS.map((area) => (
            <div
              key={area.id}
              className="glass-effect rounded-xl p-6 hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-3 gradient-text">
                {area.title}
              </h3>
              <p className="text-dark-600 dark:text-dark-400 leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
