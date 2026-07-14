"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useState } from "react";

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
      whileHover={{
        scale: 0.98,
      }}
      transition={{
        duration: 0.25,
        ease: "easeInOut",
      }}
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
          <Image
            src={avatar}
            alt={name}
            width={56}
            height={56}
            className="rounded-2xl object-cover"
          />

          <div>
            <h3 className="font-neue-semibold text-md text-white">{name}</h3>

            {/* Stats */}
            <div className="mt-2 flex items-center gap-4">
              {stats.map((stat) => (
                <div key={stat.icon} className="flex items-center gap-1">
                  <Image src={stat.icon} alt="" width={14} height={14} />

                  <span className="text-sm text-[#A0A0A0]">{stat.value}</span>
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
            rounded-xl
            px-5
            font-neue-semibold
            transition-all
            ${
              isFollowing
                ? "bg-[#2B2B2E] text-white"
                : "bg-white text-black hover:bg-[#E5E5E5]"
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
      rounded-2xl
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
    text-[44px]
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
          </div>
        ))}
      </div>
    </motion.div>
  );
}
