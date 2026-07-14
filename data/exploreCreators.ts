export interface ExploreCreator {
  id: number;

  avatar: string;

  name: string;

  description: string;

  highlight?: boolean;
}

export const creatorCategories = [
  "All",
  "#Cooking",
  "#Music",
  "#Lifestyle",
  "#Finance",
  "#Mindfulness",
  "#Gaming",
  "#Relationships",
  "#Travel",
  "#Motivation",
  "#Fitness",
  "#Skincare",
  "#Food",
];

export const exploreCreators: ExploreCreator[] = [
  {
    id: 1,
    avatar: "/images/avatars/baddie.png",
    name: "Baddie Bianca",
    description: "The tall blonde your algorithm keeps showing you",
  },

  {
    id: 2,
    avatar: "/images/avatars/yara.png",
    name: "Yara Santos",
    description: "Blue eyes and a personality that hits different",
  },

  {
    id: 3,
    avatar: "/images/avatars/rosa.png",
    name: "Rosa Vidal",
    description: "The nerdy one who turned out to be your favorite",
  },

  {
    id: 4,
    avatar: "/images/avatars/zara.png",
    name: "Zara Okonkwo",
    description: "Your favorite latina and you haven't even met me yet",
  },

  {
    id: 5,
    avatar: "/images/avatars/cleo.png",
    name: "Cleo Dubois",
    description: "The girl from the gym who finally made an account",
    highlight: true,
  },

  {
    id: 6,
    avatar: "/images/avatars/ines.png",
    name: "Ines Marchetti",
    description: "Curvy girl next door who actually responds",
  },

  {
    id: 7,
    avatar: "/images/avatars/leila.png",
    name: "Leila Castillo",
    description: "The ebony queen your friends are already subscribed to",
  },

  {
    id: 8,
    avatar: "/images/avatars/mila.png",
    name: "Mila Ferreira",
    description: "Thick thighs, good vibes and an accent you'll love",
  },

  {
    id: 9,
    avatar: "/images/avatars/luna.png",
    name: "Luna Perez",
    description: "If you like redheads with attitude you found her",
  },
];