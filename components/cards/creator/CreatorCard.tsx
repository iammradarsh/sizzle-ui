"use client";

import { motion } from "motion/react";

import CreatorAvatar from "./CreatorAvatar";
import CreatorStats from "./CreatorStats";

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
      className="w-[200px] h-[280px] flex flex-col items-start shrink-0"
    >
      <CreatorAvatar image={props.image} name={props.name} />

      <div>
        <h3 className="mt-4 font-neue-regular text-[16px] font-[400] text-white">
          {props.name}
        </h3>

        <CreatorStats videos={props.videos} posts={props.posts} />
      </div>
    </motion.div>
  );
}
