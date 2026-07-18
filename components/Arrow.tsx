/**
 * The bold cyan arrow from the reference: a thick rounded stem ending in a
 * wide V head. Defined on a small viewBox so a strokeWidth of 3 reads as a
 * bold ~23%-of-width stroke, and scales up thick. One shape, four
 * directions (the same arrow rotated).
 */
const paths = {
  down: { vw: 13, vh: 16, stem: "M6.5 3V11.5", head: "M3.5 7.5L6.5 12.5L9.5 7.5" },
  up: { vw: 13, vh: 16, stem: "M6.5 13V4.5", head: "M3.5 8.5L6.5 3.5L9.5 8.5" },
  right: { vw: 16, vh: 13, stem: "M3 6.5H11.5", head: "M7.5 3.5L12.5 6.5L7.5 9.5" },
  left: { vw: 16, vh: 13, stem: "M13 6.5H4.5", head: "M8.5 3.5L3.5 6.5L8.5 9.5" },
} as const;

export default function Arrow({
  direction = "down",
  size,
  className = "",
}: {
  direction?: keyof typeof paths;
  /** Extent along the pointing axis in px (height for up/down, width for
   *  left/right). The cross dimension is derived to keep the shape true. */
  size?: number;
  className?: string;
}) {
  const p = paths[direction];
  const vertical = direction === "down" || direction === "up";
  const long = size ?? (vertical ? 54 : 60);
  const width = vertical ? (long * p.vw) / p.vh : long;
  const height = vertical ? long : (long * p.vh) / p.vw;

  return (
    <svg
      aria-hidden
      width={width}
      height={height}
      viewBox={`0 0 ${p.vw} ${p.vh}`}
      fill="none"
      className={`text-accent ${className}`}
    >
      <path d={p.stem} stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path
        d={p.head}
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
