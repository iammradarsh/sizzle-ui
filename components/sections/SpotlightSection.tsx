"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

import { Button } from "@/components/ui/button";
import SpotlightCard from "@/components/cards/spotlight/SpotlightCard";

import { spotlight } from "@/data/spotlight";

export default function SpotlightSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
  });

  return (
    <section className="mt-20 px-8 select-none overflow-hidden">
      {/* Subtitle */}

      <p className="text-zinc-400 text-sm">Sizzle+ Certified</p>

      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="font-neue-semibold text-xl text-white">
            Creators who earned the spotlight
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

      {/* Carousel */}
      <div ref={emblaRef} className="">
        <div className="flex gap-6">
          {spotlight.map((creator) => (
            <SpotlightCard
              key={creator.id}
              image={creator.image}
              frame={creator.frame}
              overlayGradient={creator.overlayGradient}
              badge={creator.badge}
              badgeIcon={creator.badgeIcon}
              name={creator.name}
              description={creator.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
