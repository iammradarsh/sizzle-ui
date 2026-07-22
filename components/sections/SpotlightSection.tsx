"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import SpotlightCard from "@/components/cards/spotlight/SpotlightCard";

import { spotlight } from "@/data/spotlight";
import WheelGesturesPlugin from "embla-carousel-wheel-gestures";
import SectionHeader from "../common/SectionHeader";

export default function SpotlightSection() {
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
    <section className="mt-20 px-8 select-none overflow-hidden">
      {/* Header */}
      <SectionHeader
        subtitle="Sizzle+ Certified"
        title="Creators who earned the spotlight"
        showControls
        onPrev={() => emblaApi?.scrollPrev()}
        onNext={() => emblaApi?.scrollNext()}
        canScrollPrev={canScrollPrev}
        canScrollNext={canScrollNext}
      />

      {/* Carousel */}
      <div ref={emblaRef} className="">
        <div className="flex gap-6">
          {spotlight.map((creator) => (
            <SpotlightCard
              key={creator.id}
              image={creator.image}
              frame={creator.frame}
              overlayGradient={creator.overlayGradient}
              badgeType={creator.badgeType}
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
