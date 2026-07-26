import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FounderMessage from '@/components/FounderMessage'

export const metadata = {
  title: 'The Foundation — Kairos Capital',
  description: 'A message from Richie Willard, Founder of Kairos Capital.',
}

export default function FounderMessagePage() {
  return (
    <>
      <Nav />
      <FounderMessage />
      <Footer />
    </>
  )
}
