import './contact-page.css'

export function ContactSection() {
  return (
    <section className="cp-page">
      <p className="cp-eyebrow">// Communication Protocol</p>
      <h2 className="cp-title">
        Start Your
        <br />
        Next High-Performing Video Campaign
      </h2>
      <div className="cp-grid">
        <article className="cp-card">
          <p className="cp-label">Best for</p>
          <p className="cp-copy">Brands, agencies, creators, and ecommerce teams that need reliable short-form output.</p>
        </article>
        <article className="cp-card">
          <p className="cp-label">Typical turnaround</p>
          <p className="cp-copy">Most projects ship in 48 to 72 hours, depending on scope and footage quality.</p>
        </article>
        <article className="cp-card">
          <p className="cp-label">What to send</p>
          <p className="cp-copy">Send footage links, target platforms, style references, and weekly growth goals.</p>
        </article>
      </div>
      <form className="cp-form" onSubmit={(event) => event.preventDefault()}>
        <label>
          Name
          <input type="text" placeholder="Your name" />
        </label>
        <label>
          Email
          <input type="email" placeholder="you@company.com" />
        </label>
        <label>
          Project Brief
          <textarea rows="4" placeholder="Tell us what you want to create"></textarea>
        </label>
        <button type="submit">Request My Free Strategy Call</button>
      </form>
    </section>
  )
}
