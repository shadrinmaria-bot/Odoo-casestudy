import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import VideoAsset from "@/components/VideoAsset";
import { futureImprovements } from "@/lib/content";

export default function FutureImprovements() {
  return (
    <Section id="future-improvements">
      <Reveal className="text-center">
        <p className="mx-auto max-w-3xl text-xl font-medium leading-snug text-white/90 md:text-2xl">
          {futureImprovements.caption}
        </p>
      </Reveal>
      <Reveal delay={0.15} className="mx-auto mt-12 max-w-5xl">
        <VideoAsset
          src={futureImprovements.video.src}
          width={futureImprovements.video.width}
          height={futureImprovements.video.height}
          label="Future improvements — Needs Attention badge demo"
          className="border border-line"
        />
      </Reveal>
    </Section>
  );
}
