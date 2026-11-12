# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro, static output (`output: 'static'`), deployed to GitHub Pages as a root user site (`https://jadenjdennis.github.io/`, no base path). User-confirmed. Markdown/content collections for blog and projects; GitHub Actions for deploy. No backend, no SSR.

## Users

Visitors who want to understand who Jaden Dennis is: people he knows or meets (peers, mentors, community), and professional contacts (recruiters, collaborators) skimming a LinkedIn or GitHub link. They arrive curious, spend a few minutes, and leave knowing who Jaden is, what he is exploring and learning, and where he is heading.

## Product Purpose

A personal website for Jaden Dennis that is at once a personal portfolio, a professional portfolio, and a creative personal space. Success is a visitor who feels they met a real, curious person, not a résumé. The site presents an honest, evolving journey and never manufactures accomplishments, expertise, credentials, projects, or a finished narrative.

## Positioning

It is one person's notebook-and-portfolio in public, and it stays honest about being unfinished. A template portfolio cannot claim that: curiosity, thoughtful exploration, and visible placeholders for what is not yet known are the point.

## Operating Context

- Single scrolling homepage (Home, About, Interests & Exploration, Projects, Journey, Blog, Contact) plus dedicated project detail pages and a Markdown-powered blog.
- Content is authored in the repository (Markdown + structured data files) by Jaden; missing facts are explicit TODO placeholders he can replace.
- Photos come later from Jaden: one polished portrait (hero), several candid shots. Graceful named placeholders until then.
- Footer sports widget for the Detroit Lions and Detroit Pistons, read from a public keyless endpoint in the browser.

## Capabilities and Constraints

- Hosting: GitHub Pages only. Static; no server routes. Do not change hosting, add a backend, serverless function, or paid API without asking.
- Contact links (only these): GitHub https://github.com/jadenjdennis, LinkedIn https://www.linkedin.com/in/jadenjdennis/, Email jadenjden@gmail.com. Kept in one config location; email display must be spam-conscious.
- Sports widget: no secrets in frontend code; never fabricate or silently substitute stats; unavailable is distinct from zero; show source and last-updated; handle loading, empty, stale, rate-limited, failed; provider isolated behind a small module.
- Do not publish school names, private schedules, personal history, or identifying details without Jaden approving the exact content. Mentoring middle-school students is only mentionable with details he confirms. Robotics is not a current primary interest.
- Placeholder/sample content must be labeled and excluded from the published build.
- Undecided: all biography copy, project list, journey entries, blog posts, portrait and candid photos.

## Brand Commitments

- Name: **Jaden** is the prominent hero name; **Jaden Dennis** appears smaller near the top and in metadata.
- Voice: mixed. Conversational where natural, polished and clear for professional information, reflective for personal writing. No inflated claims ("passionate innovator"), no generic AI-sounding phrases, no filler.
- Binding visual constraints volunteered in the brief: minimalist editorial; black and white foundation with sage (`#A3B7A2`) and jade (`#26745A`) accents; near-black `#111111` and warm white `#FAF9F6` as starting tokens; dark mode default with a subtle light/dark toggle; expressive readable serif for selected headings (Georgia acceptable starting point) with a clean understated sans for body; asymmetric hero with a creatively placed portrait area; creative expandable index for navigation; no gradients, glassmorphism, or card-heavy template look.
- Personal topics: Christian faith (natural, not dominant), basketball, Detroit Lions, Detroit Pistons, computer science, AI, cognitive science, psychology, books, ideas.

## Evidence on Hand

- Real: the contact links above; the interests and categories listed in this file; the suggested intro line "I'm someone who enjoys understanding how things work, exploring new ideas, and turning curiosity into something meaningful."
- Absent (do not fabricate): biography, projects and their details, screenshots, journey milestones, published blog posts, portrait and candid photos, credentials, school or employer names.

## Product Principles

1. Honest over impressive: say what is known, mark what is not, never inflate.
2. Curiosity is the through-line: the site reads as someone exploring, not someone finished.
3. Content stays separate from presentation so Jaden can add projects and posts without touching layouts.
4. Static, fast, accessible, and easy to keep running on GitHub Pages.
5. Faith and personality appear naturally, never as a sermon or a gimmick.

## Accessibility & Inclusion

Mobile-first; semantic HTML; keyboard navigation with visible focus; readable contrast in both themes; color is never the only signal; `prefers-reduced-motion` respected with all content usable without animation; no horizontal overflow or layout shift.
