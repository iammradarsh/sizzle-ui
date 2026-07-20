"use client";

import Image from "next/image";

import FeaturedFooter from "./FeaturedFooter";

interface FeaturedCardProps {
  image: string;

  creatorLogo: string;

  avatar: string;

  title: string;

  creator: string;

  duration: string;

  category: string;

  views: string;

  time: string;
}

export default function FeaturedCard({
  image,
  creatorLogo,
  avatar,
  title,
  creator,
  duration,
  category,
  views,
  time,
}: FeaturedCardProps) {
  return (
    <div className="w-[246px] shrink-0">
      {/* Card */}
      <div className="relative h-[380px] overflow-hidden rounded-[15px]">
        {/* Image */}
        <Image src={image} alt={title} fill className="object-cover" />

        {/* Gradient */}
        <div className="absolute inset-0 " />

        {/* Bottom Tags */}
        <div className="absolute bottom-4 left-4 flex gap-2">
          <div className="rounded-sm bg-black/40 h-6 w-15.5 flex items-center justify-center text-xs text-white backdrop-blur-md">
            {duration}
          </div>

          <div className="rounded-sm bg-black/40 h-6 w-15.5 flex items-center justify-center text-xs text-white backdrop-blur-md">
            {category}
          </div>
        </div>
      </div>

      {/* Footer */}
      <FeaturedFooter
        avatar={avatar}
        title={title}
        creator={creator}
        views={views}
        time={time}
      />
    </div>
  );
}
