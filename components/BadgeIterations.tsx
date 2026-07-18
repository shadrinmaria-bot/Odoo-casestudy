import Asset from "@/components/Asset";
import Arrow from "@/components/Arrow";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { badgeIterations } from "@/lib/content";

function IncidentBadge({ children, tone }: { children: string; tone: "red" | "blue" | "grey" }) {
  const colors = {
    red: "bg-[#F9464C] text-black",
    blue: "bg-[#008FE3] text-black",
    grey: "bg-[#3A3F4B] text-white",
  };

  return (
    <span className={`inline-flex h-6 items-center rounded px-3 text-[13px] font-semibold ${colors[tone]}`}>
      {children}⌃
    </span>
  );
}

function OpenBadge({ children, tone }: { children: string; tone: "red" | "amber" | "green" }) {
  const colors = {
    red: "bg-[#FB5157]",
    amber: "bg-[#E79A21]",
    green: "bg-[#3CC962]",
  };

  return (
    <span className={`inline-flex h-[22px] min-w-[86px] items-center justify-center rounded-full px-3 text-[13px] font-bold text-[#1B1D26] ${colors[tone]}`}>
      ▲&nbsp; {children}
    </span>
  );
}

function DecisionVisual({ kind }: { kind: "colors" | "cognitive" | "zero" }) {
  if (kind === "colors") {
    return (
      <div className="flex items-center justify-center gap-10">
        <div className="flex flex-col gap-2">
          <OpenBadge tone="green">0 Open</OpenBadge>
          <OpenBadge tone="amber">2 Open</OpenBadge>
          <OpenBadge tone="red">1 Open</OpenBadge>
        </div>
        <Arrow direction="right" width={60} height={28} />
        <div className="flex flex-col gap-2">
          <IncidentBadge tone="red">1 Incident</IncidentBadge>
          <IncidentBadge tone="blue">2 Incident</IncidentBadge>
        </div>
      </div>
    );
  }

  if (kind === "cognitive") {
    return (
      <div className="flex items-center justify-center gap-10">
        <span className="inline-flex h-6 items-center rounded bg-[#F9464C] px-3 text-[13px] font-semibold text-black">
          1 Opened Incidents&nbsp;⌃
        </span>
        <Arrow direction="right" width={60} height={28} />
        <IncidentBadge tone="red">1 Incident</IncidentBadge>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-12">
      <IncidentBadge tone="grey">0 Incident</IncidentBadge>
      <Arrow direction="right" width={60} height={28} />
      <span className="rounded-full border border-line px-4 py-1 text-xs italic text-faint opacity-60">hidden</span>
    </div>
  );
}

export default function BadgeIterations() {
  return (
    <Section id="design-badge" className="bg-[#111114] px-6 py-28 md:px-[50px]">
      <Reveal>
        <h2 className="font-display text-3xl font-bold leading-tight tracking-[-1.2px] md:text-5xl md:leading-[48px]">
          {badgeIterations.heading}
        </h2>
        <p className="mt-4 max-w-[672px] text-base leading-7 text-muted md:text-lg">
          {badgeIterations.intro}
        </p>
      </Reveal>

      <Reveal className="mx-auto mt-6 max-w-[1011px]">
        <Asset {...badgeIterations.overview} className="rounded-card" />
      </Reveal>

      <div className="mt-10">
        {badgeIterations.decisions.map((decision) => (
          <Reveal key={decision.title} className="border-t border-line py-12">
            <div className="grid items-center gap-10 md:grid-cols-[1fr_1fr] md:gap-14">
              <div>
                <h3 className="font-display text-2xl font-bold leading-8 tracking-[-0.6px]">
                  {decision.title}
                </h3>
                <p className="mt-3 max-w-md text-base leading-6 text-muted">{decision.body}</p>
              </div>
              <DecisionVisual kind={decision.kind} />
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
