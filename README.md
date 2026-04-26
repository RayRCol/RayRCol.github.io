# AEON Space Agency Template

AEON Space Agency is an Astro template for a cinematic, content-driven landing site. It combines a high-impact single-page homepage with markdown collections for missions, reports, news, departures, and standalone agency pages.

This project is designed to be cloned, remixed, and customized by other users as a starting point for editorial brands, agencies, fictional worlds, launches, or science-forward marketing sites.

## Features

- Astro + TypeScript project structure ready for template reuse
- Tailwind CSS v4 design system with custom space-agency tokens
- React islands for Framer Motion interactions and UI controls
- Lucide icons throughout the site
- Responsive layouts tuned for mobile, tablet, and desktop
- Light and dark theme toggle with saved user preference
- Markdown-powered content collections for:
  - `missions`
  - `reports`
  - `news`
  - `departures`
  - singleton pages: `about`, `science`, `technology`
- Collection index pages and item detail pages generated from content
- Live launch countdown component driven by `launchDate` + `launchTime`
- Local image-based content model for quick visual customization

## Included Content Areas

### Homepage

- Hero section with animated stars, orbital rings, agency logo, and CTA block
- Active Missions preview
- Latest Report / discovery feature
- Science stats section
- Next Departure preview with live countdown
- Footer directory and coordinates

### Collection Pages

- Missions archive and mission detail pages
- Reports archive and report detail pages
- News archive and news article pages
- Departures archive and departure detail pages

### Singleton Pages

- About
- Science
- Technology

## Tech Stack

- Astro
- TypeScript
- Tailwind CSS v4
- React
- Framer Motion
- Lucide React
- Astro Content Collections

## Installation

### Use as an Astro template

Astro supports creating a new project directly from a GitHub repository template:

```bash
npm create astro@latest -- --template <your-github-user>/<your-repo>
```

You can also target a branch explicitly:

```bash
npm create astro@latest -- --template <your-github-user>/<your-repo>#main
```

### Local development

```bash
npm install
npm run dev
```

The site will run at `http://localhost:4321` by default.

## Scripts

- `npm run dev` — start the Astro dev server
- `npm run build` — build the production site
- `npm run preview` — preview the production build locally
- `npm run check` — run Astro type and content checks

## Project Structure

```text
/
├── public/
│   └── images/
├── src/
│   ├── components/
│   ├── content/
│   │   ├── departures/
│   │   ├── missions/
│   │   ├── news/
│   │   ├── pages/
│   │   └── reports/
│   ├── layouts/
│   ├── lib/
│   ├── pages/
│   └── styles/
├── astro.config.mjs
└── package.json
```

## Content Customization

All primary content is stored in markdown under `src/content/`.

### Missions

Files in `src/content/missions/` control mission cards and mission detail pages.

Important frontmatter fields:

- `title`
- `summary`
- `status`
- `statusTone`
- `icon`
- `order`
- `vehicle`
- `missionWindow`
- `destination`
- `coverImage`

### Reports

Files in `src/content/reports/` control the homepage discovery feature, report archive, and detail pages.

Important frontmatter fields:

- `title`
- `summary`
- `label`
- `publishedAt`
- `image`
- `spectrumBars`
- `rangeStart`
- `rangeEnd`
- `highlight`

### News

Files in `src/content/news/` control the news archive and article pages.

Important frontmatter fields:

- `title`
- `summary`
- `publishedAt`
- `author`
- `desk`
- `image`

### Departures

Files in `src/content/departures/` control departure archive cards, detail pages, and the live countdown block on the homepage.

Important frontmatter fields:

- `title`
- `detail`
- `launchDate`
- `launchTime`
- `image`
- `launchSite`
- `missionWindow`
- `order`

### Singleton pages

Files in `src/content/pages/` control the About, Science, and Technology pages.

Important frontmatter fields:

- `title`
- `summary`
- `eyebrow`
- `image`
- `highlights`

## Image Customization

Static images are served from `public/images/`.

You can replace the current visuals by:

1. copying your new images into `public/images/`
2. updating the relevant frontmatter `image` or `coverImage` values in `src/content/`
3. replacing the homepage hero image in `src/components/HeroShell.tsx` if needed

## Theme Customization

Theme tokens are defined in `src/styles/global.css`.

This includes:

- brand colors
- typography tokens
- shell gradients
- prose styling
- light/dark theme overrides

If you want to rebrand the template, start there first.

## Publishing Notes

Before publishing this as a public template, update:

- `package.json` name, description, and repository fields if needed
- `README.md` install command with your actual GitHub repository path
- preview images, demo URL, and screenshot assets for your listing
- placeholder content in `src/content/` with your own brand or narrative

## Requirements

- Node.js `>= 22.12.0`

## License

MIT
