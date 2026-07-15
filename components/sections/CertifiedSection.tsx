"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

import ReelCard from "@/components/cards/reel/ReelCard";

import { certifiedReels } from "@/data/certified";

import { Button } from "../ui/button";
import WheelGesturesPlugin from "embla-carousel-wheel-gestures";

export default function CertifiedSection() {
  const wheelGestures = WheelGesturesPlugin();

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      dragFree: true,
    },
    [wheelGestures],
  );

  return (
    <section className="mt-24 px-8 overflow-hidden">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div className="flex flex-col">
          <p className="text-sm text-[#8A8A8A]">Sizzle+ Certified</p>
          <div className="mt-1 flex items-center gap-2">
            <h2 className="font-neue-semibold text-xl text-white">
              More Creators Worth Knowing
            </h2>

            <Image
              src="/images/icons/arrow-right.svg"
              alt=""
              width={18}
              height={18}
              className="mt-1.5"
            />
          </div>
        </div>

        {/* Arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-sm
            bg-[#19191B]
            transition-all
            duration-200
            hover:bg-[#3C3C3E]
            active:scale-95
          "
          >
            <Image
              src="/images/icons/chevron-left.svg"
              alt="Previous"
              width={14}
              height={14}
              className="opacity-80 transition-opacity duration-200 group-hover:opacity-100"
            />
          </button>

          <button
            onClick={() => emblaApi?.scrollNext()}
            className="
            group
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-sm
            bg-[#19191B]
            transition-all
            duration-200
            hover:bg-[#3C3C3E]
            active:scale-95
          "
          >
            <Image
              src="/images/icons/chevron-right.svg"
              alt="Next"
              width={14}
              height={14}
              className="opacity-80 transition-opacity duration-200 group-hover:opacity-100"
            />
          </button>
        </div>
      </div>

      {/* Cards */}
      <div ref={emblaRef} className="select-none">
        <div className="flex gap-9">
          {certifiedReels.map((item) => (
            <ReelCard
              key={item.id}
              //   mediaType={item.mediaType}
              //   images={item.images}
              //   imageCount={item.imageCount}
              //   creatorLogo={item.creatorLogo}
              //   avatar={item.avatar}
              //   title={item.title}
              //   creator={item.creator}
              //   duration={item.duration}
              //   category={item.category}
              //   views={item.views}
              //   time={item.time}
              //   badge={item.badge}
              //   locked={item.locked}
              //   likes={item.likes}
              //   comments={item.comments}
              {...item}
              showCertified
            />
          ))}
        </div>
      </div>
    </section>
  );
}
