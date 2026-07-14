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
    <div className="w-[280px] shrink-0">
      {/* Card */}
      <div className="relative h-[380px] overflow-hidden rounded-md">
        {/* Image */}
        <Image src={image} alt={title} fill className="object-cover" />

        {/* Gradient */}
        <div className="absolute inset-0 " />

        {/* Logo */}
        {/* <Image
          src={creatorLogo}
          alt="Logo"
          width={110}
          height={40}
          className="absolute bottom-14 left-5 h-auto w-auto"
        /> */}

        {/* Bottom Tags */}
        <div className="absolute bottom-5 left-5 flex gap-2">
          <div className="rounded-sm bg-black/40 px-2 py-1 text-xs text-white backdrop-blur-md">
            {duration}
          </div>

          <div className="rounded-sm bg-black/40 px-2 py-1 text-xs text-white backdrop-blur-md">
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
