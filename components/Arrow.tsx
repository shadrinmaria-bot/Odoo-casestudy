/**
 * A thin, elegant cyan arrow: a long slender stem ending in an open V head,
 * round caps. Drawn with a crisp non-scaling 2px stroke so it stays fine and
 * consistent at every size. One shape, four directions (the same arrow
 * rotated); callers pass a single `size` (extent along the pointing axis).
 */
const paths = {
  down: { vw: 24, vh: 38, stem: "M12 3V34", head: "M5 26L12 34L19 26" },
  up: { vw: 24, vh: 38, stem: "M12 35V4", head: "M5 12L12 4L19 12" },
  right: { vw: 38, vh: 24, stem: "M3 12H34", head: "M26 5L34 12L26 19" },
  left: { vw: 38, vh: 24, stem: "M35 12H4", head: "M12 5L4 12L12 19" },
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
  const long = size ?? (vertical ? 56 : 62);
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
      <path
        d={p.stem}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d={p.head}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
