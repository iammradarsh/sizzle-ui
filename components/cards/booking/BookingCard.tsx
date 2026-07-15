"use client";

import Image from "next/image";
import { motion } from "motion/react";

interface Props {
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
        className="
          number-gradient
          absolute
          left-[-100px]
          bottom-[-18px]
          z-0
          select-none
          pointer-events-none
          font-neue-black
          text-[300px]
          leading-none
          gradient-rank-text
        "
      >
        {rank}
      </span>

      {/* Card */}
      <motion.div
        whileHover={{ scale: 0.98 }}
        transition={{
          duration: 0.25,
          ease: "easeInOut",
        }}
        className="
          group
          relative
          z-10
          h-[420px]
          overflow-hidden
          rounded-lg
        "
      >
        {/* Image */}
        <Image
          src={image}
          alt={name}
          fill
          className="
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
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
    h-[220px]
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
                className="inline-flex rounded-sm p-[1px]"
                style={{
                  background:
                    "linear-gradient(90deg, #FC7C20 0%, #F61785 58%, #D9107F 100%)",
                }}
              >
                <div
                  className="
      flex
      h-9
      items-center
      gap-2
      rounded-sm
      bg-[#2A2A2D]
      px-4
    "
                >
                  <Image src={badgeIcon} alt={badge} width={14} height={14} />

                  <span
                    className="
        text-[11px]
        font-neue-semibold
        uppercase
        tracking-[0.04em]
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
        text-[31px]
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

                  <span className="font-neue-semibold text-[16px]">
                    {rating}
                  </span>

                  <span className="text-[14px] text-white/70">({reviews})</span>
                </div>

                <div className="flex items-center gap-1">
                  <Image
                    src="/images/icons/bolt.svg"
                    alt=""
                    width={14}
                    height={14}
                  />

                  <span className="font-neue-semibold text-[16px]">
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
                  width={12}
                  height={12}
                />

                <span className="text-[12px] text-white/85">{bookedText}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
