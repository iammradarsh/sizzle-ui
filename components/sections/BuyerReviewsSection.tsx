"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

import ReviewCard from "@/components/cards/review/ReviewCard";
// import { SectionHeader } from "@/components/common/SectionHeader";

import { buyerReviews } from "@/data/buyerReviews";
import { Button } from "../ui/button";
import WheelGesturesPlugin from "embla-carousel-wheel-gestures";

export default function BuyerReviewsSection() {
  const wheelGestures = WheelGesturesPlugin();

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      dragFree: true,
    },
    [wheelGestures],
  );

  return (
    <section className="mt-24 px-8 overflow-hidden">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="font-neue-semibold text-xl text-white">
            Straight from verified buyers
          </h2>

          <Image
            src="/images/icons/arrow-right.svg"
            alt=""
            width={18}
            height={18}
            className="mt-1.5"
          />
        </div>

        {/* Arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-sm
            bg-[#19191B]
            transition-all
            duration-200
            hover:bg-[#3C3C3E]
            active:scale-95
          "
          >
            <Image
              src="/images/icons/chevron-left.svg"
              alt="Previous"
              width={14}
              height={14}
              className="opacity-80 transition-opacity duration-200 group-hover:opacity-100"
            />
          </button>

          <button
            onClick={() => emblaApi?.scrollNext()}
            className="
            group
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-sm
            bg-[#19191B]
            transition-all
            duration-200
            hover:bg-[#3C3C3E]
            active:scale-95
          "
          >
            <Image
              src="/images/icons/chevron-right.svg"
              alt="Next"
              width={14}
              height={14}
              className="opacity-80 transition-opacity duration-200 group-hover:opacity-100"
            />
          </button>
        </div>
      </div>

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
