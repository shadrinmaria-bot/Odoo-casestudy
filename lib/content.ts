/**
 * All page copy lives in this single file so it can be corrected in one
 * place.
 *
 * PROVENANCE NOTE — the original Wix site could not be fetched from the
 * build environment, so:
 *  - Strings marked with "(verbatim)" comments come word-for-word from
 *    the project brief.
 *  - Everything else is DRAFT copy written to match the brief's
 *    description of each section. Replace it with the real copy from
 *    the live site.
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
  // Project meta row (verbatim labels from the brief)
  projectMeta: [
    { label: "Platform", value: "Odoo Manufacturing" },
    { label: "Type", value: "Feature design" },
    { label: "Role", value: "UX/UI Design" },
    { label: "Context", value: "Academic case study" },
  ],
  team: {
    label: "Team",
    members: ["Amit Zadik"], // DRAFT — replace with the full team list
  },
  // (verbatim)
  kicker: "A safety management feature built into Odoo Manufacturing",
  // (verbatim)
  headlineLine1: "Spot safety patterns",
  headlineLine2: "Before they escalate",
  // (verbatim)
  statement: "SPOT THE PATTERN, PREVENT INJURIES",
  image: {
    src: "/images/hero-mockup.png",
    alt: "Hero mockup of the safety feature inside Odoo Manufacturing",
    width: 1440,
    height: 900,
  },
};

export const background = {
  heading: "Background",
  // DRAFT — replace with the site's actual paragraph about Odoo
  body: "Odoo is an open-source suite of business applications used by millions of companies worldwide. Its Manufacturing module helps factories plan production, manage work orders, and track operations on the shop floor — but it offers no dedicated way to manage worker safety.",
  images: [
    {
      src: "/images/background-odoo-overview.png",
      alt: "Screenshot of the Odoo Manufacturing overview",
      width: 1280,
      height: 800,
    },
    {
      src: "/images/background-odoo-workorders.png",
      alt: "Screenshot of Odoo Manufacturing work orders",
      width: 1280,
      height: 800,
    },
  ],
};

export const problem = {
  heading: "Problem",
  // DRAFT — replace with the site's actual caption about buried logs
  caption:
    "Safety incidents are logged in scattered notes, spreadsheets and paper forms. Buried in disconnected records, recurring hazards go unnoticed until someone gets hurt.",
};

export const solution = {
  heading: "Solution",
  // DRAFT — replace with the site's actual description
  body: "A safety layer built directly into Odoo Manufacturing's Overview: workers report incidents where they already work, managers see incident status on every work center, and recurring patterns surface before they escalate into injuries.",
};

export const statCallout = {
  // (verbatim — brief truncates after "safety hazards"; verify the full
  // sentence against the live site)
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

export const features = {
  heading: "The feature at a glance",
  items: [
    {
      title: "Incident Reporting",
      // DRAFT
      body: "A fast, structured form workers can file from any work center.",
      image: {
        src: "/images/feature-incident-reporting.png",
        alt: "Incident reporting form thumbnail",
        width: 640,
        height: 420,
      },
    },
    {
      title: "Incident Tracking",
      // DRAFT
      body: "Live incident status badges on the Manufacturing overview.",
      image: {
        src: "/images/feature-incident-tracking.png",
        alt: "Incident tracking badges thumbnail",
        width: 640,
        height: 420,
      },
    },
    {
      title: "Safety Analytics",
      // DRAFT
      body: "Trends and recurring hazards, aggregated across work centers.",
      image: {
        src: "/images/feature-safety-analytics.png",
        alt: "Safety analytics dashboard thumbnail",
        width: 640,
        height: 420,
      },
    },
  ],
};

export type Comparison = {
  title: string;
  body: string;
  before: { src: string; alt: string; width: number; height: number };
  after: { src: string; alt: string; width: number; height: number };
};

export const badgeDecisions = {
  kicker: "Design Decisions",
  heading: "Incident Badge",
  // DRAFT intro
  intro:
    "The badge is the smallest element of the feature and the one workers see most often. Each iteration reduced the effort of reading it.",
  comparisons: [
    {
      title: "Color coding",
      // DRAFT
      body: "Early badges used a single accent color for every state. The final version maps severity to color — red for open incidents, amber for in-review, green for resolved — so status is readable without opening anything.",
      before: {
        src: "/images/badge-color-before.png",
        alt: "Badge before: single-color states",
        width: 560,
        height: 360,
      },
      after: {
        src: "/images/badge-color-after.png",
        alt: "Badge after: severity color coding",
        width: 560,
        height: 360,
      },
    },
    {
      title: "Cognitive load",
      // DRAFT
      body: "The first design packed count, severity and label into one dense chip. The final badge shows a single number and state color, moving detail into the card itself.",
      before: {
        src: "/images/badge-load-before.png",
        alt: "Badge before: dense chip with multiple values",
        width: 560,
        height: 360,
      },
      after: {
        src: "/images/badge-load-after.png",
        alt: "Badge after: single count with state color",
        width: 560,
        height: 360,
      },
    },
    {
      title: "Zero state",
      // DRAFT
      body: "Originally the badge disappeared when there were no incidents — indistinguishable from the feature being broken. The final version keeps a quiet neutral badge, making \"no incidents\" an explicit, trustworthy state.",
      before: {
        src: "/images/badge-zero-before.png",
        alt: "Badge before: hidden when no incidents",
        width: 560,
        height: 360,
      },
      after: {
        src: "/images/badge-zero-after.png",
        alt: "Badge after: explicit neutral zero state",
        width: 560,
        height: 360,
      },
    },
  ] satisfies Comparison[],
};

export const formDecisions = {
  kicker: "Design Decisions",
  heading: "Incident Report Form",
  // DRAFT intro
  intro:
    "The form has to be fast enough to fill in mid-shift, on the floor, possibly with gloves on. Every revision removed friction.",
  comparisons: [
    {
      title: "Error feedback",
      // DRAFT
      body: "Errors originally appeared only after submitting, as a generic banner. The final form validates inline, next to the field that needs attention.",
      before: {
        src: "/images/form-errors-before.png",
        alt: "Form before: generic error banner after submit",
        width: 560,
        height: 360,
      },
      after: {
        src: "/images/form-errors-after.png",
        alt: "Form after: inline field-level validation",
        width: 560,
        height: 360,
      },
    },
    {
      title: "Time field",
      // DRAFT
      body: "A free-text time field produced inconsistent, unusable data. The final design defaults to \"now\" with a structured picker for corrections.",
      before: {
        src: "/images/form-time-before.png",
        alt: "Form before: free-text time entry",
        width: 560,
        height: 360,
      },
      after: {
        src: "/images/form-time-after.png",
        alt: "Form after: defaulted structured time picker",
        width: 560,
        height: 360,
      },
    },
    {
      title: "Submit button hierarchy",
      // DRAFT
      body: "Submit and discard originally carried equal visual weight. The final layout makes submitting the single primary action and demotes discard to a quiet text link.",
      before: {
        src: "/images/form-submit-before.png",
        alt: "Form before: equal-weight submit and discard",
        width: 560,
        height: 360,
      },
      after: {
        src: "/images/form-submit-after.png",
        alt: "Form after: clear primary submit action",
        width: 560,
        height: 360,
      },
    },
  ] satisfies Comparison[],
};

export const reportViewDecisions = {
  kicker: "Design Decisions",
  heading: "Submitted Incident Report View",
  // DRAFT intro
  intro:
    "Once submitted, a report is read far more often than it is written — by managers, safety officers and auditors.",
  comparisons: [
    {
      title: "Field layout",
      // DRAFT
      body: "The first view mirrored the form's input order. The final layout groups what readers need first — what happened, where, how severe — above administrative detail.",
      before: {
        src: "/images/report-layout-before.png",
        alt: "Report view before: form-order field layout",
        width: 560,
        height: 360,
      },
      after: {
        src: "/images/report-layout-after.png",
        alt: "Report view after: reader-first grouping",
        width: 560,
        height: 360,
      },
    },
    {
      title: "Reporter placement",
      // DRAFT
      body: "The reporter's name originally led the page, implying blame. The final design moves it to metadata, keeping the focus on the incident, not the person.",
      before: {
        src: "/images/report-reporter-before.png",
        alt: "Report view before: reporter name at the top",
        width: 560,
        height: 360,
      },
      after: {
        src: "/images/report-reporter-after.png",
        alt: "Report view after: reporter in metadata",
        width: 560,
        height: 360,
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
