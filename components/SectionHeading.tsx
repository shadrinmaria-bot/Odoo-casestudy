import Reveal from "@/components/Reveal";

export default function SectionHeading({
  kicker,
  title,
  intro,
}: {
  kicker?: string;
  title: string;
  intro?: string;
}) {
  return (
    <Reveal>
      {kicker ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {kicker}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
        {title}
      </h2>
      {intro ? (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}
