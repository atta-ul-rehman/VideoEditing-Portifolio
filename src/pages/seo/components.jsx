import { Link } from 'react-router-dom'
import { supportingContentMap } from './data'
import { seoBrief } from './data'
import { articlePages, servicePages } from './data'
import './service-page.css'
import './blog-pages.css'

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
		<section className="sp-page">
			<JsonLd data={serviceSchema} />
			<JsonLd data={faqSchema} />

			{/* ── Premium Hero ── */}
			<section className="sp-hero">
				<div className="sp-hero__inner">
					<div className="sp-hero__text">
						<p className="sp-eyebrow">{page.eyebrow}</p>
						<h1 className="sp-title">{splitLines(page.lines)}</h1>
						<p className="sp-intro">{page.intro}</p>
						<div className="sp-hero__stats">
							<div className="sp-stat"><strong>48h</strong><span>Turnaround</span></div>
							<div className="sp-stat"><strong>∞</strong><span>Revisions</span></div>
							<div className="sp-stat"><strong>AI</strong><span>Powered</span></div>
						</div>
						<div className="sp-hero__ctas">
							<Link className="sp-cta sp-cta--primary" to="/contact">
								Book Free Strategy Call →
							</Link>
							<Link className="sp-cta sp-cta--outline" to="/pricing">
								View Pricing
							</Link>
						</div>
					</div>
					<div className={`sp-hero__media${serviceVideo2 ? ' sp-hero__media--dual' : ''}`}>
						<div className="sp-video-frame">
							<video src={serviceVideo} poster={servicePoster || undefined} autoPlay muted loop playsInline preload="metadata" />
							<div className="sp-video-label">// Live Sample</div>
						</div>
						{serviceVideo2 && (
							<div className="sp-video-frame sp-video-frame--secondary">
								<video src={serviceVideo2} poster={servicePoster2 || undefined} autoPlay muted loop playsInline preload="metadata" />
							</div>
						)}
					</div>
				</div>
			</section>

			<div className="sp-divider" />

			{/* ── Is This Right For You ── */}
			<section className="sp-section">
				<div className="sp-section__head">
					<div>
						<p className="sp-eyebrow">// Quick decision guide</p>
						<h2>Is this the right fit for your goals?</h2>
					</div>
					<span className="sp-section__meta">Buyer clarity</span>
				</div>
				<div className="sp-cards">
					<article className="sp-card">
						<p className="sp-card__tag">Best for</p>
						<p>Teams that already create raw content and need consistent short-form output without hiring in-house editors.</p>
					</article>
					<article className="sp-card">
						<p className="sp-card__tag">Expected outcome</p>
						<p>Higher publishing consistency, better retention, and faster content production week after week.</p>
					</article>
					<article className="sp-card">
						<p className="sp-card__tag">What to prepare</p>
						<p>Share brand style, footage links, and goals. We handle editing, structure, captions, and delivery format.</p>
					</article>
				</div>
			</section>

			<div className="sp-divider" />

			{/* ── Benefits ── */}
			<section className="sp-section">
				<div className="sp-section__head">
					<div>
						<p className="sp-eyebrow">// What this includes</p>
						<h2>Built to convert, not just to look good.</h2>
					</div>
					<span className="sp-section__meta">{page.title}</span>
				</div>
				<div className="sp-cards">
					{page.benefits.map((item) => (
						<article className="sp-card" key={item.title}>
							<p className="sp-card__tag">{item.title}</p>
							<p>{item.copy}</p>
						</article>
					))}
				</div>
			</section>

			<div className="sp-divider" />

			{/* ── Competitor angles ── */}
			<section className="sp-section">
				<div className="sp-section__head">
					<div>
						<p className="sp-eyebrow">// Why us over gigs and tools</p>
						<h2>A strategic editing partner, not a one-off freelancer.</h2>
					</div>
					<span className="sp-section__meta">Positioning</span>
				</div>
				<div className="sp-cards">
					{seoBrief.competitorAngles.map((angle) => (
						<article className="sp-card" key={angle}>
							<p className="sp-card__tag">Competitor angle</p>
							<p>{angle}</p>
						</article>
					))}
				</div>
			</section>

			<div className="sp-divider" />

			{/* ── Packages ── */}
			<section className="sp-section">
				<div className="sp-section__head">
					<div>
						<p className="sp-eyebrow">// Package model</p>
						<h2>Simple ways to start and scale.</h2>
					</div>
					<span className="sp-section__meta">Starting point for custom quotes</span>
				</div>
				<div className="sp-cards sp-cards--ranked">
					{page.packages.map((item) => (
						<article className="sp-card sp-card--ranked" key={item.title}>
							<p className="sp-card__tag">{item.title}</p>
							<p>{item.copy}</p>
						</article>
					))}
				</div>
			</section>

			<div className="sp-divider" />

			{/* ── Process ── */}
			<section className="sp-process">
				<div className="sp-process__head">
					<p className="sp-eyebrow">// Delivery workflow</p>
					<h2>How the project moves.</h2>
				</div>
				<div className="sp-steps">
					{page.process.map((step) => (
						<div className="sp-step" key={step.number}>
							<div className="sp-step__num">{step.number}</div>
							<h3>{step.title}</h3>
							<p>{step.copy}</p>
						</div>
					))}
				</div>
			</section>

			{/* ── Supporting content cluster ── */}
			{support ? (
				<>
					<div className="sp-divider" />
					<section className="sp-section">
						<div className="sp-section__head">
							<div>
								<p className="sp-eyebrow">// Supporting content</p>
								<h2>{support.title}</h2>
							</div>
							<span className="sp-section__meta">SEO cluster topics</span>
						</div>
						<div className="sp-cards">
							{support.topics.map((topic) => (
								<article className="sp-card" key={topic}>
									<p className="sp-card__tag">Supporting topic</p>
									<p>{topic}</p>
									<div style={{ marginTop: 'auto', paddingTop: '0.8rem' }}>
										<Link
											className="sp-cta sp-cta--outline"
											style={{ fontSize: '0.66rem', padding: '0.45rem 0.85rem' }}
											to={resolveRelatedLink(topic) ?? '/blog'}
										>
											{resolveRelatedLink(topic) ? 'Open Topic' : 'View Blog'} →
										</Link>
									</div>
								</article>
							))}
						</div>
						<div className="sp-chips">
							{support.related.map((item) => {
								const to = resolveRelatedLink(item)
								return to ? <Link key={item} to={to}>{item}</Link> : <span key={item}>{item}</span>
							})}
						</div>
					</section>
				</>
			) : null}

			<div className="sp-divider" />

			{/* ── FAQ ── */}
			<section className="sp-faq">
				<div className="sp-faq__head">
					<p className="sp-eyebrow">// FAQ</p>
					<h2>Questions serious buyers ask before signing.</h2>
				</div>
				<div className="sp-faq__list">
					{page.faqs.map((item) => (
						<div className="sp-faq__item" key={item.q}>
							<p className="sp-faq__q">{item.q}</p>
							<p className="sp-faq__a">{item.a}</p>
						</div>
					))}
					<div className="sp-faq__item">
						<p className="sp-faq__q">Who is this service for?</p>
						<p className="sp-faq__a">Creators, agencies, ecommerce brands, coaches, and real estate teams that need consistent output.</p>
					</div>
					<div className="sp-faq__item">
						<p className="sp-faq__q">Do you work with international clients?</p>
						<p className="sp-faq__a">{seoBrief.locationContext}</p>
					</div>
				</div>
			</section>

			{/* ── Closing CTA ── */}
			<section className="sp-cta-strip">
				<p className="sp-eyebrow" style={{ margin: '0 auto 0.8rem' }}>// Ready to start?</p>
				<h2>Let's build your content engine.</h2>
				<p>{page.summary}</p>
				<div className="sp-hero__ctas" style={{ justifyContent: 'center' }}>
					<Link className="sp-cta sp-cta--primary" to="/contact">
						Book Your Free Strategy Call →
					</Link>
					<Link className="sp-cta sp-cta--outline" to="/pricing">
						View Pricing Options
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
									Book Your Free Strategy Call <span aria-hidden="true">-&gt;</span>
								</Link>
								<Link className="cta-btn cta-btn--wa" to="/pricing">
									View Pricing Options <span aria-hidden="true">-&gt;</span>
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
						<h2>What you get and why it drives results.</h2>
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
				<h2>Built as a performance-focused content engine.</h2>
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
		<section className="ba-page">
			<JsonLd data={articleSchema} />
			<JsonLd data={articleFaqSchema} />
			<section className="ba-hero">
				<div className="ba-hero__inner">
					<div>
						<p className="ba-eyebrow">{article.eyebrow}</p>
						<h1 className="ba-title">{splitLines(article.lines)}</h1>
						<p className="ba-copy">{article.intro}</p>
					</div>
					<div className="ba-panel">
							<p className="ba-panel__label">{article.summary}</p>
							<div className="ba-meta">
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
							<div className="ba-ctas">
								<Link className="ba-btn ba-btn--primary" to="/contact">
									Request This Service <span aria-hidden="true">-&gt;</span>
								</Link>
								<Link className="ba-btn ba-btn--ghost" to="/blog">
									Read More Guides <span aria-hidden="true">-&gt;</span>
								</Link>
							</div>
					</div>
				</div>
			</section>

			<div className="ba-divider" />

			<section className="ba-section">
				<div className="ba-head">
					<div>
						<p className="ba-eyebrow">// Article takeaways</p>
						<h2>What you should apply immediately.</h2>
					</div>
					<p className="ba-meta-note">{article.category}</p>
				</div>
				<div className="ba-grid">
					{article.points.map((point, index) => (
						<article className="ba-card" key={point}>
							<p className="ba-tag">Point {index + 1}</p>
							<p>{point}</p>
						</article>
					))}
				</div>
			</section>

			<div className="ba-divider" />

			<section className="ba-section">
				<div className="ba-head">
					<div>
						<p className="ba-eyebrow">// Context and positioning</p>
						<h2>Applied to real creator and business workflows.</h2>
					</div>
					<p className="ba-meta-note">Local and niche relevance</p>
				</div>
				<div className="ba-grid">
					<article className="ba-card">
						<p className="ba-tag">Niche pain point</p>
						<p>{seoBrief.mustAnswer[4]}</p>
					</article>
					<article className="ba-card">
						<p className="ba-tag">Platform behavior</p>
						<p>{seoBrief.contentPillars[2]}</p>
					</article>
					<article className="ba-card">
						<p className="ba-tag">Competitive edge</p>
						<p>{seoBrief.mainHook}</p>
					</article>
				</div>
			</section>

			<div className="ba-divider" />

			<section className="ba-faq">
				<p className="ba-eyebrow">// FAQ</p>
				<h2>Common follow-up questions from buyers.</h2>
				<div className="ba-faq-list">
					{article.faqs.map((item) => (
						<div className="ba-faq-item" key={item.q}>
							<p className="ba-faq-q">{item.q}</p>
							<p className="ba-faq-a">{item.a}</p>
						</div>
					))}
				</div>
			</section>
		</section>
	)
}
