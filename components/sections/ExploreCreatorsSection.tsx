"use client";

import Image from "next/image";
import { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

import CategoryChip from "@/components/cards/category/CategoryChip";
import CreatorListCard from "@/components/cards/creator/CreatorListCard";

import { creatorCategories, exploreCreators } from "@/data/exploreCreators";

export default function ExploreCreatorsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    dragFree: true,
  });

  return (
    <section className="mt-24 px-8 overflow-hidden">
      {/* Heading */}
      <div className="mb-10">
        <p className="text-sm text-[#8A8A8A]">Explore by category</p>

        <div className="mt-1 flex items-center gap-2">
          <h2 className="font-neue-semibold text-xl text-white">
            More Creators Worth Knowing
          </h2>

          <Image
            src="/images/icons/arrow-right.svg"
            alt=""
            width={20}
            height={20}
          />
        </div>
      </div>

      {/* Categories */}
      <div className="mb-12 select-none" ref={emblaRef}>
        <div className="flex gap-3">
          {creatorCategories.map((category) => (
            <CategoryChip
              key={category}
              label={category}
              active={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            />
          ))}
        </div>
      </div>

      {/* Creator Grid */}
      <div className="grid grid-cols-3 gap-x-4 gap-y-4">
        {exploreCreators.map((creator) => (
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
