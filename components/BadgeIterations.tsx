import Arrow from "@/components/Arrow";
import {
  CountBadge,
  OpenPill,
  WarningTriangle,
  ZeroIncidentBadge,
} from "@/components/Badge";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { badgeIterations } from "@/lib/content";

export default function BadgeIterations() {
  const { before, after, noIncidents } = badgeIterations;

  return (
    <Section id="design-badge" className="bg-[#101014] py-24 md:py-28">
      <Reveal>
        <h2 className="font-display text-2xl font-semibold tracking-tight md:text-4xl">
          {badgeIterations.heading}
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
          {badgeIterations.intro}
        </p>
      </Reveal>

      {/* Hero: severity pills → count badges */}
      <Reveal className="mt-12 rounded-lg bg-[#0C0C10] px-6 py-10 md:px-12">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
          <div className="flex flex-col gap-3">
            {before.map((pill, i) => (
              <OpenPill key={i} pill={pill} />
            ))}
          </div>
          <Arrow direction="right" width={120} height={28} />
          <div className="flex flex-col gap-3">
            {after.map((pill, i) => (
              <CountBadge key={i} pill={pill} />
            ))}
          </div>
        </div>
      </Reveal>

      {/* No incidents state */}
      <Reveal className="mt-16">
        <div className="grid gap-x-16 gap-y-10 border-t border-white/5 pt-10 md:grid-cols-2">
          <div>
              <h3 className="font-display text-xl font-semibold tracking-tight md:text-2xl">
              {noIncidents.heading}
            </h3>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/90 md:text-lg">
              {noIncidents.oldText}
            </p>
            <div className="my-8">
              <Arrow direction="down" width={24} height={72} />
            </div>
            <p className="max-w-md text-base leading-relaxed text-white/90 md:text-lg">
              {noIncidents.newText}
            </p>
          </div>
          <div className="flex flex-col items-center justify-between gap-16 py-2 md:items-end md:pr-8">
            <ZeroIncidentBadge />
            <WarningTriangle />
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
