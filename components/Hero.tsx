"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { hero } from "@/lib/content";

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const [missing, setMissing] = useState(false);

  const fade = (delay: number) =>
    reduceMotion
      ? { initial: { opacity: 0 }, animate: { opacity: 1 } }
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: [0.21, 0.65, 0.36, 1] },
        };

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] w-full flex-col overflow-hidden"
    >
      {/* Full-bleed background photo */}
      {missing ? (
        <div className="absolute inset-0 bg-gradient-to-br from-[#141418] to-[#0c0c0e]">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center">
            <span className="font-mono text-xs text-faint">missing asset</span>
            <span className="font-mono text-sm text-muted">{hero.image.src}</span>
          </div>
        </div>
      ) : (
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          onError={() => setMissing(true)}
        />
      )}
      {/* Darkening overlay so overlaid text stays legible */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/70"
      />

      {/* Meta row across the top. Fluid columns and type so the four items
          never collide at any viewport; the fixed Figma track widths apply
          only from xl, where they are known to fit. */}
      <motion.div
        {...fade(0)}
        className="relative z-10 mx-auto grid w-full max-w-[1280px] grid-cols-2 gap-x-6 gap-y-5 px-5 pt-16 sm:px-6 md:grid-cols-4 md:gap-x-8 md:px-10 md:pt-[52px] lg:gap-x-10 xl:grid-cols-[228px_287px_374px_167px]"
      >
        {hero.projectMeta.map((item) => (
          <div key={item.label} className="min-w-0">
            <p className="font-display text-sm font-medium italic leading-5 text-white/90 md:text-base xl:text-[20px]">
              {item.label}
            </p>
            <p className="mt-1 text-sm italic leading-snug text-white/70 md:text-base xl:text-[20px] xl:leading-[22px]">
              {item.value}
            </p>
          </div>
        ))}
      </motion.div>

      {/* Headline block - centered on screen, sitting over the dark upper
          part of the photo (per Figma). Type scales with the viewport
          (7.8vw ≈ 100px at 1280) so lines shrink instead of colliding. */}
      <div className="relative z-10 mx-auto flex w-full max-w-content -translate-y-[60px] flex-1 flex-col justify-center px-6 py-12 md:px-10 md:py-7">
        <motion.h1
          {...fade(0.1)}
          className="mx-auto w-full max-w-[893px] font-display text-5xl font-extrabold leading-[0.98] tracking-tight text-white sm:text-7xl md:text-[7.8vw] md:leading-[0.96] md:tracking-[-0.024em] xl:text-[100px] xl:leading-[96px] xl:tracking-[-2.4px]"
        >
          {hero.headlineLine1}
          <br />
          {hero.headlineLine2}
        </motion.h1>

        <motion.div
          {...fade(0.25)}
          className="mx-auto mt-6 w-full max-w-[864px] md:pl-[323px]"
        >
          <div className="max-w-[535px]">
            <p className="text-lg font-normal text-white/90 md:text-xl xl:whitespace-nowrap xl:text-[24px] xl:leading-8">
              {hero.kicker}
            </p>
            <div className="mt-6">
              <p className="font-display text-sm italic text-white/80 md:text-base md:font-medium xl:text-[20px] xl:leading-5">
                {hero.team.label}
              </p>
              {hero.team.members.map((member) => (
                <p
                  key={member}
                  className="text-sm italic leading-5 text-white/70 md:text-[16px]"
                >
                  {member}
                </p>
              ))}
            </div>
          </div>
        </motion.div>

        <div aria-hidden className="hidden md:block md:h-[68px] md:shrink-0" />
      </div>
    </section>
  );
}
