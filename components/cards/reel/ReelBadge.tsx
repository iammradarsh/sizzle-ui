import Image from "next/image";
import { motion } from "motion/react";

interface Props {
  badge?: string;

  locked?: string;
  isHovered?: boolean;
}

export default function ReelBadge({ badge, locked, isHovered }: Props) {
  if (!badge && !locked) return null;

  return (
    <motion.div
      animate={{
        opacity: isHovered ? 0 : 1,
        y: isHovered ? -8 : 0,
      }}
      transition={{
        duration: 0.25,
        ease: "easeInOut",
      }}
      className="absolute left-4 top-4 z-20 flex gap-2"
    >
      {badge && (
        <span className="rounded-sm font-neue-semibold flex items-center justify-center px-3 py-1 text-sm text-white bg-gradient-to-l from-pink-600 via-red-600 to-orange-500">
          {badge}
        </span>
      )}

      {locked && (
        <div
          className="
      flex
      h-8
      w-8
      shrink-0
      items-center
      justify-center
      rounded-[6px]
      bg-[#F4BB2E]
    "
        >
          <Image
            src={locked}
            alt="Locked"
            width={14}
            height={14}
            className="h-[14px] w-[14px] object-contain"
          />
        </div>
      )}
    </motion.div>
  );
}
