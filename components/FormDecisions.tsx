import Asset from "@/components/Asset";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { formDecisions } from "@/lib/content";

export default function FormDecisions() {
  return (
    <Section id="design-form" className="bg-black px-6 py-28 md:px-10">
      <Reveal>
        <h2 className="font-display text-3xl font-bold leading-tight tracking-[-1.2px] md:text-5xl md:leading-[48px]">
          {formDecisions.heading}
        </h2>
        <p className="mt-4 max-w-[672px] text-base leading-7 text-muted md:text-lg">
          {formDecisions.intro}
        </p>
      </Reveal>

      <div className="mt-14 grid items-center gap-10 md:grid-cols-[572px_1fr] md:gap-14">
        <Reveal direction="left">
          <Asset {...formDecisions.before} />
        </Reveal>
        <Reveal direction="right" delay={0.1}>
          <ul className="space-y-8">
            {formDecisions.annotations.map((annotation) => (
              <li key={annotation.title}>
                <h3 className="font-display text-xl font-bold leading-7 tracking-[-0.5px]">
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
        <Asset {...formDecisions.after} />
      </Reveal>
    </Section>
  );
}
