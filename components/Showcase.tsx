import Asset from "@/components/Asset";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import type { DecisionPoint, ShowcaseImage } from "@/lib/content";

/**
 * A design-decisions section that pairs one or two real screenshots with
 * the reasoning behind the design. Media and reasoning alternate sides on
 * alternating sections so the page keeps a rhythm.
 */
export default function Showcase({
  id,
  kicker,
  heading,
  intro,
  images,
  points,
  alt = false,
  mediaFirst = true,
}: {
  id: string;
  kicker: string;
  heading: string;
  intro: string;
  images: ShowcaseImage[];
  points: DecisionPoint[];
  alt?: boolean;
  mediaFirst?: boolean;
}) {
  const media = (
    <Reveal direction={mediaFirst ? "left" : "right"} className="space-y-6">
      {images.map((img) => (
        <Asset
          key={img.src}
          {...img}
          className="border border-line bg-surface shadow-2xl"
        />
      ))}
    </Reveal>
  );

  const reasoning = (
    <Reveal
      direction={mediaFirst ? "right" : "left"}
      delay={0.1}
      className="flex flex-col justify-center"
    >
      <ul className="space-y-8">
        {points.map((point) => (
          <li key={point.title}>
            <h3 className="font-display text-lg font-bold tracking-tight md:text-xl">
              <span className="mr-3 text-accent">—</span>
              {point.title}
            </h3>
            <p className="mt-2 pl-8 text-sm leading-relaxed text-muted md:text-base">
              {point.body}
            </p>
          </li>
        ))}
      </ul>
    </Reveal>
  );

  return (
    <Section id={id} alt={alt}>
      <SectionHeading kicker={kicker} title={heading} intro={intro} />
      <div className="mt-14 grid items-start gap-10 md:grid-cols-2 md:gap-14">
        {mediaFirst ? (
          <>
            {media}
            {reasoning}
          </>
        ) : (
          <>
            {reasoning}
            {media}
          </>
        )}
      </div>
    </Section>
  );
}
