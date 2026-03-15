import { notFound } from 'next/navigation'
import { getDefaultPageSlugs, loadDefaultPage } from '../../lib/loadPageContent'
import DefaultPageClient from '../../components/DefaultPageClient'

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getDefaultPageSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const knownSlugs = getDefaultPageSlugs()
  if (!knownSlugs.includes(slug)) return {}
  const { title } = loadDefaultPage(slug)
  return { title: `${title} — Kairos Capital` }
}

export default async function SlugPage({ params }: Props) {
  const { slug } = await params

  const knownSlugs = getDefaultPageSlugs()
  if (!knownSlugs.includes(slug)) notFound()

  try {
    const { client } = await import('../../tina/__generated__/client')
    const tinaProps = await client.queries.page({ relativePath: `default/${slug}.md` })
    return <DefaultPageClient tinaProps={tinaProps} />
  } catch {
    const { title, body } = loadDefaultPage(slug)
    return (
      <DefaultPageClient
        tinaProps={{ query: '', variables: {}, data: { page: { title, body } } }}
      />
    )
  }
}
