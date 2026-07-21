"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface GlassActivePillProps {
  children: ReactNode;
  layoutId?: string;
}

export default function GlassActivePill({
  children,
  layoutId = "active-pill",
}: GlassActivePillProps) {
  return (
    <motion.div
      layoutId={layoutId}
      transition={{
        type: "spring",
        stiffness: 420,
        damping: 34,
      }}
      className="absolute inset-0 overflow-hidden rounded-full"
    >
      {/* Background */}
      <div
        className="
          absolute
          inset-0

          rounded-full

          border
          border-white/[0.04]

          bg-[linear-gradient(180deg,rgba(70,70,72,.95)_0%,rgba(58,58,60,.92)_100%)]

          backdrop-blur-xl
          backdrop-saturate-150

          shadow-[0_6px_16px_rgba(0,0,0,.30)]
        "
      />

      {/* Inner Highlight */}
      <div
        className="absolute inset-[1px] rounded-full"
        style={{
          boxShadow: "inset 0 1px 0 rgba(255,255,255,.14)",
        }}
      />

      {/* Top Shine */}
      <div className="absolute left-5 right-5 top-px h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />

      {/* Reflection */}
      <motion.div
        animate={{
          x: ["-150%", "180%"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          inset-y-0
          -left-16
          w-16
          rotate-[18deg]
          blur-2xl
        "
        style={{
          background:
            "linear-gradient(90deg,transparent,rgba(255,255,255,.05),transparent)",
        }}
      />

      {/* Breathing Glow */}
      <motion.div
        animate={{
          opacity: [0.04, 0.08, 0.04],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="
          absolute
          inset-0
          rounded-full
          bg-white
          blur-xl
        "
      />

      <div className="relative z-20 flex h-full items-center justify-center">
        {children}
      </div>
    </motion.div>
  );
}
