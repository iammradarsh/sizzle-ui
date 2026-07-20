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
        height: "190px",
        width: "190px",
      }}
      transition={{
        duration: 0.25,
      }}
      className="relative h-[180px] w-[180px] origin-right"
    >
      <Image
        src={image}
        alt={name}
        fill
        sizes="180px"
        className="object-cover"
      />
    </motion.div>
  );
}
