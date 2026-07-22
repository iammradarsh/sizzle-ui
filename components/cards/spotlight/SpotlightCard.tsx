"use client";

import Image from "next/image";
import { motion } from "motion/react";

interface Props {
  image: string;

  frame: string;

  overlayGradient: string;

  badgeType: "fan-favorite" | "most-tipped" | "most-booked" | "top-earner";

  badge: string;

  badgeIcon: string;

  name: string;

  description: string;
}

export default function SpotlightCard({
  image,
  frame,
  overlayGradient,
  badgeType,
  badge,
  badgeIcon,
  name,
  description,
}: Props) {
  const badgeVariants = {
    "fan-favorite": {
      container: "w-[99px] h-[24px]",
    },
    "most-tipped": {
      container: "w-[96px] h-[24px]",
      // icon: {
      //   width: 12,
      //   height: 12,
      // },
    },
    "most-booked": {
      container: "w-[105px] h-[24px]",
    },
    "top-earner": {
      container: "w-[93px] h-[24px]",
    },
  };

  const currentBadge = badgeVariants[badgeType];

  return (
    <motion.div
      className="
        group
        relative
        h-[400px]
        w-[311px]
        shrink-0
        overflow-hidden
        rounded-[15px]
      "
    >
      {/* Background */}
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover transition-transform duration-500 "
      />

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-[190px] z-10">
        {/* 2. Color Gradient Overlay (Provides the Rich Dark Fade) */}
        <div
          className="absolute bottom-0 inset-x-0 h-[180px] pointer-events-none "
          style={{
            background: overlayGradient,
          }}
        />
        <div
          className="absolute bottom-11.25 left-11.25  flex
        flex-col"
        >
          {/* Badge */}
          <div
            className={`mb-[12px] flex items-center justify-center gap-1.5 border-[6px] border-transparent bg-black/50 backdrop-blur-[20px] rounded-sm ${currentBadge.container}`}
            style={{
              borderImage: 'url("/images/badge-border.svg") 2',
              borderImageWidth: 0.4,
            }}
          >
            <Image src={badgeIcon} alt={badge} width={12} height={12} />

            <span
              className="
        text-[10px]
        font-neue-semibold
        uppercase
        font-normal
        text-white
      "
            >
              {badge}
            </span>
          </div>

          {/* Name */}
          <h3
            className="
              whitespace-pre-line
              text-[48px]
              font-neue-black
              uppercase
              leading-10
              text-white
              h-[74px}
              mb-3
            "
          >
            {name}
          </h3>

          {/* Description */}
          <p className="text-sm text-white/80 font-neue-regular">
            {description}
          </p>
        </div>
      </div>

      {/* Frame */}

      <div className="absolute inset-[15px] z-10 pointer-events-none">
        <Image src={frame} alt="Frame" fill className="object-fill" />
      </div>
    </motion.div>
  );
}
