"use client";

import Image from "next/image";
import { useState } from "react";

type Highlight = { left: number; top: number; width: number; height: number };

/**
 * A screenshot with an optional cyan highlight box drawn over a region
 * (percentages of the image), used to point out the problem. Falls back to
 * a labeled placeholder when the file is missing.
 */
export default function AnnotatedShot({
  src,
  alt,
  width,
  height,
  highlight,
  className = "",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  highlight?: Highlight;
  className?: string;
}) {
  const [missing, setMissing] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {missing ? (
        <div
          role="img"
          aria-label={alt}
          style={{ aspectRatio: `${width} / ${height}` }}
          className="flex w-full flex-col items-center justify-center gap-2 rounded-card border border-dashed border-line bg-surface-alt p-6 text-center"
        >
          <span className="font-mono text-xs text-faint">missing asset</span>
          <span className="font-mono text-sm font-medium text-muted">{src}</span>
          <span className="max-w-xs text-xs text-faint">{alt}</span>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          onError={() => setMissing(true)}
          className="w-full rounded-card"
        />
      )}

      {highlight && !missing ? (
        <span
          aria-hidden
          className="pointer-events-none absolute rounded-md border-2 border-accent"
          style={{
            left: `${highlight.left}%`,
            top: `${highlight.top}%`,
            width: `${highlight.width}%`,
            height: `${highlight.height}%`,
          }}
        />
      ) : null}
    </div>
  );
}
