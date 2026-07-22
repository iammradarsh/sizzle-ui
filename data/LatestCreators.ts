export interface LatestCreator {
  id: number;

  image: string;

  name: string;

  description: string;

  following?: boolean;

  isNew: boolean;
}

export const latestCreators: LatestCreator[] = [
  {
    id: 1,

    image: "/images/latest-creators/1.png",

    name: "Valentina Cruz",

    description: "Curvy · Latina · Fashion",

    isNew: true,
  },

  {
    id: 2,

    image: "/images/latest-creators/2.png",

    name: "Amara Diallo",

    description: "Blonde · Athletic · Martial Arts",

    isNew: true,
  },

  {
    id: 3,

    image: "/images/latest-creators/3.png",

    name: "Hailey Storm",

    description: "Exotic · Brown Skin · Astrology",

    following: true,

    isNew: true,
  },

  {
    id: 4,

    image: "/images/latest-creators/4.png",

    name: "Priya Nair",

    description: "Thick · Mixed · Streetwear",

    isNew: true,
  },

  {
    id: 5,

    image: "/images/latest-creators/5.png",

    name: "Zoe Blackwood",

    description: "Redhead · Petite · Tattoos",

    isNew: true,
  },

  {
    id: 6,

    image: "/images/latest-creators/6.png",

    name: "Sienna Vale",

    description: "Slim · Brunette · Nightlife",

    isNew: true,
  },

  {
    id: 7,

    image: "/images/latest-creators/4.png",

    name: "Aria Voss",

    description: "Blonde · Petite · Fashion",

    isNew: true,
  },
];


