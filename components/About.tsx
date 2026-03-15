interface AboutData {
  backgroundColor?: string
  label?: string
  headline?: string
  paragraphs?: string[]
}

const defaultData: AboutData = {
  label: 'Who We Are',
  headline: 'A different kind of\n*acquirer.*',
  paragraphs: [
    'Most buyers see businesses as assets to extract value from. We see them differently — as communities of people, relationships built over years, and reputations earned through hard work.',
    "When we acquire a business, we're making a long-term commitment. To the employees who depend on it. To the customers who trust it. To the founder who built it. We don't flip. We steward.",
    'Kairos is built on the belief that the right moment — and the right partner — can turn a transition into a legacy.',
  ],
}

import { tinaField } from 'tinacms/dist/react'

const DARK_BG = new Set(['purple', 'purple-dark', 'red', 'blue', 'ink', 'stone', 'black'])
function bgTheme(color?: string) { return color ? (DARK_BG.has(color) ? ' theme-dark' : ' theme-light') : '' }

export default function About({ data, tinaFieldId }: { data?: AboutData; tinaFieldId?: string }) {
  const d: AboutData = { ...defaultData, ...data }
  const tinaData = data as Record<string, unknown> | undefined
  const bgStyle = d.backgroundColor ? { background: `var(--${d.backgroundColor})` } : undefined
  const paragraphs = d.paragraphs && d.paragraphs.length > 0 ? d.paragraphs : defaultData.paragraphs!
  const headlineHtml = (d.headline || defaultData.headline!)
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/\n/g, '<br />')

  return (
    <section className={`about${bgTheme(d.backgroundColor)}`} id="about" style={bgStyle} data-tina-field={tinaFieldId}>
      <div className="section-inner">
        <div className="about-grid reveal">
          <div>
            <p className="section-label" data-tina-field={tinaData ? tinaField(tinaData, 'label') : undefined}>{d.label}</p>
            <h2 className="about-headline" data-tina-field={tinaData ? tinaField(tinaData, 'headline') : undefined} dangerouslySetInnerHTML={{ __html: headlineHtml }} />
          </div>
          <div className="about-body" data-tina-field={tinaData ? tinaField(tinaData, 'paragraphs') : undefined}>
            {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </div>
    </section>
  )
}
