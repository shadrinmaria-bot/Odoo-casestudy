import Reveal from "@/components/Reveal";
import { statCallout } from "@/lib/content";

export default function StatCallout() {
  return (
    <section className="bg-accent px-6 py-24 text-white md:px-10 md:py-32">
      <div className="mx-auto max-w-content">
        <Reveal>
          <p className="font-display text-7xl font-bold tracking-tight sm:text-8xl md:text-9xl">
            {statCallout.stat}
          </p>
          <p className="mt-4 max-w-2xl text-xl font-medium leading-snug text-white/90 md:text-3xl">
            {statCallout.text}
          </p>
          <p className="mt-6 text-sm uppercase tracking-[0.18em] text-white/60">
            {statCallout.source}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
