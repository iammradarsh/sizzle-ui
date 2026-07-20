"use client";

import SquircleAvatar from "@/components/common/SquircleAvatar";
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
    <div className="mt-3 flex justify-start gap-2">
      {/* Rank */}
      {rank && (
        <div className="mb-2">
          <span className="font-neue-black text-[64px] leading-12 gradient-rank-text">
            {rank}
          </span>
        </div>
      )}

      <div>
        <div className="flex flex-col gap-[4px]">
          {/* Title */}
          <h3 className="font-neue-regular text-[16px] leading-[20px] text-white">
            {title}
          </h3>

          {/* Creator */}
          <div className="flex items-center gap-2">
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

            <span className="font-neue-regular text-[14px] text-white">
              {creator}
            </span>

            <span className="flex items-center gap-1">
              <span>
                <Image
                  src="/images/icons/eye.svg"
                  alt="Views"
                  width={12}
                  height={12}
                />
              </span>

              <span className="font-neue-regular text-[14px] text-[#A1A1AA]">
                {views}
              </span>
            </span>

            <span className="text-[#71717A]">•</span>

            <span className="font-neue-regular text-[14px] text-[#A1A1AA]">
              {time}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
