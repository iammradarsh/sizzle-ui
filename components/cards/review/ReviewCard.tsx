"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import SquircleAvatar from "@/components/common/SquircleAvatar";
import ExpandableText from "@/components/common/ExpandableText";

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
  const [expanded, setExpanded] = useState(false);
  return (
    <motion.div
      className="
        w-[360px]
        h-[245px]
        shrink-0
        rounded-[15px]
        border
        border-white/10
        bg-[#19191B]
        hover:bg-[#28282A]
        p-5
        flex
        flex-col
      "
    >
      <div className="flex flex-col gap-5 h-full">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3.75">
            <SquircleAvatar
              src={avatar}
              alt={name ?? ""}
              avatarSize={50}
              borderSize={50}
              borderVariant="solid"
              borderWidth={0}
            />

            <div>
              <h3 className="font-neue-semibold text-[16px] leading-none text-white leading-5">
                {name}
              </h3>

              <p className="text-[12px] text-[#8A8A8A] leading-5.5">
                {username}
              </p>
            </div>
          </div>

          <span className="text-[14px] text-[#8A8A8A]">{time}</span>
        </div>

        <div className="flex flex-col h-full">
          {/* Rating */}
          <div
            className=" flex items-center gap-1"
            role="img"
            aria-label={`Rating: ${rating} out of 5 stars`}
          >
            {Array.from({ length: 5 }).map((_, index) => (
              <Image
                key={index}
                src={
                  index < rating
                    ? "/images/icons/star-fill.svg"
                    : "/images/icons/star-empty.svg"
                }
                alt=""
                aria-hidden="true"
                width={20}
                height={20}
              />
            ))}
          </div>

          {/* Review */}
          <ExpandableText
            text={review}
            lines={3}
            lineHeight={16}
            className="text-sm font-neue-regular text-white mt-3"
          />

          {/* Bottom */}
          <div className="flex items-center gap-3 mt-[15px]">
            <SquircleAvatar
              src={creatorAvatar}
              alt={name}
              avatarSize={28}
              borderSize={28}
              borderWidth={0}
              borderVariant="solid"
              cornerRadius={10 / 28} // 0.27
              cornerSmoothing={6}
            />

            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <div
                  key={tag}
                  className="
                rounded-[12px]
                border
                border-white/10
                bg-[#28282A]
                h-[28px]
                px-3
              "
                >
                  <span className="text-[12px] text-white">{tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
