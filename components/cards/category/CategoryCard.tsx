"use client";

import { motion } from "motion/react";

import CategoryImage from "./CategoryImage";

interface Props {
  title: string;
  image: string;
}

export default function CategoryCard({ title, image }: Props) {
  return (
    <motion.div
      // whileHover={{
      //   y: -2,
      // }}
      className="
      overflow-hidden
      flex
      h-[90px]
      w-[190px]
      cursor-pointer
      items-center
      justify-between
      rounded-[15px]
      bg-[#19191B]
      pl-6
      transition-colors
      hover:bg-[#28282A]
      gap-2
      shrink-0
      
    "
    >
      <h3 className="font-neue-black text-lg text-white">{title}</h3>

      <CategoryImage image={image} title={title} />
    </motion.div>
  );
}
