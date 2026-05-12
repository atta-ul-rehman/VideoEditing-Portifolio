import { Link } from 'react-router-dom'
import { articlePages, blogClusters } from '../data'
import { seoBrief } from '../data'
import { splitLines } from '../components'
import '../blog-pages.css'

export function BlogPage() {
  return (
    <section className="bp-page">
      <section className="bp-hero">
        <div className="bp-hero__inner">
          <div>
            <p className="bp-eyebrow">// Blog</p>
            <h1 className="bp-title">{splitLines(['Authority', 'Content'])}</h1>
            <p className="bp-copy">
              This blog helps buyers evaluate options quickly and choose the right video editing workflow with confidence.
            </p>
          </div>
          <div className="bp-panel">
              <p className="bp-panel__label">
                Every guide is built around real buying questions on short-form editing, repurposing, ads, and YouTube workflows.
              </p>
              <div className="bp-meta">
                <p>
                  // Topics
                  <br />
                  {blogClusters.map((cluster) => cluster.title).join(' | ')}
                </p>
                <p>
                  // Outcome
                  <br />
                  Build trust and move qualified visitors to inquiry.
                </p>
              </div>
              <div className="bp-ctas">
                <Link className="bp-btn bp-btn--primary" to="/contact">
                  Request a Content Strategy Call <span aria-hidden="true">-&gt;</span>
                </Link>
                <Link className="bp-btn bp-btn--ghost" to="/pricing">
                  View Pricing Options <span aria-hidden="true">-&gt;</span>
                </Link>
              </div>
          </div>
        </div>
      </section>

      <div className="bp-divider" />

      <section className="bp-section">
        <div className="bp-head">
          <div>
            <p className="bp-eyebrow">// Reader clarity</p>
            <h2>What this blog helps you decide faster.</h2>
          </div>
        </div>
        <div className="bp-grid">
          <article className="bp-card">
            <p className="bp-tag">Service fit</p>
            <p>Understand which editing service best matches your business model and content type.</p>
          </article>
          <article className="bp-card">
            <p className="bp-tag">Execution model</p>
            <p>Learn how production, revisions, and delivery cycles work before you commit.</p>
          </article>
          <article className="bp-card">
            <p className="bp-tag">Expected outcomes</p>
            <p>Learn how consistent publishing and stronger hooks improve content performance.</p>
          </article>
        </div>
      </section>

      <div className="bp-divider" />

      <section className="bp-section">
        <div className="bp-head">
          <div>
            <p className="bp-eyebrow">// Content clusters</p>
            <h2>Content pillars that build trust and authority.</h2>
          </div>
        </div>
        <div className="bp-grid">
          {blogClusters.map((cluster) => (
            <article className="bp-card" key={cluster.title}>
              <p className="bp-tag">{cluster.title}</p>
              <p>{cluster.copy}</p>
              <div className="bp-chip-row">
                {cluster.topics.map((topic) => (
                  <span key={topic}>{topic}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="bp-divider" />

      <section className="bp-section">
        <div className="bp-head">
          <div>
            <p className="bp-eyebrow">// Priority articles</p>
            <h2>Start with these high-intent guides.</h2>
          </div>
        </div>
        <div className="bp-grid">
          {Object.entries(articlePages).map(([slug, article]) => (
            <article className="bp-card" key={slug}>
              <p className="bp-tag">{article.category}</p>
              <p>{article.title}</p>
              <div style={{ marginTop: '0.8rem' }}>
                <Link className="bp-btn bp-btn--ghost" to={`/blog/${slug}`}>
                  Read Guide <span aria-hidden="true">-&gt;</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="bp-divider" />

      <section className="bp-section">
        <div className="bp-head">
          <div>
            <p className="bp-eyebrow">// Competitor angles to beat</p>
            <h2>Outperform generic options with a system-led offer.</h2>
          </div>
        </div>
        <div className="bp-grid">
          {seoBrief.competitorAngles.map((angle) => (
            <article className="bp-card" key={angle}>
              <p className="bp-tag">Competitor angle</p>
              <p>{angle}</p>
            </article>
          ))}
          <article className="bp-card">
            <p className="bp-tag">Tone and audience</p>
            <p>{seoBrief.toneNotes.join(' ')}</p>
          </article>
          <article className="bp-card">
            <p className="bp-tag">Core intent questions</p>
            <p>{seoBrief.coreQuestions.join(' ')}</p>
          </article>
        </div>
      </section>
    </section>
  )
}
