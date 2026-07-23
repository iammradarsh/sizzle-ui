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
    image: "/images/HeroCardImg1.webp",
    badge: {
      type: "original",
      text: "ORIGINAL",
      icon: "/images/icons/SizzleLogo.svg",
      iconWidth: 35,
      iconHeight: 10,
    },
    movieLogo: "/images/movie2-logo.png",

    statType: "movie",

    movieStats: {
      quality: "4K",
      duration: "6:03",
      tag: "#Beauty",
    },

    category: "",
    title: "ADELA\nMORALES",

    description:
      "Seems like you have found a LUCKY POST on your feed 💖😊 today is gonna be a good ...",
    creator: "Adela Morales",
    creatorViews: "812 views",
    time: "2d",
  },

  {
    image: "/images/HeroCardImg2.webp",
    badge: {
      type: "top-earner",
      text: "TOP EARNER",
      icon: "/images/icons/trophy.svg",
      iconWidth: 12,
      iconHeight: 12,
    },
    movieLogo: "/images/movie-logo.png",

    statType: "creator",

    creatorStats: {
      views: 480,
      videos: 26,
      likes: 780,
    },

    category: "",
    title: "SAINT\nLAVIGNE",

    description:
      "Life got so serious lately, I have almost forgot I used to paint 😅 may this post will be a ...",
    creator: "Saint Lavigne",
    creatorViews: "812 views",
    time: "2d",
  },

  {
    image: "/images/HeroCardImg1.webp",
    badge: {
      type: "original",
      text: "ORIGINAL",
      icon: "/images/icons/SizzleLogo.svg",
      iconWidth: 35,
      iconHeight: 10,
    },
    movieLogo: "/images/movie-logo.png",

    statType: "creator",

    creatorStats: {
      views: 480,
      videos: 26,
      likes: 780,
    },

    category: "",
    title: "SAINT",

    description:
      "Seems like you have found a LUCKY POST on your feed 💖😊 today is gonna be a good ...",
    creator: "Saint Lavigne",
    creatorViews: "812 views",
    time: "2d",
  },
  {
    image: "/images/HeroCardImg2.webp",
    badge: {
      type: "top-earner",
      text: "TOP EARNER",
      icon: "/images/icons/trophy.svg",
      iconWidth: 12,
      iconHeight: 12,
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

    description:
      "Life got so serious lately, I have almost forgot I used to paint 😅 may this post will be a ...",
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
            <CarouselItem key={card.title} className="basis-auto shrink-0">
              <HeroCard {...card} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
