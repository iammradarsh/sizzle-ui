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

    image: "/images/featured-creators/1.png",

    name: "Bianca Torres",

    description: "Curvy · Latina · Lifestyle",

    isNew: true,
  },

  {
    id: 2,

    image: "/images/featured-creators/2.png",

    name: "Mila Ferreira",

    description: "Thick · Brunette · Fitness",

    isNew: true,
  },

  {
    id: 3,

    image: "/images/featured-creators/3.png",

    name: "Leila Okafor",

    description: "Ebony · Natural Hair · Dance",

    following: true,

    isNew: true,
  },

  {
    id: 4,

    image: "/images/featured-creators/4.png",

    name: "Aria Voss",

    description: "Blonde · Petite · Fashion",

    isNew: true,
  },

  {
    id: 5,

    image: "/images/featured-creators/5.png",

    name: "Selene Cruz",

    description: "Athletic · Mixed · Comedy",

    isNew: true,
  },

  {
    id: 6,

    image: "/images/featured-creators/6.png",

    name: "Naomi Saint",

    description: "Redhead · Curvy · Travel",

    isNew: true,
  },
];


