import Asset from "@/components/Asset";
import Reveal from "@/components/Reveal";
import { hero } from "@/lib/content";

export default function Hero() {
  return (
    <section id="top" className="px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-24">
      <div className="mx-auto max-w-content">
        <Reveal>
          <dl className="grid grid-cols-2 gap-x-8 gap-y-4 border-y border-line py-6 sm:grid-cols-4">
            {hero.projectMeta.map((item) => (
              <div key={item.label}>
                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-faint">
                  {item.label}
                </dt>
                <dd className="mt-1 text-sm font-medium">{item.value}</dd>
              </div>
            ))}
          </dl>
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 py-4 text-sm">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-faint">
              {hero.team.label}
            </span>
            {hero.team.members.map((member) => (
              <span key={member} className="font-medium">
                {member}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-10 text-base font-medium text-accent md:text-lg">
            {hero.kicker}
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            {hero.headlineLine1}
            <br />
            <span className="text-muted">{hero.headlineLine2}</span>
          </h1>
          <p className="mt-8 inline-block border-l-4 border-accent pl-4 text-lg font-bold uppercase tracking-wide md:text-xl">
            {hero.statement}
          </p>
        </Reveal>

        <Reveal delay={0.2} className="mt-14">
          <Asset {...hero.image} priority className="shadow-xl" />
        </Reveal>
      </div>
    </section>
  );
}
