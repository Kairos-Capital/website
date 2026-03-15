import { tinaField } from 'tinacms/dist/react'

interface KairosStoryData {
  backgroundColor?: string
  eyebrow?: string
  headline?: string
  definition?: string
  body?: string
}

const defaultData: KairosStoryData = {
  eyebrow: "Why We're Called Kairos",
  headline: 'The *right* moment.',
  definition: 'Greek (καιρός) — the right and opportune moment',
  body: "Every great business reaches a defining moment. The founder who built it feels the weight of what comes next. The employees wonder if their leader will stay. The customers sense change in the air. The question isn't whether that moment comes — it's whether the right partner is there when it does. That's why we exist. That's what Kairos means: recognizing the right moment and acting with purpose, integrity, and respect for what you've built.",
}

const DARK_BG = new Set(['purple', 'purple-dark', 'red', 'blue', 'ink', 'stone', 'black'])
function bgTheme(color?: string) { return color ? (DARK_BG.has(color) ? ' theme-dark' : ' theme-light') : '' }

export default function KairosStory({ data, tinaFieldId }: { data?: KairosStoryData; tinaFieldId?: string }) {
  const d: KairosStoryData = { ...defaultData, ...data }
  const tinaData = data as Record<string, unknown> | undefined
  const bgStyle = d.backgroundColor ? { background: `var(--${d.backgroundColor})` } : undefined
  const headlineHtml = (d.headline || defaultData.headline!)
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/\n/g, '<br />')

  return (
    <section className={`kairos-story${bgTheme(d.backgroundColor)}`} style={bgStyle} data-tina-field={tinaFieldId}>
      <div className="kairos-story-inner reveal">
        <p className="kairos-story-eyebrow" data-tina-field={tinaData ? tinaField(tinaData, 'eyebrow') : undefined}>{d.eyebrow}</p>
        <h2
          className="kairos-story-headline"
          data-tina-field={tinaData ? tinaField(tinaData, 'headline') : undefined}
          dangerouslySetInnerHTML={{ __html: headlineHtml }}
        />
        <p className="kairos-story-definition" data-tina-field={tinaData ? tinaField(tinaData, 'definition') : undefined}>{d.definition}</p>
        <p className="kairos-story-body" data-tina-field={tinaData ? tinaField(tinaData, 'body') : undefined}>{d.body}</p>
      </div>
    </section>
  )
}
