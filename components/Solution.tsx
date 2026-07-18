import Asset from "@/components/Asset";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { solution } from "@/lib/content";

export default function Solution() {
  return (
    <Section id="solution" alt>
      <Reveal className="text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {solution.heading}
        </p>
        <p className="mx-auto max-w-3xl font-display text-2xl font-semibold leading-snug tracking-tight md:text-4xl">
          {solution.body}
        </p>
      </Reveal>
      <Reveal delay={0.15} className="mx-auto mt-12 max-w-xl">
        <Asset
          {...solution.image}
          className="border border-line shadow-2xl ring-1 ring-accent/20"
        />
      </Reveal>
    </Section>
  );
}
