import Asset from "@/components/Asset";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { background } from "@/lib/content";

export default function Background() {
  return (
    <Section id="background" alt>
      <SectionHeading title={background.heading} intro={background.body} />
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {background.images.map((image, i) => (
          <Reveal key={image.src} delay={i * 0.12}>
            <Asset {...image} className="border border-line shadow-sm" />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
