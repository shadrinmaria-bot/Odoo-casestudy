/**
 * Mint arrow from the Figma spec (node 8:113): a straight stem ending in a
 * wide V-shaped head, round caps, drawn on a 40×60 canvas pointing down.
 * Other directions are the same shape rotated.
 */
const paths = {
  down: { w: 40, h: 60, stem: "M20 2V53", head: "M4 37L20 56L36 37" },
  up: { w: 40, h: 60, stem: "M20 58V7", head: "M4 23L20 4L36 23" },
  right: { w: 60, h: 40, stem: "M2 20H53", head: "M37 4L56 20L37 36" },
  left: { w: 60, h: 40, stem: "M58 20H7", head: "M23 4L4 20L23 36" },
} as const;

export default function Arrow({
  direction = "down",
  width,
  height,
  className = "",
}: {
  direction?: keyof typeof paths;
  width?: number;
  height?: number;
  className?: string;
}) {
  const p = paths[direction];
  return (
    <svg
      aria-hidden
      width={width ?? p.w}
      height={height ?? p.h}
      viewBox={`0 0 ${p.w} ${p.h}`}
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
