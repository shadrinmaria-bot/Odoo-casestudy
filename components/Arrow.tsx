/** Mint accent arrow used between "before" and "after" comparisons. */
export default function Arrow({
  direction = "right",
  className = "",
}: {
  direction?: "right" | "down";
  className?: string;
}) {
  if (direction === "down") {
    return (
      <svg
        aria-hidden
        width="40"
        height="60"
        viewBox="0 0 40 60"
        fill="none"
        className={`text-accent ${className}`}
      >
        <path d="M20 2v44" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
        <path
          d="M7 36l13 16 13-16"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg
      aria-hidden
      width="60"
      height="28"
      viewBox="0 0 60 28"
      fill="none"
      className={`text-accent ${className}`}
    >
      <path d="M2 14h50" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <path
        d="M40 3l14 11-14 11"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
