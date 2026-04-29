import { useState } from 'react'

const mediaSrc = (fileName) => (/^https?:\/\//i.test(fileName) ? fileName : `/${encodeURIComponent(fileName)}`)

const archiveItems = [
  {
    title: 'Perfume Concept Ad',
    type: 'AI Ads',
    style: 'screen',
    file: 'This perfume ad was made completely with AI ✨😱 [F1yRHMKjJOo].mp4',
  },
  {
    title: 'Fashion Commercial',
    type: 'Commercial',
    style: 'screen-small',
    file: 'https://res.cloudinary.com/dd8gmorek/video/upload/v1777376861/Real_looking_Ai_fashion_commercial_d1whxa.mp4',
  },
  {
    title: 'Clothes Swap UGC',
    type: 'AI Ads',
    style: 'text',
    file: 'https://res.cloudinary.com/dd8gmorek/video/upload/v1777376869/Using_AI_Try_Clothes_Swap_zemyo3.mp4',
  },
  {
    title: 'Pirate Character',
    type: 'Character Concept',
    style: 'logo',
    file: 'https://res.cloudinary.com/dd8gmorek/video/upload/v1777376849/BlackBeared_Pirate_1716_pltsqv.mp4',
  },
  {
    title: 'Chicken Loop',
    type: 'AI Story',
    style: 'swirl',
    file: 'https://res.cloudinary.com/dd8gmorek/video/upload/v1777376842/2Day_old_Chicken_moving_AI_video_iaashj.mp4',
  },
  {
    title: 'Cartoon Cat Reel',
    type: 'AI Story',
    style: 'logo',
    file: 'https://res.cloudinary.com/dd8gmorek/video/upload/v1777376844/Cat_ai_cartoonic_Video_ys9hdr.mp4',
   },
  {
    title: 'AI Food Babies',
    type: 'Food Shorts',
    style: 'swirl',
    file: 'https://res.cloudinary.com/dd8gmorek/video/upload/v1777376842/Cute_AI_Food_Babies_american_ai_vidyo_Eating_Cambodian_Dishes_Oddly_Satisfying_ASMR_ai_vdeo_37g7R61oPf4_cwluaa.mp4',
  },
  {
    title: 'High Tech Father Day I',
    type: 'Commercial',
    style: 'screen',
    file: 'https://res.cloudinary.com/dd8gmorek/video/upload/v1777376877/Hi_Tech_Father_Day1_ppa6ut.mp4',
  },
  {
    title: 'Glass Avocado ASMR',
    type: 'ASMR Food',
    style: 'swirl',
    file: 'https://res.cloudinary.com/dd8gmorek/video/upload/v1777376846/Cutting_Glass_Avocado_ASMR_urdvsg.mp4',
  },
  {
    title: 'Particle Grid',
    type: 'Visual FX',
    style: 'space',
    file: 'https://res.cloudinary.com/dd8gmorek/video/upload/v1777376842/From_a_Million-Year-Old_Shell_to_my_Secret_Mansion_CpKWUygAoKY_f66uvw.mp4',
  },
  {
    title: 'Motion Protocol',
    type: 'AI Ads',
    style: 'text',
    file: 'https://res.cloudinary.com/dd8gmorek/video/upload/v1777376839/AI_Turned_This_Bag_Photo_into_a_Video_ESqMeE47m2M_h1ywsp.mp4',
  },
  {
    title: 'Neural Canvas',
    type: 'Commercial',
    style: 'screen',
    file: 'https://res.cloudinary.com/dd8gmorek/video/upload/v1777376859/Hi_Tech_Father_Day2_lppj68.mp4',
  },
  {
    title: 'Cartoon Puppy',
    type: 'Pets / Story',
    style: 'logo',
    file: "https://res.cloudinary.com/dd8gmorek/video/upload/v1777376839/Baby_Puppy_s_Backpack_Was_Torn_iudqk9.mp4",
  },
  {
    title: 'AI Song Reel',
    type: 'Music',
    style: 'logo',
    file: 'https://res.cloudinary.com/dd8gmorek/video/upload/v1777376889/Urdu_female_modal_AI_song_b4nfzj.mov',
  },
  {
    title: 'Liquid Form',
    type: 'ASMR Kitchen',
    style: 'swirl',
    file: 'https://res.cloudinary.com/dd8gmorek/video/upload/v1777376872/Truffled_mashroom_cream-_15_sec_animation-_2_april_1920x3240_om5pt0.mp4',
  },
  {
    title: 'Fitness Reset',
    type: 'Fitness',
    style: 'text',
    file: 'https://res.cloudinary.com/dd8gmorek/video/upload/v1777376881/Fix_LowerBack_pain_dbbsck.mp4',
  },
  {
    title: 'Posture Coach',
    type: 'Fitness',
    style: 'logo',
    file: 'https://res.cloudinary.com/dd8gmorek/video/upload/v1777376898/Fix_rounded_shoulders_i1zq27.mp4',
  },
  {
    title: 'Data Morphology',
    type: 'Mini Creatures',
    style: 'space-wide',
    file: 'https://res.cloudinary.com/dd8gmorek/video/upload/v1777376867/Tiny_Creature_making_pasta_tbvetu.mp4',
  },
  {
    title: 'Core UI',
    type: 'Food Shorts',
    style: 'screen-small',
    file: 'https://res.cloudinary.com/dd8gmorek/video/upload/v1777376856/prepar%C3%A1ndome_el_desayuno_de_la_ma%C3%B1ana_3BOvet7wWPg_jhlvnb.mp4',
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
  const [activeCategory, setActiveCategory] = useState(null)

  const openPreview = (file, title) => {
    setPreviewVideo({ src: mediaSrc(file), title })
  }

  const closePreview = () => {
    setPreviewVideo(null)
  }

  const relatedItems = activeCategory
    ? archiveItems.filter((item) => item.type === activeCategory)
    : []

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
                src={mediaSrc('https://res.cloudinary.com/dd8gmorek/video/upload/v1777376849/Fashion_Model_Shoot_male_fcw7uu.mp4')}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                onClick={() => openPreview('https://res.cloudinary.com/dd8gmorek/video/upload/v1777376849/Fashion_Model_Shoot_male_fcw7uu.mp4', 'Neural Echoes / Fashion AI Ad')}
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
                src={mediaSrc('https://res.cloudinary.com/dd8gmorek/video/upload/v1777376848/Cutting_Glass_Fruits_Strawberry_ASMR_tufu9r.mp4')}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                onClick={() => openPreview('https://res.cloudinary.com/dd8gmorek/video/upload/v1777376848/Cutting_Glass_Fruits_Strawberry_ASMR_tufu9r.mp4', 'Void Space / ASMR Food')}
              ></video>
            </div>
          </article>

          <article className="featured-case featured-landscape">
            <div className="featured-media screen-art">
              <video
                className="panel-video interactive-video"
                src={mediaSrc('https://res.cloudinary.com/dd8gmorek/video/upload/v1777376862/This_UGC_Ad_Was_Made_Without_a_Camera_trRW92vO8YA_actynk.mp4')}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                onClick={() => openPreview('https://res.cloudinary.com/dd8gmorek/video/upload/v1777376862/This_UGC_Ad_Was_Made_Without_a_Camera_trRW92vO8YA_actynk.mp4', 'System 04 / UGC AI Ad')}
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
              <video
                className="panel-video interactive-video"
                src={mediaSrc(item.file)}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                onClick={(event) => {
                  event.stopPropagation()
                  openPreview(item.file, `${item.title} / ${item.type}`)
                }}
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

      {activeCategory && (
        <section id="related-videos" className="work-section related-section">
          <div className="work-section-head">
            <h2>Related Videos</h2>
            <p className="tiny-label">{activeCategory}</p>
          </div>
          <div className="archive-grid">
            {relatedItems.map((item) => (
              <article key={`${item.title}-related`} className={`archive-card ${item.style}`}>
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
        </section>
      )}

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
