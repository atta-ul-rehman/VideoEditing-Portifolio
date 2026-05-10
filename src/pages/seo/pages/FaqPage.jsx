import { Link } from 'react-router-dom'
import { faqGroups } from '../data'
import { seoBrief } from '../data'

export function FaqPage() {
  const coreIntentQuestions = seoBrief.coreQuestions
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqGroups
      .flatMap((group) => group.faqs)
      .map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a,
        },
      })),
  }

  return (
    <section className="contact-wrap">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <p className="eyebrow">// FAQ Hub</p>
      <h2>Questions buyers and search engines ask most.</h2>
      {faqGroups.map((group) => (
        <div key={group.title} className="mini-cols">
          <div>
            <p className="tiny-label">{group.title}</p>
          </div>
          {group.faqs.map((item) => (
            <div key={item.q}>
              <p className="tiny-label">{item.q}</p>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
      ))}

      <div className="mini-cols">
        <div>
          <p className="tiny-label">Core search intent questions</p>
        </div>
        {coreIntentQuestions.map((question) => (
          <div key={question}>
            <p className="tiny-label">{question}</p>
            <p>
              This is answered throughout our service and article pages with practical workflow guidance and buyer-focused detail.
            </p>
          </div>
        ))}
      </div>

      <div className="mini-cols" style={{ marginTop: '1rem' }}>
        <div>
          <p className="tiny-label">Must-answer conversion topics</p>
        </div>
        {seoBrief.mustAnswer.slice(0, 3).map((topic) => (
          <div key={topic}>
            <p className="tiny-label">{topic}</p>
            <p>Addressed across service and blog pages with practical, buyer-focused detail.</p>
          </div>
        ))}
      </div>

      <div className="center-cta">
        <Link className="cta-btn" to="/contact">
          Ask a question <span aria-hidden="true">-&gt;</span>
        </Link>
      </div>
    </section>
  )
}
