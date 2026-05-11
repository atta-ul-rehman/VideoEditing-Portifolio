import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const CLOUDINARY_VIDEO_RE = /^https?:\/\/res\.cloudinary\.com\/([^/]+)\/video\/upload\/(.+)$/i

const buildCloudinaryVideo = (fileName, profile = 'grid') => {
  const match = fileName.match(CLOUDINARY_VIDEO_RE)
  if (!match) {
    return fileName
  }

  const [, cloudName, publicPath] = match
  const transform = profile === 'preview'
    ? 'f_auto,vc_auto,q_auto,w_960,c_limit'
    : 'f_auto,vc_auto,q_auto:low,w_480,c_limit'

  return `https://res.cloudinary.com/${cloudName}/video/upload/${transform}/${publicPath}`
}

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

function LazyLoopVideo({ src, poster, className, onClick }) {
  const videoRef = useRef(null)
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    const element = videoRef.current
    if (!element) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin: '240px 0px' },
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <video
      ref={videoRef}
      className={className}
      src={shouldLoad ? src : undefined}
      poster={poster || undefined}
      autoPlay={shouldLoad}
      loop
      muted
      playsInline
      preload="none"
      onClick={onClick}
    ></video>
  )
}

function PosterToVideo({ file, className, onClickPoster, onClickVideo }) {
  const wrapRef = useRef(null)
  const videoRef = useRef(null)
  const [shouldLoad, setShouldLoad] = useState(false)
  const [videoReady, setVideoReady] = useState(false)

  useEffect(() => {
    const element = wrapRef.current
    if (!element) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px 0px' },
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video || !shouldLoad) {
      return
    }

    const handleCanPlay = () => setVideoReady(true)
    video.addEventListener('canplay', handleCanPlay)

    return () => {
      video.removeEventListener('canplay', handleCanPlay)
    }
  }, [shouldLoad])

  const poster = buildCloudinaryPoster(file)
  const src = file

  return (
    <div ref={wrapRef} className={`poster-to-video-wrap ${className}`}>
      {!videoReady && (
        <img
          className="ptv-poster"
          src={poster}
          alt=""
          loading="lazy"
          decoding="async"
          onClick={onClickPoster}
        />
      )}
      {shouldLoad && (
        <video
          ref={videoRef}
          className={`ptv-video ${videoReady ? 'ptv-visible' : ''}`}
          src={src}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onClick={onClickVideo}
        ></video>
      )}
    </div>
  )
}

const renderTitleWithAI = (title) =>
  title.split(/(AI)/g).map((part, index) => (
    part === 'AI' ? <span key={`${title}-ai-${index}`} className="ai-word">AI</span> : part
  ))

const archiveItems = [
  {
    title: 'Hafsa Khan Luxury Salon and Spa Showcase',
    type: 'Salon and Spa Tours',
    source: 'real',
    style: 'screen',
    file: 'https://res.cloudinary.com/dd8gmorek/video/upload/v1778447505/Hafsa-Khan-Luxury-Salon-Spa-Cinematic-Showcase_ipvahr.mp4',
  },
  {
    title: 'New Year Eve Party Highlight Reel 2025',
    type: 'Lifestyle Reels',
    source: 'real',
    style: 'screen-small',
    file: 'https://res.cloudinary.com/dd8gmorek/video/upload/v1778445968/New-Year-Eve-Party-Highlight-Reel-2025_snxv6h.mp4',
  },
  {
    title: 'Luxury Honeymoon Destination Reel',
    type: 'Lifestyle Reels',
    source: 'real',
    style: 'text',
    file: 'https://res.cloudinary.com/dd8gmorek/video/upload/v1778445964/Luxury-Honeymoon-Destination-Short-Video-Reel_n5s7wf.mp4',
  },
  {
    title: 'Luxury Wedding Destination Cinematic Edit',
    type: 'Lifestyle Reels',
    source: 'real',
    style: 'logo',
    file: 'https://res.cloudinary.com/dd8gmorek/video/upload/v1778445915/Luxury-Wedding-Destination-Video-Edit-Cinematic_dcmico.mp4',
  },
  {
    title: 'Live Stage Performance Crowd Highlight Reel',
    type: 'Events and Concerts',
    source: 'real',
    style: 'swirl',
    file: 'https://res.cloudinary.com/dd8gmorek/video/upload/v1778445230/Live-Stage-Performance-Crowd-Highlight-Reel_waqupa.mp4',
  },
  {
    title: 'Music Festival Live Act Cinematic Short Video',
    type: 'Events and Concerts',
    source: 'real',
    style: 'logo',
    file: 'https://res.cloudinary.com/dd8gmorek/video/upload/v1778445225/Music-Festival-Live-Act-Cinematic-Short-Video_mxnemj.mp4',
  },
  {
    title: 'Animated Workplace Storytelling Edit',
    type: 'Corporate Storytelling',
    source: 'real',
    style: 'swirl',
    file: 'https://res.cloudinary.com/dd8gmorek/video/upload/v1778444942/Animated-Workplace-Storytelling-Video-Edit_ropz59.mp4',
  },
  {
    title: 'Creative Office Culture Animation Edit',
    type: 'Corporate Storytelling',
    source: 'real',
    style: 'screen',
    file: 'https://res.cloudinary.com/dd8gmorek/video/upload/v1778444936/Creative-Office-Culture-Video-Edit-With-Animation_zaxupb.mp4',
  },
  {
    title: 'Fashion Model Reel',
    type: 'Fashion Films',
    source: 'real',
    style: 'swirl',
    file: 'https://res.cloudinary.com/dd8gmorek/video/upload/v1778445621/Fashion_model_Reel_hzbmbl.mp4',
  },
  {
    title: 'Kinza Hashmi Fashion Reel',
    type: 'Fashion Films',
    source: 'real',
    style: 'space',
    file: 'https://res.cloudinary.com/dd8gmorek/video/upload/v1778445599/Kinza_Hasmi_Fashion_reel_hpld8i.mp4',
  },
  {
    title: 'Erica Robin Fashion Reel',
    type: 'Fashion Films',
    source: 'real',
    style: 'text',
    file: 'https://res.cloudinary.com/dd8gmorek/video/upload/v1778445595/Erica_s_Robin_reel_lk1ssg.mp4',
  },
  {
    title: 'Fawad Khan Cinematic Fashion Reel',
    type: 'Fashion Films',
    source: 'real',
    style: 'screen',
    file: 'https://res.cloudinary.com/dd8gmorek/video/upload/v1778445573/Fawad_Khan_03_jmcc6h.mp4',
  },
  {
    title: 'Belco Restaurant Cinematic Reel',
    type: 'Restaurant Showcases',
    source: 'real',
    style: 'logo',
    file: 'https://res.cloudinary.com/dd8gmorek/video/upload/v1778447435/Belco-Restaurant-Cinematic-Reel-AI-Edited_hnauf0.mp4',
  },
  {
    title: 'Egg Spectation Restaurant Cinematic Edit',
    type: 'Restaurant Showcases',
    source: 'real',
    style: 'logo',
    file: 'https://res.cloudinary.com/dd8gmorek/video/upload/v1778447428/Egg-Spectation-Restaurant-Cinematic-Video-Edit_so4mtl.mp4',
  },
  {
    title: 'Branch Restaurant Interior and Kitchen Reel',
    type: 'Restaurant Showcases',
    source: 'real',
    style: 'swirl',
    file: 'https://res.cloudinary.com/dd8gmorek/video/upload/v1778446533/Branch-Restaurant-Interior-Kitchen-Highlight-Reel_dirfsi.mp4',
  },
  {
    title: 'Luxury Kitchen DHA Raya Interior Reel',
    type: 'Restaurant Showcases',
    source: 'real',
    style: 'text',
    file: 'https://res.cloudinary.com/dd8gmorek/video/upload/v1778446502/Luxury-Kitchen-DHA-Raya-Interior-Video-Reel_npidtr.mp4',
  },
  {
    title: 'Modern Home Real Estate Cinematic Reel',
    type: 'Real Estate Reels',
    source: 'real',
    style: 'logo',
    file: 'https://res.cloudinary.com/dd8gmorek/video/upload/v1778446537/Modern-Home-Real-Estate-Cinematic-Reel_y7u95c.mov',
  },
  {
    title: 'AI Perfume Concept Ad',
    type: 'AI Ads',
    source: 'ai',
    style: 'screen',
    file: 'https://res.cloudinary.com/dd8gmorek/video/upload/v1777735901/This_perfume_ad_was_made_completely_with_AI_F1yRHMKjJOo_bsklpr_upgyl5.mp4',
  },
  {
    title: 'AI Smoothie Ad',
    type: 'AI Ads',
    source: 'ai',
    style: 'text',
    file: 'https://res.cloudinary.com/dd8gmorek/video/upload/v1777735894/This_UGC_Ad_Was_Made_Without_a_Camera_trRW92vO8YA_actynk_bdfmgj.mp4',
  },
  {
    title: 'AI Bag Motion Ad',
    type: 'AI Ads',
    source: 'ai',
    style: 'screen-small',
    file: 'https://res.cloudinary.com/dd8gmorek/video/upload/v1777735124/AI_Turned_This_Bag_Photo_into_a_Video_ESqMeE47m2M_h1ywsp_nkyj44.mp4',
  },
  {
    title: 'AI Fashion Commercial',
    type: 'AI Fashion Concepts',
    source: 'ai',
    style: 'space',
    file: 'https://res.cloudinary.com/dd8gmorek/video/upload/v1777735897/Real_looking_Ai_fashion_commercial_d1whxa_anlmvg.mp4',
  },
  {
    title: 'AI Fashion Male Shoot',
    type: 'AI Fashion Concepts',
    source: 'ai',
    style: 'logo',
    file: 'https://res.cloudinary.com/dd8gmorek/video/upload/v1777735808/Fashion_Model_Shoot_male_fcw7uu_2_fodefe.mp4',
  },
  {
    title: 'AI Tiny Creature Story',
    type: 'AI Story Concepts',
    source: 'ai',
    style: 'space-wide',
    file: 'https://res.cloudinary.com/dd8gmorek/video/upload/v1777376867/Tiny_Creature_making_pasta_tbvetu.mp4',
  },
  {
    title: 'AI Dinosaur Story',
    type: 'AI Story Concepts',
    source: 'ai',
    style: 'swirl',
    file: 'https://res.cloudinary.com/dd8gmorek/video/upload/v1777376863/Dainosour_Extinction_Video_d2gynn.mp4',
  },
  {
    title: 'AI Song Reel',
    type: 'AI Music Concepts',
    source: 'ai',
    style: 'logo',
    file: 'https://res.cloudinary.com/dd8gmorek/video/upload/v1777376889/Urdu_female_modal_AI_song_b4nfzj.mov',
  },
]

const capabilities = [
  {
    title: 'Short Form Reels Editing',
    copy: 'High-retention vertical edits for Instagram Reels, TikTok, and YouTube Shorts with cinematic pacing.',
    tags: ['Reels', 'TikTok', 'YouTube Shorts'],
  },
  {
    title: 'Cinematic Niche Production',
    copy: 'Specialized edits for fashion films, restaurant showcases, real estate reels, and live event highlights.',
    tags: ['Fashion', 'Restaurants', 'Real Estate'],
  },
  {
    title: 'AI-Assisted Post Production',
    copy: 'Human-led editing with AI support for faster delivery, cleaner cuts, and brand-consistent final output.',
    tags: ['Color', 'Captions', 'Fast Turnaround'],
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    copy: 'Deep dives into brand strategy, technical constraints, and creative opportunities.',
  },
  {
    number: '02',
    title: 'Prototyping',
    copy: 'Rapid experimentation with code, shaders, and AI mockups to pressure test concepts.',
  },
  {
    number: '03',
    title: 'Production',
    copy: 'Full-scale development with attention to performance, accessibility, and aesthetic detail.',
  },
  {
    number: '04',
    title: 'Evolution',
    copy: 'Continuous refinement based on analytics, user behavior, and emerging technology.',
  },
]

export function WorkSection() {
  const [previewVideo, setPreviewVideo] = useState(null)
  const [activeCategory, setActiveCategory] = useState(null)
  const [activeSource, setActiveSource] = useState('all')

  const openPreview = (file, title) => {
    setPreviewVideo({ src: file, title })
  }

  const closePreview = () => {
    setPreviewVideo(null)
  }

  const relatedItems = activeCategory
    ? archiveItems.filter((item) => item.type === activeCategory && (activeSource === 'all' || item.source === activeSource))
    : []

  const filteredArchiveItems = archiveItems.filter((item) => activeSource === 'all' || item.source === activeSource)

  const showRelatedByCategory = (category) => {
    setActiveCategory(category)
    requestAnimationFrame(() => {
      const section = document.getElementById('related-videos')
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    })
  }

  return (
    <div className="work-page">
      <section className="work-hero">
        <div className="work-hero-bg" aria-hidden="true"></div>
        <p className="eyebrow">// Portfolio Archive</p>
        <h1 className="work-hero-title">
          <span>Selected</span>
          <span>Works</span>
        </h1>
        <p className="work-hero-featured">Featured</p>
        <div className="work-hero-stats">
          <div className="work-hero-stat">
            <span>200+</span>
            <p>Reels Edited</p>
          </div>
          <div className="work-hero-stat">
            <span>50+</span>
            <p>Brands Served</p>
          </div>
          <div className="work-hero-stat">
            <span>3×</span>
            <p>Faster Turnaround</p>
          </div>
          <div className="work-hero-stat">
            <span>Hybrid</span>
            <p>Real Footage + AI Workflow</p>
          </div>
        </div>
        <div className="work-filters">
          <span>Source</span>
          <button type="button" className={activeSource === 'all' ? 'active' : ''} onClick={() => setActiveSource('all')}>
            All Work
          </button>
          <button type="button" className={activeSource === 'real' ? 'active' : ''} onClick={() => setActiveSource('real')}>
            Real Client Reels
          </button>
          <button type="button" className={activeSource === 'ai' ? 'active' : ''} onClick={() => setActiveSource('ai')}>
            AI Video Edits
          </button>
        </div>
      </section>

      <section className="work-section featured-section">
        <div className="work-section-head">
          <h2>Featured</h2>
          <p className="tiny-label">06 Projects</p>
        </div>
        <div className="featured-list">
          <article className="featured-case featured-landscape">
            <div className="featured-media swirl-art">
              <LazyLoopVideo
                className="panel-video interactive-video"
                src={mediaSrc('https://res.cloudinary.com/dd8gmorek/video/upload/v1778445573/Fawad_Khan_03_jmcc6h.mp4')}
                poster={buildCloudinaryPoster('https://res.cloudinary.com/dd8gmorek/video/upload/v1778445573/Fawad_Khan_03_jmcc6h.mp4')}
                onClick={() => openPreview('https://res.cloudinary.com/dd8gmorek/video/upload/v1778445573/Fawad_Khan_03_jmcc6h.mp4', 'Fawad Khan / Fashion Film')}
              ></LazyLoopVideo>
            </div>
            <div className="featured-copy">
              <h3>{renderTitleWithAI('Fawad Khan Cinematic Reel')}</h3>
              <p>
                Premium fashion reel edited for Fawad Khan to match high-end campaign pacing and social-first storytelling.
              </p>
              <div className="chip-row">
                <span>Real Client</span>
                <span>Fashion Film</span>
                <span>Celebrity Reel</span>
                <span>Reels</span>
              </div>
              <div className="featured-foot">
                <p className="tiny-label">Client: Fawad Khan</p>
                <button type="button">↗</button>
              </div>
            </div>
          </article>

          <article className="featured-case featured-reverse">
            <div className="featured-copy">
              <h3>{renderTitleWithAI('AI Smoothie Ad')}</h3>
              <p>
                AI-generated UGC-style ad used to test hooks and concepts quickly before full production campaigns.
              </p>
              <div className="chip-row">
                <span>AI Edit</span>
                <span>UGC</span>
                <span>Concept Testing</span>
                <span>Short Form</span>
              </div>
              <div className="featured-foot">
                <p className="tiny-label">Use case: Creative Prototype</p>
                <button type="button">↗</button>
              </div>
            </div>
            <div className="featured-media particle-art">
              <LazyLoopVideo
                className="panel-video cutting-glass interactive-video"
                src={mediaSrc('https://res.cloudinary.com/dd8gmorek/video/upload/v1777735894/This_UGC_Ad_Was_Made_Without_a_Camera_trRW92vO8YA_actynk_bdfmgj.mp4')}
                poster={buildCloudinaryPoster('https://res.cloudinary.com/dd8gmorek/video/upload/v1777735894/This_UGC_Ad_Was_Made_Without_a_Camera_trRW92vO8YA_actynk_bdfmgj.mp4')}
                onClick={() => openPreview('https://res.cloudinary.com/dd8gmorek/video/upload/v1777735894/This_UGC_Ad_Was_Made_Without_a_Camera_trRW92vO8YA_actynk_bdfmgj.mp4', 'System 04 / AI UGC Concept')}
              ></LazyLoopVideo>
            </div>
          </article>

          <article className="featured-case featured-landscape">
            <div className="featured-media screen-art">
              <LazyLoopVideo
                className="panel-video interactive-video"
                src={mediaSrc('https://res.cloudinary.com/dd8gmorek/video/upload/v1778446502/Luxury-Kitchen-DHA-Raya-Interior-Video-Reel_npidtr.mp4')}
                poster={buildCloudinaryPoster('https://res.cloudinary.com/dd8gmorek/video/upload/v1778446502/Luxury-Kitchen-DHA-Raya-Interior-Video-Reel_npidtr.mp4')}
                onClick={() => openPreview('https://res.cloudinary.com/dd8gmorek/video/upload/v1778446502/Luxury-Kitchen-DHA-Raya-Interior-Video-Reel_npidtr.mp4', 'DHA Raya / Interior Reel')}
              ></LazyLoopVideo>
            </div>
            <div className="featured-copy">
              <h3>{renderTitleWithAI('DHA Raya Luxury Kitchen Reel')}</h3>
              <p>
                Cinematic interior edit for DHA Raya featuring luxury kitchen visuals designed for real estate and hospitality marketing.
              </p>
              <div className="chip-row">
                <span>Real Client</span>
                <span>Interior</span>
                <span>Real Estate</span>
                <span>Restaurant</span>
              </div>
              <div className="featured-foot">
                <p className="tiny-label">Client: DHA Raya</p>
                <button type="button">↗</button>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="work-process">
        <p className="eyebrow">// Methodology</p>
        <h2>How We Work</h2>
        <ol>
          {processSteps.map((step) => (
            <li key={step.number}>
              <span>{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="work-section work-intent-summary">
        <div className="work-section-head">
          <div>
            <p className="eyebrow">// Start here</p>
            <h2>Find the type of work you need in under a minute.</h2>
          </div>
          <p className="page-title">Clear direction for new visitors</p>
        </div>
        <div className="cards">
          <article className="card intent-card">
            <p className="card-tag">Need social videos fast</p>
            <p>Explore cinematic reels, fashion films, restaurant edits, and event highlights to match your style.</p>
            <span className="intent-arrow" aria-hidden="true">→</span>
          </article>
          <article className="card intent-card">
            <p className="card-tag">Need recurring output</p>
            <p>Review category groups and workflows for ongoing monthly production support.</p>
            <span className="intent-arrow" aria-hidden="true">→</span>
          </article>
          <article className="card intent-card">
            <p className="card-tag">Need custom direction</p>
            <p>Book a strategy call to map your footage and goals to a delivery plan.</p>
            <div className="center-cta" style={{ marginTop: '0.7rem' }}>
              <Link className="cta-btn" to="/contact">
                Book a call <span aria-hidden="true">-&gt;</span>
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="work-section archive-section">
        <div className="work-section-head">
          <h2>Archive</h2>
          <p className="tiny-label">2024 - 2026</p>
        </div>
        <div className="archive-grid">
          {filteredArchiveItems.map((item) => (
            <article
              key={item.title}
              className={`archive-card ${item.style} selectable`}
              onClick={() => showRelatedByCategory(item.type)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  showRelatedByCategory(item.type)
                }
              }}
            >
              <PosterToVideo
                file={item.file}
                className="panel-video interactive-video"
                onClickPoster={(event) => {
                  event.stopPropagation()
                  openPreview(item.file, `${item.title} / ${item.type}`)
                }}
                onClickVideo={(event) => {
                  event.stopPropagation()
                  openPreview(item.file, `${item.title} / ${item.type}`)
                }}
              />
              <h3>{renderTitleWithAI(item.title)}</h3>
            </article>
          ))}
        </div>
        <div className="center-cta">
          <button type="button">Load More Projects</button>
        </div>
      </section>

      <section className="work-capabilities">
        <p className="eyebrow">// Technical Capabilities</p>
        <h2>What We Build</h2>
        <div className="cards work-capability-cards">
          {capabilities.map((item, i) => (
            <article key={item.title} className="card capability-card">
              <p className="cap-num">0{i + 1}</p>
              <p className="card-tag">{item.title}</p>
              <p>{item.copy}</p>
              <div className="chip-row compact">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {activeCategory && (
        <>
          <section className="work-cta-strip">
            <p>Like what you see in <strong>{activeCategory}</strong>? Let's build yours.</p>
            <Link className="cta-btn" to="/contact">Start a project <span aria-hidden="true">→</span></Link>
          </section>
          <section id="related-videos" className="work-section related-section">
          <div className="work-section-head">
            <h2>Related Videos</h2>
            <p className="tiny-label">{activeCategory}</p>
          </div>
          <div className="archive-grid">
            {relatedItems.map((item) => (
              <article key={`${item.title}-related`} className={`archive-card ${item.style}`}>
                <PosterToVideo
                  file={item.file}
                  className="panel-video interactive-video"
                  onClickPoster={() => openPreview(item.file, `${item.title} / ${item.type}`)}
                  onClickVideo={() => openPreview(item.file, `${item.title} / ${item.type}`)}
                />
                <h3>{renderTitleWithAI(item.title)}</h3>
              </article>
            ))}
          </div>
        </section>
        </>
      )}

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
    </div>
  )
}
