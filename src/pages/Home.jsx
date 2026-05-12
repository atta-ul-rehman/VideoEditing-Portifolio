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
  neural: 'https://res.cloudinary.com/dd8gmorek/video/upload/v1778445573/Fawad_Khan_03_jmcc6h.mp4',
  nike: 'https://res.cloudinary.com/dd8gmorek/video/upload/v1778445595/Erica_s_Robin_reel_lk1ssg.mp4',
  system: 'https://res.cloudinary.com/dd8gmorek/video/upload/v1777735894/This_UGC_Ad_Was_Made_Without_a_Camera_trRW92vO8YA_actynk_bdfmgj.mp4',
  void: 'https://res.cloudinary.com/dd8gmorek/video/upload/v1778446502/Luxury-Kitchen-DHA-Raya-Interior-Video-Reel_npidtr.mp4',
  sony: 'https://res.cloudinary.com/dd8gmorek/video/upload/v1777376889/Urdu_female_modal_AI_song_b4nfzj.mov',
  insight: 'https://res.cloudinary.com/dd8gmorek/video/upload/v1778447435/Belco-Restaurant-Cinematic-Reel-AI-Edited_hnauf0.mp4',
  prada: 'https://res.cloudinary.com/dd8gmorek/video/upload/v1777735901/This_perfume_ad_was_made_completely_with_AI_F1yRHMKjJOo_bsklpr_upgyl5.mp4',
}

const coreServices = [
  {
    title: 'Short Form Video Editing',
    copy: 'Reels, shorts, TikToks, and vertical content made for retention and reach.',
    path: '/services/short-form-video-editing',
  },
  {
    title: 'Podcast Repurposing',
    copy: 'One podcast turned into multiple clips, reels, and social-ready assets.',
    path: '/services/podcast-repurposing',
  },
  {
    title: 'Ecommerce Video Editing',
    copy: 'Product ads, UGC, and paid social edits for brands that want conversions.',
    path: '/services/ecommerce-video-editing',
  },
  {
    title: 'Faceless YouTube Editing',
    copy: 'Automation, story, and documentary-style editing for long-term channels.',
    path: '/services/faceless-youtube-editing',
  },
  {
    title: 'Reels Editing',
    copy: 'Instagram-ready edits with stronger hooks, captions, and pacing.',
    path: '/services/reels-editing',
  },
]

const renderTitleWithAI = (title) =>
  title.split(/(AI)/g).map((part, index) => (
    part === 'AI' ? <span key={`${title}-ai-${index}`} className="ai-word">AI</span> : part
  ))

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
          className="hero-bg-video"
          src={mediaSrc('https://res.cloudinary.com/dd8gmorek/video/upload/v1778445573/Fawad_Khan_03_jmcc6h.mp4')}
          poster={buildCloudinaryPoster('https://res.cloudinary.com/dd8gmorek/video/upload/v1778445573/Fawad_Khan_03_jmcc6h.mp4')}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        ></video>
        <div className="hero-aurora" aria-hidden="true"></div>
        <div className="hero-content hero-content--split">
          <div className="hero-main hero-main--left">
            <p className="hero-kicker">Scale Organically</p>
            <div className="hero-title-frame">
              <h1 className="hero-title">
                <span className="white">Crafting content that</span>
                <span className="green hero-money-pill">actually makes money</span>
                <span className="green2">for brands and creators</span>
              </h1>
            </div>
            <p className="hero-title-note">We grow personal brands by 2-5x and build inbound and outbound lead generation systems for founders and online service providers in 90-120 days.</p>
            <div className="hero-main-cta" aria-label="primary actions">
              <button className="cta-btn" onClick={() => navigate('/contact')}>
                Get Started
              </button>
              <button className="cta-btn cta-btn--ghost" onClick={() => navigate('/work')}>
                How We Do It <span aria-hidden="true">→</span>
              </button>
            </div>
            <div className="hero-proof-strip" aria-label="studio proof points">
              <span>200+ Reels Delivered</span>
              <span>Real Client Work + AI Concepts</span>
              <span>48 to 72 Hour Turnaround</span>
            </div>
            <details className="hero-offer-details">
              <summary>Show Offer Details</summary>
              <div className="hero-cta">
                <p className="hero-cta-label">Stop losing reach with inconsistent content. Get a reliable editing partner that delivers conversion-focused Reels, Shorts, TikToks, and ad creatives every week.</p>
                <div className="hero-meta">
                  <p>
                    // Best Fit
                    <br />
                    Agencies, ecommerce brands, creators, coaches.
                  </p>
                  <p>
                    // Delivery
                    <br />
                    Fast turnaround with revision support.
                  </p>
                </div>
                <div className="hero-cta-btns">
                  <button className="cta-btn" onClick={() => navigate('/contact')}>
                    Get Your Free 7-Day Content Plan <span aria-hidden="true">↗</span>
                  </button>
                </div>
              </div>
            </details>
          </div>

          <div className="hero-side-video" aria-label="featured hero reel">
            <div className="hero-feature-video hero-feature-video--portrait">
              <video
                className="interactive-video"
                src={mediaSrc(homeVideos.neural)}
                poster={buildCloudinaryPoster(homeVideos.neural)}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                onClick={() => openPreview(homeVideos.neural, 'Featured Hero Reel')}
              ></video>
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
          <h2>Services Built to Grow Revenue</h2>
          <p>// Choose the workflow that fits your growth stage</p>
        </div>
        <div className="cards">
          {coreServices.map((service) => (
            <article className="card" key={service.title}>
              <p className="card-tag">{service.title}</p>
              <p>{service.copy}</p>
              <div className="center-cta">
                <button type="button" onClick={() => navigate(service.path)}>
                  See Service Details
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="home-works">
        <div className="section-head">
          <h2>Proof in Performance</h2>
          <p>// Real client edits and AI concepts built for retention and response</p>
        </div>
        <div className="works-mosaic">
          <article className="mosaic-card featured no-overlay">
            <video className="panel-video interactive-video" src={mediaSrc(homeVideos.neural)} poster={buildCloudinaryPoster(homeVideos.neural)} autoPlay loop muted playsInline preload="metadata" onClick={() => openPreview(homeVideos.neural, 'Fawad Khan / Real Client Reel')}></video>
            <h3>{renderTitleWithAI('Fawad Khan Reel')}</h3>
          </article>
          <article className="mosaic-card logo-block no-overlay">
            <video className="panel-video interactive-video" src={mediaSrc(homeVideos.nike)} poster={buildCloudinaryPoster(homeVideos.nike)} autoPlay loop muted playsInline preload="metadata" onClick={() => openPreview(homeVideos.nike, 'Erica Robin / Real Client Reel')}></video>
            <h3>{renderTitleWithAI('Erica Robin Reel')}</h3>
          </article>
          <article className="mosaic-card screen-block">
            <video className="panel-video interactive-video" src={mediaSrc(homeVideos.system)} poster={buildCloudinaryPoster(homeVideos.system)} autoPlay loop muted playsInline preload="metadata" onClick={() => openPreview(homeVideos.system, 'AI Smoothie Ad / AI UGC Concept')}></video>
            <h3>{renderTitleWithAI('AI Smoothie Ad')}</h3>
          </article>
          <article className="mosaic-card space-block">
            <video className="panel-video interactive-video" src={mediaSrc(homeVideos.void)} poster={buildCloudinaryPoster(homeVideos.void)} autoPlay loop muted playsInline preload="metadata" onClick={() => openPreview(homeVideos.void, 'DHA Raya / Real Client Reel')}></video>
            <h3>{renderTitleWithAI('DHA Raya Interior Reel')}</h3>
          </article>
          <article className="mosaic-card logo-block">
            <video className="panel-video interactive-video" src={mediaSrc(homeVideos.sony)} poster={buildCloudinaryPoster(homeVideos.sony)} autoPlay loop muted playsInline preload="metadata" onClick={() => openPreview(homeVideos.sony, 'AI Song Reel / Concept')}></video>
            <h3>{renderTitleWithAI('AI Song Reel')}</h3>
          </article>
          <article className="mosaic-card text-block">
            <video className="panel-video interactive-video" src={mediaSrc(homeVideos.insight)} poster={buildCloudinaryPoster(homeVideos.insight)} autoPlay loop muted playsInline preload="metadata" onClick={() => openPreview(homeVideos.insight, 'Belco Restaurant / Real Client Reel')}></video>
            <h3>{renderTitleWithAI('Belco Restaurant Reel')}</h3>
          </article>
          <article className="mosaic-card logo-block">
            <video className="panel-video interactive-video" src={mediaSrc(homeVideos.prada)} poster={buildCloudinaryPoster(homeVideos.prada)} autoPlay loop muted playsInline preload="metadata" onClick={() => openPreview(homeVideos.prada, 'Perfume Concept / AI Ad')}></video>
            <h3>{renderTitleWithAI('AI Perfume Concept Ad')}</h3>
          </article>
        </div>
        <div className="center-cta">
          <button type="button" onClick={() => navigate('/work')}>
            See Full Project Library
          </button>
        </div>
      </section>

   <section className="home-works home-clarity">
        <div className="section-head">
          <h2>Your Content Engine, Simplified</h2>
          <p>// Understand the offer in 20 seconds</p>
        </div>
        <div className="cards">
          <article className="card">
            <p className="card-tag">Service Outcome</p>
            <p>Turn one long recording into a consistent stream of short videos designed for reach, retention, and conversion.</p>
          </article>
          <article className="card">
            <p className="card-tag">Who It Is For</p>
            <p>Founders, agencies, ecommerce brands, and creators who need high-volume output without hiring an in-house edit team.</p>
          </article>
          <article className="card">
            <p className="card-tag">How You Buy</p>
            <p>Start with a clip batch, then scale into a monthly retainer with a predictable weekly publishing pipeline.</p>
          </article>
        </div>
      </section>

      <section style={{ padding: '0 2rem 2.5rem' }}>
        <div className="home-tool-promo">
          <div className="home-tool-promo-body">
            <span className="eyebrow">// Free Tool</span>
            <h3>How Many Reels Should You Post to Grow Faster?</h3>
            <p>Answer 4 quick questions and get a personalized posting plan in 60 seconds.</p>
          </div>
          <button
            className="cta-btn"
            style={{ whiteSpace: 'nowrap', flexShrink: 0 }}
            onClick={() => navigate('/tools/reels-calculator')}
          >
            Get My Free Reels Plan →
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
          <p className="eyebrow">// Why clients choose us</p>
          <h2>
            Built for scale,
            <span> speed, and brand consistency</span>
          </h2>
          <p>
            ClipForge blends AI acceleration with human editorial judgment, so you get faster delivery without sacrificing quality.
            Every edit follows your brand voice, performance goals, and publishing cadence.
          </p>
          <div className="mini-cols">
            <div>
              <p className="tiny-label">Speed</p>
              <p>Most projects are delivered in 48 to 72 hours.</p>
            </div>
            <div>
              <p className="tiny-label">Reliability</p>
              <p>Clear workflow, fixed checkpoints, and fast revision loops.</p>
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
          Ready to Scale
          <br />
          Content Without Burnout?
        </h2>
        <p className="bg-word" aria-hidden="true">
          Initiate
        </p>
        <button type="button" onClick={() => navigate('/contact')}>
          Book Your Strategy Call
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
          <h2>What You Get</h2>
          <div className="cards">
            <article className="card">
              <p className="card-tag">AI Videos</p>
              <p>Short-form social videos and ad creatives ready to publish and test.</p>
            </article>
            <article className="card">
              <p className="card-tag">Repurposing</p>
              <p>One long video transformed into multiple platform-ready clips.</p>
            </article>
            <article className="card">
              <p className="card-tag">Monthly Support</p>
              <p>Ongoing editing support for teams that need reliable weekly output.</p>
            </article>
          </div>
        </div>

        <div className="process">
          <h2>How We Deliver</h2>
        <ol>
          <li>
            <span>01</span>
            <p>Brief: Share footage, goals, and platform priorities.</p>
          </li>
          <li>
            <span>02</span>
            <p>Edit: We build hooks, pacing, captions, and platform-ready cuts.</p>
          </li>
          <li>
            <span>03</span>
            <p>Deliver: Receive posting-ready files with fast revisions.</p>
          </li>
          <li>
            <span>04</span>
            <p>Scale: Move from one-off batch to a monthly content engine.</p>
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
