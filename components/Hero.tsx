interface Stat {
  number?: string
  label?: string
}

interface HeroData {
  eyebrow?: string
  headline?: string
  sub?: string
  primaryButtonText?: string
  primaryButtonHref?: string
  ghostButtonText?: string
  ghostButtonHref?: string
  stats?: Stat[]
}

const defaultHero: HeroData = {
  eyebrow: 'Business Acquisition',
  headline: 'We buy businesses.\nTo build *legacies*.',
  sub: 'Kairos Capital acquires great businesses from founders ready for their next chapter — and stewards them for the long term.',
  primaryButtonText: 'Sell Your Business',
  primaryButtonHref: '#contact',
  ghostButtonText: 'How It Works',
  ghostButtonHref: '#how',
  stats: [
    { number: '10+', label: 'Years Combined Experience' },
    { number: '$1M–10M', label: 'Revenue Sweet Spot' },
    { number: '60-day', label: 'Average Close Timeline' },
  ],
}

import { tinaField } from 'tinacms/dist/react'

function parseHeadline(text: string): string {
  return text
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/\n/g, '<br />')
}

export default function Hero({ data, tinaFieldId }: { data?: HeroData; tinaFieldId?: string }) {
  const d: HeroData = { ...defaultHero, ...data }
  const tinaData = data as Record<string, unknown> | undefined
  const stats = d.stats && d.stats.length >= 3 ? d.stats : defaultHero.stats!

  return (
    <section className="hero" style={{ padding: 0 }} data-tina-field={tinaFieldId}>
      <div className="hero-content">
        <p className="hero-eyebrow" data-tina-field={tinaData ? tinaField(tinaData, 'eyebrow') : undefined}>{d.eyebrow}</p>
        <h1
          className="hero-headline"
          data-tina-field={tinaData ? tinaField(tinaData, 'headline') : undefined}
          dangerouslySetInnerHTML={{ __html: parseHeadline(d.headline || defaultHero.headline!) }}
        />
        <p className="hero-sub" data-tina-field={tinaData ? tinaField(tinaData, 'sub') : undefined}>{d.sub}</p>
        <div className="hero-actions">
          <a href={d.primaryButtonHref || '#contact'} className="btn-primary" data-tina-field={tinaData ? tinaField(tinaData, 'primaryButtonText') : undefined}>
            {d.primaryButtonText}
          </a>
          <a href={d.ghostButtonHref || '#how'} className="btn-ghost" data-tina-field={tinaData ? tinaField(tinaData, 'ghostButtonText') : undefined}>
            {d.ghostButtonText}
          </a>
        </div>
      </div>
      <div className="hero-visual">
        <svg className="hero-mark" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="180" height="180" stroke="#f4be47" strokeWidth="18" fill="none" />
          <polygon points="100,25 175,165 25,165" fill="#f4be47" />
          <polygon points="100,70 145,155 55,155" fill="#111110" />
        </svg>
      </div>
      <div className="hero-stat-bar">
        {stats.slice(0, 3).map((stat, i) => (
          <div className="hero-stat" key={i} data-tina-field={tinaField(stat as Record<string, unknown>, 'number')}>
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
