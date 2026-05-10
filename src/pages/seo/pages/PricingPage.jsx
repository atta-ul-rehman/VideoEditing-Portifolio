import { SimpleLandingPage } from '../components'
import { pricingPlans } from '../data'

export function PricingPage() {
  return (
    <SimpleLandingPage
      eyebrow="// Pricing"
      lines={['Simple', 'Pricing']}
      title="video editing pricing"
      intro="Use this page to explain productized offers, per-minute AI editing, and recurring packages for brands and creators."
      footerTitle="Packages and starting points"
      footerCopy="Clear pricing helps buyers move faster. Keep the offers easy to understand and easy to request."
      cards={pricingPlans}
    />
  )
}
