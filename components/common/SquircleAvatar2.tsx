"use client";

import Image from "next/image";
import { useId } from "react";

interface SquircleAvatarProps {
  src: string;
  alt: string;

  avatarSize?: number;
  borderSize?: number;
  borderWidth?: number;

  borderVariant?: "solid" | "gradient";
  borderColor?: string;

  className?: string;
}

export default function SquircleAvatar2({
  src,
  alt,

  avatarSize = 48,
  borderSize = 52,
  borderWidth = 1,

  borderVariant = "solid",
  borderColor = "rgba(255,255,255,.15)",

  className = "",
}: SquircleAvatarProps) {
  const id = useId();

  const viewBox = 201;

  const outerScale = borderSize / viewBox;

  const innerSize = borderSize - borderWidth * 2;
  const innerScale = innerSize / viewBox;

  const PATH =
    "M0.5 100.5C0.5 20.5 20.5 0.5 100.5 0.5C180.5 0.5 200.5 20.5 200.5 100.5C200.5 180.5 180.5 200.5 100.5 200.5C20.5 200.5 0.5 180.5 0.5 100.5Z";

  return (
    <div
      className={className}
      style={{
        width: borderSize,
        height: borderSize,
        flexShrink: 0,
      }}
    >
      <svg
        width={borderSize}
        height={borderSize}
        viewBox={`0 0 ${borderSize} ${borderSize}`}
      >
        <defs>
          <clipPath id={`${id}-clip`}>
            <path
              d={PATH}
              transform={`translate(${borderWidth} ${borderWidth}) scale(${innerScale})`}
            />
          </clipPath>

          <linearGradient
            id={`${id}-gradient`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#D9107F" />
            <stop offset="29.33%" stopColor="#EE1E03" />
            <stop offset="57.21%" stopColor="#F61785" />
            <stop offset="100%" stopColor="#FC7C20" />
          </linearGradient>
        </defs>

        {/* Border */}
        <path
          d={PATH}
          transform={`scale(${outerScale})`}
          fill={
            borderVariant === "gradient" ? `url(#${id}-gradient)` : borderColor
          }
        />

        {/* Image */}
        <foreignObject
          x={borderWidth}
          y={borderWidth}
          width={innerSize}
          height={innerSize}
          clipPath={`url(#${id}-clip)`}
        >
          <Image
            src={src}
            alt={alt}
            width={avatarSize}
            height={avatarSize}
            quality={100}
            className="h-full w-full object-cover"
          />
        </foreignObject>

        {/* Border Stroke */}
        <path
          d={PATH}
          transform={`scale(${outerScale})`}
          fill="none"
          stroke="rgba(255,255,255,.15)"
          strokeWidth={1}
        />
      </svg>
    </div>
  );
}
