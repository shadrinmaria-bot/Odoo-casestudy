"use client";

import { useRef, useState } from "react";

/**
 * Autoplaying, muted, looping inline demo video. Lazy-loads metadata,
 * and falls back to a labeled placeholder if the file is missing so
 * nothing is ever invented.
 */
export default function VideoAsset({
  src,
  poster,
  label,
  width,
  height,
  className = "",
}: {
  src: string;
  poster?: string;
  label: string;
  width: number;
  height: number;
  className?: string;
}) {
  const [missing, setMissing] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);

  if (missing) {
    return (
      <div
        role="img"
        aria-label={label}
        style={{ aspectRatio: `${width} / ${height}` }}
        className={`flex w-full flex-col items-center justify-center gap-2 border border-dashed border-line bg-surface-alt p-6 text-center ${className}`}
      >
        <span className="font-mono text-xs text-faint">missing video</span>
        <span className="font-mono text-sm font-medium text-muted">{src}</span>
      </div>
    );
  }

  return (
    <video
      ref={ref}
      className={`w-full ${className}`}
      style={{ aspectRatio: `${width} / ${height}` }}
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={label}
      onError={() => setMissing(true)}
    />
  );
}
