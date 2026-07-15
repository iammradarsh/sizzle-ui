"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import HeroCard, { type HeroCardProps } from "../cards/Hero/HeroCard";
import WheelGesturesPlugin from "embla-carousel-wheel-gestures";

const heroCards: HeroCardProps[] = [
  {
    image: "/images/HeroCardImg1.png",
    badge: {
      text: "ORIGINAL",
      icon: "/images/icons/SizzleLogo.svg",
      iconWidth: 30,
      iconHeight: 8,
    },
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
    badge: {
      text: "TOP EARNER",
      icon: "/images/icons/trophy.svg",
      iconWidth: 14,
      iconHeight: 14,
    },
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
    badge: {
      text: "MOST WATCHED",
      icon: "/images/icons/double-heart.svg",
      iconWidth: 14,
      iconHeight: 14,
    },
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
        plugins={[WheelGesturesPlugin()]}
        opts={{
          align: "start",
          loop: true,
          dragFree: true,
        }}
        className="w-full"
      >
        <CarouselContent className="touch-pan-x">
          {heroCards.map((card) => (
            <CarouselItem key={card.title} className="basis-[48%] shrink-0">
              <HeroCard {...card} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
