import type { ReactNode } from "react";

/** Shared vertical rhythm + max-width for every page section. */
export default function Section({
  id,
  children,
  className = "",
  alt = false,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  alt?: boolean;
}) {
  return (
    <section
      id={id}
      className={`${alt ? "bg-surface-alt" : ""} px-6 py-20 md:px-10 md:py-28 ${className}`}
    >
      <div className="mx-auto max-w-content">{children}</div>
    </section>
  );
}
