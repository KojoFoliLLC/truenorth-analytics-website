# TRUENORTH ANALYTICS LTD Website

Marketing website for **TRUENORTH ANALYTICS LTD** — a Canadian analytics consultancy helping organizations turn operational data into actionable business insight.

**Live site:** [true-north-analytics.com](https://true-north-analytics.com)

## Tech stack

- **React 18** + **Vite**
- Plain CSS (dark theme, responsive at 820px)
- Single-page app with anchor navigation

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build

```bash
npm run build
```

Production files are output to `dist/`.

## Deployment

Deployed via **Cloudflare Workers** (static assets) connected to this GitHub repository.

**Build configuration:**

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Non-production deploy command | `npx wrangler versions upload` |

Deployment is triggered automatically on every push to `main`.

## Content

All page copy is defined as plain JS arrays at the top of `src/App.jsx`:
- `services[]` — 4 service cards
- `pillars[]` — 6 delivery model items
- `industries[]` — 4 industry tiles

Edit those arrays to update site content.
