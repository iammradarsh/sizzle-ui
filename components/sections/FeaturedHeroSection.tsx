"use client";

import Image from "next/image";
import { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";

import FeaturedHero from "@/components/cards/featured/FeaturedHero";
import FeaturedCard from "@/components/cards/featured/FeaturedCard";

import type { FeaturedHeroData } from "@/data/featuredHeroes";
import WheelGesturesPlugin from "embla-carousel-wheel-gestures";
import SectionHeader from "../common/SectionHeader";

interface Props {
  hero: FeaturedHeroData;
}

export default function FeaturedHeroSection({ hero }: Props) {
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
    <section className="relative mt-24 h-[760px] overflow-hidden ">
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
      <div className="relative flex h-full items-center justify-between pl-8">
        {/* Left */}
        <FeaturedHero
          logo={hero.creatorLogo}
          name={hero.title}
          bio={hero.description}
        />

        {/* Right */}
        <div className="w-[700px]">
          {/* Header */}
          <div className="px-8">
            <SectionHeader
              showControls
              hideTitle
              onPrev={() => emblaApi?.scrollPrev()}
              onNext={() => emblaApi?.scrollNext()}
              canScrollPrev={canScrollPrev}
              canScrollNext={canScrollNext}
            />
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
