"use client";

import Image from "next/image";
import { motion } from "motion/react";

interface Props {
  image: string;
  title: string;
}

export default function CategoryImage({ image, title }: Props) {
  return (
    <motion.div className="relative h-[60px] w-20 overflow-hidden">
      <Image
        src={image}
        alt={title}
        quality={100}
        unoptimized
        fill
        sizes="60px"
        className="object-cover"
      />
    </motion.div>
  );
}
