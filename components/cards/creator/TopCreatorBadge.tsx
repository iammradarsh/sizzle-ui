"use client";

import Image from "next/image";

interface Props {
  icon: string;

  label: string;
}

export default function TopCreatorBadge({ icon, label }: Props) {
  return (
    <div
      className="mb-2 border-[6px] border-transparent bg-black/50 backdrop-blur-[20px] rounded-sm w-fit h-[24px]"
      style={{
        borderImage: 'url("/images/badge-border.svg") 2',
        borderImageWidth: 0.4,
      }}
    >
      <div
        className="
          flex
          items-center
          justify-start
          gap-1
          h-full
          px-1
        "
      >
        <Image
          src={icon}
          alt={icon}
          quality={100}
          unoptimized
          width={12}
          height={12}
        />

        <span
          className="
            text-[10px]
            font-normal
            font-neue-semibold
            uppercase
            text-white
          "
        >
          {label}
        </span>
      </div>
    </div>
  );
}
