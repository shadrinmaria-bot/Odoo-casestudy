import Asset from "@/components/Asset";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { reportView } from "@/lib/content";

function Pane({
  label,
  tone,
  image,
}: {
  label: string;
  tone: "before" | "after";
  image: typeof reportView.before;
}) {
  return (
    <div
      className={`rounded-card border p-4 ${
        tone === "before"
          ? "border-line bg-surface-alt"
          : "border-accent/30 bg-accent-soft"
      }`}
    >
      <span
        className={`mb-3 inline-block rounded-badge px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] ${
          tone === "before" ? "bg-surface text-faint" : "bg-accent text-accent-on"
        }`}
      >
        {label}
      </span>
      <Asset {...image} className="border border-line bg-surface" />
    </div>
  );
}

export default function ReportView() {
  return (
    <Section id="design-report-view" className="bg-[#101014] py-24 md:py-28">
      <SectionHeading title={reportView.heading} intro={reportView.intro} />
      <Reveal className="mt-10">
        <div className="grid gap-6 md:grid-cols-2">
          <Pane label="Before" tone="before" image={reportView.before} />
          <Pane label="After" tone="after" image={reportView.after} />
        </div>
        <p className="mx-auto mt-7 max-w-3xl text-left text-xs leading-relaxed text-muted md:text-sm">
          {reportView.body}
        </p>
      </Reveal>
    </Section>
  );
}
