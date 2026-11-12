# CLAUDE.md

Project instructions for Claude Code. Keep this file practical and concise; update it when project decisions change.

## Project goal

Build a polished, personal website for **Jaden Dennis** that combines a personal portfolio, professional portfolio, and creative personal space.

The site should help visitors understand:
- Who Jaden is
- What he is exploring and learning
- Where he is heading

Present the site as an honest, evolving journey. Do not manufacture accomplishments, expertise, credentials, projects, or a finished personal narrative. Curiosity and thoughtful exploration are central.

## Working approach

1. Inspect the existing repository before changing anything. Identify its framework, package manager, scripts, deployment setup, and existing conventions.
2. Briefly summarize the current setup and propose a focused implementation plan before major changes.
3. Preserve useful existing work. Do not overwrite files or replace the stack without a clear reason.
4. Build incrementally, but work toward a complete first release rather than stopping after a homepage mockup.
5. Keep the implementation maintainable and avoid unnecessary dependencies, abstractions, or infrastructure.
6. Ask before introducing paid services, private API credentials, a backend, or a hosting/deployment change.
7. Run the available checks and production build after meaningful changes. Fix errors rather than merely reporting them.

## Hosting and architecture

- **Hosting target:** GitHub Pages.
- Keep the deployed site static and compatible with GitHub Pages.
- Choose or retain a framework that supports static generation/export. Inspect the repository before deciding; do not assume a framework.
- Do not rely on server-side rendering, server routes, or a permanently running server.
- Configure the correct GitHub Pages base path if the repository is a project site rather than the account's root site.
- Keep deployment reproducible, preferably through GitHub Actions if the repository does not already have a sound deployment workflow.
- Do not change hosting providers to support a feature without asking first.

## Site structure

Build a single scrolling homepage with minimal, creative navigation and dedicated detail pages where useful.

Primary sections:
1. **Home** — name and curiosity-driven introduction.
2. **About** — a concise, honest introduction.
3. **Interests & Exploration** — personal interests and subjects currently being explored.
4. **Projects** — project overview with individual detail pages where appropriate.
5. **Journey** — an evolving view of learning, experiences, and direction.
6. **Blog** — a publication/notebook hybrid.
7. **Contact** — approved contact links.

Use **Jaden** as the prominent name in the hero. Show **Jaden Dennis** in a smaller, less prominent position near the top and in appropriate metadata.

The homepage introduction should be personal and curiosity-driven, not generic portfolio copy. A useful direction is: “I'm someone who enjoys understanding how things work, exploring new ideas, and turning curiosity into something meaningful.” Treat this as a starting point, not mandatory final copy.

Do not invent biography text. Use clearly labeled content placeholders when details are missing, and make it easy to replace them.

## Visual direction

### Overall style
- Minimalist editorial design, with a little warmth and personality.
- Polished and intentional, but not corporate, sterile, flashy, or overdesigned.
- Primarily editorial layouts with selected interactive details.
- Use whitespace, strong typography, careful alignment, and restrained visual contrast.
- The homepage hero should be asymmetric: large prominent name, smaller introduction, and a creatively positioned portrait area.
- Avoid unnecessary cards, gradients, glassmorphism, decorative clutter, and generic template aesthetics.

### Color
Use black and white as the foundation, with sage and jade green accents. Initial palette proposal:
- Near black: `#111111`
- Warm white: `#FAF9F6`
- Sage: `#A3B7A2`
- Jade: `#26745A`

Treat these as starting design tokens and check contrast in both themes. Dark mode is the default; provide a subtle light/dark toggle. Both themes should feel like the same design, not separate products.

### Typography
- Use an expressive, readable serif for selected headings (Georgia is an acceptable starting point).
- Pair it with a clean, understated sans-serif for body text, similar in feel to the Claude interface.
- Use small uppercase labels sparingly for editorial structure.
- Keep body copy readable and line lengths controlled.

### Navigation and motion
- Use a creative expandable index for navigation, not a conventional oversized menu.
- Keep navigation sticky where appropriate without obscuring content.
- Use subtle transitions and restrained animation.
- Respect `prefers-reduced-motion`; all navigation and content must remain usable without animation.
- Prioritize clarity and interaction usability over visual novelty.

## Photography and assets

Jaden will add photos later. Do not generate or source substitute personal photos.

Create clearly named image placeholders and document the expected asset paths, formats, and recommended aspect ratios. The intended mix is:
- One polished portrait used in or near the hero.
- Smaller candid photographs used selectively in supporting sections.

Use graceful placeholders until real assets are supplied. Do not use unrelated stock portraits or imply that placeholder imagery depicts Jaden.

## Content and writing rules

The desired voice is mixed:
- Natural and conversational where appropriate.
- Polished and clear for professional information.
- Reflective for personal writing.

Avoid:
- Generic AI-sounding phrases and inflated claims.
- Empty claims such as “passionate innovator” or “visionary leader.”
- Invented accomplishments, credentials, project details, personal history, or future plans.
- Long blocks of filler copy.

Use concise, specific writing. Preserve uncertainty where Jaden is still exploring. Mark missing facts with explicit TODO placeholders rather than guessing.

Personal topics that may be represented:
- **Faith:** Christian faith is meaningful to Jaden and shapes his outlook. Include it naturally and thoughtfully; do not make the whole site sermon-like or let this section dominate.
- **Sports:** basketball, the Detroit Lions, and the Detroit Pistons.
- **Learning:** computer science, AI, cognitive science, psychology, books, ideas, and subjects currently being explored.

Do not present robotics as a current primary interest. If mentoring middle-school students is mentioned in future content, use only details Jaden has explicitly confirmed.

Do not publish school names, private schedules, personal history, or other identifying details unless Jaden explicitly approves the exact content.

## Projects

- Keep project information separate from presentation components, using structured content files or another simple content-driven approach.
- Provide a consistent project detail layout: summary, motivation/problem, approach, tools/technology, current status, and relevant links.
- Only populate fields supported by information Jaden has provided.
- Use explicit TODOs for missing screenshots, links, descriptions, or technical details.
- Do not invent project outcomes, metrics, collaborators, or claims.

## Blog

The blog should feel like a thoughtful personal publication combined with a notebook, not a generic technology blog.

Use Markdown files in the repository as the authoring workflow. Provide:
- Featured posts and clear categories.
- Clean, readable article pages.
- Reading-time estimates.
- Support for both short notes and longer essays.
- A simple, documented frontmatter format.
- A useful index/archive and category navigation.

Initial categories:
1. **Things I'm Learning** — computer science, AI, psychology, cognitive science, and concepts being explored.
2. **Faith & Life** — occasional reflections on faith, values, and approach to life.
3. **Interesting Ideas** — books, articles, conversations, and ideas worth exploring.

Do not create fake published articles or attribute opinions to Jaden. If sample content is needed for layout development, label it clearly as placeholder content and keep it out of the published build until approved.

## Sports widget

Place a small, professional, interactive sports widget in the footer for:
- Detroit Lions
- Detroit Pistons

The widget should show relevant current-season information only when a reliable public data source is available.

Requirements:
- GitHub Pages remains the hosting target.
- Prefer a reliable public endpoint that does not require a secret key in browser code.
- Never put private API keys, tokens, or credentials in frontend code or the repository.
- Do not invent, estimate, or silently substitute live statistics.
- Clearly distinguish unavailable data from zero values.
- Show the data source and a last-updated timestamp when data is available.
- Handle loading, empty, stale, rate-limited, and failed responses gracefully.
- Keep the data-fetching logic isolated behind a small module/interface so the provider can be changed later.
- If no suitable public source exists, build a graceful unavailable/placeholder state and document the limitation. Do not pretend the widget is live.
- Ask before adding an external backend, serverless function, paid API, or changing the hosting architecture.

## Contact links

Use only these supplied links:
- GitHub: https://github.com/jadenjdennis
- LinkedIn: https://www.linkedin.com/in/jadenjdennis/
- Email: jadenjden@gmail.com

Keep contact details in one easily editable configuration/content location. Do not invent additional profiles or contact information. Before the first public deployment, make sure the email display is intentional; a visible email address can attract spam.

## Accessibility, responsiveness, and quality

- Design mobile-first and test common mobile, tablet, and desktop widths.
- Use semantic HTML and a logical heading hierarchy.
- Ensure keyboard navigation, visible focus states, accessible names, and usable interactive controls.
- Maintain readable color contrast in both themes.
- Do not rely on color alone to communicate meaning.
- Respect reduced-motion preferences.
- Optimize images, fonts, and scripts; avoid unnecessary client-side JavaScript.
- Add page titles, descriptions, canonical metadata where appropriate, and Open Graph metadata.
- Check internal links, navigation, blog routes, project routes, and refresh behavior on GitHub Pages.
- Avoid horizontal overflow and layout shifts.

## Suggested implementation order

This is an order of work, not permission to omit later features:

1. Inspect the repository and report the current setup.
2. Establish design tokens, typography, theme handling, and responsive layout.
3. Build the navigation and complete homepage sections.
4. Add project content structure and project detail pages.
5. Add Markdown-powered blog index, categories, and article pages.
6. Add the footer sports widget with honest data-source and failure handling.
7. Add contact links, metadata, accessibility refinements, and deployment configuration.
8. Run production build and test the deployed-path behavior.

Keep components and content modular, but do not overengineer a personal website.

## Definition of done

The first release is complete when:
- All primary sections are implemented and responsive.
- Dark mode is the default and light mode works through a subtle toggle.
- Navigation and interactive elements work with mouse, keyboard, and touch.
- Projects can be added without rewriting page layouts.
- Blog posts can be added as Markdown files and render correctly.
- The sports widget never presents fabricated information as live data.
- Contact links work.
- The site builds and deploys to GitHub Pages with the correct path configuration.
- Missing personal content is clearly marked for Jaden rather than invented.
