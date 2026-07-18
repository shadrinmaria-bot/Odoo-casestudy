import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import VideoAsset from "@/components/VideoAsset";
import type { FeatureSectionData } from "@/lib/content";

/** A feature section on the deep-blue panel background. The demo video
 *  already includes its own laptop mockup and captions, so the section
 *  just places the video on one side — no frame, no glow, no extra text. */
export default function FeatureSection({ data }: { data: FeatureSectionData }) {
  const left = data.videoSide === "left";

  return (
    <section id={data.id} className="bg-panel px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-content">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
            {data.heading}
          </h2>
        </Reveal>

        <Reveal
          direction={left ? "left" : "right"}
          className={`mt-12 flex ${left ? "justify-start" : "justify-end"}`}
        >
          <VideoAsset
            src={data.video.src}
            width={data.video.width}
            height={data.video.height}
            label={`${data.heading} demo`}
            className="w-full max-w-3xl bg-panel"
          />
        </Reveal>
      </div>
    </section>
  );
}
