import { Link } from 'react-router-dom'
import { supportingContentMap } from './data'
import { seoBrief } from './data'
import { articlePages, servicePages } from './data'

const CLOUDINARY_VIDEO_RE = /^https?:\/\/res\.cloudinary\.com\/([^/]+)\/video\/upload\/(.+)$/i

function buildCloudinaryPoster(fileName) {
	const match = fileName.match(CLOUDINARY_VIDEO_RE)
	if (!match) {
		return ''
	}

	const [, cloudName, publicPath] = match
	const posterPath = publicPath.replace(/\.[^/.]+$/, '.jpg')
	return `https://res.cloudinary.com/${cloudName}/video/upload/f_auto,q_auto,w_960,c_fill,so_1/${posterPath}`
}

const serviceVideoBySlug = {
	'short-form-video-editing': 'https://res.cloudinary.com/dd8gmorek/video/upload/v1778445968/New-Year-Eve-Party-Highlight-Reel-2025_snxv6h.mp4',
	'podcast-repurposing': 'https://res.cloudinary.com/dd8gmorek/video/upload/v1777376889/Urdu_female_modal_AI_song_b4nfzj.mov',
	'faceless-youtube-editing': 'https://res.cloudinary.com/dd8gmorek/video/upload/v1777376863/Dainosour_Extinction_Video_d2gynn.mp4',
	'ecommerce-video-editing': 'https://res.cloudinary.com/dd8gmorek/video/upload/v1777735894/This_UGC_Ad_Was_Made_Without_a_Camera_trRW92vO8YA_actynk_bdfmgj.mp4',
	'reels-editing': 'https://res.cloudinary.com/dd8gmorek/video/upload/v1778445573/Fawad_Khan_03_jmcc6h.mp4',
	'real-estate-video-editing': 'https://res.cloudinary.com/dd8gmorek/video/upload/v1778446537/Modern-Home-Real-Estate-Cinematic-Reel_y7u95c.mov',
	'product-ad-editing': 'https://res.cloudinary.com/dd8gmorek/video/upload/v1777735894/This_UGC_Ad_Was_Made_Without_a_Camera_trRW92vO8YA_actynk_bdfmgj.mp4',
	'tiktok-video-editing': 'https://res.cloudinary.com/dd8gmorek/video/upload/v1778445964/Luxury-Honeymoon-Destination-Short-Video-Reel_n5s7wf.mp4',
	'youtube-shorts-editing': 'https://res.cloudinary.com/dd8gmorek/video/upload/v1778445915/Luxury-Wedding-Destination-Video-Edit-Cinematic_dcmico.mp4',
	'ugc-video-editing': 'https://res.cloudinary.com/dd8gmorek/video/upload/v1777735894/This_UGC_Ad_Was_Made_Without_a_Camera_trRW92vO8YA_actynk_bdfmgj.mp4',
	'restaurant-video-editing': 'https://res.cloudinary.com/dd8gmorek/video/upload/v1778447435/Belco-Restaurant-Cinematic-Reel-AI-Edited_hnauf0.mp4',
	'ai-video-editing': 'https://res.cloudinary.com/dd8gmorek/video/upload/v1777735901/This_perfume_ad_was_made_completely_with_AI_F1yRHMKjJOo_bsklpr_upgyl5.mp4',
}

const serviceVideo2BySlug = {
	'short-form-video-editing': 'https://res.cloudinary.com/dd8gmorek/video/upload/v1777735901/This_perfume_ad_was_made_completely_with_AI_F1yRHMKjJOo_bsklpr_upgyl5.mp4',
	'podcast-repurposing': 'https://res.cloudinary.com/dd8gmorek/video/upload/v1777376881/Fix_LowerBack_pain_dbbsck.mp4',
	'faceless-youtube-editing': 'https://res.cloudinary.com/dd8gmorek/video/upload/v1777376867/Tiny_Creature_making_pasta_tbvetu.mp4',
	'ecommerce-video-editing': 'https://res.cloudinary.com/dd8gmorek/video/upload/v1777735901/This_perfume_ad_was_made_completely_with_AI_F1yRHMKjJOo_bsklpr_upgyl5.mp4',
	'reels-editing': 'https://res.cloudinary.com/dd8gmorek/video/upload/v1778445595/Erica_s_Robin_reel_lk1ssg.mp4',
	'real-estate-video-editing': 'https://res.cloudinary.com/dd8gmorek/video/upload/v1778446502/Luxury-Kitchen-DHA-Raya-Interior-Video-Reel_npidtr.mp4',
	'product-ad-editing': 'https://res.cloudinary.com/dd8gmorek/video/upload/v1777735901/This_perfume_ad_was_made_completely_with_AI_F1yRHMKjJOo_bsklpr_upgyl5.mp4',
	'tiktok-video-editing': 'https://res.cloudinary.com/dd8gmorek/video/upload/v1778445230/Live-Stage-Performance-Crowd-Highlight-Reel_waqupa.mp4',
	'youtube-shorts-editing': 'https://res.cloudinary.com/dd8gmorek/video/upload/v1778445225/Music-Festival-Live-Act-Cinematic-Short-Video_mxnemj.mp4',
	'ugc-video-editing': 'https://res.cloudinary.com/dd8gmorek/video/upload/v1777735124/AI_Turned_This_Bag_Photo_into_a_Video_ESqMeE47m2M_h1ywsp_nkyj44.mp4',
	'restaurant-video-editing': 'https://res.cloudinary.com/dd8gmorek/video/upload/v1778447428/Egg-Spectation-Restaurant-Cinematic-Video-Edit_so4mtl.mp4',
	'ai-video-editing': 'https://res.cloudinary.com/dd8gmorek/video/upload/v1777735808/Fashion_Model_Shoot_male_fcw7uu_2_fodefe.mp4',
}

function JsonLd({ data }) {
	return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

const articleSlugByTitle = Object.fromEntries(Object.entries(articlePages).map(([slug, article]) => [article.title, slug]))
const serviceSlugByTitle = Object.fromEntries(Object.entries(servicePages).map(([slug, page]) => [page.title, slug]))

function resolveRelatedLink(label) {
	if (label === 'Blog') return '/blog'
	if (label === 'Pricing') return '/pricing'
	if (label === 'Case Studies') return '/case-studies'
	if (label === 'Contact') return '/contact'
	if (label === 'FAQ') return '/faq'

	const serviceSlug = serviceSlugByTitle[label]
	if (serviceSlug) return `/services/${serviceSlug}`

	const articleSlug = articleSlugByTitle[label]
	if (articleSlug) return `/blog/${articleSlug}`

	return null
}

export function splitLines(lines) {
	return lines.map((line) => <span key={line}>{line}</span>)
}

export function ServicePageLayout({ page, slug }) {
	const support = supportingContentMap[slug]
	const topKeyword = page.keywords?.[0] ?? page.title
	const serviceVideo = serviceVideoBySlug[slug] ?? 'https://res.cloudinary.com/dd8gmorek/video/upload/v1777735897/Real_looking_Ai_fashion_commercial_d1whxa_anlmvg.mp4'
	const serviceVideo2 = serviceVideo2BySlug[slug] ?? null
	const servicePoster = buildCloudinaryPoster(serviceVideo)
	const servicePoster2 = serviceVideo2 ? buildCloudinaryPoster(serviceVideo2) : ''
	const serviceSchema = {
		'@context': 'https://schema.org',
		'@type': 'Service',
		name: page.title,
		description: page.summary,
		url: `https://clipforge.ai/services/${slug}`,
		areaServed: seoBrief.targetLocations,
		serviceType: page.title,
		keywords: page.keywords,
		provider: {
			'@type': 'Organization',
			name: 'ClipForge',
			url: 'https://clipforge.ai',
		},
	}
	const faqSchema = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: page.faqs.map((item) => ({
			'@type': 'Question',
			name: item.q,
			acceptedAnswer: {
				'@type': 'Answer',
				text: item.a,
			},
		})),
	}

	return (
		<section className="work-page">
			<JsonLd data={serviceSchema} />
			<JsonLd data={faqSchema} />
			<section className="hero">
				<div className="hero-content">
					<div className="hero-right">
						<p className="eyebrow">{page.eyebrow}</p>
						<h1 className="hero-title">{splitLines(page.lines)}</h1>
						<p className="hero-copy">{page.intro}</p>
					</div>
					<div className="hero-left">
						<div className="hero-cta">
							<p className="hero-cta-label">{page.summary}</p>
							<div className="hero-meta">
								<p>
									// Core Service
									<br />
									{topKeyword}
								</p>
								<p>
									// Turnaround
									<br />
									Fast delivery with revision support.
								</p>
							</div>
							<div className="hero-cta-btns">
								<Link className="cta-btn" to="/contact">
									Get Free Strategy Call <span aria-hidden="true">-&gt;</span>
								</Link>
								<Link className="cta-btn cta-btn--wa" to="/pricing">
									See Packages <span aria-hidden="true">-&gt;</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="work-section service-media">
				<div className="work-section-head">
					<div>
						<p className="eyebrow">// Service sample video</p>
						<h2>Preview the output style for this service.</h2>
					</div>
					<p className="page-title">Direct visual context for first-time visitors</p>
				</div>
				<div className="service-media-grid">
					<div className="service-media-reels">
						<div className="service-media-video-wrap">
							<video src={serviceVideo} poster={servicePoster || undefined} controls autoPlay muted loop playsInline preload="metadata"></video>
						</div>
						{serviceVideo2 && (
							<div className="service-media-video-wrap">
								<video src={serviceVideo2} poster={servicePoster2 || undefined} controls autoPlay muted loop playsInline preload="metadata"></video>
							</div>
						)}
					</div>
					<div className="cards service-media-points">
						<article className="card">
							<p className="card-tag">What you are seeing</p>
							<p>Representative creative style and pacing for {page.title} delivery workflows.</p>
						</article>
						<article className="card">
							<p className="card-tag">Primary keywords</p>
							<p>{page.keywords.join(' | ')}</p>
						</article>
					</div>
				</div>
			</section>

			<section className="work-section">
				<div className="work-section-head">
					<div>
						<p className="eyebrow">// Quick decision guide</p>
						<h2>Know if this service is right for you.</h2>
					</div>
					<p className="page-title">Designed to reduce buyer confusion</p>
				</div>
				<div className="cards">
					<article className="card">
						<p className="card-tag">Best for</p>
						<p>Teams that already create raw content and need consistent short-form output without hiring in-house editors.</p>
					</article>
					<article className="card">
						<p className="card-tag">Expected outcome</p>
						<p>Higher publishing consistency, better retention on social videos, and faster production cycles week to week.</p>
					</article>
					<article className="card">
						<p className="card-tag">What to prepare</p>
						<p>Share brand style, footage links, and goals. We handle editing, structure, captions, and delivery format.</p>
					</article>
				</div>
			</section>

			<section className="work-section">
				<div className="work-section-head">
					<div>
						<p className="eyebrow">// What this service includes</p>
						<h2>Built to convert, not just to look good.</h2>
					</div>
					<p className="page-title">{page.title}</p>
				</div>
				<div className="cards">
					{page.benefits.map((item) => (
						<article className="card" key={item.title}>
							<p className="card-tag">{item.title}</p>
							<p>{item.copy}</p>
						</article>
					))}
				</div>
			</section>

			<section className="work-section">
				<div className="work-section-head">
					<div>
						<p className="eyebrow">// Why us over gigs and tools</p>
						<h2>AI + human system, not generic editing.</h2>
					</div>
					<p className="page-title">Positioning strategy</p>
				</div>
				<div className="cards">
					{seoBrief.competitorAngles.map((angle) => (
						<article className="card" key={angle}>
							<p className="card-tag">Competitor angle</p>
							<p>{angle}</p>
						</article>
					))}
				</div>
			</section>

			<section className="work-capabilities">
				<div className="work-section-head">
					<div>
						<p className="eyebrow">// Package model</p>
						<h2>Simple ways to buy.</h2>
					</div>
					<p className="page-title">Starting point for custom quotes</p>
				</div>
				<div className="cards work-capability-cards">
					{page.packages.map((item) => (
						<article className="card capability-card" key={item.title}>
							<p className="card-tag">{item.title}</p>
							<p>{item.copy}</p>
						</article>
					))}
				</div>
			</section>

			<section className="work-process">
				<div className="work-section-head">
					<div>
						<p className="eyebrow">// Delivery workflow</p>
						<h2>How the project moves.</h2>
					</div>
				</div>
				<ol>
					{page.process.map((step) => (
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

			{support ? (
				<section className="work-section">
					<div className="work-section-head">
						<div>
							<p className="eyebrow">// Supporting content</p>
							<h2>{support.title}</h2>
						</div>
						<p className="page-title">Cluster topics for SEO and AI search</p>
					</div>
					<div className="cards">
						{support.topics.map((topic) => (
							<article className="card" key={topic}>
								<p className="card-tag">Supporting topic</p>
								<p>{topic}</p>
								<div className="center-cta">
									{resolveRelatedLink(topic) ? (
										<Link className="cta-btn" to={resolveRelatedLink(topic)}>
											Open Topic <span aria-hidden="true">-&gt;</span>
										</Link>
									) : (
										<Link className="cta-btn" to="/blog">
											View Blog <span aria-hidden="true">-&gt;</span>
										</Link>
									)}
								</div>
							</article>
						))}
					</div>
					<div className="chip-row compact" style={{ marginTop: '1rem' }}>
						{support.related.map((item) => {
							const to = resolveRelatedLink(item)
							return to ? (
								<Link key={item} to={to}>
									{item}
								</Link>
							) : (
								<span key={item}>{item}</span>
							)
						})}
					</div>
				</section>
			) : null}

			<section className="contact-wrap">
				<p className="eyebrow">// FAQ</p>
				<h2>Questions buyers usually ask.</h2>
				<div className="mini-cols">
					{page.faqs.map((item) => (
						<div key={item.q}>
							<p className="tiny-label">{item.q}</p>
							<p>{item.a}</p>
						</div>
					))}
				</div>
				<div className="mini-cols" style={{ marginTop: '1rem' }}>
					<div>
						<p className="tiny-label">Who this is for</p>
						<p>Creators, agencies, ecommerce brands, coaches, and real estate teams that need consistent output.</p>
					</div>
					<div>
						<p className="tiny-label">Local and remote coverage</p>
						<p>{seoBrief.locationContext}</p>
					</div>
					<div>
						<p className="tiny-label">Core intent questions</p>
						<p>{seoBrief.coreQuestions.slice(0, 3).join(' ')}</p>
					</div>
				</div>
				<div className="center-cta">
					<Link className="cta-btn" to="/contact">
						Book your kickoff call <span aria-hidden="true">-&gt;</span>
					</Link>
				</div>
			</section>
		</section>
	)
}

export function SimpleLandingPage({ eyebrow, lines, title, intro, cards, footerTitle, footerCopy }) {
	const landingSchema = {
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		name: title,
		description: intro,
		about: seoBrief.contentPillars,
	}

	return (
		<section className="work-page">
			<JsonLd data={landingSchema} />
			<section className="hero">
				<div className="hero-content">
					<div className="hero-right">
						<p className="eyebrow">{eyebrow}</p>
						<h1 className="hero-title">{splitLines(lines)}</h1>
						<p className="hero-copy">{intro}</p>
					</div>
					<div className="hero-left">
						<div className="hero-cta">
							<p className="hero-cta-label">{footerCopy}</p>
							<div className="hero-meta">
								<p>
									// Core Focus
									<br />
									{title}
								</p>
								<p>
									// Remote Service
									<br />
									Built for global clients.
								</p>
							</div>
							<div className="hero-cta-btns">
								<Link className="cta-btn" to="/contact">
									Get Free Strategy Call <span aria-hidden="true">-&gt;</span>
								</Link>
								<Link className="cta-btn cta-btn--wa" to="/pricing">
									See Pricing <span aria-hidden="true">-&gt;</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="work-section">
				<div className="work-section-head">
					<div>
						<p className="eyebrow">// Fast overview</p>
						<h2>What you get and why it matters.</h2>
					</div>
				</div>
				<div className="cards">
					<article className="card">
						<p className="card-tag">Who this is for</p>
						<p>Businesses and creators that need predictable content output with clear quality standards.</p>
					</article>
					<article className="card">
						<p className="card-tag">What improves</p>
						<p>Publishing consistency, campaign velocity, and content quality across short-form channels.</p>
					</article>
					<article className="card">
						<p className="card-tag">Next action</p>
						<p>Choose a package or contact us for a custom workflow based on your weekly content goals.</p>
					</article>
				</div>
			</section>

			<section className="work-section">
				<div className="work-section-head">
					<div>
						<p className="eyebrow">// Service details</p>
						<h2>{footerTitle}</h2>
					</div>
				</div>
				<div className="cards">
					{cards.map((card) => (
						<article className="card" key={card.title}>
							<p className="card-tag">{card.title}</p>
							<p>{card.copy}</p>
							{card.items ? (
								<div className="chip-row compact">
									{card.items.map((item) => (
										<span key={item}>{item}</span>
									))}
								</div>
							) : null}
							{card.result ? (
								<p className="tiny-label" style={{ marginTop: '0.8rem' }}>
									Result: {card.result}
								</p>
							) : null}
						</article>
					))}
				</div>
			</section>

			<section className="contact-wrap">
				<p className="eyebrow">// Positioning</p>
				<h2>Built as an AI-powered content repurposing system.</h2>
				<div className="mini-cols">
					<div>
						<p className="tiny-label">Workflow model</p>
						<p>{seoBrief.mainHook}</p>
					</div>
					<div>
						<p className="tiny-label">Business outcome focus</p>
						<p>{seoBrief.contentPillars[3]}</p>
					</div>
					<div>
						<p className="tiny-label">Best-fit clients</p>
						<p>{seoBrief.contentPillars[4]}</p>
					</div>
				</div>
			</section>
		</section>
	)
}

export function BlogArticlePage({ article, slug }) {
	const articleUrl = `https://clipforge.ai/blog/${slug}`
	const articleSchema = {
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: article.title,
		description: article.summary,
		mainEntityOfPage: articleUrl,
		url: articleUrl,
		datePublished: '2026-01-01',
		dateModified: '2026-05-11',
		keywords: [article.keyword, article.category],
		articleSection: article.category,
		author: {
			'@type': 'Organization',
			name: 'ClipForge',
		},
		publisher: {
			'@type': 'Organization',
			name: 'ClipForge',
			logo: {
				'@type': 'ImageObject',
				url: 'https://res.cloudinary.com/dd8gmorek/video/upload/f_auto,q_auto,w_1200,c_fill,so_1/v1777735901/This_perfume_ad_was_made_completely_with_AI_F1yRHMKjJOo_bsklpr_upgyl5.jpg',
			},
		},
		about: seoBrief.contentPillars,
	}

	const articleFaqSchema = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: article.faqs.map((item) => ({
			'@type': 'Question',
			name: item.q,
			acceptedAnswer: {
				'@type': 'Answer',
				text: item.a,
			},
		})),
	}

	return (
		<section className="work-page">
			<JsonLd data={articleSchema} />
			<JsonLd data={articleFaqSchema} />
			<section className="hero">
				<div className="hero-content">
					<div className="hero-right">
						<p className="eyebrow">{article.eyebrow}</p>
						<h1 className="hero-title">{splitLines(article.lines)}</h1>
						<p className="hero-copy">{article.intro}</p>
					</div>
					<div className="hero-left">
						<div className="hero-cta">
							<p className="hero-cta-label">{article.summary}</p>
							<div className="hero-meta">
								<p>
									// Primary Keyword
									<br />
									{article.keyword}
								</p>
								<p>
									// Category
									<br />
									{article.category}
								</p>
							</div>
							<div className="hero-cta-btns">
								<Link className="cta-btn" to="/contact">
									Request the Service <span aria-hidden="true">-&gt;</span>
								</Link>
								<Link className="cta-btn cta-btn--wa" to="/blog">
									More Articles <span aria-hidden="true">-&gt;</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="work-section">
				<div className="work-section-head">
					<div>
						<p className="eyebrow">// Article takeaways</p>
						<h2>What the reader should understand.</h2>
					</div>
					<p className="page-title">{article.category}</p>
				</div>
				<div className="cards">
					{article.points.map((point, index) => (
						<article className="card" key={point}>
							<p className="card-tag">Point {index + 1}</p>
							<p>{point}</p>
						</article>
					))}
				</div>
			</section>

			<section className="work-section">
				<div className="work-section-head">
					<div>
						<p className="eyebrow">// Context and positioning</p>
						<h2>Applied to real creator and business workflows.</h2>
					</div>
					<p className="page-title">Local and niche relevance</p>
				</div>
				<div className="cards">
					<article className="card">
						<p className="card-tag">Niche pain point</p>
						<p>{seoBrief.mustAnswer[4]}</p>
					</article>
					<article className="card">
						<p className="card-tag">Platform behavior</p>
						<p>{seoBrief.contentPillars[2]}</p>
					</article>
					<article className="card">
						<p className="card-tag">Competitive edge</p>
						<p>{seoBrief.mainHook}</p>
					</article>
				</div>
			</section>

			<section className="contact-wrap">
				<p className="eyebrow">// FAQ</p>
				<h2>Common follow-up questions.</h2>
				<div className="mini-cols">
					{article.faqs.map((item) => (
						<div key={item.q}>
							<p className="tiny-label">{item.q}</p>
							<p>{item.a}</p>
						</div>
					))}
				</div>
			</section>
		</section>
	)
}
