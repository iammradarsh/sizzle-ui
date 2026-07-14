"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import HeroCard, { type HeroCardProps } from "../cards/Hero/HeroCard";

const heroCards: HeroCardProps[] = [
  {
    image: "/images/HeroCardImg1.png",
    badge: "/images/badge/original.svg",
    movieLogo: "/images/movie-logo.png",

    statType: "creator",

    creatorStats: {
      views: 480,
      videos: 26,
      likes: 780,
    },

    category: "",
    title: "SAINT LAVIGNE",

    description:
      "Life got so serious lately, I have almost forgot I used to paint 😅",
    creator: "Saint Lavigne",
    creatorViews: "812 views",
    time: "2d",
  },
  {
    image: "/images/HeroCardImg2.png",
    badge: "/images/badge/top-earner.svg",
    movieLogo: undefined,

    statType: "movie",

    movieStats: {
      quality: "4K",
      duration: "6:03",
      tag: "#Beauty",
    },

    category: "CHUCKY",
    title: "ADELA MORALES",

    description: "Seems like you have found a LUCKY POST on your feed 💖",
    creator: "Adela Morales",
    creatorViews: "812 views",
    time: "2d",
  },
  {
    image: "/images/HeroCardImg2.png",
    badge: "/images/badge/original.svg",
    movieLogo: undefined,

    statType: "creator",

    creatorStats: {
      views: 480,
      videos: 26,
      likes: 780,
    },

    category: "CHUCKY",
    title: "ADELA",

    description: "Seems like you have found a LUCKY POST on your feed 💖",
    creator: "Adela Morales",
    creatorViews: "812 views",
    time: "2d",
  },
];

export default function HeroSection() {
  return (
    <section className="mt-8 overflow-hidden">
      <Carousel
        opts={{
          align: "start",
          loop: true,
          dragFree: true,
        }}
        className="w-full"
      >
        <CarouselContent className="">
          {heroCards.map((card) => (
            <CarouselItem key={card.title} className="basis-[48%]">
              <HeroCard {...card} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
