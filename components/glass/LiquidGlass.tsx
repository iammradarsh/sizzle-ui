"use client";

import { motion, useMotionTemplate } from "motion/react";
import { ReactNode } from "react";
import { useGlassMouse } from "./useGlassMouse";
import GlassNoise from "./GlassNoise";
import GlassEdgeRefraction from "./GlassEdgeRefraction";

interface LiquidGlassProps {
  children: ReactNode;
  className?: string;
  width?: number;
  height?: number;
  cornerRadius?: number;
}

export default function LiquidGlass({
  children,
  className = "",
  width = 580,
  height = 90,
  cornerRadius = 34,
}: LiquidGlassProps) {
  const { ref, mouseX, mouseY } = useGlassMouse();

  return (
    <div
      ref={ref}
      className={`relative overflow-visible ${className}`}
      style={{
        width,
        height,
      }}
    >
      {/* Ambient Glow */}
      <div
        className="
          absolute
          -inset-6
          rounded-[60px]
          opacity-70
          blur-md
        "
        style={{
          background: `
            radial-gradient(circle at top left,
              rgba(255,255,255,.025),
              transparent 40%),
            radial-gradient(circle at bottom right,
              rgba(255,255,255,.02),
              transparent 45%)
          `,
        }}
      />

      <div
        className="absolute inset-0 overflow-hidden rounded-[34px]"
        style={{
          backdropFilter: "blur(10px) saturate(180%)",
          WebkitBackdropFilter: "blur(10px) saturate(180%)",
        }}
      >
        <div
          className="
            relative
            h-full
            w-full
            overflow-hidden

           

            bg-[rgba(25,25,27,0.75)]

            backdrop-blur-[32px]
            backdrop-saturate-[180%]

            shadow-[0_8px_24px_rgba(0,0,0,.45)]
          "
        >
          {/* Top Highlight */}
          <div
            className="
              absolute
              inset-x-8
              top-0
              h-px

              bg-gradient-to-r
              from-transparent
              via-white/15
              to-transparent
            "
          />

          {/* Corner Glow */}
          <div
            className="
              absolute
              inset-0
            "
            style={{
              background: `
                radial-gradient(circle at top left,
                  rgba(25, 25, 27, 0.75),
                  transparent 28%),

                radial-gradient(circle at top right,
                  rgba(25, 25, 27, 0.15),
                  transparent 28%),

                radial-gradient(circle at bottom left,
                  rgba(25, 25, 27, 0.08),
                  transparent 35%),

                radial-gradient(circle at bottom right,
                  rgba(25, 25, 27, 0.18),
                  transparent 35%)
              `,
            }}
          />

          {/* Inner Border */}
          <div
            className="
              absolute
              inset-[1px]
            "
            style={{
              borderRadius: cornerRadius - 1,
              boxShadow: "inset 0 1px 1px rgba(255,255,255,.28)",
            }}
          />

          {/* Specular Highlight */}
          <motion.div
            animate={{
              x: ["-150%", "180%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
    pointer-events-none
    absolute
    inset-y-0
    w-44
    rotate-[18deg]
    blur-md
  "
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,.05), rgba(255,255,255,.02), transparent)",
            }}
          />

          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: useMotionTemplate`
      radial-gradient(
        circle at ${mouseX}% ${mouseY}%,
        rgba(255,255,255,.05),
        rgba(255,255,255,.02) 18%,
        transparent 45%
      )
    `,
            }}
          />

          <motion.div
            className="absolute inset-0 pointer-events-none mix-blend-screen"
            style={{
              background: useMotionTemplate`
      radial-gradient(
        circle at ${mouseX}% ${mouseY}%,
        rgba(255,255,255,.03),
        transparent 60%
      )
    `,
            }}
          />

          <div
            className="
    pointer-events-none
    absolute
    inset-0
  "
            style={{
              background: `
      radial-gradient(circle at 20% 15%,
      rgba(255,255,255,.025),
      transparent 28%),

      radial-gradient(circle at 85% 80%,
      rgba(255,255,255,.02),
      transparent 35%)
    `,
            }}
          />

          <div
            className="
    pointer-events-none
    absolute
    inset-0
    rounded-[34px]
  "
            style={{
              boxShadow: `
      inset 0 1px 0 rgba(255,255,255,.28),
      inset 0 -1px 0 rgba(255,255,255,.06),
      inset 1px 0 0 rgba(255,255,255,.06),
      inset -1px 0 0 rgba(255,255,255,.06)
    `,
            }}
          />

          <GlassEdgeRefraction />

          {/* Noise */}
          <GlassNoise />

          {/* Content */}
          <div className="relative z-20 h-full w-full">{children}</div>
        </div>
      </div>
    </div>
  );
}
