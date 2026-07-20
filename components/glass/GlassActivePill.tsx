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
      className="
        absolute
        inset-0
        overflow-hidden
        rounded-full
      "
    >
      {/* Background */}
      <div
        className="
          absolute
          inset-0
          backdrop-blur-2xl
          backdrop-saturate-[180%]

          shadow-[0_8px_30px_rgba(255,255,255,.08),0_12px_24px_rgba(0,0,0,.28)]
        "
      />

      {/* Inner highlight */}
      <div
        className="absolute inset-[1px] rounded-full"
        style={{
          boxShadow:
            "inset 0 1px 1px rgba(255,255,255,.35), inset 0 -1px 1px rgba(255,255,255,.05)",
        }}
      />

      {/* Top shine */}
      <div
        className="
          absolute
          left-4
          right-4
          top-1
          h-px
          
        "
      />

      {/* Animated reflection */}
      <motion.div
        animate={{
          x: ["-140%", "180%"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          inset-y-0
          w-20
          rotate-[18deg]
          blur-xl
        "
      />

      {/* Soft breathing glow */}
      <motion.div
        animate={{
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
        }}
        className="
          absolute
          inset-0
          rounded-full
         
          blur-xl
        "
      />

      <div className="relative z-20 flex h-full items-center justify-center">
        {children}
      </div>
    </motion.div>
  );
}
