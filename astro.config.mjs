// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Root user site: https://jadenjdennis.github.io/ (no base path).
// If this ever moves to a project site (https://<user>.github.io/<repo>/),
// set `base: '/<repo>'` here. All internal links go through `withBase()`
// in src/lib/url.ts, so nothing else needs to change.
export default defineConfig({
  site: 'https://jadenjdennis.github.io',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
  build: { format: 'directory' },
  // Code blocks stay in the site palette (styled in global.css) instead of a default Shiki theme.
  markdown: { syntaxHighlight: false },
  devToolbar: { enabled: false },
});
