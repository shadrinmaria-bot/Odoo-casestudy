import Reveal from "@/components/Reveal";
import VideoAsset from "@/components/VideoAsset";
import type { FeatureSectionData } from "@/lib/content";

/** A feature section on the deep-blue panel background. The demo video
 *  already includes its own laptop mockup and captions, so the section
 *  just places the video on one side — no frame, no glow, no extra text. */
export default function FeatureSection({ data }: { data: FeatureSectionData }) {
  const left = data.videoSide === "left";

  return (
    <section id={data.id} className="bg-panel px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal className="flex justify-center">
          <h2 className="text-left font-display text-2xl font-semibold tracking-tight md:text-4xl">
            {data.heading}
          </h2>
        </Reveal>

        <div className="mt-12 grid items-center gap-10 md:grid-cols-2 md:gap-20">
          <Reveal direction={left ? "left" : "right"} className={left ? "" : "md:order-2"}>
            <VideoAsset
              src={data.video.src}
              width={16}
              height={9}
              label={`${data.heading} demo`}
              className="w-full bg-panel object-contain"
            />
          </Reveal>
          <Reveal direction={left ? "right" : "left"} className={left ? "" : "md:order-1"}>
            <p className="max-w-sm text-base leading-relaxed text-white/90 md:text-lg">
              {data.caption}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
