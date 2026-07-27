"use client";

import { useId } from "react";

interface SquircleAvatarProps {
  src: string;
  alt: string;

  size?: number;
  strokeWidth?: number;

  className?: string;
}

export default function SquircleAvatar4({
  src,
  alt,

  size = 14,
  strokeWidth = 1,

  className = "",
}: SquircleAvatarProps) {
  const id = useId();

  const VIEWBOX = 15;

  const PATH =
    "M0.5 7.5C0.5 1.9 1.9 0.5 7.5 0.5C13.1 0.5 14.5 1.9 14.5 7.5C14.5 13.1 13.1 14.5 7.5 14.5C1.9 14.5 0.5 13.1 0.5 7.5Z";

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
      </defs>

      <path
        d={PATH}
        fill={`url(#${id}-pattern)`}
        stroke="rgba(255,255,255,0.15)"
        strokeWidth={strokeWidth}
      >
        <title>{alt}</title>
      </path>
    </svg>
  );
}
