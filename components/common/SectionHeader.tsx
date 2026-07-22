"use client";

import Image from "next/image";
import { getSvgPath } from "figma-squircle";

interface SectionHeaderProps {
  title?: string;
  subtitle?: string;

  image?: string;
  imageAlt?: string;

  showTitleArrow?: boolean;
  showControls?: boolean;
  hideTitle?: boolean;

  onPrev?: () => void;
  onNext?: () => void;

  canScrollPrev?: boolean;
  canScrollNext?: boolean;
}

export default function SectionHeader({
  title,
  subtitle,
  image,
  imageAlt,
  showTitleArrow = true,
  showControls = false,
  onPrev,
  onNext,
  canScrollPrev = false,
  canScrollNext = false,
  hideTitle = false,
}: SectionHeaderProps) {
  const borderSize = 52;
  const avatarSize = 48;

  const outerPath = getSvgPath({
    width: borderSize,
    height: borderSize,
    cornerRadius: 18,
    cornerSmoothing: 1,
  });

  const innerPath = getSvgPath({
    width: avatarSize,
    height: avatarSize,
    cornerRadius: 16,
    cornerSmoothing: 1,
  });

  return (
    <>
      <div
        className={`mb-8 flex items-center ${
          hideTitle ? "justify-end" : "justify-between"
        }`}
      >
        {!hideTitle && (
          <div className="flex items-center gap-3">
            {image && (
              <div
                style={{
                  width: borderSize,
                  height: borderSize,
                  background: "#3C3C3E", // Border color
                  padding: 2,
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
                    src={image}
                    alt={imageAlt ?? ""}
                    width={avatarSize}
                    height={avatarSize}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            )}

            <div>
              {subtitle && (
                <p className="mb-1 font-neue-regular text-sm text-zinc-400">
                  {subtitle}
                </p>
              )}

              <div className="flex items-center gap-[2px]">
                <h2 className="font-neue-semibold text-2xl text-white">
                  {title}
                </h2>

                {showTitleArrow && (
                  <Image
                    src="/images/icons/arrow-right.svg"
                    alt=""
                    width={18}
                    height={18}
                    className="mt-1"
                  />
                )}
              </div>
            </div>
          </div>
        )}

        {showControls && (
          <div className="flex items-center gap-1.5">
            <button
              onClick={onPrev}
              disabled={!canScrollPrev}
              className={`
    flex h-8 w-8 items-center justify-center rounded-[12px]
    transition-colors duration-200
    ${
      canScrollPrev
        ? "bg-[#303032] hover:bg-[#3C3C3E]"
        : "cursor-not-allowed bg-[#19191B] hover:bg-[#28282A]"
    }
  `}
            >
              <Image
                src="/images/icons/chevron-left.svg"
                alt="Previous"
                width={18}
                height={18}
                className={canScrollPrev ? "opacity-100" : "opacity-40"}
              />
            </button>

            <button
              onClick={onNext}
              disabled={!canScrollNext}
              className={`
    flex h-8 w-8 items-center justify-center rounded-[12px]
    transition-colors duration-200
    ${
      canScrollNext
        ? "bg-[#303032] hover:bg-[#3C3C3E]"
        : "cursor-not-allowed bg-[#19191B] hover:bg-[#28282A]"
    }
  `}
            >
              <Image
                src="/images/icons/chevron-right.svg"
                alt="Next"
                width={18}
                height={18}
                className={canScrollNext ? "opacity-100" : "opacity-40"}
              />
            </button>
          </div>
        )}
      </div>
    </>
  );
}
