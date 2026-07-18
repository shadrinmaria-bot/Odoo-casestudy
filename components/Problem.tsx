import AnnotatedShot from "@/components/AnnotatedShot";
import Arrow from "@/components/Arrow";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { problem } from "@/lib/content";

export default function Problem() {
  return (
    <Section id="problem" className="bg-panel py-24 md:py-32">
      <Reveal>
        <div className="mx-auto max-w-[768px] text-left">
          <h2 className="text-center font-display text-4xl font-semibold leading-none tracking-[-1.5px] md:text-[60px] md:leading-[60px]">
            {problem.heading}
          </h2>
          <p className="mt-6 text-xl font-normal leading-8 text-white/90 md:text-[30px] md:leading-9">
            {problem.caption}
          </p>
        </div>
      </Reveal>

      {problem.shots.map((shot) => (
        <div key={shot.src}>
          <Reveal delay={0.1} className="mt-14 flex justify-center md:mt-20">
            <Arrow direction="down" width={18} height={56} />
          </Reveal>
          <Reveal delay={0.2} className="mx-auto mt-8 max-w-5xl">
            <AnnotatedShot
              src={shot.src}
              alt={shot.alt}
              width={shot.width}
              height={shot.height}
              highlight={shot.highlight}
            />
            <p className="mx-auto mt-6 max-w-xl text-left text-sm text-muted md:text-base">
              {shot.caption}
            </p>
          </Reveal>
        </div>
      ))}
    </Section>
  );
}
