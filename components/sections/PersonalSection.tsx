"use client";

import Image from "next/image";

import PersonalCard from "@/components/cards/personal/PersonalCard";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { useEffect, useState } from "react";

import { personalCreators } from "@/data/personal";
import { Button } from "../ui/button";
import SectionHeader from "../common/SectionHeader";

export default function PersonalSection() {
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
    <section className="mt-24 px-8 pb-2 overflow-hidden">
      {/* Header */}
      <SectionHeader
        title="Order something personal"
        showControls
        onPrev={() => emblaApi?.scrollPrev()}
        onNext={() => emblaApi?.scrollNext()}
        canScrollPrev={canScrollPrev}
        canScrollNext={canScrollNext}
      />

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
