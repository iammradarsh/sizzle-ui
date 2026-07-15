"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

import SuggestedCreatorCard from "@/components/cards/creator/SuggestedCreatorCard";

import { suggestedCreators } from "@/data/suggestedCreators";
import { Button } from "../ui/button";
import WheelGesturesPlugin from "embla-carousel-wheel-gestures";

export default function SuggestedCreatorsSection() {
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
      <div className="mb-10 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/images/avatars/suggested.png"
            alt=""
            width={50}
            height={50}
            className="rounded-sm"
          />

          <div>
            <p className="text-sm text-[#8A8A8A]">You clearly have taste</p>

            <div className="flex items-center gap-2">
              <h2 className="text-xl font-neue-semibold text-white">
                More like Mila Ferreira
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
          {suggestedCreators.map((creator) => (
            <SuggestedCreatorCard key={creator.id} {...creator} />
          ))}
        </div>
      </div>
    </section>
  );
}
