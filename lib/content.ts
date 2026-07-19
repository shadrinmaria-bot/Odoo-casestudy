/**
 * All page copy and asset references live in this single file.
 *
 * PROVENANCE NOTE - the live Wix site could not be fetched from the build
 * environment. Copy marked "(verbatim)" is confirmed from the reference
 * screenshots the client supplied; copy marked "DRAFT" is written to match
 * the case-study narrative and should be replaced with the exact wording
 * from the live site. Images/videos are the real client-supplied assets.
 */

export const meta = {
  title: "Odoo Manufacturing - Safety Case Study",
  description:
    "A safety management feature built into Odoo Manufacturing. UX case study.",
};

export const hero = {
  projectMeta: [
    { label: "Platform", value: "Desktop Web Application" },
    { label: "Type", value: "Feature Extension - Odoo ERP" },
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

export type ProblemShot = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
  // Cyan highlight box, as percentages of the image (left/top/width/height).
  highlight?: { left: number; top: number; width: number; height: number };
};

export const problem = {
  heading: "Problem",
  // (verbatim, from the live site)
  caption:
    "Lack of documentation meant safety patterns went unnoticed. Only manufacturing data was visible, with no way to log incidents.",
  shots: [
    {
      src: "/images/manufacturing-overview.png",
      alt: "The Manufacturing work centers overview with the Reporting menu open",
      width: 2482,
      height: 1308,
      // (verbatim caption)
      caption:
        "Reporting was limited to equipment. Injuries and serious incidents had no way to be recorded.",
      highlight: { left: 29, top: 1, width: 18, height: 12 },
    },
    {
      src: "/images/problem-manufacturing-order.png",
      alt: "A Manufacturing Order detail with the Log note chatter panel highlighted",
      width: 2482,
      height: 1347,
      // (verbatim caption)
      caption:
        "Logs could be added per work order, but were too buried to reveal any clear pattern.",
      highlight: { left: 63, top: 12, width: 36, height: 17 },
    },
  ] satisfies ProblemShot[],
};

export const solution = {
  heading: "Solution",
  // (verbatim, from the reference screenshot)
  body: "We added a safety layer to Odoo's Overview, embedding safety data to help track patterns and reduce future incidents.",
  image: {
    src: "/images/solution.png",
    alt: "The reporting menu with a new Safety Statistics entry added",
    width: 2527,
    height: 1321,
    // Cyan stroke over the new "Safety Statistics" menu item.
    highlight: { left: 29.5, top: 9.4, width: 13.6, height: 5 },
  },
};

export const persona = {
  heading: "Who is the user?",
  // (verbatim, from the reference screenshot)
  subtitle:
    "An Operations Manager who recently took on EHS responsibilities on top of their existing role.",
  quote:
    "I spend more time reacting to problems than preventing them. By the time I see the data, someone's already hurt.",
  image: {
    src: "/images/persona-worker.png",
    alt: "An operations manager reviewing work on a laptop in the warehouse",
    width: 506,
    height: 429,
  },
  complexity: {
    title: "What makes their job complex",
    // (verbatim)
    items: [
      "Manages many work centers with 50–150 employees",
      "Previously relied on Excel and paper logs",
      "Safety compliance and incident reporting are new responsibilities, not ones they were trained for",
      "Overloaded with parallel duties: shift management, work orders, scheduling, MRP planning",
    ],
  },
  success: {
    title: "What success looks like for him",
    // (verbatim)
    body: "All tasks are completed on time, with no delays, safety issues, or unnecessary injuries.",
  },
};

export type FeatureSectionData = {
  id: string;
  heading: string;
  // The demo videos already contain their own laptop mockup and captions,
  // so the section only positions the video to one side.
  videoSide: "left" | "right";
  caption: string;
  video: { src: string; width: number; height: number };
};

export const featureSections: FeatureSectionData[] = [
  {
    id: "incident-reporting",
    heading: "Incident Reporting",
    videoSide: "left",
    caption: "One click logs the incident and instantly notifies EHS staff.",
    video: { src: "/videos/1.mp4", width: 16, height: 10 },
  },
  {
    id: "incident-tracking",
    heading: "Incident Tracking",
    videoSide: "right",
    caption: "Track every incident, from report to resolution, in one place.",
    video: { src: "/videos/2.mp4", width: 16, height: 10 },
  },
  {
    id: "safety-analytics",
    heading: "Safety Analytics",
    videoSide: "left",
    caption: "Visualize incident trends to catch patterns before they repeat.",
    video: { src: "/videos/3.mp4", width: 16, height: 10 },
  },
];

export const designDecisions = {
  heading: "Design Decisions",
};

export type BadgeTone = "danger" | "warning" | "success" | "neutral";
export type BadgePill = { text: string; tone: BadgeTone };

export const badgeIterations = {
  heading: "Incident Badge Design Iterations",
  intro:
    "The badge sits on every work center and is the element workers see most often. Each iteration made its state easier to read at a glance.",
  decisions: [
    {
      title: "Color coding",
      body: "The new form uses two states, keeping urgency clear.",
      kind: "colors",
    },
    {
      title: "Cognitive load",
      body: "The verbose label forced reading. The final badge leads with the count and a state color; the wording moves into the card.",
      kind: "cognitive",
    },
    {
      title: "Zero state",
      body: "The badge was grey and had 0 Incidents, instead we’ve decided to make it hidden and appear on hover only, in case a report has to be made.",
      kind: "zero",
    },
  ] as const,
  // Hero comparison: the "N Open" severity pills → the count badges.
  before: [
    { text: "1 Open", tone: "danger" },
    { text: "2 Open", tone: "warning" },
    { text: "0 Open", tone: "success" },
  ] satisfies BadgePill[],
  after: [
    { text: "### Incidents", tone: "danger" },
    { text: "### Incidents", tone: "neutral" },
  ] satisfies BadgePill[],
  noIncidents: {
    heading: "No incidents state",
    // (verbatim)
    oldText:
      'The old form displayed a grey "0 Incident" badge to inform users of the absence of incidents, and clicking it offered only the option to report one.',
    // (verbatim)
    newText:
      "The new form appears only on hover, so nothing distracts the user when there are no incidents, and clicking the triangle opens the report incident form with the workstation automatically filled in.",
  },
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
  before: {
    src: "/images/report-form-before.png",
    alt: "The original safety incident report form",
    width: 572,
    height: 498,
  },
  validation: {
    src: "/images/report-form-validation.png",
    alt: "The safety incident report form showing inline validation feedback",
    width: 3022,
    height: 1714,
  },
  annotations: [
    {
      title: "Error feedback",
      // DRAFT
      body: "specific inline error messages directly below each field, telling the user precisely what's needed.",
    },
    {
      title: "Time of incident",
      // DRAFT
      body: "a dedicated time dropdown, ensuring every report captures a complete picture of when the incident occurred.",
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
    "Once submitted, a report is read far more often than it is written - by managers, safety officers and auditors. The redesign reorganizes it around the reader.",
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
  body: "The original view led with the reporter's name and mirrored the form's input order. The redesign leads with what happened and how severe it was, groups the incident detail together, and moves the reporter into supporting metadata - keeping the focus on the incident, not the person.",
};

export const futureImprovements = {
  heading: "Future Improvements",
  // (verbatim)
  caption:
    "For future improvements we’d like to connect the report from Manufacturing to the Odoo HR Module to be able to view the incident investigation and how it’s resolved.",
  // Video to be uploaded later; shows a labeled placeholder until then.
  video: { src: "/videos/future-improvements.mp4", width: 16, height: 9 },
};
