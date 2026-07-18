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

      <Reveal delay={0.15} className="mt-14 flex justify-center">
        <svg
          aria-hidden
          width="48"
          height="72"
          viewBox="0 0 48 72"
          fill="none"
          className="text-accent"
        >
          <path
            d="M24 2v54"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M8 44l16 20 16-20"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Reveal>

      <Reveal delay={0.25} className="mx-auto mt-8 max-w-2xl">
        <Asset
          {...problem.image}
          className="border border-line shadow-2xl ring-1 ring-accent/20"
        />
      </Reveal>
    </Section>
  );
}
