"use client";

import Image from "next/image";
import { motion } from "motion/react";

interface Props {
  image: string;

  frame: string;

  overlayGradient: string;

  badge: string;

  badgeIcon: string;

  name: string;

  description: string;
}

export default function SpotlightCard({
  image,
  frame,
  overlayGradient,
  badge,
  badgeIcon,
  name,
  description,
}: Props) {
  return (
    <motion.div
      whileHover={{
        scale: 0.98,
      }}
      transition={{
        duration: 0.25,
        ease: "easeInOut",
      }}
      className="
        group
        relative
        h-[390px]
        w-[300px]
        shrink-0
        overflow-hidden
        rounded-[24px]
      "
    >
      {/* Background */}
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Bottom Gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[190px] z-10"
        style={{
          background: overlayGradient,
        }}
      >
        <div className="absolute bottom-8 left-10 right-10">
          {/* Badge */}
          <div
            className="inline-flex rounded-sm p-[1px]"
            style={{
              background:
                "linear-gradient(90deg, #FC7C20 0%, #F61785 57%, #D9107F 100%)",
            }}
          >
            <div
              className="
      flex
      h-9
      items-center
      gap-2
      rounded-sm
      bg-[#262628]/95
      px-4
      backdrop-blur-xl
    "
            >
              <Image src={badgeIcon} alt={badge} width={14} height={14} />

              <span
                className="
        text-[11px]
        font-neue-semibold
        uppercase
        tracking-[0.06em]
        text-white
      "
              >
                {badge}
              </span>
            </div>
          </div>

          {/* Name */}
          <h3
            className="
              mt-4
              whitespace-pre-line
              text-[34px]
              font-neue-black
              uppercase
              leading-[0.9]
              text-white
            "
          >
            {name}
          </h3>

          {/* Description */}
          <p className="mt-3 text-sm text-white/80">{description}</p>
        </div>
      </div>

      {/* Frame */}

      <div className="absolute inset-[10px] z-10 pointer-events-none">
        <Image src={frame} alt="Frame" fill className="object-fill" />
      </div>
    </motion.div>
  );
}
