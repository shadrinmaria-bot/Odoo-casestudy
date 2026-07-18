import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { futureImprovements } from "@/lib/content";

export default function FutureImprovements() {
  return (
    <Section id="future-improvements" className="bg-[#101014] pb-24 pt-0 md:pb-28">
      <Reveal className="text-center">
        <h2 className="font-display text-2xl font-semibold tracking-tight md:text-4xl">
          {futureImprovements.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
          {futureImprovements.caption}
        </p>
      </Reveal>
    </Section>
  );
}
