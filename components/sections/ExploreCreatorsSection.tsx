"use client";

import Image from "next/image";
import { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

import CategoryChip from "@/components/cards/category/CategoryChip";
import CreatorListCard from "@/components/cards/creator/CreatorListCard";

import { creatorCategories, exploreCreators } from "@/data/exploreCreators";
import WheelGesturesPlugin from "embla-carousel-wheel-gestures";
import SectionHeader from "../common/SectionHeader";

export default function ExploreCreatorsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const wheelGestures = WheelGesturesPlugin();

  const filteredCreators =
    selectedCategory === "All"
      ? exploreCreators
      : exploreCreators.filter(
          (creator) => creator.category === selectedCategory,
        );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      dragFree: true,
    },
    [wheelGestures],
  );

  return (
    <section className="mt-24 overflow-hidden">
      {/* Header */}
      <div className="px-8">
        <SectionHeader
          subtitle="Explore by category"
          title="More Creators Worth Knowing"
          // showControls
          onPrev={() => emblaApi?.scrollPrev()}
          onNext={() => emblaApi?.scrollNext()}
        />
      </div>

      {/* Categories */}
      <div className="mb-12 px-8 select-none" ref={emblaRef}>
        <div className="flex gap-3">
          {creatorCategories.map((category) => (
            <CategoryChip
              key={category}
              label={category}
              active={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
            />
          ))}
        </div>
      </div>

      {/* Creator Grid */}
      <div className="flex flex-wrap w-full ml-2">
        {filteredCreators.map((creator) => (
          <CreatorListCard
            key={creator.id}
            avatar={creator.avatar}
            name={creator.name}
            description={creator.description}
            highlight={creator.highlight}
          />
        ))}
      </div>
    </section>
  );
}
