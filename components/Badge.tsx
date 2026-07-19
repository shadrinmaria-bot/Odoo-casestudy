import type { BadgePill, BadgeTone } from "@/lib/content";

// Exact colors from the reference badge design.
const fill: Record<BadgeTone, string> = {
  danger: "#FF5A5A",
  warning: "#E7A23C",
  success: "#37B96A",
  neutral: "#454B58",
};

/** Small filled up-triangle used inside the severity pills. */
function Triangle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 20" className={`h-3 w-3.5 ${className}`} fill="currentColor" aria-hidden>
      <path d="M12 2 L23 18 H1 Z" strokeLinejoin="round" />
    </svg>
  );
}

/** The "N Open" severity pill (before state): fully rounded, dark text. */
export function OpenPill({ pill }: { pill: BadgePill }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-badge px-4 py-1.5 text-base font-semibold text-[#141418]"
      style={{ backgroundColor: fill[pill.tone] }}
    >
      <Triangle className="text-[#141418]" />
      {pill.text}
    </span>
  );
}

/** The count badge (after state): rounded rectangle, white text. */
export function CountBadge({ pill }: { pill: BadgePill }) {
  return (
    <span
      className="inline-flex items-center rounded-lg px-4 py-2 text-base font-bold text-white"
      style={{ backgroundColor: fill[pill.tone] }}
    >
      {pill.text}
    </span>
  );
}

/** The old grey "0 Incident" badge with an up-chevron. */
export function ZeroIncidentBadge() {
  return (
    <span
      className="inline-flex items-center gap-3 rounded-xl px-6 py-4 text-2xl font-semibold text-white"
      style={{ backgroundColor: "#3A3F4B" }}
    >
      0 Incident
      <svg viewBox="0 0 24 16" className="h-3.5 w-4" fill="currentColor" aria-hidden>
        <path d="M12 3 L22 14 H2 Z" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

/** The rounded grey warning triangle - the new hover-only state. */
export function WarningTriangle() {
  return (
    <svg viewBox="0 0 120 108" className="h-24 w-24" aria-hidden>
      <path
        d="M60 14 L106 94 H14 Z"
        fill="#70747C"
        stroke="#70747C"
        strokeWidth="12"
        strokeLinejoin="round"
      />
      <rect x="54" y="42" width="12" height="30" rx="6" fill="#11141B" />
      <rect x="54" y="78" width="12" height="12" rx="6" fill="#11141B" />
    </svg>
  );
}
