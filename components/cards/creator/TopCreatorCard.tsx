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
          z-10
          h-[420px]
          overflow-hidden
          rounded-md
          select-none
        "
      >
        {/* Image */}
        <Image
          src={image}
          alt={name}
          fill
          priority
          className="
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

        {/* Gradient */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black
            via-black/20
            to-transparent
          "
        />

        {/* Bottom Content */}
        <div className="absolute bottom-6 left-6 right-6">
          <TopCreatorBadge icon={badgeIcon} label={badge} />
          <h3
            className="
              whitespace-pre-line
              text-[48px]
              font-neue-black
              uppercase
              leading-[0.9]
              text-white
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
