interface PromiseData {
  backgroundColor?: string
  headline?: string
  items?: string[]
}

const defaultData: PromiseData = {
  headline: 'Our promise\nto every\nseller.',
  items: [
    'We move fast and communicate clearly — no ghosting, no games.',
    'We pay fair value. Our reputation depends on it.',
    'We protect your employees. They matter to us the way they matter to you.',
    "We honor what you've built and carry it forward with intention.",
    "If it's not the right fit, we'll tell you early and part on good terms.",
  ],
}

import { tinaField } from 'tinacms/dist/react'

const DARK_BG = new Set(['purple', 'purple-dark', 'red', 'blue', 'ink', 'stone', 'black'])
function bgTheme(color?: string) { return color ? (DARK_BG.has(color) ? ' theme-dark' : ' theme-light') : '' }

export default function Promise({ data, tinaFieldId }: { data?: PromiseData; tinaFieldId?: string }) {
  const d: PromiseData = { ...defaultData, ...data }
  const tinaData = data as Record<string, unknown> | undefined
  const bgStyle = d.backgroundColor ? { background: `var(--${d.backgroundColor})` } : undefined
  const items = d.items && d.items.length > 0 ? d.items : defaultData.items!
  const headlineHtml = (d.headline || defaultData.headline!).replace(/\n/g, '<br />')

  return (
    <section className={`promise${bgTheme(d.backgroundColor)}`} style={{ padding: '7rem 3rem', ...bgStyle }} data-tina-field={tinaFieldId}>
      <div className="promise-inner reveal">
        <h2 className="promise-headline" data-tina-field={tinaData ? tinaField(tinaData, 'headline') : undefined} dangerouslySetInnerHTML={{ __html: headlineHtml }} />
        <ul className="promise-points" data-tina-field={tinaData ? tinaField(tinaData, 'items') : undefined}>
          {items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>
    </section>
  )
}
