"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";

import BookingSlide from "@/components/cards/booking/BookingSlide";

import { bookings } from "@/data/bookings";
import { Button } from "../ui/button";
import WheelGesturesPlugin from "embla-carousel-wheel-gestures";
import SectionHeader from "../common/SectionHeader";
import BookingCard from "../cards/booking/BookingCard";

export default function BookingsSection() {
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
        subtitle="Top rated this week"
        title="The 10 Everyone's Booking"
        showControls
        onPrev={() => emblaApi?.scrollPrev()}
        onNext={() => emblaApi?.scrollNext()}
        canScrollPrev={canScrollPrev}
        canScrollNext={canScrollNext}
      />

      {/* Carousel */}
      <div className="">
        <div ref={emblaRef} className="">
          <div className="flex gap-1">
            {bookings.map((item, index) => (
              <BookingCard key={item.id} {...item} isFirst={index === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
