"use client";

import Image from "next/image";

interface Props {
  images: string[];
  currentImage: number;
  title: string;
}

export default function ReelMedia({
  images,
  currentImage,
  title,
}: Props) {
  return (
    <Image
      src={images[currentImage]}
      alt={title}
      fill
      priority
      sizes="320px"
      draggable={false}
      className="object-cover select-none"
    />
  );
}