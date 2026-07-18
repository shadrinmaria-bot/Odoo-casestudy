import Arrow from "@/components/Arrow";
import Asset from "@/components/Asset";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { problem } from "@/lib/content";

export default function Problem() {
  return (
    <Section id="problem">
      <Reveal className="text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight md:text-6xl">
          {problem.heading}
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-xl font-medium leading-snug text-white/90 md:text-3xl">
          {problem.caption}
        </p>
      </Reveal>

      {problem.images.map((img, i) => (
        <div key={img.src}>
          <Reveal delay={0.1} className="mt-14 flex justify-center">
            <Arrow direction="down" />
          </Reveal>
          <Reveal delay={0.2} className="mx-auto mt-8 max-w-4xl">
            <Asset
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              className="border border-line shadow-2xl ring-1 ring-accent/15"
            />
            {img.caption ? (
              <p className="mx-auto mt-5 max-w-2xl text-center text-sm text-muted md:text-base">
                {img.caption}
              </p>
            ) : null}
          </Reveal>
        </div>
      ))}
    </Section>
  );
}
