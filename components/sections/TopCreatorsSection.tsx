"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import TopCreatorSlide from "@/components/cards/creator/TopCreatorSlide";

import { topCreators } from "@/data/topCreators";
import { Button } from "../ui/button";
import WheelGesturesPlugin from "embla-carousel-wheel-gestures";
import SectionHeader from "../common/SectionHeader";
import { useEffect, useState } from "react";

export default function TopCreatorsSection() {
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
        subtitle="The hottest right now"
        title="Top 10 Creators This Week"
        showControls
        onPrev={() => emblaApi?.scrollPrev()}
        onNext={() => emblaApi?.scrollNext()}
        canScrollPrev={canScrollPrev}
        canScrollNext={canScrollNext}
      />

      {/* Carousel */}
      <div className="">
        <div ref={emblaRef} className="select-none">
          <div className="flex gap-8">
            {topCreators.map((creator, index) => (
              <TopCreatorSlide
                key={creator.id}
                rank={creator.rank}
                image={creator.image}
                badge={creator.badge}
                badgeIcon={creator.badgeIcon}
                name={creator.name}
                description={creator.description}
                isFirst={index === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
