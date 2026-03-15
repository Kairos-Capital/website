import { tinaField } from 'tinacms/dist/react'

interface DecisionOption {
  title?: string
  description?: string
  bullets?: string[]
  isHighlighted?: boolean
}

interface DecisionFrameData {
  label?: string
  headline?: string
  options?: DecisionOption[]
}

const defaultData: DecisionFrameData = {
  label: 'Your Options',
  headline: 'Three paths. One *clear* choice.',
  options: [
    {
      title: 'Stay the Course',
      description: 'Keep grinding alone',
      bullets: [
        'No liquidity or exit path',
        'No succession plan in place',
        'Growing personal risk over time',
        'No one to share the burden',
      ],
      isHighlighted: false,
    },
    {
      title: 'Traditional Private Equity',
      description: 'Quick flip, then out',
      bullets: [
        '3–5 year hold, then sold again',
        'Culture disruption and layoffs',
        'Financial engineering over people',
        'Broken promises to your team',
      ],
      isHighlighted: false,
    },
    {
      title: 'Kairos Capital',
      description: 'A long-term home for what you built',
      bullets: [
        'We buy to own — no flips, no breakups',
        'Your employees and culture protected',
        'Hands-on operators, not absentee investors',
        'Legacy-first. Always.',
      ],
      isHighlighted: true,
    },
  ],
}

export default function DecisionFrame({ data, tinaFieldId }: { data?: DecisionFrameData; tinaFieldId?: string }) {
  const d: DecisionFrameData = { ...defaultData, ...data }
  const tinaData = data as Record<string, unknown> | undefined
  const options = d.options && d.options.length > 0 ? d.options : defaultData.options!
  const headlineHtml = (d.headline || defaultData.headline!)
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/\n/g, '<br />')

  return (
    <section className="decision-frame" data-tina-field={tinaFieldId}>
      <div className="section-inner">
        <div className="reveal">
          <p className="section-label" data-tina-field={tinaData ? tinaField(tinaData, 'label') : undefined}>{d.label}</p>
          <h2
            className="decision-frame-headline"
            data-tina-field={tinaData ? tinaField(tinaData, 'headline') : undefined}
            dangerouslySetInnerHTML={{ __html: headlineHtml }}
          />
        </div>
        <div className="decision-frame-grid reveal">
          {options.map((option, i) => (
            <div
              key={i}
              className={`decision-option${option.isHighlighted ? ' decision-option--highlighted' : ''}`}
              data-tina-field={tinaField(option as Record<string, unknown>, 'title')}
            >
              <div className="decision-option-header">
                <h3 className="decision-option-title">{option.title}</h3>
                <p className="decision-option-desc">{option.description}</p>
              </div>
              <ul className="decision-option-bullets">
                {(option.bullets || []).map((bullet, j) => (
                  <li key={j}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
