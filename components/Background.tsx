import Asset from "@/components/Asset";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { background } from "@/lib/content";

export default function Background() {
  return (
    <Section id="background" alt>
      <Reveal className="mx-auto max-w-3xl text-center">
        <Asset
          {...background.image}
          className="mx-auto mb-10 max-w-md opacity-90"
        />
        <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
          {background.heading}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          {background.body}
        </p>
      </Reveal>
    </Section>
  );
}
