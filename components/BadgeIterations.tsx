import Arrow from "@/components/Arrow";
import Badge from "@/components/Badge";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { badgeIterations } from "@/lib/content";
import type { BadgePill } from "@/lib/content";

function PillGroup({ pills }: { pills: BadgePill[] }) {
  return (
    <div className="flex flex-col items-center gap-2">
      {pills.map((pill, i) => (
        <Badge key={i} pill={pill} />
      ))}
    </div>
  );
}

export default function BadgeIterations() {
  return (
    <Section id="design-badge" alt>
      <SectionHeading
        title={badgeIterations.heading}
        intro={badgeIterations.intro}
      />

      {/* Hero before → after */}
      <Reveal className="mt-14">
        <div className="flex flex-wrap items-center justify-center gap-8 rounded-card border border-line bg-surface p-8 md:gap-14 md:p-12">
          <PillGroup pills={badgeIterations.hero.before} />
          <Arrow direction="right" />
          <PillGroup pills={badgeIterations.hero.after} />
        </div>
      </Reveal>

      {/* Per-decision rows */}
      <div className="mt-14 space-y-12">
        {badgeIterations.iterations.map((it) => (
          <Reveal key={it.title}>
            <div className="grid items-center gap-8 border-t border-line pt-12 md:grid-cols-2 md:gap-14">
              <div>
                <h3 className="font-display text-xl font-bold tracking-tight md:text-2xl">
                  {it.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted md:text-base">
                  {it.body}
                </p>
              </div>
              <div className="flex items-center justify-center gap-6 md:justify-end md:gap-10">
                <PillGroup pills={it.before} />
                <Arrow direction="right" />
                <PillGroup pills={it.after} />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
