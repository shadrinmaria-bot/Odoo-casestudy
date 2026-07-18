import Asset from "@/components/Asset";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { formDecisions } from "@/lib/content";

export default function FormDecisions() {
  return (
    <Section id="design-form" className="bg-black py-24 md:py-28">
      <SectionHeading title={formDecisions.heading} intro={formDecisions.intro} />
      <div className="mt-12 grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
        <Reveal direction="left">
          <Asset
            {...formDecisions.image}
            className="rounded-lg border border-line bg-surface p-3 shadow-2xl"
          />
        </Reveal>
        <Reveal direction="right" delay={0.1} className="flex flex-col justify-center">
          <ul className="space-y-10">
            {formDecisions.annotations.map((a) => (
              <li key={a.title}>
                <h3 className="font-display text-base font-bold tracking-tight md:text-lg">
                  <span className="mr-3 text-accent">—</span>
                  {a.title}
                </h3>
                <p className="mt-2 pl-8 text-sm leading-relaxed text-muted">
                  {a.body}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
      <Reveal className="mt-14 rounded-lg border border-accent/20 bg-accent-soft p-4 md:p-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-md bg-[#151922] p-3">
            <Asset {...formDecisions.image} />
          </div>
          <div className="rounded-md bg-[#151922] p-3">
            <Asset {...formDecisions.image} />
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
