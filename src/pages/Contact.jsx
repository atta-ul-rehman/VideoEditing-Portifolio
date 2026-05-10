export function ContactSection() {
  return (
    <section className="contact-wrap">
      <p className="eyebrow">// Communication Protocol</p>
      <h2>
        Start Your
        <br />
        Next Video Project
      </h2>
      <div className="mini-cols contact-quick">
        <div>
          <p className="tiny-label">Best for</p>
          <p>Brands, agencies, creators, and ecommerce teams that need consistent short-form content.</p>
        </div>
        <div>
          <p className="tiny-label">Typical turnaround</p>
          <p>Most requests are delivered in 48 to 72 hours, based on scope and footage quality.</p>
        </div>
        <div>
          <p className="tiny-label">What to send</p>
          <p>Your footage links, target platform, style references, and weekly content goals.</p>
        </div>
      </div>
      <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
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
        <button type="submit">Request Free Strategy Call</button>
      </form>
    </section>
  )
}
