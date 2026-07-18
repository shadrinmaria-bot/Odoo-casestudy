import AnnotatedShot from "@/components/AnnotatedShot";
import Arrow from "@/components/Arrow";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { problem } from "@/lib/content";

export default function Problem() {
  return (
    <Section id="problem" className="bg-[#101014] py-24 md:py-32">
      <Reveal className="text-center">
        <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
          {problem.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/90 md:text-xl">
          {problem.caption}
        </p>
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
            <p className="mx-auto mt-6 max-w-xl text-center text-sm text-muted md:text-base">
              {shot.caption}
            </p>
          </Reveal>
        </div>
      ))}
    </Section>
  );
}
