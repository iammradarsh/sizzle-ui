"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

import ReelCard from "@/components/cards/reel/ReelCard";

import { reels } from "@/data/reels";
import Image from "next/image";

import SectionHeader from "@/components/common/SectionHeader";

export default function ReelsSection() {
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
    <section className="mt-20 px-8 overflow-hidden">
      <SectionHeader
        subtitle="Based on your memberships"
        title="Creators for you"
        showControls
        onPrev={() => emblaApi?.scrollPrev()}
        onNext={() => emblaApi?.scrollNext()}
        canScrollPrev={canScrollPrev}
        canScrollNext={canScrollNext}
      />

      <div ref={emblaRef} className="select-none">
        <div className="flex gap-2">
          {reels.map((reel) => (
            <ReelCard key={reel.id} {...reel} />
          ))}
        </div>
      </div>
    </section>
  );
}
