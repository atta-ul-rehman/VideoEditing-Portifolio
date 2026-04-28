export function ContactSection() {
  return (
    <section className="contact-wrap">
      <p className="eyebrow">// Communication Protocol</p>
      <h2>
        Let&apos;s Build
        <br />
        The Future
      </h2>
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
          <textarea rows="4" placeholder="Tell me what you want to create"></textarea>
        </label>
        <button type="submit">Initialize Contact</button>
      </form>
    </section>
  )
}
