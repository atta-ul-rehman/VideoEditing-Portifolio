import { Link, useParams } from 'react-router-dom'
import { articlePages } from '../data'
import { BlogArticlePage } from '../components'

export function BlogArticleRoute() {
  const { slug } = useParams()
  const article = articlePages[slug]

  if (!article) {
    return (
      <section className="contact-wrap">
        <p className="eyebrow">// Article not found</p>
        <h2>We could not find that article.</h2>
        <p>Please choose another blog topic from the main blog page.</p>
        <div className="center-cta">
          <Link className="cta-btn" to="/blog">
            Back to blog <span aria-hidden="true">-&gt;</span>
          </Link>
        </div>
      </section>
    )
  }

  return <BlogArticlePage article={article} slug={slug} />
}
