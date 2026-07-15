"use client";

import { useCallback } from "react";

import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

import CategoryCard from "@/components/cards/category/CategoryCard";

import { categories } from "@/data/categories";
import Image from "next/image";

export default function CategoriesSection() {
  const wheelGestures = WheelGesturesPlugin();

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      dragFree: true,
    },
    [wheelGestures],
  );

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <section className="mt-20 px-8 overflow-hidden">
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="font-neue-semibold text-xl text-white">
            Top categories right now
          </h2>

          <Image
            src="/images/icons/arrow-right.svg"
            alt="Arrow right"
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

      <div className=" select-none" ref={emblaRef}>
        <div className="flex gap-5">
          {categories.map((category) => (
            <CategoryCard key={category.id} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}
