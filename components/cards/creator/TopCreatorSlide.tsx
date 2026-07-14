"use client";

import TopCreatorCard from "./TopCreatorCard";

interface Props {
  rank: number;

  image: string;

  badge: string;

  badgeIcon: string;

  name: string;

  description: string;
}

export default function TopCreatorSlide({
  rank,
  image,
  badge,
  badgeIcon,
  name,
  description,
}: Props) {
  return (
    <div className="relative w-[300px] ml-14 shrink-0 overflow-visible">
      {/* Number */}
      <span
        className="
          absolute
          left-[-45px]
          bottom-[-18px]
          z-0
          select-none
          pointer-events-none
          font-neue-black
          text-[320px]
          leading-none
          
          gradient-rank-text
        "
      >
        {rank}
      </span>

      {/* Card */}
      <div className="relative z-10 ml-14">
        <TopCreatorCard
          image={image}
          badge={badge}
          badgeIcon={badgeIcon}
          name={name}
          description={description}
        />
      </div>
    </div>
  );
}
