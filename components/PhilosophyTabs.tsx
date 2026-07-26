'use client'

import { tinaField } from 'tinacms/dist/react'
import { Icon, IconName } from './Icons'

export type PhilosophyTabKey = 'rightMoment' | 'builtDifferently' | 'investmentPhilosophy'

interface WeightPoint {
  icon?: IconName
  text?: string
}

interface RightMomentTab {
  tabTitle?: string
  topEyebrow?: string
  eyebrow?: string
  headline?: string
  definition?: string
  weightPoints?: WeightPoint[]
  quoteIntro?: string
  quoteCallout?: string
  quoteOutro?: string
}

interface Principle {
  icon?: IconName
  text?: string
}

interface BuiltDifferentlyTab {
  tabTitle?: string
  label?: string
  headline?: string
  leadParagraph?: string
  principles?: Principle[]
  pullQuoteIntro?: string
  pullQuoteCallout?: string
}

interface PhilosophyOption {
  title?: string
  description?: string
  bullets?: string[]
  isHighlighted?: boolean
}

interface InvestmentPhilosophyTab {
  tabTitle?: string
  label?: string
  headline?: string
  options?: PhilosophyOption[]
}

export interface PhilosophyTabsData {
  rightMoment?: RightMomentTab
  builtDifferently?: BuiltDifferentlyTab
  investmentPhilosophy?: InvestmentPhilosophyTab
}

const defaults: Required<PhilosophyTabsData> = {
  rightMoment: {
    tabTitle: 'The Right Moment',
    topEyebrow: 'Our Story',
    eyebrow: "Why We're Called *Kairos*",
    headline: 'The *right* moment.',
    definition: 'Greek (καιρός) — the right and opportune moment',
    weightPoints: [
      { icon: 'building', text: 'Every great business reaches a defining moment.' },
      { icon: 'person', text: 'The founder who built it feels the weight.' },
      { icon: 'group', text: 'The employees wonder if their leader will stay.' },
      { icon: 'handshake', text: 'The customers sense change in the air.' },
    ],
    quoteIntro: "The question isn't whether that moment comes, it's whether the right partner and support is there when it does.",
    quoteCallout: "That's why we exist.",
    quoteOutro: 'We recognize the weight of that moment and bring the care, experience, and long-term mindset to navigate it the right way.',
  },
  builtDifferently: {
    tabTitle: 'Built Differently',
    label: 'Who We Are',
    headline: 'A different kind of\n*acquirer.*',
    leadParagraph: 'Most buyers see businesses as assets. We see them differently: *Communities. Relationships. Reputations* built over time.',
    principles: [
      {
        icon: 'group',
        text: 'When we acquire a business, we make a long term commitment to the people who depend on it and the legacy behind it. *We do not flip businesses. We steward them.*',
      },
      {
        icon: 'shield',
        text: 'We bring the experience, operational discipline, and leadership needed to help them grow and endure without losing what made them great.',
      },
      {
        icon: 'chart',
        text: 'Kairos is built on the belief that the *right partner*, at the *right moment*, can turn a transition into a legacy.',
      },
    ],
    pullQuoteIntro: "We don't just acquire businesses.",
    pullQuoteCallout: 'We commit to their future.',
  },
  investmentPhilosophy: {
    tabTitle: 'Investment Philosophy',
    label: 'Your Options',
    headline: 'Three paths. One *clear* choice.',
    options: [],
  },
}

function emText(s: string): string {
  return s.replace(/\*([^*]+)\*/g, '<em>$1</em>').replace(/\n/g, '<br />')
}

export default function PhilosophyTabs({
  data,
  activeTab,
  tinaFieldId,
}: {
  data?: PhilosophyTabsData
  activeTab: PhilosophyTabKey
  tinaFieldId?: string
}) {
  const merged: Required<PhilosophyTabsData> = {
    rightMoment: { ...defaults.rightMoment, ...(data?.rightMoment || {}) },
    builtDifferently: { ...defaults.builtDifferently, ...(data?.builtDifferently || {}) },
    investmentPhilosophy: { ...defaults.investmentPhilosophy, ...(data?.investmentPhilosophy || {}) },
  }
  const tinaData = data as Record<string, unknown> | undefined

  return (
    <section className="philosophy-tabs" id="our-story" data-active-tab={activeTab} data-tina-field={tinaFieldId}>
      <div className="philosophy-tabs-inner">
        {activeTab === 'rightMoment' && (
          <div
            className="philosophy-panel philosophy-panel--right-moment"
            data-tina-field={tinaData ? tinaField(tinaData, 'rightMoment') : undefined}
          >
            <div className="rm-col rm-col--intro">
              {merged.rightMoment.topEyebrow && (
                <div className="rm-eyebrow-row">
                  <span className="rm-eyebrow-line" aria-hidden />
                  <p className="rm-eyebrow">{merged.rightMoment.topEyebrow}</p>
                </div>
              )}
              <h2
                className="rm-title"
                dangerouslySetInnerHTML={{ __html: emText(merged.rightMoment.eyebrow!) }}
              />
              <div className="rm-divider" />
              <div className="rm-callout-block">
                <div className="rm-icon-circle rm-icon-circle--lg">
                  <Icon name="clock" />
                </div>
                <p
                  className="rm-callout"
                  dangerouslySetInnerHTML={{ __html: emText(merged.rightMoment.headline!) }}
                />
                <p className="rm-definition">{merged.rightMoment.definition}</p>
              </div>
            </div>

            <div className="rm-col rm-col--weights">
              {(merged.rightMoment.weightPoints || []).map((wp, i) => (
                <div className="rm-weight" key={i}>
                  <div className="rm-icon-circle">
                    {wp.icon ? <Icon name={wp.icon} /> : null}
                  </div>
                  <p className="rm-weight-text">{wp.text}</p>
                </div>
              ))}
            </div>

            <div className="rm-col rm-col--quote">
              <span className="rm-quote-mark" aria-hidden>&ldquo;</span>
              <p className="rm-quote-intro">{merged.rightMoment.quoteIntro}</p>
              <p className="rm-quote-callout">{merged.rightMoment.quoteCallout}</p>
              <p className="rm-quote-outro">{merged.rightMoment.quoteOutro}</p>
            </div>
          </div>
        )}

        {activeTab === 'builtDifferently' && (
          <div
            className="philosophy-panel philosophy-panel--built-differently"
            data-tina-field={tinaData ? tinaField(tinaData, 'builtDifferently') : undefined}
          >
            <div className="bd-col bd-col--main">
              <div className="bd-eyebrow-row">
                <span className="bd-eyebrow-line" aria-hidden />
                <p className="bd-eyebrow">{merged.builtDifferently.label}</p>
              </div>
              <h2
                className="bd-headline"
                dangerouslySetInnerHTML={{ __html: emText(merged.builtDifferently.headline!) }}
              />
              <p
                className="bd-lead"
                dangerouslySetInnerHTML={{ __html: emText(merged.builtDifferently.leadParagraph || '') }}
              />
              <div className="bd-principles">
                {(merged.builtDifferently.principles || []).map((principle, i) => (
                  <div className="bd-principle" key={i}>
                    <div className="rm-icon-circle">
                      {principle.icon ? <Icon name={principle.icon} /> : null}
                    </div>
                    <p
                      className="bd-principle-text"
                      dangerouslySetInnerHTML={{ __html: emText(principle.text || '') }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="bd-col bd-col--quote">
              <span className="bd-quote-mark" aria-hidden>&ldquo;</span>
              <p className="bd-quote-intro">{merged.builtDifferently.pullQuoteIntro}</p>
              <p className="bd-quote-callout">{merged.builtDifferently.pullQuoteCallout}</p>
            </div>
          </div>
        )}

        {activeTab === 'investmentPhilosophy' && (
          <div
            className="philosophy-panel"
            data-tina-field={tinaData ? tinaField(tinaData, 'investmentPhilosophy') : undefined}
          >
            <div className="philosophy-panel-header">
              <p className="philosophy-section-label">{merged.investmentPhilosophy.label}</p>
              <h2
                className="philosophy-headline"
                dangerouslySetInnerHTML={{ __html: emText(merged.investmentPhilosophy.headline!) }}
              />
            </div>
            <div className="decision-frame-grid">
              {(merged.investmentPhilosophy.options || []).map((option, i) => (
                <div
                  key={i}
                  className={`decision-option${option.isHighlighted ? ' decision-option--highlighted' : ''}`}
                >
                  <div className="decision-option-header">
                    <h3 className="decision-option-title">{option.title}</h3>
                    <p className="decision-option-desc">{option.description}</p>
                  </div>
                  <ul className="decision-option-bullets">
                    {(option.bullets || []).map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
