import { defineCollection } from 'astro/content/config';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const categorySlugs = ['things-im-learning', 'faith-and-life', 'interesting-ideas'] as const;

/**
 * Blog posts: Markdown files in src/content/blog/. See README.md for the frontmatter format.
 * Files starting with `_` are ignored by the loader.
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.enum(categorySlugs),
    /** `note` = short and quick, `essay` = longer and more considered. */
    kind: z.enum(['note', 'essay']).default('note'),
    featured: z.boolean().default(false),
    /** Drafts never appear in the published build. */
    draft: z.boolean().default(false),
    /** Sample content for layout work. Hidden from the production build. */
    placeholder: z.boolean().default(false),
  }),
});

/**
 * Projects: one Markdown file per project in src/content/projects/.
 * Only fill fields Jaden has actually provided. Missing details stay as TODOs in the body.
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    /** One or two sentences. */
    summary: z.string(),
    /** Why it exists: the problem or curiosity behind it. Missing = shown as a TODO. */
    motivation: z.string().optional(),
    /** How it was or is being tackled. Missing = shown as a TODO. */
    approach: z.string().optional(),
    status: z.enum(['idea', 'in-progress', 'paused', 'finished']),
    tools: z.array(z.string()).default([]),
    links: z.array(z.object({ label: z.string(), href: z.url() })).default([]),
    /** Lower numbers appear first. */
    order: z.number().default(100),
    draft: z.boolean().default(false),
    placeholder: z.boolean().default(false),
  }),
});

export const collections = { blog, projects };
