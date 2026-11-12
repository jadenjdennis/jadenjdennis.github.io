/**
 * Single place for site-wide facts. Edit here, not in components.
 * Contact links are the only approved ones: do not add others without Jaden's say-so.
 */
export const site = {
  /** Prominent name (hero). */
  name: 'Jaden',
  /** Full name (small wordmark, metadata). */
  fullName: 'Jaden Dennis',
  url: 'https://jadenjdennis.github.io',
  description:
    'The personal site of Jaden Dennis: what he is curious about, learning, and working out as he goes.',
  locale: 'en_US',
  contact: {
    github: { label: 'GitHub', handle: 'jadenjdennis', href: 'https://github.com/jadenjdennis' },
    linkedin: {
      label: 'LinkedIn',
      handle: 'jadenjdennis',
      href: 'https://www.linkedin.com/in/jadenjdennis/',
    },
    /**
     * Email is split so the full address never appears in the HTML source
     * (it is assembled in the browser on click, which keeps scrapers out).
     */
    email: { label: 'Email', user: 'jadenjden', domain: 'gmail.com' },
  },
} as const;

/** Sections on the homepage, in order. Drives the Index navigation. */
export const sections = [
  { id: 'home', title: 'Home', hint: 'start here' },
  { id: 'about', title: 'About', hint: 'a short, honest introduction' },
  { id: 'interests', title: 'Interests & Exploration', hint: 'what I’m curious about' },
  { id: 'projects', title: 'Projects', hint: 'work, as it exists' },
  { id: 'journey', title: 'Journey', hint: 'where I am, where I’m headed' },
  { id: 'blog', title: 'Blog', hint: 'notes and essays' },
  { id: 'contact', title: 'Contact', hint: 'say hello' },
] as const;

export type SectionId = (typeof sections)[number]['id'];

/** Blog categories. Slugs are used in frontmatter and URLs. */
export const categories = [
  {
    slug: 'things-im-learning',
    title: 'Things I’m Learning',
    blurb: 'Computer science, AI, psychology, cognitive science, and other concepts I’m working through.',
  },
  {
    slug: 'faith-and-life',
    title: 'Faith & Life',
    blurb: 'Occasional reflections on faith, values, and how I try to live.',
  },
  {
    slug: 'interesting-ideas',
    title: 'Interesting Ideas',
    blurb: 'Books, articles, conversations, and ideas worth a second look.',
  },
] as const;

export type CategorySlug = (typeof categories)[number]['slug'];
