import { Link } from 'react-router-dom'
import { articlePages, blogClusters } from '../data'
import { seoBrief } from '../data'
import { splitLines } from '../components'

export function BlogPage() {
  return (
    <section className="work-page">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-right">
            <p className="eyebrow">// Blog</p>
            <h1 className="hero-title">{splitLines(['Authority', 'Content'])}</h1>
            <p className="hero-copy">
              This blog helps buyers understand services, compare options, and choose the right video editing workflow faster.
            </p>
          </div>
          <div className="hero-left">
            <div className="hero-cta">
              <p className="hero-cta-label">
                Every article is written to answer real buying questions around short-form editing, repurposing, ads, and YouTube workflows.
              </p>
              <div className="hero-meta">
                <p>
                  // Topics
                  <br />
                  {blogClusters.map((cluster) => cluster.title).join(' | ')}
                </p>
                <p>
                  // Outcome
                  <br />
                  Educate visitors and move them to inquiry.
                </p>
              </div>
              <div className="hero-cta-btns">
                <Link className="cta-btn" to="/contact">
                  Request Content Strategy <span aria-hidden="true">-&gt;</span>
                </Link>
                <Link className="cta-btn cta-btn--wa" to="/pricing">
                  See Packages <span aria-hidden="true">-&gt;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="work-section">
        <div className="work-section-head">
          <div>
            <p className="eyebrow">// Reader clarity</p>
            <h2>What this blog is meant to help you decide.</h2>
          </div>
        </div>
        <div className="cards">
          <article className="card">
            <p className="card-tag">Service fit</p>
            <p>Understand which editing service best matches your business model and content type.</p>
          </article>
          <article className="card">
            <p className="card-tag">Execution model</p>
            <p>Learn how production, revisions, and delivery cycles work before you commit.</p>
          </article>
          <article className="card">
            <p className="card-tag">Expected outcomes</p>
            <p>See how consistent publishing and better hooks improve social content performance.</p>
          </article>
        </div>
      </section>

      <section className="work-section">
        <div className="work-section-head">
          <div>
            <p className="eyebrow">// Content clusters</p>
            <h2>Blog themes that build topical authority.</h2>
          </div>
        </div>
        <div className="cards">
          {blogClusters.map((cluster) => (
            <article className="card" key={cluster.title}>
              <p className="card-tag">{cluster.title}</p>
              <p>{cluster.copy}</p>
              <div className="chip-row compact">
                {cluster.topics.map((topic) => (
                  <span key={topic}>{topic}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="work-section">
        <div className="work-section-head">
          <div>
            <p className="eyebrow">// Priority articles</p>
            <h2>Publish sequence.</h2>
          </div>
        </div>
        <div className="cards">
          {Object.entries(articlePages).map(([slug, article]) => (
            <article className="card" key={slug}>
              <p className="card-tag">{article.category}</p>
              <p>{article.title}</p>
              <div className="center-cta">
                <Link className="cta-btn" to={`/blog/${slug}`}>
                  Open Article <span aria-hidden="true">-&gt;</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-wrap">
        <p className="eyebrow">// Competitor angles to beat</p>
        <h2>Outperform generic options with system-led positioning.</h2>
        <div className="mini-cols">
          {seoBrief.competitorAngles.map((angle) => (
            <div key={angle}>
              <p className="tiny-label">Competitor angle</p>
              <p>{angle}</p>
            </div>
          ))}
        </div>
        <div className="mini-cols" style={{ marginTop: '1rem' }}>
          <div>
            <p className="tiny-label">Tone and audience</p>
            <p>{seoBrief.toneNotes.join(' ')}</p>
          </div>
          <div>
            <p className="tiny-label">Core intent questions</p>
            <p>{seoBrief.coreQuestions.join(' ')}</p>
          </div>
        </div>
      </section>
    </section>
  )
}
