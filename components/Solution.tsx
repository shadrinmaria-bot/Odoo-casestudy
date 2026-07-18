import Asset from "@/components/Asset";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { solution } from "@/lib/content";

export default function Solution() {
  return (
    <Section id="solution" className="bg-black py-24 md:py-28">
      <Reveal className="text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {solution.heading}
        </p>
        <p className="mx-auto max-w-3xl font-display text-xl font-semibold leading-snug tracking-tight md:text-3xl">
          {solution.body}
        </p>
      </Reveal>
      <Reveal delay={0.15} className="mx-auto mt-10 max-w-md">
        <Asset {...solution.image} />
      </Reveal>
    </Section>
  );
}
