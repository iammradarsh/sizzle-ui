import Image from "next/image";

interface HeroCardBadgeProps {
  badge?: {
    text: string;
    icon: string;
    iconWidth: number;
    iconHeight: number;
  };
}

export default function HeroCardBadge({ badge }: HeroCardBadgeProps) {
  if (!badge) return null;

  return (
    <div
      className="mb-2 p-1 flex items-center gap-2 border-[6px] border-transparent bg-black/50 backdrop-blur-[20px] rounded-sm w-fit h-[24px]"
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
