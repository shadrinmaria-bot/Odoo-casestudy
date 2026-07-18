/**
 * All page copy and asset references live in this single file so they can
 * be corrected in one place.
 *
 * PROVENANCE NOTE — the live Wix site itself could not be fetched from the
 * build environment. Copy marked "(verbatim)" is confirmed from the
 * reference screenshots the client supplied; copy marked "DRAFT" is
 * written to match the case-study narrative and should be replaced with
 * the exact wording from the original site. Images/videos are the real
 * assets the client uploaded, referenced by clean semantic filenames.
 */

export const meta = {
  title: "Odoo Manufacturing — Safety Case Study",
  description:
    "A safety management feature built into Odoo Manufacturing. UX case study.",
};

export const nav = {
  logoText: "Odoo Manufacturing",
  homeLabel: "Home",
};

export const hero = {
  // Project meta row (values read from the live site)
  projectMeta: [
    { label: "Platform", value: "Desktop Web Application" },
    { label: "Type", value: "Feature Extension — Odoo ERP" },
    { label: "Role", value: "Research · UX · Visual Design · Prototype" },
    { label: "Context", value: "Academic Project" },
  ],
  team: {
    label: "Team",
    members: ["Amit Tzadik", "Maria Lan", "Oran Shuster", "Valeria Kulishov"],
  },
  // (verbatim)
  kicker: "A safety management feature built into Odoo Manufacturing",
  // (verbatim)
  headlineLine1: "Spot safety patterns",
  headlineLine2: "Before they escalate",
  // (verbatim)
  statement: "SPOT THE PATTERN, PREVENT INJURIES",
  // Full-bleed hero background photo.
  image: {
    src: "/images/hero-background.jpg",
    alt: "A worker in a hard hat and hi-vis vest using Odoo on a laptop in a factory",
  },
};

export const background = {
  heading: "Background",
  // DRAFT — replace with the site's actual paragraph about Odoo
  body: "Odoo is an open-source suite of business applications used by millions of companies worldwide. Its Manufacturing module helps factories plan production, manage work orders, and track operations on the shop floor — but it offers no dedicated way to manage worker safety.",
  images: [
    {
      src: "/images/odoo-apps-home.png",
      alt: "The Odoo app launcher: Discuss, Dashboards, Inventory, Manufacturing, Shop Floor, Barcode and more",
      width: 1489,
      height: 763,
    },
    {
      src: "/images/manufacturing-overview.png",
      alt: "The Odoo Manufacturing work centers overview dashboard",
      width: 2482,
      height: 1308,
    },
  ],
};

export const problem = {
  heading: "Problem",
  // (verbatim, from the live site)
  caption:
    "Lack of documentation meant safety patterns went unnoticed. Only manufacturing data was visible, with no way to log incidents.",
  image: {
    src: "/images/problem-reporting-menu.png",
    alt: "Odoo Manufacturing reporting menu, limited to Work Orders and Overall Equipment Effectiveness",
    width: 399,
    height: 190,
  },
};

export const solution = {
  heading: "Solution",
  // DRAFT — replace with the site's actual description
  body: "A safety layer built directly into Odoo Manufacturing's Overview: workers report incidents where they already work, managers see incident status on every work center, and recurring patterns surface before they escalate into injuries.",
  image: {
    src: "/images/solution-reporting-safety.png",
    alt: "The reporting menu with a new Safety Statistics entry added alongside the existing reports",
    width: 460,
    height: 252,
  },
};

export const statCallout = {
  // (verbatim — verify the full sentence against the live site)
  stat: "68%",
  text: "of workers regularly encounter safety hazards on the job",
  // DRAFT source attribution — verify
  source: "National Safety Council",
};

export const rootCauses = {
  heading: "Root Causes",
  items: [
    {
      title: "Data fragmentation",
      // DRAFT
      body: "Incident information is spread across paper forms, chat messages and spreadsheets, so no one sees the full picture.",
    },
    {
      title: "Reactive compliance",
      // DRAFT
      body: "Safety is handled after something happens — reporting exists to satisfy regulation, not to prevent the next incident.",
    },
    {
      title: "No reporting channel",
      // DRAFT
      body: "Workers on the floor have no quick, built-in way to flag hazards, so most near-misses are never recorded at all.",
    },
  ],
};

export const persona = {
  heading: "Meet the user",
  // DRAFT — replace with the real persona quote from the site
  quote:
    "I only find out about hazards after someone's already been hurt. By then it's too late to prevent it.",
  personaName: "Production Floor Manager", // DRAFT
  image: {
    src: "/images/persona-worker.png",
    alt: "A production floor manager reviewing work on a laptop in the warehouse",
    width: 506,
    height: 429,
  },
  complexity: {
    title: "What makes their job complex",
    // DRAFT items
    items: [
      "Oversees multiple work centers and shifts at once",
      "Balances production targets against safety compliance",
      "Relies on second-hand, delayed reports of floor conditions",
      "Accountable for incidents they had no way to see coming",
    ],
  },
  success: {
    title: "What success looks like",
    // DRAFT items
    items: [
      "Hazards are reported the moment they're noticed",
      "Incident status is visible at a glance on the overview",
      "Recurring patterns surface before anyone is injured",
      "Compliance reporting happens as a by-product of daily work",
    ],
  },
};

export type FeatureItem = {
  title: string;
  body: string;
  video: { src: string; width: number; height: number };
};

export const features = {
  heading: "The feature at a glance",
  // NOTE: videos assumed to map to the three features in numbered order
  // (01/02/03). Swap the `src` values if the client's ordering differs.
  items: [
    {
      title: "Incident Reporting",
      // DRAFT
      body: "A fast, structured form workers can file from any work center.",
      video: { src: "/videos/incident-reporting.mp4", width: 16, height: 9 },
    },
    {
      title: "Incident Tracking",
      // DRAFT
      body: "Live incident status badges on the Manufacturing overview.",
      video: { src: "/videos/incident-tracking.mp4", width: 16, height: 9 },
    },
    {
      title: "Safety Analytics",
      // DRAFT
      body: "Trends and recurring hazards, aggregated across work centers.",
      video: { src: "/videos/safety-analytics.mp4", width: 16, height: 9 },
    },
  ] satisfies FeatureItem[],
};

export type ShowcaseImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type DecisionPoint = { title: string; body: string };

/** A design-decisions section that showcases one/two real screenshots
 *  alongside the reasoning behind the design. */
export const badgeDecisions = {
  kicker: "Design Decisions",
  heading: "Incident Badge",
  // DRAFT intro
  intro:
    "The badge is the smallest element of the feature and the one workers see most often, sitting on every work center. Each iteration reduced the effort of reading it.",
  images: [
    {
      src: "/images/incident-badge-states.svg",
      alt: "The incident count badge component",
      width: 322,
      height: 98,
    },
    {
      src: "/images/work-center-zero-incidents.png",
      alt: "A Paint work center card showing a '0 Incidents' badge in its zero state",
      width: 765,
      height: 210,
    },
  ] satisfies ShowcaseImage[],
  points: [
    {
      title: "Color coding",
      // DRAFT
      body: "Severity is mapped to color so status is readable without opening anything — red for open, amber for in-review, green for resolved.",
    },
    {
      title: "Cognitive load",
      // DRAFT
      body: "The badge shows a single count and state color; the detail lives in the card, not the chip.",
    },
    {
      title: "Zero state",
      // DRAFT
      body: "\"0 Incidents\" stays visible as an explicit, trustworthy state rather than disappearing when there is nothing to report.",
    },
  ] satisfies DecisionPoint[],
};

export const formDecisions = {
  kicker: "Design Decisions",
  heading: "Incident Report Form",
  // DRAFT intro
  intro:
    "The form has to be fast enough to fill in mid-shift, on the floor. Every revision removed friction.",
  images: [
    {
      src: "/images/incident-report-form.png",
      alt: "The safety incident report form: injury-type grid, structured time picker and severity",
      width: 2120,
      height: 1610,
    },
  ] satisfies ShowcaseImage[],
  points: [
    {
      title: "Error feedback",
      // DRAFT
      body: "Validation happens inline, next to the field that needs attention, instead of a generic banner after submit.",
    },
    {
      title: "Time field",
      // DRAFT
      body: "A structured time picker (defaulting to now) replaced free-text entry, producing consistent, usable data.",
    },
    {
      title: "Submit button hierarchy",
      // DRAFT
      body: "Submitting is the single primary action; discard is demoted to a quiet secondary control.",
    },
  ] satisfies DecisionPoint[],
};

export type Comparison = {
  title: string;
  body: string;
  before: ShowcaseImage;
  after: ShowcaseImage;
};

export const reportViewDecisions = {
  kicker: "Design Decisions",
  heading: "Submitted Incident Report View",
  // DRAFT intro
  intro:
    "Once submitted, a report is read far more often than it is written — by managers, safety officers and auditors. The redesign reorganizes it around the reader.",
  comparisons: [
    {
      title: "Field layout & reporter placement",
      // DRAFT
      body: "The original view led with the reporter's name and mirrored the form's input order. The redesign leads with what happened and how severe it was, groups the incident detail together, and moves the reporter into supporting metadata — keeping the focus on the incident, not the person.",
      before: {
        src: "/images/submitted-report-before.png",
        alt: "The original submitted report: reporter name at the top, form-order fields",
        width: 1064,
        height: 543,
      },
      after: {
        src: "/images/submitted-report-after.png",
        alt: "The redesigned submitted report: severity-led, reader-first grouping",
        width: 2978,
        height: 1302,
      },
    },
  ] satisfies Comparison[],
  futureNote: {
    title: "Future improvements",
    // DRAFT
    body: "With more time, the next steps would be attaching photos to reports, notifying assigned owners when status changes, and feeding resolved incidents into the analytics view automatically.",
  },
};

export const footer = {
  homeLabel: "Home",
  // The original "Built on Wix Studio" badge is replaced by this quiet
  // credit line. Delete `credit` to remove it entirely.
  credit: "Originally designed in Wix Studio · Rebuilt with Next.js",
};
