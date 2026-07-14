"use client";

import Image from "next/image";
import { motion } from "motion/react";

import PersonalStats from "./PersonalStats";
import PersonalService from "./PersonalService";

interface PersonalCardProps {
  image: string;

  name: string;

  rating: number;

  reviews: number;

  responseTime: string;

  services: {
    title: string;
    price: string;
  }[];

  more: number;
}

export default function PersonalCard({
  image,
  name,
  rating,
  reviews,
  responseTime,
  services,
  more,
}: PersonalCardProps) {
  return (
    <motion.div
      whileHover={{
        scale: 0.98,
      }}
      transition={{
        duration: 0.25,
      }}
      className="w-[190px] shrink-0"
    >
      {/* Image */}
      <div className="relative h-[190px] w-[190px] overflow-hidden rounded-[48px]">
        <motion.div
          // whileHover={{
          //   scale: 1.06,
          // }}
          // transition={{
          //   duration: 0.35,
          // }}
          className="h-full w-full"
        >
          <Image src={image} alt={name} fill className="object-cover" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="mt-4">
        {/* Name */}
        <h3 className="font-neue-semibold text-[24px] leading-none text-white">
          {name}
        </h3>

        {/* Stats */}
        <div className="mt-2">
          <PersonalStats
            rating={rating}
            reviews={reviews}
            responseTime={responseTime}
          />
        </div>

        {/* Services */}
        <div className="mt-4 space-y-1">
          {services.map((service) => (
            <PersonalService
              key={service.title}
              title={service.title}
              price={service.price}
            />
          ))}
        </div>

        {/* More Button */}
        <button
          className="
            mt-5
            flex
            h-10
            items-center
            justify-center
            rounded-2xl
            bg-[#1D1D20]
            px-5

            font-neue-semibold
            text-sm
            text-white

            transition-all
            duration-200

            hover:bg-[#2A2A2E]
          "
        >
          +{more} more
        </button>
      </div>
    </motion.div>
  );
}
