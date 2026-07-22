"use client";

import { motion } from "motion/react";

import CategoryImage from "./CategoryImage";
import SquircleAvatar from "@/components/common/SquircleAvatar";

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
      w-[204px]
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
      <h3 className="font-neue-black text-xl text-white">{title}</h3>

      <div className="relative w-[100px] right-0 flex gap-2.5">
        <SquircleAvatar
          src={image}
          alt={title ?? ""}
          avatarSize={60}
          borderSize={62}
          borderVariant="solid"
          borderWidth={1}
        />
        <SquircleAvatar
          src={image}
          alt={title ?? ""}
          avatarSize={60}
          borderSize={62}
          borderVariant="solid"
          borderWidth={1}
        />
      </div>
    </motion.div>
  );
}
