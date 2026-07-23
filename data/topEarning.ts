import { Reel } from "./reels";

export interface TopEarningReel extends Reel {
  rank: number;
}

export const topEarning: TopEarningReel[] = [
  {
    id: 1,

    rank: 1,

    mediaType: "image",

    images: ["/images/earning/1.png"],

    creatorLogo: "/images/logos/death-unicorn.svg",

    avatar: "/images/avatars/nadia.png",

    title: "What Happens When You Wake Up At 5AM For 21 Days Straight",

    creator: "Nadia Brooks",

    quality:"HD",

    duration: "4:28",

    category: "#Cooking",

    views: "812 views",

    time: "2d",

    likes: 758,

    comments: 18,
  },

  {
    id: 2,

    rank: 2,

    mediaType: "image",

    images: ["/images/earning/2.png"],

    creatorLogo: "/images/logos/creed.svg",

    avatar: "/images/avatars/yara.png",

    title: "I Tried Every Viral Food Trend So You Don't Have To",

    creator: "Tyler Voss",

    quality:"4K",

    duration: "6:03",

    category: "#Fitness",

    views: "812 views",

    time: "2d",

    likes: 758,

    comments: 18,
  },

  {
    id: 3,

    rank: 3,

    mediaType: "image",

    images: ["/images/earning/3.png"],

    creatorLogo: "/images/logos/007.svg",

    avatar: "/images/avatars/camille.png",

    title: "The Honest Truth About Being A Full Time Creator",

    creator: "Camille Deren",

    quality:"HD",

    duration: "4:28",

    category: "#Cooking",

    views: "812 views",

    time: "2d",

    badge: "New",

    locked: "/images/icons/lock.svg",

    likes: 758,

    comments: 18,
  },

  {
    id: 4,

    rank: 4,

    mediaType: "image",

    images: ["/images/earning/4.png"],

    creatorLogo: "/images/logos/ice-age.svg",

    avatar: "/images/avatars/marcus.png",

    title: "We Tested The Most Hyped Gym In The City And Here's What We Found",

    creator: "Marcus Reid",

    quality:"HD",

    duration: "4:28",

    category: "#Cooking",

    views: "812 views",

    time: "2d",

    likes: 758,

    comments: 18,
  },
];