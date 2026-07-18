import Laptop from "@/components/Laptop";
import Reveal from "@/components/Reveal";
import VideoAsset from "@/components/VideoAsset";
import type { FeatureSectionData } from "@/lib/content";

/** A full-width feature section on the deep-blue panel background: a clean
 *  MacBook mockup with the demo video, and a caption floating to one side. */
export default function FeatureSection({ data }: { data: FeatureSectionData }) {
  const captionLeft = data.captionSide === "left";

  return (
    <section id={data.id} className="bg-panel px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-content">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
            {data.heading}
          </h2>
          <p className="mt-8 text-lg text-white/90 md:text-xl">{data.label}</p>
        </Reveal>

        <div className="relative mt-10">
          <Reveal>
            <Laptop>
              <VideoAsset
                src={data.video.src}
                width={data.video.width}
                height={data.video.height}
                label={`${data.heading} demo`}
                className="bg-panel"
              />
            </Laptop>
          </Reveal>

          <Reveal
            delay={0.15}
            className={`mx-auto mt-10 max-w-sm text-center lg:absolute lg:top-[52%] lg:mt-0 lg:max-w-[16rem] lg:text-left ${
              captionLeft ? "lg:left-0" : "lg:right-0"
            }`}
          >
            <p className="text-lg leading-relaxed text-muted md:text-xl">
              {data.caption}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
