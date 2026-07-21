"use client";

import { motion } from "motion/react";
import SquircleAvatar from "@/components/common/SquircleAvatar";

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
      // whileHover={{
      //   scale: 1.02,
      // }}
      // transition={{
      //   duration: 0.25,
      // }}
      className="w-[200px] shrink-0"
    >
      {/* Image */}
      <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.35 }}>
        <SquircleAvatar
          src={image}
          alt={name}
          avatarSize={200}
          borderSize={204}
          borderVariant="solid"
          cornerRadius={54 / 200} // 0.27
          cornerSmoothing={6}
        />
      </motion.div>

      {/* Content */}
      <div className="mt-4">
        {/* Name */}
        <h3 className="font-neue-regular text-md leading-1 text-white">
          {name}
        </h3>

        {/* Stats */}
        <div className="">
          <PersonalStats
            rating={rating}
            reviews={reviews}
            responseTime={responseTime}
          />
        </div>

        {/* Services */}
        <div className="mt-4 ">
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
          onClick={() => console.log("more")}
          className="
            mt-5
            flex
            h-10
            w-20
            items-center
            justify-center
            rounded-[12px]
            bg-[#19191B]

            font-neue-semibold
            text-sm
            text-white

            transition-all
            duration-200

            hover:bg-[#28282A]
          "
        >
          +{more} more
        </button>
      </div>
    </motion.div>
  );
}
