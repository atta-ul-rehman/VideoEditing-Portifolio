export function AboutSection() {
  return (
    <section className="split about-wrap">
      <div className="portrait" aria-hidden="true"></div>
      <article>
        <p className="eyebrow">// Identity Core</p>
        <h2>
          Blending analog intuition with
          <span> agentic AI</span>
        </h2>
        <p>
          I merge creative direction, generative tooling, and product-first thinking to design brand
          experiences that feel premium and intentional.
        </p>
        <div className="mini-cols">
          <div>
            <p className="tiny-label">Stack</p>
            <p>Runway, Midjourney, After Effects, Figma, Blender</p>
          </div>
          <div>
            <p className="tiny-label">Focus</p>
            <p>AI video systems, logo design, digital experience direction.</p>
          </div>
        </div>
      </article>
    </section>
  )
}
