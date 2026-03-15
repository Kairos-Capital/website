interface CtaData {
  backgroundColor?: string
  headline?: string
  sub?: string
  buttonText?: string
  contactEmail?: string
}

const defaultData: CtaData = {
  headline: 'Ready to talk about\nyour *next chapter?*',
  sub: 'No pressure. No NDAs to start. Just an honest conversation about your business and what comes next.',
  buttonText: 'Start a Conversation',
  contactEmail: 'hello@kairos.capital',
}

import { tinaField } from 'tinacms/dist/react'

const DARK_BG = new Set(['purple', 'purple-dark', 'red', 'blue', 'ink', 'stone', 'black'])
function bgTheme(color?: string) { return color ? (DARK_BG.has(color) ? ' theme-dark' : ' theme-light') : '' }

export default function CtaSection({ data, tinaFieldId }: { data?: CtaData; tinaFieldId?: string }) {
  const d: CtaData = { ...defaultData, ...data }
  const tinaData = data as Record<string, unknown> | undefined
  const bgStyle = d.backgroundColor ? { background: `var(--${d.backgroundColor})` } : undefined
  const headlineHtml = (d.headline || defaultData.headline!)
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/\n/g, '<br />')
  const mailto = d.contactEmail ? `mailto:${d.contactEmail}` : 'mailto:hello@kairos.capital'

  return (
    <section className={`cta-section${bgTheme(d.backgroundColor)}`} id="contact" style={bgStyle} data-tina-field={tinaFieldId}>
      <div className="section-inner">
        <div className="reveal">
          <h2 className="cta-headline" data-tina-field={tinaData ? tinaField(tinaData, 'headline') : undefined} dangerouslySetInnerHTML={{ __html: headlineHtml }} />
          <p className="cta-sub" data-tina-field={tinaData ? tinaField(tinaData, 'sub') : undefined}>{d.sub}</p>
          <a href={mailto} className="btn-primary" data-tina-field={tinaData ? tinaField(tinaData, 'buttonText') : undefined}>
            {d.buttonText}
          </a>
        </div>
      </div>
    </section>
  )
}
