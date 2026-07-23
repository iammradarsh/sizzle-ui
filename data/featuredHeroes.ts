import { Reel } from "./reels";

export interface FeaturedHeroData  {
  id: number;

  background: string;

  creatorLogo: string;

  title: string;

  description: string;

  reels: Reel[];
}

export const featuredHeroes: FeaturedHeroData[] = [
  {
    id: 1,

    background: "/images/featured/background.png",

    creatorLogo: "/images/logos/clueless.svg",

    title: "GEORGINA LONDON",

    description: "Curvy • Nerdy • Playful",

    reels: [
      {
        id: 1,
        mediaType: "image",
        images: ["/images/featured/reel1.png"],
        creatorLogo: "/images/logos/clueless.png",
        avatar: "/images/avatars/moana.png",
        title: "I Spent 24 Hours In The Most Expensive Hotel Suite",
        creator: "Georgina London",
        duration: "4K 6:03",
        category: "#Fitness",
        views: "812 views",
        time: "2d",
        likes: 758,
        comments: 18,
      },
      {
        id: 2,
        mediaType: "image",
        images: ["/images/featured/reel2.png"],
        creatorLogo: "/images/logos/clueless.png",
        avatar: "/images/avatars/moana.png",
        title: "Rating Every Viral Food Trend So You Don't Have To",
        creator: "Georgina London",
        duration: "4K 6:03",
        category: "#Fitness",
        views: "812 views",
        time: "2d",
        likes: 758,
        comments: 18,
      },
      {
        id: 3,
        mediaType: "image",
        images: ["/images/featured/reel3.png"],
        creatorLogo: "/images/logos/clueless.png",
        avatar: "/images/avatars/moana.png",
        title: "The Morning Routine That Actually Changed My Life",
        creator: "Georgina London",
        duration: "4K 6:03",
        category: "#Fitness",
        views: "812 views",
        time: "2d",
        likes: 758,
        comments: 18,
      },
      {
        id: 4,
        mediaType: "image",
        images: ["/images/featured/reel1.png"],
        creatorLogo: "/images/logos/clueless.png",
        avatar: "/images/avatars/moana.png",
        title: "The Morning Routine That Actually Changed My Life",
        creator: "Georgina London",
        duration: "4K 6:03",
        category: "#Fitness",
        views: "812 views",
        time: "2d",
        likes: 758,
        comments: 18,
      },
    ],
  },

  {
    id: 2,

    // Abhi same assets use kar rahe hain
    background: "/images/featured/background2.png",

    creatorLogo: "/images/logos/Der-Ex.svg",

    title: "ZURI LAURENT",

    description: "Ebony • Thick • Flirty",

    reels: [
      {
        id: 1,
        mediaType: "image",
        images: ["/images/featured/4.png"],
        creatorLogo: "/images/logos/clueless.png",
        avatar: "/images/avatars/moana.png",
        title: "I Spent 24 Hours In The Most Expensive Hotel Suite",
        creator: "Zuri Laurent",
        duration: "4K 6:03",
        category: "#Fitness",
        views: "812 views",
        time: "2d",
        likes: 758,
        comments: 18,
      },
      {
        id: 2,
        mediaType: "image",
        images: ["/images/featured/5.png"],
        creatorLogo: "/images/logos/clueless.png",
        avatar: "/images/avatars/moana.png",
        title: "Rating Every Viral Food Trend So You Don't Have To",
        creator: "Zuri Laurent",
        duration: "4K 6:03",
        category: "#Fitness",
        views: "812 views",
        time: "2d",
        likes: 758,
        comments: 18,
      },
      {
        id: 3,
        mediaType: "image",
        images: ["/images/featured/6.png"],
        creatorLogo: "/images/logos/clueless.png",
        avatar: "/images/avatars/moana.png",
        title: "The Morning Routine That Actually Changed My Life",
        creator: "Zuri Laurent",
        duration: "4K 6:03",
        category: "#Fitness",
        views: "812 views",
        time: "2d",
        likes: 758,
        comments: 18,
      },
      {
        id: 4,
        mediaType: "image",
        images: ["/images/featured/4.png"],
        creatorLogo: "/images/logos/clueless.png",
        avatar: "/images/avatars/moana.png",
        title: "The Morning Routine That Actually Changed My Life",
        creator: "Zuri Laurent",
        duration: "4K 6:03",
        category: "#Fitness",
        views: "812 views",
        time: "2d",
        likes: 758,
        comments: 18,
      },
    ],
  },
];