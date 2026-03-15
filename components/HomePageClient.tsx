'use client'

import { useTina, tinaField } from 'tinacms/dist/react'
import Nav from './Nav'
import Hero from './Hero'
import KairosStory from './KairosStory'
import About from './About'
import DecisionFrame from './DecisionFrame'
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
      <Hero data={pageData?.hero as never} tinaFieldId={pageData ? tinaField(pageData, 'hero') : undefined} />
      <KairosStory data={pageData?.kairosStory as never} tinaFieldId={pageData ? tinaField(pageData, 'kairosStory') : undefined} />
      <About data={pageData?.about as never} tinaFieldId={pageData ? tinaField(pageData, 'about') : undefined} />
      <DecisionFrame data={pageData?.decisionFrame as never} tinaFieldId={pageData ? tinaField(pageData, 'decisionFrame') : undefined} />
      <HowWeBuy data={pageData?.how as never} tinaFieldId={pageData ? tinaField(pageData, 'how') : undefined} />
      <Criteria data={pageData?.criteria as never} tinaFieldId={pageData ? tinaField(pageData, 'criteria') : undefined} />
      <Promise data={pageData?.promise as never} tinaFieldId={pageData ? tinaField(pageData, 'promise') : undefined} />
      <CtaSection data={pageData?.cta as never} tinaFieldId={pageData ? tinaField(pageData, 'cta') : undefined} />
      <Footer />
      <ScrollReveal />
    </>
  )
}
