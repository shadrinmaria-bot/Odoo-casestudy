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
    <Section id="design-badge">
      <Reveal>
        <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
          {badgeIterations.heading}
        </h2>
      </Reveal>

      {/* Hero: severity pills → count badges */}
      <Reveal className="mt-16">
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
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
      <Reveal className="mt-24">
        <div className="grid gap-x-16 gap-y-10 md:grid-cols-2">
          <div>
            <h3 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
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
