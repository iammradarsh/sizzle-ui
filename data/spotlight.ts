export interface Spotlight {
  id: number;

  image: string;

  frame: string;

  overlayGradient: string;

  badgeType:
    | "fan-favorite"
    | "most-tipped"
    | "most-booked"
    | "top-earner";

  badge: string;

  badgeIcon: string;

  name: string;

  description: string;
}

export const spotlight: Spotlight[] = [
  {
    id: 1,

    image: "/images/spotlight/1.png",

    frame: "/images/spotlight/frame-blue.svg",

    overlayGradient:
      "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 20%, rgba(0, 94, 255, .90) 52%, rgba(1, 94, 254, 1) 100%)",

    badgeType: "fan-favorite",

    badge: "FAN FAVORITE",

    badgeIcon: "/images/icons/double-heart.svg",

    name: "MARLOWE\nFOX",

    description: "Brunette · Curvy · Lifestyle",
  },

  {
    id: 2,

    image: "/images/spotlight/2.png",

    frame: "/images/spotlight/frame-purple.svg",

    overlayGradient:
      "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0, 0, 0, 0) 20%, rgba(80, 34, 116, 0.9) 52%, rgba(80, 34, 116, 1) 100%)",

    badgeType: "most-tipped",

    badge: "MOST TIPPED",

    badgeIcon: "/images/icons/dollar.svg",

    name: "AMARA\nDIALLO",

    description: "Ebony · Curvy · Fashion",
  },

  {
    id: 3,

    image: "/images/spotlight/3.png",

    frame: "/images/spotlight/frame-orange.svg",

    overlayGradient:
      "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0, 0, 0, 0) 20%, rgba(120, 0, 22, 0.9) 52%, rgba(120, 0, 22, 1) 100%)",
    
    badgeType: "most-booked",

    badge: "MOST BOOKED",

    badgeIcon: "/images/icons/fire.svg",

    name: "STELLA\nNOVAK",

    description: "Blonde · Petite · Fashion",
  },

  {
    id: 4,

    image: "/images/spotlight/4.png",

    frame: "/images/spotlight/frame-green.svg",

    overlayGradient:
      "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0, 0, 0, 0) 20%, rgba(0, 156, 145, 0.9) 52%, rgba(0, 156, 145, 1) 100%)",
    
    badgeType: "top-earner",

    badge: "TOP EARNER",

    badgeIcon: "/images/icons/trophy.svg",

    name: "CAMILLE\nDEREN",

    description: "Ebony · Athletic · Lifestyle",
  },
  {
    id: 5,

    image: "/images/spotlight/4.png",

    frame: "/images/spotlight/frame-green.svg",

    overlayGradient:
      "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0, 0, 0, 0) 20%, rgba(0,156,145,.9) 52%, #009C91 100%)",

    badgeType: "top-earner",

    badge: "TOP EARNER",

    badgeIcon: "/images/icons/trophy.svg",

    name: "CAMILLE\nDEREN",

    description: "Ebony · Athletic · Lifestyle",
  },
];