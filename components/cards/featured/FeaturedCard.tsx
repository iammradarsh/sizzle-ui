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

        {/* 1. Progressive Backdrop Blur Layer (0 to 100 Blur Fade) */}
        <div
          className="absolute bottom-0 inset-x-0 h-[80px] pointer-events-none"
          style={{
            backdropFilter: "blur(2px)",
            WebkitBackdropFilter: "blur(20px)",
            // Smooth 0 to 100 progressive fade of the blur effect
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 50%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 50%)",
          }}
        />

        {/* 2. Color Gradient Overlay (Soft Dark Tint to protect white text) */}
        <div className="absolute bottom-0 inset-x-0 h-[140px] pointer-events-none bg-gradient-to-t from-black/75 via-black/30 to-transparent" />

        {/* Bottom Tags (Z-index added to sit cleanly on top of the blur) */}
        <div className="absolute bottom-4 left-4 flex gap-2 z-20">
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
