interface CtaData {
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

export default function CtaSection({ data }: { data?: CtaData }) {
  const d: CtaData = { ...defaultData, ...data }
  const headlineHtml = (d.headline || defaultData.headline!)
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/\n/g, '<br />')
  const mailto = d.contactEmail ? `mailto:${d.contactEmail}` : 'mailto:hello@kairos.capital'

  return (
    <section className="cta-section" id="contact">
      <div className="section-inner">
        <div className="reveal">
          <h2 className="cta-headline" dangerouslySetInnerHTML={{ __html: headlineHtml }} />
          <p className="cta-sub">{d.sub}</p>
          <a href={mailto} className="btn-primary">
            {d.buttonText}
          </a>
        </div>
      </div>
    </section>
  )
}
