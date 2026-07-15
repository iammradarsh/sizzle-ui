"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import TopCreatorSlide from "@/components/cards/creator/TopCreatorSlide";

import { topCreators } from "@/data/topCreators";
import { Button } from "../ui/button";

export default function TopCreatorsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
  });

  return (
    <section className="mt-24 px-8">
      {/* Header */}
      <div className="mb-10 flex items-center justify-between">
        <div>
          <p className="text-sm text-[#8A8A8A]">The hottest right now</p>

          <div className="mt-1 flex items-center gap-2">
            <h2 className="font-neue-semibold text-xl text-white">
              Top 10 Creators This Week
            </h2>

            <Image
              src="/images/icons/arrow-right.svg"
              alt=""
              width={22}
              height={22}
            />
          </div>
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

      {/* Carousel */}
      <div className="">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-4">
            {topCreators.map((creator) => (
              <TopCreatorSlide
                key={creator.id}
                rank={creator.rank}
                image={creator.image}
                badge={creator.badge}
                badgeIcon={creator.badgeIcon}
                name={creator.name}
                description={creator.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
