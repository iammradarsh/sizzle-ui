export interface TopCreator {
  id: number;

  rank: number;

  image: string;

  badge: string;

  badgeIcon: string;

  name: string;

  description: string;
}

export const topCreators: TopCreator[] = [
  {
    id: 1,

    rank: 1,

    image: "/images/creators/top-creators/1.png",

    badge: "TOP RATED",

    badgeIcon: "/images/icons/top-rated.svg",

    name: "ASHLEY\nYUNG",

    description: "Ebony · Petite · Lifestyle",
  },

  {
    id: 2,

    rank: 2,

    image: "/images/creators/top-creators/2.png",

    badge: "FAN FAVORITE",

    badgeIcon: "/images/icons/favorite.svg",

    name: "CLEMENCE CRAVE",

    description: "Muscular · Tattooed · Fitness",
  },

  {
    id: 3,

    rank: 3,

    image: "/images/creators/top-creators/3.png",

    badge: "RISING FAST",

    badgeIcon: "/images/icons/rising.svg",

    name: "ASHLEY\nYUNG",

    description: "Blonde · Athletic · Fitness",
  },

  {
    id: 4,

    rank: 4,

    image: "/images/creators/top-creators/4.png",

    badge: "MOST TIPPED",

    badgeIcon: "/images/icons/dollar.svg",

    name: "ASHLEY\nYUNG",

    description: "Latina · Curvy · Dance",
  },
];