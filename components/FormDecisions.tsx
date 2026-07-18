import Asset from "@/components/Asset";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { formDecisions } from "@/lib/content";

export default function FormDecisions() {
  return (
    <Section id="design-form">
      <SectionHeading title={formDecisions.heading} intro={formDecisions.intro} />
      <div className="mt-14 grid items-start gap-10 md:grid-cols-2 md:gap-14">
        <Reveal direction="left">
          <Asset
            {...formDecisions.image}
            className="border border-line bg-surface shadow-2xl"
          />
        </Reveal>
        <Reveal direction="right" delay={0.1} className="flex flex-col justify-center">
          <ul className="space-y-8">
            {formDecisions.annotations.map((a) => (
              <li key={a.title}>
                <h3 className="font-display text-lg font-bold tracking-tight md:text-xl">
                  <span className="mr-3 text-accent">—</span>
                  {a.title}
                </h3>
                <p className="mt-2 pl-8 text-sm leading-relaxed text-muted md:text-base">
                  {a.body}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
