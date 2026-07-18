import Reveal from "@/components/Reveal";
import VideoAsset from "@/components/VideoAsset";
import type { FeatureSectionData } from "@/lib/content";

/** A feature section on the deep-blue panel background. The demo video
 *  already includes its own laptop mockup and captions, so the section
 *  just places the video (given the dominant share of the row so the
 *  laptop reads large) with a caption alongside it. */
export default function FeatureSection({ data }: { data: FeatureSectionData }) {
  const left = data.videoSide === "left";

  const video = (
    <Reveal direction={left ? "left" : "right"}>
      <VideoAsset
        src={data.video.src}
        width={16}
        height={9}
        label={`${data.heading} demo`}
        className="w-full bg-panel object-contain"
      />
    </Reveal>
  );

  const caption = (
    <Reveal direction={left ? "right" : "left"} delay={0.1}>
      <p className="max-w-sm text-base leading-relaxed text-white/90 md:text-lg">
        {data.caption}
      </p>
    </Reveal>
  );

  return (
    <section id={data.id} className="bg-panel px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-content">
        <Reveal className="flex justify-center">
          <h2 className="text-left font-display text-2xl font-semibold tracking-tight md:text-4xl">
            {data.heading}
          </h2>
        </Reveal>

        <div
          className={`mt-12 grid items-center gap-8 md:gap-14 ${
            left
              ? "md:grid-cols-[minmax(0,1fr)_300px]"
              : "md:grid-cols-[300px_minmax(0,1fr)]"
          }`}
        >
          {left ? (
            <>
              {video}
              {caption}
            </>
          ) : (
            <>
              {caption}
              {video}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
