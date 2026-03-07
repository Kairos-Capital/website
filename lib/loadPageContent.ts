import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

const contentDir = path.join(process.cwd(), 'content')

export type HomePageData = Record<string, Record<string, unknown>> | null

export function loadHomePage(): HomePageData {
  const homeDir = path.join(contentDir, 'pages', 'home')
  if (!fs.existsSync(homeDir)) return null
  const files = fs.readdirSync(homeDir).filter((f) => f.endsWith('.md'))
  if (!files.length) return null
  const raw = fs.readFileSync(path.join(homeDir, files[0]), 'utf-8')
  const parsed = matter(raw)
  const data = parsed.data as Record<string, unknown>
  if (data?.hero || data?.about) return data as HomePageData
  return null
}

export function loadDefaultPage(slug: string): { title: string; body: string } {
  const filePath = path.join(contentDir, 'pages', 'default', `${slug}.md`)
  if (!fs.existsSync(filePath)) return { title: slug, body: '' }
  const raw = fs.readFileSync(filePath, 'utf-8')
  const parsed = matter(raw)
  const data = parsed.data as { title?: string }
  const content = parsed.content ?? ''
  const bodyHtml = content ? (marked.parse(content) as string) : ''
  return {
    title: data?.title ?? slug,
    body: bodyHtml,
  }
}

export function getDefaultPageSlugs(): string[] {
  const defaultDir = path.join(contentDir, 'pages', 'default')
  if (!fs.existsSync(defaultDir)) return []
  return fs
    .readdirSync(defaultDir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''))
    .filter(Boolean)
}
