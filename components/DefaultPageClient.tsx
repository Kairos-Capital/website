'use client'

import { useTina, tinaField } from 'tinacms/dist/react'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import Nav from './Nav'
import Footer from './Footer'
import ScrollReveal from './ScrollReveal'

interface DefaultPageClientProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tinaProps: any
}

export default function DefaultPageClient({ tinaProps }: DefaultPageClientProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data } = useTina(tinaProps) as any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const pageData = data?.page as Record<string, any> | undefined
  const title = pageData?.title ?? ''
  const body = pageData?.body

  const bodyTinaField = pageData ? tinaField(pageData, 'body') : undefined

  // Fallback path gives a pre-rendered HTML string; live TinaCMS data gives a rich-text AST
  const bodyContent =
    typeof body === 'string' ? (
      <div className="prose" data-tina-field={bodyTinaField} dangerouslySetInnerHTML={{ __html: body }} />
    ) : body ? (
      <div className="prose" data-tina-field={bodyTinaField}>
        <TinaMarkdown content={body} />
      </div>
    ) : null

  return (
    <>
      <Nav />
      <main>
        <div className="page-content">
          <h1 data-tina-field={pageData ? tinaField(pageData, 'title') : undefined}>{title}</h1>
          {bodyContent ?? <p style={{ color: 'var(--ash)' }}>No content yet.</p>}
        </div>
      </main>
      <Footer />
      <ScrollReveal />
    </>
  )
}
