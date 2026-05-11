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
          className="hero-bg-video interactive-video"
          src={mediaSrc('https://res.cloudinary.com/dd8gmorek/video/upload/v1778445573/Fawad_Khan_03_jmcc6h.mp4')}
          poster={buildCloudinaryPoster('https://res.cloudinary.com/dd8gmorek/video/upload/v1778445573/Fawad_Khan_03_jmcc6h.mp4')}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          onClick={() => openPreview('https://res.cloudinary.com/dd8gmorek/video/upload/v1778445573/Fawad_Khan_03_jmcc6h.mp4', 'Fawad Khan / High-Converting Fashion Reel')}
        ></video>
        <div className="hero-aurora" aria-hidden="true"></div>
        <div className="hero-content">
          <div className="hero-right">
            <p className="hero-kicker">Premium Hybrid Editing Studio</p>
            <div className="hero-title-frame">
              <h1 className="hero-title">
                <span className="white">AI Video Editing</span>
                <span className="green">for Brands and Creators</span>
                <span className="green2">Built for Social Teams</span>
              </h1>
            </div>
            <p className="hero-title-note">Real client reels, AI concept edits, and premium short-form delivery built to convert attention into inquiries.</p>
            <div className="hero-proof-strip" aria-label="studio proof points">
              <span>Real Client Reels</span>
              <span>AI Concept Edits</span>
              <span>48 to 72 Hour Delivery</span>
            </div>
          </div>
          <div className="hero-left">
            <div className="hero-cta">
              <p className="hero-cta-label">We turn your raw footage, podcasts, and long videos into conversion-focused reels, Shorts, TikToks, and ad creatives in 48 to 72 hours.</p>
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
                  Get Free Content Plan <span aria-hidden="true">↗</span>
                </button>
                <a
                  className="cta-btn cta-btn--wa"
                  href="https://wa.me/923163919633"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp Us
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
          <h2>Core Services</h2>
          <p>// What we rank and sell first</p>
        </div>
        <div className="cards">
          {coreServices.map((service) => (
            <article className="card" key={service.title}>
              <p className="card-tag">{service.title}</p>
              <p>{service.copy}</p>
              <div className="center-cta">
                <button type="button" onClick={() => navigate(service.path)}>
                  View Service
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="home-works">
        <div className="section-head">
          <h2>Selected Works</h2>
          <p>// Real Client Reels + AI Concept Edits // Click any video to preview</p>
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
            View Full Archive
          </button>
        </div>
      </section>

   <section className="home-works home-clarity">
        <div className="section-head">
          <h2>What We Do</h2>
          <p>// Clear offer in 20 seconds</p>
        </div>
        <div className="cards">
          <article className="card">
            <p className="card-tag">Service Outcome</p>
            <p>We convert one long recording into multiple short videos optimized for retention, reach, and sales.</p>
          </article>
          <article className="card">
            <p className="card-tag">Who It Is For</p>
            <p>Founders, agencies, ecommerce brands, and creators who need consistent content without building an in-house edit team.</p>
          </article>
          <article className="card">
            <p className="card-tag">How You Buy</p>
            <p>Start with a clip batch, scale to monthly retainer, and keep a predictable publishing system each week.</p>
          </article>
        </div>
      </section>

      <section style={{ padding: '0 2rem 2.5rem' }}>
        <div className="home-tool-promo">
          <div className="home-tool-promo-body">
            <span className="eyebrow">// Free Tool</span>
            <h3>How Many Reels Should You Post Per Week?</h3>
            <p>Answer 4 questions and get your personalized weekly reels schedule — takes 60 seconds.</p>
          </div>
          <button
            className="cta-btn"
            style={{ whiteSpace: 'nowrap', flexShrink: 0 }}
            onClick={() => navigate('/tools/reels-calculator')}
          >
            Try Free Calculator →
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
            Built for output,
            <span> speed, and consistency</span>
          </h2>
          <p>
            ClipForge combines AI workflows with human editors to produce high-volume social content without sacrificing quality.
            You get structured delivery, fast iterations, and edits aligned to your brand voice.
          </p>
          <div className="mini-cols">
            <div>
              <p className="tiny-label">Speed</p>
              <p>Most projects are delivered within 48 to 72 hours.</p>
            </div>
            <div>
              <p className="tiny-label">Reliability</p>
              <p>Clear process, fixed checkpoints, and quick revision loops.</p>
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
          Ready To Scale
          <br />
          Your Content
        </h2>
        <p className="bg-word" aria-hidden="true">
          Initiate
        </p>
        <button type="button" onClick={() => navigate('/contact')}>
          Start Your Project
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
          <h2>What We Deliver</h2>
          <div className="cards">
            <article className="card">
              <p className="card-tag">AI Videos</p>
              <p>Short-form social videos, paid ads, and campaign edits that are ready to publish.</p>
            </article>
            <article className="card">
              <p className="card-tag">Repurposing</p>
              <p>One long video transformed into multiple clips for Instagram, TikTok, and YouTube.</p>
            </article>
            <article className="card">
              <p className="card-tag">Monthly Support</p>
              <p>Ongoing editing support for teams that publish every week.</p>
            </article>
          </div>
        </div>

        <div className="process">
          <h2>How We Work</h2>
        <ol>
          <li>
            <span>01</span>
            <p>Brief: Share your footage, goals, and platform priorities.</p>
          </li>
          <li>
            <span>02</span>
            <p>Edit: We build hooks, pacing, captions, and platform-ready cuts.</p>
          </li>
          <li>
            <span>03</span>
            <p>Deliver: Receive final files with quick revisions and posting-ready exports.</p>
          </li>
          <li>
            <span>04</span>
            <p>Scale: Move from one-time batch to monthly content production.</p>
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
