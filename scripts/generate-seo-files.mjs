import fs from 'node:fs'
import path from 'node:path'
import { articlePages, cityTargets, servicePages } from '../src/pages/seo/data.js'

const SITE_URL = process.env.SITE_URL || 'https://clipforge.ai'
const root = process.cwd()
const publicDir = path.join(root, 'public')

const staticPaths = ['/', '/pricing', '/portfolio', '/case-studies', '/blog', '/faq', '/contact', '/about', '/work']
const servicePaths = Object.keys(servicePages).map((slug) => `/services/${slug}`)
const articlePaths = Object.keys(articlePages).map((slug) => `/blog/${slug}`)
const locationPaths = cityTargets.flatMap((city) =>
  Object.keys(servicePages).map((service) => `/locations/${city.slug}/${service}`),
)

const allPaths = [...new Set([...staticPaths, ...servicePaths, ...articlePaths, ...locationPaths])]

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${allPaths
  .map((urlPath) => {
    const normalized = urlPath === '/' ? '' : urlPath
    return `  <url><loc>${SITE_URL}${normalized}</loc></url>`
  })
  .join('\n')}\n</urlset>\n`

const robotsTxt = `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`

fs.mkdirSync(publicDir, { recursive: true })
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml)
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt)

console.log(`Generated sitemap.xml with ${allPaths.length} URLs and robots.txt`)