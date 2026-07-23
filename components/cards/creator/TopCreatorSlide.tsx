"use client";

import TopCreatorCard from "./TopCreatorCard";

interface Props {
  isFirst?: boolean;

  rank: number;

  image: string;

  badge: string;

  badgeIcon: string;

  badgeWidth: number;

  name: string;

  description: string;
}

export default function TopCreatorSlide({
  isFirst = false,
  rank,
  image,
  badge,
  badgeIcon,
  badgeWidth,
  name,
  description,
}: Props) {
  return (
    <div className="relative w-[300px] ml-14 shrink-0 overflow-visible">
      {/* Number */}
      <span
        className={`absolute
          ${isFirst ? "left-[-10px]" : "left-[-40px]"}
          bottom-[-18px]
          z-0
          select-none
          pointer-events-none
          font-neue-black
          text-[300px]
          leading-none
          
          gradient-rank-text`}
      >
        {rank}
      </span>

      {/* Card */}
      <div className="relative z-10 ml-14">
        <TopCreatorCard
          image={image}
          badge={badge}
          badgeIcon={badgeIcon}
          badgeWidth={badgeWidth}
          name={name}
          description={description}
        />
      </div>
    </div>
  );
}
