"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useState } from "react";
import SquircleAvatar from "@/components/common/SquircleAvatar";

interface Props {
  avatar: string;

  name: string;

  views: string;

  videos: string;

  likes: string;

  following?: boolean;

  images: string[];

  viewIcon: string;

  videoIcon: string;

  likeIcon: string;
}

export default function CreatorHighlightCard({
  avatar,
  name,
  views,
  videos,
  likes,
  following = false,
  images,
  viewIcon,
  videoIcon,
  likeIcon,
}: Props) {
  const [isFollowing, setIsFollowing] = useState(following);

  const stats = [
    {
      icon: viewIcon,
      value: views,
    },
    {
      icon: videoIcon,
      value: videos,
    },
    {
      icon: likeIcon,
      value: likes,
    },
  ];

  return (
    <motion.div
      className="
        group
        w-[390px]
        shrink-0
        rounded-[20px]
        border
        border-white/5
        bg-[#19191B]
        p-5
        transition-colors
        duration-300
        hover:bg-[#28282A]
        select-none
      "
    >
      {/* Header */}
      <div className="flex items-start justify-between ">
        <div className="flex gap-3">
          <SquircleAvatar
            src={avatar}
            alt={name ?? ""}
            avatarSize={60}
            borderSize={60}
            borderVariant="solid"
            borderWidth={0}
          />

          <div>
            <h3 className="font-neue-semibold text-[16px] text-white">
              {name}
            </h3>

            {/* Stats */}
            <div className="mt-2 flex items-center gap-2">
              {stats.map((stat) => (
                <div key={stat.icon} className="flex items-center gap-1">
                  <Image src={stat.icon} alt="" width={12} height={12} />

                  <span className="text-sm text-[#A3A3A3]">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Follow */}
        <button
          onClick={() => setIsFollowing(!isFollowing)}
          className={`
            h-10
            rounded-[12px]
            px-5
            font-neue-semibold
            text-[14px]
            transition-all
            flex 
            items-center
            justify-center
            ${
              isFollowing
                ? "bg-[#2B2B2E] text-white"
                : "bg-white text-black hover:bg-[#DFDCD7]"
            }
          `}
        >
          {isFollowing ? "✓ Following" : "+ Follow"}
        </button>
      </div>

      {/* Images */}
      <div className="mt-6 flex gap-3">
        {images.map((image, index) => (
          <div
            key={image}
            className="
      group/image
      relative
      h-[170px]
      flex-1
      overflow-hidden
      rounded-[15px]
      
    "
          >
            {/* Number */}
            <span
              className="
    highlight-number
    absolute
    left-3
    top-3
    z-20
    font-neue-black
    text-[40px]
    leading-none
    
  "
            >
              {index + 1}
            </span>

            <Image
              src={image}
              alt=""
              fill
              className="
object-cover
transition-transform
duration-500
group-hover/image:scale-105


"
            />

            {/* Gradient Overlay */}
            <div
              className="
      pointer-events-none
      absolute
      inset-0
      bg-[linear-gradient(143deg,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_50%)]
    "
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
}
