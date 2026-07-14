"use client";

import Image from "next/image";
import { motion } from "motion/react";

interface Props {
  image: string;
  name: string;
}

export default function CreatorAvatar({ image, name }: Props) {
  return (
    <motion.div
      whileHover={{
        y: -4,
        scale: 0.95,
      }}
      transition={{
        duration: 0.25,
      }}
      className="relative h-[150px] w-[150px]"
    >
      <Image
        src={image}
        alt={name}
        fill
        sizes="150px"
        className="object-contain"
      />
    </motion.div>
  );
}
