"use client";

import Image from "next/image";
import { motion } from "motion/react";

interface Props {
  image: string;
  title: string;
}

export default function CategoryImage({ image, title }: Props) {
  return (
    <motion.div
      whileHover={
        {
          // scale: 1.05,
        }
      }
      transition={{
        duration: 0.25,
      }}
      className="relative h-14 w-20 overflow-hidden"
    >
      <Image
        src={image}
        alt={title}
        fill
        sizes="112px"
        className="object-cover"
      />
    </motion.div>
  );
}
