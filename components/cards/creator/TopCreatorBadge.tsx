"use client";

import Image from "next/image";

interface Props {
  icon: string;

  label: string;

  width: number;
}

export default function TopCreatorBadge({ icon, label, width }: Props) {
  return (
    <div
      className="mb-2 border-[6px] border-transparent bg-[rgba(0, 0, 0, 0.5)] backdrop-blur-[100px] rounded-sm h-[24px]"
      style={{
        width: `${width}px`,
        borderImage: 'url("/images/badge-border.svg") 2',
        borderImageWidth: 0.4,
      }}
    >
      <div
        className="
          flex
          items-center
          justify-center
          gap-1
          h-full
          
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
