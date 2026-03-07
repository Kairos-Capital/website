import { loadHomePage } from '../lib/loadPageContent'
import HomePageClient from '../components/HomePageClient'

export default function HomePage() {
  const homeData = loadHomePage()

  // Shape data into TinaProps format so useTina() can subscribe to
  // live editing updates in dev mode (tina dev). In production the
  // data is returned as-is.
  const tinaProps = {
    query: '',
    variables: {},
    data: { page: homeData },
  }

  return <HomePageClient tinaProps={tinaProps} />
}
