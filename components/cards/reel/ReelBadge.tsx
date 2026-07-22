import Image from "next/image";
import { motion } from "motion/react";

interface Props {
  badge?: string;
  locked?: string;
  premium?: boolean;
  isHovered?: boolean;
}

export default function ReelBadge({
  badge,
  locked,
  premium,
  isHovered,
}: Props) {
  if (!badge && !locked && !premium) return null;

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
      className="absolute left-4 top-4 z-20 flex items-center gap-2"
    >
      {/* Gradient Badge */}
      {badge && (
        <span className="flex h-6 min-w-10 items-center justify-center rounded-[6px] bg-gradient-to-l from-pink-600 via-red-600 to-orange-500  font-neue-semibold text-xs text-white">
          {badge}
        </span>
      )}

      {/* Locked Badge */}
      {locked && (
        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-[6px] bg-[#F4BB2E]">
          <Image
            src={locked}
            alt="Locked"
            width={12}
            height={12}
            className="h-3 w-3 object-contain"
          />
        </div>
      )}

      {/* Premium Badge */}
      {premium && (
        <div className="flex h-6 w-6 shrink-0 items-center justify-center bg-[#BB0DC7] rounded-[6px]">
          <Image
            src="/images/icons/crown.svg"
            alt="Premium"
            width={12}
            height={10}
            className="h-3 w-3 object-contain"
          />
        </div>
      )}
    </motion.div>
  );
}
