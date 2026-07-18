import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { solution } from "@/lib/content";

export default function Solution() {
  return (
    <Section id="solution" alt>
      <Reveal>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-state-success">
          {solution.heading}
        </p>
        <p className="max-w-3xl font-display text-2xl font-semibold leading-snug tracking-tight md:text-4xl">
          {solution.body}
        </p>
      </Reveal>
    </Section>
  );
}
