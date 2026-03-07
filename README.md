# Kairos Capital — Marketing Website

Marketing website for Kairos Capital, a business acquisition firm.

## Tech Stack

- **Framework**: Next.js 15 (App Router), static export
- **CMS**: TinaCMS 3.5.1 with local markdown files
- **Deployment**: Cloudflare Pages
- **Styling**: Pure CSS (`app/globals.css`), no Tailwind
- **Fonts**: Cormorant Garamond, Barlow, Barlow Condensed (Google Fonts)

## Project Structure

```
website/
├── app/
│   ├── layout.tsx          # Root HTML shell, fonts, globals.css
│   ├── page.tsx            # Home page (Server Component)
│   ├── [slug]/page.tsx     # Dynamic inner pages
│   └── globals.css         # All global CSS and CSS variables
├── components/
│   ├── HomePageClient.tsx  # Home page client wrapper (useTina)
│   ├── DefaultPageClient.tsx
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── HowWeBuy.tsx
│   ├── Criteria.tsx
│   ├── Promise.tsx
│   ├── CtaSection.tsx
│   ├── Footer.tsx
│   ├── PageLayout.tsx
│   └── ScrollReveal.tsx
├── content/
│   └── pages/
│       ├── home/home.md    # Home page content
│       └── default/*.md    # Inner page content
├── lib/
│   └── loadPageContent.ts  # fs-based content loading
├── tina/
│   ├── config.ts           # TinaCMS schema
│   └── __generated__/      # Generated GraphQL types (committed)
├── public/
├── out/                    # Static build output (Cloudflare Pages)
├── next.config.ts
└── package.json
```

## Commands

| Command           | Action                                                  |
| :---------------- | :------------------------------------------------------ |
| `npm install`     | Install dependencies                                    |
| `npm run dev`     | Start dev server with TinaCMS on `localhost:3000`       |
| `npm run build`   | Build static site to `out/`                             |
| `npm run preview` | Preview the static build locally via `npx serve out`    |

## Local Development

```sh
npm install
npm run dev
```

- Site: `http://localhost:3000`
- TinaCMS visual editor: `http://localhost:3000/admin/index.html`

Content changes made via the TinaCMS sidebar are written back to the markdown files in `content/`.

## Deployment

Deployed to **Cloudflare Pages** via static export.

- Build command: `npm run build`
- Output directory: `out`

After any changes to `tina/config.ts`, restart the dev server to regenerate `tina/__generated__/`, then commit the updated generated files — Cloudflare Pages has no TinaCMS server and cannot generate them at build time.

## Content Editing

All page content lives in `content/pages/` as markdown files with YAML frontmatter. You can edit these directly or use the TinaCMS visual editor for live, click-to-edit updates in the browser.
