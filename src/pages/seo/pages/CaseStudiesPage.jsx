import { SimpleLandingPage } from '../components'
import { caseStudies } from '../data'

export function CaseStudiesPage() {
  return (
    <SimpleLandingPage
      eyebrow="// Case Studies"
      lines={['Proof', 'That Works']}
      title="video editing case studies"
      intro="Case studies help buyers understand your process, niche fit, and the outcomes you can support."
      footerTitle="Use results, not vague claims"
      footerCopy="Show the before, the edit strategy, and the result so the page is useful for both users and AI systems."
      cards={caseStudies}
    />
  )
}
