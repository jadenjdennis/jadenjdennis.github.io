---
name: Jaden Dennis
description: A personal site built like the reading copy of a notebook, with an index in place of a menu.
colors:
  ground-dark: "#111111"
  ground-dark-sunk: "#0b0c0b"
  ground-dark-raised: "#191a19"
  paper: "#faf9f6"
  paper-sunk: "#f1efe9"
  paper-raised: "#f3f1eb"
  ink-body-dark: "#dad9d2"
  ink-muted-dark: "#a3a79f"
  ink-body-light: "#2a2c28"
  ink-muted-light: "#575b52"
  sage: "#a3b7a2"
  jade: "#26745a"
typography:
  display:
    fontFamily: "Young Serif, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(8rem, 17vw, 15rem)"
    fontWeight: 400
    lineHeight: 0.86
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Young Serif, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(2.25rem, 1.5rem + 3.2vw, 4.25rem)"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Young Serif, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(1.5rem, 1.3rem + 0.8vw, 2rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  lead:
    fontFamily: "Hanken Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.375rem, 1.1rem + 1.1vw, 1.875rem)"
    fontWeight: 400
    lineHeight: 1.38
    letterSpacing: "-0.005em"
  body:
    fontFamily: "Hanken Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1.02rem + 0.2vw, 1.1875rem)"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Hanken Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "0.1em"
rounded:
  hairline: "2px"
  sm: "4px"
spacing:
  gutter: "clamp(1.25rem, 0.5rem + 3.4vw, 2.5rem)"
  col-gap: "clamp(1rem, 0.4rem + 2vw, 2rem)"
  section: "clamp(4.5rem, 2.5rem + 8vw, 9.5rem)"
  page-max: "78rem"
  header: "3.5rem"
  measure: "62ch"
components:
  section-field:
    backgroundColor: "{colors.jade}"
    textColor: "{colors.paper}"
  todo-badge:
    textColor: "{colors.sage}"
    rounded: "{rounded.hairline}"
    padding: "0.05rem 0.45rem"
  photo-placeholder:
    backgroundColor: "{colors.ground-dark-raised}"
    textColor: "{colors.ink-muted-dark}"
  code-block:
    backgroundColor: "{colors.ground-dark-raised}"
    rounded: "{rounded.sm}"
    padding: "1rem 1.25rem"
  skip-link:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ground-dark}"
    rounded: "{rounded.hairline}"
    padding: "0.6rem 1rem"
---

# Design System: Jaden Dennis

## Overview

**Creative North Star: "The Reading Copy"**

The site is a notebook set in type: a near-black page, warm-white ink, hairline rules, and one enormous word ("Jaden") instead of a hero template. Navigation is a book-style Index with dotted leaders, not a menu. The person leads; the system stays out of the way and never decorates. Unknowns are shown as dashed, labelled gaps rather than filled with invention, so the system has a visible vocabulary for "not yet written".

Two themes share one structure. Dark is the default; light (`html[data-theme="light"]`) swaps the neutrals and exchanges the roles of sage and jade. Every rule below holds in both. Depth comes from rules, spacing, and one flat filled field, never from shadow, gradient, glass, or cards.

**Key Characteristics:**
- Flat, hairline-ruled, left-margin editorial layout with sticky section titles.
- One serif display voice (Young Serif) over one humanist sans (Hanken Grotesk Variable).
- Sage and jade as a pair, with exactly one filled area: the Contact close.
- Square markers and dashed outlines for the unfinished; crop marks for the portrait.
- One authored hero motion, one authored UI motion (the Index), full reduced-motion handling.

## Colors

A near-monochrome warm black and paper pair, with a single green family (sage and jade) carrying every link, mark, and the one filled field.

### Primary
- **Sage** (`{colors.sage}`): the accent as text and marks on the dark theme (links on hover, current Index entry, crop marks, TODO tags, focus rings, timeline "now" marker). Measured 8.9:1 on the dark ground. In light theme it becomes the soft fill and selection color, never text.
- **Jade** (`{colors.jade}`): the accent as text and marks on the light theme (5.35:1 on paper), and the single filled field in both themes (the Contact section, with paper text at 5.35:1). Also the text-selection color in dark theme.

### Neutral
- **Warm Black** (`{colors.ground-dark}`): dark page ground, also the on-sage ink in light theme. Sunk (`{colors.ground-dark-sunk}`) and raised (`{colors.ground-dark-raised}`) steps exist for recessed and photo-placeholder surfaces.
- **Warm Paper** (`{colors.paper}`): light page ground, and headline ink on dark. Sunk (`{colors.paper-sunk}`) and raised (`{colors.paper-raised}`) steps mirror the dark ones.
- **Body and muted ink**: on dark, body is `{colors.ink-body-dark}` and muted is `{colors.ink-muted-dark}`; on light, body is `{colors.ink-body-light}` and muted is `{colors.ink-muted-light}`. Headings use full ink (paper on dark, black on light).
- **Hairlines**: ink at 14% opacity for ordinary rules, 34% (dark) or 40% (light) for strong rules, leaders, and unfilled marker outlines.

### Named Rules
**The One Field Rule.** Jade is the only filled color field on any page, and it is the Contact close in both themes. Do not add a second filled area.
**The Role Swap Rule.** Sage is the text accent on dark and jade is the text accent on light. Never set sage as text on paper or jade as text on the dark ground.

## Typography

**Display Font:** Young Serif (with Georgia, Times New Roman, serif), self-hosted via @fontsource, 400 only.
**Body Font:** Hanken Grotesk Variable (with ui-sans-serif, system-ui), self-hosted via @fontsource-variable.

**Character:** A warm, slightly heavy bookish serif for names, section titles, and entry titles, against a quiet grotesk for reading. Fluid sizes throughout.

### Hierarchy
- **Display** (400, `clamp(8rem, 17vw, 15rem)` at 44rem and up, `clamp(5.5rem, 29vw, 9.5rem)` below, line-height 0.86, -0.035em): the hero name only.
- **Headline** (400, `clamp(2.25rem, 1.5rem + 3.2vw, 4.25rem)`, 1.04, -0.02em): section titles (h2).
- **Title** (400, `clamp(1.5rem, 1.3rem + 0.8vw, 2rem)`, 1.15): h3; Index entries, category and post titles use similar serif steps (about 1.3 to 2.1rem).
- **Lead** (Hanken 400, `clamp(1.375rem, 1.1rem + 1.1vw, 1.875rem)`, 1.38, max 34ch): the hero or section opening statement.
- **Body** (Hanken 400, `clamp(1.0625rem, 1.02rem + 0.2vw, 1.1875rem)`, 1.65, measure 62ch; long-form prose 66ch at 1.75): reading text. Small text is 0.9375rem.
- **Label** (Hanken 600, 0.8125rem, 0.1em, uppercase): metadata only (captions, contact row labels, photo notes). Never placed above a heading.

### Named Rules
**The Serif Is For Names Rule.** Young Serif sets headings, entry titles, contact values, and pull quotes. Running text and UI controls stay in Hanken Grotesk.
**The Label Is Metadata Rule.** The uppercase label marks captions and row labels beside content. It does not introduce a heading.

## Layout

A 12-column grid inside a wrap of at most 78rem with a fluid gutter. Each homepage section is a hairline-topped band with generous vertical space (4.5 to 9.5rem). From 56rem up, the section title sits sticky in columns 1 to 4 (below the 3.5rem header) and the body fills columns 5 to 12; below that, title stacks above body. A "wide" variant puts the title above a full-width body to vary rhythm, and a "compact" variant trims padding to 62% for still-empty sections. The hero is a 12-column grid: name across columns 1 to 8, portrait in columns 9 to 12 dropped below the name's top edge, intro indented at columns 2 to 7 near 36ch, scroll cue bottom-left. The Journey runs as three columns on wide screens and a vertical spine on narrow ones. Rows (projects, posts, categories, contact) are hairline-separated lists, not boxes. Breakpoints in use: 30rem, 36rem, 40rem, 44rem, 56rem.

## Elevation & Depth

Flat. There are no shadows, gradients, glass, or cards. Depth is conveyed by hairline rules, one tonal step (the raised neutral behind photos and code), the open Index panel (solid ground with a strong bottom rule over a scrim of the ground at 82%), and the single jade field.

### Named Rules
**The No Lift Rule.** Nothing floats. Hover is color to the accent plus a small translate of the title or arrow, never a shadow or background change on a card.

## Shapes

Square and hairline. Corners are 0 on frames and fields, 2px on focus rings, badges, and the skip link, 3 to 4px on code. Markers are square: timeline markers are 0.65rem squares (filled sage or jade is "now", hollow is earlier or next, dashed is still to be written). The portrait frame carries four 1.5px accent crop marks just outside its corners. Placeholders use a 1px dashed strong hairline. The theme toggle is a 2.75rem circular hit area with no visible fill, and the current Index entry carries a small round dot; these are the only round forms.

## Components

### Header and Index
A sticky 3.5rem bar on the ground with a hairline bottom rule: "Jaden Dennis" wordmark (600, 0.9375rem) at left; theme toggle and the Index disclosure at right. The Index opens a full-width panel with dotted leaders (2px dotted strong hairline) between a serif title and a muted hint, entries separated by hairlines; on wide screens the list occupies columns 5 to 12 with a margin note at left. Hover or focus turns the title accent and nudges it 0.5rem right; the current section is marked by accent color, a dot, and a solid leader, never color alone. Escape, outside click, and link click close it.

### Rows (Project, Post, Category)
Hairline-bounded rows with a serif title, muted summary, and meta line. The whole row is the link target (stretched link). Hover and focus-within turn the title accent; the arrow moves 0.35rem. Focus draws a 2px accent outline around the row.

### Portrait Frame and Photo
4:5 frame with accent crop marks and a quiet uppercase caption. Without an image, a placeholder: raised ground, 1px dashed strong border, faint line drawing at 6% opacity, serif name and uppercase note.

### TODO Badge
Inline tag: 0.6875rem 700 uppercase-spaced text in accent, 1px dashed border, 2px radius, beside muted text. It marks honest gaps and is searchable ("TODO").

### Journey Timeline
A 1px strong-hairline spine with square markers (see Shapes). The spine draws itself on scroll where scroll-driven animation is supported.

### Contact Field
The jade section: paper text, hairlines at 40% paper, rows of uppercase label, serif value, and arrow. Hover moves the value right and the arrow up and right. Selection inverts to paper on jade. The email is assembled only on click.

### Links and Focus
Links inherit ink with a 1px underline at the strong hairline, offset 0.24em; hover turns accent. Prose links are accent. The arrow link has a 1px bottom border and widens its gap on hover. Focus is a 2px accent outline offset 3px (paper on the jade field).

### Motion
Easing is `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out). The one authored hero motion: the name's letters rise (0.28em, blur 10px to 0, 1s, 80ms stagger from 100ms), then the portrait, marks, and intro fade in around 0.5 to 0.85s. The one authored UI motion: Index panel clip-reveal (0.4s) with entries staggered 38ms each. Everything authored is inside `prefers-reduced-motion: no-preference`; smooth scrolling is gated the same way, and the spinner is disabled under reduce.

## Do's and Don'ts

### Do:
- **Do** set section titles in Young Serif at headline size, sticky in the left margin from 56rem up.
- **Do** separate content with 1px hairlines (14% ink) and let spacing do the rest.
- **Do** use sage for text and marks on dark, jade for text and marks on light, and the jade field only for the close.
- **Do** mark every unknown with a dashed outline or a TODO badge instead of inventing content.
- **Do** keep 44px (2.75rem) hit areas on header controls and make whole rows the link target.
- **Do** wrap every authored animation in `prefers-reduced-motion: no-preference`.

### Don't:
- **Don't** use cards, gradients, glass, drop shadows, or hard-offset shadows.
- **Don't** put a kicker, eyebrow, or small label above a heading.
- **Don't** center the hero, crop the portrait to a circle, or add skill bars; the portfolio-template look is rejected.
- **Don't** add a second filled color field or a third accent hue.
- **Don't** use round markers for the timeline; they are square.
