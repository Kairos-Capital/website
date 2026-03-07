import { loadHomePage } from '../lib/loadPageContent'
import HomePageClient from '../components/HomePageClient'

export default async function HomePage() {
  try {
    // In dev (tinacms dev running), use the client for proper TinaProps with
    // real GraphQL query/variables — enables live iframe updates in visual editor.
    const { client } = await import('../tina/__generated__/client')
    const tinaProps = await client.queries.page({ relativePath: 'home/home.md' })
    return <HomePageClient tinaProps={tinaProps} />
  } catch {
    // Tina server not running (Cloudflare build) — load directly from markdown.
    const homeData = loadHomePage()
    return <HomePageClient tinaProps={{ query: '', variables: {}, data: { page: homeData } }} />
  }
}
