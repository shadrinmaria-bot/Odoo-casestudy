import Image from "next/image";
import Reveal from "@/components/Reveal";
import { background } from "@/lib/content";

export default function Background() {
  return (
    <section
      id="background"
      className="relative overflow-hidden bg-panel px-6 py-24 md:px-10 md:py-40"
    >
      {/* Full-section app-launcher image at 15% opacity. object-contain keeps
          the whole image visible — nothing is cropped. */}
      <Image
        src={background.image.src}
        alt={background.image.alt}
        fill
        sizes="100vw"
        className="object-contain opacity-[0.15]"
      />
      <div className="relative mx-auto max-w-[768px] text-left">
        <Reveal>
          <h2 className="text-center font-display text-4xl font-bold leading-none tracking-[-1.5px] md:text-[60px] md:leading-[60px]">
            {background.heading}
          </h2>
          <p className="mx-auto mt-5 max-w-[672px] text-lg font-normal leading-7 text-white/90 md:text-2xl md:leading-8">
            {background.body}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
