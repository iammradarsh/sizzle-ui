"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";

import ReelCard from "@/components/cards/reel/ReelCard";

import { certifiedReels } from "@/data/certified";

import { Button } from "../ui/button";
import WheelGesturesPlugin from "embla-carousel-wheel-gestures";
import SectionHeader from "../common/SectionHeader";

export default function CertifiedSection() {
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
    <section className="mt-24 px-8 overflow-hidden">
      {/* Header */}
      <SectionHeader
        subtitle="Sizzle+ Certified"
        title="More Creators Worth Knowing"
        showControls
        onPrev={() => emblaApi?.scrollPrev()}
        onNext={() => emblaApi?.scrollNext()}
        canScrollPrev={canScrollPrev}
        canScrollNext={canScrollNext}
      />

      {/* Cards */}
      <div ref={emblaRef} className="select-none">
        <div className="flex gap-2">
          {certifiedReels.map((item) => (
            <ReelCard key={item.id} {...item} showCertified />
          ))}
        </div>
      </div>
    </section>
  );
}
