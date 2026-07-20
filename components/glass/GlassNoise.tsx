"use client";

import { motion } from "motion/react";

export default function GlassNoise() {
  return (
    <motion.div
      aria-hidden
      animate={{
        backgroundPosition: ["0px 0px", "120px 80px", "40px 180px", "0px 0px"],
      }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: "linear",
      }}
      className="
        pointer-events-none
        absolute
        inset-0

        opacity-[0.035]
        mix-blend-soft-light
      "
      style={{
        backgroundImage: `
          radial-gradient(circle, rgba(255,255,255,.8) .4px, transparent .5px),
          radial-gradient(circle, rgba(255,255,255,.35) .4px, transparent .5px)
        `,
        backgroundSize: "12px 12px, 16px 16px",
        backgroundPosition: "0 0, 8px 8px",
      }}
    />
  );
}
