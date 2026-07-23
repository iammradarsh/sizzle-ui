"use client";

import Image from "next/image";
import { motion } from "motion/react";

interface Props {
  isFirst?: boolean;
  rank: number;
  image: string;
  badge: string;
  badgeIcon: string;
  name: string;
  rating: string;
  reviews: number;
  responseTime: string;
  service: string;
  price: string;
  bookedText: string;
  overlayGradient: string;

  footerColor: string;
}

export default function BookingCard({
  isFirst = false,
  rank,
  image,
  badge,
  badgeIcon,
  name,
  rating,
  reviews,
  responseTime,
  service,
  price,
  bookedText,
  overlayGradient,
  footerColor,
}: Props) {
  return (
    <div className="relative ml-30 w-[255px] shrink-0 overflow-visible">
      {/* Background Number */}
      <span
        className={`
    absolute
    ${isFirst ? "left-[-60px]" : "left-[-80px]"}
    bottom-[-18px]
    z-0
    select-none
    pointer-events-none
    font-neue-black
    text-[300px]
    leading-none
    gradient-rank-text
  `}
      >
        {rank}
      </span>

      {/* Card */}
      <motion.div
        className="
          group
          relative
          z-10
          h-[400px]
          w-[260px]
          overflow-hidden
          rounded-[15px]
        "
      >
        {/* Image */}
        <Image
          src={image}
          alt={name}
          quality={100}
          unoptimized
          fill
          className="
            object-cover
            transition-transform
            duration-500
            group-hover:scale-102
          "
        />

        {/* Gradient Area */}
        <div
          className="
    absolute
    bottom-0
    left-0
    right-0
    z-10
    h-[225px]
  "
          style={{
            background: overlayGradient,
          }}
        >
          <div className="">
            {/* Content */}
            <div
              className="
      absolute
      left-5
      right-5
      bottom-[94px]
    "
            >
              {/* Badge */}
              <div
                className="border-[6px] border-transparent bg-[#2a2a2d48] backdrop-blur-[20px] rounded-sm w-fit h-[24px]"
                style={{
                  borderImage: 'url("/images/badge-border.svg") 2',
                  borderImageWidth: 0.4,
                }}
              >
                <div
                  className="
      flex
      items-center
      justify-start
      gap-1
      h-full
      
      
      px-1
    "
                >
                  <Image src={badgeIcon} alt={badge} width={12} height={12} />

                  <span
                    className="
        text-[10px]
        font-normal
        font-neue-semibold
        uppercase
        text-white
      "
                  >
                    {badge}
                  </span>
                </div>
              </div>

              {/* Name */}
              <h3
                className="
        mt-4
        whitespace-pre-line
        text-[48px]
        font-neue-black
        uppercase
        leading-[0.9]
        text-white
      "
              >
                {name}
              </h3>

              {/* Stats */}
              <div className="mt-4 flex items-center gap-4 text-white">
                <div className="flex items-center gap-1">
                  <Image
                    src="/images/icons/thumb.svg"
                    alt=""
                    width={14}
                    height={14}
                  />

                  <span className="font-neue-semibold text-sm">{rating}</span>

                  <span className="text-[12px] text-white/70">({reviews})</span>
                </div>

                <div className="flex items-center gap-1">
                  <Image
                    src="/images/icons/bolt.svg"
                    alt=""
                    width={14}
                    height={14}
                  />

                  <span className="font-neue-semibold text-sm">
                    {responseTime}
                  </span>
                </div>
              </div>
            </div>
            {/* Footer */}
            <div
              className="
    absolute
    bottom-0
    left-0
    right-0
    z-20
    h-[78px]
    px-5
    py-4
  "
              style={{
                background: footerColor,
                backdropFilter: "blur(20px)",
              }}
            >
              {/* Top Row */}
              <div className="flex items-center justify-between">
                <p
                  className="
        text-sm
        font-neue-semibold
        leading-none
        text-white
      "
                >
                  {service}
                </p>

                <span
                  className="
        text-sm
        font-neue-semibold
        text-white
      "
                >
                  {price}
                </span>
              </div>

              {/* Bottom Row */}
              <div className="mt-2 flex items-center gap-1">
                <Image
                  src="/images/icons/fire-white.svg"
                  alt=""
                  width={10}
                  height={10}
                />

                <span className="font-neue-semibold font-normal text-[12px] text-white/85">
                  {bookedText}
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
