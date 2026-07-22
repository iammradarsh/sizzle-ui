export interface Reel {
  id: number;

  mediaType: "image" | "gallery" | "video";

  images: string[];

  imageCount?: number;

  creatorLogo: string;

  avatar: string;

  title: string;

  creator: string;

  duration?: string;

  category: string;

  views: string;

  time: string;

  badge?: string;

  locked?: string;

  isPremium?: boolean;

  likes: number;

  comments: number;

  showCertified?: boolean;

  certifiedLogo?: string;

  certifiedFrame?: string;
}

export const reels: Reel[] = [
  {
    id: 1,

    mediaType: "video",

    images: ["/images/reels/reel1.png"],

    creatorLogo: "/images/logos/banana-joe.svg",

    avatar: "/images/avatars/priya.png",

    title: "The Workout That Has Everyone Going Absolutely Crazy",

    creator: "Baddie Bianca",

    duration: "HD 4:28",

    category: "#Cooking",

    views: "812 views",

    time: "2d",

    likes: 758,

    comments: 18,
  },

  {
    id: 2,

    mediaType: "gallery",

    images: [
      "/images/reels/2/1.png",
      "/images/reels/2/2.png",
      "/images/reels/2/3.png",
      "/images/reels/2/4.png",
      "/images/reels/2/5.png",
    ],

    imageCount: 18,

    creatorLogo: "/images/logos/megamind.svg",

    avatar: "/images/avatars/jonaorie.png",

    title: "I Tried The Morning Routine Every Influencer Swears By",

    creator: "Leila Castillo",

    category: "#Fitness",

    views: "812 views",

    time: "2d",

    badge: "New",

    locked: "/images/icons/lock.svg",

    likes: 758,

    comments: 18,
  },

  {
    id: 3,

    mediaType: "video",

    images: ["/images/reels/reel3.png"],

    creatorLogo: "/images/logos/megamind.svg",

    avatar: "/images/avatars/zara.png",

    title: "Getting Ready With Me For The Most Important Date Night",

    creator: "Zara Okonkwo",

    duration: "4K 6:03",

    category: "#Fitness",

    views: "812 views",

    time: "2d",

    likes: 758,

    comments: 18,
  },

  {
    id: 4,

    mediaType: "video",

    images: ["/images/reels/reel4.png"],

    creatorLogo: "/images/logos/dexter.svg",

    avatar: "/images/avatars/yara.png",

    title: "Raw And Unfiltered: What It Is Really Like Doing This For A Living",

    creator: "Yara Santos",

    duration: "4K 6:03",

    category: "#Lifestyle",

    views: "812 views",

    time: "2d",

    likes: 758,

    comments: 18,
  },

  {
    id: 5,

    mediaType: "video",

    images: ["/images/reels/reel5.png"],

    creatorLogo: "/images/logos/megamind.svg",

    avatar: "/images/avatars/priya.png",

    title: "Raw And Unfiltered: What It Is Really Like Doing This For A Living",

    creator: "Yara Santos",

    duration: "4K 6:03",

    category: "#Fitness",

    views: "812 views",

    time: "2d",

    likes: 758,

    comments: 18,
  },
];