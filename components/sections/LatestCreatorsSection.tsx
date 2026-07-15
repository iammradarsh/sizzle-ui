"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

import SuggestedCreatorCard from "@/components/cards/creator/SuggestedCreatorCard";

import { latestCreators } from "@/data/LatestCreators";
import { Button } from "../ui/button";
import WheelGesturesPlugin from "embla-carousel-wheel-gestures";

export default function LatestCreatorsSection() {
  const wheelGestures = WheelGesturesPlugin();

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      dragFree: true,
    },
    [wheelGestures],
  );

  return (
    <section className="mt-24 px-8 pb-2 overflow-hidden">
      <p className="text-zinc-400 text-sm">The latest creators</p>
      <div className="mb-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-neue-semibold text-white">
            Be the first to discover them
          </h2>

          <Image
            src="/images/icons/arrow-right.svg"
            alt=""
            width={18}
            height={18}
            className="mt-1.5"
          />
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

      <div ref={emblaRef} className="select-none">
        <div className="flex gap-8">
          {latestCreators.map((creator) => (
            <SuggestedCreatorCard
              key={creator.id}
              image={creator.image}
              name={creator.name}
              description={creator.description}
              following={creator.following}
              isNew={creator.isNew}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
