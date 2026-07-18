import Asset from "@/components/Asset";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { solution } from "@/lib/content";

export default function Solution() {
  return (
    <Section id="solution" className="bg-black py-24 md:py-28">
      <Reveal>
        <div className="mx-auto max-w-3xl text-left">
          <p className="mb-6 text-center text-lg font-bold uppercase leading-4 tracking-[2.4px] text-accent md:text-2xl">
            {solution.heading}
          </p>
          <p className="font-display text-2xl font-semibold leading-9 tracking-[-0.9px] md:text-[30px] md:leading-10">
            {solution.body}
          </p>
        </div>
      </Reveal>
      <Reveal delay={0.15} className="mx-auto mt-10 max-w-md">
        <Asset {...solution.image} />
      </Reveal>
    </Section>
  );
}
