export interface CreatorHighlight {
  id: number;

  avatar: string;

  name: string;

  views: string;

  videos: string;

  likes: string;

  following?: boolean;

  images: string[];

  viewIcon: string;

videoIcon: string;

likeIcon: string;
}

export const creatorHighlights: CreatorHighlight[] = [
  {
    id: 1,

    avatar: "/images/highlights/avatar-1.png",

    name: "Nadia Brooks",

    views: "3.4K",

    videos: "158",

    likes: "2.1K",

    images: [
      "/images/highlights/1-1.png",
      "/images/highlights/1-2.png",
      "/images/highlights/1-3.png",
    ],

    viewIcon: "/images/icons/gallery-grey.svg",

videoIcon: "/images/icons/play-grey.svg",

likeIcon: "/images/icons/crown-grey.svg",
  },

  {
    id: 2,

    avatar: "/images/highlights/avatar-2.png",

    name: "Zara Okonkwo",

    views: "480",

    videos: "26",

    likes: "780",

    images: [
      "/images/highlights/2-1.png",
      "/images/highlights/2-2.png",
      "/images/highlights/2-3.png",
    ],

    viewIcon: "/images/icons/gallery-grey.svg",

videoIcon: "/images/icons/play-grey.svg",

likeIcon: "/images/icons/crown-grey.svg",
  },

  {
    id: 3,

    avatar: "/images/highlights/avatar-3.png",

    name: "Deja Monroe",

    views: "1.8K",

    videos: "420",

    likes: "6.2K",

    images: [
      "/images/highlights/3-1.png",
      "/images/highlights/3-2.png",
      "/images/highlights/3-3.png",
    ],
    viewIcon: "/images/icons/gallery-grey.svg",

videoIcon: "/images/icons/play-grey.svg",

likeIcon: "/images/icons/crown-grey.svg",
  },

  {
    id: 4,

    avatar: "/images/highlights/avatar-4.png",

    name: "Aaliyah Moore",

    views: "620",

    videos: "42",

    likes: "1.3K",

    images: [
      "/images/highlights/4-1.png",
      "/images/highlights/4-2.png",
      "/images/highlights/4-3.png",
    ],
    viewIcon: "/images/icons/gallery-grey.svg",

videoIcon: "/images/icons/play-grey.svg",

likeIcon: "/images/icons/crown-grey.svg",
  },
];