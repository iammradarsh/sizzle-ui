"use client";

import { useId } from "react";

interface SquircleAvatarProps {
  src: string;
  alt: string;

  size?: number;
  strokeWidth?: number;

  className?: string;
}

export default function SquircleAvatar3({
  src,
  alt,

  size = 200,
  strokeWidth = 2,

  className = "",
}: SquircleAvatarProps) {
  const id = useId();

  const VIEWBOX = 201;

  const PATH =
    "M0.5 100.5C0.5 20.5 20.5 0.5 100.5 0.5C180.5 0.5 200.5 20.5 200.5 100.5C200.5 180.5 180.5 200.5 100.5 200.5C20.5 200.5 0.5 180.5 0.5 100.5Z";

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox={`0 0 ${VIEWBOX} ${VIEWBOX}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id={`${id}-pattern`}
          patternUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <image
            href={src}
            width={VIEWBOX}
            height={VIEWBOX}
            preserveAspectRatio="xMidYMid slice"
          />
        </pattern>

        <linearGradient id={`${id}-gradient`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D9107F" />
          <stop offset="29.33%" stopColor="#EE1E03" />
          <stop offset="57.21%" stopColor="#F61785" />
          <stop offset="100%" stopColor="#FC7C20" />
        </linearGradient>
      </defs>

      <path
        d={PATH}
        fill={`url(#${id}-pattern)`}
        stroke={`url(#${id}-gradient)`}
        strokeWidth={strokeWidth}
      >
        <title>{alt}</title>
      </path>
    </svg>
  );
}
