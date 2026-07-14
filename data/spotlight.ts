export interface Spotlight {
  id: number;

  image: string;

  frame: string;

  overlayGradient: string;

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
      "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(24,87,255,.9) 55%, #1857FF 100%)",

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
      "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(126,55,231,.9) 55%, #7E37E7 100%)",

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
      "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(229,64,20,.9) 55%, #E54014 100%)",

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
      "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,156,145,.9) 55%, #009C91 100%)",

    badge: "TOP EARNER",

    badgeIcon: "/images/icons/trophy.svg",

    name: "CAMILLE\nDEREN",

    description: "Ebony · Athletic · Lifestyle",
  },
];