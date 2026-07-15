"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

import SuggestedCreatorCard from "@/components/cards/creator/SuggestedCreatorCard";

import { featuredCreators } from "@/data/featuredCreators";

import { Button } from "../ui/button";

export default function FeaturedCreatorsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
  });

  return (
    <section className="mt-24 px-8 pb-2 overflow-hidden">
      <div className="mb-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-neue-semibold text-white">
            Featured creators this week
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

      <div ref={emblaRef} className="select-none">
        <div className="flex gap-8">
          {featuredCreators.map((creator) => (
            <SuggestedCreatorCard key={creator.id} {...creator} />
          ))}
        </div>
      </div>
    </section>
  );
}
