import type { BadgePill } from "@/lib/content";

const toneMap = {
  danger: {
    solid: "bg-state-danger text-white",
    soft: "bg-state-danger-soft text-state-danger",
    outline: "border border-state-danger/50 text-state-danger",
  },
  warning: {
    solid: "bg-state-warning text-accent-on",
    soft: "bg-state-warning-soft text-state-warning",
    outline: "border border-state-warning/50 text-state-warning",
  },
  success: {
    solid: "bg-state-success text-accent-on",
    soft: "bg-state-success-soft text-state-success",
    outline: "border border-state-success/50 text-state-success",
  },
  neutral: {
    solid: "bg-[#3A3F4B] text-white/90",
    soft: "bg-surface-alt text-muted",
    outline: "border border-line text-faint",
  },
} as const;

/** A single Odoo-style incident badge, rendered in CSS so it stays crisp. */
export default function Badge({ pill }: { pill: BadgePill }) {
  const empty = pill.text.trim() === "";
  return (
    <span
      className={`inline-flex min-h-[1.75rem] items-center rounded-badge px-3 py-1 text-sm font-semibold ${toneMap[pill.tone][pill.variant]}`}
    >
      {empty ? (
        <span className="text-xs italic opacity-60">hidden</span>
      ) : (
        pill.text
      )}
    </span>
  );
}
