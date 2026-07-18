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
      <h2 className="font-display text-3xl font-bold leading-[48px] tracking-[-1.2px] md:text-[48px]">
        {title}
      </h2>
      {intro ? (
        <p className="mt-4 max-w-[672px] text-base leading-6 text-muted">
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}
