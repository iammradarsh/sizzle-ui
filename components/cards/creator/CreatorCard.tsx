"use client";

import { motion } from "motion/react";

import CreatorStats from "./CreatorStats";
import Image from "next/image";

interface Props {
  image: string;
  name: string;
  videos: number;
  posts: number;
}

export default function CreatorCard(props: Props) {
  return (
    <motion.div
      // whileHover={{
      //   y: -5,
      // }}
      className="w-[200px] flex flex-col items-start gap-[7px] shrink-0"
    >
      {/* CreatorAvatar  */}

      <div className="relative h-[180px] w-[180px]">
        <motion.div
          whileHover={{
            height: "190px",
            width: "190px",
          }}
          transition={{
            duration: 0.25,
          }}
          className="relative h-[180px] w-[180px] origin-bottom"
        >
          <Image
            src={props.image}
            alt={props.name}
            fill
            sizes="180px"
            className="object-cover"
          />
        </motion.div>
      </div>

      <div>
        <h3 className="font-neue-regular text-[16px] font-[400] text-white">
          {props.name}
        </h3>

        <CreatorStats videos={props.videos} posts={props.posts} />
      </div>
    </motion.div>
  );
}
