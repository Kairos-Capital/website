'use client'

import { useTina } from 'tinacms/dist/react'
import Nav from './Nav'
import Hero from './Hero'
import About from './About'
import HowWeBuy from './HowWeBuy'
import Criteria from './Criteria'
import Promise from './Promise'
import CtaSection from './CtaSection'
import Footer from './Footer'
import ScrollReveal from './ScrollReveal'

interface HomePageClientProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tinaProps: any
}

export default function HomePageClient({ tinaProps }: HomePageClientProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data } = useTina(tinaProps) as any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const pageData = data?.page as Record<string, any> | undefined

  return (
    <>
      <Nav />
      <Hero data={pageData?.hero as never} />
      <About data={pageData?.about as never} />
      <HowWeBuy data={pageData?.how as never} />
      <Criteria data={pageData?.criteria as never} />
      <Promise data={pageData?.promise as never} />
      <CtaSection data={pageData?.cta as never} />
      <Footer />
      <ScrollReveal />
    </>
  )
}
