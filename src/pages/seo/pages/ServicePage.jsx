import { Link, useParams } from 'react-router-dom'
import { servicePages } from '../data'
import { ServicePageLayout } from '../components'

export function ServicePage() {
  const { slug } = useParams()
  const page = servicePages[slug]

  if (!page) {
    return (
      <section className="contact-wrap">
        <p className="eyebrow">// Service not found</p>
        <h2>We could not find that service page.</h2>
        <p>Please choose another service or contact us for a custom quote.</p>
        <div className="center-cta">
          <Link className="cta-btn" to="/contact">
            Contact us <span aria-hidden="true">-&gt;</span>
          </Link>
        </div>
      </section>
    )
  }

  return <ServicePageLayout page={page} slug={slug} />
}
