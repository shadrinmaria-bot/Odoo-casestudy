import Reveal from "@/components/Reveal";
import { background } from "@/lib/content";

export default function Background() {
  return (
    <section
      id="background"
      className="bg-black px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-3xl text-left">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
            {background.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/90 md:text-xl">
            {background.body}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
