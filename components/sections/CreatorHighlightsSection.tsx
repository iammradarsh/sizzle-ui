"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

import { Button } from "@/components/ui/button";

import CreatorHighlightCard from "@/components/cards/creator-highlight/CreatorHighlightCard";

import { creatorHighlights } from "@/data/creatorHighlights";

export default function CreatorHighlightsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
  });

  return (
    <section className="mt-24 px-8">
      {/* Subtitle */}
      <p className="text-sm text-[#8A8A8A]">Discover more creators</p>

      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="font-neue-semibold text-xl text-white">
            Rising creators you'll love
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

      {/* Carousel */}
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex gap-6">
          {creatorHighlights.map((item) => (
            <CreatorHighlightCard
              key={item.id}
              avatar={item.avatar}
              name={item.name}
              views={item.views}
              videos={item.videos}
              likes={item.likes}
              following={item.following}
              images={item.images}
              viewIcon={item.viewIcon}
              videoIcon={item.videoIcon}
              likeIcon={item.likeIcon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
