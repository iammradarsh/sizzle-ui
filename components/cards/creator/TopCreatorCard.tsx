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

        <div className="absolute bottom-6 left-5 right-5">
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
