import { useState } from 'react'

const mediaSrc = (fileName) => `/${encodeURIComponent(fileName)}`

const archiveItems = [
  {
    title: 'Glass Avocado ASMR',
    type: 'ASMR Food',
    style: 'swirl',
    file: 'Cutting Glass Avocado ASMR.mp4',
  },
  {
    title: 'Particle Grid',
    type: 'Visual FX',
    style: 'space',
    file: 'From a Million-Year-Old Shell to my Secret Mansion! 🐢💎 [CpKWUygAoKY].mp4',
  },
  {
    title: 'Motion Protocol',
    type: 'AI Ads',
    style: 'text',
    file: 'AI Turned This Bag Photo into a Video  👜✨ [ESqMeE47m2M].mp4',
  },
  {
    title: 'Neural Canvas',
    type: 'Commercial',
    style: 'screen',
    file: 'Hi_Tech_Father_Day2.mp4',
  },
  {
    title: 'Cartoon Puppy',
    type: 'Pets / Story',
    style: 'logo',
    file: "Baby Puppy's Backpack Was Torn.mp4",
  },
  {
    title: 'AI Song Reel',
    type: 'Music',
    style: 'logo',
    file: 'Urdu female modal AI song.mp4',
  },
  {
    title: 'Liquid Form',
    type: 'ASMR Kitchen',
    style: 'swirl',
    file: 'Truffled mashroom cream- 15 sec animation- 2 april 1920x3240.mp4',
  },
  {
    title: 'Fitness Reset',
    type: 'Fitness',
    style: 'text',
    file: 'Fix_LowerBack_pain.mp4',
  },
  {
    title: 'Posture Coach',
    type: 'Fitness',
    style: 'logo',
    file: 'Fix_rounded_shoulders.mp4',
  },
  {
    title: 'Data Morphology',
    type: 'Mini Creatures',
    style: 'space-wide',
    file: 'Tiny Creature making pasta.mp4',
  },
  {
    title: 'Core UI',
    type: 'Food Shorts',
    style: 'screen-small',
    file: 'preparándome el desayuno de la mañana 😅 [3BOvet7wWPg].mp4',
  },
]

const capabilities = [
  {
    title: '3D Experiences',
    copy: 'Immersive visuals, environments, real-time rendering, shaders, and physics-led simulations.',
    tags: ['Three.js', 'Blender', 'Motion'],
  },
  {
    title: 'AI Integration',
    copy: 'Machine learning motion, generative systems, neural networks, and agentic workflows.',
    tags: ['TensorFlow', 'Python', 'Media'],
  },
  {
    title: 'Motion Systems',
    copy: 'Kinetic typography, audio-reactive animation, procedural motion, and interactive storytelling.',
    tags: ['GSAP', 'Framer', 'After Effects'],
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

  const openPreview = (file, title) => {
    setPreviewVideo({ src: mediaSrc(file), title })
  }

  const closePreview = () => {
    setPreviewVideo(null)
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
        <div className="work-filters">
          <span>Filters</span>
          <button type="button">All</button>
          <button type="button">Generative</button>
          <button type="button">WebGL</button>
          <button type="button" className="active">AI Film</button>
          <button type="button">Motion</button>
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
              <video
                className="panel-video interactive-video"
                src={mediaSrc('Fashion_Model_Shoot_male.mp4')}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                onClick={() => openPreview('Fashion_Model_Shoot_male.mp4', 'Neural Echoes / Fashion AI Ad')}
              ></video>
            </div>
            <div className="featured-copy">
              <p className="meta">01 / Fashion AI Ad</p>
              <h3>Neural Echoes</h3>
              <p>
                Studio-grade AI fashion ad built for apparel brand launches, social reels, and retail campaigns.
              </p>
              <div className="chip-row">
                <span>AI Ads</span>
                <span>Fashion</span>
                <span>Reels</span>
                <span>Commercial</span>
              </div>
              <div className="featured-foot">
                <p className="tiny-label">Client: Alpha</p>
                <button type="button">↗</button>
              </div>
            </div>
          </article>

          <article className="featured-case featured-reverse">
            <div className="featured-copy">
              <p className="meta">02 / ASMR Food</p>
              <h3>Void Space</h3>
              <p>
                Hyper-satisfying AI food visuals with glass-cut textures and close-up cutting loops.
              </p>
              <div className="chip-row">
                <span>ASMR</span>
                <span>Food</span>
                <span>Shorts</span>
                <span>Loop</span>
              </div>
              <div className="featured-foot">
                <p className="tiny-label">Client: Food Shorts</p>
                <button type="button">↗</button>
              </div>
            </div>
            <div className="featured-media particle-art">
              <video
                className="panel-video cutting-glass interactive-video"
                src={mediaSrc('Cutting Glass Fruits Strawberry ASMR.mp4')}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                onClick={() => openPreview('Cutting Glass Fruits Strawberry ASMR.mp4', 'Void Space / ASMR Food')}
              ></video>
            </div>
          </article>

          <article className="featured-case featured-landscape">
            <div className="featured-media screen-art">
              <video
                className="panel-video interactive-video"
                src={mediaSrc('This UGC Ad Was Made Without a Camera 😮📱 [trRW92vO8YA].mp4')}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                onClick={() => openPreview('This UGC Ad Was Made Without a Camera 😮📱 [trRW92vO8YA].mp4', 'System 04 / UGC AI Ad')}
              ></video>
            </div>
            <div className="featured-copy">
              <p className="meta">03 / UGC AI Ad</p>
              <h3>System 04</h3>
              <p>
                Product-first UGC ad concept generated without camera footage for fast brand content testing.
              </p>
              <div className="chip-row">
                <span>AI Ads</span>
                <span>UGC</span>
                <span>Mobile</span>
                <span>Brand</span>
              </div>
              <div className="featured-foot">
                <p className="tiny-label">Client: Commerce</p>
                <button type="button">↗</button>
              </div>
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
          {archiveItems.map((item) => (
            <article key={item.title} className={`archive-card ${item.style}`}>
              <video
                className="panel-video interactive-video"
                src={mediaSrc(item.file)}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                onClick={() => openPreview(item.file, `${item.title} / ${item.type}`)}
              ></video>
              <p className="meta">{item.type}</p>
              <h3>{item.title}</h3>
            </article>
          ))}
        </div>
        <div className="center-cta">
          <button type="button">Load More Projects</button>
        </div>
      </section>

      <section className="work-capabilities">
        <p className="eyebrow">// Technical Capabilities</p>
        <h2>What I Build</h2>
        <div className="cards work-capability-cards">
          {capabilities.map((item) => (
            <article key={item.title} className="card capability-card">
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

      <section className="work-process">
        <p className="eyebrow">// Methodology</p>
        <h2>How I Work</h2>
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
