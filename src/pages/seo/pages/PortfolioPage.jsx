import { SimpleLandingPage } from '../components'
import { portfolioHighlights } from '../data'

export function PortfolioPage() {
  return (
    <SimpleLandingPage
      eyebrow="// Portfolio"
      lines={['Selected', 'Work']}
      title="video editing portfolio"
      intro="Show your strongest examples of short form editing, podcast repurposing, faceless YouTube work, and ad creatives."
      footerTitle="What to display here"
      footerCopy="Use a mix of before/after edits, video samples, and short write-ups about outcomes."
      cards={portfolioHighlights}
    />
  )
}
