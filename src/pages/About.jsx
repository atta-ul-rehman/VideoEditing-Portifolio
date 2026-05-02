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
            <p>Grok, Voe3, Midjourney, After Effects, Figma, Blender</p>
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
