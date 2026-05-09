import { tinaField } from 'tinacms/dist/react'
import { Icon, IconName } from './Icons'

interface Item {
  icon?: IconName
  title?: string
  description?: string
}

interface PartnershipData {
  headline?: string
  criteriaLabel?: string
  criteriaItems?: Item[]
  promiseLabel?: string
  promiseItems?: Item[]
  bottomLine1?: string
  bottomLine2?: string
}

const defaultData: PartnershipData = {
  headline: 'Selective investors.\n*Genuine* partnership.',
  criteriaLabel: 'What we look for',
  criteriaItems: [
    { icon: 'chart', title: 'Business Size', description: '$500K–$2M+ in annual earnings with consistent (EBITDA). Profitable businesses with proven models and room to grow.' },
    { icon: 'group', title: 'Ownership Structure', description: 'Founder-led or family-owned. We partner with owners ready to transition to their next chapter.' },
    { icon: 'briefcase', title: 'Industries', description: 'We invest across home services, B2B services, specialty trades, light industrial, niche SaaS, and logistics. Our focus is on identifying businesses with strong fundamentals, durable demand, and cultures worth preserving.' },
    { icon: 'shield', title: 'Business History', description: 'Established businesses with loyal customer bases and reputations built over years of hard work.' },
    { icon: 'refresh', title: 'Customer Base', description: 'Recurring or repeat revenue preferred. Businesses where customers keep coming back.' },
    { icon: 'pin', title: 'Geography', description: 'We are based in Georgia and focus first on opportunities in our home market, while also pursuing select investments across the Southeast.' },
    { icon: 'handshake', title: 'Deal Type', description: 'We buy to own, not to flip or break apart. Our goal is to provide a long term home where your business can continue to grow and endure.' },
  ],
  promiseLabel: 'Our promise to every *seller.*',
  promiseItems: [
    { icon: 'clock', title: 'We move fast and communicate clearly', description: 'No ghosting. No games.' },
    { icon: 'dollar', title: 'We pay fair value', description: 'Our reputation depends on it.' },
    { icon: 'group', title: 'We protect your employees', description: 'They matter to us the way they matter to you.' },
    { icon: 'shield', title: "We honor what you've built", description: 'And carry it forward with intention.' },
    { icon: 'handshake', title: "If it's not the right fit", description: "We'll tell you early and part on good terms." },
  ],
  bottomLine1: 'We partner with people.',
  bottomLine2: 'We steward legacies.',
}

export default function Partnership({ data, tinaFieldId }: { data?: PartnershipData; tinaFieldId?: string }) {
  const d: PartnershipData = { ...defaultData, ...data }
  const tinaData = data as Record<string, unknown> | undefined
  const headlineHtml = (d.headline || defaultData.headline!)
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/\n/g, '<br />')
  const promiseLabelHtml = (d.promiseLabel || defaultData.promiseLabel!)
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
  const criteriaItems = d.criteriaItems && d.criteriaItems.length > 0 ? d.criteriaItems : defaultData.criteriaItems!
  const promiseItems = d.promiseItems && d.promiseItems.length > 0 ? d.promiseItems : defaultData.promiseItems!

  return (
    <section className="partnership" id="criteria" data-tina-field={tinaFieldId}>
      {/* Subtle K watermark in the background */}
      <svg
        className="partnership-watermark"
        viewBox="0 0 1208 1208"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path d="M542 138h124l8 2 5 6 8 15 4 8 16 26 9 17 10 15 9 16 7 12 9 15 13 23 9 15 9 16 12 20 10 17 13 22 12 21 14 24 9 17 14 22 14 24 16 27 12 22 10 16 9 16 10 16 13 23 11 18 7 13 10 17 14 24 12 20 8 14 15 25 10 17 17 29 9 16 17 29 16 27 10 17 13 23 6 9 15 26 12 20 10 17 16 27 5 8 1 3v7l-10 18-17 28-11 20-14 23-10 18-4 5-2 1-346 1-8-7-7-12-8-16-7-13-10-15-9-16-8-13-12-21-7-11-10-15-5-8v-7l2-2h11l18 2 70 1h45l79-3h14l14 1h29l4-2v-6l-10-19-12-19-12-22-12-19-8-14-14-24-15-27-13-21-10-18-9-14-15-26-6-10-8-15-12-19-9-15-9-16-8-13-9-16-4-8-11-16-12-22-7-13-13-22-13-21-10-16-7-14-14-22-8-13-5-10-8-13-16-28-10-16-8-16-13-21-10-15-5-5-5 8-22 36-10 18-12 20-10 18-9 15-15 27-21 35-17 28-13 23-15 26-10 16-14 25-10 17-12 20-10 17-8 13-13 22-8 13-13 23-10 17-14 25-7 10-9 15-9 16-15 27-12 20-10 16-10 17-10 16-10 17v6l8 4 11 2h150l74-3h45l-1 4-9 16-10 16-10 18-16 27-11 20-10 17-6 10-6 11-7 11-4 4-2 1-346 1-5-5-6-9-7-16-9-13-8-14-13-23-8-13-7-14-1-8 3-10 16-27 6-10 13-21 13-23 15-24 9-16 12-20 9-14 8-15 11-17 6-10 8-17 9-15 15-26 8-13 13-23 10-15 15-27 9-16 11-18 11-19 12-20 12-19 15-28 13-21 11-21 9-13 12-20 20-34 11-19 7-11 7-14 13-21 9-15 13-23 10-18 15-25 11-21 17-26 7-12 6-11 14-24 11-20 12-21 10-17 4-5z" />
        <path d="M1169 73h13l4 3 1 8-1 5v22l-1 42v491l2 54v106l-4-1-4-5-9-16-7-13-10-16-8-15-8-14-6-10-10-19-10-17-7-10-7-13-10-18-7-10-8-16-10-15-20-35-6-10-4-13 2-9 1-287-3-8-3-3v-2l-181-1-3-1-13-21-15-28-14-23-9-15-14-24-16-27-8-11 1-3h401l9-1z" />
        <path d="M433 73h8l4 2-1 5-10 16-10 17-11 18-10 17-17 29-13 23-10 16-6 11-6 1-176 1-2 4v8l1 7v44l-1 18v158l1 42v22l-3 12-9 16-11 17-11 20-8 13-9 16-8 14-9 15-14 24-8 13-11 20-11 18-11 20-7 11-8 14-14 28-5 1-3-3 1-11 3-17 1-59 1-23 2-17v-137l-1-269v-136l-2-40v-15l1-1h63l199-1h128z" />
      </svg>

      <div className="section-inner partnership-inner">
        <h2
          className="partnership-headline"
          data-tina-field={tinaData ? tinaField(tinaData, 'headline') : undefined}
          dangerouslySetInnerHTML={{ __html: headlineHtml }}
        />

        <div className="partnership-grid">
          <div className="partnership-col">
            <p className="partnership-col-label" data-tina-field={tinaData ? tinaField(tinaData, 'criteriaLabel') : undefined}>{d.criteriaLabel}</p>
            <div className="partnership-items" data-tina-field={tinaData ? tinaField(tinaData, 'criteriaItems') : undefined}>
              {criteriaItems.map((item, i) => (
                <div className="partnership-item" key={i}>
                  <div className={`partnership-item-icon partnership-item-icon--c${(i % 5) + 1}`}>
                    {item.icon ? <Icon name={item.icon} /> : null}
                  </div>
                  <div className="partnership-item-text">
                    <h3 className="partnership-item-title">{item.title}</h3>
                    <p className="partnership-item-desc">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="partnership-divider" aria-hidden />

          <div className="partnership-col">
            <p
              className="partnership-col-label"
              data-tina-field={tinaData ? tinaField(tinaData, 'promiseLabel') : undefined}
              dangerouslySetInnerHTML={{ __html: promiseLabelHtml }}
            />
            <div className="partnership-items" data-tina-field={tinaData ? tinaField(tinaData, 'promiseItems') : undefined}>
              {promiseItems.map((item, i) => (
                <div className="partnership-item" key={i}>
                  <div className={`partnership-item-icon partnership-item-icon--p${(i % 5) + 1}`}>
                    {item.icon ? <Icon name={item.icon} /> : null}
                  </div>
                  <div className="partnership-item-text">
                    <h3 className="partnership-item-title">{item.title}</h3>
                    <p className="partnership-item-desc">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="partnership-callout">
              <div className="partnership-callout-icon">
                <Icon name="handshake" />
              </div>
              <div className="partnership-callout-text">
                <span className="partnership-callout-line1" data-tina-field={tinaData ? tinaField(tinaData, 'bottomLine1') : undefined}>{d.bottomLine1}</span>
                <span className="partnership-callout-line2" data-tina-field={tinaData ? tinaField(tinaData, 'bottomLine2') : undefined}>{d.bottomLine2}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
