"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";

import SuggestedCreatorCard from "@/components/cards/creator/SuggestedCreatorCard";

import { suggestedCreators } from "@/data/suggestedCreators";
import { Button } from "../ui/button";
import WheelGesturesPlugin from "embla-carousel-wheel-gestures";
import SectionHeader from "../common/SectionHeader";

export default function SuggestedCreatorsSection() {
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
        image="/images/avatars/suggested.png"
        imageAlt="suggested avatar"
        subtitle="You clearly have taste"
        title="More like Mila Ferreira"
        showControls
        onPrev={() => emblaApi?.scrollPrev()}
        onNext={() => emblaApi?.scrollNext()}
        canScrollPrev={canScrollPrev}
        canScrollNext={canScrollNext}
      />

      <div ref={emblaRef} className="select-none">
        <div className="flex gap-8">
          {suggestedCreators.map((creator) => (
            <SuggestedCreatorCard key={creator.id} {...creator} />
          ))}
        </div>
      </div>
    </section>
  );
}
