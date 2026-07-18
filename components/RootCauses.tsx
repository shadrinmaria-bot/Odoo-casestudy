import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { rootCauses } from "@/lib/content";

export default function RootCauses() {
  return (
    <Section id="root-causes">
      <SectionHeading title={rootCauses.heading} />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {rootCauses.items.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.12}>
            <div className="h-full rounded-card border border-line bg-surface p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <span className="font-display text-sm font-bold text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-xl font-bold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
