"use client";

import Image from "next/image";
import { motion } from "motion/react";

interface Props {
  avatar: string;

  name: string;

  username: string;

  time: string;

  rating: number;

  review: string;

  creatorAvatar: string;

  tags: string[];
}

export default function ReviewCard({
  avatar,
  name,
  username,
  time,
  rating,
  review,
  creatorAvatar,
  tags,
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
      className="
        w-[370px]
        shrink-0
        rounded-[20px]
        border
        border-white/10
        bg-[#19191B]
        hover:bg-[#28282A]
        p-5
      "
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex gap-3">
          <Image
            src={avatar}
            alt={name}
            width={48}
            height={48}
            className="rounded-xl"
          />

          <div>
            <h3 className="font-neue-semibold text-[20px] leading-none text-white">
              {name}
            </h3>

            <p className="mt-1 text-[14px] text-[#8A8A8A]">{username}</p>
          </div>
        </div>

        <span className="text-[14px] text-[#8A8A8A]">{time}</span>
      </div>

      {/* Rating */}
      <div className="mt-5 flex items-center gap-1.5">
        {Array.from({ length: 5 }).map((_, index) => (
          <Image
            key={index}
            src={
              index < rating
                ? "/images/icons/star-fill.svg"
                : "/images/icons/star-empty.svg"
            }
            alt=""
            width={18}
            height={18}
          />
        ))}
      </div>

      {/* Review */}
      <p
        className="
          mt-5
          line-clamp-4
          text-sm
        
          text-[#E7E7E7]
        "
      >
        {review}
      </p>

      {/* Bottom */}
      <div className="mt-6 flex items-center gap-3">
        <Image
          src={creatorAvatar}
          alt=""
          width={34}
          height={34}
          className="rounded-sm"
        />

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <div
              key={tag}
              className="
                rounded-full
                border
                border-white/10
                bg-[#2A2A2D]
                px-3
                py-2
              "
            >
              <span className="text-[13px] text-white">{tag}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
