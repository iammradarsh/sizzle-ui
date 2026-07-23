import { Reel } from "./reels";

export interface TopTippedReel extends Reel {
  rank: number;


}

export const topTipped: TopTippedReel[] = [
  {
    id: 1,

    rank: 1,

    mediaType: "image",

    images: ["/images/reels/reel5.png"],

    creatorLogo: "/images/logos/marley-and-me.svg",

    avatar: "/images/avatars/finn.png",

    title: "I Quit Social Media For 30 Days And It Changed Everything",

    creator: "Priya Nalani",

    quality: "HD",

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

    images: ["/images/reels/reel6.png"],

    creatorLogo: "/images/logos/mamma-mia.svg",

    avatar: "/images/avatars/deja.png",

    title: "Rating Every Coffee Shop In The City As A Specialty Coffee Addict",

    creator: "Finn Holloway",

    category: "#Fitness",

    quality: "4K",

    duration: "6:03",

    views: "812 views",

    isPremium: true,


    time: "2d",

    likes: 758,

    comments: 18,
  },

  {
    id: 3,

    rank: 3,

    mediaType: "image",

    images: ["/images/reels/reel7.png"],

    creatorLogo: "/images/logos/machete.svg",

    avatar: "/images/avatars/priya2.png",

    title: "The Morning Routine Nobody Talks About But Everyone Should Try",

    creator: "Deja Monroe",
    
    quality: "4K",

    duration: "6:03",

    category: "#Cooking",

    views: "812 views",

    time: "2d",

    likes: 758,

    comments: 18,
  },

  {
    id: 4,

    rank: 4,

    mediaType: "video",

    images: ["/images/reels/reel8.png"],

   creatorLogo: "/images/logos/moana.svg",

    avatar: "/images/avatars/luca.png",

    title: "We Surprised Our Biggest Fan With Their Dream Day",

    creator: "Luca Ferretti",

    quality: "HD",

    duration: "4:55",

    category: "#Fitness",

    views: "812 views",

    time: "2d",

    likes: 758,

    comments: 18,
  },
  {
    id: 5,

    rank: 5,

    mediaType: "gallery",

    images: [
      "/images/reels/2/1.png",
      "/images/reels/2/2.png",
      "/images/reels/2/3.png",
      "/images/reels/2/4.png",
      "/images/reels/2/5.png",
    ],

    imageCount: 18,

    creatorLogo: "/images/logos/mamma-mia.svg",

    avatar: "/images/avatars/deja.png",

    title: "Rating Every Coffee Shop In The City As A Specialty Coffee Addict",

    creator: "Finn Holloway",

    category: "#Fitness",

    views: "812 views",

    time: "2d",

    badge: "New",

    locked: "/images/icons/lock.svg",

    likes: 758,

    comments: 18,
  },
];