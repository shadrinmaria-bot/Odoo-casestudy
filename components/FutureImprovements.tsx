import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { futureImprovements } from "@/lib/content";

export default function FutureImprovements() {
  return (
    <Section id="future-improvements" className="bg-[#111114] pb-0 pt-14">
      <Reveal className="flex flex-col items-center">
        <div className="w-full max-w-[575px] text-left">
          <h2 className="text-center font-display text-3xl font-bold leading-[48px] tracking-[-1.2px] md:text-[48px]">
            {futureImprovements.heading}
          </h2>
          <p className="mt-4 max-w-[544px] text-base leading-6 text-muted">
            {futureImprovements.caption}
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
