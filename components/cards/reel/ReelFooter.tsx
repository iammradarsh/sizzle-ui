"use client";

import SquircleAvatar from "@/components/common/SquircleAvatar";
import SquircleAvatar2 from "@/components/common/SquircleAvatar2";
import SquircleAvatar4 from "@/components/common/SquircleAvatar4";
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
    <div className="mt-3 flex justify-start gap-3">
      {/* Rank */}
      {rank && (
        <div className="mb-2">
          <span className="font-neue-black text-[60px] leading-12 gradient-rank-text">
            {rank}
          </span>
        </div>
      )}

      <div>
        <div className="flex flex-col gap-[4px] pr-1">
          {/* Title */}
          <h3 className="max-w-[300px] font-neue-semibold font-normal text-[16px] leading-[20px] text-white">
            {title}
          </h3>

          {/* Creator */}
          <div className="flex items-center gap-2">
            <SquircleAvatar4 src={avatar} alt={creator ?? ""} />

            {/* <Image
              src={avatar}
              alt={creator ?? ""}
              width={14}
              height={14}
              className="w-[14px] h-[14px] rounded-[4.5px] object-cover ring-[1px] ring-white/20"
            ></Image> */}

            <span className="font-neue-regular text-[14px] text-[#A3A3A3]">
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
