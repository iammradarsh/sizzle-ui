"use client";

import SquircleAvatar from "@/components/common/SquircleAvatar";
import Image from "next/image";

interface FeaturedFooterProps {
  avatar: string;

  title: string;

  creator: string;

  views: string;

  time: string;
}

export default function FeaturedFooter({
  avatar,
  title,
  creator,
  views,
  time,
}: FeaturedFooterProps) {
  return (
    <div className="mt-3">
      {/* Title */}
      <h3 className="line-clamp-2 text-[16px] font-neue-semibold leading-[1.3] text-white">
        {title}
      </h3>

      {/* Meta */}
      <div className="mt-1 flex items-center gap-2">
        <SquircleAvatar
          src={avatar}
          alt={creator ?? ""}
          avatarSize={14}
          borderSize={16}
          borderVariant="solid"
          borderWidth={1}
          cornerRadius={5 / 14}
          cornerSmoothing={16}
        />

        <div className="flex gap-[4px] h-[18px]">
          <span className="text-[14px] text-[#A3A3A3]">{views}</span>

          <span className="text-[#A3A3A3]">•</span>

          <span className="text-[14px] text-[#A3A3A3]">{time}</span>
        </div>
      </div>
    </div>
  );
}
