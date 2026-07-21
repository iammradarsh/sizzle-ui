"use client";

import Image from "next/image";
import { motion } from "motion/react";

import TopCreatorBadge from "./TopCreatorBadge";

interface Props {
  image: string;
  badge: string;
  badgeIcon: string;
  name: string;
  description: string;
}

export default function TopCreatorCard({
  image,
  badge,
  badgeIcon,
  name,
  description,
}: Props) {
  return (
    <>
      {/* Card */}
      <motion.div
        className="
          group
          relative
          z-10
          h-[400px]
          w-[260px]
          overflow-hidden
          rounded-[15px]
          select-none
        "
      >
        {/* Image */}
        <Image
          src={image}
          alt={name}
          fill
          className="
            object-cover
            transition-transform
            duration-500
            group-hover:scale-102
          "
        />

        {/* 1. Progressive Backdrop Blur Layer (Pure Blur, No Text) */}
        <div
          className="absolute bottom-0 inset-x-0 h-[240px] pointer-events-none"
          style={{
            backdropFilter: "blur(2px)",
            WebkitBackdropFilter: "blur(24px)",
            // This mask controls the 0 to 100 progressive fade of the blur itself
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 40%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 40%)",
          }}
        />

        {/* 2. Color Gradient Overlay (Provides the Rich Dark Fade) */}
        <div className="absolute bottom-0 inset-x-0 h-[240px] pointer-events-none bg-gradient-to-t from-black via-black/50 to-transparent" />

        {/* 3. Text and Badge Layer (On Top) */}
        <div className="absolute bottom-6 left-5 right-5 z-20">
          <TopCreatorBadge icon={badgeIcon} label={badge} />

          <h3
            className="
              whitespace-pre-line
              text-[48px]
              font-neue-black
              uppercase
              leading-[0.9]
              text-white
              mt-3
            "
          >
            {name}
          </h3>

          <p className="mt-3 text-sm text-white/70">{description}</p>
        </div>
      </motion.div>
    </>
  );
}
