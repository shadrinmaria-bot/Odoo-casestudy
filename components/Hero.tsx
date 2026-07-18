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

      {/* Meta row across the top */}
      <motion.div
        {...fade(0)}
        className="relative z-10 mx-auto grid w-full max-w-[1021px] grid-cols-2 gap-x-8 gap-y-5 px-6 pt-24 md:h-24 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_261px_122px] md:gap-x-10 md:gap-y-0 md:px-10 md:pt-8"
      >
        {hero.projectMeta.map((item) => (
          <div key={item.label}>
            <p className="font-display text-[20px] font-medium italic leading-5 text-white/90">
              {item.label}
            </p>
            <p className="mt-1 text-[20px] italic leading-[22px] text-white/70 md:whitespace-nowrap">
              {item.value}
            </p>
          </div>
        ))}
      </motion.div>

      {/* Headline block */}
      <div className="relative z-10 mx-auto flex w-full max-w-content flex-1 flex-col justify-center px-6 py-16 md:px-10">
        <motion.h1
          {...fade(0.1)}
          className="w-full max-w-[893px] text-left font-display text-5xl font-extrabold leading-[0.98] tracking-tight text-white sm:text-7xl md:text-[100px] md:leading-[96px] md:tracking-[-2.4px]"
        >
          {hero.headlineLine1}
          <br />
          {hero.headlineLine2}
        </motion.h1>

        <motion.div
          {...fade(0.25)}
          className="mt-6 w-full md:max-w-[864px] md:pl-[323px]"
        >
          <div className="md:w-[535px] md:max-w-xl">
            <p className="text-lg font-normal text-white/90 md:text-[24px] md:leading-8">
              {hero.kicker}
            </p>
            <div className="mt-6">
              <p className="font-display text-sm italic text-white/80 md:text-[20px] md:font-medium md:leading-5">
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
