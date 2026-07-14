"use client";

import Image from "next/image";
import { motion } from "motion/react";

interface Props {
  avatar: string;

  name: string;

  description: string;

  highlight?: boolean;
}

export default function CreatorListCard({
  avatar,
  name,
  description,
  highlight = false,
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
      className={`
        flex
        items-center
        gap-4
        rounded-lg
        p-4
        transition-colors
        duration-300
        ${highlight ? "bg-[#1D1D1F]" : "hover:bg-[#141416]"}
      `}
    >
      <Image
        src={avatar}
        alt={name}
        width={58}
        height={58}
        className="rounded-sm object-cover"
      />

      <div className="min-w-0">
        <h3 className="truncate text-md font-neue-semibold text-white">
          {name}
        </h3>

        <p className="mt-1 truncate text-sm text-[#8A8A8A]">{description}</p>
      </div>
    </motion.div>
  );
}
