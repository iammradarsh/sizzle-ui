"use client";

import Image from "next/image";
import { motion } from "motion/react";
import SquircleAvatar from "@/components/common/SquircleAvatar";

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
        width: "448px",
      }}
      transition={{
        duration: 0.25,
        ease: "easeInOut",
      }}
      className={`
        flex
        items-center
        gap-4
        rounded-[15px]
        h-[84px]
        w-[446px]
        px-4
        transition-colors
        duration-300
        ${highlight ? "bg-[#19191B]" : "hover:bg-[#19191B]"}
      `}
    >
      <SquircleAvatar
        src={avatar}
        alt={name ?? ""}
        avatarSize={60}
        borderSize={62}
        borderVariant="solid"
        borderWidth={1}
      />

      <div className="min-w-0">
        <h3 className="truncate text-md font-neue-semibold font-normal text-white">
          {name}
        </h3>

        <p className="mt-1 truncate text-sm text-[#8A8A8A]">{description}</p>
      </div>
    </motion.div>
  );
}
