import type { ReactNode } from "react";

/**
 * A clean MacBook-style mockup. The screen bezel is near-black so a
 * dark-UI screenshot/video blends into the section background, making the
 * laptop feel like part of the page (no browser chrome, no glossy border).
 */
export default function Laptop({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-3xl">
      {/* Screen */}
      <div className="relative rounded-[1.4rem] border border-[#20242c] bg-[#05070b] p-2.5 pt-5">
        {/* Camera notch */}
        <div className="absolute left-1/2 top-0 h-4 w-28 -translate-x-1/2 rounded-b-xl bg-[#05070b]">
          <span className="absolute left-1/2 top-1.5 h-1 w-1 -translate-x-1/2 rounded-full bg-[#1b2129]" />
        </div>
        <div className="overflow-hidden rounded-lg">{children}</div>
      </div>
      {/* Base / hinge */}
      <div className="relative left-1/2 h-3.5 w-[112%] max-w-[52rem] -translate-x-1/2 rounded-b-2xl bg-gradient-to-b from-[#3b414b] via-[#262a31] to-[#15181d]">
        <span className="absolute left-1/2 top-0 h-1.5 w-28 -translate-x-1/2 rounded-b-lg bg-[#0d0f13]" />
      </div>
    </div>
  );
}
