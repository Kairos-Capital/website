interface CriteriaItem {
  title?: string
  description?: string
}

interface CriteriaData {
  label?: string
  headline?: string
  items?: CriteriaItem[]
}

const defaultData: CriteriaData = {
  label: 'What We Look For',
  headline: "Businesses we're\nbuilt to *own.*",
  items: [
    { title: 'Revenue Range', description: '$1M–$10M in annual revenue. Profitable businesses with proven models and room to grow.' },
    { title: 'Industry Agnostic', description: 'Services, light manufacturing, B2B, trades. We focus on fundamentals, not sectors.' },
    { title: 'Strong Foundation', description: 'Recurring revenue, loyal customers, and a team that can operate day-to-day.' },
    { title: 'Owner-Ready', description: "You're ready for your next chapter — retirement, a new venture, or simply time back." },
    { title: 'Clean Financials', description: '3 years of books we can review. We work through complexity, but need a clear picture.' },
    { title: 'Legacy-Worthy', description: 'A business worth preserving — with a reputation, a team, and a future worth protecting.' },
  ],
}

import { tinaField } from 'tinacms/dist/react'

export default function Criteria({ data, tinaFieldId }: { data?: CriteriaData; tinaFieldId?: string }) {
  const d: CriteriaData = { ...defaultData, ...data }
  const items = d.items && d.items.length > 0 ? d.items : defaultData.items!
  const headlineHtml = (d.headline || defaultData.headline!)
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/\n/g, '<br />')

  return (
    <section className="criteria" id="criteria" data-tina-field={tinaFieldId}>
      <div className="section-inner">
        <div className="criteria-grid reveal">
          <div>
            <p className="section-label" data-tina-field={data ? tinaField(data, 'label') : undefined}>{d.label}</p>
            <h2 className="criteria-headline" data-tina-field={data ? tinaField(data, 'headline') : undefined} dangerouslySetInnerHTML={{ __html: headlineHtml }} />
          </div>
          <div>
            <div className="criteria-list">
              {items.map((item, i) => (
                <div className="criteria-item" key={i} data-tina-field={tinaField(item, 'title')}>
                  <div className="criteria-icon">◈</div>
                  <div className="criteria-title" data-tina-field={tinaField(item, 'title')}>{item.title}</div>
                  <p className="criteria-desc" data-tina-field={tinaField(item, 'description')}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
