"use client";

import Image from "next/image";
import { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";

import FeaturedHero from "@/components/cards/featured/FeaturedHero";
import FeaturedCard from "@/components/cards/featured/FeaturedCard";

import type { FeaturedHeroData } from "@/data/featuredHeroes";

interface Props {
  hero: FeaturedHeroData;
}

export default function FeaturedHeroSection({ hero }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
  });

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section className="relative mt-24 h-[760px] overflow-hidden">
      {/* Background */}
      <Image
        src={hero.background}
        alt={hero.title}
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative flex h-full items-center justify-between pl-20">
        {/* Left */}
        <FeaturedHero
          logo={hero.creatorLogo}
          name={hero.title}
          bio={hero.description}
        />

        {/* Right */}
        <div className="w-[700px]">
          {/* Header */}
          <div className="mb-8 flex justify-end gap-3 pr-20">
            <button
              onClick={scrollPrev}
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-md
                bg-white/10
                backdrop-blur-md
                transition
                hover:bg-white/20
              "
            >
              <Image
                src="/images/icons/chevron-left.svg"
                alt="Previous"
                width={14}
                height={14}
              />
            </button>

            <button
              onClick={scrollNext}
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-md
                bg-white/10
                backdrop-blur-md
                transition
                hover:bg-white/20
              "
            >
              <Image
                src="/images/icons/chevron-right.svg"
                alt="Next"
                width={14}
                height={14}
              />
            </button>
          </div>

          {/* Carousel */}
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex gap-6">
              {hero.reels.map((reel) => (
                <FeaturedCard
                  key={reel.id}
                  image={reel.images[0]}
                  creatorLogo={reel.creatorLogo}
                  avatar={reel.avatar}
                  title={reel.title}
                  creator={reel.creator}
                  duration={reel.duration ?? ""}
                  category={reel.category}
                  views={reel.views}
                  time={reel.time}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
