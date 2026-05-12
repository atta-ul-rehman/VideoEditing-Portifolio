import { Link } from 'react-router-dom'
import './about-page.css'

const FASHION_VIDEO = 'https://res.cloudinary.com/dd8gmorek/video/upload/v1777735897/Real_looking_Ai_fashion_commercial_d1whxa_anlmvg.mp4'
const FASHION_POSTER = 'https://res.cloudinary.com/dd8gmorek/video/upload/f_auto,q_auto,w_640,c_fill,so_1/v1777735897/Real_looking_Ai_fashion_commercial_d1whxa_anlmvg.jpg'
const FASHION_SRC = 'https://res.cloudinary.com/dd8gmorek/video/upload/f_auto,vc_auto,q_auto:low,w_640,c_limit/v1777735897/Real_looking_Ai_fashion_commercial_d1whxa_anlmvg.mp4'

export function AboutSection() {
  return (
    <section className="ab-page">
      <div className="ab-inner">
      <article className="ab-content">
        <p className="ab-eyebrow">// About ClipForge</p>
        <h2 className="ab-title">
          AI speed with
          <span> premium human editorial standards</span>
        </h2>
        <p className="ab-copy">
          We combine creative direction, AI-assisted production, and proven delivery systems to produce short-form videos
          that look premium, publish faster, and stay consistent with your brand standards.
        </p>
        <p className="ab-copy">
          Portfolio items featuring real brands, venues, or public figures represent editing work only unless stated otherwise.
          Original footage, trademarks, likenesses, and source materials remain the property of their respective owners or licensors.
        </p>
        <div className="ab-grid">
          <div className="ab-card">
            <p className="tiny-label">Tools</p>
            <p>Grok, Voe3, Midjourney, After Effects, Figma, Blender</p>
          </div>
          <div className="ab-card">
            <p className="tiny-label">Focus</p>
            <p>AI video systems, social growth workflows, and consistent weekly output.</p>
          </div>
          <div className="ab-card">
            <p className="tiny-label">Turnaround</p>
            <p>Most projects are delivered in 48 to 72 hours with fast revision support.</p>
          </div>
        </div>
        <div className="ab-grid">
          <div className="ab-card">
            <p className="tiny-label">Real client reels</p>
            <p>We edited these projects for portfolio display. We do not claim to have produced or filmed the original source footage unless explicitly noted.</p>
          </div>
          <div className="ab-card">
            <p className="tiny-label">AI portfolio work</p>
            <p>Our AI sample videos are created by us using tools such as Grok and Voe3 as original AI-generated concepts, not by reusing third-party stock footage unless stated otherwise.</p>
          </div>
          <div className="ab-card">
            <p className="tiny-label">Usage and clearance</p>
            <p>Final commercial use can still depend on music, trademarks, likeness permissions, platform terms, and local law, so clients should confirm clearance for their intended market.</p>
          </div>
        </div>
        <div className="ab-cta">
          <Link className="cta-btn" to="/contact">
            Book a strategy call <span aria-hidden="true">-&gt;</span>
          </Link>
        </div>
      </article>
      <div className="ab-visual" aria-hidden="true">
        <video
          className="ab-video"
          src={FASHION_SRC}
          poster={FASHION_POSTER}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        ></video>
        <p className="ab-badge">// AI Fashion Sample</p>
      </div>
      </div>
    </section>
  )
}
