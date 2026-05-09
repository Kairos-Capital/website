import { tinaField } from 'tinacms/dist/react'
import { Icon, IconName } from './Icons'

interface Step {
  number?: string
  title?: string
  body?: string
  icon?: IconName
}

interface HowData {
  backgroundColor?: string
  label?: string
  headline?: string
  description?: string
  steps?: Step[]
  throughline?: string
}

const defaultData: HowData = {
  label: 'Our Process',
  headline: 'A clear path from\nconversation to close.',
  description: "We've streamlined the acquisition process to be transparent, respectful of your time, and free from unnecessary complexity.",
  steps: [
    { number: '1', icon: 'chat', title: 'Start the Conversation', body: 'A confidential, no-obligation discussion to understand your business and goals.' },
    { number: '2', icon: 'docSearch', title: 'Evaluate & Align', body: "We dive deep into your business and ensure it's a strong fit on both sides." },
    { number: '3', icon: 'group', title: 'Partner & Plan', body: 'We partner with you to build a transition plan that protects your team, customers, and legacy.' },
    { number: '4', icon: 'gear', title: 'Execute with Care', body: 'A smooth transition with clear communication and operational continuity every step of the way.' },
    { number: '5', icon: 'chart', title: 'Build for the Future', body: 'We invest in people, processes, and growth to build a stronger, more enduring business.' },
  ],
  throughline: 'Cultural and Financial Due Diligence Throughout',
}

const DARK_BG = new Set(['purple', 'purple-dark', 'red', 'blue', 'ink', 'stone', 'black'])
function bgTheme(color?: string) { return color ? (DARK_BG.has(color) ? ' theme-dark' : ' theme-light') : '' }

export default function HowWeBuy({ data, tinaFieldId }: { data?: HowData; tinaFieldId?: string }) {
  const d: HowData = { ...defaultData, ...data }
  const tinaData = data as Record<string, unknown> | undefined
  const bgStyle = d.backgroundColor ? { background: `var(--${d.backgroundColor})` } : undefined
  const steps = d.steps && d.steps.length > 0 ? d.steps : defaultData.steps!
  const headlineHtml = (d.headline || defaultData.headline!).replace(/\n/g, '<br />')

  return (
    <section className={`how${bgTheme(d.backgroundColor)}`} id="how" style={bgStyle} data-tina-field={tinaFieldId}>
      <div className="section-inner">
        <div className="how-intro reveal">
          <div>
            <p className="section-label" data-tina-field={tinaData ? tinaField(tinaData, 'label') : undefined}>{d.label}</p>
            <h2 className="how-headline" data-tina-field={tinaData ? tinaField(tinaData, 'headline') : undefined} dangerouslySetInnerHTML={{ __html: headlineHtml }} />
          </div>
          <p className="how-desc" data-tina-field={tinaData ? tinaField(tinaData, 'description') : undefined}>{d.description}</p>
        </div>
        <div className="process reveal">
          <div className="process-steps">
            {steps.map((step, i) => (
              <div className="process-step" key={i} data-tina-field={tinaField(step as Record<string, unknown>, 'title')}>
                <div className="process-step-icon">
                  {step.icon ? <Icon name={step.icon} /> : null}
                </div>
                <div className="process-step-num">{step.number || String(i + 1)}</div>
                <div className="process-step-title">{step.title}</div>
                <p className="process-step-body">{step.body}</p>
              </div>
            ))}
          </div>
          {d.throughline && (
            <div className="process-throughline" data-tina-field={tinaData ? tinaField(tinaData, 'throughline') : undefined}>
              <span className="process-throughline-text">{d.throughline}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
