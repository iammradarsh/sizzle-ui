import Image from "next/image";

interface HeroCardBadgeProps {
  badge?: {
    type: string;
    text: string;
    icon: string;
    iconWidth: number;
    iconHeight: number;
  };
}

export default function HeroCardBadge({ badge }: HeroCardBadgeProps) {
  if (!badge) return null;

  const isOriginal = badge.type === "original";

  return (
    <div
      className={`mb-2 flex items-center justify-center gap-1.5 border-[6px] border-transparent bg-black/50 backdrop-blur-[20px] rounded-sm ${
        isOriginal ? "w-[102px] h-[24px]" : "w-[93px] h-[24px]"
      }`}
      style={{
        borderImage: 'url("/images/badge-border.svg") 2',
        borderImageWidth: 0.4,
      }}
    >
      <Image
        src={badge.icon}
        alt={badge.text}
        width={badge.iconWidth}
        height={badge.iconHeight}
      />

      <span className="font-neue-semibold text-[10px] uppercase tracking-wide text-white">
        {badge.text}
      </span>
    </div>
  );
}
