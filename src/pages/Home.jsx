import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const mediaSrc = (fileName) => `/${encodeURIComponent(fileName)}`

const homeVideos = {
  neural: 'This perfume ad was made completely with AI ✨😱 [F1yRHMKjJOo].mp4',
  nike: 'Fashion_Model_Shoot_male.mp4',
  system: 'This UGC Ad Was Made Without a Camera 😮📱 [trRW92vO8YA].mp4',
  void: 'Dainosour Extinction Video.mp4',
  sony: 'Urdu female modal AI song.mp4',
  insight: 'Tiny creatures working.mp4',
  prada: 'BlackBeared_Pirate_1716.mp4',
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
          src={mediaSrc('Real_looking_Ai_fashion_commercial.mp4')}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          onClick={() => openPreview('Real_looking_Ai_fashion_commercial.mp4', 'Real AI Clothing Commercial')}
        ></video>
        <div className="hero-aurora" aria-hidden="true"></div>
        <h1 className="hero-title">
          <span className="white">AI Motion.</span>
          <span className="green">Human</span>
          <span className="green">Strategy.</span>
        </h1>
        <div className="hero-meta">
          <p>
            // Role
            <br />
            Senior Creative Technologist
          </p>
          <p>
            // Status
            <br />
            Available for select visionary projects.
          </p>
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
            <video className="panel-video interactive-video" src={mediaSrc(homeVideos.neural)} autoPlay loop muted playsInline preload="metadata" onClick={() => openPreview(homeVideos.neural, 'Neural Echoes / AI Ad')}></video>
            <p className="meta">W-01 / Generative Campaign</p>
            <h3>Neural Echoes</h3>
          </article>
          <article className="mosaic-card logo-block no-overlay">
            <video className="panel-video interactive-video" src={mediaSrc(homeVideos.nike)} autoPlay loop muted playsInline preload="metadata" onClick={() => openPreview(homeVideos.nike, 'Client Alpha / Fashion AI')}></video>
            <p className="meta">W-02 / Client</p>
            <h3>Client Alpha</h3>
          </article>
          <article className="mosaic-card screen-block">
            <video className="panel-video interactive-video" src={mediaSrc(homeVideos.system)} autoPlay loop muted playsInline preload="metadata" onClick={() => openPreview(homeVideos.system, 'System 04 / UGC Ad')}></video>
            <p className="meta">W-03 / System</p>
            <h3>System 04</h3>
          </article>
          <article className="mosaic-card space-block">
            <video className="panel-video interactive-video" src={mediaSrc(homeVideos.void)} autoPlay loop muted playsInline preload="metadata" onClick={() => openPreview(homeVideos.void, 'Void Space / Cinematic')}></video>
            <p className="meta">W-04 / Experimental</p>
            <h3>Void Space</h3>
          </article>
          <article className="mosaic-card logo-block">
            <video className="panel-video interactive-video" src={mediaSrc(homeVideos.sony)} autoPlay loop muted playsInline preload="metadata" onClick={() => openPreview(homeVideos.sony, 'Client Beta / Music Video')}></video>
            <p className="meta">W-05 / Client</p>
            <h3>Client Beta</h3>
          </article>
          <article className="mosaic-card text-block">
            <video className="panel-video interactive-video" src={mediaSrc(homeVideos.insight)} autoPlay loop muted playsInline preload="metadata" onClick={() => openPreview(homeVideos.insight, 'Tiny Creatures / Concept')}></video>
            <p className="meta">W-06 / Insight</p>
            <p>Creating AI-driven motion identities and high-impact digital narratives.</p>
          </article>
          <article className="mosaic-card logo-block">
            <video className="panel-video interactive-video" src={mediaSrc(homeVideos.prada)} autoPlay loop muted playsInline preload="metadata" onClick={() => openPreview(homeVideos.prada, 'Client Gamma / Fashion Commercial')}></video>
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
            src={mediaSrc('Hi_Tech_Father_Day1.mp4')}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            onClick={() => openPreview('Hi_Tech_Father_Day1.mp4', 'Identity Core / Pirate Character')}
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
          src={mediaSrc('Using AI Try Clothes Swap.mp4')}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          onClick={() => openPreview('Using AI Try Clothes Swap.mp4', 'GRWM / AI Fashion')}
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
