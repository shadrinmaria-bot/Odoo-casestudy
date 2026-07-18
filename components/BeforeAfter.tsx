import Asset from "@/components/Asset";
import Reveal from "@/components/Reveal";
import type { Comparison } from "@/lib/content";

function Pane({
  label,
  tone,
  image,
}: {
  label: string;
  tone: "before" | "after";
  image: Comparison["before"];
}) {
  return (
    <div
      className={`rounded-card border p-4 transition-colors duration-300 ${
        tone === "before"
          ? "border-line bg-surface-alt"
          : "border-accent/30 bg-accent-soft"
      }`}
    >
      <span
        className={`mb-3 inline-block rounded-badge px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] ${
          tone === "before"
            ? "bg-surface text-faint"
            : "bg-accent text-accent-on"
        }`}
      >
        {label}
      </span>
      <Asset {...image} className="border border-line bg-surface" />
    </div>
  );
}

/** Two-column old-vs-new layout used by all Design Decisions sections. */
export default function BeforeAfter({ comparison }: { comparison: Comparison }) {
  return (
    <Reveal>
      <div className="border-t border-line pt-10">
        <h3 className="font-display text-xl font-bold tracking-tight md:text-2xl">
          {comparison.title}
        </h3>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
          {comparison.body}
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Pane label="Before" tone="before" image={comparison.before} />
          <Pane label="After" tone="after" image={comparison.after} />
        </div>
      </div>
    </Reveal>
  );
}
