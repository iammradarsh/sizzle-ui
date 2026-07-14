export interface BuyerReview {
  id: number;

  avatar: string;

  name: string;

  username: string;

  time: string;

  rating: number;

  review: string;

  creatorAvatar: string;

  tags: string[];
}

export const buyerReviews: BuyerReview[] = [
  {
    id: 1,

    avatar: "/images/reviews/user1.png",

    name: "Elias Whitfield",

    username: "@Deja Monroe",

    time: "23m ago",

    rating: 5,

    review:
      "Honestly didn't even need the 10 minutes. She got me in 4 😂 Knew exactly what I wanted, like she read my mind before I even said anything...show more",

    creatorAvatar: "/images/reviews/creator1.png",

    tags: ["5 custom pics", "Video message"],
  },

  {
    id: 2,

    avatar: "/images/reviews/user2.png",

    name: "Dario Mancini",

    username: "@Marlowe Fox",

    time: "1h ago",

    rating: 4,

    review:
      "Took about a day longer than I expected but once it landed it was worth the wait honestly. The video felt genuine, not scripted at all, like she ... show more",

    creatorAvatar: "/images/reviews/creator2.png",

    tags: ["8 custom pics", "Voice note", "+1"],
  },

  {
    id: 3,

    avatar: "/images/reviews/user3.png",

    name: "Wesley Carrow",

    username: "@Lux Devereaux",

    time: "12h ago",

    rating: 3,

    review:
      "Content quality was actually really good once it arrived, my only issue was the wait time, almost 24 hours for a reply which felt long compared to others.",

    creatorAvatar: "/images/reviews/creator3.png",

    tags: ["Hype video for an event"],
  },

  {
    id: 4,

    avatar: "/images/reviews/user4.png",

    name: "Bryce Donahue",

    username: "@Valentina Cross",

    time: "18h ago",

    rating: 5,

    review:
      "This felt less like a paid transaction and more like an actual conversation with someone. Definitely getting it right, she even followed up.",

    creatorAvatar: "/images/reviews/creator4.png",

    tags: ["Birthday shoutout"],
  },
];