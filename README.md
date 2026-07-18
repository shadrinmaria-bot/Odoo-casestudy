# Odoo Manufacturing — Safety Case Study

A single-page case study site rebuilt from the original Wix Studio site
(`amitzadik.wixstudio.com/odoo-manufacturing`) as a Next.js (App Router) +
TypeScript + Tailwind CSS app, ready to deploy on Vercel.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

## Deploy to Vercel

Either:

- `npx vercel` from the project root (follow the prompts), or
- push this repo to GitHub and import it at vercel.com/new — no extra
  configuration needed; Vercel auto-detects Next.js.

## Where things live

| What | Where |
| --- | --- |
| **All page copy** | `lib/content.ts` — one file, edit freely |
| Design tokens (colors, radii, fonts) | `tailwind.config.ts` |
| Fonts | `app/layout.tsx` (Inter + Space Grotesk via `next/font`) |
| Page section order | `app/page.tsx` |
| Scroll animations | `components/Reveal.tsx` (framer-motion, respects reduced motion) |
| Images/videos | `public/images/`, `public/videos/` |

## Supplying images

Drop files into `public/images/` using the exact filenames below. Until a
file exists, the site shows a labeled gray placeholder in its spot (the
`Asset` component falls back automatically — no code changes needed).

Missing assets:

- `hero-mockup.png` — hero mockup of the feature inside Odoo
- `background-odoo-overview.png` — Odoo Manufacturing overview screenshot
- `background-odoo-workorders.png` — Odoo work orders screenshot
- `feature-incident-reporting.png` — Incident Reporting thumbnail
- `feature-incident-tracking.png` — Incident Tracking thumbnail
- `feature-safety-analytics.png` — Safety Analytics thumbnail
- `badge-color-before.png` / `badge-color-after.png` — badge color coding
- `badge-load-before.png` / `badge-load-after.png` — badge cognitive load
- `badge-zero-before.png` / `badge-zero-after.png` — badge zero state
- `form-errors-before.png` / `form-errors-after.png` — form error feedback
- `form-time-before.png` / `form-time-after.png` — form time field
- `form-submit-before.png` / `form-submit-after.png` — submit hierarchy
- `report-layout-before.png` / `report-layout-after.png` — report field layout
- `report-reporter-before.png` / `report-reporter-after.png` — reporter placement

If an image's aspect ratio differs from the placeholder's, update the
`width`/`height` for that entry in `lib/content.ts` so `next/image`
reserves the right space.

## Provenance caveats

The original Wix site was not reachable from the build environment
(network policy blocked the host), so:

- Copy marked `(verbatim)` in `lib/content.ts` comes from the project
  brief; everything marked `DRAFT` is written to match the brief's
  description and should be replaced with the site's real copy.
- Colors, fonts, and spacing in `tailwind.config.ts` are documented
  assumptions (Odoo brand purple accent, warm off-white background) —
  adjust the hex values there to match the original exactly.
- The "Built on Wix Studio" badge was replaced with a small footer
  credit; edit or delete `footer.credit` in `lib/content.ts` to change
  or remove it.
