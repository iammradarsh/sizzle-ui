"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";

import ReviewCard from "@/components/cards/review/ReviewCard";
// import { SectionHeader } from "@/components/common/SectionHeader";

import { buyerReviews } from "@/data/buyerReviews";
import { Button } from "../ui/button";
import WheelGesturesPlugin from "embla-carousel-wheel-gestures";
import SectionHeader from "../common/SectionHeader";

export default function BuyerReviewsSection() {
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
        // subtitle="Sizzle+ Certified"
        title="Straight from verified buyers"
        showControls
        onPrev={() => emblaApi?.scrollPrev()}
        onNext={() => emblaApi?.scrollNext()}
        canScrollPrev={canScrollPrev}
        canScrollNext={canScrollNext}
      />

      {/* Carousel */}
      <div ref={emblaRef} className="select-none">
        <div className="flex gap-6">
          {buyerReviews.map((review) => (
            <ReviewCard
              key={review.id}
              avatar={review.avatar}
              name={review.name}
              username={review.username}
              time={review.time}
              rating={review.rating}
              review={review.review}
              creatorAvatar={review.creatorAvatar}
              tags={review.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
