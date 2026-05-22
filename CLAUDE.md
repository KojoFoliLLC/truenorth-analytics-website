# TRUENORTH ANALYTICS LTD — Website

## Project overview

Marketing website for **TRUENORTH ANALYTICS LTD**, a Canadian analytics consultancy that helps organizations turn operational data into actionable business insight.

**Tagline:** Data-Driven Decisions. Measurable Results.
**Contact email:** info@true-north-analytics.com
**Domain:** true-north-analytics.com
**Live site:** https://true-north-analytics.com

## Tech stack

- **Framework:** React 18 (JSX)
- **Bundler:** Vite (latest)
- **Styling:** Plain CSS (`src/styles.css`) — no CSS framework, no CSS modules
- **Routing:** None — single page, all navigation via anchor links (`#about`, `#services`, `#contact`)
- **Language:** JavaScript (not TypeScript)

## File structure

```
index.html              # HTML entry point, sets page title + meta description
package.json            # Vite + React deps, scripts: dev / build / preview
wrangler.toml           # Cloudflare Workers deployment config
public/
  favicon.svg           # Site favicon
  logo.png              # Company logo (displayed in nav bar)
src/
  main.jsx              # Mounts React app into #root
  App.jsx               # Entire page — all sections, content, and scroll animation logic
  styles.css            # All styles — dark theme, responsive, reveal animations
```

## Design system

- **Background:** `#020617` (near-black navy)
- **Accent:** `#22d3ee` / `#67e8f9` (cyan)
- **Body text:** `#cbd5e1`
- **Font:** Inter (loaded from Google Fonts), system-ui fallback stack
- **Responsive breakpoint:** 820px (stacks all grids to single column)
- **Card style:** glass-morphism — `rgba(255,255,255,0.055)` background, 1px white-10% border, 30px border-radius

## Page sections (in order)

1. **Hero** — sticky nav bar (logo + links) + headline + CTA buttons + hero card
2. **About** — company description + delivery model pillars (6 items)
3. **Services** — 4 service cards (Operational Analytics, Data Strategy, Dashboarding, Quality & Process Intelligence)
4. **Who We Support** — 4 industry tiles (Operations & Supply Chain, Distribution & Warehousing, Retail & Commercial Services, SMBs)
5. **Value Proposition** — full-width accent band
6. **Contact** — two paragraphs of description + contact form (First Name, Last Name, Email, Phone, Message) powered by FormSubmit → `info@true-north-analytics.com`

## Navigation

The nav bar is **fixed/sticky** — it stays at the top of the viewport while scrolling. It has a frosted glass background (`rgba(2,6,23,0.85)` + `backdrop-filter: blur`). The logo (`public/logo.png`) is displayed on the left at 56px height. On mobile (≤820px) the links collapse into a **hamburger menu** — three-line icon animates to an X when open, links stack in a full-width dropdown.

## Scroll animations

All sections, cards, pillars, and industry tiles use a **fade + slide-up reveal** on scroll via the Intersection Observer API (`useEffect` in `App.jsx`). Elements start hidden with `.reveal` class and gain `.visible` when they enter the viewport. Staggered `transitionDelay` is applied via inline styles on repeated items. Respects `prefers-reduced-motion`.

## Local development

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # outputs to dist/
npm run preview   # preview production build locally
```

## Deployment

Deployed via **Cloudflare Workers (static assets)** connected to the GitHub repository.

- **Repo:** https://github.com/KojoFoliLLC/truenorth-analytics-website
- **Build command:** `npm run build`
- **Deploy command:** `npx wrangler deploy`
- **Non-production deploy command:** `npx wrangler versions upload`
- **Config file:** `wrangler.toml`
- **Auth:** `CLOUDFLARE_API_TOKEN` (Secret) + `CLOUDFLARE_ACCOUNT_ID` set as environment variables in the Cloudflare project settings. Token requires **Account → Edit Cloudflare Workers** permissions.

Deployment triggers automatically on every push to `main`.

## Content data (in App.jsx)

All page content is defined as plain JS arrays at the top of `src/App.jsx`:
- `services[]` — 4 service objects with `title` + `description`
- `pillars[]` — 6 delivery model strings
- `industries[]` — 4 industry strings

To update copy, edit these arrays or the JSX directly in `src/App.jsx`.

## SEO & Social sharing

Open Graph and Twitter Card meta tags are set in `index.html`:
- `og:title`, `og:description`, `og:image` (logo.png), `og:url`, `og:locale` (en_CA)
- `twitter:card` set to `summary`
- A `1200×630px` landscape OG image (`public/og-image.png`) is recommended for better LinkedIn/Facebook previews — not yet created

## Git

- **Remote:** https://github.com/KojoFoliLLC/truenorth-analytics-website.git
- **Default branch:** `main`
- **Git identity:** Kojo Foli / kojo.foli.ssi@gmail.com (set at repo level)
