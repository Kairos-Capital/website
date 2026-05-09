'use client'

import { useState } from 'react'
import { useTina, tinaField } from 'tinacms/dist/react'
import Nav from './Nav'
import Hero from './Hero'
import PhilosophyTabs, { PhilosophyTabKey, PhilosophyTabsData } from './PhilosophyTabs'
import HowWeBuy from './HowWeBuy'
import Partnership from './Partnership'
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

  const [activeTab, setActiveTab] = useState<PhilosophyTabKey>('rightMoment')

  const philosophyData = pageData?.philosophyTabs as PhilosophyTabsData | undefined

  const tabs = [
    { key: 'rightMoment' as const, title: philosophyData?.rightMoment?.tabTitle || 'The Right Moment' },
    { key: 'builtDifferently' as const, title: philosophyData?.builtDifferently?.tabTitle || 'Built Differently' },
    { key: 'investmentPhilosophy' as const, title: philosophyData?.investmentPhilosophy?.tabTitle || 'Investment Philosophy' },
  ]

  return (
    <>
      <Nav />
      <Hero
        data={pageData?.hero as never}
        tinaFieldId={pageData ? tinaField(pageData, 'hero') : undefined}
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <PhilosophyTabs
        data={philosophyData}
        activeTab={activeTab}
        tinaFieldId={pageData ? tinaField(pageData, 'philosophyTabs') : undefined}
      />
      <HowWeBuy data={pageData?.how as never} tinaFieldId={pageData ? tinaField(pageData, 'how') : undefined} />
      <Partnership data={pageData?.partnership as never} tinaFieldId={pageData ? tinaField(pageData, 'partnership') : undefined} />
      <CtaSection data={pageData?.cta as never} tinaFieldId={pageData ? tinaField(pageData, 'cta') : undefined} />
      <Footer />
      <ScrollReveal />
    </>
  )
}
