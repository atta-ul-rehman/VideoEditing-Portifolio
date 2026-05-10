const fs = require('fs')
const path = require('path')
const PDFDocument = require('pdfkit')
const {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Table,
  TableRow,
  TableCell,
  HeadingLevel,
  WidthType,
  AlignmentType,
  BorderStyle,
} = require('docx')

const auditDate = '2026-05-11'
const siteDomain = 'clipforge.ai'
const auditType = 'FULL AUDIT'

const scores = {
  seo: 8,
  geo: 7,
  aeo: 8,
}

const pagesAudited = [
  ['https://clipforge.ai/#/', 'Homepage', 'Primary conversion page with service overview'],
  ['https://clipforge.ai/#/work', 'Portfolio/Work', 'Strong media depth, showcase authority'],
  ['https://clipforge.ai/#/about', 'About', 'E-E-A-T supporting brand context'],
  ['https://clipforge.ai/#/contact', 'Contact', 'Lead capture and trust details'],
  ['https://clipforge.ai/#/services/short-form-video-editing', 'Service Page', 'FAQ schema and buyer intent sections present'],
  ['https://clipforge.ai/#/services/reels-editing', 'Service Page', 'Good keyword intent coverage'],
  ['https://clipforge.ai/#/services/ecommerce-video-editing', 'Service Page', 'Strong commercial intent alignment'],
  ['https://clipforge.ai/#/blog', 'Blog Hub', 'Topical authority clusters present'],
  ['https://clipforge.ai/#/blog/how-to-repurpose-long-videos-into-shorts', 'Blog Article', 'Answer-style content with FAQ section'],
  ['https://clipforge.ai/#/faq', 'FAQ', 'FAQPage schema and question-based content'],
  ['https://clipforge.ai/#/pricing', 'Pricing', 'Clear package structure'],
  ['https://clipforge.ai/#/case-studies', 'Case Studies', 'Outcome-oriented positioning'],
  ['https://clipforge.ai/robots.txt', 'Technical File', 'Allows crawling and references sitemap'],
  ['https://clipforge.ai/sitemap.xml', 'Technical File', 'Large URL coverage including services/blog/location pages'],
]

const priorities = [
  ['Critical', 'Migrate from hash routing to clean URL routing with prerender/SSR for stronger crawl/index quality', 'SEO/GEO', 'High', 'High'],
  ['High', 'Add author profile pages and bylines for blog content to improve E-E-A-T signals', 'GEO', 'Medium', 'High'],
  ['High', 'Add Publish/Updated timestamps visibly on blog and service pages', 'SEO/GEO', 'Low', 'High'],
  ['Medium', 'Add breadcrumb schema and visible breadcrumbs for deeper page hierarchy', 'SEO/AEO', 'Low', 'Medium'],
  ['Quick Win', 'Continue expanding question-first H2s on service/blog pages for snippet eligibility', 'AEO', 'Low', 'Medium'],
]

const strengths = [
  'Comprehensive service/blog/location URL map in sitemap.xml.',
  'Strong topical cluster strategy connecting services, blog, and supporting topics.',
  'FAQPage schema implemented and now expanded with richer article and service schema context.',
  'Dynamic metadata now includes canonical, OG URL/type/image, Twitter image, and robust robots directives.',
  'Organization and WebSite schema now present globally, improving entity clarity for AI search.',
]

function scoreStatus(score) {
  if (score >= 8) return 'Strong'
  if (score >= 6) return 'On Track'
  return 'Needs Work'
}

function colorForScore(score) {
  if (score >= 8) return '16A34A'
  if (score >= 5) return 'D97706'
  return 'DC2626'
}

function paragraph(text, opts = {}) {
  return new Paragraph({
    children: [new TextRun({ text, bold: !!opts.bold, color: opts.color, size: opts.size })],
    heading: opts.heading,
    spacing: { after: opts.after ?? 140, before: opts.before ?? 0 },
    alignment: opts.align,
  })
}

function cell(text, widthPct = 25, shading = undefined, center = false, bold = false) {
  return new TableCell({
    width: { size: widthPct, type: WidthType.PERCENTAGE },
    shading: shading ? { fill: shading } : undefined,
    children: [
      new Paragraph({
        children: [new TextRun({ text, bold })],
        alignment: center ? AlignmentType.CENTER : AlignmentType.LEFT,
      }),
    ],
  })
}

async function generateDocx() {
  const doc = new Document({
    sections: [
      {
        children: [
          paragraph(siteDomain, { bold: true, color: '1B2A4A', size: 72, align: AlignmentType.CENTER, after: 280 }),
          paragraph('SEO / GEO / AEO Audit Report', { color: '2563EB', size: 34, align: AlignmentType.CENTER, after: 120 }),
          paragraph(auditType, { size: 24, align: AlignmentType.CENTER, after: 260 }),
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    shading: { fill: colorForScore(scores.seo) },
                    children: [
                      new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'SEO', bold: true, color: 'FFFFFF' })] }),
                      new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: `${scores.seo}/10`, bold: true, color: 'FFFFFF', size: 48 })] }),
                      new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: scoreStatus(scores.seo), color: 'FFFFFF' })] }),
                    ],
                  }),
                  new TableCell({
                    shading: { fill: colorForScore(scores.geo) },
                    children: [
                      new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'GEO', bold: true, color: 'FFFFFF' })] }),
                      new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: `${scores.geo}/10`, bold: true, color: 'FFFFFF', size: 48 })] }),
                      new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: scoreStatus(scores.geo), color: 'FFFFFF' })] }),
                    ],
                  }),
                  new TableCell({
                    shading: { fill: colorForScore(scores.aeo) },
                    children: [
                      new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'AEO', bold: true, color: 'FFFFFF' })] }),
                      new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: `${scores.aeo}/10`, bold: true, color: 'FFFFFF', size: 48 })] }),
                      new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: scoreStatus(scores.aeo), color: 'FFFFFF' })] }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          paragraph(`Audit date: ${auditDate}`, { align: AlignmentType.CENTER, before: 300 }),
          paragraph('Claude Skill and Plugin by Alex Labat', { align: AlignmentType.CENTER, color: '64748B' }),

          paragraph('Executive Summary', { heading: HeadingLevel.HEADING_1, before: 280, after: 120 }),
          paragraph(
            'ClipForge has a strong topical architecture and clear commercial intent coverage across services, blog, and location clusters. The largest technical limitation is hash-based routing, which can reduce indexability and canonical clarity in traditional and AI-powered search systems. This audit cycle improved high-impact metadata, canonical handling, and structured data depth for stronger discovery and citation potential. Next gains should focus on URL architecture, author trust signals, and richer answer-first formatting to compete for snippets and AI citations.',
            { after: 180 }
          ),

          paragraph('Scorecard', { heading: HeadingLevel.HEADING_2 }),
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
              new TableRow({ children: [cell('Dimension', 25, 'E2E8F0', true, true), cell('Score', 15, 'E2E8F0', true, true), cell('Status', 20, 'E2E8F0', true, true), cell('Key Takeaway', 40, 'E2E8F0', true, true)] }),
              new TableRow({ children: [cell('SEO'), cell('8/10', 15, colorForScore(scores.seo), true, true), cell(scoreStatus(scores.seo), 20), cell('Technical baseline is now strong, but hash URLs still limit full crawler efficiency.', 40)] }),
              new TableRow({ children: [cell('GEO'), cell('7/10', 15, colorForScore(scores.geo), true, true), cell(scoreStatus(scores.geo), 20), cell('Entity and trust signals improved; deeper author/source attribution remains a gap.', 40)] }),
              new TableRow({ children: [cell('AEO'), cell('8/10', 15, colorForScore(scores.aeo), true, true), cell(scoreStatus(scores.aeo), 20), cell('FAQ and answer intent are strong, with room to expand question-led heading coverage.', 40)] }),
              new TableRow({ children: [cell('Combined', 25, 'EFF6FF', false, true), cell('23/30', 15, 'EFF6FF', true, true), cell('', 20, 'EFF6FF', true, false), cell('Strong commercial content structure with clear next-step technical upgrades.', 40, 'EFF6FF')] }),
            ],
          }),

          paragraph('Pages Audited', { heading: HeadingLevel.HEADING_1, before: 240, after: 120 }),
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
              new TableRow({ children: [cell('URL', 45, 'E2E8F0', true, true), cell('Page Type', 20, 'E2E8F0', true, true), cell('Notes', 35, 'E2E8F0', true, true)] }),
              ...pagesAudited.map((p, i) => new TableRow({ children: [cell(p[0], 45, i % 2 ? 'F8F9FA' : undefined), cell(p[1], 20, i % 2 ? 'F8F9FA' : undefined), cell(p[2], 35, i % 2 ? 'F8F9FA' : undefined)] })),
            ],
          }),

          paragraph('SEO Analysis', { heading: HeadingLevel.HEADING_1, before: 240 }),
          paragraph('Technical On-Page: Dynamic title/meta setup is now robust; canonical and social metadata now update by route. Hash URL architecture remains the top SEO blocker for deeper indexing precision.'),
          paragraph('Content Quality: Service and blog pages are intent-matched and reasonably comprehensive; adding visible update dates and author lines would improve freshness and trust.'),
          paragraph('Structured Data: Service, FAQPage, Article, Organization, and WebSite schema are present after implementation and form a strong baseline.'),

          paragraph('GEO Analysis', { heading: HeadingLevel.HEADING_1, before: 220 }),
          paragraph('E-E-A-T: About/contact/context signals are present; trust can improve with explicit author bios, credentials, and third-party citations on articles.'),
          paragraph('Content for AI Synthesis: Content is clear and cluster-based, with strong factual service framing. Adding source-backed statistics and proof references can increase citation probability.'),
          paragraph('Technical GEO: Crawl allowances are clean via robots + sitemap. Richer entity graph links beyond WhatsApp and clearer sameAs network are recommended.'),

          paragraph('AEO Analysis', { heading: HeadingLevel.HEADING_1, before: 220 }),
          paragraph('Featured Snippet Eligibility: Many sections are question-driven and concise. Expanding direct 40-60 word answer blocks under explicit question H2s can increase snippet capture.'),
          paragraph('Structured Answer Formats: FAQ schema exists on FAQ, service, and article contexts. This is a strong implementation for answer engines.'),
          paragraph('Voice Search Readiness: Conversational query coverage is solid; local NAP clarity can be expanded for stronger voice/local responses.'),

          paragraph('Priority Recommendations', { heading: HeadingLevel.HEADING_1, before: 220 }),
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
              new TableRow({ children: [cell('Priority', 15, 'E2E8F0', true, true), cell('Issue', 45, 'E2E8F0', true, true), cell('Dimension', 15, 'E2E8F0', true, true), cell('Effort', 10, 'E2E8F0', true, true), cell('Impact', 15, 'E2E8F0', true, true)] }),
              ...priorities.map((item) => {
                const colorMap = { Critical: 'DC2626', High: 'EA580C', Medium: 'D97706', 'Quick Win': '16A34A' }
                return new TableRow({
                  children: [
                    new TableCell({ shading: { fill: colorMap[item[0]] }, children: [new Paragraph({ children: [new TextRun({ text: item[0], color: 'FFFFFF', bold: true })] })] }),
                    cell(item[1], 45),
                    cell(item[2], 15),
                    cell(item[3], 10),
                    cell(item[4], 15),
                  ],
                })
              }),
            ],
          }),

          paragraph("What's Working Well", { heading: HeadingLevel.HEADING_1, before: 220 }),
          ...strengths.map((s) => paragraph(`- ${s}`)),
        ],
      },
    ],
  })

  const buffer = await Packer.toBuffer(doc)
  const docxPath = path.resolve(process.cwd(), 'SEO-GEO-AEO-Audit-ClipForge-2026-05-11.docx')
  fs.writeFileSync(docxPath, buffer)
  return docxPath
}

function generatePdf() {
  const pdfPath = path.resolve(process.cwd(), 'SEO-GEO-AEO-Audit-ClipForge-2026-05-11.pdf')
  const pdf = new PDFDocument({ margin: 50, size: 'LETTER' })
  pdf.pipe(fs.createWriteStream(pdfPath))

  const heading = (txt) => {
    pdf.moveDown(0.8)
    pdf.fontSize(18).fillColor('#1B2A4A').text(txt)
    pdf.moveDown(0.2)
  }

  pdf.fontSize(28).fillColor('#1B2A4A').text('clipforge.ai', { align: 'center' })
  pdf.fontSize(14).fillColor('#2563EB').text('SEO / GEO / AEO Audit Report', { align: 'center' })
  pdf.fontSize(11).fillColor('#111827').text(`${auditType} · ${auditDate}`, { align: 'center' })

  pdf.moveDown(1)
  pdf.fontSize(12)
  pdf.fillColor('#16A34A').text(`SEO: ${scores.seo}/10 (${scoreStatus(scores.seo)})`)
  pdf.fillColor('#D97706').text(`GEO: ${scores.geo}/10 (${scoreStatus(scores.geo)})`)
  pdf.fillColor('#16A34A').text(`AEO: ${scores.aeo}/10 (${scoreStatus(scores.aeo)})`)

  heading('Executive Summary')
  pdf.fontSize(10).fillColor('#111827').text('ClipForge has strong topical coverage and conversion-focused content architecture. The primary limitation is hash-based URL routing, which can reduce indexing precision for search and AI systems. This audit round improved technical metadata and schema quality sitewide. Next gains should focus on clean URL architecture, stronger author trust signals, and more source-backed content for AI citation depth.', {
    align: 'left',
    lineGap: 3,
  })

  heading('Top Priorities')
  priorities.slice(0, 4).forEach((p, i) => {
    pdf.fontSize(10).fillColor('#111827').text(`${i + 1}. [${p[0]}] ${p[1]} (${p[2]}, Effort: ${p[3]}, Impact: ${p[4]})`, { lineGap: 2 })
  })

  heading('Pages Audited')
  pagesAudited.forEach((p) => {
    pdf.fontSize(9).fillColor('#111827').text(`• ${p[1]}: ${p[0]} — ${p[2]}`)
  })

  heading("What's Working Well")
  strengths.forEach((s) => {
    pdf.fontSize(10).fillColor('#111827').text(`• ${s}`)
  })

  pdf.moveDown(1)
  pdf.fontSize(9).fillColor('#64748B').text('Claude Skill and Plugin by Alex Labat')
  pdf.end()
  return pdfPath
}

async function run() {
  const docxPath = await generateDocx()
  const pdfPath = generatePdf()
  console.log(`DOCX generated: ${docxPath}`)
  console.log(`PDF generated: ${pdfPath}`)
}

run().catch((error) => {
  console.error(error)
  process.exit(1)
})
