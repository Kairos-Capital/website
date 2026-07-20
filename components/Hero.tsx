'use client'

import { tinaField } from 'tinacms/dist/react'
import type { PhilosophyTabKey } from './PhilosophyTabs'

interface HeroData {
  eyebrow?: string
  headline?: string
  sub?: string
  primaryButtonText?: string
  primaryButtonHref?: string
}

const defaultHero: HeroData = {
  eyebrow: 'Business Acquisition',
  headline: 'We buy businesses.\nTo build *legacies*.',
  sub: 'Kairos Capital acquires great businesses from founders ready for their next chapter — and stewards them for the long term.',
  primaryButtonText: "Let's Talk.",
  primaryButtonHref: '#contact',
}

interface HeroTab {
  key: PhilosophyTabKey
  title: string
}

function parseHeadline(text: string): string {
  return text
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/\n/g, '<br />')
}

export default function Hero({
  data,
  tinaFieldId,
  tabs,
  activeTab,
  onTabChange,
}: {
  data?: HeroData
  tinaFieldId?: string
  tabs: HeroTab[]
  activeTab: PhilosophyTabKey
  onTabChange: (key: PhilosophyTabKey) => void
}) {
  const d: HeroData = { ...defaultHero, ...data }
  const tinaData = data as Record<string, unknown> | undefined

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
        </div>
      </div>
      <div className="hero-visual" />
      <div className="hero-stat-bar" role="tablist" aria-label="Our Philosophy">
        {tabs.map((tab) => {
          const isActive = tab.key === activeTab
          return (
            <button
              key={tab.key}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`hero-stat${isActive ? ' is-active' : ''}`}
              onClick={() => onTabChange(tab.key)}
            >
              <span className="hero-stat-tab-label">{tab.title}</span>
            </button>
          )
        })}
      </div>
    </section>
  )
}
