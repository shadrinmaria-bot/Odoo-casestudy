/**
 * All page copy and asset references live in this single file.
 *
 * PROVENANCE NOTE — the live Wix site could not be fetched from the build
 * environment. Copy marked "(verbatim)" is confirmed from the reference
 * screenshots the client supplied; copy marked "DRAFT" is written to match
 * the case-study narrative and should be replaced with the exact wording
 * from the live site. Images/videos are the real client-supplied assets.
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
  kicker: "A safety management feature built into Odoo Manufacturing", // (verbatim)
  headlineLine1: "Spot safety patterns", // (verbatim)
  headlineLine2: "Before they escalate", // (verbatim)
  statement: "SPOT THE PATTERN, PREVENT INJURIES", // (verbatim)
  image: {
    src: "/images/hero-background.jpg",
    alt: "A worker in a hard hat and hi-vis vest using Odoo on a laptop in a factory",
  },
};

export const background = {
  heading: "Background",
  // (verbatim, from the reference screenshot)
  body: "Odoo is an open-source business management software suite (manufacturing, inventory, accounting, HR, and CRM) that lets companies run their operations from one integrated platform.",
  image: {
    src: "/images/odoo-apps-home.png",
    alt: "The Odoo app launcher: Discuss, Dashboards, Inventory, Manufacturing, Shop Floor and more",
    width: 1489,
    height: 763,
  },
};

export const problem = {
  heading: "Problem",
  // (verbatim, from the live site)
  caption:
    "Lack of documentation meant safety patterns went unnoticed. Only manufacturing data was visible, with no way to log incidents.",
  images: [
    {
      src: "/images/manufacturing-overview.png",
      alt: "The Manufacturing work centers overview — only production data, no safety layer",
      width: 2482,
      height: 1308,
      // DRAFT caption
      caption: "The Manufacturing overview surfaced production metrics only.",
    },
    {
      src: "/images/problem-reporting-menu.png",
      alt: "The reporting menu, limited to Work Orders and Overall Equipment Effectiveness",
      width: 399,
      height: 190,
      // DRAFT caption
      caption:
        "Reporting was limited to Work Orders and Overall Equipment Effectiveness — no way to log an incident.",
    },
  ],
};

export const solution = {
  heading: "Solution",
  // (verbatim, from the reference screenshot)
  body: "We added a safety layer to Odoo's Overview, embedding safety data to help track patterns and reduce future incidents.",
  image: {
    src: "/images/solution-reporting-safety.png",
    alt: "The reporting menu with a new Safety Statistics entry added",
    width: 460,
    height: 252,
  },
};

export const persona = {
  heading: "Who is the user?",
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
    items: [
      "Oversees multiple work centers and shifts at once",
      "Balances production targets against safety compliance",
      "Relies on second-hand, delayed reports of floor conditions",
      "Accountable for incidents they had no way to see coming",
    ],
  },
  success: {
    title: "What success looks like",
    items: [
      "Hazards are reported the moment they're noticed",
      "Incident status is visible at a glance on the overview",
      "Recurring patterns surface before anyone is injured",
      "Compliance reporting happens as a by-product of daily work",
    ],
  },
};

export type FeatureSectionData = {
  id: string;
  heading: string;
  label: string;
  caption: string;
  captionSide: "left" | "right";
  video: { src: string; width: number; height: number };
};

// Each feature is its own full-width section with a framed demo video and
// a caption that alternates sides. Video order assumed 01/02/03 → swap the
// `src` values if the client's intended order differs.
export const featureSections: FeatureSectionData[] = [
  {
    id: "incident-reporting",
    heading: "Incident Reporting",
    label: "Report where the work happens", // DRAFT
    caption:
      "Workers log an incident from the work center they're already on — no separate system, no context switching.", // DRAFT
    captionSide: "right",
    video: { src: "/videos/incident-reporting.mp4", width: 16, height: 10 },
  },
  {
    id: "incident-tracking",
    heading: "Incident Tracking",
    label: "Click on the red badge", // (verbatim label from the reference)
    caption:
      "A color-coded badge on each work center surfaces open incidents at a glance, so nothing stays buried.", // DRAFT
    captionSide: "left",
    video: { src: "/videos/incident-tracking.mp4", width: 16, height: 10 },
  },
  {
    id: "safety-analytics",
    heading: "Safety Analytics",
    label: "Spot the pattern", // DRAFT
    caption:
      "Aggregated trends across work centers reveal recurring hazards before they turn into injuries.", // DRAFT
    captionSide: "right",
    video: { src: "/videos/safety-analytics.mp4", width: 16, height: 10 },
  },
];

export const designDecisions = {
  heading: "Design Decisions",
};

export type BadgePill = {
  text: string;
  tone: "danger" | "warning" | "success" | "neutral";
  variant: "solid" | "soft" | "outline";
};

export type BadgeIteration = {
  title: string;
  body: string;
  before: BadgePill[];
  after: BadgePill[];
};

export const badgeIterations = {
  heading: "Incident Badge Design Iterations",
  // DRAFT intro
  intro:
    "The badge sits on every work center and is the element workers see most often. Each iteration made its state easier to read at a glance.",
  // Top hero comparison: the overall before → after of the badge set.
  hero: {
    before: [
      { text: "3 Incidents", tone: "neutral", variant: "solid" },
      { text: "1 Incident", tone: "neutral", variant: "solid" },
      { text: "0 Incidents", tone: "neutral", variant: "solid" },
    ] as BadgePill[],
    after: [
      { text: "3 Critical", tone: "danger", variant: "solid" },
      { text: "1 Warning", tone: "warning", variant: "solid" },
      { text: "0 Incidents", tone: "success", variant: "soft" },
    ] as BadgePill[],
  },
  iterations: [
    {
      title: "Color coding",
      // DRAFT
      body: "A single neutral color gave every state the same weight. Mapping severity to color lets a manager read status without opening anything.",
      before: [{ text: "3 Incidents", tone: "neutral", variant: "solid" }],
      after: [{ text: "3 Critical", tone: "danger", variant: "solid" }],
    },
    {
      title: "Cognitive load",
      // DRAFT
      body: "The verbose label forced reading. The final badge leads with the count and a state color; the wording moves into the card.",
      before: [
        { text: "3 Critical Incidents Reported", tone: "danger", variant: "soft" },
      ],
      after: [{ text: "3 Critical", tone: "danger", variant: "solid" }],
    },
    {
      title: "Zero state",
      // DRAFT
      body: "The badge used to disappear with no incidents — indistinguishable from being broken. A quiet neutral badge makes \"no incidents\" an explicit, trustworthy state.",
      before: [{ text: "", tone: "neutral", variant: "outline" }],
      after: [{ text: "0 Incidents", tone: "success", variant: "soft" }],
    },
  ] satisfies BadgeIteration[],
};

export type Annotation = { title: string; body: string };

export const formDecisions = {
  heading: "Safety Incident Report Form",
  // DRAFT intro
  intro:
    "The form has to be fast enough to fill in mid-shift, on the floor. Every revision removed friction.",
  image: {
    src: "/images/incident-report-form.png",
    alt: "The safety incident report form: injury-type grid, structured time picker and severity",
    width: 2120,
    height: 1610,
  },
  annotations: [
    {
      title: "Error feedback",
      // DRAFT
      body: "Validation happens inline, next to the field that needs attention, instead of a generic banner after submit.",
    },
    {
      title: "Time of incident",
      // DRAFT
      body: "A structured time picker (defaulting to now) replaced free-text entry, producing consistent, usable data.",
    },
    {
      title: "Submit hierarchy",
      // DRAFT
      body: "Submitting is the single primary action; discard is demoted to a quiet secondary control.",
    },
  ] satisfies Annotation[],
};

export type ShowcaseImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const reportView = {
  heading: "Submitted Incident Report View",
  // DRAFT intro
  intro:
    "Once submitted, a report is read far more often than it is written — by managers, safety officers and auditors. The redesign reorganizes it around the reader.",
  before: {
    src: "/images/submitted-report-before.png",
    alt: "The original submitted report: reporter name at the top, form-order fields",
    width: 1064,
    height: 543,
  } satisfies ShowcaseImage,
  after: {
    src: "/images/submitted-report-after.png",
    alt: "The redesigned submitted report: severity-led, reader-first grouping",
    width: 2978,
    height: 1302,
  } satisfies ShowcaseImage,
  // DRAFT
  body: "The original view led with the reporter's name and mirrored the form's input order. The redesign leads with what happened and how severe it was, groups the incident detail together, and moves the reporter into supporting metadata — keeping the focus on the incident, not the person.",
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
