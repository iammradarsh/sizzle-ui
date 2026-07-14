"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

import ReviewCard from "@/components/cards/review/ReviewCard";
// import { SectionHeader } from "@/components/common/SectionHeader";

import { buyerReviews } from "@/data/buyerReviews";
import { Button } from "../ui/button";

export default function BuyerReviewsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
  });

  return (
    <section className="mt-24 px-8">
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
          />
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
      <div ref={emblaRef} className="overflow-hidden">
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
