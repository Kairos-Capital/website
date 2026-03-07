interface PromiseData {
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

export default function Promise({ data }: { data?: PromiseData }) {
  const d: PromiseData = { ...defaultData, ...data }
  const items = d.items && d.items.length > 0 ? d.items : defaultData.items!
  const headlineHtml = (d.headline || defaultData.headline!).replace(/\n/g, '<br />')

  return (
    <section className="promise" style={{ padding: '7rem 3rem' }}>
      <div className="promise-inner reveal">
        <h2 className="promise-headline" dangerouslySetInnerHTML={{ __html: headlineHtml }} />
        <ul className="promise-points">
          {items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>
    </section>
  )
}
