"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

import CreatorHighlightCard from "@/components/cards/creator-highlight/CreatorHighlightCard";

import { creatorHighlights } from "@/data/creatorHighlights";
import WheelGesturesPlugin from "embla-carousel-wheel-gestures";
import SectionHeader from "../common/SectionHeader";

export default function CreatorHighlightsSection() {
  const wheelGestures = WheelGesturesPlugin();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      dragFree: true,
    },
    [wheelGestures],
  );

  useEffect(() => {
    if (!emblaApi) return;

    const updateButtons = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    updateButtons();

    emblaApi.on("select", updateButtons);
    emblaApi.on("reInit", updateButtons);

    return () => {
      emblaApi.off("select", updateButtons);
      emblaApi.off("reInit", updateButtons);
    };
  }, [emblaApi]);

  return (
    <section className="mt-24 px-8 select-none overflow-hidden">
      {/* Header */}
      <SectionHeader
        // subtitle="Sizzle+ Certified"
        title="Creator highlights"
        showControls
        onPrev={() => emblaApi?.scrollPrev()}
        onNext={() => emblaApi?.scrollNext()}
        canScrollPrev={canScrollPrev}
        canScrollNext={canScrollNext}
      />

      {/* Carousel */}
      <div ref={emblaRef} className="select-none">
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
