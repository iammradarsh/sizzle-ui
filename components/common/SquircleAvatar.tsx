"use client";

import Image from "next/image";
import { getSvgPath } from "figma-squircle";

interface SquircleAvatarProps {
  src: string;
  alt: string;

  avatarSize?: number;
  borderSize?: number;

  borderWidth?: number;

  borderVariant?: "solid" | "gradient";
  borderColor?: string;
  gradient?: string;

  cornerRadius?: number;
  cornerSmoothing?: number;

  className?: string;
}

export default function SquircleAvatar({
  src,
  alt,
  avatarSize = 48,
  borderSize = 52,
  borderWidth = 2,

  borderVariant = "solid",
  borderColor = "#FFFFFF26",
  gradient = "linear-gradient(90deg, #D9107F 0%, #EE1E03 29.33%, #F61785 57.21%, #FC7C20 100%)",

  cornerRadius = 0.35,
  cornerSmoothing = 1,

  className = "",
}: SquircleAvatarProps) {
  const outerPath = getSvgPath({
    width: borderSize,
    height: borderSize,
    cornerRadius: borderSize * cornerRadius,
    cornerSmoothing,
  });

  const innerPath = getSvgPath({
    width: avatarSize,
    height: avatarSize,
    cornerRadius: avatarSize * cornerRadius,
    cornerSmoothing,
  });

  const background = borderVariant === "gradient" ? gradient : borderColor;

  return (
    <div
      className={className}
      style={{
        width: borderSize,
        height: borderSize,
        padding: borderWidth,
        background,
        clipPath: `path("${outerPath}")`,
        flexShrink: 0,
      }}
    >
      <div
        style={{
          width: avatarSize,
          height: avatarSize,
          clipPath: `path("${innerPath}")`,
          overflow: "hidden",
        }}
      >
        <Image
          src={src}
          alt={alt}
          quality={100}
          unoptimized
          width={avatarSize}
          height={avatarSize}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
