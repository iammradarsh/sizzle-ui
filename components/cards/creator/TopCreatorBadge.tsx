"use client";

import Image from "next/image";

interface Props {
  icon: string;

  label: string;
}

export default function TopCreatorBadge({ icon, label }: Props) {
  return (
    <div
      className="
        inline-flex
        items-center
        gap-2
        rounded-sm
        bg-black/65
        px-3
        py-2
        backdrop-blur-md
      "
    >
      <Image src={icon} alt="" width={12} height={12} />

      <span
        className="
          text-[11px]
          font-neue-semibold
          uppercase
          tracking-wide
          text-white
        "
      >
        {label}
      </span>
    </div>
  );
}
