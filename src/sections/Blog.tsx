import Container from '@components/Container'
import Section from '@components/Section'
import { BLOG_POSTS } from '@data/portfolio'
import { ArrowRight } from 'lucide-react'

export default function Blog() {
  return (
    <Section id="blog" className="py-20 sm:py-24">
      <Container>
        <h2 className="section-title">Latest Articles</h2>
        <p className="section-subtitle mb-12">
          Sharing knowledge about backend systems and software architecture
        </p>

        <div className="space-y-6">
          {BLOG_POSTS.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-effect rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:translate-x-2 block group"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-bold group-hover:text-primary-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-dark-500 dark:text-dark-400 mt-1">
                    {post.date} • {post.readTime}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-primary-500 group-hover:translate-x-2 transition-transform" />
              </div>
              <p className="text-dark-600 dark:text-dark-400 mb-4">
                {post.preview}
              </p>
              {post.tags && (
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="https://blog.example.com" className="button-outline">
            Read All Articles
          </a>
        </div>
      </Container>
    </Section>
  )
}
