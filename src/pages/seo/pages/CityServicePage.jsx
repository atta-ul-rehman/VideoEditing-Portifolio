import { Link, useParams } from 'react-router-dom'
import { getCityName, servicePages } from '../data'
import { ServicePageLayout } from '../components'

export function CityServicePage() {
  const { city, service } = useParams()
  const cityName = getCityName(city)
  const page = servicePages[service]

  if (!cityName || !page) {
    return (
      <section className="contact-wrap">
        <p className="eyebrow">// Location page not found</p>
        <h2>We could not find that location service page.</h2>
        <p>Please choose another service or contact us for a custom quote.</p>
        <div className="center-cta">
          <Link className="cta-btn" to="/contact">
            Contact us <span aria-hidden="true">-&gt;</span>
          </Link>
        </div>
      </section>
    )
  }

  const localizedPage = {
    ...page,
    title: `${page.title} - ${cityName}`,
    intro: `${page.intro} This page targets clients in ${cityName} while supporting remote collaboration for global teams.`,
    summary: `${page.summary} Localized for ${cityName} search intent and business workflows.`,
  }

  return <ServicePageLayout page={localizedPage} slug={service} />
}
