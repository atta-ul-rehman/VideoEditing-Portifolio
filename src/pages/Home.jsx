import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CLOUDINARY_VIDEO_RE = /^https?:\/\/res\.cloudinary\.com\/([^/]+)\/video\/upload\/(.+)$/i

const buildCloudinaryPoster = (fileName) => {
  const match = fileName.match(CLOUDINARY_VIDEO_RE)
  if (!match) {
    return ''
  }
  const [, cloudName, publicPath] = match
  const posterPath = publicPath.replace(/\.[^/.]+$/, '.jpg')
  return `https://res.cloudinary.com/${cloudName}/video/upload/f_auto,q_auto,w_640,c_fill,so_1/${posterPath}`
}

const mediaSrc = (fileName) => (/^https?:\/\//i.test(fileName) ? fileName : `/${encodeURIComponent(fileName)}`)

const homeVideos = {
  neural: 'https://res.cloudinary.com/dd8gmorek/video/upload/v1777735901/This_perfume_ad_was_made_completely_with_AI_F1yRHMKjJOo_bsklpr_upgyl5.mp4',
  nike: 'https://res.cloudinary.com/dd8gmorek/video/upload/v1777735808/Fashion_Model_Shoot_male_fcw7uu_2_fodefe.mp4',
  system: 'https://res.cloudinary.com/dd8gmorek/video/upload/v1777735894/This_UGC_Ad_Was_Made_Without_a_Camera_trRW92vO8YA_actynk_bdfmgj.mp4',
  void: 'https://res.cloudinary.com/dd8gmorek/video/upload/v1777376863/Dainosour_Extinction_Video_d2gynn.mp4',
  sony: 'https://res.cloudinary.com/dd8gmorek/video/upload/v1777376889/Urdu_female_modal_AI_song_b4nfzj.mov',
  insight: 'https://res.cloudinary.com/dd8gmorek/video/upload/v1777376867/Tiny_Creature_making_pasta_tbvetu.mp4',
  prada: 'https://res.cloudinary.com/dd8gmorek/video/upload/v1777376849/BlackBeared_Pirate_1716_pltsqv.mp4',
}

export function HomeSection() {
  const navigate = useNavigate()
  const [previewVideo, setPreviewVideo] = useState(null)

  const openPreview = (file, title) => {
    setPreviewVideo({ src: mediaSrc(file), title })
  }

  const closePreview = () => {
    setPreviewVideo(null)
  }

  return (
    <>
      <section className="hero home-hero">
        <video
          className="hero-bg-video interactive-video"
          src={mediaSrc('https://res.cloudinary.com/dd8gmorek/video/upload/v1777735897/Real_looking_Ai_fashion_commercial_d1whxa_anlmvg.mp4')}
          poster={buildCloudinaryPoster('https://res.cloudinary.com/dd8gmorek/video/upload/v1777735897/Real_looking_Ai_fashion_commercial_d1whxa_anlmvg.mp4')}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          onClick={() => openPreview('https://res.cloudinary.com/dd8gmorek/video/upload/v1777735897/Real_looking_Ai_fashion_commercial_d1whxa_anlmvg.mp4', 'Real AI Clothing Commercial')}
        ></video>
        <div className="hero-aurora" aria-hidden="true"></div>
        <div className="hero-content">
          <div className="hero-right">
            <h1 className="hero-title">
              <span className="white">Your Brand.</span>
              <span className="green">Cinematic</span>
              <span className="green2">AI Video.</span>
            </h1>
          </div>
          <div className="hero-left">
            <div className="hero-cta">
              <p className="hero-cta-label">We produce scroll-stopping AI video ads — brand films, product spots &amp; UGC content — delivered fast, at a fraction of traditional cost.</p>
              <div className="hero-meta">
                <p>
                  // No Camera. No Crew.
                  <br />
                  Just results that convert.
                </p>
                <p>
                  // Status
                  <br />
                  Available for select visionary projects.
                </p>
              </div>
              <div className="hero-cta-btns">
                <button className="cta-btn" onClick={() => navigate('/work')}>
                  View AI Films <span aria-hidden="true">↗</span>
                </button>
                <a
                  className="cta-btn cta-btn--wa"
                  href="https://wa.me/923163919633"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="marquee home-marquee" aria-label="studio themes">
        <div>
          NEO-INDUSTRIAL BRUTALISM * AGENTIC AI WORKFLOWS * CREATIVE TECHNOLOGY * NEO-INDUSTRIAL BRUTALISM *
        </div>
      </section>

      <section className="home-works">
        <div className="section-head">
          <h2>Selected Works</h2>
          <p>// Archive 2024 - 2026</p>
        </div>
        <div className="works-mosaic">
          <article className="mosaic-card featured no-overlay">
            <video className="panel-video interactive-video" src={mediaSrc(homeVideos.neural)} poster={buildCloudinaryPoster(homeVideos.neural)} autoPlay loop muted playsInline preload="metadata" onClick={() => openPreview(homeVideos.neural, 'Neural Echoes / AI Ad')}></video>
            <p className="meta">W-01 / Generative Campaign</p>
            <h3>Neural Echoes</h3>
          </article>
          <article className="mosaic-card logo-block no-overlay">
            <video className="panel-video interactive-video" src={mediaSrc(homeVideos.nike)} poster={buildCloudinaryPoster(homeVideos.nike)} autoPlay loop muted playsInline preload="metadata" onClick={() => openPreview(homeVideos.nike, 'Client Alpha / Fashion AI')}></video>
            <p className="meta">W-02 / Client</p>
            <h3>Client Alpha</h3>
          </article>
          <article className="mosaic-card screen-block">
            <video className="panel-video interactive-video" src={mediaSrc(homeVideos.system)} poster={buildCloudinaryPoster(homeVideos.system)} autoPlay loop muted playsInline preload="metadata" onClick={() => openPreview(homeVideos.system, 'System 04 / UGC Ad')}></video>
            <p className="meta">W-03 / System</p>
            <h3>System 04</h3>
          </article>
          <article className="mosaic-card space-block">
            <video className="panel-video interactive-video" src={mediaSrc(homeVideos.void)} poster={buildCloudinaryPoster(homeVideos.void)} autoPlay loop muted playsInline preload="metadata" onClick={() => openPreview(homeVideos.void, 'Void Space / Cinematic')}></video>
            <p className="meta">W-04 / Experimental</p>
            <h3>Void Space</h3>
          </article>
          <article className="mosaic-card logo-block">
            <video className="panel-video interactive-video" src={mediaSrc(homeVideos.sony)} poster={buildCloudinaryPoster(homeVideos.sony)} autoPlay loop muted playsInline preload="metadata" onClick={() => openPreview(homeVideos.sony, 'Client Beta / Music Video')}></video>
            <p className="meta">W-05 / Client</p>
            <h3>Client Beta</h3>
          </article>
          <article className="mosaic-card text-block">
            <video className="panel-video interactive-video" src={mediaSrc(homeVideos.insight)} poster={buildCloudinaryPoster(homeVideos.insight)} autoPlay loop muted playsInline preload="metadata" onClick={() => openPreview(homeVideos.insight, 'Tiny Creatures / Concept')}></video>
            <p className="meta">W-06 / Insight</p>
            <p>Creating AI-driven motion identities and high-impact digital narratives.</p>
          </article>
          <article className="mosaic-card logo-block">
            <video className="panel-video interactive-video" src={mediaSrc(homeVideos.prada)} poster={buildCloudinaryPoster(homeVideos.prada)} autoPlay loop muted playsInline preload="metadata" onClick={() => openPreview(homeVideos.prada, 'Client Gamma / Fashion Commercial')}></video>
            <p className="meta">W-07 / Client</p>
            <h3>Client Gamma</h3>
          </article>
        </div>
        <div className="center-cta">
          <button type="button" onClick={() => navigate('/work')}>
            View Full Archive
          </button>
        </div>
      </section>

      <section className="split about-wrap home-identity">
        <div className="portrait" aria-hidden="true">
          <video
            className="panel-video interactive-video"
            src={mediaSrc('https://res.cloudinary.com/dd8gmorek/video/upload/v1777376877/Hi_Tech_Father_Day1_ppa6ut.mp4')}
            poster={buildCloudinaryPoster('https://res.cloudinary.com/dd8gmorek/video/upload/v1777376877/Hi_Tech_Father_Day1_ppa6ut.mp4')}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            onClick={() => openPreview('https://res.cloudinary.com/dd8gmorek/video/upload/v1777376877/Hi_Tech_Father_Day1_ppa6ut.mp4', 'Identity Core / Pirate Character')}
          ></video>
        </div>
        <article>
          <p className="eyebrow">// Identity Core</p>
          <h2>
            Blending analog intuition with
            <span> agentic AI</span>
          </h2>
          <p>
            I architect digital experiences that refuse to be ignored. By combining raw brutalist aesthetics
            with cutting-edge generative models, I create interfaces that feel alive, unpredictable, and deeply
            human.
          </p>
          <div className="mini-cols">
            <div>
              <p className="tiny-label">Stack</p>
              <p>Grok, VO3, Runway, Midjourney, Blender, Figma, After Effects, Python</p>
            </div>
            <div>
              <p className="tiny-label">Focus</p>
              <p>Creative direction, AI integration, motion design, system architecture.</p>
            </div>
          </div>
        </article>
      </section>

      <section className="home-contact-cta">
        <video
          className="panel-video interactive-video"
          src={mediaSrc('https://res.cloudinary.com/dd8gmorek/video/upload/v1777736325/Using_AI_Try_Clothes_Swap_zemyo3_2_tmdtza.mp4')}
          poster={buildCloudinaryPoster('https://res.cloudinary.com/dd8gmorek/video/upload/v1777736325/Using_AI_Try_Clothes_Swap_zemyo3_2_tmdtza.mp4')}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          onClick={() => openPreview('https://res.cloudinary.com/dd8gmorek/video/upload/v1777736325/Using_AI_Try_Clothes_Swap_zemyo3_2_tmdtza.mp4', 'GRWM / AI Fashion')}
        ></video>
        <p className="eyebrow">// Communication Protocol</p>
        <h2>
          Let&apos;s Build
          <br />
          The Future
        </h2>
        <p className="bg-word" aria-hidden="true">
          Initiate
        </p>
        <button type="button" onClick={() => navigate('/contact')}>
          Initialize Contact
        </button>
      </section>

      <section className="home-bottom-nav" aria-label="quick navigation">
        <button type="button" onClick={() => navigate('/')}>Index</button>
        <button type="button" onClick={() => navigate('/work')}>Work</button>
        <button type="button" onClick={() => navigate('/about')}>About</button>
        <button type="button" onClick={() => navigate('/contact')}>Contact</button>
      </section>

      <section className="mobile-home-extras">
        <div className="capability-grid">
          <h2>What I Build</h2>
          <div className="cards">
            <article className="card">
              <p className="card-tag">AI Videos</p>
              <p>Cinematic brand content, launch teasers, social loops, and motion storytelling.</p>
            </article>
            <article className="card">
              <p className="card-tag">Logos + Identity</p>
              <p>Logo systems, wordmarks, iconography, and animated identity expressions.</p>
            </article>
            <article className="card">
              <p className="card-tag">Design Systems</p>
              <p>Conversion-focused landing pages and product visual systems for AI brands.</p>
            </article>
          </div>
        </div>

        <div className="process">
          <h2>How I Work</h2>
        <ol>
          <li>
            <span>01</span>
            <p>Discovery: Align brand goals with execution strategy.</p>
          </li>
          <li>
            <span>02</span>
            <p>Prototype: Rapid concepting with AI-assisted visual exploration.</p>
          </li>
          <li>
            <span>03</span>
            <p>Production: Deliver polished assets optimized for web and social.</p>
          </li>
          <li>
            <span>04</span>
            <p>Evolution: Extend the system as your product and audience scale.</p>
          </li>
        </ol>
        </div>
      </section>

      {previewVideo && (
        <div className="video-preview-overlay" onClick={closePreview}>
          <div className="video-preview-modal" onClick={(event) => event.stopPropagation()}>
            <div className="video-preview-head">
              <p>{previewVideo.title}</p>
              <button type="button" onClick={closePreview}>Close</button>
            </div>
            <video src={previewVideo.src} controls autoPlay playsInline preload="metadata"></video>
          </div>
        </div>
      )}
    </>
  )
}
