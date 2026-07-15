import Image from "next/image";

interface PersonalStatsProps {
  rating: number;
  reviews: number;
  responseTime: string;
}

export default function PersonalStats({
  rating,
  reviews,
  responseTime,
}: PersonalStatsProps) {
  return (
    <div className="mt-4 flex items-center gap-2">
      {/* Rating */}
      <div className="flex items-center gap-2 text-[14px]">
        <Image src="/images/icons/like.svg" alt="Like" width={18} height={18} />

        <span className="font-neue-semibold text-[14px] text-white">
          {rating}%
        </span>

        <span className="font-neue-regular text-[14px] text-[#9D9DA3]">
          ({reviews})
        </span>
      </div>

      {/* Response Time */}
      <div className="flex items-center gap-2">
        <Image
          src="/images/icons/lightning.svg"
          alt="Response Time"
          width={14}
          height={14}
        />

        <span className="font-neue-semibold text-[14px] text-white">
          {responseTime}
        </span>
      </div>
    </div>
  );
}
