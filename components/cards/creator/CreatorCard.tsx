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
      className="w-[170px] flex flex-col items-center shrink-0"
    >
      <CreatorAvatar image={props.image} name={props.name} />

      <h3 className="mt-4 font-neue-semibold text-lg text-white">
        {props.name}
      </h3>

      <CreatorStats videos={props.videos} posts={props.posts} />
    </motion.div>
  );
}
