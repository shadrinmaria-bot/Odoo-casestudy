# Odoo Manufacturing — Safety Case Study

A single-page case study site rebuilt from the original Wix Studio site
(`amitzadik.wixstudio.com/odoo-manufacturing`) as a Next.js (App Router) +
TypeScript + Tailwind CSS app, ready to deploy on Vercel.

Dark theme with a mint-green accent, a full-bleed hero image, and
scroll-triggered animations — matched to the live site.

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
| **All page copy & asset paths** | `lib/content.ts` — one file, edit freely |
| Design tokens (dark palette, mint accent, radii) | `tailwind.config.ts` |
| Font (Hanken Grotesk, a Wix-Madefor stand-in) | `app/layout.tsx` |
| Page section order | `app/page.tsx` |
| Scroll animations | `components/Reveal.tsx` (framer-motion, respects reduced motion) |
| Images | `public/images/` |
| Videos | `public/videos/` (feature demos, autoplay + muted + loop) |

## Assets

The client-supplied images and videos are wired in under clean semantic
filenames in `public/`:

**Images** — `hero-background.jpg`, `odoo-apps-home.png`,
`manufacturing-overview.png`, `problem-reporting-menu.png`,
`solution-reporting-safety.png`, `incident-badge-states.svg`,
`work-center-zero-incidents.png`, `incident-report-form.png`,
`submitted-report-before.png`, `submitted-report-after.png`,
`persona-worker.png`.

**Videos** — `incident-reporting.mp4`, `incident-tracking.mp4`,
`safety-analytics.mp4` (the three feature demos).

Any image/video component falls back to a labeled placeholder if a file is
missing, so swapping or adding assets never breaks the layout — just drop a
file into `public/` matching the path in `lib/content.ts`.

## Page structure

Single scrolling page, in order: Hero → Background → Problem → Solution →
Who is the user? → Incident Reporting → Incident Tracking → Safety
Analytics → Design Decisions (Incident Badge Design Iterations → Safety
Incident Report Form → Submitted Incident Report View) → Footer. The badge
iterations are rendered as live CSS badges (before → after), not images.

## Assumptions to verify

- **Video order** — the three demos are mapped to Incident Reporting /
  Incident Tracking / Safety Analytics in numbered order (01/02/03). If the
  client's intended order differs, swap the `src` values in the `features`
  block of `lib/content.ts`.
- **Copy marked `DRAFT`** in `lib/content.ts` (Background paragraph, root
  causes, persona quote/lists, feature blurbs, design-decision points, stat
  source) is written to match the case-study narrative — replace with the
  exact wording from the live site. Copy marked `(verbatim)` is confirmed
  from the reference screenshots.
- **Font** — Hanken Grotesk approximates Wix Madefor (not on Google Fonts).
  Self-host the real Madefor files and update `app/layout.tsx` for an exact
  match.
- **Accent hex** (`#5FE0B0`) and the dark palette live in
  `tailwind.config.ts` — fine-tune there if needed.
- **Wix badge** — replaced with a small footer credit; edit or delete
  `footer.credit` in `lib/content.ts` to change or remove it.

## Unused uploads

A few uploaded files aren't referenced (a cropped nav-bar detail and two
loose SVG glyphs); the on-page arrow is drawn in SVG directly. Point any
component in `lib/content.ts` at them if you want them shown.
