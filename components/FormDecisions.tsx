import Asset from "@/components/Asset";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { formDecisions } from "@/lib/content";

function AfterFormCard() {
  return (
    <div className="relative aspect-[1200/576] w-full overflow-hidden rounded-card">
      <svg
        aria-hidden
        viewBox="0 0 1200 576"
        className="absolute inset-0 size-full"
        preserveAspectRatio="none"
      >
        <rect
          x="0.5"
          y="0.5"
          width="1199"
          height="575"
          rx="16"
          fill="#2FFFD5"
          fillOpacity="0.12"
          stroke="#2FFFD5"
          strokeOpacity="0.3"
        />
        <rect x="17" y="18" width="68" height="24" rx="12" fill="#2FFFD5" />
        <text
          x="29"
          y="34"
          fill="#08130E"
          fontFamily="Hanken Grotesk, sans-serif"
          fontSize="12"
          fontWeight="600"
          letterSpacing="1.68"
        >
          AFTER
        </text>
      </svg>

      <div className="absolute left-[4.25%] top-[13.55%] w-[47.67%]">
        <Asset {...formDecisions.image} className="rounded-card" />
      </div>
      <div className="absolute left-[58.17%] top-[21.88%] aspect-[434/329] w-[36.17%] overflow-hidden rounded-card">
        <Asset {...formDecisions.validation} className="h-full rounded-card object-cover" />
      </div>
    </div>
  );
}

export default function FormDecisions() {
  return (
    <Section id="design-form" className="bg-panel px-6 py-28 md:px-10">
      <Reveal>
        <h2 className="font-display text-3xl font-bold leading-tight tracking-[-1.2px] md:text-5xl md:leading-[48px]">
          {formDecisions.heading}
        </h2>
        <p className="mt-4 max-w-[672px] text-base leading-7 text-muted md:text-lg">
          {formDecisions.intro}
        </p>
      </Reveal>

      <div className="mt-14 grid items-center gap-10 lg:grid-cols-[minmax(0,540px)_1fr] lg:gap-14">
        <Reveal direction="left">
          <Asset {...formDecisions.before} />
        </Reveal>
        <Reveal direction="right" delay={0.1}>
          <ul className="space-y-8">
            {formDecisions.annotations.map((annotation) => (
              <li key={annotation.title}>
                <h3 className="font-display text-2xl font-semibold leading-8 tracking-[-0.6px]">
                  <span className="mr-3 text-accent">—</span>
                  {annotation.title}
                </h3>
                <p className="mt-2 max-w-[540px] pl-8 text-base leading-6 text-muted">
                  {annotation.body}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Reveal className="mt-14">
        <AfterFormCard />
      </Reveal>
    </Section>
  );
}
