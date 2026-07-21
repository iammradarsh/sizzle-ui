"use client";

import { useState } from "react";
import { motion } from "motion/react";
import SquircleAvatar from "@/components/common/SquircleAvatar";

interface Props {
  image: string;

  name: string;

  description: string;

  showBorder?: boolean;
  borderVariant?: "solid" | "gradient";

  following?: boolean;

  isNew?: boolean;
}

export default function SuggestedCreatorCard({
  image,
  name,
  description,
  showBorder = false,
  borderVariant = "solid",
  following = false,
  isNew = false,
}: Props) {
  const [isFollowing, setIsFollowing] = useState(following);

  return (
    <motion.div className="w-[190px] shrink-0 flex flex-col ">
      <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.35 }}>
        <SquircleAvatar
          src={image}
          alt={name}
          avatarSize={200}
          borderSize={204}
          borderVariant={borderVariant}
          cornerRadius={54 / 200} // 0.27
          cornerSmoothing={6}
        />
      </motion.div>

      <div className="card-detail flex flex-col">
        <div className="mt-2 flex items-center gap-2">
          <h3 className="text-[16px] font-neue-semibold leading-tight text-white">
            {name}
          </h3>

          {isNew && (
            <span
              className="
        rounded-[4px]
        border
        border-[#F61785]
        w-[34px]
        text-[12px]
        leading-5
        flex
        items-center
        justify-center
        font-neue-regular
      "
              style={{
                background:
                  "linear-gradient(270deg, #D9107F 0%, #EE1E03 29.33%, #F61785 57.21%, #FC7C20 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              New
            </span>
          )}
        </div>

        <p className="mt-1 text-[14px] font-neue-regular text-[#A3A3A3]">
          {description}
        </p>
      </div>

      <motion.button
        whileTap={{ scale: 0.96 }}
        onClick={() => setIsFollowing(!isFollowing)}
        className={`
    mt-2
    flex
    items-center
    justify-center
    h-10
    items-center
    justify-center
    gap-1.5
    rounded-[12px]
    
    font-neue-semibold
    transition-all
    duration-300
    ${
      isFollowing
        ? "bg-[#19191BBF] text-[#fff] w-30 hover:bg-[#28282A]"
        : "bg-white text-black w-20 hover:bg-[#DFDCD7]"
    }
  `}
      >
        {isFollowing ? "✓ Following" : "+ Follow"}
      </motion.button>
    </motion.div>
  );
}
