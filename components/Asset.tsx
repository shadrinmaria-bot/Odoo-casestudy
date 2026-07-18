"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * Renders a real image from /public when the file exists; until the
 * asset is supplied, it falls back to a clearly-labeled gray
 * placeholder showing the expected filename — nothing is invented.
 */
export default function Asset({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}) {
  const [missing, setMissing] = useState(false);

  if (missing) {
    return (
      <div
        role="img"
        aria-label={alt}
        style={{ aspectRatio: `${width} / ${height}` }}
        className={`flex w-full flex-col items-center justify-center gap-2 rounded-card border border-dashed border-line bg-surface-alt p-6 text-center ${className}`}
      >
        <span className="font-mono text-xs text-faint">missing asset</span>
        <span className="font-mono text-sm font-medium text-muted">{src}</span>
        <span className="max-w-xs text-xs text-faint">{alt}</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      onError={() => setMissing(true)}
      className={`w-full rounded-card ${className}`}
    />
  );
}
