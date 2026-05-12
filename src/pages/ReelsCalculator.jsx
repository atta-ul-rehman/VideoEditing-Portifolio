import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './reels-calculator-page.css'

/* ─── Quiz data ─── */
const questions = [
  {
    id: 'goal',
    question: 'What is your main goal on Instagram?',
    options: [
      { value: 'growth',      label: 'Grow My Following' },
      { value: 'engagement',  label: 'More Likes & Comments' },
      { value: 'sales',       label: 'Get Clients or Sales' },
      { value: 'brand',       label: 'Build Brand Awareness' },
    ],
  },
  {
    id: 'content',
    question: 'What type of content do you create?',
    options: [
      { value: 'talking',  label: 'Talking Head / Face Cam' },
      { value: 'faceless', label: 'Faceless / B-Roll / Voiceover' },
      { value: 'product',  label: 'Product / Ecommerce' },
      { value: 'podcast',  label: 'Podcast Clips / Interviews' },
    ],
  },
  {
    id: 'team',
    question: 'Do you create content solo or with a team?',
    options: [
      { value: 'solo',  label: 'Solo Creator' },
      { value: 'small', label: 'Small Team (2–3 people)' },
      { value: 'brand', label: 'Brand or Agency' },
    ],
  },
  {
    id: 'hours',
    question: 'How many hours per week can you dedicate to content?',
    options: [
      { value: 'low',  label: '1 to 3 Hours' },
      { value: 'mid',  label: '4 to 6 Hours' },
      { value: 'high', label: '7 to 10 Hours' },
      { value: 'full', label: 'More than 10 Hours' },
    ],
  },
]

/* ─── Plan logic ─── */
const generatePlan = ({ goal, content, team, hours }) => {
  const hourBase  = { low: 2, mid: 4, high: 6, full: 8 }[hours]
  const teamMod   = { solo: -1, small: 0, brand: 1 }[team]
  const goalMod   = { growth: 1, engagement: 0, sales: -1, brand: 0 }[goal]
  const perWeek   = Math.min(10, Math.max(2, hourBase + teamMod + goalMod))
  const perMonth  = perWeek * 4

  const mixes = {
    talking:  ['60% talking head hooks', '25% storytelling clips', '15% trending audio'],
    faceless: ['55% educational B-roll', '30% voiceover explainers', '15% text-led reels'],
    product:  ['50% product demos', '30% UGC-style reviews', '20% before and after'],
    podcast:  ['50% best clip highlights', '30% quote reels', '20% short interviews'],
  }

  const times = {
    growth:      '6–9am and 7–10pm daily',
    engagement:  '12–2pm and 7–9pm weekdays',
    sales:       'Tue–Thu 8–10am',
    brand:       'Weekday mornings 7–9am',
  }

  const tips = {
    growth_talking:     'Hook in first 1.5s. Use a pattern interrupt every 3 seconds to hold retention.',
    growth_faceless:    'Your thumbnail frame matters more than the video. Pick your highest-contrast moment.',
    growth_product:     'Lead with the result, not the product. Show transformation in the first 2 seconds.',
    growth_podcast:     'Cut to your sharpest single insight. No teasing — deliver value immediately.',
    engagement_talking: 'End with a bold statement or question. Replies and saves extend your reach.',
    engagement_faceless:'Use animated captions that guide the eye — they boost watch time on muted views.',
    engagement_product: 'Ask followers to vote A vs B. Decision-style reels drive the most comments.',
    engagement_podcast: 'Pull the most counterintuitive quote. Controversy = shareability.',
    sales_talking:      'Lead with proof (result), then story, then offer. Never reverse this order.',
    sales_faceless:     'Narrate a client transformation over B-roll. Social proof in the first 3 seconds.',
    sales_product:      'UGC-style honest review format converts 2–3x better than polished ads.',
    sales_podcast:      'Open with the exact problem your ideal buyer feels every morning.',
    brand_talking:      'Pick one color filter and font style. Apply it to every single reel.',
    brand_faceless:     'Build a 2-second branded intro. Repetition builds recognition fast.',
    brand_product:      'Consistent logo placement, sound design, and color = mental real estate.',
    brand_podcast:      'Use the same clip template layout for every episode. Make it instantly recognizable.',
  }

  const labels = {
    goal:    { growth: 'Grow Following', engagement: 'Engagement', sales: 'Sales / Clients', brand: 'Brand Awareness' },
    content: { talking: 'Talking Head', faceless: 'Faceless / B-Roll', product: 'Product / Ecommerce', podcast: 'Podcast Clips' },
    team:    { solo: 'Solo Creator', small: 'Small Team', brand: 'Brand / Agency' },
    hours:   { low: '1–3 hrs/week', mid: '4–6 hrs/week', high: '7–10 hrs/week', full: '10+ hrs/week' },
  }

  return {
    perWeek,
    perMonth,
    contentMix: mixes[content],
    bestTimes:  times[goal],
    tip:        tips[`${goal}_${content}`] || tips[`${goal}_talking`],
    labels,
  }
}

/* ─── Main page ─── */
export function ReelsCalculator() {
  const navigate   = useNavigate()
  const [step, setStep]         = useState(0)
  const [answers, setAnswers]   = useState({})
  const [selected, setSelected] = useState(null)

  const isIntro  = step === 0
  const isResult = step === questions.length + 1
  const currentQ = !isIntro && !isResult ? questions[step - 1] : null
  const plan     = isResult ? generatePlan(answers) : null

  const handleStart = () => setStep(1)

  const handleSelect = (value) => setSelected(value)

  const handleNext = () => {
    if (!selected) return
    const updated = { ...answers, [currentQ.id]: selected }
    setAnswers(updated)
    setSelected(null)
    if (step < questions.length) {
      setStep(step + 1)
    } else {
      setStep(questions.length + 1)
    }
  }

  const handleReset = () => {
    setStep(0)
    setAnswers({})
    setSelected(null)
  }

  return (
    <section className="calc-page rc-page">
      {/* ── SEO heading always in the DOM ── */}
      <div className="calc-page-header">
        <span className="eyebrow">// FREE TOOL</span>
        <h1>How Many Reels Should I Post Per Week?</h1>
        <p className="calc-page-sub">
          Answer 4 quick questions and get a personalized weekly reels plan in under 60 seconds.
        </p>
      </div>

      {/* ── Interactive shell ── */}
      <div className="calc-shell">
        {isIntro && <IntroCard onStart={handleStart} />}
        {currentQ && (
          <QuestionCard
            key={step}
            question={currentQ}
            step={step}
            total={questions.length}
            selected={selected}
            onSelect={handleSelect}
            onNext={handleNext}
          />
        )}
        {isResult && plan && (
          <ResultCard
            plan={plan}
            answers={answers}
            onReset={handleReset}
            onHire={() => navigate('/contact')}
          />
        )}
      </div>

      {/* ── SEO body copy ── */}
      <div className="calc-seo-content">
        <h2>How Many Reels Should You Post on Instagram in 2026?</h2>
        <p>
          The right frequency depends on your goal, content type, team size, and available time. Most
          creators either under-post (fewer than 2 per week) and lose algorithmic momentum, or over-post
          without maintaining quality and burn out within weeks.
        </p>

        <h3>Reels Posting Frequency by Goal</h3>
        <ul>
          <li>
            <strong>Growing followers:</strong> 5–7 reels per week. Volume and consistency signal
            growth intent to the algorithm.
          </li>
          <li>
            <strong>Building engagement:</strong> 3–5 reels per week. Give your audience breathing room
            to comment, save, and share.
          </li>
          <li>
            <strong>Generating sales or leads:</strong> 2–4 reels per week. Prioritize quality hooks
            and conversion-optimized scripts over raw output.
          </li>
          <li>
            <strong>Brand awareness:</strong> 4–6 reels per week. Consistency matters more than
            frequency — every post should reinforce the same visual identity.
          </li>
        </ul>

        <h3>The Most Common Reels Mistake</h3>
        <p>
          Posting daily for two weeks then disappearing for a month. The Instagram algorithm rewards
          predictable schedules. A steady 3x per week beats an erratic 7x per week every single time.
          Use this calculator to find your sustainable frequency, then stick to it.
        </p>

        <h3>Should You Hire a Video Editor for Reels?</h3>
        <p>
          If your plan calls for 4 or more reels per week, editing becomes the bottleneck fast. Most
          creators spend 2–4 hours editing a single polished reel. At 5 reels per week that is 10–20
          hours of editing time — time better spent filming and planning. A dedicated reels editing
          service handles the full post-production workflow so you just film and post.
        </p>
      </div>
    </section>
  )
}

/* ─── Intro card ─── */
function IntroCard({ onStart }) {
  return (
    <div className="calc-card calc-intro">
      <p className="calc-tag">FREE REELS CALCULATOR</p>
      <h2>Get Your Personalized Reels Growth Plan</h2>
      <p className="calc-intro-body">
        Answer 4 quick questions about your goals and bandwidth. We calculate your exact weekly
        posting schedule with no email gate.
      </p>
      <div className="calc-intro-steps">
        {['Your goal', 'Content type', 'Your setup', 'Time available'].map((label, i) => (
          <div key={i} className="calc-intro-step">
            <span className="calc-intro-num">0{i + 1}</span>
            <span>{label}</span>
          </div>
        ))}
      </div>
      <button className="calc-btn" onClick={onStart}>
        Build My Plan →
      </button>
    </div>
  )
}

/* ─── Question card ─── */
function QuestionCard({ question, step, total, selected, onSelect, onNext }) {
  return (
    <div className="calc-card calc-question">
      <div className="calc-progress-track">
        <div className="calc-progress-fill" style={{ width: `${(step / total) * 100}%` }} />
      </div>
      <p className="calc-step-label">Question {step} of {total}</p>
      <h2 className="calc-q">{question.question}</h2>
      <div className={`calc-options calc-grid-${question.options.length}`}>
        {question.options.map((opt) => (
          <button
            key={opt.value}
            className={`calc-option${selected === opt.value ? ' is-selected' : ''}`}
            onClick={() => onSelect(opt.value)}
          >
            {opt.label}
          </button>
        ))}
      </div>
      <button
        className={`calc-btn${!selected ? ' calc-btn-muted' : ''}`}
        onClick={onNext}
        disabled={!selected}
      >
        {step === total ? 'Show My Plan →' : 'Next →'}
      </button>
    </div>
  )
}

/* ─── Result card ─── */
function ResultCard({ plan, answers, onReset, onHire }) {
  const { perWeek, perMonth, contentMix, bestTimes, tip, labels } = plan

  return (
    <div className="calc-card calc-result">
      <p className="calc-tag">// YOUR PERSONALIZED PLAN</p>

      <div className="calc-result-hero">
        <div className="calc-big-num-block">
          <span className="calc-big-num">{perWeek}</span>
          <span className="calc-big-num-label">Reels per week</span>
        </div>
        <div className="calc-big-num-block">
          <span className="calc-big-num">{perMonth}</span>
          <span className="calc-big-num-label">Reels per month</span>
        </div>
      </div>

      <div className="calc-result-grid">
        <div className="calc-result-block">
          <h3>Content Mix</h3>
          <ul>
            {contentMix.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="calc-result-block">
          <h3>Best Posting Times</h3>
          <p>{bestTimes}</p>
        </div>

        <div className="calc-result-block calc-tip-block">
          <h3>Your #1 Tip</h3>
          <p>{tip}</p>
        </div>

        <div className="calc-result-block">
          <h3>Based On</h3>
          <ul>
            <li>Goal: {labels.goal[answers.goal]}</li>
            <li>Content: {labels.content[answers.content]}</li>
            <li>Team: {labels.team[answers.team]}</li>
            <li>Hours: {labels.hours[answers.hours]}</li>
          </ul>
        </div>
      </div>

      <div className="calc-cta-block">
        <p className="calc-tag">// THE NEXT STEP</p>
        <h2>Want Us to Edit All {perMonth} Reels for You?</h2>
        <p>
          At {perWeek} reels per week, editing can consume 10 to 20+ hours every month. ClipForge
          handles hooks, captions, pacing, and delivery so you can focus on content and growth.
        </p>
        <div className="calc-cta-actions">
          <button className="calc-btn" onClick={onHire}>
            Get My Custom Quote →
          </button>
          <button className="calc-btn-ghost" onClick={onReset}>
            Recalculate
          </button>
        </div>
      </div>
    </div>
  )
}
