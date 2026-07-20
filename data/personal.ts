export interface PersonalCreator {
  id: number;

  image: string;

  name: string;

  rating: number;

  reviews: number;

  responseTime: string;

  services: {
    title: string;
    price: string;
  }[];

  more: number;
}

export const personalCreators: PersonalCreator[] = [
  {
    id: 1,
    image: "/images/personal/1.jpg",
    name: "Jade Vixenxo",
    rating: 98,
    reviews: 135,
    responseTime: "24hr",
    services: [
      {
        title: "Video message",
        price: "$24.99",
      },
      {
        title: "Voice note",
        price: "$12.99",
      },
    ],
    more: 10,
  },

  {
    id: 2,
    image: "/images/personal/2.jpg",
    name: "Mia Storm",
    rating: 98,
    reviews: 135,
    responseTime: "24hr",
    services: [
      {
        title: "Custom video 1min",
        price: "$19.99",
      },
      {
        title: "3 custom pics",
        price: "$9.99",
      },
    ],
    more: 12,
  },

  {
    id: 3,
    image: "/images/personal/3.jpg",
    name: "Luna Belle",
    rating: 98,
    reviews: 135,
    responseTime: "24hr",
    services: [
      {
        title: "Worn items",
        price: "$49.99",
      },
      {
        title: "Custom pics",
        price: "$7.99",
      },
    ],
    more: 8,
  },

  {
    id: 4,
    image: "/images/personal/4.jpg",
    name: "Ruby Rose",
    rating: 98,
    reviews: 135,
    responseTime: "24hr",
    services: [
      {
        title: "Tribute task",
        price: "$14.99",
      },
      {
        title: "Custom video",
        price: "$39.99",
      },
    ],
    more: 5,
  },

  {
    id: 5,
    image: "/images/personal/5.jpg",
    name: "Angel Eyes",
    rating: 98,
    reviews: 135,
    responseTime: "24hr",
    services: [
      {
        title: "Rate me",
        price: "$17.99",
      },
      {
        title: "Custom audio",
        price: "$11.99",
      },
    ],
    more: 6,
  },

  {
    id: 6,
    image: "/images/personal/6.jpg",
    name: "Kitten Kait",
    rating: 98,
    reviews: 135,
    responseTime: "24hr",
    services: [
      {
        title: "Video message",
        price: "$19.99",
      },
      {
        title: "5 custom pics",
        price: "$9.99",
      },
    ],
    more: 15,
  },
];