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
    <div className="mt-4">
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
          cornerRadius={4 / 14}
          cornerSmoothing={8}
        />

        {/* <span className="text-[13px] text-[#A1A1AA]">{creator}</span> */}

        {/* <span className="text-[#71717A]">•</span> */}

        <span className="text-[13px] text-[#A1A1AA]">{views}</span>

        <span className="text-[#71717A]">•</span>

        <span className="text-[13px] text-[#A1A1AA]">{time}</span>
      </div>
    </div>
  );
}
