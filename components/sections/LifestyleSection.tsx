"use client";

import useEmblaCarousel from "embla-carousel-react";

import { Button } from "@/components/ui/button";

import ReelCard from "@/components/cards/reel/ReelCard";

import { lifestyleReels } from "@/data/lifestyleReels";
import Image from "next/image";

export default function LifestyleSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
  });

  return (
    <section className="mt-20 px-8 select-none">
      <p className="mb-2 text-sm text-[#8A8A8A]">You know what you like</p>

      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="font-neue-semibold text-xl text-white">
            More from #Lifestyle
          </h2>

          <Image
            src="/images/icons/arrow-right.svg"
            alt=""
            width={18}
            height={18}
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

      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex gap-6">
          {lifestyleReels.map((reel) => (
            <ReelCard key={reel.id} {...reel} />
          ))}
        </div>
      </div>
    </section>
  );
}
