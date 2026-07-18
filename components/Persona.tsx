import Asset from "@/components/Asset";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { persona } from "@/lib/content";

export default function Persona() {
  return (
    <Section id="persona" className="bg-panel py-24 md:py-28">
      <Reveal>
        <h2 className="font-display text-4xl font-bold leading-none tracking-[-1.5px] md:text-[60px] md:leading-[60px]">
          {persona.heading}
        </h2>
        <p className="mt-4 max-w-[472px] text-base leading-6 text-white/90">
          {persona.subtitle}
        </p>
      </Reveal>

      <div className="mt-10 grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
        {/* Left: portrait + quote */}
        <Reveal direction="left">
          <div className="max-w-md">
            <Asset {...persona.image} className="border border-line shadow-lg" />
            <blockquote className="mt-6 max-w-[384px] text-[20px] italic leading-[22px] text-muted">
              &ldquo;{persona.quote}&rdquo;
            </blockquote>
          </div>
        </Reveal>

        {/* Right: complexity then success */}
        <Reveal direction="right" delay={0.1}>
          <div className="space-y-12">
            <div>
              <h3 className="font-display text-2xl font-semibold leading-9 tracking-[-0.75px] md:text-[32px]">
                {persona.complexity.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {persona.complexity.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-base leading-6 text-white/90"
                  >
                    <span
                      aria-hidden
                      className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-2xl font-semibold leading-9 tracking-[-0.75px] md:text-[32px]">
                {persona.success.title}
              </h3>
              <p className="mt-4 max-w-[488px] text-base leading-6 text-white/90 md:text-[24px] md:leading-8">
                {persona.success.body}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
