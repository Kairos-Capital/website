import { loadHomePage } from '../lib/loadPageContent'
import HomePageClient from '../components/HomePageClient'

export default async function HomePage() {
  // In dev mode, hit the local TinaCMS server (port 4001) so the page data
  // and the admin are both reading from the same local source — this ensures
  // all sections have proper _content_source metadata for click-to-edit.
  if (process.env.NODE_ENV === 'development') {
    try {
      const { createClient } = await import('tinacms/dist/client')
      const { queries } = await import('../tina/__generated__/types')
      const localClient = createClient({ url: 'http://localhost:4001/graphql', queries })
      const tinaProps = await localClient.queries.page({ relativePath: 'home/home.md' })
      return <HomePageClient tinaProps={tinaProps} />
    } catch {
      // Local TinaCMS dev server not running — fall through to cloud/static
    }
  }

  try {
    // Production: use the generated cloud client
    const { client } = await import('../tina/__generated__/client')
    const tinaProps = await client.queries.page({ relativePath: 'home/home.md' })
    return <HomePageClient tinaProps={tinaProps} />
  } catch {
    // Tina server not running (Cloudflare build) — load directly from markdown.
    const homeData = loadHomePage()
    return <HomePageClient tinaProps={{ query: '', variables: {}, data: { page: homeData } }} />
  }
}
