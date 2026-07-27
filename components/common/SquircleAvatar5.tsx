"use client";

import { useId } from "react";

interface SquircleAvatarProps {
  src: string;
  alt: string;

  size?: number;
  strokeWidth?: number;

  className?: string;
}

export default function SquircleAvatar5({
  src,
  alt,

  size = 60,
  strokeWidth = 1,

  className = "",
}: SquircleAvatarProps) {
  const id = useId();

  const VIEWBOX = 61;

  const PATH =
    "M0.5 30.5C0.5 6.5 6.5 0.5 30.5 0.5C54.5 0.5 60.5 6.5 60.5 30.5C60.5 54.5 54.5 60.5 30.5 60.5C6.5 60.5 0.5 54.5 0.5 30.5Z";

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
          patternUnits="userSpaceOnUse"
          width={VIEWBOX}
          height={VIEWBOX}
        >
          <image
            href={src}
            x={-19.001}
            y={-6.494}
            width={VIEWBOX * 1.63336}
            height={VIEWBOX * 2.04157}
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
