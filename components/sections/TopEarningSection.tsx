"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";

import useEmblaCarousel from "embla-carousel-react";

import ReelCard from "@/components/cards/reel/ReelCard";

import { topEarning } from "@/data/topEarning";
import { Button } from "../ui/button";
import WheelGesturesPlugin from "embla-carousel-wheel-gestures";
import SectionHeader from "../common/SectionHeader";

export default function TopEarningSection() {
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
  const sliderRef = useRef<HTMLDivElement>(null);

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
    <section className="mt-24 px-8 overflow-hidden">
      {/* Header */}

      <SectionHeader
        title="Top 10 Earning Videos This Week"
        showControls
        onPrev={() => emblaApi?.scrollPrev()}
        onNext={() => emblaApi?.scrollNext()}
        canScrollPrev={canScrollPrev}
        canScrollNext={canScrollNext}
      />

      {/* Cards */}
      <div ref={emblaRef} className="select-none">
        <div className="flex gap-2">
          {topEarning.map((item) => (
            <ReelCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
