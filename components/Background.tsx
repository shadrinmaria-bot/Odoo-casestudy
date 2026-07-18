import Image from "next/image";
import Reveal from "@/components/Reveal";
import { background } from "@/lib/content";

export default function Background() {
  return (
    <section
      id="background"
      className="relative overflow-hidden bg-black px-6 py-28 md:px-10 md:py-40"
    >
      {/* Full-bleed app-launcher image, dimmed to 15% behind the copy. */}
      <Image
        src={background.image.src}
        alt={background.image.alt}
        fill
        sizes="100vw"
        className="object-cover opacity-[0.15]"
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="font-display text-4xl font-semibold tracking-tight md:text-6xl">
            {background.heading}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/90 md:text-2xl">
            {background.body}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
