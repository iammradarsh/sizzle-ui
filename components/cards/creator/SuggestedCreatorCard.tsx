"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";

interface Props {
  image: string;

  name: string;

  description: string;

  showBorder?: boolean;

  following?: boolean;

  isNew?: boolean;
}

export default function SuggestedCreatorCard({
  image,
  name,
  description,
  showBorder = false,
  following = false,
  isNew = false,
}: Props) {
  const [isFollowing, setIsFollowing] = useState(following);
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
        ease: "easeInOut",
      }}
      className="w-[190px] shrink-0 flex flex-col"
    >
      {showBorder ? (
        <div
          className="
      w-[190px]
      rounded-[36px]
      bg-gradient-to-r
      from-[#FF7A00]
      via-[#FF008C]
      to-[#8B00FF]
      p-[2px]
    "
        >
          <Image
            src={image}
            alt={name}
            width={190}
            height={190}
            className="h-[190px] w-[190px] rounded-[34px] object-cover"
          />
        </div>
      ) : (
        <Image
          src={image}
          alt={name}
          width={190}
          height={190}
          className="h-[190px] w-[190px] rounded-[34px] object-cover"
        />
      )}

      <div className="card-detail flex flex-col">
        <div className="mt-4 flex items-center gap-2">
          <h3 className="text-md font-neue-semibold leading-tight text-white">
            {name}
          </h3>

          {isNew && (
            <span
              className="
        rounded-md
        border
        border-[#FF2C78]
        px-2
        py-[2px]
        text-md
        font-neue-regular
        text-[#FF2C78]
      "
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
    mt-5
    inline-flex
    h-10
    w-fit
    items-center
    justify-center
    gap-2
    rounded-md
    px-4
    font-neue-semibold
    transition-all
    duration-300
    ${
      isFollowing
        ? "bg-[#232325] text-[#A7A7A7] hover:bg-[#2C2C2F]"
        : "bg-white text-black hover:bg-[#DFDCD7]"
    }
  `}
      >
        {isFollowing ? "✓ Following" : "+ Follow"}
      </motion.button>
    </motion.div>
  );
}
