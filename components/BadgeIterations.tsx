import Arrow from "@/components/Arrow";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { badgeIterations } from "@/lib/content";

function IncidentBadge({ children, tone }: { children: string | number; tone: "red" | "blue" | "grey" }) {
  const colors = {
    red: "bg-[#F9464C] text-black",
    blue: "bg-[#008FE3] text-black",
    grey: "bg-[#3A3F4B] text-white",
  };

  return (
    <span className={`inline-flex h-6 items-center gap-1 rounded px-3 text-[13px] font-semibold ${colors[tone]}`}>
      {children}
      <span aria-hidden className="font-awesome-solid text-[8px]">{`\uF0D8`}</span>
    </span>
  );
}

function OpenBadge({ children, tone }: { children: string | number; tone: "red" | "amber" | "green" }) {
  const colors = {
    red: "bg-[#FB5157]",
    amber: "bg-[#E79A21]",
    green: "bg-[#3CC962]",
  };

  return (
    <span className={`inline-flex h-[22px] min-w-[86px] items-center justify-center gap-2 rounded-full px-3 text-[13px] font-bold text-[#1B1D26] ${colors[tone]}`}>
      <span aria-hidden className="font-awesome-solid text-[10px]">{`\uF0D8`}</span>
      {children}
    </span>
  );
}

function WorkflowArrow() {
  // Same arrow shape/stroke as everywhere else, sized to the badge row.
  return <Arrow direction="right" width={36} height={24} className="shrink-0" />;
}

function OpenedBadge({ count, tone }: { count: 0 | 1 | 2; tone: "red" | "amber" | "grey" }) {
  const styles = {
    red: "bg-[#F9464C] text-black",
    amber: "border border-[#E79A21] text-white",
    grey: "bg-[#3C3E4B] text-white",
  };

  return (
    <span className={`inline-flex h-6 w-[157px] items-stretch overflow-hidden rounded-[4px] text-[13px] font-semibold ${styles[tone]}`}>
      <span className="flex flex-1 items-center justify-center">{count} Opened Incidents</span>
      {count > 0 ? (
        <span className={`flex w-[22px] items-center justify-center ${tone === "red" ? "bg-[#FF6267]" : "border-l border-[#E79A21] bg-[#E79A21]/20"}`}>
          <span aria-hidden className="font-awesome-solid text-[8px]">{`\uF0D8`}</span>
        </span>
      ) : null}
    </span>
  );
}

function BadgeWorkflowOverview() {
  const rows = [
    { count: 1 as const, openTone: "red" as const, openedTone: "red" as const, incidentTone: "red" as const },
    { count: 2 as const, openTone: "amber" as const, openedTone: "amber" as const, incidentTone: "blue" as const },
    { count: 0 as const, openTone: "green" as const, openedTone: "grey" as const, incidentTone: "grey" as const },
  ];

  return (
    <div className="flex justify-center overflow-x-auto py-6">
      <div className="flex min-w-[629px] flex-col gap-5" role="img" aria-label="Incident badge design progression">
        {rows.map((row) => (
          <div key={row.count} className="flex h-6 items-center gap-[14px]">
            <OpenBadge tone={row.openTone}>{`${row.count} Open`}</OpenBadge>
            <WorkflowArrow />
            <OpenedBadge count={row.count} tone={row.openedTone} />
            <WorkflowArrow />
            <IncidentBadge tone={row.incidentTone}>{`${row.count} Incident`}</IncidentBadge>
            {row.count === 0 ? (
              <>
                <WorkflowArrow />
                <span aria-hidden className="font-awesome-solid text-sm text-[#70747C]">{`\uF071`}</span>
                <span className="whitespace-nowrap text-[10px] text-muted">(on hover)</span>
              </>
            ) : null}
          </div>
        ))}
      </div>
    </div>
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
        <Arrow direction="right" width={60} height={40} />
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
          1 Opened Incidents&nbsp;<span aria-hidden className="font-awesome-solid text-[8px]">{`\uF0D8`}</span>
        </span>
        <Arrow direction="right" width={60} height={40} />
        <IncidentBadge tone="red">1 Incident</IncidentBadge>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-12">
      <IncidentBadge tone="grey">0 Incident</IncidentBadge>
      <Arrow direction="right" width={60} height={40} />
      <span className="rounded-full border border-line px-4 py-1 text-xs italic text-faint opacity-60">hidden</span>
    </div>
  );
}

export default function BadgeIterations() {
  return (
    <Section id="design-badge" className="bg-panel px-6 py-28 md:px-[50px]">
      <Reveal>
        <h2 className="font-display text-3xl font-bold leading-tight tracking-[-1.2px] md:text-5xl md:leading-[48px]">
          {badgeIterations.heading}
        </h2>
        <p className="mt-4 max-w-[672px] text-base leading-7 text-muted md:text-lg">
          {badgeIterations.intro}
        </p>
      </Reveal>

      <Reveal className="mx-auto mt-6 max-w-[1011px]">
        <BadgeWorkflowOverview />
      </Reveal>

      <div className="mt-10">
        {badgeIterations.decisions.map((decision) => (
          <Reveal key={decision.title} className="border-t border-line py-12">
            <div className="grid items-center gap-10 md:grid-cols-[1fr_1fr] md:gap-14">
              <div>
                <h3 className="font-display text-2xl font-semibold leading-8 tracking-[-0.6px]">
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
