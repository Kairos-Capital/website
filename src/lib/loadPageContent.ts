/**
 * Load page content from markdown files. Used when the Tina client is not
 * available (e.g. Cloudflare build where tina/__generated__ is not committed).
 * Tina still edits these same files; we just read them at build time.
 */
import matter from "gray-matter";
import { marked } from "marked";

const homeModules = import.meta.glob<string>("../../content/pages/home/*.md", {
	query: "?raw",
	import: "default",
	eager: true,
});

const defaultModules = import.meta.glob<string>("../../content/pages/default/*.md", {
	query: "?raw",
	import: "default",
	eager: true,
});

export type HomePageData = Record<string, Record<string, unknown>> | null;

function getRaw(mod: string | { default?: string }): string | null {
	if (typeof mod === "string") return mod;
	if (mod && typeof (mod as { default?: string }).default === "string") return (mod as { default: string }).default;
	return null;
}

export function loadHomePage(): HomePageData {
	const key = Object.keys(homeModules)[0];
	if (!key) return null;
	const raw = getRaw(homeModules[key]);
	if (!raw) return null;
	const parsed = matter(raw);
	const data = parsed.data as Record<string, unknown>;
	if (data?.hero || data?.about) return data as HomePageData;
	return null;
}

export function loadDefaultPage(slug: string): { title: string; body: string } {
	const key = Object.keys(defaultModules).find((k) => k.endsWith(`/${slug}.md`));
	if (!key) return { title: slug, body: "" };
	const raw = getRaw(defaultModules[key]);
	if (!raw) return { title: slug, body: "" };
	const parsed = matter(raw);
	const data = parsed.data as { title?: string };
	const content = parsed.content ?? "";
	const bodyHtml = content ? marked.parse(content) as string : "";
	return {
		title: data?.title ?? slug,
		body: bodyHtml,
	};
}

export function getDefaultPageSlugs(): string[] {
	return Object.keys(defaultModules).map((k) => {
		const m = k.match(/default\/(.+)\.md$/);
		return m ? m[1] : "";
	}).filter(Boolean);
}
