import { Link } from 'react-router-dom'

const FASHION_VIDEO = 'https://res.cloudinary.com/dd8gmorek/video/upload/v1777735897/Real_looking_Ai_fashion_commercial_d1whxa_anlmvg.mp4'
const FASHION_POSTER = 'https://res.cloudinary.com/dd8gmorek/video/upload/f_auto,q_auto,w_640,c_fill,so_1/v1777735897/Real_looking_Ai_fashion_commercial_d1whxa_anlmvg.jpg'
const FASHION_SRC = 'https://res.cloudinary.com/dd8gmorek/video/upload/f_auto,vc_auto,q_auto:low,w_640,c_limit/v1777735897/Real_looking_Ai_fashion_commercial_d1whxa_anlmvg.mp4'

export function AboutSection() {
  return (
    <section className="split about-wrap">
      <div className="portrait" aria-hidden="true">
        <video
          className="panel-video"
          src={FASHION_SRC}
          poster={FASHION_POSTER}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        ></video>
      </div>
      <article>
        <p className="eyebrow">// About ClipForge</p>
        <h2>
          AI workflows with
          <span> human editing quality</span>
        </h2>
        <p>
          We combine creative direction, generative tooling, and production systems to deliver short-form videos
          that are easier to publish, easier to scale, and aligned with brand standards.
        </p>
        <div className="mini-cols">
          <div>
            <p className="tiny-label">Tools</p>
            <p>Grok, Voe3, Midjourney, After Effects, Figma, Blender</p>
          </div>
          <div>
            <p className="tiny-label">Focus</p>
            <p>AI video systems, social content workflows, and delivery consistency.</p>
          </div>
          <div>
            <p className="tiny-label">Turnaround</p>
            <p>Most projects are delivered in 48 to 72 hours with revision support.</p>
          </div>
        </div>
        <div className="center-cta" style={{ textAlign: 'left' }}>
          <Link className="cta-btn" to="/contact">
            Discuss your project <span aria-hidden="true">-&gt;</span>
          </Link>
        </div>
      </article>
    </section>
  )
}
