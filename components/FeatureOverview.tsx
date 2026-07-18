import Asset from "@/components/Asset";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { features } from "@/lib/content";

export default function FeatureOverview() {
  return (
    <Section id="features">
      <SectionHeading title={features.heading} />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {features.items.map((feature, i) => (
          <Reveal key={feature.title} delay={i * 0.12}>
            <div className="group h-full overflow-hidden rounded-card border border-line bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="overflow-hidden">
                <Asset
                  {...feature.image}
                  className="rounded-b-none transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold tracking-tight">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {feature.body}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
