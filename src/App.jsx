import { NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { HomeSection } from './pages/Home'
import { WorkSection } from './pages/Work'
import { AboutSection } from './pages/About'
import { ContactSection } from './pages/Contact'
import { ReelsCalculator } from './pages/ReelsCalculator'
import {
  BlogPage,
  BlogArticleRoute,
  CaseStudiesPage,
  CityServicePage,
  FaqPage,
  PortfolioPage,
  PricingPage,
  ServicePage,
  getPageTitle,
} from './pages/SeoPages'
import { getSeoMeta } from './pages/seo/data'

const SITE_URL = 'https://clipforge.ai'
const DEFAULT_OG_IMAGE = 'https://res.cloudinary.com/dd8gmorek/video/upload/f_auto,q_auto,w_1200,c_fill,so_1/v1777735901/This_perfume_ad_was_made_completely_with_AI_F1yRHMKjJOo_bsklpr_upgyl5.jpg'

const buildPublicUrl = (pathname) => {
  const normalizedPath = pathname === '/' ? '/' : pathname
  return `${SITE_URL}/#${normalizedPath}`
}

function App() {
  const { pathname } = useLocation()
  const seoMeta = getSeoMeta(pathname)
  const pageUrl = buildPublicUrl(pathname)
  const ogType = pathname.startsWith('/blog/') ? 'article' : 'website'

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ClipForge',
    url: SITE_URL,
    logo: DEFAULT_OG_IMAGE,
    sameAs: ['https://wa.me/923163919633'],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        availableLanguage: ['en'],
      },
    ],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ClipForge',
    url: SITE_URL,
    inLanguage: 'en',
    publisher: {
      '@type': 'Organization',
      name: 'ClipForge',
    },
  }

  useEffect(() => {
    document.title = `${seoMeta.title} | ClipForge`

    const upsertMeta = (selector, attr, value, content) => {
      let tag = document.head.querySelector(selector)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute(attr, value)
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', content)
    }

    const upsertLink = (selector, rel, href) => {
      let tag = document.head.querySelector(selector)
      if (!tag) {
        tag = document.createElement('link')
        tag.setAttribute('rel', rel)
        document.head.appendChild(tag)
      }
      tag.setAttribute('href', href)
    }

    upsertMeta('meta[name="description"]', 'name', 'description', seoMeta.description)
    upsertMeta('meta[name="robots"]', 'name', 'robots', 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1')
    upsertMeta('meta[property="og:title"]', 'property', 'og:title', seoMeta.title)
    upsertMeta('meta[property="og:description"]', 'property', 'og:description', seoMeta.description)
    upsertMeta('meta[property="og:type"]', 'property', 'og:type', ogType)
    upsertMeta('meta[property="og:url"]', 'property', 'og:url', pageUrl)
    upsertMeta('meta[property="og:image"]', 'property', 'og:image', DEFAULT_OG_IMAGE)
    upsertMeta('meta[property="og:site_name"]', 'property', 'og:site_name', 'ClipForge')
    upsertMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image')
    upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', seoMeta.title)
    upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', seoMeta.description)
    upsertMeta('meta[name="twitter:image"]', 'name', 'twitter:image', DEFAULT_OG_IMAGE)
    upsertLink('link[rel="canonical"]', 'canonical', pageUrl)
  }, [seoMeta, pageUrl, ogType])

  const pageTitle = (() => {
    const seoTitle = getPageTitle(pathname)
    if (seoTitle) return seoTitle
    if (pathname === '/work') return 'Selected Works'
    if (pathname === '/about') return 'About Studio'
    if (pathname === '/contact') return 'Contact'
    return 'AI Motion Studio'
  })()

  return (
    <div className="site-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <header className="topbar">
        <p className="studio-id">CT/3042</p>
        <nav className="nav">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </NavLink>
          <NavLink to="/work" className={({ isActive }) => (isActive ? 'active' : '')}>
            Work
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
            Contact
          </NavLink>
          <NavLink to="/tools/reels-calculator" className={({ isActive }) => (isActive ? 'active nav-tool' : 'nav-tool')}>
            Free Tool
          </NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/work" element={<WorkSection />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogArticleRoute />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/locations/:city/:service" element={<CityServicePage />} />
          <Route path="/tools/reels-calculator" element={<ReelsCalculator />} />
        </Routes>
      </main>

      <footer className="footer-row">
        <p>// 2026 / All rights reserved</p>
        <p className="page-title">{pageTitle}</p>
      </footer>

      <a
        className="floating-whatsapp"
        href="https://wa.me/923163919633"
        target="_blank"
        rel="noopener noreferrer"
        title="Contact us on WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  )
}

export default App
