"use client";

import Image from "next/image";
import { motion } from "motion/react";

import ReelMedia from "./ReelMedia";
import ReelBadge from "./ReelBadge";
import ReelActions from "./ReelActions";
import ReelControls from "./ReelControls";
import ReelFooter from "./ReelFooter";
import { useState, useRef } from "react";

interface ReelCardProps {
  mediaType: "image" | "gallery" | "video";

  images: string[];

  imageCount?: number;

  creatorLogo: string;

  title: string;

  rank?: number;

  avatar: string;

  creator: string;

  duration?: string;

  category: string;

  views: string;

  time: string;

  badge?: string;

  locked?: string;

  likes: number;

  comments: number;

  showCertified?: boolean;
}

export default function ReelCard({
  mediaType,
  images,
  imageCount,
  creatorLogo,
  title,
  rank,
  avatar,
  creator,
  duration,
  category,
  views,
  time,
  badge,
  locked,
  likes,
  comments,
  showCertified,
}: ReelCardProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const lastIndex = useRef(0);

  const timeout = useRef<NodeJS.Timeout | null>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (mediaType !== "gallery") return;

    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;

    const section = rect.width / images.length;

    const index = Math.min(Math.floor(x / section), images.length - 1);

    if (index === currentImage) return;

    if (timeout.current) clearTimeout(timeout.current);

    timeout.current = setTimeout(() => {
      setCurrentImage(index);
    }, 120);
  }

  function handleMouseLeave() {
    if (mediaType !== "gallery") return;

    setCurrentImage(0);
  }

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        scale: 0.98,
      }}
      transition={{
        duration: 0.25,
      }}
      className="group w-[290px] shrink-0"
    >
      {/* Card */}
      <div
        className="relative h-[460px] overflow-hidden rounded-md bg-[#1B1B1D]"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Image */}
        <motion.div
          animate={{
            filter: isHovered ? "brightness(0.78)" : "brightness(1)",
          }}
          transition={{
            duration: 1,
          }}
          className="absolute inset-0"
        >
          <motion.div
            key={currentImage}
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="absolute inset-0"
          >
            <ReelMedia
              images={images}
              currentImage={currentImage}
              title={title}
            />
          </motion.div>
        </motion.div>

        {showCertified && (
          <div className="absolute inset-[12px] z-0 pointer-events-none">
            <Image
              src="/images/certified/frame.png"
              alt="Frame"
              fill
              priority
              className="
      absolute
      inset-0
      z-20
      pointer-events-none
      select-none
      object-fill
    "
            />
          </div>
        )}

        {/* Dark Overlay */}
        <div className="absolute inset-0 " />

        {/* Hover Overlay */}
        <div
          className="
          absolute
          inset-0
          bg-black/20
          opacity-0
          transition
          duration-300
          group-hover:opacity-100
          
        "
        />

        {showCertified && (
          <Image
            src="/images/certified/certified-logo.png"
            alt="Certified"
            width={84}
            height={32}
            priority
            className="
      absolute
      left-8
      top-8
      z-30
      pointer-events-none
      select-none
    "
          />
        )}

        {/* Badge */}
        <ReelBadge badge={badge} locked={locked} />

        {/* gallery counter */}

        {mediaType === "gallery" && (
          <motion.div
            animate={{
              opacity: isHovered ? 1 : 0,
            }}
            className="
      absolute
      right-4
      top-4
      rounded-full
      bg-black/40
      px-3
      py-1
      text-sm
      backdrop-blur-md
    "
          >
            {currentImage + 1}/{imageCount}
          </motion.div>
        )}

        {/* Creator Logo */}
        <motion.div
          animate={{
            opacity: isHovered ? 0 : 1,
          }}
          transition={{
            duration: 0.25,
            ease: "easeInOut",
          }}
          className="absolute bottom-14 left-6"
        >
          <Image
            src={creatorLogo}
            alt="logo"
            width={120}
            height={50}
            className="h-auto w-auto mb-5"
          />
        </motion.div>

        {/* Bottom Meta */}
        <motion.div
          initial={false}
          animate={{
            opacity: isHovered ? 0 : 1,
          }}
          transition={{
            duration: 0.25,
            ease: "easeInOut",
          }}
          className="absolute bottom-6 left-6 flex items-center gap-2"
        >
          {/* Video Badge */}
          {mediaType === "video" && duration && (
            <div className="flex h-6 items-center rounded-sm bg-black/40 px-3 backdrop-blur-md">
              <span className="font-neue-regular text-sm text-white">
                {duration}
              </span>
            </div>
          )}

          {/* Gallery Badge */}
          {mediaType === "gallery" && (
            <div className="flex h-8 items-center gap-2 rounded-sm bg-black/40 px-3 backdrop-blur-md">
              <Image
                src="/images/icons/gallery.svg"
                alt="Gallery"
                width={12}
                height={12}
              />

              <span className="font-neue-regular text-sm text-white">
                {imageCount}
              </span>
            </div>
          )}

          {/* Image Badge (Optional) */}
          {mediaType === "image" && duration && (
            <div className="flex h-8 items-center rounded-sm bg-black/40 px-3 backdrop-blur-md">
              <span className="font-neue-regular text-sm text-white">
                {duration}
              </span>
            </div>
          )}

          {/* Category */}
          <div className="flex h-8 items-center rounded-sm bg-black/40 px-3 backdrop-blur-md">
            <span className="font-neue-regular text-sm text-white">
              {category}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={false}
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{
            duration: 0.25,
            ease: "easeInOut",
          }}
          className="
    absolute
    right-3
    top-1/2
    h-[320px]
    w-[64px]
    -translate-y-1/2
    rounded-full
   
  "
        />

        {/* Right Actions */}
        <motion.div
          initial={false}
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{
            duration: 0.25,
            ease: "easeInOut",
          }}
        >
          <ReelActions likes={likes} comments={comments} />
        </motion.div>

        {/* Controls */}
        <motion.div
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{
            duration: 0.25,
            ease: "easeInOut",
          }}
        >
          <ReelControls />
        </motion.div>
      </div>

      {/* Footer */}
      <ReelFooter
        rank={rank}
        avatar={avatar}
        title={title}
        creator={creator}
        views={views}
        time={time}
      />
    </motion.div>
  );
}
