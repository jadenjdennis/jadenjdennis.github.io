/**
 * Repositories shown in the Projects section. Add a repo name here to list it.
 * Titles, descriptions and languages are read from GitHub at build time, so renaming a
 * repository on GitHub renames it on the site at the next build. If GitHub is unreachable,
 * the entry falls back to the name below.
 */
import { site } from '../config/site';

export const repoNames = ['FRC-2D-Tactical-View', 'MotionPresentor', 'Volume-Control-via-Object-Tracking'] as const;

export interface Repo {
  name: string;
  description: string | null;
  language: string | null;
  href: string;
}

export async function getRepos(): Promise<Repo[]> {
  const owner = site.contact.github.handle;
  const token = import.meta.env.GITHUB_TOKEN ?? process.env.GITHUB_TOKEN;
  return Promise.all(
    repoNames.map(async (fallback): Promise<Repo> => {
      const fallbackRepo = { name: fallback, description: null, language: null, href: `${site.contact.github.href}/${fallback}` };
      try {
        const res = await fetch(`https://api.github.com/repos/${owner}/${fallback}`, {
          headers: { Accept: 'application/vnd.github+json', ...(token ? { Authorization: `Bearer ${token}` } : {}) },
        });
        if (!res.ok) return fallbackRepo;
        const r = await res.json();
        return { name: r.name, description: r.description?.trim() || null, language: r.language, href: r.html_url };
      } catch {
        return fallbackRepo;
      }
    }),
  );
}
