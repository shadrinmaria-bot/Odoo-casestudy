import type { ReactNode } from "react";

/** A minimal window/laptop chrome wrapper for app screenshots and demos. */
export default function BrowserFrame({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-card border border-line bg-surface shadow-2xl">
      <div className="flex items-center gap-2 border-b border-line bg-surface-alt px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-state-danger/70" />
        <span className="h-3 w-3 rounded-full bg-state-warning/70" />
        <span className="h-3 w-3 rounded-full bg-state-success/70" />
      </div>
      {children}
    </div>
  );
}
