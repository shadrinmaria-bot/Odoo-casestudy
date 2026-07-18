/** Thin mint/cyan arrow used between "before" and "after" comparisons. */
export default function Arrow({
  direction = "right",
  width,
  height,
  className = "",
}: {
  direction?: "right" | "down";
  width?: number;
  height?: number;
  className?: string;
}) {
  if (direction === "down") {
    const w = width ?? 24;
    const h = height ?? 64;
    return (
      <svg
        aria-hidden
        width={w}
        height={h}
        viewBox="0 0 24 64"
        fill="none"
        className={`text-accent ${className}`}
      >
        <path d="M12 2v48" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path
          d="M4 44l8 18 8-18"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  const w = width ?? 96;
  const h = height ?? 24;
  return (
    <svg
      aria-hidden
      width={w}
      height={h}
      viewBox="0 0 96 24"
      fill="none"
      className={`text-accent ${className}`}
    >
      <path d="M2 12h86" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path
        d="M76 4l14 8-14 8"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
