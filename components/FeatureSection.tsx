import BrowserFrame from "@/components/BrowserFrame";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import VideoAsset from "@/components/VideoAsset";
import type { FeatureSectionData } from "@/lib/content";

/** A full-width feature section: a framed demo video with a caption that
 *  sits to one side (alternating per section). */
export default function FeatureSection({
  data,
  alt = false,
}: {
  data: FeatureSectionData;
  alt?: boolean;
}) {
  const captionLeft = data.captionSide === "left";

  const media = (
    <Reveal
      direction={captionLeft ? "right" : "left"}
      className="md:col-span-3"
    >
      <BrowserFrame>
        <VideoAsset
          src={data.video.src}
          width={data.video.width}
          height={data.video.height}
          label={`${data.heading} demo`}
          className="rounded-none"
        />
      </BrowserFrame>
    </Reveal>
  );

  const caption = (
    <Reveal
      direction={captionLeft ? "left" : "right"}
      delay={0.1}
      className="flex flex-col justify-center md:col-span-2"
    >
      <span className="inline-flex w-fit items-center gap-2 rounded-badge border border-accent/30 bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
        {data.label}
      </span>
      <p className="mt-4 text-lg leading-relaxed text-muted md:text-xl">
        {data.caption}
      </p>
    </Reveal>
  );

  return (
    <Section id={data.id} alt={alt}>
      <Reveal className="text-center">
        <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
          {data.heading}
        </h2>
      </Reveal>
      <div className="mt-12 grid items-center gap-10 md:grid-cols-5 md:gap-14">
        {captionLeft ? (
          <>
            {caption}
            {media}
          </>
        ) : (
          <>
            {media}
            {caption}
          </>
        )}
      </div>
    </Section>
  );
}
