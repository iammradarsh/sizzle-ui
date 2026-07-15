"use client";

import Image from "next/image";
import { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";

import ReelCard from "@/components/cards/reel/ReelCard";

import { topEarning } from "@/data/topEarning";
import { Button } from "../ui/button";

export default function TopEarningSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
  });
  const sliderRef = useRef<HTMLDivElement>(null);

  function scrollLeft() {
    sliderRef.current?.scrollBy({
      left: -340,
      behavior: "smooth",
    });
  }

  function scrollRight() {
    sliderRef.current?.scrollBy({
      left: 340,
      behavior: "smooth",
    });
  }
  return (
    <section className="mt-24 px-8 overflow-hidden">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="font-neue-semibold text-xl text-white">
            Top 10 Earning Videos This Week
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
          <Button
            size="icon"
            variant="secondary"
            onClick={() => emblaApi?.scrollPrev()}
          >
            <Image
              src="/images/icons/chevron-left.svg"
              alt="Previous"
              width={14}
              height={14}
            />
          </Button>

          <Button
            size="icon"
            variant="secondary"
            onClick={() => emblaApi?.scrollNext()}
          >
            <Image
              src="/images/icons/chevron-right.svg"
              alt="Next"
              width={14}
              height={14}
            />
          </Button>
        </div>
      </div>

      {/* Cards */}
      <div ref={emblaRef} className="select-none">
        <div className="flex gap-9">
          {topEarning.map((item) => (
            <ReelCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
