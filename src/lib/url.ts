/** Prefix a site-absolute path with the configured base (see astro.config.mjs). */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (/^(https?:|mailto:|#)/.test(path)) return path;
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}
