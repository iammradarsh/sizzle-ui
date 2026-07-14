"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

import SuggestedCreatorCard from "@/components/cards/creator/SuggestedCreatorCard";

import { suggestedCreators } from "@/data/suggestedCreators";
import { Button } from "../ui/button";

export default function SuggestedCreatorsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
  });

  return (
    <section className="mt-24 px-8">
      <div className="mb-10 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/images/avatars/suggested.png"
            alt=""
            width={54}
            height={54}
            className="rounded-sm"
          />

          <div>
            <p className="text-sm text-[#8A8A8A]">You clearly have taste</p>

            <div className="flex items-center gap-2">
              <h2 className="text-xl font-neue-semibold text-white">
                More like Mila Ferreira
              </h2>

              <Image
                src="/images/icons/arrow-right.svg"
                alt=""
                width={18}
                height={18}
              />
            </div>
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

      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex gap-8">
          {suggestedCreators.map((creator) => (
            <SuggestedCreatorCard key={creator.id} {...creator} />
          ))}
        </div>
      </div>
    </section>
  );
}
