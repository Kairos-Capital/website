import { getDefaultPageSlugs, loadDefaultPage } from '../../lib/loadPageContent'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import PageLayout from '../../components/PageLayout'
import ScrollReveal from '../../components/ScrollReveal'

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getDefaultPageSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const { title } = loadDefaultPage(slug)
  return { title: `${title} — Kairos Capital` }
}

export default async function SlugPage({ params }: Props) {
  const { slug } = await params
  const { title, body } = loadDefaultPage(slug)

  return (
    <>
      <Nav />
      <main>
        <PageLayout title={title} body={body} />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  )
}
