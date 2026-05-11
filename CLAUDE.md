# TRUENORTH ANALYTICS LTD — Website

## Project overview

Marketing website for **TRUENORTH ANALYTICS LTD**, a Canadian analytics consultancy that helps organizations turn operational data into actionable business insight.

**Tagline:** Data-Driven Decisions. Measurable Results.
**Contact email:** info@true-north-analytics.com
**Domain:** true-north-analytics.com

## Tech stack

- **Framework:** React 18 (JSX)
- **Bundler:** Vite (latest)
- **Styling:** Plain CSS (`src/styles.css`) — no CSS framework, no CSS modules
- **Routing:** None — single page, all navigation via anchor links (`#about`, `#services`, `#contact`)
- **Language:** JavaScript (not TypeScript)

## File structure

```
index.html          # HTML entry point, sets page title + meta description
package.json        # Vite + React deps, scripts: dev / build / preview
public/
  favicon.svg       # Site favicon
src/
  main.jsx          # Mounts React app into #root
  App.jsx           # Entire page — all sections and content live here
  styles.css        # All styles — dark theme, responsive
```

## Design system

- **Background:** `#020617` (near-black navy)
- **Accent:** `#22d3ee` / `#67e8f9` (cyan)
- **Body text:** `#cbd5e1`
- **Font:** Inter, system-ui fallback stack
- **Responsive breakpoint:** 820px (stacks all grids to single column)
- **Card style:** glass-morphism — `rgba(255,255,255,0.055)` background, 1px white-10% border, 30px border-radius

## Page sections (in order)

1. **Hero** — nav bar + headline + CTA buttons + hero card
2. **About** — company description + delivery model pillars (6 items)
3. **Services** — 4 service cards (Operational Analytics, Data Strategy, Dashboarding, Quality & Process Intelligence)
4. **Who We Support** — 4 industry tiles (Operations & Supply Chain, Distribution & Warehousing, Retail & Commercial Services, SMBs)
5. **Value Proposition** — full-width accent band
6. **Contact** — description + contact card with email link

## Local development

Node.js must be installed first (not currently installed — download LTS from nodejs.org).

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # outputs to dist/
npm run preview   # preview production build locally
```

## Deployment

Cloudflare Pages connected to the GitHub repository:
- **Repo:** https://github.com/KojoFoliLLC/truenorth-analytics-website
- **Build command:** `npm run build`
- **Build output:** `dist`
- **Framework preset:** Vite

## Content data (in App.jsx)

All page content is defined as plain JS arrays at the top of `src/App.jsx`:
- `services[]` — 4 service objects with `title` + `description`
- `pillars[]` — 6 delivery model strings
- `industries[]` — 4 industry strings

To update copy, edit these arrays or the JSX directly in `src/App.jsx`.

## Git

- **Remote:** https://github.com/KojoFoliLLC/truenorth-analytics-website.git
- **Default branch:** `main`
- Repository initialized locally on 2026-05-10; initial commit contains only README.md
- Extracted website files have not yet been committed
