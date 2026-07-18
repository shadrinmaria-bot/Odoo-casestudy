import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { problem } from "@/lib/content";

export default function Problem() {
  return (
    <Section id="problem">
      <Reveal>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-state-danger">
          {problem.heading}
        </p>
        <p className="max-w-3xl font-display text-2xl font-semibold leading-snug tracking-tight md:text-4xl">
          {problem.caption}
        </p>
      </Reveal>
    </Section>
  );
}
