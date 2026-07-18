import BeforeAfter from "@/components/BeforeAfter";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import type { Comparison } from "@/lib/content";

export default function DesignDecisions({
  id,
  kicker,
  heading,
  intro,
  comparisons,
  alt = false,
  futureNote,
}: {
  id: string;
  kicker: string;
  heading: string;
  intro: string;
  comparisons: Comparison[];
  alt?: boolean;
  futureNote?: { title: string; body: string };
}) {
  return (
    <Section id={id} alt={alt}>
      <SectionHeading kicker={kicker} title={heading} intro={intro} />
      <div className="mt-14 space-y-16">
        {comparisons.map((comparison) => (
          <BeforeAfter key={comparison.title} comparison={comparison} />
        ))}
      </div>
      {futureNote ? (
        <Reveal className="mt-16">
          <aside className="rounded-card border border-dashed border-accent/40 bg-accent-soft/60 p-8">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {futureNote.title}
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
              {futureNote.body}
            </p>
          </aside>
        </Reveal>
      ) : null}
    </Section>
  );
}
