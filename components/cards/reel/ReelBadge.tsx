import Image from "next/image";

interface Props {
  badge?: string;

  locked?: string;
}

export default function ReelBadge({ badge, locked }: Props) {
  if (!badge && !locked) return null;

  return (
    <div className="absolute left-4 top-4 flex gap-2">
      {badge && (
        <span className="rounded-sm bg-[linear-gradient(270deg,_#D9107F_0%,_#EE1E03_29.33%,_#F61785_57.21%,_#FC7C20_100%)] font-neue-semibold flex items-center justify-center px-3 py-1 text-sm text-white">
          {badge}
        </span>
      )}

      {locked && (
        <span className="rounded-sm bg-[#F4BB2E] px-2 py-2">
          <Image src={locked} alt="Locked" width={16} height={16} />
        </span>
      )}
    </div>
  );
}
