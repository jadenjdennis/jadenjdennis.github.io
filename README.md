# Jaden's site

A personal portfolio and notebook: Astro, static output, deployed to GitHub Pages as a root user site
(`https://jadenjdennis.github.io/`). See `CLAUDE.md` for the project brief this was built against and
`DESIGN.md` for the visual system.

## Commands

| Command | What it does |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Dev server at http://localhost:4321 (placeholder content visible) |
| `npm run build` | Type-check (`astro check`) and build to `dist/` (placeholder content hidden) |
| `npm run preview` | Serve `dist/` locally to test the production build |

Requires Node 22.23.4 or newer.

## Deploying

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds and publishes `dist/` to GitHub Pages.

One-time setup on GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**, in a repository named
`jadenjdennis.github.io`.

If the repository has any other name it becomes a *project site* (`https://jadenjdennis.github.io/<repo>/`). Then set
`base: '/<repo>'` in `astro.config.mjs`. Internal links already go through `withBase()` (`src/lib/url.ts`), so nothing else changes.

## Where things live

```
src/config/site.ts        Name, URL, contact links, section list (drives the Index), blog categories
src/data/interests.ts     Interests & Exploration content
src/data/journey.ts       Journey entries
src/content/blog/         Blog posts (Markdown)
src/content/projects/     Projects (Markdown)
src/assets/photos/        Your photos (see below)
src/lib/sports/           Sports widget data layer (provider interface + ESPN provider)
src/components/sections/  The homepage sections
src/styles/global.css     Design tokens (both themes) and base styles
```

## Content you still need to supply

Everything missing is marked with a visible **TODO** badge on the page. Find them all with:

```
grep -rn "TODO" src
```

Right now that is: a personal paragraph in About, what you're reading in Interests, your "Earlier" and "Next" Journey entries,
your first project, your first post, and the photos below. Nothing has been invented to fill them.

### Wording to confirm

The only first-person copy comes from the brief: the intro sentence on the homepage, "someone who enjoys understanding how
things work", the "honest, evolving journey" framing, and the line that your Christian faith is meaningful to you and
shapes your outlook. Reword any of it in your own voice. The interest names and the Journey "Now" entry reuse the topics
listed in the brief.

## Photos

Drop files into `src/assets/photos/` with these exact names (extension can be `.jpg`, `.jpeg`, `.png`, `.webp` or `.avif`).
Until a file exists, a labelled placeholder is shown. The site resizes and optimises them at build time.

| File | Used in | Aspect ratio | Source size |
|---|---|---|---|
| `portrait.jpg` | Hero | 4:5 (portrait) | 1600 × 2000 px |
| `candid-about.jpg` | About | 4:3 | 1600 × 1200 px |
| `candid-interests.jpg` | Interests & Exploration | 3:2 | 1600 × 1067 px |
| `src/assets/projects/<project-slug>.jpg` | That project's page | 16:10 | 1600 × 1000 px |

After adding a photo, update its `alt` text in the component that uses it (`Hero.astro`, `About.astro`, `Interests.astro`) so it
describes the actual picture. The `alt="TODO…"` values are reminders.

## Adding a project

Copy `src/content/projects/_TEMPLATE.md` to `src/content/projects/my-project.md` and fill it in. Only fill what is true:
leave `motivation` or `approach` out and the project page shows a TODO instead. The homepage list, the `/projects/` page and
the detail page all update automatically. Files starting with `_` are ignored.

## Writing a blog post

Copy `src/content/blog/_TEMPLATE.md` to `src/content/blog/my-post.md`.

```yaml
---
title: "Your title"
description: "One sentence for lists and search results."
date: 2026-01-01
category: things-im-learning   # things-im-learning | faith-and-life | interesting-ideas
kind: note                     # note (short) | essay (longer)
featured: false                # true shows it large on the homepage and blog index
draft: false                   # true hides it from the build
---
```

Reading time is calculated automatically. The category pages, archive and homepage list update on their own.

### Placeholder content

`layout-test-*.md` in `src/content/blog/` and `src/content/projects/` are marked `placeholder: true`. They appear in
`npm run dev` so layouts can be checked, and are **excluded from every production build**. Delete them whenever you like.

## Sports widget

The footer widget reads each team's schedule from ESPN's public site API (`site.api.espn.com`) directly in the browser.
No key, no backend, nothing secret in the code.

- It shows record, standing, last result and next game, plus the source and a "last updated" time.
- If ESPN doesn't answer, it says **Unavailable** and shows nothing instead of guessing. If it has saved data from an earlier
  visit it shows that, clearly labelled stale. A missing score is never shown as 0.
- The refresh button has a 10 second cooldown.
- **Limitation:** this is ESPN's *undocumented* API. It can change or restrict access without notice (it also rejects some
  automated clients such as headless browsers, which is why the widget has a failure state). If that happens, replace
  `src/lib/sports/espn.ts` with another provider that implements `SportsProvider` (`src/lib/sports/types.ts`) and change the one
  export in `src/lib/sports/index.ts`. The widget itself doesn't change.
- It uses the endpoint's default schedule (the current regular season), so playoff games may not appear.

## Email address

The address is not in the page source. The Email row reveals it on click (assembled in the browser from the two parts in
`src/config/site.ts`), which keeps scrapers from harvesting it. Without JavaScript it shows an `[at]`/`[dot]` form.

## Open Graph image

`public/og.png` is rendered from `scripts/og.html` (source of truth). To re-render after changing it, run
`scripts/render-og.mjs` with `puppeteer-core` installed and Chrome available.
