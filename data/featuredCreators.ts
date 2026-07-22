export interface FeaturedCreator {
  id: number;

  image: string;

  name: string;

  description: string;

  following?: boolean;
}

export const featuredCreators: FeaturedCreator[] = [
  {
    id: 1,

    image: "/images/featured-creators/1.png",

    name: "Bianca Torres",

    description: "Curvy · Latina · Lifestyle",
  },

  {
    id: 2,

    image: "/images/featured-creators/2.png",

    name: "Mila Ferreira",

    description: "Thick · Brunette · Fitness",
  },

  {
    id: 3,

    image: "/images/featured-creators/3.png",

    name: "Leila Okafor",

    description: "Ebony · Natural Hair · Dance",

    following: true,
  },

  {
    id: 4,

    image: "/images/featured-creators/4.png",

    name: "Aria Voss",

    description: "Blonde · Petite · Fashion",
  },

  {
    id: 5,

    image: "/images/featured-creators/5.png",

    name: "Selene Cruz",

    description: "Athletic · Mixed · Comedy",
  },

  {
    id: 6,

    image: "/images/featured-creators/6.png",

    name: "Naomi Saint",

    description: "Redhead · Curvy · Travel",
  },

  {
    id: 7,

    image: "/images/featured-creators/4.png",

    name: "Aria Voss",

    description: "Blonde · Petite · Fashion",
  },
];