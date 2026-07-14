"use client";

import Image from "next/image";

interface ReelFooterProps {
  title: string;

  avatar: string;

  creator: string;

  views: string;

  time: string;

  rank?: number;
}

export default function ReelFooter({
  title,
  avatar,
  creator,
  views,
  time,
  rank,
}: ReelFooterProps) {
  return (
    <div className="mt-5 flex justify-start gap-2">
      {/* Rank */}
      {rank && (
        <div className="mb-2">
          <span className="font-neue-black text-[64px] leading-none text-white">
            {rank}
          </span>
        </div>
      )}

      <div>
        {/* Title */}
        <h3 className="font-neue-regular text-md leading-[1.35] text-white">
          {title}
        </h3>

        {/* Creator */}
        <div className="mt-3 flex items-center gap-2">
          <Image
            src={avatar}
            alt={creator}
            width={20}
            height={20}
            className="rounded-full"
          />

          <span className="font-neue-regular text-[14px] text-white">
            {creator}
          </span>

          <span className="text-[#71717A]">•</span>

          <span className="font-neue-regular text-[14px] text-[#A1A1AA]">
            {views}
          </span>

          <span className="text-[#71717A]">•</span>

          <span className="font-neue-regular text-[14px] text-[#A1A1AA]">
            {time}
          </span>
        </div>
      </div>
    </div>
  );
}
