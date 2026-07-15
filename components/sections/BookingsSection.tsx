"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

import BookingSlide from "@/components/cards/booking/BookingSlide";

import { bookings } from "@/data/bookings";
import { Button } from "../ui/button";

export default function BookingsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
  });

  return (
    <section className="mt-24 px-8 overflow-hidden">
      {/* Header */}
      <div className="mb-10 flex items-center justify-between">
        <div>
          <p className="text-sm text-[#8A8A8A]">Top rated this week</p>

          <div className="mt-1 flex items-center gap-2">
            <h2 className="font-neue-semibold text-xl text-white">
              The 10 Everyone's Booking
            </h2>

            <Image
              src="/images/icons/arrow-right.svg"
              alt=""
              width={22}
              height={22}
            />
          </div>
        </div>

        {/* Arrows */}
        <div className="flex items-center gap-2">
          <Button
            size="icon"
            variant="secondary"
            onClick={() => emblaApi?.scrollPrev()}
          >
            <Image
              src="/images/icons/chevron-left.svg"
              alt="Previous"
              width={14}
              height={14}
            />
          </Button>

          <Button
            size="icon"
            variant="secondary"
            onClick={() => emblaApi?.scrollNext()}
          >
            <Image
              src="/images/icons/chevron-right.svg"
              alt="Next"
              width={14}
              height={14}
            />
          </Button>
        </div>
      </div>

      {/* Carousel */}
      <div className="">
        <div ref={emblaRef} className="">
          <div className="flex gap-2">
            {bookings.map((item) => (
              <BookingSlide key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
