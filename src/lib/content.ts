import { getCollection, type CollectionEntry } from 'astro:content';
import { categories, type CategorySlug } from '../config/site';

/**
 * Placeholder entries (`placeholder: true`) exist only to develop layouts.
 * They are shown in `astro dev` and hidden from every production build,
 * unless PUBLIC_SHOW_PLACEHOLDERS=true is set explicitly.
 */
export const showPlaceholders =
  import.meta.env.DEV || import.meta.env.PUBLIC_SHOW_PLACEHOLDERS === 'true';

type Visible = { data: { draft: boolean; placeholder: boolean } };
const isVisible = ({ data }: Visible) => !data.draft && (showPlaceholders || !data.placeholder);

export type Post = CollectionEntry<'blog'>;
export type Project = CollectionEntry<'projects'>;

export async function getPosts(): Promise<Post[]> {
  const posts = (await getCollection('blog')).filter(isVisible);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getProjects(): Promise<Project[]> {
  const projects = (await getCollection('projects')).filter(isVisible);
  return projects.sort((a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title));
}

const WORDS_PER_MINUTE = 220;

/** Reading time in whole minutes (minimum 1), from the raw Markdown body. */
export function readingMinutes(body: string | undefined): number {
  const words = (body ?? '')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/[#>*_`~\[\]()!-]/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

export function categoryFor(slug: CategorySlug) {
  const found = categories.find((c) => c.slug === slug);
  if (!found) throw new Error(`Unknown blog category: ${slug}`);
  return found;
}

const dateFormat = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  timeZone: 'UTC',
});
export const formatDate = (d: Date) => dateFormat.format(d);
export const isoDate = (d: Date) => d.toISOString().slice(0, 10);

export const statusLabel = {
  idea: 'Idea',
  'in-progress': 'In progress',
  paused: 'Paused',
  finished: 'Finished',
} as const;
