import { Link } from 'react-router-dom'
import { pricingPlans } from '../data'
import '../pricing-page.css'

export function PricingPage() {
  return (
    <section className="pp-page">
      <section className="pp-hero">
        <div className="pp-hero__inner">
          <div>
            <p className="pp-kicker">// Pricing</p>
            <h1 className="pp-title">
              <span>Simple</span>
              <span>Pricing</span>
            </h1>
            <p className="pp-copy">
              Use this page to explain productized offers, per-minute AI editing, and recurring packages for brands and creators.
            </p>
          </div>

          <div className="pp-panel">
            <p>Clear pricing helps buyers move faster. Keep offers easy to understand and easy to request.</p>
            <div className="pp-meta">
              <p>
                // Delivery model
                <br />
                Per project, content packs, or monthly support
              </p>
              <p>
                // Best for
                <br />
                Brands, creators, agencies, and ecommerce teams
              </p>
            </div>
            <div className="pp-ctas">
              <Link className="pp-btn pp-btn--primary" to="/contact">
                Request Custom Quote <span aria-hidden="true">-&gt;</span>
              </Link>
              <Link className="pp-btn pp-btn--ghost" to="/work">
                View Recent Work <span aria-hidden="true">-&gt;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="pp-divider" />

      <section className="pp-section">
        <div className="pp-head">
          <h2>Packages and starting points</h2>
          <small>Built for fast buying decisions</small>
        </div>

        <div className="pp-grid">
          {pricingPlans.map((plan) => (
            <article className="pp-plan" key={plan.title}>
              <h3>{plan.title}</h3>
              <p>{plan.copy}</p>
              {plan.items ? (
                <ul className="pp-list">
                  {plan.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <div className="pp-divider" />

      <section className="pp-bottom">
        <div className="pp-note">
          <p>
            Final pricing depends on footage quality, volume, edit complexity, turnaround speed, and revision rounds.
            Share your goals and references for an exact quote.
          </p>
        </div>
      </section>
    </section>
  )
}
