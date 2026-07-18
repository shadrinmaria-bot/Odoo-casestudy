import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { persona } from "@/lib/content";

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="h-full rounded-card border border-line bg-surface p-8 shadow-sm">
      <h3 className="font-display text-lg font-bold tracking-tight">{title}</h3>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
            <span aria-hidden className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Persona() {
  return (
    <Section id="persona" alt>
      <SectionHeading title={persona.heading} />
      <Reveal className="mt-12">
        <figure className="rounded-card border border-line bg-accent-soft p-8 md:p-12">
          <blockquote className="font-display text-xl font-semibold leading-snug tracking-tight text-accent-dark md:text-3xl">
            &ldquo;{persona.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            {persona.personaName}
          </figcaption>
        </figure>
      </Reveal>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <Reveal direction="left">
          <List {...persona.complexity} />
        </Reveal>
        <Reveal direction="right" delay={0.12}>
          <List {...persona.success} />
        </Reveal>
      </div>
    </Section>
  );
}
