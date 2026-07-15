"use client";

import Image from "next/image";

import PersonalCard from "@/components/cards/personal/PersonalCard";
import useEmblaCarousel from "embla-carousel-react";

import { personalCreators } from "@/data/personal";
import { Button } from "../ui/button";

export default function PersonalSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
  });

  return (
    <section className="mt-24 px-8 overflow-hidden">
      {/* Header */}
      <div className="mb-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="font-neue-semibold text-xl text-white">
            Order something personal
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
          {personalCreators.map((creator) => (
            <PersonalCard
              key={creator.id}
              image={creator.image}
              name={creator.name}
              rating={creator.rating}
              reviews={creator.reviews}
              responseTime={creator.responseTime}
              services={creator.services}
              more={creator.more}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
