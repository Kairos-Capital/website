interface Step {
  number?: string
  title?: string
  body?: string
}

interface HowData {
  label?: string
  headline?: string
  description?: string
  steps?: Step[]
}

const defaultData: HowData = {
  label: 'Our Process',
  headline: 'A clear path from\nconversation to close.',
  description: "We've streamlined the acquisition process to be transparent, respectful of your time, and free from unnecessary complexity. Most deals close in 60 days or less.",
  steps: [
    { number: '01', title: 'Conversation', body: "A candid, no-pressure call to understand your business, your goals, and whether there's a fit. No NDA required to start." },
    { number: '02', title: 'Letter of Intent', body: 'If it makes sense on both sides, we move quickly to a clear, fair LOI. No drawn-out negotiations. No surprises.' },
    { number: '03', title: 'Diligence', body: 'A focused, respectful review of your financials and operations. We ask for what we need — nothing more.' },
    { number: '04', title: 'Close & Transition', body: "We close, you get paid, and we work together on a thoughtful transition that protects what you've built." },
  ],
}

export default function HowWeBuy({ data }: { data?: HowData }) {
  const d: HowData = { ...defaultData, ...data }
  const steps = d.steps && d.steps.length >= 4 ? d.steps : defaultData.steps!
  const headlineHtml = (d.headline || defaultData.headline!).replace(/\n/g, '<br />')

  return (
    <section className="how" id="how">
      <div className="section-inner">
        <div className="how-intro reveal">
          <div>
            <p className="section-label">{d.label}</p>
            <h2 className="how-headline" dangerouslySetInnerHTML={{ __html: headlineHtml }} />
          </div>
          <p className="how-desc">{d.description}</p>
        </div>
        <div className="steps reveal">
          {steps.slice(0, 4).map((step, i) => (
            <div className="step" key={i}>
              <div className="step-number">{step.number}</div>
              <div className="step-title">{step.title}</div>
              <p className="step-body">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
