import AnnotatedShot from "@/components/AnnotatedShot";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { solution } from "@/lib/content";

export default function Solution() {
  return (
    <Section id="solution" className="bg-panel py-24 md:py-28">
      <Reveal>
        <div className="mx-auto max-w-3xl text-left">
          <p className="mb-6 text-center font-display text-4xl font-bold leading-none tracking-[-1.5px] text-white md:text-[60px] md:leading-[60px]">
            {solution.heading}
          </p>
          <p className="font-display text-2xl font-normal leading-8 tracking-normal md:text-[24px] md:leading-8">
            {solution.body}
          </p>
        </div>
      </Reveal>
      <Reveal delay={0.15} className="mx-auto mt-10 max-w-5xl">
        <AnnotatedShot {...solution.image} />
      </Reveal>
    </Section>
  );
}
